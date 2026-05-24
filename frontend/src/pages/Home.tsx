import { Link } from "react-router-dom";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import ServiceCard from "../components/ServiceCard";
import { SHOWCASE_IMAGES } from "../data/gallery";
import { SERVICES } from "../data/services";
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

interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

const VALUES: ValueItem[] = [
  {
    num: "01",
    title: "Noggrannhet",
    desc: "Varje bil behandlas med maximal precision och fokus på detaljer. Vi nöjer oss aldrig med något annat än perfektion.",
  },
  {
    num: "02",
    title: "Passion",
    desc: "Bilar är mer än ett transportmedel — de är vår passion. Det syns i varje behandling vi utför.",
  },
  {
    num: "03",
    title: "Kundfokus",
    desc: "Vi bygger långsiktiga relationer med nöjda kunder. Din belåtenhet är vår främsta prioritet.",
  },
];

function Home() {
  const projects = useCounter(192);
  const clients = useCounter(152);
  const services = useCounter(7);

  return (
    <div className="relative overflow-x-hidden bg-ink-950 text-zinc-100">
      {/* ─────────────── HERO ─────────────── */}
      <section className="ak-noise relative flex min-h-[100svh] items-center justify-center overflow-hidden pt-24">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950/85 via-ink-950/65 to-ink-950" />
        <div className="absolute inset-0 ak-dots opacity-40" />

        <div className="pointer-events-none absolute inset-0">
          <div className="ak-blob-1 absolute left-[5%] top-[20%] h-72 w-72 rounded-full bg-amber-500/20 blur-[120px]" />
          <div className="ak-blob-2 absolute bottom-[10%] right-[5%] h-80 w-80 rounded-full bg-rose-500/20 blur-[140px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center">
          <div className="ak-slide-up ak-slide-up-d1">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-ember-300 backdrop-blur-md">
              <span className="relative inline-flex h-1.5 w-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-ember-400" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-ember-400" />
              </span>
              Premium bilvård · Skåne · Sedan 2022
            </span>
          </div>

          <h1 className="ak-slide-up ak-slide-up-d2 ak-display mt-7 text-[2.85rem] font-extrabold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Din bil.
            <br className="sm:hidden" />
            <span className="ak-gradient-text"> Återställd.</span>
            <br />
            Av besatta detaljörer.
          </h1>

          <p className="ak-slide-up ak-slide-up-d3 mx-auto mt-7 max-w-xl text-[15px] leading-relaxed text-zinc-300 md:text-lg">
            Polering, keramisk lackbehandling, tvätt och invändig detailing —
            utfört av människor som behandlar varje bil som om den vore deras egen.
          </p>

          <div className="ak-slide-up ak-slide-up-d4 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link to="/contact" className="ak-btn-primary ak-pulse-ring w-full sm:w-auto">
              Boka via WhatsApp
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <a href="#services" className="ak-btn-ghost w-full sm:w-auto">
              Utforska tjänster
            </a>
          </div>

          <div className="ak-slide-up ak-slide-up-d5 mt-12 grid grid-cols-3 gap-2 sm:mt-14 sm:gap-6">
            <HeroMiniStat
              refEl={projects.ref}
              value={`${projects.count}+`}
              label="Bilar polerade"
            />
            <HeroMiniStat
              refEl={clients.ref}
              value={`${clients.count}+`}
              label="Nöjda kunder"
            />
            <HeroMiniStat
              refEl={services.ref}
              value={`${services.count}`}
              label="Tjänster"
            />
          </div>
        </div>

        <div className="ak-slide-up ak-slide-up-d5 absolute inset-x-0 bottom-6 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-[10px] uppercase tracking-[0.3em]">Skrolla</span>
          <div className="h-8 w-px bg-gradient-to-b from-zinc-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ─────────────── MARQUEE ─────────────── */}
      <div className="relative overflow-hidden border-y border-white/5 bg-ink-900/40 py-5">
        <div className="ak-marquee-track">
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((w, i) => (
            <span
              key={i}
              className="flex items-center gap-4 whitespace-nowrap px-8 font-display text-base font-semibold tracking-tight text-zinc-500 sm:text-lg"
            >
              <span className="text-ember-400">✦</span>
              {w}
            </span>
          ))}
        </div>
      </div>

      {/* ─────────────── ABOUT SNIPPET ─────────────── */}
      <section className="relative px-5 py-14 md:py-28">
        <div className="pointer-events-none absolute -left-32 top-0 h-[400px] w-[400px] rounded-full bg-amber-500/[0.06] blur-[140px]" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-rose-500/[0.06] blur-[140px]" />

        <div className="relative mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-16">
          <FadeInWhenVisible>
            <div className="relative">
              <div className="ak-photo aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl shadow-black/50">
                <img
                  src={HERO_IMAGE}
                  alt="Akis Detailing arbete"
                />
              </div>
              <div className="ak-glass ak-float absolute -bottom-5 -right-3 rounded-2xl px-5 py-3.5 shadow-xl md:-right-8">
                <div className="font-display text-2xl font-bold ak-gradient-text ak-counter-digit">
                  {services.count}+
                </div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-zinc-400">
                  Premium-tjänster
                </div>
              </div>
              <div className="ak-glass ak-float-d absolute -left-3 top-6 rounded-2xl px-4 py-3 md:-left-8">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Bokar nu
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={120}>
            <div className="space-y-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
                Om Akis Detailing
              </span>
              <h2 className="ak-display text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Vi behandlar varje bil som om den vore{" "}
                <span className="ak-gradient-text">vår egen.</span>
              </h2>
              <p className="text-[15px] leading-relaxed text-zinc-400 md:text-base">
                Akis Detailing startades med en enkel idé: att erbjuda bilägare
                en plats där deras bil behandlas med samma omsorg och noggrannhet
                som om den vore vår egen. Vårt mål är att återställa
                nybilskänslan och höja helhetsupplevelsen.
              </p>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {["Handarbete", "Premium-produkter", "Lokalt i Skåne", "Garanterat resultat"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 pt-2 text-sm font-bold text-ember-300 hover:text-ember-200"
              >
                Läs hela vår historia
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section id="services" className="relative px-5 py-14 md:py-28">
        <div className="pointer-events-none absolute right-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ember-500/[0.07] blur-[140px]" />

        <div className="mx-auto max-w-6xl">
          <FadeInWhenVisible>
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
                Tjänster
              </span>
              <h2 className="ak-display mt-3 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Allt från en{" "}
                <span className="ak-gradient-text">grundtvätt</span> till{" "}
                showroom-finish.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-zinc-400">
                Välj den nivå av behandling din bil förtjänar — vi guidar dig
                gärna om du är osäker på vilken som passar bäst.
              </p>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <FadeInWhenVisible key={service.id} delay={i * 80}>
                <ServiceCard
                  index={i}
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  price={service.price}
                />
              </FadeInWhenVisible>
            ))}
          </div>

          <FadeInWhenVisible delay={400}>
            <div className="mt-8 text-center md:mt-12">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-bold text-ember-300 hover:text-ember-200"
              >
                Se alla tjänster i detalj
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>
      </section>

      {/* ─────────────── GALLERY RAIL (vertical photos) ─────────────── */}
      <section className="relative py-14 md:py-28">
        <div className="pointer-events-none absolute left-0 top-1/2 h-[500px] w-[400px] -translate-y-1/2 rounded-full bg-amber-500/[0.05] blur-[140px]" />

        <div className="mx-auto mb-8 max-w-6xl px-5 md:mb-10">
          <FadeInWhenVisible>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
                  Galleri
                </span>
                <h2 className="ak-display mt-3 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                  Resultat som{" "}
                  <span className="ak-gradient-text">talar för sig.</span>
                </h2>
              </div>
              <Link
                to="/gallery"
                className="group inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold text-ember-300 hover:text-ember-200 sm:self-auto"
              >
                Hela galleriet
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </FadeInWhenVisible>
        </div>

        <FadeInWhenVisible delay={100}>
          <div className="ak-rail no-scrollbar pl-5 pr-5 md:pl-[max(1.25rem,calc((100vw-72rem)/2+1.25rem))]">
            {SHOWCASE_IMAGES.map((img, i) => (
              <figure
                key={`${img.src}-${i}`}
                className="ak-photo relative w-[64vw] max-w-[300px] sm:w-72 md:w-80"
                style={{ aspectRatio: "9 / 16" }}
              >
                <img src={img.src} alt={img.label} loading="lazy" />
                <figcaption className="absolute inset-x-0 bottom-0 p-4">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-semibold text-zinc-100 ring-1 ring-inset ring-white/10 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-ember-400" />
                    {img.label}
                  </span>
                </figcaption>
              </figure>
            ))}
            <div className="w-2 shrink-0" />
          </div>
        </FadeInWhenVisible>
      </section>

      {/* ─────────────── VALUES ─────────────── */}
      <section className="px-5 py-14 md:py-28">
        <div className="mx-auto max-w-6xl">
          <FadeInWhenVisible>
            <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
                Varför Akis?
              </span>
              <h2 className="ak-display mt-3 text-3xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                Tre saker vi{" "}
                <span className="ak-gradient-text">aldrig kompromissar</span>{" "}
                med.
              </h2>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <FadeInWhenVisible key={v.title} delay={i * 110}>
                <div className="ak-card group relative h-full p-7">
                  <div className="font-display text-[3.5rem] font-extrabold leading-none ak-gradient-text opacity-90">
                    {v.num}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {v.desc}
                  </p>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA ─────────────── */}
      <section className="relative overflow-hidden px-5 py-14 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950/20 via-ink-950 to-rose-950/20" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sunset-soft blur-[150px]" />

        <FadeInWhenVisible>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
              Redo att börja?
            </span>
            <h2 className="ak-display mt-4 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
              Ge din bil den{" "}
              <span className="ak-gradient-text">premiumbehandling</span> den
              förtjänar.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-zinc-400">
              Kontakta oss idag för ett kostnadsfritt prisförslag. Vi svarar
              snabbast via WhatsApp — tryck på knappen nere till höger eller
              klicka nedan.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <Link to="/contact" className="ak-btn-primary w-full sm:w-auto">
                Kontakta oss nu
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <Link to="/services" className="ak-btn-ghost w-full sm:w-auto">
                Se alla tjänster
              </Link>
            </div>

            <p className="mt-8 font-display text-xs italic text-zinc-500">
              "Vi behandlar varje bil som om den vore vår egen." — Akis Detailing
            </p>
          </div>
        </FadeInWhenVisible>
      </section>
    </div>
  );
}

interface HeroMiniStatProps {
  refEl: React.RefObject<HTMLDivElement | null>;
  value: string;
  label: string;
}

function HeroMiniStat({ refEl, value, label }: HeroMiniStatProps) {
  return (
    <div
      ref={refEl}
      className="ak-glass rounded-2xl px-3 py-3 text-center sm:px-5 sm:py-4"
    >
      <div className="font-display text-xl font-extrabold ak-gradient-text ak-counter-digit sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-zinc-400 sm:text-[10px]">
        {label}
      </div>
    </div>
  );
}

export default Home;
