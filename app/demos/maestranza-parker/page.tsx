import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const IMG = '/demos/maestranza-parker'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({ src: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'maestranza-parker',
  title: 'Maestranza Parker — Metalurgia y soldadura en la Ruta 5 Sur',
  description:
    'Taller de metalurgia en Panguilemo, Talca: soldadura, fabricación, reparación de carrocerías y cajas de camión. Cotiza por WhatsApp.',
  image: `${IMG}/soldador.webp`,
})

const C = {
  carbon: '#17191C',
  steel: '#24282D',
  hazard: '#F2B705',
  hazardDeep: '#B98600',
  spark: '#E4572E',
  paper: '#F1EFEA',
  card: '#F9F7F1',
  muted: '#545B61',
  line: 'rgba(23,25,28,0.14)',
}

const NAV_LINKS = [
  { label: 'Trabajo', href: '#trabajo' },
  { label: 'Taller', href: '#taller' },
  { label: 'Dónde', href: '#ubicacion' },
]

const TRABAJOS = [
  {
    src: 'soldador.webp',
    t: 'Soldadura y metalmecánica',
    d: 'Vigas, estructuras y piezas a medida, soldadas en taller.',
    alt: 'Soldador con careta trabajando sobre una viga metálica con chispas en el taller',
    big: true,
  },
  {
    src: 'carroceria.webp',
    t: 'Carrocerías y cajas',
    d: 'Reparación y fabricación de carrocerías para camiones.',
    alt: 'Trabajador soldando sobre la caja roja de un camión dentro del taller',
    big: false,
  },
  {
    src: 'pluma.webp',
    t: 'Trabajo en terreno',
    d: 'Camión pluma y equipo para instalaciones y rescate de estructuras.',
    alt: 'Camión pluma trabajando en terreno levantando un tambor con manguera',
    big: false,
  },
  {
    src: 'camion.webp',
    t: 'Entregas a la puerta',
    d: 'Piezas y estructuras terminadas que salen listas para usar.',
    alt: 'Camión con caja amarilla fabricada saliendo del taller por la Ruta 5',
    big: false,
  },
  {
    src: 'modulo.webp',
    t: 'Módulos acondicionados',
    d: 'Oficinas y containers habilitados por dentro: piso, aire y terminaciones.',
    alt: 'Interior de un módulo acondicionado con piso flotante, cielo de madera y aire acondicionado instalado',
    big: false,
  },
]

