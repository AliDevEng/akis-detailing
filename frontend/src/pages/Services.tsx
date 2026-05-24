import { Link } from "react-router-dom";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { SERVICES } from "../data/services";

function Services() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 pt-24 pb-16 md:pt-32 md:pb-24 text-zinc-100">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sunset-soft blur-[150px]" />

      <div className="relative mx-auto max-w-5xl px-5">
        <FadeInWhenVisible>
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
              Tjänster
            </span>
            <h1 className="ak-display mt-3 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Behandlingar i{" "}
              <span className="ak-gradient-text">premiumklass.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">
              Här ser du varje behandling vi erbjuder — vad den innebär, när den
              passar bäst och från vilket pris den börjar.
            </p>
          </header>
        </FadeInWhenVisible>

        <section className="mt-10 space-y-5 md:mt-16 md:space-y-7">
          {SERVICES.map((service, i) => (
            <FadeInWhenVisible key={service.id} delay={i * 80}>
              <article className="ak-card group grid grid-cols-1 overflow-hidden md:grid-cols-[minmax(0,300px)_minmax(0,1fr)]">
                <div className="relative h-56 overflow-hidden md:h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink-950/80 via-ink-950/20 to-transparent md:from-transparent md:via-ink-950/0 md:to-ink-950/60" />
                  <span className="absolute left-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink-950/70 text-[12px] font-extrabold text-ember-300 ring-1 ring-inset ring-white/10 backdrop-blur-md">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col gap-3 p-6 md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h2 className="ak-display text-2xl font-bold tracking-tight md:text-3xl">
                      {service.title}
                    </h2>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ember-400/30 bg-ember-400/10 px-3 py-1 text-[12px] font-bold text-ember-300">
                      Från {service.price} kr
                    </span>
                  </div>

                  <p className="text-[14.5px] leading-relaxed text-zinc-300">
                    {service.longDescription}
                  </p>

                  <div className="mt-2 flex items-start gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs text-zinc-400">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                    <p className="m-0 leading-relaxed">
                      <span className="font-semibold text-zinc-200">
                        Kort:&nbsp;
                      </span>
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-2">
                    <Link
                      to="/contact"
                      className="group/btn inline-flex items-center gap-1.5 text-sm font-bold text-ember-300 hover:text-ember-200"
                    >
                      Boka {service.title.toLowerCase()}
                      <svg
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
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
                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </section>

        <FadeInWhenVisible delay={200}>
          <div className="mt-12 ak-glass rounded-3xl p-7 text-center md:mt-16 md:p-10">
            <h3 className="ak-display text-2xl font-bold md:text-3xl">
              Osäker på vilken behandling som passar?
            </h3>
            <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
              Skicka oss bilder på bilen via WhatsApp så ger vi dig en ärlig
              rekommendation utan kostnad.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="ak-btn-primary">
                Få gratis rådgivning
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
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Services;
