import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, IG_URL, FB_URL, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const signal = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «señalética de ruta» — Las Lomas queda en el camino
 * a Radal Siete Tazas y la casa funciona como parada de viajeros
 * (restobar, Café al Paso, pub). La página se lee como los letreros
 * cafés de señal turística: placas de borde blanco, hitos con distancia
 * en kilómetros y el dorado de su logo como acento. Barlow Condensed
 * hace la letra de señal; Public Sans el texto; Space Mono los datos
 * de camino.
 */
const C = {
  paper: '#F5EFE1',
  soft: '#EAE0C9',
  card: '#FBF7EA',
  ink: '#2B2416',
  muted: '#64573D',
  sign: '#6B4A26',
  deep: '#241C0F',
  gold: '#B9975B',
  goldHi: '#E3C48A',
  cream: '#F5EFE1',
  line: 'rgba(107,74,38,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-las-lomas',
  title: 'Cabañas Las Lomas — Hospedaje y restobar camino a Siete Tazas, San Clemente',
  description:
    'Cabañas equipadas, restobar, piscina y Pub La Taverna en Las Lomas Norte, San Clemente. A 40 km de Radal Siete Tazas. Reserva por WhatsApp.',
  image: '/demos/cabanas-las-lomas/hero.webp',
})

const NAV_LINKS = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'Restobar', href: '#restobar' },
  { label: 'La ruta', href: '#ruta' },
  { label: 'Reservar', href: '#reservar' },
]

const HITOS = [
  { name: 'Reserva Nacional Radal Siete Tazas', km: 'a 40 km' },
  { name: 'Parque Inglés', km: 'misma ruta' },
  { name: 'Salto La Placeta', km: 'cascada' },
  { name: 'Cascada de las Ánimas', km: 'sector' },
  { name: 'Lago Colbún', km: 'vía Ruta Pehuenche' },
]

const EQUIPO = [
  'Aire acondicionado y ventilador',
  'Baño privado con agua caliente, toallas y secador',
  'Cocina equipada: cocina eléctrica, frigobar, hervidor y tostador',
  'Sábanas, frazadas, almohadas y cojines',
  'Parrilla y horno para asado sin costo',
  'Piscina y áreas verdes para huéspedes',
  'Wi-fi satelital y estacionamiento junto a la cabaña',
  'Ping pong, dominó y juegos de mesa',
]

const RUTA = [
  { n: '01', t: 'Ruta 5 Sur hasta Camarico', d: 'Entrada K-31, un kilómetro pasado el peaje Río Claro, hacia la cordillera.' },
  { n: '02', t: 'Cruce a San Clemente', d: 'Por la K-31 hasta el cruce señalizado hacia San Clemente (no seguir a Cumpeo). Unos 20 minutos desde la autopista.' },
  { n: '03', t: 'K-15 hasta Las Lomas', d: 'Sigue recto por la K-15 unos 6 km hasta la entrada marcada “Las Lomas”.' },
  { n: '04', t: 'K-551 a la Posta', d: 'Por la ruta K-551, unos 15 minutos hasta la Posta de Salud Rural Las Lomas.' },
  { n: '05', t: 'Camino de tierra', d: 'Desde la Posta, 1.200 metros de camino de tierra y llegaste.' },
]

const RESENAS = [
  { text: 'Sus dueños son un 10', note: 'Reseña de Google' },
  { text: 'Excelente anfitriona', note: 'Reseña de Google' },
  { text: 'Excelente lugar para descansar y disfrutar de la naturaleza', note: 'Reseña de Google' },
]

// ── Piezas de la ruta ──────────────────────────────────────

/** Placa de señal turística: café con reborde claro, letra condensada. */
function Placa({ children, arrow = false }: { children: React.ReactNode; arrow?: boolean }) {
  return (
    <span
      className={`${signal.className} inline-flex items-center gap-2 uppercase font-bold tracking-[0.08em] text-[13px] md:text-sm px-4 py-1.5 rounded-md`}
      style={{
        backgroundColor: C.sign,
        color: '#F7F1E3',
        boxShadow: 'inset 0 0 0 2px #F7F1E3, 0 2px 0 rgba(43,36,22,0.25)',
      }}
    >
      {children}
      {arrow && <span aria-hidden="true">→</span>}
    </span>
  )
}

