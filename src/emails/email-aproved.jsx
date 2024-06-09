import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import YoutubeIcon from "@/components/icons/YoutubeIcon";
function EmailApproved() {
  return (
    <>
      <div className=" bg-[#FAFAFA] flex flex-col justify-center items-center">
       
        <div className=" flex shadow-md flex-col bg-white  p-0 top-[106px] left-[36px] border-[1px] w-[295px] md:w-[583px]  h-[374px] md:h-[723px] rounded-lg">
          <div className="h-[5px] w-full bg-primary-3 rounded-t-lg"></div>
          <div className="flex justify-between  pr-[28px] mt-[20px]  absolute w-[295px] ">
            <div className="flex justify-between"></div>
            <img
              src="/logo_ukmik.svg"
              alt="Logo UKM IK"
              width={20}
              className="md:hidden"
            />
          </div>
          <div className="image mt-[20px] md:mt-[70px]">
            <img
              src="/email-approved.svg"
              alt="forgot_password"
              className="w-[100px]  h-[100px]  mb-[5px] mx-auto md:w-[190px] md:h-[190px]   "
            />
          </div>
          <div className=" w-[295px] flex flex-col items-center h-[237px] md:w-full md:h-[366px] ">
            <div className="title">
              <p className="font-semibold text-[16px] leading-6 md:text-[24px] md:mt-[30px] md:mb-[10px]">Hi, Ajeng</p>
            </div>
            <div className="description w-[280px]  tracking-tight leading-[13.5px] text-justify md:w-[476px] md:h-[325px]">
              <p className="font-medium text-[9px] leading-[13.5px] md:font-normal md:leading-[22.5px] md:text-[15px] ">
                <span className="text-primary-4">
                  Welcome to UKM Informatika & Komputer!
                </span>{" "}
                You have been accepted as a Permanent Member of the UKM
                Informatika & Komputer.
              </p>
              <br />
              <p className="font-medium text-[##0B0B0B] text-[9px] leading-[13.5px] md:text-[13px]  md:font-normal md:leading-[19.5px]">
                Your UKM IK account credentials are as follows:
              </p>
              <br />
              <table className="font-medium text-[#595959] leading-[13.5px] text-[9px] md:text-[13px] md:font-normal md:leading-[22.5px]">
                <tr>
                  <td>Name</td>
                  <td>: Ajeng Ishak</td>
                </tr>
                <tr>
                  <td>NRA</td>
                  <td>: 400/UKM_IK/XXVII/2024</td>
                </tr>
                <tr>
                  <td>Role</td>
                  <td>: Humas</td>
                </tr>
                <tr>
                  <td>UKM IK Account Username</td>
                  <td>: Ajeng_Ishak</td>
                </tr>
                <tr>
                  <td>UKM IK Account Password</td>
                  <td>: AjengIshak400</td>
                </tr>
              </table>
              <br />
              <p className="font-light tracking-tight text-[#858585] text-[9px] leading-[13.5px] md:text-[15px] md:font-normal md:leading-[22.5px] italic ">
                *Log in at{" "}
                <Link className=" text-primary-5 underline underline-offset-[0.5px] ">
                  ukmik.utdi.ac.id/admin.
                </Link>{" "}
                To get full information and involvement, make sure your UKM IK
                account is logged in on your phone and Laptop/PC
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

export default EmailApproved;
