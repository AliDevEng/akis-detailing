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
    setIsOpen(false); // stäng mobilmenyn när man klickar
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-slate-950/80 border-b border-slate-800 backdrop-blur">
      <nav className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="font-semibold tracking-tight text-lg text-white">
          Akis <span className="text-sky-400">Detailing</span>
        </div>

        {/* Desktop Meny */}
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

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* enkel hamburger icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              // X icon
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon
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

      {/* Mobilmeny (dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 py-3 space-y-2">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`block w-full text-left py-2 rounded-lg px-2 transition ${
                currentPage === link.id
                  ? "text-sky-400 bg-slate-800"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
