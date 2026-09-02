import ScrollReveal from "./ScrollReveal";

const doctor = {
  name: "Dr. Sarah Mitchell",
  qualification: "MBBS, MD (Dermatology)",
  experience: "12+ Years",
  specialty: "Cosmetic & Clinical Dermatology",
  bio: "Dr. Sarah Mitchell is a board-certified dermatologist with over 12 years of experience in cosmetic and clinical dermatology. She specializes in advanced skin treatments, anti-aging therapies and laser procedures. Her patient-centered approach and attention to detail have helped thousands achieve their skin goals.",
};

export default function Doctor() {
  return (
    <section id="doctors" className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              Our Expert
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Meet Our Doctor
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Led by experienced dermatologists committed to your skin health.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            <ScrollReveal animation="fade-left">
              <div className="lg:col-span-2">
                <div
                  className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mx-auto max-w-sm img-hover-zoom"
                  style={{
                    boxShadow: "0 20px 40px -12px rgba(0,0,0,0.06)",
                    background: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-subtle) 50%, var(--border-light) 100%)",
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-6">
                      <div
                        className="w-24 h-24 mx-auto mb-4 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
                      >
                        <svg className="w-12 h-12" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="font-serif text-base" style={{ color: "var(--text-primary)" }}>
                        {doctor.name}
                      </p>
                      <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
                        {doctor.qualification}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={120}>
              <div className="lg:col-span-3 space-y-5">
                <div>
                  <h3 className="font-serif text-2xl font-semibold mb-1.5" style={{ color: "var(--text-primary)" }}>
                    {doctor.name}
                  </h3>
                  <p className="text-base font-medium" style={{ color: "var(--accent)" }}>
                    {doctor.qualification}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <div
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                    style={{ backgroundColor: "var(--accent-subtle)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {doctor.experience}
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-2 px-3.5 py-2 rounded-full"
                    style={{ backgroundColor: "var(--accent-subtle)" }}
                  >
                    <svg className="w-4 h-4" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                      {doctor.specialty}
                    </span>
                  </div>
                </div>

                <p className="leading-relaxed text-sm" style={{ color: "var(--text-secondary)" }}>
                  {doctor.bio}
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 text-white text-sm font-medium rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 bg-accent hover:bg-accent-hover btn-micro"
                  >
                    Meet Our Doctor
                  </a>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-sm ml-1.5" style={{ color: "var(--text-secondary)" }}>4.9/5</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
