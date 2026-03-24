import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ContactButtons from "@/components/ContactButtons";

export default function Contact() {
  return (
    <div id="contact" className="min-h-screen bg-slate-900 px-4 pb-20 pt-24 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-10">
        <FadeInWhenVisible>
          <section className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Kontakta <span className="text-sky-400">Akis Detailing</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
              Har du fragor, vill boka en behandling eller veta mer om vilken tjanst som passar din bil bast?
              Hor av dig, vi hjalper dig garna.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={80}>
          <section className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 shadow-lg md:p-7">
            <div className="grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
              <div>
                <h2 className="mb-1 text-sm font-semibold text-slate-100">Snabb kontakt</h2>
                <p className="text-slate-300">
                  Vi svarar snabbast via <span className="font-medium text-sky-300">WhatsApp</span> eller telefon.
                </p>
              </div>

              <div>
                <h2 className="mb-1 text-sm font-semibold text-slate-100">Omrade</h2>
                <p className="text-slate-300">
                  Verksamma i <span className="font-medium">Skane</span>. Exakt adress eller motesplats
                  bekraftas vid bokning.
                </p>
              </div>

              <div>
                <h2 className="mb-1 text-sm font-semibold text-slate-100">Tider</h2>
                <p className="text-slate-300">
                  Flexibla tider enligt overenskommelse.
                  <br />
                  <span className="text-xs text-slate-400">(Kvallar och helger kan ibland erbjudas.)</span>
                </p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={140}>
          <section className="text-center">
            <h2 className="mb-3 text-xl font-semibold">Valj hur du vill kontakta oss</h2>
            <p className="mx-auto mb-4 max-w-md text-sm text-slate-400">
              Klicka pa nagot av alternativen nedan for att starta en konversation direkt med oss.
            </p>

            <ContactButtons />
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <section className="mx-auto max-w-md text-center text-xs text-slate-500">
            <p>
              Ju mer information du skickar om bilens skick, typ av behandling du onskar och eventuell
              tidsram, desto snabbare kan vi aterkomma med ett forslag.
            </p>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

