import { AnimatedText } from './AnimatedText'

interface SectionHeadingProps {
  title: string
  className?: string
  titleClassName?: string
}

export function SectionHeading({ title, className = '', titleClassName = '' }: SectionHeadingProps) {
  return (
    <div className={className}>
      <AnimatedText
        as="h2"
        text={title}
        className={`font-display uppercase leading-[0.92] text-[clamp(2.6rem,9vw,7.5rem)] ${titleClassName}`}
      />
    </div>
  )
}
