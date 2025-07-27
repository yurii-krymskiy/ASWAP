import GradientTitle from "../../../../components/ui/GradientTitle";

const StepCircle = ({ number }: { number: string }) => (
  <div className="w-[48px] h-[48px] flex-shrink-0 flex justify-center items-center rounded-full border border-[#FFFD00] step-circle">
    <GradientTitle text={number} classname="text-[24px]" />
  </div>
);

export default StepCircle;
