import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#visita' },
]

export const C = {
  papel: '#F4EEE0',
  tinta: '#1F2A1D',
  bosque: '#26432E',
  bosqueOsc: '#1B3423',
  mostaza: '#D9A62E',
  muted: '#5C6455',
  mutedOsc: 'rgba(244,238,224,0.72)',
  line: 'rgba(31,42,29,0.18)',
  lineOsc: 'rgba(244,238,224,0.22)',
  carta: '#FBF7EB',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export function Chrome({ children, fontClass = '' }: { children: React.ReactNode; fontClass?: string }) {
  return (
    <>
      <BlitzNav
        name="Luna Plena"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        fontClass={fontClass}
        theme={{
          over: 'light',
          bar: 'rgba(244,238,224,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.bosque,
          btnInk: '#F4EEE0',
        }}
      />
      {children}
      <footer style={{ backgroundColor: C.bosqueOsc }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} text-2xl md:text-3xl mb-1`} style={{ color: C.papel }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: C.mutedOsc }}>
                {BIZ.addressCorto}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`transition-opacity hover:opacity-60 ${focusRing} tap-44`}
                  style={{ color: C.papel }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: C.lineOsc }}>
            <p className="text-xs leading-relaxed" style={{ color: C.mutedOsc }}>
              Mockup preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`}
                style={{ color: C.papel }}
              >
                Sitiazo
              </a>
              : textos de muestra con datos y fotos reales de la ficha de Google Maps del hostal.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`}
                style={{ color: C.papel }}
              >
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
