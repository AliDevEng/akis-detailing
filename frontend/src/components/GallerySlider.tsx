"use client";

import { useRef, useState } from "react";

type GalleryImage =
  | string
  | {
      src: string;
      alt?: string;
    };

type GallerySliderProps = {
  images: GalleryImage[];
};

export default function GallerySlider({ images }: GallerySliderProps) {
  const safeImages: GalleryImage[] = Array.isArray(images) ? images : [];
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const total = safeImages.length;

  if (total === 0) {
    return null;
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;

    const deltaX = e.changedTouches[0]?.clientX - touchStartX.current;
    if (typeof deltaX !== "number") return;

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        goNext();
      } else {
        goPrev();
      }
    }

    touchStartX.current = null;
  };

  return (
    <div className="flex w-full flex-col items-center gap-4">
      <div
        className="ak-portrait-frame relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {safeImages.map((image, i) => {
          const src = typeof image === "string" ? image : image.src;
          const alt = typeof image === "string" ? `Galleri ${i + 1}` : image.alt ?? `Galleri ${i + 1}`;

          return (
            <div
              key={`${src}-${i}`}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            </div>
          );
        })}

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-lg text-slate-200 shadow-md hover:border-sky-400 hover:text-sky-300 md:flex"
          aria-label="Foregaende bild"
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-2 top-1/2 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/70 text-lg text-slate-200 shadow-md hover:border-sky-400 hover:text-sky-300 md:flex"
          aria-label="Nasta bild"
        >
          {">"}
        </button>
      </div>

      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-1.5">
          {safeImages.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-sky-400" : "w-2 bg-slate-500"
              }`}
              aria-label={`Ga till bild ${i + 1}`}
            />
          ))}
        </div>
        <span className="text-[11px] text-slate-400">
          {index + 1} / {total}
        </span>
      </div>
    </div>
  );
}

