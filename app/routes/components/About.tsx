import React from "react";
import re1 from "./re1.jpg"; // High-res modern apartment
import re2 from "./re2.jpg"; // Luxury interior
import re3 from "./re3.jpeg"; // Architectural real estate

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-[#f9fafb] via-[#f0f9ff] to-white overflow-hidden"
    >
      {/* Soft Abstract Blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#0074B7] opacity-10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B] opacity-10 rounded-full blur-[120px] z-0"></div>
      <div className="absolute top-20 right-20 w-40 h-40 bg-[#fcd34d] opacity-20 rounded-full blur-2xl z-0 rotate-45"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
        {/* Text Section */}
        <div className="space-y-6" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1f2937] leading-tight">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700">
            <span className="text-[#0074B7] font-semibold">Sky Bridge Real Estate</span> is a premium property consultancy that bridges people with better living. We specialize in <strong>reliable</strong>, <strong>luxury-focused</strong>, and <strong>customer-driven</strong> real estate solutions tailored to your lifestyle and investment goals.
          </p>
          <p className="text-gray-600">
            Whether you're a first-time homebuyer or a seasoned investor, our dedicated team ensures you experience clarity, transparency, and confidence at every step.
          </p>
          <p className="text-gray-600">
            With Sky Bridge, you're not just buying property — you're stepping into a vision, an opportunity, and a better future.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1" data-aos="zoom-in-up" data-aos-delay="100">
            <img
              src={re1}
              alt="Modern Apartment"
              className="rounded-3xl shadow-xl object-cover h-56 w-full hover:scale-105 transition"
            />
          </div>
          <div className="col-span-1" data-aos="zoom-in-up" data-aos-delay="200">
            <img
              src={re2}
              alt="Luxury Interior"
              className="rounded-3xl shadow-xl object-cover h-56 w-full hover:scale-105 transition"
            />
          </div>
          <div className="col-span-2" data-aos="zoom-in-up" data-aos-delay="300">
            <img
              src={re3}
              alt="Architectural Real Estate"
              className="rounded-3xl shadow-2xl object-cover h-64 w-full hover:scale-[1.02] transition"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
