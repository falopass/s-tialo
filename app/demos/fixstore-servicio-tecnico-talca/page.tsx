import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HOURS, REVIEWS } from './content'

const IMG = '/demos/fixstore-servicio-tecnico-talca'

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
  base: '#0B0F19',
  panel: '#10182B',
  panelUp: '#141F38',
  ink: '#F4F7FF',
  muted: '#97A3BE',
  faint: '#66728E',
  accent: '#3D7BFF',
  accentInk: '#0B0F19',
  accentSoft: 'rgba(61,123,255,0.14)',
  line: 'rgba(148,163,184,0.16)',
  lineStrong: 'rgba(61,123,255,0.4)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'fixstore-servicio-tecnico-talca',
  title: 'Fix Store - Servicio Técnico de Celulares en Talca',
  description:
    'Reparación de celulares en 1 Norte, Talca. Pantallas, baterías, cámaras y placa. Escríbenos por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Reparaciones', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#ubicacion' },
]

const STATIONS = [
  { n: '01', t: 'Recepción', d: 'Cuéntanos la falla por WhatsApp o pasa al local.' },
  { n: '02', t: 'Diagnóstico', d: 'Revisamos el equipo y te decimos qué tiene y cuánto sale.' },
  { n: '03', t: 'Reparación', d: 'Trabajo en el mesón, con repuestos probados.' },
  { n: '04', t: 'Entrega', d: 'Te avisamos y lo retiras funcionando el mismo día.' },
]

const SERVICES = [
  {
    code: 'PANT',
    t: 'Pantalla quebrada o sin imagen',
    d: 'Cambio de módulo completo: vidrio, táctil y brillo como nuevos.',
  },
  {
    code: 'BAT',
    t: 'Batería que no dura nada',
    d: 'Reemplazo de batería para recuperar la autonomía de tu día.',
  },
  {
    code: 'CAM',
    t: 'Cámara, chasis y tapa trasera',
    d: 'Vidrio de cámara, marco doblado y tapa suelta vuelven a su lugar.',
  },
  {
    code: 'PLAC',
    t: 'Placa y fallas difíciles',
    d: 'No enciende, se reinicia o se mojó: diagnóstico en el banco.',
  },
  {
    code: 'ACC',
    t: 'Accesorios en el local',
    d: 'Carcasas, láminas y cargadores para dejarlo protegido al salir.',
  },
]

