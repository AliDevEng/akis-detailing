import FadeInWhenVisible from "../components/FadeInWhenVisible";
import GallerySlider from "../components/GallerySlider";
import { GALLERY_IMAGES } from "../data/gallery";

function Gallery() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 pt-24 px-4 pb-20">
      <div className="max-w-5xl mx-auto space-y-10">
        <FadeInWhenVisible>
          <section className="text-center space-y-3">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Galleri</h1>
            <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
              Här ser du ett urval av bilar vi har tagit hand om. Alla bilder är
              tagna med mobilkamera – ungefär som du själv ser bilen när du
              hämtar den. Svep eller tryck för att bläddra mellan bilderna.
            </p>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={100}>
          <section className="flex flex-col items-center">
            <GallerySlider images={GALLERY_IMAGES} />
          </section>
        </FadeInWhenVisible>
      </div>
    </div>
  );
}

export default Gallery;
