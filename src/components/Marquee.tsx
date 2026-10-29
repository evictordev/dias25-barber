interface MarqueeProps {
  items: string[]
  className?: string
  reverse?: boolean
}

export function Marquee({ items, className = '', reverse = false }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center" aria-hidden>
      {items.map((item, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className="px-5">{item}</span>
          <span className="text-[0.6em]">●</span>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`flex overflow-hidden select-none ${className}`} role="presentation">
      <div className="flex w-max animate-marquee" style={reverse ? { animationDirection: 'reverse' } : undefined}>
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  )
}
