"use client";

import { useRef } from 'react';
import { useReveal } from './useReveal';

const capabilities = [
  {
    number: '01',
    title: 'Websites + Your Own Portal',
    body: 'A custom site, not a template. Comes with a portal to manage your own listings, and your MLS feed synced in automatically so new listings show up without you touching a thing.',
    tags: ['CUSTOM BUILT', 'MLS SYNC', 'YOU OWN IT'],
    accent: true,
  },
  {
    number: '02',
    title: 'Top of Google.',
    body: 'Ranking on Google Maps is the highest-ROI move for local businesses. We get you there and keep you there.',
    tags: ['GOOGLE BUSINESS PROFILE', 'LOCAL AUTHORITY', 'BACKEND OPTIMIZATION'],
    accent: false,
  },
  {
    number: '03',
    title: 'Automation, Built Around You',
    body: "Every agent runs differently. Maybe it's new listings auto-posting to your socials. Maybe it's leads landing straight on your phone. We build what your business actually needs.",
    tags: ['CUSTOM AUTOMATIONS', 'LEAD ALERTS', 'BUILT FOR YOUR WORKFLOW'],
    accent: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  return (
    <section id="services" ref={sectionRef} className="py-[120px] lg:py-[180px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-20 max-w-3xl" data-reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-accent mb-6">
            Capabilities
          </p>
          <h2 className="font-display font-light text-[44px] md:text-[64px] leading-[1.05] text-citadl-text-primary">
            What we build.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.number}
              data-reveal
              className={`group bg-citadl-alt text-citadl-text-primary p-10 md:p-12 rounded-[2px] border border-citadl-border ${cap.accent ? 'border-t-2 border-t-citadl-accent' : ''} transition-shadow duration-500 hover:shadow-[0_24px_60px_-30px_rgba(27,42,74,0.35)] flex flex-col justify-between min-h-[420px]`}
            >
              <div>
                <span className="font-body text-[20px] text-citadl-text-muted/60 block mb-12">
                  {cap.number}
                </span>
                <h3 className="font-display font-normal text-[30px] md:text-[34px] leading-[1.1] mb-6">
                  {cap.title}
                </h3>
                <p className="font-body font-light text-[16px] md:text-[17px] text-citadl-text-muted leading-relaxed mb-12">
                  {cap.body}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-body text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-citadl-border text-citadl-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
