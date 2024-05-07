"use client";
import { useState } from "react";
import { SessionsList } from "@/lib/metadata";
import Image from "next/image";

const Sessions = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`h-screen bg-white ${
        isCollapsed ? "w-[0%]" : "w-[20%] px-[33px]"
      } py-7 relative transition-all duration-300`}
    >
      {!isCollapsed ? (
        <div className="delay-200 duration-75">
          <h1 className="text-[#343C6A] font-semibold text-[23px]">
            Recent Sessions
          </h1>
        </div>
      ) : (
        <div className="opacity-0" />
      )}
      <div className="flex flex-col gap-y-[50px] mt-[42px]">
        {SessionsList.map((item, index) => (
          <div key={index}>
            {!isCollapsed ? (
              <div className="flex gap-x-5 delay-200 duration-75">
                <div className="w-[60px] h-[60px] rounded-2xl bg-[#FFE0EB] flex items-center justify-center">
                  <Image
                    width={25}
                    height={25}
                    src={item.Icon}
                    alt={item.title}
                  />
                </div>
                <div className="flex flex-col gap-y-[7px]">
                  <p className="text-[#232323] font-medium text-[16px]">
                    {item.title}
                  </p>
                  <p className="text-[15px] text-[#718EBF]">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <div className="opacity-0" />
            )}
          </div>
        ))}
      </div>
      <button
        onClick={toggleCollapse}
        className={`bg-blue-600 w-[38px] h-10 flex items-center justify-center absolute bottom-[15%] cursor-pointer ${
          isCollapsed ? "-right-10 duration-75 delay-200" : "-right-5 duration-75 delay-200"
        }`}
      >
        <Image width={15} height={15} src="/icons/arrow.svg" alt="arrow" />
      </button>
    </div>
  );
};

export default Sessions;
