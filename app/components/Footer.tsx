import { Mail, MapPin, Globe, Phone } from "lucide-react";
import { navLinks } from "../lib/constants";
import Image from "next/image";

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
                  href="tel:+97798512889889"
                  className="font-mono text-xs text-white/60 hover:text-gold transition-colors"
                >
                  +977 9851288989
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold shrink-0" />
                <a
                  href="tel:+977986225587"
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
