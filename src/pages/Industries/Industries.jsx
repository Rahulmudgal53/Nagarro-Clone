import React from "react";
import Hero from "../../utils/Hero";
import heroData from "../../constants/HeroData";
import { industries } from "../../constants/ListItems";

const { area, title, description, button } = heroData.pages.industries;

function Industries() {
  return (
    <div>
      <Hero
        area={area}
        title={title}
        description={description}
        button={button}
      />

      <div className="lg:px-[10%] px-[5%] ">
        <h2 className="text-2xl pt-6">how we help you</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 pt-10 pb-20 bg-[#F5F5F5] ">
          {industries.map((industry, index) => (
            <div
              key={index}
              className=" hover:bg-gray-100 p-4 rounded shadow-sm space-y-4 group"
            >
              <h3 className="text-xl group-hover:text-[#383f9e] ">{industry.category}</h3>
              <p className=" lg:max-w-72 text-sm text-gray-500">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Industries;
