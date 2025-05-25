import React from "react";

export default function About() {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold text-[#0077b6] mb-4">About Us</h2>
          <p className="text-gray-700 mb-4">
            <span className="text-[#b8860b] font-semibold">Sky Bridge Real Estate</span> is a leading real estate company committed to delivering reliable, transparent, and customer-centric property solutions.
          </p>
          <p className="text-gray-600 mb-4">
            Whether you're buying, selling, or seeking advice, our professional team is here to help you navigate the market with confidence. We prioritize your trust and satisfaction above all.
          </p>
          <p className="text-gray-600">
            Our mission is to bridge people with opportunities—helping clients find their dream homes, make smart investments, and achieve peace of mind in every real estate transaction.
          </p>
        </div>

        {/* Optional Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
            alt="Real Estate"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
