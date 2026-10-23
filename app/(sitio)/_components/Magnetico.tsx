'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'

/**
 * Atracción leve del CTA hacia el cursor. Comunica dónde hacer clic.
 * Solo con mouse fino; en táctil y con movimiento reducido no hace nada.
 * Usa motion values (nunca estado de React) para no re-renderizar en cada movimiento.
 */
export function Magnetico({ children, fuerza = 0.22 }: { children: React.ReactNode; fuerza?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const reducir = useReducedMotion()
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 })
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 })

  function mover(e: React.PointerEvent) {
    if (reducir || e.pointerType !== 'mouse' || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    x.set((e.clientX - (r.left + r.width / 2)) * fuerza)
    y.set((e.clientY - (r.top + r.height / 2)) * fuerza)
  }

  function soltar() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.span
      ref={ref}
      onPointerMove={mover}
      onPointerLeave={soltar}
      style={{ x: sx, y: sy }}
      className="inline-flex"
    >
      {children}
    </motion.span>
  )
}
