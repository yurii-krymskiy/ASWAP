import { useEffect, useRef, useState } from "react";
import ProgressCard from "./ProgressCard";
import StepCircle from "./StepCircle";

const steps = [
  {
    step: "Step 1",
    number: "1",
    title: "Connect Wallet",
    text: "Connect your wallet to start trading securely on our decentralized P2P platform.",
    img: "/images/home-card-1.png",
  },
  {
    step: "Step 2",
    number: "2",
    title: "Buy & Sell Crypto",
    text: "Buy Bitcoin and 70+ cryptos on ASWAP using credit cards, bank transfers, and more.",
    img: "/images/home-card-2.png",
  },
];

const ProgressSteps = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  useEffect(() => {
    function handleScroll() {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the container is visible in viewport
      // When container top hits the bottom of viewport => progress = 0
      // When container bottom hits the top of viewport => progress = 1
      const totalHeight = rect.height + windowHeight;
      const visible = windowHeight - rect.top;

      let progress = visible / totalHeight;
      progress = Math.min(Math.max(progress, 0), 1); // clamp between 0 and 1

      setFillHeight(progress * rect.height);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col gap-[56px] w-full md:w-[70%] pl-[72px]"
      style={{ minHeight: "400px" }} // ensure some height so scroll works
    >
      {/* Timeline background line */}
      <div className="absolute top-0 bottom-0 left-[24px] w-[4px] bg-[#0D0D0D]" />

      {/* Timeline fill line */}
      <div
        className="absolute left-[24px] w-[4px] bg-[#FFFD00] origin-top shadow-[0_0_12px_4px_rgba(255,253,0,0.5)]"
        style={{ height: fillHeight }}
      />

      {steps.map((step, index) => (
        <div key={index} className="relative flex items-start gap-8">
          <div className="absolute left-[-72px]">
            <StepCircle number={step.number} />
          </div>

          <ProgressCard
            img={step.img}
            title={step.title}
            text={step.text}
            step={step.step}
          />
        </div>
      ))}
    </div>
  );
};

export default ProgressSteps;
