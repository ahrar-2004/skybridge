import React from "react";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1950&q=80')",
        minHeight: "90vh",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-md">
            Discover Your <span className="text-[#A3E635]">Dream</span> Home with{" "}
            <span className="text-[#FBBF24]">Sky Bridge</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            From premium family villas to modern apartments, we offer properties that elevate your lifestyle. Trust us to guide you home.
          </p>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="bg-[#FBBF24] hover:bg-[#fcd34d] text-black font-semibold px-6 py-3 rounded-full shadow-lg transition"
            >
              Contact Us
            </a>
            <a
              href="#featured"
              className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              Explore Properties
            </a>
          </div>
        </div>

        {/* Right Image or Showcase */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <img
              src="/house-mockup.png"
              alt="Modern Property"
              className="rounded-3xl shadow-2xl"
            />
            <img
              src="/luxury-home.jpg"
              alt="Luxury Home"
              className="absolute bottom-[-30px] right-[-30px] w-40 rounded-xl border-4 border-white shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
