'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Entrada "de estante": cada pieza baja y se acomoda con un leve
 * rebote, una tras otra (delay). Igual que Reveal: solo transform y
 * opacity, con red de seguridad y prefers-reduced-motion.
 */
export function Estante({
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
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(-18px)',
              transition: `opacity 0.45s ease-out ${delay}ms, transform 0.7s cubic-bezier(0.3,1.45,0.55,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
