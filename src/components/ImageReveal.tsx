import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import type { Photo } from '../data/photos'

interface ImageRevealProps {
  photo: Photo
  className?: string
  imgClassName?: string
  eager?: boolean
  bw?: boolean
  /** intensidade do parallax em % (0 desliga) */
  parallax?: number
  sizes?: string
  delay?: number
}

const srcSet = (p: Photo) => p.widths?.map((w) => `${p.src}&w=${w} ${w}w`).join(', ')

export function ImageReveal({ photo, className = '', imgClassName = '', eager = false, bw = false, parallax = 0, sizes = '(min-width: 768px) 50vw, 100vw', delay = 0 }: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`])
  const scale = parallax ? 1 + (parallax * 2) / 100 + 0.02 : 1

  return (
    <motion.div
      ref={ref}
      className={`${/\b(absolute|fixed)\b/.test(className) ? '' : 'relative'} overflow-hidden bg-coal ${className}`}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay }}
    >
      <motion.img
        src={photo.widths ? `${photo.src}&w=1200` : photo.src}
        srcSet={srcSet(photo)}
        sizes={sizes}
        alt={photo.alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={eager ? 'high' : 'auto'}
        draggable={false}
        style={parallax ? { y, scale } : undefined}
        className={`h-full w-full object-cover transition duration-700 ${bw ? 'grayscale contrast-125' : ''} ${imgClassName}`}
      />
      {import.meta.env.DEV && photo.placeholder && (
        <span className="pointer-events-none absolute left-2 top-2 bg-violet px-1.5 py-0.5 font-mono text-[9px] uppercase text-paper">
          placeholder
        </span>
      )}
    </motion.div>
  )
}
