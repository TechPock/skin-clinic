import TreatmentCard from "./TreatmentCard";
import ScrollReveal from "./ScrollReveal";

const treatments = [
  {
    title: "Acne Treatment",
    description:
      "Targeted solutions to reduce acne, prevent breakouts and restore clear, healthy-looking skin.",
    icon: (
      <svg className="w-6 h-6" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    image: "/images/acne-treatment.jpg",
  },
  {
    title: "Pigmentation Treatment",
    description:
      "Advanced therapies to fade dark spots, even out skin tone and reveal a luminous complexion.",
    icon: (
      <svg className="w-6 h-6" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    image: "/images/pigmentation-treatment.jpg",
  },
  {
    title: "Laser Skin Treatment",
    description:
      "Precision laser technology to resurface skin, reduce imperfections and stimulate collagen.",
    icon: (
      <svg className="w-6 h-6" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "/images/laser-skin-treatment.jpg",
  },
  {
    title: "Hair Removal",
    description:
      "Safe and effective laser hair removal for smooth, long-lasting results on any area.",
    icon: (
      <svg className="w-6 h-6" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    image: "/images/hair-removal.jpg",
  },
  {
    title: "Anti-Aging Treatment",
    description:
      "Comprehensive solutions to diminish fine lines, wrinkles and restore youthful firmness.",
    icon: (
      <svg className="w-6 h-6" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    image: "/images/anti-aging-treatment.jpg",
  },
  {
    title: "Hydrafacial",
    description:
      "Multi-step facial treatment that deeply cleanses, exfoliates and hydrates for instant glow.",
    icon: (
      <svg className="w-6 h-6" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    image: "/images/hydrafacial.jpg",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              Our Services
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Our Skin Treatments
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Personalized treatments for healthier, brighter and more confident skin.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {treatments.map((treatment, index) => (
            <ScrollReveal key={treatment.title} animation="fade-up" delay={index * 80}>
              <TreatmentCard {...treatment} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
