import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, VALE, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-mono',
})

const C = {
  papel: '#F4EFE3',
  papelHi: '#FBF8F0',
  verde: '#17573B',
  verdeDeep: '#0D3524',
  ambar: '#F2B32D',
  rojo: '#B03225',
  ink: '#1E2B23',
  muted: '#576B5F',
  line: 'rgba(23,87,59,0.25)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-muller',
  title: 'Ferretería Müller — ferretería y áridos en Rancagua',
  description:
    'Ferretería, materiales de construcción, arriendo de maquinarias y venta de áridos en Rafael Sanzio 2824, Rancagua. Llame al +56 72 275 3785.',
})

// Dientes de vale: rombos alternados en el color del papel
function TicketEdge({ bg, flip = false }: { bg: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`flex justify-center gap-[10px] h-[10px] w-full ${flip ? 'rotate-180' : ''}`}
      style={{ overflow: 'hidden' }}
    >
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className="block w-[10px] h-[10px] shrink-0 rotate-45 -translate-y-1/2"
          style={{ backgroundColor: bg }}
        />
      ))}
    </div>
  )
}

function SectionTag({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className={`${mono.variable} font-mono text-[11px] tracking-[0.28em] uppercase`} style={{ color: C.rojo }}>
      {n} · {children}
    </p>
  )
}

