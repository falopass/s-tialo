import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, IG_URL, FB_URL, MAPS_URL, MAPS_EMBED, IMG, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «cartel de balneario» — el letrero de temporada que
 * cuelga en el almacén del Mariscadero: azul marino de mar bravío, arena
 * clara y el rojo de las puertas de sus cabañas. La ola del logo baja por
 * toda la página como línea de marea. Anton hace de letra de cartel de
 * playa; Barlow es el volante.
 */
const C = {
  sand: '#F4EFE2',
  foam: '#FBF8EF',
  navy: '#0C3242',
  deep: '#082431',
  red: '#C03A2B',
  sun: '#E8B23C',
  ink: '#22333A',
  muted: '#546A72',
  line: 'rgba(12,50,66,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-mar-y-luz',
  title: 'Cabañas Mar y Luz — Cabañas en Mariscadero, Pelluhue',
  description:
    'Cabañas para 5 y 8 personas en el sector Mariscadero, Pelluhue. A pasos de la playa, con parrilla a carbón y estacionamiento interior. Reserva directa por WhatsApp.',
  image: '/demos/cabanas-mar-y-luz/hero.webp',
})

const NAV_LINKS = [
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'La playa', href: '#playa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

const CABANAS = [
  {
    src: `${IMG}/frente.webp`,
    num: 'Módulo 01',
    name: 'Frente al camino',
    desc: 'Cabañas de madera sobre pilotes con puerta roja y terraza propia, ordenadas en fila mirando el patio común.',
    chip: 'Hasta 5 personas',
  },
  {
    src: `${IMG}/terraza.webp`,
    num: 'Módulo 02',
    name: 'Terraza de madera',
    desc: 'Cada cabaña tiene su salida al deck: la tarde de cartas y el desayuno con sol de cara, sin salir del módulo.',
    chip: 'Terraza propia',
  },
  {
    src: `${IMG}/cocina.webp`,
    num: 'Módulo 03',
    name: 'Cocina y estar',
    desc: 'Por dentro, madera clara: cocina equipada, comedor y living para que la familia entera quepa cómoda.',
    chip: 'Equipada completa*',
  },
  {
    src: `${IMG}/fila.webp`,
    num: 'Módulo 04',
    name: 'La fila verde',
    desc: 'Las cabañas en fila con pasillo de gravilla: cada familia con su puerta, todas compartiendo el patio.',
    chip: 'Hasta 8 personas',
  },
]

const INCLUYE = [
  'Parrilla a carbón',
  'Estacionamiento interior cerrado',
  'Equipamiento completo*',
  'Playa a cuadras, caminando',
  'Comercio cercano',
  'Reserva directa por WhatsApp',
]

const PLAYA = [
  {
    src: `${IMG}/atardecer.webp`,
    cap: 'El sol cayendo sobre el Mariscadero',
  },
  {
    src: `${IMG}/playa.webp`,
    cap: 'Arena oscura y mar bravío: playa para caminar',
  },
  {
    src: `${IMG}/letrero.webp`,
    cap: 'El letrero de Pelluhue en el borde costero',
  },
]

/** La ola del logo, como línea de marea que separa las secciones. */
function Ola({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1200 48"
      preserveAspectRatio="none"
      className="block w-full"
      height="48"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path
        d="M0,28 C150,8 300,8 450,26 C600,44 750,44 900,26 C1050,10 1140,14 1200,24 L1200,48 L0,48 Z"
        fill={color}
      />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-xs md:text-sm uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.sun : C.red }}
    >
      <svg width="34" height="10" viewBox="0 0 34 10" aria-hidden="true" className="shrink-0">
        <path d="M0,7 C5,2 9,2 13,6 C17,9 21,9 25,5 C28,2 31,2 34,5" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CabanasMarYLuzPage() {
  return (
    <div
      className={`${body.className} myl min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.sand, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .myl a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,226,0.95)',
          ink: C.navy,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FBF8EF',
        }}
      />

      {/* ── Hero: el cartel de temporada ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.deep }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cabaña verde de madera de Mar y Luz con puerta roja y terraza, en el sector Mariscadero de Pelluhue"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,36,49,0.52) 0%, rgba(8,36,49,0.15) 45%, rgba(8,36,49,0.78) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24">
          <div className="flex flex-col sm:flex-row sm:items-end gap-5 md:gap-8">
            <Reveal className="flex-1">
              <Eyebrow light>Mariscadero · Pelluhue · Maule</Eyebrow>
              <h1
                className={`${display.className} uppercase leading-[0.92] tracking-[0.01em] text-[clamp(3rem,12vw,7rem)]`}
                style={{ color: C.foam, textShadow: '0 4px 30px rgba(8,36,49,0.6)' }}
              >
                Mar <span style={{ color: C.sun }}>y</span> Luz
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mt-5" style={{ color: 'rgba(251,248,239,0.88)' }}>
                Cabañas de madera a cuadras de la playa, para 5 y hasta 8
                personas. Parrilla a carbón, estacionamiento interior y la
                ola del Pacífico de fondo.
              </p>
            </Reveal>
            <Reveal delay={120}>
              {/* cartel de la boletería */}
              <div
                className="px-5 py-4 border-2 border-dashed rotate-[-1.5deg] mb-2"
                style={{ borderColor: C.sun, backgroundColor: 'rgba(8,36,49,0.55)' }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Stars value={4.7} color={C.sun} className="w-4 h-4" />
                  <span className={`${display.className} text-lg`} style={{ color: C.foam }}>
                    {BIZ.rating}
                  </span>
                </div>
                <p className="text-xs" style={{ color: 'rgba(251,248,239,0.75)' }}>
                  {BIZ.reviews} reseñas en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
                  style={{ color: C.sun }}
                >
                  Ver la ficha →
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: C.foam }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#cabanas"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: C.foam, color: C.foam }}
              >
                Ver las cabañas
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative mt-8 md:mt-10">
          <Ola color={C.sand} />
        </div>
      </section>

      {/* ── Tira de marea: datos útiles ── */}
      <div className="border-b" style={{ backgroundColor: C.sand, borderColor: C.line }}>
        <ul className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-7 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-center" style={{ color: C.navy }}>
          {['Sector Mariscadero', 'Hasta 5 y 8 personas', 'Parrilla a carbón', 'Estacionamiento interior'].map((t) => (
            <li key={t} className="flex items-center gap-2">
              <svg width="18" height="8" viewBox="0 0 18 8" aria-hidden="true">
                <path d="M0,5 C3,2 6,2 9,5 C12,8 15,8 18,5" fill="none" stroke={C.red} strokeWidth="1.6" />
              </svg>
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* ── Las cabañas: módulos del patio ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Las cabañas</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95]`}
              style={{ color: C.navy }}
            >
              Madera verde,
              <br />
              <span style={{ color: C.red }}>puerta roja</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Módulos independientes sobre pilotes en un patio común
              cerrado. Fotos reales del lugar.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {CABANAS.map((c, i) => (
            <li key={c.num}>
              <Reveal delay={i * 90}>
                <div
                  className="relative overflow-hidden"
                  style={{ boxShadow: '0 14px 34px rgba(8,36,49,0.18)' }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={c.src}
                      alt={`${c.name} — ${BIZ.name}, Mariscadero, Pelluhue`}
                      fill
                      sizes="(min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className="flex items-center justify-between gap-3 px-5 py-4"
                    style={{ backgroundColor: C.foam, borderTop: `3px solid ${C.red}` }}
                  >
                    <div>
                      <p className={`${display.className} text-[10px] uppercase tracking-[0.24em] mb-1`} style={{ color: C.red }}>
                        {c.num}
                      </p>
                      <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-none`} style={{ color: C.navy }}>
                        {c.name}
                      </h3>
                    </div>
                    <p
                      className={`${display.className} shrink-0 text-[10px] md:text-xs uppercase tracking-[0.14em] px-3 py-1.5`}
                      style={{ backgroundColor: C.navy, color: C.foam }}
                    >
                      {c.chip}
                    </p>
                  </div>
                </div>
                <p className="text-[15px] leading-relaxed mt-4 max-w-lg" style={{ color: C.muted }}>
                  {c.desc}
                </p>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={100}>
          <div
            className="mt-12 p-6 md:p-7 border-2 border-dashed"
            style={{ borderColor: C.line, backgroundColor: C.foam }}
          >
            <p className={`${display.className} text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.red }}>
              Qué incluye
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2.5">
              {INCLUYE.map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.navy }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M2,7.5 L5.5,11 L12,3.5" fill="none" stroke={C.red} strokeWidth="2.2" strokeLinecap="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: C.muted }}>
              *Equipadas completas, excepto sábanas y toallas — así lo
              publican en su Instagram.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── La playa: el Mariscadero de noche ── */}
      <section id="playa" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <Ola color={C.sand} flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El entorno</Eyebrow>
            <h2
              className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-6`}
              style={{ color: C.foam }}
            >
              A cuadras
              <br />
              <span style={{ color: C.sun }}>de la playa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: 'rgba(251,248,239,0.78)' }}>
              El Mariscadero es costa de arena oscura y mar bravío: playa
              para caminar al atardecer, ver la pesca artesanal y bajar al
              borde costero de Pelluhue. Mar abierto — no apto para el baño,
              como advierten sus propias reseñas.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {PLAYA.map((p, i) => (
              <Reveal key={p.src} delay={i * 100}>
                <figure>
                  <div className="relative overflow-hidden aspect-[4/5]" style={{ boxShadow: '0 14px 34px rgba(8,36,49,0.4)' }}>
                    <Image
                      src={p.src}
                      alt={`${p.cap} — cerca de ${BIZ.name}, Pelluhue`}
                      fill
                      sizes="(min-width: 640px) 33vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${display.className} text-[11px] uppercase tracking-[0.18em] mt-3`}
                    style={{ color: C.sun }}
                  >
                    {p.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
        <Ola color={C.sand} />
      </section>

      {/* ── Reseñas: el muro del almacén ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Lo que escribieron</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95]`} style={{ color: C.navy }}>
              {BIZ.rating} de 5
              <br />
              <span style={{ color: C.red }}>en Google</span>
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 hover:decoration-4 tap-44"
              style={{ color: C.navy, textDecorationColor: C.red }}
            >
              Leer las {BIZ.reviews} reseñas →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <figure
                className="h-full p-6"
                style={{
                  backgroundColor: C.foam,
                  borderLeft: `5px solid ${i % 2 === 0 ? C.red : C.sun}`,
                  boxShadow: '0 8px 22px rgba(8,36,49,0.1)',
                }}
              >
                <Stars value={r.stars} color={C.sun} className="w-3.5 h-3.5 mb-3" />
                <blockquote className="text-[15px] leading-relaxed mb-4" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${display.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.navy }}>
                  {r.nombre}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow light>Reservas</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mb-6`} style={{ color: C.foam }}>
              Tu semana
              <br />
              <span style={{ color: C.sun }}>frente al mar</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(251,248,239,0.78)' }}>
              Escríbeles con tus fechas y cuántos son: te responden los
              dueños por WhatsApp con disponibilidad y valor del día.
              También los pillas en Instagram y Facebook.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: C.foam }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.06em] text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(251,248,239,0.5)', color: C.foam }}
              >
                {BIZ.igHandle}
              </a>
            </div>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,248,239,0.7)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:decoration-4 tap-44" style={{ color: C.sun }}>
                Cómo llegar →
              </a>
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-2 hover:decoration-4 tap-44" style={{ color: C.sun }}>
                Llamar
              </a>
              {' · '}
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:decoration-4 tap-44" style={{ color: C.sun }}>
                Facebook
              </a>
            </address>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[260px]" style={{ borderColor: 'rgba(232,178,60,0.35)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${display.className} text-[10px] uppercase tracking-[0.2em] mt-3`} style={{ color: 'rgba(251,248,239,0.55)' }}>
              {BIZ.address} · {BIZ.city} · borde costero del Maule
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.foam }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: 'rgba(251,248,239,0.14)' }}
        >
          <div>
            <p className={`${display.className} uppercase text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,248,239,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.igHandle}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(251,248,239,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,248,239,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(251,248,239,0.7)' }}>
            Fotos, logo, ubicación, teléfono y reseñas son reales (Google
            Maps e Instagram); los textos descriptivos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
