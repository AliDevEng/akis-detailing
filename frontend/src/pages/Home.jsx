import FadeInWhenVisible from "../components/FadeInWhenVisible";
import { startTransition } from "react";
import ServiceCard from "../components/ServiceCard";

const SERVICES = [
  {
    title: "Grovtvätt",
    description: "Grundlig avspolning och rengöring av hela bilen.",
    image: "/images/grovtvatt.jpg",
  },
  {
    title: "Innertvätt",
    description: "Djup rengöring av interiör, mattor och paneler.",
    image: "/images/innertvatt.jpg",
  },
  {
    title: "Sätestvätt",
    description: "Textil- och lädersäten rengörs på djupet.",
    image: "/images/satestvatt.jpg",
  },
  {
    title: "Polering",
    description: "Tar bort repor och ger bilen ny glans.",
    image: "/images/polering.jpg",
  },
  {
    title: "Vaxning",
    description: "Skyddar lacken och ger långvarig glans.",
    image: "/images/vaxning.jpg",
  },
  {
    title: "Keramisk lackbehandling",
    description: "Premiumbehandling som skyddar lacken i upp till 3 år.",
    image: "/images/keramisk.jpg",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* HERO */}
      <section className="px-4 pt-24 pb-16">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Textdel */}
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sky-400 mb-3">
              Bilvård • Detailing • Biltvätt
            </p>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Ge din bil{" "}
              <span className="text-sky-400">showroom-känsla</span>
            </h1>

            <p className="text-slate-300 text-base md:text-lg mb-6">
              Akis Detailing erbjuder professionell biltvätt, polering
              och keramisk lackbehandling – med fokus på detaljer och
              kundnöjdhet.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#services"
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold
                           bg-sky-500 hover:bg-sky-600 text-white transition"
              >
                Se våra tjänster
              </a>

              <span className="text-xs text-slate-400">
                Skrolla ned eller använd WhatsApp-knappen för att boka tid.
              </span>
            </div>
          </div>

          {/* “Highlight”-box / bildyta */}
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-sky-500/10 via-slate-800/60 to-sky-400/10 
                            border border-slate-700/60 p-6 md:p-8 shadow-xl">
              <p className="text-sm text-slate-300 mb-3">
                ✨ Handplockade behandlingar för dig som bryr dig om din bil.
              </p>
              <ul className="text-sm text-slate-200 space-y-2 mb-4">
                <li>• Noggrann invändig & utvändig rengöring</li>
                <li>• Skonsamma produkter anpassade efter lack och material</li>
                <li>• Flexibel kontakt via WhatsApp, telefon & sociala medier</li>
              </ul>
              <p className="text-xs text-slate-400">
                Perfekt för både vardagsbil och entusiastbil.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TJÄNSTER */}
      <section id="services" className="px-4 pb-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Våra tjänster</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SERVICES.map((item, index) => (
            <FadeInWhenVisible key={item.title} delay={index * 120}>
                <ServiceCard
                title={item.title}
                description={item.description}
                image={item.image}
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