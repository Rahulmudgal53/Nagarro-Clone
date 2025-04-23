import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { HeaderNavItems } from "../../constants";
import { NavLink, Link } from "react-router-dom";
// import naglogo from '../../assets/naglogo.png'
import NagarroLogo from "../../utils/NagarroLogo";
import NavItems from "../../utils/navItems";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-2 font-equip bg-white border-b border-neutral-700">
      <div className="container  px-4 mx-auto relative text-sm">
        <div className="flex justify-between px-4 items-center">
          {/* Logo on the left */}

          {/* <div className="flex items-center justify-start flex-shrink-0">
                        <Link to="/">
                        <img className="h-50 w-40 " src={naglogo} alt="Logo-img" />
                        </Link>
                    </div> */}
          <NagarroLogo />

          {/* Navigation links on the right */}
          <div className="hidden lg:flex  items-center justify-between text-center ">
            <ul className="flex gap-4 ">
              {HeaderNavItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `font-semibold ${
                        isActive
                          ? "text-orange-500 font-extrabold"
                          : "text-black hover:text-blue-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            {/* <NavItems navItems={HeaderNavItems}/> */}
            <div className="flex flex-row px-4 items-center justify-center">
              <FiSearch size={24} className="text-gray-600" />

              <Link
                to="/language"
                className="bg-slate-700 mx-4 px-3 text-white rounded-full text-xl items-center text-center"
              >
                en
              </Link>
            </div>
          </div>

          {/* Hamburger menu on the right in mobile view */}
          <div className="lg:hidden flex items-center ">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? (
                <AiOutlineClose className="text-2xl absolute text-emerald-300 top-0 z-50 right-0 m-4" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileDrawerOpen && (
          <div className="fixed top-0 right-0 z-20 bg-gray-600 w-1/2 p-10 flex flex-col justify-center items-left text-left lg:hidden">
            <ul>
              {HeaderNavItems.map((item, index) => (
                <li className=" py-1  text-base" key={index}>
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
            <div className="flex ">
              <Link to="/language" className=" text-white text-xl text-center">
                en
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
