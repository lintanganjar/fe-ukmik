import React from "react";

const UsersIcon = ({fill, ...props}) => {
    
  return (
    <svg
      width="13"
      height="14"
      viewBox="0 0 13 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 7.625C8.22589 7.625 9.625 6.22589 9.625 4.5C9.625 2.77411 8.22589 1.375 6.5 1.375C4.77411 1.375 3.375 2.77411 3.375 4.5C3.375 6.22589 4.77411 7.625 6.5 7.625ZM6.5 7.625C7.82608 7.625 9.09785 8.15178 10.0355 9.08947C10.9732 10.0271 11.5 11.2989 11.5 12.625M6.5 7.625C5.17392 7.625 3.90215 8.15178 2.96447 9.08947C2.02678 10.0271 1.5 11.2989 1.5 12.625"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default UsersIcon;
