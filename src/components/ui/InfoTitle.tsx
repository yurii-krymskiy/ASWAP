import React from "react";

const InfoTitle = ({ text }: { text: string }) => {
  return (
    <div
      className="
        flex flex-row items-center gap-1
        px-[14px] py-[10px]
        text-[16px] font-medium text-[#AEAEB8]
        bg-[#FFFFFF0D] border border-[#FFFFFF12]
        backdrop-blur-[20px] rounded-[100px]
        w-fit mb-[32px]
      "
    >
      <img
        src="/icons/medal-star.svg"
        alt="medal-star"
        className="w-[24px] h-[24px]"
      />
      {text}
    </div>
  );
};

export default InfoTitle;
