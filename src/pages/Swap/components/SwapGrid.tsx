import React from "react";
import GridButton from "../../../components/ui/GridButton";

const SwapGrid = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-[repeat(6,auto)] justify-items-start gap-y-2 items-center rounded-[8px]">
        <p className="p2 text-[#7B7B7B] mb-1">Type/Date</p>
        <p className="p2 text-[#7B7B7B] mb-1">Order number</p>
        <p className="p2 text-[#7B7B7B] mb-1">Price</p>
        <p className="p2 text-[#7B7B7B] mb-1">Fiat / Crypto Amount</p>
        <p className="p2 text-[#7B7B7B] mb-1">Payment Method</p>
        <p className="p2 text-[#7B7B7B] mb-1">Status</p>

        {[...Array(5)].map((_, index) => (
          <div className="contents" key={index}>
            <div className="col-span-full h-[1px] w-[100%] bg-[#181818]" />
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1 items-center">
                <p className="p1 text-[#DC3434]">Sell</p>
                <p className="p1 text-[#E5FFF2] uppercase">UAH</p>
              </div>
              <p className="p2 text-[#7B7B7B]">55895894587457873</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="p1 text-[#E5FFF2]">22759648584630833152</p>
              <img src="/icons/copy.svg" alt="copy" />
            </div>
            <p className="p1 text-[#E5FFF2]">200.00 USDT</p>
            <div className="flex flex-col gap-1">
              <p className="p1 text-[#E5FFF2]">10,590.38 UAH</p>
              <p className="p2 text-[#7B7B7B]">
                10,590.38 UAH
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="p1 text-[#E5FFF2]">200.00 USDT</p>
              <GridButton
                content={
                  <div className="flex flex-row items-center gap-1">
                    <img src="/icons/message-text-square.svg" alt="text-square" />
                    <p>Chat</p>
                  </div>
                }
              />
            </div>

            <div className="flex flex-col">
              <p className="p1 text-[#3DF097]">
                Completed
              </p>
              <p className="underline p2 text-[#7B7B7B] cursor-pointer">Receipt</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwapGrid;
