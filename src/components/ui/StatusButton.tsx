import React from "react";

interface StatusButtonProps {
  variant: "success" | "danger";
  text: string;
  icon: string;
}

const StatusButton = ({ variant, text, icon }: StatusButtonProps) => {
  const isDanger = variant === "danger";

  const borderColor = isDanger ? "#DC3434" : "#3DF097";
  const textColor = borderColor;
  const bgHover = isDanger ? "#DC34341A" : "#3DF0971A";
  const shadowColor = borderColor;

  return (
    <button
      className={`
        bg-transparent border-[${borderColor}] border rounded-[4px]
        text-[${textColor}] h-[34px] flex items-center gap-2 px-3
        text-[14px] leading-[120%] cursor-pointer font-medium
        transition-all duration-300 ease-in-out
        hover:bg-[${bgHover}] hover:scale-105 hover:shadow-[0_0_1px_${shadowColor}]
      `}
    >
      <img src={icon} alt={`${text.toLowerCase().replace(/\s+/g, "-")}-icon`} />
      {text}
    </button>
  );
};

export default StatusButton;
