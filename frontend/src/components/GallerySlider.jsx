// src/components/GallerySlider.jsx
import { useRef, useState } from "react";

function GallerySlider({ images }) {
  const safeImages = Array.isArray(images) ? images : [];
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);

  const total = safeImages.length;

  // Om det inte finns några bilder, visa inget
  if (total === 0) {
    return null;
  }

  const goNext = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;

    // enkel swipe-detektering (vänster/höger)
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        goNext();   // svep vänster -> nästa bild
      } else {
        goPrev();   // svep höger -> föregående bild
      }
    }
    touchStartX.current = null;
  };

  return (
    <div className="w-full flex flex-col items-center gap-4">
      {/* Huvudbild – optimerad för mobil stående format */}
      <div
        className="relative w-full max-w-sm ak-portrait-frame overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800/80 shadow-xl"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {safeImages.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-out ${
              i === index ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={typeof src === "string" ? src : src.src}
              alt={
                typeof src === "string"
                  ? `Galleri ${i + 1}`
                  : src.alt || `Galleri ${i + 1}`
              }
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Piltangenter – syns främst på desktop */}
        <button
          type="button"
          onClick={goPrev}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-700/80 text-slate-200 text-lg shadow-md hover:border-sky-400 hover:text-sky-300"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={goNext}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 h-9 w-9 items-center justify-center rounded-full bg-slate-900/70 border border-slate-700/80 text-slate-200 text-lg shadow-md hover:border-sky-400 hover:text-sky-300"
        >
          ›
        </button>
      </div>

      {/* Dots + bildräknare */}
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
