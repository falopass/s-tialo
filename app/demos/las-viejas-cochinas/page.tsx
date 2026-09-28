import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { SITE, whatsappLink } from '@/lib/config'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA, MAS_PEDIDOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Identidad: el papelón de la picada. Fachada naranja + pilares turquesa
 * del local real; papel crema de carta, números enormes en Anton, precios
 * en mono y filos de mantel de cuadrillé como motivo gráfico.
 */
const C = {
  cream: '#FFF8EA',
  paper: '#F6EDDA',
  paperDeep: '#EFE0C2',
  naranja: '#E2540C',
  naranjaLuz: '#F28C28',
  naranjaInk: '#9E3D06',
  boton: '#B84A0C',
  teal: '#0F6A62',
  tealDark: '#0A3B36',
  ink: '#26190E',
  muted: '#71604B',
  line: 'rgba(38,25,14,0.18)',
}

/** Filo de mantel de cuadrillé: dos bandas translúcidas cruzadas. */
function Mantel() {
  return (
    <div
      aria-hidden="true"
      className="h-[14px] w-full"
      style={{
        backgroundColor: C.cream,
        backgroundImage:
          `repeating-linear-gradient(0deg, rgba(163,37,27,0.45) 0 7px, transparent 7px 14px),` +
          `repeating-linear-gradient(90deg, rgba(163,37,27,0.45) 0 7px, transparent 7px 14px)`,
      }}
    />
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase`}
      style={{ color: dark ? '#FFD9A0' : C.naranjaInk }}
    >
      {children}
    </p>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'las-viejas-cochinas',
  title: 'Las Viejas Cochinas — Picá chilena en Talca',
  description:
    'Picá chilena en Rivera poniente - Av. Río Claro, Talca. Pollo mariscal, plateada a lo pobre y chancho en piedra desde 1975. Pedidos y consultas por teléfono.',
  image: '/demos/las-viejas-cochinas/salon2.webp',
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'La carta', href: '#carta' },
  { label: 'Historia', href: '#historia' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const NUMEROS = [
  { value: '4.1', label: `estrellas en ${BIZ.reviews.toLocaleString('es-CL')} reseñas de Google`, stars: true },
  { value: '1975', label: 'año en que abrió la Cabaña El Turismo' },
  { value: '$10 a 15 mil', label: 'por persona, según 206 comensales' },
  { value: '12:00 a 19:30', label: 'horario, todos los días' },
]

const PLATOS_MESA = [
  { src: 'paila', alt: 'Paila de greda humeante con mariscos y caldo', nombre: 'Paila de la casa' },
  { src: 'plateada', alt: 'Plateada a lo pobre con huevo frito, papas y ensalada', nombre: 'Plateada a lo pobre' },
  { src: 'sopaipillas', alt: 'Sopaipillas doradas junto al mortero de piedra con pebre', nombre: 'Sopaipillas y pebre' },
  { src: 'pescado', alt: 'Paila de pescado con papas cocidas servida en greda', nombre: 'Pescado en paila' },
  { src: 'cazuela', alt: 'Cazuela de ave con verduras servida en fuente de greda', nombre: 'Cazuela' },
  { src: 'tabla', alt: 'Tabla de quesos, cecinas y pan amado para compartir', nombre: 'Tabla para la mesa' },
]

function AvisoSitiazo() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name}: así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LasViejasCochinasPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <div style={{ backgroundColor: C.ink }}>
        <BlitzNav
          name={BIZ.name}
          links={NAV_LINKS}
          waLink={CALL_LINK}
          ctaLabel="Llamar"
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(255,248,234,0.96)',
            ink: C.ink,
            line: C.line,
            btnBg: C.boton,
            btnInk: C.cream,
          }}
        />
      </div>

      {/* ── Hero: el salón lleno, foto real ── */}
      <section id="inicio" className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <img
          src={`${IMG}/salon2.webp`}
          alt="Salón del restaurante lleno de familias: pilares turquesa, manteles de cuadrillé y banderines"
          fetchPriority="high"
          loading="eager"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(26,17,10,0.55) 0%, rgba(26,17,10,0.25) 45%, rgba(26,17,10,0.88) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-14 md:pb-20 pt-40">
          <Reveal>
            <Eyebrow dark>Picá chilena · Talca · desde 1975</Eyebrow>
            <h1
              className={`${display.className} uppercase leading-[0.95] mt-4 text-5xl sm:text-7xl md:text-8xl`}
              style={{ color: C.cream }}
            >
              La picada<br />de la ribera
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(255,248,234,0.92)' }}>
              Pollo mariscal, plateada a lo pobre y el chancho en piedra que TasteAtlas coronó como la mejor salsa del mundo.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${mono.className} text-sm font-bold px-6 py-3 rounded-full active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: C.naranjaLuz, color: C.ink }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href="#carta"
                className={`${mono.className} text-sm font-bold px-6 py-3 rounded-full active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: 'rgba(255,248,234,0.14)', color: C.cream, border: '1px solid rgba(255,248,234,0.5)' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>
      <Mantel />

      {/* ── Papelón de números ── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden border-2 border-dashed" style={{ backgroundColor: C.line, borderColor: C.naranjaInk }}>
            {NUMEROS.map((n, i) => (
              <Reveal key={n.label} delay={i * 80} className="h-full">
                <div className="h-full px-4 py-6 md:px-6 md:py-8 flex flex-col justify-between gap-2" style={{ backgroundColor: C.paper }}>
                  <p className={`${display.className} text-4xl md:text-6xl leading-none`} style={{ color: C.naranja }}>
                    {n.value}
                  </p>
                  <div>
                    {n.stars && <Stars value={BIZ.rating} color={C.naranja} className="w-4 h-4" />}
                    <p className={`${mono.className} mt-1.5 text-[11px] md:text-xs uppercase tracking-wide leading-snug`} style={{ color: C.muted }}>
                      {n.label}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lo que llega a la mesa: corrida de platos reales ── */}
      <section id="mesa" className="scroll-mt-16 py-14 md:py-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
              Lo que llega<br className="md:hidden" /> a la mesa
            </h2>
            <p className={`${mono.className} mt-3 text-xs md:text-sm uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              Fotos del restaurante · desliza →
            </p>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-4 max-w-6xl mx-auto">
            {PLATOS_MESA.map((p) => (
              <figure key={p.src} className="shrink-0 w-[220px] md:w-[260px] snap-start">
                <img
                  src={`${IMG}/${p.src}.webp`}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover rounded-xl"
                  style={{ border: `2px solid ${C.line}` }}
                />
                <figcaption className={`${mono.className} mt-2 text-xs font-semibold uppercase tracking-wide`} style={{ color: C.naranjaInk }}>
                  {p.nombre}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── El mortero campeón ── */}
      <section id="mortero" className="scroll-mt-16 py-14 md:py-24" style={{ backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <img
              src={`${IMG}/mortero.webp`}
              alt="Mortero de piedra con chancho en piedra junto a una paila de greda"
              loading="lazy"
              className="w-full aspect-[4/3] md:aspect-[16/10] object-cover rounded-2xl"
              style={{ border: '3px solid rgba(255,248,234,0.35)' }}
            />
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow dark>El clásico de la casa</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mt-3`} style={{ color: C.cream }}>
              El chancho en piedra que salió campeón del mundo
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,248,234,0.88)' }}>
              En 2023 TasteAtlas eligió el chancho en piedra como la salsa n.º 1 del planeta. Aquí llega al centro de la mesa
              en el mismo mortero de piedra, con sopaipillas recién salidas: sal, ají, pimienta, tomate y aceite, molidos a mano.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Salsa n.º 1 del mundo · TasteAtlas 2023',
                '159 menciones en las reseñas de Google',
                'Receta de la familia Orellana',
              ].map((t) => (
                <li key={t} className={`${mono.className} flex items-center gap-3 text-xs md:text-sm uppercase tracking-wide`} style={{ color: C.cream }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
      <Mantel />

      {/* ── La carta: el papelón de precios real ── */}
      <section id="carta" className="scroll-mt-16 py-14 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>La carta</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mt-3 max-w-2xl`} style={{ color: C.ink }}>
              El papelón de los precios
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Precios del listado que el restaurante publicó en su ficha de Google. Pueden variar;
              el papelón de la pared manda.
            </p>
          </Reveal>

          {/* Los más pedidos: números grandes, precio real */}
          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {MAS_PEDIDOS.map((m, i) => (
              <Reveal key={m.n} delay={i * 80} className="h-full">
                <div
                  className="h-full rounded-xl px-5 py-5 flex flex-col gap-1"
                  style={{ backgroundColor: i === 0 ? C.tealDark : C.cream, border: `2px solid ${i === 0 ? C.tealDark : C.line}` }}
                >
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: i === 0 ? '#FFD9A0' : C.naranjaInk }}>
                    {m.d}
                  </p>
                  <p className={`${display.className} uppercase text-xl md:text-2xl leading-tight`} style={{ color: i === 0 ? C.cream : C.ink }}>
                    {m.n}
                  </p>
                  <p className={`${mono.className} text-lg md:text-xl font-bold`} style={{ color: i === 0 ? C.naranjaLuz : C.boton }}>
                    {m.p}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* El listado completo */}
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {CARTA.map((g, gi) => (
              <Reveal key={g.grupo} delay={gi * 60} className="h-full">
                <div className="h-full rounded-xl p-5 md:p-6" style={{ backgroundColor: C.paperDeep, border: `2px dashed ${C.naranjaInk}` }}>
                  <h3 className={`${display.className} uppercase text-lg md:text-xl tracking-wide`} style={{ color: C.naranjaInk }}>
                    {g.grupo}
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {g.items.map((it) => (
                      <li key={it.n} className="flex items-baseline gap-2 text-sm md:text-[15px]">
                        <span style={{ color: C.ink }}>{it.n}</span>
                        <span className="flex-1 border-b-2 border-dotted" style={{ borderColor: 'rgba(158,61,6,0.45)' }} aria-hidden="true" />
                        <span className={`${mono.className} font-bold`} style={{ color: C.naranjaInk }}>{it.p}</span>
                      </li>
                    ))}
                  </ul>
                  {g.nota && (
                    <p className="mt-4 text-xs leading-relaxed" style={{ color: C.muted }}>{g.nota}</p>
                  )}
                </div>
              </Reveal>
            ))}
            {/* El papelón real, clavado en el pilar */}
            <Reveal delay={200} className="h-full">
              <figure className="h-full flex flex-col">
                <img
                  src={`${IMG}/listado.webp`}
                  alt="El listado de precios real del restaurante, escrito a mano en el papelón de la pared"
                  loading="lazy"
                  className="w-full rounded-xl object-cover rotate-[-1.5deg] shadow-lg"
                  style={{ border: `6px solid ${C.cream}`, aspectRatio: '4/3' }}
                />
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  El papelón de la pared del salón
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>
      <Mantel />

      {/* ── Historia: 50 años a la orilla del río ── */}
      <section id="historia" className="scroll-mt-16 py-14 md:py-24" style={{ backgroundColor: C.tealDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal delay={120} className="order-2 md:order-1">
            <Eyebrow dark>Desde 1975</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mt-3`} style={{ color: C.cream }}>
              Primero vendían sandías a la orilla del río
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,248,234,0.88)' }}>
              En 1975 la familia Orellana abrió la Cabaña El Turismo junto al río Claro. María Graciela,
              la Chelita del Río, lo convirtió en el clásico que hoy lleva su familia: pilares turquesa,
              manteles de cuadrillé y pailas de greda que no salen del fuego.
            </p>
            <ul className="mt-6 space-y-2">
              {[
                'Más de 50 años junto al río Claro',
                'Tercera generación al mando',
                'Comer allí y para llevar, sin delivery',
              ].map((t) => (
                <li key={t} className={`${mono.className} flex items-center gap-3 text-xs md:text-sm uppercase tracking-wide`} style={{ color: C.cream }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="order-1 md:order-2">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={`${IMG}/terraza.webp`}
                alt="Interior del restaurante con pilares turquesa y mesas de mantel de cuadrillé"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl aspect-[4/5]"
                style={{ border: '3px solid rgba(255,248,234,0.3)' }}
              />
              <img
                src={`${IMG}/decor.webp`}
                alt="Detalle del salón: banderines de colores y decoración de picada chilena"
                loading="lazy"
                className="w-full h-full object-cover rounded-xl aspect-[4/5] mt-8"
                style={{ border: '3px solid rgba(255,248,234,0.3)' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-16 py-14 md:py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Lo que dice la gente</Eyebrow>
            <div className="mt-3 flex flex-wrap items-end gap-x-6 gap-y-2">
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
                {BIZ.rating.toLocaleString('es-CL')} estrellas, {BIZ.reviews.toLocaleString('es-CL')} reseñas
              </h2>
              <Stars value={BIZ.rating} color={C.naranja} className="w-6 h-6 md:w-8 md:h-8" />
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90} className="h-full">
                <blockquote
                  className="h-full rounded-xl p-5 md:p-6 flex flex-col"
                  style={{ backgroundColor: C.paper, border: `2px solid ${C.line}` }}
                >
                  <Stars value={5} color={C.naranja} className="w-3.5 h-3.5" />
                  <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: C.ink }}>
                    «{r.texto}»
                  </p>
                  <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-wide`} style={{ color: C.muted }}>
                    {r.nombre} · Google, {r.cuando}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Mantel />

      {/* ── Ubicación y contacto ── */}
      <section id="ubicacion" className="scroll-mt-16 py-14 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Ubicación</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mt-3`} style={{ color: C.ink }}>
              A orillas del río Claro, salida norte de Talca
            </h2>
            <dl className="mt-6 space-y-3 text-sm md:text-base">
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Horario', BIZ.horario],
                ['Teléfono', BIZ.phoneDisplay],
                ['Por persona', BIZ.porPersona],
                ['Servicio', 'Comer allí y para llevar'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline gap-3">
                  <dt className={`${mono.className} shrink-0 w-24 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.naranjaInk }}>{k}</dt>
                  <dd className="font-medium" style={{ color: C.ink }}>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${mono.className} text-sm font-bold px-6 py-3 rounded-full active:scale-95 transition-transform tap-44`}
                style={{ backgroundColor: C.boton, color: C.cream }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-sm font-bold px-6 py-3 rounded-full active:scale-95 transition-transform tap-44`}
                style={{ color: C.naranjaInk, border: `2px solid ${C.naranjaInk}` }}
              >
                Abrir en Maps
              </a>
            </div>
            <img
              src={`${IMG}/terraza_fuera.webp`}
              alt="Mesas de la terraza exterior junto al estacionamiento, con pilares turquesa"
              loading="lazy"
              className="mt-8 w-full aspect-[4/3] object-cover object-top rounded-xl"
              style={{ border: `2px solid ${C.line}` }}
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden border-2" style={{ borderColor: C.naranjaInk }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full min-h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-wide`} style={{ color: C.muted }}>
              Rivera poniente, antes del puente sobre el río Claro
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} uppercase text-xl`} style={{ color: C.cream }}>{BIZ.name}</p>
          <address className="not-italic text-sm mt-2 leading-relaxed" style={{ color: 'rgba(255,248,234,0.85)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
          <p className="text-xs mt-3 leading-relaxed" style={{ color: 'rgba(255,248,234,0.65)' }}>
            Sitio de ejemplo de Sitiazo. Fotos, precios, reseñas y datos: ficha pública del restaurante en Google
            y su listado de precios publicado.
          </p>
        </div>
      </footer>

      <AvisoSitiazo />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.boton} />
    </div>
  )
}
