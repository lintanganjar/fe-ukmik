import React from "react";

function Step() {
  return (
    <div className="flex justify-start items-center flex-col mt-[21px]">
      <div className="button w-[280px] items-center  flex  ">
        <span
          id="b1"
          className="border-4 border-sky-500 rounded-full w-[20px] h-[20px]"
        ></span>
        <span className="bg-slate-400 w-[100px] rounded-lg h-1 mx-2"></span>
        <span
          id="b2"
          className="border-4 border-sky-500 rounded-full w-[20px] h-[20px]"
        ></span>
        <span className="bg-slate-400 w-[100px] rounded-lg h-1 mx-2"></span>
        <span
          id="b3"
          className="border-[4px] border-sky-500 rounded-full w-[20px] h-[20px]"
        ></span>
      </div>
      <div className=" label text-center text-[7px] mt-3 w-[310px] flex justify-between">
        <label htmlFor="b1" className="w-[50px]">
          Data Personal
        </label>
        <label htmlFor="b2" className="w-[50px]">
          Form Confirmation
        </label>
        <label htmlFor="b3" className="w-[50px]">
          Email Confirmation
        </label>
      </div>
    </div>
  );
}

export default Step;
