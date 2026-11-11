/**
 * plantillas/familias/catalogo/page.tsx — esqueleto «catalogo»
 *
 * Para negocios que venden cosas: tiendas, distribuidoras, mueblerías,
 * minimarkets. Space Grotesk + IBM Plex Mono, grilla de productos con
 * etiquetas mono y cada tarjeta con su hueco de foto. Sin precios: se
 * consultan por WhatsApp.
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
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  bg: '#F5F5F0',
  soft: '#E9E9E0',
  ink: '#10151B',
  muted: '#565E66',
  accent: '#2743D8',
  accentInk: '#FFFFFF',
  accentSoft: '#9BACF2',
  mutedDark: '#B9BEC6',
  line: 'rgba(16,21,27,0.14)',
  lineDark: 'rgba(245,245,240,0.25)',
}

const NAV: NavTheme = {
  over: 'light',
  bar: 'rgba(245,245,240,0.92)',
  ink: C.ink,
  line: C.line,
  btnBg: C.accent,
  btnInk: C.accentInk,
}

export const metadata: Metadata = demoMetadata({
  slug: BIZ.slug,
  title: `${BIZ.nombre} · ${BIZ.rubro} en ${BIZ.ciudad}`,
  description: `${BIZ.rubro} en ${BIZ.ciudad}. Precios y stock por WhatsApp.`,
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
      className={`${mono.className} inline-flex items-center border border-dashed px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]`}
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
      className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`}
      style={{ color: light ? C.accentSoft : C.accent }}
    >
      [ {children} ]
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
        className={`${ratio} ${className} flex items-center justify-center border-b border-dashed`}
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
        sizes="(max-width: 640px) 50vw, 33vw"
      />
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'La tienda', href: '#contacto' },
]

export default function Page() {
  const mapsUrl = BIZ.direccion
    ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        `${BIZ.nombre}, ${BIZ.direccion}, ${BIZ.ciudad}, Chile`,
      )}`
    : ''

  return (
    <div className={`min-h-screen ${display.className}`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={BIZ.nombre || 'Nombre del negocio'}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={NAV}
      />

      {/* Banner: titular + primera foto en marco */}
      <section id="inicio" className="pt-[104px] md:pt-[140px] pb-14 md:pb-20 border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
            <div>
              <Label>{BIZ.rubro || 'Rubro'}</Label>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight mb-5 break-words">
                {BIZ.nombre || 'Nombre del negocio'}
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                {BIZ.ciudad ? `${BIZ.rubro} en ${BIZ.ciudad}. ` : ''}
                Precios y stock al día: se consultan por WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#productos"
                  className={`${mono.className} text-center text-sm font-semibold px-6 py-3 tap-44`}
                  style={{ backgroundColor: C.accent, color: C.accentInk }}
                >
                  Ver productos
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-center text-sm font-semibold px-6 py-3 border tap-44`}
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
            <div className="border p-2" style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}>
              <FotoSlot foto={FOTOS[0]} ratio="aspect-[4/3]" />
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] pt-2`} style={{ color: C.muted }}>
                {BIZ.ciudad || <Falta que="ciudad" />}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Productos: una tarjeta por servicio/producto, foto en cada hueco */}
      <section id="productos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Label>Productos</Label>
        <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-10 md:mb-12">
          Lo que hay
        </h2>
        {SERVICIOS.length === 0 ? (
          <Falta que="productos" />
        ) : (
          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {SERVICIOS.map((s, i) => (
              <li
                key={`${s.nombre}-${i}`}
                className="border flex flex-col"
                style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}
              >
                <FotoSlot foto={FOTOS[i + 1]} />
                <div className="p-3.5 md:p-5 flex flex-col gap-1.5 grow">
                  <h3 className="font-bold text-sm md:text-lg leading-snug">{s.nombre}</h3>
                  <p className="text-xs md:text-sm leading-relaxed grow" style={{ color: C.muted }}>
                    {s.linea}
                  </p>
                  {s.precio && (
                    <p className={`${mono.className} mt-1.5 text-sm md:text-base font-semibold`} style={{ color: C.ink }}>
                      {s.precio}
                    </p>
                  )}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} mt-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.14em] underline underline-offset-4 tap-44 self-start`}
                    style={{ color: C.accent }}
                  >
                    Consultar
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
        {SERVICIOS.some((s) => !s.precio) && (
          <p className={`${mono.className} mt-8 text-xs`} style={{ color: C.muted }}>
            {SERVICIOS.some((s) => s.precio)
              ? '// Lo que no tiene precio se confirma por WhatsApp.'
              : '// Sin precios publicados: se confirman por WhatsApp.'}
          </p>
        )}
      </section>

      {/* La tienda */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Label light>La tienda</Label>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-6">
              Pasa a vernos
            </h2>
            <dl className="space-y-5 text-sm md:text-base">
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.accentSoft }}>
                  Dirección
                </dt>
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
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.accentSoft }}>
                  Horario
                </dt>
                <dd style={{ color: C.mutedDark }}>{BIZ.horario || <Falta que="horario" light />}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-1`} style={{ color: C.accentSoft }}>
                  Teléfono
                </dt>
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
            <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight mb-5">
              Consulta por WhatsApp
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.mutedDark }}>
              Precio, stock y encargos: todo se responde por el mismo chat.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block text-center text-sm font-semibold px-6 py-3 tap-44`}
              style={{ backgroundColor: C.accent, color: C.accentInk }}
            >
              Consultar ahora
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
          <p className={mono.className}>Demo de muestra · Sitiazo</p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
    </div>
  )
}
