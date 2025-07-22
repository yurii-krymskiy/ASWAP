const CustomButton = ({ text }: { text: string }) => {
  return (
    <button
      className="
        bg-[#C5C300]
        px-5 py-2.5
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
      "
    >
      {text}
    </button>
  );
};

export default CustomButton;
