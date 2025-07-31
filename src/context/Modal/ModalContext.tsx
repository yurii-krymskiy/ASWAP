import { createContext } from "use-context-selector";
import type { Coin } from "../PlaceOrder/PlaceOrderProvider";

export type ModalType =
  | "selectCoin"
  | "selectFiat"
  | "paymentMethods"
  | "filterSwap"
  | "filterOrders"
  | "filterAds"
  | "filterBuyCrypto"
  | null;

export type ModalProps =
  | { setValue: (v: string | Coin) => void }
  | { setValues: (v: string[]) => void }
  | Record<string, unknown>;

export type ModalData =
  | { type: "selectCoin" | "selectFiat"; props: { setValue: (v: string | Coin) => void } }
  | { type: "paymentMethods"; props: { setValues: (v: string[]) => void } }
  | { type: "filterSwap" | "filterOrders" | "filterAds" | "filterBuyCrypto"; props: Record<string, unknown> }
  | { type: null };

export type ModalContextType = {
  openModal: (type: ModalType, props?: ModalProps) => void;
  closeModal: () => void;
};

export const ModalContext = createContext<ModalContextType>({} as ModalContextType);
