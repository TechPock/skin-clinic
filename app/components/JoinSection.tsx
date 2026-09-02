import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function JoinSection() {
  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal animation="fade-up">
            <div className="space-y-7">
              <div>
                <span
                  className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                >
                  Join Skin Medique
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Treat your skin with the care it deserves.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Discover personalized skincare treatments designed to bring out your natural glow. Our experienced specialists combine modern techniques with thoughtful care to help you feel confident in your skin.
                </p>
              </div>

              <a
                href="#treatments"
                className="inline-flex items-center px-7 py-3.5 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-accent hover:bg-accent-hover btn-micro"
              >
                Explore Treatments
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-right" delay={120}>
            <div className="relative">
              <div
                className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mx-auto max-w-sm lg:max-w-md img-hover-zoom"
                style={{ boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)" }}
              >
                <Image
                  src="/images/talking-with-patient-in-clinic.jpg"
                  alt="Skin Medique skincare consultation"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute -bottom-4 -right-4 sm:-right-6 w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg animate-scale-in"
                style={{
                  animationDelay: "0.2s",
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)",
                  background: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-subtle) 100%)",
                }}
              >
                <Image
                  src="/images/woman-during-the-hydration.jpg"
                  alt="Woman during skincare treatment"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute -top-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-lg animate-scale-in animate-gentle-float"
                style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)", animationDelay: "0.3s" }}
              >
                <div className="text-center">
                  <p className="text-2xl font-serif font-semibold" style={{ color: "var(--accent)" }}>15+</p>
                  <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>Years of Experience</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
