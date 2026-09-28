import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «la mesa corrida del campo». Restaurant de carretera
 * con casona, galpón rojo y manteles de cuadrillé: la página se lee como
 * una carta de almuerzo de domingo — rótulos de camino en mono, la carta
 * sobre tabla oscura, el fundo como panorama del día. Fraunces pone la
 * letra de casona; Karla el texto; el cuadrillé rojo crema es el motivo.
 */
const C = {
  paper: '#F4EDDC',
  card: '#FBF6E8',
  ink: '#241A12',
  barn: '#A03123',
  barnDeep: '#6E1F16',
  pradera: '#2E5726',
  deep: '#1B2618',
  mostaza: '#C08A2D',
  muted: '#6F5F4D',
  line: 'rgba(36,26,18,0.15)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'casa-de-campo-san-clemente',
  title: 'Casa de Campo — Restaurant campestre en San Clemente',
  description:
    'Restaurant campestre en El Álamo Norte, San Clemente: platos de campo abundantes, terraza, piscina, sauna y tinajas. 4,0★ en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El fundo', href: '#fundo' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const PLATOS = [
  {
    src: `${IMG}/lomo-a-lo-pobre.webp`,
    name: 'Lomo a lo pobre',
    desc: 'El plato de la foto: lomo, huevos fritos y papas. Las reseñas dicen que uno alcanza para dos.',
    tag: 'el que más piden',
  },
  {
    src: `${IMG}/porotos.webp`,
    name: 'Porotos y ensalada',
    desc: 'Cazuela de porotos con su tomate aliñado al lado: cocina de olla, la de la casa de campo.',
    tag: 'cocina de olla',
  },
  {
    src: `${IMG}/mariscal.webp`,
    name: 'Mariscos al plato',
    desc: 'Almejas y machas servidas en greda sobre el mantel de cuadrillé, con su copa al lado.',
    tag: 'de temporada',
  },
]

const MAS_PLATOS = [
  'pollo a la plancha con salsa de champiñones',
  'chorrillana',
  'cazuela',
  'plateada',
  'pollo asado',
  'merluza a lo pobre',
  'papas fritas',
  'pan con pebre',
]

const FUNDO = [
  {
    src: `${IMG}/piscina.webp`,
    name: 'La piscina',
    desc: 'Pileta grande junto al salón: las reseñas la recomiendan para el día entero con niños.',
  },
  {
    src: `${IMG}/tina-madera.webp`,
    name: 'Sauna y tinajas',
    desc: 'Tina de madera y sauna dentro del recinto, lo confirman quienes celebraron aquí.',
  },
  {
    src: `${IMG}/galpon.webp`,
    name: 'El galpón rojo',
    desc: 'El granero pintado de rojo que se ve desde el camino: la marca del fundo.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Es un lugar amplio, comida casera y rápida, muy sabroso y platos contundentes, fácilmente pueden comer 2 personas en un solo plato. El personal es amable y de rápida atención, no se demoraron nada en llegar con los platos.',
    author: 'Maria Jose Cisternas',
  },
  {
    text: 'Buenos platos a un precio competitivo, posee una amplia terraza para comer al aire libre, también tiene piscina.',
    author: 'Mauricio Antúnez',
  },
  {
    text: 'Muy buen lugar para comer. La comida exquisita, abundantes platos, rica presentación y muy sabrosa… La atención de primera y todo muy rápido y eficiente.',
    author: 'Yoao Hidalgo',
  },
  {
    text: 'El pollo a la plancha con salsa de champiñones muy rico, la atención fue rápida y no se tardaron mucho en traer los platos, pienso volver a futuro.',
    author: 'Carla Gómez',
  },
]

const HORARIO = [
  { d: 'lunes', h: 'cerrado' },
  { d: 'martes a jueves', h: '12:30 – 16:30' },
  { d: 'viernes y sábado', h: '12:30 – 22:30' },
  { d: 'domingo', h: '12:30 – 16:30' },
]

/** Mantel de cuadrillé — la tela roja y crema de sus mesas. */
function Cuadrille({ flip = false, className = '' }: { flip?: boolean; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        height: '14px',
        backgroundImage: `repeating-conic-gradient(${flip ? C.card : C.barn} 0% 25%, ${flip ? C.barn : C.card} 0% 50%)`,
        backgroundSize: '28px 28px',
      }}
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#F0C86E' : C.barn }}
    >
      <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
        <path d="M3 12h18M12 3v3M5 6l2 2M19 6l-2 2M6 21h12" />
      </svg>
      {children}
    </p>
  )
}

