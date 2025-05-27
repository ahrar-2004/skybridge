import React from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Emily Johnson",
      text: "Sky Bridge Real Estate helped me find my dream home effortlessly. Their professional agents were attentive, knowledgeable, and made the entire process smooth and stress-free.",
    },
    {
      name: "Michael Smith",
      text: "Excellent service and transparent dealings from start to finish. I highly recommend Sky Bridge for anyone looking to buy or sell property with confidence and peace of mind.",
    },
    {
      name: "Sarah Williams",
      text: "I had a wonderful experience with their expert team. They truly understood my needs and guided me perfectly through every step. Five stars for outstanding customer satisfaction!",
    },
    {
      name: "David Brown",
      text: "The trusted real estate professionals at Sky Bridge made investing in property easy and rewarding. Their market insight and personalized support exceeded my expectations.",
    },
    {
      name: "Jessica Davis",
      text: "Sky Bridge Real Estate offers unparalleled customer service. Their dedication and transparency made selling my home a positive experience from listing to closing.",
    },
  ];

  return (
    <section
      id="testimonials"
      aria-label="Customer Testimonials"
      className="relative py-20 px-6 overflow-hidden bg-gradient-to-br from-[#e6f0fa] to-[#d9e8f9]"
    >
      {/* Floating shapes */}
      <div className="absolute top-10 left-8 w-20 h-20 rounded-full bg-[#0077b6] opacity-15 filter blur-3xl animate-floatSlow mix-blend-screen"></div>
      <div className="absolute bottom-24 right-10 w-28 h-28 rounded-full bg-[#b8860b] opacity-10 filter blur-3xl animate-floatSlow animation-delay-1000 mix-blend-screen"></div>
      <div className="absolute top-1/2 right-1/3 w-36 h-36 rounded-full bg-[#0077b6] opacity-12 filter blur-2xl animate-floatSlow animation-delay-1500 mix-blend-screen"></div>

      <div className="relative max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-10 animate-fadeInUp">
          What Our Clients Say
        </h2>
        <p className="text-[#0f172a] mb-20 max-w-3xl mx-auto text-lg leading-relaxed animate-fadeInUp animation-delay-200 font-light tracking-wide">
          Discover why so many clients trust Sky Bridge Real Estate for buying,
          selling, and investing in properties. Our commitment to transparency,
          professionalism, and client satisfaction is reflected in their stories.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="relative bg-white rounded-3xl shadow-md p-8 text-left cursor-default
              hover:shadow-[0_0_15px_rgba(184,134,11,0.4)]
              transition-transform transform hover:scale-[1.04]
              animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
              aria-labelledby={`testimonial-name-${index}`}
            >
              <Quote className="text-[#0077b6] w-10 h-10 mb-4" />
              <blockquote className="text-gray-900 mb-6 italic leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <h4
                id={`testimonial-name-${index}`}
                className="text-[#b8860b] font-semibold text-xl tracking-wide"
              >
                {testimonial.name}
              </h4>
            </article>
          ))}
        </div>
      </div>

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
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animate-floatSlow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
