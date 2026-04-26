import React, { useState } from "react";
import { Phone, MapPin, Mail, Clock, Instagram, Send, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { clinic } from "../mock";

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [state, setState] = useState({ loading: false, ok: false, error: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setState({ loading: false, ok: false, error: "Lütfen tüm alanları doldurun." });
      return;
    }
    setState({ loading: true, ok: false, error: "" });
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...form }),
      });
      if (!res.ok) throw new Error("Form submission failed");
      setState({ loading: false, ok: true, error: "" });
      setForm({ name: "", phone: "", message: "" });
    } catch (err) {
      setState({
        loading: false,
        ok: false,
        error:
          "Mesajınız gönderilemedi. Lütfen WhatsApp üzerinden iletişime geçin.",
      });
    }
  };

  return (
    <div data-testid="page-contact">
      <SEO
        title="İletişim"
        description="Podosis — Elvankent / Etimesgut Ankara. Adres, telefon, WhatsApp ve Google Haritalar bilgileri."
        path="/iletisim"
      />

      <section className="pt-20 md:pt-28 pb-10 grain-bg">
        <div className="container-wide max-w-4xl">
          <p className="overline mb-4">İletişim</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-6">
            Kapımız{" "}
            <span className="italic text-brand">her zaman açık</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-3xl">
            Randevu, bilgi veya kısa bir ön değerlendirme için en hızlı yol
            WhatsApp. Aşağıdaki formu da kullanabilir ya da doğrudan arayabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-wide grid lg:grid-cols-[5fr_6fr] gap-10 lg:gap-14 items-start">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-border p-6 md:p-7">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h2 className="font-heading text-lg text-ink mb-1">Adres</h2>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {clinic.address}
                  </p>
                  <a
                    href={clinic.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-brand font-medium underline underline-offset-4"
                  >
                    Google Haritalar'da aç
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 md:p-7">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h2 className="font-heading text-lg text-ink mb-1">Telefon & WhatsApp</h2>
                  <a
                    href={`tel:${clinic.phone}`}
                    className="block text-sm text-ink-muted hover:text-brand transition-colors"
                    data-testid="contact-phone-link"
                  >
                    {clinic.phoneDisplay}
                  </a>
                  <a
                    href={clinic.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm text-brand font-medium underline underline-offset-4"
                    data-testid="contact-whatsapp-link"
                  >
                    WhatsApp sohbetini başlat
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 md:p-7">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h2 className="font-heading text-lg text-ink mb-1">E-posta & Sosyal</h2>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="block text-sm text-ink-muted hover:text-brand transition-colors"
                  >
                    {clinic.email}
                  </a>
                  <a
                    href={clinic.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-3 text-sm text-brand font-medium"
                  >
                    <Instagram className="w-4 h-4" />
                    {clinic.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-border p-6 md:p-7">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <h2 className="font-heading text-lg text-ink mb-1">Çalışma Saatleri</h2>
                  <p className="text-sm text-ink-muted">{clinic.hours}</p>
                  <p className="text-xs text-ink-muted mt-2">Randevulu çalışıyoruz.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form + Map */}
          <div className="space-y-8">
            <form
              onSubmit={onSubmit}
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="bg-white rounded-3xl border border-border p-6 md:p-8"
              data-testid="contact-form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Bu alanı boş bırakın: <input name="bot-field" />
                </label>
              </p>
              <h2 className="font-heading text-2xl text-ink mb-5">Bize yazın</h2>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-medium text-ink mb-1.5 block">
                    Adınız
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Adınız Soyadınız"
                    className="w-full rounded-full border border-border bg-cream px-5 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    data-testid="contact-name-input"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink mb-1.5 block">
                    Telefon
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="0 5__ ___ __ __"
                    className="w-full rounded-full border border-border bg-cream px-5 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                    data-testid="contact-phone-input"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-ink mb-1.5 block">
                    Mesajınız
                  </span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    placeholder="Kısaca şikayetiniz ve uygun günleriniz..."
                    className="w-full rounded-2xl border border-border bg-cream px-5 py-3 text-sm focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                    data-testid="contact-message-input"
                  />
                </label>

                {state.error && (
                  <p className="text-sm text-red-600" data-testid="contact-error">
                    {state.error}
                  </p>
                )}
                {state.ok && (
                  <div
                    className="flex items-center gap-2 text-sm text-green-700 bg-green-50 border border-green-200 rounded-2xl px-4 py-3"
                    data-testid="contact-success"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    Mesajınız ulaştı. En kısa sürede dönüş yapacağız.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={state.loading}
                  className="w-full inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow disabled:opacity-60 disabled:cursor-not-allowed"
                  data-testid="contact-submit"
                >
                  {state.loading ? "Gönderiliyor..." : "Mesajı Gönder"}
                  {!state.loading && <Send className="w-4 h-4" />}
                </button>
                <p className="text-xs text-ink-muted text-center">
                  Daha hızlı yanıt için{" "}
                  <a
                    href={clinic.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand underline underline-offset-4"
                  >
                    WhatsApp
                  </a>
                  'ı tercih edebilirsiniz.
                </p>
              </div>
            </form>

            <div className="rounded-3xl overflow-hidden border border-border aspect-[16/10] bg-white shadow-pink-soft">
              <iframe
                src={clinic.mapsEmbed}
                title="Podosis konum"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
