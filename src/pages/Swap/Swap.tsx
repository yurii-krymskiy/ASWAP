import { useState } from "react";
import Chart from "./components/Chart";
import Tabs from "../../components/ui/Tabs";
import SwapExchange from "./components/SwapExchange";
import { swapTabs } from "./static/swapTabs";
import SwapFilterPanel from "./components/SwapFilterPanel";
import SwapGrid from "./components/SwapGrid";

const Swap = () => {
  const [activeTab, setActiveTab] = useState("Open Orders");

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[40px] mb-15">
      <section className="flex flex-row gap-6 mb-4">
        <Chart />
        <SwapExchange />
      </section>
      <section>
        <p className="text-[18px] text-[#AEAEB8] mb-4">My Orders</p>
        <div className="bg-[#0F0F0F] border border-[#181818] rounded-[12px]">
          <Tabs
            tabs={swapTabs}
            activeKey={activeTab}
            onChange={setActiveTab}
            className="pt-4"
          />
          <SwapFilterPanel />
          <SwapGrid />
        </div>
      </section>
    </main >
  );
};

export default Swap;
