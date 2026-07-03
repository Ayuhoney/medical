import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  Calendar, ArrowRight, Award, Shield, CheckCircle, Microscope,
  Star, Phone, Clock, MapPin, ChevronLeft, ChevronRight, ArrowUpRight,
} from "lucide-react";
import { IMAGES, CLINIC } from "../constants";
import { ServiceAccordion } from "../components/ServiceAccordion";
import { MaskReveal, useRefEntrance } from "../components/RefEntrance";
import { ScrollReveal, StaggerReveal } from "../components/ScrollReveal";
import { ServiceMarquee } from "../components/ServiceMarquee";
import { HomePhilosophy, HomeNumbers, HomeTreatments, HomeBooking } from "../components/home";

/* ─── STEP 1: Hero — Beauty Redefined UI language, Beach Road header image + content ─── */
const TEAL_ORB  = "rgba(10,126,148,0.22)";
const TEAL_SOFT = "rgba(126,200,216,0.16)";
const TEAL_GLOW = "rgba(39,153,165,0.18)";

function Hero() {
  const enterRef = useRefEntrance(true);
  const bgRef      = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);
  const orb1Ref    = useRef<HTMLDivElement>(null);
  const orb2Ref    = useRef<HTMLDivElement>(null);
  const orb3Ref    = useRef<HTMLDivElement>(null);

  const stats = [
    { v: "20+", l: "Years of Care" },
    { v: "AGPAL", l: "Accredited" },
    { v: "5.0 ★", l: "Patient Rated" },
    { v: "4", l: "Specialist Services" },
  ];

  useEffect(() => {
    const section = enterRef.current;
    if (!section) return;
    const handler = (e: MouseEvent) => {
      const { width, height, left, top } = section.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      if (bgRef.current)   bgRef.current.style.transform   = `translate(${x * -14}px, ${y * -8}px) scale(1.06)`;
      if (textRef.current) textRef.current.style.transform = `translate(${x *  10}px, ${y *  6}px)`;
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${x *  20}px, ${y * 12}px)`;
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${x * -12}px, ${y * -20}px)`;
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${x *  30}px, ${y * 16}px)`;
    };
    section.addEventListener("mousemove", handler, { passive: true });
    return () => section.removeEventListener("mousemove", handler);
  }, []);

  const parallaxSlow = { transition: "transform 0.8s cubic-bezier(0.2, 0, 0, 1)", willChange: "transform" as const };
  const parallaxFast = { transition: "transform 0.6s cubic-bezier(0.2, 0, 0, 1)", willChange: "transform" as const };

  return (
    <section ref={enterRef} className="hero-section">
      <div className="hero-bg-layer" aria-hidden>
        <div className="hero-bg-wrap">
          <div
            ref={bgRef}
            className="hero-bg-pan"
            style={{ backgroundImage: `url(${IMAGES.heroPortrait})`, ...parallaxSlow }}
          />
          <div className="hero-bg-scrim" />
          <div className="hero-bg-top-fade" />
          <div ref={orb1Ref} className="hero-orb pointer-events-none" style={{
            width: 340, height: 340, top: "12%", right: "18%",
            background: `radial-gradient(circle, ${TEAL_ORB} 0%, transparent 70%)`,
            filter: "blur(52px)", animation: "orbFloat1 9s ease-in-out infinite", ...parallaxSlow,
          }} />
          <div ref={orb2Ref} className="hero-orb pointer-events-none" style={{
            width: 460, height: 460, top: "42%", right: "6%",
            background: `radial-gradient(circle, ${TEAL_SOFT} 0%, transparent 70%)`,
            filter: "blur(70px)", animation: "orbFloat2 13s ease-in-out infinite",
            transition: "transform 1.6s cubic-bezier(0.2, 0, 0, 1)", willChange: "transform",
          }} />
          <div ref={orb3Ref} className="hero-orb pointer-events-none" style={{
            width: 200, height: 200, bottom: "22%", right: "36%",
            background: `radial-gradient(circle, ${TEAL_GLOW} 0%, transparent 70%)`,
            filter: "blur(32px)", animation: "orbFloat3 7s ease-in-out infinite",
            transition: "transform 0.9s cubic-bezier(0.2, 0, 0, 1)", willChange: "transform",
          }} />
        </div>
      </div>

      <div ref={textRef} className="hero-inner site-container" style={parallaxFast}>
        <div className="hero-content hero-content-premium">
          <p className="ref-label-enter ref-label-enter-hero !mb-8">
            <MaskReveal delay={380}>BATEMANS BAY · NSW AUSTRALIA</MaskReveal>
          </p>

          <h1 className="hero-heading-premium">
            <MaskReveal delay={480} className="block">
              Where Health
            </MaskReveal>
            <MaskReveal delay={600} className="block">
              Meets <em className="heading-accent-light">Beauty</em>
            </MaskReveal>
          </h1>

          <MaskReveal delay={820} className="mb-8 md:mb-10 block">
            <p className="body-text-light hero-body-premium !mb-0">
              General Practice, Skin Cancer detection, and medical-grade
              Aesthetic treatments — delivered with personalised care in Batemans Bay.
            </p>
          </MaskReveal>

          <div className="hero-cta">
            <div className="ref-rise shrink-0" style={{ transitionDelay: "1040ms" }}>
              <Link to="/book" className="btn-primary btn-ref-arrow hero-cta-btn bg-[#0A7E94] hover:bg-[#086B7E] shadow-[0_4px_20px_rgba(10,126,148,0.35)] hover:shadow-[0_6px_24px_rgba(10,126,148,0.45)]">
                Book Consultation <ArrowRight size={14} className="ref-arrow transition-transform duration-300" />
              </Link>
            </div>
            <div className="ref-rise shrink-0" style={{ transitionDelay: "1160ms" }}>
              <Link to="/general-practice" className="btn-outline-white hero-cta-btn">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Rotating circular badge */}
      <Link to="/book" className="hero-scroll-badge cursor-pointer" aria-label="Book appointment">
        <div className="absolute inset-0 rounded-full hero-scroll-badge-pulse" />
        <div className="hero-scroll-badge-ring">
          <svg viewBox="0 0 140 140" width="140" height="140" aria-hidden>
            <defs>
              <path id="heroCirclePath" d="M 70,70 m -50,0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
            </defs>
            <text fontSize="10.5" letterSpacing="3.5" fill="rgba(255,255,255,0.55)">
              <textPath href="#heroCirclePath">BOOK NOW · AGPAL ACCREDITED · EST. 2004 ·</textPath>
            </text>
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="hero-scroll-badge-center rounded-full">
            <ArrowRight size={16} className="text-[#7EC8D8]" style={{ transform: "rotate(-45deg)" }} />
          </div>
        </div>
      </Link>

      {/* Scroll hint */}
      <div className="hero-scroll-hint" aria-hidden>
        <span className="hero-scroll-hint-label">Scroll</span>
        <div className="hero-scroll-hint-line" />
      </div>

      {/* Full-width top rule — border on viewport edge, content in container (warm-site pattern) */}
      <div className="hero-stats-wrap">
        <div className="site-container py-6 md:py-8">
          <div className="hero-stats">
            <div className="hero-stats-grid">
              {stats.map(({ v, l }, i) => (
                <div
                  key={l}
                  className="hero-stat-item ref-rise"
                  style={{ transitionDelay: `${1280 + i * 80}ms` }}
                >
                  <div className="hero-stat-value">{v}</div>
                  <div className="hero-stat-label">{l}</div>
                </div>
              ))}
            </div>
            <p
              className="hero-rating-block ref-rise w-full md:w-auto mt-5 md:mt-0 pt-5 md:pt-0 border-t border-white/10 md:border-0"
              style={{ transitionDelay: "1440ms" }}
            >
              · Rated 5.0 · Patient Reviews
            </p>
          </div>
        </div>
      </div>

      <ServiceMarquee />
    </section>
  );
}

/* ─── STEP 2: TrustStrip — reference minimal credential row ─── */
function TrustStrip() {
  const items = [
    { icon: <Shield size={15} strokeWidth={1.5} />, title: "AGPAL Accredited", sub: "Quality Practice Standards" },
    { icon: <Award size={15} strokeWidth={1.5} />, title: "AHPRA Registered", sub: "All Practitioners" },
    { icon: <Microscope size={15} strokeWidth={1.5} />, title: "Skin Cancer Institute", sub: "Recognised Clinic" },
    { icon: <CheckCircle size={15} strokeWidth={1.5} />, title: "RACGP Members", sub: "College of GPs" },
    { icon: <Star size={15} strokeWidth={1.5} />, title: "Medical Grade", sub: "Cosmetic Excellence" },
  ];

  return (
    <section className="section-white border-b border-[rgba(10,126,148,0.06)] py-8 md:py-10">
      <div className="site-container">
        <StaggerReveal className="trust-strip-grid">
          {items.map(({ icon, title, sub }) => (
            <div key={title} className="trust-strip-item">
              <span className="text-[#0A7E94] mt-0.5">{icon}</span>
              <div>
                <p className="font-sans text-[12px] font-semibold text-[#0D1F2D] leading-tight mb-1">{title}</p>
                <p className="font-sans text-[10px] text-[#5C7A8A] uppercase tracking-[0.1em]">{sub}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

/* ─── STEP 3: Services — reference expanding panel accordion ─── */
function Services() {
  const panels = [
    {
      num: "01",
      tag: "PRIMARY CARE",
      title: "General Practice",
      desc: "Comprehensive family healthcare for every stage of life — preventive care, chronic disease management, and everyday GP services tailored to you.",
      image: IMAGES.cardGP,
      path: "/general-practice",
    },
    {
      num: "02",
      tag: "SKIN CANCER",
      title: "Skin Cancer Clinic",
      desc: "Expert full-body skin checks and MoleMax HD detection — early diagnosis and treatment when it matters most.",
      image: IMAGES.cardSkin,
      path: "/skin-cancer",
    },
    {
      num: "03",
      tag: "AESTHETICS",
      title: "Aesthetic Medicine",
      desc: "Medical-grade cosmetic treatments by AHPRA-registered practitioners — injectables, skin rejuvenation, and natural refined results.",
      image: IMAGES.facialTreat,
      path: "/aesthetic",
    },
    {
      num: "04",
      tag: "LASER",
      title: "Laser Treatments",
      desc: "State-of-the-art laser technology for resurfacing, pigmentation, vascular lesions, and skin rejuvenation.",
      image: IMAGES.cardLaser,
      path: "/laser",
    },
    {
      num: "05",
      tag: "SKIN CARE",
      title: "Clinical Skin Products",
      desc: "Medical-grade skincare recommended and dispensed by our clinic — professional products for lasting skin health.",
      image: IMAGES.cardSkinPortrait,
      path: "/store",
    },
  ];

  return (
    <section className="section-py section-white overflow-hidden relative !pt-10 md:!pt-14 !pb-10 md:!pb-14">
      <div className="site-container">
        <ScrollReveal>
          <div className="section-header-split !mb-8 md:!mb-10">
            <div>
              <p className="ref-label">OUR SERVICES</p>
              <h2 className="heading-section">
                Comprehensive Care &amp;<br />
                <em className="heading-accent">Advanced Treatments</em>
              </h2>
            </div>
            <p className="section-header-note hidden lg:block">
              Hover each panel to explore — every treatment starts with a personalised consultation.
            </p>
            <Link to="/general-practice" className="btn-outline lg:hidden shrink-0">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={1}>
        <div className="svc-accordion-wrap">
          <ServiceAccordion panels={panels} />
        </div>
      </ScrollReveal>

      <div className="site-container">
        <ScrollReveal delay={2}>
          <div className="mt-8 md:mt-10 flex justify-center">
            <Link to="/general-practice" className="btn-outline">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── STEP 5: About — reference editorial + featured grid ─── */
function About() {
  const featured = [
    { tag: "PRIMARY CARE", title: "General Practice", image: IMAGES.cardGP, path: "/general-practice" },
    { tag: "SKIN CANCER", title: "Skin Cancer Clinic", image: IMAGES.cardSkin, path: "/skin-cancer" },
    { tag: "AESTHETICS", title: "Aesthetic Medicine", image: IMAGES.cardAesthetic, path: "/aesthetic" },
    { tag: "LASER", title: "Laser Treatments", image: IMAGES.cardLaser, path: "/laser" },
  ];

  return (
    <section className="section-py section-white !pb-10 md:!pb-14">
      <div className="site-container">
        <ScrollReveal>
          <div className="section-header-split">
            <div>
              <p className="ref-label">ABOUT OUR CLINIC</p>
              <h2 className="heading-section">
                Trusted Healthcare<br />
                <em className="heading-accent">in Batemans Bay</em>
              </h2>
            </div>
            <p className="section-header-note hidden lg:block">
              Over 20 years of personalised care — from everyday GP visits to advanced skin and aesthetic treatments.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollReveal delay={1}>
            <p className="body-text mb-5 lg:hidden">
              For over 20 years, Beach Road Surgery &amp; Skin Clinic has delivered personalised healthcare to the Batemans Bay community.
            </p>
            <p className="body-text mb-5 hidden lg:block">
              For over 20 years, Beach Road Surgery &amp; Skin Clinic has delivered personalised healthcare to the Batemans Bay community. Our experienced doctors bring specialist-level expertise to every patient encounter.
            </p>
            <p className="body-text mb-8">
              Whether you need everyday GP care, a comprehensive skin cancer check, or a medical aesthetic treatment, you'll find the same warmth, clinical excellence, and personal attention at every visit.
            </p>
            <StaggerReveal className="space-y-0 mb-8 border-t border-[rgba(10,126,148,0.08)]">
              {[
                "Experienced, FRACGP-qualified general practitioners",
                "Advanced skin cancer detection with MoleMax HD technology",
                "Medical-grade cosmetic treatments in a comfortable setting",
                "Bulk billing available for eligible patients",
              ].map((item) => (
                <div key={item} className="philosophy-item !gap-4">
                  <span className="text-[#0A7E94] font-sans text-sm pt-0.5">—</span>
                  <p className="font-sans text-[14px] text-[#334E5E] leading-relaxed">{item}</p>
                </div>
              ))}
            </StaggerReveal>
            <Link to="/practice-info" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E]">
              Meet Our Doctors <ArrowRight size={14} />
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div className="featured-grid">
              <Link to="/practice-info" className="featured-card featured-card-lg group">
                <img src={IMAGES.heroWomanWarm} alt="Personalised care at Beach Road Surgery" />
                <div className="featured-card-overlay" />
                <span className="featured-card-meta">Our Clinic</span>
                <h3 className="featured-card-title">Personalised Care in Batemans Bay</h3>
              </Link>
              <div className="featured-card-wrap">
                {featured.map(({ tag, title, image, path }) => (
                  <Link key={title} to={path} className="featured-card featured-card-sm group">
                    <img src={image} alt={title} />
                    <div className="featured-card-overlay" />
                    <span className="featured-card-meta">{tag}</span>
                    <h3 className="featured-card-title text-base">{title}</h3>
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─── STEP 6: Testimonials — reference carousel + stats bar ─── */
function Testimonials() {
  const reviews = [
    { name: "Sarah M.", type: "General Practice", rating: 5, quote: "Dr Dharmarama is exceptional — he truly listens and takes time to explain everything clearly. The clinic is modern and the team are incredibly welcoming. I wouldn't go anywhere else." },
    { name: "James T.", type: "Skin Cancer Check", rating: 5, quote: "I had a comprehensive skin check with full body mapping using MoleMax HD. The technology is impressive and the doctor was thorough and reassuring. Peace of mind is priceless." },
    { name: "Michelle K.", type: "Aesthetic Medicine", rating: 5, quote: "The results from my treatments exceeded my expectations. The team made me feel at ease throughout the process and the outcomes looked completely natural. Highly recommend." },
  ];
  const [idx, setIdx] = useState(0);
  const r = reviews[idx];
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="testimonials" className="section-py section-dark !pt-0">
      <div className="testimonial-quote-deco" aria-hidden>&ldquo;</div>
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <ScrollReveal className="lg:col-span-4">
            <p className="ref-label-light !text-[#7EC8D8] before:!bg-[#7EC8D8]/40">PATIENT STORIES</p>
            <h2 className="heading-section-light mb-10">
              What Our<br />
              <em className="heading-accent-light">Patients Say</em>
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() => setIdx((i) => (i - 1 + reviews.length) % reviews.length)}
                className="testimonial-nav-btn"
                aria-label="Previous review"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => setIdx((i) => (i + 1) % reviews.length)}
                className="testimonial-nav-btn"
                aria-label="Next review"
              >
                <ChevronRight size={16} />
              </button>
              <span className="font-sans text-white/35 text-[11px] tracking-[0.12em] ml-2">
                {pad(idx + 1)} / {pad(reviews.length)}
              </span>
            </div>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`testimonial-dash ${i === idx ? "active" : "inactive"}`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2} className="lg:col-span-8">
            <blockquote key={idx} className="testimonial-quote-enter font-serif text-white/90 text-[clamp(1.2rem,2.2vw,1.75rem)] leading-[1.55] mb-10">
              &ldquo;{r.quote}&rdquo;
            </blockquote>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-5 border-t border-white/10 pt-8">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#0A7E94]/30 flex items-center justify-center text-[#7EC8D8] font-serif text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-sans text-white text-sm font-medium">{r.name}</p>
                  <p className="font-sans text-white/40 text-[11px] uppercase tracking-[0.1em]">{r.type}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="flex gap-0.5 justify-end mb-1">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} size={12} className="text-[#7EC8D8] fill-[#7EC8D8]" />
                  ))}
                </div>
                <p className="font-sans text-white/30 text-[9px] uppercase tracking-[0.14em]">Verified</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-14 pt-10 border-t border-white/10">
            {[
              { v: "5.0 ★", l: "Average Rating" },
              { v: "20+", l: "Years of Care" },
              { v: "98%", l: "Patient Satisfaction" },
              { v: "4", l: "Specialist Services" },
            ].map(({ v, l }) => (
              <div key={l} className="md:px-6 first:md:pl-0 md:border-r md:border-white/10 last:md:border-r-0">
                <div className="font-serif text-[#7EC8D8] text-2xl md:text-[2rem] mb-2 leading-none">{v}</div>
                <div className="font-sans text-white/35 text-[10px] uppercase tracking-[0.16em]">{l}</div>
              </div>
            ))}
          </div>
          <div className="partner-strip">
            {["AGPAL Accredited", "AHPRA Registered", "RACGP Members", "Skin Cancer Institute", "Medical Grade"].map((name) => (
              <span key={name} className="partner-strip-item">{name}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── STEP 7: Location — reference clean split layout ─── */
function Location() {
  return (
    <section className="section-py section-white">
      <div className="site-container">
        <ScrollReveal>
          <div className="section-header-split">
            <div>
              <p className="ref-label">FIND US</p>
              <h2 className="heading-section">
                Visit Our <em className="heading-accent">Clinic</em>
              </h2>
            </div>
            <p className="section-header-note hidden lg:block">
              Conveniently located on Beach Road — free parking available for patients.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
          <ScrollReveal className="lg:col-span-7 min-h-[380px] relative map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.0!2d150.1731!3d-35.7075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b16c22b0e0d0c0f%3A0x0!2s116+Beach+Rd%2C+Batemans+Bay+NSW+2536!5e0!3m2!1sen!2sau!4v1688000000000!5m2!1sen!2sau"
              className="absolute inset-0 w-full h-full min-h-[380px]"
              style={{ border: 0 }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Clinic map"
            />
          </ScrollReveal>

          <ScrollReveal delay={2} className="lg:col-span-5">
            <div className="location-info-card">
              {[
                { icon: <MapPin size={16} className="text-[#0A7E94]" />, label: "Address", content: "116 Beach Road\nBatemans Bay NSW 2536",
                  link: { text: "Get Directions →", href: "https://maps.google.com/?q=116+Beach+Road+Batemans+Bay+NSW" } },
                { icon: <Phone size={16} className="text-[#0A7E94]" />, label: "Phone", content: CLINIC.phone,
                  link: { text: "Call Now →", href: `tel:${CLINIC.phone.replace(/\s/g, "")}` } },
                { icon: <Clock size={16} className="text-[#0A7E94]" />, label: "Opening Hours", content: "Monday – Friday\n9:00 AM – 4:30 PM" },
              ].map(({ icon, label, content, link }) => (
                <div key={label} className="flex items-start gap-4 p-6 md:p-8 bg-surface hover:bg-[var(--cream-warm)] transition-colors duration-500 flex-1">
                  <span className="mt-0.5">{icon}</span>
                  <div>
                    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.1em] text-[#0D1F2D] mb-1.5">{label}</p>
                    <p className="body-text-sm whitespace-pre-line">{content}</p>
                    {link && (
                      <a href={link.href} target="_blank" rel="noreferrer" className="link-arrow text-[10px] mt-3 inline-flex">
                        {link.text}
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div className="p-6 md:p-8">
                <Link to="/book" className="btn-primary w-full bg-[#0A7E94] hover:bg-[#086B7E]">
                  <Calendar size={14} /> Book Appointment Online
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <div className="home-sections">
        <Services />
        <TrustStrip />
        <HomePhilosophy />
        <HomeNumbers />
        <HomeTreatments />
        <About />
        <Testimonials />
        <HomeBooking />
        <Location />
      </div>
    </>
  );
}