export default function CasaDeCampoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={<span>Casa de Campo</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(27,38,24,0.94)',
          ink: '#F4EDDC',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.barn,
          btnInk: '#FFF4E8',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Casona de campo de Casa de Campo: entrada con bandera chilena y palmeras, San Clemente"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(27,38,24,0.55) 0%, rgba(27,38,24,0.3) 42%, rgba(27,38,24,0.93) 100%)' }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(244,237,220,0.96)', color: C.ink }}
            >
              <Stars value={4} color={C.barn} className="w-[13px] h-[13px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Restaurant campestre · El Álamo, San Clemente</Eyebrow>
            <h1
              className={`${display.className} leading-[1.03] tracking-[0.01em] text-[clamp(2.5rem,9vw,5.2rem)] mb-6`}
              style={{ color: '#F4EDDC' }}
            >
              El almuerzo de campo
              <br />
              <span className={displayItalic.className} style={{ color: '#F0C86E' }}>que se come lento.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(244,237,220,0.92)' }}>
              En la parcela de El Álamo Norte: platos que alcanzan para
              compartir, terraza al aire libre, piscina y tinajas de madera
              para quedarse el día entero.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.barn, color: '#FFF4E8' }}
              >
                Reservar mesa por WhatsApp
              </a>
              <a
                href="#carta"
                className="font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                style={{ borderColor: 'rgba(244,237,220,0.55)', color: '#F4EDDC' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        <Cuadrille className="relative" />
        <div className="relative" style={{ backgroundColor: 'rgba(27,38,24,0.95)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(244,237,220,0.9)' }}>
            <span>mar–dom desde 12:30 · lun cerrado</span>
            <span>{BIZ.priceRange}</span>
            <span>terraza · piscina · tinajas</span>
            <span className="hidden md:inline" style={{ color: '#F0C86E' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La carta sobre tabla oscura ── */}
      <section id="carta" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>La carta de la casa</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#F4EDDC' }}>
                Platos que llegan
                <br />
                <span className={displayItalic.className} style={{ color: '#F0C86E' }}>a la mesa y sobran</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(244,237,220,0.82)' }}>
                Lo que sale de la cocina según sus propias fotos y las
                reseñas: contundente, casero y con precio de carretera —
                {` ${BIZ.priceRange} según Google.`}
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-10">
            {PLATOS.map((p, i) => (
              <Reveal key={p.name} delay={i * 110}>
                <figure>
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={p.src}
                      alt={`${p.name} — plato de Casa de Campo, San Clemente`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                    <span
                      className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-3 py-1.5`}
                      style={{ backgroundColor: 'rgba(27,38,24,0.9)', color: '#F0C86E' }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <figcaption className="pt-4">
                    <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: '#F4EDDC' }}>
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,237,220,0.82)' }}>
                      {p.desc}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="border-y py-5" style={{ borderColor: 'rgba(244,237,220,0.2)' }}>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mb-3`} style={{ color: 'rgba(244,237,220,0.6)' }}>
                y además, de la carta y las reseñas
              </p>
              <ul className={`${mono.className} flex flex-wrap gap-x-7 gap-y-2 text-[12px] md:text-[13px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(244,237,220,0.9)' }}>
                {MAS_PLATOS.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span aria-hidden="true" style={{ color: C.mostaza }}>·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
      <Cuadrille flip />

      {/* ── El fundo ── */}
      <section id="fundo" className="scroll-mt-20 relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 overflow-hidden">
        <Reveal>
          <Eyebrow>El fundo completo</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              No es solo un restaurant:
              <br />
              <span className={displayItalic.className} style={{ color: C.pradera }}>es el paseo de la tarde</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Terraza, pradera, piscina y tinajas de madera: quienes escriben
              reseñas cuentan que vienen a almorzar y se quedan hasta la tarde.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-8">
          {FUNDO.map((f, i) => (
            <Reveal key={f.name} delay={i * 110}>
              <figure className="group">
                <div className="overflow-hidden aspect-[3/4]" style={{ boxShadow: '0 14px 30px -16px rgba(36,26,18,0.4)' }}>
                  <img
                    src={f.src}
                    alt={`${f.name} — recinto de Casa de Campo, El Álamo`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <figcaption className="pt-4">
                  <h3 className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.ink }}>
                    {f.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {f.desc}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
            <img
              src={`${IMG}/salon.webp`}
              alt="Salón comedor de Casa de Campo: techo de madera y mesas con mantel rojo"
              loading="lazy"
              className="w-full object-cover aspect-[16/9]"
              style={{ boxShadow: '0 14px 30px -16px rgba(36,26,18,0.4)' }}
            />
            <div>
              <h3 className={`${display.className} text-2xl md:text-3xl leading-tight mb-4`} style={{ color: C.ink }}>
                Adentro, el salón de madera
                <br />
                <span className={displayItalic.className} style={{ color: C.barn }}>con su estufa a leña</span>
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
                Comedor amplio con vigas a la vista y manteles rojos: los
                clientes destacan la amplitud para grupos y celebraciones —
                y que conviene abrigarse en invierno.
              </p>
              <ul className={`${mono.className} space-y-2 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                <li>· estacionamiento dentro del recinto</li>
                <li>· comer en el local, retirar o delivery</li>
                <li>· a pasos de la carretera, El Álamo Norte</li>
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Lo que dice la mesa</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              {BIZ.rating}★ en Google
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en la ficha de {BIZ.name}: «platos
              contundentes», «terraza», «piscina» y «comida casera» se repiten
              en casi todas.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.barn, textDecorationColor: 'rgba(160,49,35,0.35)' }}
            >
              Leer la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={100 + i * 90}>
                <figure
                  className="p-6 border-l-4"
                  style={{ backgroundColor: C.paper, borderColor: i % 2 === 0 ? C.barn : C.pradera }}
                >
                  <Stars value={5} color={C.barn} className="w-[14px] h-[14px] mb-3" />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {t.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.pradera }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Camino a El Álamo</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F4EDDC' }}>
              A la entrada
              <br />
              <span className={displayItalic.className} style={{ color: '#F0C86E' }}>de San Clemente</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: '#F4EDDC' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#F4EDDC', textDecorationColor: 'rgba(244,237,220,0.4)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <dl className="mb-8 border-t" style={{ borderColor: 'rgba(244,237,220,0.22)' }}>
              {HORARIO.map((h) => (
                <div key={h.d} className="flex items-baseline gap-4 py-2.5 border-b" style={{ borderColor: 'rgba(244,237,220,0.22)' }}>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.16em] w-40 shrink-0`} style={{ color: '#F0C86E' }}>
                    {h.d}
                  </dt>
                  <dd className="text-sm" style={{ color: '#F4EDDC' }}>
                    {h.h}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.barn, color: '#FFF4E8' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border-2 tap-44"
                style={{ borderColor: 'rgba(244,237,220,0.5)', color: '#F4EDDC' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-2 min-h-[320px] h-full" style={{ borderColor: 'rgba(244,237,220,0.35)', backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
      <Cuadrille />

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.barnDeep }}>
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{ backgroundImage: `url(${IMG}/galpon.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.05] mb-6`} style={{ color: '#F4EDDC' }}>
              El mantel ya está
              <br />
              <span className={displayItalic.className} style={{ color: '#F0C86E' }}>puesto en la mesa.</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,237,220,0.88)' }}>
              Escribe por WhatsApp y aparta tu mesa para el almuerzo del
              fin de semana — viernes y sábado abren hasta las 22:30.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
              style={{ backgroundColor: C.mostaza, color: C.ink }}
            >
              Reservar mesa →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F4EDDC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t" style={{ borderColor: 'rgba(244,237,220,0.14)' }}>
          <div>
            <p className={`${display.className} text-2xl mb-2`}>
              {BIZ.name} · {BIZ.rubro}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,237,220,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,237,220,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,237,220,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,237,220,0.68)' }}>
            Datos de la ficha pública de Google y SERNATUR (dirección, horario, reseñas); descripciones de muestra.
          </p>
        </div>
        <div className="px-5 pb-4 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
