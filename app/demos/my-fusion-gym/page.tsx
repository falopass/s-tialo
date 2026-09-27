import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
})
const body = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const C = {
  forest: '#1E3D2F',
  forestDeep: '#142A20',
  cream: '#F6F1E7',
  creamSoft: '#EFE7D6',
  brass: '#C8A24B',
  brassSoft: '#E6D5A8',
  charcoal: '#23211C',
  ink: '#2B2A24',
  muted: '#6E6654',
  line: 'rgba(43,42,36,0.16)',
  lineLight: 'rgba(246,241,231,0.2)',
}

export const metadata: Metadata = {
  title: 'MY Fusion Gym — Gimnasio en Curicó',
  description:
    'Gimnasio en J-514 2520, Curicó. Sala de máquinas, clases y acompañamiento directo. Agenda tu clase de prueba por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'El gimnasio', href: '#gimnasio' },
  { label: 'La casa', href: '#casa' },
  { label: 'Valores', href: '#valores' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const FICHAS = [
  {
    num: '01',
    tag: 'sala de máquinas',
    name: 'Fierro y máquinas, sin esperas',
    desc: 'Zona de peso libre y máquinas guiadas para entrenar a tu ritmo, con espacio de sobra incluso en horario peak.',
    datum: 'Equipamiento completo',
    src: `${IMG}/detalle1.webp`,
    bg: C.cream,
    ink: C.ink,
    sub: C.muted,
    accent: C.brass,
    border: C.line,
  },
  {
    num: '02',
    tag: 'clases dirigidas',
    name: 'Clases con instructor en sala',
    desc: 'Sesiones en grupo con profe al frente: funcional, fuerza y acondicionamiento, en horarios de mañana y tarde.',
    datum: 'Mañana y tarde',
    src: `${IMG}/detalle2.webp`,
    bg: C.forest,
    ink: C.cream,
    sub: 'rgba(246,241,231,0.72)',
    accent: C.brassSoft,
    border: C.lineLight,
  },
  {
    num: '03',
    tag: 'plan a medida',
    name: 'Entrenamiento personalizado',
    desc: 'Rutina armada según tu punto de partida y tu objetivo, con seguimiento directo: no quedas solo con la máquina.',
    datum: 'Seguimiento directo',
    src: `${IMG}/detalle3.webp`,
    bg: C.charcoal,
    ink: C.cream,
    sub: 'rgba(246,241,231,0.72)',
    accent: C.brassSoft,
    border: C.lineLight,
  },
  {
    num: '04',
    tag: 'la casa',
    name: 'Un gym de barrio, con nombre propio',
    desc: 'Acá te conocen por tu nombre. Ambiente cercano en pleno Curicó, donde el progreso se celebra en serio.',
    datum: 'Atención directa',
    src: `${IMG}/ambiente.webp`,
    bg: C.creamSoft,
    ink: C.ink,
    sub: C.muted,
    accent: C.brass,
    border: C.line,
  },
]

const VALORES = [
  { name: 'Plan mensual', desc: 'Acceso libre a sala y clases', price: 'por mes' },
  { name: 'Plan trimestral', desc: 'Para quienes entrenan de verdad', price: 'por trimestre' },
  { name: 'Pase diario', desc: 'Un día completo de entrenamiento', price: 'por visita' },
  { name: 'Clase de prueba', desc: 'Para conocer el gym sin compromiso', price: 'agenda por WhatsApp' },
]

const TESTIMONIOS = [
  {
    text: 'Gimnasio ordenado y con buena onda. Los profes corrigen la técnica, no solo marcan el conteo.',
    author: 'Socio de Curicó',
  },
  {
    text: 'Llevo meses viniendo y se nota la diferencia: te siguen el progreso y nunca es lo mismo dos semanas.',
    author: 'Alumna del plan trimestral',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: 'Mañana y tarde' },
  { days: 'Sábado', time: 'Horario de mañana' },
]

function Dumbbell({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 9 v6 M7 7 v10 M17 7 v10 M20 9 v6 M7 12 h10" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.brassSoft : C.forest }}
    >
      <Dumbbell className="w-[18px] h-[18px]" color={light ? C.brassSoft : C.brass} />
      {children}
    </p>
  )
}

export default function MyFusionGymPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.charcoal,
          line: C.line,
          btnBg: C.forest,
          btnInk: C.cream,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.forestDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Sala de entrenamiento de MY Fusion Gym en Curicó"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,42,32,0.55) 0%, rgba(20,42,32,0.15) 38%, rgba(20,42,32,0.88) 100%)',
          }}
        />
        {/* sello de reseñas + instagram */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8 flex flex-col items-end gap-2.5">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(246,241,231,0.95)', color: C.forestDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.brass} stroke={C.brass} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
          <Reveal delay={90}>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[11px] md:text-xs font-bold px-3.5 py-2 rounded-full"
              style={{ backgroundColor: 'rgba(20,42,32,0.65)', color: C.brassSoft, border: `1px solid ${C.lineLight}` }}
            >
              <svg viewBox="0 0 24 24" className="w-[14px] h-[14px]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="0.9" fill="currentColor" stroke="none" />
              </svg>
              {BIZ.igUser}
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Gimnasio · Curicó · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.04] text-[clamp(2.8rem,9vw,5.6rem)] mb-6`}
              style={{ color: C.cream }}
            >
              Cuerpo fuerte,
              <br />
              <em style={{ color: C.brassSoft }}>cabeza en su lugar</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(246,241,231,0.88)' }}>
              Gimnasio de barrio en J-514 2520, Curicó: sala de máquinas,
              clases con instructor y un plan que se ajusta a ti.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.brass, color: C.forestDeep }}
              >
                Agendar clase de prueba
              </a>
              <a
                href="#gimnasio"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(246,241,231,0.55)', color: C.cream }}
              >
                Ver el gimnasio
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(20,42,32,0.55)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(246,241,231,0.78)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.brass }} aria-hidden="true" />
              entrenando hoy
            </span>
            <span>{BIZ.igFollowers} seguidores en Instagram</span>
            <span className="hidden md:inline" style={{ color: C.brassSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Tarjetas apiladas: el gimnasio por dentro ── */}
      <section id="gimnasio" className="scroll-mt-20 pt-16 md:pt-24 pb-6 md:pb-10">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>El gimnasio por dentro</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.charcoal }}>
                Cuatro fichas,
                <br />
                <em style={{ color: C.forest }}>un solo compromiso</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Desliza y cada ficha se apila sobre la anterior. Los
                servicios son de muestra: al publicar va la oferta real
                del gym.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {FICHAS.map((f, i) => (
            <article
              key={f.num}
              className="sticky mb-6 md:mb-8 rounded-2xl overflow-hidden border"
              style={{
                top: `calc(84px + ${i * 26}px)`,
                zIndex: i + 1,
                backgroundColor: f.bg,
                borderColor: f.border,
                boxShadow: '0 -14px 40px rgba(20,42,32,0.22)',
              }}
            >
              <div className="grid md:grid-cols-[1.05fr_1fr] min-h-[440px] md:min-h-[460px]">
                <div className="relative min-h-[220px] md:min-h-0">
                  <img
                    src={f.src}
                    alt={`${f.name} — ${BIZ.name}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  <p className="text-[11px] uppercase tracking-[0.24em] font-bold mb-3 flex items-baseline gap-3" style={{ color: f.accent }}>
                    <span className={`${display.className} normal-case tracking-normal text-2xl leading-none`}>{f.num}</span>
                    ficha · {f.tag}
                  </p>
                  <h3 className={`${display.className} text-3xl md:text-4xl leading-[1.08] mb-4`} style={{ color: f.ink }}>
                    {f.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed mb-6 max-w-md" style={{ color: f.sub }}>
                    {f.desc}
                  </p>
                  <p className="flex items-center gap-2.5 text-sm font-bold" style={{ color: f.accent }}>
                    <Dumbbell className="w-4 h-4" />
                    {f.datum}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>La casa</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.charcoal }}>
              Un gimnasio de barrio,
              <br />
              <em style={{ color: C.forest }}>en pleno Curicó</em>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} atiende de forma directa en {BIZ.address},
              Curicó. Acumula {BIZ.reviews} reseñas en su ficha de Google
              y {BIZ.igFollowers} seguidores en Instagram. Estos textos
              son de muestra: al publicar van las reseñas reales.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2"
                style={{ color: C.forest, textDecorationColor: 'rgba(200,162,75,0.5)' }}
              >
                Ver la ficha en Google →
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2"
                style={{ color: C.forest, textDecorationColor: 'rgba(200,162,75,0.5)' }}
              >
                {BIZ.igUser} en Instagram →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            {TESTIMONIOS.map((t, i) => (
              <Reveal key={i} delay={120 + i * 110}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: '#FFFDF6', borderColor: C.line }}
                >
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.forest }}>
                      {t.author} · Reseña de ejemplo
                    </span>
                    <Dumbbell className="w-4 h-4 shrink-0" color={C.brass} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valores de referencia ── */}
      <section id="valores" className="scroll-mt-20" style={{ backgroundColor: C.forest }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Valores de referencia</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06]`} style={{ color: C.cream }}>
                Planes claros,
                <br />
                <em style={{ color: C.brassSoft }}>sin letra chica</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(246,241,231,0.72)' }}>
                Valores de muestra: al publicar van los precios reales
                que el gimnasio cobra hoy.
              </p>
            </div>
          </Reveal>
          <div className="border-t" style={{ borderColor: C.lineLight }}>
            {VALORES.map((v, i) => (
              <Reveal key={v.name} delay={i * 70}>
                <div
                  className="grid sm:grid-cols-[auto_1fr_auto] gap-x-8 gap-y-1 items-baseline py-5 border-b"
                  style={{ borderColor: C.lineLight }}
                >
                  <span className={`${display.className} text-xl md:text-2xl w-8`} style={{ color: C.brassSoft }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.cream }}>
                      {v.name}
                    </h3>
                    <p className="text-sm" style={{ color: 'rgba(246,241,231,0.66)' }}>{v.desc}</p>
                  </div>
                  <span className="text-sm md:text-base font-bold uppercase tracking-[0.14em]" style={{ color: C.brassSoft }}>
                    {v.price}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.brass, color: C.forestDeep }}
              >
                Consultar valores reales
              </a>
              <p className="text-xs" style={{ color: 'rgba(246,241,231,0.6)' }}>
                Tabla referencial — precios de muestra del demo.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.charcoal }}>
              {BIZ.address},
              <br />
              <em style={{ color: C.forest }}>Curicó</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.brass} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario referencial: al publicar van los horarios reales
              del gimnasio.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.forest, color: C.cream }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/50`}
                style={{ borderColor: C.forest, color: C.forest }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border shadow-lg h-full min-h-[320px]" style={{ borderColor: C.line }}>
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

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.forestDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid md:grid-cols-2 gap-6 items-start">
          <div>
            <p className={`${display.className} text-2xl mb-2 flex items-center gap-3`} style={{ color: C.cream }}>
              <Dumbbell className="w-5 h-5" color={C.brass} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,231,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,231,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: 'rgba(246,241,231,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Textos,
            servicios, valores, horarios y fotos son de muestra; los datos
            de contacto y reseñas son públicos.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
