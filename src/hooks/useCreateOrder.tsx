import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BN } from "@coral-xyz/anchor";
import {
  createAssociatedTokenAccountInstruction,
  getAssociatedTokenAddress,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import { SystemProgram, Transaction, type TransactionSignature } from "@solana/web3.js";
import { useEscrowProgram } from "./useEscrowProgram";
import { pdaEscrowOffer, pdaVaultAuthority } from "../solana/constants";
import { usePlaceOrder } from "../context/PlaceOrder/usePlaceOrder";
import { TOKENS } from "../context/PlaceOrder/PlaceOrderProvider";

export const ESCROW_STATUS = {
  PendingOnChain: 0,
  OnChain: 1,
  PartiallyOnChain: 2,
  Singing: 3,
  SignedByOneSide: 4,
  Released: 5,
  Cancelled: 6,
} as const;

export type EscrowStatus = typeof ESCROW_STATUS[keyof typeof ESCROW_STATUS];

const useCreateOrder = () => {
  const {
    side,
    fiat,
    asset,
    totalAmount,
    price,
    fiatMin,
    fiatMax,
  } = usePlaceOrder(v => v);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const program = useEscrowProgram();

  const handleSubmit = async () => {
    setIsSubmitting(true);
    if (!program) {
      alert("Program not ready");
      setIsSubmitting(false);
      return;
    }
    try {
      const tok = TOKENS.find(t => t.value === asset.code.toLowerCase())!;
      const mint = tok.mint;

      const amountF = parseFloat(totalAmount);
      const priceF = parseFloat(price);
      const minF = parseFloat(fiatMin);
      const maxF = parseFloat(fiatMax);

      if (!amountF || amountF <= 0) {
        alert("Enter a valid crypto amount");
        setIsSubmitting(false);
        return;
      }
      if (!priceF || priceF <= 0) {
        alert("Enter a valid price");
        setIsSubmitting(false);
        return;
      }
      // Validate range
      if (!minF || !maxF || minF <= 0 || maxF <= 0 || minF >= maxF) {
        alert("Specify a valid fiat range (min < max)");
        setIsSubmitting(false);
        return;
      }
      const dealIdBn = new BN(Date.now());

      if (side === "I want to buy") {
        const res = await fetch("https://a-swap.xyz/api/platform/create-buyer-createOrder", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            orderId: Number(dealIdBn.toString()),
            orderType: 1,
            tokenMint: tok.mint.toBase58(),
            price: priceF * 100,
            minFiatAmount: minF,
            maxFiatAmount: maxF,
            status: ESCROW_STATUS.PendingOnChain,
            buyer: program.provider.publicKey!.toBase58(),
            fiatCode: fiat.code,
            amount: amountF * 1000000,
          }),
        });
        if (!res.ok) throw new Error(await res.text());
        navigate("/");
        return;
      }

      const amountBn = new BN(Math.round(amountF * 10 ** tok.decimals));
      const priceBn = new BN(Math.round(priceF * 100));
      const wallet = program.provider.publicKey!;

      const [escrowPda] = pdaEscrowOffer(wallet, dealIdBn);
      const [vaultAuthPda] = pdaVaultAuthority(escrowPda);
      const sellerTokenAcc = await getAssociatedTokenAddress(mint, wallet);
      const vaultTokenAcc = await getAssociatedTokenAddress(mint, vaultAuthPda, true);

      const tx = new Transaction();
      const vaultInfo = await program.provider.connection.getAccountInfo(vaultTokenAcc);
      if (!vaultInfo) tx.add(createAssociatedTokenAccountInstruction(wallet, vaultTokenAcc, vaultAuthPda, mint));
      const OFFER_TYPE =
        side === "sell" ? { sell: {} } : { buy: {} };
      const ix = await program.methods
        .initializeOffer(
          amountBn,
          mint,
          fiat.code,
          priceBn,
          dealIdBn,
          OFFER_TYPE,
        )
        .accounts({
          escrowAccount: escrowPda,
          sellerTokenAccount: sellerTokenAcc,
          vaultAccount: vaultTokenAcc,
          seller: wallet,
          tokenProgram: TOKEN_PROGRAM_ID,
          systemProgram: SystemProgram.programId,
        }).instruction();
      tx.add(ix);

      const POLLING_INTERVAL_MS = 1000;
      const MAX_POLLING_ATTEMPTS = 20;

      const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

      const sig: TransactionSignature = await program.provider.sendAndConfirm!(tx, [], { skipPreflight: true });
      await program.provider.connection.confirmTransaction(
        {
          signature: sig,
          blockhash: (await program.provider.connection.getLatestBlockhash("finalized")).blockhash,
          lastValidBlockHeight: (await program.provider.connection.getLatestBlockhash("finalized")).lastValidBlockHeight,
        },
        "finalized"
      );

      async function checkBackendForOrder(orderId: number) {
        const res = await fetch(`https://a-swap.xyz/api/platform/check-order-status/${orderId}`);
        if (res.status === 404) return false;
        if (!res.ok) throw new Error(await res.text());
        const data = await res.json();
        return data.isConfirmed === orderId;
      }

      let attempts = 0;
      let backendConfirmed = false;


      while (attempts < MAX_POLLING_ATTEMPTS) {
        backendConfirmed = await checkBackendForOrder(Number(dealIdBn.toString()));
        if (backendConfirmed) break;

        attempts++;
        await delay(POLLING_INTERVAL_MS);
      }

      if (!backendConfirmed) {
        throw new Error("Backend did not confirm the transaction in time.");
      }
      const backendRes = await fetch("https://a-swap.xyz/api/platform/update-offers", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          orderId: Number(dealIdBn.toString()),
          minFiatAmount: minF,
          maxFiatAmount: maxF,
          status: ESCROW_STATUS.OnChain
        }),
      });
      if (!backendRes.ok)
        throw new Error(await backendRes.text());

      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Error: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { handleSubmit, isSubmitting };
};

export default useCreateOrder;
