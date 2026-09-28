import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, FaqList, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Identidad leída de sus fotos: cabina fucsia + wordmark amarillo oscuro.
const C = {
  base: '#FBF1EF',
  card: '#FFFFFF',
  vino: '#3E1726',
  fucsia: '#C2255D',
  fucsiaDeep: '#8E1542',
  oro: '#C9A227',
  ink: '#3A1622',
  muted: '#7A5A66',
  soft: '#F6DFE2',
  line: 'rgba(62,23,38,0.14)',
  lineLight: 'rgba(255,255,255,0.18)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cg-salon-spa',
  title: 'CG Salón Spa — Masajes, pestañas y faciales en San Clemente',
  description:
    'Spa de masajes y cosmetología en Carlos Silva Renard 906, San Clemente: masajes, lifting de pestañas, faciales, uñas y alisados. Agenda por WhatsApp, todos los días de 10:00 a 19:00.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#visita' },
]

const ICONS: Record<string, React.ReactNode> = {
  masaje: (
    <>
      <path d="M4 15c2-4 5-6 8-6s6 2 8 6" />
      <path d="M9 9c0-2 1-4 3-4s3 2 3 4" />
      <path d="M4 15h16" />
      <path d="M7 18c1.5-2 3.5-3 5-3s3.5 1 5 3" />
    </>
  ),
  pestana: (
    <>
      <path d="M3 12s2.5-4.5 9-4.5S21 12 21 12s-2.5 4.5-9 4.5S3 12 3 12Z" />
      <path d="M6 10l-1.5-2M9.5 8.5 9 6M14.5 8.5l.5-2.5M18 10l1.5-2" />
      <circle cx="12" cy="12" r="1.6" />
    </>
  ),
  facial: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9 10h.5M15 10h.5" strokeWidth="2.4" />
      <path d="M9 15c1 1 2 1.5 3 1.5s2-.5 3-1.5" />
    </>
  ),
  una: (
    <>
      <path d="M8 3v9a4 4 0 0 0 8 0V3" />
      <path d="M8 6h8" />
      <path d="M10 21c0-1.5 1-2.5 2-2.5s2 1 2 2.5" />
    </>
  ),
  pelo: (
    <>
      <path d="M6 20c0-6 1-14 6-14s6 8 6 14" />
      <path d="M12 6v14" />
      <path d="M8 12c1-1 7-1 8 0" />
    </>
  ),
  flor: (
    <>
      <circle cx="12" cy="12" r="2.4" />
      <path d="M12 4c1.6 1.6 1.6 3.6 0 5.6-1.6-2-1.6-4 0-5.6ZM12 20c-1.6-1.6-1.6-3.6 0-5.6 1.6 2 1.6 4 0 5.6ZM4 12c1.6-1.6 3.6-1.6 5.6 0-2 1.6-4 1.6-5.6 0ZM20 12c-1.6 1.6-3.6 1.6-5.6 0 2-1.6 4-1.6 5.6 0Z" />
    </>
  ),
}

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span
      className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
      style={{ backgroundColor: C.soft, color: C.fucsia }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </svg>
    </span>
  )
}

// Servicios leídos de su Instagram (@cg_salon_spa), su ficha de Maps
// y sus reseñas: masajes y masoterapia, lifting de pestañas, faciales,
// uñas, alisados, corporales reductivos y depilación.
const SERVICIOS: { icon: keyof typeof ICONS; name: string; desc: string }[] = [
  { icon: 'masaje', name: 'Masajes y masoterapia', desc: 'Descontracturantes y de relajación, a cargo de masoterapeuta con más de diez años de oficio según su propio perfil.' },
  { icon: 'pestana', name: 'Lifting y extensión de pestañas', desc: 'El servicio más fotografiado del salón: antes y después publicados en su propio Instagram.' },
  { icon: 'facial', name: 'Tratamientos faciales', desc: 'Limpieza y cuidado de la piel con cosmetología integral; resultados documentados por ellas mismas.' },
  { icon: 'una', name: 'Uñas', desc: 'Esmaltado y arreglo de uñas, con diseños que publican semana a semana.' },
  { icon: 'pelo', name: 'Alisados y cabello', desc: 'Alisado y cuidado capilar; los cambios de look también salen en su feed.' },
  { icon: 'flor', name: 'Corporales y depilación', desc: 'Tratamientos reductivos y depilación; clientas destacan la discreción del trato en sus reseñas.' },
]

// Fotos de sus propias publicaciones: sus trabajos van con antes/después.
const RESULTADOS = [
  { src: `${IMG}/pestanas.webp`, alt: 'Antes y después de lifting de pestañas realizado en CG Salón Spa', tag: 'Lifting de pestañas' },
  { src: `${IMG}/alisado.webp`, alt: 'Antes y después de alisado de cabello realizado en CG Salón Spa', tag: 'Alisado' },
  { src: `${IMG}/facial.webp`, alt: 'Antes y después de tratamiento facial realizado en CG Salón Spa', tag: 'Tratamiento facial' },
  { src: `${IMG}/corporal.webp`, alt: 'Antes y después de tratamiento corporal reductivo realizado en CG Salón Spa', tag: 'Corporal reductivo' },
]

