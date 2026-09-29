import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, NATIVAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const displayIt = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

/**
 * Dirección de arte: «el herbario de Huilquilemu» — pliego botánico:
 * papel hueso, tinta bosque, láminas numeradas y nombres latinos en
 * itálica, como la ficha de una colección que salva especies.
 * Cormorant hace la letra del pliego; IBM Plex Mono, el registro.
 */
const C = {
  paper: '#F3EDDF',
  card: '#EDE5D2',
  ink: '#1E2B21',
  leaf: '#3E6B3F',
  deep: '#14231A',
  muted: '#5C6A58',
  line: 'rgba(30,43,33,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-huilquilemu',
  title: 'Vivero Huilquilemu — tres hectáreas de nativas junto a Talca',
  description:
    'Vivero Huilquilemu, a 7 km de Talca camino a San Clemente: árboles y plantas nativas desde 1994, con ruil, queule y pitao en su catálogo de conservación.',
  image: '/demos/vivero-huilquilemu/campo.webp',
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Cómo llegar', href: '#visita' },
]

const LAMINAS = [
  { src: 'flores', alt: 'Arbusto nativo en plena floración blanca dentro del vivero', pie: 'Floración en la chacra' },
  { src: 'bandeja', alt: 'Gazanias y bandejas de siembra en la mesa de trabajo', pie: 'Bandejas de siembra' },
  { src: 'almacigos', alt: 'Hileras de almácigos nativos en bolsas de polietileno', pie: 'Los almácigos' },
  { src: 'helechos', alt: 'Detalle de helechos y follaje del vivero', pie: 'Follaje del vivero' },
]

const SERVICIOS = [
  'Diseño y construcción de jardines y parques',
  'Árboles para reforestación con nativas',
  'Asesorías técnicas en plagas y establecimiento',
  'Charlas a colegios y empresas',
]

