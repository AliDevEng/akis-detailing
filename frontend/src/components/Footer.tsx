export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row">
        <div>
          <span className="font-semibold text-slate-200">Akis Detailing</span>
          <span className="mx-2">|</span>
          <span>Professionell bilvard & biltvatt</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span>(c) {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">Alla rattigheter forbehallna.</span>
        </div>
      </div>
    </footer>
  );
}

