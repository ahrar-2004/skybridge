import React from "react";
import { Building2, Search, Handshake } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Property Buying",
      description: "We help you find and purchase the best property to fit your needs and budget.",
      icon: <Building2 className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Property Selling",
      description: "Sell your property faster with expert marketing and a wide buyer network.",
      icon: <Handshake className="w-10 h-10 text-[#b8860b]" />,
    },
    {
      title: "Property Consultancy",
      description: "Get expert advice on property trends, market value, and investment options.",
      icon: <Search className="w-10 h-10 text-[#0077b6]" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-4" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#0077b6] mb-4">Our Services</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          At Sky Bridge Real Estate, we offer a full range of services to help you with all your property needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
