import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    title: '90 Days.',
    description: 'Top 3 on Google Maps ranking or we work with no cost until we get you there.',
  },
  {
    title: 'Month to Month.',
    description: 'No lock-in contracts, ever.',
  },
  {
    title: 'Direct Access.',
    description: 'You talk to the builder, not an account manager.',
  },
  {
    title: 'Real Metrics.',
    description: 'Leads, calls, revenue. Not likes.',
  },
];

export default function WhyUs() {
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
    <section id="why-us" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-dark text-white border-b border-citadl-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-white/50 mb-6">
            // WHY US
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side */}
          <div className="flex flex-col justify-between">
            <h2 className="font-display italic text-[56px] md:text-[72px] leading-[1.1] mb-8">
              "We win only<br />if you win."
            </h2>
            <p className="font-body text-[18px] text-white/70 leading-relaxed max-w-md">
              That means no long contracts, no runaround, and no vanity reports full of numbers that don't pay your bills.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`py-8 ${index !== 0 ? 'border-t border-white/10' : 'pt-0 lg:pt-8'
                  } ${index === benefits.length - 1 ? 'border-b border-white/10 pb-8' : ''}`}
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4">
                  <h3 className="font-display text-[32px] md:text-[40px] leading-tight w-full md:w-1/2">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-[16px] md:text-[18px] text-white/70 leading-relaxed w-full md:w-1/2">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
