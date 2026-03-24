"use client";

import { useState } from "react";

type ImageSlider3DClickProps = {
  images?: string[];
};

const DEFAULT_IMAGES = [
  "/images/gallery/example-1.jpg",
  "/images/gallery/example-2.jpg",
  "/images/gallery/example-3.jpg",
];

export default function ImageSlider3DClick({ images }: ImageSlider3DClickProps) {
  const safeImages = Array.isArray(images) && images.length > 0 ? images : DEFAULT_IMAGES;

  const [index, setIndex] = useState(0);
  const total = safeImages.length;

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
          <p className="text-xs uppercase tracking-[0.35em] text-sky-400/80">Galleri</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-3xl">Fore &amp; efter - klicka for att bladdra</h2>
        </div>

        <div className="ak-slider3d-stage">
          <div
            className="ak-slider3d-ring"
            style={{
              ["--total" as string]: total,
              ["--index" as string]: index,
            }}
            onClick={nextImage}
          >
            {safeImages.map((src, i) => (
              <div
                key={`${src}-${i}`}
                className="ak-slider3d-item"
                style={{ ["--i" as string]: i }}
              >
                <img src={src} alt={`Galleri ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={prevImage}
            className="rounded-full border border-slate-600/70 bg-slate-900/70 px-4 py-1.5 text-xs font-medium text-slate-200 shadow-sm hover:border-sky-400 hover:text-sky-300"
          >
            Foregaende
          </button>
          <button
            type="button"
            onClick={nextImage}
            className="rounded-full bg-sky-500/90 px-4 py-1.5 text-xs font-medium text-slate-950 shadow-sm hover:bg-sky-400"
          >
            Nasta
          </button>
        </div>
      </div>
    </section>
  );
}

