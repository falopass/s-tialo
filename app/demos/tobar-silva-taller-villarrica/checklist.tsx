'use client'

/**
 * app/demos/tobar-silva-taller-villarrica/checklist.tsx
 *
 * La lista de servicios se comporta como el checklist de la pizarra
 * del taller: al entrar en vista, cada ítem aparece en orden y su
 * casilla se marca sola (el check se dibuja). Mismo patrón de
 * IntersectionObserver + red de seguridad que Reveal; con movimiento
 * reducido todo sale ya marcado y visible.
 */

import { useEffect, useRef, useState } from 'react'

export type CheckItem = {
  n: string
  name: string
  desc: string
}

export function CheckList({
  items,
  colors,
  className = '',
}: {
  items: readonly CheckItem[]
  colors: { line: string; num: string; box: string; check: string; desc: string }
  className?: string
}) {
  const ref = useRef<HTMLOListElement>(null)
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
      { threshold: 0.2, rootMargin: '0px 0px -32px' },
    )
    io.observe(el)
    const salvavidas = window.setTimeout(() => setOn(true), 2200)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
  }, [])

  return (
    <ol ref={ref} className={className}>
      {items.map((it, i) => {
        const d = i * 170
        return (
          <li
            key={it.n}
            className="flex items-start gap-4 border-b py-5 md:py-6 last:border-b-0"
            style={{
              borderColor: colors.line,
              opacity: on ? 1 : 0,
              transform: on ? 'none' : 'translateY(20px)',
              transition: `opacity 0.55s cubic-bezier(0.25,0.1,0.25,1) ${d}ms, transform 0.55s cubic-bezier(0.25,0.1,0.25,1) ${d}ms`,
            }}
          >
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center border-2"
              style={{ borderColor: colors.box }}
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M4.5 12.5 L9.8 18 L19.5 6.5"
                  stroke={colors.check}
                  strokeDasharray={24}
                  strokeDashoffset={on ? 0 : 24}
                  style={{ transition: `stroke-dashoffset 0.45s ease-out ${d + 240}ms` }}
                />
              </svg>
            </span>
            <div className="min-w-0">
              <p className="flex items-baseline gap-3">
                <span className="text-[11px] font-semibold tracking-[0.18em]" style={{ color: colors.num }}>
                  {it.n}
                </span>
                <span className="font-semibold text-base md:text-lg leading-snug">{it.name}</span>
              </p>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: colors.desc }}>{it.desc}</p>
            </div>
          </li>
        )
      })}
    </ol>
  )
}
