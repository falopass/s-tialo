import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
})

/**
 * Dirección de arte: «la picada del camino a la costa» — el rojo de la
 * fachada, el verde Cristal del toldo y la pizarra de colaciones
 * escrita a tiza. Fraunces hace el letrero pintado a mano; Public
 * Sans, la nota al pie del mantel. La sección central ES la pizarra:
 * fondo verde pizarra, colaciones reales y precios de agregado como
 * se ven en el bar del local.
 */
const C = {
  rojo: '#8E2320',
  rojoProf: '#5C1613',
  verde: '#1F4A2E',
  pizarra: '#22402B',
  tiza: '#F3EBD8',
  papel: '#F8F2E4',
  carta: '#EFE5CF',
  tinta: '#2A1D12',
  suave: '#6D5F4D',
  dorado: '#C99A4B',
  linea: 'rgba(42,29,18,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-gaviota',
  title: 'Restaurant La Gaviota — Almuerzo casero en Licantén',
  description:
    'Restaurant de comida casera en Orsodeli 364, Licantén: colaciones de lunes a sábado al mediodía, empanadas y pan amasado. El gato típico chileno del camino a la costa.',
  image: '/demos/la-gaviota/hero.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'La mesa', href: '#mesa' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Colaciones reales de la pizarra del local.
const COLACIONES = [
  'Porotos granados',
  'Pollo asado',
  'Cerdo al horno',
  'Carne al jugo',
  'Pescado frito',
  'Cazuela de vacuno',
]

const AGREGADOS = ['Arroz', 'Puré', 'Papas fritas']

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4"
      style={{ color: light ? C.dorado : C.rojo }}
    >
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(20,10,6,0.96)', color: '#F8F2E4' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LaGaviotaPage() {
  return (
    <div className={`${body.className} gav min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        .gav a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @media (prefers-reduced-motion: reduce) { .gav * { transition: none !important; animation: none !important } }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.01em] font-black">La Gaviota</span>}
        links={NAV_LINKS}
        waLink={MAPS_URL}
        ctaLabel="Cómo llegar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(248,242,228,0.95)',
          ink: C.rojoProf,
          line: C.linea,
          btnBg: C.rojo,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: la fachada roja del camino a la costa ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.rojoProf }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada roja de Restaurant La Gaviota con toldo verde en Orsodeli 364, Licantén"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(38,14,10,0.42) 0%, rgba(38,14,10,0.15) 42%, rgba(38,14,10,0.93) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow light>{BIZ.lema} · Licantén, camino a la costa</Eyebrow>
              <h1 className={`${display.className} font-black leading-[0.96] text-[clamp(3rem,11vw,6.8rem)] mb-5`} style={{ color: C.papel }}>
                Restaurant
                <span className={`${displayItalic.className} block font-medium`} style={{ color: C.dorado }}>
                  La Gaviota
                </span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: 'rgba(248,242,228,0.88)' }}>
                Colaciones caseras al mediodía en Licantén: cazuela, porotos
                granados y cerdo al horno, con empanadas y pan amasado de
                la casa.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.verde, color: C.papel }}
                >
                  Cómo llegar — {BIZ.address}
                </a>
                <span className="text-xs md:text-sm font-semibold tap-44" style={{ color: C.papel }}>
                  {BIZ.rating}★ · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Franja de datos ── */}
      <section style={{ backgroundColor: C.rojoProf }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-3 text-center">
          {[
            ['Horario', BIZ.horarioSemana],
            ['Domingo', 'Cerrado'],
            ['El almuerzo', BIZ.precio],
            ['Para llevar', 'Empanadas y pan amasado'],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[10px] uppercase tracking-[0.24em] font-bold mb-1" style={{ color: C.dorado }}>{k}</p>
              <p className="text-xs md:text-sm font-semibold leading-snug" style={{ color: 'rgba(248,242,228,0.9)' }}>{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── La pizarra de colaciones ── */}
      <section id="pizarra" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>La pizarra</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.0] mb-5`} style={{ color: C.rojoProf }}>
              Las colaciones
              <br />
              <span className={displayItalic.className} style={{ color: C.rojo }}>de cada mediodía</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: C.suave }}>
              La pizarra del local anuncia los platos del día: guisos de
              temporada, asados y cazuela. El almuerzo completo cuesta
              alrededor de {BIZ.precio.replace('≈ ', '')}, según Google.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.suave }}>
              Abierto {BIZ.horarioSemana.toLowerCase()}; los domingos la
              cocina descansa.
            </p>
          </Reveal>
          <Reveal delay={140}>
            {/* Pizarra: el motivo central del demo */}
            <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: C.pizarra, boxShadow: '0 18px 48px rgba(42,29,18,0.28), inset 0 0 0 6px rgba(243,235,216,0.12)' }}>
              <p className={`${displayItalic.className} text-xl md:text-2xl mb-5 text-center`} style={{ color: C.dorado }}>
                Colaciones del día
              </p>
              <ul>
                {COLACIONES.map((c) => (
                  <li key={c} className={`${display.className} font-semibold text-xl md:text-2xl py-2.5 border-b border-dashed text-center`} style={{ color: C.tiza, borderColor: 'rgba(243,235,216,0.25)' }}>
                    {c}
                  </li>
                ))}
              </ul>
              <p className="text-center text-xs md:text-sm mt-5 tracking-[0.14em] uppercase font-bold" style={{ color: 'rgba(243,235,216,0.75)' }}>
                Agregados: {AGREGADOS.join(' · ')}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La mesa ── */}
      <section id="mesa" className="scroll-mt-20" style={{ backgroundColor: C.carta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
          <Reveal>
            <Eyebrow>La mesa</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.rojoProf }}>
                Almuerzo de verdad,
                <br />
                <span className={displayItalic.className} style={{ color: C.rojo }}>como en la casa</span>
              </h2>
              <p className="text-xs md:text-sm max-w-[280px] leading-relaxed" style={{ color: C.suave }}>
                Pollo asado, costillar, cazuela y ensalada chilena con
                pebre y marraqueta: las fotos son de su propia cocina.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                src: `${IMG}/almuerzo.webp`,
                alt: 'Mesa de almuerzo casero en La Gaviota: pollo asado, puré, ensalada, pebre y bebida',
                titulo: 'El almuerzo completo',
                nota: 'Plato de fondo, ensalada, pebre y pan.',
              },
              {
                src: `${IMG}/costillar.webp`,
                alt: 'Costillar de cerdo con arroz y ensalada servido en Restaurant La Gaviota',
                titulo: 'Costillar y asados',
                nota: 'El cerdo al horno de la pizarra.',
              },
              {
                src: `${IMG}/cazuela.webp`,
                alt: 'Cazuelas de vacuno servidas en fuentes en La Gaviota, Licantén',
                titulo: 'La cazuela',
                nota: 'El plato de fondo de la casa.',
              },
            ].map((f, i) => (
              <Reveal key={f.titulo} delay={i * 100}>
                <figure className="h-full">
                  <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-4" style={{ boxShadow: '0 14px 36px rgba(42,29,18,0.2)' }}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <figcaption>
                    <h3 className={`${display.className} font-bold text-2xl mb-1`} style={{ color: C.rojoProf }}>
                      {f.titulo}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.suave }}>
                      {f.nota}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.rojoProf }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow light>El local</Eyebrow>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.papel }}>
                Madera, toldo verde
                <br />
                <span className={displayItalic.className} style={{ color: C.dorado }}>y el letrero del camino</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: 'rgba(248,242,228,0.82)' }}>
                Por dentro es pino oregón, mesas de madera y la barra con
                la pizarra; por fuera, la terraza con sombrillas para los
                días de calor costero.
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(248,242,228,0.65)' }}>
                El letrero de la ruta lo dice todo: «{BIZ.lema}».
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Interior de madera de La Gaviota con mesas y posters de cerveza"
                    fill
                    sizes="(min-width: 1024px) 24vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] mt-8">
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza de madera con sombrillas y mesas de La Gaviota en Licantén"
                    fill
                    sizes="(min-width: 1024px) 24vw, 44vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] col-span-2">
                  <Image
                    src={`${IMG}/letrero.webp`}
                    alt="Letrero de Restaurant La Gaviota: «Gato Típico Chileno» sobre el cielo"
                    fill
                    sizes="(min-width: 1024px) 48vw, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reputación ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div>
              <Eyebrow>Las {BIZ.reviews} reseñas de Google</Eyebrow>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.rojoProf }}>
                La parada conocida
                <br />
                <span className={displayItalic.className} style={{ color: C.rojo }}>de Licantén</span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={4.4} color={C.dorado} />
              <span className="text-sm font-bold" style={{ color: C.suave }}>
                {BIZ.rating} de 5
              </span>
            </div>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
            style={{ color: C.rojoProf, textDecorationColor: C.dorado }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.carta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.rojoProf }}>
                En la calle principal
                <br />
                <span className={displayItalic.className} style={{ color: C.rojo }}>de Licantén</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.suave }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.suave }}>
                {BIZ.horarioSemana} · {BIZ.horarioDomingo}.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.rojo, color: C.papel }}
              >
                Abrir en Google Maps
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-2xl min-h-[280px]" style={{ border: `1px solid ${C.verde}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[300px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.rojoProf, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ borderColor: 'rgba(248,242,228,0.16)' }}>
          <div>
            <p className={`${display.className} font-black text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(248,242,228,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              {BIZ.horarioSemana} · {BIZ.horarioDomingo}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(248,242,228,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(248,242,228,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: 'rgba(248,242,228,0.7)' }}>
            Fotos, dirección, horario, precio referencial y rating son los
            reales de la ficha de Google y del local.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
    </div>
  )
}
