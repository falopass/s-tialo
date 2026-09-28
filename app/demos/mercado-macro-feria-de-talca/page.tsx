import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, FOTOS, MENCIONAN, RESENA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  azul: '#1447B8',
  azulDeep: '#0D2E7B',
  amarillo: '#FFD21F',
  rojo: '#D62828',
  crema: '#FBF5E8',
  papel: '#FFFDF7',
  tinta: '#171310',
  cremaMuted: 'rgba(251,245,232,0.78)',
  lineDark: 'rgba(251,245,232,0.2)',
  muted: 'rgba(23,19,16,0.66)',
  line: 'rgba(23,19,16,0.16)',
}

const BTN_AMARILLO = `${display.className} mmf-btn-y px-7 py-3 text-sm tracking-wide transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#171310] tap-44`
const BTN_LINE = `${display.className} px-7 py-3 text-sm tracking-wide border-2 transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`

export const metadata: Metadata = demoMetadata({
  slug: 'mercado-macro-feria-de-talca',
  title: 'Mercado Macro Feria de Talca · desde las 6 AM en 18 Oriente',
  description:
    'La Macro Feria de Talca: frutas, verduras, tacos y precios de feria desde las 6 AM. Calle 18 Oriente 1878. 4,2 estrellas con 671 opiniones.',
  image: '/demos/mercado-macro-feria-de-talca/interior.webp',
})

