
import { useState } from "react";
import OnlineAdsHeader from "./components/OnlineAdsHeader";
import OnlineAdsStats from "./components/OnlineAdsStats";
import ButtonToggle from "../../components/ui/ButtonToggle";
import Tabs from "../../components/ui/Tabs";
import BuyGrid from "./components/BuyGrid";
import SellGrid from "./components/SellGrid";
import { tabList } from "./static/tabs";
import Reviews from "./components/Reviews";
import TradesInfoMobile from "../../components/ui/TradesInfoMobile";
const OnlineAds = () => {
  const [selectedCoin, setSelectedCoin] = useState("Online Ads");
  const [activeTab, setActiveTab] = useState("Normal");

  const returnContent = () => {
    switch (selectedCoin) {
      case "Online Ads":
        return (
          <>
            <Tabs tabs={tabList} activeKey={activeTab} onChange={setActiveTab} className="text-[14px]" />
            <div className="flex flex-col p-3 md:p-4 pb-0 h-full justify-between overflow-auto">
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
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-6 mb-15">
      <section>
        <OnlineAdsHeader />
        <TradesInfoMobile />

        <div className="bg-[#0F0F0F] rounded-[12px] border border-[#181818] flex flex-row h-[700px] md:h-[550px]">
          <OnlineAdsStats />
          <div className="flex flex-col w-full md:w-[75%]">
            <div className="p-3 md:p-4">
              <div className="h-[44px]">
                <ButtonToggle
                  options={["Online Ads", "Feedbaack (1234)"]}
                  defaultValue="Online Ads"
                  onChange={(val) => setSelectedCoin(val)}
                />
              </div>
            </div>
            {returnContent()}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OnlineAds;
