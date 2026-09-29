import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, AFICHES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  paper: '#F7F3E8',
  card: '#FDFBF4',
  ink: '#22251F',
  asphalt: '#1A1C17',
  muted: '#5C5A4C',
  red: '#C8102E',
  redDeep: '#8F0B20',
  yellow: '#F2B90C',
  line: 'rgba(34,37,31,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-clinica-del-automovil',
  title: 'La Clínica del Automóvil — Taller en Molina',
  description:
    'Taller de reparación de automóviles en Av. Luis Cruz Martínez 1740, Molina. Cambio de aceite, alineación, neumáticos, A/C, baterías y repuestos. 4,6 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Llegar', href: '#contacto' },
]

/* Franja de seguridad amarillo/negro — cinta de taller. */
function Hazard({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[12px] w-full"
      style={{
        background: `repeating-linear-gradient(${flip ? '-45deg' : '45deg'}, ${C.yellow} 0 14px, ${C.asphalt} 14px 28px)`,
      }}
    />
  )
}

export default function LaClinicaDelAutomovil() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-lg tracking-wide uppercase`}>
            La Clínica <span style={{ color: C.red }}>del Automóvil</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.red, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: la fachada como pabellón de urgencias ── */}
      <section className="relative">
        <div className="relative h-[52vh] min-h-[340px] overflow-hidden">
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Fachada de La Clínica del Automóvil en Av. Luis Cruz Martínez 1740, Molina: letrero amarillo con servicio autorizado Total Quartz"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(26,28,23,0.30) 0%, rgba(26,28,23,0) 45%, rgba(247,243,232,0.96) 97%)' }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 -mt-24 relative">
          <Reveal>
            <div className="flex items-end gap-4">
              <div
                className="shrink-0 w-[88px] h-[88px] rounded-full overflow-hidden border-4"
                style={{ borderColor: C.paper, boxShadow: '0 4px 14px rgba(26,28,23,0.25)' }}
              >
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo de La Clínica del Automóvil, Molina"
                  width={88}
                  height={88}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.redDeep }}>
                Molina · Av. Luis Cruz Martínez 1740
              </p>
            </div>
            <h1 className={`${display.className} uppercase leading-[0.95] text-[44px] md:text-[84px] mt-3`}>
              La clínica
              <br />
              donde tu auto
              <br />
              <span style={{ color: C.red }}>sale sano</span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
              Taller de reparación en plena avenida de Molina: mantención,
              neumáticos, A/C y repuestos en el mismo patio. Horario
              continuado, como ellos mismos lo anuncian.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de datos de la ficha ── */}
      <section className="mt-10">
        <Hazard />
        <div style={{ backgroundColor: C.asphalt }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['4,6★', 'en su ficha de Google'],
              ['9:00–18:30', 'horario continuado'],
              ['Mujer', 'empresaria, dice su ficha'],
              ['Total Quartz', 'servicio autorizado'],
            ].map(([big, small]) => (
              <div key={big}>
                <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.yellow }}>{big}</p>
                <p className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: 'rgba(247,243,232,0.72)' }}>{small}</p>
              </div>
            ))}
          </div>
        </div>
        <Hazard flip />
      </section>

      {/* ── Servicios como receta ── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.redDeep }}>
            Orden de atención
          </p>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95]`}>
            Lo que recetan
            <br />
            <span style={{ color: C.red }}>en la ventana</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: C.muted }}>
            Cada servicio sale escrito en sus propios letreros y afiches —
            nada de lista inventada.
          </p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article
                className="relative h-full p-5 rounded-2xl border"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className={`${mono.className} text-xs font-bold`} style={{ color: C.red }}>{s.n}</p>
                  <span
                    className={`${mono.className} text-[10px] uppercase tracking-wider px-2 py-1 rounded-full`}
                    style={{ backgroundColor: i % 2 === 0 ? 'rgba(200,16,46,0.10)' : 'rgba(242,185,12,0.22)', color: i % 2 === 0 ? C.redDeep : '#7A5B00' }}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className={`${display.className} uppercase text-2xl mt-2`}>{s.name}</h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>{s.desc}</p>
                <div aria-hidden="true" className="mt-4 border-t border-dashed" style={{ borderColor: C.line }} />
                <a href={CALL_LINK} className={`${mono.className} inline-block mt-3 text-xs uppercase tracking-wider font-bold tap-44`} style={{ color: C.red }}>
                  Consultar →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Afiches reales ── */}
      <section style={{ backgroundColor: '#EFE8D5' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.redDeep }}>
              Directo de su Instagram
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`}>
              Afiches que ellos
              <br />
              mismos publican
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {AFICHES.map((a, i) => (
              <Reveal key={a.src} delay={i * 80}>
                <figure className="relative rounded-2xl overflow-hidden border-2" style={{ borderColor: C.asphalt }}>
                  <Image
                    src={a.src}
                    alt={a.alt}
                    width={520}
                    height={780}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption
                    className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-wider px-3 py-2`}
                    style={{ backgroundColor: 'rgba(26,28,23,0.85)', color: '#F7F3E8' }}
                  >
                    {a.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <p className={`${mono.className} mt-4 text-xs`} style={{ color: C.muted }}>
            Material real de {BIZ.instagramHandle} — tal como lo publica el taller.
          </p>
        </div>
      </section>

      {/* ── El taller por dentro ── */}
      <section id="taller" className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative rounded-2xl overflow-hidden border-4" style={{ borderColor: C.asphalt }}>
              <Image
                src={`${IMG}/taller.webp`}
                alt="Interior del taller de La Clínica del Automóvil: letreros de balanceo, montaje y alineación"
                width={480}
                height={850}
                className="w-full h-auto"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden border-4 mt-8" style={{ borderColor: C.asphalt }}>
              <Image
                src={`${IMG}/repuestos-interior.webp`}
                alt="Mostrador de repuestos y accesorios de La Clínica del Automóvil"
                width={480}
                height={850}
                className="w-full h-auto"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.redDeep }}>
            El box y la vitrina
          </p>
          <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`}>
            Taller y repuestos
            <br />
            en el mismo lugar
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
            Las fotos son de sus propias publicaciones: el box con los
            letreros de balanceo, montaje y alineación, y la vitrina de
            repuestos con tapas de rueda y accesorios.
          </p>
          <p className="mt-3 text-base leading-relaxed" style={{ color: C.muted }}>
            La ficha los marca como taller de reparación y su fachada como
            servicio autorizado Total Quartz — ambas cosas se ven en las
            fotos.
          </p>
          <a
            href={BIZ.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-5 text-xs uppercase tracking-wider font-bold underline underline-offset-4 tap-44`}
            style={{ color: C.redDeep }}
          >
            Ver su Instagram →
          </a>
        </Reveal>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.asphalt }}>
        <Hazard />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.yellow }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.paper }}>
              Av. Luis Cruz
              <br />
              Martínez 1740
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: 'rgba(247,243,232,0.8)' }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              Fijo: <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              <br />
              Instagram: <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">{BIZ.instagramHandle}</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.yellow, color: C.asphalt }}
              >
                Llamar al taller
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.paper, color: C.paper }}
              >
                Cómo llegar
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(247,243,232,0.25)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#12140F' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2" style={{ borderColor: 'rgba(247,243,232,0.4)' }}>
              <Image src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="w-full h-full object-cover" />
            </div>
            <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.paper }}>{BIZ.name}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,243,232,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,243,232,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(247,243,232,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos y las fotos son reales: salen de su
            ficha de Google y de su Instagram; la dirección exacta no la
            publica la ficha y la confirman sus propios afiches. No se
            generó ninguna imagen.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} />
    </div>
  )
}
