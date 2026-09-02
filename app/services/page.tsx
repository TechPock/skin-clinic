import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import WhyChooseUs from "../components/WhyChooseUs";

const services = [
  {
    number: "01",
    title: "Facial Treatments",
    description:
      "Refresh and revitalize your skin with customized facial treatments that cleanse, exfoliate, hydrate, and restore your natural glow.",
    image: "/images/talking-with-patient-in-clinic.jpg",
  },
  {
    number: "02",
    title: "Hydrafacial",
    description:
      "Deeply cleanse, exfoliate, and hydrate your skin with a refreshing treatment designed to leave your complexion smooth, fresh, and radiant.",
    image: "/images/woman-during-the-hydration.jpg",
  },
  {
    number: "03",
    title: "Acne & Scar Treatment",
    description:
      "Target acne, blemishes, and visible acne scars with personalized treatments focused on improving skin clarity and texture.",
    image: "/images/acne-treatment.jpg",
  },
  {
    number: "04",
    title: "Chemical Peels",
    description:
      "Improve uneven tone, dullness, and skin texture with carefully selected professional peels tailored to your individual skin needs.",
    image: "/images/pigmentation-treatment.jpg",
  },
  {
    number: "05",
    title: "Anti-Aging Treatments",
    description:
      "Support firmer, smoother, youthful-looking skin with advanced treatments designed to reduce the appearance of fine lines and improve overall skin texture.",
    image: "/images/anti-aging-treatment.jpg",
  },
  {
    number: "06",
    title: "Laser Skin Treatments",
    description:
      "Experience modern laser skincare solutions designed to improve pigmentation, texture, and overall skin appearance.",
    image: "/images/laser-skin-treatment.jpg",
  },
];

