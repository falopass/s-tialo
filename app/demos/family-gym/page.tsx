import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { ParallaxImg } from './parallax'
import { NAV_LINKS, OpenBadge } from './chrome'
import {
  BIZ,
  WA_LINK,
  WA_LINK_VISITA,
  MAPS_URL,
  MAPS_EMBED,
  INSTAGRAM_URL,
  HOURS,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  deep: '#150826',
  plum: '#241040',
  mist: '#EFE9FA',
  // violeta oscuro: texto y links sobre fondos claros (AA en tamaño chico)
  violetDeep: '#5B21B6',
  // fondo de botones con texto blanco (≥4.5:1)
  violetBtn: '#7C3AED',
  // lila claro: números y acentos pequeños sobre fondos oscuros (≥4.5:1)
  lilac: '#C4B5FD',
  white: '#FFFFFF',
  ink: '#221533',
  muted: '#5A5168',
  line: 'rgba(34,21,51,0.14)',
}

const BTN_SOLID =
  'rounded-full transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFE9FA]'
const BTN_GHOST =
  'rounded-full border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFE9FA]'

export const metadata: Metadata = demoMetadata({
  slug: 'family-gym',
  title: 'Family Gym — Club familiar deportivo en San Clemente',
  description:
    'Club familiar deportivo en Calle 10, San Clemente: máquinas, entrenamiento personalizado y semipersonalizado. Consulta por WhatsApp.',
  image: '/demos/family-gym/hero.webp',
})

const SERVICES = [
  {
    src: `${IMG}/maquinas.webp`,
    alt: 'Socia de Family Gym entrenando en máquina de press de hombros',
    name: 'Plan semipersonalizado',
    desc: 'Rutina guiada con sistema de tickets: entrenas a tu ritmo con seguimiento del equipo del club.',
  },
  {
    src: `${IMG}/funcional.webp`,
    alt: 'Socios entrenando sobre el pasto sintético de Family Gym',
    name: 'Entrenamiento personalizado',
    desc: 'Sesiones uno a uno con evaluación inicial, pauta de alimentación, rutina y asesoría permanente.',
  },
  {
    src: `${IMG}/interior.webp`,
    alt: 'Interior de Family Gym: zona de entrenamiento funcional con cajones',
    name: 'Club para toda la familia',
    desc: 'Un espacio amplio y cómodo donde entrenan papás, mamás e hijos, desde los que recién empiezan.',
  },
]

const PLANS = [
  {
    name: 'Mensual semipersonalizado',
    price: '$29.990',
    note: '12 tickets al mes · valor promo publicado en Instagram (precio normal $35.990)',
  },
  {
    name: 'Entrenamiento personalizado',
    price: '$99.990',
    note: '12 clases · incluye evaluación inicial, pauta de alimentación, rutina y asesoría 24/7',
  },
  {
    name: 'Pase por día',
    price: 'Consultar',
    note: 'valores por día publicados en su Instagram · confirma el vigente por WhatsApp',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.lilac : C.plum }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: light ? C.lilac : C.violetBtn }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function BleedPanel({
  src,
  alt,
  eager = false,
  id,
  children,
  className = '',
}: {
  src: string
  alt: string
  eager?: boolean
  id?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <section id={id} className={`relative overflow-hidden ${className}`} style={{ backgroundColor: C.deep }}>
      <ParallaxImg src={src} alt={alt} eager={eager} className="object-cover" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(21,8,38,0.5) 0%, rgba(21,8,38,0.08) 42%, rgba(21,8,38,0.85) 100%)',
        }}
      />
      {children}
    </section>
  )
}

