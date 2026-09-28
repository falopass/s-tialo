import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Motif } from '../kit'
import { Reveal, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

/**
 * Paleta del demo: azul noche, arena y terracota sobre carbón.
 * Regla de formas: vidrio (glass) con radio 1.5rem para tarjetas,
 * píldora para todo lo interactivo; la terracota es la única luz.
 * La llama del kit marca las secciones: es una cocina a leña.
 */
const C = {
  coal: '#0F141C',
  night: '#1B2A41',
  sand: '#E8DCC8',
  terra: '#C1663F',
  terraSoft: '#E39A78',
  white: '#FFFFFF',
}

const GLASS =
  'rounded-[1.5rem] border border-[#E8DCC8]/12 bg-[#1B2A41]/35 backdrop-blur-md transition-colors hover:border-[#E8DCC8]/22'
const BTN_GLOW =
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 active:scale-95 shadow-[0_0_0_1px_rgba(227,154,120,0.45),0_12px_40px_-10px_rgba(193,102,63,0.75)] hover:shadow-[0_0_0_1px_rgba(227,154,120,0.7),0_16px_60px_-8px_rgba(193,102,63,0.95)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E39A78]'
const BTN_GHOST =
  'inline-flex items-center justify-center rounded-full font-semibold border border-[#E8DCC8]/30 transition-colors hover:bg-[#E8DCC8]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E39A78]'
const LINK_FOCUS =
  'rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E39A78]'
const EYEBROW = 'text-[11px] uppercase tracking-[0.28em] font-semibold'

function Eyebrow({ children, center = false }: { children: ReactNode; center?: boolean }) {
  return (
    <p
      className={`${EYEBROW} flex items-center gap-3 ${center ? 'justify-center' : ''}`}
      style={{ color: C.terraSoft }}
    >
      <Motif motif="flame" className="w-3.5 h-3.5 shrink-0" />
      <span>{children}</span>
    </p>
  )
}

export const metadata: Metadata = {
  title: 'La Picá De Los Tatas - Restaurante en Molina',
  description:
    'Restaurante en Independencia 1843, Molina: comida casera, mesa tranquila y atención directa. Reserva tu mesa por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La casa', href: '#casa' },
  { label: 'Precios', href: '#precios' },
  { label: 'Visítanos', href: '#contacto' },
]

const CARTA = [
  {
    num: '01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Bandeja de empanadas de horno recién salidas, con uslero y harina sobre el mesón de madera',
    kicker: 'Del horno',
    title: 'Empanadas y masas',
    text: 'Masa hecha en casa y horno encendido desde temprano. Para comer aquí o llevar a la once.',
  },
  {
    num: '02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Cazuela de vacuno con choclo, zapallo, papa y zanahoria en plato de greda, con pan y pebre',
    kicker: 'De la olla',
    title: 'Almuerzo casero',
    text: 'Platos de olla y de fondo, con pan y pebre en la mesa, servidos sin apuro.',
  },
  {
    num: '03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de madera con sopaipillas bajo campana, platos, vasos y ollas humeando en la cocina',
    kicker: 'Del mesón',
    title: 'Picoteo y once',
    text: 'Sopaipillas, algo para compartir y la mesa lista para quedarse conversando.',
  },
]

const VALORES = [
  { title: 'Atención directa', text: 'Te recibe la misma gente que cocina. Sin intermediarios ni apuro por desocupar la mesa.' },
  { title: 'Sabor de casa', text: 'Recetas de siempre, porciones generosas y el pan calentito que no falta.' },
  { title: 'Mesa tranquila', text: 'Un comedor luminoso para almorzar en familia o hacer una pausa en la semana.' },
]

const PRECIOS = [
  {
    title: 'Almuerzos',
    rows: ['Menú del día', 'Cazuela de vacuno', 'Plato de fondo con agregado', 'Postre casero'],
  },
  {
    title: 'Horno y mesón',
    rows: ['Empanada de pino', 'Empanada de queso', 'Sopaipillas (porción)', 'Bebida o jugo natural'],
  },
]

export default function LaPicaDeLosTatasPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.coal, color: C.sand }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* ── Barra flotante de vidrio ── */}
      <header className="fixed top-3 inset-x-3 md:top-5 z-40">
        <div className="max-w-[1100px] mx-auto flex items-center justify-between gap-4 pl-5 pr-2 py-2 rounded-full border border-[#E8DCC8]/12 bg-[#0F141C]/60 backdrop-blur-xl">
          <a
            href="#inicio"
            className={`${display.className} ${LINK_FOCUS} text-lg md:text-xl`}
            style={{ color: C.white }}
          >
            {BIZ.short}
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm" aria-label="Principal">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`transition-colors text-[#E8DCC8]/75 hover:text-white ${LINK_FOCUS}`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN_GLOW} text-sm px-5 py-2.5`}
            style={{ backgroundColor: C.terra, color: C.coal }}
          >
            Reservar
          </a>
        </div>
      </header>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex items-center justify-center overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Comedor de La Picá De Los Tatas con mesas de madera, loza de greda y la cocina a leña al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(15,20,28,0.55) 0%, rgba(15,20,28,0.82) 70%, rgba(15,20,28,0.96) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: `linear-gradient(180deg, transparent, ${C.coal})` }} aria-hidden="true" />
        <div className="relative w-full max-w-[1100px] mx-auto px-5 pt-32 pb-24 text-center">
          <Reveal>
            <p className={`${EYEBROW} flex items-center justify-center gap-4`} style={{ color: C.terraSoft }}>
              <span className="h-px w-8 md:w-12 bg-[#C1663F]/70" aria-hidden="true" />
              Restaurante en Molina
              <span className="h-px w-8 md:w-12 bg-[#C1663F]/70" aria-hidden="true" />
            </p>
            <h1
              className={`${display.className} mt-6 text-[clamp(2.6rem,8vw,5.6rem)] leading-[1.04] tracking-[-0.01em]`}
              style={{ color: C.white }}
            >
              Comida de casa,
              <br />
              <span style={{ color: C.sand }}>mesa sin apuro</span>
            </h1>
            <p className="mt-7 mx-auto max-w-[36rem] text-base md:text-lg leading-relaxed" style={{ color: 'rgba(232,220,200,0.85)' }}>
              Almuerzos caseros, horno encendido y atención de la casa en
              Independencia 1843. Llega, siéntate tranquilo y déjate atender.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_GLOW} text-base px-8 py-3 md:py-4`}
                style={{ backgroundColor: C.terra, color: C.coal }}
              >
                Reservar por WhatsApp
              </a>
              <a href="#carta" className={`${BTN_GHOST} text-base px-8 py-3 md:py-4`} style={{ color: C.sand }}>
                Ver la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <dl className={`${GLASS} mt-16 mx-auto max-w-[44rem] grid grid-cols-3 divide-x divide-[#E8DCC8]/12 py-5 hover:border-[#E8DCC8]/12`}>
              {[
                { v: String(BIZ.reviews), k: 'reseñas en Google' },
                { v: BIZ.followers, k: 'seguidores en Facebook' },
                { v: 'Molina', k: 'Región del Maule' },
              ].map((s) => (
                <div key={s.k} className="px-3">
                  <dt className="sr-only">{s.k}</dt>
                  <dd>
                    <span className={`${display.className} block text-2xl md:text-3xl`} style={{ color: C.white }}>
                      {s.v}
                    </span>
                    <span className="block mt-1 text-[11px] md:text-xs" style={{ color: 'rgba(232,220,200,0.65)' }}>{s.k}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="relative scroll-mt-24">
        <div
          className="absolute left-1/2 top-24 -translate-x-1/2 w-[70vw] h-[40vw] max-w-[900px] max-h-[500px] rounded-full blur-[120px] opacity-25 pointer-events-none"
          style={{ backgroundColor: C.terra }}
          aria-hidden="true"
        />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal className="max-w-[40rem]">
            <Eyebrow>La carta</Eyebrow>
            <h2 className={`${display.className} mt-4 text-[clamp(2rem,5vw,3.4rem)] leading-[1.08]`} style={{ color: C.white }}>
              Lo que sale de nuestra cocina
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgba(232,220,200,0.75)' }}>
              Tres razones para sentarse a la mesa. Carta de muestra: al
              publicar van los platos reales de la picá.
            </p>
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-start">
            {CARTA.map((item, i) => (
              <Reveal key={item.title} delay={i * 120} className={i === 1 ? 'md:mt-16' : ''}>
                <article className={`${GLASS} overflow-hidden group`}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      loading="eager"
                      sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: 'linear-gradient(180deg, rgba(15,20,28,0.1) 30%, rgba(15,20,28,0.92) 100%)' }}
                      aria-hidden="true"
                    />
                    <span
                      className={`${display.className} absolute right-5 top-4 text-sm tracking-[0.2em]`}
                      style={{ color: 'rgba(232,220,200,0.7)' }}
                      aria-hidden="true"
                    >
                      {item.num}
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className={EYEBROW} style={{ color: C.terraSoft }}>
                        {item.kicker}
                      </p>
                      <h3 className={`${display.className} mt-2 text-2xl md:text-[1.7rem]`} style={{ color: C.white }}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="p-6 pt-5 text-base leading-relaxed" style={{ color: 'rgba(232,220,200,0.8)' }}>{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-24" style={{ backgroundColor: C.night }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-[2rem] blur-3xl opacity-30 pointer-events-none"
                style={{ backgroundColor: C.terra }}
                aria-hidden="true"
              />
              <div className="relative rounded-[1.5rem] overflow-hidden border border-[#E8DCC8]/15 aspect-[4/3]">
                <Image
                  src={`${IMG}/ambiente.webp`}
                  alt="Fachada de La Picá De Los Tatas en calle Independencia, Molina, con la puerta abierta al comedor"
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(15,20,28,0) 50%, rgba(15,20,28,0.75) 100%)' }}
                  aria-hidden="true"
                />
                <p className={`${GLASS} absolute left-4 bottom-4 px-4 py-2 text-sm hover:border-[#E8DCC8]/12`} style={{ color: C.white }}>
                  {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La casa</Eyebrow>
            <h2 className={`${display.className} mt-4 text-[clamp(2rem,5vw,3.2rem)] leading-[1.08]`} style={{ color: C.white }}>
              Una picá de Molina, atendida por su gente
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#E8DCC8]/80">
              En plena calle Independencia, con la puerta abierta y la cocina a
              la vista. Quienes ya vinieron lo cuentan en Google, donde la picá
              suma{' '}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-4 decoration-[#C1663F] transition-colors hover:text-[#E39A78] ${LINK_FOCUS}`}
                style={{ color: C.white }}
              >
                {BIZ.reviews} reseñas
              </a>
              , y en Facebook la siguen {BIZ.followers} personas.
            </p>
            <ul className="mt-10 space-y-4">
              {VALORES.map((v) => (
                <li key={v.title} className={`${GLASS} p-5 flex gap-4`}>
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full shadow-[0_0_12px_2px_rgba(193,102,63,0.8)]"
                    style={{ backgroundColor: C.terraSoft }}
                  />
                  <div>
                    <h3 className="font-semibold" style={{ color: C.white }}>
                      {v.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#E8DCC8]/75">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_GLOW} mt-9 text-sm px-6 py-3.5`}
              style={{ backgroundColor: C.terra, color: C.coal }}
            >
              Reservar por WhatsApp
            </a>
            <p className="mt-5 text-xs text-[#E8DCC8]/55">
              Textos de muestra: al publicar se escriben con lo que más destacan
              las reseñas reales.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-24">
        <div className="max-w-[1000px] mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal className="text-center">
            <Eyebrow center>Precios de referencia</Eyebrow>
            <h2 className={`${display.className} mt-4 text-[clamp(2rem,5vw,3.2rem)] leading-[1.08]`} style={{ color: C.white }}>
              La pizarra del día
            </h2>
            <p className="mt-5 mx-auto max-w-[34rem] text-base leading-relaxed text-[#E8DCC8]/75">
              Carta de muestra, sin precios: al publicar van los platos y
              valores reales que defina la picá.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className={`${GLASS} mt-14 p-6 md:p-10 grid gap-10 md:grid-cols-2 md:gap-14 hover:border-[#E8DCC8]/12`}>
              {PRECIOS.map((group) => (
                <div key={group.title}>
                  <h3 className={`${display.className} text-xl`} style={{ color: C.white }}>
                    {group.title}
                  </h3>
                  <ul className="mt-5">
                    {group.rows.map((row) => (
                      <li key={row} className="flex items-baseline gap-3 py-3.5 text-base">
                        <span className="text-[#E8DCC8]/90">{row}</span>
                        <span
                          aria-hidden="true"
                          className="flex-1 border-b border-dotted border-[#E8DCC8]/30 -translate-y-1"
                        />
                        <span
                          className="text-[11px] uppercase tracking-[0.16em] whitespace-nowrap"
                          style={{ color: C.terraSoft }}
                        >
                          Precio de muestra
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="relative overflow-hidden scroll-mt-24">
        <Image
          src={`${IMG}/hero.webp`}
          alt=""
          aria-hidden="true"
          fill
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,20,28,0.9)' }} aria-hidden="true" />
        <div className="relative max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32">
          <Reveal className="text-center">
            <Eyebrow center>Visítanos</Eyebrow>
            <h2 className={`${display.className} mt-4 text-[clamp(2.2rem,6vw,4rem)] leading-[1.05]`} style={{ color: C.white }}>
              Te guardamos la mesa
            </h2>
            <p className="mt-5 mx-auto max-w-[32rem] text-base md:text-lg leading-relaxed text-[#E8DCC8]/80">
              Escríbenos por WhatsApp para reservar o preguntar por el menú del
              día. También puedes llegar directo a Independencia 1843.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${BTN_GLOW} mt-10 text-base md:text-lg px-10 py-3 md:py-4`}
              style={{ backgroundColor: C.terra, color: C.coal }}
            >
              Escribir por WhatsApp
            </a>
            <p className="mt-4 text-sm text-[#E8DCC8]/70">
              o llama al{' '}
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`underline underline-offset-4 transition-colors hover:text-[#E39A78] ${LINK_FOCUS}`}
                style={{ color: C.white }}
              >
                {BIZ.phoneDisplay}
              </a>
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.6fr]">
              <div className={`${GLASS} p-7 md:p-8 flex flex-col hover:border-[#E8DCC8]/12`}>
                <h3 className={`${display.className} text-2xl`} style={{ color: C.white }}>
                  Dónde estamos
                </h3>
                <address className="not-italic mt-4 text-base leading-relaxed text-[#E8DCC8]/85">
                  {BIZ.address}
                  <br />
                  {BIZ.postal} {BIZ.city}, {BIZ.region}
                </address>
                <p className="mt-6 text-sm leading-relaxed text-[#E8DCC8]/70">
                  Horario a confirmar: al publicar va el horario real de
                  atención.
                </p>
                <div className="mt-auto pt-8 flex flex-wrap gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN_GHOST} text-sm px-5 py-3`}
                    style={{ color: C.sand }}
                  >
                    Cómo llegar
                  </a>
                  <a
                    href={BIZ.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BTN_GHOST} text-sm px-5 py-3`}
                    style={{ color: C.sand }}
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className={`${GLASS} overflow-hidden h-[320px] md:h-[400px] hover:border-[#E8DCC8]/12`}>
                <iframe
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full grayscale-[0.4] contrast-[1.05]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.terra }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.coal }}>
            Sitio de ejemplo de{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F141C]"
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold underline underline-offset-4 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F141C]"
            style={{ color: C.coal }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.coal }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1`} style={{ color: C.white }}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed text-[#E8DCC8]/75">
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem] text-[#E8DCC8]/70">
            Mockup de Sitiazo: datos del restaurante reales; carta, precios, horarios y textos de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
