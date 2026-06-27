"use client";

export default function Footer() {
  return (
    <footer className="bg-citadl-alt text-citadl-text-primary pt-[120px] pb-8 border-t border-citadl-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {/* Left */}
          <div className="flex flex-col">
            <span className="font-body text-[15px] tracking-[0.22em] uppercase font-medium mb-6">
              The Citadl
            </span>
            <p className="font-body text-[16px] text-citadl-text-muted leading-relaxed max-w-xs mb-6">
              Bespoke websites for real estate. One of one, never a template.
            </p>
            <a href="mailto:hello@thecitadl.com" className="font-body text-[15px] text-citadl-text-muted hover:text-citadl-accent transition-colors">
              hello@thecitadl.com
            </a>
          </div>

          {/* Center */}
          <div className="flex flex-col md:items-center">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="font-body text-[15px] text-citadl-text-muted hover:text-citadl-accent transition-colors">
                Capabilities
              </a>
              <a href="#work" className="font-body text-[15px] text-citadl-text-muted hover:text-citadl-accent transition-colors">
                Work
              </a>
              <a href="#process" className="font-body text-[15px] text-citadl-text-muted hover:text-citadl-accent transition-colors">
                Process
              </a>
              <a href="#contact" className="font-body text-[15px] text-citadl-text-muted hover:text-citadl-accent transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col md:items-end">
            <p className="font-body text-[12px] uppercase tracking-[0.22em] text-citadl-text-muted mb-2">
              Locations
            </p>
            <div className="font-body text-[15px] text-citadl-text-muted md:text-right space-y-1">
              <span className="block">Wherever your business is.</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-citadl-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[11px] uppercase tracking-[0.18em] text-citadl-text-muted">
            &copy; {new Date().getFullYear()} The Citadl. All rights reserved.
          </p>
          <p className="font-body text-[11px] uppercase tracking-[0.18em] text-citadl-text-muted">
            Built by The Citadl. Obviously.
          </p>
        </div>
      </div>
    </footer>
  );
}
