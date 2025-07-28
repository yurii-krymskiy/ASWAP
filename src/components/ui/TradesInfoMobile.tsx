import { stats } from "../../pages/OnlineAds/static/stats";

const TradesInfoMobile = () => {
  return (
    <div className="flex md:hidden flex-col gap-4 bg-[#0F0F0F] border border-[#181818] rounded-[8px] p-3 mb-8">
      {stats.map((item, index) => (
        <div key={index} className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row items-center gap-1">
            <p className="p2 text-[#7B7B7B]">{item.title}</p>
            <img src="/icons/info-circle.svg" alt="info-circle" />
          </div>
          <div className="flex flex-col">
            <p className="p1 text-[#E5FFF2] text-right">{item.value}</p>
            {item.isAdditional && (
              <div className="text-[#7B7B7B] text-[12px] flex flex-row gap-1">
                <p className="text-[#3DF097]">Buy 19</p>
                /
                <p className="text-[#DC3434]">Sell 3216</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TradesInfoMobile;
