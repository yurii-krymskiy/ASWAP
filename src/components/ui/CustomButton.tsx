const CustomButton = ({ text, height, icon, padding = "20" }: { text: string, height: string, icon?: string, padding?: string }) => {
  return (
    <button
      style={{
        height: `${height}px`,
        paddingInline: `${padding}px`
      }}
      className="
        bg-[#C5C300]
        text-[#020313]
        rounded-[4px]
        text-[16px]
        font-medium
        leading-[120%]
        tracking-[0.02em]
        hover:bg-[#b1af00]
        transition-all
        duration-200
        ease-in-out
        hover:shadow-md
        active:scale-95
        cursor-pointer
        w-fit
        z-10
        flex flex-row items-center
      "
    >
      {icon && (<img src={icon} alt="icon" className="mr-2" />)}
      {text}
    </button>
  );
};

export default CustomButton;
