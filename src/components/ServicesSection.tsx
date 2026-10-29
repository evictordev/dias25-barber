import { useRef } from 'react'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { ImageReveal } from './ImageReveal'
import { services } from '../data/services'
import { whatsappUrl } from '../config/site'

export function ServicesSection() {
  const rail = useRef<HTMLUListElement>(null)
  const scrollBy = (dir: 1 | -1) => rail.current?.scrollBy({ left: dir * Math.min(440, window.innerWidth * 0.8), behavior: 'smooth' })

  return (
    <section id="cortes" className="relative bg-ink py-20 md:py-32">
      <div className="mx-auto flex max-w-[1600px] items-end justify-between gap-6 px-5 md:px-10">
        <SectionHeading index="03" kicker="The cuts" title={'ESCOLHA\nSEU ESTILO.'} />
        <div className="hidden gap-2 md:flex">
          <button type="button" onClick={() => scrollBy(-1)} aria-label="Serviços anteriores" className="grid h-14 w-14 rotate-180 place-items-center border-2 border-paper/50 transition hover:border-neon hover:bg-neon hover:text-ink"><ArrowRight /></button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="Próximos serviços" className="grid h-14 w-14 place-items-center border-2 border-paper/50 transition hover:border-neon hover:bg-neon hover:text-ink"><ArrowRight /></button>
        </div>
      </div>

      <ul ref={rail} className="scroll-rail mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:gap-6 md:px-10" aria-label="Serviços">
        {services.map((s, i) => {
          const light = i % 2 === 1
          return (
            <li key={s.id} className="w-[78vw] max-w-[26rem] shrink-0 snap-start md:w-[26rem]">
              <a
                href={whatsappUrl(`Quero: ${s.title}.`)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Agendar ${s.title} pelo WhatsApp`}
                className={`group flex h-full flex-col border-2 transition duration-300 hover:-translate-y-2 ${light ? 'border-paper bg-paper text-ink' : 'border-paper/25 bg-coal text-paper hover:border-neon'}`}
              >
                <div className="relative">
                  <ImageReveal photo={s.photo} bw={!light} className="aspect-[4/5]" imgClassName="group-hover:scale-105 group-hover:grayscale-0 group-focus-visible:grayscale-0" sizes="(min-width: 768px) 26rem, 78vw" />
                  <span className="pointer-events-none absolute left-3 top-1 font-display text-8xl leading-none text-neon mix-blend-normal drop-shadow-[0_2px_0_#0A0A0A]">0{i + 1}</span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="font-display text-4xl uppercase leading-none">{s.title}</h3>
                  <p className={`text-sm ${light ? 'text-ink/75' : 'text-paper/70'}`}>{s.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-3">
                    <span className="font-mono text-xs uppercase tracking-[0.2em]">{s.price ?? 'Valor sob consulta'}</span>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-neon text-ink transition duration-300 group-hover:rotate-45"><ArrowUpRight size={20} /></span>
                  </div>
                </div>
              </a>
            </li>
          )
        })}
        <li className="w-4 shrink-0 md:w-10" aria-hidden />
      </ul>
    </section>
  )
}
