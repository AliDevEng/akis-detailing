"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLink = {
  to: string;
  label: string;
};

const links: NavLink[] = [
  { to: "/", label: "Hem" },
  { to: "/services", label: "Tjanster" },
  { to: "/gallery", label: "Galleri" },
  { to: "/about", label: "Om oss" },
  { to: "/contact", label: "Kontakta oss" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="text-base font-semibold tracking-tight">
          Akis <span className="text-sky-400">Detailing</span>
        </div>

        <div className="hidden gap-6 text-sm md:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              href={link.to}
              className={`transition ${
                pathname === link.to ? "text-sky-400" : "text-slate-300 hover:text-sky-300"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="text-slate-200 transition active:scale-95 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
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

      <div
        className={`
          overflow-hidden bg-slate-900 px-4 transition-[max-height,opacity] duration-300 ease-out md:hidden
          ${isOpen ? "max-h-64 opacity-100" : "pointer-events-none max-h-0 opacity-0"}
        `}
      >
        <div className={isOpen ? "border-t border-slate-800 py-3" : ""}>
          <div className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.to}
                href={link.to}
                className={`
                  block w-full rounded-lg px-3 py-2 text-center text-sm font-medium transition
                  ${
                    pathname === link.to
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
      </div>
    </header>
  );
}

