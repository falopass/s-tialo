import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// Paleta tomada del logo real de La Ruta: amarillo de señal sobre negro.
const C = {
  asphalt: '#171512',
  asphalt2: '#211E19',
  route: '#FFC800',
  routeSoft: '#FFE08A',
  paper: '#F4F0E6',
  card: '#FCFAF3',
  ink: '#1C1A15',
  muted: '#6B6555',
  line: 'rgba(28,26,21,0.16)',
  lineLight: 'rgba(255,255,255,0.16)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFC800]'

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-la-ruta',
  title: 'Ferretería La Ruta — Herramientas y materiales en la K-60, Pencahue',
  description:
    'Ferretería La Ruta en Villa Santa Inés, ruta K-60, Pencahue. Herramientas, construcción, campo y jardín. 4,8 estrellas en Google. Consulta stock por WhatsApp.',
  image: `${IMG}/interior-amplio.webp`,
})

const NAV_LINKS = [
  { label: 'La ruta', href: '#ruta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El local', href: '#local' },
]

// Paraderos de la ruta: cada familia con su foto real del local.
const PARADEROS = [
  {
    km: 'KM.01',
    name: 'Herramientas manuales y eléctricas',
    desc: 'Martillos, taladros, esmeriles, medición y sets completos: el pasillo de herramientas es el más surtido de la zona.',
    chips: ['Herramientas de mano', 'Eléctricas', 'Consumibles'],
    img: 'pasillo.webp',
    alt: 'Pasillo interior de la ferretería con repisas de herramientas eléctricas',
  },
  {
    km: 'KM.02',
    name: 'Construcción y obra',
    desc: 'Cemento, fierro, mallas y materiales de obra en el patio, listos para retirar o coordinar despacho.',
    chips: ['Materiales de obra', 'Despacho coordinado'],
    img: 'patio-materiales.webp',
    alt: 'Patio de la ferretería con pallets de sacos de materiales de construcción',
  },
  {
    km: 'KM.03',
    name: 'Pinturas y terminaciones',
    desc: 'Estante de pinturas, solventes y accesorios para dejar la pega terminada, no a medio hacer.',
    chips: ['Pinturas', 'Brochas y rodillos'],
    img: 'estanteria-pinturas.webp',
    alt: 'Estante de la ferretería con tarros de pintura y productos de ferretería',
  },
  {
    km: 'KM.04',
    name: 'Campo, jardín y despacho',
    desc: 'Para parcela y jardín: mangueras, herramientas de poda, alambres y lo que falte se encarga.',
    chips: ['Jardín y campo', 'Encargos sin costo'],
    img: 'patio-camiones.webp',
    alt: 'Patio exterior de la ferretería con camiones de despacho',
  },
] as const

/** Línea central de ruta: guiones amarillos sobre asfalto. */
function Centerline({ vertical = false }: { vertical?: boolean }) {
  if (vertical)
    return (
      <span
        aria-hidden="true"
        className="hidden md:block absolute left-0 top-0 bottom-0 w-[4px]"
        style={{
          backgroundImage: `repeating-linear-gradient(180deg, ${C.route} 0 26px, transparent 26px 46px)`,
        }}
      />
    )
  return (
    <div
      aria-hidden="true"
      className="h-[4px] w-full"
      style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.route} 0 30px, transparent 30px 52px)` }}
    />
  )
}

/** Letrero tipo señal de tránsito: placa amarilla con borde negro. */
function RouteSign({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${display.className} inline-block text-[13px] md:text-sm uppercase tracking-[0.14em] px-4 py-2 border-[3px]`}
      style={{
        backgroundColor: C.route,
        color: C.asphalt,
        borderColor: dark ? 'rgba(255,255,255,0.85)' : C.asphalt,
        boxShadow: dark ? '0 3px 0 rgba(0,0,0,0.4)' : '4px 4px 0 ' + C.asphalt,
      }}
    >
      {children}
    </span>
  )
}

