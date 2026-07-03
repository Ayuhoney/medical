import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Phone, MapPin, Menu, X, ChevronDown, ArrowRight, Calendar, ShoppingBag } from "lucide-react";
import { NAV_ITEMS, IMAGES, CLINIC } from "../constants";
import logoImg from "../../assest/Logo.png";

// ─── Logo ─────────────────────────────────────────────────────────────────────
export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 group flex-shrink-0">
      <img src={logoImg} alt="Logo" className="h-10 w-auto object-contain flex-shrink-0" />
      <div className="flex flex-col leading-none gap-0.5">
        <span className={`font-semibold tracking-tight leading-tight ${dark ? "text-white" : "text-[#0D1F2D]"}`}
          style={{ fontFamily: "'DM Serif Display',serif", fontSize: "0.98rem" }}>
          Beach Road Surgery
        </span>
        <span className="font-medium tracking-widest uppercase text-[#0A7E94]"
          style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.58rem", letterSpacing: "0.12em" }}>
          &amp; Skin Clinic
        </span>
      </div>
    </Link>
  );
}

// ─── Mega dropdown panel ──────────────────────────────────────────────────────
function MegaPanel({ item, onClose }: { item: (typeof NAV_ITEMS)[number]; onClose: () => void }) {
  if (!item.mega) return null;
  const { cols, featured } = item.mega;
  const featImg = IMAGES[featured.image as keyof typeof IMAGES];

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 bg-white rounded-2xl shadow-[0_24px_64px_rgba(10,126,148,0.18)] border border-[rgba(10,126,148,0.1)] overflow-hidden z-50"
      style={{ width: cols.length > 1 ? "680px" : "520px", maxWidth: "96vw" }}>
      <div className="flex">
        {/* Columns */}
        <div className={`flex-1 p-7 grid gap-7`}
          style={{ gridTemplateColumns: `repeat(${cols.length},1fr)` }}>
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[10px] font-bold text-[#0A7E94] uppercase tracking-widest mb-3.5"
                style={{ fontFamily: "'Inter',sans-serif", letterSpacing: "0.14em" }}>
                {col.heading}
              </p>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} onClick={onClose}
                      className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-[13px] text-[#334E5E] hover:text-[#0A7E94] hover:bg-[#EDF8FB] transition-all duration-150 group/l"
                      style={{ fontFamily: "'Inter',sans-serif" }}>
                      <span className="w-1 h-1 rounded-full bg-[#0A7E94]/25 group-hover/l:bg-[#0A7E94] transition-colors flex-shrink-0" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* Featured image card */}
        <div className="w-48 flex-shrink-0 relative overflow-hidden">
          <img src={featImg} alt={featured.heading} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/92 via-[#0D1F2D]/35 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end h-full p-5">
            <p className="text-white font-semibold leading-tight mb-1"
              style={{ fontFamily: "'DM Serif Display',serif", fontSize: "1.05rem" }}>
              {featured.heading}
            </p>
            <p className="text-white/65 text-[11px] mb-4"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              {featured.sub}
            </p>
            <Link to={featured.cta.path} onClick={onClose}
              className="inline-flex items-center gap-1.5 bg-[#0A7E94] hover:bg-[#086B7E] text-white text-[11px] font-semibold px-3.5 py-1.5 rounded-lg transition-colors"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              {featured.cta.label} <ArrowRight size={10} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Main Header ──────────────────────────────────────────────────────────────
export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const openDrop = (label: string) => { if (timer.current) clearTimeout(timer.current); setOpenMenu(label); };
  const closeDrop = () => { timer.current = setTimeout(() => setOpenMenu(null), 140); };
  const isActive = (p: string) => location.pathname === p;

  return (
    <header className="w-full">
      {/* ── Tier 1: Info bar ──────────────────────────────────────── */}
      <div className="bg-[#0A7E94]">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 h-9 flex items-center justify-between">
          <div className="flex items-center divide-x divide-white/20">
            <a href={`tel:${CLINIC.phone.replace(/\s/g,"")}`}
              className="flex items-center gap-1.5 text-white/85 hover:text-white text-[11.5px] pr-4 transition-colors"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              <Phone size={11} strokeWidth={2.2} /> {CLINIC.phone}
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-white/70 text-[11.5px] pl-4"
              style={{ fontFamily: "'Inter',sans-serif" }}>
              <MapPin size={11} strokeWidth={2.2} /> {CLINIC.address}
            </span>
          </div>
          <Link to="/blog"
            className="hidden md:block text-white/65 hover:text-white text-[11px] tracking-widest transition-colors"
            style={{ fontFamily: "'Inter',sans-serif", letterSpacing: "0.1em" }}>
            BLOG &amp; NEWS
          </Link>
        </div>
      </div>

      {/* ── Tier 2: Logo + CTAs ───────────────────────────────────── */}
      <div className={`bg-white transition-all duration-300 ${scrolled ? "" : "border-b border-[rgba(10,126,148,0.06)]"}`}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <div className="flex items-center justify-between h-[62px]">
            <Logo />
            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link to="/store"
                className="flex items-center gap-2 px-4 py-2 text-[13px] font-medium text-[#0A7E94] rounded-xl border border-[rgba(10,126,148,0.25)] hover:bg-[#EDF8FB] hover:border-[#0A7E94] transition-all duration-200"
                style={{ fontFamily: "'Inter',sans-serif" }}>
                <ShoppingBag size={14} /> Online Store
              </Link>
              <Link to="/book"
                className="flex items-center gap-2 px-5 py-2 text-[13px] font-semibold text-white bg-[#0A7E94] rounded-xl hover:bg-[#086B7E] transition-all duration-200 shadow-[0_4px_14px_rgba(10,126,148,0.35)]"
                style={{ fontFamily: "'Inter',sans-serif" }}>
                <Calendar size={14} /> Book Appointment
              </Link>
            </div>
            {/* Mobile toggle */}
            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-xl text-[#0A7E94] hover:bg-[#EDF8FB] transition-colors"
              aria-label="Toggle menu">
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Tier 3: Navigation bar (desktop only) ─────────────────── */}
      <div className={`hidden lg:block bg-white sticky top-0 z-40 transition-shadow duration-300 border-t border-[rgba(10,126,148,0.07)] ${scrolled ? "shadow-[0_2px_20px_rgba(10,126,148,0.1)]" : ""}`}>
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8">
          <nav className="flex items-center h-11 gap-0">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative"
                onMouseEnter={() => item.mega ? openDrop(item.label) : undefined}
                onMouseLeave={item.mega ? closeDrop : undefined}>
                <Link to={item.path}
                  className={`
                    flex items-center gap-1 whitespace-nowrap px-3 py-1.5 rounded-lg
                    text-[12.5px] font-medium transition-all duration-150 tracking-tight
                    ${isActive(item.path)
                      ? "text-[#0A7E94] bg-[#EDF8FB]"
                      : "text-[#344E5C] hover:text-[#0A7E94] hover:bg-[#EDF8FB]/70"}
                  `}
                  style={{ fontFamily: "'Inter',sans-serif" }}>
                  {item.label}
                  {item.mega && (
                    <ChevronDown size={11} strokeWidth={2.5}
                      className={`opacity-45 transition-transform duration-200 ${openMenu === item.label ? "rotate-180 opacity-75" : ""}`} />
                  )}
                </Link>
                {item.mega && openMenu === item.label && (
                  <div onMouseEnter={() => openDrop(item.label)} onMouseLeave={closeDrop}>
                    <MegaPanel item={item} onClose={() => setOpenMenu(null)} />
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* ── Mobile drawer ─────────────────────────────────────────── */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col" style={{ top: "108px" }}>
          <div className="bg-white flex-1 overflow-y-auto shadow-2xl border-t border-[rgba(10,126,148,0.1)]">
            <div className="max-w-screen-xl mx-auto px-5 py-4 flex flex-col gap-0.5">
              {NAV_ITEMS.map((item) => (
                <Link key={item.label} to={item.path}
                  className={`px-4 py-3 rounded-xl text-[14px] font-medium transition-colors ${isActive(item.path) ? "bg-[#EDF8FB] text-[#0A7E94]" : "text-[#344E5C] hover:bg-[#EDF8FB] hover:text-[#0A7E94]"}`}
                  style={{ fontFamily: "'Inter',sans-serif" }}>
                  {item.label}
                </Link>
              ))}
              <div className="flex gap-2.5 mt-4 pt-4 border-t border-[rgba(10,126,148,0.1)]">
                <Link to="/store" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium text-[#0A7E94] border border-[rgba(10,126,148,0.3)] rounded-xl" style={{ fontFamily: "'Inter',sans-serif" }}>
                  <ShoppingBag size={14} /> Store
                </Link>
                <Link to="/book" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-semibold text-white bg-[#0A7E94] rounded-xl" style={{ fontFamily: "'Inter',sans-serif" }}>
                  <Calendar size={14} /> Book Now
                </Link>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-black/20" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </header>
  );
}
