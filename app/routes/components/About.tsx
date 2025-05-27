import React from "react";

export default function About() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-[#e0f7fa] via-[#f0f9ff] to-[#ffffff]" id="about">
      {/* Decorative Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#0077b6] opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#b8860b] opacity-10 rounded-full blur-3xl z-0"></div>
      <div className="absolute -top-16 right-10 w-40 h-40 bg-[#fcd34d] opacity-20 rounded-full blur-2xl z-0 rotate-12"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-6 leading-tight">
            Who We Are
          </h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            <span className="text-[#b8860b] font-semibold">Sky Bridge Real Estate</span> is your trusted partner in real estate solutions. Our focus is on delivering <strong>reliable</strong>, <strong>transparent</strong>, and <strong>customer-focused</strong> services that make property buying and selling smooth and stress-free.
          </p>
          <p className="text-gray-600 mb-5 leading-relaxed">
            From first-time homebuyers to seasoned investors, our experienced team ensures every client makes informed decisions with confidence. Our process is guided by your goals and satisfaction.
          </p>
          <p className="text-gray-600 leading-relaxed">
            At the heart of our mission is the belief in <strong>bridging people with opportunities</strong>. We help you discover dream homes, unlock investment potential, and achieve peace of mind in every transaction.
          </p>
        </div>

        {/* Artistic Image Grid */}
        <div className="relative w-full h-full grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1572120360610-d971b9b78849?auto=format&fit=crop&w=500&q=80"
            alt="Real Estate 1"
            className="rounded-2xl shadow-lg object-cover h-48 w-full transform hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1627492074720-968e3b07d93f?auto=format&fit=crop&w=500&q=80"
            alt="Real Estate 2"
            className="rounded-2xl shadow-lg object-cover h-48 w-full transform hover:scale-105 transition duration-500"
          />
          <img
            src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=500&q=80"
            alt="Real Estate 3"
            className="col-span-2 rounded-2xl shadow-xl object-cover h-56 w-full transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
