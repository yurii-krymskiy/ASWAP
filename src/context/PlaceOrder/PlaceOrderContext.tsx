import { createContext } from "use-context-selector";
import type { Coin } from "./PlaceOrderProvider";

export interface PlaceOrderContextType {
  side: string;
  setSide: (v: string) => void;

  asset: Coin;
  setAsset: (v: Coin) => void;

  fiat: Coin;
  setFiat: (v: Coin) => void;

  priceType: string;
  setPriceType: (v: string) => void;
  price: string;
  setPrice: (v: string) => void;

  totalAmount: string;
  setTotalAmount: (v: string) => void;
  fiatMin: string;
  setFiatMin: (v: string) => void;
  fiatMax: string;
  setFiatMax: (v: string) => void;
  paymentMethod: string[];
  setPaymentMethod: (v: string[]) => void;
  paymentTimeLimit: string;
  setPaymentTimeLimit: (v: string) => void;

  tags: string[];
  setTags: (v: string[]) => void;
  refferals: string;
  setRefferals: (v: string) => void;
  autoReply: string;
  setAutoReply: (v: string) => void;
  regions: string;
  setRegions: (v: string) => void;
  counterParty: boolean;
  setCounterParty: (v: boolean) => void;
  holdings: boolean;
  setHoldings: (v: boolean) => void;
}


export const PlaceOrderContext = createContext<PlaceOrderContextType>({} as PlaceOrderContextType);
