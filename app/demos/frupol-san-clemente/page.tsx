import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2' }],
})
const monoBold = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2' }],
})

/**
 * Dirección de arte: «cartón de exportación». La identidad sale de
 * las marcas reales del grupo — el azul Agricom y el verde lima de
 * su isotipo — aplicadas como etiqueta de caja de fruta: datos en
 * Space Mono estampado, verde huerto de fondo y Bricolage Grotesque
 * para el titular de estación.
 */
const C = {
  orchard: '#0E2416',
  deep: '#0A1A10',
  navy: '#1D3B8B',
  lime: '#7CBF43',
  limeSoft: '#A8D977',
  cherry: '#C2351F',
  cream: '#F4F1E4',
  paper: '#FBF8EE',
  ink: '#17251B',
  muted: '#5B6853',
  line: 'rgba(23,37,27,0.16)',
  lineDark: 'rgba(255,255,255,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'frupol-san-clemente',
  title: 'Frupol San Clemente — Fruta del Maule para el mundo',
  description:
    'Productora de fruta fresca en San Clemente, Maule, parte del grupo Agricom: huertos, packing y exportación. Ficha con 5,0 en Google.',
  image: '/demos/frupol-san-clemente/huerto.webp',
})

const NAV_LINKS = [
  { label: 'La fruta', href: '#fruta' },
  { label: 'El proceso', href: '#proceso' },
  { label: 'El predio', href: '#predio' },
  { label: 'Contacto', href: '#contacto' },
]

const ESPECIES = [
  'Cerezas',
  'Uva de mesa',
  'Paltos',
  'Mandarinas',
  'Clementinas',
  'Ciruelas',
  'Nogales',
  'Almendros',
  'Granadas',
]

const PROCESO = [
  {
    n: '01',
    src: `${IMG}/aerea.webp`,
    alt: 'Vista aérea del predio frutícola con cuarteles de huertos parejos',
    titulo: 'Producimos',
    desc: 'Cuarteles de huertos en la tierra maulina: riego, poda y cosecha al ritmo de cada especie.',
  },
  {
    n: '02',
    src: `${IMG}/packing.webp`,
    alt: 'Línea de empaque de fruta con operarios en la planta',
    titulo: 'Embalamos',
    desc: 'La fruta pasa por la línea de packing: selección, calibre y caja para que llegue en estado de exportación.',
  },
  {
    n: '03',
    src: `${IMG}/planta-aerea.webp`,
    alt: 'Vista aérea de la planta de empaque entre huertos',
    titulo: 'Exportamos',
    desc: 'Del predio al puerto: la planta entre sus propios huertos, como parte del grupo Agricom.',
  },
]

