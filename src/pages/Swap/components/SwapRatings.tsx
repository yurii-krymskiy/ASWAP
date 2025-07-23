import React from "react";
import AreaChart from "./AreaChart";

const SwapRatings = () => {
  return (
    <div className="flex flex-col basis-[30%] border-r border-[#181818]">
      <div className="flex flex-col border-b border-[#181818] p-4">
        <div className="flex flex-row gap-3 mb-2">
          <img src="/icons/bar-line-chart.svg" alt="bar-line-chart" />
          <p className="text-[#7B7B7B] p1">USD / SOL</p>
        </div>
        <div className="h-[150px]">
          <AreaChart />
        </div>
      </div>
      <div className="flex flex-col p-4">
        <div className="flex flex-row justify-between items-center mb-4">
          <div className="flex flex-row gap-2 items-center">
            <p className="text-[16px] text-[#7B7B7B]">
              Rating:
            </p>
            <div className="flex flex-row items-center gap-0.5">
              {[...Array(5)].map((_, index) => (
                <img key={index} src="/icons/star.svg" alt="star" />
              ))}
              <p className="text-[14px] text-[#E5FFF2]">
                (5.0)
              </p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center cursor-pointer">
            <p className="text-[14px] text-[#7B7B7B] font-medium">View All</p>
            <img src="/icons/arrow.svg" className="rotate-[270deg]" alt="star" />
          </div>
        </div>
        <div className="flex flex-col gap-3 h-[300px] overflow-auto">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="w-full bg-[#181818] p-4 border border-[#181818] rounded-[8px] flex flex-col gap-4">
              <div className="flex justify-between items-center">
                <p className="text-[#E5FFF2] text-[16px]">AnnTomson</p>
                <div className="flex flex-row items-center gap-0.5">
                  {[...Array(5)].map((_, index) => (
                    <img key={index} src="/icons/star.svg" alt="star" />
                  ))}
                </div>
              </div>
              <p className="text-[#7B7B7B] p2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit”</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwapRatings;
