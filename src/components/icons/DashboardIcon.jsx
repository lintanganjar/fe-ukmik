import React from "react";

const DashboardIcon = ({ fill, ...props }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clip-path="url(#clip0_1902_18656)">
        <path
          d="M10.625 7.5H9.375L8.125 10.625L6.875 4.375L5.625 7.5H4.375M3.125 1.875H11.875C12.5654 1.875 13.125 2.43464 13.125 3.125V11.875C13.125 12.5654 12.5654 13.125 11.875 13.125H3.125C2.43464 13.125 1.875 12.5654 1.875 11.875V3.125C1.875 2.43464 2.43464 1.875 3.125 1.875Z"
          stroke={fill ?? "#71717A"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1902_18656">
          <rect width="15" height="15" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardIcon;
