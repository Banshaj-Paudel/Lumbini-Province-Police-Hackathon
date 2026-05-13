"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../lib/constants";
import Image from "next/image";

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/96 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Lumbini-Province-Police-Logo"
              title="Lumbini Province Police Hackathon 2083"
              className="h-12 w-12 object-contain"
              width={48}
              height={48}
            />
            <div className="flex flex-col leading-tight">
              <span className="font-mono font-bold text-sm tracking-widest uppercase text-gold">
                LUMBINI PROVINCE
              </span>
              <span
                className="font-mono text-xs uppercase"
                style={{
                  color: "#2d3583",
                  opacity: 0.6,
                  letterSpacing: "0.2em",
                }}
              >
                POLICE HACKATHON 2026
              </span>
            </div>
          </div>

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
            <a
              href="#register"
              className="hidden md:inline-flex btn-primary font-mono font-bold text-sm uppercase tracking-widest px-6 py-3 bg-crimson text-white"
            >
              REGISTER NOW
            </a>
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
          <a
            href="#register"
            onClick={() => setMobileOpen(false)}
            className="mt-auto w-full text-center bg-crimson text-white font-mono font-bold text-sm uppercase tracking-widest py-4"
          >
            REGISTER NOW
          </a>
        </div>
      )}
    </>
  );
}
