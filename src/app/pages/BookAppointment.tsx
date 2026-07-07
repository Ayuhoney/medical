import { useState } from "react";
import {
  Calendar,
  CheckCircle,
  ArrowRight,
  ChevronRight,
  Phone,
  ExternalLink,
  Stethoscope,
  Microscope,
  Sparkles,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { PageHero, BookingBanner } from "@/app/components/ui";
import { IMAGES, CLINIC } from "@/app/constants";
import { api } from "@/app/api";

type ServiceType = {
  id: string;
  label: string;
  desc: string;
  image: string;
  icon: LucideIcon;
};

const serviceTypes: ServiceType[] = [
  {
    id: "gp",
    label: "General Practice",
    desc: "GP consultation, health checks, prescriptions",
    image: IMAGES.heroGP,
    icon: Stethoscope,
  },
  {
    id: "skin",
    label: "Skin Cancer Check",
    desc: "Full body skin check and mole monitoring",
    image: IMAGES.heroSkinCancer,
    icon: Microscope,
  },
  {
    id: "aesthetic",
    label: "Aesthetic Medicine",
    desc: "Cosmetic injectables and skin treatments",
    image: IMAGES.heroAesthetic,
    icon: Sparkles,
  },
  {
    id: "laser",
    label: "Laser Treatment",
    desc: "Laser resurfacing, pigmentation, hair removal",
    image: IMAGES.heroLaser,
    icon: Zap,
  },
];

const doctors = [
  {
    id: "thilan",
    name: "Dr Thilan Walgamage",
    role: "Specialist GP — Skin Cancer & Aesthetic Medicine",
    available: "Next available: Today",
    image: IMAGES.teamDrThilan,
  },
  {
    id: "kishani",
    name: "Dr Kishani Weerasena",
    role: "GP — Women's & Children's Health",
    available: "Next available: Tomorrow",
    image: IMAGES.teamDrKishani,
  },
  {
    id: "heshan",
    name: "Dr Heshan Dharmaratna",
    role: "GP — Mental Health & Chronic Disease",
    available: "Next available: Today",
    image: IMAGES.teamDrHeshan,
  },
  {
    id: "any",
    name: "First Available Doctor",
    role: "Any available GP",
    available: "Soonest appointment",
    image: IMAGES.clinicInterior,
  },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

const STEPS = ["Service", "Doctor", "Date & Time", "Your Details", "Confirm"];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center w-full gap-0">
      {STEPS.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none min-w-0">
            <div className="flex flex-col items-center gap-2 flex-shrink-0">
              <div
                className={`book-step-dot ${
                  done ? "book-step-dot--done" : active ? "book-step-dot--active" : "book-step-dot--pending"
                }`}
              >
                {done ? <CheckCircle size={15} strokeWidth={2.5} /> : n}
              </div>
              <span
                className={`text-[9px] sm:text-[10px] font-semibold hidden sm:block font-sans uppercase tracking-[0.1em] text-center max-w-[4.5rem] leading-tight ${
                  active ? "text-[#0A7E94]" : done ? "text-[#0A7E94]/70" : "text-[#8AA8B5]"
                }`}
              >
                {label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div
                className={`book-step-line mt-[-1.25rem] sm:mt-[-1.5rem] ${done ? "bg-[#0A7E94]" : "bg-[rgba(10,126,148,0.12)]"}`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState({
    service: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    dob: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const canNext = () => {
    if (step === 1) return !!selected.service;
    if (step === 2) return !!selected.doctor;
    if (step === 3) return !!selected.date && !!selected.time;
    if (step === 4) return !!selected.name && !!selected.phone;
    return true;
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      await api.appointments.submit({
        service: selected.service,
        doctor: selected.doctor,
        date: selected.date,
        time: selected.time,
        name: selected.name,
        email: selected.email || undefined,
        phone: selected.phone,
        dob: selected.dob || undefined,
        notes: selected.notes || undefined,
      });
      setSubmitted(true);
    } catch (err: any) {
      setError(err?.message || "Failed to submit booking request.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <>
        <section className="section-py section-cream min-h-[70vh] flex items-center">
          <div className="site-container-narrow text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-[#0A7E94] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-[#0A7E94]/25">
              <CheckCircle size={32} className="text-white" />
            </div>
            <p className="ref-label justify-center before:!hidden">CONFIRMATION</p>
            <h2 className="heading-section mb-4">Booking Request Sent</h2>
            <p className="body-text mx-auto mb-8">
              Thank you, <strong className="font-medium text-[#0D1F2D]">{selected.name}</strong>. Your appointment request has been submitted. Our team will confirm via phone or email within 1 business day.
            </p>
            <div className="book-panel p-6 md:p-8 text-left mb-8 space-y-3">
              {[
                { l: "Service", v: serviceTypes.find((s) => s.id === selected.service)?.label },
                { l: "Doctor", v: doctors.find((d) => d.id === selected.doctor)?.name },
                { l: "Date", v: selected.date },
                { l: "Time", v: selected.time },
              ].map(({ l, v }) =>
                v ? (
                  <div key={l} className="flex justify-between text-sm font-sans border-b border-[rgba(10,126,148,0.06)] pb-3 last:border-0 last:pb-0">
                    <span className="text-[#5C7A8A] uppercase text-[11px] tracking-[0.08em]">{l}</span>
                    <span className="text-[#0D1F2D] font-medium">{v}</span>
                  </div>
                ) : null
              )}
            </div>
            <p className="body-text-sm mb-8">
              Questions? Call us at{" "}
              <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="text-[#0A7E94] font-semibold">
                {CLINIC.phone}
              </a>
            </p>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setStep(1);
                setSelected({ service: "", doctor: "", date: "", time: "", name: "", email: "", phone: "", dob: "", notes: "" });
              }}
              className="link-arrow"
            >
              Book another appointment <ArrowRight size={13} />
            </button>
          </div>
        </section>
        <BookingBanner />
      </>
    );
  }

  const dateOptions: { display: string; value: string }[] = [];
  const d = new Date();
  while (dateOptions.length < 14) {
    d.setDate(d.getDate() + 1);
    if (d.getDay() !== 0 && d.getDay() !== 6) {
      dateOptions.push({
        display: d.toLocaleDateString("en-AU", { weekday: "short", day: "numeric", month: "short" }),
        value: d.toISOString().split("T")[0],
      });
    }
  }

  return (
    <>
      <PageHero
        image={IMAGES.clinicInterior}
        imagePosition="center 40%"
        tag="APPOINTMENTS"
        title={
          <>
            Book an <em className="heading-accent-light">Appointment</em>
          </>
        }
        subtitle="Schedule a visit with our doctors online — quick and easy."
      />

      <section className="section-py section-cream">
        <div className="site-container-narrow">
          {/* HotDoc banner */}
          <div className="book-hotdoc relative z-10">
            <div className="flex-1 min-w-0">
              <p className="ref-label !mb-2">HOTDOC</p>
              <p className="font-sans text-[#0D1F2D] font-semibold text-base mb-1">Prefer to book via HotDoc?</p>
              <p className="body-text-sm !max-w-none text-[#5A7A8A]">
                Our clinic uses HotDoc for real-time bookings. Use the form below for a callback request.
              </p>
            </div>
            <a
              href="https://www.hotdoc.com.au"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 flex-shrink-0 h-11 px-6 rounded-full bg-[#0A7E94] hover:bg-[#086B7E] text-white font-sans text-[11px] font-semibold uppercase tracking-[0.12em] transition-all duration-300 hover:scale-[1.02]"
            >
              Open HotDoc <ExternalLink size={14} />
            </a>
          </div>

          {/* Main booking panel */}
          <div className="book-panel">
            <div className="book-panel-header">
              <p className="ref-label !mb-5">BOOK APPOINTMENT</p>
              <StepIndicator current={step} />
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              {/* Step 1 — Service */}
              {step === 1 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">What brings you in?</h3>
                  <p className="body-text-sm mb-7 text-[#5A7A8A]">Select the type of appointment you need.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {serviceTypes.map((s) => {
                      const isSelected = selected.service === s.id;
                      const Icon = s.icon;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setSelected((v) => ({ ...v, service: s.id }))}
                          className={`book-service-card w-full ${isSelected ? "book-service-card--selected" : ""}`}
                        >
                          <div className="book-service-card-media">
                            <img src={s.image} alt={s.label} loading="lazy" />
                          </div>
                          <div className="book-service-card-scrim" />
                          {isSelected && (
                            <div className="book-service-check">
                              <CheckCircle size={14} className="text-white" strokeWidth={2.5} />
                            </div>
                          )}
                          <div className="book-service-card-body">
                            <span className="inline-flex items-center gap-1.5 w-fit mb-2 px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-[10px] font-semibold uppercase tracking-wider font-sans">
                              <Icon size={11} />
                              {s.label.split(" ")[0]}
                            </span>
                            <p className="text-white font-serif text-lg leading-snug mb-1">{s.label}</p>
                            <p className="text-white/70 text-[12px] font-sans leading-relaxed">{s.desc}</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 2 — Doctor */}
              {step === 2 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Choose a Doctor</h3>
                  <p className="body-text-sm mb-7 text-[#5A7A8A]">Select your preferred practitioner.</p>
                  <div className="flex flex-col gap-3 md:gap-4">
                    {doctors.map((doc) => {
                      const isSelected = selected.doctor === doc.id;
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => setSelected((v) => ({ ...v, doctor: doc.id }))}
                          className={`book-doctor-card w-full ${isSelected ? "book-doctor-card--selected" : ""}`}
                        >
                          <div className="book-doctor-avatar">
                            <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                          </div>
                          <div className="flex-1 min-w-0 text-left">
                            <p className="text-[#0D1F2D] font-semibold text-sm font-sans">{doc.name}</p>
                            <p className="body-text-sm !text-[13px]">{doc.role}</p>
                            <p className="text-[#0A7E94] text-[10px] font-semibold mt-1.5 uppercase tracking-[0.08em] font-sans">
                              {doc.available}
                            </p>
                          </div>
                          {isSelected && (
                            <div className="w-7 h-7 rounded-full bg-[#0A7E94] flex items-center justify-center flex-shrink-0">
                              <CheckCircle size={14} className="text-white" strokeWidth={2.5} />
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Step 3 — Date & Time */}
              {step === 3 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Choose Date &amp; Time</h3>
                  <p className="body-text-sm mb-5 text-[#5A7A8A]">Select a preferred date:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
                    {dateOptions.slice(0, 8).map((dt) => (
                      <button
                        key={dt.value}
                        type="button"
                        onClick={() => setSelected((v) => ({ ...v, date: dt.display, time: "" }))}
                        className={`book-slot ${selected.date === dt.display ? "book-slot--selected" : ""}`}
                      >
                        {dt.display}
                      </button>
                    ))}
                  </div>
                  {selected.date && (
                    <>
                      <p className="body-text-sm mb-4 text-[#5A7A8A]">Select a time:</p>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelected((v) => ({ ...v, time: t }))}
                            className={`book-slot !px-4 ${selected.time === t ? "book-slot--selected" : ""}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Step 4 — Details */}
              {step === 4 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Your Details</h3>
                  <p className="body-text-sm mb-7 text-[#5A7A8A]">We&apos;ll use these details to confirm your appointment.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
                    {[
                      { key: "name", label: "Full Name *", placeholder: "Jane Smith", type: "text" },
                      { key: "dob", label: "Date of Birth", placeholder: "DD/MM/YYYY", type: "text" },
                      { key: "phone", label: "Phone Number *", placeholder: "04xx xxx xxx", type: "tel" },
                      { key: "email", label: "Email Address", placeholder: "jane@example.com", type: "email" },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label className="form-label">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={selected[key as keyof typeof selected]}
                          onChange={(e) => setSelected((v) => ({ ...v, [key]: e.target.value }))}
                          className="form-input rounded-xl !border-[rgba(10,126,148,0.12)]"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="form-label">Reason for Visit / Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Please describe the reason for your appointment..."
                        value={selected.notes}
                        onChange={(e) => setSelected((v) => ({ ...v, notes: e.target.value }))}
                        className="form-input resize-none rounded-xl !border-[rgba(10,126,148,0.12)]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5 — Confirm */}
              {step === 5 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Confirm Your Booking</h3>
                  <p className="body-text-sm mb-6 text-[#5A7A8A]">Please review your details before submitting.</p>
                  {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
                  <div className="rounded-2xl bg-[#F4F8FA] border border-[rgba(10,126,148,0.08)] p-5 md:p-6 space-y-3 mb-5">
                    {[
                      { label: "Service", value: serviceTypes.find((s) => s.id === selected.service)?.label },
                      { label: "Doctor", value: doctors.find((d) => d.id === selected.doctor)?.name },
                      { label: "Date", value: selected.date },
                      { label: "Time", value: selected.time },
                      { label: "Name", value: selected.name },
                      { label: "Phone", value: selected.phone },
                    ].map(({ label, value }) =>
                      value ? (
                        <div key={label} className="flex justify-between text-sm font-sans border-b border-[rgba(10,126,148,0.06)] pb-3 last:border-0 last:pb-0">
                          <span className="text-[#5C7A8A] uppercase text-[11px] tracking-[0.08em]">{label}</span>
                          <span className="text-[#0D1F2D] font-medium text-right max-w-[60%]">{value}</span>
                        </div>
                      ) : null
                    )}
                  </div>
                  <p className="body-text-sm text-[#5A7A8A]">
                    By submitting, you agree to be contacted by our clinic to confirm your appointment. This is a booking request, not a confirmed appointment.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[rgba(10,126,148,0.08)]">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={back}
                    className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5C7A8A] hover:text-[#0A7E94] transition-colors px-2"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}
                {step < 5 ? (
                  <button
                    type="button"
                    onClick={next}
                    disabled={!canNext()}
                    className={`book-continue-btn ${canNext() ? "book-continue-btn--active" : "book-continue-btn--disabled"}`}
                  >
                    Continue <ChevronRight size={15} />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="book-continue-btn book-continue-btn--active"
                  >
                    <Calendar size={15} /> {loading ? "Submitting…" : "Submit Request"}
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-center">
            <div className="w-9 h-9 rounded-full bg-[#EDF8FB] flex items-center justify-center">
              <Phone size={14} className="text-[#0A7E94]" />
            </div>
            <p className="body-text-sm !max-w-none">
              Prefer to call?{" "}
              <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="text-[#0A7E94] font-semibold hover:underline">
                {CLINIC.phone}
              </a>
              <span className="text-[#5C7A8A]"> — Mon–Fri 9am–4:30pm · Sat 9am–12:30pm</span>
            </p>
          </div>
        </div>
      </section>

      {/* Your First Visit — from beachroadsurgery.com.au/first-visit */}
      <section id="first-visit" className="section-py section-white scroll-mt-28">
        <div className="site-container">
          <div className="text-center mb-10 md:mb-14">
            <p className="eyebrow">YOUR FIRST VISIT</p>
            <h2 className="heading-section">What to Bring &amp; What to Expect</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              {
                title: "Medical Information",
                items: ["Medical and family history", "Copies of pathology reports", "List of current medications", "Allergies & other relevant information"],
              },
              {
                title: "Personal Information",
                items: ["Medicare, DVA or pension card", "Driver's licence or valid ID", "Employer letter if work-related"],
              },
              {
                title: "Initial Consultation",
                items: ["Typically a long consult", "Detailed symptom history taken", "Thorough physical examination", "Time to ask questions before you leave"],
              },
              {
                title: "Diagnosis & Next Steps",
                items: ["Diagnostic tests ordered if needed", "Treatment options explained", "Costs & follow-up discussed by our staff"],
              },
            ].map(({ title, items }) => (
              <div key={title} className="card-surface p-6">
                <h3 className="text-[#0D1F2D] font-semibold text-sm mb-3 font-sans">{title}</h3>
                <ul className="space-y-2">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-2 body-text-sm">
                      <CheckCircle size={13} className="text-[#0A7E94] mt-0.5 shrink-0" /> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
