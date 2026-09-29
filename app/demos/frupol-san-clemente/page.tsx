import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Etiqueta de caja de exportación: verde huerto, crema bin y acento cereza.
const C = {
  leaf: '#1E4A2C',
  leafDark: '#142F1C',
  cream: '#F3EEDF',
  paper: '#FBF8EF',
  ink: '#1C2419',
  muted: '#6B7A66',
  line: 'rgba(28,36,25,0.14)',
  lineLight: 'rgba(255,255,255,0.14)',
  cherry: '#B03A2E',
  sun: '#E0A82E',
}

export const metadata: Metadata = demoMetadata({
  slug: 'frupol-san-clemente',
  title: 'Frupol San Clemente — Frutícola del grupo Agricom·Westfalia en el Maule',
  description:
    'Frupol San Clemente: predio frutícola en San Clemente, Maule. Operación del grupo Agricom / Westfalia Fruit; exportación de paltas, cerezas y fruta fresca.',
  image: `${IMG}/predio-satelital.webp`,
})

const NAV_LINKS = [
  { label: 'El predio', href: '#predio' },
  { label: 'La operación', href: '#operacion' },
  { label: 'Del campo a la caja', href: '#proceso' },
  { label: 'Ficha', href: '#ficha' },
]

const PROCESO = [
  { n: '01', t: 'Huerto', d: 'Predios propios y asociados en el valle de San Clemente, a los pies del cruce K-565/K-569.' },
  { n: '02', t: 'Recepción', d: 'La fruta entra a la planta del grupo en el Maule por camión, en bins y cajas de cosecha.' },
  { n: '03', t: 'Proceso', d: 'Líneas de selección y calibre que separan cada calibre y calidad para cada mercado.' },
  { n: '04', t: 'Exportación', d: 'Paletas embaladas bajo la marca del grupo salen a Asia, Europa y América — el pallet dice “Corea”.' },
]

const FICHA = [
  { k: 'Ficha Maps', v: 'Frupol San Clemente — asociación agrícola' },
  { k: 'Sociedad', v: BIZ.legal },
  { k: 'RUT', v: BIZ.rut },
  { k: 'Grupo', v: BIZ.grupo },
  { k: 'Ubicación', v: 'K-565 con K-569, San Clemente, Maule' },
  { k: 'Teléfono', v: BIZ.phoneDisplay },
]

