/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const BuyCryptoGrid = () => {
  return (
    <div className="bg-[#0F0F0F] border border-[#181818] grid grid-cols-[repeat(6,auto)] p-6 justify-items-start gap-y-2 items-center">
      <p className="p2 text-[#7B7B7B] mb-1">Trader</p>
      <p className="p2 text-[#7B7B7B] mb-1">Price</p>
      <p className="p2 text-[#7B7B7B] mb-1">Available</p>
      <p className="p2 text-[#7B7B7B] mb-1">Limits</p>
      <p className="p2 text-[#7B7B7B] mb-1">Payment Method</p>
      <p className="p2 text-[#7B7B7B] mb-1">Action</p>

      {[...Array(6)].map((_, index) => (
        <div className="contents" key={index}>
          <div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />
          <div>
            <p className="text-[16px] text-[#E5FFF2] leading-[150%]">AnnTomson</p>
            <p className="p2 text-[#7B7B7B]">12 average / 9 orders</p>
          </div>
          <p className="text-[16px] text-[#E5FFF2] leading-[150%]">45.34 UAH</p>
          <p className="text-[16px] text-[#E5FFF2] leading-[150%]">200.00 USDT</p>
          <p className="text-[16px] text-[#E5FFF2] leading-[150%]">200.00 UAH - 870.00 UAH</p>
          <div className="flex gap-1.5">
            <button
              className="
                    bg-white/5 h-[26px]
                    border-t border-white/5
                    text-[#7B7B7B] text-[14px] font-normal leading-[150%]
                    px-1.5 rounded-md
                    shadow-[0px_1px_1px_0px_rgba(0,14,15,0.3),0px_4px_6px_0px_rgba(0,14,15,0.15)]
                  "
            >
              Monobank
            </button>
            <button
              className="
                    bg-white/5 h-[26px]
                    border-t border-white/5
                    text-[#7B7B7B] text-[14px] font-normal leading-[150%]
                    px-1.5 rounded-md
                    shadow-[0px_1px_1px_0px_rgba(0,14,15,0.3),0px_4px_6px_0px_rgba(0,14,15,0.15)]
                  "
            >
              A-bank
            </button>
            <button
              className="
                    bg-white/5 h-[26px]
                    border-t border-white/5
                    text-[#7B7B7B] text-[14px] font-normal leading-[150%]
                    px-1.5 rounded-md
                    shadow-[0px_1px_1px_0px_rgba(0,14,15,0.3),0px_4px_6px_0px_rgba(0,14,15,0.15)]
                  "
            >
              <img src="/icons/more.svg" alt="more" />
            </button>
          </div>

          <button
            className="
                  bg-[#3DF097] hover:bg-[#2EE68A]
                  text-[#020313] text-[14px]
                  h-[38px] px-6 w-fit rounded-[4px]
                  transition duration-200 ease-in-out
                  hover:brightness-110 hover:shadow-md cursor-pointer
                "
          >
            Buy USDT
          </button>

        </div>
      ))}
    </div>
  );
};

export default BuyCryptoGrid;
