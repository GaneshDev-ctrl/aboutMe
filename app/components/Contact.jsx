"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Smartphone } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("idle"); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const { name, email, subject, message } = e.target;

    const mailtoLink = `mailto:ganeshm.builds@gmail.com
      ?subject=${encodeURIComponent(subject.value)}
      &body=${encodeURIComponent(
        `Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
      )}`;

    
    setTimeout(() => {
      window.location.href = mailtoLink;
      setStatus("success");
      e.target.reset();
    }, 800);
  };

  return (
    <section id="contact" className="bg-slate-200 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* LEFT */}
          <div>
            <h2 className="text-3xl font-bold uppercase">
              Contact Address
            </h2>

            <div className="flex gap-2 mt-3 mb-12">
              <span className="w-12 h-[2px] bg-black"></span>
              <span className="w-8 h-[2px] bg-black/40"></span>
            </div>

            <div className="space-y-8 text-gray-700">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6" />
                <p>
                  Chennai, Tamil Nadu <br /> India
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6" />
                <p>ganeshm.builds@gmail.com</p>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6" />
                <p>+91 7871112862</p>
              </div>

              <div className="flex items-center gap-4">
                <Smartphone className="w-6 h-6" />
                <p>Available on WhatsApp</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="border px-4 py-3 outline-none focus:border-black transition"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="border px-4 py-3 outline-none focus:border-black transition"
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                required
                className="w-full border px-4 py-3 outline-none focus:border-black transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Message"
                required
                className="w-full border px-4 py-3 outline-none focus:border-black resize-none transition"
              />

              <button
                type="submit"
                disabled={status === "sending"}
                className={`px-10 py-3 font-semibold transition
                  ${
                    status === "sending"
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-black text-white hover:bg-gray-800"
                  }`}
              >
                {status === "sending" ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {/* Success message */}
              {status === "success" && (
                <p className="text-green-600 font-medium mt-4 animate-fade-in">
                  ✅ Message ready to send. Thank you for contacting me!
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
