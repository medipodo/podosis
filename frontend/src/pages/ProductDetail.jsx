import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, Check, ChevronRight, Quote, Home, Stethoscope } from "lucide-react";
import SEO from "../components/SEO";
import { getProduct, products, clinic } from "../mock";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = getProduct(slug);
  if (!product) return <Navigate to="/urunler" replace />;

  const productUrl = `https://podosis.com/urunler/${product.slug}`;
  const priceText = new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: product.priceCurrency || "TRY",
    minimumFractionDigits: 2,
  }).format(product.price);
  const quoteMessage = encodeURIComponent(
    `Merhaba Podosis, ${product.name} için merkezinizden daha uygun fiyat teklifi almak istiyorum.`
  );
  const quoteUrl = `https://wa.me/${clinic.phone.replace("+", "")}?text=${quoteMessage}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.shortDesc,
    image: product.image,
    url: productUrl,
    brand: { "@type": "Brand", name: "PediZone" },
    category: product.category,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: product.priceCurrency || "TRY",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@type": "Organization", name: "Podosis" },
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: "https://podosis.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Ürünler",
        item: "https://podosis.com/urunler",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.name,
        item: productUrl,
      },
    ],
  };

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <div data-testid={`page-product-${product.slug}`}>
      <SEO
        title={`${product.name} — PediZone`}
        description={product.shortDesc}
        path={`/urunler/${product.slug}`}
        image={product.image}
        jsonLd={[productJsonLd, breadcrumbJsonLd]}
      />

      <div className="container-wide pt-8 pb-2">
        <nav className="flex items-center gap-2 text-xs text-ink-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand">Anasayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/urunler" className="hover:text-brand">Ürünler</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink line-clamp-1">{product.name}</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="py-10 md:py-14">
        <div className="container-wide grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div className="bg-bone rounded-3xl overflow-hidden p-6 md:p-10 md:sticky md:top-28">
            <img
              src={product.image}
              alt={product.imageAlt}
              loading="eager"
              width="900"
              height="900"
              className="w-full aspect-square object-contain rounded-2xl"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.18em] text-brand font-medium mb-3 inline-block">
              {product.category}
            </span>
            <h1 className="font-heading text-3xl md:text-5xl font-light text-ink tracking-tight leading-[1.1] mb-3">
              {product.name}
            </h1>
            <p className="text-sm text-ink-muted mb-2">{product.volume}</p>
            <p className="text-2xl font-heading text-ink mb-4" data-testid="product-reference-price">
              {priceText}
              <span className="block text-xs font-sans font-normal text-ink-muted mt-1">
                Pazaryeri referans fiyatı
              </span>
            </p>
            <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-8">
              {product.shortDesc}
            </p>
            <h2 className="font-heading text-lg text-ink mb-4">Öne çıkan özellikler</h2>
            <ul className="space-y-3 mb-10">
              {product.benefits.map((b, i) => (
                <li key={i} className="flex gap-3 text-ink-muted">
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3 h-3 text-brand" strokeWidth={2.5} />
                  </div>
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            <div className="p-5 rounded-2xl bg-brand-light/40 border border-brand-light mb-6">
              <p className="text-sm text-ink-muted leading-relaxed">
                Bu sayfadaki tutar pazaryeri referans fiyatıdır. Ürünü
                <strong className="text-ink"> merkezimizden daha uygun</strong>{" "}
                almak için bize WhatsApp’tan fiyat teklifi isteyebilirsiniz.
              </p>
            </div>
            <a
              href={quoteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
              data-testid="product-whatsapp-cta"
            >
              Merkezimizden Daha Uygun Fiyat Teklifi Alın
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Intro / Description */}
      {(product.intro || product.description) && (
        <section className="py-16 md:py-20">
          <div className="container-wide max-w-3xl">
            <p className="overline mb-3">Bu ürün ne işe yarar?</p>
            {product.intro && (
              <p className="text-lg md:text-xl text-ink leading-[1.75] mb-6 font-heading font-light">
                {product.intro}
              </p>
            )}
            {product.description && (
              <p className="text-base md:text-lg text-ink-muted leading-[1.8]">
                {product.description}
              </p>
            )}
          </div>
        </section>
      )}

      {/* Product Visual Story — Fresh-Guard only */}
      {product.slug === "ayak-temizleme-kopugu" && (
        <section className="py-12 md:py-16" aria-label="Fresh-Guard görselleri">
          <div className="container-wide max-w-5xl">
            <figure className="max-w-3xl mx-auto rounded-3xl overflow-hidden bg-white border border-border shadow-sm">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663870773359/GoGwdXWRoYnjEaYF.webp"
                alt="PediZone Fresh-Guard Ayak Temizleme Köpüğü içerikleri, kullanım alanları ve günlük bakım adımları"
                loading="lazy"
                width="1649"
                height="2048"
                className="w-full h-auto"
              />
              <figcaption className="sr-only">
                Fresh-Guard köpüğünün destekleyici içerikleri ve üç adımlı kullanım rutini
              </figcaption>
            </figure>

            <div className="mt-10 md:mt-14 space-y-10 md:space-y-14">
              <article className="grid md:grid-cols-[5fr_7fr] gap-8 md:gap-12 items-center">
                <figure className="rounded-3xl overflow-hidden bg-bone aspect-[4/5]">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663870773359/RmfEuOacbhWexyND.webp"
                    alt="Podoloji kliniğinde PediZone Fresh-Guard Ayak Temizleme Köpüğü ile ayak temizliği"
                    loading="lazy"
                    width="1649"
                    height="2048"
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
                <div>
                  <p className="overline mb-3">Klinik kullanım</p>
                  <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-4">
                    Bakıma temiz bir başlangıç
                  </h2>
                  <p className="text-base md:text-lg text-ink-muted leading-relaxed">
                    Podolojik bakımlarda hijyen, uygulamanın ayrılmaz bir parçası. Biz de danışanımızın ihtiyacına göre bakım öncesinde veya sonrasında PediZone Fresh-Guard Foot Foam ile ayakların nazikçe temizlenmesini destekliyoruz. Köpük formu cildi yormadan arındırırken, bakımın daha ferah ve temiz hissedilen bir rutinle tamamlanmasına yardımcı oluyor.
                  </p>
                </div>
              </article>

              <article className="grid md:grid-cols-[7fr_5fr] gap-8 md:gap-12 items-center">
                <div className="md:order-1">
                  <p className="overline mb-3">Günlük bakım</p>
                  <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-4">
                    Ev rutinine kolayca eklenir
                  </h2>
                  <p className="text-base md:text-lg text-ink-muted leading-relaxed">
                    Pompalı formu sayesinde günlük ayak temizliğini pratik hale getirir. Islak ayağa uygulayın, nazikçe masaj yapın ve durulayın; ardından bakım rutininize devam edin.
                  </p>
                </div>
                <figure className="md:order-2 rounded-3xl overflow-hidden bg-bone aspect-[2/3]">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663870773359/cxieiwmvjCFDnhRF.webp"
                    alt="PediZone Fresh-Guard Ayak Temizleme Köpüğü ile günlük ayak bakımını anlatan ürün görseli"
                    loading="lazy"
                    width="1024"
                    height="1536"
                    className="w-full h-full object-cover object-center"
                  />
                </figure>
              </article>
            </div>
          </div>
        </section>
      )}

      {/* Product Visual Story — Foot and Nail Care Serum only */}
      {product.slug === "tirnak-ayak-serumu" && (
        <section className="py-12 md:py-16" aria-label="Foot and Nail Care Serum görselleri">
          <div className="container-wide max-w-5xl">
            <figure className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-white border border-border shadow-sm">
              <img
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663870773359/pFWLuvynEaEErOCH.webp"
                alt="PediZone Foot and Nail Care Serum tanıtımı ve kullanım bilgileri"
                loading="lazy"
                width="1536"
                height="944"
                className="w-full h-auto"
              />
              <figcaption className="sr-only">
                PediZone serumunun içerik, kullanım ve bakım özelliklerini anlatan tanıtım görseli
              </figcaption>
            </figure>

            <div className="mt-10 md:mt-14">
              <div className="max-w-3xl mb-8">
                <p className="overline mb-3">Bakım sürecinden bir örnek</p>
                <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-4">
                  Düzenli bakım, takip ve sabır
                </h2>
                <p className="text-base md:text-lg text-ink-muted leading-relaxed">
                  Aşağıdaki görseller, podolojik bakım sürecinden önce ve sonraki görünümü örnek olarak gösterir. Bakım planı ve alınan sonuçlar kişinin durumuna, uygulama düzenine ve uzman değerlendirmesine göre değişebilir.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <figure className="rounded-3xl overflow-hidden bg-bone border border-border">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663870773359/txjCbgkkgiGEPyeT.webp"
                    alt="Podolojik bakım süreci öncesinde ayak tırnaklarının görünümü"
                    loading="lazy"
                    width="1200"
                    height="1200"
                    className="w-full aspect-square object-cover"
                  />
                  <figcaption className="p-4 text-sm text-ink-muted">
                    Bakım süreci öncesi örnek görünüm
                  </figcaption>
                </figure>
                <figure className="rounded-3xl overflow-hidden bg-bone border border-border">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663870773359/HMJnlyMbbGAdiaMl.webp"
                    alt="Podolojik bakım süreci sonrasında ayak tırnaklarının görünümü"
                    loading="lazy"
                    width="1024"
                    height="1024"
                    className="w-full aspect-square object-cover"
                  />
                  <figcaption className="p-4 text-sm text-ink-muted">
                    Bakım süreci sonrası örnek görünüm
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ingredients */}
      {product.ingredients?.length > 0 && (
        <section className="py-16 md:py-20 bg-bone/50">
          <div className="container-wide max-w-5xl">
            <p className="overline mb-3">İçindekiler</p>
            <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-10">
              Etki{" "}
              <span className="italic text-brand">mekanizması</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-5">
              {product.ingredients.map((ing, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-border p-6 hover:border-brand/30 transition-colors"
                  data-testid={`ingredient-${i}`}
                >
                  <h3 className="font-heading text-xl text-ink mb-1 leading-tight">
                    {ing.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand font-medium mb-3">
                    {ing.role}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {ing.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Use Cases */}
      {product.useCases?.length > 0 && (
        <section className="py-16 md:py-20">
          <div className="container-wide max-w-5xl grid md:grid-cols-[5fr_7fr] gap-12 lg:gap-16 items-start">
            <div>
              <p className="overline mb-3">Kullanım Alanları</p>
              <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight">
                Bu ürün{" "}
                <span className="italic text-brand">ne zaman uygun</span>?
              </h2>
            </div>
            <ul className="space-y-4">
              {product.useCases.map((u, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand" strokeWidth={2.5} />
                  </div>
                  <span className="text-base text-ink-muted leading-relaxed">
                    {u}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Usage */}
      {product.usage && (
        <section className="py-16 md:py-20 bg-brand-light/30">
          <div className="container-wide max-w-5xl">
            <p className="overline mb-3">Nasıl Kullanılır?</p>
            <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-10">
              Ev ve klinik{" "}
              <span className="italic text-brand">rutini</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl border border-border p-7">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <Home className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-heading text-xl text-ink mb-3">
                  Ev Kullanımı
                </h3>
                <p className="text-base text-ink-muted leading-relaxed">
                  {product.usage.home}
                </p>
              </div>
              <div className="bg-white rounded-2xl border border-border p-7">
                <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center mb-4">
                  <Stethoscope className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-heading text-xl text-ink mb-3">
                  Klinik Kullanımı
                </h3>
                <p className="text-base text-ink-muted leading-relaxed">
                  {product.usage.pro}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Expert Note */}
      {product.expertNote && (
        <section className="py-20">
          <div className="container-wide max-w-3xl">
            <div className="rounded-3xl border border-border bg-white p-8 md:p-12 relative">
              <Quote className="w-10 h-10 text-brand/30 absolute top-6 left-6" />
              <p className="overline mb-4 ml-12">Klinik Notu</p>
              <p className="font-heading text-xl md:text-2xl text-ink leading-[1.55] ml-12 mb-4 italic">
                "{product.expertNote}"
              </p>
              <p className="text-sm text-ink-muted ml-12">— Podosis Klinik</p>
            </div>
          </div>
        </section>
      )}

      {/* Other Products */}
      <section className="py-20 bg-bone/50">
        <div className="container-wide">
          <p className="overline mb-3">Diğer Ürünler</p>
          <h2 className="font-heading text-2xl md:text-3xl text-ink mb-8">
            Seri içinde diğer ürünler
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/urunler/${p.slug}`}
                className="group flex gap-5 items-center bg-white rounded-2xl border border-border p-5 hover:border-brand/30 transition-colors"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-bone flex-shrink-0 flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.imageAlt}
                    loading="lazy"
                    width="200"
                    height="200"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs uppercase tracking-[0.18em] text-brand font-medium">
                    {p.category}
                  </span>
                  <h3 className="font-heading text-lg text-ink leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm text-ink-muted">{p.volume}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
