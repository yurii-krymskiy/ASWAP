/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import DatePicker from "../../../components/ui/DatePicker";
import ButtonToggle from "../../../components/ui/ButtonToggle";

const FilterPanelOrders = () => {
  const [coin, setCoin] = useState("All");
  const [currency, setCurrency] = useState("All");
  const [orderType, setOrderType] = useState("All");

  const [selectedCoin, setSelectedCoin] = useState("All");

  return (
    <div className="p-4 pt-6 flex flex-col">
      <div className="flex flex-row justify-between items-end flex-wrap gap-y-4">
        <div className="flex flex-col items-end md:flex-row gap-4 flex-wrap w-[300px] md:w-fit bg-[#0F0F0F] md:bg-transparent border border-[#181818] md:border-none p-3 md:p-0 rounded-[12px] md:rounded-[0]">
          <div className="h-[38px]">
            <ButtonToggle
              options={["All", "Completed", "Canceled"]}
              defaultValue="All"
              onChange={(val) => setSelectedCoin(val)}
            />
          </div>
          <div className="w-full md:w-[145px]">
            <p className="p2 text-[#7B7B7B] mb-2">Coins</p>
            <CustomDropdown
              height="38px"
              selectedText={coin}
              options={["0"]}
              setSelectedType={setCoin}
            />
          </div>
          <div className="w-full md:w-[145px]">
            <p className="p2 text-[#7B7B7B] mb-2">Currency</p>
            <CustomDropdown
              height="38px"
              selectedText={currency}
              options={["0"]}
              setSelectedType={setCurrency}
            />
          </div>
          <div className="w-full md:w-[145px]">
            <p className="p2 text-[#7B7B7B] mb-2">Order Types</p>
            <CustomDropdown
              height="38px"
              selectedText={orderType}
              options={["0"]}
              setSelectedType={setOrderType}
            />
          </div>
          <div className="w-[278px]">
            <p className="p2 text-[#7B7B7B] mb-2 w-full md:w-[300px]">Date</p>
            <DatePicker />
          </div>
        </div>
        <div className="hidden md:flex flex-row items-center gap-2 whitespace-nowrap h-[38px]">
          <img src="/icons/file-plus.svg" alt="file-plus" className="cursor-pointer" />
          <p className="p2 text-[#7B7B7B] whitespace-nowrap">Order History</p>
        </div>
      </div>
    </div>
  );
};

export default FilterPanelOrders;
