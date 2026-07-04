import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/app/constants";
import { PageHero, BookingBanner } from "@/app/components/ui";
import { ServiceDetailList } from "@/app/components/ServiceDetailSection";
import { laserServices } from "@/app/data/services/laser";

export default function Laser() {
  return (
    <>
      <PageHero
        image={IMAGES.heroLaser}
        tag="LASER TREATMENTS"
        title={<>Advanced Laser<br /><em>Skin Technology</em></>}
        subtitle="State-of-the-art laser treatments for skin resurfacing, pigmentation, and rejuvenation."
      />

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

      <ServiceDetailList items={laserServices} bookLabel="Book Laser Session" />

      <BookingBanner />
    </>
  );
}
