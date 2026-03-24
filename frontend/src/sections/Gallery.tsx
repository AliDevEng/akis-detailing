import FadeInWhenVisible from "@/components/FadeInWhenVisible";
import GallerySlider from "@/components/GallerySlider";

const GALLERY_IMAGES: string[] = [
  "/images/gallery/brake1.jpg",
  "/images/gallery/IMG_5327.jpeg",
  "/images/gallery/IMG_5328.jpeg",
  "/images/gallery/IMG_5325.jpeg",
  "/images/gallery/T1.jpg",
  "/images/gallery/P-tak1.jpg",
  "/images/gallery/P2.jpg",
  "/images/gallery/P1.jpg",
  "/images/gallery/light1.jpg",
  "/images/gallery/IMG_5327.jpeg",
  "/images/gallery/f1.jpg",
  "/images/gallery/before-after-2.jpg",
  "/images/gallery/before-after-1.jpg",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-slate-900 px-4 pb-20 pt-24 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-10">
        <FadeInWhenVisible>
          <section className="space-y-3 text-center">
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Galleri</h1>
            <p className="mx-auto max-w-2xl text-sm text-slate-300 md:text-base">
              Har ser du ett urval av bilar vi har tagit hand om. Alla bilder ar tagna med mobilkamera.
              Svep eller tryck for att bladdra mellan bilderna.
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

