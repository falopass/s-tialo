import type { Metadata } from 'next'
import Image from 'next/image'
import { Libre_Franklin, Source_Serif_4 } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = Libre_Franklin({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})
const body = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const C = {
  paper: '#F5EFE6',
  paperSoft: '#EEE5D7',
  sage: '#E6E9DB',
  card: '#FBF7EF',
  vino: '#6B2737',
  vinoDeep: '#441722',
  oro: '#B98B4E',
  oroSoft: '#D8BC8F',
  hoja: '#4F6748',
  hojaDeep: '#3F5238',
  tinta: '#2C1B20',
  muted: '#695847',
  line: 'rgba(44,27,32,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = {
  title: 'DamianStyle — Barbería en Pelarco',
  description:
    'Barbería en Villa Altos del Bosque, Pelarco. Corte, afeitado con toalla caliente y arreglo de barba con atención directa. Agenda por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La barbería', href: '#barberia' },
  { label: 'Precios', href: '#precios' },
  { label: 'Agenda', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Barbero terminando un fade con máquina en la silla de DamianStyle',
    tag: 'el clásico',
    name: 'Corte clásico y fade',
    desc: 'Tijera y máquina, con terminación a navaja en los contornos. Sales ordenado para la semana, sin apuro.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Afeitado tradicional con toalla caliente y navaja libre',
    tag: 'ritual de casa',
    name: 'Afeitado con toalla caliente',
    desc: 'Toalla tibia, espuma batida a mano y navaja libre. El servicio de antes, hecho con calma.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Perfilado de barba con navaja y aceite en DamianStyle',
    tag: 'perfil prolijo',
    name: 'Arreglo de barba',
    desc: 'Perfilado, rebaje de volumen y puntas a navaja, con aceite para cerrar. La barba queda donde tiene que quedar.',
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Interior de la barbería con sillas de cuero y plantas',
    tag: 'para la familia',
    name: 'Corte para niños',
    desc: 'Los chicos de la villa también tienen su silla. Paciencia, buena conversación y salida a tiempo.',
  },
]

