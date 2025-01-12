import React from "react";

const AlumniIcon = ({ fill, ...props }) => {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.625 11.25C10.625 10.9185 10.4933 10.6005 10.2589 10.3661C10.0245 10.1317 9.70652 10 9.375 10H5.625C5.29348 10 4.97554 10.1317 4.74112 10.3661C4.5067 10.6005 4.375 10.9185 4.375 11.25M5 1.25V2.5M10 1.25V2.5M3.125 2.5H11.875C12.5654 2.5 13.125 3.05964 13.125 3.75V12.5C13.125 13.1904 12.5654 13.75 11.875 13.75H3.125C2.43464 13.75 1.875 13.1904 1.875 12.5V3.75C1.875 3.05964 2.43464 2.5 3.125 2.5ZM8.75 6.25C8.75 6.94036 8.19036 7.5 7.5 7.5C6.80964 7.5 6.25 6.94036 6.25 6.25C6.25 5.55964 6.80964 5 7.5 5C8.19036 5 8.75 5.55964 8.75 6.25Z"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default AlumniIcon;
