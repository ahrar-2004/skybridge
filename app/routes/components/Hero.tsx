import React from "react";

export default function Hero() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 items-center gap-10">
        {/* Left content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#0077b6] mb-6">
            Find Your Dream Home with
            <span className="text-[#b8860b]"> Sky Bridge</span>
          </h1>
          <p className="text-lg mb-6 text-gray-700">
            Explore top properties, modern apartments, and luxury homes with us. Your future home is just a click away.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#b8860b] hover:bg-[#d4a017] text-white font-semibold px-6 py-3 rounded-xl transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right image (placeholder) */}
        <div className="hidden md:block">
          <img
            src="/hero-image.jpg" // Replace with your actual image path
            alt="Dream Home"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
