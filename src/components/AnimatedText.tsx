import { createElement } from 'react'
import { motion, type Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
  className?: string
  /** atraso inicial em segundos */
  delay?: number
  by?: 'word' | 'char'
}

const container = (delay: number, stagger: number): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: delay } },
})

const piece: Variants = {
  hidden: { y: '110%' },
  show: { y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

/** Revela texto com máscara e stagger. Use "\n" para quebrar linhas. */
export function AnimatedText({ text, as = 'span', className = '', delay = 0, by = 'word' }: AnimatedTextProps) {
  const lines = text.split('\n')
  const stagger = by === 'char' ? 0.025 : 0.07

  return createElement(
    as,
    { className, 'aria-label': text.replace(/\n/g, ' ') },
    <motion.span
      aria-hidden
      className="block"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      variants={container(delay, stagger)}
    >
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(' ').map((word, wi) => (
            <span key={wi} className="inline-block overflow-hidden pt-[0.14em] pb-[0.1em] -mt-[0.14em] -mb-[0.1em] align-bottom">
              <motion.span className="inline-block" variants={piece}>
                {by === 'char'
                  ? word.split('').map((c, ci) => (
                      <motion.span key={ci} className="inline-block" variants={piece}>{c}</motion.span>
                    ))
                  : word}
                {wi < line.split(' ').length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
        </span>
      ))}
    </motion.span>,
  )
}
