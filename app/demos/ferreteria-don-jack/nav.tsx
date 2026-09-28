'use client'

import { useEffect, useState } from 'react'

/**
 * Nav local del demo Don Jack. Igual que BlitzNav pero con un velo
 * oscuro detrás del texto cuando flota sobre la portada, para que el
 * texto blanco quede legible sobre la foto.
 */
export function TopNav({
  name,
  links,
  waLink,
  fontClass = '',
  theme,
}: {
  name: string
  links: { label: string; href: string }[]
  waLink: string
  fontClass?: string
  theme: { bar: string; ink: string; line: string; btnBg: string; btnInk: string }
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
        backgroundColor: scrolled ? theme.bar : 'transparent',
        backgroundImage: scrolled ? 'none' : 'linear-gradient(180deg, rgba(28,40,20,0.6) 0%, rgba(28,40,20,0.35) 60%, rgba(28,40,20,0) 100%)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? `0 1px 0 ${theme.line}` : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className={`${fontClass} text-lg md:text-xl leading-none transition-colors duration-500 tap-44`}
          style={{ color: scrolled ? theme.ink : 'rgba(255,255,255,0.95)' }}
        >
          {name}
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500 tap-44"
              style={{ color: scrolled ? theme.ink : 'rgba(255,255,255,0.8)' }}
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
              ? { backgroundColor: theme.btnBg, color: theme.btnInk }
              : {
                  backgroundColor: 'rgba(255,255,255,0.14)',
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
