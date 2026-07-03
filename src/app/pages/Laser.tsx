import { Link } from "react-router";
import { Zap, Sun, Droplets, Wind, Star, ArrowRight } from "lucide-react";
import { IMAGES } from "../constants";
import { PageHero, BookingBanner, TreatmentCard } from "../components/ui";

const treatments = [
  { icon: <Zap size={20} />, title: "Laser Skin Resurfacing", desc: "Fractional laser treatment to resurface the skin, reduce fine lines, wrinkles, and improve overall skin texture and tone." },
  { icon: <Sun size={20} />, title: "Pigmentation Treatment", desc: "Targeted laser treatment for sunspots, age spots, melasma, and other forms of pigmentation for a clearer complexion." },
  { icon: <Droplets size={20} />, title: "Vascular Lesions", desc: "Laser treatment for redness, spider veins, rosacea, and broken capillaries for clearer, more even-toned skin." },
  { icon: <Star size={20} />, title: "Skin Rejuvenation", desc: "Full face laser rejuvenation to refresh dull, tired skin, stimulate collagen, and restore a youthful, healthy glow." },
  { icon: <Wind size={20} />, title: "Scar Reduction", desc: "Laser therapy for acne scars, surgical scars, and stretch marks to smooth skin texture and reduce their appearance." },
  { icon: <Zap size={20} />, title: "Laser Hair Removal", desc: "Permanent hair reduction using medical-grade laser technology for smooth, hair-free skin on the face and body." },
];

export default function Laser() {
  return (
    <>
      <PageHero image={IMAGES.heroLaser} tag="LASER TREATMENTS" title={<>Advanced Laser<br /><em>Skin Technology</em></>} subtitle="State-of-the-art laser treatments for skin resurfacing, pigmentation, and rejuvenation." />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-4" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>WHY LASER?</p>
            <h2 className="text-[#0D1F2D] leading-tight mb-5" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>
              Precision Technology
              <br /><em>for Beautiful Results</em>
            </h2>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-5" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              Our clinic uses state-of-the-art laser technology operated by trained medical professionals. Laser treatments offer precise, targeted results with minimal downtime for a wide range of skin concerns.
            </p>
            <p className="text-[#5A7A8A] text-base leading-relaxed mb-8" style={{ fontFamily: "'Outfit',sans-serif", fontWeight: 300 }}>
              A consultation is required before all laser treatments to assess your skin type, concerns and goals, and to create a personalised treatment plan for optimal results.
            </p>
            <Link to="/book" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0A7E94] text-white font-semibold rounded-xl hover:bg-[#096B7E] transition-all duration-200 shadow-md shadow-[rgba(10,126,148,0.3)]" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Book Laser Consultation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-[rgba(10,126,148,0.12)]">
            <img src={IMAGES.laserDevice} alt="Laser treatment" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FCFD]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>OUR TREATMENTS</p>
            <h2 className="text-[#0D1F2D]" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "clamp(1.8rem,3vw,2.5rem)" }}>Laser Treatment Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {treatments.map((t) => <TreatmentCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
