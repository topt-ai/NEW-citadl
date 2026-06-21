"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="services" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16" data-reveal>
          <p className="font-mono text-[11px] uppercase tracking-widest text-citadl-text-muted mb-6">
            SERVICES
          </p>
          <h2 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-citadl-text-primary">
            Three things. Done right.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group bg-citadl-alt text-citadl-text-primary p-10 md:p-14 rounded-[2px] border border-citadl-border transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[400px]" data-reveal>
            <div>
              <span className="font-mono text-[24px] text-citadl-text-muted opacity-50 block mb-12">
                01
              </span>
              <h3 className="font-display text-[40px] md:text-[48px] leading-[1.1] mb-6">
                Websites.
              </h3>
              <p className="font-body text-[16px] md:text-[18px] text-citadl-text-muted leading-relaxed mb-12">
                Not just design. Copy that does the work too. From landing pages to multi-page sites to full applications with logins and databases. Whatever your business actually needs.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['FAST LOAD TIMES', 'MOBILE FIRST', 'BUILT TO CONVERT'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-citadl-border text-citadl-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-citadl-alt text-citadl-text-primary p-10 md:p-14 rounded-[2px] border-l-4 border-citadl-accent border-y border-r border-citadl-border transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[400px]" data-reveal>
            <div>
              <span className="font-mono text-[24px] text-citadl-text-muted opacity-50 block mb-12">
                02
              </span>
              <h3 className="font-display text-[40px] md:text-[48px] leading-[1.1] mb-6">
                Top of Google Maps. Guaranteed.
              </h3>
              <p className="font-body text-[16px] md:text-[18px] text-citadl-text-muted leading-relaxed mb-12">
                Ranking on Google Maps is still the highest-ROI move for local businesses. We get you ranking and keep you there. No fixed deadline promises, just real work until you're at the top.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['GOOGLE BUSINESS PROFILE', 'LOCAL AUTHORITY', 'BACKEND OPTIMIZATION'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-citadl-border text-citadl-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 3 */}
          <div className="group bg-citadl-alt text-citadl-text-primary p-10 md:p-14 rounded-[2px] border border-citadl-border transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[400px]" data-reveal>
            <div>
              <span className="font-mono text-[24px] text-citadl-text-muted opacity-50 block mb-12">
                03
              </span>
              <h3 className="font-display text-[40px] md:text-[48px] leading-[1.1] mb-6">
                Google &amp; Meta Ads
              </h3>
              <p className="font-body text-[16px] md:text-[18px] text-citadl-text-muted leading-relaxed mb-12">
                Campaigns on Google, Facebook, and Instagram. Built to spend efficiently and bring in leads, not just clicks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['GOOGLE ADS', 'META ADS', 'CONVERSION TRACKING'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-citadl-border text-citadl-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
