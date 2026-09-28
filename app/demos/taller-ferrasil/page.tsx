import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Garage nocturno: acero al carbón, amarillo seguridad, foto del motor arriba.
const C = {
  bg: '#141518',
  panel: '#1C1E22',
  steel: '#2A2D33',
  ink: '#F2F1EC',
  muted: '#A8A8A0',
  line: 'rgba(242,241,236,0.14)',
  yellow: '#F2C200',
  yellowInk: '#2A2000',
}

export const metadata: Metadata = demoMetadata({
  slug: 'taller-ferrasil',
  title: 'Taller Ferrasil — Taller mecánico multimarca en Concepción',
  description:
    'Taller mecánico en Patricio Lynch 451, Concepción. Mantención general, motor, frenos y diagnóstico. 4,8 estrellas en Google.',
  image: `${IMG}/motor.webp`,
})

const NAV_LINKS = [
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const RESENAS = [
  {
    nombre: 'Myriam Daza',
    texto: 'Es mi taller de confianza, y lo es desde hace más de 10 años.',
    sello: 'Cliente hace 10+ años',
  },
  {
    nombre: 'Gustavo Rodríguez',
    texto: 'El mejor taller de Concepción. Confiable y responsable.',
    sello: null,
  },
  {
    nombre: 'Ema Espinoza',
    texto:
      'Excelente servicio, mi vehículo quedó listo en poco tiempo y el dueño es muy profesional.',
    sello: 'Atendido por su dueño',
  },
  {
    nombre: 'Ricardo González',
    texto: 'Se nota la honestidad y la transparencia. Amplia variedad de repuestos y accesorios.',
    sello: null,
  },
]

const SERVICIOS = [
  { t: 'Mantención general', d: 'Aceite, filtros y revisión de todos los puntos de desgaste.' },
  { t: 'Motor', d: 'Diagnóstico y reparación de motor, multimarca.' },
  { t: 'Frenos', d: 'Pastillas, discos y sistema completo.' },
  { t: 'Diagnóstico por scanner', d: 'Lectura de fallas electrónicas en el taller.' },
  { t: 'Suspensión y dirección', d: 'Tren delantero, amortiguadores y alineación de componentes.' },
  { t: 'Repuestos y accesorios', d: 'Stock propio y variedad para encargar lo que falte.' },
]

// FAB de pin: el taller no publica teléfono, el camino es llegar.
function PinFab() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Cómo llegar al taller en Google Maps"
      className="fixed bottom-4 right-4 z-50 w-[48px] h-[48px] rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-105 active:scale-95"
      style={{ backgroundColor: C.yellow }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[24px] h-[24px]"
        fill="none"
        stroke={C.yellowInk}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </a>
  )
}

