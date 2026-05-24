import { Link } from "react-router-dom";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import StatCounter from "../components/StatCounter";

interface ValueItem {
  num: string;
  title: string;
  desc: string;
}

const VALUES: ValueItem[] = [
  {
    num: "01",
    title: "Noggrannhet",
    desc: "Varje bil behandlas med maximal precision och fokus på detaljer.",
  },
  {
    num: "02",
    title: "Passion",
    desc: "Bilar är mer än ett transportmedel — de är vår passion.",
  },
  {
    num: "03",
    title: "Kundfokus",
    desc: "Vi bygger långsiktiga relationer med nöjda kunder.",
  },
];

function About() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 pt-24 pb-16 md:pt-32 md:pb-24 text-zinc-100">
      <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-amber-500/[0.07] blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-500/[0.07] blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-5">
        <FadeInWhenVisible>
          <header className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
              Om oss
            </span>
            <h1 className="ak-display mt-3 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Detaljerade <span className="ak-gradient-text">till besatthet</span>.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-zinc-400 md:text-base">
              Vi är ett passionerat bilvårdsföretag som specialiserar oss på
              noggrann tvätt, avancerad polering och premium lackskydd. Hos oss
              får varje bil den omsorg den förtjänar.
            </p>
          </header>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={80}>
          <section className="ak-glass mt-10 md:mt-14 rounded-3xl p-7 md:p-10">
            <h2 className="ak-display text-2xl font-bold md:text-3xl">
              Vår berättelse
            </h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-zinc-300">
              <p>
                Akis Detailing startades med en enkel idé: att erbjuda bilägare
                en plats där deras bil behandlas med samma omsorg och
                noggrannhet som om den vore vår egen. Efter många års erfarenhet
                inom bilvård utvecklade vi en metod som kombinerar
                professionell precision med ett genuint engagemang för kvalitet.
              </p>
              <p>
                Vårt mål är inte bara att rengöra bilar — vi vill återställa
                nybilskänslan och höja helhetsupplevelsen. Varje behandling
                anpassas efter bilens skick och kundens behov, oavsett om det
                gäller en grundlig invändig tvätt, polering eller keramisk
                lackbehandling.
              </p>
              <p>
                Hos oss är varje detalj viktig. Det är därför våra kunder
                återkommer — de vet att resultatet alltid blir premium.
              </p>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={140}>
          <section className="mt-10 md:mt-14">
            <h2 className="ak-display text-center text-2xl font-bold md:text-3xl">
              Värderingar som styr varje{" "}
              <span className="ak-gradient-text">jobb</span>.
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {VALUES.map((v) => (
                <div key={v.title} className="ak-card p-6">
                  <div className="font-display text-4xl font-extrabold leading-none ak-gradient-text">
                    {v.num}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <section className="mt-12 md:mt-16">
            <h2 className="ak-display text-center text-2xl font-bold md:text-3xl">
              Siffrorna bakom <span className="ak-gradient-text">resultatet</span>
            </h2>
            <p className="mx-auto mt-2 max-w-md text-center text-sm text-zinc-400">
              Några siffror som visar vad våra kunder uppskattar med Akis.
            </p>
            <div className="mx-auto mt-7 grid max-w-md grid-cols-2 gap-4">
              <StatCounter label="Antal projekt" value={192} />
              <StatCounter label="Nöjda kunder" value={152} />
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={260}>
          <section className="mt-12 md:mt-16 text-center">
            <Link to="/contact" className="ak-btn-primary">
              Kontakta oss
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
            <p className="mt-3 text-xs text-zinc-500">
              Vi svarar snabbast via WhatsApp.
            </p>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default About;
