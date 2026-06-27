"use client";

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

  // Light text over the photographic hero; ink text once scrolled onto bone.
  const linkColor = scrolled ? 'text-citadl-text-primary' : 'text-citadl-light';

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled
            ? 'bg-citadl-bg/90 backdrop-blur-md border-b border-citadl-border'
            : 'bg-transparent border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="#"
              className={`font-body text-[13px] tracking-[0.22em] uppercase font-medium transition-colors ${linkColor}`}
            >
              The Citadl
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className={`text-[14px] hover:opacity-70 transition-opacity ${linkColor}`}>
              Capabilities
            </a>
            <a href="#work" className={`text-[14px] hover:opacity-70 transition-opacity ${linkColor}`}>
              Work
            </a>
            <a href="#process" className={`text-[14px] hover:opacity-70 transition-opacity ${linkColor}`}>
              Process
            </a>
            <a
              href="https://cal.com/the-citadl/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-[14px] font-medium px-5 py-2.5 rounded-[2px] transition-colors ${scrolled
                  ? 'bg-citadl-accent text-citadl-light hover:bg-citadl-accent-hover'
                  : 'bg-citadl-light text-citadl-text-primary hover:bg-white'
                }`}
            >
              Request a Consultation
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`md:hidden transition-colors ${linkColor}`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        aria-hidden={!mobileMenuOpen}
        className={`fixed inset-0 z-50 bg-citadl-dark text-citadl-light transition-opacity duration-300 ease-in-out ${mobileMenuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center h-14">
            <span className="font-body text-[13px] tracking-[0.22em] uppercase">The Citadl</span>
            <button onClick={() => setMobileMenuOpen(false)} className="text-citadl-light" aria-label="Close menu">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col space-y-8 mt-24 text-center">
            <a
              href="#services"
              className="font-display text-4xl text-citadl-light hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Capabilities
            </a>
            <a
              href="#work"
              className="font-display text-4xl text-citadl-light hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Work
            </a>
            <a
              href="#process"
              className="font-display text-4xl text-citadl-light hover:opacity-70 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="https://cal.com/the-citadl/discovery-call"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-citadl-light text-citadl-text-primary font-medium text-lg px-6 py-4 rounded-[2px] mt-8 inline-block mx-auto hover:bg-white transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request a Consultation
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
