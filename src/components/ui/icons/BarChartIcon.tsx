import type { SVGProps } from "react";

interface ILaunchIconProps extends SVGProps<SVGSVGElement> {
  isActive: boolean;
}

export const BarChartIcon = ({ isActive }: ILaunchIconProps) => {
  return (
    <svg
      width="17"
      height="22"
      viewBox="0 0 17 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.81 15.8901H1V21.0001H3.81V15.8901Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.99994 20.9701L9.97995 10.8201H7.18994V20.9701H9.99994Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M16.1401 6.94995H13.3301V20.9999H16.1401V6.94995Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.17 2.69995L3.52002 10.1299"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.62003 11.8099C3.22003 11.8099 3.70004 11.3299 3.70004 10.7299C3.70004 10.1299 3.22003 9.6499 2.62003 9.6499C2.02003 9.6499 1.54004 10.1299 1.54004 10.7299C1.54004 11.3299 2.02003 11.8099 2.62003 11.8099Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.06 3.16C15.66 3.16 16.14 2.67999 16.14 2.07999C16.14 1.47999 15.66 1 15.06 1C14.46 1 13.98 1.47999 13.98 2.07999C13.98 2.67999 14.46 3.16 15.06 3.16Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
