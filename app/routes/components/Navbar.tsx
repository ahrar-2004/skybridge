import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from 'lucide-react'; // Optional: clean icons

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
    <nav className="bg-white shadow-md py-4 px-6 fixed w-full z-50">
      <div className="flex justify-between items-center">
        <h1 className="text-[#0074B7] font-bold text-xl">Sky Bridge</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-[#B8860B] font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-[#0074B7]"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-[#0074B7]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h1 className="text-[#0074B7] font-bold text-xl">Sky Bridge</h1>
          <button onClick={() => setIsOpen(false)}>
            <X size={28} className="text-[#0074B7]" />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-4 text-[#B8860B] font-medium">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-[#0074B7]"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
