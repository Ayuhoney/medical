import { useState } from "react";
import { Calendar, User, CheckCircle, ArrowRight, ChevronRight, Phone } from "lucide-react";
import { PageHero, BookingBanner } from "../components/ui";
import { IMAGES, CLINIC } from "../constants";

const serviceTypes = [
  { id: "gp", label: "General Practice", desc: "GP consultation, health checks, prescriptions" },
  { id: "skin", label: "Skin Cancer Check", desc: "Full body skin check and mole monitoring" },
  { id: "aesthetic", label: "Aesthetic Medicine", desc: "Cosmetic injectables and skin treatments" },
  { id: "laser", label: "Laser Treatment", desc: "Laser resurfacing, pigmentation, hair removal" },
];

const doctors = [
  { id: "heshan", name: "Dr Heshan Dharmarama", role: "General Practitioner", available: "Next available: Today" },
  { id: "kishani", name: "Dr Kishani Weerasena", role: "GP & Aesthetic Physician", available: "Next available: Tomorrow" },
  { id: "any", name: "First Available Doctor", role: "Any available GP", available: "Soonest appointment" },
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM",
];

const selectBtn = (active: boolean) =>
  active
    ? "border-[#0A7E94] bg-[#EDF8FB] text-[#0A7E94]"
    : "border-[rgba(10,126,148,0.12)] text-[#2A4A5A] hover:border-[rgba(10,126,148,0.3)] hover:bg-[#F4F8FA]";

