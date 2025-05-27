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
    <section className="bg-white py-20 px-6" id="testimonials" aria-label="Customer Testimonials">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-8 animate-fadeInUp">
          What Our Clients Say
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed animate-fadeInUp animation-delay-200">
          Discover why so many clients trust Sky Bridge Real Estate for buying, selling, and investing in properties. Our commitment to transparency, professionalism, and client satisfaction is reflected in their stories.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-3xl shadow-lg p-8 text-left hover:shadow-2xl transition-transform transform hover:scale-[1.03] cursor-default animate-fadeInUp"
              style={{ animationDelay: `${index * 150}ms` }}
              role="article"
              aria-labelledby={`testimonial-name-${index}`}
            >
              <Quote className="text-[#b8860b] w-10 h-10 mb-4" />
              <p className="text-gray-800 mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
              <h4
                id={`testimonial-name-${index}`}
                className="text-[#0077b6] font-semibold text-xl"
              >
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>

      <style >{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.7s ease forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </section>
  );
}
