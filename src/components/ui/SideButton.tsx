import clsx from "clsx";

interface SideButtonProps {
  text: string;
  variant?: "buy" | "sell";
}

const SideButton = ({ text, variant = "buy" }: SideButtonProps) => {
  return (
    <button
      className={clsx(
        "text-[#020313] text-[14px] font-medium cursor-pointer",
        "h-[38px] px-6 w-fit rounded-[4px]",
        "transition-all duration-300 ease-in-out transform",
        "hover:brightness-110 hover:shadow-md hover:-translate-y-[1px] active:translate-y-0 active:brightness-95",
        {
          "bg-[#3DF097] hover:bg-[#2EE68A]": variant === "buy",
          "bg-[#DC3434] hover:bg-[#C72C2C]": variant === "sell",
        }
      )}
    >
      {text}
    </button>
  );
};

export default SideButton;
