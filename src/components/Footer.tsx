import { Camera, MessageCircle } from 'lucide-react'
import { site, whatsappUrl } from '../config/site'

export function Footer() {
  return (
    <footer id="contato" className="relative overflow-hidden bg-ink pt-20">
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 md:grid-cols-4 md:px-10">
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neon">Navegação</h3>
          <ul className="space-y-1">
            {site.nav.map((l) => <li key={l.href}><a href={l.href} className="font-display text-2xl uppercase transition hover:text-neon">{l.label}</a></li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neon">Horários</h3>
          <ul className="space-y-1 text-paper/80">
            {site.hours.map((h) => <li key={h.label}><span className="text-paper">{h.label}</span> · {h.value}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neon">Onde</h3>
          <p className="text-paper/80">
            {site.address ? (site.mapsUrl ? <a href={site.mapsUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-neon underline-offset-4">{site.address}</a> : site.address) : 'Endereço em breve. Chame no Instagram ou WhatsApp.'}
          </p>
        </div>
        <div>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-neon">Contato</h3>
          <ul className="space-y-3">
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-neon"><Camera size={18} aria-hidden /> @diasbarbershop_25</a></li>
            <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-neon"><MessageCircle size={18} aria-hidden /> WhatsApp</a></li>
            <li><a href={site.linktree} target="_blank" rel="noopener noreferrer" className="font-mono text-xs uppercase tracking-[0.15em] text-paper/60 transition hover:text-neon">linktr.ee/BarbeariaDiias</a></li>
          </ul>
        </div>
      </div>

      <p aria-hidden className="mt-16 select-none whitespace-nowrap text-center font-display uppercase leading-[0.8] text-[clamp(7rem,34vw,34rem)] text-paper/95">
        Dias<span className="text-neon">25</span>
      </p>
      <div className="border-t border-paper/15 px-5 py-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-paper/50">
        © {new Date().getFullYear()} {site.name} · Todos os direitos reservados
      </div>
    </footer>
  )
}
