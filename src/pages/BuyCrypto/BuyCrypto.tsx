/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import ButtonToggle from "../../components/ui/ButtonToggle";
import CustomDropdown from "../../components/ui/CustomDropdown";
import BuyCryptoGrid from "./components/BuyCryptoGrid";
import CryptoCard from "./components/CryptoCard";
import { cryptoCards } from "./static/cryptoCards";

const BuyCrypto = () => {
  const [selectedCoin, setSelectedCoin] = useState("USDT");
  const [currency, setCurrency] = useState("UAH");
  const [paymentMethod, setPaymentMethod] = useState("Monobank");
  const [price, setPrice] = useState("Price");


  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[78px]">
      <section className="flex flex-col mb-25">
        <p className="text-[24px] text-[#AEAEB8] mb-8">Buy Crypto</p>

        <div className="flex flex-row gap-4 mb-6">
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
          <div>
            <p className="p2 text-[#7B7B7B] mb-2">Currency</p>
            <CustomDropdown
              selectedText={currency}
              options={["0"]}
              setSelectedType={setCurrency}
            />
          </div>

          <div>
            <p className="p2 text-[#7B7B7B] mb-2">All ways of payment</p>
            <CustomDropdown
              selectedText={paymentMethod}
              options={["0"]}
              setSelectedType={setPaymentMethod}
            />
          </div>
          <div>
            <p className="p2 text-[#7B7B7B] mb-2">Sort by</p>
            <CustomDropdown
              selectedText={price}
              options={["0"]}
              setSelectedType={setPrice}
            />
          </div>
        </div>

        <BuyCryptoGrid />
      </section>

      <section className="flex flex-col items-center mb-20">
        <p className="text-[32px] text-[#E5FFF2] leading-[118%] mb-6">Deposit Local Fiat Currencies to Buy Crypto</p>
        <p className="p1] text-[#7B7B7B] mb-11">Convert cash into crypto. Deposit over 65+ fiat currencies to get started with crypto trading.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cryptoCards.map((card, idx) => (
            <CryptoCard key={idx} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default BuyCrypto;
