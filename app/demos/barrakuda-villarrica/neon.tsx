'use client'

/**
 * app/demos/barrakuda-villarrica/neon.tsx
 *
 * El tubo de neón: el motivo gráfico del demo. Un rótulo que llega
 * apagado (vidrio tenue) y se enciende al entrar al viewport: dos
 * parpadeos y queda fijo, como el letrero de una barra.
 *
 * Estados:
 * - idle: encendido fijo. Es el estado que sale del SSR, así sin JS,
 *   sin IntersectionObserver o con prefers-reduced-motion el rótulo
 *   se ve completo y quieto.
 * - armed: el JS puede animar; el tubo queda apagado esperando su
 *   turno (IntersectionObserver).
 * - on: corre la animación de parpadeo y queda encendido.
 *
 * Todo el movimiento es opacity (y scaleX en el dash): nada mueve layout.
 */

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

type Estado = 'idle' | 'armed' | 'on'

function useTubo<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [st, setSt] = useState<Estado>('idle')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      return // queda en 'idle': encendido fijo, sin parpadeo
    }
    setSt('armed')
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSt('on')
          io.disconnect()
        }
      },
      { threshold: 0.55 },
    )
    io.observe(el)
    // Red de seguridad: si el observador no dispara, el letrero
    // enciende igual pasado un momento (ver Reveal en blitz-kit).
    const salvavidas = window.setTimeout(() => setSt('on'), 4000)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
    // Una sola vez al montar: depender de `st` desconectaría el
    // observer apenas arma el tubo y el letrero quedaría apagado.
  }, [])

  const clase = st === 'armed' ? ' bk-arm' : st === 'on' ? ' bk-on' : ''
  return { ref, clase }
}

/** Texto como tubo de neón: copia apagada abajo, copia encendida arriba. */
export function Neon({
  children,
  tube,
  core = '#FFF3D4',
  glow,
  className = '',
  delay = 0,
}: {
  children: string
  /** Color del tubo encendido (y del vidrio apagado, tenue). */
  tube: string
  /** Color del filamento: casi blanco, teñido del tubo. */
  core?: string
  /** Color del resplandor; por defecto el del tubo. */
  glow?: string
  className?: string
  delay?: number
}) {
  const { ref, clase } = useTubo<HTMLSpanElement>()
  const g = glow ?? tube
  return (
    <span
      ref={ref}
      className={`bk-neon${clase} ${className}`}
      style={{ '--bk-d': `${delay}ms` } as CSSProperties}
    >
      <span className="bk-off" aria-hidden="true" style={{ color: tube }}>
        {children}
      </span>
      <span
        className="bk-lit"
        style={{
          color: core,
          textShadow: `0 0 2px ${core}, 0 0 9px ${g}, 0 0 22px ${g}, 0 0 48px ${g}`,
        }}
      >
        {children}
      </span>
    </span>
  )
}

/** Tramo de tubo sin texto: filete de luz que se enciende al entrar. */
export function NeonDash({
  tube,
  className = '',
  delay = 0,
  width = 38,
}: {
  tube: string
  className?: string
  delay?: number
  width?: number
}) {
  const { ref, clase } = useTubo<HTMLSpanElement>()
  return (
    <span
      ref={ref}
      aria-hidden="true"
      className={`bk-dash${clase} ${className}`}
      style={
        {
          width,
          background: tube,
          boxShadow: `0 0 8px 1px ${tube}`,
          '--bk-d': `${delay}ms`,
        } as CSSProperties
      }
    />
  )
}
