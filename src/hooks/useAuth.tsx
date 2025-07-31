import type { WalletName } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useEffect } from "react";
import { useUser } from "../context/User/useUser";
import useRequestsAuth from "./useRequestsAuth";

const useAuth = () => {
  const { publicKey, connected, connect, disconnect, select, wallet } = useWallet();
  const { fetchNonce, fetchAuth } = useRequestsAuth();

  const setWalletAddress = useUser(v => v.setWallet);
  const nonce = useUser(v => v.nonce);

  const connectWallet = useCallback(async () => {
    try {
      if (!wallet) {
        select("Phantom" as WalletName);
      }
      await connect();
    } catch (error) {
      console.error("Wallet connection error:", error);
    }
  }, [connect, select, wallet]);

  const disconnectWallet = useCallback(async () => {
    try {
      await disconnect();
    } catch (error) {
      console.error("Wallet disconnect error:", error);
    }
  }, [disconnect]);

  useEffect(() => {
    if (publicKey) {
      setWalletAddress(publicKey.toBase58());
      fetchNonce();
    }
  }, [publicKey]);

  useEffect(() => {
    if (nonce) {
      fetchAuth();
    }
  }, [nonce]);

  return {
    wallet,
    publicKey,
    connected,
    connectWallet,
    disconnectWallet,
  };
};

export default useAuth;
