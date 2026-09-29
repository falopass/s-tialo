import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «letrero de madera al costado del camino».
 * El parador se anuncia con un letrero pintado a mano y guirnaldas de
 * banderines entre los árboles — ese es el motivo propio del demo:
 * banderines de colores separando las secciones y tablones oscuros
 * con la oferta del letrero real. Verde bosque + crema + teja.
 */
const C = {
  bosque: '#1E3D2F',
  bosqueOsc: '#142A20',
  crema: '#F4EFE3',
  papel: '#FDF9EE',
  ink: '#241C12',
  muted: '#6B5D48',
  teja: '#C84B26',
  tejaDeep: '#9E3817',
  ocre: '#DDA03C',
  madera: '#5A3D22',
  linea: 'rgba(36,28,18,0.14)',
  lineaBosque: 'rgba(244,239,227,0.16)',
}

const FLAGS = ['#E4572E', '#F2B441', '#5B8C51', '#F4EFE3', '#C84B26', '#E88B3A']

export const metadata: Metadata = demoMetadata({
  slug: 'parador-turistico-manantial',
  title: 'Parador Manantial · Comida al paso en el km 27, Vilches Alto',
  description:
    'Parador al paso en el camino a Vilches, km 27, San Clemente: completos, churrascos, empanadas, café y refugio. 5,0 estrellas en Google. Viernes a domingo.',
  image: `${IMG}/banderas.webp`,
})

