// src/pages/Gallery.jsx
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import GallerySlider from "../components/GallerySlider";

const GALLERY_IMAGES = [
  // Byt ut dessa mot dina riktiga bildvägar
  "/images/gallery/bil-1.jpg",
  "/images/gallery/bil-2.jpg",
  "/images/gallery/bil-3.jpg",
  "/images/gallery/bil-4.jpg",
  "/images/gallery/bil-5.jpg",
  "/images/gallery/bil-6.jpg",
  "/images/gallery/bil-7.jpg",
  "/images/gallery/bil-8.jpg",
  "/images/gallery/bil-9.jpg",
  "/images/gallery/bil-10.jpg",
  "/images/gallery/bil-11.jpg",
  "/images/gallery/bil-12.jpg",
  "/images/gallery/bil-13.jpg",
  "/images/gallery/bil-14.jpg",
  "/images/gallery/bil-15.jpg",
  "/images/gallery/bil-16.jpg",
  "/images/gallery/bil-17.jpg",
  "/images/gallery/bil-18.jpg",
  "/images/gallery/bil-19.jpg",
  "/images/gallery/bil-20.jpg",
];

function Gallery() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Intro */}
        <FadeInWhenVisible>
          <section className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              Galleri
            </h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Här ser du ett urval av bilar vi har tagit hand om. Alla bilder är
              tagna med mobilkamera – ungefär som du själv ser bilen när du
              hämtar den. Svep eller tryck för att bläddra mellan bilderna.
            </p>
          </section>
        </FadeInWhenVisible>

        {/* Huvud-slider – mobilfokus */}
        <FadeInWhenVisible delay={0.1}>
          <section className="flex flex-col items-center">
            <GallerySlider images={GALLERY_IMAGES} />
          </section>
        </FadeInWhenVisible>

        {/* Extra: liten översikt för desktop */}
        <FadeInWhenVisible delay={0.2}>
          <section className="hidden md:block">
            <h2 className="text-sm font-semibold text-slate-200 mb-3">
              Översikt (desktop)
            </h2>
            <div className="grid grid-cols-4 gap-3">
              {GALLERY_IMAGES.map((src, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-xl border border-slate-800/80 bg-slate-900/80"
                >
                  <img
                    src={src}
                    alt={`Galleri liten ${i + 1}`}
                    className="h-28 w-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Gallery;