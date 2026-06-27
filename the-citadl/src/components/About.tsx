"use client";

import { useRef } from 'react';
import { useReveal } from './useReveal';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section ref={sectionRef} id="about" className="relative h-[130vh]">
      {/* Pinned image window: sticky keeps it static in the viewport while the
          section scrolls, then releases at the section end. iOS-safe (no
          background-attachment: fixed) and no rAF/JS animation. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <img
          src="/tommy-about.webp"
          alt="Tommy, builder at The Citadl, at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Scrim behind the text only: a centered radial darkening that fades out,
            rather than a flat overlay across the whole image. */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(10,12,16,0.7) 0%, rgba(10,12,16,0.35) 45%, transparent 72%)',
          }}
        />

        <div className="relative z-10 max-w-2xl px-6 text-center">
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
    </section>
  );
}
