import React from "react";
import StatsCard from "./StatsCard";
import { stats } from "../static/stats";
import Stars from "../../../components/ui/Stars";

const OnlineAdsStats = () => {
  return (
    <div className="flex flex-col basis-[25%] border-r border-[#181818] p-4">
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

      <div className="flex flex-col gap-2">
        <div className="bg-[#1D1D1D] border flex flex-row justify-between border-[#181818] rounded-[8px] w-full p-3 items-start">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-1 items-center">
              <img src="/icons/coins-swap-01.svg" alt="coins-swap" />
              <p className="p2 text-[#7B7B7B]">All Trades</p>
            </div>
            <p className="p1 text-[#E5FFF2]">
              4432 Time(s)
            </p>
            <div className="text-[#7B7B7B] text-[12px] flex flex-row gap-1">
              <p className="text-[#3DF097]">Buy 19</p>
              /
              <p className="text-[#DC3434]">Sell 3216</p>
            </div>
          </div>
          <img src="/icons/info-circle.svg" alt="info-circle" />
        </div>
        <div className="flex flex-col gap-2">
          {stats.map((item, idx) => (
            <StatsCard
              key={idx}
              title={item.title}
              value={item.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineAdsStats;
