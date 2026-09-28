import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, IMG } from './content'

const NAV_LINKS = [
  { label: 'Salidas', href: '#salidas' },
  { label: 'Cómo funciona', href: '#tracking' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'La sede', href: '#sede' },
]

const C = {
  navy: '#0B2B4A',
  azure: '#1B8BD0',
  cream: '#F6F3EC',
  ink: '#0E2233',
  muted: 'rgba(14,34,51,0.66)',
  line: 'rgba(14,34,51,0.16)',
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
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(246,243,236,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#F6F3EC',
        }}
      />
      {children}
      <footer style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} font-semibold text-2xl md:text-3xl mb-1 uppercase`} style={{ color: '#F6F3EC' }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,243,236,0.72)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`transition-opacity hover:opacity-70 ${focusRing} tap-44`} style={{ color: '#F6F3EC' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: 'rgba(246,243,236,0.22)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,243,236,0.72)' }}>
              Datos reales de su ficha de Google e Instagram; servicios de muestra. Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#F6F3EC' }}>
                Sitiazo
              </a>
              .{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#F6F3EC' }}>
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
