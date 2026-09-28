import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Identidad sacada de su marca: badge negro/rojo "La Terraza · calidad y sabor
// desde 2021", el mantel de cuadrille de sus fotos y el amarillo mostaza del poster.
const C = {
  carbon: '#1B1410',
  carbonSoft: '#2A2019',
  rojo: '#C92C2C',
  rojoDeep: '#A32020',
  crema: '#F2E8D5',
  cremaSoft: '#FAF4E7',
  mostaza: '#E8A33D',
  ink: '#241B14',
  muted: '#6B5D4E',
  line: 'rgba(27,20,16,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'la-terraza',
  title: 'La Terraza — Hamburguesas caseras en El Cerrillo, Río Claro',
  description:
    'Hamburguesería en El Cerrillo, Cumpeo, Río Claro. Hamburguesa 100% casera, alitas con papas y delivery por WhatsApp. Abre todos los días desde las 15:30.',
  image: '/demos/la-terraza/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#contacto' },
]

// Carta con lo que sí publican: la promo de alitas lleva su precio real.
const CARTA: { src: string; name: string; desc: string; price?: string }[] = [
  {
    src: 'burger-doble',
    name: 'Hamburguesa casera',
    desc: '100% casera, como dicen ellos: carne a la plancha, queso y tomate en pan con sésamo.',
  },
  {
    src: 'alitas',
    name: 'Alitas crispy + papas',
    desc: 'Cinco alitas con papas fritas y salsa a elección. Precio real de su Instagram.',
    price: '$5.000',
  },
  {
    src: 'pizza',
    name: 'Pizza de pepperoni',
    desc: 'De la cocina de la casa, para compartir en la terraza o para llevar.',
  },
  {
    src: 'sandwich',
    name: 'Sandwich de ave',
    desc: 'Ave palta con lechuga, para el antojo rápido de media tarde.',
  },
]

