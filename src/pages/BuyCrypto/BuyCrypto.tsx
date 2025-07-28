/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import BuyCryptoGrid from "./components/BuyCryptoGrid";
import CryptoCard from "./components/CryptoCard";
import { cryptoCards } from "./static/cryptoCards";
import CustomModalWrapper from "../../components/ui/CustomModalWrapper";
import FilterButton from "../../components/ui/FilterButton";
import FilterPanel from "./components/FilterPanel";

const BuyCrypto = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);


  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-[20px] md:mt-[40px]">
      <CustomModalWrapper isOpen={open} onClose={handleClose}>
        <FilterPanel />
      </CustomModalWrapper>
      <section className="flex flex-col mb-8 md:mb-25">
        <div className="flex flex-row items-center justify-between mb-[18px] md:mb-8">
          <p className="text-[18px] md:text-[24px] text-[#AEAEB8]">Buy Crypto</p>
          <FilterButton handleOpen={handleOpen} />
        </div>
        <div className="hidden md:block">
          <FilterPanel />
        </div>

        <BuyCryptoGrid />
      </section>

      <section className="flex flex-col items-center mb-10 md:mb-20">
        <p className="text-[18px] md:text-[32px] text-[#E5FFF2] leading-[118%] mb-6">Deposit Local Fiat Currencies to Buy Crypto</p>
        <p className="text-[14px] md:text-[16px] text-center text-[#7B7B7B] mb-6 md:mb-11">Convert cash into crypto. Deposit over 65+ fiat currencies to get started with crypto trading.</p>

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
