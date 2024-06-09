// FacebookIcon.jsx (dan juga InstagramIcon.jsx, YoutubeIcon.jsx)
import React from "react";

const FacebookIcon = ({ fill, ...props }) => {
  // Menambahkan prop size
  // const iconSize = size === "md" ? 30 : 23; // Menentukan ukuran ikon berdasarkan prop size

  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      className="md:size-[30px]"
    >
      <path
        d="M11.5005 0.459961C5.40315 0.459961 0.460449 5.40266 0.460449 11.5C0.460449 17.5973 5.40315 22.54 11.5005 22.54C17.5977 22.54 22.5405 17.5973 22.5405 11.5C22.5405 5.40266 17.5977 0.459961 11.5005 0.459961ZM14.1156 8.08906H12.4561C12.2595 8.08906 12.0409 8.34781 12.0409 8.69166V9.88996H14.1167L13.8027 11.5989H12.0409V16.729H10.0825V11.5989H8.30575V9.88996H10.0825V8.88486C10.0825 7.44276 11.083 6.27091 12.4561 6.27091H14.1156V8.08906Z"
        fill={fill ?? "#081B30"}
      />
    </svg>
  );
};

export default FacebookIcon;
