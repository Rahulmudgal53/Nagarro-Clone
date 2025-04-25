import React from "react";
import Button from "../../utils/Button";
import NagarroLogo from "../../utils/NagarroLogo";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import NavItems from "../../utils/navItems";
import { footerNavItem } from "../../constants";
function Footer() {
  return (
    <div className="">
      <div className="flex flex-col justify-around items-center lg:flex-row py-12 lg:py-24 px-[10%] bg-[#13294b] text-white">
        <h2 className="text-2xl lg:text-3xl max-w-sm">What can we help you achieve?</h2>
        <div className="flex flex-col gap-4 text-sm mt-10">
          <Button className={`text-black`} name={"Work With Us"} />
          <Button
            className={`bg-transparent border border-gray-300`}
            name={"Apply for job"}
          />
        </div>
      </div>
      <div className=" px-[10%] ">
        <div className="flex flex-col justify-around items-center py-24 lg:flex-row">
          <h2 className="text-lg lg:text-2xl lg:max-w-sm ">
            Stay up to date with insights from Nagarro!
          </h2>
          <div className="relative pt-12 lg:pt-0">
            <input
              type="email"
              placeholder="Email Address"
              className="pr-24 max-w-[600px] p-2 border border-black rounded-full"
            />
            <Button
              className={`absolute bottom-1 right-1 p-2 px-4 text-[12px] text-white bg-[#13294b]`}
              name={"Subscribe"}
            />
          </div>
        </div>

        {/* Footer 2nd white bg */}

        <div className="flex flex-col-reverse justify-around items-center pb-8 lg:pb-0 lg:flex-row gap-4">
          <div className="flex flex-row gap-2 items-center text-sm">
            <NagarroLogo className={`w-16 lg:w-20`} />
            <p className="text-sm text-gray-500 lg:text-[10px]">©2025</p>
          </div>
        
          <div className="flex flex-row justify-around items-center flex-wrap gap-4 text-sm">
          <NavItems navItems={footerNavItem}/>
        </div>

          <div className="flex flex-row justify-around mt-4 items-center gap-4 lg:text-sm mb-4">
            <FaFacebookF
              className="text-[#13294b] hover:text-[#47d7ac] rounded-full cursor-pointer"
              size={12}
            />
            <FaInstagram
              className="text-[#13294b] hover:text-[#47d7ac] rounded-full cursor-pointer"
              size={12}
            />
            <FaTwitter
              className="text-[#13294b] hover:text-[#47d7ac] rounded-full cursor-pointer"
              size={12}
            />
            <FaLinkedinIn
              className="text-[#13294b] hover:text-[#47d7ac] rounded-full cursor-pointer"
              size={12}
            />
            <FaGithub
              className="text-[#13294b] hover:text-[#47d7ac] rounded-full cursor-pointer"
              size={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
