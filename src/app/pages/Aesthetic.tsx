import { Link } from "react-router";
import { Sparkles, Zap, Sun, Droplets, Wind, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants";
import { PageHero, BookingBanner, TreatmentCard } from "../components/ui";

const treatments = [
  { icon: <Sparkles size={20} />, title: "Cosmetic Injectables", desc: "Anti-wrinkle injections and dermal fillers administered by our experienced medical aesthetic physician for natural-looking results." },
  { icon: <Zap size={20} />, title: "Fractional RF / Microneedling", desc: "Radiofrequency microneedling for skin tightening, collagen stimulation, and improvement of texture, pores, and scars." },
  { icon: <Sun size={20} />, title: "LED Phototherapy", desc: "Non-invasive LED light treatment for acne, inflammation, collagen production, and overall skin rejuvenation." },
  { icon: <Zap size={20} />, title: "HIFU Therapy", desc: "High-Intensity Focused Ultrasound for non-surgical face lifting, skin tightening, and collagen remodelling." },
  { icon: <Wind size={20} />, title: "Non-Surgical Face Lifts", desc: "Combination treatments to lift, contour, and rejuvenate the face without surgery for a refreshed, youthful appearance." },
  { icon: <Droplets size={20} />, title: "Collagen Induction Therapy", desc: "Medical microneedling to stimulate collagen and elastin production, improving fine lines, scars and skin texture." },
  { icon: <Sparkles size={20} />, title: "Fibroblast Plasma", desc: "Advanced plasma treatment for skin tightening, wrinkle reduction, and lifting of eyelids and other areas." },
  { icon: <Droplets size={20} />, title: "HydroMicrodermabrasion", desc: "Deep hydrating exfoliation treatment that cleanses, extracts, and infuses the skin with nourishing serums." },
];

export default function Aesthetic() {
  return (
    <>
      <PageHero image={IMAGES.heroAesthetic} tag="AESTHETIC MEDICINE" title={<>Medical-Grade<br /><em>Aesthetic Treatments</em></>} subtitle="Advanced cosmetic treatments performed by qualified medical professionals for beautiful, natural results." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-[rgba(10,126,148,0.12)]">
            <img src={IMAGES.aestheticFace} alt="Aesthetic treatment" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>THE DIFFERENCE</p>
            <h2 className="text-[#0D1F2D] leading-tight mb-5" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
              Medical Expertise Meets
              <br /><em>Aesthetic Excellence</em>
            </h2>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-5" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              Our aesthetic treatments are performed by AHPRA-registered medical practitioners, ensuring the highest standard of safety and clinical outcomes. Every treatment plan is customised to your unique goals.
            </p>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-7" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              We take a holistic, medically-informed approach that prioritises your skin health alongside aesthetic outcomes — delivering natural-looking results you will love.
            </p>
            <ul className="flex flex-col gap-3 mb-7">
              {["All treatments performed by registered medical professionals", "Personalised treatment plans for your individual goals", "Highest quality medical-grade products and technologies", "Comprehensive aftercare and follow-up support"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EDF8FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles size={11} className="text-[#0A7E94]" />
                  </span>
                  <span className="text-[#2A4A5A] text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/book" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A7E94] text-white font-semibold rounded-xl hover:bg-[#096B7E] transition-all duration-200 shadow-md shadow-[rgba(10,126,148,0.3)]" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FCFD]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>TREATMENTS</p>
            <h2 className="text-[#0D1F2D]" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>Aesthetic Medicine Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {treatments.map((t) => <TreatmentCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-[#EDF8FB] rounded-2xl p-8 border border-[rgba(10,126,148,0.15)]">
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>IMPORTANT NOTICE</p>
            <h3 className="text-[#0D1F2D] text-xl mb-3" style={{ fontFamily: "'DM Serif Display',serif" }}>Cosmetic Treatments are Not Medicare Rebatable</h3>
            <p className="text-[#5A7A8A] text-sm leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Aesthetic medicine services are not covered by Medicare or private health insurance. Please contact us for current pricing and to discuss the best treatment options for your goals. A medical consultation is required prior to all aesthetic treatments.
            </p>
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
