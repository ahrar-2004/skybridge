import React from "react";

export default function Team() {
  const teamMembers = [
    {
      name: "Hamza Saeed",
      role: "CEO & Founder",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Ali Raza",
      role: "Sales Executive",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Usman Javed",
      role: "Marketing Lead",
      img: "https://via.placeholder.com/150",
    },
    {
      name: "Ahmed Khan",
      role: "Client Manager",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="team">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-[#0077b6] mb-4">Our Team</h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Meet the dedicated professionals behind Sky Bridge Real Estate.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h4 className="text-xl font-semibold text-[#0077b6]">{member.name}</h4>
              <p className="text-[#b8860b] mt-1">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
