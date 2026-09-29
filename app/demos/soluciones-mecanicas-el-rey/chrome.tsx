import { SITE, whatsappLink } from '@/lib/config'
import { BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK } from './content'

const NAV_LINKS = [
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Horario y mapa', href: '#contacto' },
]

// Identidad desde el afiche y el logo del taller: negro, amarillo taxi
// y azul royal (el "EL REY" del escudo).
export const C = {
  fondo: '#0D0D0B',
  panel: '#14140F',
  tinta: '#F2EFE4',
  tintaSuave: 'rgba(242,239,228,0.68)',
  tintaOscura: '#14120A',
  amarillo: '#F2C500',
  azul: '#7FA6FF',
  muted: 'rgba(242,239,228,0.56)',
  linea: 'rgba(242,239,228,0.14)',
  lineaFuerte: 'rgba(242,239,228,0.34)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export function Chrome({ children, fontClass = '' }: { children: React.ReactNode; fontClass?: string }) {
  return (
    <>
      <BlitzNav
        name="Soluciones El Rey"
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar hora"
        fontClass={fontClass}
        logoSrc="/demos/soluciones-mecanicas-el-rey/logo.webp"
        theme={{
          over: 'dark',
          bar: 'rgba(13,13,11,0.94)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.amarillo,
          btnInk: C.tintaOscura,
        }}
      />
      {children}
      <footer className="border-t" style={{ backgroundColor: '#0A0A08', borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${fontClass} uppercase font-semibold text-2xl md:text-3xl mb-1`} style={{ color: C.tinta }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: C.tintaSuave }}>
                {BIZ.addressCorto} · {BIZ.referencia}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`transition-opacity hover:opacity-60 ${focusRing} tap-44`}
                  style={{ color: C.tinta }}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: C.linea }}>
            <p className="text-xs leading-relaxed" style={{ color: C.tintaSuave }}>
              Mockup preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`}
                style={{ color: C.tinta }}
              >
                Sitiazo
              </a>
              : textos de muestra con datos, fotos y reseñas reales de la ficha de Google Maps
              del taller.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-2 ${focusRing} tap-44`}
                style={{ color: C.tinta }}
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
