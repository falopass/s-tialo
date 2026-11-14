'use client'

/**
 * app/demos/gatone-print-villarrica/abanico.tsx
 *
 * El abanico de muestras de pintura: cuatro muestras remachadas en la
 * base que se abren en abanico al entrar en vista. Solo transform y
 * opacity; con prefers-reduced-motion sale abierto y quieto.
 */

import { useEffect, useRef, useState } from 'react'

export function Abanico({
  colors,
  size = 160,
  className = '',
}: {
  colors: string[]
  size?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOpen(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOpen(true), 2400)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [])

  const mid = (colors.length - 1) / 2

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{ height: size * 1.16, width: size * 1.62 }}
      aria-hidden="true"
    >
      {colors.map((c, i) => {
        const angle = open ? (i - mid) * 17 : 0
        return (
          <span
            key={i}
            className="absolute bottom-0 left-1/2 block rounded-t-lg"
            style={{
              width: size * 0.3,
              height: size,
              backgroundColor: c,
              transformOrigin: '50% 100%',
              transform: `translateX(-50%) rotate(${angle}deg)`,
              transition: `transform 0.95s cubic-bezier(0.22,0.68,0.3,1.18) ${i * 90}ms`,
              boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
              border: '1.5px solid rgba(16,18,22,0.45)',
            }}
          />
        )
      })}
      {/* remache de la base */}
      <span
        className="absolute -bottom-[7px] left-1/2 block h-4 w-4 -translate-x-1/2 rounded-full"
        style={{ backgroundColor: '#E9DCC3', border: '2px solid rgba(16,18,22,0.6)' }}
      />
    </div>
  )
}
