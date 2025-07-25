import React from "react";

interface CustomCheckboxLabelProps {
  isChecked: boolean;
  onChange?: (checked: boolean) => void;
  label: string;
}

const CustomCheckboxLabel: React.FC<CustomCheckboxLabelProps> = ({
  isChecked,
  onChange,
  label,
}) => {
  const id = React.useId();

  const checkboxBase =
    "peer appearance-none cursor-pointer rounded border transition-all w-full h-full";
  const checkIcon =
    "absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none";

  return (
    <label htmlFor={id} className="inline-flex items-center gap-2 cursor-pointer select-none">
      <div className="relative w-[18px] h-[18px]">
        <input
          id={id}
          type="checkbox"
          checked={isChecked}
          onChange={(e) => onChange?.(e.target.checked)}
          className={`${checkboxBase} ${isChecked
            ? "bg-[#C5C300] border-[#C5C300]"
            : "bg-transparent border-[#7B7B7B]"
            }`}
        />
        <span className={checkIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[16px] h-[16px]"
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
      </div>
      <span className="text-[#7B7B7B] p2">{label}</span>
    </label>
  );
};

export default CustomCheckboxLabel;
