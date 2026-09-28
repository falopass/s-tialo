import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_SERVICIO, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  sand: '#EDE6DA',
  white: '#FFFFFF',
  orange: '#E4572E',
  orangeInk: '#B23A17',
  orangeLight: '#F0875A',
  orangeBtn: '#C2491F',
  orangeBtnHover: '#A83813',
  concrete: '#3A3F44',
  concreteDeep: '#2B2F33',
  ink: '#3A3F44',
  muted: 'rgba(58,63,68,0.82)',
  line: 'rgba(58,63,68,0.18)',
  lineDark: 'rgba(237,230,218,0.2)',
  sandSoft: 'rgba(237,230,218,0.72)',
}

const BTN_SOLID = `${display.className} font-bold uppercase tracking-[0.06em] text-sm md:text-base px-8 py-3.5 bg-[#C2491F] text-white transition hover:bg-[#A83813] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`
const BTN_GHOST = `${display.className} font-bold uppercase tracking-[0.06em] text-sm md:text-base px-8 py-3.5 border transition hover:bg-white/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EDE6DA]`
const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2'

export const metadata: Metadata = demoMetadata({
  slug: 'nailsyus',
  title: 'NAILSYUS · Salón de manicura y pedicura en Talca',
  description: 'Salón de manicura y pedicura en Calle 24 1/2 Nte. J 4126, Talca. Agenda tu hora por WhatsApp.',
  image: '/demos/nailsyus/hero.webp',
})

const NAV_LINKS = [
  { num: '01', label: 'Servicios', href: '#servicios' },
  { num: '02', label: 'El salón', href: '#salon' },
  { num: '03', label: 'Precios', href: '#precios' },
  { num: '04', label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Estación de manicura de NAILSYUS: lámpara de trabajo, silla y toalla lista',
    num: '01',
    name: 'Manicura clásica',
    desc: 'Limado, cutícula prolija y esmalte tradicional. La base de unas manos cuidadas.',
    tag: 'El de siempre',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Instrumental de manicura ordenado junto a la repisa de esmaltes del salón',
    num: '02',
    name: 'Esmaltado permanente',
    desc: 'Color que dura semanas intacto, con el brillo del primer día.',
    tag: 'Larga duración',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Sillón de pedicura del salón con toallas blancas y luz de ventana',
    num: '03',
    name: 'Pedicura',
    desc: 'Cuidado completo para los pies: limpieza, limado y esmalte, con calma.',
    tag: 'Descanso total',
  },
]

const PRECIOS = [
  { name: 'Manicura clásica', desc: 'Limado, cutícula y esmalte tradicional', price: 'desde $10.000' },
  { name: 'Esmaltado permanente', desc: 'Incluye preparación de la uña', price: 'desde $15.000' },
  { name: 'Pedicura completa', desc: 'Cuidado y esmaltado de pies', price: 'desde $16.000' },
  { name: 'Retiro de permanente', desc: 'Sin dañar la uña natural', price: 'desde $5.000' },
]

const FICHA = [
  { k: 'Comuna', v: `${BIZ.city}, ${BIZ.region}` },
  { k: 'Dirección', v: BIZ.address },
  { k: 'Instagram', v: `@${BIZ.igUser} · ${BIZ.igFollowers} seguidores`, href: IG_URL },
  { k: 'Google Maps', v: `${BIZ.reviews} reseña publicada`, href: MAPS_URL },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00-19:00' },
  { days: 'Sábado', time: '10:00-14:00' },
]

/** Marca de registro «+» para las esquinas de la retícula */
function Mark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={`absolute w-3 h-3 pointer-events-none ${className}`}
      fill="none"
      stroke={C.orange}
      strokeWidth="1.4"
      aria-hidden="true"
    >
      <path d="M8 1 v14 M1 8 h14" />
    </svg>
  )
}

