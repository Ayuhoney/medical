import { Link } from "react-router";
import { Heart, Shield, Activity, Brain, Baby, Syringe, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants";
import { PageHero, BookingBanner, TreatmentCard } from "../components/ui";

const services = [
  { icon: <Shield size={20} />, title: "Preventive Healthcare", desc: "Health assessments, cancer screenings, immunisations, and lifestyle advice to keep you well before problems arise." },
  { icon: <Heart size={20} />, title: "Family Medicine", desc: "Comprehensive care for every member of your family, from newborns to elderly patients, with a focus on continuity of care." },
  { icon: <Activity size={20} />, title: "Chronic Disease Management", desc: "Ongoing management of conditions including diabetes, hypertension, asthma, and heart disease with personalised care plans." },
  { icon: <Brain size={20} />, title: "Mental Health Care", desc: "Compassionate support for anxiety, depression, and other mental health conditions with GP Mental Health Care Plans." },
  { icon: <Baby size={20} />, title: "Women's & Child Health", desc: "Dedicated care including antenatal care, Pap smears, contraception, well-baby checks, and childhood immunisations." },
  { icon: <Syringe size={20} />, title: "Immunisations", desc: "Complete vaccination services for all ages including flu vaccines, travel vaccines, and childhood immunisation schedules." },
];

export default function GeneralPractice() {
  return (
    <>
      <PageHero image={IMAGES.heroGP} tag="GENERAL PRACTICE" title={<>Comprehensive Family<br />Healthcare</>} subtitle="Your trusted family doctors providing personalised care for every stage of life." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>OUR APPROACH</p>
            <h2 className="text-[#0D1F2D] leading-tight mb-5" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
              Patient-Centred Care
              <br /><em>for Every Life Stage</em>
            </h2>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-5" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              Our experienced GPs take time to listen, understand, and provide personalised healthcare. We believe in building lasting relationships with our patients to support their long-term health and wellbeing.
            </p>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-8" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              As an AGPAL-accredited practice, we maintain the highest standards in general practice medicine, using evidence-based approaches to deliver outstanding care for individuals and families in Batemans Bay.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["Bulk billing available", "New patients welcome", "Same-day appointments", "HotDoc online booking"].map((t) => (
                <span key={t} className="bg-[#EDF8FB] text-[#0A7E94] text-xs font-semibold px-3 py-1.5 rounded-full border border-[rgba(10,126,148,0.2)]" style={{ fontFamily: "'Outfit',sans-serif" }}>{t}</span>
              ))}
            </div>
            <Link to="/book" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A7E94] text-white font-semibold rounded-xl hover:bg-[#096B7E] transition-all duration-200 shadow-md shadow-[rgba(10,126,148,0.3)]" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Book a GP Visit <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-[rgba(10,126,148,0.12)]">
            <img src={IMAGES.heroGP} alt="Doctor consultation" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FCFD]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>WHAT WE OFFER</p>
            <h2 className="text-[#0D1F2D]" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>General Practice Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => <TreatmentCard key={s.title} {...s} />)}
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
