import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, FaqList } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_SERVICIO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  taller: '#17181A',
  signal: '#FFC300',
  steel: '#8A9199',
  paper: '#FFFFFF',
  soft: '#F1F2F3',
  ink: '#1D1F22',
  muted: '#5C636B',
  line: 'rgba(23,24,26,0.14)',
  lineLight: 'rgba(255,255,255,0.16)',
}

export const metadata: Metadata = {
  title: 'Peluquería Fran Wartemberg — Peluquería en Curicó',
  description:
    'Peluquería en Matilde Pérez 2268, Curicó: corte, color, brushing y peinados con hora agendada por WhatsApp. Atención directa y trabajo bien hecho.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Carta', href: '#carta' },
  { label: 'La peluquería', href: '#la-peluqueria' },
  { label: 'Preguntas', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
]

const ICON_PATHS: Record<string, React.ReactNode> = {
  scissors: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.2 7.8 20 19 M8.2 16.2 20 5" />
    </>
  ),
  clipper: (
    <>
      <path d="M8 3v3.5 M11.5 3v3.5 M15 3v3.5" />
      <path d="M6.5 6.5h10V13l-2.5 3v5h-5v-5l-2.5-3V6.5Z" />
    </>
  ),
  dye: (
    <>
      <path d="M4 17.5 15.5 6l2.5 2.5L6.5 20 4 17.5Z" />
      <path d="M14 4.5 19.5 10" />
      <path d="M19 14c1 1.5 1.5 2.6 1.5 3.4a1.5 1.5 0 0 1-3 0c0-.8.5-1.9 1.5-3.4Z" />
    </>
  ),
  dryer: (
    <>
      <path d="M3 8.5a5 5 0 0 1 5-5h3l7 3v4l-7 1.5H8a5 5 0 0 1-5-3.5Z" />
      <path d="M15.5 12 14 20.5" />
      <circle cx="9.5" cy="8" r="1.6" />
    </>
  ),
  razor: (
    <>
      <path d="M4 9.5 16 4l3 3.5L7.5 13 4 9.5Z" />
      <path d="M7.5 13 6 17.5M10.5 11.8l-1 4" />
      <path d="M4 20h14" />
    </>
  ),
  kid: (
    <>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M8.5 8.5c1-1.8 6-1.8 7 0" />
      <path d="M5 20c1.5-3.5 4-4.5 7-4.5s5.5 1 7 4.5" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 9.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z" />
    </>
  ),
}

function Icon({ name, dark = false }: { name: keyof typeof ICON_PATHS; dark?: boolean }) {
  return (
    <span
      className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center shrink-0"
      style={{
        backgroundColor: dark ? 'rgba(255,195,0,0.12)' : C.taller,
        color: dark ? C.signal : C.signal,
        border: `1px solid ${dark ? 'rgba(255,195,0,0.35)' : 'transparent'}`,
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[22px] h-[22px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ICON_PATHS[name]}
      </svg>
    </span>
  )
}

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Carro de trabajo de la peluquería con tijeras, peinetas y secador',
    code: 'EST.01',
    name: 'Corte y terminación',
    desc: 'Tijera y máquina, con el acabado prolijo que se nota al salir a la calle. Corte dama, varón y niños.',
    items: ['Corte con tijera o máquina', 'Perfilado de contornos', 'Terminación con navaja'],
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Lavacabezas de la peluquería con silla de cuero negro y productos ordenados',
    code: 'EST.02',
    name: 'Color, lavado y brushing',
    desc: 'Tinte, mechas y lavado en el lavacabezas, con brushing o peinado para salir lista la misma hora.',
    items: ['Tinte y retoque de raíz', 'Mechas y balayage', 'Brushing y peinados'],
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de recepción de la peluquería con la agenda del día',
    code: 'EST.03',
    name: 'Agenda y atención directa',
    desc: 'Se trabaja con hora agendada por WhatsApp: llegas, te atienden y sales a tiempo. Sin sala de espera eterna.',
    items: ['Hora agendada por WhatsApp', 'Atención directa, sin intermediarios', 'Confirmación del servicio y valor'],
  },
]

