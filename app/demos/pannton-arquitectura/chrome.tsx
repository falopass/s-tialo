'use client'

import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav } from '../blitz-kit'
import { BIZ, IMG, WA_LINK } from './content'

const C = {
  ink: '#1B140E',
  paper: '#FAF7F1',
  brick: '#A83A10',
  muted: '#5C5347',
  line: 'rgba(27,20,14,0.14)',
}

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reseñas', href: '#resenas' },
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
        over: 'light',
        bar: 'rgba(250,247,241,0.94)',
        ink: C.ink,
        line: C.line,
        btnBg: C.brick,
        btnInk: '#fff',
      }}
    />
  )
}

export function SiteFooter({ fontClass }: { fontClass?: string }) {
  return (
    <footer style={{ backgroundColor: C.ink, color: '#fff' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
        <div>
          <p className={`${fontClass ?? ''} font-semibold text-xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {BIZ.address}, {BIZ.city} · {BIZ.region}
            <br />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
          © {new Date().getFullYear()} {BIZ.name}
        </p>
      </div>
      {/* Aviso de mockup en el flujo; pb-6 deja libre la burbuja de WhatsApp */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
        <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
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
