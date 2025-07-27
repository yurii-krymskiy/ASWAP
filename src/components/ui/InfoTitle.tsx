const InfoTitle = ({ text, isDot }: { text: string, isDot: boolean }) => {
  return (
    <div
      className={`
        flex flex-row items-center gap-1.5
        px-[12px] md:px-[14px]
        font-medium text-[#AEAEB8]
        bg-[#FFFFFF0D] border border-[#FFFFFF12]
        backdrop-blur-[20px] rounded-[63px] md:rounded-[100px]
        w-fit
        ${isDot ? "text-[10px] md:text-[14px] py-[6px]" : "p1 py-[6px] md:py-[10px] mb-[16px] md:mb-[32px]"}
      `}
    >
      {isDot ? (
        <div className="w-[6px] h-[6px] bg-[linear-gradient(180deg,_#FFFD00_-5.87%,_#999800_105.45%)] rounded-[1px]">
        </div>
      ) : (
        <img
          src="/icons/medal-star.svg"
          alt="medal-star"
          className="w-[15px] h-[15px] md:w-[24px] md:h-[24px]"
        />
      )}
      {text}
    </div>
  );
};

export default InfoTitle;
