import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Professional Service",
    description:
      "Experience thoughtful, personalized care from consultation to treatment. Our team focuses on your comfort, safety, and individual skincare goals.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Certified Experts",
    description:
      "Our experienced skincare professionals use trusted techniques and modern treatments to provide safe, effective, and results-focused care.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-24" style={{ backgroundColor: "var(--accent-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal animation="fade-left">
            <div className="relative">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg img-hover-zoom"
                style={{
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/images/talking-with-patient-in-clinic.jpg"
                  alt="Talking with patient in clinic"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute -bottom-6 -right-4 sm:-right-8 w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg animate-scale-in"
                style={{
                  animationDelay: "0.2s",
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)",
                  background: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-subtle) 100%)",
                }}
              >
                <Image
                  src="/images/woman-during-the-hydration.jpg"
                  alt="Woman during hydration treatment"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={120}>
            <div className="space-y-7">
              <div>
                <span
                  className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                >
                  Who We Are
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Because beauty is the reflection of an attitude.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  At Skin Medique, we believe everyone deserves to feel
                  confident in their own skin. Our clinic combines medical
                  expertise with luxury care to deliver transformative results in
                  a warm, welcoming environment.
                </p>
              </div>

              <div className="space-y-5">
                {features.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex gap-4 animate-fade-in-up"
                    style={{ animationDelay: `${0.15 * (index + 1)}s` }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-200 hover:scale-110"
                      style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)", border: "1px solid var(--border)" }}
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-medium mb-0.5" style={{ color: "var(--text-primary)" }}>
                        {feature.title}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                We are committed to creating a welcoming environment where healthy, confident skin comes first.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center px-7 py-3.5 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-accent hover:bg-accent-hover btn-micro"
              >
                Discover Our Clinic
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
