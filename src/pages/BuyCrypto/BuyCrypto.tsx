/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import ButtonToggle from "../../components/ui/ButtonToggle";
import CustomDropdown from "../../components/ui/CustomDropdown";
import BuyCryptoGrid from "./components/BuyCryptoGrid";
import CryptoCard from "./components/CryptoCard";
import { cryptoCards } from "./static/cryptoCards";
import CustomModalWrapper from "../../components/ui/CustomModalWrapper";
import FilterModal from "./components/FilterModal";

const BuyCrypto = () => {
  const [selectedCoin, setSelectedCoin] = useState("USDT");
  const [currency, setCurrency] = useState("UAH");
  const [paymentMethod, setPaymentMethod] = useState("Monobank");
  const [price, setPrice] = useState("Price");
  console.log(selectedCoin);

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-[20px] md:mt-[78px]">
      <CustomModalWrapper isOpen={open} onClose={handleClose}>
        <FilterModal />
      </CustomModalWrapper>
      <section className="flex flex-col mb-8 md:mb-25">
        <div className="flex flex-row items-center justify-between mb-[18px] md:mb-8">
          <p className="text-[18px] md:text-[24px] text-[#AEAEB8]">Buy Crypto</p>
          <button className="flex md:hidden flex-row items-center bg-[#0F0F0F] border border-[#181818] rounded-[4px] py-2 px-3 gap-1.5" onClick={handleOpen}>
            <img src="/icons/filter.svg" alt="filter" />
            <p className="text-[14px] text-[#7B7B7B] font-medium">Filters</p>
          </button>
        </div>
        <div className="hidden md:flex flex-row gap-4 mb-6">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <p className="p2 text-[#7B7B7B] mb-2">Crypto</p>
              <ButtonToggle
                options={["USDT", "SOL"]}
                defaultValue="USDT"
                onChange={(val) => setSelectedCoin(val)}
              />
            </div>
          </div>

          <div>
            <p className="p2 text-[#7B7B7B] mb-2">Transaction Price</p>
            <input
              type="text"
              className="h-[45px] outline-none bg-[#0F0F0F] border border-[#181818] rounded-[8px] text-[#AEAEB8] text-[16px] pl-3"
              placeholder="2000"
            />
          </div>
          <div className="w-[119px]">
            <p className="p2 text-[#7B7B7B] mb-2">Currency</p>
            <CustomDropdown
              height="45px"
              selectedText={currency}
              options={["0"]}
              setSelectedType={setCurrency}
            />
          </div>

          <div className="w-[145px]">
            <p className="p2 text-[#7B7B7B] mb-2">All ways of payment</p>
            <CustomDropdown
              height="45px"
              selectedText={paymentMethod}
              options={["0"]}
              setSelectedType={setPaymentMethod}
            />
          </div>
          <div className="w-[119px]">
            <p className="p2 text-[#7B7B7B] mb-2">Sort by</p>
            <CustomDropdown
              height="45px"
              selectedText={price}
              options={["0"]}
              setSelectedType={setPrice}
            />
          </div>
        </div>

        <BuyCryptoGrid />
      </section>

      <section className="flex flex-col items-center mb-10 md:mb-20">
        <p className="text-[18px] md:text-[32px] text-[#E5FFF2] leading-[118%] mb-6">Deposit Local Fiat Currencies to Buy Crypto</p>
        <p className="text-[14px] md:text-[16px] text-center text-[#7B7B7B] mb-11">Convert cash into crypto. Deposit over 65+ fiat currencies to get started with crypto trading.</p>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 md:gap-4">
          {cryptoCards.map((card, idx) => (
            <CryptoCard key={idx} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuyCrypto;
