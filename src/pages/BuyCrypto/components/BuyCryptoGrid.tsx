/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import GridButton from "../../../components/ui/GridButton";
import SideButton from "../../../components/ui/SideButton";

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
            <GridButton content="Monobank" variant="outline" />
            <GridButton content="A-bank" variant="outline" />
            <GridButton content={<img src="/icons/more.svg" alt="more" />} variant="outline" />
          </div>
          <SideButton text="Buy USDT" />
        </div>
      ))}
    </div>
  );
};

export default BuyCryptoGrid;
