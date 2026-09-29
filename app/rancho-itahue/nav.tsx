'use client'

import { useEffect, useId, useState } from 'react'

/**
 * Nav fijo de Rancho Itahue. Usa el logo horizontal que mandó el cliente
 * (negro + rojo sobre transparente): va dentro de una chapa blanca para que
 * se lea igual sobre la foto del hero que sobre el fondo claro. Bajo xl los
 * 8 enlaces no caben: se reemplazan por un menú hamburguesa de pantalla
 * completa en ancho.
 */
export function RanchoNav({
  logoSrc,
  links,
  waLink,
}: {
  logoSrc: string
  links: readonly { label: string; href: string }[]
  waLink: string
}) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const solid = scrolled || open

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-colors duration-500"
      style={{
        backgroundColor: solid ? 'rgba(251,250,247,0.96)' : 'transparent',
        backgroundImage: !solid
          ? 'linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)'
          : undefined,
        backdropFilter: solid ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(10px)' : 'none',
        boxShadow: solid ? '0 1px 0 rgba(44,44,40,0.12)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a href="#inicio" className="tap-44 flex items-center" aria-label="Rancho Itahue — inicio">
          {/* eslint-disable-next-line @next/next/no-img-element -- logo del cliente en public/ */}
          <img
            src={logoSrc}
            alt="Rancho Itahue — multiespacio, Molina"
            className="h-10 md:h-11 w-auto object-contain rounded-lg bg-white/95 px-3 py-2 shadow-sm"
          />
        </a>
        <nav className="hidden xl:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium transition-colors duration-500 tap-44"
              style={{ color: solid ? '#2C2C28' : 'rgba(255,255,255,0.85)' }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-500 active:scale-95 tap-44"
            style={
              solid
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            className="xl:hidden w-11 h-11 flex flex-col items-center justify-center gap-[5px] rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E20411]"
            style={
              solid
                ? { color: '#2C2C28' }
                : { color: '#fff', backgroundColor: 'rgba(0,0,0,0.4)' }
            }
          >
            {open ? (
              <svg viewBox="0 0 20 20" className="w-5 h-5" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M4 4l12 12M16 4L4 16" />
              </svg>
            ) : (
              <>
                <span className="block w-5 h-0.5 bg-current" aria-hidden="true" />
                <span className="block w-5 h-0.5 bg-current" aria-hidden="true" />
                <span className="block w-5 h-0.5 bg-current" aria-hidden="true" />
              </>
            )}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id={menuId}
          aria-label="Menú"
          className="xl:hidden px-5 pb-5 pt-1"
          style={{ backgroundColor: 'rgba(251,250,247,0.96)' }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-12 text-base font-semibold"
              style={{ color: '#2C2C28', borderBottom: '1px solid rgba(44,44,40,0.14)' }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center h-12 rounded-full text-sm font-bold active:scale-95 transition-transform"
            style={{ backgroundColor: '#E20411', color: '#fff' }}
          >
            Escribir por WhatsApp
          </a>
        </nav>
      )}
    </header>
  )
}
