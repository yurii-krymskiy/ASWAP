import React, { useState } from "react";
import { UserContext } from "./UserContext";

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [wallet, setWallet] = useState<string>("");
  const [nonce, setNonce] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const contextValue = {
    wallet,
    setWallet,
    nonce,
    setNonce,
    error,
    setError,
  };

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
