import type { WalletName } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCallback, useEffect, useState } from "react";

const useAuth = () => {
  const { publicKey, connected, connect, disconnect, select, wallet } = useWallet();
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

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
      setWalletAddress(publicKey?.toBase58());
    }
  }, [publicKey]);

  return {
    wallet,
    publicKey,
    connected,
    connectWallet,
    disconnectWallet,
    walletAddress
  };
};

export default useAuth;
