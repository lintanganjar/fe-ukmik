import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";

function EmailReset() {
  return (
    <>
      <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center">
        <div className=" flex shadow-md flex-col bg-white  p-0 top-[106px] left-[36px] border-[1px] w-[295px] md:w-[583px]  h-[509px] md:h-[723px] rounded-lg">
          <div className="h-[5px] w-full bg-primary-3 rounded-t-lg"></div>
          <div className="logo w-full flex justify-end items-end  pr-[20px] pt-[20px] ">
            <img src="logo_ukmik.svg" alt="" className="w-[20px] h-[20px] " />
          </div>
        
          <div className="flex flex-col justify-center items-center">
            <div  className="descript flex flex-col justify-center  text-center  md:gap-[16px] md:w-[473px] ">
              <h1 className="md:text-[34px] mt-[23px] text-[20px] font-semibold md:font-bold ">Congratulations</h1>
              <p className=" text-[15px] text-center mx-[20px] mt-[16px] md:font-medium md:text-[23px] mb-[20px] text-gray-500">
                on your registration with the UKM Informatika & Komputer! 🎉</p>
            </div>
            <img
              src="Invite-pana4.svg"
              alt=""
              className="w-[196px] h-[129px] md:w-[286px] md:h-[205px]"
            />
            <p className="text-[15px] mx-[20px] md:mx-[60px] md:font-light md:text-[21px] text-gray-400 md:mt-[30px] mt-[30px] text-center">
              To connect with other members, please click the link below to join the WhatsApp Group:
            </p>
            <button className="bg-primary-3 font-semibold mt-[31px] w-[180px] h-[27px] text-[10px] md:text-[20px] md:w-[399.5px] md:h-[40px] text-white rounded-[6px] md:mt-[30px]">
              Join Group
            </button>
          </div>

          <div className="flex justify-center text-center mt-[100px] md:mt-[130px]">
            <p className="text-gray-500 text-[10px] md:text-[15px] ">If you have any questions or need assistance, feel free to contact us!</p>
          </div>
          
          <div className="flex gap-[20px] justify-center mt-[10px] text-gray-400 ">
              <Link>
                <FacebookIcon fill="#AAA" />
              </Link>
              <Link>
                <InstagramIcon fill="#AAA" />
              </Link>
              <Link>
                <YoutubeIcon fill="#AAA" />
              </Link>
          </div>

            <div className="flex flex-col italic my-[10px]  text-gray-400">
              <p className="text-xs md:text-sm text-center">
                © 2024 UKMIK All rights reserved
              </p>
            </div>
        </div>
      </div>
    </>
  );
}

export default EmailReset;
