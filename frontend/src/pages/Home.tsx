import { Link } from "react-router-dom";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { SERVICES } from "../data/services";
import { SHOWCASE_IMAGES } from "../data/gallery";
import { useCounter } from "../hooks/useCounter";

const HERO_IMAGE = "/images/akis-hero-1.jpg";

const MARQUEE_WORDS: string[] = [
  "Polering",
  "Keramisk coating",
  "Grovtvätt",
  "Innertvätt",
  "Vaxning",
  "Ambient Light",
  "Sätestvätt",
  "Showroom finish",
  "Premium bilvård",
  "Nybilskänsla",
];

const VALUES = [
  {
    icon: "✨",
    title: "Noggrannhet",
    desc: "Varje bil behandlas med maximal precision och fokus på detaljer. Vi nöjer oss aldrig med något annat än perfektion.",
  },
  {
    icon: "🚗",
    title: "Passion",
    desc: "Bilar är mer än ett transportmedel — de är vår passion. Det syns i varje behandling vi utför.",
  },
  {
    icon: "🤝",
    title: "Kundfokus",
    desc: "Vi bygger långsiktiga relationer med nöjda kunder. Din belåtenhet är vår främsta prioritet.",
  },
];

function Home() {
  const c1 = useCounter(192);
  const c2 = useCounter(152);
  const c3 = useCounter(7);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">

      {/* ── HERO ── */}
      <section className="relative h-[100svh] min-h-[600px] flex items-center justify-center overflow-hidden ak-noise">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center sm:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/50 to-slate-950" />
        <div className="pointer-events-none absolute inset-0">
          <div className="ak-float absolute top-1/4 left-[10%] h-72 w-72 rounded-full bg-sky-500/15 blur-[100px]" />
          <div className="ak-float-delay absolute bottom-1/4 right-[8%] h-64 w-64 rounded-full bg-indigo-500/15 blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-5 text-center">
          <div className="ak-slide-up ak-slide-up-d1">
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-sky-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse" />
              Professionell bilvård i premiumklass
            </span>
          </div>

          <h1 className="ak-slide-up ak-slide-up-d2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[1.05] mb-6">
            Din bil,{" "}
            <span className="ak-shimmer-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              vår passion
            </span>
            .
          </h1>

          <p className="ak-slide-up ak-slide-up-d3 text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto mb-10 leading-relaxed">
            Akis Detailing hjälper dig att återfå{" "}
            <span className="font-semibold text-white">nybilskänslan</span> med
            noggrann tvätt, polering, vaxning och keramisk lackbehandling —
            alltid med fokus på detaljer.
          </p>

          <div className="ak-slide-up ak-slide-up-d4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="ak-pulse-ring inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-7 py-3.5 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Utforska tjänster
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-500/40 bg-slate-900/50 backdrop-blur-md text-slate-200 font-semibold text-sm px-7 py-3.5 hover:border-sky-400/50 hover:text-sky-300 transition-all duration-300 hover:-translate-y-0.5"
            >
              Kontakta oss
            </Link>
          </div>
        </div>

        <div className="ak-slide-up ak-slide-up-d5 absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-[10px] uppercase tracking-[0.3em]">Skrolla</span>
          <div className="h-8 w-[1px] bg-gradient-to-b from-slate-400 to-transparent animate-pulse" />
        </div>
      </section>


      {/* ── MARQUEE ── */}
      <div className="relative border-y border-slate-800/60 bg-slate-950/80 py-4 overflow-hidden">
        <div className="ak-marquee-track">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span
              key={i}
              className="whitespace-nowrap px-8 text-sm md:text-base font-medium tracking-wide text-slate-500 flex items-center gap-3"
            >
              <span className="h-1 w-1 rounded-full bg-sky-500/60" />
              {word}
            </span>
          ))}
        </div>
      </div>


      {/* ── ABOUT SNIPPET ── */}
      <section className="relative px-4 py-24 md:py-32">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-sky-600/5 blur-[120px]" />

        <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <FadeInWhenVisible>
            <div className="relative group">
              <div className="rounded-3xl overflow-hidden border border-slate-800/60 shadow-2xl">
                <img
                  src={HERO_IMAGE}
                  alt="Akis Detailing arbete"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 md:-right-6 ak-glass rounded-2xl px-5 py-3 shadow-xl ak-float">
                <div className="text-2xl font-bold text-sky-300 ak-counter-digit">{c3.count}+</div>
                <div ref={c3.ref} className="text-[10px] uppercase tracking-[0.18em] text-slate-400">tjänster</div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={120}>
            <div className="space-y-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400">Om Akis Detailing</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight">
                Vi behandlar varje bil som om den vore{" "}
                <span className="text-sky-400">vår egen</span>.
              </h2>
              <p className="text-slate-300/90 leading-relaxed">
                Akis Detailing startades med en enkel idé: att erbjuda bilägare en
                plats där deras bil behandlas med samma omsorg och noggrannhet som
                om den vore vår egen. Vårt mål är att återställa nybilskänslan och
                höja helhetsupplevelsen.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Noggrannhet", "Passion", "Premium resultat"].map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-700/60 bg-slate-900/60 px-4 py-1.5 text-xs font-medium text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors pt-2 group"
              >
                Läs mer om oss
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>


      {/* ── STATS ── */}
      <section className="px-4 py-16 md:py-20">
        <FadeInWhenVisible>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <div ref={c1.ref} className="ak-glass rounded-2xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-300 mb-1 ak-counter-digit">
                {c1.count}<span className="text-sky-400">+</span>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Antal projekt</div>
            </div>
            <div ref={c2.ref} className="ak-glass rounded-2xl p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-sky-300 mb-1 ak-counter-digit">
                {c2.count}<span className="text-sky-400">+</span>
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Nöjda kunder</div>
            </div>
            <div className="ak-glass rounded-2xl p-6 text-center col-span-2 md:col-span-1">
              <div className="text-4xl md:text-5xl font-bold text-sky-300 mb-1">∞</div>
              <div className="text-xs uppercase tracking-[0.18em] text-slate-400">Passion &amp; precision</div>
            </div>
          </div>
        </FadeInWhenVisible>
      </section>


      {/* ── SERVICES ── */}
      <section id="services" className="relative px-4 py-24 md:py-32">
        <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-[120px]" />

        <div className="max-w-6xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400 mb-3">Vad vi erbjuder</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Våra{" "}
                <span className="ak-shimmer-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  tjänster
                </span>
              </h2>
              <p className="text-slate-400 max-w-xl mx-auto text-sm md:text-base">
                Från grundlig tvätt till avancerad keramisk lackbehandling — vi har
                allt för att din bil ska se ut och kännas som ny.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((service, index) => (
              <FadeInWhenVisible key={service.id} delay={index * 100}>
                <div className="ak-bento-card rounded-2xl border border-slate-800/60 bg-slate-900/40 overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                    <span className="absolute top-3 right-3 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700/50 px-3 py-1 text-[11px] font-semibold text-sky-300">
                      Från {service.price} kr
                    </span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold mb-2 text-slate-100">{service.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed flex-1">
                      {service.shortDescription}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Rekommenderad behandling
                    </div>
                  </div>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={800}>
            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
              >
                Se alla tjänster i detalj
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>


      {/* ── GALLERY ── */}
      <section className="relative py-24 md:py-32">
        <div className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[400px] rounded-full bg-sky-500/5 blur-[120px]" />

        <div className="max-w-6xl mx-auto px-4 mb-10">
          <FadeInWhenVisible>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400 mb-3">Galleri</p>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                  Resultat som{" "}
                  <span className="ak-shimmer-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                    talar
                  </span>{" "}
                  för sig
                </h2>
              </div>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group shrink-0"
              >
                Se hela galleriet
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible delay={100}>
          <div className="ak-gallery-scroll pl-4 md:pl-[max(1rem,calc((100vw-72rem)/2+1rem))]">
            {SHOWCASE_IMAGES.map((img, i) => (
              <div
                key={i}
                className="ak-gallery-item relative w-64 sm:w-72 md:w-80 aspect-[3/4] rounded-2xl overflow-hidden border border-slate-800/40 shadow-lg"
              >
                <img src={img.src} alt={img.label} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-xs font-semibold text-slate-200 bg-slate-950/60 backdrop-blur-md rounded-full px-3 py-1 border border-slate-700/40">
                  {img.label}
                </span>
              </div>
            ))}
            <div className="w-4 shrink-0" />
          </div>
        </FadeInWhenVisible>
      </section>


      {/* ── VALUES ── */}
      <section className="px-4 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <FadeInWhenVisible>
            <div className="text-center mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400 mb-3">Varför Akis?</p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                Våra{" "}
                <span className="ak-shimmer-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  värderingar
                </span>
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((item, i) => (
              <FadeInWhenVisible key={item.title} delay={i * 120}>
                <div className="ak-bento-card ak-glass rounded-2xl p-7 text-center h-full">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>


      {/* ── CTA ── */}
      <section className="relative px-4 py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-950/40 via-slate-950 to-indigo-950/30" />
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[150px]" />

        <FadeInWhenVisible>
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-400">Redo att börja?</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Ge din bil den{" "}
              <span className="ak-shimmer-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                premiumbehandling
              </span>{" "}
              den förtjänar
            </h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm md:text-base">
              Kontakta oss idag för ett kostnadsfritt prisförslag. Vi svarar
              snabbast via WhatsApp — tryck på knappen nere till höger eller
              klicka nedan.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="ak-pulse-ring inline-flex items-center gap-2 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm px-8 py-4 shadow-lg shadow-sky-500/25 hover:shadow-sky-400/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                Kontakta oss nu
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600/40 bg-slate-900/50 backdrop-blur-md text-slate-200 font-semibold text-sm px-8 py-4 hover:border-sky-400/50 hover:text-sky-300 transition-all duration-300 hover:-translate-y-0.5"
              >
                Se alla tjänster
              </Link>
            </div>

            <p className="text-xs text-slate-500 pt-4">
              "Vi behandlar varje bil som om den vore vår egen." — Akis Detailing
            </p>
          </div>
        </FadeInWhenVisible>
      </section>

    </div>
  );
}

export default Home;