const FOTOS_LOCAL = [
  { src: 'hero', alt: 'La terraza techada de día, con mesas y sillas celestes', cap: 'La terraza, de día' },
  { src: 'noche', alt: 'El local de noche con las luces encendidas', cap: 'Y de noche' },
  { src: 'cocina', alt: 'Hamburguesas recién armadas sobre el mesón de la cocina', cap: 'Recién salidas' },
]

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function Pin({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s-6.5-6-6.5-11a6.5 6.5 0 0 1 13 0c0 5-6.5 11-6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

function WaButton({ href = WA_LINK, children, tone = 'rojo', className = '' }: { href?: string; children: React.ReactNode; tone?: 'rojo' | 'crema'; className?: string }) {
  const s =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: '#FFF' }
      : { backgroundColor: C.crema, color: C.carbon }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 min-h-[44px] px-6 py-2.5 rounded-full font-bold text-[15px] uppercase tracking-wide transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 ${className} tap-44`}
      style={s}
    >
      <WaIcon className="w-[18px] h-[18px]" />
      {children}
    </a>
  )
}

// Cenefa de cuadrille: el mantel que se ve en sus fotos, en CSS puro.
function Checker({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-4 w-full"
      style={{
        backgroundImage: `repeating-conic-gradient(${C.rojo} 0% 25%, ${C.crema} 0% 50%)`,
        backgroundSize: '16px 16px',
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${display.className} text-xs uppercase tracking-[0.24em] mb-4 flex items-center gap-3`} style={{ color: light ? C.mostaza : C.rojo }}>
      <span className="block w-6 h-px" style={{ backgroundColor: light ? C.mostaza : C.rojo }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function LaTerrazaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cremaSoft, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- badge real del negocio */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-8 rounded-full object-cover" aria-hidden="true" />
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(27,20,16,0.95)', ink: C.crema, line: 'rgba(242,232,213,0.18)', btnBg: C.rojo, btnInk: '#fff' }}
      />

      {/* ── Hero a sangre: la terraza real ────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="La terraza techada de La Terraza en El Cerrillo, con mesas y sillas celestes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(27,20,16,0.55) 0%, rgba(27,20,16,0.25) 40%, rgba(27,20,16,0.95) 100%)' }} />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-14">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.22em] uppercase mb-5 px-3 py-1.5 rounded-full" style={{ backgroundColor: C.rojo, color: '#FFF' }}>
              Hamburguesa 100% casera · desde {BIZ.since}
            </p>
            <h1 className={`${display.className} uppercase leading-[0.98] text-[clamp(2.6rem,9vw,5.4rem)] max-w-4xl`} style={{ color: C.crema }}>
              La terraza de El Cerrillo
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(242,232,213,0.9)' }}>
              Hamburguesas, alitas y pizza en Cumpeo, Río Claro. Pides por WhatsApp y te avisamos cuando esté listo, o te sientas en la terraza.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <WaButton>Pedir por WhatsApp</WaButton>
              <a
                href="#carta"
                className="self-start sm:self-auto inline-flex items-center justify-center min-h-[44px] px-6 py-2.5 rounded-full font-bold text-[15px] uppercase tracking-wide border-2 transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(242,232,213,0.55)', color: C.crema }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Checker />

      {/* ── Ficha rápida ──────────────────────────────── */}
      <section aria-label="Datos del local" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-4" style={{ color: C.crema }}>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.mostaza }}>Horario</p>
            <p className="mt-1 text-sm font-semibold leading-snug">{BIZ.hours}</p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.mostaza }}>Google Maps</p>
            <p className="mt-1 text-sm font-semibold flex items-center gap-1.5">
              <Stars value={5} color={C.mostaza} className="w-3.5 h-3.5" />
              {BIZ.googleReviews} reseñas
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.mostaza }}>Delivery</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white tap-44 inline-block">
              {BIZ.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.16em]" style={{ color: C.mostaza }}>Instagram</p>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="mt-1 text-sm font-semibold underline underline-offset-4 decoration-white/40 hover:decoration-white tap-44 inline-block">
              @{BIZ.instagram}
            </a>
          </div>
        </div>
      </section>

      {/* ── La carta ──────────────────────────────────── */}
      <section id="carta" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-8">
            <div>
              <Eyebrow>La carta</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.98]`}>Lo que sale de la cocina</h2>
            </div>
            <p className="text-sm max-w-xs md:text-right leading-relaxed" style={{ color: C.muted }}>
              Fotos reales de su Instagram y su ficha de Google. El precio de las alitas es el que ellos publican.
            </p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {CARTA.map((s, i) => (
              <li key={s.name}>
                <Reveal delay={i * 70} className="h-full">
                  <article className="h-full rounded-2xl overflow-hidden border-2" style={{ borderColor: C.carbon, backgroundColor: '#FFF' }}>
                    <div className="relative aspect-[16/10]">
                      <Image src={`${IMG}/${s.src}.webp`} alt={s.name} fill sizes="(min-width:640px) 50vw, 100vw" className="object-cover" />
                      {s.price && (
                        <span className={`${display.className} absolute top-3 right-3 text-lg px-3 py-1 rounded-full`} style={{ backgroundColor: C.mostaza, color: C.carbon }}>
                          {s.price}
                        </span>
                      )}
                    </div>
                    <div className="p-5 flex items-start justify-between gap-3">
                      <div>
                        <h3 className={`${display.className} uppercase text-xl leading-tight`}>{s.name}</h3>
                        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                      </div>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-full text-sm font-bold transition-colors hover:bg-[#1B1410] hover:text-[#F2E8D5] tap-44"
                        style={{ backgroundColor: C.carbon, color: C.crema }}
                      >
                        <WaIcon className="w-4 h-4" />
                        Pedir
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-xs" style={{ color: C.muted }}>
            La carta completa y los precios del día se confirman por WhatsApp.
          </p>
        </div>
      </section>

      {/* ── El local ──────────────────────────────────── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow light>El local</Eyebrow>
              <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.crema }}>
                Mesas afuera, cocina adentro
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(242,232,213,0.82)' }}>
                La Terraza está en El Cerrillo, Cumpeo, comuna de Río Claro. Pides directo a quien cocina — por WhatsApp o en el mesón — sin aplicaciones ni recargos de por medio.
              </p>
              <ul className="grid grid-cols-2 gap-3 mb-8 max-w-md">
                <li className="rounded-xl px-4 py-4" style={{ backgroundColor: C.carbonSoft }}>
                  <p className={`${display.className} text-3xl`} style={{ color: C.mostaza }}>{BIZ.googleReviews}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(242,232,213,0.7)' }}>reseñas en Google Maps</p>
                </li>
                <li className="rounded-xl px-4 py-4" style={{ backgroundColor: C.carbonSoft }}>
                  <p className={`${display.className} text-3xl`} style={{ color: C.mostaza }}>{BIZ.instagramFollowers}</p>
                  <p className="text-xs mt-1" style={{ color: 'rgba(242,232,213,0.7)' }}>seguidores en Instagram</p>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <WaButton tone="crema" href={WA_LINK_MESA}>Consultar por una mesa</WaButton>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center font-bold text-sm uppercase tracking-wide px-6 py-2.5 min-h-[44px] rounded-full border-2 transition-colors hover:bg-white/10 tap-44"
                  style={{ borderColor: 'rgba(242,232,213,0.4)', color: C.crema }}
                >
                  Ver Instagram
                </a>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {FOTOS_LOCAL.map((f, i) => (
                <Reveal key={f.src} delay={i * 80} className={i === 0 ? 'col-span-2' : ''}>
                  <figure className={`relative rounded-xl overflow-hidden ${i === 0 ? 'aspect-[16/9]' : 'aspect-square'}`}>
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes={i === 0 ? '(min-width:1024px) 55vw, 100vw' : '(min-width:1024px) 27vw, 50vw'} className="object-cover" />
                    <figcaption className="absolute bottom-0 inset-x-0 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em]" style={{ background: 'linear-gradient(0deg, rgba(27,20,16,0.85), transparent)', color: C.crema }}>
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Checker flip />

      {/* ── Contacto y ubicación ──────────────────────── */}
      <section id="contacto" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.0] mb-6`}>Escríbenos o cae no más</h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-xl px-5 py-2 mb-6 transition-transform hover:-translate-y-0.5 tap-44"
              style={{ backgroundColor: C.rojo, color: '#FFF' }}
            >
              <span className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}>
                <WaIcon className="w-4 h-4" />
              </span>
              <span>
                <span className={`${display.className} block text-base uppercase leading-tight`}>Pedir por WhatsApp</span>
                <span className="block text-xs leading-tight" style={{ color: 'rgba(255,255,255,0.85)' }}>{BIZ.phoneDisplay} · delivery</span>
              </span>
            </a>
            <div className="flex items-start gap-3 mb-5">
              <Pin className="w-5 h-5 mt-0.5 shrink-0" color={C.rojo} />
              <address className="not-italic text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <strong style={{ color: C.ink }}>El Cerrillo, 3480084 Cumpeo</strong>
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <p className="text-sm mb-6" style={{ color: C.muted }}>
              <strong style={{ color: C.ink }}>Horario:</strong> {BIZ.hours} — el cierre se confirma por WhatsApp.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center font-bold text-sm px-5 py-2.5 min-h-[44px] rounded-full border-2 transition-colors hover:bg-[#1B1410] hover:text-[#F2E8D5] tap-44"
              style={{ borderColor: C.carbon, color: C.ink }}
            >
              Abrir ruta en Google Maps
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-xl border-2 min-h-[320px] h-full" style={{ borderColor: C.carbon, backgroundColor: C.crema }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, El Cerrillo, Cumpeo, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.carbon, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} uppercase text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,232,213,0.62)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · desde {BIZ.since}
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-xs" style={{ color: 'rgba(242,232,213,0.62)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
