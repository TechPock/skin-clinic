"use client";

import { useState, useEffect } from "react";

const HERO_YOUTUBE_ID = "YOUR_VIDEO_ID";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="video-section"
      className="relative w-full overflow-hidden"
      style={{
        backgroundImage: "url('/images/massage-therapist.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "clamp(400px, 50vw, 520px)",
      }}
    >
      <div className="absolute inset-0 animate-fade-in" style={{ backgroundColor: "rgba(60,70,80,0.55)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-snug text-white mb-5"
            style={{ textShadow: "0 2px 8px rgba(0,0,0,0.35)" }}
          >
            Beauty is like being comfortable in your skin.
          </h2>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-150 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p
            className="text-sm sm:text-base lg:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto mb-8"
            style={{ textShadow: "0 1px 4px rgba(0,0,0,0.25)" }}
          >
            At Skin Medique, we believe beautiful skin begins with personalized care. Discover our approach to advanced
            skincare and treatments designed to help you feel confident in your skin.
          </p>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <button
            onClick={() => setIsOpen(true)}
            className="relative inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-110 group"
            aria-label="Play video"
          >
            <span
              className="absolute inset-0 rounded-full border-2 border-white/50 animate-pulse-ring"
              style={{ animationDuration: "2.5s" }}
            />
            <span
              className="absolute inset-[-8px] sm:inset-[-10px] rounded-full border border-white/20 animate-pulse-ring"
              style={{ animationDuration: "2.5s", animationDelay: "0.4s" }}
            />
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10 ml-1 relative z-10 transition-transform duration-200 group-hover:scale-110"
              style={{ color: "var(--accent)" }}
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors duration-200 text-sm tracking-wide btn-micro"
            >
              Close
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${HERO_YOUTUBE_ID}?autoplay=1&rel=0`}
              title="Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
}
