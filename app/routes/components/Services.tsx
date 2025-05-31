import React from "react";
import {
  Building2,
  Search,
  Handshake,
  Home,
  FileText,
  Video,
  CreditCard,
} from "lucide-react";

const services = [
  {
    title: "Property Buying",
    description:
      "We help you discover and secure properties that align with your lifestyle and budget.",
    icon: <Building2 className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Property Selling",
    description:
      "Maximize your property’s value with strategic marketing and an extensive buyer network.",
    icon: <Handshake className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Property Consultancy",
    description:
      "Receive data-driven insights and expert guidance on market trends and property investments.",
    icon: <Search className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1560184897-e6d365d1e4f1?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Property Management",
    description:
      "Entrust us with the full management of your assets for optimal maintenance and revenue.",
    icon: <Home className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Home Loan Assistance",
    description:
      "Navigate financing with ease through our trusted lending partners and advisory team.",
    icon: <CreditCard className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1600585154187-24d6c220ea14?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Legal Documentation",
    description:
      "Ensure your transactions are secure with meticulous legal paperwork handling.",
    icon: <FileText className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Virtual Tours",
    description:
      "Explore properties from anywhere with immersive virtual walkthroughs and videos.",
    icon: <Video className="w-10 h-10 text-[#0077b6]" />,
    bgImage:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Our Services"
      className="relative py-20 bg-[#f9fafb] overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-[#0077b6] rounded-full blur-3xl opacity-10 -z-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#0077b6] rounded-full blur-3xl opacity-10 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-[#0077b6] mb-4"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p
          className="text-gray-700 text-lg max-w-2xl mx-auto mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          At{" "}
          <span className="text-[#b8860b] font-semibold">Sky Bridge Real Estate</span>, we provide comprehensive solutions for all your property needs — from buying and selling to legal guidance and virtual tours.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="relative rounded-3xl shadow-lg overflow-hidden group transition-transform duration-500 hover:scale-105"
              aria-label={service.title}
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.bgImage})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition duration-300" />

              {/* Content */}
              <div className="relative p-8 text-left text-white flex flex-col justify-end h-full z-10">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
