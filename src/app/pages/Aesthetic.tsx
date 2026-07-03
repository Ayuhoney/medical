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

      <section className="section-py section-white">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
          <div className="image-frame aspect-[4/3]">
            <img src={IMAGES.aestheticFace} alt="Aesthetic treatment" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="eyebrow">THE DIFFERENCE</p>
            <h2 className="heading-section mb-5 md:mb-6">
              Medical Expertise Meets
              <br /><em>Aesthetic Excellence</em>
            </h2>
            <p className="body-text mb-5">
              Our aesthetic treatments are performed by AHPRA-registered medical practitioners, ensuring the highest standard of safety and clinical outcomes. Every treatment plan is customised to your unique goals.
            </p>
            <p className="body-text mb-7 md:mb-8">
              We take a holistic, medically-informed approach that prioritises your skin health alongside aesthetic outcomes — delivering natural-looking results you will love.
            </p>
            <ul className="flex flex-col gap-3 mb-7 md:mb-8">
              {["All treatments performed by registered medical professionals", "Personalised treatment plans for your individual goals", "Highest quality medical-grade products and technologies", "Comprehensive aftercare and follow-up support"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-[#EDF8FB] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Sparkles size={11} className="text-[#0A7E94]" />
                  </span>
                  <span className="text-[#2A4A5A] text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>
            <Link to="/book" className="btn-primary">
              Book Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-py section-muted">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">TREATMENTS</p>
            <h2 className="heading-section">Aesthetic Medicine Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {treatments.map((t) => <TreatmentCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      <section className="section-py-sm section-white">
        <div className="site-container-narrow text-center">
          <div className="bg-[#EDF8FB] rounded-3xl p-8 md:p-10 border border-[rgba(10,126,148,0.12)]">
            <p className="eyebrow">IMPORTANT NOTICE</p>
            <h3 className="font-serif text-[#0D1F2D] text-xl mb-3">Cosmetic Treatments are Not Medicare Rebatable</h3>
            <p className="body-text-sm max-w-2xl mx-auto">
              Aesthetic medicine services are not covered by Medicare or private health insurance. Please contact us for current pricing and to discuss the best treatment options for your goals. A medical consultation is required prior to all aesthetic treatments.
            </p>
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
