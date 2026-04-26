# Podosis — Favicon Set

Bu klasör, **podosis.com** için Google'ın önerdiği tüm formatlarda hazırlanmış
favicon setini içerir. Tasarım: site teması (`#E91E63` pembe) üzerine, sitenin
başlık fontuyla aynı olan **Fraunces** serif "P" lettermark'ı.

## Dosya listesi

| Dosya | Boyut | Kullanım |
|---|---|---|
| `favicon.ico` | 16+32+48 (multi) | Klasik tarayıcı sekmesi (Google'ın birincil fallback'i) |
| `favicon.svg` | vektör | Modern tarayıcılar — keskin her boyutta |
| `safari-pinned-tab.svg` | tek renk | Safari pinned tab |
| `favicon-16x16.png` | 16 | Eski tarayıcılar |
| `favicon-32x32.png` | 32 | Standart sekme ikonu |
| `favicon-48x48.png` | 48 | Windows kısayol |
| `favicon-96x96.png` | 96 | Desktop / yüksek-DPI |
| `favicon-192x192.png` | 192 | Genel PWA |
| `apple-touch-icon.png` | 180 | iOS (varsayılan ad — Safari otomatik bulur) |
| `apple-touch-icon-152x152.png` | 152 | iPad |
| `apple-touch-icon-167x167.png` | 167 | iPad Pro |
| `android-chrome-192x192.png` | 192 | Android ana ekran |
| `android-chrome-512x512.png` | 512 | Android splash + PWA |
| `maskable-icon-512x512.png` | 512 | PWA maskable (Android adaptive) |
| `mstile-150x150.png` | 150 | Windows tile |
| `site.webmanifest` | – | PWA manifest |
| `browserconfig.xml` | – | Windows tile config |

## Kuruluma 2 dakikada nasıl yapılır

1. Bu `favicons/` klasörünün **tamamını** kopyala → projedeki `public/`
   (veya statik klasör) içine bırak.
2. **`favicon.ico` dosyasının bir kopyasını projenin kök dizinine** (yani
   `public/favicon.ico`) da koy. Google ve birçok tarayıcı her zaman önce
   `/favicon.ico` adresine bakar.
3. Sitenin `<head>` etiketinin içine aşağıdaki bloğu yapıştır
   (zaten varsa eski favicon satırlarını sil):

```html
<!-- Podosis favicons -->
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg">
<link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicons/favicon-48x48.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="192x192" href="/favicons/favicon-192x192.png">
<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png">
<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="167x167" href="/favicons/apple-touch-icon-167x167.png">
<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#E91E63">
<link rel="manifest" href="/favicons/site.webmanifest">
<meta name="theme-color" content="#E91E63">
<meta name="msapplication-TileColor" content="#E91E63">
<meta name="msapplication-config" content="/favicons/browserconfig.xml">
```

> Not: Sitenin `<head>` zaten `<meta name="theme-color" content="#E91E63">`
> içeriyor — yeni satırla aynı olduğu için sorun çıkmaz, dilersen tekrar
> eklemeyebilirsin.

## Cache uyarısı

Google ve tarayıcılar favicon'ları agresifce cache'ler. Yayına aldıktan sonra
sekmedeki ikon hemen değişmezse:

- Tarayıcıyı sertçe yenile (Ctrl+F5).
- Search Console'da `/favicon.ico`'yu yeniden taratabilirsin.
- Google'ın yeni faviconu arama sonuçlarına yansıtması bazen birkaç gün sürer.

## Yeniden üretmek

Renk veya harf değiştirmek istersen `gen_favicons.py` script'i tek dosyadan
tüm seti üretir (Pillow + Fraunces gerektirir).
