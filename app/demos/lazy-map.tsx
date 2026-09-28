'use client'

import { useEffect, useRef, useState } from 'react'
import type { IframeHTMLAttributes } from 'react'

/**
 * El iframe de Google Maps arrastra ~1.5 MB de JS (init_embed, places, util) y con
 * loading="lazy" Chrome igual lo descarga apenas entra a su margen — en celular eso
 * pelea el ancho de banda con la primera impresión. Aquí el src solo se asigna cuando
 * la sección se acerca al viewport; mientras tanto el iframe queda vacío (fondo del
 * contenedor, igual que un lazy aún no cargado).
 */
export default function LazyMap({ src, ...rest }: IframeHTMLAttributes<HTMLIFrameElement>) {
  const ref = useRef<HTMLIFrameElement>(null)
  const [realSrc, setRealSrc] = useState<string | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el || realSrc) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRealSrc(typeof src === 'string' ? src : undefined)
          io.disconnect()
        }
      },
      { rootMargin: '800px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [src, realSrc])

  return <iframe ref={ref} src={realSrc} loading="lazy" {...rest} />
}