const RESENAS = [
  {
    quote: 'Es gigantesco, tiene demasiada variedad de árboles y plantas. Hermoso lugar, te asesoran para la compra. La dueña es una persona muy amable.',
    who: 'Isabel Ramírez · reseña de Google',
  },
  {
    quote: 'Gran variedad de especies y sobre todo especies nativas, que son las que nos interesan. Muy recomendable.',
    who: 'Joamoca · reseña de Google',
  },
  {
    quote: 'Excelente atención y mucha variedad de plantas que no son fáciles de encontrar. Recomiendo visitar en familia.',
    who: 'Diego Andrés Retamal Concha · reseña de Google',
  },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-2.5 min-h-[44px] px-5 py-2.5 rounded-full font-semibold text-[14px] whitespace-nowrap transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44"
      style={{ backgroundColor: C.leaf, color: '#fff' }}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

// Hoja de laurel sencilla: la marca del pliego, no un ícono genérico.
function Hoja({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21C12 9 6 3 4 3c0 9 4 18 8 18Z" />
      <path d="M12 21c0-8 6-12 8-13-1 8-4 13-8 13Z" />
    </svg>
  )
}

export default function ViveroHuilquilemuPage() {
  return (
    <div className={`${body.className} min-h-[100dvh] antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(243,237,223,0.96)', ink: C.ink, line: C.line, btnBg: C.leaf, btnInk: '#fff' }}
      />

      {/* ── Hero: el pliego de portada ────────────────────── */}
      <section id="inicio" className="pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-5 flex items-center justify-center gap-2`} style={{ color: C.leaf }}>
              <Hoja className="w-4 h-4" />
              Registro VH · {BIZ.fundado} · {BIZ.hectareas} hectáreas
            </p>
            <h1 className={`${display.className} font-semibold leading-[1.0] text-[clamp(2.6rem,9vw,5.2rem)]`}>
              Las nativas que casi
              <br />
              se pierden, en vivero
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
              Tres hectáreas de árboles y plantas nativas a 7 km de Talca, camino a San Clemente. Desde 1994 producen también las especies en peligro que otros ya no tienen.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <WaButton>Consultar stock por WhatsApp</WaButton>
              <p className={`${mono.className} self-center text-sm`}>
                ★ {BIZ.googleRating.toLocaleString('es-CL')} · {BIZ.googleReviews} reseñas
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="mt-12">
              <div className="relative aspect-[16/10] md:aspect-[21/9] overflow-hidden border" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/campo.webp`}
                  alt="Surcos de producción del vivero con hileras de plantas en el campo"
                  fill
                  priority
                  sizes="(min-width:1200px) 1150px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Lámina I · los surcos de producción, sector Huilquilemu
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Láminas: el vivero por dentro ─────────────────── */}
      <section id="vivero" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-x-5 gap-y-10">
            <div className="md:col-span-4">
              <Reveal>
                <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] md:sticky md:top-28`}>
                  Cuatro láminas
                  <br />
                  del vivero
                </h2>
              </Reveal>
            </div>
            <ul className="md:col-span-8 grid grid-cols-2 gap-4 md:gap-5">
              {LAMINAS.map((l, i) => (
                <li key={l.src}>
                  <Reveal delay={i * 70} className="h-full">
                    <figure>
                      <div className="relative aspect-[4/5] overflow-hidden" style={{ backgroundColor: C.card }}>
                        <Image
                          src={`${IMG}/${l.src}.webp`}
                          alt={l.alt}
                          fill
                          sizes="(min-width:768px) 33vw, 50vw"
                          className="object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                        Lámina {['II', 'III', 'IV', 'V'][i]} · {l.pie}
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
          <Reveal delay={100}>
            <figure className="mt-10 grid md:grid-cols-[1.2fr_0.8fr] gap-5 items-stretch">
              <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden" style={{ backgroundColor: C.card }}>
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada del vivero con banderines, carretilla y clientes atendiéndose"
                  fill
                  sizes="(min-width:768px) 60vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden" style={{ backgroundColor: C.card }}>
                <Image
                  src={`${IMG}/flor.webp`}
                  alt="Flor púrpura en detalle dentro del vivero"
                  fill
                  sizes="(min-width:768px) 30vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} md:col-span-2 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Láminas VI y VII · la entrada con sus banderines y una flor en detalle
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── El registro: catálogo de nativas ──────────────── */}
      <section id="catalogo" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.deep, color: '#EAE4D3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10">
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0] max-w-2xl`}>
              Ruil, queule, pitao:
              <br />
              su catálogo de nativas
            </h2>
            <p className={`${mono.className} text-xs max-w-xs md:text-right leading-relaxed`} style={{ color: 'rgba(234,228,211,0.6)' }}>
              De su propio catálogo publicado: producen para reforestar y para recuperar especies escasas.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 border-t" style={{ borderColor: 'rgba(234,228,211,0.25)' }}>
            {NATIVAS.map((n, i) => (
              <li key={n.latin} className="flex items-baseline gap-4 py-3.5 border-b" style={{ borderColor: 'rgba(234,228,211,0.18)' }}>
                <span className={`${mono.className} w-9 shrink-0 text-[11px]`} style={{ color: 'rgba(234,228,211,0.65)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={`${displayIt.className} italic text-xl md:text-2xl`}>{n.latin}</span>
                <span className="ml-auto shrink-0 text-sm font-bold uppercase tracking-[0.14em]" style={{ color: '#A9CBA0' }}>
                  {n.comun}
                </span>
              </li>
            ))}
          </ul>
          <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(234,228,211,0.55)' }}>
            …y decenas más, del alerce al ulmo. Pregunta por la especie que buscas.
          </p>
        </div>
      </section>

      {/* ── Del vivero al territorio ───────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] mb-6`}>
              Del vivero
              <br />
              al territorio
            </h2>
            <p className="text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Además de la venta de plantas, trabajan con municipalidades, universidades y empresas de la zona centro sur. Asesoría profesional con diplomado en diseño del paisaje.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="divide-y" style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
              {SERVICIOS.map((s, i) => (
                <li key={s} className="py-5 flex gap-5 items-baseline" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-sm`} style={{ color: C.leaf }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className={`${display.className} text-xl md:text-2xl font-semibold leading-tight`}>{s}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ───────────────────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-10">
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0]`}>
              4.8 de 5
              <br />
              en 93 visitas
            </h2>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-xs underline underline-offset-4 tap-44`} style={{ color: C.leaf }}>
              Leerlas todas en Google
            </a>
          </div>
          <ul className="grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <li key={r.who}>
                <Reveal delay={i * 80} className="h-full">
                  <blockquote className="h-full border p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <p className={`${displayIt.className} italic text-lg leading-snug flex-1`}>«{r.quote}»</p>
                    <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      ★★★★★ {r.who}
                    </footer>
                  </blockquote>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La visita ─────────────────────────────────────── */}
      <section id="visita" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] mb-6`}>
              A 7 km de Talca,
              <br />
              rumbo a San Clemente
            </h2>
            <p className="text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              <strong className="text-[#1E2B21]">{BIZ.address}</strong>, {BIZ.city}.
            </p>
            <ul className={`${mono.className} text-sm space-y-1.5 mt-5 mb-7`}>
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex justify-between max-w-sm gap-6" style={{ color: C.muted }}>
                  <span>{h.dia}</span>
                  <span className="text-[#1E2B21] font-bold text-right">{h.hora}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row gap-3">
              <WaButton>Consultar por WhatsApp</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-7 py-2.5 rounded-full font-semibold text-[15px] border transition-colors hover:bg-[#1E2B21] hover:text-[#F3EDDF] tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir ruta en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border-2 min-h-[300px] h-full" style={{ borderColor: C.ink, backgroundColor: C.card }}>
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

      {/* ── Footer ────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.deep, color: '#EAE4D3' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-1 flex items-center gap-2`}>
              <Hoja className="w-5 h-5" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(234,228,211,0.6)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(234,228,211,0.6)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#EAE4D3' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#EAE4D3' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
