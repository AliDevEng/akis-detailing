import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Hem" },
    { to: "/services", label: "Tjänster" },
    { to: "/gallery", label: "Galleri" },
    { to: "/about", label: "Om oss" },
    { to: "/contact", label: "Kontakta oss" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-950/80 border-b border-slate-800 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-semibold tracking-tight text-base">
          Akis <span className="text-sky-400">Detailing</span>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6 text-sm">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`transition ${
                location.pathname === link.to
                  ? "text-sky-400"
                  : "text-slate-300 hover:text-sky-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-slate-200 transition transform active:scale-95"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`
          md:hidden bg-slate-900 border-t border-slate-800 px-4
          origin-top transform transition-all duration-300 ease-out
          ${isOpen ? "max-h-48 opacity-100 scale-y-100 py-3" : "max-h-0 opacity-0 scale-y-95 py-0 pointer-events-none"}
        `}
      >
        <div className="space-y-2">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`
                block w-full rounded-lg px-3 py-2 text-center text-sm font-medium transition
                ${
                  location.pathname === link.to
                    ? "bg-slate-800 text-sky-400"
                    : "text-slate-300 hover:bg-slate-800/80 hover:text-sky-300"
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