export default function FrupolSanClemente() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span style={{ ...display.style, fontWeight: 800 }}>FRUPOL</span>}
        links={NAV_LINKS}
        waLink={`tel:${BIZ.phoneTel}`}
        ctaLabel="Llamar"
        theme={{
          over: 'dark',
          bar: 'rgba(14,36,22,0.93)',
          ink: '#F4F1E4',
          line: 'rgba(255,255,255,0.12)',
          btnBg: C.lime,
          btnInk: '#0E2416',
        }}
      />
      <CallFab href={`tel:${BIZ.phoneTel}`} label={`Llamar a ${BIZ.name}`} bg={C.lime} fg={C.orchard} />

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/huerto.webp`}
          alt="Hileras de cerezos en flor en un huerto del grupo Frupol"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,26,16,0.38) 0%, rgba(10,26,16,0.12) 40%, rgba(10,26,16,0.94) 90%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-14">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.2em] mb-4`} style={{ color: C.limeSoft }}>
              {BIZ.name.toUpperCase()} · {BIZ.city.toUpperCase()}, MAULE
            </p>
            <h1
              className={`${display.className} text-[2.6rem] leading-[1.03] md:text-7xl text-white max-w-3xl`}
              style={{ fontWeight: 800 }}
            >
              Del huerto de San Clemente{' '}
              <span style={{ color: C.limeSoft }}>a la mesa del mundo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-4 max-w-xl text-white/85">
              {BIZ.rubro} del grupo Agricom: huertos, packing y exportación
              desde el corazón del Maule.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              {[`${BIZ.googleRating} ★ en Google`, BIZ.grupo, 'Cruce K-565 × K-569'].map((chip) => (
                <span
                  key={chip}
                  className={`${mono.className} text-[11px] tracking-[0.1em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(124,191,67,0.16)', color: '#D6EFC0', border: '1px solid rgba(124,191,67,0.5)' }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: C.lime, color: C.orchard }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href="#predio"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}
              >
                Ver el predio
              </a>
            </div>
            <p className={`${mono.className} text-[10px] tracking-[0.12em] mt-5`} style={{ color: 'rgba(255,255,255,0.55)' }}>
              HUERTOS DEL GRUPO AGRICOM · ARCHIVO CORPORATIVO
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PRUEBA ─────────────────────────────────────────────── */}
      <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 md:py-9 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className={`${display.className} text-3xl leading-none`} style={{ ...display.style, fontWeight: 800, color: C.navy }}>
                {BIZ.googleRating}
              </span>
              <div>
                <Stars value={5} color={C.navy} className="w-4 h-4" />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.12em] mt-1`} style={{ color: C.muted }}>
                  {BIZ.googleReviews} reseñas en Google Maps
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <p className="text-sm" style={{ color: C.muted }}>
              La agrícola detrás de la ficha pertenece al{' '}
              <strong style={{ color: C.ink }}>grupo Agricom</strong>, empresa
              de <strong style={{ color: C.ink }}>Westfalia Fruit</strong>.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-sm" style={{ color: C.muted }}>
              Predio con planta en <strong style={{ color: C.ink }}>San Clemente</strong>, entre los huertos del Maule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LA FRUTA ───────────────────────────────────────────── */}
      <section id="fruta" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.cherry }}>
              Origen Maule
            </p>
            <h2
              className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`}
              style={{ fontWeight: 800 }}
            >
              Las especies que salen{' '}
              <span style={{ color: C.navy }}>de la agrícola</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4 max-w-xl" style={{ color: C.muted }}>
              La cartola frutícola del grupo: cada especie viaja en su propia
              caja, con su etiqueta al día.
            </p>
          </Reveal>

          {/* Etiquetas de caja — estampadas, sin foto inventada */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mt-10">
            {ESPECIES.map((e, i) => (
              <Reveal key={e} delay={i * 50}>
                <div
                  className="rounded-xl border-2 border-dashed px-4 py-4 md:py-5 flex items-center justify-between gap-2"
                  style={{ borderColor: 'rgba(29,59,139,0.35)', backgroundColor: i % 3 === 0 ? C.cream : '#fff' }}
                >
                  <span
                    className={`${display.className} text-lg md:text-xl`}
                    style={{ fontWeight: 800, color: C.ink }}
                  >
                    {e}
                  </span>
                  <span className={`${mono.className} text-[9px] tracking-[0.14em] text-right leading-tight`} style={{ color: C.navy }}>
                    PRODUCTO DE
                    <br />
                    CHILE
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ────────────────────────────────────────────── */}
      <section id="proceso" className="py-16 md:py-24" style={{ backgroundColor: C.orchard }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.limeSoft }}>
              De la rama a la caja
            </p>
            <h2
              className={`${display.className} text-3xl md:text-5xl leading-[1.05] text-white max-w-2xl`}
              style={{ fontWeight: 800 }}
            >
              Producimos, embalamos{' '}
              <span style={{ color: C.limeSoft }}>y exportamos</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
              El lema del grupo, tal cual: la misma empresa controla el
              huerto, el packing y la salida al mundo.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-10">
            {PROCESO.map((p, i) => (
              <Reveal key={p.titulo} delay={i * 90}>
                <article>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                    <span
                      className={`${monoBold.className} absolute top-3 left-3 text-lg px-2 py-0.5 rounded`}
                      style={{ backgroundColor: C.lime, color: C.orchard }}
                    >
                      {p.n}
                    </span>
                  </div>
                  <h3
                    className={`${display.className} text-2xl text-white mt-4`}
                    style={{ fontWeight: 800 }}
                  >
                    {p.titulo}
                  </h3>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Grupo */}
          <Reveal delay={140}>
            <div
              className="mt-12 rounded-2xl border p-6 md:p-8 flex flex-wrap items-center gap-6 md:gap-10"
              style={{ borderColor: C.lineDark, backgroundColor: 'rgba(255,255,255,0.05)' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- logos webp ya optimizados en public/ */}
              <img src={`${IMG}/agricom.webp`} alt="Logo de Agricom" className="h-14 w-auto rounded bg-white p-1.5" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/westfalia.webp`} alt="Logo de Westfalia Fruit" className="h-14 w-auto rounded bg-white p-1.5" />
              <p className="text-sm leading-relaxed flex-1 min-w-[220px]" style={{ color: 'rgba(255,255,255,0.75)' }}>
                Frupol es la agrícola del <strong className="text-white">grupo Agricom</strong>,
                empresa chilena de <strong className="text-white">Westfalia Fruit</strong>:
                la fruta sale con respaldo exportador internacional.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EQUIPO ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="relative aspect-square rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/equipo.webp`}
                alt="Equipo de trabajadores de la agrícola posando en el huerto"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.cherry }}>
              La gente
            </p>
            <h2
              className={`${display.className} text-3xl md:text-4xl leading-tight`}
              style={{ fontWeight: 800 }}
            >
              El trabajo pesado lo hace{' '}
              <span style={{ color: C.navy }}>gente de la zona</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4" style={{ color: C.muted }}>
              Raleo, poda, cosecha y línea de empaque: en temporada, el predio
              de San Clemente se llena de cuadrillas del Maule que conocen la
              fruta de memoria.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PREDIO + MAPA ──────────────────────────────────────── */}
      <section id="predio" className="py-16 md:py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.cherry }}>
              El predio
            </p>
            <h2
              className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`}
              style={{ fontWeight: 800 }}
            >
              En el cruce de caminos{' '}
              <span style={{ color: C.navy }}>de San Clemente</span>
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-[1.35fr_1fr] gap-6 md:gap-8 mt-8 items-stretch">
            <Reveal>
              <div>
                <div className="rounded-2xl overflow-hidden border h-[260px] md:h-[320px]" style={{ borderColor: C.line }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Frupol San Clemente en Google Maps"
                    className="w-full h-full border-0"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <div className="relative rounded-2xl overflow-hidden border mt-4 aspect-[16/9]" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/predio.webp`}
                    alt="Vista satelital del predio de Frupol San Clemente entre huertos, imagen de Google Maps"
                    fill
                    sizes="(min-width: 768px) 60vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`${mono.className} absolute bottom-2.5 left-2.5 text-[9px] tracking-[0.12em] px-2 py-1 rounded`}
                    style={{ backgroundColor: 'rgba(14,36,22,0.85)', color: '#D6EFC0' }}
                  >
                    VISTA SATELITAL · GOOGLE MAPS
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div
                className="rounded-2xl border p-6 md:p-7 h-full flex flex-col justify-between gap-6"
                style={{ backgroundColor: C.orchard, borderColor: C.lineDark }}
              >
                <div>
                  <p className={`${mono.className} text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.limeSoft }}>
                    Oficina del predio
                  </p>
                  <p className={`${display.className} text-2xl text-white mt-2`} style={{ fontWeight: 800 }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <dl className="mt-4 space-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
                    <div className="flex gap-2">
                      <dt className={`${mono.className} text-[10px] tracking-[0.1em] pt-1 w-[60px] shrink-0`}>FONO</dt>
                      <dd><a href={`tel:${BIZ.phoneTel}`} className="font-semibold text-white">{BIZ.phoneDisplay}</a></dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className={`${mono.className} text-[10px] tracking-[0.1em] pt-1 w-[60px] shrink-0`}>UBICACIÓN</dt>
                      <dd>{BIZ.plusCode}</dd>
                    </div>
                  </dl>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: C.lime, color: C.orchard }}
                  >
                    Llamar a la oficina
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────── */}
      <footer id="contacto" className="py-10 md:py-12" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-6">
            <div>
              <p className={`${display.className} text-lg text-white`} style={{ fontWeight: 800 }}>{BIZ.name}</p>
              <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay} · {BIZ.grupo}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-right">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: C.limeSoft }}>
                GOOGLE MAPS ↗
              </a>
              <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] leading-relaxed mt-8 pt-5 border-t`} style={{ color: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.12)' }}>
            Mockup de muestra para Sitiazo. Datos: ficha de Google Maps ({BIZ.googleRating} ★ · {BIZ.googleReviews} reseñas, consultado sep. 2026)
            y sitio corporativo agricom.cl (archivo). Fotos: archivo corporativo y vista satelital de Google Maps.
          </p>
        </div>
      </footer>
    </main>
  )
}
