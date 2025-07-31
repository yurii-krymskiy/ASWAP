import { useState } from "react";
import StatsCard from "../OnlineAds/components/StatsCard";
import { stats } from "../OnlineAds/static/stats";
import { accountTabsAds, accountTabsOrders } from "./static/tabs";
import MyAccountHeader from "./components/MyAccountHeader";
import FilterButton from "../../components/ui/FilterButton";
import MyAccountGridAds from "./components/MyAccountGridAds";
import MyAccountGridOrders from "./components/MyAccountGridOrders";
import FilterPanelAds from "./components/FilterPanelAds";
import FilterPanelOrders from "./components/FilterPanelOrders";
import TradesInfoMobile from "../../components/features/TradesInfoMobile";
import Tabs from "../../components/features/Tabs";
import { useModal } from "../../context/Modal/useModal";

const MyAccount = () => {
  const [activeTabOrders, setActiveTabOrders] = useState("Processing");
  const [activeTabAds, setActiveTabAds] = useState("Normal Ads");
  const openModal = useModal(v => v.openModal);

  const handleOpenOrders = () => {
    openModal("filterOrders");
  };

  const handleOpenAds = () => {
    openModal("filterAds");
  };

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-6 md:mt-[40px]">
      <MyAccountHeader />

      <div className="flex-col gap-2 mb-8 hidden md:flex">
        <div className="flex flex-row gap-2 h-[100px]">
          {stats.map((item, idx) => (
            <StatsCard
              bgColor="#0F0F0F"
              key={idx}
              title={item.title}
              value={item.value}
              isAdditional={item.isAdditional}
            />
          ))}
        </div>
      </div>

      <TradesInfoMobile />

      <div className="mb-8">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-row gap-4 items-center">
            <p className="text-[18px] text-[#AEAEB8]">My Ads</p>
            <div className="flex md:hidden flex-row gap-2 items-center">
              <img src="/icons/file-plus.svg" alt="file-plus" />
              <p className="text-[#7B7B7B] text-[14px] font-medium">Ad History</p>
            </div>
          </div>
          <FilterButton handleOpen={handleOpenAds} />
        </div>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={accountTabsAds}
            activeKey={activeTabAds}
            onChange={setActiveTabAds}
            className="pt-4 text-[14px]"
          />
          <div className="hidden md:block">
            <FilterPanelAds />
          </div>
          <MyAccountGridAds />
        </div>
      </div>

      <div className="mb-8">
        <div className="flex flex-row items-center justify-between mb-4">
          <div className="flex flex-row gap-4 items-center">
            <p className="text-[18px] text-[#AEAEB8]">My Orders</p>
            <div className="flex md:hidden flex-row gap-2 items-center">
              <img src="/icons/file-plus.svg" alt="file-plus" />
              <p className="text-[#7B7B7B] text-[14px] font-medium">Orders History</p>
            </div>
          </div>
          <FilterButton handleOpen={handleOpenOrders} />
        </div>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={accountTabsOrders}
            activeKey={activeTabOrders}
            onChange={setActiveTabOrders}
            className="pt-4 text-[14px]"
          />
          <div className="hidden md:block">
            <FilterPanelOrders />
          </div>
          <MyAccountGridOrders />
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
