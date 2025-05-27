import React from "react";
import { ShieldCheck, Home, Users } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="text-white w-8 h-8" />,
      title: "Trusted & Verified Listings",
      description:
        "Thoroughly verified property listings with full transparency to ensure safe, secure, and reliable transactions.",
      image: "https://images.pexels.com/photos/8293776/pexels-photo-8293776.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: <Home className="text-white w-8 h-8" />,
      title: "Extensive Property Options",
      description:
        "From budget apartments to luxury estates and commercial spaces, we cater to every need and budget.",
      image: "https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: <Users className="text-white w-8 h-8" />,
      title: "Experienced & Dedicated Team",
      description:
        "Our expert agents provide personalized support and guidance for buying, selling, or investing.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section
      className="relative bg-[#f0f9ff] py-24 px-6 overflow-hidden"
      id="why"
      aria-label="Why Choose Sky Bridge Real Estate"
    >
      {/* Decorative background overlays */}
      <img
        src="https://www.transparenttextures.com/patterns/diagmonds-light.png"
        className="absolute inset-0 w-full h-full object-cover opacity-10 -z-10"
        alt="decor"
      />
      <img
        src="https://images.unsplash.com/photo-1560185127-6ed189bf02b6?auto=compress&cs=tinysrgb&w=600"
        className="absolute top-10 right-10 w-64 rounded-xl shadow-xl opacity-20 rotate-6 -z-10 hidden lg:block"
        alt="building"
      />
      <img
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=compress&cs=tinysrgb&w=600"
        className="absolute bottom-10 left-10 w-64 rounded-xl shadow-xl opacity-20 -rotate-6 -z-10 hidden lg:block"
        alt="city"
      />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-6">
          Why Choose Us
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed">
          At <span className="font-semibold text-[#b8860b]">Sky Bridge Real Estate</span>,
          we’re dedicated to helping you make informed real estate decisions with ease, clarity, and confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105"
              role="article"
            >
              <img
                src={reason.image}
                alt={reason.title}
                className="w-full h-40 object-cover"
              />
              <div className="absolute top-3 left-3 bg-[#0077b6] p-3 rounded-full shadow-lg">
                {reason.icon}
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-[#b8860b] mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
