import React from "react";
import { industries } from "../../constants/ListItems";
import { Link } from "react-router-dom";
import MegaMenuWrapper from "./MegaMenuWrapper";
import TextBtnCard from "../../utils/TextBtnCard";

const MegaMenuIndustries = () => {
  const col1 = industries.slice(0, 6);
  const col2 = industries.slice(6, 12);
  const col3 = industries.slice(12, 18);

  return (
    <MegaMenuWrapper className="grid-cols-4">
      
      {/* 1st column: Static text section */}
      <div className="flex flex-col justify-between h-full">
        <TextBtnCard
          title="Industries"
          description="Explore how digital product engineering can transform your industry."
          button={{ text: "View all industries", link: "/industries" }}
        />
      </div>

      {/* 2nd column */}
      <div className="flex flex-col gap-4 pt-4">
        {col1.map((item, idx) => (
          <Link
            key={idx}
            to={`/industries/${item.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="group"
          >
            <h3 className="text-sm text-neutral-800 group-hover:text-darkBlue transition-colors">
              {item.category}
            </h3>
          </Link>
        ))}
      </div>

      {/* 3rd column */}
      <div className="flex flex-col gap-4 pt-4">
        {col2.map((item, idx) => (
          <Link
            key={idx}
            to={`/industries/${item.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="group"
          >
            <h3 className="text-sm text-neutral-800 group-hover:text-darkBlue transition-colors">
              {item.category}
            </h3>
          </Link>
        ))}
      </div>

      {/* 4th column */}
      <div className="flex flex-col gap-4 pt-4">
        {col3.map((item, idx) => (
          <Link
            key={idx}
            to={`/industries/${item.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="group"
          >
            <h3 className="text-sm text-neutral-800 group-hover:text-darkBlue transition-colors">
              {item.category}
            </h3>
          </Link>
        ))}
      </div>

    </MegaMenuWrapper>
  );
};

export default MegaMenuIndustries;
