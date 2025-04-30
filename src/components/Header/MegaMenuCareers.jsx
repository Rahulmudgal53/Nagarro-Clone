import React, { useState } from "react";
import { regions } from "../../constants/ListItems";
import MegaMenuWrapper from "./MegaMenuWrapper";
import { Link } from "react-router-dom";
import TextBtnCard from "../../utils/TextBtnCard";

function MegaMenuCareers() {
  const [hoveredRegion, setHoveredRegion] = useState(0); // Default to first region

  return (
    <MegaMenuWrapper className="grid-cols-3 h-96">
      {/* Left column - Card */}
      <TextBtnCard
        title={"Thinking about becoming a Nagarrian?"}
        button={{ text: "get to know us", link: "/careers" }}
      />

      {/* Middle column - Regions list */}
      <div className="border-l border-gray-500 flex flex-col gap-4 px-8">
        <p className="text-gray-500">check our open position</p>
        {regions.map((region, idx) => (
          <div
            key={idx}
            className={`cursor-pointer text-xl font-semibold ${
              hoveredRegion === idx ? "text-primary" : "text-gray-700"
            } transition-all`}
            onMouseEnter={() => setHoveredRegion(idx)}
          >
            {region.name}
          </div>
        ))}
      </div>

      {/* Right column - Countries list */}
      <div className="grid grid-cols-2 gap-2 p-2">
        {regions[hoveredRegion]?.countries.map((country, index) => (
          <Link
            key={index}
            to={`/careers/${country.name.toLowerCase().replace(/\s+/g, "-")}`}
            className="relative pl-8 py-1 h-8 group text-gray-600 text-sm hover:text-primary transition-all"
          >
            <span
              className="absolute left-0 top-1/2 transform -translate-y-1/2 w-5 h-3 bg-cover bg-center bg-no-repeat rounded-sm"
              style={{ backgroundImage: `url(${country.flag})` }}
            />
            {country.name}
            <div className=" w-0 bg-primary transition-all group-hover:w-full mt-1" />
          </Link>
        ))}
      </div>
    </MegaMenuWrapper>
  );
}

export default MegaMenuCareers;
