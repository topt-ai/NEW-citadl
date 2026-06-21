"use client";

import { useEffect, useRef, useState, useId } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: 'How long until I rank on Google Maps?',
    a: "Most clients see movement in the first few weeks. Real local dominance is a weeks-long process, not overnight, and we stay on it until you're where you need to be and we keep you there.",
  },
  {
    q: 'Do you require long contracts?',
    a: "No. Month to month, always. If it's not working, you're not locked in.",
  },
  {
    q: 'What if I already have a website?',
    a: "We review what you have first. If it's solid, we improve what's not working. If it needs a rebuild, we tell you why and what that would look like. Either way, no guessing.",
  },
  {
    q: 'Who actually does the work?',
    a: 'You talk directly to the person building your site or running your campaigns. No account managers, no middlemen.',
  },
  {
    q: "What's included in the SEO work?",
    a: 'Google Business Profile optimization, local search ranking work, review management guidance, and ongoing backend optimization.',
  },
  {
    q: 'How fast can you launch a new website?',
    a: 'Most sites launch in 1 to 4 weeks depending on scope.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('[data-reveal]') ?? [],
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="mb-16" data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-citadl-accent mb-6">
            FAQ
          </p>
          <h2 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-citadl-text-primary">
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
