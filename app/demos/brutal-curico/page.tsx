import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F4EFE4',
  soft: '#E9E1CE',
  card: '#FBF8F0',
  forest: '#2E4A3C',
  deep: '#1D2F26',
  mustard: '#D9A441',
  mustardSoft: '#F0DBA8',
  wood: '#8C6239',
  woodDeep: '#74522C',
  ink: '#22271F',
  muted: '#68705F',
  line: 'rgba(34,39,31,0.14)',
}

const FOCUS =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A441]'

export const metadata: Metadata = demoMetadata({
  slug: 'brutal-curico',
  title: 'Brutal Curicó — Gimnasio en Yungay 1065, Curicó',
  description: 'Gimnasio en pleno centro de Curicó: pesas libres, zona funcional, máquinas y clases. Escríbenos por WhatsApp y ven a entrenar.',
  image: '/demos/brutal-curico/hero.webp',
})

const NAV_LINKS = [
  { label: 'El gym', href: '#el-gym' },
  { label: 'El negocio', href: '#el-negocio' },
  { label: 'Planes', href: '#planes' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICE_CARDS = [
  {
    icon: 'dumbbell',
    name: 'Pesas libres y racks',
    desc: 'Barras, discos y racks para sentadilla, press y peso muerto. Lo esencial, sin filas eternas.',
  },
  {
    icon: 'machine',
    name: 'Máquinas guiadas',
    desc: 'Circuito completo de máquinas para trabajar cada grupo muscular con técnica segura.',
  },
  {
    icon: 'class',
    name: 'Clases dirigidas',
    desc: 'Sesiones en grupo con instructor: funcional, fuerza y acondicionamiento. Horarios de muestra.',
  },
  {
    icon: 'locker',
    name: 'Lockers y camarines',
    desc: 'Camarines con duchas y lockers para dejar tus cosas mientras entrenas tranquilo.',
  },
]

const METRICS = [
  { value: '6', label: 'años en el centro de Curicó', note: 'cifra de muestra' },
  { value: '+800', label: 'socios entrenando', note: 'cifra de muestra' },
  { value: `${BIZ.reviews}`, label: 'reseñas en Google', note: 'dato real de su ficha' },
]

const PLANS = [
  {
    name: 'Pase del día',
    price: '$5.000',
    unit: 'por visita',
    features: ['Acceso a toda la sala', 'Ideal para probar el gym', 'Sin compromiso'],
  },
  {
    name: 'Mensual',
    price: '$25.000',
    unit: 'por mes',
    highlight: true,
    features: [
      'Acceso ilimitado a la sala',
      'Clases dirigidas incluidas',
      'Lockers y camarines',
    ],
  },
  {
    name: 'Trimestral',
    price: '$65.000',
    unit: 'por 3 meses',
    features: [
      'Todo lo del plan mensual',
      'Mejor valor por mes',
      'Congela hasta 1 semana',
    ],
  },
]

function Icon({ kind, color }: { kind: string; color: string }) {
  const p = {
    fill: 'none',
    stroke: color,
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  } as const
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true" {...p}>
      {kind === 'dumbbell' && (
        <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />
      )}
      {kind === 'machine' && (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12h8M12 8v8" />
        </>
      )}
      {kind === 'class' && (
        <>
          <circle cx="12" cy="7" r="3" />
          <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
        </>
      )}
      {kind === 'locker' && (
        <>
          <rect x="5" y="3" width="14" height="18" rx="1.5" />
          <path d="M12 3v18M8.5 9h1M14.5 9h1M8.5 13h1M14.5 13h1" />
        </>
      )}
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.mustardSoft : C.woodDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

const CAPTION_STYLE = {
  backgroundColor: 'rgba(29,47,38,0.88)',
  color: '#F4EFE4',
} as const

export default function BrutalCuricoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,239,228,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F4EFE4',
        }}
      />

      {/* ── Bento de apertura: titular + foto grande + métricas ── */}
      <section id="inicio" className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-4 md:pb-6">
        <div className="grid md:grid-cols-12 gap-4 md:gap-5">
          {/* tarjeta titular */}
          <Reveal className="md:col-span-5 md:row-span-2">
            <article
              className="rounded-3xl p-6 md:p-9 h-full flex flex-col justify-between gap-8 min-h-[320px]"
              style={{ backgroundColor: C.forest }}
            >
              <div>
                <Eyebrow light>Gimnasio · Yungay 1065 · Curicó</Eyebrow>
                <h1
                  className={`${display.className} font-extrabold leading-[1.0] tracking-[-0.02em] uppercase text-[clamp(2.4rem,6vw,4rem)] mb-5`}
                  style={{ color: '#F4EFE4' }}
                >
                  Acá se entrena
                  <br />
                  <span style={{ color: C.mustard }}>en serio</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(244,239,228,0.85)' }}>
                  Pesas libres, zona funcional, máquinas y clases en un
                  solo piso, en pleno centro de Curicó. Ven a conocerlo:
                  la primera clase se agenda por WhatsApp.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_CLASE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${FOCUS} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]`}
                  style={{ backgroundColor: C.mustard, color: '#241A08' }}
                >
                  Agendar clase de prueba
                </a>
                <a
                  href="#el-gym"
                  className={`${display.className} ${FOCUS} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                  style={{ borderColor: 'rgba(244,239,228,0.55)', color: '#F4EFE4' }}
                >
                  Conocer el gym
                </a>
              </div>
            </article>
          </Reveal>

          {/* tarjeta foto grande */}
          <Reveal delay={90} className="md:col-span-7 md:row-span-2">
            <figure
              className="group relative rounded-3xl overflow-hidden h-full min-h-[300px] md:min-h-[480px]"
              style={{ boxShadow: '0 2px 8px rgba(29,47,38,0.08)' }}
            >
              <Image
                src={`${IMG}/hero.webp`}
                alt="Sala de entrenamiento de Brutal Curicó: racks, barras y zona funcional"
                fill
                priority
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(29,47,38,0.28) 0%, rgba(29,47,38,0) 40%, rgba(29,47,38,0.55) 100%)',
                }}
                aria-hidden="true"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} absolute top-4 right-4 flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-[0.97]`}
                style={{ backgroundColor: 'rgba(244,239,228,0.94)', color: C.deep }}
              >
                <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.wood} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                  <circle cx="12" cy="10" r="2.4" />
                </svg>
                {BIZ.reviews} reseñas en Google
              </a>
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                style={CAPTION_STYLE}
              >
                La sala, tal cual es
              </figcaption>
            </figure>
          </Reveal>

          {/* fila de métricas */}
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={140 + i * 80} className="md:col-span-4">
              <div
                className="rounded-3xl border p-5 md:p-6 h-full"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <p className={`${display.className} font-extrabold text-3xl md:text-4xl leading-none mb-2`} style={{ color: C.forest }}>
                  {m.value}
                </p>
                <p className="text-sm font-medium" style={{ color: C.ink }}>
                  {m.label}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] mt-1.5" style={{ color: C.muted }}>
                  {m.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Bento: el gym ── */}
      <section id="el-gym" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>El gym por dentro</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em]`} style={{ color: C.forest }}>
              Todo lo que necesitas,
              <br />
              en un solo piso
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Equipamiento y espacios de muestra: al publicar va el
              detalle real de las máquinas y las clases del gym.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-6 gap-4 md:gap-5">
          {/* tarjeta foto grande */}
          <Reveal className="md:col-span-4 md:row-span-2">
            <figure className="group relative rounded-3xl overflow-hidden h-full min-h-[300px] md:min-h-0" style={{ boxShadow: '0 2px 8px rgba(29,47,38,0.08)' }}>
              <Image
                src={`${IMG}/detalle3.webp`}
                alt="Zona funcional de Brutal Curicó con saco de boxeo y kettlebells"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                style={CAPTION_STYLE}
              >
                Zona funcional y boxeo
              </figcaption>
            </figure>
          </Reveal>

          {/* mini-cards de servicios */}
          {SERVICE_CARDS.slice(0, 2).map((s, i) => (
            <Reveal key={s.name} delay={80 + i * 90} className="md:col-span-2">
              <article
                className="rounded-3xl border p-5 md:p-6 h-full flex flex-col justify-between gap-4 transition-colors"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <span
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.soft, color: C.forest }}
                >
                  <Icon kind={s.icon} color={C.forest} />
                </span>
                <div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl mb-1.5`} style={{ color: C.forest }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* tarjeta foto mediana */}
          <Reveal delay={60} className="md:col-span-2">
            <figure className="group relative rounded-3xl overflow-hidden h-full min-h-[200px]" style={{ boxShadow: '0 2px 8px rgba(29,47,38,0.08)' }}>
              <Image
                src={`${IMG}/detalle1.webp`}
                alt="Barra cargada en plataforma de levantamiento"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs font-bold px-3.5 py-1.5 rounded-full`}
                style={CAPTION_STYLE}
              >
                Plataformas de levantamiento
              </figcaption>
            </figure>
          </Reveal>

          {SERVICE_CARDS.slice(2).map((s, i) => (
            <Reveal key={s.name} delay={120 + i * 90} className="md:col-span-2">
              <article
                className="rounded-3xl border p-5 md:p-6 h-full flex flex-col justify-between gap-4"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <span
                  className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.soft, color: C.forest }}
                >
                  <Icon kind={s.icon} color={C.forest} />
                </span>
                <div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl mb-1.5`} style={{ color: C.forest }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}

          {/* tarjeta foto horizontal de cierre */}
          <Reveal delay={80} className="md:col-span-6">
            <figure className="group relative rounded-3xl overflow-hidden h-full min-h-[220px]" style={{ boxShadow: '0 2px 8px rgba(29,47,38,0.08)' }}>
              <Image
                src={`${IMG}/detalle2.webp`}
                alt="Mancuernas ordenadas en el rack de la sala de pesas"
                fill
                sizes="(min-width: 768px) calc(100vw - 64px), calc(100vw - 40px)"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                style={CAPTION_STYLE}
              >
                Mancuernas de todos los pesos
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="el-negocio" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>El negocio</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-10 md:mb-12`} style={{ color: C.forest }}>
              Un gym de barrio,
              <br />
              con comunidad de verdad
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-6 gap-4 md:gap-5">
            <Reveal className="md:col-span-4 md:row-span-2">
              <figure className="rounded-3xl overflow-hidden h-full min-h-[280px] relative" style={{ boxShadow: '0 2px 8px rgba(29,47,38,0.08)' }}>
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Brutal Curicó desde la calle Yungay"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                  style={CAPTION_STYLE}
                >
                  La fachada sobre calle Yungay
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={90} className="md:col-span-2">
              <article className="rounded-3xl border p-5 md:p-6 h-full" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <h3 className={`${display.className} font-bold text-xl mb-2.5`} style={{ color: C.forest }}>
                  Atención directa
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  Acá te atiende el mismo equipo que entrena contigo.
                  Consultas, inscripciones y dudas se resuelven por
                  WhatsApp o en el mesón, sin intermediarios.
                </p>
              </article>
            </Reveal>
            <Reveal delay={160} className="md:col-span-2">
              <article className="rounded-3xl p-5 md:p-6 h-full flex flex-col justify-between gap-4" style={{ backgroundColor: C.deep }}>
                <div>
                  <p className={`${display.className} font-extrabold text-4xl md:text-5xl leading-none mb-2`} style={{ color: C.mustard }}>
                    {BIZ.reviews}
                  </p>
                  <p className="text-sm font-medium mb-3" style={{ color: 'rgba(244,239,228,0.92)' }}>
                    reseñas en Google Maps
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,239,228,0.72)' }}>
                    Los socios destacan el ambiente, el equipamiento y
                    la atención. Al publicar van las reseñas reales
                    destacadas.
                  </p>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} text-sm font-semibold underline underline-offset-4 decoration-2 hover:text-white transition-colors`}
                  style={{ color: C.mustardSoft, textDecorationColor: 'rgba(217,164,65,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </article>
            </Reveal>
            <Reveal delay={120} className="md:col-span-3">
              <article className="rounded-3xl border p-5 md:p-6 h-full" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <h3 className={`${display.className} font-bold text-xl mb-2.5`} style={{ color: C.forest }}>
                  En pleno centro
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  Sobre calle Yungay, a pasos del centro de Curicó:
                  entrenas antes o después del trabajo sin desviarte.
                </p>
              </article>
            </Reveal>
            <Reveal delay={200} className="md:col-span-3">
              <article
                className="rounded-3xl p-5 md:p-6 h-full flex items-center justify-between gap-4"
                style={{ backgroundColor: C.mustard }}
              >
                <div>
                  <h3 className={`${display.className} font-bold text-xl mb-1`} style={{ color: '#241A08' }}>
                    Síguenos en Instagram
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'rgba(36,26,8,0.72)' }}>
                    {BIZ.instagramHandle} — entrenamientos y vida del gym
                  </p>
                </div>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${BIZ.instagramHandle} en Instagram`}
                  className={`${display.className} ${FOCUS} shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-xl font-extrabold transition-transform hover:translate-x-1`}
                  style={{ backgroundColor: '#241A08', color: C.mustard }}
                >
                  →
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Planes de referencia ── */}
      <section id="planes" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Planes</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em]`} style={{ color: C.forest }}>
              Membresías
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Precios de muestra: al publicar van los valores y
              promociones reales del gimnasio.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
          {PLANS.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article
                className="rounded-3xl p-6 md:p-7 h-full flex flex-col border"
                style={
                  p.highlight
                    ? { backgroundColor: C.forest, borderColor: C.forest, boxShadow: '0 12px 32px rgba(29,47,38,0.22)' }
                    : { backgroundColor: C.card, borderColor: C.line }
                }
              >
                {p.highlight && (
                  <span
                    className={`${display.className} self-start text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full mb-4`}
                    style={{ backgroundColor: C.mustard, color: '#241A08' }}
                  >
                    El más elegido
                  </span>
                )}
                <h3
                  className={`${display.className} font-bold text-xl mb-1`}
                  style={{ color: p.highlight ? '#F4EFE4' : C.forest }}
                >
                  {p.name}
                </h3>
                <p className="mb-5">
                  <span
                    className={`${display.className} font-extrabold text-4xl leading-none`}
                    style={{ color: p.highlight ? C.mustard : C.ink }}
                  >
                    {p.price}
                  </span>
                  <span className="text-sm ml-2" style={{ color: p.highlight ? 'rgba(244,239,228,0.65)' : C.muted }}>
                    {p.unit}
                  </span>
                </p>
                <ul className="space-y-2.5 mb-6 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm" style={{ color: p.highlight ? 'rgba(244,239,228,0.88)' : C.muted }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: p.highlight ? C.mustard : C.wood }}
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${FOCUS} text-center font-bold text-sm px-5 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]`}
                  style={
                    p.highlight
                      ? { backgroundColor: C.mustard, color: '#241A08' }
                      : { backgroundColor: C.forest, color: '#F4EFE4' }
                  }
                >
                  Consultar por WhatsApp
                </a>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="text-xs mt-5" style={{ color: C.muted }}>
            Valores y condiciones de muestra. El gym confirma precios,
            promociones y matrícula vigentes por WhatsApp.
          </p>
        </Reveal>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Ubicación y contacto</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-6`} style={{ color: '#F4EFE4' }}>
              Yungay 1065,
              <br />
              <span style={{ color: C.mustard }}>Curicó</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(244,239,228,0.75)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(244,239,228,0.72)' }}>
              Escríbenos por WhatsApp para consultar horarios,
              membresías o agendar tu primera visita. Respondemos
              el mismo día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${FOCUS} font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]`}
                style={{ backgroundColor: C.mustard, color: '#241A08' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${FOCUS} font-bold text-sm px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(244,239,228,0.45)', color: '#F4EFE4' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: 'rgba(244,239,228,0.18)', backgroundColor: C.forest }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.forest }}>
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,6.5vw,4rem)] leading-[1.02] mb-6`} style={{ color: '#F4EFE4' }}>
              El primer entrenamiento
              <br />
              <span style={{ color: C.mustard }}>empieza hoy</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,239,228,0.78)' }}>
              Mándanos un WhatsApp y agenda una clase de prueba.
              Sin compromiso, sin letra chica.
            </p>
            <a
              href={WA_LINK_CLASE}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} ${FOCUS} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.97]`}
              style={{ backgroundColor: C.mustard, color: '#241A08' }}
            >
              Agendar clase de prueba
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="pb-20" style={{ backgroundColor: C.deep, color: '#F4EFE4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-extrabold text-xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,228,0.78)' }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-2 hover:text-white transition-colors`}>{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,239,228,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-semibold underline underline-offset-2`} style={{ color: C.mustardSoft }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: servicios, precios, horarios y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-semibold underline underline-offset-2`} style={{ color: C.mustardSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
