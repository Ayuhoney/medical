import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "../../constants";
import { use3dTilt } from "../../hooks/use3dTilt";

const values = [
  { n: "01", title: "AGPAL-Accredited Excellence", desc: "Maintaining Australia's highest GP standards with evidence-based care." },
  { n: "02", title: "MoleMax HD Technology", desc: "The gold standard in skin cancer detection with total body photography." },
  { n: "03", title: "Medical-Grade Aesthetics", desc: "All treatments performed by AHPRA-registered medical practitioners." },
];

function FloatingSmallImage() {
  const { ref, onMouseMove, onMouseLeave } = use3dTilt(14);
  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="absolute -bottom-8 -right-4 lg:-right-10 w-48 lg:w-64 aspect-square overflow-hidden cursor-default z-[2]"
      style={{
        border: "4px solid var(--cream)",
        boxShadow: "0 20px 60px rgba(13,31,45,0.2)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease",
        willChange: "transform",
      }}
    >
      <img src={IMAGES.cardAesthetic} alt="Aesthetic treatment" className="w-full h-full object-cover" />
    </div>
  );
}

export function HomePhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { ref: imageRef, onMouseMove, onMouseLeave } = use3dTilt(9);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-py section-cream overflow-hidden">
      <div className="site-container">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className={`relative transition-all duration-1000 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <div
              className="absolute -top-5 -left-5 w-20 h-20 pointer-events-none z-0"
              style={{ border: "2px solid #0A7E94", borderRight: "none", borderBottom: "none" }}
            />
            <div
              ref={imageRef}
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              className="relative aspect-[3/4] overflow-hidden cursor-default z-[1]"
              style={{
                transition: "transform 0.18s ease, box-shadow 0.18s ease",
                willChange: "transform",
                backfaceVisibility: "hidden",
              }}
            >
              <img src={IMAGES.clinicInterior} alt="Beach Road Surgery clinic" className="w-full h-full object-cover" />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 50%, rgba(255,255,255,0.04) 100%)" }}
              />
            </div>
            <FloatingSmallImage />
            <div
              className="absolute top-8 -left-4 lg:-left-8 text-white px-5 py-4 z-[3]"
              style={{
                background: "#0D1F2D",
                animation: visible ? "orbFloat3 6s ease-in-out infinite" : "none",
                animationDelay: "1s",
              }}
            >
              <div className="font-serif font-light text-[32px] leading-none">20+</div>
              <div className="text-[9px] tracking-[0.25em] uppercase mt-0.5 text-[#7EC8D8]">
                Years of<br />Excellence
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <p className="ref-label mb-5">Our Philosophy</p>
            <h2 className="heading-section mb-5" style={{ fontSize: "clamp(2.75rem, 4.5vw, 4.5rem)", lineHeight: 0.95 }}>
              Where Science<br />
              Meets <em className="heading-accent">Artistry</em>
            </h2>
            <p className="body-text mb-4">
              At Beach Road Surgery &amp; Skin Clinic, we believe healthcare should feel personal — from everyday GP visits to advanced skin and aesthetic treatments.
            </p>
            <p className="body-text mb-8">
              Our experienced team combines the warmth of a trusted family practice with specialist-level expertise in skin cancer detection and medical-grade aesthetics.
            </p>
            <div className="space-y-5 mb-8">
              {values.map(({ n, title, desc }, i) => (
                <div
                  key={n}
                  className="flex gap-5 items-start"
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(12px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    transitionDelay: `${400 + i * 100}ms`,
                  }}
                >
                  <span className="font-serif text-sm flex-shrink-0 pt-1 text-[#0A7E94]">{n}</span>
                  <div>
                    <div className="font-medium text-[#0D1F2D] mb-1 text-sm">{title}</div>
                    <div className="text-[#5C7A8A] text-sm leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/practice-info" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E] group">
              Meet Our Doctors
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
