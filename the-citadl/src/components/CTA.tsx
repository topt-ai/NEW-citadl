"use client";

import { useEffect, useRef } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { useReveal } from './useReveal';

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  useReveal(sectionRef);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "discovery-call" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-[120px] lg:py-[200px] bg-citadl-dark flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <p data-reveal className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-light/60 mb-8">
          Request a Consultation
        </p>
        <h2 data-reveal className="font-display font-light text-[52px] md:text-[88px] leading-[0.98] text-citadl-light mb-8">
          Let's build something <span className="italic font-normal">unforgettable.</span>
        </h2>
        <p data-reveal className="font-body font-light text-[18px] md:text-[20px] text-citadl-light/70 leading-relaxed max-w-2xl mb-12">
          Book a free 15-minute call. We will look at your current online presence and tell you exactly what is holding you back. No pitch. Just straight talk.
        </p>

        <div data-reveal className="w-full max-w-[1000px] h-[600px] bg-white rounded-[2px] shadow-2xl overflow-hidden mb-8">
          <Cal
            namespace="discovery-call"
            calLink="the-citadl/discovery-call"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
          />
        </div>

        <p className="font-body text-[11px] text-citadl-light/50 uppercase tracking-[0.2em]">
          Shall we begin?
        </p>
      </div>
    </section>
  );
}
