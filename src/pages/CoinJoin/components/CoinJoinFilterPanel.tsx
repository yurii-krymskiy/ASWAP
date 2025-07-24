import React, { useState } from "react";
import DatePicker from "../../../components/ui/DatePicker";
import CustomDropdown from "../../../components/ui/CustomDropdown";

const CoinJoinFilterPanel = () => {
  const [asstetType, setAsstetType] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  return (
    <div className="p-4 pt-6 flex flex-col">
      <div className="flex flex-row  items-end flex-wrap gap-4 w-full">
        <div className="w-[13%]">
          <p className="p2 text-[#7B7B7B] mb-2">Asset Type</p>
          <CustomDropdown
            height="38px"
            selectedText={asstetType}
            options={["0"]}
            setSelectedType={setAsstetType}
          />
        </div>
        <div className="w-[13%]">
          <p className="p2 text-[#7B7B7B] mb-2">Type</p>
          <CustomDropdown
            height="38px"
            selectedText={type}
            options={["0"]}
            setSelectedType={setType}
          />
        </div>
        <div className="w-[13%]">
          <p className="p2 text-[#7B7B7B] mb-2">Status</p>
          <CustomDropdown
            height="38px"
            selectedText={status}
            options={["0"]}
            setSelectedType={setStatus}
          />
        </div>
        <div>
          <p className="p2 text-[#7B7B7B] mb-2">Date</p>
          <DatePicker />
        </div>
        <div className="flex items-center gap-2 bg-[#0F0F0F] border border-[#181818] h-[38px] w-[239px] rounded-[8px] px-3">
          <img src="/icons/search-lg.svg" alt="search" className="w-5 h-5" />
          <input
            type="text"
            className="bg-transparent text-[#7B7B7B] outline-none w-full text-[12px]"
            placeholder="Search..."
          />
        </div>
      </div>
    </div>
  );
};

export default CoinJoinFilterPanel;
