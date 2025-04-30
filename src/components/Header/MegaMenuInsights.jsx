import React from "react";
import MegaMenuWrapper from "./MegaMenuWrapper";
import Button from "../../utils/Button";

const MegaMenuInsights = () => {
  return (
    <MegaMenuWrapper>
    <div className="grid col-span-3 border-b border-gray-700 pb-10 mb-8 bg-white ">
        <div className="flex flex-row justify-between gap-4 text-sm  ">
        <h2 className="text-2xl lg:text-4xl max-w-sm">Thinking Breakthrough</h2>
          <Button className={`text-black hover:scale-110 transition-all duration-200 hover:bg-emerald-300 `} name={"Work With Us"} />
          
        </div>
        </div>
            
      {/* Column 1 */}
      <div className="border-r border-gray-700">
        <h3 className="  text-darkBlue font-bold mb-4">filter by goal</h3>
        <ul className="space-y-2">
          {['modernize', 'optimize', 'innovate', 'disrupt', 'transform'].map((item) => (
            <li key={item} className="hover:text-blue-600 hover:underline text-3xl capitalize cursor-pointer">{item}</li>
          ))}
        </ul>
      </div>

      {/* Column 2 */}
      <div className="border-r border-gray-700 pr-10">
        <h3 className="text-darkBlue font-bold mb-4">the leadership suite</h3>
        <ul className="space-y-4">
          <li className="group hover:text-blue-600 hover:underline cursor-pointer">
            <span className="font-bold">c-suite:</span><br />
            <span className="text-gray-600 group-hover:text-blue-600">power your growth with business insights</span>
          </li>
          <li className="group hover:text-blue-600 hover:underline cursor-pointer">
            <span className="font-bold">t-suite:</span><br />
            <span className="text-gray-600  group-hover:text-blue-600">technology insights from the frontlines</span>
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div>
        <h3 className=" text-darkBlue font-bold mb-4">industry</h3>
        <ul className="">
          {[
            'automotive', 'banking and financial services', 'insurance', 'energy and utilities',
            'gaming and entertainment', 'software & hi-tech', 'life-sciences and healthcare',
            'media and publishing', 'retail and cpg', 'telecommunications', 'travel & logistics',
            'industry and automation', 'non-profits and education', 'public sector', 'smart buildings',
            'private equity'
          ].map((industry) => (
            <li key={industry} className= "text-sm hover:text-blue-600 hover:underline cursor-pointer">{industry}</li>
          ))}
        </ul>
      </div>

    </MegaMenuWrapper>
  );
};

export default MegaMenuInsights;
