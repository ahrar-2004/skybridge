import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#0077b6] text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Logo & Intro */}
        <div>
          <h2 className="text-2xl font-bold text-[#b8860b] mb-2">Sky Bridge Real Estate</h2>
          <p className="text-sm">
            Providing trusted and transparent property solutions across Pakistan. Let’s build your future together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#b8860b]">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-[#b8860b]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#b8860b]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[#b8860b]">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#b8860b]">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-[#b8860b]">Contact</h3>
          <ul className="text-sm space-y-2">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" /> +92 300 1234567
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" /> info@skybridge.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Toba Tek Singh, Punjab
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Sky Bridge Real Estate. All rights reserved.
      </div>
    </footer>
  );
}
