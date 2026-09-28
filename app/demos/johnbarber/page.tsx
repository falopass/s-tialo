import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  WA_LINK_BARBA,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  cream: '#FDF6EC',
  creamSoft: '#F4EADA',
  green: '#257459',
  greenDeep: '#16493A',
  amber: '#E8A33D',
  ink: '#20261F',
  muted: 'rgba(32,38,31,0.68)',
  line: 'rgba(32,38,31,0.18)',
  lineLight: 'rgba(253,246,236,0.3)',
  creamDim: 'rgba(253,246,236,0.78)',
  creamFaint: 'rgba(253,246,236,0.74)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = {
  title: 'JohnBarber — Barbería en Pencahue',
  description:
    'Barbería en Brisas de Pencahue, Pencahue. Corte clásico, fade, arreglo de barba y afeitado con toalla caliente. Agenda por WhatsApp.',
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
    src: `${IMG}/detalle2.webp`,
    alt: 'Herramientas de barbería ordenadas sobre el mesón de madera: tijeras, navaja, máquinas y peinetas',
    num: '01',
    tag: 'El de siempre',
    name: 'Corte clásico y fade',
    desc: 'Tijera y máquina, con contornos terminados a navaja. Sales ordenado para la semana, sin apuro.',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Calienta toallas, brocha, espuma y navaja listos para el afeitado',
    num: '02',
    tag: 'Ritual de casa',
    name: 'Afeitado con toalla caliente',
    desc: 'Toalla tibia, espuma batida a mano y navaja. El afeitado de antes, con la calma que se merece.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'La barbería JohnBarber en Brisas de Pencahue, lista para atender',
    num: '03',
    tag: 'Perfil prolijo',
    name: 'Arreglo de barba',
    desc: 'Perfilado, rebaje de volumen y puntas a navaja, con aceite para cerrar. La barba queda donde tiene que quedar.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Silla de barbero y mesón de atención de JohnBarber, con vista a la calle',
    num: '04',
    tag: 'Para los chicos',
    name: 'Corte para niños',
    desc: 'Los más chicos también tienen su silla: paciencia, buena onda y salida a tiempo.',
  },
]

