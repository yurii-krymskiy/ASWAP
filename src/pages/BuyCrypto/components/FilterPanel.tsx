/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import currencyList from "../../../json/currency.json";
import { sortOptions } from "../static/buyCryptoStatic";
import { useOrders } from "../../../context/Orders/OrderUser";

const FilterPanel = () => {
  const [currency, setCurrency] = useState("UAH");
  const [paymentMethod, setPaymentMethod] = useState("Monobank");
  const [price, setPrice] = useState("Sort by");
  const [transactionPrice, setTransactionPrice] = useState("");

  const { side, setSide } = useOrders(v => v);

  return (
    <div className="flex flex-col rounded-[12px] md:rounded-[0] md:flex-row gap-4 mb-6 p-3 md:p-0 w-[300px] md:w-fit bg-[#0F0F0F] md:bg-transparent border border-[#181818] md:border-none">
      <div className="flex flex-col">
        <p className="p2 text-[#7B7B7B] mb-2">Type</p>
        <div className="h-[44px]">
          <ButtonToggle
            options={["Buy", "Sell"]}
            defaultValue={side}
            onChange={(val) => setSide(val)}
          />
        </div>
      </div>

      <div>
        <p className="p2 text-[#7B7B7B] mb-2">Transaction Price</p>
        <input
          type="text"
          value={transactionPrice}
          onChange={(e) => setTransactionPrice(e.target.value)}
          className="h-[45px] w-full outline-none bg-[#0F0F0F] border border-[#181818] rounded-[8px] text-[#AEAEB8] text-[16px] pl-3"
          placeholder="2000"
        />
      </div>

      <div className="w-full md:w-[119px]">
        <p className="p2 text-[#7B7B7B] mb-2">Currency</p>
        <CustomDropdown
          height="45px"
          selectedText={currency}
          options={currencyList.map(c => c.code)}
          setSelectedType={setCurrency}
        />
      </div>

      <div className="w-full md:w-[145px]">
        <p className="p2 text-[#7B7B7B] mb-2">All ways of payment</p>
        <CustomDropdown
          height="45px"
          selectedText={paymentMethod}
          options={["Monobank", "Privat24", "Revolut"]}
          setSelectedType={setPaymentMethod}
        />
      </div>

      <div className="w-full md:w-[200px]">
        <p className="p2 text-[#7B7B7B] mb-2">Sort by</p>
        <CustomDropdown
          height="45px"
          selectedText={price}
          options={sortOptions}
          setSelectedType={setPrice}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
