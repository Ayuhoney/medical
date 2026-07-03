import { Link } from "react-router";
import { Award, Shield, CheckCircle, Users, Clock, Heart } from "lucide-react";
import { IMAGES } from "../constants";
import { PageHero, BookingBanner } from "../components/ui";

const doctors = [
  {
    name: "Dr Heshan Dharmarama",
    role: "General Practitioner",
    qualifications: "MBBS, FRACGP",
    bio: "Dr Dharmarama graduated in 2002 and has over 20 years of clinical experience. He has a special interest in skin cancer medicine, chronic disease management and family medicine. He is dedicated to providing high-quality, patient-centred care.",
    image: IMAGES.doctorFemale,
    specialties: ["Skin Cancer Medicine", "General Practice", "Chronic Disease Management", "Family Medicine"],
  },
  {
    name: "Dr Kishani Weerasena",
    role: "General Practitioner & Aesthetic Physician",
    qualifications: "MBBS, FRACGP",
    bio: "Dr Weerasena is a highly experienced GP with a passion for aesthetic medicine and skin health. She provides comprehensive primary care alongside medical-grade aesthetic treatments, combining clinical excellence with an artistic eye.",
    image: IMAGES.heroAesthetic,
    specialties: ["Aesthetic Medicine", "Skin Health", "Women's Health", "Cosmetic Injectables"],
  },
];

const accreditations = [
  { icon: <Shield size={24} className="text-[#0A7E94]" />, name: "AGPAL Accredited Practice", desc: "Our clinic meets the highest standards for general practice in Australia." },
  { icon: <Award size={24} className="text-[#0A7E94]" />, name: "AHPRA Registered", desc: "All our doctors hold current registration with the Australian Health Practitioner Regulation Agency." },
  { icon: <CheckCircle size={24} className="text-[#0A7E94]" />, name: "RACGP Members", desc: "Our GPs are members of the Royal Australian College of General Practitioners." },
  { icon: <Award size={24} className="text-[#0A7E94]" />, name: "Skin Cancer Institute", desc: "Recognised provider of skin cancer detection and management services." },
];

export default function PracticeInfo() {
  return (
    <>
      <PageHero image={IMAGES.clinicInterior} tag="PRACTICE INFO" title="About Our Practice" subtitle="Learn about our clinic, our values, and our experienced medical team." />

      {/* About the clinic */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>WHO WE ARE</p>
            <h2 className="text-[#0D1F2D] leading-tight mb-5" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
              Comprehensive Healthcare
              <br /><em>Since 2002</em>
            </h2>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-4" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              Beach Road Surgery & Skin Clinic has been serving the Batemans Bay community for over two decades. We offer general practice, skin cancer detection and treatment, aesthetic medicine, and laser treatments under one roof.
            </p>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-6" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              Our AGPAL-accredited practice is committed to delivering evidence-based care in a warm, professional environment where every patient feels heard and valued.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users size={18} />, label: "New Patients", desc: "Accepting new patients" },
                { icon: <Clock size={18} />, label: "Open Hours", desc: "Mon–Fri 9am–4:30pm" },
                { icon: <Heart size={18} />, label: "Bulk Billing", desc: "Available for eligible patients" },
                { icon: <Shield size={18} />, label: "AGPAL", desc: "Fully accredited practice" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-3 bg-[#F8FCFD] rounded-xl border border-[rgba(10,126,148,0.08)]">
                  <div className="text-[#0A7E94] mt-0.5">{icon}</div>
                  <div>
                    <p className="text-[#0D1F2D] font-semibold text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>{label}</p>
                    <p className="text-[#5A7A8A] text-xs" style={{ fontFamily: "'Outfit',sans-serif" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-[rgba(10,126,148,0.12)]">
            <img src={IMAGES.clinicLobby} alt="Clinic interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section id="doctors" className="py-20 bg-[#F8FCFD]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>OUR TEAM</p>
            <h2 className="text-[#0D1F2D]" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>Meet Our Doctors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doc) => (
              <div key={doc.name} className="bg-white rounded-2xl overflow-hidden border border-[rgba(10,126,148,0.1)] shadow-sm hover:shadow-lg hover:shadow-[rgba(10,126,148,0.09)] transition-all duration-300">
                <div className="grid grid-cols-5">
                  <div className="col-span-2 relative overflow-hidden min-h-[240px]">
                    <img src={doc.image} alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                  </div>
                  <div className="col-span-3 p-6">
                    <p className="text-[#0A7E94] text-[10px] font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.qualifications}</p>
                    <h3 className="text-[#0D1F2D] text-xl mb-1" style={{ fontFamily: "'DM Serif Display',serif" }}>{doc.name}</h3>
                    <p className="text-[#5A7A8A] text-sm mb-3" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.role}</p>
                    <p className="text-[#2A4A5A] text-xs leading-relaxed mb-4" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.bio}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((s) => (
                        <span key={s} className="bg-[#EDF8FB] text-[#0A7E94] text-[10px] font-semibold px-2.5 py-1 rounded-full" style={{ fontFamily: "'Outfit',sans-serif" }}>{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section id="accreditations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>CREDENTIALS</p>
            <h2 className="text-[#0D1F2D]" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>Accreditations & Memberships</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {accreditations.map(({ icon, name, desc }) => (
              <div key={name} className="bg-[#F8FCFD] rounded-2xl p-6 text-center border border-[rgba(10,126,148,0.1)] hover:bg-[#EDF8FB] transition-colors duration-200">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">{icon}</div>
                <h4 className="text-[#0D1F2D] font-semibold text-sm mb-2" style={{ fontFamily: "'Outfit',sans-serif" }}>{name}</h4>
                <p className="text-[#5A7A8A] text-xs leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="py-20 bg-[#F8FCFD]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>FEES</p>
          <h2 className="text-[#0D1F2D] mb-4" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>Fee & Payment Policy</h2>
          <p className="text-[#5A7A8A] text-base leading-relaxed mb-8" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
            We are a private billing practice. Bulk billing is available for eligible patients including children under 16, concession card holders, and DVA patients. Please contact us for current fee schedules.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { type: "Standard Consultation", note: "Private billing applies" },
              { type: "Bulk Billing", note: "Children, concession, DVA" },
              { type: "Aesthetics", note: "Private billing. Not Medicare." },
            ].map(({ type, note }) => (
              <div key={type} className="bg-white rounded-xl p-5 border border-[rgba(10,126,148,0.1)]">
                <p className="text-[#0D1F2D] font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>{type}</p>
                <p className="text-[#5A7A8A] text-xs" style={{ fontFamily: "'Outfit',sans-serif" }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
