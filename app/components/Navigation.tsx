"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../lib/constants";
import Image from "next/image";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/96 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <Image
              src="/logo.png"
              alt="Lumbini-Province-Police-Logo"
              title="Lumbini Province Police Hackathon 2083"
              className="h-12 w-12 object-contain"
              width={48}
              height={48}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-mono font-bold text-left text-sm tracking-widest uppercase text-[#004163]">
                LUMBINI PROVINCE POLICE
              </span>
              <span
                className="font-mono text-xs uppercase"
                style={{
                  textAlign: "left",
                  opacity: 0.6,
                  letterSpacing: "0.2em",
                }}
              >
                 HACKATHON 2083
              </span>
            </div>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="font-mono font-bold text-xs uppercase tracking-wider text-foreground/65 hover:text-crimson transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span
              className="hidden md:inline-flex btn-primary font-mono font-bold text-sm uppercase tracking-widest px-6 py-3 bg-crimson text-white cursor-not-allowed"
            >
              REGISTRATION OPENING SOON
            </span>
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-8">
          <div className="flex justify-end">
            <button
              onClick={() => setMobileOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>
          <div className="flex flex-col gap-6 mt-8">
            {navLinks.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setMobileOpen(false)}
                className="font-sans font-black text-3xl uppercase text-foreground"
              >
                {l}
              </a>
            ))}
          </div>
          <span
            className="mt-auto w-full text-center bg-crimson text-white font-mono font-bold text-sm uppercase tracking-widest py-4 cursor-not-allowed"
          >
            REGISTRATION OPENING SOON
          </span>
        </div>
      )}
    </>
  );
}