const NAV_LINKS = [
  { label: 'Los puestos', href: '#puestos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const TICKER = ['FRUTA DE TEMPORADA', 'VERDURAS', 'PRECIOS DE FERIA', 'TACOS', 'ARTESANÍA', 'DESDE LAS 6 AM']

function Ticker({ invert = false }: { invert?: boolean }) {
  const row = [...TICKER, ...TICKER]
  return (
    <div
      className="overflow-hidden py-2 border-y-2 select-none"
      style={{
        backgroundColor: invert ? C.amarillo : C.tinta,
        borderColor: invert ? C.tinta : C.amarillo,
      }}
      aria-hidden="true"
    >
      <div className="mmf-ticker flex w-max">
        {row.map((w, i) => (
          <span
            key={i}
            className={`${display.className} text-xs md:text-sm tracking-[0.14em] whitespace-nowrap px-5`}
            style={{ color: invert ? C.tinta : C.amarillo }}
          >
            {w} <span className="opacity-50">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Head({
  kicker,
  title,
  dark = false,
}: {
  kicker: string
  title: React.ReactNode
  dark?: boolean
}) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14">
        <p
          className={`${mono.className} inline-block text-[10px] md:text-[11px] uppercase tracking-[0.3em] px-3 py-1 mb-4 font-semibold`}
          style={{ backgroundColor: dark ? C.amarillo : C.rojo, color: dark ? C.tinta : C.papel }}
        >
          {kicker}
        </p>
        <h2
          className={`${display.className} uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2rem,8vw,3.6rem)] max-w-3xl`}
          style={{ color: dark ? C.crema : C.tinta }}
        >
          {title}
        </h2>
      </div>
    </Reveal>
  )
}

export default function MacroFeriaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip font-medium`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .mmf-btn-y { background-color: #FFD21F; color: #171310; box-shadow: 3px 3px 0 #171310 }
        .mmf-btn-y:hover { transform: translate(1px, 1px); box-shadow: 2px 2px 0 #171310 }
        .mmf-ticker { animation: mmf-marq 26s linear infinite }
        @keyframes mmf-marq { to { transform: translateX(-50%) } }
        @media (prefers-reduced-motion: reduce) { .mmf-ticker { animation: none } }
        .mmf-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: #171310 }
        .mmf-band > div { position: static; max-width: 100%; background-color: rgba(10,9,7,0.94) }
      `}</style>

      <BlitzNav
        name={
          <span className="leading-none uppercase">
            <span className="block text-[15px] md:text-lg tracking-[0.01em]">Macro Feria</span>
            <span className={`${mono.className} block text-[8px] md:text-[9px] uppercase tracking-[0.3em] opacity-80`}>
              18 oriente · talca
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(13,46,123,0.94)',
          ink: C.crema,
          line: 'rgba(251,245,232,0.18)',
          btnBg: C.amarillo,
          btnInk: C.tinta,
        }}
      />

      {/* ── Hero panfleto ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.azulDeep, color: C.crema }}>
        <Ticker />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-14 md:pb-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-5`} style={{ color: C.amarillo }}>
              Feria y mercado · {BIZ.city}
            </p>
            <h1 className={`${display.className} uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(2.6rem,10.5vw,5.2rem)] mb-6`}>
              El mercado
              <br />
              <span style={{ color: C.amarillo }}>hortofrutícola</span>
              <br />
              del Maule
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: C.cremaMuted }}>
              Así lo dice el letrero que cuelga adentro: “Número 1 en mercado
              hortofrutícola de la Región del Maule”. Frutas, verduras, tacos
              y los precios que la gente comenta en cada reseña.
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-8`} style={{ color: C.cremaMuted }}>
              {BIZ.opens} · {BIZ.address}, {BIZ.city}
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#llegar" className={BTN_AMARILLO}>
                Cómo llegar
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_LINE}
                style={{ borderColor: C.amarillo, color: C.crema }}
              >
                WhatsApp
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-4 py-2 border-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD21F]"
              style={{ borderColor: C.tinta, backgroundColor: C.papel, color: C.tinta, boxShadow: '3px 3px 0 #171310' }}
            >
              <Stars value={4.2} color={C.rojo} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[11px] tracking-[0.06em] font-semibold`}>
                4,2 · {BIZ.reviews} opiniones en Google
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <figure className="relative max-w-[420px] mx-auto lg:ml-auto -rotate-2" style={{ backgroundColor: C.papel, padding: '12px 12px 44px', boxShadow: '6px 6px 0 rgba(23,19,16,0.9)' }}>
              <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.azul }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la Macro Feria de Talca: pasillo techado con puestos de frutas y verduras"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} absolute bottom-3 left-4 right-4 flex justify-between text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.tinta }}>
                <span>la feria por dentro</span>
                <span>18 oriente</span>
              </figcaption>
              <span className="absolute -top-3 -right-3 rotate-6 px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-wide" style={{ backgroundColor: C.rojo, color: C.papel, boxShadow: '3px 3px 0 rgba(23,19,16,0.9)' }}>
                ¡Desde las 6 AM!
              </span>
            </figure>
          </Reveal>
        </div>
        <Ticker invert />
      </section>

      {/* ── Los puestos (collage) ── */}
      <section id="puestos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Head
          kicker="Los puestos"
          title={
            <>
              Surtido y colorido, <span style={{ color: C.rojo }}>como debe ser</span>
            </>
          }
        />
        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {FOTOS.map((f, i) => (
            <li
              key={f.src}
              className={i === 0 ? 'col-span-2 lg:col-span-1 lg:row-span-2' : ''}
            >
              <Reveal delay={i * 60} className="h-full">
                <figure
                  className="relative h-full"
                  style={{ backgroundColor: C.papel, border: `2px solid ${C.tinta}`, boxShadow: '4px 4px 0 rgba(23,19,16,0.9)' }}
                >
                  <div className={`relative overflow-hidden ${i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-[calc(100%-2.5rem)]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className={`${mono.className} px-3 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold border-t-2`} style={{ borderColor: C.tinta, color: C.tinta }}>
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Lo que dice la gente ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.azul, borderTop: `3px solid ${C.tinta}`, borderBottom: `3px solid ${C.tinta}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p className={`${mono.className} inline-block text-[10px] md:text-[11px] uppercase tracking-[0.3em] px-3 py-1 mb-4 font-semibold`} style={{ backgroundColor: C.amarillo, color: C.tinta }}>
                La gente en Google
              </p>
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,8vw,4rem)] mb-4`} style={{ color: C.crema }}>
                4,2 de 5
                <br />
                <span style={{ color: C.amarillo }}>y 671 opiniones</span>
              </h2>
              <Stars value={4.2} color={C.amarillo} className="w-5 h-5" />
              <p className="text-sm mt-4 mb-6 leading-relaxed" style={{ color: C.cremaMuted }}>
                Lo que más repiten las reseñas de Maps:
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {MENCIONAN.map(([w, n]) => (
                  <li
                    key={w}
                    className={`${display.className} uppercase text-sm px-4 py-2 border-2`}
                    style={{ borderColor: C.amarillo, color: C.amarillo }}
                  >
                    {w} <span className={`${mono.className} text-[9px] align-middle`}>{n}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={140}>
              <figure className="p-6 md:p-8" style={{ backgroundColor: C.papel, border: `3px solid ${C.tinta}`, boxShadow: '8px 8px 0 rgba(23,19,16,0.9)' }}>
                <Stars value={5} color={C.rojo} className="w-4 h-4" />
                <blockquote className={`${display.className} uppercase text-xl md:text-2xl leading-snug mt-4 mb-5`} style={{ color: C.tinta }}>
                  “{RESENA.texto}”
                </blockquote>
                <figcaption className="flex items-center justify-between gap-3 flex-wrap">
                  <span className="font-bold text-sm">{RESENA.autor}</span>
                  <span className={`${mono.className} text-[9px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    {RESENA.cuando}
                  </span>
                </figcaption>
              </figure>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block mt-5 text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 decoration-2 hover:opacity-80 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ color: C.amarillo }}
              >
                Leer las 671 opiniones →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El gatito regalón ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <div
            className="grid sm:grid-cols-[180px_1fr] gap-6 items-center p-6 md:p-8"
            style={{ backgroundColor: C.papel, border: `3px solid ${C.tinta}`, boxShadow: '8px 8px 0 rgba(23,19,16,0.9)' }}
          >
            <div className="relative aspect-square overflow-hidden border-2" style={{ borderColor: C.tinta }}>
              <Image
                src={`${IMG}/gatito.webp`}
                alt="El gato regalón de la Macro Feria caminando entre los puestos del callejón"
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
            <div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-2 font-semibold`} style={{ color: C.rojo }}>
                El más famoso de la feria
              </p>
              <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-tight mb-3`}>
                Saluda al gatito regalón
              </h3>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Las reseñas no mienten: entre frutilla y durazno, el gatito de la
                Macro Feria ya es parte del recorrido. Si lo pillas, cuéntale
                que viniste de la página.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Head
            dark
            kicker="Cómo llegar"
            title={
              <>
                18 Oriente 1878, <span style={{ color: C.amarillo }}>desde las 6 AM</span>
              </>
            }
          />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.cremaMuted }}>
                La feria abre temprano — desde las 6 de la mañana, cuando llega
                lo más fresco. Anda directo a {BIZ.address}, {BIZ.city}, o
                escribe si vas por algo puntual.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_AMARILLO}>
                  WhatsApp {BIZ.phoneDisplay}
                </a>
              </div>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t-2 pt-6 max-w-md" style={{ borderColor: C.amarillo }}>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.amarillo }}>Dirección</dt>
                  <dd className="text-sm leading-relaxed">{BIZ.address}<br />{BIZ.city}, {BIZ.region}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-2`} style={{ color: C.amarillo }}>Apertura</dt>
                  <dd className="text-sm leading-relaxed">{BIZ.opens}<br />según su ficha de Maps</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={140}>
              <figure style={{ border: `3px solid ${C.amarillo}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                  src={MAPS_EMBED}
                  className="w-full aspect-[4/3] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <figcaption className={`${mono.className} flex items-center justify-between gap-4 px-4 py-2.5 text-[10px] uppercase tracking-[0.22em]`} style={{ borderTop: `3px solid ${C.amarillo}`, color: C.cremaMuted }}>
                  <span>{BIZ.address}</span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 hover:text-white transition-colors shrink-0 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD21F]">
                    Abrir en Maps →
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t-2" style={{ borderColor: C.amarillo }}>
          <div>
            <p className={`${display.className} uppercase text-xl leading-none`}>
              Macro Feria <span style={{ color: C.amarillo }}>de Talca</span>
            </p>
            <address className="not-italic text-[11px] mt-1.5" style={{ color: C.cremaMuted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.opens.toLowerCase()}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.16em] font-semibold" style={{ color: C.cremaMuted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD21F]">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t-2" style={{ borderColor: C.amarillo }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 pb-6 text-[10px] leading-snug" style={{ color: C.cremaMuted }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. El nombre,
            la dirección, el teléfono, el horario de apertura, la calificación
            y las fotos son datos reales de su ficha pública de Google Maps;
            lo de “número 1 del Maule” lo dice su propio letrero.
          </p>
        </div>
      </footer>

      <div className="mmf-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
