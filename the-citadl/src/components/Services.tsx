import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
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

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-alt border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-citadl-muted mb-6">
            // SERVICES
          </p>
          <h2 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-citadl-dark">
            Two things. Done right.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="group bg-citadl-dark text-white p-10 md:p-14 rounded-[2px] transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-mono text-[24px] text-citadl-muted opacity-50 block mb-12">
                01
              </span>
              <h3 className="font-display text-[40px] md:text-[48px] leading-[1.1] mb-6">
                Websites that <span className="italic">work.</span>
              </h3>
              <p className="font-body text-[16px] md:text-[18px] text-citadl-muted leading-relaxed mb-12">
                Most business sites look like they were built in an afternoon. Yours won't. We design and build fast, conversion-focused websites that make people stop and take you seriously.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'GSAP', 'Vercel'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/20 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card 2 */}
          <div className="group bg-citadl-bg text-citadl-dark p-10 md:p-14 rounded-[2px] border-l-4 border-citadl-accent transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-1 hover:shadow-xl flex flex-col justify-between min-h-[400px]">
            <div>
              <span className="font-mono text-[24px] text-citadl-muted opacity-50 block mb-12">
                02
              </span>
              <h3 className="font-display text-[40px] md:text-[48px] leading-[1.1] mb-6">
                Top 3 on Google Maps. <span className="italic">Guaranteed.</span>
              </h3>
              <p className="font-body text-[16px] md:text-[18px] text-citadl-muted leading-relaxed mb-12">
                Ranking on Google Maps is still the highest-ROI move for local businesses. We get you there in 90 days or we refund you. No asterisks.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Google Business Profile', 'Local Citations', '90-Day Guarantee'].map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] uppercase tracking-wider px-3 py-1.5 rounded-full border border-citadl-dark/20 text-citadl-dark/80"
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
