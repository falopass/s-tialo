import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { DemoBand } from '../kit'
import { CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { Fade, Parallax, TopBar } from './chrome'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/source-serif-4/italic-200-900.woff2', weight: '200 900', style: 'italic' },
    { path: '../../fonts/source-serif-4/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})

/**
 * Paleta del demo: vino, hueso y oro viejo sobre tinta cálida.
 * Regla de formas: todo lo interactivo es píldora (rounded-full) y los
 * marcos de imagen usan radio de 1.75rem; el resto va sin radio.
 */
const C = {
  bone: '#F5EFE6',
  wine: '#6B2737',
  wineInk: '#2E1620',
  gold: '#B98B4E',
  goldSoft: '#D8BC8F',
  ink: '#241B1D',
  muted: '#6E5D57',
}

const SCRIM = {
  hero: 'linear-gradient(180deg, rgba(46,22,32,0.74) 0%, rgba(46,22,32,0.3) 32%, rgba(46,22,32,0.62) 64%, rgba(46,22,32,0.95) 100%)',
  left: 'linear-gradient(180deg, rgba(46,22,32,0.5) 0%, rgba(46,22,32,0.08) 30%, rgba(46,22,32,0.78) 82%, rgba(46,22,32,0.94) 100%), linear-gradient(90deg, rgba(46,22,32,0.82) 0%, rgba(46,22,32,0.46) 40%, rgba(46,22,32,0) 74%)',
  right:
    'linear-gradient(180deg, rgba(46,22,32,0.5) 0%, rgba(46,22,32,0.08) 30%, rgba(46,22,32,0.78) 82%, rgba(46,22,32,0.94) 100%), linear-gradient(270deg, rgba(46,22,32,0.82) 0%, rgba(46,22,32,0.46) 40%, rgba(46,22,32,0) 74%)',
  sobre:
    'linear-gradient(180deg, rgba(46,22,32,0.4) 0%, rgba(46,22,32,0.6) 42%, rgba(46,22,32,0.9) 72%, rgba(46,22,32,0.97) 100%)',
  contacto:
    'linear-gradient(180deg, rgba(46,22,32,0.9) 0%, rgba(46,22,32,0.93) 55%, rgba(46,22,32,0.97) 100%)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-y-farmacia-veterinaria-angel-guardian',
  title: 'Clínica y Farmacia Veterinaria Ángel Guardián - Veterinaria en Linares',
  description: 'Clínica y farmacia veterinaria en Maipú 774, Linares: consulta, vacunas, medicamentos, alimentos y accesorios para tu mascota. Agenda por teléfono.',
  image: '/demos/clinica-y-farmacia-veterinaria-angel-guardian/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

type Panel = {
  id?: string
  src: string
  alt: string
  scrim: string
  side: 'left' | 'right'
  height: string
  title: string
  lead: string
  items: string[]
  note: string
  columns?: boolean
}

const PANELES: Panel[] = [
  {
    id: 'servicios',
    src: `${IMG}/detalle1.webp`,
    alt: 'Bandeja con estetoscopio, otoscopio y termómetro sobre el mesón de atención',
    scrim: SCRIM.left,
    side: 'left',
    height: 'min-h-[100svh]',
    title: 'Consulta y control sano',
    lead: 'Atendemos perros y gatos con hora agendada por teléfono. Revisamos a tu mascota, te explicamos el diagnóstico y sales con el tratamiento claro.',
    items: [
      'Consulta general y control sano',
      'Vacunación y desparasitación',
      'Exámenes y diagnóstico por imagen',
      'Cirugías programadas',
    ],
    note: 'Servicios de muestra: al publicar va la lista real de la clínica.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Estanterías de la farmacia veterinaria con medicamentos, vendas e insumos',
    scrim: SCRIM.right,
    side: 'right',
    height: 'min-h-[92svh]',
    title: 'Farmacia veterinaria',
    lead: 'La farmacia está en el mismo local: sales con el tratamiento en la mano, sin recorrer la ciudad buscando lo que recetaron.',
    items: [
      'Medicamentos y recetas',
      'Antiparasitarios internos y externos',
      'Alimentos de prescripción',
      'Insumos de curación',
    ],
    note: 'Surtido de muestra: al publicar va el catálogo real de la farmacia.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Mostrador de la tienda con alimentos, accesorios y caja de atención',
    scrim: SCRIM.left,
    side: 'left',
    height: 'min-h-[100svh]',
    title: 'Tienda y accesorios',
    lead: 'Lo de todos los días para tu mascota, con el consejo de quienes la atienden desde cachorra.',
    items: [
      'Alimentos y snacks',
      'Accesorios y juguetes',
      'Higiene y cuidado',
      'Arena sanitaria y areneros',
    ],
    note: 'Productos de muestra: al publicar va lo que hay realmente en la tienda.',
    columns: true,
  },
]

const RESENAS = [
  {
    text: 'Llegué sin hora con mi perra decaída y la atendieron igual. Salimos con el tratamiento y al día siguiente ya andaba jugando.',
    author: 'Paulina M., clienta del sector centro',
  },
  {
    text: 'La farmacia es lo mejor: te dan el remedio ahí mismo y no tienes que andar buscando en otras partes.',
    author: 'Rodrigo S., cliente de Linares',
  },
  {
    text: 'Tienen paciencia con los gatos y explican todo sin apuro. Se nota que aman lo que hacen.',
    author: 'Camila V., clienta de Linares',
  },
]

const PRECIOS = [
  {
    title: 'Consultas y procedimientos',
    rows: [
      { name: 'Consulta general', price: 'desde $12.000' },
      { name: 'Vacunación (por dosis)', price: 'desde $10.000' },
      { name: 'Desparasitación', price: 'desde $6.000' },
      { name: 'Exámenes y laboratorio', price: 'desde $15.000' },
      { name: 'Cirugías programadas', price: 'a evaluar' },
    ],
  },
  {
    title: 'Farmacia y tienda',
    rows: [
      { name: 'Medicamentos', price: 'según receta' },
      { name: 'Alimentos de prescripción', price: 'según producto' },
      { name: 'Accesorios y juguetes', price: 'según producto' },
      { name: 'Insumos de curación', price: 'según producto' },
    ],
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 a 19:00' },
  { days: 'Sábado', time: '10:00 a 14:00' },
]

function PhotoPanel({ id, src, alt, scrim, side, height, title, lead, items, note, columns }: Panel) {
  return (
    <section id={id} className={`relative flex overflow-hidden scroll-mt-16 ${height}`} style={{ backgroundColor: C.wineInk }}>
      <Parallax src={src} alt={alt} />
      <div className="absolute inset-0" style={{ background: scrim }} aria-hidden="true" />
      <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-32 pb-16 md:pb-24 flex items-end">
        <div className={`w-full ${side === 'right' ? 'md:ml-auto md:max-w-[36rem]' : 'md:max-w-[36rem]'}`}>
          <Fade>
            <h2
              className={`${display.className} font-extrabold text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.04] tracking-[-0.02em]`}
              style={{ color: C.bone }}
            >
              {title}
            </h2>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(245,239,230,0.84)' }}>
              {lead}
            </p>
            <ul className={columns ? 'mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3.5' : 'mt-8 space-y-3.5'}>
              {items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-[15px] md:text-base"
                  style={{ color: 'rgba(245,239,230,0.92)' }}
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.75em] h-px w-6 shrink-0"
                    style={{ backgroundColor: C.gold }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.66)' }}>
              {note}
            </p>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default function ClinicaVeterinariaAngelGuardianPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.bone, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .ag-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: #2E1620 }
        .ag-band > div { position: static; max-width: 100%; background-color: rgba(10,10,10,0.94) }
      `}</style>
      <TopBar
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          bar: 'rgba(46,22,32,0.88)',
          ink: C.bone,
          line: 'rgba(245,239,230,0.18)',
          accent: C.gold,
          solidBg: C.gold,
          solidInk: C.wineInk,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.wineInk }}>
        <Parallax
          src={`${IMG}/hero.webp`}
          alt="Box de atención de la clínica veterinaria, con instrumental sobre el mesón y estanterías de farmacia al fondo"
          strength={5}
          eager
        />
        <div className="absolute inset-0" style={{ background: SCRIM.hero }} aria-hidden="true" />
        <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-24 pb-14 md:pb-20">
          <Fade>
            <p
              className="text-[11px] uppercase tracking-[0.22em] font-semibold mb-5"
              style={{ color: C.goldSoft }}
            >
              Clínica y farmacia veterinaria en Linares
            </p>
            <h1
              className={`${display.className} font-black text-[clamp(2.4rem,8.5vw,5.2rem)] leading-[1.02] tracking-[-0.03em] mb-6`}
              style={{ color: C.bone }}
            >
              El ángel guardián
              <br />
              <span className="font-semibold" style={{ color: C.goldSoft }}>
                de tu mascota
              </span>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-[34rem] mb-9"
              style={{ color: 'rgba(245,239,230,0.86)' }}
            >
              Consulta, vacunas y farmacia veterinaria en Maipú 774, Linares.
              Todo para tu mascota, en un mismo lugar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B4E]`}
                style={{ backgroundColor: C.gold, color: C.wineInk }}
              >
                Llamar a la clínica
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B4E]`}
                style={{ borderColor: 'rgba(245,239,230,0.55)', color: C.bone }}
              >
                Ver servicios
              </a>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Franja de datos reales ── */}
      <section style={{ backgroundColor: C.wineInk }}>
        <div
          className="max-w-[1400px] mx-auto px-5 md:px-10 py-4 flex flex-wrap items-center gap-x-10 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.18em]"
          style={{ color: 'rgba(245,239,230,0.72)' }}
        >
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 transition-colors hover:text-[#F5EFE6]"
          >
            {BIZ.reviews} reseñas en Google
          </a>
          <span>
            {BIZ.address}, {BIZ.city}
          </span>
          <span className="hidden md:inline" style={{ color: C.goldSoft }}>
            Sitio de ejemplo de Sitiazo
          </span>
        </div>
      </section>

      {/* ── Servicios y productos, a sangre ── */}
      {PANELES.map((panel) => (
        <PhotoPanel key={panel.title} {...panel} />
      ))}

      {/* ── Sobre el negocio ── */}
      <section id="clinica" className="relative flex overflow-hidden min-h-[100svh] scroll-mt-16" style={{ backgroundColor: C.wineInk }}>
        <Parallax
          src={`${IMG}/ambiente.webp`}
          alt="Fachada de la clínica y farmacia veterinaria en calle Maipú, Linares"
        />
        <div className="absolute inset-0" style={{ background: SCRIM.sobre }} aria-hidden="true" />
        <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-32 pb-16 md:pb-24 flex flex-col justify-end">
          <Fade>
            <h2
              className={`${display.className} font-extrabold text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.04] tracking-[-0.02em]`}
              style={{ color: C.bone }}
            >
              En plena calle Maipú, en Linares
            </h2>
            <p
              className="mt-5 max-w-[46rem] text-[15px] md:text-base leading-relaxed"
              style={{ color: 'rgba(245,239,230,0.84)' }}
            >
              Clínica y farmacia en el mismo local, con atención directa y sin
              derivaciones: te reciben, revisan a tu mascota y sales con lo que
              necesita. La comunidad los sigue en Facebook, donde ya son{' '}
              {BIZ.followers} seguidores.
            </p>
          </Fade>
          <Fade delay={0.1} className="mt-12 md:mt-16">
            <div
              className="grid md:grid-cols-3 gap-8 md:gap-0 md:divide-x"
              style={{ borderColor: 'rgba(245,239,230,0.22)' }}
            >
              {RESENAS.map((r) => (
                <figure key={r.text} className="md:px-8 md:first:pl-0 md:last:pr-0">
                  <blockquote
                    className="text-[15px] md:text-base italic leading-relaxed"
                    style={{ color: 'rgba(245,239,230,0.92)' }}
                  >
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-[11px] uppercase tracking-[0.16em] leading-relaxed"
                    style={{ color: C.goldSoft }}
                  >
                    {r.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              ))}
            </div>
          </Fade>
          <Fade delay={0.15}>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-1"
                style={{ color: C.bone }}
              >
                Ver la ficha en Google
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-1"
                style={{ color: C.bone }}
              >
                Página de Facebook
              </a>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-16" style={{ backgroundColor: C.bone }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-20 md:py-32">
          <Fade>
            <h2
              className={`${display.className} font-black text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] tracking-[-0.02em]`}
              style={{ color: C.wineInk }}
            >
              Precios de referencia
            </h2>
            <p className="mt-5 max-w-[46rem] text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
              Valores de muestra para que te hagas una idea. Al publicar van los
              precios reales de la clínica.
            </p>
          </Fade>
          <div className="mt-12 md:mt-16 grid gap-12 md:gap-16 lg:grid-cols-2">
            {PRECIOS.map((group) => (
              <Fade key={group.title}>
                <h3 className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: C.wine }}>
                  <span aria-hidden="true" className="h-px w-7" style={{ backgroundColor: C.gold }} />
                  {group.title}
                </h3>
                <ul className="mt-6">
                  {group.rows.map((row) => (
                    <li
                      key={row.name}
                      className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-4 py-3"
                    >
                      <span className="text-[15px] md:text-base" style={{ color: C.ink }}>
                        {row.name}
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-[0.6em] border-b border-dotted"
                        style={{ borderColor: 'rgba(36,27,29,0.3)' }}
                      />
                      <span
                        className={`${display.className} text-[15px] md:text-base font-bold whitespace-nowrap`}
                        style={{ color: C.wine }}
                      >
                        {row.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="relative flex overflow-hidden min-h-[100svh] scroll-mt-16" style={{ backgroundColor: C.wineInk }}>
        <Parallax
          src={`${IMG}/hero.webp`}
          alt="Sala de atención de la clínica veterinaria Ángel Guardián"
          strength={3.5}
        />
        <div className="absolute inset-0" style={{ background: SCRIM.contacto }} aria-hidden="true" />
        <div className="relative w-full max-w-[1400px] mx-auto px-5 md:px-10 pt-32 pb-16 md:pb-24 grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
          <Fade>
            <h2
              className={`${display.className} font-extrabold text-[clamp(2.1rem,5.2vw,3.6rem)] leading-[1.04] tracking-[-0.02em]`}
              style={{ color: C.bone }}
            >
              Agenda la hora de tu mascota
            </h2>
            <p className="mt-5 max-w-[34rem] text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(245,239,230,0.84)' }}>
              Llámanos y coordinamos día y hora. También puedes
              llegar directo a la clínica, en plena calle Maipú.
            </p>
            <address className="not-italic mt-8 space-y-2 text-[15px] md:text-base" style={{ color: 'rgba(245,239,230,0.9)' }}>
              <p>
                {BIZ.address}, {BIZ.city}, {BIZ.region}
              </p>
              <p>
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-1">
                  {BIZ.phoneDisplay}
                </a>
              </p>
            </address>
            <ul className="mt-6 space-y-2 text-sm md:text-[15px]" style={{ color: 'rgba(245,239,230,0.76)' }}>
              {HORAS.map((h) => (
                <li key={h.days}>
                  <span className="font-semibold" style={{ color: 'rgba(245,239,230,0.95)' }}>
                    {h.days}:
                  </span>{' '}
                  {h.time}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.6)' }}>
              Horario de muestra: al publicar va el horario real de la clínica.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B4E]`}
                style={{ backgroundColor: C.gold, color: C.wineInk }}
              >
                Llamar a la clínica
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B98B4E]`}
                style={{ borderColor: 'rgba(245,239,230,0.55)', color: C.bone }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Fade>
          <Fade delay={0.12}>
            <div
              className="rounded-[1.75rem] overflow-hidden border h-[320px] md:h-[440px]"
              style={{ borderColor: 'rgba(245,239,230,0.28)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Fade>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.gold }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.wineInk }}>
            Sitio de ejemplo de{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4"
            >
              Sitiazo
            </a>{' '}
            para la {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} shrink-0 text-sm font-semibold underline underline-offset-4`}
            style={{ color: C.wineInk }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.wineInk, color: C.bone }}>
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 py-5 flex flex-col md:flex-row md:items-end justify-between gap-3 border-t" style={{ borderColor: 'rgba(245,239,230,0.16)' }}>
          <div>
            <p className={`${display.className} text-base font-bold mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.78)' }}>
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <a
            href={BIZ.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs underline underline-offset-4 transition-colors hover:text-[#F5EFE6]"
            style={{ color: 'rgba(245,239,230,0.78)' }}
          >
            Facebook
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,230,0.16)' }}>
          <p className="max-w-[1400px] mx-auto px-5 md:px-10 py-3 text-[10px] leading-snug" style={{ color: 'rgba(245,239,230,0.7)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Nombre,
            dirección, teléfono y reseñas de Google son datos públicos reales;
            servicios, precios, horarios y textos son de muestra.
          </p>
        </div>
      </footer>

      <div className="ag-band">
        <DemoBand name={BIZ.name} />
      </div>
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.wineInk} />
    </div>
  )
}