const PRECIOS = [
  { name: 'Corte clásico', desc: 'Tijera y máquina, contornos a navaja', price: 'desde $8.000' },
  { name: 'Fade / degradado', desc: 'Degradado a máquina, terminación fina', price: 'desde $10.000' },
  { name: 'Afeitado con toalla caliente', desc: 'Espuma, toalla tibia y navaja', price: 'desde $8.000' },
  { name: 'Arreglo de barba', desc: 'Perfilado y rebaje de volumen', price: 'desde $6.000' },
  { name: 'Corte niños (hasta 12 años)', desc: 'Con paciencia y a su ritmo', price: 'desde $6.000' },
  { name: 'Corte + barba', desc: 'El servicio completo', price: 'desde $12.000' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 – 20:00' },
  { days: 'Sábado', time: '10:00 – 19:00' },
  { days: 'Domingo', time: 'Con hora agendada' },
]

const STATS = [
  { value: `${BIZ.googleReviews} reseñas`, label: 'en Google Maps' },
  { value: `${BIZ.instagramFollowers} seguidores`, label: 'en Instagram' },
  { value: 'Atención directa', label: 'con quien te corta' },
]

function Label({ children, light = false, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-extrabold ${className}`}
      style={{ color: light ? C.amber : C.green }}
    >
      {children}
    </p>
  )
}

function SectionHead({ num, title, note }: { num: string; title: string; note?: string }) {
  return (
    <Reveal>
      <div className="border-t-2 pt-4 md:pt-5 mb-10 md:mb-14" style={{ borderColor: C.ink }}>
        <div className="flex items-baseline justify-between gap-6 mb-6 md:mb-8">
          <Label>
            <span style={{ color: C.ink }}>N°{num}</span> — {title}
          </Label>
          {note && (
            <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
              {note}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function JohnBarberPage() {
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
          bar: 'rgba(253,246,236,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.green,
          btnInk: C.cream,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de la barbería JohnBarber: sillas de cuero, mesón de madera y vista a la calle de Pencahue"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(22,73,58,0.75) 0%, rgba(22,73,58,0.5) 40%, rgba(22,73,58,0.92) 100%)',
          }}
        />
        <div className="absolute top-20 md:top-24 left-5 md:left-8">
          <Reveal>
            <Label light>Barbería — Pencahue, Región del Maule</Label>
          </Reveal>
        </div>
        <div className="hidden sm:block absolute top-20 md:top-24 right-5 md:right-8">
          <Reveal>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 transition-all hover:-translate-y-0.5 hover:shadow-lg ${focusRing}`}
              style={{ backgroundColor: 'rgba(253,246,236,0.95)', color: C.green }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke={C.green} strokeWidth="1.8" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill={C.green} stroke="none" />
              </svg>
              @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
            </a>
          </Reveal>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-44 pb-10 md:pb-14">
          <Reveal>
            <h1
              className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.5rem,8.5vw,5.4rem)] mb-7`}
              style={{ color: C.cream }}
            >
              Corte prolijo, barba fina
              <br />y <em className="italic font-medium" style={{ color: C.amber }}>conversación de barrio</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(253,246,236,0.88)' }}>
              La barbería de Brisas de Pencahue: llegas, te sientas y
              conversas con quien te corta. Agenda tu hora por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 md:mb-14">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} font-extrabold uppercase tracking-[0.08em] text-xs md:text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                style={{ backgroundColor: C.amber, color: C.ink }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${body.className} font-extrabold uppercase tracking-[0.08em] text-xs md:text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing}`}
                style={{ borderColor: 'rgba(253,246,236,0.6)', color: C.cream }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t pt-5" style={{ borderColor: C.lineLight }}>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: C.creamFaint }}>Ubicación</p>
                <p className="text-sm font-bold" style={{ color: C.cream }}>Pencahue · Maule</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: C.creamFaint }}>Dirección</p>
                <p className="text-sm font-bold" style={{ color: C.cream }}>Brisas de Pencahue</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: C.creamFaint }}>Reputación</p>
                <p className="text-sm font-bold" style={{ color: C.cream }}>{BIZ.googleReviews} reseñas en Google</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: C.creamFaint }}>Agenda</p>
                <p className="text-sm font-bold" style={{ color: C.cream }}>{BIZ.phoneDisplay}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja índice ── */}
      <section style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 border-x border-b" style={{ borderColor: C.line }}>
            {['Corte clásico y fade', 'Afeitado con toalla caliente', 'Arreglo de barba', 'Corte para niños'].map((s, i) => (
              <li
                key={s}
                className="px-4 md:px-5 py-3.5 text-[11px] uppercase tracking-[0.16em] font-extrabold border-l first:border-l-0 border-t md:border-t-0 [&:nth-child(-n+2)]:border-t-0"
                style={{ borderColor: C.line, color: C.muted }}
              >
                <span style={{ color: C.green }}>0{i + 1}</span> · {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
          <SectionHead num="01" title="Servicios" note="lista de muestra" />
          <Reveal>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
                De la tijera
                <br />
                <span style={{ color: C.green }}>a la toalla caliente</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Esta es una muestra de los servicios: al publicar van los
                servicios y precios reales de la barbería.
              </p>
            </div>
          </Reveal>
          <div className="border" style={{ borderColor: C.ink, backgroundColor: C.line }}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px">
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.name} delay={i * 80} className="h-full">
                  <article className="h-full flex flex-col" style={{ backgroundColor: C.cream }}>
                    <div className="relative aspect-[4/3] overflow-hidden border-b" style={{ borderColor: C.line }}>
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5 md:p-6 flex flex-col flex-1">
                      <div className="flex items-baseline justify-between gap-3 mb-4">
                        <span className={`${display.className} italic text-lg`} style={{ color: C.amber }}>
                          {s.num}
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.18em] font-extrabold" style={{ color: C.green }}>
                          {s.tag}
                        </span>
                      </div>
                      <h3 className={`${display.className} font-semibold text-xl md:text-[22px] leading-tight mb-2`} style={{ color: C.ink }}>
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
          </div>
        </div>
      </section>

      {/* ── La barbería ── */}
      <section id="barberia" className="scroll-mt-20 border-t" style={{ backgroundColor: C.creamSoft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead num="02" title="La barbería" note="Brisas de Pencahue" />
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
            <Reveal>
              <figure className="border" style={{ borderColor: C.ink, backgroundColor: C.cream }}>
                <div className="relative aspect-[4/3] overflow-hidden border-b" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/detalle1.webp`}
                    alt="La barbería JohnBarber en Brisas de Pencahue, Región del Maule"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-extrabold" style={{ color: C.muted }}>
                  Fig. 01 — La barbería, Brisas de Pencahue
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
                En Pencahue,
                <br />
                <span style={{ color: C.green }}>cara a cara</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                {BIZ.name} atiende en Brisas de Pencahue, en una barbería
                de barrio sin intermediarios ni pantalla de turnos: llegas,
                te sientas y conversas con quien te corta.
              </p>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                La clientela crece por el boca a boca y por Instagram,
                donde ya suma{' '}
                <strong className="font-bold" style={{ color: C.ink }}>{BIZ.instagramFollowers} seguidores</strong>{' '}
                que siguen su trabajo.
              </p>
              <div className="grid grid-cols-3 border-y mb-8" style={{ borderColor: C.line }}>
                {STATS.map((s, i) => (
                  <div
                    key={s.label}
                    className={`py-4 ${i ? 'border-l pl-4' : ''} pr-2`}
                    style={{ borderColor: C.line }}
                  >
                    <p className={`${display.className} font-semibold text-lg md:text-2xl leading-tight mb-1`} style={{ color: C.ink }}>
                      {s.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-[0.16em] font-bold" style={{ color: C.muted }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-extrabold uppercase tracking-[0.08em] text-xs px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                  style={{ backgroundColor: C.green, color: C.cream }}
                >
                  Ver Instagram →
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-extrabold uppercase tracking-[0.08em] text-xs px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing}`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Agendar hora
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="border-t-2 pt-4 md:pt-5 mb-10 md:mb-14" style={{ borderColor: C.cream }}>
              <div className="flex items-baseline justify-between gap-6">
                <Label light>
                  <span style={{ color: C.cream }}>N°03</span> — Precios de referencia
                </Label>
                <span
                  className="hidden sm:inline-block text-[10px] uppercase tracking-[0.16em] font-extrabold px-3 py-1"
                  style={{ backgroundColor: C.amber, color: C.ink }}
                >
                  Valores de muestra
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: C.cream }}>
                La carta
                <br />
                <span style={{ color: C.amber }}>de precios</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(253,246,236,0.78)' }}>
                Los valores de esta lista son{' '}
                <strong className="font-bold" style={{ color: C.cream }}>de muestra</strong>,
                para mostrar cómo se vería la carta. Al publicar van los
                valores reales de la barbería.
              </p>
              <a
                href={WA_LINK_BARBA}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing}`}
                style={{ color: C.amber, textDecorationColor: 'rgba(232,163,61,0.4)' }}
              >
                Consultar valor exacto por WhatsApp →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <div className="border" style={{ borderColor: C.lineLight }}>
                <div
                  className="grid grid-cols-[1fr_auto] gap-4 px-5 md:px-7 py-3.5 border-b"
                  style={{ borderColor: C.lineLight, backgroundColor: 'rgba(253,246,236,0.08)' }}
                >
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold" style={{ color: C.creamFaint }}>
                    Servicio / Detalle
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-extrabold text-right" style={{ color: C.creamFaint }}>
                    Precio*
                  </span>
                </div>
                <ul>
                  {PRECIOS.map((p) => (
                    <li
                      key={p.name}
                      className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 px-5 md:px-7 py-4 border-b last:border-b-0"
                      style={{ borderColor: 'rgba(253,246,236,0.14)' }}
                    >
                      <div>
                        <p className="text-sm md:text-base font-bold" style={{ color: C.cream }}>
                          {p.name}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: C.creamFaint }}>
                          {p.desc}
                        </p>
                      </div>
                      <span className={`${display.className} text-base md:text-lg font-semibold self-center`} style={{ color: C.amber }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="px-5 md:px-7 py-3 text-[10px] uppercase tracking-[0.14em] font-bold" style={{ color: C.creamFaint }}>
                  * Precios de muestra — se confirman por WhatsApp
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Agenda y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <SectionHead num="04" title="Agenda y ubicación" note="respuesta por WhatsApp" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <Reveal>
              <div className="border h-full flex flex-col" style={{ borderColor: C.ink }}>
                <div className="px-6 md:px-8 py-8 md:py-10 border-b" style={{ borderColor: C.line, backgroundColor: C.greenDeep }}>
                  <Label className="mb-4" light>WhatsApp directo</Label>
                  <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-[1.08] mb-3`} style={{ color: C.cream }}>
                    La silla está lista.
                    <br />
                    Agenda tu hora.
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed mb-7 max-w-sm" style={{ color: 'rgba(253,246,236,0.85)' }}>
                    Escríbenos con el día que te acomoda y te confirmamos
                    la hora más cercana.
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} inline-block font-extrabold uppercase tracking-[0.08em] text-xs md:text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing}`}
                    style={{ backgroundColor: C.amber, color: C.ink }}
                  >
                    Escribir a JohnBarber
                  </a>
                  <p className="text-xs mt-4" style={{ color: 'rgba(253,246,236,0.7)' }}>
                    {BIZ.phoneDisplay} · @{BIZ.instagram}
                  </p>
                </div>
                <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold mb-2" style={{ color: C.green }}>
                    Dirección
                  </p>
                  <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    <strong className="font-bold">{BIZ.address}</strong>
                    <br />
                    <span style={{ color: C.muted }}>{BIZ.city}, {BIZ.region}, Chile</span>
                  </address>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing}`}
                    style={{ color: C.green, textDecorationColor: 'rgba(42,127,98,0.35)' }}
                  >
                    Cómo llegar →
                  </a>
                </div>
                <div className="px-6 md:px-8 py-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3" style={{ color: C.green }}>
                    Horario
                  </p>
                  <ul className="space-y-2 mb-4">
                    {HORAS.map((h) => (
                      <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                        <span className="font-bold" style={{ color: C.ink }}>{h.days}</span>
                        <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
                        <span style={{ color: C.muted }}>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
                    Horario referencial: al publicar van los horarios
                    reales de la barbería.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.creamSoft }}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full flex-1 min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-extrabold" style={{ borderColor: C.line, color: C.muted }}>
                  3550000 Pencahue · Región del Maule
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t-2" style={{ backgroundColor: C.cream, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto pl-5 pr-[4.5rem] md:px-8 pt-8 pb-20 md:pb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-8 mb-5">
            <div>
              <p className={`${display.className} font-semibold text-2xl md:text-3xl mb-1`} style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`transition-opacity hover:opacity-60 ${focusRing}`} style={{ color: C.ink }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t pt-4" style={{ borderColor: C.line }}>
            <p className="text-xs leading-relaxed" style={{ color: C.muted }}>
              Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing}`} style={{ color: C.ink }}>
                Sitiazo
              </a>
              : textos, precios, horarios y fotos de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 ${focusRing}`} style={{ color: C.green }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
