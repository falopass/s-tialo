'use client'

/**
 * LuzOn: los tratamientos aparecen como si se encendiera la luz del
 * equipo dental. Opacity sube con un leve scale, y un destello celeste
 * cae desde arriba (como la lámpara que cuelga sobre el sillón).
 * Solo transform y opacity; con prefers-reduced-motion queda visible
 * y estático. Misma red de seguridad que Reveal: si el observador no
 * dispara, el contenido se muestra igual.
 */

import { useEffect, useRef, useState } from 'react'

export function LuzOn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  const [still, setStill] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStill(true)
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
      { threshold: 0.2, rootMargin: '0px 0px -40px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOn(true), 2200 + delay)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [delay])

  return (
    <div
      ref={ref}
      className={`relative ${className} ${on ? 'ss-on' : ''}`}
      style={
        still
          ? undefined
          : {
              opacity: on ? 1 : 0,
              transform: on ? 'none' : 'scale(0.965)',
              transition: `opacity 0.8s ease-out ${delay}ms, transform 0.8s cubic-bezier(0.22,0.61,0.2,1) ${delay}ms`,
            }
      }
    >
      {!still && (
        <span
          className="ss-flash"
          style={{ animationDelay: `${delay}ms` }}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  )
}
