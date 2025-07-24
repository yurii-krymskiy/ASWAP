const SwapHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between mb-8">
      <div>
        <p className="text-[#7B7B7B] text-[24px] font-medium mb-1">
          Swap Order #1
        </p>
        <p className="text-[#E5FFF2] text-[16px]">
          USD / SOL
        </p>
      </div>
      <div className="flex flex-col items-end">
        <p className="p2 text-[#7B7B7B] mb-1">
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
