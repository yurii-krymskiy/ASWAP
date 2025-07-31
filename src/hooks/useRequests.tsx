import axios from "axios";
import Cookies from "js-cookie";
import { useUser } from "../context/User/useUser";
import { useWallet } from "@solana/wallet-adapter-react";
import bs58 from "bs58";
import { parseRefreshTokenExpiry } from "../utils/parseRefreshTokenExpiry";
import { setAccessTokenCookie } from "../utils/setAccessTokenCookie";

const useRequests = () => {
  const { publicKey, signMessage } = useWallet();
  const nonce = useUser(v => v.nonce);

  const setNonce = useUser(v => v.setNonce);
  const setError = useUser(v => v.setError);

  const fetchNonce = async () => {
    try {
      if (!publicKey) return;

      const { data } = await axios.get("https://a-swap.xyz/api/auth/nonce", {
        params: {
          wallet: publicKey.toBase58(),
        },
      });
      setNonce(data?.nonce);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch nonce");
    }
  };

  const fetchAuth = async () => {
    if (!publicKey || !signMessage || !nonce) {
      setError("Wallet not connected or nonce missing");
      return;
    }

    try {
      const message = new TextEncoder().encode(nonce);
      const signature = await signMessage(message);

      const body = {
        network: "sol",
        wallet: publicKey.toBase58(),
        nonce,
        signature: bs58.encode(signature),
      };

      const response = await axios.post("https://a-swap.xyz/api/auth", body);
      const { accessToken, refreshToken, expiresAt } = response.data;

      const refreshExpiryDate = parseRefreshTokenExpiry(refreshToken);

      setAccessTokenCookie(accessToken, expiresAt);

      if (refreshExpiryDate) {
        setAccessTokenCookie(refreshToken, refreshExpiryDate);
      }
    } catch (err) {
      console.error("Auth failed:", err);
      setError("Authorization failed");
    }
  };

  const refreshAccessToken = async () => {
    const refreshToken = Cookies.get("refreshToken");
    if (!refreshToken) {
      setError("Refresh token not found");
      return;
    }

    try {
      const response = await axios.post("https://a-swap.xyz/api/auth/refresh", {
        refreshToken,
      });

      const { accessToken, expiresAt } = response.data;

      setAccessTokenCookie(accessToken, expiresAt);
    } catch (err) {
      console.error("Token refresh failed", err);
      setError("Token refresh failed");
    }
  };

  return {
    fetchNonce,
    fetchAuth,
    refreshAccessToken,
  };
};

export default useRequests;
