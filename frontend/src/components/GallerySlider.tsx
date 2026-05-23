import { useRef, useState } from "react";
import { GalleryImage } from "../types";

interface Props {
  images: GalleryImage[];
}

function GallerySlider({ images }: Props) {
  const safeImages = Array.isArray(images) ? images : [];
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const total = safeImages.length;

  if (total === 0) return null;

  const goNext = () => setIndex((prev) => (prev + 1) % total);
  const goPrev = () => setIndex((prev) => (prev - 1 + total) % total);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 40) {
      deltaX < 0 ? goNext() : goPrev();
    }
    touchStartX.current = null;
  };

  const getSrc = (img: GalleryImage): string =>
    typeof img === "string" ? img : img.src;

  const getAlt = (img: GalleryImage, i: number): string =>
    typeof img === "string" ? `Galleri ${i + 1}` : img.alt ?? `Galleri ${i + 1}`;

  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div
        className="relative w-full max-w-sm ak-portrait-frame overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {safeImages.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={getSrc(img)}
              alt={getAlt(img, i)}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        <button
          type="button"
          onClick={goPrev}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-700/80 text-slate-200 text-lg shadow-md hover:border-sky-400 hover:text-sky-300"
          aria-label="Föregående bild"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-700/80 text-slate-200 text-lg shadow-md hover:border-sky-400 hover:text-sky-300"
          aria-label="Nästa bild"
        >
          ›
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
              aria-label={`Gå till bild ${i + 1}`}
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

export default GallerySlider;
