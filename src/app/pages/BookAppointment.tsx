import { useState } from "react";
import { Calendar, Clock, User, CheckCircle, Phone, ArrowRight, ChevronRight } from "lucide-react";
import { PageHero } from "../components/ui";
import { IMAGES } from "../constants";

const serviceTypes = [
  { id: "gp", label: "General Practice", icon: "🏥", desc: "GP consultation, health checks, prescriptions" },
  { id: "skin", label: "Skin Cancer Check", icon: "🔍", desc: "Full body skin check and mole monitoring" },
  { id: "aesthetic", label: "Aesthetic Medicine", icon: "✨", desc: "Cosmetic injectables and skin treatments" },
  { id: "laser", label: "Laser Treatment", icon: "⚡", desc: "Laser resurfacing, pigmentation, hair removal" },
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

function StepIndicator({ step, current }: { step: number; current: number }) {
  const steps = ["Service", "Doctor", "Date & Time", "Your Details", "Confirm"];
  return (
    <div className="flex items-center gap-0 overflow-x-auto pb-1">
      {steps.map((label, i) => {
        const n = i + 1;
        const done = n < current;
        const active = n === current;
        return (
          <div key={label} className="flex items-center gap-0 flex-shrink-0">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${done ? "bg-[#0A7E94] text-white" : active ? "bg-[#0A7E94] text-white ring-4 ring-[rgba(10,126,148,0.2)]" : "bg-[#F0F6F8] text-[#5A7A8A]"}`} style={{ fontFamily: "'Outfit',sans-serif" }}>
                {done ? <CheckCircle size={14} /> : n}
              </div>
              <span className={`text-[10px] font-medium hidden sm:block ${active ? "text-[#0A7E94]" : "text-[#5A7A8A]"}`} style={{ fontFamily: "'Outfit',sans-serif" }}>{label}</span>
            </div>
            {i < steps.length - 1 && <div className={`h-0.5 w-8 sm:w-12 mx-1 mt-[-14px] sm:mt-[-18px] ${done ? "bg-[#0A7E94]" : "bg-[#E0EFF2]"}`} />}
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
      <div className="min-h-[80vh] flex items-center justify-center bg-[#F8FCFD]">
        <div className="max-w-md mx-auto px-4 text-center py-20">
          <div className="w-20 h-20 rounded-full bg-[#EDF8FB] flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-[#0A7E94]" />
          </div>
          <h2 className="text-[#0D1F2D] mb-3" style={{ fontFamily: "'DM Serif Display',serif", fontSize: "2rem" }}>Booking Request Sent!</h2>
          <p className="text-[#5A7A8A] text-base leading-relaxed mb-6" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Thank you, <strong>{selected.name}</strong>. Your appointment request has been submitted. Our team will confirm via phone or email within 1 business day.
          </p>
          <div className="bg-white rounded-2xl p-5 border border-[rgba(10,126,148,0.1)] text-left mb-6 space-y-2">
            {[
              { l: "Service", v: serviceTypes.find(s => s.id === selected.service)?.label },
              { l: "Doctor", v: doctors.find(d => d.id === selected.doctor)?.name },
              { l: "Date", v: selected.date },
              { l: "Time", v: selected.time },
            ].map(({ l, v }) => v ? (
              <div key={l} className="flex justify-between text-sm">
                <span className="text-[#5A7A8A]" style={{ fontFamily: "'Outfit',sans-serif" }}>{l}</span>
                <span className="text-[#0D1F2D] font-medium" style={{ fontFamily: "'Outfit',sans-serif" }}>{v}</span>
              </div>
            ) : null)}
          </div>
          <p className="text-[#5A7A8A] text-sm mb-6" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Questions? Call us at <a href="tel:0244080777" className="text-[#0A7E94] font-semibold">02 4408 0777</a>
          </p>
          <button onClick={() => { setSubmitted(false); setStep(1); setSelected({ service: "", doctor: "", date: "", time: "", name: "", email: "", phone: "", dob: "", notes: "" }); }} className="text-[#0A7E94] text-sm font-semibold hover:underline" style={{ fontFamily: "'Outfit',sans-serif" }}>
            Book another appointment →
          </button>
        </div>
      </div>
    );
  }

  // Generate date options (next 14 working days)
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
      <PageHero image={IMAGES.clinicInterior} tag="APPOINTMENTS" title="Book an Appointment" subtitle="Schedule a visit with our doctors online — quick and easy." />

      <section className="py-16 bg-[#F8FCFD] min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          {/* HotDoc note */}
          <div className="bg-white rounded-2xl p-5 border border-[rgba(10,126,148,0.15)] flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
            <div className="flex-1">
              <p className="text-[#0D1F2D] font-semibold text-sm mb-1" style={{ fontFamily: "'Outfit',sans-serif" }}>Prefer to book via HotDoc?</p>
              <p className="text-[#5A7A8A] text-xs" style={{ fontFamily: "'Outfit',sans-serif" }}>Our clinic uses HotDoc for real-time appointment bookings. Use the form below for a callback request.</p>
            </div>
            <a href="https://www.hotdoc.com.au" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0A7E94] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-[#096B7E] transition-colors flex-shrink-0" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Open HotDoc <ArrowRight size={14} />
            </a>
          </div>

          <div className="bg-white rounded-2xl border border-[rgba(10,126,148,0.12)] shadow-sm overflow-hidden">
            {/* Header */}
            <div className="bg-[#EDF8FB] px-6 py-5 border-b border-[rgba(10,126,148,0.1)]">
              <p className="text-[#0A7E94] text-[11px] font-bold uppercase tracking-widest mb-3" style={{ fontFamily: "'Outfit',sans-serif", letterSpacing: "0.14em" }}>BOOK APPOINTMENT</p>
              <StepIndicator step={step} current={step} />
            </div>

            <div className="p-6">
              {/* Step 1: Service */}
              {step === 1 && (
                <div>
                  <h3 className="text-[#0D1F2D] text-xl mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>What brings you in?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {serviceTypes.map((s) => (
                      <button key={s.id} onClick={() => setSelected(v => ({ ...v, service: s.id }))}
                        className={`flex items-start gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${selected.service === s.id ? "border-[#0A7E94] bg-[#EDF8FB]" : "border-[rgba(10,126,148,0.12)] hover:border-[rgba(10,126,148,0.3)]"}`}
                      >
                        <span className="text-2xl">{s.icon}</span>
                        <div>
                          <p className="text-[#0D1F2D] font-semibold text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.label}</p>
                          <p className="text-[#5A7A8A] text-xs mt-0.5" style={{ fontFamily: "'Outfit',sans-serif" }}>{s.desc}</p>
                        </div>
                        {selected.service === s.id && <CheckCircle size={16} className="text-[#0A7E94] ml-auto flex-shrink-0 mt-0.5" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Doctor */}
              {step === 2 && (
                <div>
                  <h3 className="text-[#0D1F2D] text-xl mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>Choose a Doctor</h3>
                  <div className="flex flex-col gap-3">
                    {doctors.map((doc) => (
                      <button key={doc.id} onClick={() => setSelected(v => ({ ...v, doctor: doc.id }))}
                        className={`flex items-center gap-4 p-4 rounded-xl border-2 text-left transition-all duration-200 ${selected.doctor === doc.id ? "border-[#0A7E94] bg-[#EDF8FB]" : "border-[rgba(10,126,148,0.12)] hover:border-[rgba(10,126,148,0.3)]"}`}
                      >
                        <div className="w-10 h-10 rounded-full bg-[#EDF8FB] flex items-center justify-center text-[#0A7E94] flex-shrink-0">
                          <User size={18} />
                        </div>
                        <div className="flex-1">
                          <p className="text-[#0D1F2D] font-semibold text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.name}</p>
                          <p className="text-[#5A7A8A] text-xs" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.role}</p>
                          <p className="text-[#0A7E94] text-xs font-medium mt-0.5" style={{ fontFamily: "'Outfit',sans-serif" }}>{doc.available}</p>
                        </div>
                        {selected.doctor === doc.id && <CheckCircle size={16} className="text-[#0A7E94] flex-shrink-0" />}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 3: Date & Time */}
              {step === 3 && (
                <div>
                  <h3 className="text-[#0D1F2D] text-xl mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>Choose Date & Time</h3>
                  <p className="text-[#5A7A8A] text-sm mb-4" style={{ fontFamily: "'Outfit',sans-serif" }}>Select a preferred date:</p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                    {dateOptions.slice(0, 8).map((d) => (
                      <button key={d.value} onClick={() => setSelected(v => ({ ...v, date: d.display, time: "" }))}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium border-2 transition-all duration-200 text-center ${selected.date === d.display ? "border-[#0A7E94] bg-[#EDF8FB] text-[#0A7E94]" : "border-[rgba(10,126,148,0.12)] text-[#2A4A5A] hover:border-[rgba(10,126,148,0.3)]"}`}
                        style={{ fontFamily: "'Outfit',sans-serif" }}
                      >
                        {d.display}
                      </button>
                    ))}
                  </div>
                  {selected.date && (
                    <>
                      <p className="text-[#5A7A8A] text-sm mb-3" style={{ fontFamily: "'Outfit',sans-serif" }}>Select a time:</p>
                      <div className="flex flex-wrap gap-2">
                        {timeSlots.map((t) => (
                          <button key={t} onClick={() => setSelected(v => ({ ...v, time: t }))}
                            className={`px-3.5 py-2 rounded-xl text-xs font-medium border-2 transition-all duration-200 ${selected.time === t ? "border-[#0A7E94] bg-[#EDF8FB] text-[#0A7E94]" : "border-[rgba(10,126,148,0.12)] text-[#2A4A5A] hover:border-[rgba(10,126,148,0.3)]"}`}
                            style={{ fontFamily: "'Outfit',sans-serif" }}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Step 4: Details */}
              {step === 4 && (
                <div>
                  <h3 className="text-[#0D1F2D] text-xl mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>Your Details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { key: "name", label: "Full Name *", placeholder: "Jane Smith", type: "text" },
                      { key: "dob", label: "Date of Birth", placeholder: "DD/MM/YYYY", type: "text" },
                      { key: "phone", label: "Phone Number *", placeholder: "04xx xxx xxx", type: "tel" },
                      { key: "email", label: "Email Address", placeholder: "jane@example.com", type: "email" },
                    ].map(({ key, label, placeholder, type }) => (
                      <div key={key}>
                        <label className="block text-[#0D1F2D] text-xs font-semibold mb-1.5" style={{ fontFamily: "'Outfit',sans-serif" }}>{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          value={selected[key as keyof typeof selected]}
                          onChange={(e) => setSelected(v => ({ ...v, [key]: e.target.value }))}
                          className="w-full px-4 py-2.5 rounded-xl border border-[rgba(10,126,148,0.2)] bg-[#F8FCFD] text-[#0D1F2D] text-sm outline-none focus:border-[#0A7E94] focus:ring-2 focus:ring-[rgba(10,126,148,0.15)] transition-all"
                          style={{ fontFamily: "'Outfit',sans-serif" }}
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="block text-[#0D1F2D] text-xs font-semibold mb-1.5" style={{ fontFamily: "'Outfit',sans-serif" }}>Reason for Visit / Notes</label>
                      <textarea
                        rows={3}
                        placeholder="Please describe the reason for your appointment..."
                        value={selected.notes}
                        onChange={(e) => setSelected(v => ({ ...v, notes: e.target.value }))}
                        className="w-full px-4 py-2.5 rounded-xl border border-[rgba(10,126,148,0.2)] bg-[#F8FCFD] text-[#0D1F2D] text-sm outline-none focus:border-[#0A7E94] focus:ring-2 focus:ring-[rgba(10,126,148,0.15)] transition-all resize-none"
                        style={{ fontFamily: "'Outfit',sans-serif" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 5: Confirm */}
              {step === 5 && (
                <div>
                  <h3 className="text-[#0D1F2D] text-xl mb-5" style={{ fontFamily: "'DM Serif Display',serif" }}>Confirm Your Booking</h3>
                  <div className="bg-[#F8FCFD] rounded-xl p-5 border border-[rgba(10,126,148,0.1)] space-y-3 mb-5">
                    {[
                      { label: "Service", value: serviceTypes.find(s => s.id === selected.service)?.label },
                      { label: "Doctor", value: doctors.find(d => d.id === selected.doctor)?.name },
                      { label: "Date", value: selected.date },
                      { label: "Time", value: selected.time },
                      { label: "Name", value: selected.name },
                      { label: "Phone", value: selected.phone },
                    ].map(({ label, value }) => value ? (
                      <div key={label} className="flex justify-between text-sm">
                        <span className="text-[#5A7A8A]" style={{ fontFamily: "'Outfit',sans-serif" }}>{label}</span>
                        <span className="text-[#0D1F2D] font-medium" style={{ fontFamily: "'Outfit',sans-serif" }}>{value}</span>
                      </div>
                    ) : null)}
                  </div>
                  <p className="text-[#5A7A8A] text-xs leading-relaxed" style={{ fontFamily: "'Outfit',sans-serif" }}>
                    By submitting this request, you agree to be contacted by our clinic to confirm your appointment. This is a booking request, not a confirmed appointment.
                  </p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-[rgba(10,126,148,0.1)]">
                {step > 1 ? (
                  <button onClick={back} className="px-5 py-2.5 text-sm font-medium text-[#5A7A8A] hover:text-[#0A7E94] transition-colors" style={{ fontFamily: "'Outfit',sans-serif" }}>
                    ← Back
                  </button>
                ) : <div />}
                {step < 5 ? (
                  <button onClick={next} disabled={!canNext()} className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${canNext() ? "bg-[#0A7E94] text-white hover:bg-[#096B7E] shadow-md shadow-[rgba(10,126,148,0.25)]" : "bg-[#E0EFF2] text-[#5A7A8A] cursor-not-allowed"}`} style={{ fontFamily: "'Outfit',sans-serif" }}>
                    Continue <ChevronRight size={14} />
                  </button>
                ) : (
                  <button onClick={handleSubmit} className="flex items-center gap-2 px-6 py-2.5 bg-[#0A7E94] text-white text-sm font-semibold rounded-xl hover:bg-[#096B7E] transition-all shadow-md shadow-[rgba(10,126,148,0.25)]" style={{ fontFamily: "'Outfit',sans-serif" }}>
                    <Calendar size={15} /> Submit Booking Request
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Phone alt */}
          <div className="mt-6 text-center">
            <p className="text-[#5A7A8A] text-sm" style={{ fontFamily: "'Outfit',sans-serif" }}>
              Prefer to call? <a href="tel:0244080777" className="text-[#0A7E94] font-semibold hover:underline">02 4408 0777</a> — Mon–Fri 9am–4:30pm
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