const PRECIOS = [
  { name: 'Corte clásico', price: 'desde $8.000' },
  { name: 'Corte fade / degradado', price: 'desde $10.000' },
  { name: 'Afeitado con toalla caliente', price: 'desde $8.000' },
  { name: 'Arreglo de barba', price: 'desde $6.000' },
  { name: 'Corte niños (hasta 12 años)', price: 'desde $6.000' },
  { name: 'Corte + barba completo', price: 'desde $12.000' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 – 20:00' },
  { days: 'Sábado', time: '10:00 – 19:00' },
  { days: 'Domingo', time: 'Con hora agendada' },
]

const TESTIMONIALS = [
  {
    text: 'Llegué sin hora un sábado y me atendió igual. El fade quedó parejo y la conversación, mejor.',
    author: 'Vecino de Villa Altos del Bosque',
  },
  {
    text: 'Primera vez que me afeitan con toalla caliente. Se nota el cariño al oficio, como barbería de antes.',
    author: 'Cliente de Pelarco centro',
  },
  {
    text: 'Le corté el pelo a mi hijo de 7 años y salió contento y prolijo. Cero susto, pura paciencia.',
    author: 'Mamá de la villa',
  },
]

function Sprig({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21.5 C12 15 12 8.5 12 3" />
      <path d="M12 17.5 C8.2 16.2 6 13.4 5.4 9.4 C9.3 10.4 11.4 13 12 17.5 Z" />
      <path d="M12 12.5 C15.8 11.2 18 8.4 18.6 4.4 C14.7 5.4 12.6 8 12 12.5 Z" />
      <path d="M12 8 C9.4 6.9 8 5 7.6 2.4 C10.2 3.2 11.5 5 12 8 Z" />
    </svg>
  )
}

function Leaf({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z" />
      <path d="M7.5 16.5 C10.5 12.5 13.5 9.5 16.5 6.5" />
    </svg>
  )
}

function Hills({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 72"
      preserveAspectRatio="none"
      className={`block w-full h-[44px] md:h-[64px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M0 72 L0 40 C240 4 480 -6 720 22 C960 50 1200 46 1440 12 L1440 72 Z" fill={fill} />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.oroSoft : C.hoja }}
    >
      <Sprig className="w-[17px] h-[17px]" />
      {children}
    </p>
  )
}

export default function DamianStylePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.tinta }}
    >
      {/* fondo oscuro del hero bajo el nav transparente (el wrapper no ocupa alto) */}
      <div style={{ backgroundColor: C.vinoDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(245,239,230,0.94)',
            ink: C.tinta,
            line: C.line,
            btnBg: C.vino,
            btnInk: '#F5EFE6',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.vinoDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de la barbería DamianStyle: sillas de cuero, plantas y luz cálida"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(44,23,32,0.7) 0%, rgba(44,23,32,0.55) 35%, rgba(44,23,32,0.92) 100%)',
          }}
        />
        {/* hojas decorativas */}
        <Sprig className="absolute top-24 left-6 md:left-12 w-[64px] md:w-[96px] opacity-40" color={C.oroSoft} />
        <Leaf className="absolute top-32 right-8 md:right-16 w-[56px] md:w-[84px] opacity-35 rotate-12" color={C.oroSoft} />
        {/* sello Instagram */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${focusRing}`}
              style={{ backgroundColor: 'rgba(245,239,230,0.95)', color: C.vino }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.vino} strokeWidth="1.8" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill={C.vino} stroke="none" />
              </svg>
              @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-24 pt-40">
          <Reveal>
            <Eyebrow light>Barbería · Pelarco · Villa Altos del Bosque</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.04] tracking-[-0.01em] text-[clamp(2.35rem,9vw,5.2rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Corte fino, toalla caliente
              <br />y <em className={`${body.className} italic font-medium`} style={{ color: C.oroSoft }}>buena conversación</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(245,239,230,0.88)' }}>
              En {BIZ.address}, Pelarco, la silla está siempre lista:
              atención directa con su barbero, sin esperas eternas ni
              protocolo de salón grande. Agenda tu hora por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.oro, color: C.vinoDeep }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(245,239,230,0.55)', color: C.paper }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative" style={{ marginTop: '2rem' }}>
          <Hills fill={C.paper} />
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.paper }}>
        <Leaf className="absolute -top-2 right-[12%] w-[120px] md:w-[170px] opacity-[0.07] rotate-[24deg]" color={C.hoja} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
          <Reveal>
            <Eyebrow>Servicios</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.tinta }}>
                De la tijera
                <br />
                <span style={{ color: C.vino }}>a la toalla caliente</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Esto es una muestra de los servicios: al publicar van los
                servicios y precios reales de la barbería.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90} className={i % 2 ? 'md:translate-y-10' : ''}>
                <article
                  className="group overflow-hidden h-full border"
                  style={{
                    backgroundColor: C.card,
                    borderColor: C.line,
                    borderRadius: '10rem 10rem 1.75rem 1.75rem',
                    boxShadow: '0 2px 5px rgba(44,27,32,0.05)',
                  }}
                >
                  <div
                    className="relative overflow-hidden aspect-[4/3]"
                    style={{ borderRadius: '9rem 9rem 0 0' }}
                  >
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      loading="eager"
                      sizes="(min-width: 640px) 45vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${display.className} absolute top-5 left-1/2 -translate-x-1/2 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap`}
                      style={{ backgroundColor: 'rgba(230,233,219,0.95)', color: C.hojaDeep }}
                    >
                      {s.tag}
                    </span>
                  </div>
                  <div className="p-6 md:p-8 text-center">
                    <Sprig className="w-[22px] h-[22px] mx-auto mb-3" color={C.hoja} />
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-2`} style={{ color: C.tinta }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-md mx-auto" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre la barbería ── */}
      <section id="barberia" className="scroll-mt-20" style={{ backgroundColor: C.sage }}>
        <Hills fill={C.sage} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div
                  className="relative overflow-hidden border aspect-[4/3]"
                  style={{
                    borderRadius: '12rem 12rem 2rem 2rem',
                    borderColor: 'rgba(79,103,72,0.35)',
                    boxShadow: '0 18px 40px rgba(44,27,32,0.14)',
                  }}
                >
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Fachada de la barbería DamianStyle en una calle arbolada de Pelarco"
                    fill
                    loading="eager"
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <Leaf className="absolute -bottom-5 -left-4 w-[84px] opacity-60 -rotate-[18deg]" color={C.hoja} />
                <Sprig className="absolute -top-4 right-0 w-[72px] opacity-50 rotate-[14deg]" color={C.hoja} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>La barbería</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.tinta }}>
                En Pelarco,
                <br />
                <span style={{ color: C.vino }}>cara a cara</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                DamianStyle atiende en Villa Altos del Bosque, en una casa
                de la villa convertida en barbería: llegas, te sientas y
                conversas con quien te corta. Sin intermediarios, sin
                pantalla de turnos.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                La clientela crece por el boca a boca y por Instagram, donde
                ya suma <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.instagramFollowers} seguidores</strong> que
                siguen los cortes de la semana.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                  style={{ backgroundColor: C.vino, color: C.paper }}
                >
                  Ver Instagram →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                  style={{ borderColor: 'rgba(44,27,32,0.3)', color: C.tinta }}
                >
                  Agendar hora
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.paper }}>
        <Sprig className="absolute top-16 left-[4%] w-[110px] opacity-[0.06] -rotate-[20deg]" color={C.hoja} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.tinta }}>
                Lo que se comenta en la villa
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                {BIZ.name} aún no acumula reseñas en su ficha de Google —
                su reputación corre por el boca a boca de Pelarco. Estos
                textos son de muestra: al publicar van las opiniones
                reales de los clientes.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing}`}
                style={{ color: C.vino, textDecorationColor: 'rgba(107,39,55,0.3)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="p-6 md:p-7 border"
                    style={{
                      backgroundColor: C.card,
                      borderColor: C.line,
                      borderRadius: i % 2 ? '1.75rem 4.5rem 1.75rem 1.75rem' : '4.5rem 1.75rem 1.75rem 1.75rem',
                    }}
                  >
                    <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.tinta }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.hoja }}>
                        {t.author} · Reseña de ejemplo
                      </span>
                      <Leaf className="w-4 h-4 shrink-0" color={C.oro} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.vinoDeep }}>
        <Hills fill={C.vinoDeep} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Precios</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.paper }}>
                La carta
                <br />
                <span style={{ color: C.oroSoft }}>de precios</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(245,239,230,0.75)' }}>
                Los valores de esta lista son <strong className="font-bold" style={{ color: C.paper }}>de muestra</strong>,
                para mostrar cómo se vería la carta. Al publicar van los
                valores reales de la barbería.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing}`}
                style={{ color: C.oroSoft, textDecorationColor: 'rgba(216,188,143,0.4)' }}
              >
                Consultar valor exacto por WhatsApp →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="relative overflow-hidden border"
                style={{
                  borderColor: 'rgba(216,188,143,0.35)',
                  backgroundColor: 'rgba(245,239,230,0.05)',
                  borderRadius: '5rem 1.75rem 1.75rem 1.75rem',
                }}
              >
                <Leaf className="absolute -top-6 right-0 w-[140px] opacity-[0.08] rotate-[30deg]" color={C.oroSoft} />
                <div
                  className="px-6 md:px-8 py-4 flex items-center justify-between gap-4"
                  style={{ backgroundColor: 'rgba(245,239,230,0.08)' }}
                >
                  <span className={`${display.className} text-xs uppercase tracking-[0.18em] font-bold`} style={{ color: C.paper }}>
                    Carta de la barbería
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.14em] font-bold px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'rgba(185,139,78,0.28)', color: C.oroSoft }}
                  >
                    valores de muestra
                  </span>
                </div>
                <ul>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline justify-between gap-4 px-6 md:px-8 py-4 border-b last:border-b-0"
                      style={{ borderColor: 'rgba(245,239,230,0.12)' }}
                    >
                      <span className="text-sm md:text-base font-medium" style={{ color: 'rgba(245,239,230,0.9)' }}>
                        {p.name}
                      </span>
                      <span className="flex-1 border-b border-dotted mx-1 translate-y-[-4px]" style={{ borderColor: 'rgba(216,188,143,0.35)' }} aria-hidden="true" />
                      <span className={`${display.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.oroSoft }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Agenda y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Agenda</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.tinta }}>
              Villa Altos del Bosque,
              <br />
              <span style={{ color: C.vino }}>calle 3, casa 24</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <Sprig className="w-4 h-4 shrink-0" color={C.hoja} />
                  <span>
                    <strong className="font-bold" style={{ color: C.tinta }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.muted }}>
              Horario referencial: al publicar van los horarios reales
              de la barbería.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.vino, color: C.paper }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                style={{ borderColor: 'rgba(44,27,32,0.3)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border min-h-[320px] h-full"
              style={{
                borderColor: C.line,
                backgroundColor: C.paperSoft,
                borderRadius: '1.75rem 6rem 1.75rem 1.75rem',
              }}
            >
              <iframe
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

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.vinoDeep }}>
        <Image
          src={`${IMG}/detalle2.webp`}
          alt=""
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <Sprig className="absolute bottom-10 left-[8%] w-[90px] opacity-[0.16] -rotate-[16deg]" color={C.oroSoft} />
        <Leaf className="absolute top-10 right-[10%] w-[110px] opacity-[0.14] rotate-[22deg]" color={C.oroSoft} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Sprig className="w-[34px] h-[34px] mx-auto mb-5" color={C.oroSoft} />
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.paper }}>
              La silla está lista.
              <br />
              <span style={{ color: C.oroSoft }}>Agenda tu hora</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,239,230,0.78)' }}>
              Escríbenos por WhatsApp con el día que te acomoda y te
              confirmamos la hora más cercana. Atención directa, en la
              villa.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing}`}
              style={{ backgroundColor: C.oro, color: C.vinoDeep }}
            >
              Escribir a DamianStyle
            </a>
            <p className="text-xs mt-5" style={{ color: 'rgba(245,239,230,0.8)' }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.vinoDeep, color: C.paper }}>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,230,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24">
            <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-3`}>
              <Sprig className="w-5 h-5" color={C.oroSoft} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed mb-2" style={{ color: 'rgba(245,239,230,0.8)' }}>
              {BIZ.address} · {BIZ.city}
            </address>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,239,230,0.8)' }}>
              Sitio de ejemplo de Sitiazo: dirección, WhatsApp e Instagram son
              reales; servicios, precios, horarios y fotos son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
