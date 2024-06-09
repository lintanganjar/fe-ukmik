import React from "react";

const ChevronDownIcon = ({ fill, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chevron-down">
        <path
          id="Vector"
          d="M6 9L12 15L18 9"
          stroke={fill ?? "#18181B"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
};

export default ChevronDownIcon;
