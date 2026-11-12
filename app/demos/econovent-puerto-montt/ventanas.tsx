'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Dispara la clase `ev-vista` cuando el bloque entra a pantalla: las hojas
 * de las ventanas dibujadas (corredera y abatir) animan su apertura con
 * transiciones CSS declaradas en page.tsx. Con prefers-reduced-motion
 * quedan abiertas desde el inicio, sin transición.
 */
export default function EnVista({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [vista, setVista] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVista(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVista(true)
          io.disconnect()
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -30px' },
    )
    io.observe(el)
    // Red de seguridad: si el observador no dispara, el contenido
    // igual termina en su estado abierto.
    const salvavidas = window.setTimeout(() => setVista(true), 2400)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [])

  return (
    <div ref={ref} className={`${className} ev-anim${vista ? ' ev-vista' : ''}`}>
      {children}
    </div>
  )
}
