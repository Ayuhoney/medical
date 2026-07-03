import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "20+", label: "Years of Clinical Experience", sub: "Serving Batemans Bay" },
  { value: "5.0★", label: "Patient Rated", sub: "AGPAL accredited practice" },
  { value: "4", label: "Specialist Services", sub: "All under one roof" },
  { value: "98%", label: "Would Recommend", sub: "Based on patient reviews" },
];

export function HomeNumbers() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#0D1F2D] py-20 md:py-24">
      <div ref={ref} className="site-container">
        <div className="flex items-center gap-6 mb-14">
          <div className="h-px flex-1 bg-white/10" />
          <p className="ref-label-light !mb-0 before:!bg-[#7EC8D8]/40 !text-[#7EC8D8]">By The Numbers</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map(({ value, label, sub }, i) => (
            <div key={label} style={{ opacity: visible ? 1 : 0, transition: `opacity 0.3s ease ${i * 120}ms` }}>
              <div
                className="font-serif font-light text-white leading-none mb-3"
                style={{
                  fontSize: "clamp(3.25rem, 6vw, 5.5rem)",
                  animation: visible ? `flipIn3d 0.85s cubic-bezier(0.16, 1, 0.3, 1) ${i * 130}ms both` : "none",
                }}
              >
                {value}
              </div>
              <div
                className="h-px bg-[#0A7E94] mb-3"
                style={{
                  width: visible ? "2.5rem" : "0px",
                  transition: `width 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${200 + i * 130}ms`,
                }}
              />
              <div className="text-sm font-medium text-white/80 mb-1">{label}</div>
              <div className="text-[11px] tracking-[0.15em] uppercase text-white/40">{sub}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border-t border-white/10">
          <p className="font-serif font-light text-white/70 max-w-xl leading-snug text-[clamp(1.125rem,2vw,1.625rem)]">
            Your health journey begins with a personalised consultation — compassionate care, clinical excellence.
          </p>
          <Link to="/book" className="btn-ghost-white flex-shrink-0">
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
