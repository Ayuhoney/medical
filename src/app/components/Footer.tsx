import { Link } from "react-router";
import { Phone, MapPin, Clock, Facebook, Instagram, Mail, ArrowRight } from "lucide-react";
import { CLINIC } from "../constants";
import logoImg from "../../assest/Logo.png";

const FF_SERIF = "'DM Serif Display',serif";
const FF_SANS  = "'Inter',sans-serif";

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
      {/* Pre-footer CTA strip */}
      <div className="bg-[#0A7E94]">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold text-lg" style={{ fontFamily: FF_SERIF }}>
              Ready to book an appointment?
            </p>
            <p className="text-white/65 text-[13px]" style={{ fontFamily: FF_SANS }}>
              Accepting new patients — call us or book online.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href={`tel:${CLINIC.phone.replace(/\s/g,"")}`}
              className="flex items-center gap-2 px-5 py-2.5 bg-white text-[#0A7E94] text-[13px] font-semibold rounded-xl hover:bg-[#EDF8FB] transition-colors"
              style={{ fontFamily: FF_SANS }}>
              <Phone size={13} /> {CLINIC.phone}
            </a>
            <Link to="/book"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#0D1F2D] text-white text-[13px] font-semibold rounded-xl hover:bg-[#162D3F] transition-colors"
              style={{ fontFamily: FF_SANS }}>
              Book Online <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-screen-xl mx-auto px-5 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src={logoImg} alt="Logo" className="h-9 w-auto object-contain flex-shrink-0" />
              <div className="flex flex-col leading-none gap-0.5">
                <span className="font-semibold text-white" style={{ fontFamily: FF_SERIF, fontSize: "0.95rem" }}>Beach Road Surgery</span>
                <span className="font-medium text-[#7EC8D8] tracking-widest uppercase"
                  style={{ fontFamily: FF_SANS, fontSize: "0.58rem", letterSpacing: "0.12em" }}>
                  &amp; Skin Clinic
                </span>
              </div>
            </Link>
            <p className="text-white/40 text-[13px] leading-relaxed mb-5"
              style={{ fontFamily: FF_SANS, fontWeight: 300 }}>
              Personalised healthcare and advanced skin treatments for the Batemans Bay community since 2002.
            </p>
            <div className="flex gap-2">
              {[{ Icon: Facebook, href: "#" }, { Icon: Instagram, href: "#" }, { Icon: Mail, href: `mailto:${CLINIC.email}` }].map(({ Icon, href }, i) => (
                <a key={i} href={href}
                  className="w-9 h-9 rounded-lg bg-white/6 flex items-center justify-center hover:bg-[#0A7E94] transition-colors duration-200">
                  <Icon size={14} className="text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white/35 text-[10px] font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link to={l.path}
                    className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors duration-150"
                    style={{ fontFamily: FF_SANS }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/35 text-[10px] font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link to="/book"
                    className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors duration-150"
                    style={{ fontFamily: FF_SANS }}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/35 text-[10px] font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: FF_SANS, letterSpacing: "0.14em" }}>Contact</h4>
            <div className="space-y-4">
              {[
                { Icon: MapPin, text: "116 Beach Road\nBatemans Bay NSW 2536" },
                { Icon: Phone, text: CLINIC.phone, href: `tel:${CLINIC.phone.replace(/\s/g,"")}` },
                { Icon: Clock, text: "Mon – Fri\n9:00 AM – 4:30 PM" },
              ].map(({ Icon, text, href }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={13} className="text-[#0A7E94] mt-0.5 flex-shrink-0" />
                  {href
                    ? <a href={href} className="text-white/45 text-[13px] hover:text-[#7EC8D8] transition-colors whitespace-pre-line" style={{ fontFamily: FF_SANS }}>{text}</a>
                    : <p className="text-white/45 text-[13px] whitespace-pre-line" style={{ fontFamily: FF_SANS }}>{text}</p>
                  }
                </div>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/6">
              <p className="text-white/20 text-[10px] uppercase tracking-widest" style={{ fontFamily: FF_SANS }}>
                AGPAL Accredited · AHPRA Registered
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/6">
        <div className="max-w-screen-xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/22 text-[12px]" style={{ fontFamily: FF_SANS }}>
            © 2024 Beach Road Surgery &amp; Skin Clinic. All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Sitemap"].map((l) => (
              <Link key={l} to="#"
                className="text-white/22 text-[12px] hover:text-white/45 transition-colors"
                style={{ fontFamily: FF_SANS }}>
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
