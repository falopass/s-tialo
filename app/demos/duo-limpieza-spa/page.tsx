import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-mono',
})

// Identidad del logo Dúo: azul + verde sobre crema, con la cinta chilena
// (blanco-rojo-azul) como motivo de cierre — del sombrero huaso del logo.
const C = {
  cream: '#F7F2E7',
  creamDeep: '#EFE7D5',
  navy: '#16304C',
  navyDeep: '#10243A',
  green: '#1F7A4D',
  greenSoft: '#E2EFE5',
  red: '#C74440',
  ink: '#16304C',
  muted: '#506276',
  line: 'rgba(22,48,76,0.16)',
}

// Cinta chilena: blanco + rojo + azul, del logo
const CINTA =
  'repeating-linear-gradient(90deg, #F7F2E7 0 28px, #C74440 28px 56px, #16304C 56px 84px)'

export const metadata: Metadata = demoMetadata({
  slug: 'duo-limpieza-spa',
  title: 'Dúo Limpieza SpA — Limpieza de hogares y empresas en Talca',
  description:
    'Limpieza profesional a domicilio en Talca y la Región del Maule. Limpieza profunda, post-construcción, preparación de arriendos. 5,0 estrellas en Google. Cotiza por WhatsApp.',
  image: `${IMG}/team.webp`,
})

const NAV_LINKS = [
  { label: 'La lista', href: '#lista' },
  { label: 'El dúo', href: '#duo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#contacto' },
]

const LISTA = [
  'Limpieza profunda extrema — cada rincón, de verdad',
  'Cocinas: campanas, cubiertas y acero sin grasa ni marcas',
  'Baños sanitizados: mamparas, cerámica, llaves y rejillas',
  'Vidrios y ventanas por dentro y por fuera',
  'Terrazas y quinchos: pisos, parrillas y mobiliario',
  'Post-construcción: polvo de obra, restos y pintura',
  'Entrega de arriendos: lista para recibir o entregar',
  'Oficinas y empresas: limpieza programada',
]

const GALERIA = [
  { src: `${IMG}/kitchen.webp`, alt: 'Cocina limpia con cubierta de acero y accesorios ordenados', tag: 'cocina' },
  { src: `${IMG}/shower.webp`, alt: 'Baño con tina y mampara limpios, trabajador de Dúo Limpieza', tag: 'baño' },
  { src: `${IMG}/living.webp`, alt: 'Living ordenado y aspirado con sillones y centro de madera', tag: 'living' },
  { src: `${IMG}/table.webp`, alt: 'Mesa de comedor puesta y reluciente', tag: 'comedor' },
  { src: `${IMG}/room2.webp`, alt: 'Muro con repisas verdes limpias y ordenadas', tag: 'detalle' },
  { src: `${IMG}/mop.webp`, alt: 'Piso de madera siendo trapeado', tag: 'pisos' },
  { src: `${IMG}/room1.webp`, alt: 'Mueble de entretenimiento limpio en living', tag: 'detalle' },
  { src: `${IMG}/dining1.webp`, alt: 'Comedor con ventanal y mesa de madera impecable', tag: 'comedor' },
  { src: `${IMG}/sink.webp`, alt: 'Lavamanos impecable con productos de limpieza', tag: 'baño' },
]

const RESENAS = [
  {
    nombre: 'Victoria González Olavarría',
    texto: 'Súper dedicados, detallistas y profesionales… Recomendados 1000%.',
  },
  {
    nombre: 'María Laura López',
    texto: 'Hicieron la limpieza de mi oficina… trabajan con productos no contaminantes para el medio ambiente.',
  },
  {
    nombre: 'Victor Arellano',
    texto: 'Entrar a un hogar es entrar también en la intimidad de uno y eso ellos lo respetan mucho. Puntuales, profesionales.',
  },
  {
    nombre: 'ledyz cuesta herrera',
    texto: 'La amabilidad de Camilo y Luis… y el buen trato a mi perrita.',
  },
]

