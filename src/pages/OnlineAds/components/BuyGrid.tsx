import React from "react";
import SideButton from "../../../components/ui/SideButton";
import GridButton from "../../../components/ui/GridButton";

const BuyGrid = () => {
  return (
    <div>
      <p className="p1 text-[#E5FFF2] mb-4">Online Buy Ads</p>
      <div className="bg-[#1D1D1D] border border-[#181818] grid grid-cols-[repeat(5,auto)] p-4 justify-items-start gap-y-2 items-center rounded-[8px]">
        <p className="p3 text-[#7B7B7B] mb-1">Coin</p>
        <p className="p3 text-[#7B7B7B] mb-1">Price</p>
        <p className="p3 text-[#7B7B7B] mb-1">Order Limits/Available</p>
        <p className="p3 text-[#7B7B7B] mb-1">Payment</p>
        <p className="p3 text-[#7B7B7B] mb-1">Trade</p>

        {[...Array(2)].map((_, index) => (
          <div className="contents" key={index}>
            {index === 1 && (<div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />)}
            <div className="flex flex-row gap-3 items-center">
              <img src="/images/Tether(USDT).png" alt="Tether" className="w-[30px] object-contain" />
              <p className="p1 text-[#E5FFF2]">USDT</p>
            </div>
            <p className="text-[16px] text-[#E5FFF2] leading-[150%]">55.55 UAH</p>
            <div className="flex flex-col mt-1">
              <p className="p1 text-[#E5FFF2] mb-1">134.70 USDT</p>
              <p className="text-[#7B7B7B] p2">$5.654 - $2,867</p>
            </div>
            <div className="flex gap-1.5">

              <GridButton content="Monobank" />
              <GridButton content="A-bank" />
              <GridButton content={<img src="/icons/more.svg" alt="more" />} />
            </div>

            <SideButton text="Buy USDT" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyGrid;
