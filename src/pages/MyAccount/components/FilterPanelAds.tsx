import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import DatePicker from "../../../components/ui/DatePicker";
import CustomButton from "../../../components/ui/CustomButton";
import BorderButton from "../../../components/ui/BorderButton";

const FilterPanelAds = () => {
  const [asstetType, setAsstetType] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");

  return (
    <div className="p-4 pt-6 flex flex-col">
      <div className="flex flex-row justify-between items-end flex-wrap gap-y-4">
        <div className="flex flex-col md:flex-row gap-4 flex-wrap w-[300px] md:w-fit bg-[#0F0F0F] md:bg-transparent border border-[#181818] md:border-none p-3 md:p-0 rounded-[12px] md:rounded-[0]">
          <div className="w-full md:w-[150px]">
            <p className="p2 text-[#7B7B7B] mb-2">Asset Type</p>
            <CustomDropdown
              height="38px"
              selectedText={asstetType}
              options={["0"]}
              setSelectedType={setAsstetType}
            />
          </div>
          <div className="w-full md:w-[150px]">
            <p className="p2 text-[#7B7B7B] mb-2">Type</p>
            <CustomDropdown
              height="38px"
              selectedText={type}
              options={["0"]}
              setSelectedType={setType}
            />
          </div>
          <div className="w-full md:w-[150px]">
            <p className="p2 text-[#7B7B7B] mb-2">Status</p>
            <CustomDropdown
              height="38px"
              selectedText={status}
              options={["0"]}
              setSelectedType={setStatus}
            />
          </div>
          <div>
            <p className="p2 text-[#7B7B7B] mb-2 w-full md:w-[300px]">Date</p>
            <DatePicker />
          </div>
          <div className="flex flex-row gap-2 items-end">
            <CustomButton
              text="Filter"
              className="h-[38px] w-full md:w-fit text-[14px]"
            />
            <BorderButton
              text="Reset"
              className="h-[38px] px-[24px] text-[14px] flex justify-center w-full md:w-fit"
              variant="gray"
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center gap-2 whitespace-nowrap h-[38px]">
          <img src="/icons/file-plus.svg" alt="file-plus" className="cursor-pointer" />
          <p className="p2 text-[#7B7B7B] whitespace-nowrap">Ad History</p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanelAds;
