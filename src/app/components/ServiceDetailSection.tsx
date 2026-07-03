import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export type ServiceDetailItem = {
  id: string;
  tag: string;
  title: string;
  description: string;
  bullets?: string[];
  image: string;
  cta?: { label: string; path: string };
};

export function ServiceDetailSection({
  item,
  reversed = false,
  muted = false,
}: {
  item: ServiceDetailItem;
  reversed?: boolean;
  muted?: boolean;
}) {
  const { id, tag, title, description, bullets, image, cta } = item;

  return (
    <section
      id={id}
      className={`section-py scroll-mt-32 ${muted ? "section-muted" : "section-white"}`}
    >
      <div className="site-container">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="service-detail-media">
            <img src={image} alt={title} className="service-detail-img" loading="lazy" />
            <div className="service-detail-media-accent" aria-hidden />
          </div>

          <div>
            <p className="ref-label mb-4">{tag}</p>
            <h2 className="heading-section mb-4 text-2xl md:text-3xl">{title}</h2>
            <p className="body-text mb-5">{description}</p>
            {bullets && bullets.length > 0 && (
              <ul className="space-y-2.5 mb-6">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14px] text-[#334E5E] font-sans leading-relaxed">
                    <span className="text-[#0A7E94] mt-1 shrink-0">—</span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
            {cta && (
              <Link to={cta.path} className="btn-primary bg-[#0A7E94] hover:bg-[#086B7E] inline-flex">
                {cta.label} <ArrowRight size={14} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceDetailList({
  items,
  bookPath = "/book",
  bookLabel = "Book Appointment",
}: {
  items: ServiceDetailItem[];
  bookPath?: string;
  bookLabel?: string;
}) {
  return (
    <>
      {items.map((item, i) => (
        <ServiceDetailSection
          key={item.id}
          item={{
            ...item,
            cta: item.cta ?? { label: bookLabel, path: bookPath },
          }}
          reversed={i % 2 === 1}
          muted={i % 2 === 1}
        />
      ))}
    </>
  );
}

export function PolicySection({
  id,
  tag,
  title,
  children,
  muted = false,
}: {
  id: string;
  tag: string;
  title: string;
  children: ReactNode;
  muted?: boolean;
}) {
  return (
    <section id={id} className={`section-py scroll-mt-32 ${muted ? "section-muted" : "section-white"}`}>
      <div className="site-container-narrow">
        <p className="ref-label mb-4">{tag}</p>
        <h2 className="heading-section mb-5">{title}</h2>
        <div className="space-y-4">{children}</div>
      </div>
    </section>
  );
}
