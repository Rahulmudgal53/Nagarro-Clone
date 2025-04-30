import React from "react";
import { Link } from "react-router-dom";

function ArrowButton({text, link}) {
  return (
    <div>
      <Link to={link} className="flex flex-col group">
        <div className="flex items-center">
          <span className="text-secondary hover:text-darkBlue">
            {text}
          </span>
        </div>

        <div className="flex pl-6 -mt-4  items-center -rotate-2">
          <svg
            className="w-32 h-3 mt-1 relative"
            viewBox="0 0 528 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 10C275.009 -1.57174 527 1.32143 527 1.32143"
              stroke="#47d7ac"
              strokeWidth="8"
              strokeLinecap="round"
            />
          </svg>
          <span className="relative right-6 top-[-1.5px] text-primary transform group-hover:translate-x-3 transition-transform duration-300 text-3xl">
            →
          </span>
        </div>
      </Link>
    </div>
  );
}

export default ArrowButton;
