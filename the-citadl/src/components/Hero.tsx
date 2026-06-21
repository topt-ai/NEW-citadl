"use client";

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import Ticker from './Ticker';
import dynamic from 'next/dynamic';

// Lazy load the Three.js Globe component to avoid blocking initial paint / LCP
const Globe = dynamic(() => import('./Globe'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center font-mono text-[11px] text-citadl-text-muted">Loading...</div>
});

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const sublineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = headlineRef.current?.querySelectorAll('.word');
      if (words) {
        gsap.fromTo(
          words,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.06, duration: 0.8, ease: 'power3.out', delay: 0.2 }
        );
      }

      gsap.fromTo(
        sublineRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 0.8 }
      );

      gsap.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: 1 }
      );
    });

    return () => ctx.revert();
  }, []);

  const wrapWords = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="word inline-block mr-[0.25em]">
        {word}
      </span>
    ));
  };

  return (
    <section className="relative min-h-[100dvh] bg-citadl-bg flex flex-col justify-between overflow-hidden pt-[120px] pb-[48px]">
      {/* Abstract Decorative Grid (Top Right) */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 md:w-1/3 md:h-2/3 pointer-events-none opacity-20 z-0">
        <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50H400M0 100H400M0 150H400M0 200H400M0 250H400M0 300H400M0 350H400" stroke="#1F2520" strokeWidth="0.5" />
          <path d="M50 0V400M100 0V400M150 0V400M200 0V400M250 0V400M300 0V400M350 0V400" stroke="#1F2520" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="150" stroke="#1F2520" strokeWidth="0.5" strokeDasharray="4 4" />
          <path d="M50 50L350 350M350 50L50 350" stroke="#1F2520" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Signature Element: Rotating 3D wireframe globe */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center min-[1100px]:justify-end xl:pr-24 overflow-hidden">
        <div className="w-full h-full max-w-[650px] aspect-square flex items-center justify-center opacity-[0.12] min-[1100px]:opacity-100 min-[1100px]:w-[45%] min-[1100px]:h-[75%] transition-all duration-700">
          <Globe />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="flex-1 flex items-center pb-24 md:pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <h1
              ref={headlineRef}
              className="font-display text-[52px] md:text-[80px] lg:text-[105px] leading-[0.95] tracking-tight text-citadl-text-primary mb-8"
            >
              <div className="overflow-hidden pt-6 pb-6 -mt-6 -mb-6">
                {wrapWords('Your next customer is searching.')}
              </div>
              <div className="overflow-hidden pt-6 pb-6 -mt-4 -mb-6">
                {wrapWords('We make sure they ')}
                <span className="word inline-block text-citadl-accent mr-[0.25em] font-bold">choose</span>
                <span className="word inline-block text-citadl-accent font-bold">you.</span>
              </div>
            </h1>

            <p
              ref={sublineRef}
              className="text-[18px] md:text-[20px] text-citadl-text-muted max-w-2xl mb-10 leading-relaxed font-body"
            >
              Local SEO and premium web design for service businesses that are serious about growing.
            </p>

            <div ref={ctaRef} className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href="#work"
                className="bg-citadl-accent text-citadl-dark px-8 py-4 rounded-[2px] font-semibold hover:bg-citadl-accent-hover transition-colors inline-flex items-center justify-center"
              >
                See Our Work
              </a>
              <a
                href="https://cal.com/the-citadl/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-citadl-text-primary font-semibold hover:text-citadl-accent transition-colors inline-flex items-center group"
              >
                Book a Call
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
