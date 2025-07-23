import clsx from "clsx";
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Normal");

  const tabs = [
    { label: "Normal (1)", key: "Normal" },
    { label: "Cash (4)", key: "Cash" },
    { label: "Block (5)", key: "Block" },
    { label: "Fiat (34)", key: "Fiat" },
  ];

  return (
    <div className="flex flex-row gap-8 items-center border-b border-[#181818] pl-4">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          className={clsx(
            "p2 relative pb-2 cursor-pointer after:content-[''] after:block after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full",
            {
              "text-[#FFFFFF] after:bg-[#C5C300]": activeTab === tab.key,
              "text-[#7B7B7B] after:bg-transparent": activeTab !== tab.key,
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
