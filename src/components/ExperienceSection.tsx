import { SectionHeading } from './SectionHeading'
import { ImageReveal } from './ImageReveal'
import { VideoPlayer } from './VideoPlayer'
import { photos } from '../data/photos'
import { videos } from '../data/gallery'

const traits = ['Personalidade', 'Criatividade', 'Cultura urbana', 'Ambiente descontraído', 'Profissionalismo', 'Estilo próprio']

export function ExperienceSection() {
  return (
    <section id="ambiente" className="relative overflow-hidden bg-coal py-20 md:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet/25 blur-[130px]" aria-hidden />
      <div className="relative mx-auto grid max-w-[1600px] gap-12 px-5 md:grid-cols-12 md:px-10">
        <div className="relative md:col-span-7 md:order-2">
          <ImageReveal photo={photos.shop} parallax={6} className="aspect-[4/3] w-full" sizes="(min-width: 768px) 58vw, 100vw" />
          <ImageReveal photo={photos.mask} bw parallax={4} delay={0.2} className="absolute -bottom-8 -left-2 aspect-[3/4] w-[38%] border-4 border-coal md:-left-14" sizes="(min-width: 768px) 22vw, 40vw" />
          <span className="absolute -top-3 right-3 rotate-3 bg-neon px-3 py-1 font-marker text-xl text-ink">the vibe</span>
        </div>
        <div className="md:col-span-5 md:order-1 md:self-center">
          <SectionHeading index="06" kicker="The vibe" title={'O AMBIENTE\nFAZ PARTE\nDO ESTILO.'} titleClassName="text-[clamp(2.4rem,7vw,6rem)]" />
          <ul className="mt-10 grid grid-cols-2 gap-x-4 border-t border-paper/20">
            {traits.map((t, i) => (
              <li key={t} className="flex items-baseline gap-2 border-b border-paper/20 py-3 font-mono text-xs uppercase tracking-[0.15em]">
                <span className="text-neon">0{i + 1}</span>{t}
              </li>
            ))}
          </ul>
        </div>
        {videos.length > 0 && (
          <div className="grid gap-4 md:order-3 md:col-span-12 md:grid-cols-3">
            {videos.map((v) => <VideoPlayer key={v.src} video={v} className="aspect-[9/16]" />)}
          </div>
        )}
      </div>
    </section>
  )
}
