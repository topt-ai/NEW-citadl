"use client";

import { useEffect, RefObject } from 'react';

/**
 * Reveals elements marked with [data-reveal] inside the given container as they
 * scroll into view. Uses IntersectionObserver (not rAF), so the visible end
 * state is applied reliably. The actual fade/rise is a CSS transition defined
 * in globals.css, kept slow and gentle for an editorial feel.
 */
export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const els = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!els.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    els.forEach((el) => el.classList.add('reveal-init'));

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const idx = els.indexOf(el);
          el.style.transitionDelay = `${Math.max(0, idx) * 0.1}s`;
          el.classList.add('is-visible');
          obs.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ref]);
}
