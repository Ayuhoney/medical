import { useState } from "react";
import { Link } from "react-router";
import {
  Calendar, ArrowRight, Award, Shield, CheckCircle, Microscope,
  Star, Phone, Clock, MapPin, ChevronLeft, ChevronRight, ArrowUpRight,
} from "lucide-react";
import { IMAGES, CLINIC } from "../constants";
import { BookingBanner } from "../components/ui";
import { ServiceAccordion } from "../components/ServiceAccordion";
import { MaskReveal, useRefEntrance } from "../components/RefEntrance";
import { ScrollReveal, StaggerReveal } from "../components/ScrollReveal";
import { ScrollZoomReveal } from "../components/ScrollZoomReveal";
import { ServiceMarquee } from "../components/ServiceMarquee";

/* ─── STEP 1: Hero — reference: full-viewport, left content, bottom stats, scroll badge ─── */
function Hero() {
  const enterRef = useRefEntrance(true);
  const stats = [
    { v: "20+", l: "Years of Care" },
    { v: "AGPAL", l: "Accredited" },
    { v: "5.0 ★", l: "Patient Rated" },
    { v: "4", l: "Specialist Services" },
  ];

  return (
    <section ref={enterRef} className="hero-section">
      <div className="hero-bg-sticky" aria-hidden>
        <div className="hero-bg-wrap hero-bg-layer">
          <div
            className="hero-bg-pan hero-bg-drift"
            style={{ backgroundImage: `url(${IMAGES.heroPortrait})` }}
          />
          <div className="hero-bg-scrim" />
        </div>
      </div>

      <div className="hero-inner site-container">
        <div className="hero-content lg:max-w-[50%] xl:max-w-[46%]">
          <p className="ref-label-enter">
            <MaskReveal delay={380}>BATEMANS BAY · NSW AUSTRALIA</MaskReveal>
          </p>

          <h1 className="heading-display-light">
            <MaskReveal delay={480} className="mb-1.5">
              Where Health
            </MaskReveal>
            <MaskReveal delay={600}>
              Meets <em className="heading-accent-light">Beauty</em>
            </MaskReveal>
          </h1>

          <MaskReveal delay={820} className="mb-10 md:mb-12">
            <p className="body-text-light !mb-0">
              General Practice, Skin Cancer detection, and medical-grade
              Aesthetic treatments — delivered with personalised care in Batemans Bay.
            </p>
          </MaskReveal>

          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <div className="ref-rise" style={{ transitionDelay: "1040ms" }}>
              <Link to="/book" className="btn-primary btn-ref-arrow bg-[#0A7E94] hover:bg-[#086B7E] shadow-[0_4px_20px_rgba(10,126,148,0.35)] hover:shadow-[0_6px_24px_rgba(10,126,148,0.45)]">
                Book Consultation <ArrowRight size={14} className="ref-arrow" />
              </Link>
            </div>
            <div className="ref-rise" style={{ transitionDelay: "1160ms" }}>
              <Link to="/general-practice" className="btn-outline-white">
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-stats-wrap site-container pb-6 md:pb-8">
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
          <p className="hero-rating-block ref-rise w-full md:w-auto mt-5 md:mt-0 pt-5 md:pt-0 border-t border-white/10 md:border-0" style={{ transitionDelay: "1440ms" }}>
            · Rated 5.0 · Patient Reviews
          </p>
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

/* ─── Stats band — reference dark credential strip ─── */
function StatsBand() {
  const stats = [
    { v: "20+", l: "Years of Excellence" },
    { v: "5.0 ★", l: "Patient Rated" },
    { v: "AGPAL", l: "Accredited Practice" },
    { v: "4", l: "Specialist Services" },
  ];

  return (
    <section className="stats-band">
      <div className="site-container">
        <ScrollReveal>
          <div className="stats-band-grid">
            {stats.map(({ v, l }) => (
              <div key={l} className="stats-band-item">
                <div className="stats-band-value">{v}</div>
                <div className="stats-band-label">{l}</div>
              </div>
            ))}
          </div>
          <div className="stats-band-foot">
            <p className="font-sans text-white/40 text-[13px] font-light max-w-md">
              Excellence in every consultation — trusted family care with specialist skin and aesthetic expertise.
            </p>
            <Link to="/practice-info" className="link-arrow !text-white/55 hover:!text-[#7EC8D8] shrink-0">
              About Our Practice <ArrowRight size={13} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─── STEP 4: WhyUs — reference philosophy section with numbered list ─── */
function WhyUs() {
  const points = [
    { n: "01", title: "AGPAL-Accredited Excellence", desc: "Maintaining Australia's highest GP standards with evidence-based care." },
    { n: "02", title: "MoleMax HD Technology", desc: "The gold standard in skin cancer detection with total body photography." },
    { n: "03", title: "Medical-Grade Aesthetics", desc: "All treatments performed by AHPRA-registered medical practitioners." },
  ];

  return (
    <section className="section-py section-cream">
      <div className="site-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <ScrollZoomReveal className="relative order-2 lg:order-1">
            <div className="relative pl-6 pt-6">
              <div className="absolute top-0 left-0 w-16 h-16 bg-[#0D1F2D] z-0" aria-hidden />
              <div className="absolute top-0 left-[72px] w-px h-24 bg-[#0A7E94]/25 z-0" aria-hidden />
              <div className="image-frame aspect-[4/5] max-w-md relative z-10 overflow-hidden">
                <img
                  src={IMAGES.clinicInterior}
                  alt="Clinic"
                  className="ref-zoom-img ref-zoom-img-drift w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:-right-6 w-[52%] aspect-square border-[5px] border-white shadow-[0_16px_48px_rgba(13,31,45,0.12)] overflow-hidden z-20">
                <img
                  src={IMAGES.cardAesthetic}
                  alt="Treatment"
                  className="ref-zoom-img ref-zoom-img-delay w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-10 left-0 z-30 bg-[#0D1F2D] text-white px-4 py-3 font-sans text-[10px] uppercase tracking-[0.14em] leading-relaxed border border-[#0A7E94]/20">
                20+<br />Years of<br />Excellence
              </div>
            </div>
          </ScrollZoomReveal>

          <ScrollReveal delay={2} className="order-1 lg:order-2">
            <p className="ref-label">WHY CHOOSE US</p>
            <h2 className="heading-section mb-6">
              The Standard of Care<br />
              <em className="heading-accent">You Deserve</em>
            </h2>
            <p className="body-text mb-8">
              We combine the warmth of a trusted family practice with the capabilities of a
              specialist skin and aesthetics clinic — all under one roof in Batemans Bay.
            </p>
            <div className="mb-8">
              {points.map(({ n, title, desc }) => (
                <div key={n} className="philosophy-item">
                  <span className="philosophy-num">{n}</span>
                  <div>
                    <p className="philosophy-title">{title}</p>
                    <p className="body-text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/practice-info" className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E]">
              About Our Practice <ArrowRight size={14} />
            </Link>
          </ScrollReveal>
        </div>
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
    <section className="section-py section-white">
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
    <section className="section-py section-dark">
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
            <div className="flex items-center justify-between border-t border-white/10 pt-8">
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
            <div className="flex flex-col h-full divide-y divide-[rgba(10,126,148,0.08)] border border-[rgba(10,126,148,0.08)]">
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
        <WhyUs />
        <StatsBand />
        <About />
        <Testimonials />
        <BookingBanner />
        <Location />
      </div>
    </>
  );
}
