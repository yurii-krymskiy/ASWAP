import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import DatePicker from "../../../components/ui/DatePicker";

const SwapFilterPanel = () => {
  const [coins, setCoins] = useState("All");

  return (
    <div className="p-4 pt-6 flex flex-col rounded-[12px] md:rounded-[0] md:flex-row w-[300px] md:w-fit bg-[#0F0F0F] md:bg-transparent border border-[#181818] md:border-none">
      <div className="flex flex-row gap-4 flex-wrap items-end">
        <div className="w-full md:w-[145px]">
          <p className="p2 text-[#7B7B7B] mb-2">Coins</p>
          <CustomDropdown
            height="38px"
            selectedText={coins}
            options={["0"]}
            setSelectedType={setCoins}
          />
        </div>
        <div className="w-[280px]">
          <p className="p2 text-[#7B7B7B] mb-2">Date</p>
          <DatePicker />
        </div>
      </div>
    </div>
  );
};

export default SwapFilterPanel;
