'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function NotFound() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/404-animation/404-Lost-in-Space.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Top accent line */}
      <span className="absolute top-0 left-0 right-0 h-1 bg-gold" />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Animation Section */}
        {animationData && (
          <div className="mb-12 flex justify-center h-64 md:h-80">
            <div className="w-full max-w-md">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="text-center">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-black uppercase font-sans mb-4 text-foreground tracking-tight leading-tight">
            Page Not <span className="text-crimson">Found</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/60 font-mono mb-12 max-w-2xl mx-auto leading-relaxed">
            The page you&apos;re looking for is unavailable. It may have been moved, removed, or
            the URL might be incorrect. Please check and try again or return to the homepage.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-3 bg-crimson text-white font-mono font-bold text-sm uppercase tracking-widest px-8 py-4 hover:shadow-lg hover:shadow-crimson/50 transition-all duration-300 transform hover:scale-105"
            >
              <span>BACK TO HOME</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <span
              role="button"
              aria-disabled="true"
              className="inline-flex items-center justify-center gap-3 border-2 border-crimson text-crimson font-mono font-bold text-sm uppercase tracking-widest px-8 py-4 cursor-not-allowed"
            >
              <span>REGISTRATION OPENING SOON</span>
              <ArrowRight size={20} />
            </span>
          </div>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
    </div>
  );
}
