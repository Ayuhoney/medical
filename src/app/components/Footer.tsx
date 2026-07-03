import { Link } from "react-router";
import { Phone, MapPin, Clock, Facebook, Instagram, Mail, ArrowRight } from "lucide-react";
import { CLINIC } from "../constants";
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
  "Full Body Skin Check",
  "Mole Monitoring",
  "Cosmetic Injectables",
  "Fractional RF / Microneedling",
  "HIFU Therapy",
  "LED Phototherapy",
  "Laser Skin Resurfacing",
  "Skin Care Products",
];

export default function Footer() {
  return (
    <footer className="bg-[#080F14]">
      {/* Pre-footer CTA */}
      <div className="bg-[#0A7E94] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="site-container py-8 md:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 relative z-10">
          <div>
            <p className="text-white font-serif font-semibold text-lg md:text-xl">Ready to book an appointment?</p>
            <p className="text-white/65 text-[13px] font-sans mt-1">Accepting new patients — call us or book online.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={`tel:${CLINIC.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#0A7E94] text-[13px] font-semibold rounded-full hover:bg-[#EDF8FB] transition-all duration-300 font-sans hover:scale-[1.02]"
            >
              <Phone size={13} /> {CLINIC.phone}
            </a>
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1F2D] text-white text-[13px] font-semibold rounded-full hover:bg-[#162D3F] transition-all duration-300 font-sans hover:scale-[1.02]"
            >
              Book Online <ArrowRight size={13} />
            </Link>
          </div>
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
              {[{ Icon: Facebook, href: "#" }, { Icon: Instagram, href: "#" }, { Icon: Mail, href: `mailto:${CLINIC.email}` }].map(({ Icon, href }, i) => (
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
                <li key={s}>
                  <Link to="/book" className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors duration-200 font-sans">
                    {s}
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
                { Icon: Clock, text: "Mon – Fri\n9:00 AM – 4:30 PM" },
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
      </div>

      <div className="border-t border-white/6">
        <div className="site-container py-5 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-[12px] font-sans">
            © 2024 Beach Road Surgery &amp; Skin Clinic. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <Link key={l} to="#" className="text-white/22 text-[12px] hover:text-white/45 transition-colors font-sans">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
