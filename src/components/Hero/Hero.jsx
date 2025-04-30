import React from "react";
import Upperside from "./Upperside";
import Banner from "./Banner";

function Hero({ area, title, description, button }) {
  return (
    <div className="flex flex-col items-center  justify-center bg-[#F5F5F5] w-full">
      <div className="w-full">
        <Upperside area={area} title={title} />
        <Banner description={description} />
      </div>
    </div>
  );
}

export default Hero;
