import { useState } from "react";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import CustomDropdown from "../../../components/ui/CustomDropdown";

const FilterModal = () => {
  const [selectedCoin, setSelectedCoin] = useState("USDT");
  const [currency, setCurrency] = useState("UAH");
  const [paymentMethod, setPaymentMethod] = useState("Monobank");
  const [price, setPrice] = useState("Price");
  console.log(selectedCoin);

  return (
    <div className="bg-[#0F0F0F] border border-[#181818] p-3 rounded-[12px] text-[#7B7B7B] text-[14px] w-[300px]">
      <div className="flex flex-col gap-4">
        <div>
          <p className="text-[10px] text-[#7B7B7B] mb-2">Crypto</p>
          <div className="h-[40px]">
            <ButtonToggle
              options={["USDT", "SOL"]}
              defaultValue="USDT"
              onChange={(val) => setSelectedCoin(val)}
            />
          </div>
        </div>

        <div className="w-full">
          <p className="text-[10px] text-[#7B7B7B] mb-2">Transaction Price</p>
          <input
            type="text"
            className="h-[45px] w-full outline-none bg-[#0F0F0F] border border-[#181818] rounded-[8px] text-[#AEAEB8] text-[16px] pl-3"
            placeholder="2000"
          />
        </div>
        <div className="w-full">
          <p className="text-[10px] text-[#7B7B7B] mb-2">Currency</p>
          <CustomDropdown
            height="45px"
            selectedText={currency}
            options={["0"]}
            setSelectedType={setCurrency}
          />
        </div>

        <div className="w-full">
          <p className="text-[10px] text-[#7B7B7B] mb-2">All ways of payment</p>
          <CustomDropdown
            height="45px"
            selectedText={paymentMethod}
            options={["0"]}
            setSelectedType={setPaymentMethod}
          />
        </div>
        <div className="w-full">
          <p className="text-[10px] text-[#7B7B7B] mb-2">Sort by</p>
          <CustomDropdown
            height="45px"
            selectedText={price}
            options={["0"]}
            setSelectedType={setPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
