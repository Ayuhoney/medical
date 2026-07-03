import { useState } from "react";
import { Link } from "react-router";
import { useSpotlight } from "./Spotlight";

export type ServicePanel = {
  num: string;
  tag: string;
  title: string;
  desc: string;
  image: string;
  path: string;
};

export function ServiceAccordion({ panels }: { panels: ServicePanel[] }) {
  const [active, setActive] = useState<number | null>(null);
  const spot = useSpotlight();

  return (
    <div
      className={`svc-accordion${active !== null ? " has-active" : ""}`}
      onMouseLeave={() => setActive(null)}
    >
      {panels.map((panel, i) => {
        const isActive = active === i;
        return (
          <Link
            key={panel.title}
            to={panel.path}
            className={`svc-panel svc-spotlight group${isActive ? " is-active" : ""}`}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            onPointerMove={spot.onPointerMove}
            onPointerLeave={spot.onPointerLeave}
            aria-label={`${panel.title} — ${panel.tag}`}
          >
            <img
              src={panel.image}
              alt=""
              className="svc-panel-img"
              loading="lazy"
            />
            <div className="svc-panel-scrim" />

            <span className="svc-panel-vert" aria-hidden>
              {panel.num} — {panel.tag}
            </span>

            <div className="svc-panel-body">
              <span className="svc-panel-meta">{panel.num} — {panel.tag}</span>
              <h3 className="svc-panel-title">{panel.title}</h3>
              <p className="svc-panel-desc">{panel.desc}</p>
              <span className="svc-panel-cta">
                Book This Treatment <span aria-hidden>→</span>
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
