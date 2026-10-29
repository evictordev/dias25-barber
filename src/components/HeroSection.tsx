import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { AnimatedText } from './AnimatedText'
import { Button } from './Button'
import { Doodle } from './Doodles'
import { ImageReveal } from './ImageReveal'
import { photos } from '../data/photos'
import { site, whatsappUrl } from '../config/site'

export function HeroSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const titleY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%'])
  const stickerY = useTransform(scrollYProgress, [0, 1], ['0%', '60%'])

  return (
    <section id="inicio" ref={ref} className="grain relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink">
      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[40rem] w-[40rem] rounded-full bg-violet/30 blur-[140px]" aria-hidden />

      <ImageReveal
        photo={photos.hero}
        eager
        parallax={6}
        sizes="(min-width: 768px) 46vw, 80vw"
        className="absolute bottom-0 right-0 top-20 -z-10 w-[80%] md:w-[46%]"
        imgClassName="brightness-90"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/60 to-transparent md:via-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-ink to-transparent" aria-hidden />

      <motion.div style={{ y: stickerY }} className="absolute right-4 top-28 z-10 md:right-[44%] md:top-32" aria-hidden>
        <div className="relative grid h-28 w-28 place-items-center md:h-36 md:w-36">
          <svg viewBox="0 0 120 120" className="absolute inset-0 animate-spin-slow">
            <defs><path id="circ" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" /></defs>
            <text className="fill-neon font-mono text-[10px] uppercase"><textPath href="#circ" textLength="283" lengthAdjust="spacing">fresh cuts • street culture • dias 25 •</textPath></text>
          </svg>
          <Doodle name="scissors" className="h-10 w-10 text-paper md:h-12 md:w-12" />
        </div>
      </motion.div>

      <div className="mx-auto flex w-full max-w-[1600px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mb-5 flex flex-wrap gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <span className="text-neon">(01/08)</span>
          <span>Barbearia / Cultura urbana</span>
          <span>@diasbarbershop_25</span>
        </motion.p>

        <motion.h1 style={{ y: titleY }} className="relative z-10 font-display uppercase leading-[0.86] text-[clamp(3rem,min(15vw,19svh),11.5rem)]">
          <AnimatedText text={'NÃO É SÓ\nCORTE.'} by="char" delay={0.15} className="block" />
          <AnimatedText text="É IDENTIDADE." by="char" delay={0.55} className="block text-neon" />
        </motion.h1>

        <div className="relative z-10 mt-8 grid items-end gap-8 md:grid-cols-[minmax(0,26rem)_1fr]">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="text-base text-paper/85 md:text-lg">
            Estilo, atitude e personalidade em cada detalhe. Conheça a experiência Dias 25.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }} className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl()} external>Marcar meu corte</Button>
            <Button href="#sobre" variant="ghost">Explorar a barbearia</Button>
          </motion.div>
        </div>

        <div className="relative z-10 mt-8 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-paper/70">
          <span>{site.hours[0].label} {site.hours[0].value}</span>
          <a href="#sobre" className="flex items-center gap-2 hover:text-neon" aria-label="Rolar para baixo">
            Scroll <ChevronDown size={16} className="animate-bob text-neon" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  )
}