function WaBtn({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-block uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 transition-all hover:-translate-y-0.5 active:scale-95 tap-44 ${FOCUS}`}
      style={
        dark
          ? { backgroundColor: C.paper, color: C.ink, boxShadow: `4px 4px 0 ${C.route}` }
          : { backgroundColor: C.route, color: C.asphalt, boxShadow: '4px 4px 0 rgba(0,0,0,0.85)' }
      }
    >
      {label}
    </a>
  )
}

function GhostBtn({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className={`${display.className} inline-block uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors tap-44 ${FOCUS}`}
      style={
        dark
          ? { borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }
          : { borderColor: C.ink, color: C.ink }
      }
    >
      {label}
    </a>
  )
}

export default function FerreteriaLaRutaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.asphalt, color: '#fff' }}>
      <style>{`
        html { scroll-behavior: auto }
        @keyframes ferre-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @media (prefers-reduced-motion: reduce) { .ferre-marquee { animation: none !important } }
      `}</style>

      {/* nav con logo real */}
      <div className="h-0" style={{ backgroundColor: C.asphalt }}>
        <BlitzNav
          name={
            <span className="flex items-center gap-2.5">
              <Image src={`${IMG}/logo.webp`} alt="Logo de Ferretería La Ruta" width={34} height={28} className="w-[34px] h-auto" />
              <span className={`${display.className} uppercase tracking-[0.06em]`}>{BIZ.short}</span>
            </span>
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass=""
          theme={{ over: 'dark', bar: 'rgba(23,21,18,0.96)', ink: '#fff', line: C.lineLight, btnBg: C.route, btnInk: C.asphalt }}
        />
      </div>

      {/* ── Hero: foto real del local + señal de ruta ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/interior-amplio.webp`}
          alt="Interior de Ferretería La Ruta: pasillos con repisas llenas de herramientas y productos"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(23,21,18,0.72) 0%, rgba(23,21,18,0.25) 45%, rgba(23,21,18,0.94) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-12 md:pb-16">
          <Reveal className="pr-16">
            <div className="mb-5"><RouteSign dark>Ruta K-60 · Villa Santa Inés</RouteSign></div>
            <h1 className={`${display.className} uppercase leading-[0.95] text-[clamp(3rem,11vw,6.4rem)]`}>
              Ferretería
              <span className="block" style={{ color: C.route }}>La Ruta</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mt-5 mb-4" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Herramientas, materiales y consejo de mostrador sobre la K-60, en {BIZ.city}.
              Consulta stock y precio por WhatsApp y retira pasando.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <Stars value={4.8} color={C.route} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
                style={{ textDecorationColor: C.route }}
              >
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
            <div className="flex flex-wrap gap-3">
              <WaBtn href={WA_LINK} label="Consultar por WhatsApp" />
              <GhostBtn href="#ruta" label="Ver qué hay" dark />
            </div>
          </Reveal>
        </div>
        {/* faja de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(23,21,18,0.72)', backdropFilter: 'blur(6px)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(255,255,255,0.72)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span>Lun–Vie 8–19 · Sáb 8:30–18 · Dom 9–17</span>
            <span className="hidden md:inline" style={{ color: C.route }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Marquee de familias (cinta de ruta) ── */}
      <div className="overflow-hidden border-y-4 py-3" style={{ backgroundColor: C.route, borderColor: C.asphalt }}>
        <div className="ferre-marquee flex whitespace-nowrap" style={{ animation: 'ferre-marquee 26s linear infinite' }} aria-hidden="true">
          {[0, 1].map((dup) => (
            <span key={dup} className={`${display.className} uppercase text-lg md:text-xl tracking-[0.1em] flex items-center`} style={{ color: C.asphalt }}>
              {['Herramientas', 'Electricidad', 'Construcción', 'Pinturas', 'Jardín y campo', 'Fijaciones', 'Despachos'].map((t) => (
                <span key={t} className="flex items-center">
                  <span className="px-5">{t}</span>
                  <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill={C.asphalt} aria-hidden="true">
                    <rect x="9" y="9" width="6" height="6" transform="rotate(45 12 12)" />
                  </svg>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── La ruta: paraderos con fotos reales del local ── */}
      <section id="ruta" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-12 md:mb-16">
              <div>
                <RouteSign>Lo que hay en el local</RouteSign>
                <h2 className={`${display.className} uppercase leading-[0.98] text-4xl md:text-6xl mt-5`} style={{ color: C.ink }}>
                  Cuatro paraderos,
                  <br />
                  <span style={{ color: C.muted }}>un solo local</span>
                </h2>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Fotos reales de La Ruta. Las familias son de muestra: el
                inventario completo se confirma preguntando por WhatsApp.
              </p>
            </div>
          </Reveal>

          <ol className="relative md:pl-12 space-y-10 md:space-y-14">
            <Centerline vertical />
            {PARADEROS.map((p, i) => (
              <Reveal key={p.km} delay={i * 60}>
                <li className={`grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-6 md:gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative border-[3px] shadow-[6px_6px_0_rgba(23,21,18,0.9)]" style={{ borderColor: C.ink, backgroundColor: C.card }}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`${IMG}/${p.img}`}
                        alt={p.alt}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 360px, (min-width: 768px) 300px, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <span
                      className={`${mono.className} absolute -top-[14px] ${i % 2 === 1 ? 'md:-right-[3px] right-3' : '-left-[3px] md:-left-[52px]'} md:rotate-0 text-[11px] font-bold px-3 py-1.5 border-2`}
                      style={{ backgroundColor: C.asphalt, color: C.route, borderColor: C.route }}
                      aria-hidden="true"
                    >
                      {p.km}
                    </span>
                  </div>
                  <div>
                    <h3 className={`${display.className} uppercase text-2xl md:text-4xl leading-[1.02] mb-3`} style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed mb-5 max-w-xl" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {p.chips.map((chip) => (
                        <li
                          key={chip}
                          className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.1em] px-3 py-1.5 border-2 font-bold`}
                          style={{ borderColor: C.ink, color: C.ink, backgroundColor: C.routeSoft }}
                        >
                          {chip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-[3px] p-6 md:p-8" style={{ borderColor: C.ink, backgroundColor: C.card }}>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                ¿No ves lo que buscas? Pregunta directo: si no está en el
                local, <strong style={{ color: C.ink }}>lo encargan sin costo</strong>.
              </p>
              <WaBtn href={WA_LINK_STOCK} label="Consultar stock y precio" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales de Google ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.asphalt }}>
        <Centerline />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <div>
                <RouteSign dark>Palabra de clientes</RouteSign>
                <h2 className={`${display.className} uppercase leading-[0.98] text-4xl md:text-6xl mt-5`}>
                  {BIZ.rating} en Google,
                  <br />
                  <span style={{ color: C.route }}>{BIZ.reviews} reseñas</span>
                </h2>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.routeSoft, textDecorationColor: C.route }}
              >
                Ver la ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <figure className="h-full border-2 p-6 md:p-7 flex flex-col" style={{ borderColor: C.lineLight, backgroundColor: C.asphalt2 }}>
                  <Stars value={5} color={C.route} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 flex-1" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption>
                    <p className={`${display.className} uppercase text-sm tracking-[0.06em]`} style={{ color: C.route }}>{r.author}</p>
                    <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(255,255,255,0.55)' }}>{r.meta}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El local: fachada real + horario + mapa ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <RouteSign>Dónde estamos</RouteSign>
            <h2 className={`${display.className} uppercase leading-[0.98] text-4xl md:text-6xl mt-5 mb-12`} style={{ color: C.ink }}>
              Sobre la K-60,
              <br />
              <span style={{ color: C.muted }}>en Villa Santa Inés</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <div className="border-[3px] shadow-[6px_6px_0_rgba(23,21,18,0.9)]" style={{ borderColor: C.ink }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Ferretería La Ruta a un costado de la ruta K-60, con estacionamiento"
                    fill
                    loading="lazy"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className={`${mono.className} absolute bottom-0 left-0 text-[11px] font-bold px-3 py-1.5`} style={{ backgroundColor: C.route, color: C.asphalt }}>
                    VILLA SANTA INÉS · K-60
                  </span>
                </div>
              </div>
              {/* horario real */}
              <dl className="mt-6 border-[3px]" style={{ borderColor: C.ink, backgroundColor: C.card }}>
                {HORARIO.map((h, i) => (
                  <div key={h.days} className={`flex items-baseline justify-between gap-4 px-5 py-3 ${i > 0 ? 'border-t' : ''}`} style={{ borderColor: C.line }}>
                    <dt className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.12em] font-bold`} style={{ color: C.muted }}>{h.days}</dt>
                    <dd className={`${display.className} text-base md:text-lg`} style={{ color: C.ink }}>{h.time}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={140}>
              <div className="border-[3px] overflow-hidden min-h-[320px] h-full shadow-[6px_6px_0_rgba(23,21,18,0.9)]" style={{ borderColor: C.ink }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <address className="not-italic text-sm md:text-base leading-relaxed mt-6" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}, {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} underline underline-offset-4 decoration-2 tap-44`} style={{ color: C.ink, textDecorationColor: C.route }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="flex flex-wrap gap-3 mt-6">
                <WaBtn href={WA_LINK} label="Escribir por WhatsApp" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block uppercase tracking-[0.08em] text-sm md:text-base px-7 py-3.5 border-2 transition-colors tap-44 ${FOCUS}`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.asphalt }}>
        <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: `url(${IMG}/mostrador.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5`} style={{ color: C.routeSoft }}>
              Abierto hasta las 19:00 entre semana
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2.4rem,7.5vw,4.6rem)] leading-[0.98] mb-8`}>
              ¿Te falta algo para la pega?
              <br />
              <span style={{ color: C.route }}>Pregunta al tiro</span>
            </h2>
            <WaBtn href={WA_LINK} label="Consultar por WhatsApp" />
          </Reveal>
        </div>
        <Centerline />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-4">
          <Image src={`${IMG}/logo.webp`} alt="Logo de Ferretería La Ruta" width={40} height={32} className="w-[40px] h-auto" />
          <div>
            <p className={`${display.className} uppercase text-base`}>{BIZ.name}</p>
            <address className={`${mono.className} not-italic text-[11px]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
              {BIZ.address} · {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.route }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos, reseñas y datos tomados de su ficha pública de Google Maps; las familias de productos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.route }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
