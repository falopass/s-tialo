import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

const NAV_LINKS = [
  { label: 'Qué hacemos', href: '#servicios' },
  { label: 'Cómo funciona', href: '#pasos' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horario y ubicación', href: '#contacto' },
]

const C = {
  ink: '#111418',
  bone: '#F6F4EE',
  yellow: '#F2B705',
  muted: 'rgba(17,20,24,0.66)',
  line: 'rgba(17,20,24,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export function Chrome({ children, fontClass = '' }: { children: React.ReactNode; fontClass?: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.shortName}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={fontClass}
        theme={{
          over: 'dark',
          bar: 'rgba(246,244,238,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.yellow,
          btnInk: C.ink,
        }}
      />
      {children}
      <footer className="border-t-2" style={{ backgroundColor: C.bone, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} font-semibold text-2xl md:text-3xl mb-1 uppercase`} style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`transition-opacity hover:opacity-60 ${focusRing} tap-44`} style={{ color: C.ink }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: C.line }}>
            <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
              Servicios de muestra; se ajustan con el local. Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.ink }}>
                Sitiazo
              </a>
              : textos y datos de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.ink }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </>
  )
}