function StepIndicator({ current }: { current: number }) {
  const steps = ["Service", "Doctor", "Date & Time", "Your Details", "Confirm"];
  return (
    <div className="flex items-center gap-0 overflow-x-auto pb-1">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div key={label} className="flex items-center gap-0 flex-shrink-0">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className={`w-9 h-9 flex items-center justify-center text-[11px] font-semibold transition-all duration-300 font-sans ${
                  done
                    ? "bg-[#0A7E94] text-white"
                    : active
                      ? "bg-[#0A7E94] text-white ring-2 ring-[rgba(10,126,148,0.25)]"
                      : "bg-[#F4F8FA] text-[#5C7A8A] border border-[rgba(10,126,148,0.1)]"
                }`}
              >
                {done ? <CheckCircle size={14} /> : n}
              </div>
              <span className={`text-[10px] font-medium hidden sm:block font-sans uppercase tracking-[0.08em] ${active ? "text-[#0A7E94]" : "text-[#5C7A8A]"}`}>
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className={`h-px w-8 sm:w-10 mx-1.5 mt-[-16px] sm:mt-[-18px] transition-colors ${done ? "bg-[#0A7E94]" : "bg-[rgba(10,126,148,0.12)]"}`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BookAppointment() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState({ service: "", doctor: "", date: "", time: "", name: "", email: "", phone: "", dob: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const next = () => setStep((s) => Math.min(s + 1, 5));
  const back = () => setStep((s) => Math.max(s - 1, 1));

  const canNext = () => {
    if (step === 1) return !!selected.service;
    if (step === 2) return !!selected.doctor;
    if (step === 3) return !!selected.date && !!selected.time;
    if (step === 4) return !!selected.name && !!selected.phone;
    return true;
  };

  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <>
        <section className="section-py section-cream min-h-[70vh] flex items-center">
          <div className="site-container-narrow text-center py-12">
            <div className="w-16 h-16 bg-[#0A7E94] flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-white" />
            </div>
            <p className="ref-label justify-center before:!hidden">CONFIRMATION</p>
            <h2 className="heading-section mb-4">Booking Request Sent</h2>
            <p className="body-text mx-auto mb-8">
              Thank you, <strong className="font-medium text-[#0D1F2D]">{selected.name}</strong>. Your appointment request has been submitted. Our team will confirm via phone or email within 1 business day.
            </p>
            <div className="border border-[rgba(10,126,148,0.1)] bg-surface p-6 md:p-8 text-left mb-8 space-y-3">
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
          <div className="border border-[rgba(10,126,148,0.1)] bg-surface p-5 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8 md:mb-10">
            <div className="flex-1">
              <p className="ref-label !mb-3">HOTDOC</p>
              <p className="font-sans text-[#0D1F2D] font-semibold text-sm mb-1">Prefer to book via HotDoc?</p>
              <p className="body-text-sm !max-w-none">Our clinic uses HotDoc for real-time bookings. Use the form below for a callback request.</p>
            </div>
            <a href="https://www.hotdoc.com.au" target="_blank" rel="noreferrer" className="btn-primary-sm flex-shrink-0 bg-[#0A7E94] hover:bg-[#086B7E]">
              Open HotDoc <ArrowRight size={14} />
            </a>
          </div>

          <div className="border border-[rgba(10,126,148,0.1)] bg-surface overflow-hidden">
            <div className="bg-[var(--cream-muted)] px-6 md:px-8 py-5 md:py-6 border-b border-[rgba(10,126,148,0.08)]">
              <p className="ref-label !mb-4">BOOK APPOINTMENT</p>
              <StepIndicator current={step} />
            </div>

            <div className="p-6 md:p-8 lg:p-10">
              {step === 1 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">What brings you in?</h3>
                  <p className="body-text-sm mb-6">Select the type of appointment you need.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceTypes.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSelected((v) => ({ ...v, service: s.id }))}
                        className={`flex items-start gap-4 p-5 border text-left transition-all duration-300 font-sans ${selectBtn(selected.service === s.id)}`}
                      >
                        <div className="flex-1 min-w-0">
                          <p className="text-[#0D1F2D] font-semibold text-sm uppercase tracking-[0.04em]">{s.label}</p>
                          <p className="body-text-sm mt-1 !text-[13px]">{s.desc}</p>
                        </div>
                        {selected.service === s.id && <CheckCircle size={16} className="text-[#0A7E94] flex-shrink-0 mt-0.5" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Choose a Doctor</h3>
                  <p className="body-text-sm mb-6">Select your preferred practitioner.</p>
                  <div className="flex flex-col gap-3">
                    {doctors.map((doc) => (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => setSelected((v) => ({ ...v, doctor: doc.id }))}
                        className={`flex items-center gap-4 p-5 border text-left transition-all duration-300 font-sans ${selectBtn(selected.doctor === doc.id)}`}
                      >
                        <div className="w-11 h-11 bg-[#EDF8FB] flex items-center justify-center text-[#0A7E94] flex-shrink-0">
                          <User size={18} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[#0D1F2D] font-semibold text-sm">{doc.name}</p>
                          <p className="body-text-sm">{doc.role}</p>
                          <p className="text-[#0A7E94] text-[11px] font-medium mt-1 uppercase tracking-[0.06em]">{doc.available}</p>
                        </div>
                        {selected.doctor === doc.id && <CheckCircle size={16} className="text-[#0A7E94] flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Choose Date &amp; Time</h3>
                  <p className="body-text-sm mb-4">Select a preferred date:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {dateOptions.slice(0, 8).map((dt) => (
                      <button
                        key={dt.value}
                        type="button"
                        onClick={() => setSelected((v) => ({ ...v, date: dt.display, time: "" }))}
                        className={`py-3 px-2 text-[11px] font-medium border transition-all duration-300 text-center font-sans uppercase tracking-[0.04em] ${selectBtn(selected.date === dt.display)}`}
                      >
                        {dt.display}
                      </button>
                    ))}
                  </div>
                  {selected.date && (
                    <>
                      <p className="body-text-sm mb-3">Select a time:</p>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((t) => (
                          <button
                            key={t}
                            type="button"
                            onClick={() => setSelected((v) => ({ ...v, time: t }))}
                            className={`px-4 py-2.5 text-[11px] font-medium border transition-all duration-300 font-sans ${selectBtn(selected.time === t)}`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Your Details</h3>
                  <p className="body-text-sm mb-6">We&apos;ll use these details to confirm your appointment.</p>
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
                          className="form-input"
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
                        className="form-input resize-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl md:text-2xl mb-2">Confirm Your Booking</h3>
                  <p className="body-text-sm mb-6">Please review your details before submitting.</p>
                  <div className="border border-[rgba(10,126,148,0.1)] bg-[var(--cream-muted)] p-5 md:p-6 space-y-3 mb-5">
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
                  <p className="body-text-sm">
                    By submitting, you agree to be contacted by our clinic to confirm your appointment. This is a booking request, not a confirmed appointment.
                  </p>
                </div>
              )}

              <div className="flex items-center justify-between mt-10 pt-6 border-t border-[rgba(10,126,148,0.08)]">
                {step > 1 ? (
                  <button type="button" onClick={back} className="font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-[#5C7A8A] hover:text-[#0A7E94] transition-colors">
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
                    className={`inline-flex items-center gap-2 font-sans text-[11px] font-semibold uppercase tracking-[0.14em] transition-all duration-300 ${
                      canNext()
                        ? "btn-primary-sm bg-[#0A7E94] hover:bg-[#086B7E]"
                        : "h-[46px] px-6 bg-[#E0EFF2] text-[#5C7A8A] cursor-not-allowed"
                    }`}
                  >
                    Continue <ChevronRight size={14} />
                  </button>
                ) : (
                  <button type="button" onClick={handleSubmit} className="btn-primary-sm bg-[#0A7E94] hover:bg-[#086B7E]">
                    <Calendar size={15} /> Submit Request
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-[rgba(10,126,148,0.08)] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
            <Phone size={14} className="text-[#0A7E94] hidden sm:block" />
            <p className="body-text-sm !max-w-none">
              Prefer to call?{" "}
              <a href={`tel:${CLINIC.phone.replace(/\s/g, "")}`} className="text-[#0A7E94] font-semibold hover:underline">
                {CLINIC.phone}
              </a>
              <span className="text-[#5C7A8A]"> — Mon–Fri 9am–4:30pm</span>
            </p>
          </div>
        </div>
      </section>

      <BookingBanner />
    </>
  );
}
