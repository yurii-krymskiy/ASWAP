import { steps } from "../static/tabs";

const getProgressWidth = (step: number) => {
  if (step === 1) return "0%";
  if (step === 2) return "50%";
  if (step === 3) return "100%";
  return "0%";
};

const ProgressSteps = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="relative w-full mb-10 h-[80px]">
      <div className="absolute top-[12px] left-0 w-full h-[2px] bg-[#181818]" />

      <div
        className="absolute top-[12px] left-0 h-[2px] bg-gradient-to-r from-[#FFFD00] to-[#999800] transition-all duration-300"
        style={{ width: getProgressWidth(activeStep) }}
      />

      {/* Render Steps */}
      {steps.map(({ id, position, label, labelWidth }) => {
        const isActive = activeStep >= id;
        const dotBg = isActive
          ? "bg-[linear-gradient(180deg,_#FFFD00_-5.87%,_#999800_105.45%)]"
          : "bg-[#202020]";
        const textColor = isActive
          ? "text-[#020313]"
          : "text-[#C5C30038]";

        return (
          <div
            key={id}
            className={`absolute top-0 flex flex-col ${position} gap-2 z-10`}
          >
            <div
              className={`w-[24px] h-[24px] flex justify-center items-center rounded-full ${dotBg}`}
            >
              <p className={`p2 font-semibold ${textColor}`}>{id}</p>
            </div>
            <p className={`p2 text-[#7B7B7B] ${activeStep === id ? "inline text-[white]" : "hidden"} md:inline ${labelWidth}`}>{label}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;
