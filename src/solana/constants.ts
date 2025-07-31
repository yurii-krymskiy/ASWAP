import { PublicKey } from "@solana/web3.js";
import * as anchor from "@coral-xyz/anchor";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { BN } from "@coral-xyz/anchor";
import { PROGRAM_ID } from "../hooks/useEscrowProgram";
import { Buffer } from "buffer";

export const USDC_MINT = new PublicKey(
  "Gh9ZwEmdLJ8DscKNTkTqPbNwLNNBjuSzaG9Vp2KGtKJr" 
);

export function pdaEscrowOffer(
  seller: PublicKey,
  dealIdBn: anchor.BN
): [PublicKey, number] {
  
  return PublicKey.findProgramAddressSync(
    [Buffer.from("escrow_offer"), seller.toBuffer(), dealIdBn.toArrayLike(Buffer, "le", 8)],
    PROGRAM_ID
  );
}
export function pdaEscrow(
  seller: PublicKey,
  buyer:  PublicKey,
  dealId: BN,
  programId: PublicKey,
): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [
      Buffer.from("escrow"),
      seller.toBuffer(),
      buyer.toBuffer(),
      dealId.toArrayLike(Buffer, "le", 8),
    ],
    programId,
  );
}

export function pdaVaultAuthority(escrowPda: PublicKey): [PublicKey, number] {
  return PublicKey.findProgramAddressSync(
    [Buffer.from("vault_authority"), escrowPda.toBuffer()],
    PROGRAM_ID
  );
}

export { TOKEN_PROGRAM_ID };

export const ADMIN_PUBKEY = new PublicKey(
  "FP31fp4XFN4Hp1QgUM2xfLKJPM4cRtJRxf3bbJN1KUbZ"
);