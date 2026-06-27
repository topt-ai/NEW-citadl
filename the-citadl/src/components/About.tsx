"use client";

import { useRef } from 'react';
import { useReveal } from './useReveal';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section ref={sectionRef} id="about" className="relative h-[90vh] md:h-[185vh]">
      {/*
        Pinned image layer. On desktop the section is much taller than the
        sticky image (185vh vs 100vh), so the image stays pinned to the viewport
        for ~85vh of scroll while the text layer below scrolls up over it, then
        releases. On mobile the section height matches the image height, so there
        is no sticky travel and it degrades to a clean static full-bleed image
        (sticky parallax can be janky on small browsers). No rAF, iOS-safe.
      */}
      <div className="sticky top-0 h-[90vh] md:h-screen w-full overflow-hidden">
        <img
          src="/tommy-about.webp"
          alt="Tommy, builder at The Citadl, at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Text layer scrolls over the pinned image */}
      <div className="relative z-10 -mt-[90vh] md:-mt-[100vh] h-[90vh] md:h-[185vh] flex items-center justify-center">
        <div className="relative max-w-2xl px-6 text-center">
          {/* Scrim that travels with the text, not a flat overlay on the image */}
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
