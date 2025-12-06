import ContactButtons from "../components/ContactButtons";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4 pb-20"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* INTRO */}
        <FadeInWhenVisible>
          <section className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Kontakta <span className="text-sky-400">Akis Detailing</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Har du frågor, vill boka en behandling eller veta mer om vilken
              tjänst som passar din bil bäst? Hör av dig – vi hjälper dig gärna.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* INFO-KORT */}
        <FadeInWhenVisible delay={80}>
          <section className="bg-slate-800/40 rounded-2xl border border-slate-700/60 p-6 md:p-7 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              {/* TELEFON/WHATSAPP */}
              <div>
                <h2 className="text-sm font-semibold text-slate-100 mb-1">
                  Snabb kontakt
                </h2>
                <p className="text-slate-300">
                  Vi svarar snabbast via{" "}
                  <span className="text-sky-300 font-medium">WhatsApp</span> eller
                  telefon.
                </p>
              </div>

              {/* PLATS */}
              <div>
                <h2 className="text-sm font-semibold text-slate-100 mb-1">
                  Område
                </h2>
                <p className="text-slate-300">
                  Verksamma i <span className="font-medium">Skåne</span>. Exakt
                  adress / mötesplats bekräftas vid bokning.
                </p>
              </div>

              {/* TIDER */}
              <div>
                <h2 className="text-sm font-semibold text-slate-100 mb-1">
                  Tider
                </h2>
                <p className="text-slate-300">
                  Flexibla tider enligt överenskommelse.
                  <br />
                  <span className="text-slate-400 text-xs">
                    (Kvällar & helger kan ibland erbjudas.)
                  </span>
                </p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* KONTAKTKNAPPAR */}
        <FadeInWhenVisible delay={140}>
          <section className="text-center">
            <h2 className="text-xl font-semibold mb-3">Välj hur du vill kontakta oss</h2>
            <p className="text-slate-400 text-sm max-w-md mx-auto mb-4">
              Klicka på något av alternativen nedan för att starta en konversation
              direkt med oss.
            </p>

            <ContactButtons />
          </section>
        </FadeInWhenVisible>

        {/* LITEN “EXTRA INFO” */}
        <FadeInWhenVisible delay={200}>
          <section className="text-center text-xs text-slate-500 max-w-md mx-auto">
            <p>
              Ju mer information du skickar om bilens skick, typ av behandling du
              önskar och eventuell tidsram, desto snabbare kan vi återkomma med ett
              förslag.
            </p>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Contact;
