import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import ServiceCard from "@/components/ServiceCard";
import ImageSlider3DClick from "@/components/ImageSlider3DClick";
import { SERVICES } from "@/data/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <section className="relative overflow-hidden px-4 pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-300">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
              Professionell bilvard i premiumklass
            </p>

            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Din bil, {" "}
              <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                var passion
              </span>
              .
            </h1>

            <p className="mb-6 max-w-xl text-base text-slate-300 md:text-lg">
              Akis Detailing hjalper dig att aterfa <span className="font-semibold text-sky-200">nybilskanslan</span>{" "}
              med noggrann tvatt, polering, vaxning och keramisk lackbehandling, alltid med fokus pa detaljer och kundnojdhet.
            </p>

            <div className="mb-4 flex flex-wrap items-center justify-center gap-4 text-center md:justify-start md:text-left">
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-sky-600 hover:shadow-lg"
              >
                Vara utvalda tjanster
              </a>

              <p className="max-w-xs text-xs text-slate-400">
                Scrolla ned for att se alla behandlingar, eller kontakta oss direkt via WhatsApp-knappen nere till hoger.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/80 shadow-2xl">
              <div className="relative h-52 overflow-hidden md:h-64">
                <img
                  src="/images/akis-hero-1.jpg"
                  alt="Bilbehandling hos Akis Detailing"
                  className="h-full w-full scale-105 transform object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
              </div>

              <div className="p-5 md:p-6">
                <p className="mb-2 text-sm text-slate-200">"Vi behandlar varje bil som om den vore var egen."</p>
                <div className="flex flex-wrap gap-4 text-xs text-slate-300">
                  <div className="flex flex-col">
                    <span className="text-slate-400">Popular kombo</span>
                    <span className="font-semibold text-slate-100">Polering + vaxning</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-slate-400">Forvantad kansla</span>
                    <span className="font-semibold text-sky-300">Showroom-finish</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ImageSlider3DClick
        images={[
          "/images/gallery/light1.jpg",
          "/images/gallery/ambient1.jpg",
          "/images/gallery/brake1.jpg",
          "/images/gallery/P-tak1.jpg",
          "/images/gallery/P1.jpg",
          "/images/gallery/light1.jpg",
          "/images/gallery/f1.jpg",
          "/images/gallery/T1.jpg",
        ]}
      />

      <section id="services" className="px-4 pb-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-4 text-2xl font-semibold">Vanliga tjanster</h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {SERVICES.map((service, index) => (
              <FadeInWhenVisible key={service.id} delay={index * 120}>
                <ServiceCard
                  title={service.title}
                  description={service.shortDescription}
                  image={service.image}
                  price={service.price}
                />
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

