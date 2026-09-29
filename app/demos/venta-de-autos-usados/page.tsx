import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la ficha de venta» — la hoja de especificaciones
 * pegada al parabrisas y el cartel SE VENDE: asfalto oscuro, acero y
 * ámbar de señalética. Barlow Condensed hace de letrero de lote;
 * Geist Mono lleva la ficha técnica (año · km · consulta).
 */
const C = {
  asphalt: '#14161A',
  asphalt2: '#1C1F25',
  steel: '#EDEEE7',
  steel2: '#DDE0D4',
  amber: '#F2B705',
  ink: '#191B16',
  muted: '#9AA09B',
  mutedLight: '#5F6459',
  line: 'rgba(237,238,231,0.16)',
  lineDark: 'rgba(25,27,22,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'venta-de-autos-usados',
  title: 'Venta de Autos Usados — el lote de la Tres Sur, Talca',
  description:
    'Venta de Autos Usados en Tres Sur 1512, Talca: sedanes, pickups, furgones y SUV. Pregunta el stock de hoy por WhatsApp.',
  image: '/demos/venta-de-autos-usados/sector.webp',
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Cómo se compra', href: '#como' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// Bosquejos: no hay fotos del lote, así que estos van marcados.
const VITRINA = [
  { src: 'bosquejo-sedan', tipo: 'Sedán familiar', det: 'El clásico para la ciudad y la carretera' },
  { src: 'bosquejo-pickup', tipo: 'Pickup de trabajo', det: 'Caja para el campo y las cargas' },
  { src: 'bosquejo-furgon', tipo: 'Furgón carga', det: 'Para el reparto y el emprendimiento' },
  { src: 'bosquejo-suv', tipo: 'SUV', det: 'Espacio y altura para la familia' },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-7 py-2.5 font-semibold text-[15px] tracking-wide transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: C.amber, color: C.asphalt, boxShadow: dark ? '0 0 0 1px rgba(0,0,0,0.15)' : undefined }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

export default function VentaDeAutosUsadosPage() {
  return (
    <div className={`${body.className} min-h-[100dvh] antialiased`} style={{ backgroundColor: C.asphalt, color: C.steel }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(20,22,26,0.95)', ink: C.steel, line: C.line, btnBg: C.amber, btnInk: C.asphalt }}
      />

      {/* ── Hero: el letrero del lote ────────────────────── */}
      <section id="inicio" className="pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-center justify-between gap-4 mb-6">
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.amber }}>
                {BIZ.address} · {BIZ.city}
              </p>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                Automoción
              </p>
            </div>
            <h1 className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(3rem,12vw,7rem)]`}>
              Autos usados
              <br />
              en la Tres Sur
            </h1>
          </Reveal>
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-6 md:gap-10 items-end mt-8">
            <Reveal delay={80}>
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/sector.webp`}
                    alt="La Tres Sur a la altura del local, con patios de vehículos cercados"
                    fill
                    priority
                    sizes="(min-width:768px) 60vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[11px]`} style={{ color: C.muted }}>
                  El sector del local, foto: Google Street View
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-base md:text-lg leading-relaxed max-w-sm" style={{ color: C.muted }}>
                El lote de usados en plena zona de vehículos de Talca. Pregunta lo que hay hoy: el stock se mueve rápido.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row md:flex-col lg:flex-row gap-3">
                <WaButton>¿Qué hay en el lote?</WaButton>
                <p className={`${mono.className} self-center text-sm`} style={{ color: C.steel }}>
                  ★ 5.0 · su primera reseña
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La vitrina: fichas de venta con bosquejos ────── */}
      <section id="vitrina" className="scroll-mt-20 mt-16 md:mt-24 py-14 md:py-20" style={{ backgroundColor: C.steel, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-8 border-b" style={{ borderColor: C.lineDark }}>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.92]`}>
              Lo que suele haber
              <br />
              en la vitrina
            </h2>
            <p className={`${mono.className} text-xs max-w-xs md:text-right leading-relaxed`} style={{ color: C.mutedLight }}>
              Referencias del tipo de vehículo. El stock real del día se confirma por WhatsApp.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 pt-10">
            {VITRINA.map((v, i) => (
              <li key={v.src}>
                <Reveal delay={i * 70} className="h-full">
                  <article className="h-full flex flex-col">
                    <figure className="relative">
                      <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.steel2 }}>
                        <Image
                          src={`${IMG}/${v.src}.webp`}
                          alt={`Ilustración de referencia de un ${v.tipo.toLowerCase()} usado en un lote`}
                          fill
                          sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <span
                        className={`${mono.className} absolute top-2 left-2 text-[10px] font-bold uppercase tracking-[0.18em] px-2 py-1`}
                        style={{ backgroundColor: C.amber, color: C.asphalt }}
                      >
                        Bosquejo
                      </span>
                    </figure>
                    <h3 className={`${display.className} mt-4 font-extrabold uppercase text-2xl leading-none`}>{v.tipo}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.mutedLight }}>
                      {v.det}
                    </p>
                    <dl className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.12em] border-t pt-3 space-y-1`} style={{ borderColor: C.lineDark, color: C.mutedLight }}>
                      <div className="flex justify-between gap-3">
                        <dt>Año · km</dt>
                        <dd className="font-bold" style={{ color: C.ink }}>a consultar</dd>
                      </div>
                      <div className="flex justify-between gap-3">
                        <dt>Precio</dt>
                        <dd className="font-bold" style={{ color: C.ink }}>al WhatsApp</dd>
                      </div>
                    </dl>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] underline underline-offset-4 tap-44`}
                      style={{ color: C.ink }}
                    >
                      Consultar por este tipo <span aria-hidden="true">→</span>
                    </a>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Cómo se compra: la hoja de ruta ──────────────── */}
      <section id="como" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.92] mb-10`}>
            Comprar así de simple
          </h2>
          <ol className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: C.line }}>
            {[
              ['Pregunta el stock', 'Escribes por WhatsApp y te contamos qué entró al lote, con año, kilometraje y precio.'],
              ['Vas a verlo', 'El local queda en Tres Sur 1512, en la zona de los patios de vehículos: fácil de encontrar.'],
              ['Te lo llevas', 'Los papeles y la entrega se conversan ahí mismo, persona a persona.'],
            ].map(([t, d], i) => (
              <li key={t} style={{ backgroundColor: C.asphalt }} className="p-6 md:p-8">
                <Reveal delay={i * 80}>
                  <p className={`${mono.className} text-sm font-bold`} style={{ color: C.amber }}>
                    0{i + 1}
                  </p>
                  <h3 className={`${display.className} mt-3 font-extrabold uppercase text-2xl md:text-3xl leading-none`}>{t}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {d}
                  </p>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={120}>
            <blockquote className="mt-12 border-l-2 pl-6 py-2" style={{ borderColor: C.amber }}>
              <p className={`${display.className} text-2xl md:text-3xl font-semibold leading-snug`}>
                «¿Si preguntan cuál es la diferencia entre uno nuevo o uno usado?…»
              </p>
              <footer className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.15em]`} style={{ color: C.muted }}>
                ★★★★★ Mauricio Lizana · la primera reseña de Google, 5.0
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ───────────────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.92] mb-6`}>
              Tres Sur 1512,
              <br />
              Talca
            </h2>
            <p className="text-base leading-relaxed mb-3 max-w-md" style={{ color: C.muted }}>
              En la cuadra de los patios de vehículos de la Tres Sur. Pasa a verlo directo o agenda tu visita antes.
            </p>
            <p className={`${mono.className} text-sm mb-7`} style={{ color: C.steel }}>
              {BIZ.phoneDisplay} · también WhatsApp
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <WaButton dark>Agendar visita</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 font-semibold text-[15px] border transition-colors hover:bg-[#EDEEE7] hover:text-[#14161A] tap-44"
                style={{ borderColor: C.steel, color: C.steel }}
              >
                Abrir ruta en Maps
              </a>
            </div>
            <figure className="mt-8">
              <div className="relative aspect-[16/9] overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/calle.webp`}
                  alt="Vereda y malla roja de la Tres Sur frente al sector del local"
                  fill
                  sizes="(min-width:768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px]`} style={{ color: C.muted }}>
                La calle frente al local, foto: Google Street View
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border-2 min-h-[300px] h-full" style={{ borderColor: C.amber, backgroundColor: C.asphalt }}>
              <LazyMap
                title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#0C0E10', color: C.steel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} font-extrabold uppercase text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(237,238,231,0.55)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(237,238,231,0.55)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.steel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.steel }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
