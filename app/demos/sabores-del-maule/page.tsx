import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/familjen-grotesk/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/**
 * Dirección de arte: «el toldo de la feria». Una cocinería llamada Sabores
 * del Maule suena a puesto de feria costumbrista: toldo rayado bosque y
 * crema, etiquetas colgando del hilo y carta de pizarrón. La página repite
 * ese puesto: cada sección es un andén numerado con su cenefa rayada.
 * Sin fotos confirmadas del local, las escenas van marcadas como bosquejo.
 */
const C = {
  crema: '#F5EFDF',
  carta: '#FCF8EC',
  bosque: '#1E3D2F',
  bosqueOsc: '#152A20',
  miel: '#B96B1F',
  mielOsc: '#96541A',
  ink: '#1F2A22',
  muted: 'rgba(31,42,34,0.72)',
  line: 'rgba(31,42,34,0.2)',
  onDark: '#F3EDDC',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sabores-del-maule',
  title: 'Sabores del Maule · Cocinería en Talca',
  description:
    'Sabores del Maule en Talca: cocinería casera para llevar. Pide por WhatsApp y retira en el local.',
})

const NAV_LINKS = [
  { label: 'El puesto', href: '#puesto' },
  { label: 'La carta', href: '#carta' },
  { label: 'Dónde', href: '#donde' },
]

// Toldo rayado con alero de medias cañas, como el de los puestos de feria.
function Toldo({ alto = 40 }: { alto?: number }) {
  return (
    <div aria-hidden="true" className="w-full">
      <div
        className="w-full"
        style={{
          height: alto,
          backgroundImage: `repeating-linear-gradient(90deg, ${C.bosque} 0 44px, ${C.crema} 44px 88px)`,
          boxShadow: 'inset 0 -6px 0 rgba(0,0,0,0.15)',
        }}
      />
      <div
        className="w-full h-[18px]"
        style={{
          backgroundImage: `radial-gradient(circle at 22px -4px, ${C.bosque} 21px, transparent 21.5px), radial-gradient(circle at 66px -4px, ${C.crema} 21px, transparent 21.5px)`,
          backgroundSize: '88px 18px',
          backgroundRepeat: 'repeat-x',
        }}
      />
    </div>
  )
}

