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
  hero: unsplash('1599351431202-1e0f0137899a', 'Barbeiro de mãos tatuadas finalizando degradê com a máquina'),
  streetStyle: unsplash('1520975954732-35dd22299614', 'Homem de óculos escuros e jaqueta de couro agachado diante de parede de tijolos'),
  clipper: unsplash('1493256338651-d82f7acb2b38', 'Barbeiro tatuado passando máquina na nuca'),
  fade: unsplash('1567894340315-735d7c361db0', 'Barbeiro finalizando degradê em cliente com cabelo cacheado'),
  razor: unsplash('1622286342621-4bd786c2447c', 'Mão tatuada fazendo acabamento no corte'),
  beardBw: unsplash('1532710093739-9470acff878f', 'Barba sendo feita com pincel, em preto e branco'),
  scissorsBw: unsplash('1517832606299-7ae9b720a186', 'Barba sendo aparada com tesoura, em preto e branco'),
  scissors: unsplash('1503951914875-452162b0f3f1', 'Barbeiro aparando barba com tesoura'),
  barber: unsplash('1534297635766-a262cdcb8ee4', 'Barbeiro de óculos e tatuagens cortando cabelo'),
  mask: unsplash('1605497788044-5a32c7078486', 'Barbeiro de máscara secando o cabelo do cliente'),
  shop: unsplash('1585747860715-2ba37e788b70', 'Interior de barbearia com tijolos aparentes e luminárias'),
  tools: unsplash('1621605815971-fbc98d665033', 'Máquinas, tesouras e pomadas sobre a bancada'),
} satisfies Record<string, Photo>
