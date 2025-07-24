
import React, { useState } from "react";
import OnlineAdsHeader from "./components/OnlineAdsHeader";
import OnlineAdsStats from "./components/OnlineAdsStats";
import ButtonToggle from "../../components/ui/ButtonToggle";
import Tabs from "../../components/ui/Tabs";
import BuyGrid from "./components/BuyGrid";
import SellGrid from "./components/SellGrid";
import { tabList } from "./static/tabs";
import Reviews from "./components/Reviews";
const OnlineAds = () => {
  const [selectedCoin, setSelectedCoin] = useState("Online Ads");
  const [activeTab, setActiveTab] = useState("Normal");

  const returnContent = () => {
    switch (selectedCoin) {
      case "Online Ads":
        return (
          <>
            <Tabs tabs={tabList} activeKey={activeTab} onChange={setActiveTab} />
            <div className="flex flex-col p-4 h-full justify-between">
              <BuyGrid />
              <SellGrid />
            </div>
          </>
        );
      case "Feedbaack (1234)":
        return (
          <Reviews />
        );
    }
  };

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[40px] mb-15">
      <section>
        <OnlineAdsHeader />
        <div className="bg-[#0F0F0F] rounded-[12px] border border-[#181818] flex flex-row">
          <OnlineAdsStats />
          <div className="flex basis-[75%] flex-col">
            <div className="p-4">
              <ButtonToggle
                options={["Online Ads", "Feedbaack (1234)"]}
                defaultValue="Online Ads"
                onChange={(val) => setSelectedCoin(val)}
              />
            </div>
            {returnContent()}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineAds;
