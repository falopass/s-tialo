'use client'

/**
 * app/demos/clinica-dental-lug/pasos.tsx
 *
 * «Cómo te atendemos»: los pasos se encienden uno tras otro sobre una
 * línea que crece, al entrar la lista al viewport. Cada nodo es la
 * sonrisa del logo (dos puntos + arco): al encenderse se llena de
 * turquesa y la sonrisa pasa a blanco. Mismo patrón de
 * IntersectionObserver + red de seguridad que Reveal. Con movimiento
 * reducido todo queda encendido y estático desde el inicio.
 */

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export type Paso = { num: string; title: string; desc: string }

export function Pasos({
  pasos,
  displayClass = '',
  className = '',
}: {
  pasos: readonly Paso[]
  displayClass?: string
  className?: string
}) {
  const ref = useRef<HTMLOListElement>(null)
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
      { threshold: 0.3, rootMargin: '0px 0px -40px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOn(true), 2400)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [])

  return (
    <ol ref={ref} className={`lug-pasos ${on ? 'on' : ''} ${className}`}>
      <span className="lug-linea" aria-hidden="true" />
      {pasos.map((p, i) => (
        <li key={p.num} className="lug-paso" style={{ '--i': i } as CSSProperties}>
          <span className="lug-nodo" aria-hidden="true">
            <svg viewBox="0 0 48 30" className="w-[22px] h-auto">
              <circle className="lug-punto" cx="13" cy="8" r="4.4" />
              <circle className="lug-punto" cx="35" cy="8" r="4.4" />
              <path
                className="lug-boca"
                d="M9 15 Q24 30 39 15"
                fill="none"
                strokeWidth="4.4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <div className="lug-paso-txt">
            <p className={`${displayClass} lug-paso-num`} aria-hidden="true">
              {p.num}
            </p>
            <h3 className={`${displayClass} lug-paso-titulo`}>{p.title}</h3>
            <p className="lug-paso-desc">{p.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
