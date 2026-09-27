'use client'

/**
 * app/demos/bravosgym/parallax.tsx
 *
 * Imagen a sangre con parallax sutil: la foto viaja unos puntos por
 * encima del scroll del panel que la contiene. Respeta
 * prefers-reduced-motion. La imagen debe medir ~120% de la altura
 * del contenedor (el caller le da top-[-10%] h-[120%]).
 */

import { useEffect, useRef } from 'react'

export function ParallaxImg({
  src,
  alt,
  className = '',
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  eager?: boolean
}) {
  const ref = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
      return

    let raf = 0
    const update = () => {
      const host = el.parentElement
      if (!host) return
      const r = host.getBoundingClientRect()
      const vh = window.innerHeight
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh + r.height)))
      el.style.transform = `translate3d(0, ${((p - 0.5) * 14).toFixed(2)}%, 0)`
    }
    const onScroll = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0
          update()
        })
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <img
      ref={ref}
      src={src}
      alt={alt}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      className={className}
    />
  )
}
