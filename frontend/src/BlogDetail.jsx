import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";
import SEO from "../components/SEO";
import FaqBlock from "../components/FaqBlock";
import { getBlogPost, getProduct, blogPosts, clinic } from "../mock";

const formatDate = (iso) => {
  const d = new Date(iso);
  return d.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

const BlogDetail = () => {
  const { slug } = useParams();
  const post = getBlogPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: post.cover,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://podosis.com",
    },
    publisher: {
      "@type": "Organization",
      name: clinic.name,
      logo: {
        "@type": "ImageObject",
        url: "https://podosis.com/logo.png",
      },
    },
    mainEntityOfPage: `https://podosis.com/blog/${post.slug}`,
  };

  const faqJsonLd = post.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const related = blogPosts.filter((b) => b.slug !== post.slug).slice(0, 2);

  return (
    <div data-testid={`page-blog-${post.slug}`}>
      <SEO
        title={post.title}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        image={post.cover}
        type="article"
        jsonLd={faqJsonLd ? [articleJsonLd, faqJsonLd] : articleJsonLd}
      />

      <div className="container-wide pt-8 pb-2">
        <nav className="flex items-center gap-2 text-xs text-ink-muted" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-brand">Anasayfa</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-brand">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-ink line-clamp-1">{post.title}</span>
        </nav>
      </div>

      <article className="pt-8 pb-20">
        <header className="container-wide max-w-3xl mb-10">
          <p className="overline mb-4">Blog Yazısı</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-ink leading-[1.05] tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed mb-6">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span>·</span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span>·</span>
            <span>{post.readMinutes} dk okuma</span>
          </div>
        </header>

        <figure className="container-wide max-w-5xl mb-14">
          <img
            src={post.cover}
            alt={post.coverAlt}
            loading="eager"
            fetchPriority="high"
            width="1400"
            height="900"
            className="w-full aspect-[16/10] object-cover rounded-3xl shadow-pink-soft"
          />
          <figcaption className="text-center text-sm text-ink-muted mt-3 italic">
            {post.coverAlt}
          </figcaption>
        </figure>

        <div className="container-wide max-w-3xl prose-podosis">
          {post.content.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              );
            if (block.type === "link") {
              const linkClass = "inline-flex items-center gap-2 mt-2 text-brand font-medium underline underline-offset-4 hover:text-brand-hover";
              return block.external ? (
                <a key={i} href={block.to} target="_blank" rel="noopener noreferrer" className={linkClass}>
                  {block.text} <ArrowRight className="w-4 h-4" />
                </a>
              ) : (
                <Link key={i} to={block.to} className={linkClass}>
                  {block.text} <ArrowRight className="w-4 h-4" />
                </Link>
              );
            }
            if (block.type === "callout")
              return (
                <aside key={i} className="my-8 rounded-2xl border border-brand-light bg-brand-light/40 p-6">
                  <h3 className="font-heading text-xl text-ink mb-2">{block.title}</h3>
                  <p className="text-ink-muted leading-relaxed">{block.text}</p>
                </aside>
              );
            if (block.type === "productCard") {
              const product = getProduct(block.productSlug);
              if (!product) return null;
              return (
                <div key={i} className="my-10 rounded-3xl border border-line bg-white overflow-hidden shadow-sm">
                  <div className="grid md:grid-cols-[180px_1fr] gap-6 p-5 md:p-6 items-center">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-bone">
                      <img src={product.image} alt={product.imageAlt} loading="lazy" width="500" height="500" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="overline mb-2">Podosis’ten ev bakımı desteği</p>
                      <h3 className="font-heading text-2xl text-ink mb-2">{product.name}</h3>
                      <p className="text-sm text-ink-muted leading-relaxed mb-4">{product.shortDesc}</p>
                      <div className="flex flex-wrap items-center gap-3">
                        <Link to={`/urunler/${product.slug}`} className="inline-flex items-center gap-2 bg-brand text-white px-5 py-3 rounded-full font-medium hover:bg-brand-hover transition-colors">
                          Ürünü incele <ArrowRight className="w-4 h-4" />
                        </Link>
                        <span className="text-sm text-ink-muted">Merkezimizden fiyat teklifi alınabilir.</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return <p key={i}>{block.text}</p>;
          })}
        </div>

        {/* In-article CTA */}
        <div className="container-wide max-w-3xl mt-12">
          <div className="p-7 md:p-9 rounded-3xl bg-brand-light/50 border border-brand-light flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
            <div className="flex-1">
              <p className="font-heading text-xl md:text-2xl text-ink mb-2 leading-tight">
                Bu yazıyı uygulamak ister misiniz?
              </p>
              <p className="text-sm text-ink-muted leading-relaxed">
                WhatsApp üzerinden kısa bir görüşme ile size özel bir bakım
                planı çıkarabiliriz.
              </p>
            </div>
            <a
              href={clinic.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-6 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow whitespace-nowrap"
              data-testid="article-whatsapp-cta"
            >
              WhatsApp'tan Yaz
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </article>

      {post.faqs?.length > 0 && (
        <section className="pb-20">
          <FaqBlock items={post.faqs} />
        </section>
      )}

      <section className="pb-24">
        <div className="container-wide">
          <p className="overline mb-3">Diğer Yazılar</p>
          <h2 className="font-heading text-2xl md:text-3xl text-ink mb-8">
            Okumaya devam et
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((b) => (
              <Link key={b.slug} to={`/blog/${b.slug}`} className="group flex flex-col">
                <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-bone mb-4">
                  <img
                    src={b.cover}
                    alt={b.coverAlt}
                    loading="lazy"
                    width="800"
                    height="640"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-heading text-xl md:text-2xl text-ink leading-tight group-hover:text-brand transition-colors">
                  {b.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
