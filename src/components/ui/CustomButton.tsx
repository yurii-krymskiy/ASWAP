import clsx from "clsx";

const CustomButton = ({
  text,
  icon,
  className,
}: {
  text: string;
  icon?: string;
  className?: string;
}) => {
  return (
    <button
      className={clsx(
        "bg-[#C5C300] px-5 text-[#020313] rounded-[4px] text-[16px] font-medium leading-[120%] tracking-[0.02em] hover:bg-[#b1af00] transition-all duration-200 ease-in-out hover:shadow-md active:scale-95 cursor-pointer w-fit z-10",
        className
      )}
    >
      {icon && <img src={icon} alt="icon" className="w-5 h-5" />}
      {text}
    </button>
  );
};
export default CustomButton;