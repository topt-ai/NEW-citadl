"use client";

import { useRef } from 'react';
import { useReveal } from './useReveal';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative h-[85vh] md:h-[90vh] overflow-hidden"
    >
      {/* Image is taller than the window and pans vertically as the section
          scrolls through the viewport, so the framed "window" reveals different
          parts of the photo while the text stays still. */}
      <img
        src="/tommy-about.webp"
        alt="Tommy, builder at The Citadl, at dusk"
        className="about-pan absolute inset-x-0 top-0 w-full h-[130%] object-cover"
      />

      {/* Static, centered text */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="relative max-w-2xl px-6 text-center">
          {/* Scrim sits behind the text only, fading out toward the edges */}
          <div
            className="absolute -inset-x-24 -inset-y-20 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 65% 60% at 50% 50%, rgba(10,12,16,0.72) 0%, rgba(10,12,16,0.4) 45%, transparent 74%)',
            }}
          />
          <div className="relative">
            <p
              data-reveal
              className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-light/70 mb-6"
            >
              Who You&apos;re Working With
            </p>
            <h2
              data-reveal
              className="font-display font-light text-[40px] md:text-[60px] leading-[1.05] text-citadl-light mb-8"
            >
              No account managers. No middlemen.
            </h2>
            <p
              data-reveal
              className="font-body font-light text-[17px] md:text-[19px] text-citadl-light/85 leading-relaxed max-w-xl mx-auto mb-8"
            >
              Every site we build, every line of code, every conversation, goes through one person. When you call, you talk to the person who actually built your site. Not a sales rep, not a project coordinator.
            </p>
            <p
              data-reveal
              className="font-body text-[13px] uppercase tracking-[0.2em] text-citadl-light/70"
            >
              Tommy, Builder at The Citadl
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
