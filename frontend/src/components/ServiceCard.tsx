import { useRef, useState } from "react";

interface Props {
  title: string;
  description: string;
  image?: string;
  price?: number;
  index?: number;
}

function ServiceCard({ title, description, image, price, index }: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const maxTilt = 6;
    setTilt({
      x: -((y - midY) / midY) * maxTilt,
      y: ((x - midX) / midX) * maxTilt,
    });
    setGlow({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const onLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlow({ x: 50, y: 50 });
  };

  return (
    <div style={{ perspective: "1200px" }} ref={wrapRef}>
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="ak-card group relative flex h-full flex-col will-change-transform"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(251,146,60,0.18), transparent 55%)`,
          }}
        />

        {image && (
          <div className="relative overflow-hidden rounded-t-[1.2rem]">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />
            {typeof index === "number" && (
              <span className="absolute left-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-950/70 backdrop-blur-md text-[11px] font-bold text-ember-300 ring-1 ring-inset ring-white/10">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
            {typeof price === "number" && (
              <span className="absolute right-3 top-3 rounded-full bg-ink-950/70 px-3 py-1 text-[11px] font-bold tracking-tight text-ember-300 ring-1 ring-inset ring-white/10 backdrop-blur-md">
                Från {price} kr
              </span>
            )}
          </div>
        )}

        <div className="relative z-10 flex flex-1 flex-col p-5">
          <h3 className="font-display text-lg font-bold text-zinc-50">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
            {description}
          </p>

          <div className="mt-5 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Premium-utförande
            </span>
            <span className="inline-flex items-center gap-1 font-semibold text-ember-300 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              Detaljer
              <svg
                className="h-3 w-3"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
