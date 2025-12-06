import { useState } from "react";

function Navbar({ currentPage, onChangePage }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { id: "home", label: "Hem" },
    { id: "about", label: "Om oss" },
    { id: "contact", label: "Kontakta oss" },
  ];

  const handleClick = (id) => {
    onChangePage(id);
    setIsOpen(false); // stäng mobilmenyn efter klick
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-950/80 border-b border-slate-800 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="font-semibold tracking-tight text-base">
          Akis <span className="text-sky-400">Detailing</span>
        </div>

        {/* Desktop-meny */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`transition ${
                currentPage === link.id
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-300"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Hamburger (mobil) */}
        <button
          className="md:hidden text-slate-200 transition transform active:scale-95"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Öppna meny"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {isOpen ? (
              // X-ikon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger-ikon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobilmeny – alltid renderad, men animeras med klasser */}
      <div
        className={`
          md:hidden bg-slate-900 border-t border-slate-800 px-4
          origin-top transform transition-all duration-300 ease-out
          ${isOpen ? "max-h-48 opacity-100 scale-y-100 py-3" : "max-h-0 opacity-0 scale-y-95 py-0 pointer-events-none"}
        `}
      >
        <div className="space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`
                block w-full rounded-lg px-3 py-2 text-sm font-medium
                text-center   /* ⭐ centrerad text i mobilmenyn */
                transition
                ${
                  currentPage === link.id
                    ? "bg-slate-800 text-sky-400"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-sky-300"
                }
              `}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
