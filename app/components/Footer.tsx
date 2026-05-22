import { Mail, MapPin, Globe, Phone } from "lucide-react";
import { navLinks } from "../lib/constants";
import Image from "next/image";

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/lppodang/",
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/lumbiniprovincepolice/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z",
  },
  {
    label: "Discord",
    href: "https://discord.gg/r2Zh65Tsh",
    path: "M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.078.037c-.211.375-.444.864-.608 1.249-1.844-.276-3.68-.276-5.486 0-.164-.385-.406-.874-.617-1.249a.077.077 0 0 0-.078-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 0 0-.041-.105 13.107 13.107 0 0 1-1.872-.9.077.077 0 0 1-.007-.128c.125-.094.25-.192.368-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.062 0a.073.073 0 0 1 .078.009c.119.099.243.198.369.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.9.076.076 0 0 0-.04.106c.36.698.772 1.363 1.225 1.993a.077.077 0 0 0 .084.028 19.876 19.876 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.673-3.548-13.66a.061.061 0 0 0-.031-.028ZM8.02 15.331c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.955 2.419-2.156 2.419Zm7.975 0c-1.183 0-2.156-1.085-2.156-2.419 0-1.333.955-2.418 2.156-2.418 1.21 0 2.175 1.094 2.156 2.418 0 1.334-.946 2.419-2.156 2.419Z",
  },
];

export function Footer() {
  return (
    <footer className="relative w-full bg-midnight text-white">
      <span className="absolute top-0 left-0 right-0 h-1 bg-gold" />
      <div className="mx-auto max-w-7xl px-6 md:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Nepal Police"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <span className="font-mono font-bold text-sm tracking-widest uppercase text-gold">
                  LUMBINI PROVINCE
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-white/60">
                  NEPAL POLICE
                </span>
              </div>
            </div>
            <p className="mt-6 font-mono text-xs text-white/40 leading-relaxed max-w-xs">
              Presented by Lumbini Province Police Office as part of the initiative
              for digital public safety innovation in Nepal.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-white/15 text-white/60 hover:border-gold hover:text-gold transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="16"
                    height="16"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono font-bold text-sm tracking-widest uppercase text-gold mb-5">
              QUICK LINKS
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`/#${l.toLowerCase()}`}
                    className="font-mono text-xs uppercase tracking-wider text-white/50 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono font-bold text-sm tracking-widest uppercase text-gold mb-5">
              CONTACT
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold shrink-0" />
                <a
                  href="mailto:ujjwalkhadka@nepalpolice.gov.np"
                  className="font-mono text-xs text-white/60 hover:text-gold transition-colors"
                >
                  ujjwalkhadka@nepalpolice.gov.np
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+9779851288989"
                  className="font-mono text-xs text-white/60 hover:text-gold transition-colors"
                >
                  +977 9851288989
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+9779702305664"
                  className="font-mono text-xs text-white/60 hover:text-gold transition-colors"
                >
                  +977 9702305664
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={14} className="text-gold shrink-0" />
                <span className="font-mono text-xs text-white/60">
                  Police Training Centre, Butwal, Rupandehi
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={14} className="text-gold shrink-0" />
                <a
                  href="https://lumbini.nepalpolice.gov.np"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs text-white/60 hover:text-gold transition-colors"
                >
                  lumbini.nepalpolice.gov.np
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="font-mono text-xs text-white/30">
            2026 Lumbini Province Police Office. All rights reserved.
          </p>
          <p className="font-mono text-xs uppercase text-white/20">
            Innovation for Secure Digital Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
