const StatsCard = ({
  title,
  value,
  bgColor,
  isAdditional
}: {
  title: string;
  value: string;
  bgColor: string,
  isAdditional: boolean
}) => (
  <div
    className="border border-[#181818] rounded-[8px] p-3 flex justify-between items-start w-full"
    style={{  backgroundColor: bgColor }}
  >
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <img src="/icons/coins-swap-01.svg" alt="icon" />
        <p className="p2 text-[#7B7B7B]">{title}</p>
      </div>
      <p className="p1 text-[#E5FFF2]">{value}</p>
      {isAdditional && (
        <div className="text-[#7B7B7B] text-[12px] flex flex-row gap-1">
          <p className="text-[#3DF097]">Buy 19</p>
          /
          <p className="text-[#DC3434]">Sell 3216</p>
        </div>
      )}
    </div>
    <img src="/icons/info-circle.svg" alt="info" />
  </div>
);

export default StatsCard;
