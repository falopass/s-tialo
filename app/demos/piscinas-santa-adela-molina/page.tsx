import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, RESENAS, WA_LINK } from './content'

const IMG = '/demos/piscinas-santa-adela-molina'

const display = localFont({ src: '../../fonts/anton/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/barlow/normal-400.woff2', weight: '400' })
const bodySemi = localFont({ src: '../../fonts/barlow/normal-600.woff2', weight: '600' })
const mono = localFont({ src: '../../fonts/space-mono/normal-400.woff2', weight: '400' })

export const metadata: Metadata = demoMetadata({
  slug: 'piscinas-santa-adela-molina',
  title: 'Piscinas Santa Adela — Piscinas y canchas en Molina',
  description:
    'Piscinas al aire libre, canchas sintéticas, quinchos y cumpleaños en Callejón Santa Adela 20, Molina. Abierto todos los días de 12:00 a 20:00.',
  image: `${IMG}/piscinas.webp`,
})

const C = {
  deep: '#05303F',
  deepSoft: '#0A4156',
  agua: '#0E92BC',
  aguaClara: '#7FCBDE',
  sol: '#F2B33D',
  arena: '#FBF3E2',
  papel: '#FFFDF7',
  line: 'rgba(5,48,63,0.14)',
}

const NAV_LINKS = [
  { label: 'Qué hay', href: '#que-hay' },
  { label: 'Cumpleaños', href: '#cumpleanos' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const LUGARES = [
  {
    n: '01',
    t: 'Las piscinas',
    d: 'Dos piscinas al aire libre para grandes y chicos, con pasto alrededor para tender la toalla y quedarse toda la tarde.',
    src: 'ninos.webp',
    alt: 'Niños nadando en la piscina de Santa Adela un día soleado',
  },
  {
    n: '02',
    t: 'Canchas sintéticas',
    d: 'Pasto sintético cercado y con luminarias para el partido del fin de semana o el campeonato entre amigos.',
    src: 'cancha.webp',
    alt: 'Partido de fútbol en la cancha de pasto sintético de Santa Adela',
  },
  {
    n: '03',
    t: 'Quinchos y pérgolas',
    d: 'Mesas techadas y rincones de sombra para el asado familiar, la once o simplemente arrancar del sol.',
    src: 'quincho.webp',
    alt: 'Quincho techado con mesas de picnic en el recinto de Santa Adela',
  },
]

export default function SantaAdelaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.arena, color: C.deep }}>
      <BlitzNav
        name="Piscinas Santa Adela"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(5,48,63,0.85)', ink: '#FFFFFF', line: 'rgba(255,255,255,0.18)', btnBg: C.sol, btnInk: C.deep }}
        ctaLabel="Consultar"
      />

      {/* HERO — foto full-bleed, titular sobre el agua */}
      <section id="inicio" className="relative">
        <div className="relative h-[560px] md:h-[640px]">
          <Image
            src={`${IMG}/piscinas.webp`}
            alt="Piscinas al aire libre de Santa Adela bajo el sol, rodeadas de cercos y árboles"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(5,48,63,0.45) 0%, rgba(5,48,63,0.12) 38%, rgba(5,48,63,0.88) 100%)' }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 pb-10 md:pb-14">
              <Reveal>
                <p className={`${mono.className} text-xs uppercase tracking-[0.25em]`} style={{ color: C.sol }}>
                  Callejón Santa Adela 20 · Molina
                </p>
              </Reveal>
              <Reveal delay={90}>
                <h1 className={`${display.className} mt-3 text-[54px] leading-[0.95] md:text-[110px] uppercase`} style={{ color: '#FFFFFF' }}>
                  El verano
                  <br />
                  se pasa en el agua
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-4 max-w-md text-lg leading-snug" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  Piscinas, canchas sintéticas y quinchos para el día completo, a diez minutos del centro de Molina.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${bodySemi.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base transition-transform active:scale-[0.97] tap-44`}
                    style={{ backgroundColor: C.sol, color: C.deep }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href="#que-hay"
                    className={`${bodySemi.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base tap-44`}
                    style={{ color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.7)' }}
                  >
                    Qué hay acá
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* cinta de datos */}
        <div className="border-y" style={{ backgroundColor: C.deep, borderColor: 'rgba(255,255,255,0.12)' }}>
          <div className="max-w-6xl mx-auto px-5 grid grid-cols-3 divide-x" style={{ color: '#FFFFFF' }}>
            <div className="py-4 pr-3 text-center" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.sol }}>{BIZ.rating}★</p>
              <p className={`${mono.className} mt-1 text-[10px] md:text-xs uppercase tracking-widest`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                {BIZ.reviews} reseñas Google
              </p>
            </div>
            <div className="py-4 px-3 text-center" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
              <p className={`${display.className} text-2xl md:text-3xl`}>12–20</p>
              <p className={`${mono.className} mt-1 text-[10px] md:text-xs uppercase tracking-widest`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                Todos los días
              </p>
            </div>
            <div className="py-4 pl-3 text-center">
              <p className={`${display.className} text-2xl md:text-3xl`}>2+2</p>
              <p className={`${mono.className} mt-1 text-[10px] md:text-xs uppercase tracking-widest`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                Piscinas y canchas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUÉ HAY — índice numerado estilo pizarra del recinto */}
      <section id="que-hay" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.agua }}>Qué hay</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`}>
              Un solo lugar, <span style={{ color: C.agua }}>tres planes</span>
            </h2>
          </Reveal>

          <div className="mt-10">
            {LUGARES.map((l, i) => (
              <Reveal key={l.n} delay={i * 70}>
                <article
                  className={`grid md:grid-cols-2 gap-6 md:gap-12 items-center py-8 md:py-10 ${i === 0 ? '' : 'border-t'}`}
                  style={{ borderColor: C.line }}
                >
                  <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden" style={{ boxShadow: '0 16px 36px rgba(5,48,63,0.18)' }}>
                      <Image
                        src={`${IMG}/${l.src}`}
                        alt={l.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                    <p className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: C.aguaClara }}>{l.n}</p>
                    <h3 className={`${display.className} mt-2 text-3xl md:text-5xl uppercase`}>{l.t}</h3>
                    <p className="mt-3 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(5,48,63,0.78)' }}>{l.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CUMPLEAÑOS — banda oscura con fotos */}
      <section id="cumpleanos" className="relative overflow-hidden py-16 md:py-24" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
            <Reveal>
              <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.sol }}>Celebraciones</p>
              <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: '#FFFFFF' }}>
                Los cumpleaños <span style={{ color: C.sol }}>se hacen acá</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Sala de cumpleaños, juegos inflables y taca-taca para los más chicos, y el agua al
                lado para cuando aprieta el calor. Consulta fechas y valores por WhatsApp.
              </p>
              <div className="mt-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${bodySemi.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base transition-transform active:scale-[0.97] tap-44`}
                  style={{ backgroundColor: C.sol, color: C.deep }}
                >
                  Agendar fecha
                </a>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-3">
              <Reveal delay={80}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden" style={{ boxShadow: '0 14px 30px rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/cumpleanos.webp`}
                    alt="Sala de cumpleaños de Santa Adela decorada con globos y mensaje de Feliz Cumpleaños"
                    fill
                    sizes="(min-width: 768px) 25vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mt-8" style={{ boxShadow: '0 14px 30px rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/juegos.webp`}
                    alt="Mesa de taca-taca y juego inflable en el recinto de Santa Adela"
                    fill
                    sizes="(min-width: 768px) 25vw, 45vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FOTO AÉREA — respiro full-width */}
      <section className="relative">
        <div className="relative h-[300px] md:h-[420px]">
          <Image
            src={`${IMG}/aerea.webp`}
            alt="Vista aérea de las dos piscinas de Santa Adela rodeadas de pasto"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} inline-block -mt-7 relative z-10 px-3 py-2 rounded text-xs uppercase tracking-widest`} style={{ backgroundColor: C.papel, color: C.deep, boxShadow: '0 6px 16px rgba(5,48,63,0.18)' }}>
              Las dos piscinas desde el aire
            </p>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.agua }}>Lo que dicen</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`}>
              La gente vuelve <span style={{ color: C.agua }}>cada verano</span>
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <Stars value={4.3} color={C.agua} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`}>{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <figure className="h-full rounded-2xl p-6" style={{ backgroundColor: C.papel, boxShadow: '0 10px 26px rgba(5,48,63,0.10)', border: `1px solid ${C.line}` }}>
                  <Stars value={r.estrellas} color={C.sol} className="w-4 h-4" />
                  <blockquote className="mt-3 text-lg leading-snug" style={{ color: 'rgba(5,48,63,0.88)' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs uppercase tracking-widest`} style={{ color: 'rgba(5,48,63,0.6)' }}>
                    {r.autor} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.agua }}>Cómo llegar</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`}>
              Al final del <span style={{ color: C.agua }}>callejón Santa Adela</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(5,48,63,0.78)' }}>
              {BIZ.address}, {BIZ.city}, Región del Maule. Abierto todos los días de 12:00 a 20:00.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bodySemi.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base transition-transform active:scale-[0.97] tap-44`}
                style={{ backgroundColor: C.deep, color: '#FFFFFF' }}
              >
                Abrir en Google Maps
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bodySemi.className} inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-base tap-44`}
                style={{ color: C.deep, boxShadow: `inset 0 0 0 2px ${C.deep}` }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 18px 44px rgba(5,48,63,0.2)', border: `6px solid ${C.deep}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.agua }}>
        <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false" preserveAspectRatio="none" viewBox="0 0 400 200">
          <defs>
            <pattern id="sa-olas" width="80" height="30" patternUnits="userSpaceOnUse">
              <path d="M0 15 Q20 3 40 15 T80 15" fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="2.5" />
            </pattern>
          </defs>
          <rect width="400" height="200" fill="url(#sa-olas)" />
        </svg>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: '#FFFFFF' }}>
            ¿Nos vemos en el agua?
          </h2>
          <p className={`${bodySemi.className} mt-4 text-lg`} style={{ color: 'rgba(255,255,255,0.92)' }}>
            Pregunta por entradas, cumpleaños o arriendo de canchas.
          </p>
          <div className="mt-7">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${bodySemi.className} inline-flex items-center justify-center px-7 py-3 rounded-lg text-base transition-transform active:scale-[0.97] tap-44`}
              style={{ backgroundColor: C.deep, color: '#FFFFFF' }}
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: C.deep, color: 'rgba(255,255,255,0.75)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl uppercase`} style={{ color: '#FFFFFF' }}>{BIZ.name}</p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.horario}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
