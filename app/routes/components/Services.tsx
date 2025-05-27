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

export default function Services() {
  const services = [
    {
      title: "Property Buying",
      description:
        "We help you find and purchase the best property to fit your needs and budget.",
      icon: <Building2 className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Property Selling",
      description:
        "Sell your property faster with expert marketing and a wide buyer network.",
      icon: <Handshake className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Property Consultancy",
      description:
        "Get expert advice on property trends, market value, and investment options.",
      icon: <Search className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Property Management",
      description:
        "Professional management services to maintain your property and maximize returns.",
      icon: <Home className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Home Loan Assistance",
      description:
        "Guidance and support through home financing options and loan applications.",
      icon: <CreditCard className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Legal Documentation",
      description:
        "Expert handling of legal paperwork ensuring a smooth and secure transaction.",
      icon: <FileText className="w-10 h-10 text-[#0077b6]" />,
    },
    {
      title: "Virtual Tours",
      description:
        "Experience properties remotely with high-quality virtual tours and walkthroughs.",
      icon: <Video className="w-10 h-10 text-[#0077b6]" />,
    },
  ];

  return (
    <section
      className="py-20 bg-[#f0f9ff]"
      id="services"
      aria-label="Our Services"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-6">
          Our Services
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto leading-relaxed">
          At{" "}
          <span className="text-[#b8860b] font-semibold">
            Sky Bridge Real Estate
          </span>
          , we offer a full range of services to help you with all your property
          needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md
                transform transition duration-500
                hover:scale-105 hover:shadow-xl
                hover:bg-[#ff6b6b20]
                cursor-pointer
                opacity-0 animate-fadeIn
                animation-delay-[calc(100ms*var(--i))]"
              style={{ "--i": index } as React.CSSProperties}
              aria-label={service.title}
              role="article"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-[#b8860b] mt-4 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom animation */}
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }
        .animation-delay-[calc(100ms*var(--i))] {
          animation-delay: calc(100ms * var(--i));
        }
      `}</style>
    </section>
  );
}
