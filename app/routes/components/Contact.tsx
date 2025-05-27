import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-label="Contact Section"
      className="py-20 bg-gradient-to-b from-[#e3f2fd] to-[#bbdefb] px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <div>
          <h2 className="text-5xl font-extrabold text-[#0077b6] mb-8 leading-tight">
            Get in Touch
          </h2>
          <p className="text-[#334155] mb-10 text-lg leading-relaxed">
            Have questions? Ready to start your real estate journey? Reach out and we’ll guide you every step of the way.
          </p>
          <div className="space-y-6 text-[#1e293b] text-lg font-medium">
            <p>
              <span className="font-semibold text-[#b8860b]">📞 Phone:</span>{" "}
              +92 300 1234567
            </p>
            <p>
              <span className="font-semibold text-[#b8860b]">📧 Email:</span>{" "}
              info@skybridge.com
            </p>
            <p>
              <span className="font-semibold text-[#b8860b]">📍 Address:</span>{" "}
              Toba Tek Singh, Punjab, Pakistan
            </p>
          </div>
        </div>

        {/* Modern Contact Form */}
        <div>
          <form className="bg-white rounded-3xl shadow-xl p-10 max-w-lg mx-auto">
            {/* Name */}
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="text"
                name="name"
                id="name"
                className="block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0077b6] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="name"
                className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#0077b6] cursor-text"
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative z-0 w-full mb-8 group">
              <input
                type="email"
                name="email"
                id="email"
                className="block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-[#0077b6] peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#0077b6] cursor-text"
              >
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative z-0 w-full mb-8 group">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=" "
                className="block py-3 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-[#0077b6] peer"
                required
              />
              <label
                htmlFor="message"
                className="absolute text-gray-500 text-lg duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#0077b6] cursor-text"
              >
                Your Message
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0077b6] to-[#b8860b] text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
