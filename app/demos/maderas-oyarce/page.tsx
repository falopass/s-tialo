import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
  variable: '--font-mono',
})

// Escuadría: crema madera, verde pino de su logo y etiquetas de medida
// en mono. La regla milimetrada es el motivo gráfico del demo.
const C = {
  cream: '#F2EDE0',
  creamDeep: '#E8E0CC',
  ink: '#1B2417',
  pine: '#3E7C3A',
  pineDeep: '#22441F',
  wood: '#8A5A2B',
  muted: '#5C5B4B',
  line: 'rgba(27,36,23,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'maderas-oyarce',
  title: 'Maderas Oyarce — Madera dimensionada y casas prefabricadas en Maule',
  description:
    'Barraca en Camino a Colín, Maule: cielo, piso, tinglado, molduras, vigas, impregnada y casas prefabricadas. Despacho gratis en Talca. Cotiza por WhatsApp.',
  image: `${IMG}/barraca.webp`,
})

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Casas prefabricadas', href: '#prefabricadas' },
  { label: 'Despacho', href: '#despacho' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const CATALOGO = [
  { prod: 'Madera dimensionada', spec: 'bruta o cepillada', nota: 'Cortada a la medida que pida tu obra.' },
  { prod: 'Cielo', spec: 'pino machihembrado', nota: 'Para techumbres que se ven y se sienten de madera.' },
  { prod: 'Piso', spec: 'machihembrado', nota: 'Entrepisos y radieres con tablas parejas.' },
  { prod: 'Tinglado', spec: 'cubierta', nota: 'Cubierta resistente para techos y terrazas.' },
  { prod: 'Molduras', spec: 'terminaciones', nota: 'Guardapolvos, cornisas y tapajuntas prolijos.' },
  { prod: 'Vigas y pilares', spec: 'incluye laminado', nota: 'Piezas estructurales, también pilar laminado.' },
  { prod: 'Madera impregnada', spec: 'humedad y suelo', nota: 'Tratada para exterior, fundaciones y cercos.' },
]

const REVIEWS = [{ name: 'Pablo Rojas Vidal', text: 'Excelente.' }]

function Ruler({ color = C.ink, className = '' }: { color?: string; className?: string }) {
  const ticks = Array.from({ length: 41 }, (_, i) => i)
  return (
    <div aria-hidden="true" className={`flex items-end overflow-hidden ${className}`} style={{ color }}>
      {ticks.map((i) => (
        <span
          key={i}
          className="shrink-0"
          style={{
            width: '2.5%',
            borderLeft: `1px solid ${color}`,
            height: i % 5 === 0 ? 14 : 7,
            opacity: i % 5 === 0 ? 0.75 : 0.35,
          }}
        />
      ))}
    </div>
  )
}

export default function MaderasOyarcePage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-base md:text-lg tracking-tight`}>
            Maderas Oyarce
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar madera"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: 'rgba(242,237,224,0.92)', ink: C.ink, line: C.line, btnBg: C.pineDeep, btnInk: '#F2EDE0' }}
      />

      {/* ── Hero: barraca + regla ── */}
      <section id="inicio" className="pt-[84px] md:pt-[104px] pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <span className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.28em]`} style={{ color: C.muted }}>
                Barraca · {BIZ.address}, {BIZ.city}
              </span>
              <span className="flex items-center gap-2 text-[13px] font-semibold">
                <Stars value={5} color={C.pine} />
                {BIZ.rating} · {BIZ.reviews} opiniones
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} leading-[0.98] tracking-tight uppercase text-[clamp(2.4rem,8.5vw,5.2rem)]`}>
              La madera de tu obra,<br />
              <span style={{ color: C.pine }}>a la medida</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
              En Camino a Colín venden madera dimensionada y elaborada a todo público: desde pocas tablas
              para tu quincho hasta el volumen completo de una casa. Proyectan, construyen e instalan
              casas prefabricadas.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.12em]"
                style={{ backgroundColor: C.pineDeep, color: C.cream, height: 52 }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#catalogo"
                className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.12em] border"
                style={{ borderColor: C.ink, color: C.ink, height: 52 }}
              >
                Ver catálogo
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10">
              <div className="relative border" style={{ borderColor: C.ink }}>
                <div className="relative aspect-[16/10] md:aspect-[21/9]">
                  <Image
                    src={`${IMG}/barraca.webp`}
                    alt="Tablas y vigas de madera estibadas dentro de la barraca de Maderas Oyarce"
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width:768px) 92vw, 92vw"
                  />
                </div>
                <div className="absolute left-3 bottom-3 px-3 py-1.5" style={{ backgroundColor: 'rgba(27,36,23,0.85)' }}>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.cream }}>
                    Foto real · bodega de Maderas Oyarce
                  </span>
                </div>
              </div>
              <Ruler className="mt-0.5" color={C.ink} />
              <div className={`${mono.className} flex justify-between text-[9px] uppercase tracking-[0.2em] mt-1`} style={{ color: C.muted }}>
                <span>0</span>
                <span>todas las medidas</span>
                <span>a pedido</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Catálogo como lista de escuadría ── */}
      <section id="catalogo" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: '#9FCB8E' }}>
              Del cielo al piso
            </p>
            <h2 className={`${display.className} uppercase leading-[1.0] tracking-tight text-[clamp(1.9rem,5.5vw,3.6rem)] mb-4`}>
              Lo que venden, tal cual está en el patio
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed mb-10" style={{ color: 'rgba(242,237,224,0.72)' }}>
              Pequeñas cantidades o alto volumen: en la barraca hay stock y cortan a la medida.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-14 items-start">
            <div>
              {CATALOGO.map((p, i) => (
                <Reveal key={p.prod} delay={i * 60}>
                  <div className="flex items-baseline gap-4 py-4 border-b" style={{ borderColor: 'rgba(242,237,224,0.18)' }}>
                    <span className={`${mono.className} w-10 shrink-0 text-[11px] tracking-[0.15em]`} style={{ color: '#9FCB8E' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1">
                      <h3 className={`${display.className} uppercase text-lg md:text-xl tracking-tight leading-tight`}>{p.prod}</h3>
                      <p className="text-sm mt-1" style={{ color: 'rgba(242,237,224,0.68)' }}>{p.nota}</p>
                    </div>
                    <span className={`${mono.className} hidden sm:inline shrink-0 text-[10px] uppercase tracking-[0.18em] px-2 py-1 border`} style={{ borderColor: 'rgba(159,203,142,0.4)', color: '#9FCB8E' }}>
                      {p.spec}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="grid gap-6">
              <Reveal delay={80}>
                <figure className="border" style={{ borderColor: 'rgba(242,237,224,0.25)' }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/estiba.webp`}
                      alt="Pila de madera dimensionada lista para despacho"
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 34vw, 92vw"
                    />
                  </div>
                  <figcaption className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,237,224,0.72)' }}>
                    Estiba real de su Instagram
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={160}>
                <figure className="border" style={{ borderColor: 'rgba(242,237,224,0.25)' }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/bodega.webp`}
                      alt="Bodega con planchas y materiales de construcción estibados"
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 34vw, 92vw"
                    />
                  </div>
                  <figcaption className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,237,224,0.72)' }}>
                    Materiales en bodega
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Casas prefabricadas ── */}
      <section id="prefabricadas" className="scroll-mt-20" style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <Reveal>
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.pineDeep }}>
                  Más que madera
                </p>
                <h2 className={`${display.className} uppercase leading-[1.0] tracking-tight text-[clamp(1.9rem,5vw,3.2rem)] mb-5`}>
                  Proyectan, construyen e instalan casas prefabricadas
                </h2>
                <p className="text-[15px] leading-relaxed mb-6" style={{ color: C.muted }}>
                  No es solo barraca: con la misma madera que venden arman casas completas.
                  Lo anuncian en su propio sitio — la casa se proyecta contigo y llega lista a instalar.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.12em] border"
                  style={{ borderColor: C.ink, color: C.ink, height: 48 }}
                >
                  Consultar por una casa
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative border" style={{ borderColor: C.ink, backgroundColor: C.cream }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/despacho.webp`}
                    alt="Grúa horquilla cargando un camión con madera en el patio de la barraca"
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 45vw, 92vw"
                  />
                </div>
                <figcaption className={`${mono.className} px-4 py-2.5 text-[10px] uppercase tracking-[0.2em] border-t`} style={{ borderColor: C.line, color: C.muted }}>
                  Carga real en el patio — de su Instagram
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Banda despacho ── */}
      <section id="despacho" className="scroll-mt-20" style={{ backgroundColor: C.pineDeep, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-2`} style={{ color: '#9FCB8E' }}>
                Lo anuncian en su Instagram
              </p>
              <p className={`${display.className} uppercase leading-[1.02] tracking-tight text-[clamp(1.6rem,5vw,3rem)]`}>
                Despacho gratis en Talca
              </p>
              <p className="mt-3 text-[15px] max-w-lg" style={{ color: 'rgba(242,237,224,0.8)' }}>
                Compras en la barraca y te lo llevan. Pregunta por cobertura y mínimos al encargar.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.12em] border"
                style={{ borderColor: 'rgba(242,237,224,0.6)', color: C.cream, height: 52 }}
              >
                Pedir despacho
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones + ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.pineDeep }}>
                  Opinan en Google
                </p>
                <div className="flex items-end gap-3 mb-6">
                  <span className={`${display.className} leading-none text-[clamp(3rem,9vw,4.6rem)]`}>{BIZ.rating}</span>
                  <div className="pb-2">
                    <Stars value={5} color={C.pine} />
                    <p className="text-[12px] mt-1" style={{ color: C.muted }}>
                      {BIZ.reviews} opiniones verificadas
                    </p>
                  </div>
                </div>
                {REVIEWS.map((r) => (
                  <blockquote key={r.name} className="border-l-2 pl-4 mb-8" style={{ borderColor: C.pine }}>
                    <p className="text-[16px] leading-relaxed">“{r.text}”</p>
                    <footer className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                      — {r.name} · Google Maps
                    </footer>
                  </blockquote>
                ))}

                <dl className="space-y-4 text-[15px] border-t pt-6" style={{ borderColor: C.line }}>
                  <div className="flex gap-4">
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: C.muted }}>
                      Local
                    </dt>
                    <dd className="font-semibold">
                      {BIZ.address}, {BIZ.city}
                      <span className="block text-sm font-normal" style={{ color: C.muted }}>
                        A la vuelta del Colegio Santo Tomás, camino a Colín.
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: C.muted }}>
                      Horario
                    </dt>
                    <dd className="font-semibold">
                      Lunes a viernes · 8:00–13:00 y 14:00–18:00
                      <span className="block text-sm font-normal" style={{ color: C.muted }}>
                        Sábado y domingo cerrado.
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: C.muted }}>
                      Contacto
                    </dt>
                    <dd className="font-semibold">
                      {BIZ.phoneDisplay}
                      <span className="block text-sm font-normal" style={{ color: C.muted }}>
                        Cotizas por WhatsApp; también atienden en Instagram.
                      </span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 px-5 text-sm font-bold uppercase tracking-[0.12em] border"
                    style={{ borderColor: C.ink, color: C.ink, height: 48 }}
                  >
                    Google Maps
                  </a>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 px-5 text-sm font-bold uppercase tracking-[0.12em] border"
                    style={{ borderColor: C.ink, color: C.ink, height: 48 }}
                  >
                    Instagram · {BIZ.instagramFollowers} seguidores
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border" style={{ borderColor: C.ink, minHeight: 320 }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.address}, ${BIZ.city}`} className="w-full h-full min-h-[320px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Ruler className="absolute top-0 inset-x-0 rotate-180" color="rgba(242,237,224,0.5)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: '#9FCB8E' }}>
              Dimensionadas y elaboradas
            </p>
            <h2 className={`${display.className} uppercase leading-[1.0] tracking-tight text-[clamp(1.9rem,7vw,4.2rem)]`} style={{ color: C.cream }}>
              La madera parte<br />con una cotización
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center gap-2 px-8 text-sm font-bold uppercase tracking-[0.12em]"
              style={{ backgroundColor: C.pine, color: '#fff', height: 52 }}
            >
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8" style={{ backgroundColor: '#131B0F', borderTop: '1px solid rgba(242,237,224,0.14)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-3">
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(242,237,224,0.55)' }}>
            {BIZ.name} — {BIZ.address}, {BIZ.city}
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(242,237,224,0.55)' }}>
            Demo de muestra · fotos de su ficha de Google e Instagram
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
