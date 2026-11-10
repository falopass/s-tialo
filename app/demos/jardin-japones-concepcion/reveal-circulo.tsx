'use client'

/**
 * Revela su contenido con un círculo que crece desde una esquina cuando
 * entra al viewport. Va con la idea del demo (ondas en el agua): cada foto
 * del recorrido aparece como si una gota la hubiera abierto.
 */

import { useEffect, useRef, useState } from 'react'

const ESQUINAS = {
  tl: '0% 0%',
  tr: '100% 0%',
  bl: '0% 100%',
  br: '100% 100%',
} as const

export default function RevealCirculo({
  children,
  from = 'br',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  from?: keyof typeof ESQUINAS
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
      { threshold: 0.2, rootMargin: '0px 0px -48px' },
    )
    io.observe(el)
    // Red de seguridad: si el observador no dispara, la foto se muestra igual.
    const salvavidas = window.setTimeout(() => setVisible(true), 2400 + delay)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [delay])

  if (still) return <div ref={ref} className={className}>{children}</div>

  const esquina = ESQUINAS[from]
  return (
    <div
      ref={ref}
      className={className}
      style={{
        clipPath: visible ? `circle(142% at ${esquina})` : `circle(0% at ${esquina})`,
        transition: `clip-path 1.1s cubic-bezier(0.3,0.7,0.2,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
