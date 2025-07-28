/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";

const FilterPanel = () => {
  const [selectedCoin, setSelectedCoin] = useState("UAH");
  const [currency, setCurrency] = useState("UAH");
  const [paymentMethod, setPaymentMethod] = useState("Monobank");
  const [price, setPrice] = useState("Price");
  console.log(selectedCoin);

  return (
    <div className="flex flex-col rounded-[12px] md:rounded-[0] md:flex-row gap-4 mb-6 p-3 md:p-0  w-[300px] md:w-fit bg-[#0F0F0F] md:bg-transparent border border-[#181818] md:border-none">
      <div className="flex flex-col">
        <p className="p2 text-[#7B7B7B] mb-2">Crypto</p>
        <div className="cursor-pointer h-[45px] w-full md:w-[119px] bg-[#0F0F0F] border border-[#181818] rounded-[8px] text-[#AEAEB8] text-[14px] md:text-[16px] flex items-center justify-between px-3">
          {selectedCoin}
          <img src="/icons/arrow.svg" alt="arrow" />
        </div>
      </div>

      <div>
        <p className="p2 text-[#7B7B7B] mb-2">Transaction Price</p>
        <input
          type="text"
          className="h-[45px] w-full outline-none bg-[#0F0F0F] border border-[#181818] rounded-[8px] text-[#AEAEB8] text-[16px] pl-3"
          placeholder="2000"
        />
      </div>
      <div className="w-full md:w-[119px]">
        <p className="p2 text-[#7B7B7B] mb-2">Currency</p>
        <CustomDropdown
          height="45px"
          selectedText={currency}
          options={["0"]}
          setSelectedType={setCurrency}
        />
      </div>

      <div className="w-full md:w-[145px]">
        <p className="p2 text-[#7B7B7B] mb-2">All ways of payment</p>
        <CustomDropdown
          height="45px"
          selectedText={paymentMethod}
          options={["0"]}
          setSelectedType={setPaymentMethod}
        />
      </div>
      <div className="w-full md:w-[119px]">
        <p className="p2 text-[#7B7B7B] mb-2">Sort by</p>
        <CustomDropdown
          height="45px"
          selectedText={price}
          options={["0"]}
          setSelectedType={setPrice}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
