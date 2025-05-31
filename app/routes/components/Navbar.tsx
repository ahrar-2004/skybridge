import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import logo from "./logo.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About Us", to: "about" },
    { name: "Our Services", to: "services" },
    { name: "Why Us", to: "why" },
    { name: "Our Team", to: "team" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Contact Us", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/90 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo and Brand */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Sky Bridge Logo"
            className="w-10 h-10 rounded-full object-cover shadow"
          />
          <span className="text-2xl font-bold text-[#0074B7]">Sky Bridge</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 lg:space-x-10 font-semibold text-[#B8860B]">
          {navItems.map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-[#0074B7] transition-colors"
              >
                {item.name}
                <span className="block h-0.5 w-0 bg-[#0074B7] group-hover:w-full transition-all duration-300 mt-1"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#0074B7]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 sm:w-1/2 bg-white/80 backdrop-blur-md z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Sky Bridge Logo"
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-[#0074B7]">Sky Bridge</span>
          </div>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={26} className="text-[#0074B7]" />
          </button>
        </div>

        <ul className="flex flex-col p-6 space-y-5 font-medium text-[#B8860B] bg-white/70 backdrop-blur-sm rounded-lg shadow-inner">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0074B7] transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
