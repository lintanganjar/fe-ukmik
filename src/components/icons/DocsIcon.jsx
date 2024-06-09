import React from "react";

const DocsIcon = ({fill, ...props}) => {
  return (
    <svg
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.06979 4.74998V12.75C1.06979 13 1.20778 13.25 1.41476 13.4375C1.62174 13.625 1.89772 13.75 2.17369 13.75H8.93505M9.34901 1.25V4.375H12.7987M9.69398 1.25H4.93343C4.65746 1.25 4.38148 1.375 4.1745 1.5625C3.96752 1.75 3.82953 2 3.82953 2.25V10.25C3.82953 10.5 3.96752 10.75 4.1745 10.9375C4.38148 11.125 4.65746 11.25 4.93343 11.25H11.6948C11.9708 11.25 12.2467 11.125 12.4537 10.9375C12.6607 10.75 12.7987 10.5 12.7987 10.25V4.0625L9.69398 1.25Z"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default DocsIcon;
