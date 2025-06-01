import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bd1 from "./bd1.jpg";
import bd2 from "./bd2.webp";
import logo from "./logo.jpg";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
       className="relative bg-white overflow-x-hidden overflow-y-hidden pt-24" // 👈 Add pt-24 here
  id="hero"
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      {/* Sticky logo inside content */}
      <div className="sticky top-4 z-30 px-4 sm:px-6 lg:px-8">
        <img
          src={logo}
          alt="Sky Bridge Logo"
          className="w-14 sm:w-16 md:w-20 h-auto rounded-full shadow-md border border-gray-200"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-8 text-center md:text-left" data-aos="fade-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F2937] leading-tight">
            Elevate Your Life with{" "}
            <span className="text-[#0074B7]">Sky Bridge</span>{" "}
            <span className="text-[#B8860B]">Real Estate</span>
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            Where modern architecture meets luxurious living. We help you find
            your perfect home, from stunning city towers to serene suburban villas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-[#0074B7] hover:bg-[#005f94] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              Request a Call
            </a>
            <a
              href="#featured"
              className="bg-[#B8860B] hover:bg-[#d4a017] text-white px-6 py-3 rounded-full shadow-lg transition duration-300"
            >
              View Listings
            </a>
          </div>
        </div>

        {/* Image Content */}
        <div
          className="relative w-full max-w-full flex justify-center md:justify-end"
          data-aos="zoom-in"
        >
          <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-300">
            <img
              src={bd1}
              alt="Architectural Property"
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            className="absolute -bottom-10 right-1/2 translate-x-1/2 sm:right-0 sm:translate-x-0 w-32 sm:w-44 rounded-xl overflow-hidden border-4 border-white shadow-2xl"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={bd2}
              alt="Luxury Home"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
