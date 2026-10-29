import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from './SectionHeading'
import { ImageReveal } from './ImageReveal'
import { Marquee } from './Marquee'
import { Doodle } from './Doodles'
import { photos } from '../data/photos'

const pillars = ['Corte', 'Atitude', 'Cultura']

export function AboutSection() {
  const ref = useRef<HTMLElement>(null)
  return (
    <section id="sobre" ref={ref} className="relative bg-paper text-ink">
      <Marquee items={['FRESH CUTS', 'STREET CULTURE', 'DIAS 25']} className="border-y-2 border-ink bg-neon py-3 font-display text-2xl uppercase md:text-3xl" />

      <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-20 md:grid-cols-12 md:gap-8 md:px-10 md:py-32">
        <div className="md:col-span-7 md:pt-10">
          <SectionHeading index="02" kicker="Manifesto" title={'MAIS QUE UMA\nBARBEARIA.\nUMA CULTURA.'} dark titleClassName="text-[clamp(2.6rem,8.2vw,7rem)]" />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-10 max-w-xl border-l-4 border-ink pl-5 text-lg md:text-xl">
            A Dias 25 nasceu para quem enxerga o corte como uma extensão da própria personalidade. Aqui, estilo, criatividade e atitude fazem parte de cada detalhe.
          </motion.p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {pillars.map((p, i) => (
              <li key={p} className="border-2 border-ink px-4 py-2 font-mono text-xs uppercase tracking-[0.2em]">
                <span className="mr-2 text-violet">0{i + 1}</span>{p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative md:col-span-5">
          <ImageReveal photo={photos.streetStyle} bw parallax={5} className="aspect-[4/5] w-[78%] md:w-[82%]" sizes="(min-width: 768px) 35vw, 80vw" />
          <ImageReveal photo={photos.tools} parallax={4} delay={0.2} className="absolute -bottom-10 right-0 aspect-square w-[52%] border-4 border-paper md:-bottom-16" sizes="(min-width: 768px) 20vw, 50vw" />
          <Doodle name="eyes" className="absolute -left-3 -top-6 h-16 w-16 -rotate-12 text-ink md:-left-8" />
          <span className="absolute right-2 top-2 rotate-6 bg-ink px-3 py-1 font-marker text-lg text-neon md:right-6">no bad cuts</span>
        </div>
      </div>
    </section>
  )
}