function Tag({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 px-3 py-1.5 text-[10px] md:text-[11px] tracking-[0.14em] uppercase font-bold`}
      style={{
        backgroundColor: onDark ? C.sun : 'rgba(20,47,28,0.85)',
        color: onDark ? C.ink : C.cream,
      }}
    >
      {children}
    </span>
  )
}

// Sello circular tipo etiqueta de fruta.
function Sello({ text, sub }: { text: string; sub: string }) {
  return (
    <div
      aria-hidden="true"
      className="w-[110px] h-[110px] md:w-[130px] md:h-[130px] rounded-full flex flex-col items-center justify-center text-center rotate-[-8deg] shadow-lg"
      style={{ backgroundColor: C.sun, color: C.ink }}
    >
      <span className={`${display.className} text-[15px] md:text-[17px] leading-tight`}>{text}</span>
      <span className={`${mono.className} text-[8px] md:text-[9px] tracking-[0.12em] uppercase mt-1 px-3`}>{sub}</span>
    </div>
  )
}

export default function FrupolDemo() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-tight`}>
            FRUPOL<span style={{ color: C.cherry }}>·</span>
            <span className="hidden sm:inline font-normal" style={{ fontFamily: 'inherit', fontSize: '0.7em', color: C.leaf }}> San Clemente</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.leaf, btnInk: '#FFF' }}
      />

      {/* HERO — vista satelital del predio real */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[0.92fr_1.08fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <Tag>Predio frutícola · {BIZ.city}, Maule</Tag>
              </Reveal>
              <Reveal delay={90}>
                <h1 className={`${display.className} mt-6 text-[36px] md:text-[58px] leading-[1.02] uppercase`}>
                  Del huerto de
                  <br />
                  <span style={{ color: C.leaf }}>San Clemente</span>
                  <br />
                  a <em style={{ color: C.cherry, fontStyle: 'normal', textDecoration: 'underline', textDecorationColor: C.sun, textDecorationThickness: '5px' }}>Corea</em>
                </h1>
              </Reveal>
              <Reveal delay={170}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Frupol opera el predio frutícola del cruce K-565/K-569 y
                  embarca su fruta por la planta de su grupo en el Maule —
                  paltas, cerezas y fruta fresca de exportación.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={TEL_LINK}
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-sm active:scale-95 transition-transform text-white"
                    style={{ backgroundColor: C.leaf }}
                  >
                    Llamar a la oficina
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-sm border-2 active:scale-95 transition-transform"
                    style={{ borderColor: C.leaf, color: C.leaf }}
                  >
                    Ver el predio
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <figure className="relative">
                <div className="absolute -top-6 -right-4 md:-top-8 md:-right-6 z-10">
                  <Sello text="ESTE es el predio" sub="vista satelital real" />
                </div>
                <Image
                  src={`${IMG}/predio-satelital.webp`}
                  alt="Vista satelital del predio Frupol en el cruce K-565 con K-569, San Clemente: huertos y tranque de riego"
                  width={1168}
                  height={760}
                  className="w-full h-auto border-4 rounded-sm shadow-xl"
                  style={{ borderColor: C.leaf }}
                  priority
                />
                <figcaption className={`${mono.className} mt-3 text-[10px] md:text-[11px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                  Cruce K-565 / K-569 · San Clemente, Maule
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BANDA GRUPO */}
      <section className="border-y" style={{ borderColor: C.lineLight, backgroundColor: C.leafDark, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '5,0 ★', d: 'en su ficha de Google Maps' },
            { n: 'Grupo', d: 'Agricom · Westfalia Fruit' },
            { n: 'Exporta', d: 'paltas, cerezas, manzanas, cítricos, berries' },
            { n: 'Maule', d: 'predio en San Clemente + planta en Romeral' },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div>
                <p className={`${display.className} text-[26px] md:text-[36px] leading-none`} style={{ color: C.sun }}>
                  {s.n}
                </p>
                <p className={`${mono.className} mt-2 text-[10px] md:text-[11px] tracking-[0.1em] uppercase leading-relaxed`} style={{ color: '#A9BFA6' }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA OPERACIÓN — planta del grupo en el Maule */}
      <section id="operacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <h2 className={`${display.className} text-[30px] md:text-[48px] uppercase leading-[1.03]`}>
              La operación <span style={{ color: C.leaf }}>del grupo</span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} max-w-xs text-[10px] md:text-[11px] tracking-[0.1em] uppercase leading-relaxed`} style={{ color: C.muted }}>
              Fotos reales de la planta Agricom en el Maule (Romeral), la operación hermana que embala la fruta de Frupol.
            </p>
          </Reveal>
        </div>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          <Reveal className="col-span-2">
            <figure className="relative h-full">
              <Image
                src={`${IMG}/linea-packing.webp`}
                alt="Línea de packing con trabajadoras seleccionando fruta en la planta del grupo en el Maule"
                width={900}
                height={1200}
                className="w-full h-full object-cover rounded-sm"
              />
              <figcaption className="absolute bottom-3 left-3"><Tag>Planta Agricom · Romeral</Tag></figcaption>
            </figure>
          </Reveal>
          <Reveal delay={90}>
            <figure className="relative">
              <Image
                src={`${IMG}/planta-maule.webp`}
                alt="Camión de carga frente a la fachada AGRICOM de la planta del grupo"
                width={900}
                height={1200}
                className="w-full h-auto rounded-sm"
              />
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <figure className="relative">
              <Image
                src={`${IMG}/westfalia-camion.webp`}
                alt="Camión en el patio de la planta con el logo de Westfalia Fruit en la fachada"
                width={675}
                height={1200}
                className="w-full h-auto rounded-sm"
              />
            </figure>
          </Reveal>
          <Reveal delay={230} className="col-span-2">
            <figure className="relative">
              <Image
                src={`${IMG}/pallet-corea.webp`}
                alt="Pallet de cajas marca AGRICOM embalado para exportación con destino Corea"
                width={1200}
                height={900}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="absolute top-3 left-3"><Tag onDark>Embarque: Corea</Tag></figcaption>
            </figure>
          </Reveal>
          <Reveal delay={280} className="col-span-2">
            <figure className="relative">
              <Image
                src={`${IMG}/camion-acceso.webp`}
                alt="Camión Scania entrando a la planta del grupo entre árboles"
                width={900}
                height={1200}
                className="w-full h-auto rounded-sm"
              />
              <figcaption className="absolute bottom-3 left-3"><Tag>Acceso de camiones · Maule</Tag></figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* DEL CAMPO A LA CAJA */}
      <section id="proceso" className="border-y" style={{ borderColor: C.lineLight, backgroundColor: C.leaf, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-[30px] md:text-[48px] uppercase leading-[1.03]`}>
              Del campo <span style={{ color: C.sun }}>a la caja</span>
            </h2>
          </Reveal>
          <div className="mt-10 relative">
            <div aria-hidden="true" className="hidden lg:block absolute top-[26px] left-0 right-0 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESO.map((p, i) => (
                <Reveal key={p.n} delay={i * 100}>
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className={`${mono.className} inline-flex items-center justify-center w-[52px] h-[52px] rounded-full text-[15px] font-bold`}
                      style={{ backgroundColor: C.sun, color: C.ink }}
                    >
                      {p.n}
                    </span>
                    <h3 className={`${display.className} mt-4 text-[17px] md:text-xl uppercase tracking-wide`}>{p.t}</h3>
                    <p className="mt-2.5 text-[13px] md:text-sm leading-relaxed" style={{ color: '#C6D4C0' }}>
                      {p.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑA + FICHA */}
      <section id="ficha" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <Reveal>
            <div className="flex items-center gap-3">
              <p className={`${display.className} text-[44px] md:text-[64px] leading-none`} style={{ color: C.cherry }}>
                {BIZ.rating}
              </p>
              <Stars value={5} color={C.cherry} className="w-5 h-5" />
            </div>
          </Reveal>
          {REVIEWS.map((r) => (
            <Reveal key={r.author} delay={120}>
              <blockquote className="mt-6 border-l-4 pl-5" style={{ borderColor: C.sun }}>
                <p className="text-lg md:text-xl italic leading-snug" style={{ color: C.ink }}>
                  “{r.text}”
                </p>
                <footer className={`${mono.className} mt-3 text-[10px] md:text-[11px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                  {r.author} · {r.when} · Google Maps
                </footer>
              </blockquote>
            </Reveal>
          ))}
          <Reveal delay={180}>
            <dl className={`${mono.className} mt-8 border-t text-[12px] md:text-[13px]`} style={{ borderColor: C.line }}>
              {FICHA.map((f) => (
                <div key={f.k} className="flex justify-between gap-5 py-3 border-b" style={{ borderColor: C.line }}>
                  <dt className="uppercase tracking-[0.1em] shrink-0" style={{ color: C.muted }}>
                    {f.k}
                  </dt>
                  <dd className="text-right font-semibold" style={{ color: C.ink }}>
                    {f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="border-4 rounded-sm overflow-hidden h-[300px] md:h-[420px] shadow-xl" style={{ borderColor: C.leaf }}>
            <LazyMap
              src={MAPS_EMBED}
              title={`Mapa de ${BIZ.name}`}
              className="w-full h-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={TEL_LINK}
              className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-sm text-white active:scale-95 transition-transform"
              style={{ backgroundColor: C.leaf }}
            >
              {BIZ.phoneDisplay}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold rounded-sm border-2 active:scale-95 transition-transform"
              style={{ borderColor: C.leaf, color: C.leaf }}
            >
              Cómo llegar
            </a>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.leafDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className={`${display.className} tracking-tight text-white`}>
              FRUPOL<span style={{ color: C.cherry }}>·</span> <span style={{ color: C.sun, fontSize: '0.65em' }}>SAN CLEMENTE</span>
            </p>
            <p className={`${mono.className} mt-1.5 text-[10px] tracking-[0.12em] uppercase`} style={{ color: '#A9BFA6' }}>
              {BIZ.legal} · {BIZ.grupo}
            </p>
          </div>
          <a
            href={TEL_LINK}
            className="inline-flex items-center h-[44px] px-5 text-sm font-bold rounded-sm text-white"
            style={{ backgroundColor: C.leaf }}
          >
            Llamar ahora
          </a>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.cherry} fg="#FFF" />
    </div>
  )
}
