import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router";
import { Award, Shield, CheckCircle, Users, Clock, Heart, FileText, Stethoscope, Lock, Loader2 } from "lucide-react";
import { IMAGES, CLINIC } from "@/app/constants";
import { PageHero, BookingBanner } from "@/app/components/ui";
import { PolicySection } from "@/app/components/ServiceDetailSection";
import { api } from "@/app/api";
import type { TeamMember } from "@/app/api/types";
import { doctors as fallbackDoctors, teamMembers as fallbackTeamMembers, VISION, MISSION, VALUES } from "@/app/data/team";

const accreditations = [
  { icon: <Shield size={24} className="text-[#0A7E94]" />, name: "AGPAL Accredited Practice", desc: "Our clinic meets the highest standards for general practice in Australia." },
  { icon: <Award size={24} className="text-[#0A7E94]" />, name: "AHPRA Registered", desc: "All our doctors hold current registration with the Australian Health Practitioner Regulation Agency." },
  { icon: <CheckCircle size={24} className="text-[#0A7E94]" />, name: "RACGP Members", desc: "Our GPs are members of the Royal Australian College of General Practitioners." },
  { icon: <Award size={24} className="text-[#0A7E94]" />, name: "Skin Cancer Institute", desc: "Recognised provider of skin cancer detection and management services." },
];

