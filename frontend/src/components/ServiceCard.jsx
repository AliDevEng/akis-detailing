function ServiceCard({ title, description, image }) {
  return (
    <div
      className="
        group flex flex-col h-full
        rounded-2xl border border-slate-700/80 
        bg-slate-900/70 shadow-md 
        hover:shadow-xl hover:border-sky-500/60 hover:bg-slate-900/90
        transition
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
        {/* Titel (för extra tydlighet, även om den ligger på bilden också) */}
        {!image && (
          <h3 className="text-lg font-semibold mb-1">
            {title}
          </h3>
        )}

        {/* Beskrivning – flex-1 = gör att alla kort blir lika höga */}
        <p className="text-sm text-slate-300 leading-relaxed flex-1">
          {description}
        </p>

        {/* Liten bottenrad / tag */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
          <span className="inline-flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Rekommenderad behandling
          </span>
          <span className="rounded-full border border-slate-600 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
            Tillgänglig
          </span>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
