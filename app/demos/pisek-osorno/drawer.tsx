'use client'

/**
 * app/demos/pisek-osorno/drawer.tsx
 *
 * Revelado propio de este demo: cada categoría entra como un cajón de
 * la vitrina que se abre: el frente del cajón (panel con su tirador
 * dorado) se desliza hacia el lado y el contenido aparece corriéndose
 * levemente. Mismo patrón de IntersectionObserver + red de seguridad
 * que Reveal. Con movimiento reducido el frente queda abierto (fuera
 * de escena) y el contenido visible.
 */

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export function Drawer({
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
      { threshold: 0.18, rootMargin: '0px 0px -36px' },
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
      className={`pk-cajon ${on ? 'pk-open' : ''} ${className}`}
      style={{ '--pkd': `${delay}ms` } as CSSProperties}
    >
      <div className="pk-cajon-in">{children}</div>
      <span className="pk-frente" aria-hidden="true">
        <span className="pk-tirador" />
      </span>
    </div>
  )
}
