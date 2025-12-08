// src/components/ImageSlider3DClick.jsx
import { useState } from "react";

// Fallback-bilder om inget skickas in
const DEFAULT_IMAGES = [
  "/images/gallery/example-1.jpg",
  "/images/gallery/example-2.jpg",
  "/images/gallery/example-3.jpg",
];

const ImageSlider3DClick = ({ images }) => {
  // Se till att vi alltid har en array här
  const safeImages =
    images && images.length && Array.isArray(images) ? images : DEFAULT_IMAGES;

  const [index, setIndex] = useState(0);
  const total = safeImages.length;

  // Om det mot förmodan inte finns några bilder alls
  if (total === 0) {
    return null;
  }

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section className="relative mx-auto my-12 flex flex-col items-center gap-4 px-4">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-sky-400/80">
            Galleri
          </p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">
            Före &amp; efter – klicka för att bläddra
          </h2>
        </div>

        {/* Själva 3D-karusellen */}
        <div className="ak-slider3d-stage">
          <div
            className="ak-slider3d-ring"
            style={{ "--total": total, "--index": index }}
            onClick={nextImage}
          >
            {safeImages.map((src, i) => (
              <div
                key={i}
                className="ak-slider3d-item"
                style={{ "--i": i }}
              >
                <img src={src} alt={`Galleri ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Knappar */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={prevImage}
            className="rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:border-sky-400 hover:text-sky-300"
          >
            Föregående
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="rounded-full bg-sky-500/90 px-4 py-1.5 text-xs font-medium text-slate-950 shadow-sm hover:bg-sky-400"
          >
            Nästa
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider3DClick;
