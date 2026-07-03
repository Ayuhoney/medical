import { Link } from "react-router";
import {
  Calendar, ArrowRight, Award, Shield, CheckCircle,
  Star, Heart, Microscope, Sparkles, Zap, Phone, Clock,
  MapPin, ChevronRight,
} from "lucide-react";
import { IMAGES, CLINIC } from "../constants";
import { BookingBanner } from "../components/ui";

const FF_SERIF = "'DM Serif Display',serif";
const FF_SANS  = "'Inter',sans-serif";

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07161F]" style={{ minHeight: "92vh" }}>
      {/* Portrait image — right side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[55%]">
        <img
          src={IMAGES.heroPortrait}
          alt="Healthy glowing skin"
          className="w-full h-full object-cover object-center"
        />
        {/* Left fade into dark bg */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07161F] via-[#07161F]/65 to-transparent" />
        {/* Bottom vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/60 via-transparent to-transparent" />
      </div>

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 flex items-center" style={{ minHeight: "92vh" }}>
        <div className="max-w-lg xl:max-w-xl py-24 lg:py-0">
          {/* Location pill */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0A7E94]/40 bg-[#0A7E94]/10 px-4 py-1.5 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00B4CC] animate-pulse" />
            <span className="text-[#7EC8D8] text-[11px] font-semibold tracking-widest"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.12em" }}>
              BATEMANS BAY · NSW AUSTRALIA
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-normal leading-[1.08] mb-6"
            style={{ fontFamily: FF_SERIF, fontSize: "clamp(2.8rem, 5.5vw, 4.4rem)" }}>
            Where Health<br />
            Meets <em className="text-[#7EC8D8]">Beauty</em>
          </h1>

          {/* Sub */}
          <p className="text-white/60 leading-relaxed mb-8 max-w-md"
            style={{ fontFamily: FF_SANS, fontWeight: 300, fontSize: "clamp(1rem,1.5vw,1.125rem)" }}>
            General Practice, Skin Cancer detection, and medical-grade
            Aesthetic treatments — delivered with personalised care in Batemans Bay.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mb-12">
            <Link to="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A7E94] text-white font-semibold rounded-xl hover:bg-[#086B7E] transition-all duration-200 shadow-[0_8px_24px_rgba(10,126,148,0.5)] hover:shadow-[0_12px_32px_rgba(10,126,148,0.6)] hover:-translate-y-0.5"
              style={{ fontFamily: FF_SANS }}>
              <Calendar size={16} /> Book Consultation
            </Link>
            <Link to="/general-practice"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-medium rounded-xl border border-white/20 hover:bg-white/18 hover:border-white/35 transition-all duration-200 backdrop-blur-sm"
              style={{ fontFamily: FF_SANS }}>
              Our Services <ArrowRight size={15} />
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex items-center gap-8 pt-8 border-t border-white/10">
            {[
              { v: "20+", l: "Years of Care" },
              { v: "AGPAL", l: "Accredited" },
              { v: "5.0 ★", l: "Patient Rated" },
            ].map(({ v, l }) => (
              <div key={l}>
                <div className="text-white font-bold" style={{ fontFamily: FF_SERIF, fontSize: "1.5rem" }}>{v}</div>
                <div className="text-white/45 text-[11px] mt-0.5" style={{ fontFamily: FF_SANS }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 lg:h-12">
          <path d="M0 48L1440 48L1440 0C1200 40 900 48 720 32C540 16 240 0 0 24L0 48Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Accreditation strip ──────────────────────────────────────────────────────
function TrustStrip() {
  const items = [
    { icon: <Shield size={17} />, title: "AGPAL Accredited", sub: "Quality Practice Standards" },
    { icon: <Award size={17} />, title: "AHPRA Registered", sub: "All Practitioners" },
    { icon: <Microscope size={17} />, title: "Skin Cancer Institute", sub: "Recognised Clinic" },
    { icon: <CheckCircle size={17} />, title: "RACGP Members", sub: "College of GPs" },
    { icon: <Star size={17} />, title: "Medical Grade", sub: "Cosmetic Excellence" },
  ];
  return (
    <section className="bg-white border-b border-[rgba(10,126,148,0.08)] py-7">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {items.map(({ icon, title, sub }) => (
            <div key={title}
              className="flex items-center gap-3 bg-[#F4F8FA] hover:bg-[#EDF8FB] rounded-xl px-4 py-2.5 transition-colors duration-200 group cursor-default">
              <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm flex-shrink-0 text-[#0A7E94] group-hover:shadow transition-shadow">
                {icon}
              </div>
              <div>
                <p className="text-[#0D1F2D] font-semibold text-[13px] leading-none mb-0.5" style={{ fontFamily: FF_SANS }}>{title}</p>
                <p className="text-[#5C7A8A] text-[11px]" style={{ fontFamily: FF_SANS }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const cards = [
    {
      icon: <Heart size={18} />, tag: "PRIMARY CARE",
      title: "General Practice",
      desc: "Comprehensive family medicine, preventive healthcare, and chronic disease management for every stage of life.",
      features: ["Preventive Healthcare", "Family Medicine", "Chronic Disease", "Mental Health Plans", "Immunisations"],
      image: IMAGES.cardGP, path: "/general-practice",
    },
    {
      icon: <Microscope size={18} />, tag: "SKIN CANCER",
      title: "Skin Cancer Clinic",
      desc: "Expert detection using MoleMax HD full-body photography and dermoscopy — Australia's most thorough approach.",
      features: ["Full Body Skin Checks", "MoleMax HD Mapping", "Mole Monitoring", "Skin Cancer Surgery", "Photodynamic Therapy"],
      image: IMAGES.cardSkin, path: "/skin-cancer",
    },
    {
      icon: <Sparkles size={18} />, tag: "AESTHETICS",
      title: "Aesthetic Medicine",
      desc: "Medical-grade cosmetic treatments performed by AHPRA-registered doctors for natural-looking, lasting results.",
      features: ["Cosmetic Injectables", "Fractional RF / Microneedling", "HIFU Therapy", "LED Phototherapy", "Non-Surgical Lifts"],
      image: IMAGES.cardAesthetic, path: "/aesthetic",
    },
    {
      icon: <Zap size={18} />, tag: "LASER",
      title: "Laser Treatments",
      desc: "State-of-the-art laser technology for skin resurfacing, pigmentation correction, and total skin rejuvenation.",
      features: ["Laser Resurfacing", "Pigmentation Treatment", "Vascular Lesions", "Scar Reduction", "Hair Removal"],
      image: IMAGES.cardLaser, path: "/laser",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>OUR SERVICES</p>
            <h2 className="text-[#0D1F2D] leading-tight"
              style={{ fontFamily: FF_SERIF, fontSize: "clamp(2rem,3.5vw,2.75rem)" }}>
              Comprehensive Care &amp;<br /><em>Advanced Treatments</em>
            </h2>
          </div>
          <Link to="/general-practice"
            className="hidden md:inline-flex items-center gap-2 text-[13px] font-semibold text-[#0A7E94] hover:gap-3 transition-all duration-200 flex-shrink-0"
            style={{ fontFamily: FF_SANS }}>
            View all services <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards — 2×2 grid on tablet, 4-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {cards.map((card) => (
            <Link to={card.path} key={card.title}
              className="group bg-white rounded-2xl overflow-hidden border border-[rgba(10,126,148,0.09)] hover:border-[rgba(10,126,148,0.28)] shadow-[0_2px_12px_rgba(10,126,148,0.06)] hover:shadow-[0_16px_48px_rgba(10,126,148,0.14)] transition-all duration-350 hover:-translate-y-2 flex flex-col">
              {/* Image */}
              <div className="relative h-56 overflow-hidden bg-[#EDF8FB]">
                <img src={card.image} alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108" />
                {/* Dark gradient for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                {/* Tag chip */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#0A7E94] rounded-full px-3 py-1 text-[10px] font-bold shadow-sm"
                    style={{ fontFamily: FF_SANS, letterSpacing: "0.05em" }}>
                    {card.icon} {card.tag}
                  </span>
                </div>
                {/* Bottom title on image */}
                <div className="absolute bottom-3.5 left-4 right-4">
                  <p className="text-white font-semibold text-lg leading-tight"
                    style={{ fontFamily: FF_SERIF }}>{card.title}</p>
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[#5C7A8A] text-[13px] leading-relaxed mb-4"
                  style={{ fontFamily: FF_SANS }}>{card.desc}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {card.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[12px] text-[#334E5E]"
                      style={{ fontFamily: FF_SANS }}>
                      <span className="w-1 h-1 rounded-full bg-[#0A7E94] flex-shrink-0" />{f}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0A7E94] group-hover:gap-2.5 transition-all duration-200 mt-auto">
                  Learn More <ArrowRight size={13} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats / Why Choose Us ────────────────────────────────────────────────────
function WhyUs() {
  const stats = [
    { value: "20+", label: "Years Serving Batemans Bay" },
    { value: "4",   label: "Expert Clinicians" },
    { value: "98%", label: "Patient Satisfaction" },
    { value: "4",   label: "Specialist Services" },
  ];
  const points = [
    "AGPAL-accredited practice maintaining Australia's highest GP standards",
    "MoleMax HD total body photography — the gold standard in skin cancer detection",
    "All aesthetic treatments performed by AHPRA-registered medical practitioners",
    "Same building: GP, skin cancer clinic, aesthetics and laser — no referrals needed",
  ];

  return (
    <section className="py-24 bg-[#0D1F2D] relative overflow-hidden">
      {/* Decorative teal glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#0A7E94]/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 rounded-full bg-[#0A7E94]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/8 rounded-2xl overflow-hidden mb-16">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-[#0D1F2D] px-8 py-8 text-center">
              <div className="text-[#7EC8D8] font-bold mb-2" style={{ fontFamily: FF_SERIF, fontSize: "clamp(2.2rem,4vw,3rem)" }}>
                {value}
              </div>
              <p className="text-white/45 text-[12px] leading-snug" style={{ fontFamily: FF_SANS }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>WHY CHOOSE US</p>
            <h2 className="text-white leading-tight mb-6"
              style={{ fontFamily: FF_SERIF, fontSize: "clamp(1.9rem,3vw,2.6rem)" }}>
              The Standard of Care<br />
              <em className="text-[#7EC8D8]">You Deserve</em>
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8"
              style={{ fontFamily: FF_SANS, fontWeight: 300 }}>
              We combine the warmth of a trusted family practice with the capabilities of a
              specialist skin and aesthetics clinic — all under one roof in Batemans Bay.
            </p>
            <ul className="space-y-4">
              {points.map((pt) => (
                <li key={pt} className="flex items-start gap-3.5">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#0A7E94]/20 border border-[#0A7E94]/50 flex items-center justify-center mt-0.5">
                    <CheckCircle size={12} className="text-[#0A7E94]" />
                  </span>
                  <span className="text-white/65 text-[14px] leading-relaxed" style={{ fontFamily: FF_SANS }}>{pt}</span>
                </li>
              ))}
            </ul>
            <Link to="/practice-info"
              className="inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-[#0A7E94] text-white font-semibold rounded-xl hover:bg-[#086B7E] transition-all duration-200 shadow-[0_8px_24px_rgba(10,126,148,0.4)]"
              style={{ fontFamily: FF_SANS }}>
              About Our Practice <ArrowRight size={15} />
            </Link>
          </div>

          {/* Image collage */}
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4]">
                <img src={IMAGES.clinicInterior} alt="Clinic" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col gap-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src={IMAGES.cardAesthetic} alt="Aesthetic treatment" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square">
                  <img src={IMAGES.cardSkin} alt="Skin check" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
            {/* AGPAL badge float */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl flex items-center gap-3 border border-[rgba(10,126,148,0.1)]">
              <div className="w-10 h-10 rounded-xl bg-[#EDF8FB] flex items-center justify-center flex-shrink-0">
                <Shield size={18} className="text-[#0A7E94]" />
              </div>
              <div>
                <p className="text-[#0D1F2D] font-semibold text-[13px]" style={{ fontFamily: FF_SANS }}>AGPAL Accredited</p>
                <p className="text-[#5C7A8A] text-[11px]" style={{ fontFamily: FF_SANS }}>Quality care guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── About section ────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-[0_24px_64px_rgba(10,126,148,0.15)]">
              <img src={IMAGES.heroWomanWarm} alt="Personalised care" className="w-full h-full object-cover" />
            </div>
            {/* Decorative teal border accent */}
            <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 rounded-2xl border-2 border-[#0A7E94]/20 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-4"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>ABOUT OUR CLINIC</p>
            <h2 className="text-[#0D1F2D] leading-tight mb-5"
              style={{ fontFamily: FF_SERIF, fontSize: "clamp(1.9rem,3vw,2.6rem)" }}>
              Trusted Healthcare
              <br /><em>in Batemans Bay</em>
            </h2>
            <p className="text-[#5C7A8A] text-base leading-relaxed mb-5"
              style={{ fontFamily: FF_SANS, fontWeight: 300 }}>
              For over 20 years, Beach Road Surgery &amp; Skin Clinic has delivered personalised healthcare to the Batemans Bay community. Our experienced doctors bring specialist-level expertise to every patient encounter.
            </p>
            <p className="text-[#5C7A8A] text-base leading-relaxed mb-7"
              style={{ fontFamily: FF_SANS, fontWeight: 300 }}>
              Whether you need everyday GP care, a comprehensive skin cancer check, or a medical aesthetic treatment, you'll find the same warmth, clinical excellence, and personal attention at every visit.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Experienced, FRACGP-qualified general practitioners",
                "Advanced skin cancer detection with MoleMax HD technology",
                "Medical-grade cosmetic treatments in a comfortable setting",
                "Bulk billing available for eligible patients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 w-4.5 h-4.5 rounded-full bg-[#EDF8FB] flex items-center justify-center">
                    <CheckCircle size={11} className="text-[#0A7E94]" />
                  </span>
                  <span className="text-[#334E5E] text-[14px] leading-relaxed" style={{ fontFamily: FF_SANS }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/practice-info"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A7E94] text-white font-semibold rounded-xl hover:bg-[#086B7E] transition-all duration-200 shadow-[0_4px_16px_rgba(10,126,148,0.3)]"
              style={{ fontFamily: FF_SANS }}>
              Meet Our Doctors <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    { name: "Sarah M.", type: "General Practice", rating: 5, quote: "Dr Dharmarama is exceptional — he truly listens and takes time to explain everything clearly. The clinic is modern and the team are incredibly welcoming. I wouldn't go anywhere else." },
    { name: "James T.", type: "Skin Cancer Check", rating: 5, quote: "I had a comprehensive skin check with full body mapping using MoleMax HD. The technology is impressive and the doctor was thorough and reassuring. Peace of mind is priceless." },
    { name: "Michelle K.", type: "Aesthetic Medicine", rating: 5, quote: "The results from my treatments exceeded my expectations. The team made me feel at ease throughout the process and the outcomes looked completely natural. Highly recommend." },
  ];

  return (
    <section className="py-24 bg-[#F4F8FA]">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>PATIENT STORIES</p>
          <h2 className="text-[#0D1F2D]"
            style={{ fontFamily: FF_SERIF, fontSize: "clamp(1.9rem,3vw,2.6rem)" }}>
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name}
              className="bg-white rounded-2xl p-7 border border-[rgba(10,126,148,0.09)] shadow-[0_2px_16px_rgba(10,126,148,0.06)] hover:shadow-[0_8px_32px_rgba(10,126,148,0.12)] transition-all duration-300 relative">
              {/* Quote mark */}
              <div className="absolute top-5 right-6 text-[#EDF8FB]"
                style={{ fontFamily: FF_SERIF, fontSize: "5rem", lineHeight: 1 }}>
                "
              </div>
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-[#F59E0B] fill-[#F59E0B]" />
                ))}
              </div>
              <p className="text-[#334E5E] text-[14px] leading-relaxed mb-6 relative z-10 italic"
                style={{ fontFamily: FF_SERIF, fontSize: "0.95rem" }}>
                "{r.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(10,126,148,0.08)]">
                <div className="w-9 h-9 rounded-full bg-[#EDF8FB] flex items-center justify-center text-[#0A7E94] font-bold text-sm flex-shrink-0"
                  style={{ fontFamily: FF_SERIF }}>
                  {r.name[0]}
                </div>
                <div>
                  <p className="text-[#0D1F2D] font-semibold text-[13px]" style={{ fontFamily: FF_SANS }}>{r.name}</p>
                  <p className="text-[#5C7A8A] text-[11px]" style={{ fontFamily: FF_SANS }}>{r.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Location ─────────────────────────────────────────────────────────────────
function Location() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3"
            style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>FIND US</p>
          <h2 className="text-[#0D1F2D]"
            style={{ fontFamily: FF_SERIF, fontSize: "clamp(1.9rem,3vw,2.6rem)" }}>Visit Our Clinic</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Map */}
          <div className="lg:col-span-3 rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(10,126,148,0.1)] min-h-[360px] relative border border-[rgba(10,126,148,0.1)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.0!2d150.1731!3d-35.7075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b16c22b0e0d0c0f%3A0x0!2s116+Beach+Rd%2C+Batemans+Bay+NSW+2536!5e0!3m2!1sen!2sau!4v1688000000000!5m2!1sen!2sau"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Clinic map"
            />
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              { emoji: <MapPin size={18} className="text-[#0A7E94]" />, label: "Address",
                content: "116 Beach Road\nBatemans Bay NSW 2536",
                link: { text: "Get Directions →", href: "https://maps.google.com/?q=116+Beach+Road+Batemans+Bay+NSW" } },
              { emoji: <Phone size={18} className="text-[#0A7E94]" />, label: "Phone",
                content: CLINIC.phone,
                link: { text: "Call Now →", href: `tel:${CLINIC.phone.replace(/\s/g,"")}` } },
              { emoji: <Clock size={18} className="text-[#0A7E94]" />, label: "Opening Hours",
                content: "Monday – Friday\n9:00 AM – 4:30 PM" },
            ].map(({ emoji, label, content, link }) => (
              <div key={label}
                className="flex items-start gap-4 bg-[#F4F8FA] rounded-2xl p-5 border border-[rgba(10,126,148,0.09)] hover:bg-[#EDF8FB] transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  {emoji}
                </div>
                <div>
                  <p className="text-[#0D1F2D] font-semibold text-[13px] mb-1" style={{ fontFamily: FF_SANS }}>{label}</p>
                  <p className="text-[#5C7A8A] text-[13px] whitespace-pre-line" style={{ fontFamily: FF_SANS }}>{content}</p>
                  {link && (
                    <a href={link.href} target="_blank" rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[#0A7E94] text-[12px] font-semibold mt-2 hover:underline"
                      style={{ fontFamily: FF_SANS }}>
                      {link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}

            <Link to="/book"
              className="flex items-center justify-center gap-2 py-3.5 bg-[#0A7E94] text-white text-[13px] font-semibold rounded-2xl hover:bg-[#086B7E] transition-colors shadow-[0_4px_16px_rgba(10,126,148,0.3)]"
              style={{ fontFamily: FF_SANS }}>
              <Calendar size={15} /> Book Appointment Online
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <WhyUs />
      <About />
      <Testimonials />
      <BookingBanner />
      <Location />
    </>
  );
}
