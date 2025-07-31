import React from "react";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import BorderButton from "../../../components/ui/BorderButton";
import CustomButton from "../../../components/ui/CustomButton";
import { usePlaceOrder } from "../../../context/PlaceOrder/usePlaceOrder";
import PaymentButton from "./PaymentButton";

interface FirstStepProps {
  onNext: () => void;
  onPrev: () => void;
}

const SecondStep: React.FC<FirstStepProps> = ({ onNext, onPrev }) => {
  const {
    side,
    setSide,
    totalAmount,
    setTotalAmount,
    fiatMin,
    setFiatMin,
    fiatMax,
    setFiatMax,
    paymentTimeLimit,
    setPaymentTimeLimit
  } = usePlaceOrder(v => v);

  return (
    <div className="p-3 py-4 md:p-4">
      <div className="h-[44px] mb-4 md:mb-6">
        <ButtonToggle
          options={["I want to buy", "I want to sell"]}
          defaultValue={side}
          onChange={(val) => setSide(val)}
        />
      </div>

      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
        <div className="flex items-center justify-between h-[48px] px-4 mb-2 rounded-[8px] border border-[#181818] bg-[#1D1D1D]">
          <input
            type="text"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="0,9999"
            className="text-[#E5FFF2] bg-transparent p1 outline-none w-full placeholder:text-[#7B7B7B]"
          />
          <span className="ml-2 text-[16px] text-[#7B7B7B] whitespace-nowrap">USDC</span>
        </div>
        <p className="p3 text-[#7B7B7B]">~0,9 UAH</p>
      </div>

      <div className="flex flex-col mb-10 items-start">
        <p className="p2 text-[#7B7B7B] mb-2">Order Limit</p>
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <div className="flex flex-col relative w-full">
            <div className="flex items-center justify-between h-[48px] px-4 rounded-[8px] border border-[#181818] bg-[#1D1D1D]">
              <input
                type="text"
                onChange={(e) => setFiatMin(e.target.value)}
                value={fiatMin}
                placeholder="0,9999"
                className="text-[#E5FFF2] bg-transparent p1 outline-none w-full placeholder:text-[#7B7B7B]"
              />
              <span className="ml-2 text-[16px] text-[#7B7B7B] whitespace-nowrap">USDC</span>
            </div>
            <p className="p3 text-[#7B7B7B] absolute top-[calc(100%+8px)]">~0,9 UAH</p>
          </div>
          <img src="/icons/minus.svg" className="rotate-90 md:rotate-0" alt="minus" />
          <div className="flex flex-col relative w-full">
            <div className="flex items-center justify-between h-[48px] px-4 rounded-[8px] border border-[#181818] bg-[#1D1D1D]">
              <input
                type="text"
                onChange={(e) => setFiatMax(e.target.value)}
                value={fiatMax}
                placeholder="0,9999"
                className="text-[#E5FFF2] bg-transparent p1 outline-none w-full placeholder:text-[#7B7B7B]"
              />
              <span className="ml-2 text-[16px] text-[#7B7B7B] whitespace-nowrap">USDC</span>
            </div>
            <p className="p3 text-[#7B7B7B] absolute top-[calc(100%+8px)]">~0,9 UAH</p>
          </div>
        </div>
      </div>

      <PaymentButton />

      <div className="flex flex-col mb-6 md:mb-8">
        <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
        <CustomDropdown
          height="45px"
          selectedText={paymentTimeLimit}
          options={["30", "60", "90"]}
          setSelectedType={setPaymentTimeLimit}
          className="w-full bg-[#1D1D1D] border-[#181818] text-[#E5FFF2]"
        />
      </div>

      <div className="flex flex-row gap-4">
        <BorderButton
          text="Previous"
          className="h-[40px] w-[50%] flex items-center justify-center text-[14px] md:text-[16px]"
          variant="gray"
          onClick={onPrev}
        />
        <CustomButton
          text="Next"
          className="w-[50%] text-[14px] md:text-[16px]"
          onClick={onNext}
        />
      </div>
    </div>
  );
};

export default SecondStep;
