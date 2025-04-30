import React from "react";
import { twMerge } from "tailwind-merge";


const MegaMenuWrapper = ({ children, className =''}) => {

    const baseClass="absolute left-0 top-full w-[screen -20px] bg-white shadow-2xl py-10 px-[10%] grid grid-cols-3 gap-6 mt-2 transition-all duration-300 ease-in-out ";
     
    return (
    <div className={twMerge(baseClass, className)} >
      {children}
    </div>
  );
};

export default MegaMenuWrapper;
