import { Link } from "react-router-dom";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import GalleryGrid from "../components/GalleryGrid";
import { GALLERY_IMAGES, SHOWCASE_IMAGES } from "../data/gallery";

const ALL_IMAGES: string[] = (() => {
  const set = new Set<string>();
  GALLERY_IMAGES.forEach((src) => set.add(src));
  SHOWCASE_IMAGES.forEach((img) => set.add(img.src));
  return Array.from(set);
})();

function Gallery() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 pt-24 pb-16 md:pt-32 md:pb-24 text-zinc-100">
      <div className="pointer-events-none absolute -left-32 top-10 h-[500px] w-[500px] rounded-full bg-amber-500/[0.06] blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[500px] w-[500px] rounded-full bg-rose-500/[0.06] blur-[150px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <FadeInWhenVisible>
          <header className="mx-auto max-w-2xl text-center">
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-ember-300">
              Galleri
            </span>
            <h1 className="ak-display mt-3 text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              Före. Efter.{" "}
              <span className="ak-gradient-text">Förälskelse.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-zinc-400">
              Ett urval av bilar vi tagit hand om — tryck på en bild för att
              öppna i full storlek. Svep eller använd piltangenterna för att
              bläddra.
            </p>
          </header>
        </FadeInWhenVisible>

        <div className="mt-8 md:mt-12">
          <GalleryGrid images={ALL_IMAGES} />
        </div>

        <FadeInWhenVisible delay={200}>
          <section className="mt-14 ak-glass relative overflow-hidden rounded-3xl p-7 text-center md:mt-20 md:p-12">
            <div className="pointer-events-none absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-sunset-soft blur-[100px]" />
            <div className="relative">
              <h3 className="ak-display text-2xl font-bold md:text-4xl">
                Vill du se din bil i nästa{" "}
                <span className="ak-gradient-text">galleri-post</span>?
              </h3>
              <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
                Boka en behandling och låt oss förvandla din bil till något att
                visa upp.
              </p>
              <div className="mt-7">
                <Link to="/contact" className="ak-btn-primary">
                  Boka din tid
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Gallery;