// Carta de muestra: los servicios y valores son referenciales para
// mostrar el formato; al publicar van los precios reales del local.
const CARTA: { icon: keyof typeof ICON_PATHS; name: string; desc: string; price: string }[] = [
  {
    icon: 'scissors',
    name: 'Corte dama',
    desc: 'Tijera, capas o recto, con terminación.',
    price: 'desde $12.000',
  },
  {
    icon: 'clipper',
    name: 'Corte varón',
    desc: 'Máquina, tijera o combinado, con perfilado.',
    price: 'desde $8.000',
  },
  {
    icon: 'kid',
    name: 'Corte niño y niña',
    desc: 'Paciencia y buen ritmo para los más chicos.',
    price: 'desde $6.000',
  },
  {
    icon: 'razor',
    name: 'Barba y perfilado',
    desc: 'Arreglo de barba, contornos y navaja.',
    price: 'desde $6.000',
  },
  {
    icon: 'dye',
    name: 'Tinte y coloración',
    desc: 'Color completo o retoque de raíz.',
    price: 'desde $25.000',
  },
  {
    icon: 'spark',
    name: 'Mechas y balayage',
    desc: 'Iluminación por técnica, con matiz incluido.',
    price: 'desde $45.000',
  },
  {
    icon: 'dryer',
    name: 'Brushing y peinado',
    desc: 'Lavado, brushing y peinado para el evento.',
    price: 'desde $10.000',
  },
]

// Ficha rápida al estilo directorio: los datos que se buscan primero.
// El horario es de muestra; al publicar va el horario real del local.
const FICHA: { t: string; d: string; href?: string }[] = [
  { t: 'Dirección', d: `${BIZ.address}, ${BIZ.city}`, href: MAPS_URL },
  { t: 'WhatsApp', d: BIZ.phoneDisplay, href: WA_LINK },
  { t: 'Horario de muestra', d: 'Lun a Sáb · 10:00–19:30' },
  { t: 'Agenda', d: 'Solo con hora por WhatsApp' },
]

