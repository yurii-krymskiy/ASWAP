import StatsCard from "./StatsCard";
import { stats } from "../static/stats";
import Stars from "../../../components/ui/Stars";

const OnlineAdsStats = () => {
  return (
    <div className="hidden md:flex flex-col w-[25%] border-r border-[#181818] p-4">
      <div className="flex flex-col gap-1 mb-6">
        <p className="p2 text-[#7B7B7B]">Positive Feedback</p>
        <div className="flex flex-row items-center">
          <Stars />
          <p className="p2 text-[#E5FFF2] ml-1">100% (1234)</p>
        </div>
        <div className="flex flex-row items-center text-[#7B7B7B] gap-2">
          <p className="p2 text-[#3DF097]">Positive:</p>
          <p className="p2 text-[#3DF097]">1000</p>
          |
          <p className="p2 text-[#DC3434]">Positive:</p>
          <p className="p2 text-[#DC3434]">1000</p>
        </div>
      </div>

      <div className="flex flex-col h-full justify-between">
        {stats.map((item, idx) => (
          <StatsCard
            bgColor="#1D1D1D"
            key={idx}
            title={item.title}
            value={item.value}
            isAdditional={item.isAdditional}
          />
        ))}
      </div>
    </div>
  );
};

export default OnlineAdsStats;
