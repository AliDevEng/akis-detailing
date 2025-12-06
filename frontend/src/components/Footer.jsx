function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-800 bg-slate-950/90">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
        <div>
          <span className="font-semibold text-slate-200">Akis Detailing</span>
          <span className="mx-2">•</span>
          <span>Professionell bilvård & biltvätt</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span>© {new Date().getFullYear()}</span>
          <span className="hidden sm:inline">Alla rättigheter förbehållna.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
