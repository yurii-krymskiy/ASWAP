import React, { useState } from "react";
import Tabs from "../../../components/ui/Tabs";
import { p2pTabs } from "../static/tabs";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import ToggleButtons from "./ToggleCheckButtons";
import CustomButton from "../../../components/ui/CustomButton";

interface FirstStepProps {
  onNext: () => void;
}

const FirstStep: React.FC<FirstStepProps> = ({ onNext }) => {
  const [activeTab, setActiveTab] = useState("P2P");
  const [selectedCoin, setSelectedCoin] = useState("I want to buy");
  console.log(selectedCoin);
  const [asstetType, setAsstetType] = useState("USDT");
  const [fiat, setFiat] = useState("UAH");
  const [priceType, setPriceType] = useState("fixed");

  return (
    <div className="flex flex-col bg-[#0F0F0F] border border-[#181818] rounded-[12px] w-full md:w-[600px]">
      <Tabs
        tabs={p2pTabs}
        activeKey={activeTab}
        onChange={setActiveTab}
        className="pt-4 justify-start gap-8"
      />
      <div className="p-4">
        <div className="h-[44px] mb-6">
          <ButtonToggle
            options={["I want to buy", "I want to sell"]}
            defaultValue="I want to buy"
            onChange={(val) => setSelectedCoin(val)}
          />
        </div>
        <div className="flex flex-row gap-4 mb-4">
          <div className="flex flex-col flex-1">
            <p className="p2 text-[#7B7B7B] mb-2">Asset</p>
            <CustomDropdown
              height="45px"
              selectedText={asstetType}
              options={["0"]}
              setSelectedType={setAsstetType}
              icon="/images/Tether(USDT).png"
              className="w-full bg-[#1D1D1D] border-[#181818]"
            />
          </div>
          <div className="flex flex-col flex-1">
            <p className="p2 text-[#7B7B7B] mb-2">With Fiat</p>
            <CustomDropdown
              height="45px"
              selectedText={fiat}
              options={["0"]}
              setSelectedType={setFiat}
              icon="/images/uah.png"
              className="w-full bg-[#1D1D1D] border-[#181818]"
            />
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
          <ToggleButtons
            options={["fixed", "floating"]}
            initialActive={priceType}
            onChange={setPriceType}
          />
        </div>
        {priceType === "fixed" ? (
          <div className="flex flex-col mb-8">
            <p className="p2 text-[#7B7B7B] mb-2">Fixed</p>
            <div className="flex flex-row bg-[#1D1D1D] border border-[#181818] h-[48px] rounded-[8px] px-4 justify-between items-center mb-2">
              <img src="/icons/minus.svg" alt="minus" className="" />
              <p className="p1 text-[#E5FFF2]">55.44</p>
              <img src="/icons/plus.svg" alt="plus" className="" />
            </div>
            <p className="p3 text-[#7B7B7B]">The fixed price should be between 33.44 - 55.33</p>
          </div>
        ) : (
          <div className="flex flex-col mb-8">
            <p className="p2 text-[#7B7B7B] mb-2">Floating</p>
            <div className="flex flex-row bg-[#1D1D1D] border border-[#181818] h-[48px] rounded-[8px] px-4 justify-between items-center mb-2">
              <img src="/icons/minus.svg" alt="minus" className="" />
              <p className="p1 text-[#E5FFF2]">55.44</p>
              <img src="/icons/plus.svg" alt="plus" className="" />
            </div>
            <div className="flex flex-row bg-[#1D1D1D] border border-[#181818] h-[48px] rounded-[8px] px-4 justify-between items-center mb-2">
              <img src="/icons/minus.svg" alt="minus" className="" />
              <p className="p1 text-[#E5FFF2]">55.44</p>
              <img src="/icons/plus.svg" alt="plus" className="" />
            </div>
            <p className="p3 text-[#7B7B7B]">The fixed price should be between 33.44 - 55.33</p>
          </div>
        )}
        <div className="flex flex-row justify-between items-center py-8 border-t border-[#181818]">
          <div className="flex flex-col gap-1">
            <p className="p2 text-[#7B7B7B]">Your Price</p>
            <p className="text-[18px] md:text-[24px] text-[#E5FFF2]">$33.55</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <p className="p2 text-[#7B7B7B]">Highest Order Price</p>
            <p className="text-[18px] md:text-[24px] text-[#E5FFF2]">$33.55</p>
          </div>
        </div>
        <CustomButton
          text="Place Limit Offer"
          className="h-[40px] w-full text-[14px] md:text-[16px]"
          onClick={onNext}
        />

        <div className="flex flex-row mt-4 items-center justify-center gap-1">
          <img src="/icons/shield-tick-gray.svg" alt="shield-tick" />
          <p className="p2 text-[#7B7B7B]">24h Withdrawal Protection in effect</p>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
