import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import SEO from "../components/SEO";
import { blogPosts } from "../mock";

const formatDate = (iso) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
};

const Blog = () => {
  const [first, ...rest] = blogPosts;
  return (
    <div data-testid="page-blog">
      <SEO
        title="Blog"
        description="Podosis blog — ayak bakımı, batık tırnak, tırnak mantarı ve topuk çatlağı üzerine klinik deneyimimizden özgün Türkçe yazılar."
        path="/blog"
      />

      <section className="pt-20 md:pt-28 pb-10 grain-bg">
        <div className="container-wide max-w-4xl">
          <p className="overline mb-4">Blog</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-6">
            Klinikten{" "}
            <span className="italic text-brand">pratik yazılar</span>
          </h1>
          <p className="text-lg text-ink-muted leading-relaxed max-w-3xl">
            Evde ne yapılır, ne yapılmaz; doğru ayak bakım merkezi nasıl seçilir;
            tedavi süreçleri neye benzer — kliniğimizin gözünden samimi
            ve uygulanabilir notlar.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="py-10">
        <div className="container-wide">
          <Link
            to={`/blog/${first.slug}`}
            className="group grid lg:grid-cols-[7fr_5fr] gap-10 items-center bg-white rounded-3xl border border-border p-5 md:p-8 hover:border-brand/30 hover:shadow-pink-soft transition-all duration-300"
            data-testid={`blog-featured-${first.slug}`}
          >
            <div className="overflow-hidden rounded-2xl bg-bone">
              <img
                src={first.cover}
                alt={first.coverAlt}
                loading="eager"
                width="1200"
                height="800"
                className="w-full aspect-[5/4] md:aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div>
              <p className="overline mb-3">Öne Çıkan Yazı</p>
              <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-4 group-hover:text-brand transition-colors">
                {first.title}
              </h2>
              <p className="text-base text-ink-muted leading-relaxed mb-5">
                {first.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-ink-muted mb-5">
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(first.date)}
                </span>
                <span>·</span>
                <span>{first.readMinutes} dk okuma</span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                Yazıyı oku
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-16 pb-24">
        <div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="group flex flex-col"
              data-testid={`blog-list-${b.slug}`}
            >
              <div className="aspect-[5/4] rounded-2xl overflow-hidden bg-bone mb-5">
                <img
                  src={b.cover}
                  alt={b.coverAlt}
                  loading="lazy"
                  width="800"
                  height="640"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-ink-muted mb-3">
                <span>{formatDate(b.date)}</span>
                <span>·</span>
                <span>{b.readMinutes} dk okuma</span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-ink mb-2 leading-tight group-hover:text-brand transition-colors">
                {b.title}
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">{b.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
