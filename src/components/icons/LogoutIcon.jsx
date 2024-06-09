import React from "react";

const LogoutIcon = ({ fill, ...props }) => {
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
        d="M11.4751 4.15001C12.2616 4.93675 12.7971 5.93904 13.014 7.03013C13.2309 8.12122 13.1194 9.25213 12.6936 10.2799C12.2678 11.3076 11.5468 12.186 10.6218 12.804C9.69686 13.422 8.60939 13.7518 7.49695 13.7518C6.38451 13.7518 5.29705 13.422 4.37206 12.804C3.44707 12.186 2.7261 11.3076 2.3003 10.2799C1.87451 9.25213 1.76301 8.12122 1.9799 7.03013C2.19679 5.93904 2.73234 4.93675 3.51883 4.15001M7.5 1.25V7.5"
        stroke={fill ?? "#71717A"}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default LogoutIcon;
