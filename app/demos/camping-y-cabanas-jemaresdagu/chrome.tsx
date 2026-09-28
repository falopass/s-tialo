import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, IMG } from './content'

const NAV_LINKS = [
  { label: 'Postas', href: '#postas' },
  { label: 'Tarifas 2026', href: '#tarifas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const C = {
  cream: '#F4EFE3',
  forest: '#1E3D2F',
  wood: '#5B3A1E',
  gold: '#C8A24B',
  ink: '#24301F',
  muted: 'rgba(36,48,31,0.66)',
  line: 'rgba(36,48,31,0.18)',
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
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,227,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F4EFE3',
        }}
      />
      {children}
      <footer style={{ backgroundColor: C.forest }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} font-semibold text-2xl md:text-3xl mb-1`} style={{ color: '#F4EFE3' }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,227,0.74)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`transition-opacity hover:opacity-70 ${focusRing} tap-44`} style={{ color: '#F4EFE3' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: 'rgba(244,239,227,0.24)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,239,227,0.74)' }}>
              Datos reales de su ficha de Google e Instagram; tarifas temporada 2026 publicadas por el camping. Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#F4EFE3' }}>
                Sitiazo
              </a>
              .{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#F4EFE3' }}>
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
