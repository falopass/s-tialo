'use client'

/**
 * app/demos/blitz-kit.tsx
 *
 * Piezas con estado compartidas por los mockups personalizados del
 * blitz de muestras (triadent, one-health, homyvet, altos-de-lircay,
 * jd-abogados, santa-fe): reveal al hacer scroll, nav sticky con tema
 * propio, estrellas de rating, FAQ y FAB de WhatsApp. Cada demo define
 * su paleta y tipografías en su page.tsx.
 */

import { useEffect, useId, useRef, useState } from 'react'

export function Reveal({
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
      { threshold: 0.15, rootMargin: '0px 0px -40px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={
        still
          ? undefined
          : {
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(28px)',
              transition: `opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 0.8s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
            }
      }
    >
      {children}
    </div>
  )
}

// ── Nav sticky themable ──────────────────────────────────────

export type NavTheme = {
  /** 'dark' cuando el nav transparente cae sobre una escena oscura */
  over: 'light' | 'dark'
  bar: string
  ink: string
  line: string
  btnBg: string
  btnInk: string
}

export function BlitzNav({
  name,
  links,
  waLink,
  theme,
  fontClass = '',
}: {
  name: string
  links: { label: string; href: string }[]
  waLink: string
  theme: NavTheme
  fontClass?: string
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overDark = theme.over === 'dark'
  const topInk = overDark ? 'rgba(255,255,255,0.95)' : theme.ink
  const topLink = overDark ? 'rgba(255,255,255,0.8)' : theme.ink

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? theme.bar : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? `0 1px 0 ${theme.line}` : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className={`${fontClass} text-lg md:text-xl leading-none transition-colors duration-500`}
          style={{ color: scrolled ? theme.ink : topInk }}
        >
          {name}
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500"
              style={{ color: scrolled ? theme.ink : topLink }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-500 active:scale-95"
          style={
            scrolled
              ? { backgroundColor: theme.btnBg, color: theme.btnInk }
              : overDark
                ? {
                    backgroundColor: 'rgba(255,255,255,0.14)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.5)',
                  }
                : { backgroundColor: theme.btnBg, color: theme.btnInk }
          }
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

// ── Estrellas de rating (media estrella incluida) ────────────

export function Stars({
  value,
  color,
  className = 'w-4 h-4',
}: {
  value: number
  color: string
  className?: string
}) {
  const gid = useId().replace(/[^a-zA-Z0-9]/g, '')
  const rounded = Math.round(value * 2) / 2
  const full = Math.floor(rounded)
  const half = rounded % 1 !== 0

  return (
    <span
      className="inline-flex gap-0.5"
      role="img"
      aria-label={`${value} de 5 estrellas`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 20 20"
          className={className}
          aria-hidden="true"
        >
          {i === full && half && (
            <defs>
              <linearGradient id={gid}>
                <stop offset="50%" stopColor={color} />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          )}
          <path
            d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z"
            fill={
              i < full ? color : i === full && half ? `url(#${gid})` : 'none'
            }
            stroke={color}
            strokeWidth="1.4"
          />
        </svg>
      ))}
    </span>
  )
}

// ── FAQ acordeón ─────────────────────────────────────────────

export function FaqList({
  items,
  colors,
}: {
  items: { q: string; a: string }[]
  colors: { q: string; a: string; line: string; plusBg: string; plusInk: string }
}) {
  return (
    <div className="max-w-3xl">
      {items.map((f, i) => (
        <Reveal key={f.q} delay={i * 80}>
          <details
            className="group border-b py-5"
            style={{ borderColor: colors.line }}
          >
            <summary
              className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base md:text-lg"
              style={{ color: colors.q }}
            >
              {f.q}
              <span
                className="shrink-0 w-[30px] h-[30px] rounded-full flex items-center justify-center text-lg leading-none transition-transform group-open:rotate-45"
                style={{ backgroundColor: colors.plusBg, color: colors.plusInk }}
                aria-hidden="true"
              >
                +
              </span>
            </summary>
            <p
              className="text-sm md:text-base leading-relaxed mt-3 max-w-2xl"
              style={{ color: colors.a }}
            >
              {f.a}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  )
}

// ── Botón flotante de WhatsApp (48px) ────────────────────────

export function WaFab({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="fixed bottom-4 right-4 z-50 w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: '#25D366' }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[24px] h-[24px]"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
    </a>
  )
}