export default function FerreteriaMuller() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen`}
      style={{ backgroundColor: C.papel, color: C.ink, fontFamily: 'var(--font-body)' }}
    >
      <BlitzNav
        name={BIZ.name}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.verdeDeep, ink: C.ink, line: C.line, btnBg: C.rojo, btnInk: '#fff' }}
        links={[
          { label: 'Stock', href: '#stock' },
          { label: 'Áridos', href: '#aridos' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Llegar', href: '#llegar' },
        ]}
        fontClass="font-mono"
      />

      {/* ── HERO: el vale ─────────────────────────────────── */}
      <section className="pt-24 md:pt-32" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] md:text-xs tracking-[0.3em] uppercase" style={{ color: C.muted }}>
              Vale de bodega · {BIZ.address}, {BIZ.city}
            </p>
          </Reveal>
          <Reveal delay={90}>
            <h1
              className="mt-4 uppercase leading-[0.92] tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: C.verde, fontSize: 'clamp(2.7rem,10vw,7rem)' }}
            >
              Ferretería
              <br />
              Müller
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <div className="mt-6 border-y-2 border-dashed py-4" style={{ borderColor: C.line }}>
              <p className="text-base md:text-xl font-semibold leading-snug max-w-2xl">
                De la góndola al camión de áridos: ferretería, materiales y maquinarias para la obra en {BIZ.city}.
              </p>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: C.muted }}>
              <span className="flex items-center gap-2">
                <Stars value={4.4} color={C.ambar} className="w-[13px] h-[13px]" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
              <span>L–V 9:00–19:00 · Sáb 9:00–18:00</span>
              <a href={TEL_LINK} className="underline underline-offset-4" style={{ color: C.verde }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={200} className="mt-10">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
            <Image
              src={`${IMG}/m2.webp`}
              alt="Fachada de Ferretería Müller en Rafael Sanzio, Rancagua, con su camión rojo de áridos"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute bottom-4 left-4 px-3 py-1.5 font-mono text-[10px] md:text-xs uppercase tracking-[0.22em]"
              style={{ backgroundColor: C.verdeDeep, color: C.ambar }}
            >
              Patio + camión propio
            </div>
          </div>
          <TicketEdge bg={C.papel} />
        </Reveal>
      </section>

      {/* ── STOCK: líneas del vale ────────────────────────── */}
      <section id="stock" className="py-16 md:py-24" style={{ backgroundColor: C.papelHi }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTag n="Doc. 01">Lo que sale del local</SectionTag>
            <h2
              className="mt-3 uppercase leading-none"
              style={{ fontFamily: 'var(--font-display)', color: C.verde, fontSize: 'clamp(1.8rem,5.5vw,3.4rem)' }}
            >
              Cuatro líneas de stock
            </h2>
          </Reveal>

          <div className="mt-10">
            {VALE.map((v, i) => (
              <Reveal key={v.n} delay={i * 70}>
                <article
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[64px_1fr_200px] gap-x-4 md:gap-x-8 gap-y-3 py-6 border-t border-dashed items-center"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className="font-mono text-sm md:text-base font-semibold self-start md:self-center"
                    style={{ color: C.rojo }}
                  >
                    {v.n}
                  </span>
                  <div className="md:pr-8">
                    <h3 className="text-lg md:text-2xl font-bold uppercase tracking-tight">{v.t}</h3>
                    <p className="mt-1 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {v.d}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-1 relative w-full md:w-[200px] aspect-[16/10] overflow-hidden">
                    <Image src={v.img} alt={v.alt} fill sizes="(min-width:768px) 200px, 100vw" className="object-cover" />
                  </div>
                </article>
              </Reveal>
            ))}
            <div className="border-t-2 border-b-4 border-double py-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.22em]" style={{ borderColor: C.verde, color: C.verde }}>
              <span>Total ítems</span>
              <span>4 líneas · stock real</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── ÁRIDOS: banda camión ──────────────────────────── */}
      <section id="aridos" className="py-16 md:py-24" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.28em] uppercase" style={{ color: C.ambar }}>
              Doc. 02 · Venta de áridos
            </p>
            <h2
              className="mt-3 uppercase leading-[0.95]"
              style={{ fontFamily: 'var(--font-display)', color: C.papelHi, fontSize: 'clamp(2rem,7vw,4.5rem)' }}
            >
              El camión rojo
              <br />
              <span style={{ color: C.ambar }}>va cargado</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6 items-start">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/m4.webp`}
                  alt="Camión rojo de Ferretería Müller con letrero Áridos"
                  fill
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span
                  className="absolute top-4 right-4 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.2em] border-2 rotate-3"
                  style={{ borderColor: C.ambar, color: C.ambar, backgroundColor: 'rgba(13,53,36,0.85)' }}
                >
                  Áridos Müller
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="space-y-5">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(251,248,240,0.9)' }}>
                  Además de la ferretería, Müller vende áridos y arrienda maquinarias. Si está con radier,
                  nivelación o una ampliación, se cotiza todo en el mismo mostrador.
                </p>
                <div className="border-t border-dashed pt-5 space-y-2 font-mono text-xs md:text-sm" style={{ borderColor: 'rgba(242,179,45,0.35)', color: C.papelHi }}>
                  <p className="flex justify-between gap-4"><span>Áridos</span><span style={{ color: C.ambar }}>venta directa</span></p>
                  <p className="flex justify-between gap-4"><span>Maquinarias</span><span style={{ color: C.ambar }}>arriendo por día</span></p>
                  <p className="flex justify-between gap-4"><span>Materiales</span><span style={{ color: C.ambar }}>stock en patio</span></p>
                </div>
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center justify-center h-[52px] px-8 font-mono text-sm font-semibold uppercase tracking-[0.16em]"
                  style={{ backgroundColor: C.ambar, color: C.verdeDeep }}
                >
                  Cotizar al {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS: talonario ────────────────────────────── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[240px_1fr] gap-10">
            <Reveal>
              <div>
                <SectionTag n="Doc. 03">Reseñas en Google</SectionTag>
                <p
                  className="mt-4 leading-none"
                  style={{ fontFamily: 'var(--font-display)', color: C.verde, fontSize: 'clamp(4rem,12vw,6.5rem)' }}
                >
                  {BIZ.rating}
                </p>
                <div className="mt-3"><Stars value={4.4} color={C.ambar} className="w-4 h-4" /></div>
                <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </Reveal>
            <div className="space-y-0">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 80}>
                  <figure className="py-5 border-t border-dashed" style={{ borderColor: C.line }}>
                    <blockquote className="text-base md:text-lg leading-relaxed font-medium">
                      “{r.texto}”
                    </blockquote>
                    <figcaption className="mt-3 flex items-center gap-3">
                      <Stars value={r.estrellas} color={C.ambar} className="w-3 h-3" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                        {r.nombre} · Google
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
              <p className="pt-3 font-mono text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                Textos resumidos de reseñas publicadas en Google Maps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── LLEGAR: horario + mapa ────────────────────────── */}
      <section id="llegar" className="pb-16 md:pb-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <TicketEdge bg={C.papelHi} />
          <div className="grid md:grid-cols-2 gap-10 mt-10">
            <Reveal>
              <div>
                <SectionTag n="Doc. 04">Horario y dirección</SectionTag>
                <h2
                  className="mt-3 uppercase leading-none"
                  style={{ fontFamily: 'var(--font-display)', color: C.verde, fontSize: 'clamp(1.7rem,5vw,2.6rem)' }}
                >
                  Pase al mostrador
                </h2>
                <div className="mt-6 font-mono text-sm">
                  {HORARIO.map((h) => (
                    <div
                      key={h.d}
                      className="flex justify-between gap-4 py-2.5 border-b border-dashed"
                      style={{ borderColor: C.line }}
                    >
                      <span className="uppercase tracking-[0.1em] text-[11px]" style={{ color: C.muted }}>{h.d}</span>
                      <span className="font-semibold" style={{ color: h.h === 'Cerrado' ? C.rojo : C.ink }}>{h.h}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed" style={{ color: C.muted }}>
                  {BIZ.address}, {BIZ.city}, Región de {BIZ.region}.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={TEL_LINK}
                    className="inline-flex items-center justify-center h-[52px] px-7 font-mono text-sm font-semibold uppercase tracking-[0.14em]"
                    style={{ backgroundColor: C.rojo, color: '#fff' }}
                  >
                    Llamar ahora
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center h-[52px] px-7 font-mono text-sm font-semibold uppercase tracking-[0.14em] border-2"
                    style={{ borderColor: C.verde, color: C.verde }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative aspect-[4/3] border-2 overflow-hidden" style={{ borderColor: C.verde }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer className="py-8 pb-6" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] space-y-2" style={{ color: 'rgba(251,248,240,0.75)' }}>
          <p>
            {BIZ.name} · {BIZ.address}, {BIZ.city} ·{' '}
            <a href={TEL_LINK} className="underline underline-offset-2" style={{ color: C.ambar }}>
              {BIZ.phoneDisplay}
            </a>
          </p>
          <p style={{ color: 'rgba(251,248,240,0.68)' }}>
            Maqueta de Sitiazo: datos reales de Google Maps; textos y composición de muestra.
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.rojo} />
    </main>
  )
}
