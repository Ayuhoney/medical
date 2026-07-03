import { Link } from "react-router";
import { ArrowRight, CheckCircle } from "lucide-react";
import type { ReactNode } from "react";

const FF_SERIF = "'DM Serif Display',serif";
const FF_SANS  = "'Inter',sans-serif";

// ─── Page Hero ────────────────────────────────────────────────────────────────
export function PageHero({
  image, tag, title, subtitle,
}: { image: string; tag: string; title: ReactNode; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden" style={{ height: "clamp(320px,42vh,460px)" }}>
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover object-center" />
      {/* Multi-stop gradient: strong left, fades right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#07161F]/92 via-[#07161F]/65 to-[#07161F]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07161F]/40 via-transparent to-transparent" />

      <div className="relative z-10 max-w-screen-xl mx-auto px-5 lg:px-8 h-full flex flex-col justify-center">
        {/* Breadcrumb tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-[#0A7E94]/40 bg-[#0A7E94]/10 px-4 py-1.5 mb-5 w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00B4CC]" />
          <span className="text-[#7EC8D8] text-[11px] font-bold tracking-widest"
            style={{ fontFamily: FF_SANS, letterSpacing: "0.12em" }}>
            {tag}
          </span>
        </div>
        <h1 className="text-white font-normal leading-tight mb-3"
          style={{ fontFamily: FF_SERIF, fontSize: "clamp(2rem,4.5vw,3.2rem)" }}>
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/60 max-w-lg"
            style={{ fontFamily: FF_SANS, fontWeight: 300, fontSize: "clamp(0.95rem,1.5vw,1.1rem)" }}>
            {subtitle}
          </p>
        )}
      </div>

      {/* Wave edge */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 32" fill="none" preserveAspectRatio="none" className="w-full h-6 lg:h-8">
          <path d="M0 32L1440 32L1440 0C1200 26 900 32 720 20C540 8 240 0 0 16L0 32Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

// ─── Section Header ───────────────────────────────────────────────────────────
export function SectionHeader({
  tag, title, subtitle, center = false,
}: { tag: string; title: ReactNode; subtitle?: string; center?: boolean }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3"
        style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>
        {tag}
      </p>
      <h2 className="text-[#0D1F2D] leading-tight mb-3"
        style={{ fontFamily: FF_SERIF, fontSize: "clamp(1.75rem,3.2vw,2.5rem)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[#5C7A8A] text-base leading-relaxed max-w-xl ${center ? "mx-auto" : ""}`}
          style={{ fontFamily: FF_SANS, fontWeight: 300 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Treatment Card ───────────────────────────────────────────────────────────
export function TreatmentCard({
  icon, title, desc,
}: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="group bg-white rounded-2xl p-6 border border-[rgba(10,126,148,0.09)] hover:border-[rgba(10,126,148,0.28)] shadow-[0_2px_12px_rgba(10,126,148,0.05)] hover:shadow-[0_8px_32px_rgba(10,126,148,0.12)] transition-all duration-250">
      <div className="w-11 h-11 rounded-xl bg-[#EDF8FB] flex items-center justify-center mb-4 group-hover:bg-[#0A7E94] transition-colors duration-200 flex-shrink-0">
        <span className="text-[#0A7E94] group-hover:text-white transition-colors duration-200">{icon}</span>
      </div>
      <h4 className="text-[#0D1F2D] font-semibold mb-2" style={{ fontFamily: FF_SANS, fontSize: "0.925rem" }}>{title}</h4>
      <p className="text-[#5C7A8A] text-[13px] leading-relaxed" style={{ fontFamily: FF_SANS }}>{desc}</p>
    </div>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
export function ServiceCard({
  image, icon, category, title, desc, features, path,
}: { image: string; icon: ReactNode; category: string; title: string; desc: string; features: string[]; path: string }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-[rgba(10,126,148,0.09)] hover:border-[rgba(10,126,148,0.28)] shadow-[0_2px_12px_rgba(10,126,148,0.06)] hover:shadow-[0_16px_48px_rgba(10,126,148,0.14)] transition-all duration-350 hover:-translate-y-1.5 flex flex-col">
      <div className="relative h-52 overflow-hidden bg-[#EDF8FB]">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute top-3.5 left-3.5">
          <span className="inline-flex items-center gap-1.5 bg-white/95 text-[#0A7E94] rounded-full px-3 py-1 text-[10px] font-bold shadow-sm"
            style={{ fontFamily: FF_SANS, letterSpacing: "0.05em" }}>
            {icon} {category}
          </span>
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-[#0D1F2D] text-xl mb-2" style={{ fontFamily: FF_SERIF }}>{title}</h3>
        <p className="text-[#5C7A8A] text-[13px] leading-relaxed mb-4" style={{ fontFamily: FF_SANS }}>{desc}</p>
        <ul className="space-y-1.5 mb-5 flex-1">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-[12px] text-[#334E5E]" style={{ fontFamily: FF_SANS }}>
              <span className="w-1 h-1 rounded-full bg-[#0A7E94] flex-shrink-0" />{f}
            </li>
          ))}
        </ul>
        <Link to={path} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0A7E94] hover:gap-2.5 transition-all duration-200">
          Learn More <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

// ─── Booking Banner ───────────────────────────────────────────────────────────
export function BookingBanner() {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A7E94] via-[#077080] to-[#054A56]" />
      {/* Decorative circles */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-white/4 pointer-events-none" />
      <svg className="absolute bottom-0 w-full opacity-8" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path fill="white" d="M0,32L80,37.3C160,43,320,53,480,53.3C640,53,800,43,960,40C1120,37,1280,43,1360,45.3L1440,48L1440,80L0,80Z" />
      </svg>

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <p className="text-[#7EC8D8] text-[11px] font-bold uppercase tracking-widest mb-4"
          style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>
          TAKE THE NEXT STEP
        </p>
        <h2 className="text-white leading-tight mb-4"
          style={{ fontFamily: FF_SERIF, fontSize: "clamp(1.9rem,3.5vw,2.8rem)" }}>
          Ready to Take Care of Your Health?
        </h2>
        <p className="text-white/60 text-base mb-9 max-w-md mx-auto"
          style={{ fontFamily: FF_SANS, fontWeight: 300 }}>
          Book an appointment with our experienced team. We welcome new patients.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link to="/book"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0A7E94] font-semibold rounded-xl hover:bg-[#EDF8FB] transition-all duration-200 shadow-xl hover:scale-[1.02]"
            style={{ fontFamily: FF_SANS }}>
            Book Appointment
          </Link>
          <a href="tel:0244080777"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-semibold rounded-xl border-2 border-white/30 hover:border-white hover:bg-white/10 transition-all duration-200"
            style={{ fontFamily: FF_SANS }}>
            Call 02 4408 0777
          </a>
        </div>
      </div>
    </section>
  );
}
