import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const NotFound = () => (
  <div className="container-wide py-28 md:py-40 text-center max-w-xl mx-auto" data-testid="page-not-found">
    <SEO title="Sayfa Bulunamadı" description="Aradığınız sayfa bulunamadı." path="/404" />
    <p className="overline mb-3">404</p>
    <h1 className="font-heading text-4xl md:text-5xl text-ink leading-tight mb-4">
      Aradığınız sayfa bulunamadı
    </h1>
    <p className="text-base text-ink-muted leading-relaxed mb-8">
      Bağlantı taşınmış ya da güncellenmiş olabilir. Ana sayfaya dönmeyi
      deneyebilirsiniz.
    </p>
    <Link
      to="/"
      className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
    >
      Anasayfaya dön
    </Link>
  </div>
);

export default NotFound;
