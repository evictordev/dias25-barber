import { photos, type Photo } from './photos'

export type CategoryId = 'platinado' | 'pigmentacao' | 'freestyle' | 'disfarce'

export interface GalleryItem {
  photo: Photo
  bw?: boolean
  tag: string
  /** caminho do vídeo; a foto vira o pôster e o item abre tocando */
  video?: string
}

export interface GalleryCategory {
  id: CategoryId
  label: string
  items: GalleryItem[]
}

/**
 * O primeiro item de cada categoria vira o destaque grande (2x2); os outros
 * preenchem o grid (o último estica sozinho se faltar para fechar a linha).
 * Fotos do Unsplash (placeholder: true) são provisórias: trocar por fotos reais de cada serviço em src/data/photos.ts.
 */
export const galleryCategories: GalleryCategory[] = [
  {
    id: 'disfarce',
    label: 'Disfarce',
    items: [
      { photo: photos.degradeNuca, tag: 'Disfarce' },
      { photo: photos.posterDegrade, video: '/videos/galeria-3199.mp4', tag: 'Disfarce' },
      { photo: photos.degradeBaixo, tag: 'Disfarce' },
      { photo: photos.degradeCachos, tag: 'Disfarce' },
      { photo: photos.disfarce, video: '/videos/galeria-0114.mp4', tag: 'Disfarce' },
    ],
  },
  {
    id: 'platinado',
    label: 'Platinado',
    items: [
      { photo: photos.platinadoBranco, tag: 'PLATINADO' },
    ],
  },
  {
    id: 'pigmentacao',
    label: 'Pigmentação',
    items: [
      { photo: photos.pigmentação1, tag: 'PIGMENTAÇÃO' },
      { photo: photos.pigmentação2, video: '/videos/galeria-6538.mp4', tag: 'PIGMENTAÇÃO' },
    ],
  },
  {
    id: 'freestyle',
    label: 'Freestyle',
    items: [
      { photo: photos.trancasDesenho, tag: 'Freestyle' },
      { photo: photos.posterPlatinado, video: '/videos/galeria-3061.mp4', tag: 'Freestyle' },
    ],
  },
]

/** Vídeos reais (opcional). Se vazio, a seção não mostra o player. */
export interface VideoItem { src: string; poster: string; title: string }
export const videos: VideoItem[] = []
