import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

const plans = [
  {
    name: "Essential Glow",
    price: "$79 / session",
    features: [
      "Skin consultation",
      "Deep cleansing facial",
      "Gentle exfoliation",
      "Hydrating mask",
      "Post-treatment skincare advice",
    ],
    button: "Book Treatment",
  },
  {
    name: "Signature Skin",
    price: "$149 / session",
    badge: "Most Popular",
    features: [
      "Personalized skin consultation",
      "Advanced facial treatment",
      "Deep cleansing",
      "Hydration therapy",
      "Customized mask",
      "Professional aftercare guidance",
    ],
    button: "Book Treatment",
  },
  {
    name: "Advanced Renewal",
    price: "$249 / session",
    features: [
      "Complete skin consultation",
      "Advanced skin treatment",
      "Professional peel or rejuvenation treatment",
      "Hydration therapy",
      "Customized skincare plan",
      "Follow-up guidance",
    ],
    button: "Book Treatment",
  },
];

export default function PricingPage() {
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
                  Our Pricing
                </span>
                <h1
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Simple & Transparent Skin Care Pricing
                </h1>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Choose the treatment that fits your skincare goals. Our pricing is designed to be clear and straightforward,
                  with personalized recommendations provided during your consultation.
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

            <p className="text-center text-xs mt-8" style={{ color: "var(--text-light)" }}>
              Treatment prices may vary depending on your individual skin concerns and recommended treatment plan.
              A consultation is recommended before advanced treatments.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
