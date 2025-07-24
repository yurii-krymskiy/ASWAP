import { type ReactNode } from "react";

const CryptoCard = (
  {
    img,
    title,
    text
  }:
    {
      img: string
      title: ReactNode,
      text: string,
    }
) => {
  return (
    <div className="bg-[#0F0F0F] border border-[#181818] p-4.5 flex flex-col items-start rounded-[16px]">
      <img src={img} alt="crypto-block" className="mb-10 h-[42px] object-contain" />
      <div>
        <p className="text-[#E5FFF2] text-[18px] mb-[18px] w-[90%]">
          {title}
        </p>
        <p className="text-[#FFFFFF99] text-[14px] leading-[150%]">
          {text}
        </p>
      </div>
    </div>
  );
};

export default CryptoCard;
