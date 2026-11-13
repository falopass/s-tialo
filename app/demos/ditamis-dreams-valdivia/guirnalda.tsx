'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * La guirnalda de banderines de Ditamis Dreams: una cuerda curva con
 * triángulos de colores que se tienden al entrar en pantalla
 * (aparecen escalonados con scale + opacity). Con `balanceo` además
 * se balancea una vez, como la del hero.
 */
export default function Guirnalda({
  colores,
  cuerda,
  balanceo = false,
  className = '',
}: {
  colores: string[]
  cuerda: string
  balanceo?: boolean
  className?: string
}) {
  const ref = useRef<SVGSVGElement>(null)
  const [on, setOn] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setOn(true)
      return
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    const t = window.setTimeout(() => setOn(true), 2000)
    return () => {
      io.disconnect()
      window.clearTimeout(t)
    }
  }, [])

  const N = 11
  const banderines = Array.from({ length: N }, (_, i) => {
    const t = 0.06 + (0.88 * i) / (N - 1)
    return { t, x: 1200 * t, y: 16 + 176 * t * (1 - t) }
  })

  return (
    <svg
      ref={ref}
      viewBox="0 0 1200 112"
      className={`dd-g ${balanceo ? 'dd-columpio ' : ''}block w-full h-auto${className ? ` ${className}` : ''}`}
      preserveAspectRatio="xMidYMin meet"
      aria-hidden="true"
    >
      <path
        d="M0 16 Q600 104 1200 16"
        fill="none"
        stroke={cuerda}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {banderines.map((b, i) => (
        <path
          key={i}
          d={`M ${b.x - 19} ${b.y + 1} L ${b.x + 19} ${b.y + 1} L ${b.x} ${b.y + 44} Z`}
          fill={colores[i % colores.length]}
          style={{
            transformBox: 'fill-box',
            transformOrigin: '50% 0%',
            transform: on ? 'scale(1)' : 'scale(0.15)',
            opacity: on ? 1 : 0,
            transition: `transform 0.55s cubic-bezier(0.3,1.5,0.5,1) ${i * 55}ms, opacity 0.4s ease ${i * 55}ms`,
          }}
        />
      ))}
    </svg>
  )
}
