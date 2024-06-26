import type { SVGProps } from "react";

interface ILaunchIconProps extends SVGProps<SVGSVGElement> {
  isActive: boolean;
}

export const ResearcherIcon = ({ isActive }: ILaunchIconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className='fill-none'
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 18C14.42 18 18 14.42 18 10C18 5.58 14.42 2 10 2C5.58 2 2 5.58 2 10C2 14.42 5.58 18 10 18Z"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
      />
      <path
        d="M15.6401 15.6699L22.0001 21.9999"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
      <path
        d="M9.42993 13.91C7.58993 14 6.01992 12.6 5.91992 10.76"
        className={`${isActive ? "stroke-[#2D60FF]" : "stroke-[#3B3B3D]"}`}
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
      />
    </svg>
  );
};
