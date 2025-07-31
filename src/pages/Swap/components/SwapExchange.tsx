import { useState } from "react";
import ButtonToggle from "../../../components/ui/ButtonToggle";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import CustomButton from "../../../components/ui/CustomButton";
import Exchange from "../../../components/features/Exchange";
import { useModal } from "../../../context/Modal/useModal";

const SwapExchange = () => {
  const [selectedCoin, setSelectedCoin] = useState("Swap");
  const [sell, setSell] = useState("USDT");
  const [buy, setBuy] = useState("EUR");

  const openModal = useModal(v => v.openModal);

  const dropdownSetters = {
    sell: setSell,
    buy: setBuy,
  };

  const handleDropdownClick = (type: "sell" | "buy") => {
    openModal("selectCoin", {
      setValue: dropdownSetters[type],
    });
  };

  return (
    <div className="flex flex-col justify-between w-full md:w-[35%] h-[450px] bg-[#0F0F0F] border border-[#181818] p-4 rounded-[12px]">
      <div className="flex flex-row items-center justify-between md:gap-0 mb-2">
        <div className="w-[80%] h-full">
          <ButtonToggle
            options={["Swap", "Limit", "DCA", "VA"]}
            defaultValue="Swap"
            onChange={(val) => setSelectedCoin(val)}
          />
        </div>
        <div className="border border-[#181818] h-[45px] w-[45px] flex items-center justify-center rounded-[8px] cursor-pointer">
          <img src="/icons/clock.svg" alt="clock" />
        </div>
      </div>

      {selectedCoin === "Swap" ? (
        <>
          <Exchange
            handleOpen={handleDropdownClick}
            sell={sell}
            buy={buy}
          />
          <div className="flex flex-row items-center justify-between gap-4 mt-4">
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
              <p className="p2 text-[#7B7B7B]">Rate Option</p>
              <CustomDropdown
                className="bg-[#1D1D1D] border border-[#181818] text-[#E5FFF2]"
                height="45px"
                selectedText="Never"
                options={["0,9999", "1,0000", "1,0001"]}
                setSelectedType={(val) => console.log("Rate selected:", val)}
              />
            </div>
          </div>

          <CustomButton
            text="Swap now"
            className="h-[40px] w-full self-center text-[14px] md:text-[16px] mt-4"
          />
        </>
      ) : (
        <div className="flex flex-col h-[60%] w-full justify-between mt-4">
          <div className="text-[#FFFFFF] h-[96px] bg-[#1D1D1D] rounded-[8px] w-full flex items-center justify-center">
            Coming soon
          </div>
          <div className="w-full">
            <CustomButton
              text="Swap now"
              className="h-[40px] w-full self-center text-[14px] md:text-[16px]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SwapExchange;
