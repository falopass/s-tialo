'use client'

import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav } from '../blitz-kit'
import { BIZ, IMG, WA_LINK } from './content'

const C = {
  ink: '#0D1219',
  steel: '#5B6B7C',
  blue: '#1663B0',
  line: 'rgba(255,255,255,0.16)',
}

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'Planta', href: '#planta' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'FAQ', href: '#faq' },
]

export function SiteNav({ fontClass }: { fontClass?: string }) {
  return (
    <BlitzNav
      name={BIZ.short}
      logoSrc={`${IMG}/marca.webp`}
      links={NAV_LINKS}
      waLink={WA_LINK}
      fontClass={fontClass}
      theme={{
        over: 'dark',
        bar: 'rgba(9,13,19,0.92)',
        ink: '#F2F6FA',
        line: C.line,
        btnBg: C.blue,
        btnInk: '#fff',
      }}
    />
  )
}

export function SiteFooter({ fontClass }: { fontClass?: string }) {
  return (
    <footer style={{ backgroundColor: '#0A0E14', color: '#EAF1F8' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
          <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} className="h-8 w-auto mb-2" />
          <p className={`${fontClass ?? ''} font-semibold text-xl mb-2 tracking-wide`}>{BIZ.name}</p>
          <address className="not-italic text-xs leading-relaxed" style={{ color: '#9FB0C2' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.region}
            <br />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <p className="text-xs" style={{ color: '#9FB0C2' }}>
          © {new Date().getFullYear()} {BIZ.name}
        </p>
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: '#9FB0C2' }}>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </div>
    </footer>
  )
}
