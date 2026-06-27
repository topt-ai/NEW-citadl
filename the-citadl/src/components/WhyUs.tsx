"use client";

import { useRef } from 'react';
import { useReveal } from './useReveal';

const benefits = [
  {
    title: 'Always Current.',
    description: 'Your listings sync automatically. Your site never goes stale.',
  },
  {
    title: 'Built Around You.',
    description: 'No templates, no tiers that look cheap. Every site is custom.',
  },
  {
    title: 'Direct Access.',
    description: 'You talk to the builder, not an account manager.',
  },
  {
    title: 'No Lock-In.',
    description: "Month to month, always. If it's not working, you're not stuck.",
  },
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section id="why-us" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16" data-reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-accent mb-6">
            Why Us
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side */}
          <div className="flex flex-col justify-between" data-reveal>
            <h2 className="font-display font-light italic text-[48px] md:text-[68px] leading-[1.08] text-citadl-text-primary mb-8">
              “We win only<br />if you win.”
            </h2>
            <p className="font-body text-[18px] text-citadl-text-muted leading-relaxed max-w-md">
              That means no long contracts, no runaround, and no vanity reports full of numbers that don't pay your bills.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                data-reveal
                className={`py-8 ${index !== 0 ? 'border-t border-citadl-border' : 'pt-0 lg:pt-8'
                  } ${index === benefits.length - 1 ? 'border-b border-citadl-border pb-8' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <h3 className="font-display text-[32px] md:text-[40px] leading-tight w-full md:w-1/2 text-citadl-text-primary">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-[16px] md:text-[18px] text-citadl-text-muted leading-relaxed w-full md:w-1/2">
                    {benefit.description}
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
