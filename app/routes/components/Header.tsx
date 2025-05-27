import React from "react";
import logo from "./logo.jpg";

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-[#b8860b] via-[#d4af37] to-[#b8860b] text-white py-3 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left: Logo + Welcome */}
        <div className="flex items-center space-x-4 mb-3 md:mb-0">
          <img
            src={logo}
            alt="Sky Bridge Logo"
            className="w-12 h-12 rounded-full object-cover shadow-lg"
          />
          <h1 className="text-lg md:text-xl font-extrabold tracking-wide drop-shadow-md">
            Welcome to Sky Bridge Real Estate
          </h1>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 text-sm md:text-base font-medium">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <svg
              className="w-5 h-5 text-white opacity-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 12.414a4 4 0 10-5.656 5.656l4.243 4.243a8 8 0 1111.314-11.314l-4.243 4.243z"
              ></path>
              <circle cx="12" cy="12" r="3" stroke="none" fill="currentColor" />
            </svg>
            <span>Karachi, Pakistan</span>
          </div>

          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <svg
              className="w-5 h-5 text-white opacity-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5h2l3.6 7.59-1.35 2.44A11.96 11.96 0 0012 19a11.96 11.96 0 007.46-2.37l2.22-1.44a1 1 0 00.34-1.33l-2-3a1 1 0 00-1.33-.34l-2.89 1.74a6.978 6.978 0 01-5.11-5.11L6.34 7.67a1 1 0 00-.34-1.33l-3-2a1 1 0 00-1.33.34z"
              ></path>
            </svg>
            <a href="tel:+922112345678" className="hover:underline">
              +92 21 1234 5678
            </a>
          </div>

          <div className="flex items-center space-x-2">
            <svg
              className="w-5 h-5 text-white opacity-90"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m0 0l-4-4m4 4l4 4m5-4a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <a
              href="mailto:info@skybridge-realestate.com"
              className="hover:underline"
            >
              info@skybridge-realestate.com
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
