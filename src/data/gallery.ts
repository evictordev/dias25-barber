import { photos, type Photo } from './photos'

export interface GalleryItem {
  photo: Photo
  bw?: boolean
  /** classes de grid (span) no desktop */
  layout: string
  tag: string
}

export const gallery: GalleryItem[] = [
  { photo: photos.hero, layout: 'row-span-2', tag: 'FADE' },
  { photo: photos.scissorsBw, bw: true, layout: '', tag: 'BARBA' },
  { photo: photos.beardBw, bw: true, layout: 'col-span-2 md:col-span-1', tag: 'ACABAMENTO' },
  { photo: photos.fade, layout: 'row-span-2', tag: 'DEGRADÊ' },
  { photo: photos.razor, layout: '', tag: 'DESENHO' },
  { photo: photos.clipper, layout: '', tag: 'MÁQUINA' },
  { photo: photos.barber, layout: 'col-span-2', tag: 'TRANÇAS' },
  { photo: photos.scissors, bw: true, layout: '', tag: 'NAVALHA' },
]

/** Vídeos reais (opcional). Se vazio, a seção não mostra o player. */
export interface VideoItem { src: string; poster: string; title: string }
export const videos: VideoItem[] = []
