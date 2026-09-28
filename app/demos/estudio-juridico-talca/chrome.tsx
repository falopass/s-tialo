import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ } from './content'

const NAV_LINKS = [
  { label: 'Áreas', href: '#areas' },
  { label: 'Cómo trabajamos', href: '#metodo' },
  { label: 'Ubicación', href: '#contacto' },
]

const C = {
  petroleo: '#12283A',
  marfil: '#F7F3EA',
  bronce: '#A4763A',
  ink: '#101820',
  muted: 'rgba(16,24,32,0.68)',
  line: 'rgba(16,24,32,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export function Chrome({ children, fontClass = '' }: { children: React.ReactNode; fontClass?: string }) {
  return (
    <>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={BIZ.instagramUrl}
        fontClass={fontClass}
        ctaLabel="Instagram"
        theme={{
          over: 'dark',
          bar: 'rgba(247,243,234,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: '#7A5C2E',
          btnInk: C.marfil,
        }}
      />
      {children}
      <footer className="border-t-2" style={{ backgroundColor: C.marfil, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} font-medium text-2xl md:text-3xl mb-1`} style={{ color: C.ink }}>
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
              Áreas de muestra; se ajustan con el estudio. Mockup preparado por{' '}
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
      <WaFab href={whatsappLink('contacto')} label="Consultar por este demo a Sitiazo" />
    </>
  )
}
