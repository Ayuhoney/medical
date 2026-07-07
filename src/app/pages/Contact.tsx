import { useState } from "react";
import { Phone, MapPin, Clock, Mail, CheckCircle, Send, Printer, MessageCircle } from "lucide-react";
import { IMAGES, CLINIC } from "@/app/constants";
import { PageHero } from "@/app/components/ui";
import { api } from "@/app/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await api.contact.submit({
        name: form.name,
        email: form.email,
        phone: form.phone || undefined,
        subject: form.subject || undefined,
        message: form.message,
      });
      setSent(true);
    } catch (err: any) {
      setError(err?.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
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
                { icon: <MessageCircle size={18} className="text-[#0A7E94]" />, label: "WhatsApp", value: CLINIC.whatsapp, href: `https://wa.me/${CLINIC.whatsapp.replace(/\s/g, "")}` },
                { icon: <Printer size={18} className="text-[#0A7E94]" />, label: "Fax", value: CLINIC.fax },
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
                      {[{ d: "Monday – Friday", t: "9:00 AM – 4:30 PM" }, { d: "Saturday", t: "9:00 AM – 12:30 PM" }, { d: "Sunday", t: "Closed" }].map(({ d, t }) => (
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
                  {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
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
                  <button type="submit" className="btn-primary mt-6" disabled={loading}>
                    <Send size={15} /> {loading ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="section-py section-muted scroll-mt-28">
        <div className="site-container-narrow">
          <div className="text-center mb-10 md:mb-14">
            <p className="eyebrow">FAQ</p>
            <h2 className="heading-section">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              {
                q: "Do I need a referral from my GP for skin checks?",
                a: "No, you do not need a referral. However, if your GP has referred you to us, they will give you a letter to bring to your appointment.",
              },
              {
                q: "How long does a skin check take?",
                a: "A skin check can take between 15 and 30 minutes, depending on your skin type and the number of skin spots or moles you have. Make sure you tell the doctor about any spots or moles which are sore, changing, abnormal or new.",
              },
              {
                q: "How is the skin check performed?",
                a: "The doctor will ask you to undress down to your underwear — you can ask for a modesty sheet if you wish. The doctor uses a dermatoscope, a special skin microscope that allows them to look deep into your skin, to visually inspect your whole body. The procedure is completely painless.",
              },
              {
                q: "What happens if the doctor finds a suspicious skin spot?",
                a: "The doctor will tell you straight away if any moles or spots require a biopsy — a small sample of skin removed for testing at a pathology laboratory. Results can take several days, and results and treatment options are discussed at length at your follow-up appointment.",
              },
              {
                q: "What happens if a skin cancer is found?",
                a: "In most cases, when found early, skin cancer can be easily and successfully treated with surgery. Most skin cancers are cured once they are removed. Other non-surgical treatments may be used depending on the type of skin cancer found.",
              },
              {
                q: "Do you Bulk Bill?",
                a: "We are a private billing practice, and we appreciate full payment on the day of consultation. We are dedicated to providing the best standard of patient care without compromise — our highly qualified doctors will address your health needs promptly and efficiently.",
              },
              {
                q: "Are the doctors GPs or Dermatologists?",
                a: "Dr Walgamage is a Specialist General Practitioner with advanced qualifications in skin cancer medicine and surgery. He has completed university-certified skin cancer training and has many years' experience in the detection and surgical removal of skin cancers.",
              },
              {
                q: "Why do I need a biopsy before my procedure?",
                a: "It is important that you have a biopsy, as the results of this procedure will influence the best course of action for your treatment.",
              },
            ].map(({ q, a }) => (
              <details key={q} className="card-surface p-5 md:p-6 group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-[#0D1F2D] font-semibold text-sm font-sans select-none">
                  {q}
                  <span className="text-[#0A7E94] shrink-0 group-open:hidden">+</span>
                  <span className="text-[#0A7E94] shrink-0 hidden group-open:inline">−</span>
                </summary>
                <p className="body-text-sm mt-3">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py section-white">
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
