export default function Ticker() {
  const text = "WEB DESIGN · LOCAL SEO · GOOGLE ADS · CONVERSION FOCUSED · NO LONG CONTRACTS · LOCAL BUSINESSES · ";
  return (
    <div className="w-full bg-citadl-dark h-[48px] shrink-0 flex items-center overflow-hidden whitespace-nowrap border-t border-citadl-border/20 absolute bottom-0 left-0">
      <div className="animate-marquee flex text-citadl-lime font-mono text-[13px] tracking-[0.1em] uppercase">
        <div className="flex shrink-0">
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
        </div>
        <div className="flex shrink-0">
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
        </div>
      </div>
    </div>
  );
}