function SectionHead({
  num,
  title,
  note,
  dark = false,
}: {
  num: string
  title: string
  note?: string
  dark?: boolean
}) {
  const ink = dark ? C.sand : C.ink
  const line = dark ? C.lineDark : C.line
  return (
    <Reveal>
      <div
        className="flex items-baseline justify-between gap-4 border-t-[3px] pb-3 mb-10 md:mb-14"
        style={{ borderTopColor: dark ? C.orange : C.ink, borderBottom: `1px solid ${line}` }}
      >
        <div className="flex items-baseline gap-4">
          <span
            className={`${display.className} font-bold text-sm md:text-base`}
            style={{ color: dark ? C.orangeLight : C.orangeInk }}
          >
            {num}
          </span>
          <h2
            className={`${display.className} font-bold uppercase tracking-[0.02em] text-2xl md:text-4xl leading-none`}
            style={{ color: ink }}
          >
            {title}
          </h2>
        </div>
        {note && (
          <p
            className="min-w-0 text-right text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-medium"
            style={{ color: dark ? C.sandSoft : C.muted }}
          >
            {note}
          </p>
        )}
      </div>
    </Reveal>
  )
}

export default function NailsyusPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.sand, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .ny-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: #2B2F33 }
        .ny-band > div { position: static; max-width: 100%; background-color: rgba(10,10,10,0.94) }
        .ny-nav header { background-color: rgba(237,230,218,0.94) !important; backdrop-filter: blur(10px) !important; -webkit-backdrop-filter: blur(10px) !important; box-shadow: 0 1px 0 rgba(58,63,68,0.18) !important }
        .ny-nav header a, .ny-nav header nav a { color: #3A3F44 !important }
        .ny-nav header a[href^="https://wa.me"] { background-color: #C2491F !important; color: #fff !important; border: 0 !important }
      `}</style>
      <div className="ny-nav">
        <BlitzNav
          name={BIZ.name}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={`${display.className} font-bold tracking-tight`}
          theme={{
            over: 'dark',
            bar: 'rgba(237,230,218,0.94)',
            ink: C.ink,
            line: C.line,
            btnBg: C.orangeBtn,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.concreteDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de NAILSYUS: estaciones de manicura con lámparas, repisas de esmaltes y vitrina a la calle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(43,47,51,0.35) 0%, rgba(43,47,51,0.05) 40%, rgba(43,47,51,0.88) 100%)',
          }}
        />

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-20 md:pb-20">
          <Reveal>
            {/* fila de registro: rótulos en mayúsculas pequeñas */}
            <div
              className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1.5 border-y py-2.5 mb-6 text-[10px] md:text-xs uppercase tracking-[0.28em] font-medium"
              style={{ borderColor: 'rgba(237,230,218,0.4)', color: 'rgba(237,230,218,0.85)' }}
            >
              <span>{BIZ.rubro}</span>
              <span className="hidden md:inline">{BIZ.city}, {BIZ.region}</span>
              <span style={{ color: C.orangeLight }}>Sitio de ejemplo</span>
            </div>

            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.88] tracking-[-0.02em] text-[clamp(3rem,13vw,10.5rem)] mb-6`}
              style={{ color: C.white }}
            >
              Nails<span style={{ color: C.orangeLight }}>yus</span>
            </h1>

            <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 items-end mb-8">
              <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(237,230,218,0.9)' }}>
                Manicura y pedicura en Talca con hora agendada:
                trabajo prolijo, instrumental cuidado y terminaciones
                limpias, pieza por pieza.
              </p>
              <div className="flex flex-wrap md:justify-end gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BTN_SOLID}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={BTN_GHOST}
                  style={{ borderColor: 'rgba(237,230,218,0.75)', color: C.sand }}
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </Reveal>

          {/* ficha inferior: celdas con reglas finas */}
          <Reveal delay={140}>
            <dl className="grid grid-cols-2 md:grid-cols-4 border-t" style={{ borderColor: 'rgba(237,230,218,0.35)' }}>
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { k: 'Instagram', v: `@${BIZ.igUser}`, href: IG_URL },
                { k: 'Agenda', v: 'Con hora reservada' },
              ].map((f) => (
                <div key={f.k} className="py-4 even:border-l even:pl-4 md:border-l md:pl-4 md:first:border-l-0 md:first:pl-0" style={{ borderColor: 'rgba(237,230,218,0.35)' }}>
                  <dt className="text-[10px] uppercase tracking-[0.28em] mb-1.5" style={{ color: 'rgba(237,230,218,0.8)' }}>
                    {f.k}
                  </dt>
                  <dd className="text-xs md:text-sm font-medium" style={{ color: C.sand }}>
                    {f.href ? (
                      <a href={f.href} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-1 hover:opacity-80 ${FOCUS} focus-visible:outline-[#EDE6DA]`}>
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Índice: tabla de contenidos con anclas ── */}
      <nav aria-label="Índice" className="border-b" style={{ borderColor: C.line }}>
        <ul className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: C.line }}>
          {NAV_LINKS.map((l) => (
            <li key={l.href} style={{ backgroundColor: C.sand }}>
              <a
                href={l.href}
                className={`group flex items-baseline gap-3 h-full py-4 md:py-5 px-4 md:px-5 transition-colors hover:bg-white ${FOCUS} focus-visible:outline-[#E4572E]`}
              >
                <span className={`${display.className} font-bold text-xs md:text-sm`} style={{ color: C.orangeInk }}>
                  {l.num}
                </span>
                <span className="text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold transition-colors group-hover:text-[#B23A17]">
                  {l.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── 01 · Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <SectionHead num="01" title="Servicios" note="Carta de muestra" />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border" style={{ borderColor: C.line, backgroundColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <li key={s.name} className="relative" style={{ backgroundColor: C.sand }}>
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full flex flex-col">
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5 flex-1" style={{ borderTop: `1px solid ${C.line}` }}>
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <p className={`${display.className} font-bold text-xs`} style={{ color: C.orangeInk }}>
                        {s.num}
                      </p>
                      <p className="text-[10px] uppercase tracking-[0.22em] font-medium" style={{ color: C.muted }}>
                        {s.tag}
                      </p>
                    </div>
                    <h3 className={`${display.className} font-bold uppercase tracking-[0.02em] text-lg md:text-xl leading-tight mb-2`}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
          {/* celda CTA: bloque sólido de la retícula */}
          <li>
            <div className="h-full min-h-[280px] flex flex-col justify-between p-5 bg-[#C2491F] text-white">
              <p className="text-[10px] uppercase tracking-[0.22em] font-semibold opacity-80">
                Y lo que necesites
              </p>
              <div>
                <p className={`${display.className} font-bold uppercase text-2xl md:text-3xl leading-[1.05] mb-3`}>
                  Consulta por tu diseño
                </p>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.98)' }}>
                  Nail art, kapping o algo que viste en Instagram: pregúntanos por WhatsApp.
                </p>
                <a
                  href={WA_LINK_SERVICIO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block font-bold uppercase tracking-[0.06em] text-xs px-5 py-3 border border-white/70 text-white transition hover:bg-white/10 active:scale-95 ${FOCUS} focus-visible:outline-white`}
                >
                  Consultar →
                </a>
              </div>
            </div>
          </li>
        </ul>
      </section>

      {/* ── 02 · El salón ── */}
      <section id="salon" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead num="02" title="El salón" note="Datos reales de la ficha" />
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <h3 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.08] mb-6`}>
                Un salón de barrio,
                <br />
                <span style={{ color: C.orangeInk }}>prolijo como taller.</span>
              </h3>
              <p className="text-base leading-relaxed mb-5 max-w-[60ch]" style={{ color: C.muted }}>
                NAILSYUS atiende en Calle 24 1/2 Norte, en Talca. El trato es
                directo: agenda por WhatsApp, te confirmamos la hora y el
                puesto de trabajo está listo cuando llegas.
              </p>
              <p className="text-base leading-relaxed mb-8 max-w-[60ch]" style={{ color: C.muted }}>
                Tiene {BIZ.reviews} reseña publicada en Google Maps y una
                comunidad de {BIZ.igFollowers} seguidores en Instagram, donde
                muestra los trabajos terminados.
              </p>
              <dl className="border-t" style={{ borderColor: C.line }}>
                {FICHA.map((f) => (
                  <div key={f.k} className="grid grid-cols-[110px_1fr] sm:grid-cols-[130px_1fr] gap-4 py-3.5 border-b" style={{ borderColor: C.line }}>
                    <dt className="text-[10px] uppercase tracking-[0.24em] font-medium pt-0.5" style={{ color: C.muted }}>
                      {f.k}
                    </dt>
                    <dd className="text-sm font-medium">
                      {f.href ? (
                        <a href={f.href} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-1 hover:text-[#B23A17] transition-colors ${FOCUS} focus-visible:outline-[#E4572E]`}>
                          {f.v}
                        </a>
                      ) : (
                        f.v
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative border" style={{ borderColor: C.line }}>
                <Mark className="-top-1.5 -left-1.5" />
                <Mark className="-top-1.5 -right-1.5" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada de NAILSYUS al atardecer: vitrina del salón a pie de calle en Talca"
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="flex items-center justify-between px-4 py-2.5 border-t text-[10px] uppercase tracking-[0.22em] font-medium"
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  <span>Fig. 01 · El local</span>
                  <span>{BIZ.address}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 03 · Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <SectionHead num="03" title="Precios" note="Valores de muestra" />
        <Reveal>
          <ul className="border-t" style={{ borderColor: C.line }}>
            {PRECIOS.map((p, i) => (
              <li
                key={p.name}
                className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 md:gap-x-8 py-4 md:py-5 border-b"
                style={{ borderColor: C.line }}
              >
                <span className={`${display.className} font-bold text-sm w-8`} style={{ color: C.orangeInk }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="min-w-0">
                  <h3 className={`${display.className} font-bold uppercase text-base md:text-lg leading-tight`}>
                    {p.name}
                  </h3>
                  <p className="text-sm mt-1" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
                <p className="text-sm font-semibold whitespace-nowrap">
                  {p.price} <span className="font-normal" style={{ color: C.muted }}>*</span>
                </p>
              </li>
            ))}
          </ul>
          <p className="text-xs leading-relaxed mt-4 max-w-lg" style={{ color: C.muted }}>
            * Valores de muestra para mostrar el formato de la carta: al
            publicar van los precios reales de cada servicio.
          </p>
        </Reveal>
      </section>

      {/* ── 04 · Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.concreteDeep, color: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead num="04" title="Agenda y ubicación" note="Respuesta el mismo día" dark />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal>
              <h3 className={`${display.className} font-bold uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(2.6rem,6.5vw,4.6rem)] mb-7`}>
                Agenda<br />
                <span style={{ color: C.orangeLight }}>tu hora</span>
              </h3>
              <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: C.sandSoft }}>
                Escríbenos por WhatsApp, cuéntanos qué necesitas y te
                confirmamos día y hora. Así de simple.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BTN_SOLID}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={BTN_GHOST}
                  style={{ borderColor: C.lineDark, color: C.sand }}
                >
                  @{BIZ.igUser}
                </a>
              </div>
              <dl className="grid grid-cols-2 gap-x-8 border-t pt-5 max-w-md" style={{ borderColor: C.lineDark }}>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.24em] mb-2" style={{ color: 'rgba(237,230,218,0.75)' }}>
                    Dirección
                  </dt>
                  <dd className="text-sm leading-relaxed">
                    {BIZ.address}
                    <br />
                    {BIZ.city}, {BIZ.region}
                  </dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.24em] mb-2" style={{ color: 'rgba(237,230,218,0.75)' }}>
                    Horario de muestra
                  </dt>
                  <dd className="text-sm leading-relaxed">
                    {HORAS.map((h) => (
                      <span key={h.days} className="block">
                        {h.days} · {h.time}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative border" style={{ borderColor: C.lineDark }}>
                <Mark className="-top-1.5 -left-1.5" />
                <Mark className="-bottom-1.5 -right-1.5" />
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full aspect-[4/3] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <figcaption
                  className="flex items-center justify-between gap-4 px-4 py-2.5 border-t text-[10px] uppercase tracking-[0.22em] font-medium"
                  style={{ borderColor: C.lineDark, color: 'rgba(237,230,218,0.75)' }}
                >
                  <span>Fig. 02 · Cómo llegar</span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 decoration-1 hover:text-white transition-colors shrink-0 ${FOCUS} focus-visible:outline-[#EDE6DA]`}>
                    Abrir en Maps →
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.concreteDeep, color: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row md:items-end justify-between gap-3 border-t" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} font-bold uppercase tracking-[-0.01em] text-xl mb-0.5`}>
              Nails<span style={{ color: C.orangeLight }}>yus</span>
            </p>
            <address className="not-italic text-[11px] leading-relaxed" style={{ color: 'rgba(237,230,218,0.75)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(237,230,218,0.75)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${FOCUS} focus-visible:outline-[#EDE6DA]`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[10px] leading-snug" style={{ color: 'rgba(237,230,218,0.72)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Servicios,
            precios, horarios y fotos son de muestra; el nombre, la dirección,
            el WhatsApp, el Instagram y las reseñas son datos reales de su
            ficha pública.
          </p>
        </div>
      </footer>

      <div className="ny-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
