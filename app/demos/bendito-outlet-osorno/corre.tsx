'use client'

/**
 * Entrada al hacer scroll "como si se corriera la percha": un desplazamiento
 * corto en X más opacidad. Misma red de seguridad que Reveal (IntersectionObserver
 * + respaldo por tiempo) y prefers-reduced-motion deja todo visible.
 */
import { useEffect, useRef, useState } from 'react'

export function Corre({
  children,
  from = 'izq',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  from?: 'izq' | 'der'
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
      { threshold: 0.12, rootMargin: '0px 0px -32px' },
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
              transform: visible ? 'none' : `translateX(${from === 'izq' ? '-30px' : '30px'})`,
              transition: `opacity 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 0.7s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
