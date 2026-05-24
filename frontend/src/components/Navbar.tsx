import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavLink {
  to: string;
  label: string;
}

const NAV_LINKS: NavLink[] = [
  { to: "/", label: "Hem" },
  { to: "/services", label: "Tjänster" },
  { to: "/gallery", label: "Galleri" },
  { to: "/about", label: "Om oss" },
  { to: "/contact", label: "Kontakt" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="mx-auto max-w-6xl px-3 sm:px-5">
        <nav
          className={`relative flex h-14 items-center justify-between rounded-2xl px-3 sm:h-16 sm:px-5 transition-all duration-500 ${
            scrolled
              ? "ak-glass-strong shadow-lg shadow-black/40"
              : "ak-glass"
          }`}
        >
          <Link
            to="/"
            className="group flex items-center gap-2.5 font-display font-bold tracking-tight"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-xl bg-sunset-gradient text-ink-950 shadow-ember-sm transition-transform duration-500 group-hover:rotate-[14deg]">
              <span className="text-base font-extrabold">A</span>
            </span>
            <span className="text-[15px] sm:text-base">
              Akis
              <span className="ak-gradient-text font-extrabold"> Detailing</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                    active
                      ? "text-ember-300"
                      : "text-zinc-300 hover:text-zinc-50"
                  }`}
                >
                  {active && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-white/[0.06] ring-1 ring-inset ring-white/10" />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-sunset-gradient px-4 py-2 text-[13px] font-bold text-ink-950 shadow-ember-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-ember"
            >
              Boka tid
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
            aria-expanded={isOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-100 ring-1 ring-inset ring-white/10 transition active:scale-95 md:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 right-0 top-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "top-1/2 -translate-y-1/2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-current transition-all duration-300 ${
                  isOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </nav>
      </div>

      <div
        className={`fixed inset-0 top-0 z-40 md:hidden ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`absolute inset-0 bg-ink-950/80 backdrop-blur-md transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute inset-x-3 top-20 rounded-3xl ak-glass-strong p-4 shadow-2xl shadow-black/60 transition-all duration-500 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => {
              const active = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ transitionDelay: `${isOpen ? i * 40 : 0}ms` }}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-all ${
                    active
                      ? "bg-white/[0.06] text-ember-300 ring-1 ring-inset ring-ember-400/20"
                      : "text-zinc-200 hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{link.label}</span>
                  <svg
                    className={`h-4 w-4 transition-transform ${
                      active ? "translate-x-0" : "-translate-x-1 opacity-50"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-sunset-gradient px-5 py-3.5 text-sm font-bold text-ink-950 shadow-ember-sm"
            >
              Boka tid
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
