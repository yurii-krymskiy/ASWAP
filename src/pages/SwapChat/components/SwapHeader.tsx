const SwapHeader = () => {
  return (
    <div className="flex flex-col w-full md:flex-row items-start md:items-center justify-between mb-4 md:mb-8 gap-4">
      <div className="flex flex-row md:flex-col items-center md:items-start justify-between w-full md:w-fit">
        <p className="text-[#7B7B7B] text-[18px] md:text-[24px] font-medium mb-1">
          Swap Order #1
        </p>
        <p className="text-[#E5FFF2] p1">
          USD / SOL
        </p>
      </div>
      <div className="flex flex-col items-start md:items-center-end">
        <p className="text-[14px] text-[#7B7B7B] mb-1">
          Status: Waiting for payment
        </p>
        <div className="flex flex-row items-center gap-2">
          <img src="/icons/hourglass.svg" alt="hourglass" />
          <p className="text-[#ACAA00] text-[16px] font-medium">11:33 until timeout</p>
        </div>
      </div>
    </div>
  );
};

export default SwapHeader;