export default function FerrasilDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.bg, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className="font-bold uppercase tracking-wide">
            Ferrasil<span style={{ color: C.yellow }}>_</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={MAPS_URL}
        ctaLabel="Cómo llegar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: C.bg,
          ink: C.ink,
          line: C.line,
          btnBg: C.yellow,
          btnInk: C.yellowInk,
        }}
      />

      {/* HERO: motor sobre carbón */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={`${IMG}/motor.webp`}
            alt=""
            fill
            className="object-cover opacity-25"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(180deg, ${C.bg}66 0%, ${C.bg}E6 75%, ${C.bg} 100%)`,
            }}
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-44 pb-14 md:pb-20">
          <Reveal>
            <div className="flex items-end gap-6 md:gap-10 flex-wrap">
              <p
                className={`${display.className} text-[96px] md:text-[170px] leading-[0.8] font-extrabold`}
                style={{ color: C.yellow }}
              >
                4,8
              </p>
              <div className="pb-2 md:pb-6">
                <Stars value={BIZ.rating} color={C.yellow} className="w-5 h-5 md:w-7 md:h-7" />
                <p className={`${mono.className} mt-2 text-[11px] md:text-[13px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <h1
              className={`${display.className} mt-6 text-[46px] leading-[0.92] md:text-[96px] font-extrabold uppercase`}
            >
              El taller de
              <br />
              <span style={{ color: C.yellow }}>confianza</span>
              <br />
              de Concepción
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
              Reparación multimarca en Patricio Lynch, atendida por su propio
              dueño. La gente lleva el auto acá por una razón: porque se lo
              devuelven bien.
            </p>
          </Reveal>
          <Reveal delay={270}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide active:scale-95 transition-transform"
                style={{ backgroundColor: C.yellow, color: C.yellowInk }}
              >
                Cómo llegar
              </a>
              <a
                href="#resenas"
                className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide border active:scale-95 transition-transform"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Ver reseñas
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MURO DE RESEÑAS: la pieza central */}
      <section id="resenas" className="border-y" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-[36px] md:text-[58px] font-extrabold uppercase leading-[0.95] mb-10 md:mb-14`}>
              Lo dicen los
              <br />
              que <span style={{ color: C.yellow }}>vuelven</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={(i % 2) * 100}>
                <figure
                  className="h-full p-7 md:p-9 border-l-4"
                  style={{ borderColor: C.yellow, backgroundColor: C.bg }}
                >
                  <blockquote
                    className={`${display.className} text-[24px] md:text-[30px] font-semibold leading-[1.15]`}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 flex-wrap">
                    <span className={`${mono.className} text-[12px] font-semibold tracking-wider uppercase`} style={{ color: C.yellow }}>
                      {r.nombre}
                    </span>
                    <span className="flex items-center gap-3">
                      {r.sello && (
                        <span
                          className={`${mono.className} text-[10px] tracking-[0.12em] uppercase px-2 py-1`}
                          style={{ backgroundColor: C.steel, color: C.muted }}
                        >
                          {r.sello}
                        </span>
                      )}
                      <Stars value={5} color={C.yellow} className="w-3.5 h-3.5" />
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS: mesón de trabajo */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <Reveal>
            <h2 className={`${display.className} text-[36px] md:text-[58px] font-extrabold uppercase leading-[0.95]`}>
              Lo que se hace
              <br />
              en el <span style={{ color: C.yellow }}>mesón</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-[11px] md:text-[12px] tracking-[0.14em] uppercase pb-1`} style={{ color: C.muted }}>
              Multimarca · todas las marcas, un taller
            </p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 border-t border-l" style={{ borderColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.t} delay={(i % 3) * 80}>
              <div className="h-full p-6 md:p-7 border-r border-b min-h-[130px]" style={{ borderColor: C.line }}>
                <h3
                  className={`${display.className} text-xl md:text-2xl font-bold uppercase tracking-wide`}
                >
                  {s.t}
                </h3>
                <p className="mt-2 text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* EL TALLER: franja de fotos */}
      <section id="taller" className="py-4" style={{ backgroundColor: C.steel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-[36px] md:text-[58px] font-extrabold uppercase leading-[0.95] mb-10`}>
              Adentro del <span style={{ color: C.yellow }}>taller</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <Reveal className="col-span-2 md:col-span-1 md:row-span-2">
              <div className="h-full min-h-[260px] md:min-h-0 relative overflow-hidden">
                <Image
                  src={`${IMG}/taller.webp`}
                  alt="Interior del taller Ferrasil con vehículos en atención"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/inyector.webp`}
                  alt="Inyector electrónico en revisión"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={170}>
              <div className="relative overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/diagnostico.webp`}
                  alt="Scanner de diagnóstico conectado a un vehículo"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={220} className="col-span-2">
              <div className="relative overflow-hidden aspect-[21/9]">
                <Image
                  src={`${IMG}/motor.webp`}
                  alt="Motor desmontado en reparación en el taller"
                  fill
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={260}>
            <p className={`${mono.className} mt-6 text-[11px] md:text-[12px] tracking-[0.14em] uppercase text-center`} style={{ color: C.muted }}>
              Fotos reales del taller, de su ficha pública
            </p>
          </Reveal>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} text-[36px] md:text-[58px] font-extrabold uppercase leading-[0.95]`}>
                Patricio Lynch,
                <br />
                <span style={{ color: C.yellow }}>la cuadra</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <dl className={`${mono.className} mt-8 space-y-4 text-[12px] md:text-[13px] tracking-wide`}>
                <div className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                  <dt className="shrink-0 uppercase font-semibold" style={{ color: C.yellow }}>Dirección</dt>
                  <dd>{BIZ.addressAlt}, {BIZ.city}</dd>
                </div>
                <div className="flex gap-4 border-b pb-4" style={{ borderColor: C.line }}>
                  <dt className="shrink-0 uppercase font-semibold" style={{ color: C.yellow }}>Horario</dt>
                  <dd>{BIZ.hours}</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="shrink-0 uppercase font-semibold" style={{ color: C.yellow }}>Contacto</dt>
                  <dd style={{ color: C.muted }}>
                    Sin teléfono publicado: se atiende en el taller.
                  </dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={190}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 h-[48px] px-6 text-[15px] font-bold uppercase tracking-wide active:scale-95 transition-transform"
                style={{ backgroundColor: C.yellow, color: C.yellowInk }}
              >
                Abrir en Google Maps
              </a>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="border h-[300px] md:h-[440px]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className={`${display.className} text-lg font-bold uppercase tracking-wide`}>
              Ferrasil<span style={{ color: C.yellow }}>_</span>
            </p>
            <p className={`${mono.className} mt-1 text-[10px] tracking-[0.14em] uppercase`} style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city} · {String(BIZ.rating).replace('.', ',')}★ en Google
            </p>
          </div>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center h-[44px] px-5 text-sm font-bold uppercase tracking-wide"
            style={{ backgroundColor: C.yellow, color: C.yellowInk }}
          >
            Cómo llegar
          </a>
        </div>
      </footer>

      <PinFab />
    </div>
  )
}
