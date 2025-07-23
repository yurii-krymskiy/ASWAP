/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import OnlineAdsHeader from "./components/OnlineAdsHeader";
import OnlineAdsStats from "./components/OnlineAdsStats";
import ButtonToggle from "../../components/ui/ButtonToggle";
import Tabs from "./components/Tabs";
import BuyGrid from "./components/BuyGrid";
import SellGrid from "./components/SellGrid";
const OnlineAds = () => {
  const [selectedCoin, setSelectedCoin] = useState("Online Ads");

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[40px] mb-15">
      <section>
        <OnlineAdsHeader />
        <div className="bg-[#0F0F0F] rounded-[12px] border border-[#181818] flex flex-row">
          <OnlineAdsStats />
          <div className="flex basis-[75%] flex-col">
            <div className="p-4 mb-4">
              <ButtonToggle
                options={["Online Ads", "Feedbaack (1234)"]}
                defaultValue="Online Ads"
                onChange={(val) => setSelectedCoin(val)}
              />
            </div>
            <Tabs />
            <div className="flex flex-col p-4 h-full justify-around">
              <BuyGrid />
              <SellGrid />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineAds;
