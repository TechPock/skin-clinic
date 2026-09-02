import Image from "next/image";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "5,000+", label: "Happy Patients" },
  { value: "Expert", label: "Dermatologists" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 lg:pt-28"
      style={{
        backgroundColor: "var(--accent-subtle)",
        backgroundImage: "url('/images/flowers-composition-on-green-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent animate-fade-in" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "var(--accent)" }} />
              <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "var(--text-secondary)" }}>
                Premium Skin Care Clinic
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif font-semibold leading-[1.15] tracking-tight animate-fade-in-up"
              style={{ color: "var(--text-primary)", animationDelay: "0.2s" }}
            >
              Reveal Your Natural{" "}
              <span style={{ color: "var(--accent)" }}>Radiance</span>
            </h1>

            <p
              className="text-base lg:text-lg leading-relaxed max-w-lg animate-fade-in-up"
              style={{ color: "var(--text-secondary)", animationDelay: "0.3s" }}
            >
              Advanced skin and aesthetic treatments designed to help you
              achieve healthy, glowing and confident skin.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 pt-2 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-7 py-3.5 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-accent hover:bg-accent-hover btn-micro"
              >
                Book an Appointment
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#treatments"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium rounded-full transition-all duration-200 hover:-translate-y-0.5 bg-white border-border hover:border-accent hover:text-accent btn-micro"
                style={{
                  color: "var(--text-primary)",
                  border: "1px solid var(--border)",
                  backgroundColor: "var(--white)",
                }}
              >
                Explore Treatments
              </a>
            </div>

            <div
              className="grid grid-cols-3 gap-6 pt-8 animate-fade-in-up"
              style={{ borderTop: "1px solid var(--border)", animationDelay: "0.5s" }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-serif font-semibold" style={{ color: "var(--accent)" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs mt-1.5 tracking-wide" style={{ color: "var(--text-light)" }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in animation-delay-200 flex items-center justify-center">
            <div className="relative w-full max-w-sm lg:max-w-md aspect-[3/4]">
              <Image
                src="/images/hero-dermatology.png"
                alt="Professional dermatologist at Skin Medique clinic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-contain animate-subtle-zoom"
              />
            </div>

            <div
              className="absolute -bottom-5 -left-5 rounded-xl p-3.5 shadow-md bg-white animate-fade-in"
              style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.06)", animationDelay: "0.6s" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--accent-light)" }}
                >
                  <svg className="w-5 h-5" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>Certified</p>
                  <p className="text-xs" style={{ color: "var(--text-light)" }}>Professional Care</p>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-4 -right-4 rounded-xl p-3.5 shadow-md bg-white animate-fade-in"
              style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.06)", animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5" style={{ color: "var(--accent)" }} fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--text-light)" }}>5.0 Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
