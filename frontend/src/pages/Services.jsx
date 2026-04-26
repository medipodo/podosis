import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Scissors, Shield, Stethoscope } from "lucide-react";
import SEO from "../components/SEO";
import { services, clinic } from "../mock";

const iconMap = { Sparkles, Scissors, Shield, Stethoscope };

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `https://podosis.com/hizmetler/${s.slug}`,
      name: s.title,
    })),
  };
  return (
    <div data-testid="page-services">
      <SEO
        title="Hizmetlerimiz"
        description="Podosis Elvankent — medikal ayak bakımı, batık tırnak, tırnak mantarı ve genel tırnak tedavisi. Klinik düzeyde çözümler."
        path="/hizmetler"
        jsonLd={jsonLd}
      />

      <section className="pt-20 md:pt-28 pb-12 grain-bg">
        <div className="container-wide max-w-4xl">
          <p className="overline mb-4">Hizmetlerimiz</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-6">
            Klinik{" "}
            <span className="italic text-brand">uygulamalarımız</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-3xl">
            Her hizmetimiz, ihtiyacınıza özel bir değerlendirme ile başlar.
            Aşağıdaki uygulamaları detaylı sayfalardan inceleyebilir ya da
            WhatsApp üzerinden fotoğrafla ön görüş alabilirsiniz.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 pb-24">
        <div className="container-wide space-y-6 md:space-y-8">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon] || Sparkles;
            const flip = i % 2 === 1;
            return (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className="group grid md:grid-cols-[5fr_7fr] gap-6 md:gap-10 items-center bg-white rounded-3xl border border-border p-5 md:p-8 hover:border-brand/30 hover:shadow-pink-soft transition-all duration-300"
                data-testid={`service-list-${s.slug}`}
              >
                <div className={`overflow-hidden rounded-2xl bg-bone ${flip ? "md:order-2" : ""}`}>
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    loading="lazy"
                    width="800"
                    height="600"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className={flip ? "md:order-1" : ""}>
                  <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-brand" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl text-ink leading-tight mb-3">
                    {s.title}
                  </h2>
                  <p className="text-base text-ink-muted leading-relaxed mb-5 line-clamp-3">
                    {s.intro}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                    Detayları gör
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="container-wide mt-16 text-center">
          <p className="text-ink-muted mb-5">
            Hangi hizmetin size uygun olduğundan emin değil misiniz?
          </p>
          <a
            href={clinic.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
          >
            WhatsApp'tan Ön Görüşme Al
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
