import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import DatePicker from "../../../components/ui/DatePicker";
import CustomButton from "../../../components/ui/CustomButton";
import BorderButton from "../../../components/ui/BorderButton";

const FilterPanel = () => {
  const [asstetType, setAsstetType] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  return (
    <div className="p-4 pt-6 flex flex-col">
      <div className="flex flex-row justify-between items-end flex-wrap gap-y-4">
        <div className="flex flex-row gap-4 flex-wrap w-full max-w-[90%]">
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
          <div className="flex flex-row gap-1 items-end">
            <CustomButton
              text="Filter"
              className="h-[38px]"
            />
            <BorderButton
              text="Reset"
              className="h-[38px] px-[24px]"
              variant="gray"
            />
          </div>
        </div>
        <div className="flex flex-row items-center gap-2 whitespace-nowrap h-[38px]">
          <img src="/icons/file-plus.svg" alt="file-plus" className="cursor-pointer" />
          <p className="p2 text-[#7B7B7B] whitespace-nowrap">Ad History</p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
