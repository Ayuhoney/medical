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

      <section className="section-py section-white">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
          <div>
            <p className="eyebrow">WHY LASER?</p>
            <h2 className="heading-section mb-5 md:mb-6">
              Precision Technology
              <br /><em>for Beautiful Results</em>
            </h2>
            <p className="body-text mb-5">
              Our clinic uses state-of-the-art laser technology operated by trained medical professionals. Laser treatments offer precise, targeted results with minimal downtime for a wide range of skin concerns.
            </p>
            <p className="body-text mb-8 md:mb-10">
              A consultation is required before all laser treatments to assess your skin type, concerns and goals, and to create a personalised treatment plan for optimal results.
            </p>
            <Link to="/book" className="btn-primary">
              Book Laser Consultation <ArrowRight size={16} />
            </Link>
          </div>
          <div className="image-frame aspect-[4/3]">
            <img src={IMAGES.laserDevice} alt="Laser treatment" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-py section-muted">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">OUR TREATMENTS</p>
            <h2 className="heading-section">Laser Treatment Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {treatments.map((t) => <TreatmentCard key={t.title} {...t} />)}
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
