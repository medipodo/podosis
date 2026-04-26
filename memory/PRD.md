# Podosis — Elvankent Ayak Bakım Merkezi

## Original Problem Statement
Elvankent/Ankara'da faaliyet gösteren bir ayak bakım merkezi için SADE, HIZLI ve SEO'ya UYUMLU tanıtım web sitesi. podosis.com. Online ödeme / üyelik / e-randevu YOK. Amaç: Google'da bulunmak, WhatsApp'tan iletişim almak, Google Maps'e yönlendirmek.

## Architecture
- React (CRA) + react-router-dom v7 + Tailwind
- react-helmet-async → per-page title / meta / JSON-LD
- lucide-react icons; fonts: Fraunces (headings) + DM Sans (body)
- Static content via `src/mock.js` (services, products, blogs, reviews, FAQs, gallery, clinic info)
- Minimal FastAPI backend: single `POST /api/contact` endpoint saving to MongoDB
- robots.txt + sitemap.xml under `/public`

## User Personas
- **Primary**: Elvankent/Etimesgut/Eryaman residents searching for "ayak bakımı, batık tırnak, tırnak mantarı" on Google.
- **Secondary**: Diyabet hastası bakım arayanlar, sporcular, ileri yaş danışanlar.
- **Action flow**: Google → landing → WhatsApp (en yüksek dönüşüm) veya Google Maps yönlendirme.

## Core Requirements (static)
- 13 route (anasayfa, hakkımızda, hizmetler list + 4 detay, ürünler list + 3 detay, blog list + 5 detay, galeri, iletişim)
- Sticky sağ-alt WhatsApp butonu her sayfada
- Pembe marka rengi (#E91E63), dark mode YOK
- Mobile responsive (≥%70 mobil trafik beklentisi)
- LocalBusiness + MedicalProcedure + Article + FAQPage + Product JSON-LD

## What's Been Implemented (2026-04-24)
- [x] 13 route çalışır durumda — tüm sayfalar render oluyor
- [x] Anasayfa: Hero + 4 hizmet kartı + Neden Podosis (4) + öncesi/sonrası galeri + PediZone (3) + blog (3) + 4 review + FAQ (5) + Google Maps + footer
- [x] 5 özgün Türkçe blog yazısı (FAQ içerikli, Article JSON-LD)
- [x] 4 hizmet detay sayfası (Service + FAQPage JSON-LD)
- [x] 3 ürün detay sayfası (Product JSON-LD)
- [x] Galeri (öncesi/sonrası)
- [x] İletişim: form (MongoDB'ye yazım) + Google Maps iframe + tel/WhatsApp/email/Instagram
- [x] SEO: her sayfada react-helmet-async title/description/canonical/OG/Twitter/JSON-LD
- [x] robots.txt + sitemap.xml (13 URL)
- [x] Sabit WhatsApp butonu (soft-bounce animasyon)
- [x] Hamburger mobil menü
- [x] Backend: POST /api/contact, GET /api/, GET /api/health
- [x] 100% test success (backend + frontend, testing agent iter 1)

## Backlog (P0 → P2)
### P0 (launch blockers, kullanıcıya bağlı)
- [ ] Gerçek logo dosyasının eklenmesi (şu an SVG lotus text-mark)
- [ ] Kliniğin gerçek öncesi/sonrası fotoğrafları (şu an stok görseller)
- [ ] Kliniğin gerçek iç mekân ve hero fotoğrafları
- [ ] Kesin çalışma saatleri ve e-posta (şu an placeholder: Pzt-Cmt 09:00-19:00, info@podosis.com)

### P1 (SEO/performans iyileştirmeleri)
- [ ] Google Search Console & Analytics bağlama, Google Business Profile entegrasyonu
- [ ] Open Graph görselleri için özel kapak tasarımı (1200x630)
- [ ] Favicon / apple-touch-icon / manifest.json güncelleme
- [ ] Blog yazılarına iç link ağı gözden geçirmesi (breadcrumb schema ekle)
- [ ] Gerçek Google Maps koordinatları (geo.lat/lng) brand'in tam lokasyonuyla güncellenmeli

### P2 (faz 2 özellikleri)
- [ ] Admin paneli: gelen iletişim mesajlarının görüntülenmesi (şu an sadece POST; GET kaldırıldı — PII koruması)
- [ ] E-posta bildirimi: yeni iletişim mesajı geldiğinde info@podosis.com'a otomatik mail
- [ ] Google Reviews API ile gerçek yorum çekme
- [ ] Sık ziyaret eden ziyaretçiler için çerez rızası modalı (footer link mevcut, modal eklenebilir)
- [ ] Faz 2 için rate limiting (slowapi) ve captcha iletişim formuna

## Notes / Security
- CORS şu an `*` (production için podosis.com'a daraltılmalı)
- `/api/contact` GET endpoint'i PII sızıntısını önlemek için kaldırıldı — sadece POST mevcut
- MongoDB'de `contact_messages` koleksiyonunda mesajlar saklanıyor
