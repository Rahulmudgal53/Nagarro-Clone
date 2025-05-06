import React, { useState, useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HeaderNavItems } from "../../constants";
import { NavLink, Link } from "react-router-dom";
import NagarroLogo from "../../utils/NagarroLogo";
import MenuItem from "./MenuItem";
import MegaMenuInsights from "./MegaMenuInsights";
import MegaMenuAbout from "./MegaMenuAbout";
import MegaMenuIndustries from "./MegaMenuIndustries";
import MegaMenuServices from "./MegaMenuServices";
import MegaMenuCareers from "./MegaMenuCareers";
import Saprater from "../../utils/Saprater";

const Navbar = ({ className = '' }) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);  // State to track sticky behavior
  const timeoutRef = useRef(null);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleMouseEnter = (menuName) => {
    clearTimeout(timeoutRef.current);
    setOpenMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200); // small delay to allow smooth hover
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 1.7) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const baseClass = "py-2 font-equip bg-transparent hover:bg-white relative transition-all duration-300";

  return (
    <nav className={twMerge(
      baseClass,
      className,
      isSticky  && "sticky top-0 z-50 bg-white shadow-md transform translate-y-[0] transition-transform duration-500 ease-out",
      // isSticky && "translate-y-0" // Slide down when sticky
    )}>
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
        <NagarroLogo isSticky={isSticky} />
        <Saprater />

          {/* Navigation links */}
          <div className="hidden lg:flex flex-1 items-center justify-center text-center">
            <ul className="flex gap-4">
              {HeaderNavItems.map((item, index) => (
                <li
                  key={index}
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `font-equip text-lg ${
                        isActive
                          ? "underline underline-offset-8 decoration-[#47d7ac] font-bold"
                          : "text-gray-500 hover:text-[#13294b]"
                      }`
                    }
                  >
                    {item.name === "search" || item.name === "events" ? (
                      ""
                    ) : (
                      <MenuItem
                        key={item.name}
                        label={item.name}
                        openMenu={openMenu}
                        setOpenMenu={setOpenMenu}
                      />
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Search and Language */}
            <div className="flex flex-row items-center justify-between ml-6">
              <FiSearch size={24} className="text-gray-600 cursor-pointer" />

              <div className="ml-4 group relative">
                <Link
                  to="/language"
                  className="bg-slate-700 p-2 rounded-full text-white text-lg cursor-pointer"
                >
                  en
                </Link>
                <span className="absolute left-2.5 hidden group-hover:block text-2xl cursor-pointer transition-transform">
                  🢗
                </span>
              </div>
            </div>
          </div>

          {/* Mobile Hamburger */}
          <div className=" lg:hidden flex items-center">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <AiOutlineClose className="text-2xl absolute text-emerald-300 top-0 z-50 right-0 m-4" />
              ) : (
                <AiOutlineMenu className="text-2xl text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileDrawerOpen && (
          <div className="fixed h-screen top-0 right-0 z-20 bg-secondary w-full md:w-1/2 xl:w-1/3 p-10 flex flex-col justify-start items-left text-left lg:hidden">
            <ul>
              {HeaderNavItems.map((item, index) => (
                <li className="py-1 text-base" key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      `font-bold ${
                        isActive
                          ? "text-orange-500 font-extrabold"
                          : "text-white hover:text-blue-500"
                      }`
                    }
                    to={item.href}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="flex">
              <Link to="/language" className="text-white text-xl text-center">
                en
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Mega Menus */}
      {openMenu && (
        <div
          className="absolute left-0 top-[50px] w-full bg-white shadow-2xl  grid grid-cols-3 gap-10 transition-all duration-300 z-40"
          onMouseEnter={() => handleMouseEnter(openMenu)}
          onMouseLeave={handleMouseLeave}
        >
          {openMenu === "insights" && <MegaMenuInsights />}
          {openMenu === "about" && <MegaMenuAbout />}
          {openMenu === "industries" && <MegaMenuIndustries />}
          {openMenu === "services" && <MegaMenuServices />}
          {openMenu === "careers" && <MegaMenuCareers />}
          {/* add more menus */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
