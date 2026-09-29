import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  noche: '#15181B',
  nocheSoft: '#1E2227',
  acero: '#E9E6DC',
  aceroSoft: '#DFDACB',
  tinta: '#20262B',
  muted: '#61696F',
  line: 'rgba(32,38,43,0.16)',
  lineDark: 'rgba(233,230,220,0.16)',
  amarillo: '#E8A90C',
  amarilloInk: '#8A5F00',
  rojo: '#9E3B2C',
}

export const metadata: Metadata = demoMetadata({
  slug: 'torno-metal',
  title: 'TORNO METAL — Metalmecánica y niplería en 5 Sur, Talca',
  description:
    'Maestranza metalmecánica en Calle 5 Sur 1770, Talca. Niplería, cañerías y flexibles hidráulicos para camiones, buses y maquinaria pesada. 4.3★ en Google.',
  image: `${IMG}/fachada-5sur.webp`,
})

const NAV_LINKS = [
  { label: 'El taller', href: '#taller' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#horario' },
]

const CATALOGO = [
  {
    code: 'NIP-01',
    nombre: 'Niplería',
    detalle: 'Nipples, uniones, reducciones y adaptadores trabajados a pedido y a medida.',
    uso: ['Camiones', 'Buses'],
  },
  {
    code: 'FXB-02',
    nombre: 'Flexibles hidráulicos',
    detalle: 'Armado de flexibles y mangueras de presión para sistemas hidráulicos.',
    uso: ['Maquinaria pesada', 'Camiones'],
  },
  {
    code: 'CAÑ-03',
    nombre: 'Cañerías',
    detalle: 'Cañerías en cobre y acero: fabricación, tendido y reemplazo.',
    uso: ['Camiones', 'Buses', 'Industria'],
  },
  {
    code: 'EST-04',
    nombre: 'Fabricación a pedido',
    detalle: 'Estructuras metálicas y piezas trabajadas en torno para el encargo que llegue.',
    uso: ['Obras', 'Talleres'],
  },
]

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.acero, color: C.tinta }}>
      <style>{'html { scroll-behavior: auto }'}</style>
      <BlitzNav
        name={<span className={`${display.className} font-bold tracking-wide`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(21,24,27,0.94)', ink: C.acero, line: C.lineDark, btnBg: C.amarillo, btnInk: C.noche }}
      />

      {/* ── Hero: placa de taller sobre el galpón ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche, color: C.acero }}>
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 10px, ${C.acero} 11px, transparent 12px)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-12 md:pb-16">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.28em] mb-6`} style={{ color: 'rgba(233,230,220,0.6)' }}>
              Metalmecánica · Niplería · Flexibles hidráulicos
            </p>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <Reveal delay={70}>
                <h1 className={`${display.className} font-bold text-[clamp(3.4rem,13vw,8.2rem)] leading-[0.92] tracking-tight`}>
                  TORNO
                  <br />
                  <span style={{ color: C.amarillo }}>METAL</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-sm md:text-lg max-w-md leading-relaxed" style={{ color: 'rgba(233,230,220,0.78)' }}>
                  El taller metalmecánico del galpón de 5 Sur: niplería, cañerías
                  y flexibles hidráulicos para camiones, buses y maquinaria pesada.
                  {` ${BIZ.years} años`} trabajando en Talca.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} inline-flex items-center gap-2.5 font-semibold text-base md:text-lg tracking-wide px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A90C] tap-44`}
                    style={{ backgroundColor: C.amarillo, color: C.noche }}
                  >
                    <PhoneIcon />
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(233,230,220,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A90C] tap-44"
                    style={{ borderColor: 'rgba(233,230,220,0.4)', color: C.acero }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={240} className="md:col-span-5">
              <figure className="relative border-2" style={{ borderColor: 'rgba(233,230,220,0.35)' }}>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={`${IMG}/fachada-5sur.webp`}
                    alt={`Galpón industrial amarillo de Calle 5 Sur donde trabaja ${BIZ.name}, Talca`}
                    fill
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} flex items-center justify-between gap-2 px-3 py-2 text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: C.nocheSoft, color: 'rgba(233,230,220,0.65)' }}>
                  <span>El galpón de 5 Sur</span>
                  <span style={{ color: C.amarillo }}>foto real</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className={`${mono.className} mt-10 md:mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 pt-6 border-t text-[11px] md:text-sm uppercase tracking-[0.14em]`} style={{ borderColor: C.lineDark, color: 'rgba(233,230,220,0.7)' }}>
              <span className="flex items-center gap-2">
                <Stars value={BIZ.rating} color={C.amarillo} className="w-4 h-4" />
                <strong style={{ color: C.acero }}>{BIZ.rating.toLocaleString('es-CL')}</strong> en Google
              </span>
              <span>{BIZ.reviews} opiniones</span>
              <span>{BIZ.years} años en el oficio</span>
              <span className="ml-auto hidden sm:inline">{BIZ.address} · {BIZ.city}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Catálogo del taller: ficha técnica ── */}
      <section id="taller" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-12">
            <h2 className={`${display.className} font-bold text-[clamp(2.1rem,6vw,3.6rem)] leading-[1.02] tracking-tight`}>
              Lo que sale
              <br />
              del taller
            </h2>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              La línea de trabajo declarada en su propia ficha: niplería, cañerías
              y flexibles hidráulicos, más fabricación de estructuras metálicas.
            </p>
          </div>
        </Reveal>
        <ul>
          {CATALOGO.map((p, i) => (
            <Reveal key={p.code} delay={i * 80}>
              <li
                className="grid grid-cols-[auto_1fr] md:grid-cols-[110px_1fr_auto] gap-x-4 md:gap-x-8 gap-y-1.5 py-6 border-t items-start"
                style={{ borderColor: C.line }}
              >
                <p className={`${mono.className} text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] pt-1`} style={{ color: C.amarilloInk }}>
                  {p.code}
                </p>
                <div>
                  <h3 className={`${display.className} font-bold text-[clamp(1.5rem,4vw,2.2rem)] leading-none tracking-tight`}>
                    {p.nombre}
                  </h3>
                  <p className="mt-1.5 text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
                    {p.detalle}
                  </p>
                </div>
                <ul className="col-start-2 md:col-start-auto flex flex-wrap gap-1.5 md:justify-end md:max-w-[180px]">
                  {p.uso.map((u) => (
                    <li
                      key={u}
                      className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 border`}
                      style={{ borderColor: 'rgba(32,38,43,0.35)', color: C.tinta }}
                    >
                      {u}
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={120}>
          <p className={`${mono.className} mt-4 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
            Productos confirmados en su ficha · el catálogo real se arma con el taller
          </p>
        </Reveal>
      </section>

      {/* ── El taller en fotos ── */}
      <section className="border-y-2" style={{ borderColor: C.tinta, backgroundColor: C.aceroSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-8`} style={{ color: C.muted }}>
              La calle y el trabajo · fotos reales
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-12 gap-3 md:gap-4">
            <Reveal className="col-span-2 md:col-span-4">
              <figure className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/taller-torno.webp`}
                  alt="Interior del taller de TORNO METAL: torno en uso junto al equipo, foto publicada en su ficha de Google"
                  fill
                  sizes="(max-width: 768px) 100vw, 34vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  El torno en uso · foto de su ficha
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80} className="md:col-span-4">
              <figure className="relative aspect-square md:aspect-[3/4] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/trabajo-nipleria.webp`}
                  alt="Flexibles y conectores hidráulicos sobre el torno, foto publicada en la ficha de Google del taller"
                  fill
                  sizes="(max-width: 768px) 50vw, 34vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  Del banco · foto de su ficha
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={140} className="md:col-span-4">
              <figure className="relative aspect-square md:aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/taladro.webp`}
                  alt="Taladro de columna del taller en pleno trabajo, foto publicada en su ficha de Google"
                  fill
                  sizes="(max-width: 768px) 50vw, 34vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  El taladro · foto de su ficha
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={60} className="md:col-span-4">
              <figure className="relative aspect-square md:aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/soldador.webp`}
                  alt="Trabajo de soldadura en el taller, con chispas sobre la pieza, foto de su ficha de Google"
                  fill
                  sizes="(max-width: 768px) 50vw, 34vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  Soldando · foto de su ficha
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120} className="md:col-span-4">
              <figure className="relative aspect-square md:aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/fresado.webp`}
                  alt="Fresa cortando metal con viruta, trabajo de fresado del taller, foto de su ficha de Google"
                  fill
                  sizes="(max-width: 768px) 50vw, 34vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  El fresado · foto de su ficha
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={180} className="md:col-span-2">
              <figure className="relative aspect-square md:aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/calle-5sur.webp`}
                  alt="Calle 5 Sur frente al galpón del taller, con camiones y autos del barrio, Talca"
                  fill
                  sizes="(max-width: 768px) 50vw, 17vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  5 Sur · SV
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={220} className="md:col-span-2">
              <figure className="relative aspect-square md:aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                <Image
                  src={`${IMG}/bloque-5sur.webp`}
                  alt="Bloque industrial de Calle 5 Sur con el galpón amarillo del taller, Talca"
                  fill
                  sizes="(max-width: 768px) 50vw, 17vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(21,24,27,0.85)', color: C.acero }}>
                  El bloque · SV
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end gap-8 mb-10 md:mb-14">
            <div>
              <p className={`${display.className} font-bold text-[clamp(3.6rem,10vw,6.4rem)] leading-none`}>
                {BIZ.rating.toLocaleString('es-CL')}
              </p>
              <Stars value={BIZ.rating} color={C.amarilloInk} className="w-5 h-5 mt-3" />
              <p className={`${mono.className} mt-2 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                {BIZ.reviews} opiniones en Google
              </p>
            </div>
            <h2 className={`${display.className} font-bold text-[clamp(1.8rem,4.6vw,3rem)] leading-[1.05] tracking-tight max-w-md`}>
              Lo que dicen
              <br />
              en la ficha
            </h2>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <li className="h-full flex flex-col border-t-4 pt-4 pb-5 px-4" style={{ borderColor: C.amarillo, backgroundColor: '#FFFDF4' }}>
                <Stars value={5} color={C.amarilloInk} className="w-3.5 h-3.5" />
                <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: C.tinta }}>
                  “{r.texto}”
                </p>
                <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {r.nombre} · {r.hace}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Horario + contacto ── */}
      <section id="horario" className="border-t-2" style={{ borderColor: C.tinta, backgroundColor: C.noche, color: C.acero }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-5`} style={{ color: C.amarillo }}>
              Ficha del taller
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(2rem,5vw,3.2rem)] leading-[1.02] tracking-tight mb-8`}>
              Antes de ir,
              <br />
              una llamada
            </h2>
            <dl className={`${mono.className} text-xs md:text-sm`}>
              <div className="grid grid-cols-[130px_1fr] gap-x-4 py-3.5 border-t" style={{ borderColor: C.lineDark }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: 'rgba(233,230,220,0.55)' }}>Dirección</dt>
                <dd>{BIZ.address} · {BIZ.city}</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-x-4 py-3.5 border-t" style={{ borderColor: C.lineDark }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: 'rgba(233,230,220,0.55)' }}>Teléfono</dt>
                <dd>{BIZ.phoneDisplay}</dd>
              </div>
              {HORARIO.map((h) => (
                <div key={h.dias} className="grid grid-cols-[130px_1fr] gap-x-4 py-3.5 border-t" style={{ borderColor: C.lineDark }}>
                  <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: 'rgba(233,230,220,0.55)' }}>{h.dias}</dt>
                  <dd>{h.horas}</dd>
                </div>
              ))}
              <div className="grid grid-cols-[130px_1fr] gap-x-4 py-3.5 border-t border-b" style={{ borderColor: C.lineDark }}>
                <dt className="uppercase tracking-[0.16em] text-[10px] md:text-xs pt-0.5" style={{ color: 'rgba(233,230,220,0.55)' }}>Razón social</dt>
                <dd className="normal-case">{BIZ.legalName}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 font-semibold text-base tracking-wide px-6 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A90C] tap-44`}
                style={{ backgroundColor: C.amarillo, color: C.noche }}
              >
                <PhoneIcon />
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(233,230,220,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A90C] tap-44"
                style={{ borderColor: 'rgba(233,230,220,0.4)', color: C.acero }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[340px] h-full border-2" style={{ borderColor: 'rgba(233,230,220,0.35)', backgroundColor: C.nocheSoft }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0E1012', color: C.acero }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold text-xl md:text-2xl tracking-wide mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(233,230,220,0.6)' }}>
              {BIZ.legalName} · RUT {BIZ.rut} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(233,230,220,0.6)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(233,230,220,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.acero }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, horario, nota y reseñas
            son datos públicos reales de su ficha de Google; las fotos de la calle
            son Google Street View y la del trabajo viene de la propia ficha.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.acero }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.amarillo} fg={C.noche} />
    </div>
  )
}
