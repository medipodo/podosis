import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Phone,
  Check,
  ChevronRight,
  Sparkles,
  Scissors,
  Shield,
  Stethoscope,
} from "lucide-react";
import SEO from "../components/SEO";
import FaqBlock from "../components/FaqBlock";
import { getService, services, clinic } from "../mock";

const iconMap = { Sparkles, Scissors, Shield, Stethoscope };

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = getService(slug);

  if (!service) return <Navigate to="/hizmetler" replace />;

  const Icon = iconMap[service.icon] || Sparkles;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    description: service.intro,
    provider: {
      "@type": "MedicalBusiness",
      name: clinic.name,
      telephone: clinic.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Atakent Mah 1512. Cad 104/D",
        addressLocality: "Etimesgut",
        addressRegion: "Ankara",
        postalCode: "06796",
        addressCountry: "TR",
      },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <div data-testid={`page-service-${service.slug}`}>
      <SEO
        title={`${service.shortTitle} — Elvankent`}
        description={service.intro.slice(0, 155)}
        path={`/hizmetler/${service.slug}`}
        image={service.image}
        jsonLd={[serviceJsonLd, faqJsonLd]}
      />

      {/* Breadcrumb */}
      <div className="container-wide pt-8 pb-2">
        <nav className="flex items-center gap-2 text-xs text-ink-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand transition-colors">Anasayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/hizmetler" className="hover:text-brand transition-colors">Hizmetler</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink">{service.shortTitle}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="pt-6 pb-12 grain-bg">
        <div className="container-wide grid lg:grid-cols-[6fr_5fr] gap-10 lg:gap-16 items-center">
          <div>
            <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-5">
              <Icon className="w-5 h-5 text-brand" />
            </div>
            <p className="overline mb-3">Hizmet Detay</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-5">
              {service.title} —{" "}
              <span className="italic text-brand">Elvankent Podosis</span>
            </h1>
            <p className="text-lg text-ink-muted leading-relaxed max-w-xl mb-8">
              {service.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={clinic.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
                data-testid="service-whatsapp-cta"
              >
                WhatsApp'tan Randevu
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`tel:${clinic.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink px-7 py-3.5 rounded-full font-medium hover:border-brand hover:text-brand transition-colors"
              >
                <Phone className="w-4 h-4" />
                {clinic.phoneDisplay}
              </a>
            </div>
          </div>
          <div>
            <img
              src={service.image}
              alt={service.imageAlt}
              loading="eager"
              fetchPriority="high"
              width="1200"
              height="900"
              className="w-full aspect-[5/4] object-cover rounded-[80px_16px_80px_16px] md:rounded-[120px_20px_120px_20px] shadow-pink-soft"
            />
          </div>
        </div>
      </section>

      {/* Intro paragraph */}
      <section className="py-16">
        <div className="container-wide max-w-3xl">
          <p className="text-lg md:text-xl text-ink-muted leading-[1.8]">
            {service.intro}
          </p>
        </div>
      </section>

      {/* Suitable for */}
      <section className="py-10 md:py-16 bg-bone/50">
        <div className="container-wide grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl items-start">
          <div>
            <p className="overline mb-3">Kimler için uygun?</p>
            <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight">
              Bu hizmet{" "}
              <span className="italic text-brand">kime iyi gelir</span>?
            </h2>
          </div>
          <ul className="space-y-4">
            {service.suitableFor.map((item, i) => (
              <li key={i} className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 text-brand" strokeWidth={2.5} />
                </div>
                <span className="text-base text-ink-muted leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-24">
        <div className="container-wide max-w-5xl">
          <p className="overline mb-3">Uygulama Süreci</p>
          <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-12">
            Seans{" "}
            <span className="italic text-brand">adım adım</span>
          </h2>
          <ol className="space-y-5">
            {service.process.map((step, i) => (
              <li
                key={i}
                className="group flex gap-5 items-start bg-white rounded-2xl border border-border p-6 hover:border-brand/30 transition-colors"
                data-testid={`process-step-${i}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand text-white font-heading text-lg flex items-center justify-center">
                  {i + 1}
                </div>
                <p className="text-base md:text-lg text-ink leading-relaxed pt-2">
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Local SEO paragraph */}
      <section className="py-16 md:py-20 bg-brand-light/30">
        <div className="container-wide max-w-3xl text-center">
          <p className="overline mb-3">Elvankent & Etimesgut</p>
          <h2 className="font-heading text-2xl md:text-3xl text-ink tracking-tight leading-tight mb-6">
            Elvankent'te {service.shortTitle.toLowerCase()}
          </h2>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed">
            {service.localSeo}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-24">
        <FaqBlock items={service.faqs} title={`${service.shortTitle} — Sık Sorulan Sorular`} />
      </section>

      {/* Other services */}
      <section className="pb-24">
        <div className="container-wide">
          <p className="overline mb-3">Diğer Hizmetler</p>
          <h2 className="font-heading text-2xl md:text-3xl text-ink tracking-tight mb-8">
            Keşfedilecek başka başlıklar
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {otherServices.map((s) => {
              const OI = iconMap[s.icon] || Sparkles;
              return (
                <Link
                  key={s.slug}
                  to={`/hizmetler/${s.slug}`}
                  className="group bg-white rounded-2xl border border-border p-6 hover:border-brand/30 hover:-translate-y-1 transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <OI className="w-4 h-4 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg text-ink mb-1 leading-tight">
                      {s.shortTitle}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {s.tagline}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
