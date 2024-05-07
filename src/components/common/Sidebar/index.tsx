"use client";
import Image from "next/image";
import React, { useState } from "react";
import { MenuItem } from "./core/MenuItem";
import { menuItemsData } from "@/lib/metadata";

const Sidebar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="h-screen w-[15%] border-r-[1px] py-[9px] flex flex-col">
      <Image
        width={350}
        height={301}
        src="/images/Logo.png"
        alt="Company Logo"
      />
      <div className="flex flex-col gap-y-2 pr-[10px] mt-5">
        {menuItemsData.map((item, index) => (
          <MenuItem
            key={index}
            icon={<item.Icon isActive={index === activeIndex} />}
            title={item.title}
            isActive={index === activeIndex}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <div className="mt-auto flex items-center justify-center">
        <button className="bg-[#017EFE] rounded-2xl mt-auto w-[218px] h-[69.5px] flex items-center justify-center relative overflow-hidden">
          <p className="font-bold text-[17px] text-white mr-3">Log out</p>
          <Image
            width={20}
            height={30}
            src="/icons/log-out.svg"
            alt="Logout icon"
          />
          <Image
            width={200}
            height={300}
            src="/icons/background.svg"
            alt="Logout icon"
            className="ml-10 absolute"
          />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
