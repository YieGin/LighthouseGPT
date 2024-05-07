import type { SVGProps } from "react";

interface ILaunchIconProps extends SVGProps<SVGSVGElement> {
  isActive: boolean;
}

export const PieChartIcon = ({ isActive }: ILaunchIconProps) => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.6999 2.17801V7.628C8.6999 8.238 8.19991 8.73801 7.58991 8.73801H2.1399C1.4599 8.73801 0.919912 8.13799 1.02991 7.46799C1.56991 4.18799 4.15992 1.58799 7.43992 1.05799C8.10992 0.947988 8.70991 1.488 8.70991 2.168L8.6999 2.17801Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1 12.228C1.62 17.268 5.99 21.148 11.25 20.998C16.5 20.858 20.85 16.498 20.99 11.258C21.13 6.01801 17.26 1.64801 12.22 1.00801C11.55 0.92801 10.96 1.458 10.96 2.118V7.618C10.96 9.468 9.47 10.958 7.62 10.958H2.12C1.45 10.958 0.929979 11.548 1.00998 12.218L1 12.228Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
