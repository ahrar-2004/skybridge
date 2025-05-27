import React from "react";

export default function About() {
  return (
    <section
      className="py-20 bg-[#f0f9ff]"
      id="about"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
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

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80"
            alt="Luxury Real Estate Building"
            className="rounded-2xl shadow-xl transition-transform hover:scale-105 duration-500"
          />
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#0077b6] opacity-20 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
}
