import type { Metadata } from 'next'
import { Epilogue, Work_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Epilogue({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})
const body = Work_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] })

const C = {
  paper: '#F4EFE4',
  soft: '#E9E1CE',
  card: '#FBF8F0',
  forest: '#2E4A3C',
  deep: '#1D2F26',
  mustard: '#D9A441',
  mustardSoft: '#F0DBA8',
  wood: '#8C6239',
  ink: '#22271F',
  muted: '#68705F',
  line: 'rgba(34,39,31,0.14)',
}

export const metadata: Metadata = {
  title: 'Brutal Curicó — Gimnasio en Yungay 1065, Curicó',
  description:
    'Gimnasio en pleno centro de Curicó: pesas libres, zona funcional, máquinas y clases. Escríbenos por WhatsApp y ven a entrenar.',
  robots: { index: false, follow: false },
}

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
  { value: `${BIZ.reviews}`, label: 'reseñas en Google', note: 'Dato real de su ficha' },
  { value: 'Yungay 1065', label: 'en pleno centro de Curicó', note: 'A pasos de todo' },
  { value: 'Directa', label: 'atención del propio equipo', note: 'Sin call center' },
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
      style={{ color: light ? C.mustardSoft : C.wood }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

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
          over: 'dark',
          bar: 'rgba(244,239,228,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.forest,
          btnInk: '#F4EFE4',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Sala de entrenamiento de Brutal Curicó: racks, barras y zona funcional"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(29,47,38,0.45) 0%, rgba(29,47,38,0.10) 38%, rgba(29,47,38,0.82) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(244,239,228,0.94)', color: C.deep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.wood} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Gimnasio · Yungay 1065 · Curicó</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.02em] uppercase text-[clamp(2.7rem,10vw,6rem)] mb-6`}
              style={{ color: '#F4EFE4' }}
            >
              Acá se entrena
              <br />
              <span style={{ color: C.mustard }}>en serio</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,239,228,0.88)' }}>
              Pesas libres, zona funcional, máquinas y clases en pleno
              centro de Curicó. Todo lo que necesitas para entrenar,
              en un solo piso.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.mustard, color: '#241A08' }}
              >
                Agendar clase de prueba
              </a>
              <a
                href="#el-gym"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(244,239,228,0.55)', color: '#F4EFE4' }}
              >
                Conocer el gym
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(244,239,228,0.22)', backgroundColor: 'rgba(29,47,38,0.5)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(244,239,228,0.78)' }}>
            <span>Yungay 1065, Curicó</span>
            <span>{BIZ.reviews} reseñas</span>
            <span>{BIZ.instagramHandle}</span>
            <span className="hidden md:inline" style={{ color: C.mustardSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Bento: el gym ── */}
      <section id="el-gym" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
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
              <img
                src={`${IMG}/detalle3.webp`}
                alt="Zona funcional de Brutal Curicó con saco de boxeo y kettlebells"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                style={{ backgroundColor: 'rgba(29,47,38,0.88)', color: '#F4EFE4' }}
              >
                Zona funcional y boxeo
              </figcaption>
            </figure>
          </Reveal>

          {/* mini-cards de servicios */}
          {SERVICE_CARDS.slice(0, 2).map((s, i) => (
            <Reveal key={s.name} delay={80 + i * 90} className="md:col-span-2">
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

          {/* tarjeta foto mediana */}
          <Reveal delay={60} className="md:col-span-2">
            <figure className="group relative rounded-3xl overflow-hidden h-full min-h-[200px]" style={{ boxShadow: '0 2px 8px rgba(29,47,38,0.08)' }}>
              <img
                src={`${IMG}/detalle1.webp`}
                alt="Barra cargada en plataforma de levantamiento"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs font-bold px-3.5 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(29,47,38,0.88)', color: '#F4EFE4' }}
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
        </div>

        {/* fila de métricas */}
        <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mt-4 md:mt-5">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 90}>
              <div
                className="rounded-3xl p-5 md:p-6 h-full"
                style={{ backgroundColor: C.forest }}
              >
                <p className={`${display.className} font-extrabold text-3xl md:text-4xl leading-none mb-2`} style={{ color: C.mustard }}>
                  {m.value}
                </p>
                <p className="text-sm font-medium" style={{ color: 'rgba(244,239,228,0.92)' }}>
                  {m.label}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] mt-1.5" style={{ color: 'rgba(244,239,228,0.55)' }}>
                  {m.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="el-negocio" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
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
                <img
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de Brutal Curicó desde la calle Yungay"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <figcaption
                  className={`${display.className} absolute bottom-4 left-4 text-xs md:text-sm font-bold px-4 py-2 rounded-full`}
                  style={{ backgroundColor: 'rgba(244,239,228,0.92)', color: C.deep }}
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
                  className="text-sm font-semibold underline underline-offset-4 decoration-2"
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
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl p-5 md:p-6 h-full flex items-center justify-between gap-4 transition-transform active:scale-[0.99]"
                style={{ backgroundColor: C.mustard }}
              >
                <div>
                  <h3 className={`${display.className} font-bold text-xl mb-1`} style={{ color: '#241A08' }}>
                    Síguelos en Instagram
                  </h3>
                  <p className="text-sm font-medium" style={{ color: 'rgba(36,26,8,0.72)' }}>
                    {BIZ.instagramHandle} — entrenamientos y vida del gym
                  </p>
                </div>
                <span className={`${display.className} text-2xl font-extrabold transition-transform group-hover:translate-x-1`} style={{ color: '#241A08' }} aria-hidden="true">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Planes de referencia ── */}
      <section id="planes" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
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
                  className={`${display.className} text-center font-bold text-sm px-5 py-3 rounded-full transition-transform active:scale-95`}
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
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
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
                className={`${display.className} font-bold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.mustard, color: '#241A08' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10`}
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
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.mustard, color: '#241A08' }}
            >
              Agendar clase de prueba
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F4EFE4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,239,228,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{BIZ.instagramHandle}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,239,228,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(244,239,228,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Servicios,
            precios, horarios y fotos son de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
