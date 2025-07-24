import React, { useState, useRef, useEffect } from "react";

type CustomDropdownProps = {
  selectedText: string;
  options: string[];
  setSelectedType: (v: string) => void;
  height: string
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({ selectedText, options, setSelectedType, height }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const onSelect = (option: string) => {
    setSelectedType(option);
    setIsOpen(false);
  };

  return (
    <div className="relative" style={{ height: height }} ref={dropdownRef}>
      <div
        className="
        bg-[#0F0F0F] border border-[#181818] rounded-[8px]
          flex flex-row h-full items-center px-[12px] justify-between"
        onClick={toggleDropdown}
      >
        <span className="text-[16px] font-normal text-[#AEAEB8]">{selectedText}</span>
        <img src="/icons/arrow-white.svg" alt="arrow" width={12} height={12} className="cursor-pointer" />
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full max-h-60 overflow-auto rounded-lg border border-[rgba(255,255,255,0.07)]  bg-[rgba(255,255,255,0.05)] z-10">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer text-[12px] text-[#D1D1D1]"
              onClick={() => onSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
