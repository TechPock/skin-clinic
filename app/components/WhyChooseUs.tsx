import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    title: "Safe Treatments",
    description:
      "Your safety and comfort come first. We use carefully selected treatments and professional techniques to deliver a trusted skincare experience.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Advanced Equipment & Facilities",
    description:
      "We use modern skincare technology and advanced equipment to provide precise, effective, and comfortable treatments.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "24/7 Premium Support",
    description:
      "From your first consultation to aftercare, our team is here to answer your questions and make your skincare journey easier.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--accent-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollReveal animation="fade-left" delay={0}>
            <div className="relative">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg img-hover-zoom"
                style={{
                  boxShadow: "0 20px 40px -12px rgba(0,0,0,0.08)",
                }}
              >
                <Image
                  src="/images/young-woman.jpg"
                  alt="Young woman skincare"
                  fill
                  className="object-cover"
                  loading="lazy"
                />
              </div>

              <div
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-2xl p-4 shadow-lg animate-scale-in animate-gentle-float"
                style={{ boxShadow: "0 10px 25px -5px rgba(0,0,0,0.08)", animationDelay: "0.3s" }}
              >
                <div className="text-center">
                  <p className="text-2xl font-serif font-semibold" style={{ color: "var(--accent)" }}>15+</p>
                  <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>Years of Experience</p>
                </div>
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
                  Why Choose Us
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Because It Feels Great to Have Glowing Skin.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  At Skin Medique, we combine advanced skincare technology with expert care to create treatments that are safe, effective, and tailored to your unique needs. Our focus is on helping you achieve healthy, radiant skin while making every visit comfortable and relaxing.
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
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
