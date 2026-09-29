import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, PABELLONES, AFICHES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F2F6F4',
  card: '#FCFEFD',
  ink: '#122B33',
  muted: '#4E646B',
  teal: '#14677D',
  tealDeep: '#0C4354',
  green: '#4C9A5B',
  ochre: '#C98A12',
  line: 'rgba(18,43,51,0.14)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'centro-medico-curimed',
  title: 'Centro Médico CuriMed — Especialidades en Curicó',
  description:
    'Centro médico de especialidades en Arturo Prat 163, Curicó. Geriatría, odontología, oftalmología, ozonoterapia, estética, kinesiología y electrofitness. Convenios Fonasa, Isapre y Dipreca.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Pabellones', href: '#pabellones' },
  { label: 'El centro', href: '#centro' },
  { label: 'Agendar', href: '#contacto' },
]

export default function CentroMedicoCurimed() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-lg tracking-tight font-bold`}>
            Curi<span style={{ color: C.teal }}>Med</span>
            <span className={`${mono.className} text-[10px] uppercase tracking-widest ml-1`} style={{ color: C.muted }}>especialidades</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.teal, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: el letrero real como portada ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-[84px]">
        <Reveal>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-stretch">
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.tealDeep }}>
                Curicó · Arturo Prat 163
              </p>
              <h1 className={`${display.className} font-extrabold leading-[1.0] text-[42px] md:text-[72px]`}>
                Tu centro médico
                <br />
                familiar, <span style={{ color: C.teal }}>en el centro</span>
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
                El edificio de Prat con Plaza de Armas que junta consulta
                médica, dental, oftalmología y ozonoterapia bajo un mismo
                letrero — con convenios Fonasa, Isapre y Dipreca.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                  style={{ backgroundColor: C.teal, color: '#FFFFFF' }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border-2 self-center" style={{ borderColor: C.tealDeep }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Letrero real de CuriMed en Arturo Prat 163, Curicó: consulta geriátrica, clínica odontológica, oftalmológica, ozonoterapia, estética, electrofitness y kinesiología, con convenios Isapre, Fonasa y Dipreca"
                width={1200}
                height={675}
                className="w-full h-auto"
                priority
              />
              <span
                className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-wider px-3 py-2`}
                style={{ backgroundColor: 'rgba(12,67,84,0.9)', color: '#F2F6F4' }}
              >
                Su letrero real, Arturo Prat 163
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Cinta de convenios (banda ocre del letrero) ── */}
      <section className="mt-10" style={{ backgroundColor: C.ochre }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              ['4,3★', 'en su ficha de Google'],
              ['Fonasa · Isapre', 'Dipreca y particulares'],
              ['9:00–21:00', 'martes, dice su ficha'],
              ['WhatsApp', 'agenda directa'],
            ].map(([big, small]) => (
              <div key={big}>
                <p className={`${display.className} text-xl md:text-2xl font-bold`} style={{ color: '#33230A' }}>{big}</p>
                <p className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: '#3D2906' }}>{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pabellones: puertas de especialidad ── */}
      <section id="pabellones" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.tealDeep }}>
            Lo que dice su letrero
          </p>
          <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1.0]`}>
            Seis puertas,
            <br />
            <span style={{ color: C.teal }}>un mismo centro</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed" style={{ color: C.muted }}>
            Cada especialidad está escrita en la marquesina real o en su
            sitio — ninguna es inventada.
          </p>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {PABELLONES.map((p, i) => (
            <Reveal key={p.n} delay={i * 60}>
              <article
                className="relative h-full p-5 rounded-2xl border"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <div className="flex items-start justify-between gap-3">
                  <p className={`${mono.className} text-xs font-bold`} style={{ color: C.teal }}>{p.n}</p>
                  <span
                    className={`${mono.className} text-[10px] uppercase tracking-wider px-2 py-1 rounded-full`}
                    style={{ backgroundColor: i % 2 === 0 ? 'rgba(20,103,125,0.10)' : 'rgba(76,154,91,0.14)', color: i % 2 === 0 ? C.tealDeep : '#2F6B3B' }}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 className={`${display.className} font-bold text-2xl mt-2`}>{p.name}</h3>
                <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>{p.desc}</p>
                <div aria-hidden="true" className="mt-4 border-t border-dashed" style={{ borderColor: C.line }} />
                <a href={WA_LINK} className={`${mono.className} inline-block mt-3 text-xs uppercase tracking-wider font-bold tap-44`} style={{ color: C.teal }}>
                  Pedir hora →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El centro por dentro ── */}
      <section id="centro" style={{ backgroundColor: '#E2EDE9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border-4" style={{ borderColor: C.tealDeep }}>
              <Image
                src={`${IMG}/electrofitness.webp`}
                alt="Sala de electrofitness de CuriMed: personas con chalecos de electroestimulación"
                width={486}
                height={486}
                className="w-full h-auto"
              />
              <span
                className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-wider px-3 py-2`}
                style={{ backgroundColor: 'rgba(12,67,84,0.9)', color: '#F2F6F4' }}
              >
                El electrofitness que funciona dentro del centro
              </span>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.tealDeep }}>
              Más que consultas
            </p>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.0]`}>
              Hasta un gimnasio
              <br />
              de 20 minutos
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
              Dentro del mismo edificio funciona su electrofitness —
              sesiones con chaleco de electroestimulación guiadas por
              kinesióloga, según sus propios afiches. Es la cara más
              inesperada del letrero.
            </p>
            <p className="mt-3 text-base leading-relaxed" style={{ color: C.muted }}>
              Ya tienen sitio propio (curimed.cl) con agenda por WhatsApp;
              este demo es otra vitrina posible para la misma casa.
            </p>
            <a
              href={BIZ.website}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-5 text-xs uppercase tracking-wider font-bold underline underline-offset-4 tap-44`}
              style={{ color: C.tealDeep }}
            >
              Su sitio actual →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Afiches reales ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.tealDeep }}>
            Publicados por la casa
          </p>
          <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.0]`}>
            Sus afiches reales
          </h2>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          {AFICHES.map((a, i) => (
            <Reveal key={a.src} delay={i * 80}>
              <figure className="relative rounded-2xl overflow-hidden border-2" style={{ borderColor: C.tealDeep }}>
                <Image
                  src={a.src}
                  alt={a.alt}
                  width={520}
                  height={520}
                  className="w-full h-auto object-cover"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-wider px-3 py-2`}
                  style={{ backgroundColor: 'rgba(12,67,84,0.9)', color: '#F2F6F4' }}
                >
                  {a.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: '#AEE3D2' }}>
              Agenda tu hora
            </p>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02]`} style={{ color: '#F2F6F4' }}>
              Arturo Prat 163,
              <br />
              Curicó
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: 'rgba(242,246,244,0.82)' }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              Fijo: <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              <br />
              WhatsApp: <a href={WA_LINK} className="underline underline-offset-2 tap-44">{BIZ.whatsappDisplay}</a>
              <br />
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Facebook del centro</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.ochre, color: '#2A1D05' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: '#F2F6F4', color: '#F2F6F4' }}
              >
                Cómo llegar
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: 'rgba(242,246,244,0.25)' }}>
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
      <footer style={{ backgroundColor: '#0A2E39' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-white">
              <Image src={`${IMG}/logo.webp`} alt="" width={48} height={48} className="w-full h-full object-cover object-left" />
            </div>
            <p className={`${display.className} font-extrabold text-xl md:text-2xl`} style={{ color: '#F2F6F4' }}>{BIZ.name}</p>
          </div>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,246,244,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
      </footer>

      <div style={{ backgroundColor: '#0A2E39', borderTop: '1px solid rgba(242,246,244,0.14)' }}>
        <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-12 text-xs leading-relaxed" style={{ color: 'rgba(242,246,244,0.7)' }}>
          Sitio de ejemplo preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F2F6F4' }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Datos y fotos reales de su ficha de Google, su
          Facebook y su sitio curimed.cl — que ya existe; este demo es una
          propuesta de vitrina con su letrero y afiches, sin fabricar
          imágenes.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#AEE3D2' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
