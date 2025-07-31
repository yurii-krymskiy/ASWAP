import { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import idl from "../json/ddd.json"; 
import type { Idl } from "@coral-xyz/anchor";
export default idl as Idl;
export const PROGRAM_ID = new PublicKey(
  "4XWhHXw15XFHu4LviKKgqvz8DqR9jFb8t8uTwTWALUkv"
);

export function useEscrowProgram() {
  const { connection } = useConnection();
  const wallet = useWallet();
  const [program, setProgram] = useState<anchor.Program<Idl> | null>(null);

  useEffect(() => {

    console.log("wallet:", wallet);

    if (!wallet.connected || !wallet.publicKey || !wallet.signTransaction) {
      setProgram(null);
      return;
    }

    const provider = new anchor.AnchorProvider(
      connection as Connection,
      wallet as unknown as anchor.Wallet,
      { commitment: "confirmed" }
    );

    const prog = new anchor.Program(idl as anchor.Idl, provider);
    setProgram(prog);
  }, [connection, wallet]);

  return program;
}