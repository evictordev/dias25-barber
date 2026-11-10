import { site, whatsappUrl } from '../config/site'

function InstagramLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsappLogo({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  )
}

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
            <li><a href={site.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-neon"><InstagramLogo /> @diasbarbershop_25</a></li>
            <li><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition hover:text-neon"><WhatsappLogo /> WhatsApp</a></li>
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
