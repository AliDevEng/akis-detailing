import ContactButtons from "../components/ContactButtons";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { PHONE_NUMBER } from "../constants/contact";

interface InfoCard {
  title: string;
  body: string;
  hint?: string;
  Icon: () => React.ReactElement;
}

const INFO: InfoCard[] = [
  {
    title: "Snabb kontakt",
    body: "Vi svarar snabbast via WhatsApp eller telefon.",
    hint: PHONE_NUMBER,
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 5c0-1.1.9-2 2-2h2.1a1 1 0 0 1 .98.804l.7 3.347a1 1 0 0 1-.57 1.093l-1.52.684a.75.75 0 0 0-.36.994 11.04 11.04 0 0 0 5.27 5.27.75.75 0 0 0 .99-.36l.69-1.53a1 1 0 0 1 1.09-.57l3.35.7a1 1 0 0 1 .8.98V19a2 2 0 0 1-2 2h-1C9.82 21 3 14.18 3 6v-1Z" />
      </svg>
    ),
  },
  {
    title: "Område",
    body: "Vi är verksamma i Skåne. Exakt adress / mötesplats bekräftas vid bokning.",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21s-7-7.5-7-12a7 7 0 1 1 14 0c0 4.5-7 12-7 12Z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    ),
  },
  {
    title: "Tider",
    body: "Flexibla tider enligt överenskommelse.",
    hint: "Kvällar & helger kan ibland erbjudas.",
    Icon: () => (
      <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-current" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
  },
];

function Contact() {
  return (
    <div
      id="contact"
      className="relative min-h-screen overflow-hidden bg-ink-950 pt-24 pb-16 md:pt-32 md:pb-24 text-zinc-100"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-sunset-soft blur-[150px]" />

      <div className="relative mx-auto max-w-4xl px-5">
        <FadeInWhenVisible>
          <header className="text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
              Kontakt
            </span>
            <h1 className="ak-display mt-3 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Låt oss <span className="ak-gradient-text">förvandla</span>{" "}
              din bil.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">
              Har du frågor, vill boka en behandling eller veta mer om vilken
              tjänst som passar din bil bäst? Hör av dig — vi hjälper dig gärna.
            </p>
          </header>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={80}>
          <section className="mt-8 md:mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {INFO.map((card) => (
              <div key={card.title} className="ak-card p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sunset-gradient text-ink-950 shadow-ember-sm">
                  <card.Icon />
                </div>
                <h2 className="mt-4 font-display text-base font-bold">
                  {card.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-300">
                  {card.body}
                </p>
                {card.hint && (
                  <p className="mt-1 text-xs text-zinc-500">{card.hint}</p>
                )}
              </div>
            ))}
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={140}>
          <section className="mt-10 md:mt-14 text-center">
            <h2 className="ak-display text-2xl font-bold md:text-3xl">
              Välj hur du vill <span className="ak-gradient-text">höra av dig</span>
            </h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
              Klicka på något av alternativen nedan för att starta en
              konversation direkt med oss.
            </p>
            <ContactButtons />
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <section className="mt-8 md:mt-12 ak-glass rounded-2xl p-5 text-center md:p-6">
            <p className="mx-auto max-w-md text-xs leading-relaxed text-zinc-400">
              Ju mer information du skickar om bilens skick, typ av behandling
              du önskar och eventuell tidsram, desto snabbare kan vi återkomma
              med ett förslag.
            </p>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Contact;
