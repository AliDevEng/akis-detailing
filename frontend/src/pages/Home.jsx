import ServiceCard from "../components/ServiceCard";

const SERVICES = [
    
    {
        title: "Grovtvätt",
        description: "Extrem tvätt som tar bort allt inkl. tjärr och asfalt",
        image: "/images/grovtvatt.jpg"
    },
    {
        title: "Innertvätt",
        description: "Djup rengöring av interiör, mattor och paneler.",
        image: "/images/innertvatt.jpg"
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
        description: "Premiumbehandling som skyddar lacken i upp till 5 år.",
        image: "/images/keramisk.jpg",
    },
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
                {SERVICES.map((item) => (
                    <ServiceCard
                        key={item.title}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                    />    
                ))}
                </div>
            </section>

        </div>
    );

}

export default Home;