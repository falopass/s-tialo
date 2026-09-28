import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400' }, { path: '../../fonts/barlow/normal-500.woff2', weight: '500' }, { path: '../../fonts/barlow/normal-600.woff2', weight: '600' }, { path: '../../fonts/barlow/normal-700.woff2', weight: '700' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

/**
 * Identidad: el tablero del box. Carbón casi negro, tipografía
 * condensada de competencia y el verde neón de su letrero "A".
 * Filas numeradas tipo WOD, datos en mono y fotos reales del
 * entrenamiento en Las Rastras.
 */
const C = {
  bg: '#0A0D12',
  panel: '#12171F',
  panel2: '#182030',
  ink: '#EAF3EC',
  volt: '#3DF096',
  voltSoft: 'rgba(61,240,150,0.14)',
  muted: '#93A0A8',
  line: 'rgba(234,243,236,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'aria-crossfit-las-rastras',
  title: 'Aria CrossFit — HYROX Studio · Las Rastras, Talca',
  description:
    'Box de CrossFit y HYROX en Av. Las Rastras 2750, Talca. Afiliado CrossFit Games, musculación y clases para todo nivel. Agenda por WhatsApp.',
  image: `${IMG}/soga.webp`,
})

const NAV_LINKS = [
  { label: 'El box', href: '#box' },
  { label: 'Entrena aquí', href: '#entrena' },
  { label: 'La tribu', href: '#tribu' },
  { label: 'Horarios', href: '#contacto' },
]

const BLOQUES = [
  {
    n: 'A',
    name: 'Musculación',
    desc: 'Sala de máquinas y peso libre para entrenar a tu ritmo, con progresión guiada desde tu punto de partida.',
    src: `${IMG}/remo.webp`,
  },
  {
    n: 'B',
    name: 'CrossFit',
    desc: 'Clases dirigidas de crossfit para todo nivel: los coaches escalan el WOD a tu capacidad real.',
    src: `${IMG}/clase-anillas.webp`,
  },
  {
    n: 'C',
    name: 'HYROX Studio',
    desc: 'Preparación para HYROX dentro del box: resistencia, estaciones y comunidad que empuja contigo.',
    src: `${IMG}/hyrox-cert.webp`,
  },
]

const TRIBU = [
  { src: `${IMG}/clase-grupo.webp`, alt: 'Clase en grupo dentro del box de Aria CrossFit' },
  { src: `${IMG}/sandbag.webp`, alt: 'Atleta de Aria cargando sandbag en entrenamiento' },
  { src: `${IMG}/clase-masiva.webp`, alt: 'La comunidad de Aria CrossFit reunida tras una clase' },
]

const RESENAS = [
  {
    texto:
      'Excelente lugar para entrenar, independiente de tu nivel. Comencé con clases de musculatura y luego agregué crossfit. Giuliano y Fran, excelentes coaches.',
    autor: 'María Salgado',
    nota: 'hace 2 meses',
  },
  {
    texto:
      'El box es espectacular, el ambiente muy bueno y los entrenadores excelentes. Desde el primer momento te hacen sentir bienvenido, independientemente de tu nivel.',
    autor: 'Daniel Povedano',
    nota: 'hace un mes',
  },
  {
    texto:
      'Agradecida y muy feliz de haber sido parte de esta tribu. Destaco el profesionalismo y la calidad humana de Giuliano y Francisco.',
    autor: 'Patricia Bascuñán',
    nota: 'hace 2 meses',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '06:00 – 22:00' },
  { days: 'Sábado', time: '09:00 – 14:00' },
  { days: 'Domingo', time: '10:00 – 11:00' },
]

