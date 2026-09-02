import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const services = [
  "Skin Treatments",
  "Facial Treatments",
  "Acne Treatment",
  "Anti-Aging",
  "Laser Treatments",
  "Body Care",
];

const support = [
  "Help Center",
  "Book Appointment",
  "FAQs",
  "Contact Us",
];

const company = [
  "About Us",
  "Our Experts",
  "Testimonials",
  "Careers",
  "Privacy Policy",
];

const socialLinks = [
  { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333.014 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
  { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#DCEFED" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <ScrollReveal animation="fade-up" delay={0}>
            <div className="space-y-4">
              <div className="flex items-center gap-2.5 animate-fade-in">
                <Image
                  src="/images/Beauty%20And%20Spa%20Logo1.png"
                  alt="Skin Medique"
                  width={36}
                  height={36}
                  className="w-8 h-8 object-contain"
                />
                <span className="font-serif text-lg font-semibold" style={{ color: "#173F3F" }}>
                  SKIN MEDIQUE
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#426060" }}>
                Your trusted destination for professional skincare, personalized treatments, and healthy, radiant skin.
              </p>
              <div className="flex gap-2.5">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href="#"
                    aria-label={social.name}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group social-icon-hover animate-fade-in-up"
                    style={{ backgroundColor: "rgba(23,63,63,0.08)", color: "#1F7772", animationDelay: `${0.3 + index * 0.06}s` }}
                  >
                    <svg className="w-4 h-4 transition-colors duration-300 group-hover:text-[#173F3F]" style={{ color: "#1F7772" }} fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={100}>
            <div>
              <h4 className="font-serif text-base font-semibold mb-4" style={{ color: "#173F3F" }}>
                Services
              </h4>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service}>
                    <a
                      href="#treatments"
                      className="text-sm transition-all duration-300 hover:text-[#1F7772] hover:translate-x-[3px]"
                      style={{ color: "#426060" }}
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div>
              <h4 className="font-serif text-base font-semibold mb-4" style={{ color: "#173F3F" }}>
                Support
              </h4>
              <ul className="space-y-2.5">
                {support.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-all duration-300 hover:text-[#1F7772] hover:translate-x-[3px]"
                      style={{ color: "#426060" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <div>
              <h4 className="font-serif text-base font-semibold mb-4" style={{ color: "#173F3F" }}>
                Company
              </h4>
              <ul className="space-y-2.5">
                {company.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-all duration-300 hover:text-[#1F7772] hover:translate-x-[3px]"
                      style={{ color: "#426060" }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(23,63,63,0.12)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-center text-sm" style={{ color: "#426060" }}>
            © 2026 Skin Medique. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
