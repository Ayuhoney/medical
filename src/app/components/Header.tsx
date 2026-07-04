import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";
import { Phone, MapPin, Menu, X, ChevronDown, ArrowRight, ShoppingBag, Calendar } from "lucide-react";
import { NAV_ITEMS, IMAGES, CLINIC } from "@/app/constants";
import agpalBadge from "@/imports/AGPAL-Accredited-Email-Signature-536w.webp";
import { Logo } from "./Logo";

const UTILITY_H = 32;
const NAV_H = 68;

function MegaPanel({
  item,
  onClose,
}: {
  item: (typeof NAV_ITEMS)[number];
  onClose: () => void;
}) {
  if (!item.mega) return null;
  const { cols, featured } = item.mega;
  const featImg = IMAGES[featured.image as keyof typeof IMAGES];

  return (
    <div className="mega-panel" onMouseLeave={onClose}>
      <div className="mega-panel-inner">
        <div
          className="mega-panel-links"
          style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))` }}
        >
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="ref-label mb-5 !text-[10px]">{col.heading}</p>
              <ul className="space-y-0.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} onClick={onClose} className="mega-panel-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mega-panel-featured group">
          <img
            src={featImg}
            alt={featured.heading}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D1F2D]/95 via-[#0D1F2D]/35 to-transparent" />
          <div className="relative z-10 flex flex-col justify-end h-full min-h-[240px] p-6">
            <p className="text-white font-serif text-[1.15rem] leading-tight mb-1.5">{featured.heading}</p>
            <p className="text-white/55 text-[12px] mb-5 font-sans leading-relaxed">{featured.sub}</p>
            <Link
              to={featured.cta.path}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-white text-[10px] font-semibold uppercase tracking-[0.14em] font-sans hover:gap-3 transition-all duration-300"
            >
              {featured.cta.label} <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const overlay = isHome && !scrolled;
  const activeMegaItem = NAV_ITEMS.find((i) => i.label === openMenu && i.mega);

  useEffect(() => { setMobileOpen(false); setOpenMenu(null); }, [location.pathname]);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  /* Reference video: navbar slides down + fades in on hero load */
  useEffect(() => {
    const el = headerRef.current;
    if (!el || !isHome) {
      headerRef.current?.classList.remove("ref-entered");
      return;
    }
    el.classList.add("ref-header-enter");
    el.classList.remove("ref-entered");
    const run = () => requestAnimationFrame(() => el.classList.add("ref-entered"));
    const t = window.setTimeout(run, 60);
    return () => {
      clearTimeout(t);
      el.classList.remove("ref-entered", "ref-header-enter");
    };
  }, [isHome, location.pathname]);

  const openDrop = (label: string) => {
    if (timer.current) clearTimeout(timer.current);
    setOpenMenu(label);
  };
  const closeDrop = () => {
    timer.current = setTimeout(() => setOpenMenu(null), 160);
  };
  const cancelClose = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  const isActive = (p: string) => location.pathname === p;

  const navLinkClass = (active: boolean) =>
    `header-nav-link ${overlay && !openMenu ? "header-nav-link-light" : "header-nav-link-dark"} ${active ? "is-active" : ""}`;

  const headerTotalH = UTILITY_H + NAV_H;

  return (
    <>
      <div
        ref={headerRef}
        className={`${isHome ? "fixed" : "sticky"} top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
          overlay ? "header-at-hero" : "header-is-scrolled bg-background shadow-[0_1px_0_rgba(10,126,148,0.08)]"
        } ${openMenu ? "mega-open" : ""}`}
        onMouseLeave={closeDrop}
      >
        {/* Utility strip — invisible borders on hero, lines appear on scroll */}
        <div
          className={`header-utility transition-[background-color,border-color,color] duration-500 ${
            overlay
              ? "bg-black/30 text-white/60"
              : "bg-[#0A7E94] text-white/90"
          }`}
          style={{ height: UTILITY_H }}
        >
          <div className="header-utility-inner text-[9px] md:text-[10px] font-sans tracking-wide">
            <div className="header-utility-side header-utility-side-left">
              <span className="hidden lg:flex items-center gap-1.5 truncate max-w-[340px] font-semibold">
                <MapPin size={10} strokeWidth={1.75} className="shrink-0" />
                <span className="truncate">{CLINIC.address}</span>
              </span>
            </div>
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="header-utility-phone flex items-center gap-1.5 hover:text-white transition-colors font-semibold"
            >
              <Phone size={10} strokeWidth={1.75} aria-hidden />
              <span>{CLINIC.phone}</span>
            </a>
            <div className="header-utility-side header-utility-side-right" style={{ gap: "1rem" }}>
              <Link
                to="/practice-info#accreditations"
                className="hidden sm:flex items-center shrink-0 hover:opacity-90 transition-opacity duration-300"
                aria-label="Proudly AGPAL Accredited"
              >
                <img
                  src={agpalBadge}
                  alt="Proudly AGPAL Accredited"
                  loading="eager"
                  decoding="async"
                  style={{
                    height: "1.9rem",
                    width: "auto",
                    maxWidth: "14rem",
                    display: "block",
                    borderRadius: "0.3rem",
                    border: "1px solid rgba(255,255,255,0.5)",
                    padding: "1px 6px",
                    background: "rgba(255,255,255,0.93)",
                  }}
                />
              </Link>
              <Link
                to="/blog"
                className="hidden xl:block uppercase tracking-[0.18em] font-semibold hover:opacity-100 transition-opacity"
              >
                Blog &amp; News
              </Link>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <header
          className={`header-main relative transition-[background-color,border-color,box-shadow] duration-500 ${
            openMenu
              ? "bg-background shadow-[0_8px_32px_rgba(13,31,45,0.08)]"
              : overlay
                ? "bg-transparent"
                : "bg-background"
          }`}
          style={{ height: NAV_H }}
        >
          <div className="header-bar">
            <Logo light={overlay && !openMenu} className="header-logo" />

            <nav className="header-nav" aria-label="Main navigation">
              <div className="header-nav-inner">
                {NAV_ITEMS.map((item) => (
                  <div
                    key={item.label}
                    className="relative shrink-0"
                    onMouseEnter={() => {
                      cancelClose();
                      if (item.mega) openDrop(item.label);
                      else setOpenMenu(null);
                    }}
                  >
                    <Link to={item.path} className={navLinkClass(isActive(item.path))}>
                      {item.label}
                      {item.mega && (
                        <ChevronDown
                          size={8}
                          strokeWidth={2}
                          className={`opacity-40 transition-transform duration-300 ${
                            openMenu === item.label ? "rotate-180 opacity-70" : ""
                          }`}
                        />
                      )}
                    </Link>
                  </div>
                ))}
              </div>
            </nav>

            <div className="header-actions">
              <div className="hidden lg:flex items-center gap-2">
                <Link
                  to="/store"
                  className={`header-btn-store ${
                    overlay && !openMenu ? "header-btn-store-light" : "header-btn-store-dark"
                  }`}
                >
                  <ShoppingBag size={14} strokeWidth={1.75} />
                  <span className="hidden 2xl:inline">Store</span>
                </Link>
                <Link
                  to="/book"
                  className={`header-btn-book ${
                    overlay && !openMenu ? "header-btn-book-premium" : "header-btn-book-solid"
                  }`}
                >
                  <Calendar size={14} strokeWidth={1.75} />
                  Book Now
                </Link>
              </div>

              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`header-menu-btn ${overlay && !openMenu ? "text-white" : "text-[#0D1F2D]"}`}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Full-width mega menu — premium dropdown bar */}
          {activeMegaItem && (
            <div onMouseEnter={cancelClose}>
              <MegaPanel item={activeMegaItem} onClose={() => setOpenMenu(null)} />
            </div>
          )}
        </header>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-[#0D1F2D]/50 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div
            className="absolute top-0 right-0 h-full w-full max-w-[360px] bg-background shadow-2xl overflow-y-auto"
            style={{ paddingTop: headerTotalH }}
          >
            <div className="px-7 py-6 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`py-4 text-[11px] font-medium uppercase tracking-[0.12em] font-sans border-b border-[rgba(10,126,148,0.06)] ${
                    isActive(item.path) ? "text-[#0A7E94]" : "text-[#0D1F2D]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-8">
                <Link to="/store" onClick={() => setMobileOpen(false)} className="btn-outline !h-[48px] w-full text-[10px]">
                  <ShoppingBag size={14} /> Online Store
                </Link>
                <Link to="/book" onClick={() => setMobileOpen(false)} className="btn-primary-sm w-full bg-[#0A7E94] hover:bg-[#086B7E]">
                  <Calendar size={14} /> Book Appointment
                </Link>
                <a
                  href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
                  className="flex items-center justify-center gap-2 py-4 text-[12px] text-[#5C7A8A] font-sans"
                >
                  <Phone size={14} /> {CLINIC.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export const HOME_HEADER_HEIGHT = UTILITY_H + NAV_H;
