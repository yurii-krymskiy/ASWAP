import { useState } from "react";
import CustomButton from "../../components/ui/CustomButton";
import CoinJoinGrid from "./components/CoinJoinGrid";
import CoinJoinFilterPanel from "./components/CoinJoinFilterPanel";
import { coinJoinTabs } from "./static/tabs";
import Exchange from "../../components/features/Exchange";
import Tabs from "../../components/features/Tabs";
import { useModal } from "../../context/Modal/useModal";

const CoinJoin = () => {
  const [activeTab, setActiveTab] = useState("Crypto");
  const [sell, setSell] = useState("USDT");
  const [buy, setBuy] = useState("EUR");

  const openModal = useModal(v => v.openModal);

  const dropdownSetters = {
    sell: setSell,
    buy: setBuy,
  };

  const handleDropdownClick = (type: "sell" | "buy") => {
    openModal("selectCoin", {
      setValue: dropdownSetters[type],
    });
  };

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-6 mb-15 flex items-center flex-col">
      <section className="flex flex-col w-full md:w-[600px] mb-6">
        <p className="mb-3 md:mb-6 text-[24px] text-[#7B7B7B] font-medium md:text-center">CoinJoin</p>
        <div className="flex flex-row gap-3 items-start bg-[#0F0F0F] border border-[#181818] mb-4 p-4 rounded-[12px]">
          <img src="/icons/alert-triangle.svg" alt="alert-triangle" />
          <p className="p1 text-[#7B7B7B]">CoinJoin is an anonymization strategy that protects the privacy of crypto users when they conduct transactions with each other.</p>
        </div>
        <div className="flex flex-col p-4 bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Exchange
            handleOpen={handleDropdownClick}
            sell={sell}
            buy={buy}
          />
          <div className="flex flex-row justify-between items-center my-4">
            <p className="p2 text-[#7B7B7B]">Enter the Wallet Address</p>
            <div className="flex flex-row gap-1 cursor-pointer items-center">
              <img src="/icons/x-circle-2.svg" alt="circle" />
              <p className="p2 text-[#C5C300]">Wallets</p>
            </div>
          </div>
          <input
            type="text"
            className="text-[#7B7B7B] outline-none bg-[#1D1D1D] border border-[#181818] h-[45px] w-full rounded-[8px] px-3 mb-6 text-[14px]"
            placeholder="The recipient's Ethereum address"
          />
          <CustomButton
            text="Place Limit Offer"
            className="h-[40px] w-full text-[14px] md:text-[16px]"
          />
          <span className="p3 text-[#7B7B7B] text-center mt-4">By clicking create an exchange, I agree to the <span className="text-[#ACAA00] cursor-pointer">Privacy Policy</span> and <span className="text-[#ACAA00] cursor-pointer">Terms of Service</span></span>
        </div>
      </section>
      <section className="w-full">
        <p className="text-[18px] md:text-[24px] text-[#AEAEB8] mb-[18px] md:mb-2">Buy Crypto</p>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={coinJoinTabs}
            activeKey={activeTab}
            onChange={setActiveTab}
            className="pt-4"
          />
          <div className="hidden md:block">
            <CoinJoinFilterPanel />
          </div>
          <CoinJoinGrid />
        </div>
      </section>
    </main >
  );
};

export default CoinJoin;
