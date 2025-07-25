import React from "react";

interface CustomCheckboxProps {
  isChecked: boolean;
  onChange?: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, onChange }) => {
  const checkbox =
    "peer h-[12px] w-[12px] appearance-none cursor-pointer rounded border transition-all";
  const checkIcon =
    "absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none";

  return (
    <label className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => onChange?.(e.target.checked)} 
        className={`${checkbox} ${isChecked ? "bg-[#C5C300] border-[#C5C300]" : "bg-transparent border-[#7B7B7B]"}`}
      />
      <span className={checkIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-[10px] w-[10px]"
          viewBox="0 0 20 20"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </label>
  );
};

export default CustomCheckbox;
