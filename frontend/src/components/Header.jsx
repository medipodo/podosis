import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Phone,
  Home as HomeIcon,
  Info,
  Sparkles,
  ShoppingBag,
  Image as ImageIcon,
  BookOpen,
  Mail,
  Instagram,
  MapPin,
  Clock,
} from "lucide-react";
import LotusMark from "./LotusMark";
import { clinic } from "../mock";

const navItems = [
  { to: "/", label: "Anasayfa", icon: HomeIcon },
  { to: "/hakkimizda", label: "Hakkımızda", icon: Info },
  { to: "/hizmetler", label: "Hizmetler", icon: Sparkles },
  { to: "/urunler", label: "Ürünler", icon: ShoppingBag },
  { to: "/galeri", label: "Galeri", icon: ImageIcon },
  { to: "/blog", label: "Blog", icon: BookOpen },
  { to: "/iletisim", label: "İletişim", icon: Mail },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Header scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body scroll lock + ESC handler when menu is open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-xl bg-cream/85 border-b border-border"
            : "bg-cream/95 border-b border-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="container-wide flex items-center justify-between py-4 md:py-5">
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            data-testid="brand-home-link"
          >
            <LotusMark className="w-9 h-9" />
            <span className="flex flex-col leading-tight">
              <span className="font-heading text-2xl tracking-tight text-ink">
                Podosis
              </span>
              <span className="text-[0.6rem] sm:text-[0.65rem] uppercase tracking-[0.22em] text-brand font-medium">
                Sağlıklı Adımlar
              </span>
            </span>
          </Link>

          <nav
            className="hidden lg:flex items-center gap-7"
            data-testid="desktop-nav"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors relative py-1 ${
                    isActive ? "text-brand" : "text-ink hover:text-brand"
                  }`
                }
                data-testid={`nav-link-${item.to.replace(/\//g, "") || "home"}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${clinic.phone}`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-brand transition-colors"
              data-testid="header-phone-link"
            >
              <Phone className="w-4 h-4" />
              {clinic.phoneDisplay}
            </a>
            <a
              href={clinic.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-hover active:scale-95 transition-all shadow-pink-glow"
              data-testid="header-whatsapp-cta"
            >
              WhatsApp'tan Yaz
            </a>
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2.5 rounded-full hover:bg-brand-light active:scale-95 transition-all"
              aria-label="Menüyü aç"
              data-testid="mobile-menu-open"
            >
              <Menu className="w-6 h-6 text-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-[120] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
        data-testid="mobile-menu"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-ink/45 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Sliding panel */}
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site menüsü"
          className={`absolute right-0 top-0 bottom-0 w-[88%] max-w-sm bg-cream shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-6 pt-5 pb-4 border-b border-border">
            <div className="flex items-center gap-2">
              <LotusMark className="w-8 h-8" />
              <span className="font-heading text-xl text-ink">Podosis</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-2 rounded-full hover:bg-brand-light active:scale-95 transition-all"
              aria-label="Menüyü kapat"
              data-testid="mobile-menu-close"
            >
              <X className="w-6 h-6 text-ink" />
            </button>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto px-3 py-4">
            <ul className="flex flex-col">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      end={item.to === "/"}
                      className={({ isActive }) =>
                        `flex items-center gap-4 px-4 py-3.5 rounded-xl transition-colors ${
                          isActive
                            ? "bg-brand-light/60 text-brand"
                            : "text-ink hover:bg-brand-light/40 hover:text-brand"
                        }`
                      }
                      data-testid={`mobile-nav-${item.to.replace(/\//g, "") || "home"}`}
                    >
                      {({ isActive }) => (
                        <>
                          <span
                            className={`w-9 h-9 rounded-full flex items-center justify-center ${
                              isActive ? "bg-brand text-white" : "bg-white border border-border text-brand"
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </span>
                          <span className="font-heading text-lg leading-none">
                            {item.label}
                          </span>
                        </>
                      )}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer of menu — contact details */}
          <div className="border-t border-border bg-bone/40 px-6 py-5 space-y-4">
            <div className="space-y-2.5 text-xs text-ink-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" />
                <span>{clinic.addressShort}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" />
                <span>{clinic.hours}</span>
              </div>
              <a
                href={clinic.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-brand transition-colors"
              >
                <Instagram className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" />
                <span>{clinic.instagramHandle}</span>
              </a>
            </div>

            <div className="flex flex-col gap-2 pt-1">
              <a
                href={`tel:${clinic.phone}`}
                className="flex items-center justify-center gap-2 border border-ink/15 rounded-full py-3 text-sm font-medium text-ink hover:border-brand hover:text-brand active:scale-95 transition-all"
                data-testid="mobile-phone-cta"
              >
                <Phone className="w-4 h-4" />
                {clinic.phoneDisplay}
              </a>
              <a
                href={clinic.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-brand text-white rounded-full py-3 text-sm font-medium hover:bg-brand-hover active:scale-95 transition-all shadow-pink-glow"
                data-testid="mobile-whatsapp-cta"
              >
                WhatsApp'tan Yaz
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Header;
