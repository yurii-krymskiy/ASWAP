import { useState } from "react";
import { items, p2pTabs } from "./static/tabs";
import ProgressSteps from "./components/ProgressSteps";
import ThirdStep from "./components/ThirdStep";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";
import Tabs from "../../components/features/Tabs";

const P2P = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeTab, setActiveTab] = useState("P2P");

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[16px] md:px-[40px] mt-6 mb-15 flex items-center flex-col">
      <div className="flex flex-col items-start gap-3 md:items-center md:flex-row justify-between mb-6 w-full">
        <p className="text-[#AEAEB8] text-[24px] font-medium">Post Normal Ad</p>
        <div className="flex flex-row justify-between gap-0 items-center md:justify-start w-full md:w-fit md:gap-6">
          {items.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <img src={icon} alt={label} />
              <p className="p2 text-[#7B7B7B]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <ProgressSteps activeStep={activeStep} />
      <div className="flex flex-col bg-[#0F0F0F] border border-[#181818] rounded-[12px] w-full md:w-[600px]">
        <Tabs
          tabs={p2pTabs}
          activeKey={activeTab}
          onChange={setActiveTab}
          className="pt-4 justify-start gap-8"
        />
        {activeStep === 1 && <FirstStep onNext={() => setActiveStep(2)} />}
        {activeStep === 2 && <SecondStep onNext={() => setActiveStep(3)} onPrev={() => setActiveStep(1)} />}
        {activeStep === 3 && <ThirdStep onPrev={() => setActiveStep(2)} />}
      </div>
    </main>
  );
};

export default P2P;
