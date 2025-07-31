import { useContextSelector } from "use-context-selector";
import { UserContext, type UserContextType } from "./UserContext";

export const useUser = <T, >(selector: (context: UserContextType) => T): T => {
  const value = useContextSelector(UserContext, selector);
  
  if (value === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  
  return value;
};

