// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import YoutubeIcon from "../icons/YoutubeIcon";
import FacebookIcon from "../icons/FacebookIcon";
import InstagramIcon from "../icons/InstagramIcon";

const Footer = ({ fill, displayMessage }) => {
  // Mendeteksi apakah ukuran layar adalah mobile
  // const isNotMobile = window.innerWidth > 768;

  return (
    <div className="mt-12 flex flex-col w-full items-center gap-[20px]">
     {displayMessage && (
        <p style={{ display: false, color:fill }}  className=" font-normal leading-[18px] text-[12px] text-grey-3 text-center">
          If you have any questions or need assistance, feel free to contact us!
        </p>
      )}
      <div className="flex gap-[20px]">
        <Link>
          <FacebookIcon fill={fill} />
        </Link>
        <Link>
          <InstagramIcon fill={fill} />
        </Link>
        <Link>
          <YoutubeIcon fill={fill} />
        </Link>
      </div>

      <div className="flex flex-col italic text-gray-400">
        <p className="text-xs md:text-sm">© 2024 UKMIK All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
