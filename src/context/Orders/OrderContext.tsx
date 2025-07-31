import { createContext } from "use-context-selector";
import type { Order } from "./OrderProvider";

export interface OrdersContextType {
  orders: Order[] | null;
  setOrders: (v: Order[] | null) => void;
  side: string;
  setSide: (v: string) => void
}

export const OrdersContext = createContext<OrdersContextType>({} as OrdersContextType);
