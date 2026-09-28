import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, IG_URL, FB_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «tablero del club» — el complejo como su marcador
 * nocturno: carbón de camarín, verde cancha encendido y tipografía de
 * fixture. Todo el sitio corre sobre fondo oscuro porque su vida real
 * es de noche, bajo los focos (sus propias fotos lo muestran). Archivo
 * Black hace de número de marcador; Geist Mono rotula las líneas del
 * fixture. Motivo propio: la «pizarra» — cada disciplina entra como
 * una fila de programación con su número, su foto y su detalle.
 */
const C = {
  night: '#0B120D',
  pitch: '#122017',
  card: '#14241A',
  line: 'rgba(237,242,233,0.14)',
  ink: '#EDF2E9',
  muted: '#9DB3A0',
  green: '#3FD96B',
  greenDeep: '#23A24C',
  dark: '#0B120D',
}

export const metadata: Metadata = demoMetadata({
  slug: 'greenclub',
  title: 'Greenclub — Futbolito, pádel y escuela en 29 Sur, Talca',
  description:
    'Complejo deportivo Greenclub en Veintiocho Sur, Talca: canchas de futbolito con focos nocturnos, pádel techado, escuela de fútbol infantil y torneos. Arrienda tu cancha por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Canchas', href: '#canchas' },
  { label: 'La vida del club', href: '#vida' },
  { label: 'Llegar', href: '#llegar' },
]

const PIZARRA = [
  {
    n: '01',
    t: 'Futbolito',
    d: 'Canchas de pasto sintético al aire libre, con cerros de fondo y focos para jugar hasta tarde.',
    img: `${IMG}/noche.webp`,
    alt: 'Partido de futbolito nocturno bajo los focos de Greenclub',
  },
  {
    n: '02',
    t: 'Pádel',
    d: 'Cancha techada de pádel con vidrio. Clases con profes para empezar desde cero.',
    img: `${IMG}/padel-cancha.webp`,
    alt: 'Cancha techada de pádel de Greenclub',
  },
  {
    n: '03',
    t: 'Escuela de fútbol',
    d: 'Formación para niños y niñas, junto a la escuela de Colo-Colo Talca.',
    img: `${IMG}/escuela.webp`,
    alt: 'Niños de la escuela de fútbol de Greenclub entrenando con petos',
  },
  {
    n: '04',
    t: 'Torneos y eventos',
    d: 'GreenCup de pádel, campeonatos de futbolito y veladas de boxeo y kickboxing.',
    img: `${IMG}/equipo.webp`,
    alt: 'Equipo de futbolito posando en la cancha de Greenclub',
  },
]

const RESENAS = [
  {
    nombre: 'Edgar Sanchez',
    estrellas: 4,
    texto: 'Excelente lugar para distraerse, buenas canchas.',
  },
  {
    nombre: 'Fran Castillo',
    estrellas: 4,
    texto: 'Las canchas son 10/10. De lo mejor de Talca para jugar.',
  },
  {
    nombre: 'Anita Galdame',
    estrellas: 5,
    texto: 'Grato ambiente. Los fines de semana hay ofertas en arriendo de canchas.',
  },
]

