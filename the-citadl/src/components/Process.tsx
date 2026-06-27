"use client";

import { useRef } from 'react';
import { useReveal } from './useReveal';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: '15 mins. We learn your business, goals, and current situation.',
  },
  {
    number: '02',
    title: 'Proposal',
    description: 'Custom scope, timeline, and pricing. No templates.',
  },
  {
    number: '03',
    title: 'Build',
    description: 'Bespoke build with your MLS synced in. Ranking work starts immediately and compounds over time.',
  },
  {
    number: '04',
    title: 'Grow',
    description: 'Ongoing SEO, reporting, and optimization.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section id="process" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16" data-reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-accent mb-6">
            Process
          </p>
          <h2 className="font-display font-light text-[40px] md:text-[58px] leading-[1.05] text-citadl-text-primary max-w-2xl">
            No mystery. No fluff. Here is how it works.
          </h2>
        </div>

        <div className="relative mt-24">
          {/* Connecting Line (Desktop: Horizontal, Mobile: Vertical) */}
          <div className="absolute top-0 left-[24px] md:left-0 md:top-[24px] w-[2px] h-full md:w-full md:h-[2px] bg-citadl-border z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-citadl-accent z-10"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative z-20">
            {steps.map((step, index) => (
              <div key={index} data-reveal className="flex flex-row md:flex-col items-start gap-6 md:gap-8">
                {/* Number Circle */}
                <div className="w-[50px] h-[50px] rounded-full bg-citadl-alt border border-citadl-border flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="font-mono text-[14px] text-citadl-text-primary font-medium">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2 md:pt-0">
                  <h3 className="font-display text-[28px] md:text-[32px] leading-tight text-citadl-text-primary mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-[16px] text-citadl-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
