import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars, CallFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, RESENAS } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'refrigeracion-friotal',
  title: 'Refrigeración Friotal · Servicio técnico de línea blanca en Talca',
  description:
    'Taller de servicio técnico en 3 Norte 1421, Talca: refrigeradores, lavadoras, cocinas, aire acondicionado y repuestos de línea blanca. Demo de muestra.',
  image: `${IMG}/fachada.webp`,
})

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
  variable: '--font-disp',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
  variable: '--font-mono',
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900' }],
  variable: '--font-body',
})

// Paleta: azul noche de cámara de frío + celeste del letrero "AIRE ACONDICIONADO".
const C = {
  noche: '#0B2434',
  noche2: '#0E2E43',
  hielo: '#3FB0E5',
  hieloTxt: '#0E6E9E',
  hieloSuave: '#CBE7F6',
  papel: '#F2F6F8',
  carta: '#FFFFFF',
  tinta: '#10222E',
  muted: '#51636E',
  linea: '#D5E2EA',
} as const

const servicioTags = ['Neveras', 'Lavadoras', 'Cocinas', 'Aire acondicionado', 'Repuestos']

export default function FriotalPage() {
  return (
    <main
      className={`${display.variable} ${mono.variable} ${body.variable}`}
      style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Barra superior: wordmark de vitrina ───────────────── */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: C.papel, borderColor: C.linea }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[56px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-baseline gap-2 tap-44">
            <span
              className="text-xl tracking-wide"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: C.noche }}
            >
              FRIOTAL
            </span>
            <span
              className="hidden sm:inline text-[10px] tracking-[0.18em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
            >
              Servicio técnico · Talca
            </span>
          </a>
          <a
            href={TEL_LINK}
            className="text-sm font-semibold px-4 py-2 rounded-md tap-44"
            style={{ backgroundColor: C.noche, color: '#fff' }}
          >
            Llamar al taller
          </a>
        </div>
      </header>

      {/* ── Portada: titular de letrero + fachada real ────────── */}
      <section id="inicio" className="scroll-mt-14" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-10 md:pb-14">
          <Reveal>
            <p
              className="text-[11px] tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: 'var(--font-mono)', color: C.hieloSuave }}
            >
              3 Norte 1421 · Talca · línea blanca
            </p>
            <h1
              className="leading-[0.95] text-[44px] md:text-[72px] max-w-3xl"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: '#F4FBFF' }}
            >
              El taller que devuelve a la vida refrigeradores, lavadoras y cocinas
            </h1>
            <p className="mt-5 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(219,238,249,0.92)' }}>
              Refrigeración Friotal atiende el centro de Talca desde su local de 3 Norte: reparación de
              artefactos del hogar, venta e instalación de aire acondicionado y repuestos de línea blanca.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-md text-[15px] font-bold tap-44"
                style={{ backgroundColor: C.hielo, color: C.noche }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-md text-[15px] font-semibold border tap-44"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#EAF5FC' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <figure className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/fachada.webp`}
              alt="Fachada de Refrigeración Friotal en 3 Norte, Talca, con los letreros de servicio técnico y aire acondicionado"
              className="w-full max-h-[560px] object-cover object-center"
              loading="eager"
            />
            <figcaption
              className="absolute bottom-3 left-3 right-3 md:left-auto md:right-6 md:bottom-6 flex items-center gap-3 rounded-md px-4 py-3"
              style={{ backgroundColor: 'rgba(11,36,52,0.88)' }}
            >
              <Stars value={BIZ.rating} color={C.hielo} />
              <span className="text-sm font-semibold" style={{ color: '#EAF5FC' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Franja de datos (mono, tipo orden de trabajo) ─────── */}
      <section className="border-b" style={{ backgroundColor: C.carta, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2">
          {[
            ['OT-DIRECCIÓN', '3 Nte. 1421, Talca'],
            ['OT-HORARIO', 'Lun a Sáb, con colación'],
            ['OT-RATING', '4.1 estrellas en Google'],
            ['OT-CLIENTES', 'Familias de +20 años'],
          ].map(([k, v]) => (
            <p key={k} className="text-xs md:text-sm leading-snug" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
              <span style={{ color: C.hieloTxt }}>{k}</span> · <span style={{ color: C.tinta }}>{v}</span>
            </p>
          ))}
        </div>
      </section>

      {/* ── Orden de trabajo: servicios numerados ─────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className="text-[32px] md:text-[48px] leading-none"
            style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: C.noche }}
          >
            Lo que entra al taller
          </h2>
          <p className="mt-3 text-base max-w-xl" style={{ color: C.muted }}>
            El muro del local lo dice tal cual: refrigeradores, aspiradoras, enceradoras, lavadoras.
            A eso se suman el aire acondicionado, la ferretería del costado y los repuestos.
          </p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-[1fr_320px] gap-8 items-start">
          <ol className="grid sm:grid-cols-2 gap-3">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.ot} delay={i * 60}>
                <li
                  className="h-full rounded-md border p-5 flex flex-col gap-2"
                  style={{ backgroundColor: C.carta, borderColor: C.linea }}
                >
                  <span
                    className="text-[10px] tracking-[0.18em] uppercase"
                    style={{ fontFamily: 'var(--font-mono)', color: C.hieloTxt }}
                  >
                    {s.ot}
                  </span>
                  <h3
                    className="text-[21px] leading-tight"
                    style={{ fontFamily: 'var(--font-disp)', fontWeight: 600, color: C.noche }}
                  >
                    {s.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.d}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={150}>
            <figure
              className="rounded-md border overflow-hidden sticky top-20"
              style={{ borderColor: C.linea, backgroundColor: C.carta }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/servicios.webp`}
                alt="Detalle del muro del local de Friotal con el listado de servicio técnico pintado a mano"
                className="w-full object-cover"
                loading="lazy"
              />
              <figcaption
                className="px-4 py-3 text-[11px] leading-snug"
                style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
              >
                El muro habla solo: servicio técnico, aire acondicionado y ferretería en el mismo local.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── El taller ─────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.noche2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <figure className="rounded-md overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/taller.webp`}
                alt="Motor en reparación dentro del taller de Friotal"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <h2
              className="text-[30px] md:text-[42px] leading-none"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: '#F4FBFF' }}
            >
              Manos de taller, años de oficio
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(219,238,249,0.9)' }}>
              En el local de 3 Norte trabajan directo sobre el artefacto: motores, termostatos,
              compresores. Hay familias de Talca que llevan más de veinte años trayendo sus
              electrodomésticos al mismo mostrador.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: 'rgba(219,238,249,0.9)' }}>
              Quienes dejan reseña destacan lo mismo: buenos precios, servicio rápido y
              garantía real en el trabajo entregado.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Trabajos en terreno + reseñas ─────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <Reveal>
            <figure className="rounded-md overflow-hidden border h-full flex flex-col" style={{ borderColor: C.linea }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/aire.webp`}
                alt="Unidades de aire acondicionado instaladas por Friotal en el muro de un edificio"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
              <figcaption className="px-4 py-3 text-xs" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                Instalación de aire acondicionado: venta y montaje por el mismo equipo.
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className="text-[28px] md:text-[38px] leading-none mb-6"
                style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: C.noche }}
              >
                Lo que dicen en Google
              </h2>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 80}>
                  <blockquote
                    className="rounded-md border p-5"
                    style={{ backgroundColor: C.carta, borderColor: C.linea }}
                  >
                    <Stars value={r.s} color={C.hieloTxt} className="w-3.5 h-3.5" />
                    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                      “{r.t}”
                    </p>
                    <footer className="mt-3 text-xs" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                      {r.a} · Reseña de Google
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ficha técnica + mapa ──────────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-14 border-t" style={{ backgroundColor: C.carta, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12">
          <Reveal>
            <h2
              className="text-[30px] md:text-[42px] leading-none"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: C.noche }}
            >
              Ficha del local
            </h2>
            <dl className="mt-6 space-y-4">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                  Dirección
                </dt>
                <dd className="mt-1 text-base font-semibold" style={{ color: C.tinta }}>
                  {BIZ.address}, {BIZ.city} · {BIZ.region}
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                  Teléfono
                </dt>
                <dd className="mt-1">
                  <a href={TEL_LINK} className="text-base font-semibold underline underline-offset-4 tap-44" style={{ color: C.noche }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                  Horario
                </dt>
                <dd className="mt-1">
                  <table className="text-base">
                    <tbody>
                      {BIZ.hours.map((h) => (
                        <tr key={h.d}>
                          <td className="pr-4 py-0.5 font-semibold" style={{ color: C.tinta }}>{h.d}</td>
                          <td style={{ color: C.muted }}>{h.h}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em]" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                  Atiende
                </dt>
                <dd className="mt-1 flex flex-wrap gap-2">
                  {servicioTags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1.5 rounded-md border"
                      style={{ borderColor: C.linea, color: C.tinta, fontFamily: 'var(--font-mono)' }}
                    >
                      {t}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] flex flex-col gap-4">
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Refrigeración Friotal, 3 Norte 1421, Talca"
                className="w-full flex-1 min-h-[300px] rounded-md border"
                style={{ borderColor: C.linea }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/local.webp`}
                alt="El local de Friotal visto desde la vereda de 3 Norte un día de lluvia"
                className="w-full max-h-[200px] object-cover object-center rounded-md border"
                style={{ borderColor: C.linea }}
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <h2
              className="text-[30px] md:text-[44px] leading-tight"
              style={{ fontFamily: 'var(--font-disp)', fontWeight: 800, color: '#F4FBFF' }}
            >
              ¿Se quedó fría la nevera? Llama al taller
            </h2>
            <p className="mt-4 text-base max-w-md mx-auto" style={{ color: 'rgba(219,238,249,0.9)' }}>
              De lunes a sábado en 3 Norte 1421. Diagnóstico en el momento y repuestos en vitrina.
            </p>
            <a
              href={TEL_LINK}
              className="mt-7 inline-flex items-center justify-center h-[48px] px-8 rounded-md text-[15px] font-bold tap-44"
              style={{ backgroundColor: C.hielo, color: C.noche }}
            >
              Llamar: {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
        <footer className="border-t" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs"
            style={{ fontFamily: 'var(--font-mono)', color: 'rgba(219,238,249,0.7)' }}
          >
            <span>{BIZ.name} · {BIZ.address}, {BIZ.city}</span>
            <span>Demo de muestra · Fotos y reseñas reales de Google Maps</span>
          </div>
        </footer>
      </section>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.hielo} fg={C.noche} />
    </main>
  )
}
