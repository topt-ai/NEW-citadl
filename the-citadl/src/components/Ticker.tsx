const ITEMS = [
  'WEB DESIGN',
  'LOCAL SEO',
  'GOOGLE & META ADS',
  'CONVERSION FOCUSED',
  'NO LONG CONTRACTS',
  'LOCAL BUSINESSES',
];

function Sequence() {
  // One copy of the marquee content. The track renders two of these
  // back to back, so a -50% translate produces a seamless loop.
  return (
    <ul className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
      {ITEMS.map((item) => (
        <li key={item} className="flex items-center gap-8">
          <span>{item}</span>
          <span className="text-citadl-lime/50">·</span>
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="w-full bg-citadl-dark h-[48px] shrink-0 flex items-center overflow-hidden whitespace-nowrap border-t border-citadl-border absolute bottom-0 left-0">
      <div className="animate-marquee flex text-citadl-lime font-mono text-[13px] tracking-[0.1em] uppercase">
        <Sequence />
        <Sequence />
      </div>
    </div>
  );
}
