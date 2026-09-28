'use client'

/**
 * app/demos/clinica-y-farmacia-veterinaria-angel-guardian/chrome.tsx
 *
 * Piezas con estado del mockup: barra superior que se tiñe al bajar,
 * hilo dorado de progreso de lectura, parallax sutil sobre las fotos a
 * sangre y revelado de texto al entrar en pantalla. Todo con Motion y
 * con salida estática cuando el usuario pide menos movimiento.
 *
 * Escala de z-index del demo: barra 40, hilo de progreso 50 (los
 * flotantes compartidos DemoBand y WaFab ya usan 50).
 */

import {
  motion,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export function TopBar({
  name,
  links,
  waLink,
  ctaLabel = 'WhatsApp',
  fontClass,
  theme,
}: {
  name: string
  links: { label: string; href: string }[]
  waLink: string
  ctaLabel?: string
  fontClass: string
  theme: {
    bar: string
    ink: string
    line: string
    accent: string
    solidBg: string
    solidInk: string
  }
}) {
  const [scrolled, setScrolled] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 64))
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  })

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="fixed top-0 inset-x-0 z-50 h-[2px] origin-left"
        style={{ scaleX: progress, backgroundColor: theme.accent }}
      />
      <header
        className="fixed top-0 inset-x-0 z-40 transition-colors duration-500"
        style={{
          backgroundColor: scrolled ? theme.bar : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? `0 1px 0 ${theme.line}` : 'none',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-[62px] md:h-[72px] flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className={`${fontClass} text-[15px] md:text-lg font-bold tracking-[-0.01em] leading-none`}
            style={{ color: theme.ink }}
          >
            {name}
          </a>
          <nav className="hidden md:flex items-center gap-8" aria-label="Principal">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm transition-opacity hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B98B4E]"
                style={{ color: theme.ink }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${fontClass} shrink-0 text-[13px] md:text-sm font-semibold px-4 py-2 rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B4E]`}
            style={
              scrolled
                ? { backgroundColor: theme.solidBg, color: theme.solidInk, borderColor: 'transparent' }
                : { backgroundColor: 'transparent', color: theme.ink, borderColor: 'rgba(245,239,230,0.5)' }
            }
          >
            {ctaLabel}
          </a>
        </div>
      </header>
    </>
  )
}

export function Parallax({
  src,
  alt,
  strength = 4.5,
  eager = false,
}: {
  src: string
  alt: string
  strength?: number
  eager?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`])

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        decoding="async"
        className="absolute inset-x-0 top-[-8%] w-full h-[116%] max-w-full object-cover"
        style={reduce ? undefined : { y }}
      />
    </div>
  )
}

export function Fade({
  children,
  delay = 0,
  y = 26,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.3, margin: '0px 0px -60px 0px' })
  // Red de seguridad: en celular el observador a veces no dispara y el
  // contenido quedaba invisible para siempre. A los 2s se muestra igual.
  const [forced, setForced] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setForced(true), 2000 + delay * 1000)
    return () => window.clearTimeout(t)
  }, [delay])
  const show = reduce || inView || forced

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      animate={show ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.75, delay: show && !inView ? 0 : delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
