import React, { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import DatePicker from "../../../components/ui/DatePicker";
import ButtonToggle from "../../../components/ui/ButtonToggle";

const SwapFilterPanel = () => {
  const [asstetType, setAsstetType] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const [selectedCoin, setSelectedCoin] = useState("All");
  console.log(selectedCoin);

  return (
    <div className="p-4 pt-6 flex flex-col">
      <div className="flex flex-row gap-4 flex-wrap items-end">
        <div className="h-[38px]">
          <ButtonToggle
            options={["All", "Unpaid", "Paid", "Appeal in Progress"]}
            defaultValue="All"
            onChange={(val) => setSelectedCoin(val)}
          />
        </div>
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
      </div>
    </div>
  );
};

export default SwapFilterPanel;
