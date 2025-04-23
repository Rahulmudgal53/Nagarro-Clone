import React from "react";

// import Footer from "./Footer/Footer";
import {Header, Footer} from "../index.jsx";

import { ScrollRestoration, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const location = useLocation();
    // const isHomePage = location.pathname === "/" || location.pathname === "/home";
    const isHomePage = location.pathname === "/" ;

    return (
        <div className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className={`flex-grow ${isHomePage ? "bg-white" : "bg-gray-100"}`}>
            <Outlet />
            <ScrollRestoration />
        </main>
        <Footer />
        </div>
    );
};

export default Layout;