export default function AriaCrossfitPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: 'rgba(10,13,18,0.94)', ink: C.ink, line: C.line, btnBg: C.volt, btnInk: '#08120C' }}
      />

      {/* ── Hero a sangre: la soga ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/soga.webp`}
          alt="Atleta trepando la soga en el box de Aria CrossFit, Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,13,18,0.72) 0%, rgba(10,13,18,0.5) 40%, rgba(10,13,18,0.95) 100%)' }}
        />
        {/* chips flotantes */}
        <div className="absolute top-24 right-5 md:right-8 flex flex-col items-end gap-2.5">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 tap-44"
              style={{ backgroundColor: 'rgba(10,13,18,0.9)', color: C.volt, border: `1px solid rgba(61,240,150,0.4)` }}
            >
              <Stars value={5} color={C.volt} className="w-3.5 h-3.5" />
              5,0 · {BIZ.reviews} reseñas
            </a>
          </Reveal>
          <Reveal delay={90}>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] md:text-xs font-bold px-3.5 py-2 rounded-full transition-colors tap-44"
              style={{ backgroundColor: 'rgba(10,13,18,0.9)', color: C.ink, border: `1px solid ${C.line}` }}
            >
              {BIZ.igUser}
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5`} style={{ color: C.volt }}>
              CrossFit® · HYROX® Studio · Las Rastras — Talca
            </p>
            <h1 className={`${display.className} uppercase leading-[0.9] text-[clamp(3.4rem,13vw,8.5rem)] mb-6`} style={{ color: C.ink }}>
              Entrena
              <br />
              <span style={{ color: C.volt }}>donde se juega</span>
              <br />
              en serio
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(234,243,236,0.85)' }}>
              Box afiliado a CrossFit Games en Portal Las Rastras:
              musculación, clases de crossfit y entrenamiento HYROX
              para todo nivel.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-sm md:text-base px-8 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.volt, color: '#08120C' }}
              >
                Agenda tu primera clase
              </a>
              <a
                href="#entrena"
                className={`${display.className} uppercase text-sm md:text-base px-8 py-3 rounded-md border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(234,243,236,0.5)', color: C.ink }}
              >
                Ver el box
              </a>
            </div>
          </Reveal>
        </div>
        {/* marcador del tablero */}
        <div className="relative border-t" style={{ borderColor: C.line, backgroundColor: 'rgba(10,13,18,0.94)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: C.ink }}>
            <span style={{ color: C.volt }}>RX</span>
            <span>{BIZ.address}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.volt }} aria-hidden="true" />
              abierto hoy
            </span>
            <span>Afiliado CrossFit Games</span>
            <span className="hidden md:inline" style={{ color: C.volt }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El box ── */}
      <section id="box" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <figure className="relative rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/box.webp`}
                  alt={`Interior del box de ${BIZ.name}: racks, sogas y espacio de entrenamiento`}
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-4 py-2.5 text-[10px] uppercase tracking-[0.24em] flex justify-between`} style={{ backgroundColor: 'rgba(10,13,18,0.92)', color: C.volt }}>
                <span>Portal Las Rastras, locales 7-8-9</span>
                <span>el box</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.volt }}>
              El lugar
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.92] mb-5`} style={{ color: C.ink }}>
              Un box completo
              <br />
              <span style={{ color: C.volt }}>en Las Rastras</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.name} funciona en Av. Las Rastras 2750, Talca.
              Racks, sogas, remo y una comunidad que entrena junta —
              afiliado oficial de CrossFit Games.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['CrossFit® afiliado', 'HYROX® Studio', 'Todo nivel', 'Coaches en sala'].map((t) => (
                <span
                  key={t}
                  className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-md`}
                  style={{ backgroundColor: C.voltSoft, color: C.volt, border: `1px solid rgba(61,240,150,0.3)` }}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity tap-44"
                style={{ color: C.ink, textDecorationColor: C.volt }}
              >
                Ver la ficha en Google →
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 hover:opacity-70 transition-opacity tap-44"
                style={{ color: C.ink, textDecorationColor: C.volt }}
              >
                {BIZ.igUser} en Instagram →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Entrena aquí: tablero WOD ── */}
      <section id="entrena" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.volt }}>
                  Programación del box
                </p>
                <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.92]`} style={{ color: C.ink }}>
                  Elige tu
                  <br />
                  <span style={{ color: C.volt }}>frente</span>
                </h2>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                Oferta de muestra según sus redes: los detalles y
                planes reales se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="space-y-4 md:space-y-5">
            {BLOQUES.map((b, i) => (
              <Reveal key={b.n} delay={i * 80}>
                <article
                  className="grid md:grid-cols-[auto_1fr_280px] gap-4 md:gap-8 items-center rounded-2xl border p-4 md:p-5"
                  style={{ backgroundColor: C.panel2, borderColor: C.line }}
                >
                  <span
                    className={`${display.className} hidden md:flex w-16 h-16 rounded-xl items-center justify-center text-3xl`}
                    style={{ backgroundColor: C.voltSoft, color: C.volt }}
                    aria-hidden="true"
                  >
                    {b.n}
                  </span>
                  <div>
                    <p className={`${mono.className} md:hidden text-[10px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.volt }}>
                      Bloque {b.n}
                    </p>
                    <h3 className={`${display.className} uppercase text-2xl md:text-4xl leading-none mb-2.5`} style={{ color: C.ink }}>
                      {b.name}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-xl" style={{ color: C.muted }}>
                      {b.desc}
                    </p>
                  </div>
                  <div className="relative rounded-xl overflow-hidden aspect-[16/10] md:aspect-auto md:h-[168px] md:w-[280px]">
                    <Image
                      src={b.src}
                      alt={`${b.name} en ${BIZ.name}`}
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      className="object-cover"
                    />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-sm md:text-base px-8 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.volt, color: '#08120C' }}
              >
                Reservar clase de prueba
              </a>
              <p className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                primera clase · consulta por WhatsApp
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La tribu: tira de fotos ── */}
      <section id="tribu" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.volt }}>
              La tribu
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.92] mb-10`} style={{ color: C.ink }}>
              Nadie entrena
              <br />
              <span style={{ color: C.volt }}>solo</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {TRIBU.map((t, i) => (
              <Reveal key={t.src} delay={i * 90}>
                <figure className={`relative rounded-2xl overflow-hidden border aspect-[4/5] ${i === 1 ? 'sm:translate-y-6' : ''}`} style={{ borderColor: C.line }}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas 5★ ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.volt }}>
                  Lo que dice la tribu en Google
                </p>
                <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.92]`} style={{ color: C.ink }}>
                  5,0 perfecto:
                  <br />
                  <span style={{ color: C.volt }}>todas las reseñas al máximo</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={5} color={C.volt} className="w-5 h-5" />
                <span className="text-sm font-bold" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google Maps
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <figure className="rounded-2xl p-6 border h-full flex flex-col" style={{ backgroundColor: C.panel2, borderColor: C.line }}>
                  <Stars value={5} color={C.volt} className="w-4 h-4 mb-4" />
                  <blockquote className="text-sm md:text-base leading-relaxed mb-5 flex-1" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.volt }}>
                      {r.autor}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      {r.nota}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Horarios + mapa ── */}
      <section id="contacto" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.volt }}>
              Horarios y dirección
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[0.92] mb-6`} style={{ color: C.ink }}>
              Portal Las Rastras,
              <br />
              <span style={{ color: C.volt }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            {/* pizarra de horarios */}
            <div className="rounded-2xl border overflow-hidden mb-8" style={{ backgroundColor: C.panel2, borderColor: C.line }}>
              {HORAS.map((h, i) => (
                <div
                  key={h.days}
                  className={`flex items-center justify-between px-5 py-3.5 ${i > 0 ? 'border-t' : ''}`}
                  style={{ borderColor: C.line }}
                >
                  <span className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {h.days}
                  </span>
                  <span className={`${display.className} text-lg md:text-xl tracking-wide`} style={{ color: C.volt }}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-sm md:text-base px-8 py-3 rounded-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.volt, color: '#08120C' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase text-sm md:text-base px-8 py-3 rounded-md border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(234,243,236,0.4)', color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border h-full min-h-[320px]" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#07090D', borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-lg object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-none`} style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-xs mt-1" style={{ color: 'rgba(234,243,236,0.7)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(234,243,236,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(234,243,236,0.1)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(234,243,236,0.7)' }}>
            Demo de muestra con fotos reales del box; contacto, horarios y reseñas son públicos.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
