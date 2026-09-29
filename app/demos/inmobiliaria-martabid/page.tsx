import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2' }],
})

/**
 * Dirección de arte: «cartola de proyectos». La paleta sale del logo
 * real — ámbar dorado sobre espresso — con Marcellus para el letrero
 * de sala de ventas y Geist Mono para los datos de la cartola (UF,
 * dormitorios, direcciones), como la lámina de precios de una inmobiliaria.
 */
const C = {
  espresso: '#171109',
  ink: '#241B0E',
  cream: '#F6F1E6',
  paper: '#FBF7EF',
  gold: '#E09A19',
  goldDeep: '#9C6B12',
  bronze: '#7A5C2E',
  muted: '#6E6250',
  line: 'rgba(36,27,14,0.16)',
  lineDark: 'rgba(255,255,255,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'inmobiliaria-martabid',
  title: 'Inmobiliaria Martabid — Departamentos y casas de Ñuble a Puerto Montt',
  description:
    'Proyectos con entrega inmediata en Villarrica, Temuco, Osorno y Puerto Montt, desde 1.990 UF. Casa matriz en Temuco y salas de venta en 7 ciudades.',
  image: '/demos/inmobiliaria-martabid/hero.webp',
})

const NAV_LINKS = [
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Presencia', href: '#presencia' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const PROYECTOS_FOTO = [
  {
    src: `${IMG}/condominio.webp`,
    alt: 'Condominio Volcán Villarrica: edificio terminado con letrero de ventas Martabid al frente',
    nombre: 'Volcán Villarrica',
    ciudad: 'Villarrica',
    tipo: 'Departamentos · 2 y 3 dorm.',
    precio: 'desde 1.990 UF',
    estado: 'Entrega inmediata',
    sala: 'Av. Segunda Faja al Volcán 205, Local 3',
  },
  {
    src: `${IMG}/casa-piloto.webp`,
    alt: 'Casa modelo de Jardines del Sur en Osorno con prado y cielo sur',
    nombre: 'Jardines del Sur',
    ciudad: 'Osorno',
    tipo: 'Casas · 3 dormitorios',
    precio: 'desde 2.099 UF',
    estado: 'Entrega inmediata',
    sala: 'Psje. Matilde Troup Sepulveda 2091',
  },
]

const PROYECTOS_MAS = [
  { nombre: 'Edificio Belmonte', ciudad: 'Temuco centro', tipo: 'Depto. · 1-2 dorm.', dato: 'Entrega inmediata' },
  { nombre: 'Praderas de Labranza II', ciudad: 'Temuco · Labranza', tipo: 'Casas · 3 dorm.', dato: 'En venta' },
  { nombre: 'Vista Chinquihue', ciudad: 'Puerto Montt', tipo: 'Depto. · 2-3 dorm.', dato: 'Entrega inmediata' },
  { nombre: 'Piedra Azul', ciudad: 'Puerto Montt', tipo: 'Depto. · 2-3 dorm.', dato: 'Subsidio desde $19.000.000' },
]

const CIUDADES = ['Temuco', 'Villarrica', 'Chillán', 'Los Ángeles', 'Valdivia', 'Osorno', 'Puerto Montt']

const DENTRO = [
  {
    src: `${IMG}/interior.webp`,
    alt: 'Cocina y comedor de diario de la casa modelo en Jardines del Sur',
    pie: 'Cocina y estar · Jardines del Sur',
  },
  {
    src: `${IMG}/dormitorio.webp`,
    alt: 'Dormitorio principal de la casa modelo en Jardines del Sur, Osorno',
    pie: 'Dormitorio · Jardines del Sur',
  },
  {
    src: `${IMG}/juegos.webp`,
    alt: 'Juegos infantiles entre los edificios del Condominio Volcán Villarrica',
    pie: 'Juegos · Volcán Villarrica',
  },
  {
    src: `${IMG}/aerea-piscina.webp`,
    alt: 'Vista aérea de la piscina y áreas verdes del Condominio Volcán Villarrica',
    pie: 'Áreas comunes · Volcán Villarrica',
  },
]

