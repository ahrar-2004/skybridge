import React from "react";
import { ShieldCheck, Home, Users } from "lucide-react";

export default function WhyUs() {
  const reasons = [
    {
      icon: <ShieldCheck  className="text-[#0077b6] w-10 h-10" />,
      title: "Trusted & Verified",
      description:
        "We offer verified listings and maintain transparency to ensure a safe and secure property transaction.",
    },
    {
      icon: <Home className="text-[#b8860b] w-10 h-10" />,
      title: "Wide Range of Properties",
      description:
        "From budget homes to luxury apartments, we cater to all your needs and preferences.",
    },
    {
      icon: <Users className="text-[#0077b6] w-10 h-10" />,
      title: "Experienced Team",
      description:
        "Our professional agents help you throughout the journey with expert guidance and personalized support.",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-4" id="why">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0077b6] mb-4">Why Choose Us</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          At Sky Bridge Real Estate, we go the extra mile to provide excellent service, unmatched expertise, and a seamless buying experience.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition"
            >
              {reason.icon}
              <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
