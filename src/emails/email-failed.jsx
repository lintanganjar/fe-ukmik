import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
function EmailFailed() {
  return (
    <>
      <div className="flex bg-[#fafafa]  flex-col justify-start items-center">
        <div className=" w-[300px] shadow-md flex-col border-[1px] bg-white h-[419px] rounded-lg md:w-[546px] md:h-[654px]">
          <span className=" flex w-full bg-primary-3 h-[5px] rounded-t-lg "></span>
          <div className="flex justify-between  pr-[25px] mt-[25px]  absolute w-[295px] ">
            <div className="flex justify-between"></div>
            <img
              src="/logo_ukmik.svg"
              alt="Logo UKM IK"
              width={20}
              className="md:hidden"
            />
          </div>
          <div className="image mt-[80px] md:mt-[70px] ">
            <img
              src="/email-failed.svg"
              alt="forgot_password"
              className="w-[168px]  h-[142px]  mb-[5px] mx-auto md:w-[319px] md:h-[269px]  "
            />
          </div>
          <div className=" w-[295px] flex flex-col items-center h-[237px] md:w-full md:h-[366px] gap-[17px]">
            <div className="flex  flex-col title text-center gap-[6px]">
              <p className="font-semibold text-[16px] leading-6 md:text-[30px] md:mt-[30px] md:mb-[10px] md:leading-[45px]">
                Hi, Ajeng
              </p>
              <p className="font-normal text-grey-6 text-[10px] leading-[15px] md:text-[17px] md:leading-[25.5px">
                Sorry you don't meet our requirement
              </p>
            </div>
            <div className=" description mt- w-[280px]  tracking-15  text-justify md:w-[476px] md:h-[325px]">
              <p className="font-normal text-grey-6 text-[10px] leading-[15px] md:font-normal md:leading-[25.5px] md:text-[17px] ">
                We Thank you for your parcitipation in registration. However, we
                regret to inform you that <span className="text-grey-2 font-bold"> you did not qualify </span> and have not met
                the the requirements that have been set. We appreciate your
                enthosiasm and invite you to try again next time. Thank You
              </p>
            </div>
          </div>
        </div>
        <div className="footer flex flex-col m-none w-[295px] md:w-[583px]">
          <div className="mt-9 flex flex-col w-full items-center gap-[20px]">
            <p className=" font-normal leading-[18px] text-[12px] text-gray-400 text-center md:text-[15px] ">
              If you have any questions or need assistance, feel free to contact
              us!
            </p>
            <div className="flex gap-[20px] text-gray-400 ">
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
            <div className="flex flex-col italic text-gray-400">
              <p className="text-xs md:text-sm">
                © 2024 UKMIK All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailFailed;
