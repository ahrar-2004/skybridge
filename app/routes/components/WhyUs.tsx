import React from "react";
import { ShieldCheck, Home, Users } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck className="text-[#0077b6] w-12 h-12" />,
      title: "Trusted & Verified Listings",
      description:
        "We offer thoroughly verified property listings with full transparency, ensuring every transaction is safe, secure, and reliable for buyers and sellers alike.",
    },
    {
      icon: <Home className="text-[#0077b6] w-12 h-12" />,
      title: "Extensive Property Options",
      description:
        "From affordable starter homes and budget apartments to premium luxury estates and commercial real estate, our diverse portfolio caters to every lifestyle and investment goal.",
    },
    {
      icon: <Users className="text-[#0077b6] w-12 h-12" />,
      title: "Experienced & Dedicated Team",
      description:
        "Our knowledgeable real estate agents provide personalized guidance and professional support throughout your buying, selling, or renting journey, ensuring satisfaction at every step.",
    },
  ];

  return (
    <section
      className="bg-[#f0f9ff] py-20 px-6"
      id="why"
      aria-label="Why Choose Sky Bridge Real Estate"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-6 animate-fadeInUp">
          Why Choose Us
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed animate-fadeInUp animation-delay-200">
          At <span className="font-semibold text-[#b8860b]">Sky Bridge Real Estate</span>, 
          we are committed to delivering an exceptional real estate experience. Our services include verified property listings, comprehensive market insights, expert negotiation skills, and dedicated client support. Whether you are buying, selling, or investing in real estate in Pakistan, our trusted team ensures a smooth, transparent, and rewarding process.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 text-left cursor-pointer
              transform transition duration-500 hover:scale-105 hover:shadow-2xl
              animate-fadeInUp animation-delay-[calc(200ms*var(--i))]"
              style={{ "--i": index } as React.CSSProperties}
              aria-labelledby={`reason-title-${index}`}
              role="article"
            >
              <div className="flex items-center justify-start mb-4">
                {reason.icon}
                <div className="ml-4 text-[#b8860b] text-2xl font-semibold" id={`reason-title-${index}`}>
                  {reason.title}
                </div>
              </div>
              <p className="text-gray-600 text-base leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS custom animations */}
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-[calc(200ms*var(--i))] {
          animation-delay: calc(200ms * var(--i));
        }
      `}</style>
    </section>
  );
}
