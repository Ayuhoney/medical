const MARQUEE_ITEMS = [
  "General Practice",
  "Skin Cancer Clinic",
  "Aesthetic Medicine",
  "Laser Treatments",
  "Personalised Care",
  "AGPAL Accredited",
  "Medical Grade Results",
  "MoleMax HD Detection",
  "AHPRA Registered",
  "Skin Rejuvenation",
  "Family Healthcare",
  "Batemans Bay",
];

function MarqueeContent() {
  return (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={item} className="ref-marquee-group">
          {i > 0 && <span className="ref-marquee-dot" aria-hidden>•</span>}
          <span>{item}</span>
        </span>
      ))}
    </>
  );
}

export function ServiceMarquee() {
  return (
    <div className="ref-marquee" aria-label="Our services and credentials">
      <div className="ref-marquee-viewport">
        <div className="ref-marquee-track">
          <div className="ref-marquee-segment">
            <MarqueeContent />
          </div>
          <div className="ref-marquee-segment" aria-hidden>
            <MarqueeContent />
          </div>
        </div>
      </div>
    </div>
  );
}
