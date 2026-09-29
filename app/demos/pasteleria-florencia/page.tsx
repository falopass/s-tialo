import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  waLink,
  MAPS_URL,
  MAPS_EMBED,
  HOURS,
  CARTA,
  REVIEWS,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-florencia',
  title: 'Pastelería Florencia — Tortas, berlines y kuchen en Quechereguas 2218, Molina',
  description:
    'Pastelería en Quechereguas 2218, Molina. Tortas a pedido y creativas, berlines fritos, kuchen y queques. 4.2 estrellas en Google. Encarga por WhatsApp.',
  image: `${IMG}/vitrina-tortas.webp`,
})

// Paleta del óvalo: crema de papel + el verde bosque de su marca
const C = {
  paper: '#F6F0E0',
  card: '#FBF7EA',
  ink: '#24301E',
  board: '#213A28',
  green: '#2E5B34',
  line: '#DED4B8',
  muted: '#6E6A54',
} as const

const navTheme = {
  over: 'light' as const,
  bar: 'rgba(246,240,224,0.94)',
  ink: C.ink,
  line: 'rgba(36,48,30,0.14)',
  btnBg: C.green,
  btnInk: '#F6F0E0',
}

function Eyebrow({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.32em]`}
      style={{ color: onDark ? '#9CC5A3' : C.green }}
    >
      {children}
    </p>
  )
}

/** Etiqueta colgante como las tarjetas de precio de su vitrina. */
function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-block text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 border rounded-sm -rotate-2`}
      style={{ borderColor: C.green, color: C.green, backgroundColor: C.card }}
    >
      {children}
    </span>
  )
}

