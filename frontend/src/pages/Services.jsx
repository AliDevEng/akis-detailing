import { SERVICES } from "../data/services";
import FadeInWhenVisible from "../components/FadeInWhenVisible";

function Services() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* Intro */}
        <FadeInWhenVisible>
          <section className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Våra <span className="text-sky-400">tjänster</span>
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Här kan du läsa mer om varje behandling vi erbjuder – vad den
              innebär och när den passar bäst. Perfekt om du är osäker på vilken
              tjänst som är rätt för din bil.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* Lista med tjänster */}
        <section className="space-y-6">
          {SERVICES.map((service, index) => (
            <FadeInWhenVisible key={service.id} delay={index * 120}>
              <article className="grid grid-cols-1 md:grid-cols-[minmax(0,220px)_minmax(0,1fr)] gap-5 bg-slate-800/40 border border-slate-700/70 rounded-2xl shadow-md overflow-hidden">
                {/* Bild */}
                <div className="relative h-48 md:h-full">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                {/* Text */}
                <div className="p-5 flex flex-col">
                  <h2 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h2>

                  {/* Lång beskrivning */}
                  <p className="text-sm text-slate-300 mb-3">
                    {service.longDescription}
                  </p>

                  {/* Kort sammanfattning */}
                 <div className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p className="m-0">
                        <span className="font-semibold">Kort sammanfattning:</span>{" "}
                        {service.shortDescription}
                    </p>
                </div>

                {/* Pris */}
                <div className="mt-4">
                    <span className="
                        inline-block 
                        px-3 py-1 
                        rounded-full 
                        bg-sky-600/20 
                        border border-sky-500/30 
                        text-sky-300 
                        text-xs 
                        font-semibold 
                        tracking-wide
                    ">
                        Från {service.price} kr
                    </span>
                </div>

                </div>
              </article>
            </FadeInWhenVisible>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Services;
