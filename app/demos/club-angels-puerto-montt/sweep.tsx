'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Barrido de luz sobre las fotos al hacer scroll: una franja clara
 * cruza la imagen de izquierda a derecha una sola vez, como un foco
 * que pasa por el escenario. Envuelve al contenido (position +
 * overflow hidden quedan en el CSS de page.tsx).
 */
export function Sweep({
  children,
  className = '',
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
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
      { threshold: 0.2, rootMargin: '0px 0px -30px' },
    )
    io.observe(el)
    // Red de seguridad: el contenido nunca queda invisible.
    const salvavidas = window.setTimeout(() => setOn(true), 2200 + delay)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`ca-sweep ${on ? 'ca-on' : ''} ${className}`}
      style={{ '--ca-d': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
