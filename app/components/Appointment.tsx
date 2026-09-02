"use client";

const benefits = [
  {
    title: "Personalized Treatments",
    description:
      "Every treatment is carefully selected according to your skin type, concerns, and goals.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Free Consultation",
    description:
      "Talk to our skincare specialists and get professional guidance before choosing your treatment.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Expert Skin Care",
    description:
      "Receive trusted care from experienced professionals using modern skincare techniques and equipment.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Appointment() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ backgroundColor: "var(--accent-light)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up"
            style={{ boxShadow: "0 10px 30px -5px rgba(0,0,0,0.05)" }}
          >
            <h3
              className="font-serif text-2xl font-semibold mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Book Your Appointment
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                    Preferred Treatment
                  </label>
                  <select
                    className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/20"
                    style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                  >
                    <option>Select treatment</option>
                    <option>Acne Treatment</option>
                    <option>Pigmentation Treatment</option>
                    <option>Laser Skin Treatment</option>
                    <option>Hair Removal</option>
                    <option>Anti-Aging Treatment</option>
                    <option>Hydrafacial</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1.5" style={{ color: "var(--text-secondary)" }}>
                  Message / Skin Concern
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-accent/20 resize-none"
                  style={{ border: "1px solid var(--border)", color: "var(--text-primary)" }}
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center px-8 py-3.5 text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-accent hover:bg-accent-hover"
              >
                Book Your Appointment
                <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </form>
          </div>

          <div className="flex flex-col justify-center h-full space-y-7 animate-fade-in-up animation-delay-100">
            <div>
              <h3
                className="font-serif text-2xl font-semibold mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                Start your journey to healthier, glowing skin.
              </h3>
              <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Tell us a little about your skincare needs and our specialists will help you find the right treatment for you.
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="flex gap-4"
                  style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                >
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-accent hover:bg-accent-hover"
            >
              Contact Us
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
