import { useEffect, useRef } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    });

    (async function () {
      const cal = await getCalApi({ "namespace": "discovery-call" });
      cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
    })();

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-[120px] lg:py-[200px] bg-citadl-bg flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2 className="font-display text-[64px] md:text-[96px] leading-[0.9] text-citadl-dark mb-8">
          Ready to get more customers?
        </h2>
        <p className="font-body text-[18px] md:text-[20px] text-citadl-muted leading-relaxed max-w-2xl mb-12">
          Book a free 15-minute call. We will look at your current online presence and tell you exactly what is holding you back. No pitch. Just straight talk.
        </p>

        <div className="w-full max-w-[1000px] h-[600px] bg-white rounded-lg shadow-xl overflow-hidden mb-8 border border-gray-100">
          <Cal
            namespace="discovery-call"
            calLink="the-citadl/discovery-call"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{ "layout": "month_view", "useSlotsViewOnSmallScreen": "true" }}
          />
        </div>

        <p className="font-mono text-[11px] text-citadl-muted uppercase tracking-wider">
          Shall we begin?
        </p>
      </div>
    </section>
  );
}
