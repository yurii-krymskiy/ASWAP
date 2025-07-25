import React, { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import { p2pTabs } from "../static/tabs";
import Tabs from "../../../components/ui/Tabs";
import BorderButton from "../../../components/ui/BorderButton";
import CustomButton from "../../../components/ui/CustomButton";

const SecondStep = () => {
  const [activeTab, setActiveTab] = useState("P2P");
  const [selectedCoin, setSelectedCoin] = useState("I want to buy");
  console.log(selectedCoin);
  const [asstetType, setAsstetType] = useState("15 min");

  return (
    <div className="flex flex-col bg-[#0F0F0F] border border-[#181818] rounded-[12px] w-[600px]">
      <Tabs
        tabs={p2pTabs}
        activeKey={activeTab}
        onChange={setActiveTab}
        className="pt-4"
      />
      <div className="p-4">
        <div className="h-[44px] mb-6">
          <ButtonToggle
            options={["I want to buy", "I want to sell"]}
            defaultValue="I want to buy"
            onChange={(val) => setSelectedCoin(val)}
          />
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
          <div className="flex items-center justify-between h-[48px] px-4 mb-2 rounded-[8px] border border-[#181818] bg-[#1D1D1D]">
            <input
              type="text"
              placeholder="0,9999"
              className="text-[#E5FFF2] bg-transparent p1 outline-none w-full placeholder:text-[#7B7B7B]"
            />
            <span className="ml-2 text-[16px] text-[#7B7B7B] whitespace-nowrap">USDC</span>
          </div>
          <p className="p3 text-[#7B7B7B]">~0,9 UAH</p>
        </div>

        <div className="flex flex-col mb-7 items-start">
          <p className="p2 text-[#7B7B7B] mb-2">Order Limit</p>
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-col relative">
              <div className="flex items-center justify-between h-[48px] px-4 rounded-[8px] border border-[#181818] bg-[#1D1D1D] mb-1">
                <input
                  type="text"
                  placeholder="0,9999"
                  className="text-[#E5FFF2] bg-transparent p1 outline-none w-full placeholder:text-[#7B7B7B]"
                />
                <span className="ml-2 text-[16px] text-[#7B7B7B] whitespace-nowrap">USDC</span>
              </div>
              <p className="p3 text-[#7B7B7B] absolute bottom-[-15px]">~0,9 UAH</p>
            </div>
            <img src="/icons/minus.svg" alt="minus" />
            <div className="flex flex-col relative">
              <div className="flex items-center justify-between h-[48px] px-4 rounded-[8px] border border-[#181818] bg-[#1D1D1D] mb-1">
                <input
                  type="text"
                  placeholder="0,9999"
                  className="text-[#E5FFF2] bg-transparent p1 outline-none w-full placeholder:text-[#7B7B7B]"
                />
                <span className="ml-2 text-[16px] text-[#7B7B7B] whitespace-nowrap">USDC</span>
              </div>
              <p className="p3 text-[#7B7B7B] absolute bottom-[-15px]">~0,9 UAH</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#E5FFF2] mb-1">Payment Method</p>
          <p className="p3 text-[#7B7B7B] mb-2">Select up to 5 payment method</p>
          <button className="h-[32px] flex flex-row items-center justify-center gap-2 border border-[#7B7B7B] rounded-[4px] w-[140px] cursor-pointer">
            <div className="rounded-full border border-[#7B7B7B] flex items-center justify-center w-[16px] h-[16px]">
              <img src="/icons/plus.svg" alt="plus" />
            </div>
            <p className="p2 text-[#7B7B7B]">Add</p>
          </button>
        </div>

        <div className="flex flex-col mb-8">
          <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
          <CustomDropdown
            height="45px"
            selectedText={asstetType}
            options={["0"]}
            setSelectedType={setAsstetType}
            className="w-full bg-[#1D1D1D] border-[#181818] text-[#E5FFF2]"
          />
        </div>

        <div className="flex flex-row gap-4">
          <BorderButton
            text="Reset"
            className="h-[40px] w-[50%] flex items-center justify-center"
            variant="gray"
          />
          <CustomButton
            text="Next"
            className="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
