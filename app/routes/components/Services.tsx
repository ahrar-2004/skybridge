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
      bgImage:
        "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Property Selling",
      description:
        "Sell your property faster with expert marketing and a wide buyer network.",
      icon: <Handshake className="w-10 h-10 text-[#0077b6]" />,
      bgImage:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Property Consultancy",
      description:
        "Get expert advice on property trends, market value, and investment options.",
      icon: <Search className="w-10 h-10 text-[#0077b6]" />,
      bgImage:
        "https://images.unsplash.com/photo-1560184897-e6d365d1e4f1?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Property Management",
      description:
        "Professional management services to maintain your property and maximize returns.",
      icon: <Home className="w-10 h-10 text-[#0077b6]" />,
      bgImage:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Home Loan Assistance",
      description:
        "Guidance and support through home financing options and loan applications.",
      icon: <CreditCard className="w-10 h-10 text-[#0077b6]" />,
      bgImage:
        "https://images.unsplash.com/photo-1600585154187-24d6c220ea14?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Legal Documentation",
      description:
        "Expert handling of legal paperwork ensuring a smooth and secure transaction.",
      icon: <FileText className="w-10 h-10 text-[#0077b6]" />,
      bgImage:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Virtual Tours",
      description:
        "Experience properties remotely with high-quality virtual tours and walkthroughs.",
      icon: <Video className="w-10 h-10 text-[#0077b6]" />,
      bgImage:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gradient-to-tr from-[#e0f7fa] via-[#f0f9ff] to-[#ffffff]"
      id="services"
      aria-label="Our Services"
    >
      {/* Background decorative blobs */}
      <div className="absolute top-10 left-8 w-32 h-32 bg-[#0077b6] opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#0077b6] opacity-10 rounded-full blur-3xl -z-10"></div>

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
              className="relative rounded-3xl shadow-lg overflow-hidden cursor-pointer
                transform transition duration-400
                hover:scale-105 hover:shadow-2xl
                opacity-0 animate-fadeIn animation-delay-[calc(120ms*var(--i))]
                bg-white"
              style={{ "--i": index } as React.CSSProperties}
              aria-label={service.title}
              role="article"
            >
              {/* Background image with stronger overlay */}
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url(${service.bgImage})` }}
                aria-hidden="true"
              ></div>
              {/* Darker overlay for contrast */}
              <div className="absolute inset-0 bg-black opacity-40 pointer-events-none"></div>

              <div className="relative p-8 flex flex-col items-start text-white">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4 mb-3">{service.title}</h3>
                <p className="leading-relaxed">{service.description}</p>
              </div>
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
