import { createContext } from "use-context-selector";

export interface UserContextType {
  wallet: string;
  nonce: string | null;
  error: string | null;
  setWallet: (v: string) => void;
  setNonce: (v: string) => void;
  setError: (v: string) => void;
}

export const UserContext = createContext<UserContextType>({} as UserContextType);
