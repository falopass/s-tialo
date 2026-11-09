'use client'

/**
 * Conexion: envuelve cada servicio del rail. Cuando el bloque entra al
 * viewport, se marca .dv-on: el nodo y la derivación se iluminan (el
 * servicio "se conecta" a la pista principal) y el contenido aparece.
 * Con prefers-reduced-motion queda encendido desde el inicio y con una
 * red de seguridad por si el observador no dispara.
 */
import { useEffect, useRef, useState } from 'react'

export function Conexion({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
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
      { threshold: 0.12, rootMargin: '0px 0px -36px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOn(true), 2400)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [])

  return (
    <div ref={ref} className={`dv-item${on ? ' dv-on' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}