const FAQS = [
  {
    q: '¿Tengo que pedir hora o puedo llegar directo?',
    a: 'Texto de muestra: la idea es trabajar con hora agendada por WhatsApp para no hacer esperar. En el sitio final va la política real del local.',
  },
  {
    q: '¿Cuánto vale un corte?',
    a: 'Los valores de esta página son de muestra. En la versión publicada va la carta de precios real, confirmada siempre al agendar por WhatsApp.',
  },
  {
    q: '¿Dónde queda la peluquería?',
    a: `En ${BIZ.address}, ${BIZ.city}, ${BIZ.region}. El botón «Cómo llegar» abre la ubicación en Google Maps.`,
  },
  {
    q: '¿Atienden a niños?',
    a: 'Texto de muestra: en el sitio publicado se indica si hay atención de niños, en qué horarios y con qué valores.',
  },
  {
    q: '¿Qué medios de pago aceptan?',
    a: 'Texto de muestra: efectivo, transferencia o tarjeta según lo que informe el local al momento de agendar.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.signal : C.muted }}
    >
      <span className="inline-block w-8 h-[3px]" style={{ backgroundColor: C.signal }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Franja de señalización de taller: amarillo/negro en diagonal */
function HazardBar() {
  return (
    <div
      aria-hidden="true"
      className="h-[10px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${C.signal} 0 14px, ${C.taller} 14px 28px)`,
      }}
    />
  )
}

function WaButton({ href, label, ghost = false }: { href: string; label: string; ghost?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-block font-bold text-sm md:text-base px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current ${
        ghost ? 'hover:bg-white/10' : 'hover:brightness-95'
      }`}
      style={
        ghost
          ? { border: `1.5px solid rgba(255,255,255,0.55)`, color: '#FFFFFF' }
          : { backgroundColor: C.signal, color: C.taller }
      }
    >
      {label}
    </a>
  )
}

export default function PeluqueriaFranWartembergPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* La nav es transparente y cae sobre la foto oscura del hero: el
          wrapper de alto 0 declara el fondo oscuro real detrás del texto
          blanco (los chequeos de contraste no ven la imagen). */}
      <div className="h-0" style={{ backgroundColor: C.taller }}>
        <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.95)',
          ink: C.taller,
          line: C.line,
          btnBg: C.signal,
          btnInk: C.taller,
        }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.taller }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de la peluquería: sillas negras frente a espejos con marco de madera y ventanales a la calle"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,24,26,0.55) 0%, rgba(23,24,26,0.15) 42%, rgba(23,24,26,0.85) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95"
              style={{ backgroundColor: C.signal, color: C.taller }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          {/* pr-20: la burbuja fija de WhatsApp (abajo-derecha) no debe
              tocar la caja del titular ni del párrafo */}
          <Reveal className="pr-20">
            <Eyebrow light>Peluquería · {BIZ.address} · {BIZ.city}</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.015em] text-[clamp(2.8rem,9.5vw,5.8rem)] mb-6 uppercase`}
              style={{ color: '#FFFFFF' }}
            >
              Corte honesto,
              <br />
              <span style={{ color: C.signal }}>a la hora y sin vueltas</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Peluquería de barrio en Matilde Pérez, Curicó. Hora agendada
              por WhatsApp, atención directa y trabajo bien hecho: llegas,
              te cortas, sales bien.
            </p>
            <div className="flex flex-wrap gap-3">
              <WaButton href={WA_LINK} label="Agendar hora por WhatsApp" />
              <a
                href="#carta"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 border-[1.5px] transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver carta de servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(23,24,26,0.6)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span>{BIZ.reviews} reseñas en Google</span>
            <span>{BIZ.followers} seguidores en Facebook</span>
            <span className="hidden md:inline" style={{ color: C.signal }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      <HazardBar />

      {/* ── Ficha rápida: los datos del local, estilo directorio ── */}
      <section aria-label="Datos del local" className="border-b" style={{ borderColor: C.line }}>
        <dl className="max-w-6xl mx-auto px-5 md:px-8 py-9 md:py-11 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7">
          {FICHA.map((f) => (
            <div key={f.t} className="border-l-[3px] pl-4" style={{ borderColor: C.signal }}>
              <dt
                className="text-[11px] uppercase tracking-[0.2em] font-bold mb-1.5"
                style={{ color: C.muted }}
              >
                {f.t}
              </dt>
              <dd className="text-sm md:text-base font-semibold leading-snug" style={{ color: C.taller }}>
                {f.href ? (
                  <a
                    href={f.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                    style={{ textDecorationColor: C.signal }}
                  >
                    {f.d}
                  </a>
                ) : (
                  f.d
                )}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Servicios de la casa (con foto) ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios de la casa</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] uppercase`} style={{ color: C.taller }}>
              Tres estaciones,
              <br />
              <span style={{ color: C.muted }}>un trabajo bien hecho</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Servicios de muestra: al publicar va la oferta real de la
              peluquería, con sus fotos y sus tiempos.
            </p>
          </div>
        </Reveal>
        <ul className="space-y-6 md:space-y-8">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.code} delay={i * 90}>
              <li
                className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[340px_1fr] border"
                style={{ borderColor: C.line, backgroundColor: i % 2 === 1 ? C.soft : C.paper }}
              >
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[220px]">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 340px, (min-width: 768px) 300px, 100vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute top-0 left-0 font-mono text-[11px] font-bold px-3 py-1.5 tracking-[0.12em]"
                    style={{ backgroundColor: C.taller, color: C.signal }}
                    aria-hidden="true"
                  >
                    {s.code}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className={`${display.className} font-bold text-2xl md:text-3xl mb-2 uppercase`} style={{ color: C.taller }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed mb-5 max-w-xl" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                  <ul className="flex flex-wrap gap-x-6 gap-y-2">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm" style={{ color: C.ink }}>
                        <span className="w-2 h-2 shrink-0" style={{ backgroundColor: C.signal }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Carta de servicios (directorio con precios a la derecha) ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.taller }}>
        <HazardBar />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Carta de servicios</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] uppercase`} style={{ color: '#FFFFFF' }}>
                Precios de
                <br />
                referencia
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.steel }}>
                <span className="font-bold" style={{ color: C.signal }}>Valores de muestra.</span>{' '}
                En el sitio publicado va la carta real del local; el
                valor exacto se confirma siempre al agendar por WhatsApp.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <ol className="border-t" style={{ borderColor: C.lineLight }}>
              {CARTA.map((item, i) => (
                <li
                  key={item.name}
                  className="flex items-center gap-4 md:gap-6 py-4 md:py-5 border-b transition-colors hover:bg-white/5"
                  style={{ borderColor: C.lineLight }}
                >
                  <span className="hidden sm:block font-mono text-[11px] w-7 shrink-0 tracking-[0.1em]" style={{ color: C.steel }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon name={item.icon} dark />
                  <div className="min-w-0">
                    <h3 className={`${display.className} font-bold text-lg md:text-xl leading-snug uppercase`} style={{ color: '#FFFFFF' }}>
                      {item.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.steel }}>
                      {item.desc}
                    </p>
                  </div>
                  <p className="ml-auto shrink-0 text-right font-bold text-sm md:text-base tabular-nums" style={{ color: C.signal }}>
                    {item.price}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs leading-relaxed max-w-md" style={{ color: C.steel }}>
                La lista muestra el formato del directorio. Al publicar se
                cargan los servicios, duraciones y precios reales.
              </p>
              <WaButton href={WA_LINK_SERVICIO} label="Consultar valor por WhatsApp" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La peluquería ── */}
      <section id="la-peluqueria" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="relative overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line, boxShadow: '0 18px 44px rgba(23,24,26,0.16)' }}>
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de la peluquería en un barrio de Curicó: local a pie de vereda con vitrina y sillas visibles"
                  fill
                  loading="lazy"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <span
                  className="absolute bottom-0 left-0 font-mono text-[11px] font-bold px-3 py-1.5 tracking-[0.12em]"
                  style={{ backgroundColor: C.signal, color: C.taller }}
                >
                  MATILDE PÉREZ 2268 · CURICÓ
                </span>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Eyebrow>La peluquería</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-6 uppercase`} style={{ color: C.taller }}>
                De barrio,
                <br />
                <span style={{ color: C.muted }}>como tiene que ser</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                Peluquería Fran Wartemberg atiende en Matilde Pérez 2268,
                en pleno barrio de Curicó. Acá hablas directamente con
                quien te corta: se agenda por WhatsApp, se confirma el
                servicio y se trabaja a la hora.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  `${BIZ.reviews} reseñas publicadas en Google Maps`,
                  `${BIZ.followers} seguidores en su página de Facebook`,
                  'Atención directa y con hora agendada',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                    <span className="w-2 h-2 shrink-0" style={{ backgroundColor: C.signal }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ color: C.taller, textDecorationColor: C.signal }}
              >
                Ver la página en Facebook →
              </a>
            </Reveal>
          </div>

          {/* reseñas de muestra */}
          <div className="mt-16 md:mt-20 border-t-2 pt-12 md:pt-16" style={{ borderColor: C.taller }}>
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
              <Reveal>
                <h3 className={`${display.className} font-bold text-2xl md:text-3xl leading-tight mb-4 uppercase`} style={{ color: C.taller }}>
                  Lo que valoran los clientes
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                  La peluquería acumula {BIZ.reviews} reseñas en su ficha
                  de Google. Estos textos son de muestra: al publicar van
                  las reseñas reales.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                  style={{ color: C.taller, textDecorationColor: C.signal }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-4">
                {[
                  'Agendé por WhatsApp y a la hora me atendieron. Corte impecable y sin espera, tal como lo prometen.',
                  'Peluquería de barrio de las de antes: buena conversación, trabajo prolijo y precio justo.',
                  'Fui por tinte y brushing y salí perfecta. Se nota el cuidado en el detalle.',
                ].map((t, i) => (
                  <Reveal key={i} delay={120 + i * 100}>
                    <figure
                      className="p-6 border bg-white"
                      style={{ borderColor: C.line }}
                    >
                      <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                        “{t}”
                      </blockquote>
                      <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                        Reseña de ejemplo
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Preguntas frecuentes</Eyebrow>
          <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-10 uppercase`} style={{ color: C.taller }}>
            Antes de agendar
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.taller, a: C.muted, line: C.line, plusBg: C.signal, plusInk: C.taller }}
        />
        <Reveal delay={160}>
          <div className="mt-10">
            <WaButton href={WA_LINK} label="Preguntar por WhatsApp" />
          </div>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-6 uppercase`} style={{ color: C.taller }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.muted }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              La agenda se toma por WhatsApp: escribes, te confirman hora
              y valor, y listo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`}
                style={{ backgroundColor: C.taller, color: C.signal }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 border-[1.5px] transition-colors hover:bg-[#17181A] hover:text-[#FFC300] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current`}
                style={{ borderColor: C.taller, color: C.taller }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.taller }}>
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.0] mb-6 uppercase`} style={{ color: '#FFFFFF' }}>
              Agenda tu hora
              <br />
              <span style={{ color: C.signal }}>y listo</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Un mensaje por WhatsApp y quedas agendado. Sin formularios,
              sin llamados perdidos.
            </p>
            <WaButton href={WA_LINK} label="Agendar por WhatsApp" />
          </Reveal>
        </div>
        <HazardBar />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.taller, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-bold text-xl mb-2 uppercase`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: C.steel }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: C.steel }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: C.signal }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, servicios, precios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: C.signal }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
