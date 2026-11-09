'use client'

/**
 * app/demos/taller-mecanico-reiher/trazo.tsx
 *
 * El trazo de osciloscopio que divide secciones: una línea de lectura
 * (tipo electrocardiograma) que se revela de izquierda a derecha con
 * clip-path al entrar al viewport. Solo clip-path; con movimiento
 * reducido queda dibujada de inmediato. Misma red de seguridad que
 * Reveal: si el observador no dispara, aparece igual.
 */

import { useEffect, useRef, useState } from 'react'

export function Trazo({
  color,
  className = '',
  delay = 0,
}: {
  color: string
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
      { threshold: 0.35, rootMargin: '0px 0px -24px' },
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
      className={className}
      aria-hidden="true"
      style={{
        clipPath: on ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
        transition: `clip-path 1.1s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
      }}
    >
      <svg viewBox="0 0 720 40" className="block w-full h-10" preserveAspectRatio="none">
        <path
          d="M0 20 H118 L126 8 L138 34 L148 14 L156 20 H282 L290 10 L302 32 L312 16 L320 20 H446 L454 6 L466 36 L476 12 L484 20 H610 L618 12 L628 30 L638 16 L646 20 H720"
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  )
}
