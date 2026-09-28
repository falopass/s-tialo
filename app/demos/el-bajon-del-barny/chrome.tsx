'use client'

/**
 * app/demos/el-bajon-del-barny/chrome.tsx
 *
 * Piezas con estado del navegador: revelado al hacer scroll con
 * IntersectionObserver y red de seguridad (nada queda invisible en móvil),
 * barra superior sobre el hero y botón de WhatsApp flotante.
 */

import { useEffect, useRef, useState } from 'react'
import { BIZ, WA_LINK } from './content'

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

  useEffect(() => {
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
  }, [])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(28px)',
        transition: `opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms, transform 0.8s cubic-bezier(0.25,0.1,0.25,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Promo', href: '#promo' },
  { label: 'Horario', href: '#horario' },
  { label: 'Contacto', href: '#contacto' },
]

export function SiteNav({ fontClass }: { fontClass: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="absolute top-0 inset-x-0 z-40 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(19,16,12,0.94)' : 'transparent',
        backgroundImage: scrolled ? 'none' : 'linear-gradient(180deg, rgba(19,16,12,0.65), rgba(19,16,12,0))',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(255,210,63,0.15)' : 'none',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-[60px] flex items-center justify-between gap-4">
        <a href="#inicio" className={`${fontClass} text-sm md:text-base tracking-tight text-[#F7F2E8] uppercase`}>
          El Bajón <span style={{ color: '#FFD23F' }}>del Barny</span>
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium" style={{ color: 'rgba(247,242,232,0.85)' }}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-bold px-4 py-2 rounded-full transition-transform active:scale-95"
          style={{ backgroundColor: '#FFD23F', color: '#13100C' }}
        >
          Pedir
        </a>
      </div>
    </header>
  )
}

export function WhatsAppFab() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Escribir por WhatsApp a ${BIZ.name}`}
      className="fixed bottom-5 right-5 z-50 w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
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
