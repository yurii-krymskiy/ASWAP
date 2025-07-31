import { useContextSelector } from "use-context-selector";
import { PlaceOrderContext, type PlaceOrderContextType } from "./PlaceOrderContext";

export const usePlaceOrder = <T, >(selector: (context: PlaceOrderContextType) => T): T => {
  const value = useContextSelector(PlaceOrderContext, selector);
  
  if (value === undefined) {
    throw new Error("Error");
  }
  
  return value;
};

