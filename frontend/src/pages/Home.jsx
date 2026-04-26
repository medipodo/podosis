import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Scissors,
  Shield,
  Stethoscope,
  Heart,
  MapPin,
  Star,
  Phone,
} from "lucide-react";
import SEO from "../components/SEO";
import FaqBlock from "../components/FaqBlock";
import {
  clinic,
  services,
  whyPodosis,
  products,
  blogPosts,
  reviews,
  faqs,
  gallery,
} from "../mock";

const iconMap = {
  Sparkles,
  Scissors,
  Shield,
  Stethoscope,
  Heart,
  MapPin,
};

const Home = () => {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: clinic.name,
    image:
      "https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/dkhwxa40_podosis.webp",
    url: "https://podosis.com",
    telephone: clinic.phone,
    priceRange: "₺₺",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Atakent Mah 1512. Cad 104/D",
      addressLocality: "Etimesgut",
      addressRegion: "Ankara",
      postalCode: "06796",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.lat,
      longitude: clinic.geo.lng,
    },
    areaServed: ["Elvankent", "Etimesgut", "Ankara"],
    openingHours: "Mo-Sa 09:00-19:00",
    sameAs: [clinic.instagram],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div data-testid="page-home">
      <SEO
        title="Elvankent Ayak Bakım Merkezi"
        description="Podosis — Elvankent'te medikal ayak bakımı, batık tırnak ve tırnak mantarı için klinik düzeyde çözümler. Sağlıklı Adımlar."
        path="/"
        jsonLd={[localBusinessJsonLd, faqJsonLd]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden grain-bg" data-testid="hero-section">
        <div className="absolute -top-24 -right-24 w-[520px] h-[520px] rounded-full bg-brand/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 -left-32 w-[420px] h-[420px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />

        <div className="container-wide relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-14 md:pt-20 pb-20 md:pb-28">
          <div className="flex flex-col gap-7">
            <span className="overline" data-testid="hero-overline">
              Ayak Bakımı · Elvankent
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-ink">
              Elvankent'te{" "}
              <span className="italic text-brand">profesyonel</span> ayak
              bakım hizmeti
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-xl">
              Ayak bakımı, batık tırnak ve tırnak mantarı için klinik
              düzeyde, butik bir yaklaşım. Her vaka kendi dinamiğinde
              değerlendirilir — sterilizasyon ve kişisel takip standart.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={clinic.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-4 rounded-full font-medium hover:bg-brand-hover active:scale-[0.98] transition-all shadow-pink-glow"
                data-testid="hero-whatsapp-cta"
              >
                WhatsApp'tan Yaz
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                to="/hizmetler"
                className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink px-7 py-4 rounded-full font-medium hover:border-brand hover:text-brand transition-colors"
                data-testid="hero-services-cta"
              >
                Hizmetlerimiz
              </Link>
            </div>

            <div className="flex items-center gap-6 pt-6 text-sm text-ink-muted">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-brand fill-brand" />
                  ))}
                </div>
                <span className="font-medium text-ink">5.0</span>
              </div>
              <span>Google yorumlarında</span>
              <span className="hidden md:inline">·</span>
              <span className="hidden md:inline">700+ danışan</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-brand/5 rounded-[120px_20px_120px_20px] rotate-2 hidden md:block" />
            <img
              src="https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/dkhwxa40_podosis.webp"
              alt="Podosis ayak bakım kliniği — sıcak ve hijyenik ortam"
              loading="eager"
              fetchPriority="high"
              width="1400"
              height="900"
              className="relative w-full aspect-[4/5] md:aspect-[5/6] object-cover rounded-[80px_16px_80px_16px] md:rounded-[120px_20px_120px_20px] shadow-pink-soft"
            />
            <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-pink-soft px-5 py-4 items-center gap-3 max-w-[220px]">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="font-heading text-sm text-ink leading-tight">
                  Klinik Düzeyde Hijyen
                </p>
                <p className="text-xs text-ink-muted">Steril Ortam</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28" data-testid="services-section">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <p className="overline mb-3">Hizmetlerimiz</p>
              <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight">
                Her sorunun{" "}
                <span className="italic text-brand">kendi yoluna göre</span>{" "}
                bir çözümü var
              </h2>
            </div>
            <Link
              to="/hizmetler"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand group transition-colors"
              data-testid="services-see-all"
            >
              Tüm hizmetleri gör
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => {
              const Icon = iconMap[s.icon] || Sparkles;
              return (
                <Link
                  key={s.slug}
                  to={`/hizmetler/${s.slug}`}
                  className="group bg-white rounded-2xl border border-border p-6 flex flex-col hover:-translate-y-2 hover:shadow-pink-soft transition-all duration-300"
                  data-testid={`service-card-${s.slug}`}
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-bone">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      loading="lazy"
                      width="600"
                      height="450"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-brand-light flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="font-heading text-xl text-ink mb-2 leading-tight">
                    {s.shortTitle}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">
                    {s.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Detay
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHY PODOSIS */}
      <section className="py-20 md:py-28 bg-bone/50" data-testid="why-section">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <p className="overline mb-3">Neden Podosis?</p>
            <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight">
              Küçük farklar,{" "}
              <span className="italic text-brand">uzun süreli rahat</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyPodosis.map((item, i) => {
              const Icon = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border p-7 flex flex-col items-start hover:border-brand/30 transition-colors"
                  data-testid={`why-card-${i}`}
                >
                  <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h3 className="font-heading text-lg text-ink mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-20 md:py-28" data-testid="gallery-preview">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="overline mb-3">Öncesi / Sonrası</p>
              <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight">
                Gerçek vakalardan{" "}
                <span className="italic text-brand">somut farklar</span>
              </h2>
            </div>
            <Link
              to="/galeri"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand group transition-colors"
            >
              Tüm galeriye git
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {gallery.slice(0, 3).map((g) => (
              <div
                key={g.id}
                className="rounded-2xl overflow-hidden bg-white border border-border"
                data-testid={`gallery-preview-${g.id}`}
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img
                      src={g.before}
                      alt={`${g.title} — öncesi`}
                      loading="lazy"
                      width="600"
                      height="600"
                      className="w-full aspect-square object-cover"
                    />
                    <span className="absolute top-3 left-3 text-[0.65rem] uppercase tracking-[0.22em] bg-white/95 text-ink px-2.5 py-1 rounded-full">
                      Öncesi
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={g.after}
                      alt={`${g.title} — sonrası`}
                      loading="lazy"
                      width="600"
                      height="600"
                      className="w-full aspect-square object-cover"
                    />
                    <span className="absolute top-3 left-3 text-[0.65rem] uppercase tracking-[0.22em] bg-brand text-white px-2.5 py-1 rounded-full">
                      Sonrası
                    </span>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <p className="font-heading text-base text-ink">{g.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-20 md:py-28 bg-brand-light/30" data-testid="products-section">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <p className="overline mb-3">PediZone</p>
            <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight">
              Evde de{" "}
              <span className="italic text-brand">kliniğin hissini</span>{" "}
              sürdürün
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {products.map((p) => (
              <Link
                key={p.slug}
                to={`/urunler/${p.slug}`}
                className="group bg-white rounded-2xl border border-border p-6 hover:-translate-y-1 hover:shadow-pink-soft transition-all duration-300 flex flex-col"
                data-testid={`product-card-${p.slug}`}
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-bone mb-5 flex items-center justify-center p-4">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width="600"
                    height="600"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-xs uppercase tracking-[0.18em] text-brand font-medium mb-2">
                  {p.category}
                </span>
                <h3 className="font-heading text-xl text-ink mb-1 leading-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-ink-muted mb-4">{p.volume}</p>
                <p className="text-sm text-ink-muted leading-relaxed flex-1 mb-4">
                  {p.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                  Detaya bak
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section className="py-20 md:py-28" data-testid="blog-preview">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="overline mb-3">Blog</p>
              <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight">
                En çok{" "}
                <span className="italic text-brand">okunan yazılarımız</span>
              </h2>
            </div>
            <Link
              to="/blog"
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand group transition-colors"
            >
              Tüm blog yazıları
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.slice(0, 3).map((b) => (
              <Link
                key={b.slug}
                to={`/blog/${b.slug}`}
                className="group flex flex-col"
                data-testid={`blog-card-${b.slug}`}
              >
                <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-bone mb-5">
                  <img
                    src={b.cover}
                    alt={b.coverAlt}
                    loading="lazy"
                    width="800"
                    height="640"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-brand font-medium mb-2">
                  {b.readMinutes} dk okuma
                </p>
                <h3 className="font-heading text-xl md:text-2xl text-ink mb-2 leading-tight group-hover:text-brand transition-colors">
                  {b.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {b.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-20 md:py-28 bg-bone/50" data-testid="reviews-section">
        <div className="container-wide">
          <div className="max-w-2xl mb-14">
            <p className="overline mb-3">Danışanlarımız</p>
            <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight">
              Yorumlar, bize{" "}
              <span className="italic text-brand">yön veriyor</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border p-6 flex flex-col"
                data-testid={`review-card-${i}`}
              >
                <div className="flex mb-4">
                  {Array.from({ length: r.stars }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-brand fill-brand" />
                  ))}
                </div>
                <p className="text-sm text-ink-muted leading-relaxed mb-5 flex-1">
                  "{r.text}"
                </p>
                <div>
                  <p className="font-heading text-base text-ink">{r.name}</p>
                  <p className="text-xs text-ink-muted">{r.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <FaqBlock items={faqs} />
      </section>

      {/* LOCATION / CONTACT */}
      <section className="py-20 md:py-24 bg-brand-light/30" data-testid="location-section">
        <div className="container-wide grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="overline mb-3">Konum & İletişim</p>
            <h2 className="text-3xl md:text-5xl font-heading text-ink tracking-tight leading-tight mb-6">
              Elvankent'te,{" "}
              <span className="italic text-brand">kolay ulaşım</span>.
            </h2>
            <div className="space-y-4 text-base text-ink-muted mb-8">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <span>{clinic.address}</span>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-brand flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${clinic.phone}`}
                  className="hover:text-brand transition-colors"
                >
                  {clinic.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={clinic.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
              >
                WhatsApp'tan Yaz
              </a>
              <a
                href={clinic.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink px-7 py-3.5 rounded-full font-medium hover:border-brand hover:text-brand transition-colors"
              >
                Google Haritalar
              </a>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden border border-border aspect-[4/3] bg-white shadow-pink-soft">
            <iframe
              src={clinic.mapsEmbed}
              title="Podosis konumu"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
