import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TARIFAS, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la casa del jardín». La casa de la ficha es
 * verde, con jardín de hortensias — así que la página se mira por las
 * ventanas: cada foto va en un marco de ventana con partidor, el verde
 * de la casa lleva la voz y el rosa hortensia marca solo las flores.
 * Bitter es el letrero de la entrada; Source Sans 3, la conversación;
 * IBM Plex Mono, las tarifas reales que la señora Gloria publica.
 */
const C = {
  paper: '#FBFAF7',
  panel: '#FFFFFF',
  ink: '#23382C',
  muted: '#5B6B5E',
  verde: '#3F7052',
  verdeDeep: '#2C5039',
  verdeSoft: '#E4EDE7',
  rosa: '#B45A82',
  rosaSoft: '#F4E7EE',
  line: 'rgba(63,112,82,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanasvillaverde',
  title: 'Cabañas Villa Verde — Cabañas en Pelluhue, a pasos de la playa',
  description:
    'Cabañas para 4, 5 y 6 personas en Arturo Prat 330, Pelluhue. Nota 4,8 en Google con 41 reseñas. Reserva directa con la señora Gloria.',
  image: '/demos/cabanasvillaverde/hero.webp',
})

const NAV_LINKS = [
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'La casa', href: '#lacasa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

const REVIEWS: { quote: string; author: string; meta: string; reply?: string }[] = [
  {
    quote:
      'Lugar muy limpio, bien equipado, un poco pequeño, pero funcional. Excelente ubicación y muy buena voluntad y amabilidad por parte de los encargados.',
    author: 'Isidora Lanzarini',
    meta: 'Reseña de Google · hace 8 meses',
    reply:
      'Agradecemos su comentario y nos alegramos de que haya tenido una buena experiencia en nuestras cabañas.',
  },
  {
    quote:
      'Excelente lugar muy acojedor y tranquilo la señora un amor de persona lo recomiendo 100%',
    author: 'Jaime Cruces',
    meta: 'Reseña de Google · hace 5 meses',
    reply:
      'Nos alegramos mucho de que haya tenido una grata estancia en nuestras cabañas. Agradecemos su comentario.',
  },
  {
    quote:
      'Excelente lugar, cabañas muy limpias, bien equipadas y acogedoras. La señora Gloria es un amor de persona, muy amable y de confianza. Buena ubicación a pasos de la playa, minimarket y verdureria. Muy recomendable.',
    author: 'Brayan Bravo',
    meta: 'Reseña de Google · hace 3 años',
    reply:
      'Gracias por su comentario, nos alegramos mucho de que haya tenido una grata estadía en nuestras cabañas.',
  },
]

/** Marco de ventana con partidor: el motivo gráfico del demo. */
function Ventana({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  panes = true,
  className = '',
}: {
  src: string
  alt: string
  ratio?: string
  panes?: boolean
  className?: string
}) {
  return (
    <div
      className={`rounded-md p-[10px] shadow-[0_18px_50px_-24px_rgba(44,80,57,0.45)] ${className}`}
      style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
    >
      <div className={`relative overflow-hidden ${ratio}`} style={{ backgroundColor: C.verdeSoft }}>
        <Image src={`${IMG}/${src}.webp`} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        {panes && (
          <>
            <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[6px] bg-white/95" aria-hidden="true" />
            <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[6px] bg-white/95" aria-hidden="true" />
          </>
        )}
      </div>
    </div>
  )
}

/** Icono hortensia: cuatro pétalos + corazón, solo como marca. */
function Hortensia({ size = 14, color = C.rosa }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill={color} aria-hidden="true">
      <circle cx="5" cy="5" r="3.2" />
      <circle cx="11" cy="5" r="3.2" />
      <circle cx="5" cy="11" r="3.2" />
      <circle cx="11" cy="11" r="3.2" />
      <circle cx="8" cy="8" r="1.8" fill="#FBFAF7" />
    </svg>
  )
}

