import ScrollReveal from "./ScrollReveal";

const results = [
  {
    treatment: "Acne Treatment",
    description: "12-week treatment plan",
  },
  {
    treatment: "Pigmentation",
    description: "8 sessions",
  },
  {
    treatment: "Skin Rejuvenation",
    description: "6-week program",
  },
  {
    treatment: "Laser Treatment",
    description: "4 sessions",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-20 lg:py-24" style={{ backgroundColor: "var(--accent-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              Our Results
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Real Results. Real Confidence.
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              See the transformative results our patients have achieved.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {results.map((result, index) => (
            <ScrollReveal key={result.treatment} animation="fade-up" delay={index * 80}>
              <div
                className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] bg-white border-border hover:border-accent"
              >
                <div className="relative aspect-[3/4] overflow-hidden" style={{ background: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-subtle) 50%, var(--border-light) 100%)" }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-4">
                      <div
                        className="w-14 h-14 mx-auto mb-3 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                      >
                        <svg className="w-7 h-7" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="font-serif text-sm" style={{ color: "var(--text-primary)" }}>{result.treatment}</p>
                      <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{result.description}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 z-20">
                    <h3 className="font-serif text-base font-semibold text-white">
                      {result.treatment}
                    </h3>
                    <p className="text-white/80 text-xs">{result.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-xs mt-6 italic" style={{ color: "var(--text-light)" }}>
          Individual results may vary.
        </p>
      </div>
    </section>
  );
}
