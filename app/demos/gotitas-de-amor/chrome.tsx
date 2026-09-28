import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ } from './content'

const NAV_LINKS = [
  { label: 'Niveles', href: '#niveles' },
  { label: 'Un día en el jardín', href: '#dia' },
  { label: 'Contacto', href: '#contacto' },
]

const C = {
  ink: '#2B3A4A',
  crema: '#FFF8EE',
  coral: '#F28C7D',
  muted: 'rgba(43,58,74,0.8)',
  line: 'rgba(43,58,74,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export function Chrome({ children, fontClass = '' }: { children: React.ReactNode; fontClass?: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink="#contacto"
        fontClass={fontClass}
        ctaLabel="Contacto"
        theme={{
          over: 'light',
          bar: 'rgba(255,248,238,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.coral,
          btnInk: C.ink,
        }}
      />
      {children}
      <footer style={{ backgroundColor: '#FFF1DE' }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} font-bold text-2xl md:text-3xl mb-1`} style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
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
              Datos de contacto pendientes de confirmar con el jardín. Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.ink }}>
                Sitiazo
              </a>
              : textos de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.ink }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>
      <WaFab href={whatsappLink('contacto')} label="Consultar por este demo a Sitiazo" />
    </>
  )
}
