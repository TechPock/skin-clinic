import Image from "next/image";

interface TreatmentCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

export default function TreatmentCard({
  title,
  description,
  icon,
  image,
}: TreatmentCardProps) {
  return (
    <div
      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 bg-white border-border shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:border-accent"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        ) : (
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--accent-light) 0%, var(--accent-subtle) 50%, var(--border-light) 100%)",
            }}
          >
            <div className="text-center p-6">
              <div
                className="w-16 h-16 mx-auto mb-3 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
              >
                <svg className="w-8 h-8" style={{ color: "var(--accent)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="font-serif text-sm" style={{ color: "var(--text-primary)" }}>{title}</p>
            </div>
          </div>
        )}
      </div>
      <div className="p-6">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
          style={{ backgroundColor: "var(--accent-light)" }}
        >
          <div className="group-hover:scale-105 transition-transform duration-300">
            {icon}
          </div>
        </div>
        <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>
          {description}
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
  );
}