/** Rótulo de sección como mojón kilométrico. */
function Mojon({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.goldHi : C.sign }}
    >
      <span
        className="inline-block w-3 h-3 rounded-sm rotate-45 shrink-0"
        style={{ backgroundColor: C.gold }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
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
          para {BIZ.name} — así se vería tu sitio.{' '}
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

export default function CabanasLasLomasPage() {
  return (
    <div
      className={`${body.className} cll min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cll a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name="Las Lomas"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={signal.className}
        theme={{
          over: 'dark',
          bar: 'rgba(245,239,225,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.sign,
          btnInk: '#F7F1E3',
        }}
      />

      {/* ── Hero: el letrero del camino ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Campo verde con cerca de madera y el volcán nevado de la precordillera del Maule al fondo, sector Las Lomas"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,28,15,0.42) 0%, rgba(36,28,15,0.08) 45%, rgba(36,28,15,0.74) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-8">
          <Reveal>
            {/* señal de ruta grande */}
            <div
              className="max-w-2xl rounded-lg px-6 md:px-10 py-8 md:py-10"
              style={{
                backgroundColor: C.sign,
                boxShadow: 'inset 0 0 0 3px #F7F1E3, 0 30px 60px rgba(36,28,15,0.5)',
              }}
            >
              <div className="flex items-center gap-4 mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio, ya optimizado en public/ */}
                <img src={`${IMG}/logo.webp`} alt="Logo de Cabañas Las Lomas" className="h-10 w-auto" />
                <span className="flex-1 border-t border-dashed" style={{ borderColor: 'rgba(247,241,227,0.4)' }} aria-hidden="true" />
              </div>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-3`} style={{ color: C.goldHi }}>
                K-551 · Las Lomas Norte · San Clemente
              </p>
              <h1 className={`${signal.className} uppercase font-extrabold leading-[0.92] tracking-[0.01em] text-[clamp(3.2rem,12vw,7rem)] mb-5`} style={{ color: '#F7F1E3' }}>
                Cabañas
                <br />
                Las Lomas <span aria-hidden="true" style={{ color: C.goldHi }}>→</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-7 max-w-lg" style={{ color: 'rgba(247,241,227,0.85)' }}>
                Cabañas equipadas, restobar y piscina en la carretera hacia
                Radal Siete Tazas. El descanso en familia, a media ruta de
                la precordillera.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${signal.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-7 py-3 rounded-md transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.gold, color: C.deep }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#ruta"
                  className={`${signal.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-7 py-3 rounded-md border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: '#F7F1E3', color: '#F7F1E3' }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        {/* cinta de hitos */}
        <div className="relative border-t" style={{ backgroundColor: C.deep, borderColor: 'rgba(185,151,91,0.3)' }}>
          <ul
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-7 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em] text-center`}
            style={{ color: C.gold }}
          >
            <li>Check-in 15:00 · check-out 12:00</li>
            <li>Restobar Café al Paso</li>
            <li>Piscina familiar</li>
            <li>Pub La Taverna vie–sáb</li>
          </ul>
        </div>
      </section>

      {/* ── Hitos de la ruta ── */}
      <section className="border-b" style={{ backgroundColor: C.soft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Mojon>en la carretera de los atractivos</Mojon>
            <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-5xl leading-[1.0] mb-8`} style={{ color: C.ink }}>
              La parada antes
              <br />
              de <span style={{ color: C.sign }}>Siete Tazas</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <ul className="flex flex-wrap gap-3 mb-10">
              {HITOS.map((h) => (
                <li key={h.name} className="flex items-stretch">
                  <Placa>
                    {h.name}
                    <span className={`${mono.className} text-[10px] tracking-[0.1em] font-bold normal-case`} style={{ color: C.goldHi }}>
                      · {h.km}
                    </span>
                  </Placa>
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { src: `${IMG}/placeta.webp`, alt: 'Salto de agua entre rocas y vegetación, sector de Radal Siete Tazas', t: 'Cascadas y pozones', d: 'Saltos, pozones de agua turquesa y senderos de reserva nacional quedan de camino desde la casa.' },
              { src: `${IMG}/volcan.webp`, alt: 'Pradera con cerca blanca y el Descabezado nevado al fondo, Las Lomas', t: 'La precordillera al frente', d: 'El predio mira de cara a los cerros: aire de campo, noches despejadas y la calma del secano.' },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i * 100}>
                <figure className="border rounded-md overflow-hidden" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)" className="object-cover" />
                  </div>
                  <figcaption className="px-5 py-4">
                    <p className={`${signal.className} uppercase font-bold tracking-[0.05em] text-lg mb-1`} style={{ color: C.ink }}>{p.t}</p>
                    <p className="text-[13px] leading-relaxed" style={{ color: C.muted }}>{p.d}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Las cabañas ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Mojon>dos cabañas, nombre de familia</Mojon>
          <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-6xl leading-[0.98] mb-10 md:mb-14`} style={{ color: C.ink }}>
            Don Gustavo
            <br />
            <span style={{ color: C.sign }}>y Doña Ángela</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              name: 'Cabaña Don Gustavo',
              cap: 'hasta 3 personas',
              src: `${IMG}/don-gustavo.webp`,
              alt: 'Cabaña de madera oscura con terraza y vista a los cerros en Las Lomas, San Clemente',
              desc: 'Un dormitorio con baño y ducha caliente, emplazada en pleno campo de la precordillera. Ideal para desconectarse de la ciudad.',
            },
            {
              name: 'Cabaña Doña Ángela',
              cap: 'hasta 4 personas',
              src: `${IMG}/dona-angela.webp`,
              alt: 'Dormitorio equipado de la cabaña Doña Ángela en Las Lomas, San Clemente',
              desc: 'Dos dormitorios, comedor y equipamiento completo para compartir en familia o con amigos, lejos del ruido.',
            },
          ].map((cab, i) => (
            <Reveal key={cab.name} delay={i * 100}>
              <article className="h-full border rounded-md overflow-hidden" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={cab.src} alt={cab.alt} fill sizes="(min-width: 768px) 50vw, calc(100vw - 2.5rem)" className="object-cover" />
                  <span
                    className={`${signal.className} absolute top-3 left-3 uppercase font-bold tracking-[0.08em] text-[12px] px-3 py-1 rounded`}
                    style={{ backgroundColor: C.sign, color: '#F7F1E3', boxShadow: 'inset 0 0 0 2px #F7F1E3' }}
                  >
                    {cab.cap}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className={`${signal.className} uppercase font-extrabold tracking-[0.03em] text-2xl md:text-3xl mb-2`} style={{ color: C.ink }}>
                    {cab.name}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                    {cab.desc}
                  </p>
                  <div className="border-t border-dashed pt-4" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold mb-1`} style={{ color: C.sign }}>
                      Domingo a jueves <span className="text-base" style={{ color: C.ink }}>$50.000</span>
                    </p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.sign }}>
                      Vie, sáb y festivos <span className="text-base" style={{ color: C.ink }}>$55.000</span>
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-8 border rounded-md px-6 md:px-8 py-6" style={{ backgroundColor: C.card, borderColor: C.line }}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] font-bold mb-4`} style={{ color: C.sign }}>
              En cada cabaña, sin costo extra
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {EQUIPO.map((e) => (
                <li key={e} className="text-sm leading-relaxed flex gap-2.5" style={{ color: C.muted }}>
                  <span className="inline-block w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                  {e}
                </li>
              ))}
            </ul>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-5 pt-4 border-t border-dashed`} style={{ color: C.muted, borderColor: C.line }}>
              Check-in 15:00–22:00 · check-out hasta las 12:00 · sin mascotas · no fumar en las instalaciones
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Restobar Café al Paso ── */}
      <section id="restobar" className="scroll-mt-20 border-y" style={{ backgroundColor: C.card, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Mojon>el café del camino</Mojon>
              <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
                Restobar
                <br />
                <span style={{ color: C.sign }}>Café al Paso</span>
              </h2>
              <p className="text-base leading-relaxed mb-4 max-w-lg" style={{ color: C.ink }}>
                ¿A qué huele la felicidad? A café y té al paso: agrocafé,
                pailas con huevo, trozos de torta, pie de limón, sandwiches,
                helados y jugos para animar la ruta.
              </p>
              <p className="text-sm leading-relaxed mb-7 max-w-lg" style={{ color: C.muted }}>
                Y para la hora grande: pizzas, pastas, sandwiches y hotdogs
                — para llevar o compartir en el local, en familia o con
                amigos.
              </p>
              <div className="relative overflow-hidden rounded-md border aspect-[16/10]" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/restobar.webp`}
                  alt="Pizzas y copas de vino servidas en la mesa del restobar de Las Lomas"
                  fill
                  sizes="(min-width: 1024px) 55vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid gap-5">
                <figure className="border rounded-md overflow-hidden" style={{ backgroundColor: C.paper, borderColor: C.line }}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={`${IMG}/cafe.webp`} alt="Puerta de vidrio del Café al Paso con su logo esmerilado" fill sizes="(min-width: 1024px) 40vw, calc(100vw - 2.5rem)" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.sign }}>
                    Café al Paso · puerta del restobar
                  </figcaption>
                </figure>
                <figure className="border rounded-md overflow-hidden" style={{ backgroundColor: C.paper, borderColor: C.line }}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={`${IMG}/piscina.webp`} alt="Piscina familiar con visitas y las cabañas detrás de la cerca, Las Lomas" fill sizes="(min-width: 1024px) 40vw, calc(100vw - 2.5rem)" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} px-4 py-3 text-[10px] uppercase tracking-[0.18em] font-bold`} style={{ color: C.sign }}>
                    Piscina familiar · gratis para huéspedes
                  </figcaption>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pub La Taverna ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-md border" style={{ borderColor: 'rgba(185,151,91,0.35)' }}>
              <Image
                src={`${IMG}/pub.webp`}
                alt="Interior del Pub La Taverna con mesas de madera, muro con cuadros y patentes decorativas"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Mojon light>la noche del sector</Mojon>
            <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-5xl leading-[1.0] mb-5`} style={{ color: C.cream }}>
              Pub <span style={{ color: C.gold }}>La Taverna</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(245,239,225,0.78)' }}>
              Viernes, sábados y festivos desde las 19:00: cervezas, tragos,
              pizzas, sandwiches, jugos y música en ambiente seguro, con
              estacionamiento privado.
            </p>
            <div className="flex flex-wrap gap-3">
              <Placa>Vie · Sáb · Festivos</Placa>
              <Placa>desde las 19:00</Placa>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <Mojon>lo que dejan escrito</Mojon>
          <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-5xl leading-[1.0] mb-10`} style={{ color: C.ink }}>
            Los huéspedes <span style={{ color: C.sign }}>lo dicen simple</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.text} delay={i * 100}>
              <figure className="h-full border rounded-md px-6 py-6" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <blockquote className={`${signal.className} text-xl md:text-2xl font-semibold leading-snug mb-4`} style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold`} style={{ color: C.sign }}>
                  {r.note}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La ruta + mapa ── */}
      <section id="ruta" className="scroll-mt-20 border-t" style={{ backgroundColor: C.soft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <Mojon>cómo llegar</Mojon>
            <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-5xl leading-[1.0] mb-8`} style={{ color: C.ink }}>
              De la Ruta 5
              <br />
              <span style={{ color: C.sign }}>a la puerta</span>
            </h2>
            <ol className="space-y-5">
              {RUTA.map((r) => (
                <li key={r.n} className="flex gap-4">
                  <span className={`${mono.className} shrink-0 w-9 h-9 rounded-sm flex items-center justify-center text-[11px] font-bold`} style={{ backgroundColor: C.sign, color: '#F7F1E3', boxShadow: 'inset 0 0 0 2px #F7F1E3' }}>
                    {r.n}
                  </span>
                  <div>
                    <p className={`${signal.className} uppercase font-bold tracking-[0.04em] text-lg leading-tight`} style={{ color: C.ink }}>
                      {r.t}
                    </p>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: C.muted }}>
                      {r.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-md border min-h-[260px]" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm font-bold">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44" style={{ color: C.sign, textDecorationColor: 'rgba(107,74,38,0.4)' }}>
                Abrir en Google Maps →
              </a>
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44" style={{ color: C.sign, textDecorationColor: 'rgba(107,74,38,0.4)' }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.sign }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-14">
          <Reveal className="flex-1">
            <Mojon light>reservas</Mojon>
            <h2 className={`${signal.className} uppercase font-extrabold tracking-[0.02em] text-4xl md:text-5xl leading-[1.0] mb-4`} style={{ color: '#F7F1E3' }}>
              Las Lomas <span style={{ color: C.goldHi }}>te espera →</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(247,241,227,0.82)' }}>
              Escríbenos con tus fechas y cuántos son: respondemos con
              disponibilidad y confirmamos por transferencia. Atención de
              lunes a domingo y festivos, 9:00 a 22:30.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${signal.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-7 py-3 rounded-md transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.cream, color: C.deep }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${signal.className} uppercase font-bold tracking-[0.06em] text-sm md:text-base px-7 py-3 rounded-md border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: '#F7F1E3', color: '#F7F1E3' }}
              >
                {BIZ.igHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-5" style={{ borderColor: 'rgba(245,239,225,0.14)' }}>
          <div>
            <p className={`${signal.className} uppercase font-extrabold tracking-[0.04em] text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,239,225,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={FB_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                Facebook
              </a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                Instagram
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,239,225,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">{l.label}</a>
            ))}
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tap-44">
              {BIZ.site}
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,225,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(245,239,225,0.72)' }}>
            Fotos, tarifas, dirección, teléfono, horarios y reseñas son
            reales — salen del sitio de la casa y de sus fichas públicas.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
