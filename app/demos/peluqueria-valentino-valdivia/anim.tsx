'use client'

/**
 * app/demos/peluqueria-valentino-valdivia/anim.tsx
 *
 * Piezas con estado propias de este demo:
 * - `Corte`: revelado de fotos con un recorte que se abre como tijera
 *   (de una ranura horizontal a la imagen completa, solo clip-path).
 * - `Cuenta`: número que cuenta hasta su valor al entrar en vista
 *   (el 4,9 y las 139 opiniones de Google).
 * Ambas respetan prefers-reduced-motion y llevan red de seguridad:
 * si el observador no dispara, el contenido se muestra igual.
 */

import { useEffect, useRef, useState } from 'react'

export function Corte({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true)
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
      { threshold: 0.18, rootMargin: '0px 0px -40px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOpen(true), 2200 + delay)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={
        still
          ? undefined
          : {
              clipPath: open ? 'inset(0% 0% 0% 0%)' : 'inset(46% 0% 46% 0%)',
              opacity: open ? 1 : 0,
              transition: `clip-path 0.95s cubic-bezier(0.6,0.04,0.2,1) ${delay}ms, opacity 0.6s ease ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}

export function Cuenta({
  hasta,
  decimales = 0,
  duracion = 1400,
  className = '',
}: {
  hasta: number
  decimales?: number
  duracion?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [val, setVal] = useState(hasta)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    setVal(0)
    if (!el) {
      setVal(hasta)
      return
    }
    let raf = 0
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        io.disconnect()
        const t0 = performance.now()
        const paso = (t: number) => {
          const p = Math.min(1, (t - t0) / duracion)
          setVal(hasta * (1 - Math.pow(1 - p, 3)))
          if (p < 1) raf = requestAnimationFrame(paso)
          else setVal(hasta)
        }
        raf = requestAnimationFrame(paso)
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setVal(hasta), 3500)
    return () => {
      io.disconnect()
      cancelAnimationFrame(raf)
      window.clearTimeout(salvavidas)
    }
  }, [hasta, duracion])

  return (
    <span ref={ref} className={className}>
      {val.toFixed(decimales).replace('.', ',')}
    </span>
  )
}
