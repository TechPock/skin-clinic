"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const contactInfo = {
  address: "Faisalabad, Pakistan",
  phone: "+1 (555) 123-4567",
  email: "hello@skinmedique.com",
  mapUrl: "https://www.google.com/maps/@30.670848,73.089024,9z?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D",
  hours: [
    { days: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { days: "Saturday", time: "10:00 AM - 5:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

const treatments = [
  "Acne Treatment",
  "Pigmentation Treatment",
  "Laser Skin Treatment",
  "Hair Removal",
  "Anti-Aging Treatment",
  "Hydrafacial",
  "Other",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    treatment: "",
    date: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon to confirm your appointment.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      treatment: "",
      date: "",
      message: "",
    });
  };

  const inputStyle = {
    backgroundColor: "var(--white)",
    border: "1px solid var(--border)",
    color: "var(--text-primary)",
  };

  return (
    <section id="contact" className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              Get In Touch
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Book Your Appointment
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Ready to start your skin journey? Contact us today.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <ScrollReveal animation="fade-left" delay={100}>
            <div className="space-y-7">
            <div>
              <h3 className="font-serif text-xl font-semibold mb-5" style={{ color: "var(--text-primary)" }}>
                Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-subtle)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>Address</p>
                     <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Faisalabad, Pakistan</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-subtle)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "var(--gold)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>Phone</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{contactInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "var(--accent-subtle)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "var(--gold)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>Email</p>
                    <p className="text-sm" style={{ color: "var(--text-secondary)" }}>{contactInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-sm mb-3" style={{ color: "var(--text-primary)" }}>
                Opening Hours
              </h4>
              <div className="space-y-2">
                {contactInfo.hours.map((hour) => (
                  <div key={hour.days} className="flex justify-between text-sm">
                    <span style={{ color: "var(--text-secondary)" }}>{hour.days}</span>
                    <span className="font-medium" style={{ color: "var(--text-primary)" }}>{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="aspect-video rounded-xl overflow-hidden"
              style={{ border: "1px solid var(--border)" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d73.089024!3d30.670848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQwJzQ1LjAiTiA3M8KwMDcnMjguNCJF!5e0!3m2!1sen!2sus!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Skin Medique Location"
              />
            </div>
          </div>
        </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={120}>
            <div>
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-7"
                style={{ backgroundColor: "var(--accent-subtle)", border: "1px solid var(--border)" }}
              >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all"
                    style={{ ...inputStyle, "--tw-ring-color": "var(--gold)" } as React.CSSProperties}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all"
                    style={{ ...inputStyle, "--tw-ring-color": "var(--gold)" } as React.CSSProperties}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all"
                    style={{ ...inputStyle, "--tw-ring-color": "var(--gold)" } as React.CSSProperties}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                    Select Treatment
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    value={formData.treatment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all"
                    style={{ ...inputStyle, "--tw-ring-color": "var(--gold)" } as React.CSSProperties}
                  >
                    <option value="">Choose a treatment</option>
                    {treatments.map((treatment) => (
                      <option key={treatment} value={treatment}>{treatment}</option>
                    ))}
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="date" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all"
                    style={{ ...inputStyle, "--tw-ring-color": "var(--gold)" } as React.CSSProperties}
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5" style={{ color: "var(--text-primary)" }}>
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2.5 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-opacity-30 transition-all resize-none"
                    style={{ ...inputStyle, "--tw-ring-color": "var(--gold)" } as React.CSSProperties}
                    placeholder="Tell us about your skin concerns..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-5 px-8 py-3.5 text-white text-sm font-medium rounded-lg transition-all duration-200 shadow-sm hover:shadow-md btn-micro"
                style={{ backgroundColor: "var(--gold)" }}
              >
                Request Appointment
              </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
