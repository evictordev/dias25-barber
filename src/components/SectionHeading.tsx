import { AnimatedText } from './AnimatedText'

interface SectionHeadingProps {
  index: string
  kicker: string
  title: string
  className?: string
  titleClassName?: string
  dark?: boolean
}

export function SectionHeading({ index, kicker, title, className = '', titleClassName = '', dark = false }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className={`mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] ${dark ? 'text-ink' : 'text-neon'}`}>
        <span className={`inline-block h-px w-10 ${dark ? 'bg-ink' : 'bg-neon'}`} />
        {index} / {kicker}
      </p>
      <AnimatedText
        as="h2"
        text={title}
        className={`font-display uppercase leading-[0.92] text-[clamp(2.6rem,9vw,7.5rem)] ${titleClassName}`}
      />
    </div>
  )
}
