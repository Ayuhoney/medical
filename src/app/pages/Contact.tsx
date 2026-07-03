import { useState } from "react";
import { Phone, MapPin, Clock, Mail, CheckCircle, Send } from "lucide-react";
import { IMAGES, CLINIC } from "../constants";
import { PageHero } from "../components/ui";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handle = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <PageHero image={IMAGES.clinicLobby} tag="CONTACT" title="Get in Touch" subtitle="We'd love to hear from you. Contact our friendly team for any enquiries." />

      <section className="section-py section-white">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-14">
            <div className="lg:col-span-2 flex flex-col gap-5">
              <div>
                <p className="eyebrow">CONTACT INFORMATION</p>
                <h2 className="heading-section mb-4">We're Here to Help</h2>
                <p className="body-text-sm">
                  Whether you have a question about our services, need to book an appointment, or want to find out more about our treatments, our friendly team is ready to assist.
                </p>
              </div>

              {[
                { icon: <Phone size={18} className="text-[#0A7E94]" />, label: "Phone", value: CLINIC.phone, href: `tel:${CLINIC.phone.replace(/\s/g, "")}` },
                { icon: <Mail size={18} className="text-[#0A7E94]" />, label: "Email", value: CLINIC.email, href: `mailto:${CLINIC.email}` },
                { icon: <MapPin size={18} className="text-[#0A7E94]" />, label: "Address", value: CLINIC.address },
              ].map(({ icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 card-surface">
                  <div className="card-icon-wrap !w-10 !h-10 bg-white shadow-sm">{icon}</div>
                  <div>
                    <p className="text-[#0D1F2D] font-semibold text-sm font-sans">{label}</p>
                    {href ? (
                      <a href={href} className="body-text-sm hover:text-[#0A7E94] transition-colors">{value}</a>
                    ) : (
                      <p className="body-text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="p-5 card-surface">
                <div className="flex items-start gap-4">
                  <div className="card-icon-wrap !w-10 !h-10 !rounded-xl bg-white shadow-sm">
                    <Clock size={18} className="text-[#0A7E94]" />
                  </div>
                  <div>
                    <p className="text-[#0D1F2D] font-semibold text-sm mb-2 font-sans">Opening Hours</p>
                    <div className="space-y-1">
                      {[{ d: "Monday – Friday", t: "9:00 AM – 4:30 PM" }, { d: "Saturday", t: "Closed" }, { d: "Sunday", t: "Closed" }].map(({ d, t }) => (
                        <div key={d} className="flex justify-between gap-6">
                          <span className="body-text-sm">{d}</span>
                          <span className={`text-xs font-medium font-sans ${t === "Closed" ? "text-[#9AB0BA]" : "text-[#0A7E94]"}`}>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              {sent ? (
                <div className="bg-[#EDF8FB] rounded-3xl p-10 md:p-12 text-center border border-[rgba(10,126,148,0.12)]">
                  <div className="w-16 h-16 rounded-full bg-[#0A7E94]/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} className="text-[#0A7E94]" />
                  </div>
                  <h3 className="font-serif text-[#0D1F2D] text-xl mb-2">Message Sent!</h3>
                  <p className="body-text-sm">
                    Thank you for reaching out, {form.name}. We'll get back to you within 1–2 business days.
                  </p>
                </div>
              ) : (
                <form onSubmit={handle} className="card-premium p-8 md:p-10">
                  <h3 className="font-serif text-[#0D1F2D] text-xl mb-6">Send Us a Message</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { key: "name", label: "Full Name *", placeholder: "Jane Smith", type: "text", required: true },
                      { key: "email", label: "Email Address *", placeholder: "jane@example.com", type: "email", required: true },
                      { key: "phone", label: "Phone Number", placeholder: "04xx xxx xxx", type: "tel", required: false },
                      { key: "subject", label: "Subject", placeholder: "e.g. Appointment enquiry", type: "text", required: false },
                    ].map(({ key, label, placeholder, type, required }) => (
                      <div key={key}>
                        <label className="form-label">{label}</label>
                        <input
                          type={type}
                          required={required}
                          placeholder={placeholder}
                          value={form[key as keyof typeof form]}
                          onChange={(e) => setForm(v => ({ ...v, [key]: e.target.value }))}
                          className="form-input"
                        />
                      </div>
                    ))}
                    <div className="sm:col-span-2">
                      <label className="form-label">Message *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        value={form.message}
                        onChange={(e) => setForm(v => ({ ...v, message: e.target.value }))}
                        className="form-input resize-none"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary mt-6">
                    <Send size={15} /> Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28 section-white">
        <div className="site-container">
          <div className="image-frame h-72 lg:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3296.0!2d150.1731!3d-35.7075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s116+Beach+Rd%2C+Batemans+Bay+NSW+2536!5e0!3m2!1sen!2sau!4v1688000000000!5m2!1sen!2sau"
              className="w-full h-full rounded-3xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Beach Road Surgery location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
