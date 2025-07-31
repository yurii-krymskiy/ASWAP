import React, { useState } from "react";
import { OrdersContext } from "./OrderContext";

interface OrdersProviderProps {
  children: React.ReactNode;
}

export interface Order {
  id: string;
  escrowPda: string;
  dealId: number;
  sellerCrypto: string;
  buyerFiat: string | null;
  tokenMint: string;
  fiatCode: string;
  amount: number;
  filledQuantity: number;
  price: number;
  status: number;
  createdAtUtc: string;
  closedAtUtc: string | null;
  offerSide: number;
  minFiatAmount: number;
  maxFiatAmount: number;
}

export const OrdersProvider: React.FC<OrdersProviderProps> = ({ children }) => {
  const [orders, setOrders] = useState<Order[] | null>(null);
  const [side, setSide] = useState<string>("Buy");

  const contextValue = {
    orders,
    setOrders,
    side,
    setSide
  };

  return (
    <OrdersContext.Provider value={contextValue}>
      {children}
    </OrdersContext.Provider>
  );
};
