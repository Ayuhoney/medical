import { Link } from "react-router";
import { Award, Shield, CheckCircle, Users, Clock, Heart, FileText, Stethoscope, Lock } from "lucide-react";
import { IMAGES, CLINIC } from "../constants";
import { PageHero, BookingBanner } from "../components/ui";
import { PolicySection } from "../components/ServiceDetailSection";

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

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Practice Manager",
    bio: "Sarah oversees daily clinic operations and ensures every patient receives a warm, efficient experience from arrival to departure.",
    image: IMAGES.teamAdmin,
  },
  {
    name: "Emma Collins",
    role: "Registered Nurse",
    bio: "Emma supports our doctors with immunisations, wound care, skin procedures, and patient education across all clinical areas.",
    image: IMAGES.teamNurse,
  },
  {
    name: "Jessica Tran",
    role: "Senior Receptionist",
    bio: "Jessica is your first point of contact — coordinating appointments, managing referrals, and helping patients navigate our services.",
    image: IMAGES.teamReception,
  },
];

export default function PracticeInfo() {
  return (
    <>
      <PageHero image={IMAGES.clinicInterior} tag="PRACTICE INFO" title="About Our Practice" subtitle="Learn about our clinic, our values, and our experienced medical team." />

      <section id="about" className="section-py section-white scroll-mt-28">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2 className="heading-section mb-5 md:mb-6">
              Comprehensive Healthcare
              <br /><em>Since 2002</em>
            </h2>
            <p className="body-text mb-4">
              Beach Road Surgery & Skin Clinic has been serving the Batemans Bay community for over two decades. We offer general practice, skin cancer detection and treatment, aesthetic medicine, and laser treatments under one roof.
            </p>
            <p className="body-text mb-6 md:mb-8">
              Our AGPAL-accredited practice is committed to delivering evidence-based care in a warm, professional environment where every patient feels heard and valued.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users size={18} />, label: "New Patients", desc: "Accepting new patients" },
                { icon: <Clock size={18} />, label: "Open Hours", desc: "Mon–Fri 9am–4:30pm" },
                { icon: <Heart size={18} />, label: "Bulk Billing", desc: "Available for eligible patients" },
                { icon: <Shield size={18} />, label: "AGPAL", desc: "Fully accredited practice" },
              ].map(({ icon, label, desc }) => (
                <div key={label} className="flex items-start gap-3 p-4 card-surface">
                  <div className="text-[#0A7E94] mt-0.5">{icon}</div>
                  <div>
                    <p className="text-[#0D1F2D] font-semibold text-sm font-sans">{label}</p>
                    <p className="text-[#5A7A8A] text-xs font-sans">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-frame aspect-[4/3]">
            <img src={IMAGES.clinicLobby} alt="Clinic interior" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section id="doctors" className="section-py section-muted scroll-mt-28">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">OUR TEAM</p>
            <h2 className="heading-section">Meet Our Doctors</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {doctors.map((doc) => (
              <div key={doc.name} className="card-premium hover:-translate-y-1">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="doctor-card-media">
                    <img src={doc.image} alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-7">
                    <p className="eyebrow mb-2 !text-[10px]">{doc.qualifications}</p>
                    <h3 className="font-serif text-[#0D1F2D] text-xl mb-1">{doc.name}</h3>
                    <p className="body-text-sm mb-3">{doc.role}</p>
                    <p className="text-[#2A4A5A] text-xs leading-relaxed mb-4 font-sans">{doc.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {doc.specialties.map((s) => (
                        <span key={s} className="bg-[#EDF8FB] text-[#0A7E94] text-[10px] font-semibold px-3 py-1 rounded-full font-sans">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="section-py section-white scroll-mt-28">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">SUPPORT TEAM</p>
            <h2 className="heading-section">Our Clinical &amp; Admin Team</h2>
            <p className="body-text max-w-2xl mx-auto mt-4">
              Behind every consultation is a dedicated team committed to making your visit smooth, welcoming, and professionally managed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card card-premium hover:-translate-y-1">
                <div className="team-card-media">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="p-5 md:p-6">
                  <h3 className="font-serif text-[#0D1F2D] text-lg mb-1">{member.name}</h3>
                  <p className="text-[#0A7E94] text-xs font-semibold uppercase tracking-wider mb-2 font-sans">{member.role}</p>
                  <p className="body-text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="accreditations" className="section-py section-muted scroll-mt-28">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">CREDENTIALS</p>
            <h2 className="heading-section">Accreditations & Memberships</h2>
          </div>
          <div className="card-grid-4">
            {accreditations.map(({ icon, name, desc }) => (
              <div key={name} className="card-surface p-6 md:p-7 text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mx-auto mb-4 shadow-sm">{icon}</div>
                <h4 className="text-[#0D1F2D] font-semibold text-sm mb-2 font-sans">{name}</h4>
                <p className="body-text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fees" className="section-py section-white scroll-mt-28">
        <div className="site-container-narrow text-center">
          <p className="eyebrow">FEES</p>
          <h2 className="heading-section mb-4 md:mb-5">Fee & Payment Policy</h2>
          <p className="body-text mb-8 md:mb-10">
            We are a private billing practice. Bulk billing is available for eligible patients including children under 16, concession card holders, and DVA patients. Please contact us for current fee schedules.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {[
              { type: "Standard Consultation", note: "Private billing applies" },
              { type: "Bulk Billing", note: "Children, concession, DVA" },
              { type: "Aesthetics", note: "Private billing. Not Medicare." },
            ].map(({ type, note }) => (
              <div key={type} className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-[rgba(10,126,148,0.08)] shadow-sm">
                <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">{type}</p>
                <p className="body-text-sm">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PolicySection id="prescriptions" tag="PRESCRIPTIONS" title="Prescription Policy" muted>
        <p className="body-text">
          Repeat prescriptions require a current consultation or review with your doctor. For patient safety, we do not routinely provide repeats without an appointment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="card-surface p-5 flex gap-4">
            <FileText size={22} className="text-[#0A7E94] shrink-0 mt-0.5" />
            <div>
              <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">Standard Requests</p>
              <p className="body-text-sm">Please allow 48 hours for prescription requests submitted via reception.</p>
            </div>
          </div>
          <div className="card-surface p-5 flex gap-4">
            <Clock size={22} className="text-[#0A7E94] shrink-0 mt-0.5" />
            <div>
              <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">Urgent Requests</p>
              <p className="body-text-sm">Call reception on {CLINIC.phone} for same-day urgent prescription needs.</p>
            </div>
          </div>
        </div>
      </PolicySection>

      <PolicySection id="referrals" tag="REFERRALS" title="Specialist Referrals">
        <p className="body-text">
          Our GPs provide referrals to specialists when clinically appropriate. Referral letters are prepared following a consultation and can be collected from reception or sent electronically where available.
        </p>
        <div className="card-surface p-5 md:p-6 flex gap-4 mt-6">
          <Stethoscope size={22} className="text-[#0A7E94] shrink-0 mt-0.5" />
          <div>
            <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">Updated Referrals</p>
            <p className="body-text-sm">
              If you need an updated referral or have questions about a specialist appointment, please{" "}
              <Link to="/book" className="text-[#0A7E94] font-semibold hover:underline">book a GP visit</Link>{" "}
              so your doctor can review your care plan.
            </p>
          </div>
        </div>
      </PolicySection>

      <PolicySection id="privacy" tag="PRIVACY" title="Privacy Policy" muted>
        <p className="body-text">
          Beach Road Surgery &amp; Skin Clinic complies with the Australian Privacy Principles. Your personal and health information is collected only to provide medical care and is stored securely.
        </p>
        <div className="card-surface p-5 md:p-6 flex gap-4 mt-6">
          <Lock size={22} className="text-[#0A7E94] shrink-0 mt-0.5" />
          <div>
            <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">Your Information</p>
            <p className="body-text-sm">
              We do not share your information without consent except where required by law. For a full privacy statement or to request access to your records, please contact reception.
            </p>
          </div>
        </div>
      </PolicySection>

      <BookingBanner />
    </>
  );
}
