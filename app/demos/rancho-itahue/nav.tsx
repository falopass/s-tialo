'use client'

import { useEffect, useState } from 'react'

/**
 * Nav fijo de Rancho Itahue. Mismo patrón que BlitzNav pero el logo es un
 * bloque cuadrado de marca (gris + rojo) que no se puede recortar en círculo.
 */
export function RanchoNav({
  logoSrc,
  links,
  waLink,
}: {
  logoSrc: string
  links: { label: string; href: string }[]
  waLink: string
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(251,250,247,0.96)' : 'transparent',
        backgroundImage: !scrolled
          ? 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)'
          : undefined,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(44,44,40,0.12)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a href="#inicio" className="tap-44 flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
          <img src={logoSrc} alt="Logo de Rancho Itahue" className="h-9 w-9 md:h-10 md:w-10 object-contain" />
          <span
            className="font-semibold text-base md:text-lg leading-none transition-colors duration-500"
            style={{ color: scrolled ? '#2C2C28' : 'rgba(255,255,255,0.95)' }}
          >
            Rancho Itahue
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500 tap-44"
              style={{ color: scrolled ? '#2C2C28' : 'rgba(255,255,255,0.85)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-500 active:scale-95 tap-44"
          style={
            scrolled
              ? { backgroundColor: '#E20411', color: '#fff' }
              : {
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.5)',
                }
          }
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}
