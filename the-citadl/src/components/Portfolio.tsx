import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    name: 'Apex Roofing Co.',
    industry: 'Roofing Contractor',
    description: 'Premium dark minimal site with GSAP scroll animations.',
    image: 'https://picsum.photos/seed/roofing/800/600',
    link: '#',
  },
  {
    id: 2,
    name: 'Sentinel Pest Co.',
    industry: 'Pest Control',
    description: 'Trust-forward design with magnetic cursor and micro-interactions.',
    image: 'https://picsum.photos/seed/pest/800/600',
    link: '#',
  },
  {
    id: 3,
    name: 'Climate Pro HVAC',
    industry: 'HVAC Services',
    description: 'Clean service-focused layout optimized for local conversions.',
    image: 'https://picsum.photos/seed/hvac/800/600',
    link: '#',
  },
];

export default function Portfolio() {
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
    <section id="work" ref={sectionRef} className="py-[120px] lg:py-[160px] bg-citadl-bg border-b border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-citadl-muted mb-6">
            // SELECTED WORK
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-citadl-dark mb-6">
              Built for real businesses.
            </h2>
            <p className="font-body text-[18px] text-citadl-muted leading-relaxed">
              Every demo site below was built as a proof-of-concept. Each one is available as a starting point for clients in that industry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col border border-citadl-border rounded-[2px] overflow-hidden bg-citadl-alt transition-colors duration-300 hover:border-citadl-accent"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-citadl-border/50">
                <img
                  src={project.image}
                  alt={project.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-[28px] leading-tight text-citadl-dark">
                    {project.name}
                  </h3>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-wider text-citadl-muted mb-4">
                  {project.industry}
                </p>
                <p className="font-body text-[15px] text-citadl-muted leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[14px] font-medium text-citadl-dark hover:text-citadl-accent transition-colors group/link mt-auto"
                >
                  View Site
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
