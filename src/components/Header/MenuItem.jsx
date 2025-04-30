import React from "react";

const MenuItem = ({ label }) => {
  return (
    <div className="cursor-pointer text-md text-gray-500 hover:text-gray-400 transition-colors duration-300">
      {label}
    </div>
  );
};

export default MenuItem;