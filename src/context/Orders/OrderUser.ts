import { useContextSelector } from "use-context-selector";
import { OrdersContext, type OrdersContextType } from "./OrderContext";

export const useOrders = <T, >(selector: (context: OrdersContextType) => T): T => {
  const value = useContextSelector(OrdersContext, selector);
  
  if (value === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }
  
  return value;
};

