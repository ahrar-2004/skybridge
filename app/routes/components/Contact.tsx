import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-100" id="contact">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-[#0077b6] mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have a question or want to get in touch? We’re here to help you with your real estate journey.
          </p>
          <div className="text-gray-700 space-y-4">
            <p><span className="font-semibold text-[#b8860b]">Phone:</span> +92 300 1234567</p>
            <p><span className="font-semibold text-[#b8860b]">Email:</span> info@skybridge.com</p>
            <p><span className="font-semibold text-[#b8860b]">Address:</span> Toba Tek Singh, Punjab, Pakistan</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <form className="space-y-4">
            <div>
              <label className="block mb-1 text-[#0077b6] font-medium">Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-1 text-[#0077b6] font-medium">Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-1 text-[#0077b6] font-medium">Message</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0077b6]"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#0077b6] text-white px-6 py-2 rounded-lg hover:bg-[#005f96] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