function Tag({ children, onDark = true }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em]`}
      style={{
        color: onDark ? C.accent : C.muted,
        backgroundColor: onDark ? 'rgba(11,15,25,0.72)' : 'transparent',
        border: `1px solid ${onDark ? C.lineStrong : C.line}`,
      }}
    >
      <span
        aria-hidden
        className="inline-block h-[7px] w-[7px]"
        style={{ backgroundColor: C.accent, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 50%)' }}
      />
      {children}
    </span>
  )
}

export default function FixstoreDemo() {
  return (
    <main className={display.className} style={{ backgroundColor: C.base, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.short}`}
              width={30}
              height={30}
              className="rounded-full bg-white object-contain p-[2px]"
            />
            <span className="font-semibold tracking-tight">{BIZ.short}</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{ over: 'dark', bar: 'rgba(11,15,25,0.92)', ink: C.ink, line: C.line, btnBg: C.accent, btnInk: '#FFFFFF' }}
        fontClass={display.className}
      />

      {/* ── HERO / APERTURA DE ORDEN ─────────────────────────── */}
      <section id="inicio" className="relative min-h-[100svh] flex items-end overflow-hidden">
        <Image
          src={`${IMG}/local-galeria.webp`}
          alt={`Local de ${BIZ.short} en Galería de 1 Norte, Talca`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,15,25,0.55) 0%, rgba(11,15,25,0.35) 35%, rgba(11,15,25,0.9) 62%, #0B0F19 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 pt-36 w-full">
          <Reveal>
            <Tag>Orden de reparación - Talca</Tag>
            <h1 className="mt-4 text-[38px] leading-[1] md:text-7xl font-bold tracking-tight">
              Tu celular roto,<br className="md:hidden" /> listo hoy en Talca.
            </h1>
            <p className="mt-4 text-[15px] md:text-lg max-w-md" style={{ color: C.muted }}>
              Servicio técnico especializado en pleno centro de Talca. Diagnóstico claro antes de tocar tu equipo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex h-[50px] items-center gap-2.5 rounded-full px-6 text-[15px] font-semibold"
                style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
              >
                Abrir orden por WhatsApp
              </a>
              <div
                className="inline-flex h-[50px] items-center gap-2.5 rounded-full px-5"
                style={{ border: `1px solid ${C.lineStrong}`, backgroundColor: 'rgba(11,15,25,0.55)' }}
              >
                <Stars value={BIZ.rating} color={C.accent} className="w-3.5 h-3.5" />
                <span className={`${mono.className} text-[11px] font-semibold tracking-wider`}>
                  {BIZ.ratingLabel} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ESTACIONES DE LA ORDEN ───────────────────────────── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10">
          <ol className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {STATIONS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90} className="relative">
                <li>
                  <span
                    className={`${mono.className} text-[11px] font-semibold tracking-[0.25em]`}
                    style={{ color: C.accent }}
                  >
                    ESTACIÓN {s.n}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{s.t}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {s.d}
                  </p>
                </li>
                {i < STATIONS.length - 1 && (
                  <span
                    aria-hidden
                    className="hidden md:block absolute top-1.5 -right-3 w-6 border-t border-dashed"
                    style={{ borderColor: C.lineStrong }}
                  />
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── REPARACIONES ─────────────────────────────────────── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Tag>Ingresos más frecuentes</Tag>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight max-w-[20ch]">
            Lo que llega roto al mesón de Fix Store
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_340px] gap-10 md:gap-14 items-start">
          <ul>
            {SERVICES.map((s, i) => (
              <Reveal key={s.code} delay={i * 60}>
                <li
                  className="flex gap-4 py-5 border-b first:border-t"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className={`${mono.className} mt-1 shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold tracking-[0.2em]`}
                    style={{ backgroundColor: C.accentSoft, color: C.accent }}
                  >
                    {s.code}
                  </span>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight">{s.t}</h3>
                    <p className="mt-1 text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                      {s.d}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={150}>
            <figure className="md:sticky md:top-24">
              <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/pantalla-quebrada.webp`}
                  alt="iPhone con tapa trasera quebrada esperando reparación en Fix Store"
                  width={900}
                  height={1100}
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-3 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em]`}
                style={{ color: C.faint }}
              >
                <span>Ingreso típico</span>
                <span style={{ color: C.accent }}>estado: rescatable</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── FOTO A SANGRÉ: EN EL MESÓN ───────────────────────── */}
      <section className="relative">
        <div className="relative h-[62vh] md:h-[74vh] overflow-hidden">
          <Image
            src={`${IMG}/tecnica-banco.webp`}
            alt="Técnica de Fix Store reparando un celular abierto en el mesón"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(11,15,25,0.55) 0%, rgba(11,15,25,0) 35%, rgba(11,15,25,0) 65%, rgba(11,15,25,0.7) 100%)' }}
          />
          <div className="absolute inset-x-0 top-6 flex justify-center">
            <p
              className={`${mono.className} rounded-full px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em]`}
              style={{ backgroundColor: 'rgba(11,15,25,0.72)', color: C.ink, border: `1px solid ${C.line}` }}
            >
              En el mesón - reparación real en curso
            </p>
          </div>
        </div>
      </section>

      {/* ── TRABAJOS RECIENTES ───────────────────────────────── */}
      <section id="trabajos" className="py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Tag>Bitácora del taller</Tag>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight max-w-[22ch]">
              Equipos que salieron funcionando esta temporada
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-2 md:col-span-7">
              <figure className="overflow-hidden rounded-2xl h-full" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/antes-despues.webp`}
                  alt="Dos iPhone sobre el mesón de Fix Store, uno con tapa trasera quebrada y otro reparado"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover aspect-[16/10] md:aspect-auto"
                />
              </figure>
            </Reveal>
            <Reveal delay={90} className="col-span-1 md:col-span-5">
              <figure className="overflow-hidden rounded-2xl h-full" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/reparacion-iphone14.webp`}
                  alt="iPhone 14 Pro Max antes y después de su reparación completa en Fix Store"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
                />
              </figure>
            </Reveal>
            <Reveal delay={60} className="col-span-1 md:col-span-5">
              <figure className="overflow-hidden rounded-2xl h-full" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/meson.webp`}
                  alt="Mesón de atención de Fix Store con vitrina de accesorios"
                  width={900}
                  height={700}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </figure>
            </Reveal>
            <Reveal delay={120} className="col-span-2 md:col-span-7">
              <figure className="overflow-hidden rounded-2xl h-full" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/local-calle.webp`}
                  alt={`Fachada de ${BIZ.short} en el centro de Talca`}
                  width={1200}
                  height={700}
                  className="w-full h-full object-cover aspect-[16/9]"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ──────────────────────────────────────────── */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Tag>Lo que dicen en Google</Tag>
          <div className="mt-4 flex flex-wrap items-end gap-x-6 gap-y-3">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {BIZ.ratingLabel} de 5 en {BIZ.reviews} reseñas
            </h2>
            <Stars value={BIZ.rating} color={C.accent} className="w-5 h-5 mb-1.5" />
          </div>
        </Reveal>
        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <blockquote
                className="h-full rounded-2xl p-6"
                style={{ backgroundColor: C.panelUp, border: `1px solid ${C.line}` }}
              >
                <Stars value={5} color={C.accent} className="w-3.5 h-3.5" />
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.ink }}>
                  “{r.txt}”
                </p>
                <footer
                  className={`${mono.className} mt-5 text-[10px] font-semibold uppercase tracking-[0.2em]`}
                  style={{ color: C.faint }}
                >
                  {r.name} · {r.when}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── DATOS + MAPA ─────────────────────────────────────── */}
      <section id="ubicacion" className="border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <div>
              <Tag>Cierre de orden</Tag>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
                Pásate por el local o abre tu orden ahora
              </h2>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.faint }}>
                    Dirección
                  </dt>
                  <dd className="mt-1 text-base font-medium">{BIZ.address}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.faint }}>
                    Horario
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {HOURS.map((h) => (
                      <p key={h.d} className="text-[15px]" style={{ color: C.muted }}>
                        <span className="inline-block w-36" style={{ color: C.ink }}>{h.d}</span>
                        {h.h}
                      </p>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.faint }}>
                    Instagram
                  </dt>
                  <dd className="mt-1 text-base font-medium">@{BIZ.instagram}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex h-[50px] items-center rounded-full px-6 text-[15px] font-semibold"
                  style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex h-[50px] items-center rounded-full px-6 text-[15px] font-semibold"
                  style={{ border: `1px solid ${C.lineStrong}`, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full aspect-[4/3] md:h-full md:min-h-[380px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-3">
          <p className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.faint }}>
            {BIZ.name}
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.faint }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escríbenos por WhatsApp - ${BIZ.short}`} />
    </main>
  )
}
