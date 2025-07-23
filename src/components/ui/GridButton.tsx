import React, { type ReactNode } from "react";
import clsx from "clsx";

interface GridButtonProps {
  content: ReactNode;
  variant?: "primary" | "outline";
}

const GridButton = ({ content, variant = "primary" }: GridButtonProps) => {
  return (
    <button
      className={clsx(
        "h-[26px] px-2 rounded-md text-[14px] text-[#7B7B7B] leading-[150%] transition-colors duration-200 cursor-pointer",
        "shadow-[0px_1px_1px_0px_rgba(0,14,15,0.3),0px_4px_6px_0px_rgba(0,14,15,0.15)]",
        {
          "bg-white/5 border-t border-white/5 font-medium hover:bg-white/15":
            variant === "primary",
          "bg-transparent border border-[#2A2A2A] text-[#AAAAAA] font-normal hover:border-[#444]":
            variant === "outline",
        }
      )}
    >
      {content}
    </button>
  );
};

export default GridButton;
