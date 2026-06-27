"use client";

import { useRef, useState, useId } from 'react';
import { Plus } from 'lucide-react';
import { useReveal } from './useReveal';

const faqs = [
  {
    q: 'How does the MLS sync work?',
    a: 'We connect to your local MLS feed. New listings, price changes, and status updates appear on your site automatically, usually within the hour. You can still add off-market or exclusive listings manually anytime.',
  },
  {
    q: 'How long until I rank on Google Maps?',
    a: "Most clients see movement in the first few weeks. Real local dominance is a weeks-long process, not overnight, and we stay on it until you're where you need to be and we keep you there.",
  },
  {
    q: 'What exactly is included in "automation"?',
    a: 'It depends on your business. Common examples: new listings auto-posting to your social media, lead notifications sent straight to your phone, automated follow-up messages to inquiries. We figure out what is worth building for you specifically on the discovery call.',
  },
  {
    q: 'I already have a website, can you still help?',
    a: "Yes. We'll review what you have first. If the foundation is solid, we focus on getting you ranking. If it needs a rebuild, we'll tell you honestly.",
  },
  {
    q: 'Do you require long contracts?',
    a: "No. Month to month, always. If it's not working, you're not locked in.",
  },
  {
    q: 'Do you only work with luxury agents?',
    a: 'We specialize in real estate, full stop. Whether you are just starting out or running a boutique brokerage, the approach is the same: bespoke, never templated.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();
  useReveal(sectionRef);

  return (
    <section id="faq" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="mb-16" data-reveal>
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-accent mb-6">
            FAQ
          </p>
          <h2 className="font-display font-light text-[40px] md:text-[58px] leading-[1.05] text-citadl-text-primary">
            Questions, answered.
          </h2>
        </div>

        <div className="border-t border-citadl-border">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            const btnId = `${baseId}-q-${index}`;
            const panelId = `${baseId}-a-${index}`;
            return (
              <div key={index} className="border-b border-citadl-border" data-reveal>
                <h3>
                  <button
                    id={btnId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group cursor-pointer"
                  >
                    <span className="font-display text-[22px] md:text-[26px] leading-tight text-citadl-text-primary">
                      {item.q}
                    </span>
                    <Plus
                      size={22}
                      className={`shrink-0 text-citadl-accent transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="font-body text-[16px] md:text-[17px] text-citadl-text-muted leading-relaxed pb-6 max-w-2xl">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
