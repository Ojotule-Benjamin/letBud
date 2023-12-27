import React, { useState, ReactNode } from "react";
import CustomButton from "./CustomButton";

interface Tab {
  label: string;
  content: ReactNode;
}

interface CustomTabsProps {
  tabs: Tab[];
}

export const CustomTabs: React.FC<CustomTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="flex gap-0 lg:gap-8 border-b-[1px] px-2 lg:px-0">
        {tabs.map((tab, index) => (
          <div
            key={index}
            onClick={() => handleTabClick(index)}
            className={`cursor-pointer text-start font-inter font-medium text-xs lg:text-base leading-7 py-2 w-full ${
              activeTab === index
                ? "border-b-2 text-neutrals_100 border-neutrals_100"
                : "text-neutrals_300"
            }`}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};