const NAV_LINKS = [
  { label: 'El letrero', href: '#letrero' },
  { label: 'Lo que dicen', href: '#resenas' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// La oferta real del letrero del local (fotografiado en su ficha de Maps).
const LETRERO = [
  'Completos',
  'Sandwichs',
  'Churrascos',
  'Empanadas',
  'Té y café',
  'Leche con chocolate',
  'Bebidas y jugos',
  'Cervezas',
  'Refugio al paso',
  'Artesanías',
]

// Reseñas reales de Google (5,0 ★ · 7 reseñas), verbatim de su ficha.
const RESENAS = [
  {
    nombre: 'alex Ca',
    fecha: 'hace 4 meses',
    texto: '¡Los mejores completos de todo Chile! La tía Lily nos recibió de inmediato.',
  },
  {
    nombre: 'Felipe Parada',
    fecha: 'hace 6 meses',
    texto: 'Sin duda uno de los lugares más acogedores de Vilches: la señora Lili, un amor de persona. Tradición vilchana para todos los excursionistas.',
  },
  {
    nombre: 'Camila Riquelme',
    fecha: 'hace 7 meses',
    texto: 'Rústico, hogareño, cálido y comida de calidad hecha en el momento. Un excelente servicio.',
  },
  {
    nombre: 'Claudia Muñoz',
    fecha: 'hace 7 meses',
    texto: 'Comida fresca, casera, a excelente precio.',
  },
  {
    nombre: 'Jose',
    fecha: 'hace 4 meses',
    texto: 'Todo muy rico y muy buena atención.',
  },
  {
    nombre: 'Rocío C',
    fecha: 'hace 8 meses',
    texto: 'Muy agradable el lugar y rico todo.',
  },
]

const LUGAR_FOTOS = [
  {
    src: `${IMG}/terraza.webp`,
    alt: 'Terraza del parador con sombrillas y sillas entre los árboles',
    pie: 'la terraza, al sol del bosque',
  },
  {
    src: `${IMG}/interior.webp`,
    alt: 'Interior del local con banderas chilenas y vitrina',
    pie: 'adentro, con sus banderas',
  },
  {
    src: `${IMG}/churrasco.webp`,
    alt: 'Churrasco del parador con una cerveza artesanal',
    pie: 'churrasco y chela local',
  },
  {
    src: `${IMG}/completo.webp`,
    alt: 'Completo italiano del parador con jugo',
    pie: 'el completo que recomiendan todos',
  },
  {
    src: `${IMG}/entrada.webp`,
    alt: 'Entrada del parador en el km 27 con guirnaldas de banderines',
    pie: 'el acceso, a un costado del camino',
  },
  {
    src: `${IMG}/extra-1.webp`,
    alt: 'Ventana de atención del parador entre el bosque',
    pie: 'la ventana al camino',
  },
]

/** Guirnalda de banderines: el motivo del parador, visto en sus fotos. */
function Banderines({ sobre }: { sobre: 'crema' | 'bosque' }) {
  const line = sobre === 'crema' ? C.ink : C.crema
  return (
    <div className="relative -mt-1 mb-[-1px]" aria-hidden="true">
      <svg viewBox="0 0 1200 56" className="w-full h-9 md:h-12 block" preserveAspectRatio="none">
        <path d="M0,6 Q300,44 600,30 Q900,16 1200,40" fill="none" stroke={line} strokeWidth="1.4" opacity="0.55" />
        {Array.from({ length: 12 }, (_, i) => {
          // puntos sobre la curva (aprox.) y colores alternados del banderín real
          const x = 52 + i * 100
          const y = x < 600 ? 10 + (x / 600) * 18 : 28 - ((x - 600) / 600) * 4 + 6
          const color = FLAGS[i % FLAGS.length]
          return <path key={i} d={`M${x},${y} L${x - 13},${y + 24} L${x + 13},${y + 24} Z`} fill={color} />
        })}
      </svg>
    </div>
  )
}

export default function ParadorManantial() {
  return (
    <main className={body.className} style={{ backgroundColor: C.crema, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold tracking-tight`}>
            Parador Manantial
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(20,42,32,0.94)',
          ink: C.crema,
          line: C.lineaBosque,
          btnBg: C.ocre,
          btnInk: '#241C12',
        }}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
      />

      {/* ── Hero: la entrada con banderines ───────────────────── */}
      <section id="inicio" className="relative">
        <div className="relative h-[560px] md:h-[640px]">
          <img
            src={`${IMG}/banderas.webp`}
            alt="Entrada del Parador Manantial en el km 27 del camino a Vilches, con guirnaldas de banderines de colores"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(20,42,32,0.42) 0%, rgba(20,42,32,0.05) 38%, rgba(20,42,32,0.88) 100%)' }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 h-full flex flex-col justify-end pb-12 md:pb-16">
            <Reveal>
              <div className="flex items-center gap-2.5">
                <Stars value={5} color={C.ocre} className="w-4 h-4" />
                <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.crema }}>
                  5,0 · {BIZ.reviewsCount} reseñas en Google
                </span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} font-extrabold leading-[0.98] text-5xl md:text-7xl mt-3 max-w-3xl`} style={{ color: '#FFF9EC' }}>
                El paradero del km 27, camino a Vilches
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,249,236,0.92)' }}>
                Comida al paso de {BIZ.duenos}: completos, churrascos, empanadas y un café
                caliente antes de seguir subiendo al parque.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-bold tap-44 active:scale-95 transition-transform"
                  style={{ backgroundColor: C.ocre, color: '#241C12' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[52px] px-6 rounded-full text-base font-semibold tap-44 active:scale-95 transition-transform"
                  style={{ border: '1.5px solid rgba(255,249,236,0.55)', color: '#FFF9EC' }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
        <div style={{ backgroundColor: C.bosqueOsc }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-1">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: 'rgba(244,239,227,0.75)' }}>
              {BIZ.address} · {BIZ.hoursLabel}
            </p>
          </div>
          <Banderines sobre="bosque" />
        </div>
      </section>

      {/* ── El letrero ────────────────────────────────────────── */}
      <section id="letrero" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
          <Reveal>
            <img
              src={`${IMG}/letrero.webp`}
              alt="Letrero de madera del Parador Manantial pintado a mano con la oferta del local"
              className="w-full rounded-2xl object-cover aspect-[3/4]"
              style={{ border: `1.5px solid ${C.linea}` }}
              loading="lazy"
            />
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              el letrero real, junto al camino
            </p>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.tejaDeep }}>
                lo que ofrece el letrero
              </p>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl mt-3 leading-tight`}>
                Comida de verdad, antes del parque
              </h2>
              <p className="mt-4 text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                El letrero lo dice tal cual: cocina al paso para quienes suben a Vilches,
                con cosas hechas en el momento y el refugio para sentarse un rato.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3.5">
                {LETRERO.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span aria-hidden="true" className="w-2.5 h-2.5 rounded-[3px] rotate-45 shrink-0" style={{ backgroundColor: C.ocre }} />
                    <span className="font-semibold text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={200}>
              <p className={`${mono.className} mt-7 text-xs leading-relaxed`} style={{ color: C.muted }}>
                Atienden {BIZ.duenos}. La carta completa y el día a día se ven en su Instagram {BIZ.igUser}.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ───────────────────────────────────────────── */}
      <section id="resenas" style={{ backgroundColor: C.bosque }}>
        <Banderines sobre="bosque" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.ocre }}>
                  lo que dicen los que paran
                </p>
                <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl mt-3 leading-tight`} style={{ color: C.crema }}>
                  Cinco estrellas, siete de siete
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <Stars value={5} color={C.ocre} className="w-5 h-5" />
                <span className={`${mono.className} text-sm font-semibold`} style={{ color: C.crema }}>
                  5,0 en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-9 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={(i % 3) * 90}>
                <figure
                  className="h-full rounded-2xl p-5"
                  style={{ backgroundColor: 'rgba(244,239,227,0.07)', border: `1.5px solid ${C.lineaBosque}` }}
                >
                  <blockquote className="text-[15px] leading-relaxed" style={{ color: C.crema }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.15em]`} style={{ color: 'rgba(244,239,227,0.65)' }}>
                    {r.nombre} · {r.fecha}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El lugar ──────────────────────────────────────────── */}
      <section id="lugar" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.tejaDeep }}>
              el lugar
            </p>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl mt-3 leading-tight`}>
              Madera, sombrillas y bosque nativo
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {LUGAR_FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={(i % 3) * 80}>
                <figure>
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="w-full aspect-[4/5] object-cover rounded-xl"
                    style={{ border: `1.5px solid ${C.linea}` }}
                  />
                  <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                    {f.pie}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ───────────────────────────────────────── */}
      <section id="llegar" style={{ backgroundColor: C.bosqueOsc }}>
        <Banderines sobre="bosque" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.ocre }}>
                cómo llegar
              </p>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl mt-3 leading-tight`} style={{ color: C.crema }}>
                Subiendo a Vilches, a mano izquierda
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <dl className="mt-7 space-y-5">
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(244,239,227,0.6)' }}>
                    dirección
                  </dt>
                  <dd className="mt-1 text-lg font-bold" style={{ color: C.crema }}>
                    {BIZ.address}, {BIZ.city}
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(244,239,227,0.6)' }}>
                    horario
                  </dt>
                  <dd className="mt-1 text-lg font-bold" style={{ color: C.crema }}>
                    {BIZ.hoursLabel}
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(244,239,227,0.6)' }}>
                    contacto
                  </dt>
                  <dd className="mt-1">
                    <a href={`tel:${BIZ.phoneTel}`} className="text-lg font-bold underline underline-offset-4 tap-44 inline-block" style={{ color: C.crema }}>
                      {BIZ.phoneDisplay}
                    </a>
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} ml-4 text-sm underline underline-offset-4 tap-44 inline-block`}
                      style={{ color: 'rgba(244,239,227,0.8)' }}
                    >
                      {BIZ.igUser}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={180}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center h-[52px] px-6 rounded-full text-base font-bold tap-44 active:scale-95 transition-transform"
                style={{ backgroundColor: C.ocre, color: '#241C12' }}
              >
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden tap-44"
              style={{ border: `1.5px solid ${C.lineaBosque}` }}
              aria-label="Abrir ubicación del Parador Manantial en Google Maps"
            >
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Parador Manantial, km 27, Vilches Alto"
                className="w-full h-[320px] md:h-[420px] pointer-events-none"
                style={{ border: 0, backgroundColor: C.bosque }}
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────── */}
      <footer className="pt-9 pb-7" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} font-extrabold text-2xl`}>{BIZ.short}</p>
            <p className={`${mono.className} mt-1.5 text-xs`} style={{ color: C.muted }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-[11px] underline underline-offset-4 tap-44`}
              style={{ color: C.muted }}
            >
              {BIZ.igUser}
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-[48px] px-6 rounded-full text-sm font-bold tap-44 active:scale-95 transition-transform"
              style={{ backgroundColor: C.bosque, color: C.crema }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label="Escribir por WhatsApp al Parador Manantial" />
    </main>
  )
}
