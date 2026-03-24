import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import { SERVICES } from "@/data/services";

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-900 px-4 pb-20 pt-24 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10">
        <FadeInWhenVisible>
          <section className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
              Vara <span className="text-sky-400">tjanster</span>
            </h1>
            <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
              Har kan du lasa mer om varje behandling vi erbjuder, vad den innebar och nar den passar bast.
              Perfekt om du ar osaker pa vilken tjanst som ar ratt for din bil.
            </p>
          </section>
        </FadeInWhenVisible>

        <section className="space-y-6">
          {SERVICES.map((service, index) => (
            <FadeInWhenVisible key={service.id} delay={index * 120}>
              <article className="grid grid-cols-1 gap-5 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-800/40 shadow-md md:grid-cols-[minmax(0,220px)_minmax(0,1fr)]">
                <div className="relative h-48 md:h-full">
                  <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-col p-5">
                  <h2 className="mb-2 text-xl font-semibold">{service.title}</h2>

                  <p className="mb-3 text-sm text-slate-300">{service.longDescription}</p>

                  <div className="flex items-start gap-2 text-xs text-slate-400">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <p className="m-0">
                      <span className="font-semibold">Kort sammanfattning:</span> {service.shortDescription}
                    </p>
                  </div>

                  <div className="mt-4">
                    <span className="inline-block rounded-full border border-sky-500/30 bg-sky-600/20 px-3 py-1 text-xs font-semibold tracking-wide text-sky-300">
                      Fran {service.price} kr
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

