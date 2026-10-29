import { MessageCircle, CalendarClock } from 'lucide-react'
import { AnimatedText } from './AnimatedText'
import { Button } from './Button'
import { Marquee } from './Marquee'
import { site, whatsappUrl } from '../config/site'

export function BookingSection() {
  return (
    <section id="agendar" className="grain relative overflow-hidden bg-neon text-ink">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.2em]">07 / Agendamento</p>
        <AnimatedText as="h2" text={'SEU PRÓXIMO\nVISUAL COMEÇA\nAQUI.'} className="font-display uppercase leading-[0.88] text-[clamp(3rem,11.5vw,10.5rem)]" />
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-sm text-lg font-medium md:text-xl">Escolha seu horário e venha viver a experiência Dias 25.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={whatsappUrl()} variant="ink" external className="text-xl"><MessageCircle size={22} aria-hidden /> Agendar pelo WhatsApp</Button>
            <Button href={site.bookingUrl || undefined} variant="ghost" disabled={!site.bookingUrl} external className="!border-ink !text-ink hover:!bg-ink hover:!text-neon">
              <CalendarClock size={20} aria-hidden /> {site.bookingUrl ? 'Agendar online' : 'Agenda online em breve'}
            </Button>
          </div>
        </div>
      </div>
      <Marquee items={['FRESH CUTS', 'STREET CULTURE', 'DIAS 25']} reverse className="border-t-2 border-ink bg-ink py-3 font-display text-2xl uppercase text-neon md:text-3xl" />
    </section>
  )
}
