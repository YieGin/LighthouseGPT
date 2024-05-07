import { MenuItemProps } from "@/types";
import React from "react";

export const MenuItem: React.FC<MenuItemProps> = ({
  icon,
  title,
  isActive,
  onClick,
}) => {
  return (
    <button className="flex items-center gap-[38px]" onClick={onClick}>
      {isActive ? (
        <div className="bg-[#2D60FF] w-[6px] h-[60px] rounded-tr-md rounded-br-md" />
      ) : (
        <div className="w-[6px] h-[60px] rounded-tr-md rounded-br-md" />
      )}
      <div className="flex gap-x-6">
        <div className="w-[25px] h-[25px]">{icon}</div>
        <p
          className={`text-[18px] font-medium float-right ${
            isActive ? "text-[#2D60FF]" : "text-[#B1B1B1]"
          }`}
        >
          {title}
        </p>
      </div>
    </button>
  );
};
