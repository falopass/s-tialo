'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Como Reveal pero el plato llega inclinado y se endereza al «servirse»
 * sobre la tabla: translateY + rotate que queda en cero. Solo transform
 * y opacity; con prefers-reduced-motion queda servido de una vez.
 */
export function Sirve({
  children,
  delay = 0,
  rotate = -5,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  rotate?: number
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
    // La misma red de seguridad que Reveal: nada queda invisible.
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
              transform: visible ? 'none' : `translateY(46px) rotate(${rotate}deg)`,
              transition: `opacity 0.9s cubic-bezier(0.2,0.65,0.25,1) ${delay}ms, transform 0.9s cubic-bezier(0.2,0.65,0.25,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}
