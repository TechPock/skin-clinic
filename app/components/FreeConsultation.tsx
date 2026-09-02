import ScrollReveal from "./ScrollReveal";

export default function FreeConsultation() {
  return (
    <section
      className="py-20 lg:py-24 relative overflow-hidden"
      style={{
        backgroundColor: "var(--accent-light)",
        backgroundImage: "url('/images/female-skin-care-.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-white/70 animate-fade-in" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal animation="fade-up">
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-5 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Get Free Consultation With Our Experts
          </h2>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={100}>
          <p className="text-base lg:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            Get personalized guidance from our experienced experts. We&apos;re here to understand your needs, answer your questions, and help you choose the right solution with confidence.
          </p>
        </ScrollReveal>
        <ScrollReveal animation="fade-up" delay={200}>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-accent hover:bg-accent-hover text-white btn-micro"
          >
            Consult Now!
            <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </ScrollReveal>

        <div className="mt-10 flex flex-wrap justify-center gap-6 animate-fade-in" style={{ color: "var(--muted-blue)", animationDelay: "0.4s" }}>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">Flexible Scheduling</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm">No Obligation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
