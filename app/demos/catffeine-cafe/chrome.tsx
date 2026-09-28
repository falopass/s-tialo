'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

type NavTheme = {
  over: 'light' | 'dark'
  bar: string
  ink: string
  line: string
  btnBg: string
  btnInk: string
}

export function ChalkNav({
  logo,
  name,
  links,
  waLink,
  theme,
  fontClass = '',
  ctaLabel = 'WhatsApp',
}: {
  logo: string
  name: string
  links: { label: string; href: string }[]
  waLink: string
  theme: NavTheme
  fontClass?: string
  ctaLabel?: string
}) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overDark = theme.over === 'dark'
  const topInk = overDark ? 'rgba(245,239,226,0.97)' : theme.ink
  const topLink = overDark ? 'rgba(245,239,226,0.82)' : theme.ink

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-colors duration-500"
      style={{
        backgroundColor: scrolled ? theme.bar : 'transparent',
        backgroundImage:
          !scrolled && overDark
            ? 'linear-gradient(180deg, rgba(23,20,15,0.55) 0%, rgba(23,20,15,0) 100%)'
            : undefined,
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? `0 1px 0 ${theme.line}` : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a
          href="#inicio"
          className={`flex items-center gap-2.5 transition-colors duration-500 tap-44`}
          style={{ color: scrolled ? theme.ink : topInk }}
        >
          <span
            className="block w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full overflow-hidden shrink-0 transition-all duration-500"
            style={{ boxShadow: scrolled ? `0 0 0 1.5px ${theme.line}` : '0 0 0 1.5px rgba(245,239,226,0.5)' }}
          >
            <Image src={logo} alt="" width={38} height={38} className="w-full h-full object-cover" />
          </span>
          <span className={`${fontClass} font-bold text-lg md:text-xl leading-none`}>{name}</span>
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
                ? { backgroundColor: 'rgba(23,20,15,0.42)', color: '#F5EFE2', border: '1px solid rgba(245,239,226,0.5)' }
                : { backgroundColor: theme.btnBg, color: theme.btnInk }
          }
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
