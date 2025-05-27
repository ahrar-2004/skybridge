import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
    backgroundImage: "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1950&q=80')",
    minHeight: "90vh",
  }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Find Your <span className="text-[#A3E635]">Dream Home</span> with{" "}
            <span className="text-[#FBBF24]">Sky Bridge</span>
          </h1>
          <p className="text-lg text-gray-200">
            Discover luxury apartments, family homes, and investment opportunities. Let us help you find the perfect place to live or grow.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FBBF24] hover:bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Optional Image/Graphic */}
        <div className="hidden md:block">
          <img
            src="/house-mockup.png"
            alt="Property Showcase"
            className="w-full rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
