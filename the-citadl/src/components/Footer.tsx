export default function Footer() {
  return (
    <footer className="bg-citadl-dark text-white pt-[120px] pb-8 border-t border-citadl-border/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Left */}
          <div className="flex flex-col">
            <span className="font-mono text-[16px] tracking-[0.15em] uppercase font-medium mb-6">
              The Citadl
            </span>
            <p className="font-body text-[16px] text-white/70 leading-relaxed max-w-xs">
              We build the online foundation your business actually needs.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="font-body text-[15px] text-white/70 hover:text-citadl-lime transition-colors">
                Services
              </a>
              <a href="#work" className="font-body text-[15px] text-white/70 hover:text-citadl-lime transition-colors">
                Work
              </a>
              <a href="#process" className="font-body text-[15px] text-white/70 hover:text-citadl-lime transition-colors">
                Process
              </a>
              <a href="#contact" className="font-body text-[15px] text-white/70 hover:text-citadl-lime transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end">
            <p className="font-mono text-[13px] uppercase tracking-wider text-white/50 mb-2">
              Locations
            </p>
            <p className="font-body text-[15px] text-white/70 md:text-right space-y-1">
              <span className="block">We work with anyone, anywhere.</span>
              <span className="block">New York. London. North Macedonia. Not North Korea.</span>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[11px] uppercase tracking-wider text-white/50">
            &copy; {new Date().getFullYear()} The Citadl. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-white/50">
            Built by The Citadl. Obviously.
          </p>
        </div>
      </div>
    </footer>
  );
}
