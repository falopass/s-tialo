import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, MAPS_EMBED, MAPS_URL, RESENAS, WA_LINK, WA_LINK_VALORES } from './content'

const IMG = '/demos/cetty-soccer-padel-club'

const display = localFont({ src: '../../fonts/anton/normal-400.woff2', weight: '400' })
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({ src: '../../fonts/space-mono/normal-400.woff2', weight: '400' })

export const metadata: Metadata = demoMetadata({
  slug: 'cetty-soccer-padel-club',
  title: 'Cetty Soccer Padel Club — Canchas techadas de pádel en Molina',
  description:
    'Tres canchas techadas de pádel en Camino Agua Fría, Molina. Pasto sintético, vidrio y buena iluminación. Reserva tu hora por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const C = {
  navy: '#0A1230',
  deep: '#060B1F',
  court: '#1E49C8',
  lime: '#C9F24E',
  orange: '#E8893B',
  paper: '#F2F5FB',
  muted: '#4A5578',
  line: 'rgba(10,18,48,0.12)',
}

const NAV_LINKS = [
  { label: 'Las pistas', href: '#pistas' },
  { label: 'Cómo se juega', href: '#partido' },
  { label: 'Dónde y cuándo', href: '#marcador' },
]

function CornerBrackets({ color = C.lime }: { color?: string }) {
  const b = `3px solid ${color}`
  return (
    <>
      <span className="absolute top-0 left-0 w-7 h-7 pointer-events-none" style={{ borderTop: b, borderLeft: b }} aria-hidden="true" />
      <span className="absolute top-0 right-0 w-7 h-7 pointer-events-none" style={{ borderTop: b, borderRight: b }} aria-hidden="true" />
      <span className="absolute bottom-0 left-0 w-7 h-7 pointer-events-none" style={{ borderBottom: b, borderLeft: b }} aria-hidden="true" />
      <span className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none" style={{ borderBottom: b, borderRight: b }} aria-hidden="true" />
    </>
  )
}

function Btn({
  href,
  tone,
  children,
  external = true,
}: {
  href: string
  tone: 'lime' | 'ghost' | 'navy'
  children: React.ReactNode
  external?: boolean
}) {
  const style =
    tone === 'lime'
      ? { backgroundColor: C.lime, color: C.navy }
      : tone === 'navy'
        ? { backgroundColor: C.navy, color: '#FFFFFF' }
        : { color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.65)' }
  return (
    <a
      href={href}
      target={external && !href.startsWith('#') ? '_blank' : undefined}
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 uppercase text-xl tracking-wide tap-44`}
      style={style}
    >
      {children}
    </a>
  )
}

const PASOS = [
  { n: '01', t: 'Reserva por WhatsApp', d: 'Escríbenos, dime qué día y a qué hora quieres jugar, y te confirmamos la pista.' },
  { n: '02', t: 'Llega con tu equipo', d: 'Cancha techada y pelotas listas: solo falta tu paleta. El recinto tiene estacionamiento junto a la entrada.' },
  { n: '03', t: 'A darlo todo', d: 'Pasto sintético, muros de vidrio y buena iluminación para que el partido corra parejo hasta la noche.' },
]

export default function CettyPadelClub() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.navy }}>
      <BlitzNav
        name="Cetty Pádel"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-widest text-[15px]`}
        theme={{ over: 'dark', bar: 'rgba(10,18,48,0.95)', ink: '#FFFFFF', line: 'rgba(255,255,255,0.16)', btnBg: C.lime, btnInk: C.navy }}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* HERO — foto real de la pista a sangre completa, marco con líneas de cancha */}
      <section id="inicio" className="relative overflow-hidden min-h-[92svh] flex items-end" style={{ backgroundColor: C.navy }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cancha techada de pádel de Cetty: alfombra azul, estructura verde lima, muros de vidrio y banners Gatorade"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(6,11,31,0.35) 0%, rgba(6,11,31,0.2) 35%, rgba(6,11,31,0.92) 100%)' }}
          aria-hidden="true"
        />
        {/* línea perimetral de la cancha */}
        <div className="absolute inset-4 md:inset-8 border border-[#C9F24E]/40 pointer-events-none" aria-hidden="true" />
        <div className="absolute left-1/2 top-8 bottom-8 w-px bg-[#C9F24E]/25 hidden md:block pointer-events-none" aria-hidden="true" />

        <div className="relative w-full max-w-6xl mx-auto px-5 pb-12 pt-44">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado de su material, ya optimizado */}
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="w-[150px] md:w-[190px] h-auto drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]"
            />
          </Reveal>
          <Reveal delay={70}>
            <p className={`${mono.className} mt-5 inline-flex items-center gap-2 px-3 py-1 text-xs uppercase tracking-[0.2em]`} style={{ backgroundColor: C.lime, color: C.navy }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h1 className={`${display.className} mt-5 text-[56px] leading-[0.92] md:text-[110px] uppercase`} style={{ color: '#FFFFFF' }}>
              Se juega en
              <br />
              <span style={{ color: C.lime }}>Agua Fría</span>
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-5 text-lg leading-relaxed max-w-md font-medium" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Tres canchas techadas de pádel a la salida de Molina: pasto sintético,
              muros de vidrio y luz para jugar hasta las 9 de la noche.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.lime} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: '#FFFFFF' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="lime">Reserva tu hora</Btn>
              <Btn href="#pistas" tone="ghost" external={false}>Ver las pistas</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MARCADOR — banda tipo tablero LED */}
      <section className="py-5" style={{ backgroundColor: C.lime }}>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-3 gap-3 md:gap-6 text-center">
          {[
            [`${BIZ.rating} ★`, 'en Google'],
            ['3', 'canchas techadas'],
            ['24 hrs', 'los sábados'],
          ].map(([big, small]) => (
            <div key={small}>
              <p className={`${display.className} uppercase text-3xl md:text-5xl leading-none`} style={{ color: C.navy }}>{big}</p>
              <p className={`${mono.className} mt-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(10,18,48,0.75)' }}>{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LAS PISTAS — fotos reales con esquinas de vidrio de cancha */}
      <section id="pistas" className="py-16 md:py-24 scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.court }}>Las pistas</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.navy }}>
              Techadas, de vidrio <span style={{ color: C.court }}>y bien iluminadas</span>
            </h2>
            <p className="mt-4 text-lg max-w-xl" style={{ color: C.muted }}>
              El club tiene tres canchas techadas de nivel profesional, publicadas por
              ellos mismos en {BIZ.ig}. Se juega parejo, con sol o con lluvia.
            </p>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-5 gap-4 md:gap-5">
            <Reveal className="md:col-span-3">
              <figure className="relative aspect-[4/3] md:aspect-auto md:h-full md:min-h-[420px]">
                <div className="absolute inset-0">
                  <Image
                    src={`${IMG}/cancha.webp`}
                    alt="Jugador ejecutando un saque bajo el techo de la cancha techada de Cetty"
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CornerBrackets />
                <figcaption className={`${mono.className} absolute bottom-3 left-10 text-[11px] uppercase tracking-[0.2em] px-2 py-1`} style={{ backgroundColor: 'rgba(6,11,31,0.8)', color: C.lime }}>
                  bajo techo, todo el año
                </figcaption>
              </figure>
            </Reveal>
            <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
              {[
                { src: 'jugada-1.webp', alt: 'Jugador de polera azul preparando una devolución de derecha junto a la estructura verde lima', cap: 'pasto sintético' },
                { src: 'remate.webp', alt: 'Jugador saltando para rematar una volea alta con paleta azul dentro de la pista', cap: 'muros de vidrio' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 90}>
                  <figure className="relative aspect-[4/3] md:aspect-auto md:h-[200px]">
                    <div className="absolute inset-0">
                      <Image src={`${IMG}/${f.src}`} alt={f.alt} fill sizes="(min-width: 768px) 30vw, 50vw" className="object-cover" />
                    </div>
                    <CornerBrackets />
                    <figcaption className={`${mono.className} absolute bottom-3 left-10 text-[11px] uppercase tracking-[0.2em] px-2 py-1`} style={{ backgroundColor: 'rgba(6,11,31,0.8)', color: C.lime }}>
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120}>
            <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { src: 'jugada-2.webp', alt: 'Jugador de rojo sacando bajo el banner Gatorade de la pista' },
                { src: 'jugada-3.webp', alt: 'Jugador alcanzando una pelota de revés junto al poste verde de la cancha' },
                { src: 'jugada-4.webp', alt: 'Jugador ejecutando un drive de derecha frente al muro de vidrio' },
              ].map((f) => (
                <li key={f.src} className="relative aspect-square">
                  <Image src={`${IMG}/${f.src}`} alt={f.alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                </li>
              ))}
              <li className="relative aspect-square flex flex-col items-start justify-center p-4" style={{ backgroundColor: C.navy }}>
                <p className={`${display.className} uppercase text-2xl md:text-3xl leading-tight`} style={{ color: C.lime }}>
                  Las fotos
                  <br />
                  son del club
                </p>
                <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  publicadas en {BIZ.ig}
                </p>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* EL PARTIDO — diagrama de cancha con los pasos */}
      <section id="partido" className="relative py-16 md:py-24 overflow-hidden scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.lime }}>Cómo se juega</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: '#FFFFFF' }}>
              Tu partido, <span style={{ color: C.lime }}>en tres jugadas</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mt-10 border-2 border-[#C9F24E]/50" aria-label="Pasos para jugar en Cetty">
              {/* red + líneas de servicio */}
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#C9F24E]/50 hidden md:block" aria-hidden="true">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-px w-[104vw] max-w-[86%] hidden" aria-hidden="true" />
              </div>
              <div className="hidden md:block absolute left-[25%] top-0 bottom-0 w-px bg-[#C9F24E]/25" aria-hidden="true" />
              <div className="hidden md:block absolute left-[75%] top-0 bottom-0 w-px bg-[#C9F24E]/25" aria-hidden="true" />
              <div className="hidden md:block absolute left-[25%] right-[25%] top-1/2 h-px bg-[#C9F24E]/25" aria-hidden="true" />

              <ol className="relative grid md:grid-cols-3">
                {PASOS.map((p, i) => (
                  <li
                    key={p.n}
                    className="relative p-6 md:p-8"
                    style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(201,242,78,0.35)', borderColor: 'rgba(201,242,78,0.35)' }}
                  >
                    <p className={`${mono.className} text-sm`} style={{ color: C.orange }}>{p.n}</p>
                    <h3 className={`${display.className} mt-2 uppercase text-2xl md:text-3xl leading-tight`} style={{ color: '#FFFFFF' }}>
                      {p.t}
                    </h3>
                    <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                      {p.d}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
              <p className="text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Los valores y la disponibilidad se consultan directo: escribe y te responden en el día.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:ml-auto">
                <Btn href={WA_LINK_VALORES} tone="lime">Consultar valores</Btn>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* LA GALERÍA — reseñas reales */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.court }}>La galería</p>
                <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.navy }}>
                  Los que ya jugaron <span style={{ color: C.court }}>opinan</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.court} className="w-5 h-5" />
                <p className={`${mono.className} text-sm`} style={{ color: C.navy }}>
                  {BIZ.rating} de 5 · {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <figure className="h-full flex flex-col p-6 bg-white" style={{ borderTop: `4px solid ${C.lime}`, boxShadow: '0 12px 30px rgba(10,18,48,0.10)' }}>
                  <Stars value={r.estrellas} color={C.orange} />
                  <blockquote className="mt-4 text-base leading-relaxed flex-1" style={{ color: '#26304F' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {r.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} mt-6 inline-block text-sm underline underline-offset-4 tap-44`} style={{ color: C.court }}>
              Ver las {BIZ.reviews} reseñas en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* MARCADOR — horario + mapa */}
      <section id="marcador" className="py-16 md:py-24 scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.lime }}>Dónde y cuándo</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: '#FFFFFF' }}>
              Camino a <span style={{ color: C.lime }}>Agua Fría</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              {BIZ.address}, a minutos de la plaza de {BIZ.city}. Entre semana la pista
              abre hasta las 21:00; el sábado el recinto no cierra.
            </p>

            {/* tablero de horario tipo marcador */}
            <div className="mt-8" style={{ backgroundColor: C.deep, border: `2px solid rgba(201,242,78,0.45)` }}>
              <p className={`${mono.className} px-5 pt-4 pb-3 text-[11px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                Horario publicado en su ficha de Google
              </p>
              <ul>
                {HORARIO.map(([d, h], i) => (
                  <li key={d} className="flex items-baseline justify-between gap-4 px-5 py-3.5" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)' }}>
                    <span className={`${display.className} uppercase text-xl tracking-wide`} style={{ color: '#FFFFFF' }}>{d}</span>
                    <span className={`${mono.className} text-base`} style={{ color: h === 'cerrado' ? C.orange : C.lime }}>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="lime">Reservar por WhatsApp</Btn>
              <Btn href={MAPS_URL} tone="ghost">Cómo llegar</Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <CornerBrackets />
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-[320px] md:h-[480px] border-0"
                style={{ filter: 'grayscale(15%)' }}
              />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.court }}>
        <div className="absolute inset-x-0 top-1/2 h-px bg-white/25" aria-hidden="true" />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.lime }}>Nos vemos en la pista</p>
          <h2 className={`${display.className} mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: '#FFFFFF' }}>
            ¿Cuándo es el partido?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Escribe por WhatsApp y asegura tu hora en cancha techada.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="lime">Reservar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-8 pb-6" style={{ backgroundColor: C.deep, color: 'rgba(255,255,255,0.72)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl uppercase tracking-widest`} style={{ color: '#FFFFFF' }}>
              {BIZ.name}
            </p>
            <p className="text-sm mt-1">
              {BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-5 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
