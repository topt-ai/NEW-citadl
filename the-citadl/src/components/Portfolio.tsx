import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 4,
    name: 'VOID',
    industry: 'Performance Agency',
    description: 'Aesthetically clean performance agency',
    image: '/void2.png',
  },
  {
    id: 3,
    name: 'ArcticEdge HVAC',
    industry: 'HVAC Services',
    description: 'Clean service-focused layout optimized for local conversions.',
    image: '/arcticedge.png',
  },
  {
    id: 1,
    name: 'Apex Roofing Co.',
    industry: 'Roofing Contractor',
    description: 'Premium dark minimal site with GSAP scroll animations.',
    image: '/apex-roofing.png',
  },
  {
    id: 2,
    name: 'Sentinel Pest Co.',
    industry: 'Pest Control',
    description: 'Trust-forward design with magnetic cursor and micro-interactions.',
    image: '/sentinel.png',
  },
];

interface ProjectCardProps {
  project: any;
  key?: React.Key;
}

function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !innerRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(innerRef.current, {
      rotationY: (x / (rect.width / 2)) * 8,
      rotationX: -(y / (rect.height / 2)) * 8,
      ease: 'power2.out',
      duration: 0.4,
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!innerRef.current) return;
    gsap.to(innerRef.current, {
      rotationY: 0,
      rotationX: 0,
      ease: 'power2.out',
      duration: 0.6,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative aspect-video w-full"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={innerRef}
        className="w-full h-full relative overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.05]"
        />

        {/* Subtle overlay that darkens slightly on hover */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 ease-out group-hover:bg-black/40" />

        {/* Arrow top right */}
        <div className="absolute top-6 right-6 opacity-0 translate-y-2 -translate-x-2 transition-all duration-500 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 z-10">
          <ArrowRight className="text-white w-6 h-6" />
        </div>

        {/* Text container sliding up from bottom with backdrop blur */}
        <div className="absolute inset-x-0 bottom-0 p-8 translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-md">
          <p className="font-mono text-[11px] uppercase tracking-wider text-white/70 mb-2">
            {project.industry}
          </p>
          <h3 className="font-display text-[28px] leading-tight text-white mb-3">
            {project.name}
          </h3>
          <p className="font-body text-[15px] text-white/80 leading-relaxed max-w-sm">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

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
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-mono text-[11px] uppercase tracking-widest text-citadl-muted mb-6">
            // SELECTED WORK
          </p>
          <div className="max-w-3xl">
            <h2 className="font-display text-[48px] md:text-[64px] leading-[1.1] text-citadl-dark mb-6">
              The work.
            </h2>
            <p className="font-body text-[18px] text-citadl-muted leading-relaxed">
              A few sites we have built for service businesses.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