export default function Page() {
  return (
    <main
      className={`${display.variable} ${body.variable} ${mono.variable} font-[var(--font-body)] antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/avatar.webp`}
        fontClass="font-[var(--font-display)] font-bold"
        theme={{ over: 'dark', bar: C.cream, ink: C.navy, line: C.line, btnBg: C.green, btnInk: '#fff' }}
      />

      {/* ── HERO: foto de equipo a sangre + ticket crema ── */}
      <section id="inicio" className="relative">
        <div className="relative">
          <Image
            src={`${IMG}/team.webp`}
            alt="Camilo y Luis con su equipo de Dúo Limpieza con chaquetas de la marca"
            width={925}
            height={540}
            priority
            className="w-full h-[430px] md:h-[540px] object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(16,36,58,0.45) 0%, rgba(16,36,58,0.1) 45%, rgba(16,36,58,0.55) 100%)',
            }}
          />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div
              className="relative -mt-40 md:-mt-48 rounded-[1.75rem] p-6 md:p-9 max-w-xl"
              style={{ backgroundColor: C.cream, border: `1px solid ${C.line}`, boxShadow: '0 12px 40px rgba(16,36,58,0.18)' }}
            >
              <Image
                src={`${IMG}/logo.webp`}
                alt="Logo de Dúo Limpieza SpA: letra D con sombrero huaso y cinta chilena"
                width={720}
                height={232}
                className="w-[170px] md:w-[200px] h-auto -ml-1"
              />
              <h1
                className="font-[var(--font-display)] font-extrabold leading-[1.0] mt-5 text-[clamp(2.3rem,8.5vw,4rem)]"
                style={{ color: C.navy }}
              >
                Tu casa, como
                <br />
                recién limpiada<span style={{ color: C.green }}>.</span>
              </h1>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.owners} y su equipo limpian hogares y empresas de Talca y
                el Maule — con productos que no contaminan y el detalle de quien
                lo hace con cariño.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold active:scale-95 transition-transform"
                  style={{ backgroundColor: C.green, color: '#fff' }}
                >
                  Cotizar mi limpieza
                </a>
                <div className="flex items-center gap-2">
                  <Stars value={5} color={C.green} className="w-4 h-4" />
                  <span className="font-[var(--font-mono)] text-xs" style={{ color: C.muted }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas
                  </span>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-6 h-[6px] rounded-b"
                style={{ backgroundImage: CINTA }}
              />
            </div>
          </Reveal>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 mt-8 mb-2">
          <Reveal>
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>
              <span>Lun–Dom 8:00–18:30</span>
              <span>{BIZ.hogares} hogares felices</span>
              <span>Talca y el Maule</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LA LISTA: la pauta en papel ── */}
      <section id="lista">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.green }}>
              La pauta que dejan tachada
            </p>
            <h2
              className="font-[var(--font-display)] font-extrabold leading-[1.02] text-[clamp(2.2rem,6.5vw,3.8rem)] mb-10 md:mb-14"
              style={{ color: C.navy }}
            >
              Tú marcas la casilla.
              <br />
              Ellos la limpian.
            </h2>
          </Reveal>
          <Reveal>
            <div
              className="rounded-[1.5rem] overflow-hidden"
              style={{
                backgroundColor: '#FFFDF8',
                border: `1px solid ${C.line}`,
                backgroundImage:
                  'repeating-linear-gradient(180deg, transparent 0 51px, rgba(22,48,76,0.1) 51px 52px)',
              }}
            >
              <div className="grid sm:grid-cols-2">
                {LISTA.map((item, i) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 px-5 md:px-7 py-4"
                    style={{ borderTop: i === 0 || i === 1 ? 'none' : `1px dashed ${C.line}` }}
                  >
                    <span
                      className="mt-0.5 inline-flex shrink-0 w-6 h-6 rounded-md items-center justify-center rotate-[-4deg]"
                      style={{ backgroundColor: C.green, color: '#fff' }}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.5 10.5 L8 15.5 L17 4.5" />
                      </svg>
                    </span>
                    <p className="text-base md:text-lg font-medium leading-snug" style={{ color: C.ink }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal>
            <p className="mt-6 font-[var(--font-mono)] text-xs leading-relaxed" style={{ color: C.muted }}>
              * Servicios publicados por la propia empresa en su Instagram
              @duolimpiezaoficial. Productos no contaminantes, según sus clientes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO AGENDA ── */}
      <section style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              ['1', 'Les escribes', 'Mandas foto o cuentas qué hay que limpiar.'],
              ['2', 'Agendan la visita', 'Coordinan día y hora, y llegan puntuales.'],
              ['3', 'Tú disfrutas', 'Espacio impecable, sin mover un dedo.'],
            ].map(([n, t, d]) => (
              <Reveal key={n}>
                <div className="flex gap-4">
                  <span
                    className="font-[var(--font-display)] font-extrabold text-5xl leading-none"
                    style={{ color: 'rgba(247,242,231,0.5)' }}
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                  <div>
                    <h3 className="font-[var(--font-display)] font-bold text-xl leading-tight" style={{ color: '#F7F2E7' }}>
                      {t}
                    </h3>
                    <p className="text-sm mt-1.5 leading-snug" style={{ color: 'rgba(247,242,231,0.85)' }}>
                      {d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL DÚO ── */}
      <section id="duo" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
            <div className="grid grid-cols-2 gap-3">
              <Reveal>
                <Image
                  src={`${IMG}/flag.webp`}
                  alt="Integrante de Dúo Limpieza con bandera de Chile y uniforme de la marca"
                  width={941}
                  height={1190}
                  className="rounded-2xl w-full h-full object-cover aspect-[3/4]"
                />
              </Reveal>
              <Reveal>
                <Image
                  src={`${IMG}/dog.webp`}
                  alt="Integrante de Dúo Limpieza junto a una perrita golden retriever en un living"
                  width={832}
                  height={1200}
                  className="rounded-2xl w-full h-full object-cover aspect-[3/4] mt-8"
                />
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-4" style={{ color: 'rgba(247,242,231,0.6)' }}>
                  El dúo
                </p>
                <h2
                  className="font-[var(--font-display)] font-extrabold leading-[1.02] text-[clamp(2.2rem,6.5vw,3.8rem)]"
                  style={{ color: '#F7F2E7' }}
                >
                  Dos personas,
                  <br />
                  <span style={{ color: '#8FD4A8' }}>un estándar.</span>
                </h2>
              </Reveal>
              <Reveal>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(247,242,231,0.82)' }}>
                  Los clientes los nombran por su nombre: {BIZ.owners}. Llegan a
                  la hora, respetan la casa — y también a las mascotas — y no se
                  van hasta que el detalle quedó bien.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-8 grid grid-cols-3 gap-px rounded-xl overflow-hidden max-w-md" style={{ backgroundColor: 'rgba(247,242,231,0.16)' }}>
                  {[
                    [BIZ.rating, 'en Google'],
                    [BIZ.hogares, 'hogares felices'],
                    [`${BIZ.reviews}`, 'reseñas 5★'],
                  ].map(([n, l]) => (
                    <div key={l} className="px-4 py-4" style={{ backgroundColor: C.navyDeep }}>
                      <p className="font-[var(--font-display)] font-extrabold text-2xl md:text-3xl leading-none" style={{ color: '#8FD4A8' }}>
                        {n}
                      </p>
                      <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em] mt-2" style={{ color: 'rgba(247,242,231,0.65)' }}>
                        {l}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4"
                  style={{ color: '#8FD4A8' }}
                >
                  @duolimpiezaoficial · {BIZ.instagramFollowers} seguidores
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALERÍA ── */}
      <section style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2
              className="font-[var(--font-display)] font-extrabold leading-[1.02] text-[clamp(2.2rem,6.5vw,3.8rem)] mb-10 md:mb-14"
              style={{ color: C.navy }}
            >
              Casas reales del Maule,
              <br />
              después del dúo
            </h2>
          </Reveal>
          <div className="columns-2 md:columns-3 gap-3 [&>figure]:mb-3">
            {GALERIA.map((g) => (
              <Reveal key={g.src}>
                <figure className="break-inside-avoid relative">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto rounded-2xl"
                    style={{ border: `1px solid ${C.line}` }}
                  />
                  <span
                    className="absolute top-2 left-2 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] px-2 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(16,36,58,0.85)', color: '#F7F2E7' }}
                  >
                    {g.tag}
                  </span>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
            <Reveal>
              <div className="md:sticky md:top-24">
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.green }}>
                  Reseñas de Google
                </p>
                <div className="flex items-end gap-3">
                  <span className="font-[var(--font-display)] font-extrabold leading-none text-[clamp(4rem,14vw,7rem)]" style={{ color: C.navy }}>
                    {BIZ.rating}
                  </span>
                  <div className="pb-3">
                    <Stars value={5} color={C.green} className="w-4.5 h-4.5" />
                    <p className="font-[var(--font-mono)] text-xs mt-2" style={{ color: C.muted }}>
                      {BIZ.reviews} reseñas · todas 5 estrellas
                    </p>
                  </div>
                </div>
                <p className="mt-5 text-base leading-relaxed max-w-xs" style={{ color: C.muted }}>
                  Detallistas, puntuales y respetuosos del hogar: es lo que más
                  se repite en sus reseñas.
                </p>
              </div>
            </Reveal>
            <div className="space-y-3">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre}>
                  <blockquote
                    className="rounded-2xl p-5 md:p-6"
                    style={{
                      backgroundColor: i % 2 === 0 ? C.greenSoft : '#FFFDF8',
                      border: `1px solid ${C.line}`,
                    }}
                  >
                    <Stars value={5} color={C.green} className="w-3.5 h-3.5" />
                    <p className="mt-3 text-base leading-relaxed" style={{ color: C.ink }}>
                      “{r.texto}”
                    </p>
                    <footer className="mt-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                      {r.nombre}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── AGENDA + MAPA ── */}
      <section id="contacto" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <Reveal>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: '#8FD4A8' }}>
                  Agenda por WhatsApp
                </p>
                <h2
                  className="font-[var(--font-display)] font-extrabold leading-[1.02] text-[clamp(2.2rem,6.5vw,3.6rem)]"
                  style={{ color: '#F7F2E7' }}
                >
                  Diles qué limpiar.
                  <br />
                  Ellos llegan.
                </h2>
              </Reveal>
              <Reveal>
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-16 shrink-0" style={{ color: 'rgba(247,242,231,0.6)' }}>
                      Zona
                    </span>
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-base font-semibold underline underline-offset-4" style={{ color: '#F7F2E7' }}>
                      {BIZ.address} · {BIZ.city} y {BIZ.region}
                    </a>
                  </li>
                  {BIZ.hours.map((h) => (
                    <li key={h.d} className="flex gap-4 items-start">
                      <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-16 shrink-0" style={{ color: 'rgba(247,242,231,0.6)' }}>
                        Lun–Dom
                      </span>
                      <span className="text-base font-medium" style={{ color: '#F7F2E7' }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-16 shrink-0" style={{ color: 'rgba(247,242,231,0.6)' }}>
                      WhatsApp
                    </span>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-base font-semibold underline underline-offset-4" style={{ color: '#F7F2E7' }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </Reveal>
              <Reveal>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-8 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-bold active:scale-95 transition-transform"
                  style={{ backgroundColor: C.green, color: '#fff' }}
                >
                  Cotizar mi limpieza
                </a>
              </Reveal>
            </div>
            <Reveal>
              <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid rgba(247,242,231,0.25)` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Zona de trabajo de ${BIZ.name}: ${BIZ.city} y el Maule`}
                  className="w-full h-[300px] md:h-[380px] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER con cinta ── */}
      <footer style={{ backgroundColor: C.navyDeep }}>
        <div aria-hidden="true" className="h-[6px]" style={{ backgroundImage: CINTA }} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/avatar.webp`} alt="" width={36} height={36} className="h-8 w-8 rounded-full" aria-hidden="true" />
            <div>
              <p className="font-[var(--font-display)] font-bold text-sm" style={{ color: '#F7F2E7' }}>
                {BIZ.name}
              </p>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(247,242,231,0.55)' }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(247,242,231,0.55)' }}>
            Servicio a domicilio · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Cotizar una limpieza por WhatsApp" />
    </main>
  )
}
