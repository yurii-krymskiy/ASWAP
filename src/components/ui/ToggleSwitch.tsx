import React, { useState } from "react";

const ToggleSwitch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <label className="relative inline-block w-[24px] h-[14px] cursor-pointer">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="sr-only peer"
      />
      {/* Track */}
      <span
        className="absolute inset-0 rounded-full bg-[#999] peer-checked:bg-[#34C759] transition-colors duration-200 ease-in-out"
      />
      {/* Thumb */}
      <span
        className="absolute top-[1px] left-[1px] h-[12px] w-[12px] bg-white rounded-full transition-transform duration-200 ease-in-out
                   peer-checked:translate-x-[10px]"
      />
    </label>
  );
};

export default ToggleSwitch;
