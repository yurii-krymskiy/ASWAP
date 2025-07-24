import { useState } from "react";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import CustomButton from "../../../components/ui/CustomButton";

const SwapExchange = () => {
  const [selectedCoin, setSelectedCoin] = useState("Swap");
  console.log(selectedCoin);
  const [asstetType, setAsstetType] = useState("USDT");

  return (
    <div className="flex flex-col justify-between basis-[35%] grow-2 h-[500px] bg-[#0F0F0F] border border-[#181818] p-4 rounded-[12px]">
      <div className="flex flex-row items-center justify-between">
        <ButtonToggle
          options={["Swap", "Limit", "DCA", "VA"]}
          defaultValue="Swap"
          onChange={(val) => setSelectedCoin(val)}
        />
        <div className="border border-[#181818] h-[45px] w-[45px] flex items-center justify-center rounded-[8px] cursor-pointer">
          <img src="/icons/clock.svg" alt="clock" />
        </div>
      </div>

      <div className="flex flex-col gap-2 relative">
        <div className="bg-[#1D1D1D] p-4 flex justify-between items-center rounded-[8px]">
          <div className="flex flex-col gap-1 w-[144px]">
            <p className="p2 text-[#7B7B7B]">Selling</p>
            <CustomDropdown
              height="42px"
              selectedText={asstetType}
              options={["0"]}
              setSelectedType={setAsstetType}
              icon="/images/Tether(USDT).png"
            />
          </div>

          <div className="flex flex-col gap-1 items-end w-fit">
            <input
              type="text"
              placeholder="0.00"
              className="text-[24px] text-[#7B7B7B] w-[100px] text-end outline-none"
            />
            <input
              type="text"
              placeholder="$0"
              className="text-[16px] text-[#7B7B7B] w-[100px] text-end outline-none"
            />
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <div className="bg-[#0F0F0F] rounded-full w-[30px] h-[30px] flex items-center justify-center cursor-pointer shadow-md">
            <img src="/icons/switch.svg" alt="switch" />
          </div>
        </div>
        <div className="bg-[#1D1D1D] p-4 flex justify-between items-center rounded-[8px]">
          <div className="flex flex-col gap-1 w-[144px]">
            <p className="p2 text-[#7B7B7B]">Selling</p>
            <CustomDropdown
              height="42px"
              selectedText={asstetType}
              options={["0"]}
              setSelectedType={setAsstetType}
              icon="/images/Tether(USDT).png"
            />
          </div>

          <div className="flex flex-col gap-1 items-end w-fit">
            <input
              type="text"
              placeholder="0.00"
              className="text-[24px] text-[#7B7B7B] w-[100px] text-end outline-none"
            />
            <input
              type="text"
              placeholder="$0"
              className="text-[16px] text-[#7B7B7B] w-[100px] text-end outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-col gap-1 flex-2">
          <p className="p2 text-[#7B7B7B]">Sell USDT at rate</p>
          <div className="flex flex-row items-center justify-between px-4 bg-[#1D1D1D] border border-[#181818] rounded-[8px] h-[45px]">
            <div className="flex flex-row gap-1.5 items-center">
              <p className="p1 text-[#E5FFF2]">0,9999</p>
              <p className="text-[12px] text-[#7B7B7B]">~0,9</p>
            </div>
            <p className="text-[#7B7B7B] p2">USDC</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <p className="p2 text-[#7B7B7B]">Sell USDT at rate</p>
          <CustomDropdown
            className="bg-[#1D1D1D] border border-[#181818] text-[#E5FFF2]"
            height="45px"
            selectedText="Never"
            options={["0,9999", "1,0000", "1,0001"]}
            setSelectedType={(val) => console.log(val)}
          />
        </div>
      </div>
      <CustomButton
        text="Place Limit Offer"
        className="h-[40px] w-full"
      />
      <div className="flex flex-row items-center justify-center gap-1">
        <img src="/icons/arrow.svg" alt="arrow" />
        <p className="p3 text-[#7B7B7B]">Limit Order Summary</p>
      </div>
    </div>
  );
};

export default SwapExchange;