export default function FlorenciaPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className="font-semibold tracking-wide">{BIZ.name}</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'La vitrina', href: '#vitrina' },
          { label: 'El local', href: '#local' },
          { label: 'Reseñas', href: '#resenas' },
        ]}
        waLink={WA_LINK}
        theme={navTheme}
        fontClass={mono.className}
        ctaLabel="Encargar"
      />

      {/* ── HERO: la vitrina como vitrina ── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(46,91,52,0.05) 0 1px, transparent 1px 56px)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pt-36 md:pb-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center min-h-[100dvh]">
          <div>
            <Reveal>
              <Eyebrow>Pastelería · Quechereguas 2218 · Molina</Eyebrow>
              <h1 className={`${display.className} mt-4 text-[2.5rem] leading-[1.04] md:text-6xl`}>
                La vitrina de
                <br />
                Quechereguas
              </h1>
              <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: C.muted }}>
                Tortas, berlines y kuchen: la vitrina se llena cada mañana
                desde las 8:30.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waLink('Hola, quiero encargar una torta en Pastelería Florencia, Quechereguas 2218')}
                  target="_blank"
                  rel="noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[13px] uppercase tracking-[0.14em] rounded-sm`}
                  style={{ backgroundColor: C.green, color: C.paper }}
                >
                  Encargar una torta
                </a>
                <a
                  href="#vitrina"
                  className={`${mono.className} text-[12px] uppercase tracking-[0.2em] py-3 border-b`}
                  style={{ color: C.green, borderColor: C.green }}
                >
                  Ver la vitrina
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Stars value={4.2} color={C.green} />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  4.2 · 10 reseñas en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="rounded-sm overflow-hidden border-4 shadow-xl"
                style={{ borderColor: C.green }}
              >
                <Image
                  src={`${IMG}/rincon.webp`}
                  alt="El rincón de Pastelería Florencia: vitrina con tortas, pizarra Nuestra Receta, balanza turquesa y gramófono antiguo"
                  width={1200}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <div className="absolute -top-3 right-4">
                <Tag>Nuestra receta</Tag>
              </div>
              <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                Su pizarra, su balanza y el gramófono: el local tal como es
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CINTA de la casa ── */}
      <div className="overflow-hidden border-y" style={{ backgroundColor: C.board, borderColor: C.green }}>
        <div className="cinta flex whitespace-nowrap py-2.5">
          {[0, 1].map((k) => (
            <span
              key={k}
              aria-hidden={k === 1}
              className={`${mono.className} text-[12px] uppercase tracking-[0.24em] px-4`}
              style={{ color: C.paper }}
            >
              {'Tortas a pedido · Berlines fritos · Queques · Kuchen · Dulces cubiertos · Quechereguas 2218 · '.repeat(2)}
            </span>
          ))}
        </div>
      </div>

      {/* ── LA VITRINA: carta en la pizarra verde ── */}
      <section id="vitrina" style={{ backgroundColor: C.board, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow onDark>De la vitrina y a pedido</Eyebrow>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
              Lo que sale cada mañana al mostrador
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 gap-4 md:gap-5">
            {CARTA.map((c, i) => (
              <Reveal key={c.n} delay={i * 70}>
                <article className="grid grid-cols-[112px_1fr] gap-4 p-4 rounded-sm border" style={{ borderColor: 'rgba(246,240,224,0.2)', backgroundColor: 'rgba(246,240,224,0.05)' }}>
                  <Image
                    src={`${IMG}/${c.img}`}
                    alt={c.alt}
                    width={400}
                    height={400}
                    className="w-28 h-28 object-cover rounded-sm"
                  />
                  <div>
                    <h3 className={`${display.className} text-lg md:text-xl`} style={{ color: '#EFE7CE' }}>
                      {c.n}
                    </h3>
                    <p className="mt-1.5 text-[14px] leading-snug" style={{ color: 'rgba(246,240,224,0.75)' }}>
                      {c.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className={`${mono.className} mt-8 text-[11px] uppercase tracking-[0.2em] text-center`} style={{ color: 'rgba(246,240,224,0.6)' }}>
              Tortas temáticas y de ocasión, a pedido por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EL LOCAL: la tienda de barrio ── */}
      <section id="local" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <Reveal>
          <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.line }}>
            <Image
              src={`${IMG}/local.webp`}
              alt="Interior de Pastelería Florencia: vitrinas llenas de tortas, pizarras con la carta y el local ordenado de Quechereguas"
              width={960}
              height={712}
              className="w-full h-auto"
            />
          </div>
          <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            El local, con las vitrinas llenas y sus pizarras a la vista
          </p>
        </Reveal>
        <div>
          <Reveal>
            <Eyebrow>La tienda de Quechereguas</Eyebrow>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
              Local limpio, atención amable y todo recién hecho
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: C.muted }}>
              Así lo describen sus propias reseñas. La vitrina se renueva cada
              día y las tortas de celebración se agendan por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-7 divide-y border rounded-sm px-5 py-2" style={{ borderColor: C.line, backgroundColor: C.card }}>
              {HOURS.map((h, i) => (
                <div key={i} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[12px] uppercase tracking-[0.14em]`} style={{ color: C.green }}>
                    {h.d}
                  </span>
                  <span className="text-[15px]">{h.h}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" className="border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Lo que dicen en Google</Eyebrow>
              <div className="mt-4 flex items-end gap-4">
                <span className={`${display.className} text-7xl md:text-8xl leading-none`} style={{ color: C.green }}>
                  4.2
                </span>
                <div className="pb-2">
                  <Stars value={4.2} color={C.green} className="w-5 h-5" />
                  <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas en Google
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.a} delay={i * 80}>
                  <figure className="border rounded-sm p-5" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <blockquote className="text-[15px] leading-snug" style={{ color: C.ink }}>
                      “{r.q}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                      {r.a}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ENCARGA ── */}
      <section id="encargar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16">
        <div>
          <Reveal>
            <Eyebrow>Pedidos y encargos</Eyebrow>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
              Tu torta se agenda por WhatsApp
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: C.muted }}>
              Cuenta la fecha, la cantidad de personas y la idea: las tortas
              temáticas se hacen a pedido. Retiro en Quechereguas 2218.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[13px] uppercase tracking-[0.14em] rounded-sm`}
                style={{ backgroundColor: C.green, color: C.paper }}
              >
                Encargar por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneDisplay.replace(/\s/g, '')}`}
                className={`${mono.className} text-[12px] tracking-[0.12em] py-3 border-b`}
                style={{ color: C.green, borderColor: C.green }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.line }}>
            <LazyMap
              src={MAPS_EMBED}
              className="w-full h-[300px] border-0"
              title={`Mapa de ${BIZ.name} en ${BIZ.addressFull}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className={`${mono.className} mt-3 inline-block text-[11px] uppercase tracking-[0.2em] border-b py-1`}
            style={{ color: C.green, borderColor: C.green }}
          >
            Cómo llegar a Quechereguas 2218
          </a>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: C.board, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className={`${display.className} text-base`}>{BIZ.name}</p>
            <a
              href={`tel:${BIZ.phoneDisplay.replace(/\s/g, '')}`}
              className={`${mono.className} text-[12px] tracking-[0.12em]`}
              style={{ color: '#9CC5A3' }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(246,240,224,0.55)' }}>
            {BIZ.address} · {BIZ.city} · {BIZ.region}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />

      <style>{`
        .cinta { animation: cinta 26s linear infinite; }
        @keyframes cinta { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .cinta { animation: none; } }
      `}</style>
    </main>
  )
}
