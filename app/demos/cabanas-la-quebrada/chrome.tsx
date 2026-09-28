'use client'

/**
 * app/demos/cabanas-la-quebrada/chrome.tsx
 *
 * Piezas con estado del navegador: barra superior sobre el hero,
 * revelado al hacer scroll (IntersectionObserver) y botón de WhatsApp
 * para el footer (en flujo, nada flotante que tape el contenido).
 */

import { useEffect, useRef, useState } from 'react'
import { WA_LINK } from './content'

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
    // Red de seguridad: si el observador no dispara, el contenido se muestra igual.
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
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'El patio', href: '#patio' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteNav({ name, fontClass }: { name: string; fontClass: string }) {
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
        backgroundColor: scrolled ? 'rgba(244,240,226,0.94)' : 'transparent',
        backgroundImage: scrolled ? 'none' : 'linear-gradient(180deg, rgba(22,40,28,0.6), rgba(22,40,28,0))',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(33,48,31,0.14)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className={`${fontClass} text-lg md:text-xl leading-none transition-colors duration-500 tap-44`}
          style={{ color: scrolled ? '#2C5237' : '#F4F0E2' }}
        >
          {name}
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500 tap-44"
              style={{ color: scrolled ? '#3D5548' : 'rgba(244,240,226,0.88)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-500 active:scale-95 tap-44"
          style={
            scrolled
              ? { backgroundColor: '#2C5237', color: '#F4F0E2' }
              : { backgroundColor: 'rgba(22,40,28,0.45)', color: '#F4F0E2', border: '1px solid rgba(244,240,226,0.5)' }
          }
        >
          WhatsApp
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
      aria-label="Escribir por WhatsApp a Cabañas La Quebrada"
      className="shrink-0 w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95 tap-44"
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