// Reseñas reales de su ficha de Google (nota 5,0), tal como las escribieron.
const RESENAS = [
  { text: 'Excelente atención, ideal para recargar; los masajes maravillosos. No cambio el lugar.', name: 'Paulina Casanueva' },
  { text: 'Excelente lugar. Puntualidad y servicio muy profesional.', name: 'Ignacio Bustamante' },
  { text: '100 % recomendable, la atención es maravillosa y muy profesional. Soy clienta habitual.', name: 'Yamila Gajardo' },
]

const FICHA: { t: string; d: string; href?: string }[] = [
  { t: 'Dirección', d: `${BIZ.address}, ${BIZ.city}`, href: MAPS_URL },
  { t: 'WhatsApp', d: BIZ.phoneDisplay, href: WA_LINK },
  { t: 'Horario', d: 'Todos los días · 10:00 a 19:00' },
  { t: 'Instagram', d: '@cg_salon_spa', href: BIZ.instagram },
]

const FAQS = [
  {
    q: '¿Cómo agendo una hora?',
    a: 'Por WhatsApp: escribes, cuentas qué servicio buscas y te confirman día y hora. También puedes llegar directo; atienden todos los días.',
  },
  {
    q: '¿Qué servicios tienen?',
    a: 'Masajes y masoterapia, lifting de pestañas, tratamientos faciales, uñas, alisados, corporales reductivos y depilación, según publican en su Instagram y su ficha.',
  },
  {
    q: '¿Cuánto vale cada servicio?',
    a: 'Los valores se confirman al agendar por WhatsApp, según el servicio y el trabajo a realizar.',
  },
  {
    q: '¿Qué días atienden?',
    a: `Todos los días de 10:00 a 19:00, según su ficha de Google. Quedan en ${BIZ.address}, ${BIZ.city}.`,
  },
  {
    q: '¿Qué medios de pago aceptan?',
    a: 'Texto de muestra: el medio de pago se confirma al momento de agendar por WhatsApp.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold" style={{ color: C.fucsia }}>
      <span className="inline-block w-7 h-[2px] rounded-full" style={{ backgroundColor: C.fucsia }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaButton({ href, label, ghost = false }: { href: string; label: string; ghost?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block font-semibold text-sm px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44 ${ghost ? 'hover:bg-white/10' : 'hover:brightness-110'}`}
      style={
        ghost
          ? { border: '1.5px solid rgba(255,255,255,0.6)', color: '#FFF' }
          : { backgroundColor: C.fucsia, color: '#FFF' }
      }
    >
      {label}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.base, color: C.ink }}>
      <BlitzNav
        name={<span className={display.className}>CG Salón Spa</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(251,241,239,0.92)', ink: C.ink, line: C.line, btnBg: C.fucsia, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] mb-5 font-semibold" style={{ color: C.fucsia }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} text-[clamp(2.3rem,6.2vw,3.9rem)] leading-[1.04] mb-5`} style={{ color: C.vino }}>
              Masajes, pestañas y faciales que se notan
            </h1>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              En {BIZ.address}, {BIZ.city}. Agenda por WhatsApp y
              desconecta un rato: abren todos los días de 10:00 a 19:00.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <WaButton href={WA_LINK} label="Agendar por WhatsApp" />
              <a
                href="#resultados"
                className="inline-block font-semibold text-sm px-7 py-3 rounded-full border-[1.5px] transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44"
                style={{ borderColor: C.vino, color: C.vino }}
              >
                Ver resultados
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-sm" style={{ color: C.muted }}>
              <Stars value={5} color={C.oro} />
              <span>
                <strong style={{ color: C.ink }}>{BIZ.rating}</strong> en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[5/6]" style={{ boxShadow: `0 24px 60px -24px ${C.fucsia}55` }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Cabina de masajes con camilla rosada e iluminación cálida en CG Salón Spa"
                  width={1200}
                  height={1500}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -left-4 md:-left-8 bottom-6 w-32 md:w-44 rounded-2xl overflow-hidden border-4" style={{ borderColor: C.card, boxShadow: `0 16px 40px -18px ${C.vino}66` }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- recorte ya optimizado */}
                <img src={`${IMG}/pestanas.webp`} alt="Detalle de pestañas antes del lifting" className="w-full aspect-square object-cover" />
              </div>
              <div
                className="absolute -right-2 md:-right-4 top-5 rounded-2xl px-4 py-3 text-center"
                style={{ backgroundColor: C.card, boxShadow: `0 14px 34px -16px ${C.vino}55` }}
              >
                <p className={`${display.className} text-2xl leading-none`} style={{ color: C.vino }}>{BIZ.rating}</p>
                <Stars value={5} color={C.oro} className="w-3 h-3" />
                <p className="text-[10px] mt-1" style={{ color: C.muted }}>Google</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Resultados: el antes y el después ── */}
      <section id="resultados" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mb-10 md:mb-14">
            <Reveal>
              <Eyebrow>De sus propias publicaciones</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.vino }}>
                El antes y el después, contado con fotos
              </h2>
              <p className="text-base leading-relaxed" style={{ color: C.muted }}>
                En su Instagram documentan cada trabajo con la foto del antes
                y el después. Estas son de su propio perfil.
              </p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {RESULTADOS.map((r, i) => (
              <Reveal key={r.tag} delay={i * 90}>
                <figure>
                  <div className="rounded-2xl overflow-hidden aspect-square">
                    {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado en public/ */}
                    <img src={r.src} alt={r.alt} loading="lazy" className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="mt-3 text-xs md:text-sm font-semibold" style={{ color: C.vino }}>
                    {r.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios: la carta de cabina ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.3fr] gap-10 md:gap-16">
          <Reveal>
            <div className="md:sticky md:top-28">
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.vino }}>
                La carta de la cabina
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                Cosmetóloga integral y masoterapeuta: del masaje
                descontracturante al lifting de pestañas, todo en el mismo
                salón de Carlos Silva Renard.
              </p>
              <div className="rounded-2xl overflow-hidden aspect-[4/5] max-w-xs hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado */}
                <img src={`${IMG}/cabina.webp`} alt="Otra cabina rosada del salón con camilla y aro de luz" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <div>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div
                  className="flex items-start gap-4 py-5 first:pt-0 border-b last:border-0"
                  style={{ borderColor: C.line }}
                >
                  <Icon name={s.icon} />
                  <div>
                    <h3 className={`${display.className} text-lg md:text-xl leading-snug mb-1`} style={{ color: C.vino }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={SERVICIOS.length * 60}>
              <div className="pt-6">
                <WaButton href={WA_LINK} label="Preguntar por un servicio" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.vino }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold" style={{ color: C.oro }}>
                <span className="inline-block w-7 h-[2px] rounded-full" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                Lo que dicen en Google
              </p>
              <div className="flex items-end gap-3 mb-3">
                <p className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: '#FFF' }}>{BIZ.rating}</p>
                <Stars value={5} color={C.oro} className="w-4 h-4 mb-2" />
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {BIZ.reviews} reseñas y todas de cinco estrellas: el local
                completo de San Clemente con nota perfecta.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ color: C.oro, textDecorationColor: C.oro }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={120 + i * 100}>
                  <figure className="rounded-2xl p-6" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: `1px solid ${C.lineLight}` }}>
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.92)' }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: 'rgba(255,255,255,0.6)' }}>
                      {r.name} · Reseña en Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visita: ficha + mapa ── */}
      <section id="visita" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-4`} style={{ color: C.vino }}>
              En pleno San Clemente
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              A pasos de la calle principal: llegas, te reciben en la cabina
              rosada y sales renovada.
            </p>
            <dl className="space-y-0 border-y" style={{ borderColor: C.line }}>
              {FICHA.map((f) => (
                <div key={f.t} className="flex items-baseline justify-between gap-4 py-3.5 border-b last:border-0" style={{ borderColor: C.line }}>
                  <dt className="text-xs uppercase tracking-[0.16em] font-semibold shrink-0" style={{ color: C.muted }}>{f.t}</dt>
                  <dd className="text-sm md:text-base text-right" style={{ color: C.ink }}>
                    {f.href ? (
                      <a href={f.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44 hover:opacity-70 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current">
                        {f.d}
                      </a>
                    ) : (
                      f.d
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3 mt-8">
              <WaButton href={WA_LINK} label="Agendar por WhatsApp" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-sm px-7 py-3 rounded-full border-[1.5px] transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44"
                style={{ borderColor: C.vino, color: C.vino }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-10`} style={{ color: C.vino }}>
              Antes de tu primera hora
            </h2>
          </Reveal>
          <FaqList
            items={FAQS}
            colors={{ q: C.vino, a: C.muted, line: C.line, plusBg: C.fucsia, plusInk: '#FFF' }}
          />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.fucsiaDeep }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- wordmark real recortado de sus fotos */}
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="mx-auto mb-8 w-56 md:w-72 rounded-xl" />
            <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.05] mb-5`} style={{ color: '#FFF' }}>
              Tu próxima hora es un mensaje
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Escribe por WhatsApp, cuentas qué necesitas y te confirman
              día y hora. Sin formularios ni esperas.
            </p>
            <WaButton href={WA_LINK} label="Agendar por WhatsApp" />
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.vino, color: '#FFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <p className={`${display.className} text-lg mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.oro }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, fotos y reseñas son reales de sus fichas públicas; los textos de apoyo son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.oro }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
