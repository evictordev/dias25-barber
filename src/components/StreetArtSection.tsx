import { useRef, type ReactNode } from 'react'
import { SectionHeading } from './SectionHeading'
import { Doodle, type DoodleName } from './Doodles'
import { useParallax } from '../hooks/useParallax'

interface StickerProps {
  speed: number
  rot: number
  className: string
  children: ReactNode
}

/** Camada externa move no scroll (GSAP); interna guarda a rotação estática. */
function Sticker({ speed, rot, className, children }: StickerProps) {
  return (
    <div data-speed={speed} data-rot={rot} className={`absolute will-change-transform ${className}`} aria-hidden>
      {children}
    </div>
  )
}

function DoodleSticker({ name, className = '', bg = 'bg-paper', fillColor }: { name: DoodleName; className?: string; bg?: string; fillColor?: string }) {
  return (
    <div className={`grid place-items-center rounded-sm border-[3px] border-ink p-2 shadow-[5px_5px_0_#0A0A0A] ${bg} ${className}`}>
      <Doodle name={name} fillColor={fillColor} className="h-full w-full text-ink" />
    </div>
  )
}

export function StreetArtSection() {
  const ref = useRef<HTMLElement>(null)
  useParallax(ref)

  return (
    <section id="identidade" ref={ref} className="grain relative isolate overflow-hidden bg-[#e9e9e2] py-44 text-ink md:py-40">
      <div className="absolute inset-0 -z-10 opacity-[0.07]" style={{ backgroundImage: 'radial-gradient(#0A0A0A 1.2px, transparent 1.2px)', backgroundSize: '18px 18px' }} aria-hidden />

      <Sticker speed={0.6} rot={8} className="left-[3%] top-[4%] hidden md:block"><DoodleSticker name="mask" className="h-40 w-40 -rotate-6" bg="bg-neon" fillColor="#F5F5F0" /></Sticker>
      <Sticker speed={0.8} rot={6} className="left-[5%] top-[3%] md:left-[2%] md:top-[48%]"><DoodleSticker name="spray" className="h-20 w-20 -rotate-12 md:h-36 md:w-36" bg="bg-paper" fillColor="#39FF14" /></Sticker>
      <Sticker speed={1.1} rot={-10} className="right-[5%] top-[4%] md:right-[4%] md:top-[6%]"><DoodleSticker name="scissors" className="h-20 w-20 rotate-12 md:h-36 md:w-36" /></Sticker>
      <Sticker speed={1.3} rot={-6} className="bottom-[3%] right-[6%] md:bottom-auto md:right-[5%] md:top-[56%]"><DoodleSticker name="crown" className="h-20 w-20 rotate-6 md:h-40 md:w-40" bg="bg-violet" fillColor="#F5F5F0" /></Sticker>
      <Sticker speed={0.5} rot={12} className="bottom-[3%] left-[8%] md:bottom-[5%] md:left-[10%]"><DoodleSticker name="clipper" className="h-20 w-20 rotate-[18deg] md:h-36 md:w-36" /></Sticker>
      <Sticker speed={1} rot={-8} className="bottom-[8%] right-[10%] hidden md:block"><DoodleSticker name="bolt" className="h-32 w-32 -rotate-12" bg="bg-neon" /></Sticker>
      <Sticker speed={0.7} rot={10} className="bottom-[10%] left-[26%] hidden md:block"><DoodleSticker name="eyes" className="h-24 w-24 rotate-3" /></Sticker>

      <Sticker speed={0.9} rot={-5} className="left-[3%] top-[30%] hidden md:block"><span className="block -rotate-6 border-[3px] border-ink bg-neon px-3 py-1 font-marker text-3xl shadow-[4px_4px_0_#0A0A0A]">fresh cuts only</span></Sticker>
      <Sticker speed={1.2} rot={5} className="right-[3%] top-[38%] hidden md:block"><span className="block rotate-3 border-[3px] border-ink bg-ink px-3 py-1 font-marker text-3xl text-neon shadow-[4px_4px_0_#39FF14]">dias 25 ✕ street</span></Sticker>

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center md:px-10">
        <SectionHeading index="05" kicker="Nossa identidade" title={'A ARTE ESTÁ\nEM TODO LUGAR.'} dark className="[&>p]:justify-center" titleClassName="text-[clamp(2.6rem,10vw,9rem)]" />
        <p className="mx-auto mt-8 max-w-lg bg-paper/80 p-4 text-base font-medium backdrop-blur-[2px] md:text-lg">
          Das paredes cobertas de desenhos aos traços que viram degradê. A Dias 25 é espaço de arte, música e atitude, e cada detalhe conta.
        </p>
      </div>
    </section>
  )
}
