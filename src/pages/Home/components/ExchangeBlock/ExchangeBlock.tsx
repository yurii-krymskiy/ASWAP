import { useState } from "react";
import CurrencyDropdown from "../../../../components/ui/CurrencyDropdown";
import GlassCardWrapper from "../../../../components/ui/GlassCardWrapper";

const ExchangeBlock = () => {
  const [side, setSide] = useState<"Sell" | "Buy">("Buy");
  const [crypto, setCrypto] = useState("ETH");
  const [currency, setCurrency] = useState("USDT");

  const renderInputBlock = (
    label: string,
    placeholder: string,
    selected: string,
    icon: string,
    setSelected: (val: string) => void
  ) => (
    <label className="block mb-3.5 md:mb-6">
      <p className="p3 text-[#979797] uppercase mb-2.5 md:mb-4">{label}</p>
      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full h-[35px] md:h-[59px] border border-[#FFFFFF12] rounded-[7px] md:rounded-[12px] outline-none text-[#C6C6C6] pl-3.5 md:pl-6 p1 bg-transparent"
        />
        <div className="absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer h-[80%] md:h-[85%]">
          <CurrencyDropdown
            selectedText={selected}
            options={["0"]}
            setSelectedType={setSelected}
            icon={icon}
          />
        </div>
      </div>
    </label>
  );

  return (
    <GlassCardWrapper>
      <div className="p-3.5 md:p-6">
        <div className="bg-white/5 border border-white/10 backdrop-blur-[20px] rounded-[7px] md:rounded-[16px] flex items-center justify-between p-1 mb-4.5 md:mb-8">
          {(["Buy", "Sell"] as const).map((button) => {
            const isActive = side === button;
            const isBuy = button === "Buy";
            const activeStyles = isActive
              ? `${isBuy ? "text-[#3DF097] bg-[#3DF0971C]" : "text-[#FF4D4D] bg-[#FF4D4D1C]"}
                 border-t border-white/5 rounded-[5px] md:rounded-[8px]
                 shadow-[0_1px_1px_0_rgba(0,14,15,0.3),_0_4px_6px_0_rgba(0,14,15,0.15)]`
              : "text-[#AEAEB8] bg-transparent border-t border-transparent";

            return (
              <button
                key={button}
                onClick={() => setSide(button)}
                className={`w-1/2 h-[25px] md:h-[43px] text-[10px] md:text-[18px] font-normal transition-all duration-200 ${activeStyles}`}
              >
                {button}
              </button>
            );
          })}
        </div>

        {renderInputBlock("The amount to be paid", "The limit is: 10 - 5000", crypto, "/icons/eth.svg", setCrypto)}

        {renderInputBlock("Quantity purchased", "The limit is: 10 - 5000", currency, "/icons/usdt.svg", setCurrency)}

        <div className="mb-3.5 md:mb-6">
          <p className="p3 text-[#979797] uppercase mb-2.5 md:mb-4">PAY WITH</p>
          <div className="flex items-center gap-2 md:gap-4 w-full h-[35px] md:h-[59px] border border-[#FFFFFF12] rounded-[7px] md:rounded-[12px] px-[14px] md:px-6 text-[#C6C6C6]">
            <img src="/icons/mastercard.svg" alt="mastercard" className="h-[13px] md:h-[22px]" />
            <p className="p1">MasterCard</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mb-3.5 md:mb-6">
          <p className="p3 text-[#979797] uppercase">Reference price</p>
          <p className="p1 text-[#C6C6C6]">1 ETH ~ 1.55 USD</p>
        </div>

        <button
          className={`w-full h-[28px] md:h-[48px] rounded-[4px] md:rounded-[8px] font-semibold p1 text-[#C6C6C6] mb-2.5 md:mb-4 ${
            side === "Buy" ? "bg-[#3DF09754]" : "bg-[#FF494954]"
          }`}
        >
          {side} USDT
        </button>

        <div className="flex items-center justify-center text-[#C6C6C699] gap-2 p1">
          <img className="cursor-pointer h-[13px] md:h-[22px]" src="/icons/refresh.svg" alt="refresh" />
          <p>Regular investment</p>
          <img className="cursor-pointer" src="/icons/arrow-narrow-right.svg" alt="arrow" />
        </div>
      </div>
    </GlassCardWrapper>
  );
};

export default ExchangeBlock;
