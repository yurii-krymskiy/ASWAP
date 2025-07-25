import { useState } from "react";
import { items } from "./static/tabs";
import ProgressSteps from "./components/ProgressSteps";
import ThirdStep from "./components/ThirdStep";
import FirstStep from "./components/FirstStep";
import SecondStep from "./components/SecondStep";

const P2P = () => {
  const [activeStep, setActiveStep] = useState(1);

  // Example: You'd trigger setActiveStep(2) when moving to second step, etc.
  // For demo, just keep state here.

  return (
    <main className="w-screen max-w-[1400px] mx-auto px-[40px] mt-[40px] mb-15 flex items-center flex-col">
      <div className="flex flex-row items-center justify-between mb-6 w-full">
        <p className="text-[#AEAEB8] text-[24px] font-medium">Post Normal Ad</p>
        <div className="flex flex-row items-center gap-6">
          {items.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <img src={icon} alt={label} />
              <p className="p2 text-[#7B7B7B]">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <ProgressSteps activeStep={activeStep} />

      {activeStep === 1 && <FirstStep onNext={() => setActiveStep(2)} />}
      {activeStep === 2 && <SecondStep onNext={() => setActiveStep(3)} />}
      {activeStep === 3 && <ThirdStep />}
    </main>
  );
};

export default P2P;
