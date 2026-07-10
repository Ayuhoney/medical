import { useEffect, useState } from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { IMAGES } from "@/app/constants";
import { PageHero, BookingBanner } from "@/app/components/ui";
import { ServiceDetailList, type ServiceDetailItem } from "@/app/components/ServiceDetailSection";
import { api } from "@/app/api";
import { mapServicesToDetailItems } from "@/app/api/resolveServiceImage";

const signs = [
  { letter: "A", name: "Asymmetry", desc: "One half doesn't match the other" },
  { letter: "B", name: "Border", desc: "Edges are ragged or irregular" },
  { letter: "C", name: "Colour", desc: "Multiple colours or uneven shading" },
  { letter: "D", name: "Diameter", desc: "Larger than 6mm (size of a pencil eraser)" },
  { letter: "E", name: "Evolving", desc: "Changing in size, shape or colour" },
];

export default function SkinCancer() {
  const [items, setItems] = useState<ServiceDetailItem[]>([]);
  useEffect(() => {
    api.services.list("skin-cancer").then((rows) => setItems(mapServicesToDetailItems(rows))).catch(() => setItems([]));
  }, []);

  return (
    <>
      <PageHero
        image={IMAGES.heroSkinCancer}
        tag="SKIN CANCER CLINIC"
        title={<>Expert Skin Cancer <br />Detection &amp; Treatment</>}
        subtitle="Early detection saves lives. Book your comprehensive skin check with our trained skin cancer doctors."
      />

      <section className="section-py section-white">
        <div className="site-container grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">
          <div>
            <p className="eyebrow">WHY IT MATTERS</p>
            <h2 className="heading-section mb-5 md:mb-6">
              Australia Has One of the
              <br /><em>Highest Rates of Skin Cancer</em>
            </h2>
            <p className="body-text mb-4">
              2 in 3 Australians will be diagnosed with skin cancer by the time they are 70. Regular skin checks are the most effective way to detect and treat skin cancer at its earliest, most curable stage.
            </p>
            <p className="body-text mb-8 md:mb-10">
              Our doctors are trained in dermoscopy and use the MoleMax HD system for total body photography, giving you the most comprehensive skin cancer assessment available in Batemans Bay.
            </p>
            <Link to="/book" className="btn-primary">
              Book Skin Check <ArrowRight size={16} />
            </Link>
          </div>
          <div className="image-frame aspect-[4/3]">
            <img src={IMAGES.skinCheck} alt="Skin cancer check" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-py section-muted">
        <div className="site-container">
          <div className="text-center mb-12 md:mb-16">
            <p className="eyebrow">KNOW THE SIGNS</p>
            <h2 className="heading-section">The ABCDE of Melanoma</h2>
          </div>
          <div className="card-grid-5">
            {signs.map(({ letter, name, desc }) => (
              <div key={letter} className="card-premium p-5 md:p-6 text-center hover:-translate-y-1">
                <div className="w-14 h-14 rounded-2xl bg-[#0A7E94] flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-2xl font-bold font-serif">{letter}</span>
                </div>
                <p className="text-[#0D1F2D] font-semibold text-sm mb-1.5 font-sans">{name}</p>
                <p className="body-text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceDetailList items={items} bookLabel="Book Skin Check" />

      <BookingBanner />
    </>
  );
}
