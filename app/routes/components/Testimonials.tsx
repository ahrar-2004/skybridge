import React from "react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ayesha Khan",
      text: "Sky Bridge Real Estate helped me find my dream home effortlessly. The team was professional, responsive, and very supportive throughout the process.",
    },
    {
      name: "Ali Raza",
      text: "Excellent service and transparent dealings. I highly recommend Sky Bridge for anyone looking to buy or sell property.",
    },
    {
      name: "Sarah Ahmed",
      text: "I had a wonderful experience with their agents. They understood my needs and guided me perfectly. 5 stars!",
    },
  ];

  return (
    <section className="bg-white py-16 px-4" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0077b6] mb-4">Testimonials</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Here’s what our clients say about their experience with Sky Bridge Real Estate.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl shadow-md p-6 text-left hover:shadow-lg transition"
            >
              <Quote className="text-[#b8860b] w-8 h-8 mb-2" />
              <p className="text-gray-800 mb-4 italic">"{testimonial.text}"</p>
              <h4 className="text-[#0077b6] font-semibold text-lg">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
