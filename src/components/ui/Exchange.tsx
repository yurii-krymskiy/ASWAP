import { useState } from "react";
import CustomDropdown from "./CustomDropdown";

const Exchange = () => {
  const [asstetType, setAsstetType] = useState("USDT");

  return (
    <div className="flex flex-col gap-2 relative">
      <div className="bg-[#1D1D1D] p-4 flex justify-between items-center rounded-[8px]">
        <div className="flex flex-col gap-1 w-[144px]">
          <p className="p2 text-[#7B7B7B]">Selling</p>
          <CustomDropdown
            height="42px"
            selectedText={asstetType}
            options={["0"]}
            setSelectedType={setAsstetType}
            icon="/images/Tether(USDT).png"
          />
        </div>

        <div className="flex flex-col gap-1 items-end w-fit">
          <input
            type="text"
            placeholder="0.00"
            className="text-[24px] text-[#7B7B7B] w-[100px] text-end outline-none"
          />
          <input
            type="text"
            placeholder="$0"
            className="text-[16px] text-[#7B7B7B] w-[100px] text-end outline-none"
          />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className="bg-[#0F0F0F] rounded-full w-[30px] h-[30px] flex items-center justify-center cursor-pointer shadow-md">
          <img src="/icons/switch.svg" alt="switch" />
        </div>
      </div>
      <div className="bg-[#1D1D1D] p-4 flex justify-between items-center rounded-[8px]">
        <div className="flex flex-col gap-1 w-[144px]">
          <p className="p2 text-[#7B7B7B]">Selling</p>
          <CustomDropdown
            height="42px"
            selectedText={asstetType}
            options={["0"]}
            setSelectedType={setAsstetType}
            icon="/images/Tether(USDT).png"
          />
        </div>

        <div className="flex flex-col gap-1 items-end w-fit">
          <input
            type="text"
            placeholder="0.00"
            className="text-[24px] text-[#7B7B7B] w-[100px] text-end outline-none"
          />
          <input
            type="text"
            placeholder="$0"
            className="text-[16px] text-[#7B7B7B] w-[100px] text-end outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Exchange;
