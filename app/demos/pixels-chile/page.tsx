import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})
const monoBold = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' }],
})

const C = {
  tinta: '#121417',
  tinta2: '#1B1E23',
  magenta: '#E5007D',
  cian: '#00B6E3',
  amarillo: '#FFD400',
  papel: '#F1EDE4',
  card: '#F8F5EC',
  ink: '#1B1E23',
  muted: '#5D5A50',
  line: 'rgba(27,30,35,0.16)',
  lineLight: 'rgba(241,237,228,0.16)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E5007D]'
const FOCUS_LIGHT = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F1EDE4]'

export const metadata: Metadata = demoMetadata({
  slug: 'pixels-chile',
  title: 'Pixels Chile — Impresión y rotulación en Talca',
  description:
    'Taller de impresión y rotulación en Pasaje Haití 170, Talca: letreros, pendones, gráfica vehicular y gran formato. Cotiza por WhatsApp.',
  image: '/demos/pixels-chile/hero.webp',
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'El taller', href: '#taller' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const TRABAJOS = [
  {
    src: `${IMG}/hero.webp`,
    alt: 'Fachada completa de Carnicería Mayorista 21 con letrero y gráfica en vidrios, trabajo de Pixels Chile',
    num: '01',
    tipo: 'Rotulación de locales',
    desc: 'Letreros, fachadas completas y gráfica sobre vidrio: el local se ve desde la calle antes de entrar.',
    tags: ['Letreros', 'Fachadas', 'Vidrios'],
  },
  {
    src: `${IMG}/flota.webp`,
    alt: 'Camiones de reparto de Abastible rotulados por Pixels Chile estacionados en fila',
    num: '02',
    tipo: 'Gráfica vehicular',
    desc: 'Camiones, furgones y autos de reparto convertidos en aviso andante: marca donde sea que vayan.',
    tags: ['Camiones', 'Furgones', 'Flotas'],
  },
  {
    src: `${IMG}/pendones.webp`,
    alt: 'Pendones gigantes de venta recién impresos en el plotter de gran formato del taller',
    num: '03',
    tipo: 'Pendones gran formato',
    desc: 'Pendones para ventas, ferias y obras: vinilo resistente, colores firmes y ojillos listos para colgar.',
    tags: ['Vinilo', 'Gran formato', 'Exterior'],
  },
  {
    src: `${IMG}/menus.webp`,
    alt: 'Cartas de menú laminadas del restaurant S&J El Buen Gusto apiladas sobre la mesa',
    num: '04',
    tipo: 'Cartas y menús',
    desc: 'Menús laminados, cartas y material de mesa para restaurantes y locales de comida.',
    tags: ['Laminado', 'Restaurantes', 'Mesa'],
  },
]

const MAS_TRABAJOS = [
  {
    src: `${IMG}/granformato.webp`,
    alt: 'Impresiones fotográficas a todo color saliendo del plotter de gran formato',
    label: 'Foto y gran formato',
  },
  {
    src: `${IMG}/maxyemy.webp`,
    alt: 'Restaurante Max y Emy con letrero de fachada y toldos rotulados',
    label: 'Fachadas y toldos',
  },
  {
    src: `${IMG}/backdrop.webp`,
    alt: 'Backdrop impreso con personajes de Minnie para cumpleaños infantil',
    label: 'Backdrops para eventos',
  },
  {
    src: `${IMG}/instalacion.webp`,
    alt: 'Instalador aplicando vinilo esmerilado en una ventana',
    label: 'Instalación en terreno',
  },
]

const RESENAS = [
  {
    text: '100% recomendable, siempre cumpliendo con las solicitudes o requerimientos solicitados.',
    author: 'Orlando Bravo',
    meta: 'Local Guide · 91 reseñas',
  },
  {
    text: 'Excelente trabajo, 100% recomendable.',
    author: 'Alejandra Azocar',
    meta: 'Reseña de Google',
  },
  {
    text: 'Muy simpáticos en la atención, y trabajos muy profesionales.',
    author: 'Angélica Zumelzu',
    meta: 'Local Guide',
  },
  {
    text: 'Buen trabajo y muy rápidos para la entrega.',
    author: 'Rodrigo',
    meta: 'Local Guide · 21 reseñas',
  },
]

const HORARIO = [
  { days: 'Lunes a viernes', time: '9:00–13:00 · 15:00–18:30' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
]

function CropMarks({ color }: { color: string }) {
  const m = `absolute w-4 h-4 border-current pointer-events-none`
  return (
    <span aria-hidden="true" className="absolute inset-0 pointer-events-none" style={{ color }}>
      <span className={`${m} top-2 left-2 border-t border-l`} />
      <span className={`${m} top-2 right-2 border-t border-r`} />
      <span className={`${m} bottom-2 left-2 border-b border-l`} />
      <span className={`${m} bottom-2 right-2 border-b border-r`} />
    </span>
  )
}

function MonoTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-3`}
      style={{ color: light ? 'rgba(241,237,228,0.75)' : C.muted }}
    >
      <span className="flex gap-0.5" aria-hidden="true">
        <span className="w-2 h-2" style={{ backgroundColor: C.cian }} />
        <span className="w-2 h-2" style={{ backgroundColor: C.magenta }} />
        <span className="w-2 h-2" style={{ backgroundColor: C.amarillo }} />
        <span className="w-2 h-2" style={{ backgroundColor: light ? C.papel : C.tinta }} />
      </span>
      {children}
    </p>
  )
}

export default function PixelsChilePage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.tinta, color: C.papel }}>
      <style>{`
        .px-band > div { position: static; max-width: none; border-radius: 0; box-shadow: none; background: transparent; justify-content: center; padding: 14px 20px; }
      `}</style>
      <BlitzNav
        name="PIXELS CHILE"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(18,20,23,0.94)',
          ink: C.papel,
          line: C.lineLight,
          btnBg: C.magenta,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: plancha de imprenta ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.tinta }}>
        {/* marcas de registro en el margen */}
        <div aria-hidden="true" className="absolute top-20 left-5 md:left-8 opacity-40" style={{ color: C.papel }}>
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="28" cy="28" r="16" />
            <path d="M28 0v56M0 28h56" />
          </svg>
        </div>
        {/* PIXELS gigante en contorno */}
        <div
          aria-hidden="true"
          className={`${display.className} absolute -right-4 top-1/3 select-none pointer-events-none leading-none`}
          style={{ fontSize: 'clamp(7rem, 22vw, 19rem)', color: 'transparent', WebkitTextStroke: '1.5px rgba(241,237,228,0.09)' }}
        >
          PX
        </div>

        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-24 md:pt-28">
          <div
            className={`${mono.className} flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-y py-2.5 text-[10px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ borderColor: C.lineLight, color: 'rgba(241,237,228,0.7)' }}
          >
            <span>{BIZ.rubro}</span>
            <span className="hidden md:inline">{BIZ.address}</span>
            <span>{BIZ.city} · Chile</span>
          </div>
        </div>

        <div className="relative flex-1 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center max-w-6xl mx-auto w-full px-5 md:px-8 py-12">
          <Reveal>
            <h1
              className={`${display.className} uppercase leading-[0.95] text-[clamp(2.6rem,9vw,6.5rem)]`}
              style={{ color: C.papel }}
            >
              Tu marca,
              <br />
              <span style={{ color: C.magenta }}>en grande.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(241,237,228,0.8)' }}>
              Pixels Chile imprime y rotula en {BIZ.city}: letreros de fachada,
              camiones completos, pendones gigantes y cartas de menú.
              Taller propio en {BIZ.address}.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.magenta, color: '#FFFFFF' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#trabajos"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(241,237,228,0.5)', color: C.papel }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative border-2 p-2.5" style={{ borderColor: 'rgba(241,237,228,0.3)' }}>
              <CropMarks color={C.magenta} />
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada de Carnicería Mayorista 21 con rotulación completa de vidrios y letrero, trabajo de Pixels Chile"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p
                className={`${mono.className} flex justify-between pt-2.5 text-[10px] uppercase tracking-[0.18em]`}
                style={{ color: 'rgba(241,237,228,0.75)' }}
              >
                <span>Carnicería 21 · fachada completa</span>
                <span>archivo → calle</span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* barra de datos */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(0,0,0,0.35)' }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`}
            style={{ color: 'rgba(241,237,228,0.8)' }}
          >
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} flex items-center gap-2 font-bold transition-colors hover:text-white tap-44`}
            >
              <Stars value={4.8} color={C.amarillo} className="w-[13px] h-[13px]" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </a>
            <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} font-bold transition-colors hover:text-white tap-44`}>
              {BIZ.phoneDisplay}
            </a>
            <span className="hidden sm:inline">Lun–Vie 9:00–18:30</span>
            <span className="hidden md:inline" style={{ color: 'rgba(241,237,228,0.6)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Regla de color CMYK ── */}
      <section aria-label="Barras de color" className="grid grid-cols-4" style={{ backgroundColor: C.tinta2 }}>
        {[
          { c: C.cian, l: 'C' },
          { c: C.magenta, l: 'M' },
          { c: C.amarillo, l: 'Y' },
          { c: '#0B0C0D', l: 'K' },
        ].map((k) => (
          <div key={k.l} className="flex items-center justify-between px-4 md:px-6 py-3" style={{ backgroundColor: k.c }}>
            <span
              className={`${display.className} text-lg md:text-2xl`}
              style={{ color: k.l === 'K' ? C.papel : '#0B0C0D' }}
            >
              {k.l}
            </span>
            <span
              className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em]`}
              style={{ color: k.l === 'K' ? 'rgba(241,237,228,0.7)' : 'rgba(11,12,13,0.75)' }}
            >
              tinta {k.l}
            </span>
          </div>
        ))}
      </section>

      {/* ── Trabajos: índice de plancha ── */}
      <section id="trabajos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <MonoTag light>Trabajos que salieron del taller</MonoTag>
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2
              className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl`}
              style={{ color: C.papel }}
            >
              Lo que se ve
              <br />
              <span style={{ color: C.magenta }}>por Talca</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(241,237,228,0.72)' }}>
              Rotulación, impresión y gráfica publicitaria para locales,
              flotas y eventos: cada fila es un trabajo real del taller.
            </p>
          </div>
        </Reveal>
        <ul>
          {TRABAJOS.map((t, i) => (
            <li key={t.num} className="group border-t last:border-b" style={{ borderColor: C.lineLight }}>
              <Reveal delay={i * 60}>
                <div className={`grid md:grid-cols-[90px_1fr_320px] lg:grid-cols-[110px_1fr_380px] gap-5 md:gap-8 items-center py-6 md:py-8 ${i % 2 === 1 ? 'md:[&>*:nth-child(3)]:order-first' : ''}`}>
                  <span
                    className={`${monoBold.className} text-3xl md:text-4xl leading-none transition-transform duration-300 group-hover:translate-x-1`}
                    style={{ color: C.magenta }}
                    aria-hidden="true"
                  >
                    {t.num}
                  </span>
                  <div>
                    <h3 className={`${display.className} uppercase text-xl md:text-3xl mb-2`} style={{ color: C.papel }}>
                      {t.tipo}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-lg mb-3" style={{ color: 'rgba(241,237,228,0.75)' }}>
                      {t.desc}
                    </p>
                    <div className={`${mono.className} flex flex-wrap gap-2`}>
                      {t.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] uppercase tracking-[0.16em] border px-2.5 py-1"
                          style={{ borderColor: C.lineLight, color: 'rgba(241,237,228,0.7)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="relative border border-white/10 p-1.5">
                    <CropMarks color="rgba(241,237,228,0.5)" />
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={t.src}
                        alt={t.alt}
                        fill
                        sizes="(min-width: 1024px) 360px, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── El taller: cuadrícula de procesos ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <MonoTag>Del archivo a la pared</MonoTag>
            <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-3`}>
              El taller lo hace
              <br />
              <span style={{ color: C.magenta }}>todo en casa</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-10 md:mb-14" style={{ color: C.muted }}>
              Impresión gran formato, corte, laminado e instalación: el trabajo
              no pasa por terceros, por eso sale rápido.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {MAS_TRABAJOS.map((w, i) => (
              <Reveal key={w.label} delay={i * 70}>
                <figure className="group">
                  <div className="relative border p-1.5" style={{ borderColor: C.line }}>
                    <CropMarks color={i % 2 === 0 ? C.magenta : C.cian} />
                    <div className="relative overflow-hidden aspect-[3/4]">
                      <Image
                        src={w.src}
                        alt={w.alt}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {w.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-12 grid md:grid-cols-3 gap-px border" style={{ borderColor: C.line, backgroundColor: C.line }}>
              {[
                { n: '4.8★', t: `en Google, con ${BIZ.reviews} reseñas de clientes` },
                { n: 'Mismo día', t: 'cotizas por WhatsApp y coordinas retiro' },
                { n: 'Talca centro', t: `taller en ${BIZ.address}` },
              ].map((s) => (
                <div key={s.n} className="p-6" style={{ backgroundColor: C.papel }}>
                  <p className={`${display.className} text-2xl md:text-3xl mb-2`} style={{ color: C.magenta }}>
                    {s.n}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.t}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <MonoTag light>Lo que dicen en Google</MonoTag>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.papel }}>
                {BIZ.rating}★ con
                <br />
                <span style={{ color: C.magenta }}>{BIZ.reviews} reseñas</span>
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${monoBold.className} text-xs uppercase tracking-[0.18em] underline underline-offset-8 decoration-2 tap-44`}
                style={{ color: C.papel, textDecorationColor: C.magenta }}
              >
                Ver ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70}>
                <figure
                  className="relative border p-6 md:p-8 h-full flex flex-col justify-between"
                  style={{ borderColor: C.lineLight, backgroundColor: C.tinta2 }}
                >
                  <CropMarks color="rgba(229,0,125,0.5)" />
                  <div>
                    <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5" />
                    <blockquote className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(241,237,228,0.92)' }}>
                      “{r.text}”
                    </blockquote>
                  </div>
                  <figcaption className={`${mono.className} mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(241,237,228,0.6)' }}>
                    {r.author} · {r.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <MonoTag>Contacto</MonoTag>
            <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl mb-6`}>
              Manda el archivo
              <br />
              <span style={{ color: C.magenta }}>y lo imprimimos</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORARIO.map((h) => (
                <li key={h.days} className={`${mono.className} flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.1em]`} style={{ color: C.muted }}>
                  <span className="w-2.5 h-2.5 shrink-0" style={{ backgroundColor: C.magenta }} aria-hidden="true" />
                  <span>
                    <strong style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.magenta, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} text-sm md:text-base px-7 py-3.5 border-2 transition-all duration-200 hover:bg-black/5 tap-44`}
                style={{ borderColor: 'rgba(27,30,35,0.35)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className={`${mono.className} text-xs mt-6 uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative border p-1.5 min-h-[320px] h-full" style={{ borderColor: C.line }}>
              <CropMarks color={C.cian} />
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.magenta }}>
        <div
          aria-hidden="true"
          className={`${display.className} absolute inset-x-0 -top-6 md:-top-10 text-center select-none pointer-events-none uppercase leading-none`}
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.28)' }}
        >
          Imprime
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} uppercase text-[clamp(2.2rem,7vw,4.5rem)] leading-[0.95] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              ¿Un letrero, un pendón,
              <br />
              <span className="inline-block mt-2 px-3 py-1" style={{ backgroundColor: '#0B0C0D', color: C.amarillo }}>
                un camión entero?
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-medium" style={{ color: '#FFFFFF' }}>
              Escríbenos con la idea o el archivo y te cotizamos altiro.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS_LIGHT} ${display.className} inline-block text-sm md:text-base px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.tinta, color: C.papel }}
            >
              Cotizar con Pixels Chile
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0B0C0D', color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-xl md:text-2xl mb-2 flex items-center gap-3`}>
              <span className="flex gap-0.5" aria-hidden="true">
                <span className="w-2 h-2" style={{ backgroundColor: C.cian }} />
                <span className="w-2 h-2" style={{ backgroundColor: C.magenta }} />
                <span className="w-2 h-2" style={{ backgroundColor: C.amarillo }} />
              </span>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(241,237,228,0.72)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(241,237,228,0.72)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(241,237,228,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 text-[10px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: 'rgba(241,237,228,0.55)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name} — nombre, dirección, horario,
            reseñas y fotos son datos públicos reales.
          </p>
        </div>
      </footer>

      <div className="px-band pb-20" style={{ backgroundColor: '#0B0C0D' }}>
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
