"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Emily Johnson",
    review:
      "The team at Skin Medique transformed my confidence. After years of struggling with acne, I finally have clear, healthy skin. The personalized treatment plan made all the difference.",
    rating: 5,
    initials: "EJ",
    image: "/images/Emily Johnson.jpg",
  },
  {
    name: "Michael Chen",
    review:
      "I was hesitant about laser treatments, but Dr. Mitchell explained everything thoroughly and the results exceeded my expectations. My pigmentation has significantly improved.",
    rating: 5,
    initials: "MC",
    image: "/images/Michael Chen.jpg",
  },
  {
    name: "Sarah Williams",
    review:
      "The Hydrafacial here is incredible! My skin has never looked better. The clinic is beautiful and the staff is so professional and caring. Highly recommend!",
    rating: 5,
    initials: "SW",
    image: "/images/Sarah Williams.jpg",
  },
  {
    name: "Amanda Roberts",
    review:
      "From the consultation to the follow-up, every step was handled with care and expertise. The anti-aging treatment has taken years off my skin. Worth every penny!",
    rating: 5,
    initials: "AR",
    image: "/images/Amanda Roberts.jpg",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5500);
    return () => clearInterval(timer);
  }, [next, isPaused]);

  return (
    <section id="testimonials" className="py-20 lg:py-24" style={{ backgroundColor: "var(--accent-subtle)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span
              className="inline-block px-4 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full mb-4"
              style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
            >
              Testimonials
            </span>
            <h2
              className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold mb-4 leading-tight"
              style={{ color: "var(--text-primary)" }}
            >
              What Our Patients Say
            </h2>
            <p className="text-base" style={{ color: "var(--text-secondary)" }}>
              Real stories from real patients who trusted us with their skin.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100}>
          <div
            className="relative max-w-3xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="w-full flex-shrink-0 px-2"
                  >
                    <div className="rounded-2xl p-6 sm:p-8 bg-white border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                      <div className="flex items-center gap-0.5 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4" style={{ color: "var(--accent)" }} fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="text-base sm:text-lg leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                        &ldquo;{testimonial.review}&rdquo;
                      </p>

                      <div className="flex items-center gap-3 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
                        {testimonial.image ? (
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={40}
                              height={40}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div
                            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: "var(--accent-light)" }}
                          >
                            <span className="text-xs font-medium" style={{ color: "var(--accent)" }}>
                              {testimonial.initials}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-sm" style={{ color: "var(--text-primary)" }}>
                            {testimonial.name}
                          </p>
                          <p className="text-xs" style={{ color: "var(--text-light)" }}>Verified Patient</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 sm:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-lg btn-micro"
              style={{ color: "var(--text-primary)" }}
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              className="absolute right-0 sm:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center transition-all duration-200 hover:shadow-lg btn-micro"
              style={{ color: "var(--text-primary)" }}
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    current === index ? "w-6 bg-accent" : "w-2 bg-border hover:bg-text-light"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
