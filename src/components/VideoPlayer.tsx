import { useState } from 'react'
import { Play } from 'lucide-react'
import type { VideoItem } from '../data/gallery'

/** Carrega o vídeo apenas após o toque/clique (preload zero). */
export function VideoPlayer({ video, className = '' }: { video: VideoItem; className?: string }) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className={`relative overflow-hidden bg-coal ${className}`}>
      {playing ? (
        <video src={video.src} poster={video.poster} controls autoPlay playsInline className="h-full w-full object-cover" />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} aria-label={`Reproduzir vídeo: ${video.title}`} className="group relative block h-full w-full">
          <img src={video.poster} alt="" loading="lazy" className="h-full w-full object-cover" />
          <span className="absolute inset-0 grid place-items-center bg-ink/40 transition group-hover:bg-ink/20">
            <span className="grid h-20 w-20 place-items-center rounded-full bg-neon text-ink transition group-hover:scale-110">
              <Play className="ml-1" fill="currentColor" />
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
