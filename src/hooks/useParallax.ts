import { useLayoutEffect, type RefObject } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Move elementos com [data-speed] em ritmos diferentes enquanto a seção cruza a tela. */
export function useParallax(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    if (!scope.current) return
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const amp = window.innerWidth < 768 ? 35 : 80
      gsap.utils.toArray<HTMLElement>('[data-speed]', scope.current).forEach((el) => {
        const speed = parseFloat(el.dataset.speed ?? '1')
        const rot = parseFloat(el.dataset.rot ?? '0')
        gsap.fromTo(
          el,
          { y: amp * speed, rotate: -rot },
          {
            y: -amp * speed,
            rotate: rot,
            ease: 'none',
            scrollTrigger: { trigger: scope.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          },
        )
      })
    })
    return () => mm.revert()
  }, [scope])
}
