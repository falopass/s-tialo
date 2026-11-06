'use client'

/**
 * app/demos/jj-cell-concepcion/scan.tsx
 *
 * Revelado propio de este demo: la tarjeta entra con un barrido de
 * luz naranja tipo escáner láser horizontal que la recorre una vez
 * (clase .jj-on + keyframes jj-sweep en page.tsx). Mismo patrón de
 * IntersectionObserver + red de seguridad que Reveal. Con movimiento
 * reducido el contenido queda visible y el láser no corre.
 */

import { useEffect, useRef, useState } from 'react'

export function Scan({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -32px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOn(true), 2200 + delay)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={ref}
      className={`jj-scan ${on ? 'jj-on' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
      <span className="jj-laser" style={{ animationDelay: `${delay + 140}ms` }} aria-hidden="true" />
    </div>
  )
}
