import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "James Anderson",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      name: "Michael Roberts",
      role: "Sales Executive",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "David Thompson",
      role: "Marketing Lead",
      img: "https://randomuser.me/api/portraits/men/56.jpg",
    },
    {
      name: "John Wilson",
      role: "Client Manager",
      img: "https://randomuser.me/api/portraits/men/78.jpg",
    },
  ];

  return (
    <section
      className="relative py-24 bg-gradient-to-br from-[#c3ddff] via-[#f0f9ff] to-[#c3ddff]"
      id="team"
      aria-label="Meet Our Team"
    >
      {/* Abstract floating blobs */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-[#0077b6] rounded-full opacity-30 filter blur-3xl animate-floatSlow mix-blend-multiply"></div>
      <div className="absolute bottom-20 right-16 w-56 h-56 bg-[#b8860b] rounded-full opacity-25 filter blur-3xl animate-floatSlow animation-delay-1000 mix-blend-multiply"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#0077b6] rounded-full opacity-20 filter blur-2xl animate-floatSlow animation-delay-1500 mix-blend-multiply"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-[#003f7d] mb-8 drop-shadow-md">
          Meet Our Expert Team
        </h2>
        <p className="text-gray-800 mb-20 max-w-3xl mx-auto text-xl leading-relaxed font-light tracking-wide">
          Our experienced and dedicated real estate professionals are committed
          to helping you find your dream home, make smart investments, and
          navigate the property market with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <article
              key={index}
              role="region"
              aria-labelledby={`team-member-name-${index}`}
              className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer overflow-hidden
                opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: "forwards" }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg ring-4 ring-[#0077b6] transition-all duration-500 hover:ring-[#b8860b]">
                <img
                  src={member.img}
                  alt={`Photo of ${member.name}`}
                  className="w-full h-full object-cover filter brightness-95 contrast-110 saturate-110 transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0077b6]/20 opacity-0 hover:opacity-40 transition-opacity duration-500"></div>
              </div>

              <h4
                id={`team-member-name-${index}`}
                className="text-2xl font-semibold text-[#0077b6] tracking-tight"
              >
                {member.name}
              </h4>
              <p className="text-[#b8860b] mt-2 text-lg font-medium tracking-wide">
                {member.role}
              </p>
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
            transform: translateY(-15px);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
        .animate-floatSlow {
          animation: floatSlow 6s ease-in-out infinite;
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
