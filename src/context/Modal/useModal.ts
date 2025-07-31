import { useContextSelector } from "use-context-selector";
import { ModalContext, type ModalContextType } from "./ModalContext";

export const useModal = <T, >(selector: (context: ModalContextType) => T): T => {
  const value = useContextSelector(ModalContext, selector);
  
  if (value === undefined) {
    throw new Error("useModal must be used within ModalProvider");
  }
  
  return value;
};

