import { Link } from "react-router-dom";
import {
  INSTAGRAM_URL,
  PHONE_NUMBER,
  TIKTOK_URL,
  WHATSAPP_MESSAGE,
  WHATSAPP_NUMBER,
} from "../constants/contact";

const FOOTER_LINKS: { to: string; label: string }[] = [
  { to: "/", label: "Hem" },
  { to: "/services", label: "Tjänster" },
  { to: "/gallery", label: "Galleri" },
  { to: "/about", label: "Om oss" },
  { to: "/contact", label: "Kontakt" },
];

function Footer() {
  const whatsappLink =
    `https://wa.me/${WHATSAPP_NUMBER}` +
    `?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <footer className="relative mt-12 overflow-hidden border-t border-white/5 bg-ink-900/40 md:mt-24">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-sunset-soft blur-[140px]" />

      <div className="relative mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-sunset-gradient text-ink-950 shadow-ember-sm">
                <span className="text-base font-extrabold">A</span>
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                Akis<span className="ak-gradient-text"> Detailing</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Premium bilvård i Skåne — polering, keramisk lackbehandling,
              tvätt och detailing utfört med passion och precision.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:-translate-y-0.5 hover:border-ember-400/50 hover:text-ember-300"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm11 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10A5 5 0 0012 7zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:-translate-y-0.5 hover:border-ember-400/50 hover:text-ember-300"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                  <path d="M16.5 3h2.1c.1.7.4 1.4.9 2 .5.6 1.1 1.1 1.9 1.4v2.1a5.4 5.4 0 01-2.8-.8 5.7 5.7 0 01-1.5-1.3v7.4a5.4 5.4 0 11-5.4-5.4c.3 0 .7 0 1 .1v2.2a3.2 3.2 0 00-1-.2 3.2 3.2 0 103.2 3.2V3z" />
                </svg>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 transition hover:-translate-y-0.5 hover:border-ember-400/50 hover:text-ember-300"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current">
                  <path d="M16.017 3.003c-7.167 0-12.983 5.817-12.983 12.983 0 2.292.6 4.533 1.75 6.517l-1.833 6.7 6.867-1.8c1.9 1.05 4.034 1.617 6.2 1.617h.002c7.167 0 12.983-5.817 12.983-12.983 0-3.467-1.35-6.717-3.8-9.167s-5.7-3.867-9.167-3.867zm0 23.833h-.002c-1.933 0-3.85-.517-5.517-1.5l-.4-.233-4.067 1.067 1.083-3.967-.25-.417c-1.1-1.817-1.683-3.883-1.683-5.983 0-6.283 5.117-11.4 11.4-11.4 3.05 0 5.917 1.183 8.067 3.333s3.333 5.017 3.333 8.067c0 6.283-5.117 11.4-11.4 11.4z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ember-300">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-zinc-400 transition hover:text-ember-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[11px] font-bold uppercase tracking-[0.22em] text-ember-300">
              Kontakt
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-zinc-400 transition hover:text-ember-300"
                >
                  {PHONE_NUMBER}
                </a>
              </li>
              <li className="text-zinc-400">Skåne, Sverige</li>
              <li className="text-zinc-500 text-xs">
                Snabbast svar via WhatsApp
              </li>
            </ul>
          </div>
        </div>

        <div className="ak-hairline my-10" />

        <div className="flex flex-col items-center justify-between gap-3 text-[12px] text-zinc-500 sm:flex-row">
          <span>
            © {new Date().getFullYear()} Akis Detailing — Alla rättigheter
            förbehållna.
          </span>
          <span className="text-zinc-600">
            Byggd med precision i Skåne.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
