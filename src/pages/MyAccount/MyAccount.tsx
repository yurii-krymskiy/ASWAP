import React, { useState } from "react";
import StatsCard from "../OnlineAds/components/StatsCard";
import { stats } from "../OnlineAds/static/stats";
import Tabs from "../../components/ui/Tabs";
import { accountTabs } from "./static/tabs";
import MyAccountHeader from "./components/MyAccountHeader";
import FilterPanel from "./components/FilterPanel";
import MyAccountGrid from "./components/MyAccountGrid";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("Normal");


  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[40px] mb-15">
      <section>
        <MyAccountHeader />
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex flex-row gap-2 h-[100px]">
            <div className="bg-[#1D1D1D] border flex flex-row justify-between border-[#181818] rounded-[8px] w-full p-3 items-start">
              <div className="flex flex-col gap-1">
                <div className="flex flex-row gap-1 items-center">
                  <img src="/icons/coins-swap-01.svg" alt="coins-swap" />
                  <p className="p2 text-[#7B7B7B]">All Trades</p>
                </div>
                <p className="p1 text-[#E5FFF2]">
                  4432 Time(s)
                </p>
                <div className="text-[#7B7B7B] text-[12px] flex flex-row gap-1">
                  <p className="text-[#3DF097]">Buy 19</p>
                  /
                  <p className="text-[#DC3434]">Sell 3216</p>
                </div>
              </div>
              <img src="/icons/info-circle.svg" alt="info-circle" />
            </div>
            {stats.slice(0, 4).map((item, idx) => (
              <StatsCard
                height="100%"
                key={idx}
                title={item.title}
                value={item.value}
              />
            ))}
          </div>
        </div>

        <div className="mb-8">
          <p className="text-[18px] text-[#AEAEB8] mb-4">My Ads</p>
          <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
            <Tabs
              tabs={accountTabs}
              activeKey={activeTab}
              onChange={setActiveTab}
              className="pt-4"
            />
            <FilterPanel />
            <MyAccountGrid />
          </div>
        </div>

        <div>
          <p className="text-[18px] text-[#AEAEB8] mb-4">My Orders</p>
          <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
            <Tabs
              tabs={accountTabs}
              activeKey={activeTab}
              onChange={setActiveTab}
              className="pt-4"
            />
            <FilterPanel />
            <MyAccountGrid />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyAccount;
