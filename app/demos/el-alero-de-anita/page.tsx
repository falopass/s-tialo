import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MENU, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2' }],
})

/**
 * Dirección de arte: «el puesto del mercado» — el naranjo del Mercado
 * Central de Linares, el verde de la pizarra de la carta y las
 * banderas chilenas del comedor de madera. Gloock hace el rótulo
 * pintado del local; Karla, la conversación de mesa de almuerzo.
 * La carta se presenta como la pizarra real: lista directa de platos
 * chilenos tal como está escrita en el local.
 */
const C = {
  naranjo: '#C85A17',
  naranjoProf: '#8F3C0B',
  verde: '#2E5231',
  verdeProf: '#1E3A22',
  papel: '#FAF3E3',
  carta: '#F1E5CC',
  tinta: '#2B1C10',
  suave: '#6F5C48',
  crema: '#FDF9EF',
  linea: 'rgba(43,28,16,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'el-alero-de-anita',
  title: 'El Alero de Anita — Cocina chilena en el Mercado Central de Linares',
  description:
    'Restaurant de Anita en Maipú 486, Mercado Central de Linares: lomo a lo pobre, pastel de choclo, ceviches, paila marina y platos caseros. Pedidos al +56 9 4995 7757.',
  image: '/demos/el-alero-de-anita/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Anita', href: '#anita' },
  { label: 'El mercado', href: '#mercado' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// La carta real de la pizarra verde del local.
const CARTA = [
  { plato: 'Lomo a lo pobre', detalle: 'con papas fritas y huevo' },
  { plato: 'Chorrillanas', detalle: 'para compartir' },
  { plato: 'Pastel de choclo', detalle: 'en paila de greda' },
  { plato: 'Ceviches', detalle: 'de pescado o mariscos' },
  { plato: 'Reineta · Salmón', detalle: 'pescados del día' },
  { plato: 'Merluza · Curanto', detalle: 'los clásicos del sur' },
  { plato: 'Mariscales · Paila marina', detalle: 'de la costa del Maule' },
  { plato: 'Escabechado', detalle: 'el tradicional de la casa' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-extrabold mb-4"
      style={{ color: light ? '#F5B97F' : C.naranjo }}
    >
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(24,12,5,0.96)', color: '#FAF3E3' }}>
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

export default function AleroAnitaPage() {
  return (
    <div className={`${body.className} anita min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        .anita a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        @media (prefers-reduced-motion: reduce) { .anita * { transition: none !important; animation: none !important } }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.01em]">El Alero <span style={{ color: 'inherit' }}>de Anita</span></span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(250,243,227,0.95)',
          ink: C.naranjoProf,
          line: C.linea,
          btnBg: C.verde,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: el comedor con banderas chilenas ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.verdeProf }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Comedor de madera de El Alero de Anita con banderas chilenas colgando del techo y mesas con comensales"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(26,18,8,0.45) 0%, rgba(26,18,8,0.18) 40%, rgba(26,18,8,0.93) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <div className="max-w-3xl">
            <Reveal>
              <Eyebrow light>Mercado Central · Maipú 486 · Linares</Eyebrow>
              <h1 className={`${display.className} leading-[0.98] text-[clamp(3rem,11vw,6.6rem)] mb-5`} style={{ color: C.papel }}>
                El Alero
                <span className="block" style={{ color: '#F5B97F' }}>
                  de Anita
                </span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: 'rgba(250,243,227,0.88)' }}>
                Cocina chilena de mercado en Linares: paila marina,
                pastel de choclo y el lomo a lo pobre de siempre,
                servidos por la propia Anita.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK_MENU}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.naranjo, color: C.papel }}
                >
                  Consultar la carta por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.papel, textDecorationColor: '#F5B97F' }}
                >
                  {BIZ.rating}★ en Google · Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta: la pizarra verde ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.carta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
          <Reveal>
            <Eyebrow>La carta</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.verdeProf }}>
                Lo que dice
                <br />
                la pizarra verde
              </h2>
              <p className="text-xs md:text-sm max-w-[280px] leading-relaxed" style={{ color: C.suave }}>
                La carta real del local, escrita en su pizarra: platos
                chilenos de almuerzo y mariscos de la costa.
              </p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 md:gap-12 items-start">
            <Reveal>
              <figure>
                <div className="relative overflow-hidden rounded-xl aspect-[9/16] max-w-[300px]" style={{ boxShadow: '0 16px 40px rgba(30,58,34,0.3)', border: `5px solid ${C.verde}` }}>
                  <Image
                    src={`${IMG}/carta.webp`}
                    alt="Pizarra verde con la carta real de El Alero de Anita: lomo pobre, chorrillanas, pastel de choclo, ceviches y paila marina"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-[11px] mt-3 uppercase tracking-[0.18em] font-bold" style={{ color: C.suave }}>
                  La pizarra real del local
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <ul className="max-w-2xl">
                {CARTA.map((p) => (
                  <li key={p.plato} className="flex items-baseline gap-4 py-3 border-b" style={{ borderColor: C.linea }}>
                    <span className={`${display.className} text-lg md:text-2xl leading-tight`} style={{ color: C.verdeProf }}>
                      {p.plato}
                    </span>
                    <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.linea }} aria-hidden="true" />
                    <span className="text-[11px] md:text-xs text-right shrink-0 uppercase tracking-wide font-bold" style={{ color: C.naranjo }}>
                      {p.detalle}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK_MENU}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.verde, color: C.papel }}
              >
                Preguntar qué hay hoy →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Anita ── */}
      <section id="anita" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-22">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>La dueña de casa</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.naranjoProf }}>
              De Anita,
              <br />
              <span style={{ color: C.naranjo }}>como dice el rótulo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: C.suave }}>
              El Alero funciona dentro del Mercado Central de Linares y
              quien lo atiende es {BIZ.duena} — Anita para los clientes.
              La cocina es la de la casa: pescados, mariscales y los
              platos de fondo que pide la gente del barrio.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-lg" style={{ color: C.suave }}>
              En su Instagram{' '}
              <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.naranjo }}>
                {BIZ.instagram}
              </a>{' '}
              publica la carta del día y los platos de temporada.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {[
                ['Horario', `${BIZ.horarioSemana}`],
                ['Domingo', '9:00 a 16:00'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className="text-[10px] uppercase tracking-[0.24em] font-extrabold mb-1" style={{ color: C.naranjo }}>{k}</p>
                  <p className="text-sm font-bold" style={{ color: C.tinta }}>{v}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid grid-cols-2 gap-4 items-start">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4]" style={{ boxShadow: '0 14px 36px rgba(43,28,16,0.25)' }}>
                <Image
                  src={`${IMG}/anita.webp`}
                  alt="Anita, dueña de El Alero, dentro del local de madera del Mercado Central de Linares"
                  fill
                  sizes="(min-width: 1024px) 24vw, 44vw"
                  className="object-cover"
                />
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] mt-8">
                <Image
                  src={`${IMG}/local.webp`}
                  alt="Interior del local de El Alero de Anita con mesas de madera y decoración chilena"
                  fill
                  sizes="(min-width: 1024px) 24vw, 44vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El mercado ── */}
      <section id="mercado" className="scroll-mt-20" style={{ backgroundColor: C.verdeProf }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <Eyebrow light>El mercado</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.papel }}>
                Dentro del Mercado
                <br />
                <span style={{ color: '#F5B97F' }}>Central de Linares</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-4 max-w-lg" style={{ color: 'rgba(250,243,227,0.82)' }}>
                El local está en Maipú 486, en el barrio del mercado,
                camino a Villa San Antonio. En Fiestas Patrias el comedor
                se llena de banderas chilenas — así de casero es.
              </p>
              <div className="flex items-center gap-3">
                <Stars value={3.9} color="#F5B97F" />
                <span className="text-sm font-bold" style={{ color: 'rgba(250,243,227,0.85)' }}>
                  {BIZ.rating} de 5 en Google
                </span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'rgba(250,243,227,0.08)', border: '1px solid rgba(250,243,227,0.22)' }}>
                <p className={`${display.className} text-2xl md:text-3xl mb-5`} style={{ color: '#F5B97F' }}>
                  Para pedir o reservar
                </p>
                <div className="space-y-4">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 font-bold text-sm md:text-base px-5 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                    style={{ backgroundColor: C.naranjo, color: C.papel }}
                  >
                    WhatsApp {BIZ.phoneDisplay}
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={BIZ.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 font-bold text-sm md:text-base px-5 py-3 rounded-full border-2 transition-colors tap-44"
                    style={{ borderColor: 'rgba(250,243,227,0.6)', color: C.papel }}
                  >
                    Instagram {BIZ.instagram}
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
                <p className="text-xs mt-5 leading-relaxed" style={{ color: 'rgba(250,243,227,0.7)' }}>
                  {BIZ.horarioSemana}
                  <br />
                  {BIZ.horarioDomingo}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.carta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.naranjoProf }}>
                Maipú 486,
                <br />
                <span style={{ color: C.naranjo }}>Mercado Central</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.suave }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.naranjo, color: C.papel }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm md:text-base px-6 py-3 rounded-full border-2 transition-colors tap-44"
                  style={{ borderColor: C.verdeProf, color: C.verdeProf }}
                >
                  Cómo llegar
                </a>
              </div>
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
      <footer style={{ backgroundColor: C.verdeProf, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4" style={{ borderColor: 'rgba(250,243,227,0.16)' }}>
          <div>
            <p className={`${display.className} text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(250,243,227,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              WhatsApp{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.instagram}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(250,243,227,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,243,227,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: 'rgba(250,243,227,0.7)' }}>
            Fotos, carta, dirección, horarios, Instagram y teléfono son
            los reales del local y de su ficha de Google.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
