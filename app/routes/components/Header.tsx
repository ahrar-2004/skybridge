import React from "react";
import logo from "./logo.jpg"; // Make sure the path is correct

const Header: React.FC = () => {
  return (
    <header className="bg-[#B8860B] text-white py-2 px-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-3">
        <img
          src={logo}
          alt="Sky Bridge Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <h1 className="text-sm md:text-base font-semibold">
          Welcome to Sky Bridge Real Estate
        </h1>
      </div>
    </header>
  );
};

export default Header;
