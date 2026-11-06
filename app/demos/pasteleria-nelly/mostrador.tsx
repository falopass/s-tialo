'use client'

/**
 * app/demos/pasteleria-nelly/mostrador.tsx
 *
 * Piezas cliente del demo de Panadería y Pastelería Nelly:
 *
 * - `CartelHorario`: el cartel que cuelga de la vitrina. El horario de HOY se
 *   calcula en el cliente (getDay/hora real); en SSR queda el rótulo neutro
 *   para no hornear la fecha del build en el HTML estático.
 * - `Slide`: reveal con translateX escalonado, como si las cosas se fueran
 *   acomodando en la vitrina al hacer scroll.
 * - `SemanaHorario`: la tabla de horario de lunes a domingo, con el día de
 *   hoy destacado (se marca después del montaje, sin romper el HTML).
 */

import { useEffect, useRef, useState } from 'react'
import { HORARIO } from './content'

function estadoHoy() {
  const ahora = new Date()
  const dia = HORARIO.find((h) => h.js === ahora.getDay())!
  const min = ahora.getHours() * 60 + ahora.getMinutes()
  const abierto = min >= dia.abre && min < dia.cierra
  return { dia, abierto, antesDeAbrir: min < dia.abre }
}

/** Cartel colgante con el horario del día. La oscilación es una animación CSS. */
export function CartelHorario({ accent, ink, paper }: { accent: string; ink: string; paper: string }) {
  const [txt, setTxt] = useState<{ titulo: string; detalle: string; abierto: boolean } | null>(null)

  useEffect(() => {
    const { dia, abierto, antesDeAbrir } = estadoHoy()
    setTxt({
      titulo: abierto ? 'Abierto ahora' : antesDeAbrir ? 'Abre hoy' : 'Hoy abrió',
      detalle: dia.texto,
      abierto,
    })
  }, [])

  return (
    <div className="nel-cartel" role="status" aria-live="polite">
      <div className="nel-cartel-card" style={{ backgroundColor: paper, color: ink }}>
        <p className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em]">
          <span
            className="inline-block h-[7px] w-[7px] rounded-full"
            style={{ backgroundColor: txt ? (txt.abierto ? '#3D8A3D' : accent) : accent }}
            aria-hidden="true"
          />
          {txt ? txt.titulo : 'Horario'}
        </p>
        <p className="nel-cartel-horas mt-0.5 text-[15px] leading-none" style={{ color: accent }}>
          {txt ? txt.detalle : '···'}
        </p>
        <p className="mt-1 text-[9px] font-semibold uppercase tracking-[0.14em] opacity-70">horario de hoy</p>
      </div>
    </div>
  )
}

/** Reveal lateral escalonado: entra desde la derecha, como acomodando la vitrina. */
export function Slide({
  children,
  delay = 0,
  className = '',
  from = 48,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  from?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true)
      setVisible(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          io.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setVisible(true), 2200 + delay)
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
      style={
        still
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : `translateX(${from}px)`,
              transition: `opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}

/** Tabla de horario de la semana; el día actual se destaca tras el montaje. */
export function SemanaHorario({
  ink,
  muted,
  line,
  accent,
  accentInk,
  displayClass,
}: {
  ink: string
  muted: string
  line: string
  accent: string
  accentInk: string
  displayClass: string
}) {
  const [hoy, setHoy] = useState<number | null>(null)
  useEffect(() => {
    setHoy(new Date().getDay())
  }, [])

  const orden = [1, 2, 3, 4, 5, 6, 0]
  return (
    <ul>
      {orden.map((js) => {
        const d = HORARIO.find((h) => h.js === js)!
        const esHoy = hoy === js
        return (
          <li
            key={d.dia}
            className="flex items-baseline justify-between gap-4 border-b py-[13px] last:border-b-0"
            style={{ borderColor: line }}
          >
            <span className={`${displayClass} text-xl md:text-2xl uppercase tracking-wide flex items-center gap-2.5`} style={{ color: ink }}>
              {d.dia}
              {esHoy && (
                <span
                  className="rounded-full px-2 py-[3px] text-[9px] font-bold uppercase tracking-[0.14em]"
                  style={{ backgroundColor: accent, color: accentInk }}
                >
                  hoy
                </span>
              )}
            </span>
            <span className="text-sm md:text-base font-semibold" style={{ color: esHoy ? accent : muted }}>
              {d.texto}
            </span>
          </li>
        )
      })}
    </ul>
  )
}
