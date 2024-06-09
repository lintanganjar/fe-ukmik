import React from "react";

const RoleIcon = ({ fill, ...props }) => {
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
        d="M5.625 1.875H2.5C2.15482 1.875 1.875 2.15482 1.875 2.5V5.625C1.875 5.97018 2.15482 6.25 2.5 6.25H5.625C5.97018 6.25 6.25 5.97018 6.25 5.625V2.5C6.25 2.15482 5.97018 1.875 5.625 1.875Z"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 1.875H9.375C9.02982 1.875 8.75 2.15482 8.75 2.5V5.625C8.75 5.97018 9.02982 6.25 9.375 6.25H12.5C12.8452 6.25 13.125 5.97018 13.125 5.625V2.5C13.125 2.15482 12.8452 1.875 12.5 1.875Z"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.5 8.75H9.375C9.02982 8.75 8.75 9.02982 8.75 9.375V12.5C8.75 12.8452 9.02982 13.125 9.375 13.125H12.5C12.8452 13.125 13.125 12.8452 13.125 12.5V9.375C13.125 9.02982 12.8452 8.75 12.5 8.75Z"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.625 8.75H2.5C2.15482 8.75 1.875 9.02982 1.875 9.375V12.5C1.875 12.8452 2.15482 13.125 2.5 13.125H5.625C5.97018 13.125 6.25 12.8452 6.25 12.5V9.375C6.25 9.02982 5.97018 8.75 5.625 8.75Z"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default RoleIcon;
