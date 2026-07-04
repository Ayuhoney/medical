import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/app/constants";

const featured = {
  title: "Full Body Skin Check",
  tag: "Skin Cancer Clinic",
  desc: "Comprehensive skin cancer screening with MoleMax HD photography — early detection when it matters most.",
  duration: "30–45 min",
  img: IMAGES.heroSkinCancer,
  path: "/skin-cancer",
};

const secondary = [
  { title: "Cosmetic Injectables", tag: "Aesthetics", duration: "30 min", img: IMAGES.facialTreat, path: "/aesthetic" },
  { title: "Laser Skin Resurfacing", tag: "Laser", duration: "45–60 min", img: IMAGES.heroLaser, path: "/laser" },
  { title: "GP Health Assessment", tag: "General Practice", duration: "30 min", img: IMAGES.heroGP, path: "/general-practice" },
  { title: "LED Phototherapy", tag: "Aesthetics", duration: "20 min", img: IMAGES.aestheticMask, path: "/aesthetic" },
];

function TiltCard({
  children,
  className = "",
  intensity = 12,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const shimmerRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) scale(1.025) translateZ(8px)`;
    if (glareRef.current) {
      const gx = ((e.clientX - rect.left) / rect.width) * 100;
      const gy = ((e.clientY - rect.top) / rect.height) * 100;
      glareRef.current.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.18) 0%, transparent 60%)`;
      glareRef.current.style.opacity = "1";
    }
  };

  const onMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(900px) rotateY(0deg) rotateX(0deg) scale(1) translateZ(0)";
    }
    if (glareRef.current) glareRef.current.style.opacity = "0";
  };

  const onMouseEnter = () => {
    const sh = shimmerRef.current;
    if (sh) {
      sh.style.animation = "none";
      void sh.offsetWidth;
      sh.style.animation = "shimmerSweep 0.65s ease forwards";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`tilt-card rounded-2xl overflow-hidden ${className}`}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseEnter}
    >
      <div ref={glareRef} className="tilt-card-glare" />
      <div
        ref={shimmerRef}
        className="tilt-card-shimmer"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)" }}
      />
      {children}
    </div>
  );
}

function OverlayCard({
  img,
  tag,
  title,
  duration,
  path,
  desc,
  large = false,
}: {
  img: string;
  tag: string;
  title: string;
  duration: string;
  path: string;
  desc?: string;
  large?: boolean;
}) {
  const [hov, setHov] = useState(false);
  const setOn = () => setHov(true);
  const setOff = () => setHov(false);

  const card = (
    <TiltCard
      className={`relative overflow-hidden cursor-pointer block ${large ? "aspect-[3/4] lg:aspect-auto" : "aspect-[4/3]"}`}
      intensity={large ? 8 : 12}
    >
      <img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
          transform: hov ? "scale(1.07)" : "scale(1.01)",
        }}
        onMouseEnter={setOn}
        onMouseLeave={setOff}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(13,31,45,0.88) 0%, rgba(13,31,45,0.1) 55%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0 bg-[#0D1F2D]/48 transition-opacity duration-[450ms]"
        style={{ opacity: hov ? 1 : 0 }}
        onMouseEnter={setOn}
        onMouseLeave={setOff}
      />
      <div
        className="absolute inset-0 p-6 lg:p-8 flex flex-col justify-end"
        onMouseEnter={setOn}
        onMouseLeave={setOff}
      >
        <div className="text-[10px] tracking-[0.28em] uppercase mb-2 text-[#7EC8D8]">{tag}</div>
        <h3
          className={`font-serif font-light text-white leading-tight mb-3 ${large ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl"}`}
        >
          {title}
        </h3>
        {large && desc && (
          <p
            className="text-white/70 text-sm leading-relaxed mb-4 max-w-sm"
            style={{
              opacity: hov ? 1 : 0,
              transform: hov ? "translateY(0)" : "translateY(8px)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
            }}
          >
            {desc}
          </p>
        )}
        <div
          className="flex items-center justify-between"
          style={{
            opacity: hov ? 1 : 0,
            transform: hov ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.3s ease",
          }}
        >
          <span className="text-[11px] tracking-widest uppercase text-white/55">{duration}</span>
          <span className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase text-white border-b border-white/50 pb-px">
            Book <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </TiltCard>
  );

  return <Link to={path} className="block h-full">{card}</Link>;
}

export function HomeTreatments() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="treatments" className="section-muted section-py">
      <div className="site-container">
        <div
          ref={ref}
          className={`flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div>
            <div className="eyebrow-mark mb-5">
              <span className="eyebrow-line" aria-hidden />
              <span>Signature Treatments</span>
            </div>
            <h2
              className="font-serif font-light text-[#0D1F2D] leading-[0.95]"
              style={{ fontSize: "clamp(2.75rem, 4.5vw, 4.5rem)" }}
            >
              Most Loved<br />
              <em className="italic font-serif text-[#0A7E94]">Procedures</em>
            </h2>
          </div>
          <Link
            to="/aesthetic"
            className="btn-outline self-start md:self-auto whitespace-nowrap mb-2"
          >
            All Treatments
          </Link>
        </div>

        <div
          className={`treatments-editorial-grid transition-all duration-700 delay-200 ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <div className="treatments-featured-cell">
            <OverlayCard {...featured} large />
          </div>
          <div className="treatments-secondary-grid">
            {secondary.map((t) => (
              <OverlayCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
