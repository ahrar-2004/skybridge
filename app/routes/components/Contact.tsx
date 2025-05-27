import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-[#f0f9ff]" id="contact" aria-label="Contact Section">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-4xl font-bold text-[#0077b6] mb-6">Contact Us</h2>
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            Have a question or want to get in touch? We’re here to help you with your real estate journey and answer all your inquiries promptly.
          </p>
          <div className="text-gray-700 space-y-5 text-base">
            <p>
              <span className="font-semibold text-[#b8860b]">Phone:</span> +92 300 1234567
            </p>
            <p>
              <span className="font-semibold text-[#b8860b]">Email:</span> info@skybridge.com
            </p>
            <p>
              <span className="font-semibold text-[#b8860b]">Address:</span> Toba Tek Singh, Punjab, Pakistan
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl p-8">
          <form className="space-y-6" aria-label="Contact Form">
            <div>
              <label htmlFor="name" className="block mb-2 text-[#0077b6] font-semibold">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-[#0077b6] font-semibold">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
                placeholder="you@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-[#0077b6] font-semibold">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#0077b6] transition duration-300"
                placeholder="Your message..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#0077b6] text-white w-full py-3 rounded-lg font-semibold hover:bg-[#005f96] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
