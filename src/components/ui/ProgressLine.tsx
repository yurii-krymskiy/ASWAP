import clsx from "clsx";

interface ProgressLineProps {
  progress: number; 
  height?: number;  
  className?: string;
  color?: "green" | "red"
}

const ProgressLine = ({ progress, height = 4, className, color = "green" }: ProgressLineProps) => {
  const clampedProgress = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={clsx("w-full bg-[#1D1D1D] rounded-full overflow-hidden", className)}
      style={{ height }}
    >
      <div
        className="transition-all duration-300 ease-in-out"
        style={{ width: `${clampedProgress}%`, height: "100%", backgroundColor: color === "green" ? "#3DF097" : "#DC3434" }}
      />
    </div>
  );
};

export default ProgressLine;
