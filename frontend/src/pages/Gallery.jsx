import React from "react";
import SEO from "../components/SEO";
import { gallery, clinic } from "../mock";

const Gallery = () => {
  return (
    <div data-testid="page-gallery">
      <SEO
        title="Galeri"
        description="Podosis öncesi / sonrası galerisi ve klinik fotoğrafları. Elvankent'te ayak bakımı ve tırnak tedavisinden gerçek vakalar."
        path="/galeri"
      />

      <section className="pt-20 md:pt-28 pb-10 grain-bg">
        <div className="container-wide max-w-4xl">
          <p className="overline mb-4">Galeri</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-6">
            Öncesi /{" "}
            <span className="italic text-brand">sonrası</span> ve klinik
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-3xl">
            Danışanlarımızın izniyle paylaştığımız somut sonuçlar ve
            kliniğimizden kareler. Tüm uygulamalar aynı sterilizasyon
            standartlarıyla, butik klinik konforunda gerçekleştirilir.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          {gallery.map((g) => (
            <div
              key={g.id}
              className="rounded-3xl overflow-hidden bg-white border border-border hover:shadow-pink-soft transition-shadow duration-300"
              data-testid={`gallery-item-${g.id}`}
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img
                    src={g.before}
                    alt={`${g.title} — öncesi`}
                    loading="lazy"
                    width="800"
                    height="800"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="absolute top-3 left-3 text-[0.65rem] uppercase tracking-[0.22em] bg-white/95 text-ink px-2.5 py-1 rounded-full font-medium">
                    Öncesi
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={g.after}
                    alt={`${g.title} — sonrası`}
                    loading="lazy"
                    width="800"
                    height="800"
                    className="w-full aspect-square object-cover"
                  />
                  <span className="absolute top-3 left-3 text-[0.65rem] uppercase tracking-[0.22em] bg-brand text-white px-2.5 py-1 rounded-full font-medium">
                    Sonrası
                  </span>
                </div>
              </div>
              <div className="px-6 py-5">
                <h2 className="font-heading text-lg text-ink">{g.title}</h2>
              </div>
            </div>
          ))}
        </div>

        <div className="container-wide mt-16 text-center max-w-2xl">
          <p className="text-ink-muted">
            Kendi vakanız için ön görüş ister misiniz?{" "}
            <a
              href={clinic.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand font-medium underline underline-offset-4 hover:text-brand-hover"
            >
              WhatsApp'tan fotoğraf gönderip yazabilirsiniz.
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
