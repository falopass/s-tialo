'use client'

/**
 * print.tsx: revelado "de imprenta": la pieza se imprime de arriba
 * hacia abajo (clip-path inset), como saliendo del plóter. Solo se
 * anima clip-path; con prefers-reduced-motion queda visible y quieto.
 * Misma red de seguridad que Reveal: si el observador no dispara, el
 * contenido se muestra igual pasado un momento.
 */
import { useEffect, useRef, useState } from 'react'
import type { CSSProperties } from 'react'

export default function Print({
  children,
  delay = 0,
  className = '',
  style,
}: {
  children: React.ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
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
      { threshold: 0.12, rootMargin: '0px 0px -30px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setVisible(true), 2200 + delay)
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
          ? style
          : {
              ...style,
              clipPath: visible ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)',
              transition: `clip-path 0.85s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
