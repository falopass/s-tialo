import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

const NAV_LINKS = [
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Qué encuentras', href: '#equipamiento' },
  { label: 'La sala', href: '#sala' },
  { label: 'Horario y ubicación', href: '#contacto' },
]

const C = {
  ink: '#0C0C0E',
  lime: '#C7F235',
  humo: '#F5F5F2',
  muted: 'rgba(12,12,14,0.66)',
  line: 'rgba(12,12,14,0.18)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export function Chrome({ children, fontClass = '' }: { children: React.ReactNode; fontClass?: string }) {
  return (
    <>
      <BlitzNav
        name="Body Fitness"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={fontClass}
        theme={{
          over: 'dark',
          bar: 'rgba(12,12,14,0.95)',
          ink: '#F5F5F2',
          line: 'rgba(245,245,242,0.18)',
          btnBg: C.lime,
          btnInk: '#0C0C0E',
        }}
      />
      {children}
      <footer className="border-t-2" style={{ backgroundColor: C.ink, borderColor: C.lime }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} font-normal text-2xl md:text-3xl mb-1 uppercase`} style={{ color: C.humo }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,245,242,0.72)' }}>
                {BIZ.address}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`transition-opacity hover:opacity-60 ${focusRing} tap-44`} style={{ color: C.lime }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: 'rgba(245,245,242,0.18)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,245,242,0.72)' }}>
              Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.humo }}>
                Sitiazo
              </a>
              : textos y datos de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.lime }}>
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
