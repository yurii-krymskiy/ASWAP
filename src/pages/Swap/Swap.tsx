import { useState } from "react";
import Chart from "./components/Chart";
import SwapExchange from "./components/SwapExchange";
import { swapTabs } from "./static/swapTabs";
import SwapFilterPanel from "./components/SwapFilterPanel";
import SwapGrid from "./components/SwapGrid";
import FilterButton from "../../components/ui/FilterButton";
import Tabs from "../../components/features/Tabs";
import { useModal } from "../../context/Modal/useModal";

const Swap = () => {
  const [activeTab, setActiveTab] = useState("Open Orders");
  const openModal = useModal(v => v.openModal);

  const handleOpen = () => {
    openModal("filterSwap");
  };

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-[40px] mb-15">
      <section className="flex flex-row gap-6  mb-8 md:mb-4">
        <Chart />
        <SwapExchange />
      </section>
      <section>
        <div className="flex flex-row items-center justify-between mb-[12px] md:mb-6">
          <p className="text-[18px] md:text-[24px] text-[#AEAEB8]">My Orders</p>
          <FilterButton handleOpen={handleOpen} />
        </div>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={swapTabs}
            activeKey={activeTab}
            onChange={setActiveTab}
            className="pt-4 justify-start gap-8 text-[14px]"
          />
          <div className="hidden md:block">
            <SwapFilterPanel />
          </div>
          <SwapGrid />
        </div>
      </section>
    </main >
  );
};

export default Swap;
