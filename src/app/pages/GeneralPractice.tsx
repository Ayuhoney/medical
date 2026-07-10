import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/app/constants";
import { PageHero, BookingBanner } from "@/app/components/ui";
import { ServiceDetailList, type ServiceDetailItem } from "@/app/components/ServiceDetailSection";
import { api } from "@/app/api";
import { mapServicesToDetailItems } from "@/app/api/resolveServiceImage";

export default function GeneralPractice() {
  const [items, setItems] = useState<ServiceDetailItem[]>([]);

  useEffect(() => {
    api.services
      .list("general-practice")
      .then((rows) => setItems(mapServicesToDetailItems(rows)))
      .catch(() => setItems([]));
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.heroGP}
        tag="GENERAL PRACTICE"
        title={<>Comprehensive Family<br />Healthcare</>}
        subtitle="Your trusted family doctors providing personalised care for every stage of life."
      />

      <section className="section-py section-white">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
          <div>
            <p className="eyebrow">OUR APPROACH</p>
            <h2 className="heading-section mb-5 md:mb-6">
              Patient-Centred Care
              <br /><em>for Every Life Stage</em>
            </h2>
            <p className="body-text mb-5">
              Our experienced GPs take time to listen, understand, and provide personalised healthcare. We believe in building lasting relationships with our patients to support their long-term health and wellbeing.
            </p>
            <p className="body-text mb-8 md:mb-10">
              As an AGPAL-accredited practice, we maintain the highest standards in general practice medicine, using evidence-based approaches to deliver outstanding care for individuals and families in Batemans Bay.
            </p>
            <div className="flex flex-wrap gap-3 mb-8 md:mb-10">
              {["Health assessments bulk billed", "New patients welcome", "TeleHealth available", "HotDoc online booking"].map((t) => (
                <span key={t} className="bg-[#EDF8FB] text-[#0A7E94] text-xs font-semibold px-4 py-2 rounded-full border border-[rgba(10,126,148,0.2)] font-sans">{t}</span>
              ))}
            </div>
            <Link to="/book" className="btn-primary">
              Book a GP Visit <ArrowRight size={16} />
            </Link>
          </div>
          <div className="image-frame aspect-[4/3]">
            <img src={IMAGES.heroGP} alt="Doctor consultation" className="w-full h-full object-cover object-top" />
          </div>
        </div>
      </section>

      <ServiceDetailList items={items} bookLabel="Book a GP Visit" />

      <BookingBanner />
    </>
  );
}
