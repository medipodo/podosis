import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Shield, Sparkles, Users } from "lucide-react";
import SEO from "../components/SEO";
import { clinic } from "../mock";

const About = () => {
  return (
    <div data-testid="page-about">
      <SEO
        title="Hakkımızda"
        description="Podosis, Elvankent'te butik klinik düzeyinde ayak bakımı sunan bir merkezdir. Hikayemiz, değerlerimiz ve bakım yaklaşımımız."
        path="/hakkimizda"
      />

      <section className="pt-20 md:pt-28 pb-16 grain-bg relative">
        <div className="absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full bg-brand/5 blur-3xl pointer-events-none" />
        <div className="container-wide relative max-w-4xl">
          <p className="overline mb-4">Hakkımızda</p>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-tight text-ink leading-[1.05] mb-8">
            Butik bir klinik,{" "}
            <span className="italic text-brand">kişisel bir yolculuk</span>
          </h1>
          <p className="text-lg md:text-xl text-ink-muted leading-relaxed max-w-3xl">
            Podosis; Elvankent'te yalnızca ayak ve tırnak sağlığına odaklanan,
            her danışanla bireysel ilerleyen bir ayak bakım merkezidir.
            Hızlı ve seri bir seans yerine; sizi tanıyan, hikayenizi bilen
            ve bakım rutininizi birlikte kuran bir yaklaşımı savunuyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-wide grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <img
              src="https://customer-assets.emergentagent.com/job_healthy-steps-13/artifacts/dkhwxa40_podosis.webp"
              alt="Podosis kliniğinden — sıcak ve hijyenik ortam"
              loading="lazy"
              width="1200"
              height="900"
              className="w-full aspect-[4/5] object-cover rounded-[80px_16px_80px_16px] md:rounded-[120px_20px_120px_20px] shadow-pink-soft"
            />
          </div>
          <div>
            <p className="overline mb-3">Felsefemiz</p>
            <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-6">
              Ayak sağlığı, acil müdahale değil,{" "}
              <span className="italic text-brand">sürdürülebilir bakımdır</span>.
            </h2>
            <div className="space-y-4 text-base text-ink-muted leading-relaxed">
              <p>
                Kliniğimizde her vaka kendi hikayesine göre okunur. Bir nasır,
                hayatınızın belki bir yılına yayılan bir alışkanlığın
                sonucudur — dolayısıyla çözüm de o alışkanlığa dokunduğumuzda
                kalıcı olur.
              </p>
              <p>
                Bu yüzden Podosis'te öncelik; size yalnızca o seansın değil,
                sonraki aylara yayılan bakım planının anahtarlarını
                aktarmaktır. Bir uzman olarak sizi dinlemek, evdeki rutininizi
                anlamak ve ayakkabınıza, hayatınıza, spor ritminize uygun bir
                plan oluşturmak en önemli işimiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-bone/50">
        <div className="container-wide max-w-5xl">
          <p className="overline mb-3 text-center">Değerlerimiz</p>
          <h2 className="font-heading text-3xl md:text-4xl text-ink text-center tracking-tight mb-12">
            Her seansın arkasındaki dört ilke
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: Shield,
                title: "Güvenli Hijyen",
                text: "Steril ortam, paketinde açılan tek kullanımlık ekipman.",
              },
              {
                icon: Heart,
                title: "Bireysel Bakım",
                text: "İki ayak birbirine benzemez. Her plan size özel şekillenir.",
              },
              {
                icon: Sparkles,
                title: "Şeffaf Süreç",
                text: "Ne yaptığımızı, neden yaptığımızı birlikte konuşarak ilerleriz.",
              },
              {
                icon: Users,
                title: "Sıcak Yaklaşım",
                text: "Butik bir klinik konforu; acele değil, nefes alan bir seans.",
              },
            ].map((v, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-border p-7"
                data-testid={`value-card-${i}`}
              >
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-brand" />
                </div>
                <h3 className="font-heading text-lg text-ink mb-2">{v.title}</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-wide max-w-3xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-ink tracking-tight leading-tight mb-6">
            Size uygun bir zaman ayarlamak ister misiniz?
          </h2>
          <p className="text-base md:text-lg text-ink-muted leading-relaxed mb-8">
            WhatsApp üzerinden kısa bir yazışma ile uygun saati hemen
            planlayabiliriz. İsterseniz fotoğrafla ön değerlendirme de
            yapıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={clinic.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand text-white px-7 py-3.5 rounded-full font-medium hover:bg-brand-hover transition-colors shadow-pink-glow"
              data-testid="about-whatsapp-cta"
            >
              WhatsApp'tan Yaz
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              to="/iletisim"
              className="inline-flex items-center justify-center gap-2 border border-ink/15 text-ink px-7 py-3.5 rounded-full font-medium hover:border-brand hover:text-brand transition-colors"
            >
              İletişim Bilgileri
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
