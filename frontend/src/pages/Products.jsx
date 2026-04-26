import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import { products, clinic } from "../mock";

const Products = () => {
  return (
    <div data-testid="page-products">
      <SEO
        title="PediZone Ürünleri"
        description="Podosis kliniğinde kullandığımız PediZone ürünleri: temizlik, çatlak bakımı ve tırnak sağlığı için profesyonel ayak bakım serisi."
        path="/urunler"
      />

      <section className="pt-20 md:pt-28 pb-10 grain-bg">
        <div className="container-wide max-w-4xl">
          <p className="overline mb-4">PediZone</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-6">
            Kliniğimizde{" "}
            <span className="italic text-brand">kullandığımız seri</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-3xl">
            PediZone ürünleri, seans sonrası rutinin parçası olarak
            tasarlanmıştır. Kliniğimizden bilgi alabilir ya da WhatsApp
            üzerinden size uygun ürünü birlikte seçebiliriz. Bu sayfa
            bilgilendirme amaçlıdır — sipariş/satış yapılmamaktadır.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link
              key={p.slug}
              to={`/urunler/${p.slug}`}
              className="group bg-white rounded-2xl border border-border p-6 hover:-translate-y-1 hover:shadow-pink-soft transition-all duration-300 flex flex-col"
              data-testid={`product-list-${p.slug}`}
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
              <h2 className="font-heading text-xl text-ink mb-1 leading-tight">
                {p.name}
              </h2>
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
        <div className="container-wide mt-14 text-center">
          <p className="text-ink-muted mb-5">
            Hangi ürün size uygun olduğundan emin değil misiniz?
          </p>
          <a
            href={clinic.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
          >
            WhatsApp'tan Sor
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Products;
