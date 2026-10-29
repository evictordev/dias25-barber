import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { ImageReveal } from './ImageReveal'
import { gallery } from '../data/gallery'

export function GallerySection() {
  const [current, setCurrent] = useState<number | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setCurrent(null)
    lastFocus.current?.focus()
  }, [])
  const step = useCallback((d: number) => setCurrent((c) => (c === null ? c : (c + d + gallery.length) % gallery.length)), [])

  useEffect(() => {
    if (current === null) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, close, step])

  const item = current === null ? null : gallery[current]

  return (
    <section id="galeria" className="bg-ink py-20 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <SectionHeading index="04" kicker="Fresh cuts" title={'O CORTE FALA\nPOR SI.'} />
        <div className="mt-12 grid grid-flow-dense auto-rows-[44vw] grid-cols-2 gap-2 md:auto-rows-[17vw] md:grid-cols-4 md:gap-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { lastFocus.current = e.currentTarget; setCurrent(i) }}
              aria-label={`Ampliar foto: ${g.photo.alt}`}
              className={`group relative overflow-hidden text-left ${g.layout}`}
            >
              <ImageReveal photo={g.photo} bw={g.bw} delay={(i % 4) * 0.08} className="h-full w-full" imgClassName="group-hover:scale-110 group-hover:grayscale-0" sizes="(min-width: 768px) 25vw, 50vw" />
              <span className="absolute bottom-2 left-2 bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neon opacity-100 transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                {g.tag}
              </span>
            </button>
          ))}
        </div>
        <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-paper/50">Mais cortes no Instagram → @diasbarbershop_25</p>
      </div>

      <AnimatePresence>
        {item && (
          <motion.div role="dialog" aria-modal="true" aria-label="Visualização da foto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4" onClick={close}>
            <button ref={closeRef} type="button" onClick={close} aria-label="Fechar" className="absolute right-4 top-4 grid h-12 w-12 place-items-center bg-neon text-ink"><X /></button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(-1) }} aria-label="Foto anterior" className="absolute left-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-paper/50 bg-ink/60 md:left-6"><ChevronLeft /></button>
            <button type="button" onClick={(e) => { e.stopPropagation(); step(1) }} aria-label="Próxima foto" className="absolute right-2 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-paper/50 bg-ink/60 md:right-6"><ChevronRight /></button>
            <motion.figure key={current} initial={{ scale: 0.94, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="max-h-full" onClick={(e) => e.stopPropagation()}>
              <img src={item.photo.widths ? `${item.photo.src}&w=1600` : item.photo.src} alt={item.photo.alt} className={`max-h-[80svh] max-w-full object-contain ${item.bw ? 'grayscale' : ''}`} />
              <figcaption className="mt-3 flex justify-between font-mono text-xs uppercase tracking-[0.2em] text-paper/70">
                <span className="text-neon">{item.tag}</span>
                <span>{String((current ?? 0) + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
