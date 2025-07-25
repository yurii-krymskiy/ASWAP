import React from "react";

const ProgressSteps = () => {
  return (
    <div className="flex flex-row justify-between items-center relative mb-10 w-full">
      <div className="bg-[#181818] h-[2px] absolute w-full top-[20%]" />
      <div className="flex flex-col gap-2 z-10">
        <div className="bg-[linear-gradient(180deg,_#FFFD00_-5.87%,_#999800_105.45%)] w-[24px] h-[24px] flex justify-center items-center rounded-full">
          <p className="p2 text-[#020313] font-semibold">1</p>
        </div>
        <p className="p2 text-[#FFFFFF]">Set Type & Price</p>
      </div>
      <div className="flex flex-col gap-2 z-10 items-center">
        <div className="bg-[#202020] w-[24px] h-[24px] flex justify-center items-center rounded-full">
          <p className="p2 text-[#C5C30038] font-semibold">2</p>
        </div>
        <p className="p2 text-[#7B7B7B]">Set Total Amount & Payment Method</p>
      </div>
      <div className="flex flex-col gap-2 z-10 items-end">
        <div className="bg-[#202020] w-[24px] h-[24px] flex justify-center items-center rounded-full">
          <p className="p2 text-[#C5C30038] font-semibold">3</p>
        </div>
        <p className="p2 text-[#7B7B7B]">Set Remarks & Automatic Response</p>
      </div>
    </div>
  );
};

export default ProgressSteps;
