import React from "react";

const Header = () => {
  return (
    <div className="header bg-primary-10 relative flex h-[89px] justify-center items-center">
      <div className="absolute inset-x-0">
        <img src="/bgform_left_header.svg" alt="header1" />
      </div>
      <div className="text flex flex-col text-center justify-center items-center">
        <h1 className="text-[10px] font-semibold drop-shadow-md text-primary-1">
          Formulir Pendaftaran
        </h1>
        <h2 className="text-[15px] font-extrabold text-primary-3">UKMIK</h2>
        <p className="font-normal text-grey-4 text-[7px]">Periode 2023/2024</p>
      </div>
      <div className="absolute right-0 w-[233px]">
        <img src="/bgform_right_header.svg" alt="header2" />
      </div>
    </div>
  );
};

export default Header;
