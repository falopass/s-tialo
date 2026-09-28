'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function TagNav({
  logo,
  name,
  links,
  waLink,
  fontClass = '',
  ctaLabel = 'WhatsApp',
}: {
  logo: string
  name: string
  links: { label: string; href: string }[]
  waLink: string
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

  return (
    <header
      className="fixed top-0 inset-x-0 z-40 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(251,245,232,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(10px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(43,35,19,0.12)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 h-[60px] md:h-[68px] flex items-center justify-between gap-4">
        <a href="#inicio" className="flex items-center gap-2.5 tap-44" style={{ color: '#2B2313' }}>
          <span className="block w-[34px] h-[34px] md:w-[38px] md:h-[38px] rounded-full overflow-hidden shrink-0" style={{ boxShadow: '0 0 0 1.5px rgba(43,35,19,0.2)' }}>
            <Image src={logo} alt="" width={38} height={38} className="w-full h-full object-cover" />
          </span>
          <span className={`${fontClass} text-lg md:text-xl leading-none uppercase`}>{name}</span>
        </a>
        <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-semibold tap-44" style={{ color: '#2B2313' }}>
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 text-sm font-bold px-4 py-2 rounded-full text-white transition-all active:scale-95 tap-44"
          style={{ backgroundColor: '#3A7210' }}
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
