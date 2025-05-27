import React, { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

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
    <nav className="bg-white shadow-md py-4 px-6 w-full z-40 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-[#0074B7] font-bold text-xl">Sky Bridge</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-[#B8860B] font-semibold">
          {navItems.map((item) => (
            <li key={item.to} className="relative group">
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer transition-colors duration-300 hover:text-[#0074B7]"
              >
                {item.name}
                <span className="absolute left-1/2 bottom-[-6px] w-0 h-0.5 bg-[#0074B7] group-hover:w-full transition-all duration-300 origin-center transform -translate-x-1/2"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-[#0074B7]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b">
          <h1 className="text-[#0074B7] font-bold text-xl">Sky Bridge</h1>
          <button onClick={() => setIsOpen(false)} aria-label="Close menu">
            <X size={28} className="text-[#0074B7]" />
          </button>
        </div>
        <ul className="flex flex-col p-6 space-y-6 text-[#B8860B] font-medium">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:text-[#0074B7]"
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
