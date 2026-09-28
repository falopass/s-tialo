import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_SITIO, WA_LINK_CABANA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «letrero de ruta pintado a mano» — la señalética de
 * madera de la entrada y el cartel de la K-275 llevados a página: verde
 * lima del cartel, madera oscura, celeste de río. Barlow Condensed hace de
 * letra de señal caminera; Geist Mono marca los "hitos" del recorrido.
 * Motivo propio: postes de carretera (PARADA 01…) unidos por una línea
 * punteada, y el cartel real del camping como pieza de marca.
 */
const C = {
  paper: '#F6F1E2',
  card: '#FDFAF0',
  lime: '#9DBE2B',
  limeDeep: '#4F670F',
  wood: '#5A3B22',
  bark: '#3A2716',
  river: '#4C8A97',
  sky: '#DCEBEC',
  ink: '#2E3324',
  muted: '#68705A',
  line: 'rgba(58,39,22,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'camping-los-castanos',
  title: 'Camping Los Castaños — Camping junto al río Claro, Molina',
  description:
    'Sitios con luz y quincho, cafetería y acceso al río Claro: Camping Los Castaños en la K-275 de Molina, camino a las 7 Tazas. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const PARADAS = [
  {
    km: 'Parada 01',
    titulo: 'El sitio, con luz y enchufe',
    texto:
      'Sitios con sombra de castaños, luz y un enchufe por puesto, mesa de picnic, quincho y parrilla. Caben carpas de todos los tamaños.',
    src: `${IMG}/sitio.webp`,
    alt: 'Carpa armada bajo un gran castaño en un sitio del camping',
  },
  {
    km: 'Parada 02',
    titulo: 'La cafetería del camping',
    texto:
      'Completos espectaculares, pie de limón y pan amasado, según quienes pasaron. Y un minimarket que atiende todo el día.',
    src: `${IMG}/completo.webp`,
    alt: 'Sandwich de la cafetería del Camping Los Castaños',
  },
  {
    km: 'Parada 03',
    titulo: 'El río Claro y sus pozones',
    texto:
      'Cruzando el camino baja un sendero de unos 15 a 20 minutos hasta pozones de agua transparente. Vale cada paso.',
    src: `${IMG}/pozon.webp`,
    alt: 'Pozón de agua turquesa entre las rocas del río Claro',
  },
  {
    km: 'Parada 04',
    titulo: 'Cabañas en Ruedas',
    texto:
      'Su alternativa a la carpa: casas rodantes equipadas para cuatro personas, estacionadas entre los árboles.',
    src: `${IMG}/cabana.webp`,
    alt: 'Casa rodante de la modalidad Cabañas en Ruedas en el camping',
  },
  {
    km: 'Parada 05',
    titulo: 'La noche bajo los árboles',
    texto:
      'El camping baja el volumen a las 23:00: el resto de la noche es silencio de campo, estrellas y el río de fondo.',
    src: `${IMG}/noche.webp`,
    alt: 'Noche en el camping con luces entre los árboles',
  },
]

const SERVICIOS = [
  'Luz, enchufe y mesa de picnic en cada sitio',
  'Quinchos y parrillas para el asado',
  'Duchas con agua caliente las 24 horas',
  'Cafetería y minimarket abiertos todo el día',
  'Pet friendly: los perros son bienvenidos',
  'Silencio obligado desde las 23:00',
]

const DISTANCIAS = [
  { lugar: 'Río Claro', detalle: 'cruzando el camino' },
  { lugar: 'Velo de la Novia', detalle: '10 min en auto' },
  { lugar: 'Parque Radal 7 Tazas', detalle: '15 min en auto' },
]

// Fragmentos reales de reseñas de Google (ficha del camping, 95 reseñas).
const RESENAS = [
  {
    texto:
      'Excelente camping: sitios con quinchos, luz y enchufes, baños siempre limpios. Completos espectaculares, rico pie de limón y pan amasado.',
    quien: 'Angélica Gajardo Rojas',
  },
  {
    texto:
      'Un enchufe por sitio, mesa de picnic y espacio para carpas de todos tamaños. Baños y duchas con agua caliente 24 horas.',
    quien: 'Verushka Guzman',
  },
  {
    texto:
      'Primera vez que puedo encontrar todo en un solo camping: atención excelente y hasta agua caliente en las duchas.',
    quien: 'Esteban Rojas',
  },
]

