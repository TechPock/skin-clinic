"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/", active: true },
  { name: "About Us", href: "#about", active: false },
  {
    name: "Services",
    href: "/services",
    dropdown: true,
    active: false,
    items: [
      { name: "Services", href: "/services" },
      { name: "Pricing", href: "/pricing" },
      { name: "Membership", href: "/membership" },
    ],
  },
  { name: "Contact", href: "#contact", active: false },
];

const socialLinks = [
  { name: "Facebook", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
  { name: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
  { name: "Twitter", icon: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" },
  { name: "YouTube", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 animate-slide-down">
      <div
        className={`max-w-7xl mx-auto rounded-b-2xl lg:rounded-b-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-white/98 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
            : "bg-white/95 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
        }`}
      >
        <div className="flex items-center justify-between h-[72px] lg:h-[80px] px-5 lg:px-8">
          <a href="#home" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/Beauty%20And%20Spa%20Logo1.png"
              alt="Skin Medique"
              width={90}
              height={90}
              className="h-[55px] w-auto lg:h-[70px] object-contain"
              priority
            />
            <span className="font-serif text-xl lg:text-2xl font-bold tracking-tight" style={{ color: "var(--text-primary)" }}>
              SKIN MEDIQUE
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <div
                key={link.name}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="relative flex items-center gap-1.5 text-base font-semibold tracking-wide transition-colors duration-200 hover:text-accent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
                  style={{ color: link.active ? "var(--accent)" : "var(--text-secondary)" }}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg className="w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full mt-2 w-48 bg-white rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border border-border py-2 animate-slide-down">
                    {link.items?.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm transition-all duration-200 hover:text-accent hover:bg-accent-subtle hover:translate-x-0.5"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-accent hover:text-white social-icon-hover animate-fade-in-up"
                style={{ backgroundColor: "rgba(0,0,0,0.03)", color: "var(--text-secondary)", animationDelay: `${0.35 + index * 0.06}s` }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md transition-all duration-200 btn-micro"
            style={{ color: "var(--text-primary)" }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="mx-4 bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.06)] border-b border-border px-4 py-5 space-y-1"
          style={{ backgroundColor: "var(--white)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors duration-200 text-base font-semibold tracking-wide hover:text-accent hover:bg-accent-subtle ${
                link.active ? "text-accent" : "text-secondary"
              }`}
              style={{ color: link.active ? "var(--accent)" : "var(--text-secondary)" }}
            >
              <span>{link.name}</span>
              {link.dropdown && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              )}
            </a>
          ))}
          <div className="flex items-center justify-center gap-2 pt-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-accent hover:text-white"
                style={{ backgroundColor: "rgba(0,0,0,0.03)", color: "var(--text-secondary)" }}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
