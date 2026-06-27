"use client";

import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useReveal } from './useReveal';

const featured = {
  name: 'Marcus Reid Real Estate',
  eyebrow: 'Concept Build',
  subtitle: 'Real estate website with automatic MLS sync, built as a showcase of what is possible.',
  link: 'https://realtor-website-en.vercel.app/',
  image: '/marcus-reid.webp',
};

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section id="work" ref={sectionRef} className="py-[120px] lg:py-[180px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16 max-w-3xl" data-reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-accent mb-6">
            Selected Work
          </p>
          <h2 className="font-display font-light text-[44px] md:text-[64px] leading-[1.05] text-citadl-text-primary">
            The work.
          </h2>
        </div>

        <a
          href={featured.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
          data-reveal
        >
          {/* Full-bleed editorial image */}
          <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-[2px] bg-citadl-dark">
            <img
              src={featured.image}
              alt={featured.name}
              className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <span className="absolute top-6 left-6 font-body text-[11px] uppercase tracking-[0.22em] text-citadl-light/90 border border-citadl-light/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
              {featured.eyebrow}
            </span>
          </div>

          {/* Caption */}
          <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <h3 className="font-display font-normal text-[34px] md:text-[44px] leading-[1.05] text-citadl-text-primary mb-3">
                {featured.name}
              </h3>
              <p className="font-body font-light text-[17px] md:text-[18px] text-citadl-text-muted leading-relaxed">
                {featured.subtitle}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 font-body text-[15px] font-medium text-citadl-accent whitespace-nowrap">
              View the site
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
