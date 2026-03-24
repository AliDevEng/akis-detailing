import Link from "next/link";
import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import StatCounter from "@/components/StatCounter";

export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 px-4 pb-20 pt-24 text-slate-100">
      <div className="mx-auto max-w-4xl space-y-12">
        <FadeInWhenVisible>
          <section className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Om <span className="text-sky-400">Akis Detailing</span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-slate-300 md:text-lg">
              Vi ar ett passionerat bilvardsforetag som specialiserar oss pa noggrann tvatt, avancerad
              polering och premium lackskydd. Hos oss far varje bil den omsorg som den fortjanar.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={80}>
          <section className="rounded-2xl border border-slate-700/60 bg-slate-800/40 p-6 shadow-lg md:p-8">
            <h2 className="mb-4 text-2xl font-semibold">Var berattelse</h2>

            <p className="mb-4 leading-relaxed text-slate-300">
              Akis Detailing startades med en enkel ide: att erbjuda bilagare en plats dar deras bil
              behandlas med samma omsorg och noggrannhet som om den vore var egen.
            </p>

            <p className="mb-4 leading-relaxed text-slate-300">
              Vart mal ar inte bara att rengora bilar. Vi vill aterstalla nybilskanslan och hoja
              helhetsupplevelsen. Varje behandling anpassas efter bilens skick och kundens behov.
            </p>

            <p className="leading-relaxed text-slate-300">
              Hos oss ar varje detalj viktig. Det ar darfor vara kunder aterkommer eftersom resultatet
              alltid blir premium.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={140}>
          <section>
            <h2 className="mb-6 text-center text-2xl font-semibold">Vara varderingar</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 text-center shadow-md">
                <div className="mb-3 text-3xl">Precision</div>
                <h3 className="mb-2 text-lg font-semibold">Noggrannhet</h3>
                <p className="text-sm text-slate-400">Varje bil behandlas med maximal precision och fokus pa detaljer.</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 text-center shadow-md">
                <div className="mb-3 text-3xl">Passion</div>
                <h3 className="mb-2 text-lg font-semibold">Engagemang</h3>
                <p className="text-sm text-slate-400">Bilar ar mer an ett transportmedel. De ar var passion.</p>
              </div>

              <div className="rounded-xl border border-slate-700 bg-slate-800/60 p-5 text-center shadow-md">
                <div className="mb-3 text-3xl">Trygghet</div>
                <h3 className="mb-2 text-lg font-semibold">Kundfokus</h3>
                <p className="text-sm text-slate-400">Vi bygger langsiktiga relationer med nojda kunder.</p>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={200}>
          <section className="pt-4">
            <h2 className="mb-3 text-center text-2xl font-semibold">Nyckeltal</h2>
            <p className="mx-auto mb-6 max-w-xl text-center text-sm text-slate-400">
              Nagra siffror som visar vad vara kunder uppskattar med Akis Detailing.
            </p>

            <div className="mx-auto grid max-w-md grid-cols-2 gap-4">
              <StatCounter label="Antal projekt" value={192} />
              <StatCounter label="Nojda kunder" value={152} />
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={260}>
          <section className="pt-4 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-xl"
            >
              Kontakta oss
            </Link>

            <p className="mt-2 text-xs text-slate-400">Vi svarar snabbast via WhatsApp.</p>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

