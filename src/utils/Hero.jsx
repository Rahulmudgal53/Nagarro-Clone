import React from "react";
import heroThread from "../assets/heroThread.png";
import Button from "./Button";

function Hero({ area, title, description, button }) {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] w-full">
      <div className="w-full">
        <div className="relative flex flex-col pt-32 pb-16 lg:pb-28 gap-8 items-start justify-center bg-[#13294b] px-[5%] ">
          <h3 className="text-[#47d7ac] text-lg lg:text-3xl">{area}</h3>
          <h1 className="text-white text-2xl lg:text-6xl lg:max-w-[50%]">{title}</h1>
          <div className="absolute  flex items-center justify-end -top-20 lg:top-[50%] left-[35%] lg:left-[50%]  w-1/2 lg:w-1/3 h-full">
            <img src={heroThread} alt="thread" />
          </div>
        </div>
        <div className=" pt-20 pb-28 lg:pb-36 flex flex-col gap-4 items-start justify-center">
          <p className="px-[10%] lg:max-w-[70%] text-gray-500 leading-tight ">
            {description}
          </p>
          {button && (
            <Button
              name={button.name}
              link={button.link}
              className={button.className}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;
