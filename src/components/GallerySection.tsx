import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { ImageReveal } from './ImageReveal'
import { galleryCategories, type CategoryId } from '../data/gallery'

const AUTO_MS = 5000

/**
 * Layout adaptado à quantidade de itens da categoria.
 * Desktop: grade de 24 colunas (1 tile "normal" = 6 colunas), o que permite
 * dividir a largura em 1, 2, 3 ou 4 partes e centralizar a última linha.
 * Celular: 2 colunas.
 *   1 item   -> um quadro centralizado, de tamanho médio
 *   2 itens  -> no celular, empilhados em largura total; no desktop, lado a lado
 *   3 itens  -> três quadros iguais (no celular, o 1º vira destaque)
 *   4 itens  -> quatro quadros iguais
 *   5, 9...  -> 1º em destaque 2x2 e o resto preenchendo (fecha sem buraco)
 *   demais   -> quadros iguais, com a última linha incompleta centralizada
 */
const slotLayout = (i: number, n: number) => {
  if (n === 1) return 'col-span-2 row-span-2 w-[68%] justify-self-center md:col-span-8 md:col-start-9 md:row-span-2 md:w-auto'
  if (n === 2) return 'col-span-2 row-span-2 md:col-span-12 md:row-span-2'
  if (n === 3) return `${i === 0 ? 'col-span-2 row-span-2 ' : ''}md:col-span-8 md:row-span-2`
  if (n === 4) return 'md:col-span-6 md:row-span-2'
  if ((n + 3) % 4 === 0) return i === 0 ? 'col-span-2 row-span-2 md:col-span-12 md:row-span-2' : 'md:col-span-6'
  // quadros iguais; sobras da última linha ficam centralizadas
  const orphans = n % 4
  // coluna inicial de cada item da última linha (explícita, senão o grid "dense" joga para a esquerda)
  const ORPHAN_START = [[], ['md:col-start-10'], ['md:col-start-7', 'md:col-start-13'], ['md:col-start-4', 'md:col-start-10', 'md:col-start-16']]
  const first = i >= n - orphans ? ORPHAN_START[orphans][i - (n - orphans)] : ''
  const lastOnMobile = n % 2 === 1 && i === n - 1 ? 'col-span-2' : ''
  return `${lastOnMobile} md:col-span-6 md:row-span-2 ${first}`.trim()
}

export function GallerySection() {
  const [category, setCategory] = useState<CategoryId>(galleryCategories[0].id)
  const [current, setCurrent] = useState<number | null>(null)
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const gallery = (galleryCategories.find((c) => c.id === category) ?? galleryCategories[0]).items

  const reduced = useReducedMotion()
  const [auto, setAuto] = useState(true) // para de vez quando a pessoa escolhe uma aba
  const [hover, setHover] = useState(false)
  const running = auto && !reduced && !hover && current === null

  useEffect(() => {
    if (!running) return
    const t = window.setTimeout(() => {
      const i = galleryCategories.findIndex((c) => c.id === category)
      setCategory(galleryCategories[(i + 1) % galleryCategories.length].id)
    }, AUTO_MS)
    return () => window.clearTimeout(t)
  }, [running, category])

  const selectCategory = (id: CategoryId, focus = false) => {
    setAuto(false)
    setCategory(id)
    setCurrent(null)
    if (focus) tabRefs.current[id]?.focus()
  }
  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const n = galleryCategories.length
    const next = e.key === 'ArrowRight' ? (i + 1) % n : e.key === 'ArrowLeft' ? (i - 1 + n) % n : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1
    if (next < 0) return
    e.preventDefault()
    selectCategory(galleryCategories[next].id, true)
  }
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<HTMLElement | null>(null)

  const close = useCallback(() => {
    setCurrent(null)
    lastFocus.current?.focus()
  }, [])
  const step = useCallback((d: number) => setCurrent((c) => (c === null ? c : (c + d + gallery.length) % gallery.length)), [gallery.length])

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
        <SectionHeading title={'O CORTE FALA\nPOR SI.'} />
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocus={() => setHover(true)} onBlur={() => setHover(false)}>
        <div role="tablist" aria-label="Categorias de corte" className="mt-10 flex gap-x-8 gap-y-2 overflow-x-auto overflow-y-hidden pb-1 md:mt-14 md:gap-x-12">
          {galleryCategories.map((c, i) => {
            const active = c.id === category
            return (
              <button
                key={c.id}
                ref={(el) => { tabRefs.current[c.id] = el }}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={active}
                aria-controls="galeria-painel"
                tabIndex={active ? 0 : -1}
                type="button"
                onClick={() => selectCategory(c.id)}
                onKeyDown={(e) => onTabKey(e, i)}
                className={`group relative shrink-0 py-2 font-display text-3xl uppercase leading-none transition-colors md:text-5xl ${active ? 'text-neon' : 'text-paper/40 hover:text-paper'}`}
              >
                {c.label}
                <sup className="ml-1.5 align-top font-mono text-[10px] tracking-normal md:text-xs">{c.items.length}</sup>
                {active && running ? (
                  <motion.span key={`${category}-bar`} aria-hidden className="absolute inset-x-0 -bottom-0.5 h-1 origin-left bg-neon" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: AUTO_MS / 1000, ease: 'linear' }} />
                ) : (
                  <span className={`absolute inset-x-0 -bottom-0.5 h-1 origin-left bg-neon transition-transform duration-300 ${active ? 'scale-x-100' : 'scale-x-0'}`} />
                )}
              </button>
            )
          })}
        </div>
        <div key={category} role="tabpanel" id="galeria-painel" aria-labelledby={`tab-${category}`} className="mt-6 grid grid-flow-dense auto-rows-[44vw] grid-cols-2 gap-2 md:auto-rows-[17vw] md:grid-cols-[repeat(24,minmax(0,1fr))] md:gap-4">
          {gallery.map((g, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => { lastFocus.current = e.currentTarget; setCurrent(i) }}
              aria-label={g.video ? `Reproduzir vídeo: ${g.photo.alt}` : `Ampliar foto: ${g.photo.alt}`}
              className={`group relative overflow-hidden text-left ${slotLayout(i, gallery.length)}`}
            >
              <ImageReveal photo={g.photo} bw={g.bw} delay={(i % 4) * 0.08} className="h-full w-full" imgClassName="group-hover:scale-110 group-hover:grayscale-0" sizes="(min-width: 768px) 25vw, 50vw" />
              <span className="absolute bottom-2 left-2 bg-ink px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-neon opacity-100 transition md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
                {g.tag}
              </span>
              {g.video && (
                <span aria-hidden className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-neon text-ink md:h-11 md:w-11">
                  <Play className="ml-0.5 h-4 w-4 md:h-5 md:w-5" fill="currentColor" />
                </span>
              )}
            </button>
          ))}
        </div>
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
              {item.video ? (
                <video key={item.video} src={item.video} poster={item.photo.src} controls autoPlay playsInline className="max-h-[80svh] max-w-full" />
              ) : (
              <img src={item.photo.widths ? `${item.photo.src}&w=1600` : item.photo.src} alt={item.photo.alt} className={`max-h-[80svh] max-w-full object-contain ${item.bw ? 'grayscale' : ''}`} />
              )}
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
