"use client";

import { useState } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  image?: string;
  price?: number;
};

type Tilt = {
  x: number;
  y: number;
};

export default function ServiceCard({ title, description, image, price }: ServiceCardProps) {
  const [tilt, setTilt] = useState<Tilt>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    const ratioX = (x - midX) / midX;
    const ratioY = (y - midY) / midY;

    const maxTilt = 10;

    const rotateY = ratioX * maxTilt;
    const rotateX = -ratioY * maxTilt;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: "1000px" }}>
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
        className="group flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-900/70 shadow-md transition-transform duration-300 ease-out will-change-transform hover:border-sky-500/60 hover:bg-sky-900/90 hover:shadow-2xl"
      >
        {image ? (
          <div className="relative mb-3 overflow-hidden rounded-t-2xl">
            <img
              src={image}
              alt={title}
              className="aspect-video w-full transform object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
            <span className="absolute bottom-2 left-3 rounded-full border border-slate-700/80 bg-slate-900/70 px-2 py-0.5 text-xs font-semibold text-slate-100">
              {title}
            </span>
          </div>
        ) : null}

        <div className="flex flex-1 flex-col px-4 pb-4 pt-1">
          {!image ? <h3 className="mb-1 text-lg font-semibold">{title}</h3> : null}

          <p className="flex-1 text-sm leading-relaxed text-slate-300">{description}</p>

          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Rekommenderad behandling
            </span>

            {price ? (
              <span className="rounded-full border border-slate-600 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                Fran {price} kr
              </span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

