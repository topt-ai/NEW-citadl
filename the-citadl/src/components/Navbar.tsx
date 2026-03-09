import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
            ? 'bg-citadl-bg/80 backdrop-blur-md border-b border-citadl-border'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className="font-mono text-[13px] tracking-[0.15em] uppercase text-citadl-dark font-medium"
            >
              The Citadl
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-[14px] text-citadl-dark hover:text-citadl-accent transition-colors">
              Services
            </a>
            <a href="#work" className="text-[14px] text-citadl-dark hover:text-citadl-accent transition-colors">
              Work
            </a>
            <a href="#process" className="text-[14px] text-citadl-dark hover:text-citadl-accent transition-colors">
              Process
            </a>
            <a
              href="https://cal.com/the-citadl/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-citadl-accent text-white text-[14px] px-5 py-2.5 rounded-[2px] hover:bg-citadl-dark transition-colors"
            >
              Book a Call
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-citadl-dark"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-citadl-dark text-white transition-transform duration-500 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center h-14">
            <span className="font-mono text-[13px] tracking-[0.15em] uppercase">The Citadl</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-8 mt-24 text-center">
            <a
              href="#services"
              className="font-display text-4xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#work"
              className="font-display text-4xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#process"
              className="font-display text-4xl"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="https://cal.com/the-citadl/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-citadl-lime text-citadl-dark font-medium text-lg px-6 py-4 rounded-[2px] mt-8 inline-block mx-auto"
              onClick={() => setMobileMenuOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
