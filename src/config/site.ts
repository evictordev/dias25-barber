export interface SiteConfig {
  name: string
  instagram: string
  linktree: string
  whatsappNumber: string
  whatsappMessage: string
  bookingUrl: string
  address: string
  mapsUrl: string
  hours: { label: string; value: string }[]
  nav: { label: string; href: string }[]
}

const env = import.meta.env

export const site: SiteConfig = {
  name: 'Barbearia Dias 25',
  instagram: 'https://www.instagram.com/diasbarbershop_25/',
  linktree: 'https://linktr.ee/BarbeariaDiias',
  whatsappNumber: env.VITE_WHATSAPP_NUMBER ?? '',
  whatsappMessage: 'Olá! Gostaria de agendar um horário na Barbearia Dias 25.',
  bookingUrl: env.VITE_BOOKING_URL ?? '',
  address: env.VITE_ADDRESS ?? '',
  mapsUrl: env.VITE_MAPS_URL ?? '',
  hours: [
    { label: 'Seg — Sáb', value: '08:30 às 20:00' },
    { label: 'Domingo', value: 'até 12:00' },
  ],
  nav: [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Cortes', href: '#cortes' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ],
}

/** Sem número configurado, abre o WhatsApp para o cliente escolher o contato. */
export function whatsappUrl(extra?: string): string {
  const text = encodeURIComponent(extra ? `${site.whatsappMessage} ${extra}` : site.whatsappMessage)
  const number = site.whatsappNumber.replace(/\D/g, '')
  return `https://wa.me/${number}?text=${text}`
}
