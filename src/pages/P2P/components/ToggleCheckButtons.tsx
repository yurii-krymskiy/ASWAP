import { useState } from "react";
import CustomCheckbox from "../../../components/ui/CustomCheckbox";

interface ToggleButtonsProps {
  options: string[];               // List of option keys/labels
  initialActive?: string;          // Optional initial active option
  onChange?: (selected: string) => void;  // Callback when selection changes
}

export default function ToggleButtons({
  options,
  initialActive,
  onChange,
}: ToggleButtonsProps) {
  const [active, setActive] = useState<string>(initialActive ?? options[0]);

  const buttonBase =
    "w-1/2 h-[38px] rounded-[4px] flex items-center gap-2 justify-center transition-all cursor-pointer";

  function handleClick(option: string) {
    setActive(option);
    if (onChange) onChange(option);
  }

  return (
    <div className="border border-[#181818] bg-[#0F0F0F] rounded-[8px] p-1 flex">
      {options.map((option) => (
        <button
          key={option}
          className={`${buttonBase} ${
            active === option
              ? "bg-[#1D1D1D] text-[#E5FFF2]"
              : "bg-transparent text-[#7B7B7B]"
          }`}
          onClick={() => handleClick(option)}
        >
          <CustomCheckbox isChecked={active === option} />
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
