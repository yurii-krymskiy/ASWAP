import React, { useState } from "react";
import CurrencyDropdown from "../../../../components/ui/CurrencyDropdown";
import GlassCardWrapper from "../../../../components/ui/GlassCardWrapper";

const ExchangeBlock = () => {
  const [side, setSide] = useState<"Sell" | "Buy">("Buy");
  const [crypto, setCrypto] = useState("ETH");
  const [currency, setCurrency] = useState("USDT");

  return (
    <GlassCardWrapper width="500">
      <div className="p-[24px]">
        <div
          className="
            bg-[rgba(255,255,255,0.05)] rounded-[12px] border border-[rgba(255,255,255,0.07)] backdrop-blur-[20px] 
            flex flex-row items-center justify-between p-1 mb-[32px]"
        >
          {(["Buy", "Sell"] as const).map((button) => {
            const isActive = side === button;
            const isBuy = button === "Buy";
            return (
              <button
                key={button}
                onClick={() => setSide(button)}
                className={`
                  w-[50%] h-[43px] cursor-pointer text-[18px] font-normal transition-all duration-200
                    ${isActive
                    ? ` ${isBuy ? "text-[#3DF097] bg-[rgba(61,240,151,0.11)]" : "text-[#FF4D4D] bg-[rgba(255,77,77,0.11)]"}
                          border-t border-t-[rgba(255,255,255,0.05)] rounded-[8px]
                          shadow-[0_1px_1px_0_rgba(0,14,15,0.3),_0_4px_6px_0_rgba(0,14,15,0.15)]
                        `
                    : "text-[#AEAEB8] bg-transparent border-t border-transparent"}
                `}
              >
                {button}
              </button>
            );
          })}
        </div>

        <label>
          <p className="text-[#979797] text-[12px] mb-[16px] uppercase">The amount to be paid</p>
          <div className="relative mb-[24px]">
            <input
              type="text"
              placeholder="The limit is: 10 - 5000"
              className="w-full h-[59px] border border-[#FFFFFF12] rounded-[12px] outline-none text-[#C6C6C6] pl-[24px] text-[16px]"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer h-[85%]">
              <CurrencyDropdown
                selectedText={crypto}
                options={["0"]}
                setSelectedType={setCrypto}
                icon="/icons/eth.svg"
              />
            </div>
          </div>
        </label>

        <label>
          <p className="text-[#979797] text-[12px] mb-[16px] uppercase">The amount to be paid</p>
          <div className="relative mb-[24px]">
            <input
              type="text"
              placeholder="The limit is: 10 - 5000"
              className="w-full h-[59px] border border-[#FFFFFF12] rounded-[12px] outline-none text-[#C6C6C6] pl-[24px] text-[16px]"
            />
            <div className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer h-[85%]">
              <CurrencyDropdown
                selectedText={currency}
                options={["0"]}
                setSelectedType={setCurrency}
                icon="/icons/usdt.svg"
              />
            </div>
          </div>
        </label>

        <div className="mb-[24px]">
          <p className="text-[#979797] text-[12px] mb-[16px] uppercase">The amount to be paid</p>
          <div className="flex flex-row gap-4 items-center w-full h-[59px] border border-[#FFFFFF12] rounded-[12px] outline-none text-[#C6C6C6] pl-[24px] text-[16px]">
            <img src="/icons/mastercard.svg" alt="mastercard" />
            <p className="text-[#C6C6C6]">
              MasterCard
            </p>
          </div>
        </div>

        <div className="flex flex-row justify-between items-center w-full mb-[24px]">
          <p className="text-[#979797] uppercase text-[12px]">Reference price</p>
          <p className="text-[#C6C6C6] text[16px]">1 ETH ~ 1,55 USD</p>
        </div>

        <button className="bg-[#3DF09754] text-[#C6C6C6] text-[16px] font-semibold h-[48px] w-full rounded-[8px] mb-[16px]">
          Buy USDT
        </button>

        <div className="flex flex-row items-center justify-center text-[#C6C6C699] gap-2">
          <img className="cursor-pointer" src="/icons/refresh.svg" alt="refresh" />
          <p>Regular investment</p>
          <img className="cursor-pointer" src="/icons/arrow-narrow-right.svg" alt="arrow-narrow-right" />
        </div>
      </div>
    </GlassCardWrapper>
  );
};

export default ExchangeBlock;
