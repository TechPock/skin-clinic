import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const plans = [
  {
    name: "Glow Member",
    price: "$99 / month",
    features: [
      "1 signature facial per month",
      "10% off additional treatments",
      "Member-only skincare offers",
      "Priority booking",
    ],
    button: "Join Now",
  },
  {
    name: "Radiance Member",
    price: "$179 / month",
    badge: "Most Popular",
    features: [
      "1 advanced facial per month",
      "15% off additional treatments",
      "Free monthly skin consultation",
      "Priority appointment scheduling",
      "Exclusive member offers",
    ],
    button: "Join Now",
  },
  {
    name: "Ultimate Skin Member",
    price: "$299 / month",
    features: [
      "2 advanced treatments per month",
      "20% off additional treatments",
      "Monthly skin analysis",
      "Personalized skincare plan",
      "Priority booking",
      "Exclusive seasonal treatments",
    ],
    button: "Join Now",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span
                  className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                >
                  Skin Medique Membership
                </span>
                <h1
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Make Your Skin Care a Lifestyle
                </h1>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Consistent skincare creates lasting results. Join a Skin Medique membership and enjoy exclusive benefits,
                  preferred pricing, and regular treatments designed to keep your skin looking and feeling its best.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {plans.map((plan, index) => (
                <ScrollReveal key={plan.name} animation="fade-up" delay={index * 80}>
                  <div
                    className={`relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 bg-white border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] animate-fade-in-up ${
                      plan.badge ? "border-accent" : "border-border"
                    }`}
                    style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                  >
                    {plan.badge && (
                      <div
                        className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-medium text-white animate-fade-in"
                        style={{ backgroundColor: "var(--accent)" }}
                      >
                        {plan.badge}
                      </div>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="font-serif text-xl font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                        {plan.name}
                      </h3>
                      <p className="text-2xl font-serif font-semibold" style={{ color: "var(--accent)" }}>
                        {plan.price}
                      </p>
                    </div>
                    <ul className="space-y-3 mb-7">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm" style={{ color: "var(--text-secondary)" }}>
                          <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="block w-full text-center px-6 py-3 text-sm font-medium rounded-full transition-all duration-200 border border-accent text-accent hover:bg-accent hover:text-white btn-micro"
                    >
                      {plan.button}
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-20 lg:py-24 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/female-skin-care-.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/80" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal animation="fade-up">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-4 leading-tight" style={{ color: "var(--text-primary)" }}>
                Ready to Make Your Skin a Priority?
              </h2>
              <p className="text-base lg:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Join Skin Medique today and enjoy personalized care, exclusive benefits, and a skincare routine designed around you.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-accent hover:bg-accent-hover text-white btn-micro"
              >
                Become a Member
                <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