function Hazard({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${C.carbon} 0 14px, ${C.hazard} 14px 28px)`,
      }}
    />
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'hazard' | 'carbon' | 'ghost'
  external?: boolean
}) {
  const st =
    tone === 'hazard'
      ? { backgroundColor: C.hazard, color: C.carbon }
      : tone === 'carbon'
        ? { backgroundColor: C.carbon, color: '#FFFFFF' }
        : { backgroundColor: 'rgba(255,255,255,0.12)', color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.8)' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-md text-lg tracking-wider uppercase font-semibold transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function MaestranzaParkerPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.carbon }}>
      <BlitzNav
        name="Maestranza Parker"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wider`}
        theme={{ over: 'dark', bar: 'rgba(23,25,28,0.94)', ink: '#FFFFFF', line: 'rgba(255,255,255,0.16)', btnBg: C.hazard, btnInk: C.carbon }}
        ctaLabel="Cotizar"
      />

      {/* HERO — soldador a sangre, borde de señalética */}
      <section id="inicio" className="relative overflow-hidden min-h-[92svh] flex items-end" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/soldador.webp`}
          alt="Soldador de Maestranza Parker soldando una viga metálica con chispas en el taller de Panguilemo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(23,25,28,0.35) 0%, rgba(23,25,28,0.2) 40%, rgba(23,25,28,0.9) 100%)' }} aria-hidden="true" />
        <div className="relative w-full max-w-6xl mx-auto px-5 pb-12 pt-40">
          <Reveal>
            <p className={`${mono.className} inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs uppercase tracking-widest`} style={{ backgroundColor: C.hazard, color: C.carbon }}>
              Metalurgia · Soldadura · Ruta 5 Sur
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-5 text-[56px] leading-[0.9] md:text-[100px] uppercase font-extrabold`} style={{ color: '#FFFFFF' }}>
              Maestranza
              <br />
              <span style={{ color: C.hazard }}>Parker</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Soldadura, fabricación y reparación metálica a la salida de Talca, sobre la
              Ruta 5 Sur. Trabajo pesado, bien hecho y a tiempo.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={5} color={C.hazard} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: '#FFFFFF' }}>
                {BIZ.rating} en su ficha de Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="hazard">Cotizar un trabajo</Btn>
              <Btn href="#trabajo" tone="ghost" external={false}>Ver lo que hacemos</Btn>
            </div>
          </Reveal>
        </div>
        <Hazard className="absolute bottom-0 inset-x-0 h-3" />
      </section>

      {/* TRABAJO — mosaico de fotos reales */}
      <section id="trabajo" className="py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.hazardDeep }}>Nuestro trabajo</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`}>
              Acero que <span style={{ color: C.hazardDeep }}>trabaja duro</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {TRABAJOS.map((w, i) => (
              <Reveal key={w.src} delay={i * 60} className={w.big ? 'col-span-2 md:row-span-2' : ''}>
                <li className={`relative overflow-hidden rounded-lg h-full ${w.big ? 'aspect-[4/3] md:aspect-auto md:min-h-[420px]' : 'aspect-square'}`} style={{ boxShadow: '0 12px 28px rgba(23,25,28,0.16)' }}>
                  <Image
                    src={`${IMG}/${w.src}`}
                    alt={w.alt}
                    fill
                    sizes={w.big ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4" style={{ background: 'linear-gradient(180deg, rgba(23,25,28,0) 0%, rgba(23,25,28,0.85) 100%)' }}>
                    <p className={`${display.className} uppercase text-lg md:text-2xl font-semibold leading-none`} style={{ color: '#FFFFFF' }}>{w.t}</p>
                    <p className="mt-1 text-xs md:text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.85)' }}>{w.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={100}>
            <p className="mt-4 text-sm" style={{ color: C.muted }}>
              Fotos reales publicadas en la ficha de Google Maps del taller.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TALLER + HORARIO — banda carbón con borde señalética */}
      <section id="taller" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Hazard className="absolute top-0 inset-x-0 h-3 opacity-90" />
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.hazard }}>El taller</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`} style={{ color: '#FFFFFF' }}>
              Hecho en <span style={{ color: C.hazard }}>Panguilemo</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Un taller de metalurgia al costado de la Ruta 5 Sur, a minutos del centro de
              Talca. Trae tu pieza, tu plano o tu problema: lo soldamos, lo reparamos o lo
              fabricamos.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Soldadura eléctrica y trabajo en plancha, viga y estructuras',
                'Reparación y fabricación de carrocerías y cajas de camión',
                'Servicio en terreno con camión pluma',
                'Trabajo a medida para agro, transporte y construcción',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span aria-hidden="true" className="mt-1.5 h-2.5 w-2.5 shrink-0" style={{ backgroundColor: C.hazard, transform: 'rotate(45deg)' }} />
                  <span className="leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="hazard">Cotizar por WhatsApp</Btn>
              <a
                href={`tel:+${BIZ.phone}`}
                className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-md text-lg tracking-wider uppercase font-semibold tap-44`}
                style={{ color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.7)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg overflow-hidden" style={{ backgroundColor: C.steel, boxShadow: '0 20px 44px rgba(0,0,0,0.35)' }}>
              <p className={`${mono.className} px-5 pt-4 pb-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                Horario de atención — ficha de Google
              </p>
              <ul>
                {[
                  ['Lunes a viernes', '9:00–18:00'],
                  ['Sábado y domingo', 'Cerrado'],
                ].map(([d, h], i) => (
                  <li key={d} className="flex items-baseline justify-between gap-4 px-5 py-3.5" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)' }}>
                    <span className={`${display.className} uppercase text-xl tracking-wide font-semibold`} style={{ color: '#FFFFFF' }}>{d}</span>
                    <span className={`${mono.className} text-base`} style={{ color: h === 'Cerrado' ? '#FFB4A8' : C.hazard }}>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="px-5 py-3.5 text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.75)', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                {BIZ.address}, {BIZ.city}. Cotiza por WhatsApp o pasa directamente por el taller.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.hazardDeep }}>Dónde</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`}>
              Ruta 5 Sur <span style={{ color: C.hazardDeep }}>Km 246</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>
              {BIZ.address} · sector Panguilemo, {BIZ.city}, Región del Maule. Salida
              directa por la carretera, espacio para camiones junto al taller.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={MAPS_URL} tone="carbon">Cómo llegar</Btn>
            </div>
            <div className="relative mt-8 aspect-[4/3] rounded-lg overflow-hidden max-w-sm" style={{ boxShadow: '0 14px 32px rgba(23,25,28,0.18)' }}>
              <Image
                src={`${IMG}/camion.webp`}
                alt="Camión con caja amarilla fabricada por la maestranza en el acceso al taller por la Ruta 5"
                fill
                sizes="(min-width: 768px) 25vw, 80vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(23,25,28,0.18)', border: `6px solid ${C.carbon}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.spark }}>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} text-4xl md:text-6xl uppercase font-extrabold leading-[0.95]`} style={{ color: '#FFFFFF' }}>
            ¿Qué hay que soldar?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Manda foto y medidas por WhatsApp y te cotizamos a la brevedad.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="carbon">Cotizar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: '#111315', color: 'rgba(241,239,234,0.7)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl uppercase tracking-wider font-semibold`} style={{ color: '#FFFFFF' }}>
              {BIZ.name}
            </p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.horarioSemana}</p>
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