// Cenefa fina de rayas que separa secciones.
function Cenefa() {
  return (
    <div
      aria-hidden="true"
      className="w-full h-[8px]"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${C.bosque} 0 22px, ${C.crema} 22px 44px)`,
        borderTop: `1px solid ${C.line}`,
        borderBottom: `1px solid ${C.line}`,
      }}
    />
  )
}

const PASOS = [
  { n: '01', titulo: 'Pregunta qué hay', texto: 'Escríbenos por WhatsApp y te contamos qué salió de la cocina hoy.' },
  { n: '02', titulo: 'Encarga tu porción', texto: 'Confirmas tu pedido y queda apartado con tu nombre.' },
  { n: '03', titulo: 'Retiras en Talca', texto: 'Pasas por el local y te llevas la comida recién hecha.' },
]

// Carta de muestra: categorías típicas de cocinería, sin platos ni precios
// confirmados. Va marcada como bosquejo; la carta real la entrega el negocio.
const CARTA = [
  'Almuerzo casero del día',
  'Cazuelas y platos de cuchara',
  'Empanadas de horno',
  'Legumbres de temporada',
  'Postre casero',
]

export default function Page() {
  return (
    <div
      style={{ backgroundColor: C.crema, color: C.ink, ...SPACING }}
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'light',
          bar: C.crema,
          ink: C.ink,
          line: C.line,
          btnBg: C.bosque,
          btnInk: '#fff',
        }}
      />

      {/* HERO: el puesto con su toldo */}
      <section id="inicio" className="relative pt-16 md:pt-20">
        <Toldo alto={46} />
        <div className="max-w-3xl mx-auto px-5 pt-8 pb-14 md:pb-20 text-center">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] tracking-[0.25em] uppercase`}
              style={{ color: C.muted }}
            >
              {BIZ.city} · {BIZ.region}
            </p>
            <h1
              className={`${display.className} uppercase font-bold leading-[0.95] mt-4 text-[46px] md:text-[72px]`}
              style={{ color: C.ink }}
            >
              Sabores
              <br />
              del Maule
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-md mx-auto mt-5"
              style={{ color: C.muted }}
            >
              Cocinería casera para llevar en Talca: pides por WhatsApp y retiras
              tu porción recién hecha.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 px-6 py-3 rounded-full text-base font-semibold text-white active:scale-95 transition-transform whitespace-nowrap"
                style={{ backgroundColor: C.bosque }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#carta"
                className="tap-44 px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap"
                style={{ color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        <Cenefa />
      </section>

      {/* EL PUESTO: tres andenes numerados */}
      <section id="puesto" className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5">
          <Reveal>
            <h2
              className={`${display.className} uppercase font-bold leading-none text-[34px] md:text-[52px] max-w-2xl`}
            >
              Así se pide en el puesto
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <div
                  className="h-full rounded-sm px-5 pt-5 pb-6"
                  style={{ backgroundColor: C.carta, border: `1px solid ${C.line}` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-sm font-bold`} style={{ color: C.bosque }}>
                      Andén {p.n}
                    </span>
                    <span
                      aria-hidden="true"
                      className="w-8 h-8 rounded-full shrink-0"
                      style={{
                        backgroundImage: `repeating-linear-gradient(45deg, ${C.bosque} 0 5px, ${C.crema} 5px 10px)`,
                        border: `1.5px solid ${C.line}`,
                      }}
                    />
                  </div>
                  <h3 className={`${display.className} uppercase font-bold text-xl mt-4`}>{p.titulo}</h3>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>
                    {p.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Cenefa />

      {/* LA CARTA: etiquetas colgando del hilo */}
      <section id="carta" className="py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-5">
          <Reveal>
            <h2
              className={`${display.className} uppercase font-bold leading-none text-[34px] md:text-[52px] text-center`}
            >
              Lo que cuelga del hilo
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mt-12">
              {/* hilo */}
              <div
                aria-hidden="true"
                className="absolute top-0 left-4 right-4 h-px"
                style={{ backgroundColor: C.ink }}
              />
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8">
                {CARTA.map((item, i) => (
                  <li key={item} className="flex flex-col items-center">
                    <div
                      aria-hidden="true"
                      className="w-px h-6"
                      style={{ backgroundColor: C.ink }}
                    />
                    <div
                      className="relative rounded-sm px-5 py-4 shadow-md"
                      style={{
                        backgroundColor: C.carta,
                        border: `1px solid ${C.line}`,
                        transform: `rotate(${i % 2 === 0 ? -1.6 : 1.6}deg)`,
                      }}
                    >
                      <span
                        aria-hidden="true"
                        className="absolute -top-[7px] left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: C.crema, border: `1.5px solid ${C.ink}` }}
                      />
                      <span className="text-base md:text-lg font-semibold whitespace-nowrap">
                        {item}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <p
                className={`${mono.className} text-[10px] uppercase leading-relaxed text-center mt-10`}
                style={{ color: C.muted }}
              >
                Carta de muestra · los platos y precios reales se publican al activar el sitio
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ESCENA: la vitrina del puesto (bosquejo marcado) */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.bosqueOsc }}>
        <div className="max-w-4xl mx-auto px-5">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] tracking-[0.25em] uppercase text-center`}
              style={{ color: 'rgba(243,237,220,0.6)' }}
            >
              Andén de salida
            </p>
            <h2
              className={`${display.className} uppercase font-bold leading-none text-[34px] md:text-[52px] text-center mt-3`}
              style={{ color: C.onDark }}
            >
              Recién hecho, listo para llevar
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <figure
              className="relative mt-10 mx-auto max-w-md rounded-sm overflow-hidden"
              style={{ border: `1.5px dashed rgba(243,237,220,0.35)` }}
            >
              {/* escena CSS: olla con vapor sobre la mesa del puesto */}
              <div
                role="img"
                aria-label="Bosquejo de una olla humeante en el puesto"
                className="relative h-[220px] md:h-[260px]"
                style={{ backgroundColor: C.bosque }}
              >
                {/* mesa */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-0 h-14"
                  style={{ backgroundColor: '#3B2B18' }}
                />
                {/* olla */}
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 -translate-x-1/2 bottom-12 w-[170px] h-[64px] rounded-b-[36px] rounded-t-[10px]"
                  style={{
                    backgroundColor: '#2C2118',
                    boxShadow: 'inset 0 -8px 0 rgba(0,0,0,0.35)',
                  }}
                />
                {/* asas */}
                <div aria-hidden="true" className="absolute left-[calc(50%-104px)] bottom-[104px] w-[20px] h-[10px] rounded-full" style={{ backgroundColor: '#2C2118' }} />
                <div aria-hidden="true" className="absolute right-[calc(50%-104px)] bottom-[104px] w-[20px] h-[10px] rounded-full" style={{ backgroundColor: '#2C2118' }} />
                {/* vapor */}
                <svg
                  viewBox="0 0 200 60"
                  className="absolute left-1/2 -translate-x-1/2 top-4 w-[110px]"
                  aria-hidden="true"
                >
                  {[0, 1, 2].map((i) => (
                    <path
                      key={i}
                      d={`M${60 + i * 40} 55 q 8 -14 0 -26 q -8 -12 0 -24`}
                      fill="none"
                      stroke="rgba(243,237,220,0.45)"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  ))}
                </svg>
                <span
                  className={`${mono.className} absolute top-3 right-3 text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm`}
                  style={{ color: C.onDark, border: '1.5px solid rgba(243,237,220,0.7)' }}
                >
                  Bosquejo
                </span>
              </div>
              <figcaption
                className={`${mono.className} text-[10px] uppercase leading-relaxed px-4 py-3`}
                style={{ backgroundColor: '#121F18', color: 'rgba(243,237,220,0.65)' }}
              >
                Bosquejo · se reemplaza por fotos reales del local al activar el sitio
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-block px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap"
                style={{ backgroundColor: C.mielOsc, color: '#fff' }}
              >
                Consultar qué hay hoy
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DÓNDE: mapa de Talca */}
      <section id="donde" className="py-14 md:py-20">
        <div className="max-w-5xl mx-auto px-5 grid md:grid-cols-[1fr_1.2fr] gap-8 items-start">
          <div>
            <Reveal>
              <h2
                className={`${display.className} uppercase font-bold leading-none text-[34px] md:text-[52px]`}
              >
                En Talca, corazón del Maule
              </h2>
              <p className="text-base md:text-lg leading-relaxed mt-4" style={{ color: C.muted }}>
                La cocina atiende en la comuna de Talca, Región del Maule.
                Coordina tu retiro por WhatsApp.
              </p>
              <div className={`${mono.className} text-xs uppercase leading-loose mt-6`} style={{ color: C.ink }}>
                <p>Comuna · {BIZ.city}</p>
                <p>Región · {BIZ.region}</p>
                <p>
                  Pedidos ·{' '}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 tap-44"
                    style={{ color: C.mielOsc }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-block mt-6 px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap"
                style={{ color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` }}
              >
                Cómo llegar
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="rounded-sm overflow-hidden shadow-lg" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.city}, ${BIZ.region}`}
                className="w-full h-[300px] md:h-[380px] border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PIE */}
      <Cenefa />
      <footer style={{ backgroundColor: C.bosqueOsc }}>
        <div className="max-w-5xl mx-auto px-5 pt-6 pb-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className={`${display.className} uppercase font-bold text-lg`} style={{ color: C.onDark }}>
            {BIZ.name}
          </p>
          <div
            className={`${mono.className} text-[11px] uppercase text-center md:text-right`}
            style={{ color: 'rgba(243,237,220,0.6)' }}
          >
            <p>
              {BIZ.city} · {BIZ.region}
            </p>
            <p>Pedidos solo por WhatsApp · {BIZ.phoneDisplay}</p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
      <div className="[&>div]:static">
        <DemoBand name={BIZ.name} />
      </div>
    </div>
  )
}
