import { useState, type ReactNode } from "react";
import { ModalContext, type ModalData, type ModalProps, type ModalType } from "./ModalContext";
import CustomModalWrapper from "../../components/ui/CustomModalWrapper";
import PlaceOrderModal from "../../components/features/PlaceOrderModal";
import SwapFilterPanel from "../../pages/Swap/components/SwapFilterPanel";
import FilterPanelAds from "../../pages/MyAccount/components/FilterPanelAds";
import FilterPanelOrders from "../../pages/MyAccount/components/FilterPanelOrders";
import PaymentMethodsModal from "../../pages/P2P/components/PaymentMethodsModal";
import coins from "../../json/coins.json";
import currency from "../../json/currency.json";
import type { Coin } from "../PlaceOrder/PlaceOrderProvider";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [modalData, setModalData] = useState<ModalData | { type: null }>({ type: null });

  const openModal = (type: ModalType, props: ModalProps = {}) => {
    setModalData({ type, props } as ModalData); 
  };

  const closeModal = () => {
    setModalData({ type: null });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      <CustomModalWrapper isOpen={!!modalData.type} onClose={closeModal}>
        {modalData.type === "selectCoin" && (
          <PlaceOrderModal
            list={coins}
            setValue={(modalData.props as { setValue: (v: string | Coin) => void }).setValue}
            onClose={closeModal}
          />
        )}
        {modalData.type === "selectFiat" && (
          <PlaceOrderModal
            list={currency}
            setValue={(modalData.props as { setValue: (v: string | Coin) => void }).setValue}
            onClose={closeModal}
          />
        )}
        {modalData.type === "filterSwap" && <SwapFilterPanel />}
        {modalData.type === "filterOrders" && <FilterPanelOrders />}
        {modalData.type === "filterAds" && <FilterPanelAds />}
        {modalData.type === "filterBuyCrypto" && <div>TODO: Add FilterBuyCrypto Component</div>}
        {modalData.type === "paymentMethods" && (
          <PaymentMethodsModal
            setValue={(modalData.props as { setValues: (v: string[]) => void }).setValues}
          />
        )}
      </CustomModalWrapper>
    </ModalContext.Provider>
  );
};
