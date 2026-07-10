import { Link } from "react-router";
import { Phone, MapPin, Clock, Facebook, Instagram, Mail, ArrowRight } from "lucide-react";
import { useClinic } from "@/app/clinic/ClinicContext";
import { Logo } from "./Logo";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "Practice Info", path: "/practice-info" },
  { label: "General Practice", path: "/general-practice" },
  { label: "Skin Cancer Clinic", path: "/skin-cancer" },
  { label: "Aesthetic Medicine", path: "/aesthetic" },
  { label: "Laser Treatments", path: "/laser" },
  { label: "Online Store", path: "/store" },
  { label: "Contact", path: "/contact" },
];

const services = [
  { label: "Full Body Skin Check", path: "/skin-cancer#full-body-skin-check" },
  { label: "Mole Monitoring", path: "/skin-cancer#mole-monitoring" },
  { label: "Cosmetic Injectables", path: "/aesthetic#cosmetic-injectables" },
  { label: "Fractional RF / Microneedling", path: "/aesthetic#fractional-rf" },
  { label: "HIFU Therapy", path: "/aesthetic#hifu" },
  { label: "LED Phototherapy", path: "/aesthetic#led-phototherapy" },
  { label: "Laser Skin Resurfacing", path: "/laser#laser-resurfacing" },
  { label: "Skin Care Products", path: "/store" },
];

export default function Footer() {
  const { clinic: CLINIC, hours } = useClinic();
  return (
    <footer className="bg-[#080F14] text-white">
      {/* Pre-footer CTA */}
      <div className="bg-[#0A7E94] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="site-container py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
          <div>
            <p className="text-white font-serif font-semibold text-lg md:text-xl">Ready to book an appointment?</p>
            <p className="text-white/65 text-[13px] font-sans mt-1">Accepting new patients — call us or book online.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#0A7E94] text-[13px] font-semibold rounded-full hover:bg-[#EDF8FB] transition-all duration-300 font-sans hover:scale-[1.02] w-full sm:w-auto"
            >
              <Phone size={13} /> {CLINIC.phone}
            </a>
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0D1F2D] text-white text-[13px] font-semibold rounded-full hover:bg-[#162D3F] transition-all duration-300 font-sans hover:scale-[1.02] w-full sm:w-auto"
            >
              Book Online <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Newsletter bar — mockwebsites Footer pattern */}
      <div className="border-b border-white/[0.08]">
        <div className="site-container py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-serif text-xl font-light text-white mb-1">Stay in the know.</p>
            <p className="text-white/45 text-sm font-sans">
              Clinic news, health tips, and skin care updates — from our Batemans Bay team.
            </p>
          </div>
          <form
            className="flex gap-0 w-full md:w-auto md:min-w-[18rem]"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/[0.06] border border-white/15 focus:border-[#7EC8D8] focus:outline-none text-white placeholder-white/30 px-5 py-3 text-sm transition-colors font-sans"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#0A7E94] hover:bg-[#086B7E] text-white text-xs tracking-[0.2em] uppercase font-medium transition-colors flex-shrink-0 font-sans"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Main footer */}
      <div className="site-container pt-16 md:pt-20 pb-10 md:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo light showWordmark layout="stacked" className="mb-6" />
            <p className="text-white/40 text-[13px] leading-relaxed mb-6 font-sans font-light">
              Personalised healthcare and advanced skin treatments for the Batemans Bay community since 2002.
            </p>
            <div className="flex gap-2.5">
              {[{ Icon: Facebook, href: CLINIC.facebook }, { Icon: Instagram, href: CLINIC.instagram }, { Icon: Mail, href: `mailto:${CLINIC.email}` }].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-xl bg-white/6 flex items-center justify-center hover:bg-[#0A7E94] transition-all duration-300 hover:scale-105"
                >
                  <Icon size={14} className="text-white/50" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.14em] mb-6 font-sans">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path} className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors duration-200 font-sans">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.14em] mb-6 font-sans">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors duration-200 font-sans">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white/30 text-[10px] font-bold uppercase tracking-[0.14em] mb-6 font-sans">Contact</h4>
            <div className="space-y-5">
              {[
                { Icon: MapPin, text: "116 Beach Road\nBatemans Bay NSW 2536" },
                { Icon: Phone, text: CLINIC.phone, href: `tel:${CLINIC.phone.replace(/\s/g, "")}` },
                { Icon: Mail, text: CLINIC.email, href: `mailto:${CLINIC.email}` },
                { Icon: Clock, text: "Mon – Fri: 9:00 AM – 4:30 PM\nSat: 9:00 AM – 12:30 PM" },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={13} className="text-[#0A7E94] mt-0.5 flex-shrink-0" />
                  {href
                    ? <a href={href} className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors whitespace-pre-line font-sans">{text}</a>
                    : <p className="text-white/45 text-[13px] whitespace-pre-line font-sans">{text}</p>
                  }
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-white/6">
              <p className="text-white/20 text-[10px] uppercase tracking-[0.12em] font-sans">
                AGPAL Accredited · AHPRA Registered
              </p>
            </div>
          </div>
        </div>

        {/* Certifications bar — mockwebsites pattern */}
        <div className="border-t border-white/[0.08] pt-8 mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {["AGPAL Accredited", "AHPRA Registered", "RACGP Members", "Skin Cancer Institute"].map((cert) => (
              <span key={cert} className="text-[10px] tracking-[0.2em] uppercase text-white/30 flex items-center gap-2 font-sans">
                <span className="w-1 h-1 rounded-full bg-[#7EC8D8]" />
                {cert}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-white/25 font-sans">
            &copy; {new Date().getFullYear()} Beach Road Surgery &amp; Skin Clinic. All rights reserved.
          </p>
        </div>
      </div>

      <div className="border-t border-white/6">
        <div className="site-container py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-[12px] font-sans sm:hidden">
            &copy; {new Date().getFullYear()} Beach Road Surgery &amp; Skin Clinic.
          </p>
          <div className="flex gap-5">
            {[{ label: "Privacy Policy", path: "/practice-info#privacy" }, { label: "Terms of Use", path: "/contact" }, { label: "Sitemap", path: "/" }].map((l) => (
              <Link key={l.label} to={l.path} className="text-white/22 text-[12px] hover:text-white/45 transition-colors font-sans">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
