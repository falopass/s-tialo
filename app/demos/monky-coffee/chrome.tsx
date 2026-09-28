'use client'

import { useEffect, useState } from 'react'
import { BIZ, WA_LINK } from './content'

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-40 transition-colors duration-300" style={{ backgroundColor: scrolled ? 'rgba(247,243,233,0.94)' : 'rgba(20,42,35,0.28)', backdropFilter: 'blur(10px)', boxShadow: scrolled ? '0 1px 0 rgba(20,42,35,0.16)' : 'none' }}>
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-4 px-5 md:h-[68px] md:px-8">
        <a href="#inicio" className="font-serif text-lg font-bold leading-none" style={{ color: scrolled ? '#16352B' : '#F7F3E9' }}>monky<span className="text-[#D5A441]">.</span></a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {[['El café', '#cafe'], ['La casa', '#casa'], ['Visítanos', '#contacto']].map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold" style={{ color: scrolled ? '#355449' : '#F7F3E9' }}>{label}</a>)}
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2.5 text-sm font-bold" style={{ backgroundColor: scrolled ? '#D5A441' : '#F7F3E9', color: '#16352B' }}>WhatsApp</a>
      </div>
    </header>
  )
}

export function WhatsAppFab() {
  return <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label={`Escribir por WhatsApp a ${BIZ.name}`} className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: '#25D366', color: '#fff' }}><span className="text-xl font-bold" aria-hidden="true">↗</span></a>
}
