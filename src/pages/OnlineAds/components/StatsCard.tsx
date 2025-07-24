const StatsCard = ({
  title,
  value,
  height,
  bgColor
}: {
  title: string;
  value: string;
  height: string
  bgColor: string
}) => (
  <div
    className="border border-[#181818] rounded-[8px] p-3 flex justify-between items-start w-full"
    style={{ height: height, backgroundColor: bgColor }}
  >
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        <img src="/icons/coins-swap-01.svg" alt="icon" />
        <p className="p2 text-[#7B7B7B]">{title}</p>
      </div>
      <p className="p1 text-[#E5FFF2]">{value}</p>
    </div>
    <img src="/icons/info-circle.svg" alt="info" />
  </div>
);

export default StatsCard;
