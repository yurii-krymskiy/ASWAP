import React from "react";
import clsx from "clsx";

interface StatusButtonProps {
  variant: "success" | "danger";
  text: string;
  icon: string;
}

const StatusButton = ({ variant, text, icon }: StatusButtonProps) => {
  const isDanger = variant === "danger";

  return (
    <button
      className={clsx(
        "bg-transparen border rounded-[4px] h-[34px] flex items-center gap-2 px-3 text-[14px] leading-[120%] cursor-pointer font-medium transition-all duration-300 ease-in-out ",
        {
          "border-[#DC3434] text-[#DC3434] hover:bg-[#DC34341A]": isDanger,
          "border-[#3DF097] text-[#3DF097] hover:bg-[#3DF0971A]": !isDanger,
        }
      )}
    >
      <img src={icon} alt={`${text.toLowerCase().replace(/\s+/g, "-")}-icon`} />
      {text}
    </button>
  );
};

export default StatusButton;
