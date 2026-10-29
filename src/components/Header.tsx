import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { site, whatsappUrl } from '../config/site'

const sectionIds = ['inicio', 'sobre', 'cortes', 'galeria', 'contato']

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('inicio')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled && !open ? 'bg-ink/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-[4.5rem] max-w-[1600px] items-center justify-between px-5 md:px-10">
        <a href="#inicio" className="flex h-full items-center py-1" aria-label="Barbearia Dias 25 — início" onClick={() => setOpen(false)}>
          <img src="/logo-dias25.png" alt="Dias Barbershop 25" width={77} height={60} className="h-14 w-auto md:h-[3.75rem]" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 md:flex">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} aria-current={active === l.href.slice(1) ? 'true' : undefined} className="group relative font-mono text-xs uppercase tracking-[0.18em]">
              {l.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-neon transition-all duration-300 ${active === l.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="hidden min-h-10 items-center bg-neon px-4 font-display text-base uppercase text-ink transition hover:bg-paper md:inline-flex">
            Agendar horário
          </a>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="menu-mobile" aria-label={open ? 'Fechar menu' : 'Abrir menu'} className="grid h-12 w-12 place-items-center border border-paper/40 md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <motion.div style={{ scaleX: progress }} className="h-0.5 origin-left bg-neon" aria-hidden />

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            initial={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2.5rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2.5rem) 2rem)' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 -z-10 flex flex-col justify-between bg-neon px-6 pb-10 pt-24 text-ink md:hidden"
          >
            <nav aria-label="Menu mobile" className="flex flex-col">
              {site.nav.map((l, i) => (
                <motion.a key={l.href} href={l.href} onClick={() => setOpen(false)} initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 + i * 0.06 }} className="flex items-baseline gap-4 border-b border-ink/20 py-3 font-display text-6xl uppercase leading-none">
                  <span className="font-mono text-xs">0{i + 1}</span>
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center bg-ink font-display text-2xl uppercase text-neon">
              Agendar horário
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
