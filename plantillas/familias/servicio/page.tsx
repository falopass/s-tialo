/**
 * plantillas/familias/servicio/page.tsx — esqueleto «servicio»
 *
 * Para negocios que venden trabajo o horas: abogados, clínicas, talleres,
 * peluquerías, electricistas. Tipografía editorial (Fraunces + Inter),
 * servicios como lista numerada y datos en franja.
 *
 * armar.mjs copia este archivo tal cual a app/demos/<slug>/page.tsx: todos
 * los datos vienen de ./content y lo que falte aparece como «Falta: ...».
 * Las fuentes viven en app/fonts/: la ruta '../../fonts/...' es la correcta
 * una vez copiado el archivo (aquí solo se typechequea, no se sirve).
 */
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, WaFab } from '../blitz-kit'
import type { NavTheme } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SERVICIOS, FOTOS, WA_LINK } from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  bg: '#F7F4EE',
  soft: '#ECE7DB',
  ink: '#1C231F',
  muted: '#5D635A',
  mutedDark: '#C9C4B2',
  accent: '#2E5E4E',
  accentInk: '#F7F4EE',
  accentSoft: '#9FBCAD',
  line: 'rgba(28,35,31,0.16)',
  lineDark: 'rgba(247,244,238,0.25)',
}

const NAV: NavTheme = {
  over: 'light',
  bar: 'rgba(247,244,238,0.92)',
  ink: C.ink,
  line: C.line,
  btnBg: C.accent,
  btnInk: C.accentInk,
}

