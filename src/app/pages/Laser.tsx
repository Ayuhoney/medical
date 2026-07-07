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
              We use the Alma Harmony XL PRO Special Edition — a Class IV Medical Grade LASER platform with over 72 FDA-cleared indications. Unlike beauty-grade IPL devices, medical lasers emit a targeted, specific wavelength with more power per pulse, delivering better outcomes in fewer sessions. Some treatments are covered by a Medicare rebate.
            </p>
            <p className="body-text mb-8 md:mb-10">
              A consultation is required before all laser treatments — suitability depends on your clinical condition, skin type and other factors. You are treated by a qualified medical team of doctors, nurses and aesthetic therapists.
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
