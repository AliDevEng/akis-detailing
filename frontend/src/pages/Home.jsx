import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { startTransition } from "react";
import ServiceCard from "../components/ServiceCard";
import { SERVICES } from "../data/services";



function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      
{/* HERO */}
  <section className="relative overflow-hidden px-4 pt-24 pb-20">
    {/* Bakgrundsglow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
    </div>

    <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
      {/* Textdel */}
      <div>
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-slate-900/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-sky-300 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          Professionell bilvård i premiumklass
        </p>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight">
          Din bil,{" "}
          <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
            vår passion
          </span>
          .
        </h1>

        <p className="text-slate-300 text-base md:text-lg mb-6 max-w-xl">
          Akis Detailing hjälper dig att återfå{" "}
          <span className="font-semibold text-sky-200">
            nybilskänslan
          </span>{" "}
          med noggrann tvätt, polering, vaxning och keramisk lackbehandling –
          alltid med fokus på detaljer och kundnöjdhet.
        </p>

        <div className="flex flex-wrap items-center gap-4 mb-4 justify-center md:justify-start text-center md:text-left">
          <a
            href="#services"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold
                      bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg
                      transition transform hover:-translate-y-0.5"
          >
            Våra utvalda tjänster
          </a>

          <p className="text-xs text-slate-400 max-w-xs">
            Skrolla ned för att se alla behandlingar – eller kontakta oss direkt
            via WhatsApp-knappen nere till höger.
          </p>
        </div>
      </div>

      {/* Bild / highlight-kort */}
      <div className="relative">
        <div className="rounded-3xl bg-slate-900/80 border border-slate-700/70 shadow-2xl overflow-hidden">
          {/* Hero-bild – byt till valfri av dina bilder */}
          <div className="relative h-52 md:h-64 overflow-hidden">
            <img
              src="/images/akis-hero-1.jpg" // byt till en hero-bild du gillar mest
              alt="Bilbehandling hos Akis Detailing"
              className="h-full w-full object-cover transform scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
          </div>

          {/* Info i kortet */}
          <div className="p-5 md:p-6">
            <p className="text-sm text-slate-200 mb-2">
              “Vi behandlar varje bil som om den vore vår egen.”
            </p>
            <div className="flex flex-wrap gap-4 text-xs text-slate-300">
              <div className="flex flex-col">
                <span className="text-slate-400">Populär kombo</span>
                <span className="font-semibold text-slate-100">
                  Polering + vaxning
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-slate-400">Förväntad känsla</span>
                <span className="font-semibold text-sky-300">
                  Showroom-finish ✨
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Litet stats-chip */}
{/*         <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:right-8 md:-bottom-5">
          <div className="rounded-2xl bg-slate-900/90 border border-slate-700/70 px-4 py-2 shadow-lg text-xs text-slate-200 flex items-center gap-3">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-[0.16em] text-slate-400">
                Uppskattad känsla
              </span>
              <span className="font-semibold text-sky-300">
                “Som att hämta ut bilen ny igen”
              </span>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  </section>


      {/* TJÄNSTER */}
      <section id="services" className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Vanliga tjänster</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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

export default Home;