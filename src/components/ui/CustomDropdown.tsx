import clsx from "clsx";
import React, { useState, useRef, useEffect } from "react";

type CustomDropdownProps = {
  selectedText: string;
  options: string[];
  setSelectedType: (v: string) => void;
  height: string;
  icon?: string;
  className?: string;

  dropdownEnabled?: boolean; 
  onModalOpen?: () => void;  
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  selectedText,
  options,
  setSelectedType,
  height,
  icon,
  className,
  dropdownEnabled = true,
  onModalOpen,
}) => {
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

  const toggleDropdown = () => {
    if (!dropdownEnabled) {
      onModalOpen?.();
      return;
    }

    setIsOpen(!isOpen);
  };

  const onSelect = (option: string) => {
    setSelectedType(option);
    setIsOpen(false);
  };

  return (
    <div className="relative h-full" style={{ height: height }} ref={dropdownRef}>
      <div
        className={clsx(
          "bg-[#0F0F0F] border border-[#181818] rounded-[8px] flex flex-row h-full items-center px-[12px] justify-between text-[#AEAEB8]",
          className
        )}
        onClick={toggleDropdown}
      >
        <div className="flex flex-row items-center gap-2">
          {icon && (
            <img src={icon} alt="icon" className="w-[26px] object-contain" />
          )}
          <span className="text-[14px] md:text-[16px] font-normal">{selectedText}</span>
        </div>
        <img
          src="/icons/arrow-white.svg"
          alt="arrow"
          width={12}
          height={12}
          className="cursor-pointer"
        />
      </div>

      {isOpen && dropdownEnabled && (
        <div
          className={clsx(
            "absolute mt-1 w-full max-h-60 overflow-auto rounded-[8px] bg-[#0F0F0F] border border-[#181818] z-20",
            className
          )}
        >
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