function Sello({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase`}
      style={{ color: C.rosa }}
    >
      <Hortensia />
      {children}
    </span>
  )
}

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

export default function CabanasVillaVerdePage() {
  return (
    <div
      className={`${body.className} cvv min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .cvv a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(251,250,247,0.95)',
          ink: C.verdeDeep,
          line: C.line,
          btnBg: C.verde,
          btnInk: '#FBFAF7',
        }}
      />

      {/* ── Hero: la ventana al jardín ── */}
      <section id="inicio" className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative">
              <Ventana
                src="hero"
                alt="Cabañas Villa Verde: la casa verde con su jardín de hortensias en Pelluhue"
                ratio="aspect-[4/3]"
              />
              <span
                className="absolute -bottom-4 -right-3 rounded-full p-2.5 shadow-md"
                style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
              >
                <Hortensia size={26} />
              </span>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <Sello>{`${BIZ.city} · Región del Maule`}</Sello>
            </Reveal>
            <Reveal delay={110}>
              <h1 className={`${display.className} font-semibold text-[clamp(2.6rem,9vw,4.6rem)] leading-[1.02] mt-4 mb-5`} style={{ color: C.verdeDeep }}>
                Cabañas<br />
                <span className="italic font-normal">Villa Verde</span>
              </h1>
            </Reveal>
            <Reveal delay={220}>
              <p className="text-lg md:text-xl leading-relaxed max-w-lg mb-4" style={{ color: C.muted }}>
                La casa verde del jardín de hortensias, a pasos de la playa
                de {BIZ.city}. Te recibe {BIZ.host}, como cuentan sus 41 reseñas.
              </p>
            </Reveal>
            <Reveal delay={280}>
              <div className="flex items-center gap-3 mb-7">
                <Stars value={5} color={C.verde} className="w-[15px] h-[15px]" />
                <span className={`${mono.className} text-sm font-semibold`} style={{ color: C.verdeDeep }}>
                  4,8 · {BIZ.reviews} reseñas
                </span>
                <span className={`${mono.className} text-sm font-semibold`} style={{ color: C.rosa }}>
                  · desde {TARIFAS[0].precio} la noche
                </span>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                  style={{ backgroundColor: C.verde, color: '#FBFAF7' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#tarifas"
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-semibold tap-44 border transition-colors"
                  style={{ borderColor: C.line, color: C.verdeDeep }}
                >
                  Ver tarifas
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta de ficha ── */}
      <section style={{ backgroundColor: C.verde }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
            <Reveal>
              <p className={`${display.className} text-3xl md:text-4xl leading-tight mb-1`} style={{ color: '#FBFAF7' }}>4,8</p>
              <div className="mb-1"><Stars value={5} color="#FBFAF7" className="w-[13px] h-[13px]" /></div>
              <p className="text-sm" style={{ color: 'rgba(251,250,247,0.72)' }}>{BIZ.reviews} reseñas en Google</p>
            </Reveal>
            <Reveal delay={90}>
              <p className={`${display.className} text-2xl md:text-3xl leading-tight mb-1`} style={{ color: '#FBFAF7' }}>Arturo Prat 330</p>
              <p className="text-sm" style={{ color: 'rgba(251,250,247,0.72)' }}>{BIZ.city}, a pasos de la playa</p>
            </Reveal>
            <Reveal delay={180}>
              <p className={`${display.className} text-2xl md:text-3xl leading-tight mb-1`} style={{ color: '#FBFAF7' }}>4 · 5 · 6</p>
              <p className="text-sm" style={{ color: 'rgba(251,250,247,0.72)' }}>personas por cabaña</p>
            </Reveal>
            <Reveal delay={270}>
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- sello real del negocio, ya optimizado */}
                <img src={`${IMG}/sernatur.webp`} alt="Sello Registro Sernatur" className="h-14 w-auto bg-white rounded" />
                <p className="text-sm leading-snug" style={{ color: 'rgba(251,250,247,0.85)' }}>
                  Registro Sernatur<br />
                  <span style={{ color: 'rgba(251,250,247,0.6)' }}>según su sitio oficial</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Tarifas ── */}
      <section id="tarifas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <Reveal>
          <Sello>Las tarifas de la casa</Sello>
          <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.04] mt-3 mb-3`} style={{ color: C.verdeDeep }}>
            Lo que la señora Gloria <span className="italic font-normal">publica</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-10" style={{ color: C.muted }}>
            Precio por noche y por cabaña, según capacidad — tal como aparece
            en su sitio oficial. Confirma el valor vigente por WhatsApp.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TARIFAS.map((t, i) => (
            <Reveal key={t.cap} delay={i * 110}>
              <div className="h-full rounded-md border p-6 md:p-7 flex flex-col" style={{ backgroundColor: C.panel, borderColor: C.line }}>
                <div className="flex items-start justify-between gap-3 mb-5">
                  <p className={`${display.className} text-2xl leading-tight`} style={{ color: C.verdeDeep }}>
                    Cabaña para {t.cap}
                  </p>
                  <span className="flex gap-0.5 mt-1.5 shrink-0" aria-label={`${t.cap} personas`}>
                    {Array.from({ length: t.cap }).map((_, p) => (
                      <span key={p} className="w-[7px] h-[7px] rounded-full" style={{ backgroundColor: C.rosa }} aria-hidden="true" />
                    ))}
                  </span>
                </div>
                <p className={`${mono.className} text-4xl md:text-[42px] font-bold tracking-tight leading-none mb-1`} style={{ color: C.verde }}>
                  {t.precio}
                </p>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-6`} style={{ color: C.muted }}>
                  por noche · la cabaña completa
                </p>
                <a
                  href={`https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(`Hola Gloria, quiero consultar por la cabaña para ${t.cap} personas de Villa Verde, Pelluhue`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tap-44 border transition-colors"
                  style={{ borderColor: C.verde, color: C.verdeDeep }}
                >
                  Consultar esta cabaña
                </a>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
            Tarifas publicadas en {BIZ.site} — pueden variar por temporada
          </p>
        </Reveal>
      </section>

      {/* ── La casa por sus ventanas ── */}
      <section id="lacasa" className="scroll-mt-20" style={{ backgroundColor: C.verdeSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Sello>La casa por sus ventanas</Sello>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.04] mt-3 mb-10`} style={{ color: C.verdeDeep }}>
              Todo lo que hay <span className="italic font-normal">detrás del vidrio</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {([
              { src: 'comedor', alt: 'Comedor de la cabaña con mesa de madera', nota: 'El comedor' },
              { src: 'cocina', alt: 'Cocina equipada de la cabaña', nota: 'La cocina' },
              { src: 'dormitorio-1', alt: 'Dormitorio principal de la cabaña', nota: 'Dormitorio' },
              { src: 'dormitorio-2', alt: 'Segundo dormitorio con camas', nota: 'Para los niños' },
              { src: 'dormitorio-3', alt: 'Tercer dormitorio de la cabaña', nota: 'Otra pieza' },
              { src: 'interior', alt: 'Interior de la cabaña Villa Verde', nota: 'Por dentro' },
            ] as { src: string; alt: string; nota: string }[]).map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <Ventana src={f.src} alt={f.alt} />
                <p className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {f.nota}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8">
            <Reveal>
              <Ventana
                src="vista"
                alt="Vista del estero de Pelluhue al fondo del jardín"
                ratio="aspect-[16/9]"
                panes={false}
              />
              <p className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                El estero, a unas cuadras
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Ventana
                src="estero"
                alt="El estero de Pelluhue con sus botes"
                ratio="aspect-[16/9]"
                panes={false}
              />
              <p className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                Donde el río se junta con el mar
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Quien te recibe ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-5 gap-10 items-center">
          <Reveal className="md:col-span-3">
            <Sello>Quien te recibe</Sello>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.04] mt-3 mb-5`} style={{ color: C.verdeDeep }}>
              {BIZ.host}
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-6" style={{ color: C.muted }}>
              Su nombre aparece solo en las reseñas: «la señora Gloria es un
              amor de persona», «muy amable y de confianza». Ella atiende el
              WhatsApp, abre la puerta y responde cada comentario en Google.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: C.verde, color: '#FBFAF7' }}
              >
                Escribirle a Gloria
              </a>
              <a
                href={`mailto:${BIZ.email}`}
                className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tap-44 border transition-colors"
                style={{ borderColor: C.line, color: C.verdeDeep }}
              >
                {BIZ.email}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="md:col-span-2">
            <div className="rounded-md p-7 md:p-8 rotate-1" style={{ backgroundColor: C.rosaSoft, border: `1px solid ${C.line}` }}>
              <Hortensia size={20} />
              <p className={`${display.className} italic text-xl md:text-2xl leading-snug mt-4`} style={{ color: C.verdeDeep }}>
                «La señora un amor de persona, lo recomiendo 100%»
              </p>
              <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Jaime Cruces · reseña de Google
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
          <Reveal>
            <Sello>Las reseñas, con respuesta</Sello>
            <div className="flex flex-wrap items-end justify-between gap-4 mt-3 mb-10">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.04]`} style={{ color: C.verdeDeep }}>
                Y los dueños <span className="italic font-normal">contestan</span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={5} color={C.verde} className="w-[16px] h-[16px]" />
                <span className={`${mono.className} text-sm font-semibold`} style={{ color: C.verdeDeep }}>
                  4,8 · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 110}>
                <div className="h-full flex flex-col gap-3">
                  <blockquote
                    className="flex-1 rounded-md border p-6 flex flex-col gap-4"
                    style={{ backgroundColor: C.panel, borderColor: C.line }}
                  >
                    <Stars value={5} color={C.verde} className="w-[13px] h-[13px]" />
                    <p className="text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                      “{r.quote}”
                    </p>
                    <footer>
                      <p className="font-semibold text-sm">{r.author}</p>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-0.5`} style={{ color: C.muted }}>
                        {r.meta}
                      </p>
                    </footer>
                  </blockquote>
                  {r.reply && (
                    <div className="rounded-md p-4 text-[13px] leading-relaxed ml-6" style={{ backgroundColor: C.verdeSoft, color: C.verdeDeep }}>
                      <p className={`${mono.className} text-[9px] uppercase tracking-[0.16em] mb-1`} style={{ color: C.muted }}>
                        Respuesta del propietario
                      </p>
                      “{r.reply}”
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.verdeSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <Sello>Cómo llegar</Sello>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.04] mt-3 mb-6`} style={{ color: C.verdeDeep }}>
                {BIZ.address}, <span className="italic font-normal">{BIZ.city}</span>
              </h2>
              <ul className="space-y-4 text-[15px] leading-relaxed mb-8">
                {[
                  'A pasos de la playa de Pelluhue — la ubicación que repiten las reseñas.',
                  'Al lado de la plaza, con minimarket y verdulería a la mano.',
                  'Frente al camino principal del balneario: se llega sin desvíos.',
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <Hortensia size={12} />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                  style={{ backgroundColor: C.verde, color: '#FBFAF7' }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-md overflow-hidden border p-[10px]" style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[320px] md:h-[400px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2">
              <Hortensia size={16} color={C.rosaSoft} />
              <span className={`${mono.className} text-[11px] font-semibold tracking-[0.22em] uppercase`} style={{ color: C.rosaSoft }}>
                La puerta del jardín está abierta
              </span>
            </span>
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.02] mt-4 mb-4`} style={{ color: '#FBFAF7' }}>
              Reserva con <span className="italic font-normal">Gloria</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: 'rgba(251,250,247,0.75)' }}>
              Un WhatsApp basta: ella misma confirma disponibilidad,
              tarifa de temporada y la hora de llegada.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold tap-44 transition-transform hover:scale-[1.03] active:scale-95"
                style={{ backgroundColor: '#FBFAF7', color: C.verdeDeep }}
              >
                {BIZ.phoneDisplay} — WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center rounded-full px-8 py-3 text-base font-semibold tap-44 border transition-colors"
                style={{ borderColor: 'rgba(251,250,247,0.45)', color: '#FBFAF7' }}
              >
                Llamar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.paper }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-6"
          style={{ borderColor: C.line }}
        >
          <div className="flex items-start gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio, ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-10 h-10 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold text-xl mb-1`} style={{ color: C.verdeDeep }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a href={`mailto:${BIZ.email}`} className="underline underline-offset-2 tap-44">
                  {BIZ.email}
                </a>
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-ink transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.muted }}>
            Fotos, logo, sello Sernatur, reseñas, nota, dirección, teléfono,
            correo y tarifas son reales de su ficha de Google y de su sitio
            oficial {BIZ.site}; las descripciones de ambiente son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
