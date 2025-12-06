import StatCounter from "../components/StatCounter";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4 pb-20">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* INTRO */}
        <FadeInWhenVisible>
          <section className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Om <span className="text-sky-400">Akis Detailing</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto">
              Vi är ett passionerat bilvårdsföretag som specialiserar oss på 
              noggrann tvätt, avancerad polering och premium lackskydd.  
              Hos oss får varje bil den omsorg som den förtjänar.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* STORY / WHY US */}
        <FadeInWhenVisible delay={80}>
          <section className="bg-slate-800/40 rounded-2xl border border-slate-700/60 p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Vår berättelse</h2>

            <p className="text-slate-300 leading-relaxed mb-4">
              Akis Detailing startades med en enkel idé: att erbjuda bilägare 
              en plats där deras bil behandlas med samma omsorg och noggrannhet 
              som om den vore vår egen. Efter många års erfarenhet inom bilvård 
              utvecklade vi en metod som kombinerar professionell precision med 
              ett genuint engagemang för kvalitet.
            </p>

            <p className="text-slate-300 leading-relaxed mb-4">
              Vårt mål är inte bara att rengöra bilar — vi vill återställa 
              nybilskänslan och höja helhetsupplevelsen. Varje behandling 
              anpassas efter bilens skick och kundens behov, oavsett om det 
              gäller en grundlig invändig tvätt, polering eller keramisk 
              lackbehandling.
            </p>

            <p className="text-slate-300 leading-relaxed">
              Hos oss är varje detalj viktig. Det är därför våra kunder 
              återkommer — de vet att resultatet alltid blir premium.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* VALUES */}
        <FadeInWhenVisible delay={140}>
          <section>
            <h2 className="text-2xl font-semibold mb-6 text-center">Våra värderingar</h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* VALUE 1 */}
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 text-center shadow-md">
                <div className="text-3xl mb-3">✨</div>
                <h3 className="font-semibold text-lg mb-2">Noggrannhet</h3>
                <p className="text-sm text-slate-400">
                  Varje bil behandlas med maximal precision och fokus på detaljer.
                </p>
              </div>

              {/* VALUE 2 */}
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 text-center shadow-md">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-semibold text-lg mb-2">Passion</h3>
                <p className="text-sm text-slate-400">
                  Bilar är mer än ett transportmedel — de är vår passion.
                </p>
              </div>

              {/* VALUE 3 */}
              <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 text-center shadow-md">
                <div className="text-3xl mb-3">🤝</div>
                <h3 className="font-semibold text-lg mb-2">Kundfokus</h3>
                <p className="text-sm text-slate-400">
                  Vi bygger långsiktiga relationer med nöjda kunder.
                </p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        {/* KEY STATS */}
        <FadeInWhenVisible delay={200}>
          <section className="pt-4">
            <h2 className="text-2xl font-semibold mb-3 text-center">
              Nyckeltal
            </h2>
            <p className="text-slate-400 text-sm text-center mb-6 max-w-xl mx-auto">
              Några siffror som visar vad våra kunder uppskattar med Akis
              Detailing.
            </p>

            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <StatCounter label="Antal projekt" value={148} />
              <StatCounter label="Nöjda kunder" value={72} />
            </div>
          </section>
        </FadeInWhenVisible>

        {/* CTA */}
        <FadeInWhenVisible delay={260}>
          <section className="text-center pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold
                         bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl 
                         transition transform hover:-translate-y-0.5"
            >
              Kontakta oss
            </a>

            <p className="text-xs text-slate-400 mt-2">
              Vi svarar snabbast via WhatsApp.
            </p>
          </section>
        </FadeInWhenVisible>

      </div>
    </div>
  );
}

export default About;