const FAQ = [
  {
    q: '¿Puedo llevar a mi mascota?',
    a: 'Sí, el camping es pet friendly. Las reseñas piden eso sí recoger las deposiciones y cuidar el lugar entre todos.',
  },
  {
    q: '¿Cómo es el acceso al río?',
    a: 'El río Claro está cruzando la carretera. La bajada es un sendero pronunciado de 15 a 20 minutos que termina en pozones; conviene ir con calzado adecuado y sin prisa.',
  },
  {
    q: '¿Hay agua caliente y electricidad?',
    a: 'Sí: duchas con agua caliente las 24 horas y cada sitio cuenta con luz y su propio enchufe.',
  },
  {
    q: '¿Cómo reservo un sitio?',
    a: 'Directo por WhatsApp al +56 9 6602 4269: escribe con tus fechas y cuántos son.',
  },
]

// ── Piezas del letrero ──────────────────────────────────────

/** Marco de sección como letrero caminero en mono. */
function Letrero({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-5 flex items-center gap-3`}
      style={{ color: light ? C.lime : C.limeDeep }}
    >
      <span
        className="inline-block px-2 py-0.5 border"
        style={{ borderColor: 'currentColor' }}
        aria-hidden="true"
      >
        K-275
      </span>
      {children}
    </p>
  )
}

/** Poste de ruta: placa cuadrada con el número de parada. */
function Poste({ n }: { n: string }) {
  return (
    <span
      className={`${mono.className} inline-flex flex-col items-center justify-center w-14 h-14 md:w-16 md:h-16 text-center leading-none font-bold border-2`}
      style={{
        backgroundColor: C.wood,
        borderColor: C.paper,
        color: C.paper,
        boxShadow: '0 4px 0 rgba(58,39,22,0.35)',
      }}
      aria-hidden="true"
    >
      <span className="text-[8px] md:text-[9px] tracking-[0.18em] uppercase">Km</span>
      <span className="text-lg md:text-xl">{n}</span>
    </span>
  )
}

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline para que el chequeo de contraste lo lea.
 */
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

export default function CampingLosCastanosPage() {
  return (
    <div
      className={`${body.className} clc min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .clc a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,226,0.95)',
          ink: C.bark,
          line: C.line,
          btnBg: C.limeDeep,
          btnInk: '#FDFAF0',
        }}
      />

      {/* ── Hero: el río Claro bajando de la precordillera ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.bark }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Cascada y pozón turquesa del río Claro junto al Camping Los Castaños"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(58,39,22,0.45) 0%, rgba(58,39,22,0.12) 42%, rgba(46,51,36,0.82) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-10 md:pb-14">
          <Reveal>
            <p
              className={`${mono.className} inline-block text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold px-3 py-1.5 mb-5 border-2`}
              style={{ color: C.paper, borderColor: C.lime, backgroundColor: 'rgba(58,39,22,0.55)' }}
            >
              Camping · K-275 · Molina
            </p>
            <h1
              className={`${display.className} uppercase font-bold leading-[0.88] tracking-[0.01em] text-[clamp(3.4rem,15vw,8.5rem)] mb-4`}
              style={{ color: '#FDFAF0' }}
            >
              Los
              <br />
              <span style={{ color: C.lime }}>Castaños</span>
            </h1>
            <p
              className="text-base md:text-xl leading-relaxed max-w-md mb-8"
              style={{ color: 'rgba(253,250,240,0.9)' }}
            >
              Sitios con luz y quincho, cafetería de la casa y el río Claro
              cruzando el camino, rumbo a las 7 Tazas.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href={WA_LINK_SITIO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.lime, color: C.bark }}
              >
                Consultar sitio
              </a>
              <a
                href="#recorrido"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(253,250,240,0.6)', color: '#FDFAF0' }}
              >
                Ver el recorrido
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div
              className="flex flex-wrap items-center gap-x-8 gap-y-3 pt-5 border-t"
              style={{ borderColor: 'rgba(253,250,240,0.28)' }}
            >
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 tap-44"
              >
                <Stars value={BIZ.rating} color={C.lime} />
                <span
                  className={`${mono.className} text-xs md:text-sm font-semibold`}
                  style={{ color: '#FDFAF0' }}
                >
                  {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas en Google
                </span>
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-semibold tap-44`}
                style={{ color: C.sky }}
              >
                {BIZ.igHandle} · {BIZ.igFollowers} seguidores
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Señales de ruta: qué hay cerca ── */}
      <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <Reveal>
            <ul className="grid sm:grid-cols-3 gap-4 md:gap-6">
              {DISTANCIAS.map((d) => (
                <li
                  key={d.lugar}
                  className="flex items-center gap-4 border-2 px-4 py-4"
                  style={{ borderColor: C.wood, backgroundColor: C.paper }}
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none" stroke={C.wood} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 22V8" />
                    <path d="M12 8c0-3 2.5-5 6-5v6c-3.5 0-6-.5-6-1z" />
                    <path d="M12 10c0-2.5-2-4-5-4v5c3 0 5-.5 5-1z" />
                  </svg>
                  <div>
                    <p className={`${display.className} uppercase font-bold text-lg md:text-xl leading-tight`} style={{ color: C.bark }}>
                      {d.lugar}
                    </p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {d.detalle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── El letrero de la entrada ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative overflow-hidden aspect-[4/3] border-4" style={{ borderColor: C.wood }}>
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero de madera pintado a mano en la entrada de Camping Los Castaños"
                  fill
                  sizes="(min-width: 1024px) 45vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element -- cartel real del camping */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Cartel circular de Los Castaños Camping, tal como está en su entrada"
                className="absolute -bottom-7 -right-2 md:-right-7 w-24 md:w-32 rotate-[4deg]"
                style={{ boxShadow: '0 12px 30px rgba(58,39,22,0.4)' }}
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Letrero>El camping</Letrero>
            <h2
              className={`${display.className} uppercase font-bold leading-[0.92] text-4xl md:text-6xl mb-6`}
              style={{ color: C.bark }}
            >
              El refugio
              <br />
              <span style={{ color: C.limeDeep }}>de la K-275</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: C.ink }}>
              A la orilla del camino que sube a las 7 Tazas, Los Castaños es
              de esos campings que lo tienen todo en un solo lugar: sitios
              equipados, cafetería, minimarket y el río Claro a una bajada
              de distancia. Atendido por su gente, con la calma de la
              precordillera.
            </p>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44`}
              style={{ color: C.limeDeep, textDecorationColor: C.lime }}
            >
              {BIZ.igHandle} · {BIZ.igFollowers} seguidores →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El recorrido: postes de ruta ── */}
      <section id="recorrido" className="scroll-mt-20" style={{ backgroundColor: C.bark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Letrero light>El recorrido</Letrero>
            <h2
              className={`${display.className} uppercase font-bold leading-[0.92] text-4xl md:text-6xl mb-12 md:mb-16`}
              style={{ color: C.paper }}
            >
              Cinco paradas,
              <br />
              <span style={{ color: C.lime }}>un solo lugar</span>
            </h2>
          </Reveal>
          <ol className="space-y-10 md:space-y-14">
            {PARADAS.map((p, i) => (
              <li key={p.km}>
                <Reveal delay={60}>
                  <div
                    className={`grid md:grid-cols-[auto_1fr] gap-5 md:gap-8 items-start ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                  >
                    <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:[direction:ltr]">
                      <Poste n={String(i + 1).padStart(2, '0')} />
                      <span
                        aria-hidden="true"
                        className="hidden md:block w-px h-6 border-l-2 border-dashed ml-8"
                        style={{ borderColor: 'rgba(157,190,43,0.5)' }}
                      />
                    </div>
                    <div className="grid sm:grid-cols-[1fr_260px] gap-5 items-center md:[direction:ltr]">
                      <div>
                        <p
                          className={`${mono.className} text-[10px] uppercase tracking-[0.28em] font-semibold mb-2`}
                          style={{ color: C.lime }}
                        >
                          {p.km}
                        </p>
                        <h3
                          className={`${display.className} uppercase font-bold text-2xl md:text-4xl mb-3 leading-tight`}
                          style={{ color: C.paper }}
                        >
                          {p.titulo}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(253,250,240,0.78)' }}>
                          {p.texto}
                        </p>
                      </div>
                      <div
                        className="relative overflow-hidden aspect-[4/3] border-2"
                        style={{ borderColor: 'rgba(157,190,43,0.45)' }}
                      >
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(min-width: 640px) 260px, calc(100vw - 2.5rem)"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Servicios: la lista del letrero ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="relative overflow-hidden aspect-[4/3] border-4" style={{ borderColor: C.wood }}>
              <Image
                src={`${IMG}/quincho.webp`}
                alt="Quincho y piscina del Camping Los Castaños al atardecer"
                fill
                sizes="(min-width: 1024px) 45vw, calc(100vw - 2.5rem)"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Letrero>Servicios</Letrero>
            <h2
              className={`${display.className} uppercase font-bold leading-[0.92] text-4xl md:text-5xl mb-8`}
              style={{ color: C.bark }}
            >
              Todo lo que tiene
              <br />
              <span style={{ color: C.limeDeep }}>el camping</span>
            </h2>
            <ul className="space-y-4">
              {SERVICIOS.map((s) => (
                <li key={s} className="flex gap-3.5 items-start">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.limeDeep} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                  <span className="text-sm md:text-base leading-relaxed font-medium" style={{ color: C.ink }}>
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <div>
                <Letrero>Bitácora de visitas</Letrero>
                <h2
                  className={`${display.className} uppercase font-bold leading-[0.92] text-4xl md:text-6xl`}
                  style={{ color: C.bark }}
                >
                  Los que ya
                  <br />
                  <span style={{ color: C.limeDeep }}>pasaron por acá</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.limeDeep} className="w-5 h-5" />
                <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.ink }}>
                  {BIZ.rating.toFixed(1)} de 5 · {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.quien} delay={i * 110}>
                <figure
                  className="h-full p-6 md:p-7 border-2"
                  style={{ backgroundColor: C.card, borderColor: C.wood }}
                >
                  <blockquote
                    className="text-[15px] md:text-base leading-relaxed mb-5"
                    style={{ color: C.ink }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-semibold border-t-2 border-dashed pt-3.5`}
                    style={{ color: C.muted, borderColor: C.line }}
                  >
                    {r.quien} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44`}
              style={{ color: C.bark, textDecorationColor: C.limeDeep }}
            >
              Leer todas las reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Preguntas frecuentes ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Letrero>Antes de armar la carpa</Letrero>
          <h2
            className={`${display.className} uppercase font-bold leading-[0.92] text-4xl md:text-5xl mb-8`}
            style={{ color: C.bark }}
          >
            Dudas de ruta
          </h2>
        </Reveal>
        <FaqList
          items={FAQ}
          colors={{ q: C.bark, a: C.muted, line: C.line, plusBg: C.wood, plusInk: C.paper }}
        />
      </section>

      {/* ── Llegar: mapa + contacto ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.wood }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Letrero light>Llegada</Letrero>
            <h2
              className={`${display.className} uppercase font-bold leading-[0.92] text-4xl md:text-5xl mb-6`}
              style={{ color: C.paper }}
            >
              Al costado
              <br />
              <span style={{ color: C.lime }}>del camino</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-5" style={{ color: 'rgba(253,250,240,0.88)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, Región del {BIZ.region}
            </address>
            <p className="text-sm leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(253,250,240,0.72)' }}>
              El cartel pintado a mano se ve desde la K-275: no hay cómo
              perderse. Reserva y consultas directas por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.lime, color: C.bark }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={WA_LINK_CABANA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(253,250,240,0.55)', color: '#FDFAF0' }}
              >
                Cabañas en Ruedas
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-2" style={{ borderColor: 'rgba(157,190,43,0.5)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-4 text-xs font-semibold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.lime }}
            >
              Abrir en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bark, color: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ borderColor: 'rgba(253,250,240,0.16)' }}
        >
          <div>
            <p className={`${display.className} uppercase font-bold text-xl leading-tight`}>{BIZ.name}</p>
            <p className="text-xs" style={{ color: 'rgba(253,250,240,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(253,250,240,0.65)' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igHandle}
            </a>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp ${BIZ.short}`} />
      <SitiazoStrip />
    </div>
  )
}
