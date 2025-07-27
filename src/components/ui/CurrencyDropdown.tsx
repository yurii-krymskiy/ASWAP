import React, { useState, useRef, useEffect } from "react";

type CurrencyDropdownProps = {
  selectedText: string;
  options: string[];
  setSelectedType: (v: string) => void;
  icon: string;
  enableDropdown?: boolean;
};

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  selectedText,
  options,
  setSelectedType,
  icon,
  enableDropdown = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enableDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [enableDropdown]);

  const toggleDropdown = () => {
    if (enableDropdown) setIsOpen((prev) => !prev);
  };

  const onSelect = (option: string) => {
    setSelectedType(option);
    setIsOpen(false);
  };

  return (
    <div className="relative h-full" ref={dropdownRef}>
      <div
        className="
          bg-[rgba(255,255,255,0.05)] 
          border border-[rgba(255,255,255,0.07)] 
          backdrop-blur-[20px] 
          rounded-[4px] md:rounded-[12px]
          flex flex-row h-full items-center px-[7px] md:px-[12px] gap-1 md:gap-3"
        onClick={toggleDropdown}
      >
        <img src={icon} alt="eth" className="cursor-pointer w-[19px] h-[19px] md:w-[33px] md:h-[33px]" />
        <span className="text-[10px] md:text-[17px] font-normal text-[#D1D1D1]">{selectedText}</span>
        <img src="/icons/arrow-white.svg" alt="arrow" width={12} height={12} className="cursor-pointer" />
      </div>

      {enableDropdown && isOpen && (
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

export default CurrencyDropdown;
