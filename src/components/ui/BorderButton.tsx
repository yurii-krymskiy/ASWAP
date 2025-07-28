import clsx from "clsx";

interface BorderButtonProps {
  variant: "green" | "red" | "gray";
  text: string;
  icon?: string;
  className?: string
}

const BorderButton = ({ variant, text, icon, className }: BorderButtonProps) => {
  return (
    <button
      className={clsx(className,
        "bg-transparent border rounded-[4px] flex items-center gap-2 px-3 p2 leading-[120%] cursor-pointer font-medium transition-all duration-300 ease-in-out",
        {
          "border-[#DC3434] text-[#DC3434] hover:bg-[#DC34341A]": variant === "red",
          "border-[#3DF097] text-[#3DF097] hover:bg-[#3DF0971A]": variant === "green",
          "border-[#7B7B7B] text-[#7B7B7B] hover:bg-[#7b7b7b1a]": variant === "gray",
        }
      )}
    >
      {icon && (<img src={icon} className="w-[12px] md:w-[16px]" alt={`${text.toLowerCase().replace(/\s+/g, "-")}-icon`} />)}
      {text}
    </button>
  );
};

export default BorderButton;
