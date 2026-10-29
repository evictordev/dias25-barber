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
  { id: 'corte', title: 'Corte masculino', description: 'Tesoura e máquina, do clássico ao ousado. Saia daqui com a cara que você queria.', photo: photos.razor },
  { id: 'fade', title: 'Degradê / Fade', description: 'Transição limpa, linha na régua. O degradê que virou assinatura da casa.', photo: photos.fade },
  { id: 'corte-barba', title: 'Corte + Barba', description: 'O combo completo: visual fechado da cabeça ao queixo.', photo: photos.scissors },
  { id: 'barba', title: 'Barba', description: 'Contorno, volume e acabamento com toalha quente e pincel.', photo: photos.beardBw },
  { id: 'tranças', title: 'Tranças e estilos', description: 'Tranças, desenhos e estilos personalizados feitos sob medida.', photo: photos.barber },
]
