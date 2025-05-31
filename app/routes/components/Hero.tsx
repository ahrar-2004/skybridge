import React from "react";
import bd1 from "./bd1.jpg"; // High-res modern architecture
import bd2 from "./bd2.webp"; // Another elegant building

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden" id="hero">
      {/* Background texture */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1537726235470-8504e3beef77?auto=format&fit=crop&w=1950&q=80')",
        }}
      />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1F2937] leading-tight">
            Elevate Your Life with{" "}
            <span className="text-[#0074B7]">Sky Bridge</span>{" "}
            <span className="text-[#B8860B]">Real Estate</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-xl leading-relaxed">
            Where modern architecture meets luxurious living. We help you find
            your perfect home, from stunning city towers to serene suburban villas.
          </p>
          <div className="flex flex-wrap gap-4">
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

        {/* Images */}
        <div className="relative w-full max-w-full">
          <div className="rounded-3xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition duration-300">
            <img
              src={bd1}
              alt="Architectural Property"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-10 right-1/2 translate-x-1/2 sm:right-6 sm:translate-x-0 w-40 sm:w-44 rounded-xl overflow-hidden border-4 border-white shadow-2xl">
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