const supportCards = [
  {
    title: "Customer Support",
    description:
      "Have questions about our treatments? Our team is happy to help you understand your options.",
    button: "Chat With Us",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    title: "Free Consultation",
    description:
      "Speak with a skincare specialist and receive personalized guidance before choosing your treatment.",
    button: "Book Consultation",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Contact Us",
    description:
      "Get in touch with Skin Medique for appointments, treatment information, and general inquiries.",
    button: "Contact Us",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Skin Medique made my skincare routine feel completely different. The team was professional, welcoming, and really listened to my concerns.",
    name: "Sarah Ahmed",
    role: "Skin Care Client",
    image: "/images/Emily Johnson.jpg",
  },
  {
    quote:
      "I loved how personalized the treatment was. My skin felt refreshed and looked noticeably brighter after my appointment.",
    name: "Ayesha Khan",
    role: "Beauty Client",
    image: "/images/Sarah Williams.jpg",
  },
  {
    quote:
      "The staff made me feel comfortable from the moment I arrived. I finally found a skincare clinic I can trust.",
    name: "Emma Wilson",
    role: "Regular Client",
    image: "/images/Amanda Roberts.jpg",
  },
  {
    quote:
      "Professional service, beautiful environment, and excellent attention to detail. I highly recommend Skin Medique.",
    name: "Olivia Brown",
    role: "Skin Care Client",
    image: "/images/Michael Chen.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Services Hero */}
        <section
          className="relative py-24 lg:py-32"
          style={{
            backgroundImage: "url('/images/massage-therapist.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 animate-fade-in" style={{ backgroundColor: "rgba(30,50,60,0.55)" }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span
              className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4 text-white animate-fade-in-up"
              style={{ backgroundColor: "rgba(255,255,255,0.15)", animationDelay: "0.1s" }}
            >
              Our Services
            </span>
            <h1
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight text-white animate-fade-in-up"
              style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)", animationDelay: "0.2s" }}
            >
              Because Your Skin Deserves the Best Care.
            </h1>
            <p className="text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed text-white/90 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              Discover personalized skincare treatments designed to restore your natural glow, improve skin health, and help you feel confident in your skin.
            </p>
            <a
              href="#services-grid"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-accent hover:bg-accent-hover text-white btn-micro animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Explore Our Services
              <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </section>

        {/* Introduction / About Our Services */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="relative animate-fade-in-up">
                <div
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
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
                  className="absolute -bottom-4 -right-4 sm:-right-6 w-44 sm:w-52 aspect-[3/4] rounded-2xl overflow-hidden shadow-lg animate-fade-in animation-delay-200"
                  style={{ boxShadow: "0 20px 40px -12px rgba(0,0,0,0.1)" }}
                >
                  <Image
                    src="/images/woman-during-the-hydration.jpg"
                    alt="Woman during skincare treatment"
                    fill
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="space-y-7 animate-fade-in-up animation-delay-100">
                <div>
                  <span
                    className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    Our Service
                  </span>
                  <h2
                    className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Because Beauty Is the Reflection of an Attitude.
                  </h2>
                  <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    At Skin Medique, we believe skincare is more than a routine — it is a form of self-care. Our treatments are designed around your individual skin needs, combining professional expertise, modern techniques, and personalized attention.
                  </p>
                </div>

                <div className="space-y-5">
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-0.5" style={{ color: "var(--text-primary)" }}>
                        Professional Service
                      </h3>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Enjoy thoughtful, personalized care from consultation to treatment. Every detail is focused on your comfort, safety, and skincare goals.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-0.5" style={{ color: "var(--text-primary)" }}>
                        Certified Experts
                      </h3>
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        Our experienced skincare professionals use trusted techniques and modern treatment methods to help you achieve healthy and radiant skin.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Whether you want to refresh tired skin, address specific concerns, or maintain a healthy glow, our team is here to create a treatment experience designed for you.
              </p>
            </div>
          </div>
        </ScrollReveal>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="py-20 lg:py-24" style={{ backgroundColor: "var(--accent-subtle)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span
                  className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                >
                  What We Offer
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Smile With the Reflection of a Healthy Glow.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Explore our range of professional skincare treatments, carefully designed to address different skin concerns and support your skin&#39;s natural beauty.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div
                  key={service.number}
                  className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-accent animate-fade-in-up"
                  style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-medium tracking-wide mb-2 block" style={{ color: "var(--accent)" }}>
                      SERVICE {service.number}
                    </span>
                    <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="inline-flex items-center text-sm font-medium transition-colors group/link"
                      style={{ color: "var(--accent)" }}
                    >
                      Learn More
                      <svg
                        className="ml-1 w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Need More Help */}
        <section
          className="py-20 lg:py-24 relative overflow-hidden"
          style={{
            backgroundColor: "var(--accent-light)",
            backgroundImage: "url('/images/spa-composition.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/80" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span
                  className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                  style={{ backgroundColor: "var(--white)", color: "var(--accent)" }}
                >
                  Need More Help?
                </span>
                <h2
                  className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  Let Us Help You Find the Right Treatment.
                </h2>
                <p className="text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  Not sure which treatment is right for your skin? Our team is here to guide you and recommend a treatment based on your skin concerns and goals.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] border border-border animate-fade-in-up"
                  style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                    {card.description}
                  </p>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-2.5 text-white text-sm font-medium rounded-full transition-all duration-200 bg-accent hover:bg-accent-hover"
                  >
                    {card.button}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--white)" }}>
          <ScrollReveal animation="fade-up">
            <WhyChooseUs />
          </ScrollReveal>
        </section>

        {/* Testimonials */}
        <section className="py-20 lg:py-24" style={{ backgroundColor: "var(--accent-subtle)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-2xl mx-auto mb-14">
                <span
                  className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
                  style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
                >
                  Testimonial
                </span>
              <h2
                className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                What Our Clients Say About Us
              </h2>
            </div>
          </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] bg-white border-border animate-fade-in-up"
                  style={{ animationDelay: `${0.08 * (index + 1)}s` }}
                >
                  <div className="flex items-center gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={36}
                        height={36}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                        {testimonial.name}
                      </p>
                      <p className="text-xs" style={{ color: "var(--text-light)" }}>
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section
          className="py-20 lg:py-24 relative overflow-hidden"
          style={{
            backgroundImage: "url('/images/female-skin-care-.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-white/70 animate-fade-in" />
          <ScrollReveal animation="fade-up">
            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-5 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              Get a Free Consultation With Our Experts
            </h2>
            <p className="text-base lg:text-lg max-w-xl mx-auto mb-8 leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Not sure where to start? Talk to our skincare specialists and discover a treatment plan designed around your skin.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-sm font-semibold rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 bg-accent hover:bg-accent-hover text-white"
            >
              Book a Consultation
              <svg className="ml-2.5 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </section>
      </main>
      <Footer />
    </>
  );
}
