'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Entrada al hacer scroll como un pétalo que se despliega: la tarjeta
 * gira abriéndose desde una bisagra superior (rotateX) mientras sube.
 * Con prefers-reduced-motion queda visible y quieta desde el inicio.
 */
export function Petalo({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
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
  }, [delay])

  return (
    <div
      ref={ref}
      className={className}
      style={
        still
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'perspective(900px) rotateX(-26deg) translateY(22px)',
              transformOrigin: '50% 0%',
              transition: `opacity 0.85s cubic-bezier(0.22,0.68,0.26,1) ${delay}ms, transform 0.85s cubic-bezier(0.22,0.68,0.26,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
