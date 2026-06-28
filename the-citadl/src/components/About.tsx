export default function About() {
  return (
    <section id="about" className="relative h-[200vh]">
      {/* The sticky container is the "window": image + text are pinned together
          in the viewport while the parent section's extra height scrolls past,
          so the white background appears to open into a fixed image, then closes
          again as the next section arrives. Pure CSS sticky, no JS/rAF. */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <img
          src="/tommy-about.webp"
          alt="Tommy, builder at The Citadl, at dusk"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/50" />

        <div className="relative z-10 text-center text-citadl-light px-6 max-w-3xl">
          <p className="font-body text-[11px] uppercase tracking-[0.28em] text-citadl-light/70 mb-5">
            Who You&apos;re Working With
          </p>
          <h2 className="font-display font-light text-[40px] md:text-[60px] leading-[1.05] mb-6">
            No account managers. No middlemen.
          </h2>
          <p className="font-body font-light text-citadl-light/85 text-[17px] md:text-[19px] leading-relaxed max-w-xl mx-auto mb-6">
            Every site we build, every line of code, every conversation, goes through one person. When you call, you talk to the person who actually built your site. Not a sales rep, not a project coordinator.
          </p>
          <p className="font-body text-[12px] uppercase tracking-[0.22em] text-citadl-light/60">
            Tommy, Builder at The Citadl
          </p>
        </div>
      </div>
    </section>
  );
}
