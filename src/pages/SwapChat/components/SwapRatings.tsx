import AreaChart from "./AreaChart";
import Stars from "../../../components/ui/Stars";
import { useState, useEffect } from "react";

const SwapRatings = () => {
  const [isChartOpen, setIsChartOpen] = useState(true);
  const [isReviewsOpen, setIsReviewsOpen] = useState(true);

  useEffect(() => {
    // Collapse both on mobile
    if (window.innerWidth < 768) {
      setIsChartOpen(false);
      setIsReviewsOpen(false);
    }
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <div className="flex flex-col basis-[30%] md:border-r border-[#181818] gap-4 md:gap-0">
      {/* Chart Section */}
      <div className="flex flex-col border border-[#181818] md:border-x-0 md:border-t-0 md:border-b p-4 rounded-[8px] md:rounded-[0] bg-[#0F0F0F] md:bg-transparent transition-all duration-300">
        <div
          className={`flex flex-row justify-between items-center ${isMobile ? "cursor-pointer" : ""}`}
          onClick={() => isMobile && setIsChartOpen((prev) => !prev)}
        >
          <div className="flex flex-row gap-3 md:mb-2">
            <img src="/icons/bar-line-chart.svg" alt="bar-line-chart" />
            <p className="text-[#7B7B7B] p1">USD / SOL</p>
          </div>
          <img
            src="/icons/arrow.svg"
            alt="arrow"
            className={`transition-transform duration-300 md:hidden ${isChartOpen ? "rotate-180" : ""}`}
          />
        </div>
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${isChartOpen ? "max-h-[500px] mt-2" : "max-h-0"
            }`}
        >
          <div className="h-[150px]">
            <AreaChart />
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="flex flex-col border border-[#181818] md:border-none p-4 rounded-[8px] md:rounded-[0] bg-[#0F0F0F] md:bg-transparent transition-all duration-300">
        <div
          className={`flex flex-row justify-between items-center md:mb-4 ${isMobile ? "cursor-pointer" : ""}`}
          onClick={() => isMobile && setIsReviewsOpen((prev) => !prev)}
        >
          <div className="flex flex-row gap-2 items-center">
            <p className="p1 text-[#7B7B7B]">Rating:</p>
            <div className="flex flex-row items-center gap-1">
              <Stars />
              <p className="text-[14px] text-[#E5FFF2]">(5.0)</p>
            </div>
          </div>
          <div className="flex flex-row gap-1 items-center cursor-pointer">
            <p className="text-[14px] text-[#7B7B7B] font-medium">View All</p>
            <img
              src="/icons/arrow.svg"
              alt="arrow"
              className="transition-transform duration-300 rotate-[270deg]"
            />
          </div>
        </div>

        <div
          className={`transition-all overflow-hidden duration-500 ease-in-out ${isReviewsOpen ? "max-h-[1000px]" : "max-h-0"
            }`}
        >
          <div className="flex flex-col gap-3 h-[300px] overflow-auto mt-5 md:mt-0">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-full bg-[#181818] p-4 border border-[#181818] rounded-[8px] flex flex-col gap-4"
              >
                <div className="flex justify-between items-center">
                  <p className="text-[#E5FFF2] text-[16px]">AnnTomson</p>
                  <Stars />
                </div>
                <p className="text-[#7B7B7B] text-[14px]">
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapRatings;
