export interface Photo {
  src: string
  alt: string
  /** larguras para srcset (apenas imagens com parâmetro ?w=) */
  widths?: number[]
  /** true enquanto a foto for um placeholder do Unsplash */
  placeholder?: boolean
}

/**
 * PLACEHOLDERS (Unsplash): trocar pelas fotos reais da Dias 25.
 * Para usar foto própria: { src: '/fotos/arquivo.jpg', alt: '...' }
 */
const unsplash = (id: string, alt: string): Photo => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70`,
  alt,
  widths: [480, 800, 1200, 1800],
  placeholder: true,
})

export const photos = {
  hero: { src: '/fotos/banner.jpg', alt: 'Cliente com tranças e degradê desenhado, cobrindo o rosto com a mão, diante de parede grafitada' },
  streetStyle: unsplash('1520975954732-35dd22299614', 'Homem de óculos escuros e jaqueta de couro agachado diante de parede de tijolos'),
  clipper: unsplash('1493256338651-d82f7acb2b38', 'Barbeiro tatuado passando máquina na nuca'),
  fade: unsplash('1567894340315-735d7c361db0', 'Barbeiro finalizando degradê em cliente com cabelo cacheado'),
  razor: unsplash('1622286342621-4bd786c2447c', 'Mão tatuada fazendo acabamento no corte'),
  beardBw: unsplash('1532710093739-9470acff878f', 'Barba sendo feita com pincel, em preto e branco'),
  scissorsBw: unsplash('1517832606299-7ae9b720a186', 'Barba sendo aparada com tesoura, em preto e branco'),
  scissors: unsplash('1503951914875-452162b0f3f1', 'Barbeiro aparando barba com tesoura'),
  barber: unsplash('1534297635766-a262cdcb8ee4', 'Barbeiro de óculos e tatuagens cortando cabelo'),
  mask: unsplash('1605497788044-5a32c7078486', 'Barbeiro de máscara secando o cabelo do cliente'),
  shop: { src: '/fotos/ambiente.jpg', alt: 'Interior da barbearia com parede grafitada, cadeiras pretas e espelhos com luz de LED' },
  pastaFox: { src: '/fotos/pasta-fox.jpg', alt: 'Três potes de pasta modeladora Fox For Men empilhados sobre bancada escura' },
  cremePistache: { src: '/fotos/creme-pistache.jpg', alt: 'Dois potes de creme modelador Pistache Fox For Men sobre bancada escura' },
  waxToqueSeco: { src: '/fotos/wax-toque-seco.jpg', alt: 'Três potes de wax efeito toque seco Fox For Men empilhados' },
  pastaPremium: { src: '/fotos/pasta-premium.jpg', alt: 'Três potes de pasta premium Fox For Men com manteiga de karité' },
  gelStone: { src: '/fotos/gel-stone.jpg', alt: 'Três potes de gel Stone Fox For Men, fixação extra forte' },
  trancasDesenho: { src: '/fotos/galeria-0460.jpg', alt: 'Cliente de perfil com tranças e desenho riscado na lateral, diante da parede grafitada' },
  degradeBaixo: { src: '/fotos/galeria-1635.jpg', alt: 'Cliente de perfil com degradê baixo, sentado diante do espelho de LED' },
  degradeNuca: { src: '/fotos/galeria-1642.jpg', alt: 'Barbeiro mostrando o degradê na lateral e na nuca do cliente' },
  prateleira: { src: '/fotos/galeria-2643.jpg', alt: 'Prateleira com shampoos, óleos de barba e pomadas ao lado do espelho de LED' },
  bancada: { src: '/fotos/galeria-2644.jpg', alt: 'Bancada com máquinas douradas, navalha, pentes e gel de barbear' },
  platinadoBranco: { src: '/fotos/galeria-5073.jpg', alt: 'Vista de cima de cabelo platinado branco recém-finalizado, cliente de capa preta' },
  pigmentação1: { src: '/fotos/galeria-6532.jpg', alt: 'Cliente de perfil com cabelo ondulado penteado e degradê suave' },
  degradeCachos: { src: '/fotos/galeria-9301.jpg', alt: 'Cliente de perfil com cabelo cacheado no topo e degradê baixo na lateral' },
  disfarce: { src: '/videos/galeria-0114.jpg', alt: 'Vídeo: corte social com topete penteado' },
  pigmentação2: { src: '/videos/galeria-6538.jpg', alt: 'Vídeo: corte social ondulado com acabamento molhado' },
  posterPlatinado: { src: '/videos/galeria-3061.jpg', alt: 'Vídeo: mechas descoloridas com desenho riscado na nuca' },
  posterDegrade: { src: '/videos/galeria-3199.jpg', alt: 'Vídeo: degradê com cabelo cacheado no topo' },
  tools: unsplash('1621605815971-fbc98d665033', 'Máquinas, tesouras e pomadas sobre a bancada'),
} satisfies Record<string, Photo>
