/**
 * plantillas/familias/comida/page.tsx — esqueleto «comida»
 *
 * Para negocios donde se come o se toma algo: restaurantes, cafés,
 * food trucks, pastelerías, heladerías. Anton a lo grande, fondo cálido,
 * hero a sangre completa sobre foto oscurecida y la carta con líneas
 * punteadas.
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
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

const C = {
  bg: '#FBF5EA',
  soft: '#F1E6D2',
  ink: '#221710',
  muted: '#6B5B4C',
  accent: '#B8431F',
  accentTexto: '#8A3317',
  accentInk: '#FBF5EA',
  accentSoft: '#E7A98F',
  mutedDark: '#CBB9A5',
  line: 'rgba(34,23,16,0.16)',
  lineDark: 'rgba(251,245,234,0.28)',
}

const NAV: NavTheme = {
  over: 'dark',
  bar: 'rgba(34,23,16,0.9)',
  ink: C.bg,
  line: 'rgba(251,245,234,0.2)',
  btnBg: C.accent,
  btnInk: C.accentInk,
}

export const metadata: Metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.nombre} · ${BIZ.rubro} en ${BIZ.ciudad}`,
  description: `${BIZ.rubro} en ${BIZ.ciudad}. ${BIZ.reserva ? 'Pide o reserva' : 'Pide'} por WhatsApp.`,
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
        borderColor: light ? C.lineDark : C.accentTexto,
        color: light ? C.mutedDark : C.accentTexto,
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
      style={{ color: light ? C.accentSoft : C.accentTexto }}
    >
      {children}
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
    </p>
  )
}

function FotoSlot({
  foto,
  ratio = 'aspect-square',
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
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  )
}

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Visítanos', href: '#contacto' },
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
        ctaLabel="Pedir"
      />

      {/* Hero a sangre completa sobre la primera foto */}
      <section id="inicio" className="relative min-h-[78vh] flex items-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        {FOTOS[0] ? (
          <>
            <Image
              src={FOTOS[0].src}
              alt={FOTOS[0].alt}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(20,12,8,0.35) 0%, rgba(20,12,8,0.45) 45%, rgba(20,12,8,0.85) 100%)',
              }}
            />
          </>
        ) : (
          <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
            <Falta que="foto principal" light />
          </div>
        )}
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-12 md:pb-16" style={{ color: C.bg }}>
          <p
            className={`${display.className} inline-block uppercase text-sm md:text-base tracking-[0.12em] px-3 py-1 mb-5 -rotate-2`}
            style={{ backgroundColor: C.accent, color: C.accentInk }}
          >
            {BIZ.rubro || 'Rubro'}
          </p>
          <h1 className={`${display.className} uppercase text-5xl md:text-8xl leading-[0.95] mb-4 break-words`}>
            {BIZ.nombre || 'Nombre del negocio'}
          </h1>
          <p className="text-base md:text-lg mb-8 max-w-md" style={{ color: 'rgba(251,245,234,0.85)' }}>
            {BIZ.ciudad ? `${BIZ.ciudad}. ` : ''}
            {BIZ.reserva ? 'Pide o reserva por WhatsApp.' : 'Pide o consulta por WhatsApp.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-sm font-bold px-6 py-3 tap-44"
              style={{ backgroundColor: C.accent, color: C.accentInk }}
            >
              Pedir por WhatsApp
            </a>
            <a
              href="#carta"
              className="text-center text-sm font-bold px-6 py-3 tap-44"
              style={{ backgroundColor: 'rgba(20,12,8,0.5)', color: C.bg, border: `1px solid ${C.lineDark}` }}
            >
              Ver la carta
            </a>
          </div>
        </div>
      </section>

      {/* La carta: servicios como platos, sin precios inventados */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Label>La carta</Label>
        <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none mb-10 md:mb-12`}>
          Para pedir
        </h2>
        {SERVICIOS.length === 0 ? (
          <Falta que="la carta" />
        ) : (
          <ul>
            {SERVICIOS.map((s) => (
              <li key={s.nombre} className="border-b border-dashed py-4 md:py-5" style={{ borderColor: C.line }}>
                <div className="flex items-baseline gap-3 mb-1">
                  <h3 className="font-bold text-lg md:text-xl">{s.nombre}</h3>
                  {s.precio && (
                    <>
                      <span
                        aria-hidden="true"
                        className="flex-1 border-b border-dotted"
                        style={{ borderColor: C.line }}
                      />
                      <span className="shrink-0 font-bold text-base md:text-lg" style={{ color: C.accentTexto }}>
                        {s.precio}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: C.muted }}>
                  {s.linea}
                </p>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-8 text-sm" style={{ color: C.muted }}>
          Carta y precios del día: se confirman por WhatsApp.
        </p>
      </section>

      {/* El local: tres huecos de foto */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Label>El local</Label>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none mb-10 md:mb-12`}>
            Así se ve
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
            {[1, 2, 3].map((i) => (
              <FotoSlot key={i} foto={FOTOS[i]} />
            ))}
          </div>
        </div>
      </section>

      {/* Visítanos: horario y dirección, en oscuro */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Label light>Visítanos</Label>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none mb-6`}>
              Horario y dirección
            </h2>
            <dl className="space-y-5 text-sm md:text-base">
              <div>
                <dt className="font-bold mb-1">Dirección</dt>
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
                <dt className="font-bold mb-1">Horario</dt>
                <dd style={{ color: C.mutedDark }}>{BIZ.horario || <Falta que="horario" light />}</dd>
              </div>
              <div>
                <dt className="font-bold mb-1">Teléfono</dt>
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
            </dl>
          </div>
          <div className="self-center">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none mb-5`}>
              Pide por WhatsApp
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.mutedDark }}>
              {BIZ.reserva
                ? 'Pedidos, reservas y la carta del día, todo por el mismo canal.'
                : 'Pedidos y la carta del día, todo por el mismo canal.'}
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-center text-sm font-bold px-6 py-3 tap-44"
              style={{ backgroundColor: C.accent, color: C.accentInk }}
            >
              Escribir ahora
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.ink, borderTop: `1px solid ${C.lineDark}` }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row gap-2 sm:items-center justify-between text-xs"
          style={{ color: C.mutedDark }}
        >
          <p>
            <span className="font-bold" style={{ color: C.bg }}>
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

      <WaFab href={WA_LINK} label="Pedir por WhatsApp" />
    </div>
  )
}
