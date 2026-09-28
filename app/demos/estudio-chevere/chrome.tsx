'use client'

import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav } from '../blitz-kit'
import { BIZ, IMG, WA_LINK } from './content'

const C = {
  ink: '#2B2119',
  cream: '#FAF3E7',
  red: '#C8232B',
  line: 'rgba(43,33,25,0.16)',
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Historia', href: '#historia' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
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
        over: 'light',
        bar: 'rgba(250,243,231,0.94)',
        ink: C.ink,
        line: C.line,
        btnBg: C.red,
        btnInk: '#FFF8E7',
      }}
    />
  )
}

export function SiteFooter({ fontClass }: { fontClass?: string }) {
  return (
    <footer style={{ backgroundColor: C.ink, color: '#FAF3E7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
        <div>
          <p className={`${fontClass ?? ''} text-xl mb-2`} style={{ color: '#F5D70E' }}>{BIZ.name}</p>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(250,243,231,0.68)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.region}
            <br />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <p className="text-xs" style={{ color: 'rgba(250,243,231,0.72)' }}>
          © {new Date().getFullYear()} {BIZ.name}
        </p>
      </div>
      <div style={{ borderTop: '1px solid rgba(250,243,231,0.15)' }}>
        <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(250,243,231,0.78)' }}>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FAF3E7' }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FAF3E7' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </div>
    </footer>
  )
}