export const metadata: Metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.nombre} · ${BIZ.rubro} en ${BIZ.ciudad}`,
  description: `${BIZ.rubro} en ${BIZ.ciudad}. Consulta por WhatsApp.`,
  image: FOTOS[0]?.src,
})

/** «+56 9 1234 5678» si viene un celular chileno; si no, el número tal cual. */
function fmtFono(w: string): string {
  return /^569\d{8}$/.test(w) ? `+56 9 ${w.slice(3, 7)} ${w.slice(7)}` : `+${w}`
}

/** Marca el hueco de un dato que la ficha no trajo. Nunca se inventa. */
function Falta({ que, light = false }: { que: string; light?: boolean }) {
  return (
    <span
      className="inline-flex items-center border border-dashed px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.16em]"
      style={{
        borderColor: light ? C.lineDark : C.accent,
        color: light ? C.mutedDark : C.accent,
      }}
    >
      Falta: {que}
    </span>
  )
}

function Label({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className="font-mono text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-2.5"
      style={{ color: light ? C.accentSoft : C.accent }}
    >
      <span className="inline-block w-6 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function FotoSlot({
  foto,
  ratio = 'aspect-[4/3]',
  className = '',
}: {
  foto?: { src: string; alt: string }
  ratio?: string
  className?: string
}) {
  if (!foto) {
    return (
      <div
        className={`${ratio} ${className} flex items-center justify-center border border-dashed`}
        style={{ borderColor: C.line, backgroundColor: C.soft }}
      >
        <Falta que="foto" />
      </div>
    )
  }
  return (
    <div className={`${ratio} ${className} relative overflow-hidden`}>
      <Image
        src={foto.src}
        alt={foto.alt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El negocio', href: '#galeria' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Page() {
  const mapsUrl = BIZ.direccion
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${BIZ.nombre}, ${BIZ.direccion}, ${BIZ.ciudad}, Chile`,
      )}`
    : ''

  return (
    <div className={`min-h-screen ${body.className}`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={BIZ.nombre || 'Nombre del negocio'}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={NAV}
        fontClass={display.className}
      />

      {/* Inicio */}
      <section id="inicio" className="pt-[104px] md:pt-[150px] pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <div>
            <Label>{BIZ.rubro || 'Rubro'}</Label>
            <h1 className={`${display.className} text-4xl md:text-6xl leading-[1.05] mb-5 break-words`}>
              {BIZ.nombre || 'Nombre del negocio'}
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              {BIZ.ciudad ? `${BIZ.rubro} en ${BIZ.ciudad}. ` : ''}
              Agenda tu hora o consulta directo por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-semibold px-6 py-3 tap-44"
                style={{ backgroundColor: C.accent, color: C.accentInk }}
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href="#servicios"
                className="text-center text-sm font-semibold px-6 py-3 border tap-44"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Ver servicios
              </a>
            </div>
          </div>
          <div className="relative pr-3 pb-3">
            <div
              aria-hidden="true"
              className="absolute inset-0 border"
              style={{ borderColor: C.accent }}
            />
            <FotoSlot foto={FOTOS[0]} ratio="aspect-[4/5] md:aspect-[4/4.6]" className="relative" />
          </div>
        </div>
      </section>

      {/* Franja de datos: lo que no vino en la ficha queda marcado */}
      <div className="border-y" style={{ borderColor: C.line, backgroundColor: C.soft }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm"
          style={{ color: C.muted }}
        >
          <span className="font-semibold" style={{ color: C.ink }}>
            {BIZ.ciudad || <Falta que="ciudad" />}
          </span>
          <span>{BIZ.horario || <Falta que="horario" />}</span>
          <span>{BIZ.whatsapp ? fmtFono(BIZ.whatsapp) : <Falta que="teléfono" />}</span>
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Label>Servicios</Label>
        <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-10 md:mb-12`}>
          Lo que hacemos
        </h2>
        {SERVICIOS.length === 0 ? (
          <Falta que="servicios" />
        ) : (
          <ol>
            {SERVICIOS.map((s, i) => (
              <li
                key={`${s.nombre}-${i}`}
                className="border-t py-5 md:py-6 flex gap-5 md:gap-8 items-baseline"
                style={{ borderColor: C.line }}
              >
                <span
                  className={`${display.className} text-xl md:text-2xl shrink-0 w-11`}
                  style={{ color: C.accent }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="grow">
                  <h3 className="font-semibold text-lg md:text-xl mb-1">{s.nombre}</h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {s.linea}
                  </p>
                </div>
                {s.precio && (
                  <span className="min-w-0 text-right text-sm md:text-base font-semibold" style={{ color: C.accent }}>
                    {s.precio}
                  </span>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>

      {/* Galería: tres huecos de foto */}
      <section id="galeria" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Label>El negocio</Label>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-10 md:mb-12`}>
            El local y el trabajo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <FotoSlot key={i} foto={FOTOS[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Label light>Contacto</Label>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight mb-4`}>
              Hablemos
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.mutedDark }}>
              Escríbenos por WhatsApp y te respondemos. Aquí están los datos de
              contacto.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center text-sm font-semibold px-6 py-3 tap-44"
              style={{ backgroundColor: C.accent, color: C.accentInk }}
            >
              Escríbenos por WhatsApp
            </a>
          </div>
          <dl className="space-y-5 text-sm md:text-base self-start">
            <div>
              <dt className="font-semibold mb-1">Dirección</dt>
              <dd style={{ color: C.mutedDark }}>
                {BIZ.direccion ? `${BIZ.direccion}, ${BIZ.ciudad}` : <Falta que="dirección" light />}
                {mapsUrl && (
                  <>
                    {' '}
                    <a
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 tap-44"
                    >
                      Cómo llegar
                    </a>
                  </>
                )}
              </dd>
            </div>
            <div>
              <dt className="font-semibold mb-1">Teléfono</dt>
              <dd style={{ color: C.mutedDark }}>
                {BIZ.whatsapp ? (
                  <a href={`tel:+${BIZ.whatsapp}`} className="underline underline-offset-2 tap-44">
                    {fmtFono(BIZ.whatsapp)}
                  </a>
                ) : (
                  <Falta que="teléfono" light />
                )}
              </dd>
            </div>
            <div>
              <dt className="font-semibold mb-1">Horario</dt>
              <dd style={{ color: C.mutedDark }}>{BIZ.horario || <Falta que="horario" light />}</dd>
            </div>
          </dl>
        </div>
      </section>

      <footer className="border-t" style={{ borderColor: C.line }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row gap-2 sm:items-center justify-between text-xs"
          style={{ color: C.muted }}
        >
          <p>
            <span className="font-semibold" style={{ color: C.ink }}>
              {BIZ.nombre || 'Nombre del negocio'}
            </span>
            {' · '}
            {BIZ.rubro || 'Rubro'}
            {' · '}
            {BIZ.ciudad || 'Ciudad'}
          </p>
          <p>Demo de muestra · Sitiazo</p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Escríbenos por WhatsApp" />
    </div>
  )
}
