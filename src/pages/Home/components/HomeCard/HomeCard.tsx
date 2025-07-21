import React from "react";
import GradientTitle from "../../../../components/ui/GradientTitle";

const HomeCard = ({ img, title, text }: { img: string, title: string, text: string }) => {
  return (
    <div className="border border-white/7 backdrop-blur-[20px] rounded-[12px] p-6 flex flex-col gap-4">
      <img src={img} alt="" className="w-[46px] h-[46px]" />
      <GradientTitle text={title} size="18" />
      <p className="text-[14px] text-[#AEAEB8] leading-[150%]">
        {text}
      </p>
    </div>

  );
};

export default HomeCard;
