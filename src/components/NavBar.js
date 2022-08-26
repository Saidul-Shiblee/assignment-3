import React from "react";
import Logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3 items-center">
        <a href="index.html">
          <img className="h-6 w-24" src={Logo} alt="Learn with Sumit" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