export default function Greenclub() {
  return (
    <main className={body.className} style={{ backgroundColor: C.night, color: C.ink }}>
      <BlitzNav
        name={
          <span className={display.className} style={{ letterSpacing: '0.02em' }}>
            GREENCLUB
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.night,
          ink: C.ink,
          line: C.line,
          btnBg: C.green,
          btnInk: C.night,
        }}
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: cancha de noche + marcador ── */}
      <section id="inicio" className="relative min-h-[100dvh] flex flex-col">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Canchas de futbolito de Greenclub con los cerros de Talca de fondo"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,18,13,0.55) 0%, rgba(11,18,13,0.25) 40%, rgba(11,18,13,0.92) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative flex-1 flex flex-col justify-end px-4 md:px-8 pb-6 pt-28 max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(11,18,13,0.75)', color: C.green, border: `1px solid ${C.green}` }}
              >
                Complejo deportivo · 29 Sur · Talca
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5"
                style={{ backgroundColor: 'rgba(11,18,13,0.75)', border: `1px solid ${C.line}` }}
              >
                <Stars value={BIZ.rating} color={C.green} className="w-3.5 h-3.5" />
                <span className={`${mono.className} text-xs font-bold`} style={{ color: C.ink }}>
                  {BIZ.rating.toLocaleString('es-CL')} · {BIZ.reviews} reseñas
                </span>
              </span>
            </div>
            <h1
              className={`${display.className} uppercase leading-[0.95] mt-5`}
              style={{ color: C.ink, fontSize: 'clamp(40px, 9vw, 104px)' }}
            >
              Donde Talca
              <br />
              <span style={{ color: C.green }}>sale a jugar</span>
            </h1>
            <p className="text-base md:text-xl mt-4 max-w-xl leading-relaxed" style={{ color: 'rgba(237,242,233,0.85)' }}>
              Futbolito bajo los focos, pádel techado y escuela de fútbol para los chicos.
              Se arrienda la hora, se juega el partido.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-7 py-3.5 text-base md:text-lg font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.green, color: C.night }}
              >
                Arrendar una cancha
              </a>
              <a
                href="#canchas"
                className="rounded-full px-7 py-3.5 text-base md:text-lg font-bold transition-transform active:scale-95"
                style={{ border: `2px solid rgba(237,242,233,0.5)`, color: C.ink, backgroundColor: 'rgba(11,18,13,0.4)' }}
              >
                Ver las canchas
              </a>
            </div>
          </Reveal>

          {/* Marcador / fixture del club */}
          <Reveal delay={220}>
            <div
              className="mt-9 rounded-2xl overflow-hidden"
              style={{ backgroundColor: 'rgba(11,18,13,0.85)', border: `1px solid ${C.line}`, backdropFilter: 'blur(6px)' }}
            >
              <div className="grid grid-cols-2 md:grid-cols-4">
                {PIZARRA.map((p) => (
                  <a
                    key={p.n}
                    href="#canchas"
                    className="px-4 py-3.5 flex items-center gap-3 tap-44"
                    style={{ borderRight: `1px solid ${C.line}` }}
                  >
                    <span className={`${mono.className} text-xl md:text-2xl font-bold`} style={{ color: C.green }}>
                      {p.n}
                    </span>
                    <span className={`${display.className} uppercase text-sm md:text-base leading-tight`} style={{ color: C.ink }}>
                      {p.t}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pizarra completa ── */}
      <section id="canchas" className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.green }}>
              La pizarra del club
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-6xl mt-2`} style={{ color: C.ink }}>
              Cuatro frentes abiertos
            </h2>
          </Reveal>
          <div className="mt-9 space-y-4">
            {PIZARRA.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <article
                  className="rounded-2xl overflow-hidden grid md:grid-cols-[220px_1fr_auto] items-stretch"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[150px]">
                    <Image src={p.img} alt={p.alt} fill className="object-cover" sizes="(min-width:768px) 220px, 100vw" />
                  </div>
                  <div className="px-5 py-5 md:px-7 flex flex-col justify-center">
                    <h3 className={`${display.className} uppercase text-2xl md:text-3xl`} style={{ color: C.ink }}>
                      {p.t}
                    </h3>
                    <p className="text-sm md:text-base mt-2 leading-relaxed max-w-xl" style={{ color: C.muted }}>
                      {p.d}
                    </p>
                  </div>
                  <div className="hidden md:flex items-center px-7" style={{ borderLeft: `1px solid ${C.line}` }}>
                    <span className={`${mono.className} text-4xl font-bold`} style={{ color: 'rgba(61,217,107,0.35)' }}>
                      {p.n}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La vida del club ── */}
      <section id="vida" className="px-4 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.pitch }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-start">
            <div>
              <Reveal>
                <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.green }}>
                  De lunes a domingo
                </p>
                <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2 leading-tight`} style={{ color: C.ink }}>
                  La cancha siempre está tomada
                </h2>
                <p className="text-base md:text-lg mt-4 leading-relaxed" style={{ color: C.muted }}>
                  Entre semana entrenan las escuelas y los equipos de siempre; el fin de
                  semana se llenan los torneos. En sus redes lo llaman simplemente «el Green».
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    ['Escuela Greenclub', 'Formación infantil junto a Colo-Colo Talca'],
                    ['GreenCup', 'Torneo de pádel del club'],
                    ['Veladas', 'Boxeo y kickboxing en el complejo'],
                    ['Clases de pádel', 'Con profes, para partir desde cero'],
                  ].map(([k, v]) => (
                    <li key={k} className="flex items-baseline gap-3 pb-3" style={{ borderBottom: `1px solid ${C.line}` }}>
                      <span className={`${mono.className} text-xs font-bold shrink-0`} style={{ color: C.green }}>→</span>
                      <div>
                        <span className="text-sm md:text-base font-bold" style={{ color: C.ink }}>{k}</span>
                        <span className="text-sm md:text-base" style={{ color: C.muted }}> — {v}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { img: `${IMG}/escuela-noche.webp`, alt: 'Grupo de niños de la escuela de fútbol de Greenclub en la cancha de noche', cls: 'col-span-2' },
                { img: `${IMG}/partido.webp`, alt: 'Jugadores disputando el balón en cancha de futbolito de Greenclub', cls: '' },
                { img: `${IMG}/padel-partido.webp`, alt: 'Partido de pádel en la cancha techada de Greenclub', cls: '' },
              ].map((f) => (
                <div key={f.img} className={`relative overflow-hidden rounded-xl ${f.cls}`} style={{ aspectRatio: '16/10', border: `1px solid ${C.line}` }}>
                  <Image src={f.img} alt={f.alt} fill className="object-cover" sizes="(min-width:768px) 30vw, 50vw" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="px-4 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl`} style={{ color: C.ink }}>
                «Las canchas son 10/10»
              </h2>
              <div className="flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                <Stars value={BIZ.rating} color={C.green} />
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.ink }}>
                  {BIZ.rating.toLocaleString('es-CL')} · {BIZ.reviews}
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <blockquote
                  className="rounded-2xl p-6 h-full flex flex-col"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.estrellas} color={C.green} className="w-4 h-4" />
                  <p className="text-base md:text-lg leading-relaxed mt-3 flex-1" style={{ color: C.ink }}>
                    “{r.texto}”
                  </p>
                  <footer className="mt-4 flex items-baseline justify-between">
                    <p className={`${display.className} text-sm uppercase`} style={{ color: C.green }}>
                      {r.nombre}
                    </p>
                    <p className={`${mono.className} text-[11px]`} style={{ color: C.muted }}>
                      Google
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegar ── */}
      <section id="llegar" className="px-4 md:px-8 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold tracking-[0.25em] uppercase`} style={{ color: C.green }}>
              La salida sur de Talca
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`} style={{ color: C.ink }}>
              Veintiocho Sur, contra los cerros
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 mt-8 items-start">
            <Reveal delay={80}>
              <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '16/9', border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/complejo.webp`}
                  alt="Vista del complejo deportivo Greenclub con sus canchas y cerros de fondo"
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 50vw, 100vw"
                />
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Reservas', BIZ.phoneDisplay],
                  ['Instagram', BIZ.instagram],
                ].map(([k, v]) => (
                  <li key={k} className="flex items-baseline justify-between gap-4 pb-3" style={{ borderBottom: `1px solid ${C.line}` }}>
                    <span className={`${mono.className} text-[11px] uppercase tracking-widest`} style={{ color: C.muted }}>{k}</span>
                    <span className="text-sm md:text-base font-semibold text-right" style={{ color: C.ink }}>{v}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ backgroundColor: C.green, color: C.night }}
                >
                  Arrendar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ border: `2px solid ${C.line}`, color: C.ink }}
                >
                  Cómo llegar
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-6 py-3 text-base font-bold transition-transform active:scale-95"
                  style={{ border: `2px solid ${C.line}`, color: C.ink }}
                >
                  {BIZ.instagram}
                </a>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de Greenclub, Veintiocho Sur, Talca"
                  className="w-full h-[320px] md:h-[420px] block"
                  style={{ border: 0 }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="px-4 md:px-8 py-8" style={{ backgroundColor: '#070D09', color: C.muted }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={36} height={36} className="h-9 w-9 rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-sm leading-none`} style={{ color: C.ink }}>
                Greenclub
              </p>
              <p className={`${mono.className} text-[11px] mt-1`}>{BIZ.address}, {BIZ.city}</p>
            </div>
          </div>
          <div className={`${mono.className} text-[11px] flex flex-wrap gap-x-5 gap-y-1`}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:underline">{BIZ.phoneDisplay}</a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline">Google Maps</a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
