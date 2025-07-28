import { useState } from "react";
import StatsCard from "../OnlineAds/components/StatsCard";
import { stats } from "../OnlineAds/static/stats";
import Tabs from "../../components/ui/Tabs";
import { accountTabs } from "./static/tabs";
import MyAccountHeader from "./components/MyAccountHeader";
import FilterPanel from "./components/FilterPanel";
import MyAccountGrid from "./components/MyAccountGrid";
import FilterButton from "../../components/ui/FilterButton";
import CustomModalWrapper from "../../components/ui/CustomModalWrapper";
import TradesInfoMobile from "../../components/ui/TradesInfoMobile";

const MyAccount = () => {
  const [activeTab, setActiveTab] = useState("Normal Ads");
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-[20px] md:mt-[78px]">
      <CustomModalWrapper isOpen={open} onClose={handleClose}>
        <FilterPanel />
      </CustomModalWrapper>
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
          <FilterButton handleOpen={handleOpen} />
        </div>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={accountTabs}
            activeKey={activeTab}
            onChange={setActiveTab}
            className="pt-4"
          />
          <div className="hidden md:block">
            <FilterPanel />
          </div>
          <MyAccountGrid />
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
          <FilterButton handleOpen={handleOpen} />
        </div>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={accountTabs}
            activeKey={activeTab}
            onChange={setActiveTab}
            className="pt-4"
          />
          <div className="hidden md:block">
            <FilterPanel />
          </div>
          <MyAccountGrid />
        </div>
      </div>
    </main>
  );
};

export default MyAccount;
