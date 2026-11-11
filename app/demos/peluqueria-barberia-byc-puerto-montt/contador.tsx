'use client'

import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'

/**
 * Contador de las 127 opiniones de Google: sube de 0 al número real en
 * el primer segundo del hero. Con prefers-reduced-motion muestra el
 * número final de inmediato.
 */
export default function Contador({
  hasta,
  className = '',
  style,
}: {
  hasta: number
  className?: string
  style?: CSSProperties
}) {
  const [n, setN] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(hasta)
      return
    }
    let raf = 0
    const inicio = performance.now() + 450
    const duracion = 1150
    const paso = (t: number) => {
      const p = Math.min(1, Math.max(0, (t - inicio) / duracion))
      setN(Math.round(hasta * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(paso)
    }
    raf = requestAnimationFrame(paso)
    return () => cancelAnimationFrame(raf)
  }, [hasta])

  return (
    <span className={className} style={style} aria-hidden="true">
      {n}
    </span>
  )
}
