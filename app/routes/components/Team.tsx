import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "James Anderson",
      role: "CEO & Founder",
      img: "https://via.placeholder.com/150?text=James",
    },
    {
      name: "Michael Roberts",
      role: "Sales Executive",
      img: "https://via.placeholder.com/150?text=Michael",
    },
    {
      name: "David Thompson",
      role: "Marketing Lead",
      img: "https://via.placeholder.com/150?text=David",
    },
    {
      name: "John Wilson",
      role: "Client Manager",
      img: "https://via.placeholder.com/150?text=John",
    },
  ];

  return (
    <section
      className="py-20 bg-[#f0f9ff]"
      id="team"
      aria-label="Meet Our Team"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0077b6] mb-6 animate-fadeInUp">
          Meet Our Expert Team
        </h2>
        <p className="text-gray-700 mb-16 max-w-3xl mx-auto text-lg leading-relaxed animate-fadeInUp animation-delay-200">
          Our experienced and dedicated real estate professionals are committed to helping you find your dream home, make smart investments, and navigate the property market with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 cursor-pointer animate-fadeInUp"
              style={{ animationDelay: `${index * 200}ms` }}
              role="article"
              aria-labelledby={`team-member-name-${index}`}
            >
              <img
                src={member.img}
                alt={`Photo of ${member.name}`}
                className="w-28 h-28 mx-auto rounded-full mb-5 object-cover shadow-md"
                loading="lazy"
              />
              <h4
                id={`team-member-name-${index}`}
                className="text-2xl font-semibold text-[#0077b6]"
              >
                {member.name}
              </h4>
              <p className="text-[#b8860b] mt-2 text-lg">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
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
          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease forwards;
          }
          .animation-delay-200 {
            animation-delay: 0.2s;
          }
        `}
      </style>
    </section>
  );
}
