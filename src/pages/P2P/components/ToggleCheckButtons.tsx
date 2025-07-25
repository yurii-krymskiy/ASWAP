import { useState } from "react";

export default function ToggleButtons() {
  const [active, setActive] = useState("fixed");

  const buttonBase =
    "w-1/2 h-[38px] rounded-[4px] flex items-center gap-2 justify-center transition-all cursor-pointer";
  const checkbox =
    "peer h-[12px] w-[12px] appearance-none cursor-pointer rounded border transition-all";
  const checkIcon =
    "absolute text-black opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none";

  const renderCheckbox = (isChecked: boolean) => (
    <label className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        checked={isChecked}
        readOnly
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

  return (
    <div className="border border-[#181818] bg-[#0F0F0F] rounded-[8px] p-1 flex">
      <button
        className={`${buttonBase} ${
          active === "fixed"
            ? "bg-[#1D1D1D] text-[#E5FFF2]"
            : "bg-transparent text-[#7B7B7B]"
        }`}
        onClick={() => setActive("fixed")}
      >
        {renderCheckbox(active === "fixed")}
        Fixed
      </button>

      <button
        className={`${buttonBase} ${
          active === "floating"
            ? "bg-[#1D1D1D] text-[#E5FFF2]"
            : "bg-transparent text-[#7B7B7B]"
        }`}
        onClick={() => setActive("floating")}
      >
        {renderCheckbox(active === "floating")}
        Floating
      </button>
    </div>
  );
}
