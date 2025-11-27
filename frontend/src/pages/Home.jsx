const SERVICES = [
    "Grovtvätt",
    "Innertvätt",
    "Sätestvätt",
    "Polering",
    "Vaxning",
    "Keramisk lackbehandling"
];

function Home () {
    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 " >
            {/* Hero-sektion */}
            <section className="px-4 pt-24 pb-10 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    Akis Detailing
                </h1>
                <p className="text-slate-300 text-lg mb-4">
                    Premium biltvätt & bilvård med fokus på detaljer - för dig som
                    vill att bilen ska kännas som ny.
                </p>
                <p className="text-sm text-slate-400">
                    Mobilanpassad bokning & kontakt direkt via WhatsApp, samtal
                    & sociala medier (kommer strax 😉)
                </p>
            </section>


            {/* Tjänster */}
            <section className="px-4 pb-16 max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold mb-4">Våra tjänster</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {SERVICES.map((service) => (
                    <div
                    key={service}
                    className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 shadow-sm"
                    >
                    <p className="font-medium">{service}</p>
                    <p className="text-sm text-slate-400 mt-1">
                        Professionell behandling anpassad efter din bils skick.
                    </p>
                    </div>
                ))}
                </div>
            </section>

        </div>
    );

}

export default Home;