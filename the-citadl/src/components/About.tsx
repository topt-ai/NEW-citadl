export default function About() {
  return (
    <section id="about" className="relative h-screen">
      {/*
        The image is position: fixed, so it stays locked to the viewport. Every
        other section carries the opaque bone background and covers it; this
        section has no background, so the fixed image shows through it like a
        rectangular window cut into the page. Scrolling slides that window
        across the still image, then the bone background returns. iOS-safe
        (real position: fixed, not background-attachment: fixed) and no JS/rAF.
      */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src="/tommy-about.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Darkening overlay scoped to the window, for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/55" />

      {/* Text scrolls with the window, over the fixed image */}
      <div className="relative z-10 h-full flex items-center justify-center text-center text-citadl-light px-6">
        <div className="max-w-3xl">
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
