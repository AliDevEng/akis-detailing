function Navbar ({currentPage, onChangePage}) {
    const links = [
        {id: "home", label: "Hem"},
        {id: "about", label: "Om oss"},
        {id: "contact", label: "Kontakta oss"},
    ];


    return (
        <header className="fixed top-0 left-0 right-0 z-10 bg-slate-950/80 border-b border-slate-800 backdrop-blur">
            <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo / namn */}
                <div className="font-semibold tracking-tight">
                Akis <span className="text-sky-400">Detailing</span>
                </div>

                {/* Länkar */}
                <div className="flex gap-4 text-sm">
                {links.map((link) => (
                    <button
                    key={link.id}
                    onClick={() => onChangePage(link.id)}
                    className={`px-2 py-1 rounded-md transition ${
                        currentPage === link.id
                        ? "text-sky-400"
                        : "text-slate-300 hover:text-sky-300"
                    }`}
                    >
                    {link.label}
                    </button>
                ))}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;