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
      icon: <Building2 className="w-7 h-7 text-white" />,
      color: "bg-[#0077b6]",
    },
    {
      title: "Property Selling",
      description:
        "Sell your property faster with expert marketing and a wide buyer network.",
      icon: <Handshake className="w-7 h-7 text-white" />,
      color: "bg-[#b8860b]",
    },
    {
      title: "Property Consultancy",
      description:
        "Get expert advice on property trends, market value, and investment options.",
      icon: <Search className="w-7 h-7 text-white" />,
      color: "bg-[#0077b6]",
    },
    {
      title: "Property Management",
      description:
        "Professional management services to maintain your property and maximize returns.",
      icon: <Home className="w-7 h-7 text-white" />,
      color: "bg-[#b8860b]",
    },
    {
      title: "Home Loan Assistance",
      description:
        "Guidance and support through home financing options and loan applications.",
      icon: <CreditCard className="w-7 h-7 text-white" />,
      color: "bg-[#0077b6]",
    },
    {
      title: "Legal Documentation",
      description:
        "Expert handling of legal paperwork ensuring a smooth and secure transaction.",
      icon: <FileText className="w-7 h-7 text-white" />,
      color: "bg-[#b8860b]",
    },
    {
      title: "Virtual Tours",
      description:
        "Experience properties remotely with high-quality virtual tours and walkthroughs.",
      icon: <Video className="w-7 h-7 text-white" />,
      color: "bg-[#0077b6]",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-tr from-[#e0f7fa] via-[#f0f9ff] to-[#ffffff]"
      id="services"
      aria-label="Our Services"
    >
      {/* Decorative blobs */}
      <div className="absolute top-10 left-8 w-32 h-32 bg-[#0077b6] opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#b8860b] opacity-10 rounded-full blur-3xl -z-10"></div>

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
              className="relative bg-white p-8 rounded-3xl shadow-lg
                cursor-pointer
                transform transition duration-400
                hover:scale-105 hover:shadow-2xl
                opacity-0 animate-fadeIn animation-delay-[calc(120ms*var(--i))]"
              style={{ "--i": index } as React.CSSProperties}
              aria-label={service.title}
              role="article"
            >
              <div
                className={`inline-flex items-center justify-center rounded-full w-14 h-14 mb-5 ${service.color} shadow-md`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#b8860b] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#0077b620] to-[#b8860b20] opacity-0 hover:opacity-100 transition-opacity pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind CSS animations */}
      <style>{`
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(12px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }
        .animation-delay-[calc(120ms*var(--i))] {
          animation-delay: calc(120ms * var(--i));
        }
      `}</style>
    </section>
  );
}
