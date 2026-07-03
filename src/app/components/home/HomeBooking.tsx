import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { CLINIC, IMAGES } from "../../constants";

const services = [
  "General Practice",
  "Skin Cancer Check",
  "Aesthetic Medicine",
  "Laser Treatment",
  "Clinical Skin Products",
  "Not Sure — Advise Me",
];

type Form = { name: string; email: string; phone: string; service: string; message: string };

export function HomeBooking() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState<Form>({ name: "", email: "", phone: "", service: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1400));
    setLoading(false);
    setSent(true);
  };

  const input = "form-underline";

  return (
    <section id="contact" className="section-white !pt-0 pb-14 md:pb-20 lg:pb-24">
      <div ref={ref} className="w-full max-w-[1320px] mx-auto">
        <div
          className={`grid lg:grid-cols-[1fr_1.1fr] min-h-[700px] transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="relative bg-[#0D1F2D] px-8 lg:px-14 py-20 flex flex-col justify-between overflow-hidden">
            <img
              src={IMAGES.heroPortrait}
              alt="Clinic"
              className="absolute inset-0 w-full h-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0D1F2D]/92 to-[#0D1F2D]/65" />

            <div className="relative z-10">
              <div className="eyebrow-mark eyebrow-mark-light mb-10">
                <span className="eyebrow-line eyebrow-line-light" aria-hidden />
                <span>Get In Touch</span>
              </div>
              <h2 className="heading-section-light mb-6" style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", lineHeight: 0.95 }}>
                Begin Your<br />
                <em className="heading-accent-light">Health Journey</em>
              </h2>
              <p className="text-white/55 text-sm leading-relaxed max-w-xs">
                Book online or send us a message. Our friendly team responds within one business day.
              </p>
            </div>

            <div className="relative z-10 space-y-5">
              {[
                { Icon: Phone, v: CLINIC.phone, s: "Mon–Fri · 9am–4:30pm" },
                { Icon: Mail, v: CLINIC.email, s: "We reply within 24h" },
                { Icon: MapPin, v: CLINIC.address, s: "Free parking available" },
              ].map(({ Icon, v, s }) => (
                <div key={v} className="flex items-start gap-4">
                  <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-3.5 h-3.5 text-[#7EC8D8]" />
                  </div>
                  <div>
                    <div className="text-white/85 text-sm">{v}</div>
                    <div className="text-white/40 text-[11px] tracking-widest uppercase mt-0.5">{s}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white px-8 lg:px-14 py-20 flex flex-col justify-center border border-[rgba(10,126,148,0.08)]">
            {sent ? (
              <div className="text-center max-w-sm mx-auto">
                <div className="w-16 h-16 bg-[#EDF8FB] flex items-center justify-center mx-auto mb-6">
                  <ArrowRight className="w-7 h-7 text-[#0A7E94]" />
                </div>
                <h3 className="font-serif text-3xl font-light text-[#0D1F2D] mb-4">Message Received</h3>
                <p className="text-[#5C7A8A] leading-relaxed text-sm mb-8">
                  Thank you. We&apos;ll be in touch within one business day to confirm your appointment.
                </p>
                <button type="button" onClick={() => setSent(false)} className="btn-outline">
                  Send Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-3xl font-light text-[#0D1F2D] mb-10">Book a Consultation</h3>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-micro-label">Full Name *</label>
                      <input name="name" required value={form.name} onChange={onChange} placeholder="Your name" className={input} />
                    </div>
                    <div>
                      <label className="form-micro-label">Email *</label>
                      <input name="email" type="email" required value={form.email} onChange={onChange} placeholder="you@email.com" className={input} />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="form-micro-label">Phone</label>
                      <input name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="02 4000 0000" className={input} />
                    </div>
                    <div>
                      <label className="form-micro-label">Service *</label>
                      <select name="service" required value={form.service} onChange={onChange} className={`${input} cursor-pointer`}>
                        <option value="" disabled>Select service</option>
                        {services.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="form-micro-label">Your Message</label>
                    <textarea name="message" rows={4} value={form.message} onChange={onChange} placeholder="Tell us how we can help..." className={`${input} resize-none`} />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary w-full bg-[#0A7E94] hover:bg-[#086B7E] justify-center mt-2 group">
                    {loading ? (
                      <span className="flex items-center gap-3">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <>
                        Request Consultation
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] tracking-widest uppercase text-[#9AB0BA]">
                    Complimentary · No Obligation · 100% Confidential
                  </p>
                  <p className="text-center">
                    <Link to="/book" className="link-arrow text-[10px]">Or book online via our appointment page →</Link>
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
