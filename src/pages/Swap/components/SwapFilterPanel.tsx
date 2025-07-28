import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import DatePicker from "../../../components/ui/DatePicker";

const SwapFilterPanel = () => {
  const [coins, setCoins] = useState("All");

  return (
    <div className="p-4 pt-6 flex flex-col">
      <div className="flex flex-row gap-4 flex-wrap items-end">
        <div className="w-[145px]">
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
