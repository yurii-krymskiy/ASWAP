import React from "react";

type CurrencyButtonProps = {
  selectedText: string;
  icon: string;
};

const CurrencyButton: React.FC<CurrencyButtonProps> = ({
  selectedText,
  icon,
}) => {
  return (
    <div className="relative h-full">
      <div
        className="
          bg-[rgba(255,255,255,0.05)] 
          border border-[rgba(255,255,255,0.07)] 
          backdrop-blur-[20px] 
          rounded-[4px] md:rounded-[12px]
          flex flex-row h-full items-center px-[7px] md:px-[12px] gap-1 md:gap-3"
      >
        <img src={icon} alt="eth" className="cursor-pointer w-[19px] h-[19px] md:w-[33px] md:h-[33px]" />
        <span className="text-[10px] md:text-[18px] font-normal text-[#D1D1D1]">{selectedText}</span>
        <img src="/icons/arrow-white.svg" alt="arrow" width={12} height={12} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default CurrencyButton;
