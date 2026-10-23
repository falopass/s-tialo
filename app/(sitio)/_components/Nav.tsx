'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { List, X } from '@phosphor-icons/react/dist/ssr'
import { Logo } from './Logo'
import { CTA_DEMO, linkDemo } from '../_lib/contacto'

const LINKS = [
  { label: 'Cómo funciona', href: '/como-funciona/' },
  { label: 'Planes', href: '/planes/' },
  { label: 'Casos', href: '/casos/' },
  { label: 'Contacto', href: '/contacto/' },
]

function activo(pathname: string, href: string) {
  const base = href.replace(/\/$/, '')
  return pathname === base || pathname === href || pathname.startsWith(`${base}/`)
}

export function Nav() {
  const pathname = usePathname()
  const [abierto, setAbierto] = useState(false)

  useEffect(() => setAbierto(false), [pathname])

  useEffect(() => {
    if (!abierto) return
    const html = document.documentElement
    html.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setAbierto(false)
    window.addEventListener('keydown', onKey)
    return () => {
      html.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [abierto])

  return (
    <header className="s-nav fixed inset-x-0 top-0 z-50 border-b border-(--s-linea) bg-(--s-tinta)/85 backdrop-blur-md">
      <div className="s-wrap flex h-(--s-nav-h) items-center justify-between gap-6">
        <Logo className="h-5 md:h-6" />

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={activo(pathname, l.href) ? 'page' : undefined}
              className="text-[15px] text-(--s-crema-2) transition-colors hover:text-(--s-crema) aria-[current=page]:text-(--s-crema) aria-[current=page]:underline aria-[current=page]:decoration-(--s-amarillo) aria-[current=page]:decoration-2 aria-[current=page]:underline-offset-8"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={linkDemo()} target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primario hidden min-h-11 px-5 text-[15px] sm:inline-flex">
            {CTA_DEMO}
          </a>
          <button
            type="button"
            onClick={() => setAbierto((v) => !v)}
            aria-expanded={abierto}
            aria-controls="s-menu"
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            className="-mr-2 grid size-11 place-items-center text-(--s-crema) lg:hidden"
          >
            {abierto ? <X size={24} weight="regular" /> : <List size={24} weight="regular" />}
          </button>
        </div>
      </div>

      <div
        id="s-menu"
        hidden={!abierto}
        className="fixed inset-x-0 top-(--s-nav-h) bottom-0 overflow-y-auto bg-(--s-tinta) lg:hidden"
      >
        <nav aria-label="Menú" className="s-wrap flex min-h-full flex-col justify-between gap-12 py-10">
          <ul className="flex flex-col gap-5">
            {[{ label: 'Inicio', href: '/' }, ...LINKS, { label: 'Notas', href: '/blog/' }, { label: 'Sobre el estudio', href: '/sobre/' }].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  aria-current={l.href !== '/' && activo(pathname, l.href) ? 'page' : undefined}
                  className="s-display block text-[2.4rem] leading-none text-(--s-crema) aria-[current=page]:italic"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a href={linkDemo()} target="_blank" rel="noopener noreferrer" className="s-btn s-btn-primario w-full">
            {CTA_DEMO}
          </a>
        </nav>
      </div>
    </header>
  )
}
