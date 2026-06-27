"use client";

import { Fragment, useRef } from 'react';
import { Check, Minus } from 'lucide-react';
import { useReveal } from './useReveal';

const rows = [
  {
    old: 'Manually re-list every property update',
    citadl: 'MLS syncs automatically, every hour',
  },
  {
    old: 'Wait days for a freelancer to update your site',
    citadl: 'Manage your own listings, no waiting',
  },
  {
    old: 'Locked into annual contracts',
    citadl: 'Month to month, always',
  },
  {
    old: "Generic template, looks like every other agent's site",
    citadl: 'Custom built, looks like nobody else’s',
  },
];

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section ref={sectionRef} className="py-[120px] lg:py-[180px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="mb-20 max-w-3xl" data-reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-accent mb-6">
            The Difference
          </p>
          <h2 className="font-display font-light text-[40px] md:text-[58px] leading-[1.05] text-citadl-text-primary">
            The old way vs. the way it should work.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-citadl-border border border-citadl-border rounded-[2px] overflow-hidden">
          {/* Column headers */}
          <div className="bg-citadl-bg px-8 py-6" data-reveal>
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-citadl-text-muted">
              The old way
            </p>
          </div>
          <div className="bg-citadl-dark px-8 py-6" data-reveal>
            <p className="font-body text-[11px] uppercase tracking-[0.2em] text-citadl-light/70">
              The Citadl way
            </p>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <Fragment key={i}>
              <div className="bg-citadl-alt px-8 py-7 flex items-start gap-4" data-reveal>
                <Minus size={18} className="text-citadl-text-muted/50 mt-1 shrink-0" />
                <p className="font-body font-light text-[16px] md:text-[17px] text-citadl-text-muted leading-relaxed">
                  {row.old}
                </p>
              </div>
              <div className="bg-citadl-dark px-8 py-7 flex items-start gap-4" data-reveal>
                <Check size={18} className="text-citadl-light mt-1 shrink-0" />
                <p className="font-body text-[16px] md:text-[17px] text-citadl-light leading-relaxed">
                  {row.citadl}
                </p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
