import { photos, type Photo } from './photos'

export interface Service {
  id: string
  title: string
  description: string
  photo: Photo
  /** preencher apenas com valores reais, ex.: 'R$ 40' */
  price?: string
}

export const services: Service[] = [
  { id: 'corte', title: 'Corte masculino', description: 'Tesoura e máquina, do clássico ao ousado. Saia daqui com a cara que você queria.', photo: photos.pastaFox },
  { id: 'fade', title: 'Degradê / Fade', description: 'Transição limpa, linha na régua. O degradê que virou assinatura da casa.', photo: photos.cremePistache },
  { id: 'corte-barba', title: 'Corte + Barba', description: 'O combo completo: visual fechado da cabeça ao queixo.', photo: photos.waxToqueSeco },
  { id: 'barba', title: 'Barba', description: 'Contorno, volume e acabamento com toalha quente e pincel.', photo: photos.pastaPremium },
  { id: 'tranças', title: 'Tranças e estilos', description: 'Tranças, desenhos e estilos personalizados feitos sob medida.', photo: photos.gelStone },
]
