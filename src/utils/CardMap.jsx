import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const CardMap = ({ title, content }) => {
  return (
    <div className="px-[5%] lg:px-[8%] py-12 bg-white">
      <h2 className="text-2xl font-bold mb-8">{title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="relative group rounded-md overflow-hidden h-[600px] hover:bg-gradient-to-t hover:from-black hover:via-black/60 hover:to-transparent shadow-md"
          >
            {item.image && (
                <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            )}

            <div className=" absolute h-[200px] md:h-[300px] bottom-0 left-0 right-0 bg-[#06041f] p-6 text-white">
              <h3 className=" text-xl md:text-3xl font-semibold mb-2">{item.title}</h3>
              <p className=" text-sm lg:text-lg text-gray-200 mb-4">{item.description}</p>
              {item.button && (
                <Button name={item.button.text || "Know more"} className={' px-6 py-3 text-sm bg-gray-100 text-[#06041f] hover:bg-[#47d7ac] hover:text-[white] transition'} link={item.button.link} />
                  
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMap;
  