export default function FamilyGymPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased pb-20`}
      style={{ backgroundColor: C.deep, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(21,8,38,0.94)',
          ink: C.mist,
          line: 'rgba(239,233,250,0.16)',
          btnBg: C.violetBtn,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <BleedPanel
        id="inicio"
        src={`${IMG}/hero.webp`}
        alt="Socias de Family Gym entrenando sobre el pasto sintético del club"
        eager
        className="min-h-svh flex flex-col justify-end"
      >
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Gimnasio · San Clemente · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.04] tracking-[-0.01em] text-[clamp(2.4rem,9vw,5.4rem)] mb-6`}
              style={{ color: C.mist }}
            >
              El club donde entrena
              <br />
              <span style={{ color: C.lilac }}>toda la familia</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(239,233,250,0.88)' }}>
              Club familiar deportivo en Calle 10, San Clemente: máquinas,
              planes semipersonalizados y entrenamiento personalizado con
              acompañamiento real.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.violetBtn, color: C.white }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#planes"
                className={`${display.className} ${BTN_GHOST} text-sm md:text-base px-7 py-3.5`}
                style={{ borderColor: 'rgba(239,233,250,0.55)', color: C.mist }}
              >
                Ver planes
              </a>
              <OpenBadge />
            </div>
          </Reveal>
        </div>
        <div
          className="relative border-t"
          style={{ borderColor: 'rgba(239,233,250,0.2)', backgroundColor: 'rgba(21,8,38,0.45)', backdropFilter: 'blur(6px)' }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(239,233,250,0.78)' }}>
            <span>{BIZ.address}, {BIZ.city}</span>
            <span>@{BIZ.instagram}</span>
            <span>{HOURS.days} · {HOURS.time}</span>
            <span className="hidden md:inline" style={{ color: C.mist }}>sitio de ejemplo</span>
          </div>
        </div>
      </BleedPanel>

      {/* ── Declaración ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28" style={{ backgroundColor: C.deep }}>
        <Reveal>
          <p
            className={`${display.className} text-[clamp(1.7rem,4.6vw,3rem)] leading-[1.18] max-w-3xl`}
            style={{ color: C.mist }}
          >
            Un club familiar deportivo: aquí nadie entrena{' '}
            <span style={{ color: C.lilac }}>solo</span>.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-sm md:text-base leading-relaxed max-w-xl mt-7" style={{ color: 'rgba(239,233,250,0.7)' }}>
            Family Gym funciona como un club: entrenamientos personalizados
            y semipersonalizados, un espacio amplio y cómodo, y gente que te
            guía cuando recién empiezas.
          </p>
        </Reveal>
      </section>

      {/* ── Servicios: paneles a sangre ── */}
      <div id="servicios" className="scroll-mt-20">
        {SERVICES.map((s, i) => (
          <BleedPanel
            key={s.name}
            src={s.src}
            alt={s.alt}
            className="min-h-[82svh] md:min-h-[92svh] flex items-end"
          >
            <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-24">
              <Reveal>
                <div className="flex items-baseline gap-4 md:gap-6 mb-4">
                  <span
                    className={`${display.className} text-4xl md:text-5xl leading-none`}
                    style={{ color: C.lilac }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2
                    className={`${display.className} text-2xl md:text-4xl leading-[1.08]`}
                    style={{ color: C.mist }}
                  >
                    {s.name}
                  </h2>
                </div>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(239,233,250,0.82)' }}>
                  {s.desc}
                </p>
              </Reveal>
            </div>
          </BleedPanel>
        ))}
      </div>

      {/* ── El club ── */}
      <section id="club" className="scroll-mt-20" style={{ backgroundColor: C.mist }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>El club</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.1] mb-6`} style={{ color: C.plum }}>
              De San Clemente,
              <br />
              para San Clemente
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-5" style={{ color: C.muted }}>
              Family Gym funciona en Calle 10, en plena comuna de San
              Clemente. Es un club familiar: el ambiente es cercano, el
              espacio es amplio y cada socio entrena con un plan a su
              medida.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              En su Instagram publican los valores, las promociones del mes
              y la vida del club, incluida su tienda de ropa propia.
            </p>
            <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
              <img
                src={`${IMG}/club.webp`}
                alt="Recepción de Family Gym con el logo del club en la pared"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl border p-6 md:p-7" style={{ backgroundColor: '#FBF9FE', borderColor: C.line }}>
              <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-5" style={{ color: C.violetDeep }}>
                Datos reales de sus redes
              </p>
              <ul className="space-y-4 text-sm leading-relaxed" style={{ color: C.ink }}>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.violetBtn }} aria-hidden="true" />
                  <span>
                    <strong>{BIZ.rating} ★</strong> en Google Maps — recién
                    empieza a juntar reseñas.{' '}
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-2 transition-colors hover:text-[#241040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]" style={{ color: C.violetDeep }}>
                      Ver ficha →
                    </a>
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.violetBtn }} aria-hidden="true" />
                  <span>
                    <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-2 transition-colors hover:text-[#241040] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5B21B6]" style={{ color: C.violetDeep }}>
                      @{BIZ.instagram}
                    </a>{' '}
                    con <strong>{BIZ.instagramFollowers} seguidores</strong> en Instagram.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.violetBtn }} aria-hidden="true" />
                  <span>
                    {BIZ.address}, {BIZ.commune} — con tienda de ropa del club.
                  </span>
                </li>
              </ul>
              <p className="text-xs leading-relaxed mt-6 pt-5 border-t" style={{ color: C.muted, borderColor: C.line }}>
                Las fotos son reales de su Instagram; los textos
                descriptivos son de muestra: al publicar van los contenidos
                finales del club.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Planes ── */}
      <section id="planes" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Planes publicados</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.1]`} style={{ color: C.mist }}>
                Valores del club
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(239,233,250,0.7)' }}>
                Precios publicados por el gym en su Instagram; el valor
                vigente se confirma directo por WhatsApp.
              </p>
            </div>
          </Reveal>
          <ul className="border-t" style={{ borderColor: 'rgba(239,233,250,0.22)' }}>
            {PLANS.map((p, i) => (
              <Reveal key={p.name} delay={i * 90}>
                <li
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-6 md:py-7 border-b"
                  style={{ borderColor: 'rgba(239,233,250,0.22)' }}
                >
                  <div className="flex items-baseline gap-4 md:gap-6">
                    <span className={`${display.className} text-lg md:text-xl w-8`} style={{ color: C.lilac }} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.mist }}>
                        {p.name}
                      </h3>
                      <p className="text-sm mt-1 max-w-md" style={{ color: 'rgba(239,233,250,0.65)' }}>
                        {p.note}
                      </p>
                    </div>
                  </div>
                  <p className={`${display.className} text-2xl md:text-4xl`} style={{ color: C.mist }}>
                    {p.price}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={200}>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.violetBtn, color: C.white }}
              >
                Consultar planes por WhatsApp
              </a>
              <p className="text-xs max-w-xs leading-relaxed" style={{ color: 'rgba(239,233,250,0.6)' }}>
                Promociones y valores del mes se publican en{' '}
                @{BIZ.instagram} y se confirman directo con el club.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseña real ── */}
      <section style={{ backgroundColor: C.mist }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <div className="flex justify-center mb-5">
              <Stars value={5} color={C.violetBtn} className="w-5 h-5" />
            </div>
            <blockquote
              className={`${display.className} text-xl md:text-2xl leading-[1.3] mb-5`}
              style={{ color: C.plum }}
            >
              “Un gimnasio amplio y cómodo, con entrenadores que te guían
              cuando recién empiezas.”
            </blockquote>
            <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: C.violetDeep }}>
              Reseña publicada en Google Maps · {BIZ.rating} ★
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación y contacto a sangre ── */}
      <BleedPanel
        id="ubicacion"
        src={`${IMG}/club.webp`}
        alt="Recepción de Family Gym San Clemente"
        className="min-h-svh flex items-center"
      >
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <div
              className="rounded-2xl p-6 md:p-8 h-full"
              style={{ backgroundColor: 'rgba(36,16,64,0.78)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            >
              <Eyebrow light>Ubicación</Eyebrow>
              <h2 className={`${display.className} text-2xl md:text-4xl leading-[1.1] mb-6`} style={{ color: C.mist }}>
                Calle 10,
                <br />
                San Clemente
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(239,233,250,0.85)' }}>
                {BIZ.address}
                <br />
                {BIZ.commune}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE9FA]">{BIZ.phoneDisplay}</a>
              </address>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(239,233,250,0.65)' }}>
                {HOURS.days}, {HOURS.time}. Clase de prueba y valores por
                día: consulta directo por WhatsApp o Instagram.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_VISITA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_SOLID} text-sm px-6 py-3`}
                  style={{ backgroundColor: C.violetBtn, color: C.white }}
                >
                  Agendar visita
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} text-sm px-6 py-3`}
                  style={{ borderColor: 'rgba(239,233,250,0.5)', color: C.mist }}
                >
                  Cómo llegar →
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} text-sm px-6 py-3`}
                  style={{ borderColor: 'rgba(239,233,250,0.5)', color: C.mist }}
                >
                  @{BIZ.instagram}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden min-h-[320px] h-full shadow-2xl">
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </BleedPanel>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.mist }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 border-t" style={{ borderColor: 'rgba(239,233,250,0.14)' }}>
          <p className={`${display.className} text-lg mb-1`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(239,233,250,0.72)' }}>
              {BIZ.address} · {BIZ.city}
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE9FA]">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EFE9FA]">
                @{BIZ.instagram}
              </a>
          </address>
          <p className="text-xs leading-relaxed mt-3" style={{ color: 'rgba(239,233,250,0.6)' }}>
            Sitio de ejemplo de Sitiazo con fotos y datos reales de sus
            redes; textos de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
