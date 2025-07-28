import React from "react";
import clsx from "clsx";

interface TabItem {
  label: string;
  key: string;
}

interface TabsProps {
  tabs: TabItem[];
  activeKey: string;
  onChange: (key: string) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeKey, onChange, className }) => {
  return (
    <div className={clsx("flex flex-row justify-between md:justify-start md:gap-8 items-center border-b border-[#181818] px-3 md:px-0 md:pl-4", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onChange(tab.key)}
          className={clsx(
            "relative pb-2 p1 cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full transition-colors duration-200",
            {
              "text-white after:bg-[#C5C300]": activeKey === tab.key,
              "text-[#7B7B7B] after:bg-transparent": activeKey !== tab.key,
            }
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
