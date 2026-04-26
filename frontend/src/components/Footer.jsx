import React from "react";
import { Link } from "react-router-dom";
import { Phone, MapPin, Instagram, Mail, Clock } from "lucide-react";
import LotusMark from "./LotusMark";
import { clinic, services } from "../mock";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="bg-[#111111] text-cream/90 pt-20 pb-10 mt-24"
      data-testid="site-footer"
    >
      <div className="container-wide grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-5">
            <LotusMark className="w-9 h-9" color="#F8BBD0" />
            <span className="font-heading text-2xl text-white">Podosis</span>
          </div>
          <p className="text-sm text-cream/70 leading-relaxed mb-6 max-w-xs">
            Elvankent'te butik klinik düzeyinde ayak bakımı. Hijyen,
            kişisel yaklaşım ve düzenli takiple sağlıklı adımlar atmak için
            buradayız.
          </p>
          <a
            href={clinic.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-cream/80 hover:text-brand transition-colors"
            data-testid="footer-instagram-link"
          >
            <Instagram className="w-4 h-4" />
            {clinic.instagramHandle}
          </a>
        </div>

        <div>
          <h3 className="text-white font-heading text-lg mb-5">Hizmetler</h3>
          <ul className="space-y-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/hizmetler/${s.slug}`}
                  className="text-sm text-cream/70 hover:text-brand transition-colors"
                  data-testid={`footer-service-${s.slug}`}
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-heading text-lg mb-5">Hızlı Bağlantılar</h3>
          <ul className="space-y-3">
            <li>
              <Link to="/hakkimizda" className="text-sm text-cream/70 hover:text-brand transition-colors">
                Hakkımızda
              </Link>
            </li>
            <li>
              <Link to="/urunler" className="text-sm text-cream/70 hover:text-brand transition-colors">
                PediZone Ürünleri
              </Link>
            </li>
            <li>
              <Link to="/galeri" className="text-sm text-cream/70 hover:text-brand transition-colors">
                Galeri
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-sm text-cream/70 hover:text-brand transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/iletisim" className="text-sm text-cream/70 hover:text-brand transition-colors">
                İletişim
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-heading text-lg mb-5">İletişim</h3>
          <ul className="space-y-4 text-sm text-cream/75">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
              <a href={`tel:${clinic.phone}`} className="hover:text-brand transition-colors">
                {clinic.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
              <a href={`mailto:${clinic.email}`} className="hover:text-brand transition-colors">
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="w-4 h-4 mt-0.5 text-brand flex-shrink-0" />
              <span>{clinic.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-wide mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-cream/50">
          © {year} Podosis. Tüm hakları saklıdır.
        </p>
        <p className="text-xs text-cream/50">
          Elvankent · Etimesgut · Ankara
        </p>
      </div>
    </footer>
  );
};

export default Footer;
