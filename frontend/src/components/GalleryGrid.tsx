import { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  images: string[];
}

function GalleryGrid({ images }: Props) {
  const safe = Array.isArray(images) ? images.filter(Boolean) : [];
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const total = safe.length;

  const goNext = useCallback(() => {
    setOpen((i) => (i === null ? null : (i + 1) % total));
  }, [total]);

  const goPrev = useCallback(() => {
    setOpen((i) => (i === null ? null : (i - 1 + total) % total));
  }, [total]);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, goNext, goPrev]);

  useEffect(() => {
    if (open === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.setAttribute("data-lightbox-open", "true");
    return () => {
      document.body.style.overflow = prevOverflow;
      document.documentElement.removeAttribute("data-lightbox-open");
    };
  }, [open]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? goNext : goPrev)();
    touchX.current = null;
  };

  if (total === 0) return null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {safe.map((src, i) => (
          <button
            key={`${src}-${i}`}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Öppna bild ${i + 1} av ${total}`}
            style={{ animationDelay: `${Math.min(i * 55, 700)}ms` }}
            className="ak-photo ak-slide-up group relative aspect-[9/16] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          >
            <img src={src} alt={`Akis Detailing arbete ${i + 1}`} loading="lazy" />
            <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
            <span className="absolute left-2.5 top-2.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-ink-950/70 text-[10px] font-bold text-ember-300 ring-1 ring-inset ring-white/10 backdrop-blur-md">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className="pointer-events-none absolute inset-x-0 bottom-0 flex translate-y-2 items-center justify-center pb-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1 text-[11px] font-semibold text-zinc-100 ring-1 ring-inset ring-white/10 backdrop-blur-md">
                <svg
                  viewBox="0 0 24 24"
                  className="h-3 w-3 stroke-current"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6" />
                  <path d="M21 3l-7 7" />
                  <path d="M9 21H3v-6" />
                  <path d="M3 21l7-7" />
                </svg>
                Visa
              </span>
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/96 p-4 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label="Galleri-visning"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Stäng"
            className="absolute right-3 top-[calc(env(safe-area-inset-top)+0.75rem)] z-10 flex h-12 w-12 items-center justify-center rounded-full bg-ink-900 text-zinc-100 shadow-xl shadow-black/60 ring-1 ring-inset ring-white/15 transition hover:scale-105 hover:bg-ember-500 hover:text-ink-950 sm:right-6 sm:top-6 sm:h-14 sm:w-14"
          >
            <svg
              className="h-6 w-6 sm:h-7 sm:w-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Föregående bild"
            className="absolute left-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink-900 text-zinc-100 shadow-xl shadow-black/60 ring-1 ring-inset ring-white/15 transition hover:scale-105 hover:bg-ember-500 hover:text-ink-950 sm:left-6 md:flex"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Nästa bild"
            className="absolute right-3 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-ink-900 text-zinc-100 shadow-xl shadow-black/60 ring-1 ring-inset ring-white/15 transition hover:scale-105 hover:bg-ember-500 hover:text-ink-950 sm:right-6 md:flex"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <img
            key={open}
            src={safe[open]}
            alt={`Bild ${open + 1} av ${total}`}
            onClick={(e) => e.stopPropagation()}
            className="ak-lightbox-img block h-auto w-auto rounded-2xl object-contain shadow-2xl shadow-black/70"
          />

          <div
            className="absolute bottom-[calc(env(safe-area-inset-bottom)+1rem)] left-1/2 -translate-x-1/2 rounded-full bg-ink-900/90 px-4 py-2 text-[12px] font-semibold text-zinc-200 ring-1 ring-inset ring-white/10 backdrop-blur-md"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="ak-counter-digit">{open + 1}</span>
            <span className="mx-1.5 text-zinc-500">/ {total}</span>
            <span className="ml-2 hidden text-zinc-400 sm:inline">
              · Svep eller använd piltangenterna
            </span>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryGrid;