export default function InmobiliariaMartabid() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo webp ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="Martabid" className="h-6 w-auto" />
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(23,17,9,0.94)',
          ink: '#F6F1E6',
          line: 'rgba(255,255,255,0.12)',
          btnBg: C.gold,
          btnInk: '#171109',
        }}
      />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.espresso }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Edificios del Condominio Volcán Villarrica con piscina y áreas verdes, proyecto de Inmobiliaria Martabid"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,17,9,0.35) 0%, rgba(23,17,9,0.1) 40%, rgba(23,17,9,0.95) 90%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-14">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.2em] mb-4`} style={{ color: C.gold }}>
              INMOBILIARIA · CASA MATRIZ EN TEMUCO
            </p>
            <h1 className={`${display.className} text-[2.6rem] leading-[1.04] md:text-7xl text-white max-w-3xl`}>
              De Ñuble a Los Lagos,{' '}
              <em className="not-italic" style={{ color: C.gold }}>
                la que entrega las llaves
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-4 max-w-xl text-white/85">
              Departamentos y casas con entrega inmediata en Villarrica,
              Temuco, Osorno y Puerto Montt — desde 1.990 UF, con sala de
              ventas en cada ciudad.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              {['Ventas en 7 ciudades', 'Entrega inmediata', 'desde 1.990 UF*'].map((chip) => (
                <span
                  key={chip}
                  className={`${mono.className} text-[11px] tracking-[0.1em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(224,154,25,0.16)', color: '#FFD98A', border: '1px solid rgba(224,154,25,0.5)' }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: C.gold, color: C.espresso }}
              >
                Cotiza por WhatsApp
              </a>
              <a
                href="#proyectos"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}
              >
                Ver proyectos
              </a>
            </div>
            <p className={`${mono.className} text-[10px] tracking-[0.1em] mt-5`} style={{ color: 'rgba(255,255,255,0.55)' }}>
              CONDOMINIO VOLCÁN VILLARRICA · *PRECIOS PUBLICADOS EN MARTABID.CL, SUJETOS A DISPONIBILIDAD
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PRUEBA SOCIAL ──────────────────────────────────────── */}
      <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 md:py-9 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Reveal className="flex items-center gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className={`${display.className} text-3xl leading-none`} style={{ color: C.goldDeep }}>
                  {BIZ.googleRating}
                </span>
                <Stars value={3.9} color={C.goldDeep} className="w-4 h-4" />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.12em] mt-1`} style={{ color: C.muted }}>
                {BIZ.googleReviews} reseñas en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={60} className="flex items-center gap-2.5">
            <p className="text-sm" style={{ color: C.muted }}>
              <strong style={{ color: C.ink }}>+24 mil</strong> personas siguen sus proyectos en Instagram
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm" style={{ color: C.muted }}>
              Salas de venta de <strong style={{ color: C.ink }}>Ñuble a Puerto Montt</strong> — la oficina queda cerca de la obra
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CARTOLA DE PROYECTOS ───────────────────────────────── */}
      <section id="proyectos" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.goldDeep }}>
              Cartola vigente
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.06] max-w-2xl`}>
              Proyectos que ya tienen{' '}
              <span style={{ color: C.goldDeep }}>llaves en mano</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4 max-w-xl" style={{ color: C.muted }}>
              Fotos reales de los proyectos publicados en martabid.cl.
              Precios de lista, sujetos a disponibilidad y cambios.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7 mt-10">
            {PROYECTOS_FOTO.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 90}>
                <article
                  className="rounded-2xl overflow-hidden border"
                  style={{ backgroundColor: '#fff', borderColor: C.line }}
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    <span
                      className={`${mono.className} absolute top-3 left-3 text-[10px] tracking-[0.14em] px-2.5 py-1 rounded`}
                      style={{ backgroundColor: C.espresso, color: C.gold }}
                    >
                      {p.estado.toUpperCase()}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <div className="flex items-baseline justify-between gap-3">
                      <h3 className={`${display.className} text-2xl`}>{p.nombre}</h3>
                      <span className={`${mono.className} text-sm font-semibold shrink-0`} style={{ color: C.goldDeep }}>
                        {p.precio}
                      </span>
                    </div>
                    <p className={`${mono.className} text-[11px] tracking-[0.08em] mt-1.5`} style={{ color: C.bronze }}>
                      {p.ciudad.toUpperCase()} · {p.tipo}
                    </p>
                    <p className="text-[13px] mt-3" style={{ color: C.muted }}>
                      Sala de ventas: {p.sala}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Resto de la cartola, sin foto inventada */}
          <Reveal delay={120}>
            <div className="mt-6 rounded-2xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.cream }}>
              {PROYECTOS_MAS.map((p, i) => (
                <div
                  key={p.nombre}
                  className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_auto_auto] items-center gap-x-4 px-5 md:px-7 py-4 ${i > 0 ? 'border-t' : ''}`}
                  style={{ borderColor: C.line }}
                >
                  <div>
                    <p className="font-semibold text-[15px]">{p.nombre}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.1em] mt-0.5`} style={{ color: C.muted }}>
                      {p.ciudad.toUpperCase()}
                    </p>
                  </div>
                  <p className={`${mono.className} hidden md:block text-[11px]`} style={{ color: C.bronze }}>
                    {p.tipo}
                  </p>
                  <span className={`${mono.className} text-[10px] tracking-[0.08em] text-right`} style={{ color: C.goldDeep }}>
                    {p.dato.toUpperCase()}
                  </span>
                </div>
              ))}
              <div className="px-5 md:px-7 py-4 border-t flex flex-wrap items-center justify-between gap-3" style={{ borderColor: C.line }}>
                <p className="text-[13px]" style={{ color: C.muted }}>
                  Cartola completa y disponibilidad al día en su sitio oficial
                </p>
                <a
                  href={BIZ.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-[11px] tracking-[0.1em] font-semibold`}
                  style={{ color: C.goldDeep }}
                >
                  MARTABID.CL ↗
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── POR DENTRO ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.gold }}>
              Por dentro
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.06] text-white max-w-2xl`}>
              Lo que se ve en la sala{' '}
              <span style={{ color: C.gold }}>es lo que se entrega</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mt-10">
            {DENTRO.map((d, i) => (
              <Reveal key={d.pie} delay={i * 80}>
                <figure>
                  <div className="relative aspect-square rounded-2xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
                    <Image src={d.src} alt={d.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} text-[10px] tracking-[0.12em] mt-2.5`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {d.pie.toUpperCase()}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESENCIA + MAPA ───────────────────────────────────── */}
      <section id="presencia" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.goldDeep }}>
              Presencia
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.06] max-w-2xl`}>
              La oficina queda cerca{' '}
              <span style={{ color: C.goldDeep }}>de la obra</span>
            </h2>
          </Reveal>

          <Reveal delay={70}>
            <div className="flex flex-wrap gap-2 mt-7">
              {CIUDADES.map((ci, i) => (
                <span
                  key={ci}
                  className={`${mono.className} text-[11px] tracking-[0.08em] px-3.5 py-2 rounded-full`}
                  style={
                    i === 0
                      ? { backgroundColor: C.espresso, color: C.gold }
                      : { backgroundColor: '#fff', color: C.ink, border: `1px solid ${C.line}` }
                  }
                >
                  {ci}
                  {i === 0 ? ' · casa matriz' : ''}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-[1.35fr_1fr] gap-6 md:gap-8 mt-8 items-stretch">
            <Reveal>
              <div className="rounded-2xl overflow-hidden border h-[300px] md:h-full min-h-[300px]" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Casa matriz de Inmobiliaria Martabid en Temuco"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="rounded-2xl border p-6 md:p-7 h-full flex flex-col justify-between gap-5" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                <div>
                  <p className={`${mono.className} text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.goldDeep }}>
                    Casa matriz
                  </p>
                  <p className={`${display.className} text-2xl mt-2`}>{BIZ.address}, {BIZ.city}</p>
                  <dl className="mt-4 space-y-2 text-sm" style={{ color: C.muted }}>
                    <div className="flex gap-2">
                      <dt className={`${mono.className} text-[10px] tracking-[0.1em] pt-1 w-[52px] shrink-0`}>FONO</dt>
                      <dd><a href={`tel:${BIZ.phoneTel}`} className="font-semibold" style={{ color: C.ink }}>{BIZ.phoneDisplay}</a></dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className={`${mono.className} text-[10px] tracking-[0.1em] pt-1 w-[52px] shrink-0`}>HORARIO</dt>
                      <dd>{BIZ.hours}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className={`${mono.className} text-[10px] tracking-[0.1em] pt-1 w-[52px] shrink-0`}>EMAIL</dt>
                      <dd><a href={`mailto:${BIZ.email}`} style={{ color: C.ink }}>{BIZ.email}</a></dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: C.gold, color: C.espresso }}
                  >
                    Hablar con un ejecutivo
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: C.cream, color: C.ink, border: `1px solid ${C.line}` }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OPINIONES ──────────────────────────────────────────── */}
      <section id="opiniones" className="py-14 md:py-20 border-t" style={{ borderColor: C.line, backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center">
          <Reveal>
            <div className="flex items-center gap-4">
              <p className={`${display.className} text-6xl leading-none`} style={{ color: C.goldDeep }}>
                {BIZ.googleRating}
              </p>
              <div>
                <Stars value={3.9} color={C.goldDeep} className="w-5 h-5" />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.12em] mt-1.5`} style={{ color: C.muted }}>
                  {BIZ.googleReviews} reseñas · Google Maps
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              La nota es la que publica su ficha de Temuco: compradores que
              ya viven en sus proyectos y otros en plena postventa. Léela
              completa en Google, o pregunta directo por WhatsApp a un
              ejecutivo de la ciudad que te interesa.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block text-[11px] tracking-[0.1em] font-semibold mt-3`}
              style={{ color: C.goldDeep }}
            >
              VER RESEÑAS EN GOOGLE ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer id="contacto" className="py-10 md:py-12" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo webp ya optimizado en public/ */}
              <img src={`${IMG}/logo.webp`} alt="Inmobiliaria Martabid" className="h-7 w-auto" />
              <p className={`${mono.className} text-[11px] mt-3`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-right">
              <a href={BIZ.web} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: C.gold }}>
                MARTABID.CL ↗
              </a>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                INSTAGRAM ↗
              </a>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                WHATSAPP ↗
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] leading-relaxed mt-8 pt-5 border-t`} style={{ color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.12)' }}>
            Mockup de muestra para Sitiazo. Datos: martabid.cl y ficha de Google Maps (3,9 ★ · 75 reseñas, consultado sep. 2026).
            Precios UF publicados por la inmobiliaria, sujetos a disponibilidad.
          </p>
        </div>
      </footer>
    </main>
  )
}
