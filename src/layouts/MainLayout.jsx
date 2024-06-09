import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div className="bg-slate-200 min-h-screen h-full flex justify-center">
      <div className="w-screen min-h-screen bg-white">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
