import React, { useState } from "react";

type Props = {
  options: string[];
  onChange: (selected: string) => void;
  defaultValue?: string;
};

const ButtonToggle: React.FC<Props> = ({ options, onChange, defaultValue }) => {
  const [active, setActive] = useState(defaultValue || options[0]);

  const handleClick = (coin: string) => {
    setActive(coin);
    onChange(coin);
  };

  const getButtonClass = (coin: string) =>
    `h-[35px] text-[#E5FFF2] text-[16px] px-5 rounded-md transition-all duration-200 cursor-pointer ${
      active === coin
        ? "bg-white/5 shadow-[0px_1px_1px_0px_rgba(0,14,15,0.3),0px_4px_6px_0px_rgba(0,14,15,0.15)]"
        : ""
    }`;

  return (
    <div className="bg-[#0F0F0F] border border-[#181818] p-1 rounded-[8px] flex gap-2 w-fit">
      {options.map((coin) => (
        <button
          key={coin}
          onClick={() => handleClick(coin)}
          className={getButtonClass(coin)}
        >
          {coin}
        </button>
      ))}
    </div>
  );
};

export default ButtonToggle;