export default function PracticeInfo() {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.team.list()
      .then((data) => {
        if (data && data.length > 0) {
          setTeam(data);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const doctorsList = useMemo(() => {
    const list = team.filter((m) => m.kind === "doctor");
    if (list.length > 0) return list;
    // Map fallback doctors to TeamMember type
    return fallbackDoctors.map((doc, index) => ({
      id: `fallback_doc_${index}`,
      kind: "doctor" as const,
      name: doc.name,
      role: doc.role,
      qualifications: doc.qualifications,
      registration: doc.registration,
      bio: doc.bio,
      image: doc.image,
      specialties: doc.specialties,
      education: doc.education,
    }));
  }, [team]);

  const supportStaffList = useMemo(() => {
    const list = team.filter((m) => m.kind === "staff");
    if (list.length > 0) return list;
    // Map fallback staff to TeamMember type
    return fallbackTeamMembers.map((staff, index) => ({
      id: `fallback_staff_${index}`,
      kind: "staff" as const,
      name: staff.name,
      role: staff.role,
      bio: staff.bio,
      image: staff.image,
      credentials: staff.credentials,
    }));
  }, [team]);

  return (
    <>
      <PageHero image={IMAGES.clinicInterior} tag="PRACTICE INFO" title="About Our Practice" subtitle="Learn about our clinic, our values, and our experienced medical team." />

      <section id="about" className="section-py section-white scroll-mt-28">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
          <div>
            <p className="eyebrow">WHO WE ARE</p>
            <h2 className="heading-section mb-5 md:mb-6">
              Comprehensive Healthcare
              <br /><em>For the Eurobodalla</em>
            </h2>
            <p className="body-text mb-4">
              We are a unique clinic, passionate about providing personalised and comprehensive General Practice and skin care treatment to our local community. Our aim is to bring world-class knowledge and skills combined with the latest technology to the Eurobodalla community — general practice, skin cancer detection and treatment, aesthetic medicine, and medical grade laser under one roof.
            </p>
            <p className="body-text mb-6 md:mb-8">
              Our AGPAL-accredited practice believes in compassionate care and excellent service that transcends conventional healthcare. Our doctors each bring more than 20 years of clinical experience.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Users size={18} />, label: "New Patients", desc: "Accepting new patients" },
                { icon: <Clock size={18} />, label: "Open Hours", desc: "Mon–Fri 9am–4:30pm · Sat 9am–12:30pm" },
                { icon: <Heart size={18} />, label: "Health Assessments", desc: "Bulk billed for eligible patients" },
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
          <div className="grid grid-cols-1 gap-8 md:gap-10 max-w-[1100px] mx-auto">
            {doctorsList.map((doc) => (
              <div key={doc.name} className="card-premium hover:-translate-y-1">
                <div className="grid grid-cols-1 md:grid-cols-5">
                  <div className="doctor-card-media md:col-span-2">
                    <img src={doc.image} alt={doc.name} className="absolute inset-0 w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/5" />
                  </div>
                  <div className="md:col-span-3 p-6 md:p-7">
                    <p className="eyebrow mb-2 !text-[10px]">{doc.qualifications}</p>
                    <h3 className="font-serif text-[#0D1F2D] text-xl mb-1">{doc.name}</h3>
                    <p className="body-text-sm mb-1">{doc.role}</p>
                    {doc.registration && (
                      <p className="text-[#9AB0BA] text-[10px] mb-3 font-sans">{doc.registration}</p>
                    )}
                    <p className="text-[#2A4A5A] text-xs leading-relaxed mb-4 font-sans">{doc.bio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {doc.specialties?.map((s) => (
                        <span key={s} className="bg-[#EDF8FB] text-[#0A7E94] text-[10px] font-semibold px-3 py-1 rounded-full font-sans">{s}</span>
                      ))}
                    </div>
                    {doc.education && doc.education.length > 0 && (
                      <details className="group">
                        <summary className="cursor-pointer text-[#0A7E94] text-xs font-semibold font-sans list-none select-none">
                          Education &amp; Training <span className="group-open:hidden">+</span><span className="hidden group-open:inline">−</span>
                        </summary>
                        <ul className="mt-3 space-y-1.5">
                          {doc.education.map((e) => (
                            <li key={e} className="flex items-start gap-2 text-[#2A4A5A] text-xs font-sans">
                              <CheckCircle size={12} className="text-[#0A7E94] mt-0.5 shrink-0" /> {e}
                            </li>
                          ))}
                        </ul>
                      </details>
                    )}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-[1200px] mx-auto">
            {supportStaffList.map((member) => (
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

      <section id="values" className="section-py section-muted scroll-mt-28">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">VISION &amp; VALUES</p>
            <h2 className="heading-section mb-4">What We Stand For</h2>
            <p className="body-text max-w-3xl mx-auto">{VISION}</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-5 max-w-[900px] mx-auto mb-12">
            {[
              { letter: "P", word: "Prevention" },
              { letter: "E", word: "Early Detection" },
              { letter: "T", word: "Treatment" },
              { letter: "E", word: "Education" },
            ].map(({ letter, word }, i) => (
              <div key={i} className="card-surface p-5 md:p-6 text-center hover:-translate-y-1 transition-transform duration-300">
                <p className="font-serif text-[#0A7E94] text-3xl md:text-4xl mb-1">{letter}</p>
                <p className="text-[#0D1F2D] text-xs md:text-sm font-semibold font-sans">{word}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {VALUES.map(({ name, desc }) => (
              <div key={name} className="card-surface p-6 md:p-7">
                <h4 className="text-[#0D1F2D] font-semibold text-sm mb-2 font-sans">{name}</h4>
                <p className="body-text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <p className="body-text-sm text-center max-w-2xl mx-auto mt-10 italic">{MISSION}</p>
        </div>
      </section>

      <section id="accreditations" className="section-py section-white scroll-mt-28">
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

      <section id="fees" className="section-py section-muted scroll-mt-28">
        <div className="site-container-narrow">
          <div className="text-center">
            <p className="eyebrow">FEES</p>
            <h2 className="heading-section mb-4 md:mb-5">Fee & Payment Policy</h2>
            <p className="body-text mb-8 md:mb-10">
              We are a fully private billing practice and appreciate full payment on the day of consultation. We use Medicare online, so your rebate is refunded promptly. Payment options include cash, EFTPOS and credit card. Health assessments are the only bulk-billed service.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mb-6">
            {[
              { type: "Standard Consultation (< 15 min)", note: "$110 — Medicare rebate up to $45.05. Concession $100." },
              { type: "Long Consultation (< 30 min)", note: "$175 — Medicare rebate up to $87.10. Concession $165." },
              { type: "Extended Consultation (40+ min)", note: "$250 — Medicare rebate up to $128.35. Concession $240." },
              { type: "TeleHealth (up to 10 min)", note: "$95 — requires prior arrangement with the doctor. Medicare rebate may apply." },
              { type: "Skin Check — Standard (< 15 min)", note: "$175 — Medicare rebate up to $45.05. Concession $165." },
              { type: "Skin Check — Long (< 30 min)", note: "$250 — Medicare rebate up to $87.70. Concession $240." },
              { type: "Total Body Photography (MoleMax HD)", note: "$350 — no Medicare rebate, not covered by DVA." },
              { type: "Photodynamic Therapy (face & scalp)", note: "$375 — no Medicare rebate, not covered by DVA." },
              { type: "Medical Grade Facials", note: "Signature facial $225. Anti-aging, acne & pigmentation facials $200. Clinical peels from $200." },
              { type: "Eyebrow Microblading", note: "New cosmetic tattoo $800 (two visits). Cover up $450. Touch up $350. By Dermal Therapist Larissa Noake." },
            ].map(({ type, note }) => (
              <div key={type} className="bg-white rounded-2xl md:rounded-3xl p-5 md:p-6 border border-[rgba(10,126,148,0.08)] shadow-sm">
                <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">{type}</p>
                <p className="body-text-sm">{note}</p>
              </div>
            ))}
          </div>
          <p className="body-text-sm text-center">
            Cosmetic procedures are privately billed with no Medicare rebate — the $100 cosmetic consult fee is deducted from the treatment cost if performed on the day. We do not bulk bill DVA patients or care plan consultations. Discounted laser and LED packages are available — ask our friendly team. Fees are current from 1 July 2026 — please check before booking.
          </p>
        </div>
      </section>

      <PolicySection id="booking-policy" tag="BOOKING" title="Booking & Cancellation Policy">
        <p className="body-text">
          Appointments can be made by phone, through our online booking system, or in person at the clinic. Please arrive a little before your scheduled time and bring your Medicare card. For health and safety reasons, children cannot accompany patients into treatment rooms.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          <div className="card-surface p-5">
            <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">48-Hour Notice</p>
            <p className="body-text-sm">A minimum of 48 hours notice is required to cancel or reschedule, so your appointment can be reallocated to another patient.</p>
          </div>
          <div className="card-surface p-5">
            <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">Late Cancellation Fees</p>
            <p className="body-text-sm">Procedures (PDT, skin cancer surgery, aesthetic or cosmetic treatments) cancelled within 48 hours may incur a fee of 50% of the treatment cost. A $50 no-show fee applies to other missed appointments.</p>
          </div>
          <div className="card-surface p-5">
            <p className="text-[#0D1F2D] font-semibold text-sm mb-1 font-sans">Pre-Paid Treatments</p>
            <p className="body-text-sm">Pre-paid treatments and packages are non-refundable, not transferable to other individuals, and must be used within 12 months of purchase.</p>
          </div>
        </div>
      </PolicySection>

      <PolicySection id="results" tag="RESULTS & RECORDS" title="Test Results & Health Records" muted>
        <p className="body-text">
          Test results are downloaded daily into our system. Depending on your doctor's review: no action means your GP will discuss results at your next visit; non-urgent results mean reception will call to arrange an appointment; urgent results mean your GP will phone you or arrange an urgent appointment.
        </p>
        <p className="body-text mt-4">
          Our practice uses a secure electronic filing system for patient health records, and each staff member has a unique password. Patients registered for My Health Record can access their medical information there. To request information from your records, email reception — it will be provided once your GP authorises the release.
        </p>
      </PolicySection>

      <PolicySection id="communication" tag="COMMUNICATION" title="Communication Policy">
        <p className="body-text">
          You can reach us face to face, by telephone ({CLINIC.phone}), fax ({CLINIC.fax}) or post. Reception staff use a triage system and a three-point identity check on calls. It is often not possible to speak to a doctor at the time of calling — a secure message is sent and your call returned when possible, with exceptions for urgent matters.
        </p>
        <p className="body-text mt-4">
          Email is not a secure form of communication — we do not initiate clinical communication via email, and staff respond to non-clinical emails within 5 business days. SMS reminders are sent for appointments, health reminders and recalls; let us know if you'd like to opt out. Interpreter services are available, including the National Relay Service for hearing-impaired patients and the Translation and Interpreter Service (Doctors Priority Line 1300 131 450).
        </p>
      </PolicySection>

      <PolicySection id="zero-tolerance" tag="ZERO TOLERANCE" title="Zero Tolerance Policy" muted>
        <p className="body-text">
          All our staff are trained and dedicated to serve you, and you will be treated with courtesy and respect at all times. In return, we ask that you — and anyone accompanying you — treat our administrative and clinical staff with the same courtesy and respect.
        </p>
        <p className="body-text mt-4">
          We have a zero tolerance approach to any verbal, physical or counterproductive behaviour towards our staff or patients. Abuse and/or violence will not be tolerated; in such events the police may be called, which may result in a ban from our practice.
        </p>
      </PolicySection>

      <PolicySection id="prescriptions" tag="PRESCRIPTIONS" title="Prescription Policy">
        <p className="body-text">
          Repeat prescriptions require a current consultation or review with your doctor. For patient safety, we do not routinely provide repeats without an appointment. Please do not request scripts, referrals or other clinical information via email.
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

      <PolicySection id="referrals" tag="REFERRALS" title="Specialist Referrals" muted>
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

      <PolicySection id="privacy" tag="PRIVACY" title="Privacy Policy">
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
