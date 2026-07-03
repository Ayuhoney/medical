import { Link } from "react-router";
import type { ReactNode, CSSProperties } from "react";
import { ArrowRight } from "lucide-react";

export function PageHero({
  image,
  tag,
  title,
  subtitle,
  imagePosition = "center 32%",
}: {
  image: string;
  tag: string;
  title: ReactNode;
  subtitle?: string;
  imagePosition?: string;
}) {
  const posStyle = { "--hero-pos": imagePosition } as CSSProperties;

  return (
    <section className="page-hero-section">
      <div
        className="page-hero-bg"
        style={{ ...posStyle, backgroundImage: `url(${image})` }}
        aria-hidden
      />
      <div className="page-hero-scrim" aria-hidden />
      <div className="relative z-10 site-container pb-12 md:pb-16 pt-28 md:pt-32">
        <p className="ref-label-light">{tag}</p>
        <h1 className="heading-display-light mb-4 max-w-2xl">{title}</h1>
        {subtitle && <p className="body-text-light">{subtitle}</p>}
      </div>
    </section>
  );
}

export function SectionHeader({
  tag, title, subtitle, center = false, light = false,
}: { tag: string; title: ReactNode; subtitle?: string; center?: boolean; light?: boolean }) {
  return (
    <div className={`mb-10 md:mb-12 ${center ? "text-center" : ""}`}>
      <p className={light ? "ref-label-light mx-auto" : center ? "ref-label mx-auto justify-center" : "ref-label"}>{tag}</p>
      <h2 className={`${light ? "heading-section-light" : "heading-section"} mb-3`}>{title}</h2>
      {subtitle && <p className={`body-text ${center ? "mx-auto" : ""} ${light ? "!text-white/55" : ""}`}>{subtitle}</p>}
    </div>
  );
}

export function TreatmentCard({ icon, title, desc }: { icon: ReactNode; title: string; desc: string }) {
  return (
    <div className="treatment-card group">
      <div className="card-icon-wrap mb-5 group-hover:bg-[#0A7E94] group-hover:text-white transition-colors duration-500 [&>span]:transition-colors">
        <span className="text-[#0A7E94] group-hover:text-white">{icon}</span>
      </div>
      <h4 className="font-sans text-[13px] font-semibold uppercase tracking-[0.06em] text-[#0D1F2D] mb-2">{title}</h4>
      <p className="body-text-sm">{desc}</p>
    </div>
  );
}

export function ServiceCard({
  image, icon, category, title, desc, features, path,
}: { image: string; icon: ReactNode; category: string; title: string; desc: string; features: string[]; path: string }) {
  return (
    <div className="service-card group">
      <div className="service-card-media">
        <img src={image} alt={title} className="image-hover absolute inset-0 object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="proc-card-meta !top-3 !left-3">{category}</span>
        <h3 className="proc-card-title !bottom-3 !left-3 !right-3 text-base">{title}</h3>
      </div>
      <div className="service-card-body">
        <p className="body-text-sm mb-3 line-clamp-2">{desc}</p>
        <ul className="space-y-1.5 mb-4 flex-1">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2 text-[11px] text-[#334E5E] font-sans">
              <span className="text-[#0A7E94]">—</span>{f}
            </li>
          ))}
        </ul>
        <Link to={path} className="link-arrow mt-auto text-[10px]">Learn More <ArrowRight size={12} /></Link>
      </div>
    </div>
  );
}

export function BookingBanner() {
  return (
    <section className="relative py-8 md:py-10 overflow-hidden bg-[#0A7E94]">
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="site-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 md:gap-8">
          <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 min-w-0 flex-1">
            <p className="ref-label-light shrink-0 !mb-0 before:!bg-white/30 !text-white/50 text-[10px]">
              Take the Next Step
            </p>
            <div className="hidden md:block w-px h-8 bg-white/20 shrink-0" aria-hidden />
            <h2 className="font-serif text-white text-[clamp(1.15rem,2.2vw,1.65rem)] leading-tight sm:whitespace-nowrap sm:truncate">
              Ready to Take Care of Your Health?
            </h2>
            <span className="hidden xl:inline font-sans text-white/55 text-[13px] font-light whitespace-nowrap">
              · New patients welcome
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/book"
              className="btn-primary bg-[#0D1F2D] hover:bg-white hover:text-[#0D1F2D] !py-3 !px-6 text-[11px]"
            >
              Book Appointment
            </Link>
            <a href="tel:0244080777" className="btn-outline-white !py-3 !px-6 text-[11px]">
              Call 02 4408 0777
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3 font-sans text-[14px] text-[#334E5E] leading-relaxed">
      <span className="text-[#0A7E94] mt-1">—</span>{children}
    </li>
  );
}
