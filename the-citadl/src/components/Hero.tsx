"use client";

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden">
      {/* Full-bleed cinematic photography */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-estate.webp"
          alt="Modern luxury home at sunset with an infinity pool"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay: stronger at top where the text sits */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-[140px] pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-4xl">
            <p
              className="hero-rise font-body text-[11px] uppercase tracking-[0.28em] text-citadl-light/80 mb-8"
              style={{ animationDelay: '0.1s' }}
            >
              Bespoke Real Estate Websites
            </p>
            <h1 className="font-display font-light text-[64px] md:text-[100px] lg:text-[124px] leading-[0.98] tracking-[-0.01em] text-citadl-light mb-8">
              <span
                className="hero-rise inline-block"
                style={{ animationDelay: '0.25s' }}
              >
                Found. Or <span className="italic font-normal">forgotten.</span>
              </span>
            </h1>

            <p
              className="hero-rise text-[17px] md:text-[20px] text-citadl-light/85 max-w-2xl mb-10 leading-relaxed font-body font-light"
              style={{ animationDelay: '0.5s' }}
            >
              We build real estate websites with your MLS synced in, and get you ranking on Google. Already have a site? We can still get you found.
            </p>

            <div
              className="hero-rise flex flex-col sm:flex-row items-start sm:items-center gap-6"
              style={{ animationDelay: '0.7s' }}
            >
              <a
                href="#work"
                className="bg-citadl-light text-citadl-text-primary px-8 py-4 rounded-[2px] font-medium hover:bg-white transition-colors inline-flex items-center justify-center"
              >
                See Our Work
              </a>
              <a
                href="https://cal.com/the-citadl/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="text-citadl-light font-medium hover:text-white transition-colors inline-flex items-center group"
              >
                Request a Consultation
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
