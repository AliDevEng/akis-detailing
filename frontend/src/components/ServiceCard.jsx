import { useState } from "react";

function ServiceCard({ title, description, image, price }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;       // ➜ Hämtar själva kortet som musen rör sig över
    const rect = card.getBoundingClientRect();
    // ➜ Hämtar kortets position och storlek i viewporten
    //   rect innehåller bl.a. {left, top, width, height}

    const x = e.clientX - rect.left;
    // ➜ Musens X-position INUTI kortet
    //   clientX = musens X på hela sidan
    //   rect.left = kortets vänstra kant
    //   Resultat: "hur långt in" i kortet musen är horisontellt

    const y = e.clientY - rect.top;   // ➜ Musens Y-position INUTI kortet (samma princip som ovan)

    const midX = rect.width / 2;      // ➜ Mitten av kortet i X-led
    const midY = rect.height / 2;     // ➜ Mitten av kortet i Y-led

    // Normalisera till -1 → 1
    const ratioX = (x - midX) / midX;
    // ➜ Normaliserar X-positionen till en skala från -1 till 1
    //   Om musen är längst till höger → ratioX ≈ +1
    //   Om musen är längst till vänster → ratioX ≈ -1
    //   I mitten → 0

    const ratioY = (y - midY) / midY;
    // ➜ Normaliserar Y-positionen till -1 → +1
    //   Ovanför mitten = negativt
    //   Under mitten = positivt

    const maxTilt = 10; // max 8° åt varje håll

    const rotateY = ratioX * maxTilt;
    // ➜ Horisontell lutning (vänster/höger)
    //   Om musen är till höger → positiv lutning
    //   Om musen är till vänster → negativ lutning

    const rotateX = -ratioY * maxTilt;
    // ➜ Vertikal lutning (upp/ner)
    //   NEGATIVT tecken för att effekten ska kännas naturlig:
    //   - musen högt uppe → kortet lutar bakåt
    //   - musen nere → kortet lutar framåt

    setTilt({ x: rotateX, y: rotateY });
    // ➜ Uppdaterar komponentens tilt-state, vilket i sin tur
    //   ändrar CSS-transformen i renderingen
  };

  const handleMouseLeave = () => {
    // Återställ lutning när musen lämnar kortet
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
        className="
          group flex flex-col h-full
          rounded-2xl border border-slate-700/80 
          bg-slate-900/70 shadow-md 
          hover:shadow-2xl hover:border-sky-500/60 hover:bg-sky-900/90
          transition-transform duration-300 ease-out
          will-change-transform
        "
      >
        {/* Bilddel */}
        {image && (
          <div className="relative overflow-hidden rounded-t-2xl mb-3">
            <img
              src={image}
              alt={title}
              className="w-full aspect-video object-cover transform transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/10 to-transparent" />
            <span className="absolute bottom-2 left-3 text-xs font-semibold text-slate-100 bg-slate-900/70 px-2 py-0.5 rounded-full border border-slate-700/80">
              {title}
            </span>
          </div>
        )}

        {/* Innehåll */}
        <div className="flex flex-col flex-1 px-4 pb-4 pt-1">
          {/* Titel visas här om du skulle ha kort utan bild */}
          {!image && (
            <h3 className="text-lg font-semibold mb-1">
              {title}
            </h3>
          )}

          {/* Beskrivning – flex-1 så alla kort får samma höjd */}
          <p className="text-sm text-slate-300 leading-relaxed flex-1">
            {description}
          </p>

          {/* Liten bottenrad / tag + pris */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
            <span className="inline-flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Rekommenderad behandling
            </span>

            {price && (
              <span className="rounded-full border border-slate-600 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                Från {price} kr
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
