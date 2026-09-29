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
    // Red de seguridad: si el observador no dispara (móviles lentos, navegadores raros),
    // el contenido se muestra igual pasado un momento — nunca debe quedar invisible.
    const salvavidas = window.setTimeout(() => setVisible(true), 2200 + delay)
    return () => {
      io.disconnect()
      window.clearTimeout(salvavidas)
    }
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
  ctaLabel = 'WhatsApp',
  logoSrc,
}: {
  name: React.ReactNode
  links: { label: string; href: string }[]
  waLink: string
  theme: NavTheme
  fontClass?: string
  ctaLabel?: string
  logoSrc?: string
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
        // Velo oscuro cuando el nav transparente cae sobre una escena o foto:
        // el texto blanco necesita fondo oscuro para leerse (regla de contraste móvil).
        backgroundImage:
          !scrolled && overDark
            ? 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)'
            : undefined,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? `0 1px 0 ${theme.line}` : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className={`${fontClass} text-lg md:text-xl leading-none transition-colors duration-500 tap-44 flex items-center gap-2.5 min-w-0`}
          style={{ color: scrolled ? theme.ink : topInk }}
        >
          {logoSrc && (
            // eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/
            <img src={logoSrc} alt="" className="h-8 w-8 shrink-0 rounded-full object-cover" aria-hidden="true" />
          )}
          <span className="truncate">{name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500 tap-44"
              style={{ color: scrolled ? theme.ink : topLink }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target={waLink.startsWith('#') ? undefined : '_blank'}
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-500 active:scale-95 tap-44"
          style={
            scrolled
              ? { backgroundColor: theme.btnBg, color: theme.btnInk }
              : overDark
                ? {
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.5)',
                  }
                : { backgroundColor: theme.btnBg, color: theme.btnInk }
          }
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}

// ── Estrellas de rating (media estrella incluida) ────────────

export function Stars({
  value,
  color = 'currentColor',
  size,
  className = 'w-4 h-4',
}: {
  value: number
  color?: string
  size?: number
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
          style={size ? { width: size, height: size } : undefined}
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
              className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base md:text-lg tap-44"
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

// ── Botón flotante de llamada (pymes que solo tienen fijo) ──

export function CallFab({
  href,
  label,
  bg = '#1F2937',
  fg = '#fff',
}: {
  href: string
  label: string
  bg?: string
  fg?: string
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="fixed bottom-4 right-4 z-50 w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: bg }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[22px] h-[22px]"
        fill="none"
        stroke={fg}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </a>
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
