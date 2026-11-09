'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Cajón de estante: entra al hacer scroll con translateY + un leve
 * translateX desde el lado que indica `dir`, como un cajón que se abre.
 * Mismo patrón que Reveal de blitz-kit, con red de seguridad para que
 * nunca quede invisible y respeto a prefers-reduced-motion.
 */
export function Cajon({
  children,
  dir = 'left',
  delay = 0,
  className = '',
}: {
  children: React.ReactNode
  dir?: 'left' | 'right'
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

  const x = dir === 'left' ? -26 : 26

  return (
    <div
      ref={ref}
      className={className}
      style={
        still
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : `translate(${x}px, 30px)`,
              transition: `opacity 0.75s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 0.75s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
