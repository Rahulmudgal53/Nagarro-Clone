import React from "react";
import heroThread from "../assets/heroThread.png";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] w-full">
      <div>
        <div className="flex flex-col pt-36 pb-28 gap-8 items-start justify-center bg-[#13294b] px-[10%]">
          <h3 className="text-[#47d7ac] text-3xl">industries</h3>
          <h1 className="text-white  text-5xl">Industries we revolutionize</h1>
        </div>
        <div className=" py-28  flex flex-col gap-4 items-start justify-center">
          <p className="px-[10%] max-w-[70%]">
            We leverage our expertise across multiple industries and business
            functions to drive technology-led business breakthroughs. We are
            known for our agile entrepreneurship, our client centricity, the
            value we generate, and even how fun it is to work with us!
          </p>
        </div>
      </div>
      <div>
        <img src={heroThread} alt="thread" />
      </div>
    </div>
  );
}

export default Hero;
