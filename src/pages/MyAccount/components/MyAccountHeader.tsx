import React from "react";
import ToggleSwitch from "../../../components/ui/ToggleSwitch";
import Stars from "../../../components/ui/Stars";

const MyAccountHeader = () => {
  return (
    <div className="flex flex-row justify-between items-center mb-8">
      <div className="flex flex-row gap-4 items-center">
        <div
          className="
            relative w-[48px] h-[48px] bg-[#7B7B7B] border border-[#181818] rounded-full text-[#020313] flex items-center justify-center
            after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-[#3DF097]
            after:bottom-0 after:right-0 after:rounded-full after:border after:border-[#030303] text-[16px] uppercase
          "
        >
          AT
        </div>

        <div className="flex flex-col">
          <p className="p1 text-[#E5FFF2] mb-1">AnnTomson</p>
          <div className="p3 text-[#7B7B7B] flex flex-row items-center gap-2">
            <p>Online</p>
            <ToggleSwitch />
            <p>| Joined on 2023-04-25 | Deposit 500.00 USDT</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-end">
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
    </div>
  );
};

export default MyAccountHeader;
