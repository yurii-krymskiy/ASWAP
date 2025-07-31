import { useState } from "react";
import CustomCheckbox from "../../../components/ui/CustomCheckbox";
import methods from "../../../json/paymentMethods.json";

interface Props {
  setValue: (v: string[]) => void;
}

const PaymentMethodsModal = ({ setValue }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleMethod = (name: string) => {
    const isSelected = selected.includes(name);

    let updated: string[];
    if (isSelected) {
      updated = selected.filter((item) => item !== name);
    } else {
      if (selected.length >= 5) return; 
      updated = [...selected, name];
    }

    setSelected(updated);
    setValue(updated);
  };

  return (
    <div className="h-fit w-[300px] md:w-[460px] bg-[#0F0F0F] border border-[#181818] rounded-[12px] p-4">
      <p className="text-[18px] text-[#AEAEB8] mb-6">Select Payment Method</p>

      <div className="flex items-center gap-2 bg-[#1D1D1D] border border-[#181818] h-[45px] w-full rounded-[8px] px-3 mb-2">
        <img src="/icons/search-lg.svg" alt="search" className="w-5 h-5" />
        <input
          type="text"
          className="bg-transparent text-[#7B7B7B] outline-none w-full text-[12px]"
          placeholder="Search..."
        />
      </div>

      <p className="text-[12px] text-[#7B7B7B] mb-2">
        Select Payment Method <span className="text-[#DC3434]">(up to 5 payment methods)</span>
      </p>

      <div className="h-[300px] overflow-auto">
        {methods.map((method) => (
          <div
            onClick={() => toggleMethod(method.name)}
            key={method.name}
            className="flex items-center justify-between gap-2 p-2 hover:bg-[#C5C30038] cursor-pointer rounded-[4px]"
          >
            <p className="text-[#E5FFF2] text-[14px]">{method.name}</p>
            <CustomCheckbox
              isChecked={selected.includes(method.name)}
              onChange={() => toggleMethod(method.name)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentMethodsModal;
