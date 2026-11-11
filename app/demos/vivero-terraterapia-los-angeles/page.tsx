import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, OFRECE, OPINIONES, WA_LINK, WA_ASESORIA, WA_DESPACHO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Vivero: verde hoja profundo, terracota de maceta, el rosa de las
// nervaduras de sus marantas y papel cálido.
const C = {
  hoja: '#1E3A2A',
  hoja2: '#2C5139',
  terracota: '#B95A37',
  rosa: '#E9B7AE',
  papel: '#F4EFE5',
  papel2: '#E9E1D2',
  muted: '#55604F',
  line: 'rgba(30,58,42,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-terraterapia-los-angeles',
  title: 'Vivero Urbano Terraterapia · Plantas en Los Ángeles',
  description:
    'Vivero urbano en Pasaje Quilaco 1343, Los Ángeles: plantas de interior y exterior, insumos, macetas y asesorías. Lunes a sábado de 10:00 a 19:00.',
  image: '/demos/vivero-terraterapia-los-angeles/hero.webp',
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'Asesorías', href: '#asesorias' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/** Hoja simple en SVG. */
function Hoja({ color, className = '', style }: { color: string; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 40 24" className={className} style={style} aria-hidden="true">
      <path d="M2 12 C 10 0, 30 0, 38 12 C 30 24, 10 24, 2 12 Z" fill={color} />
      <path d="M4 12 H 34" stroke="rgba(255,255,255,0.45)" strokeWidth="1.2" />
    </svg>
  )
}

/** Tallo con hojas que se despliegan una a una, alternando lados. */
function Tallo({ hojas = 5, delay = 0, color, className = '' }: { hojas?: number; delay?: number; color: string; className?: string }) {
  return (
    <div className={`relative flex items-center gap-5 ${className}`} aria-hidden="true">
      <span className="tt-tallo absolute left-0 right-0 top-1/2 h-[2px]" style={{ backgroundColor: color, animationDelay: `${delay}s` }} />
      {Array.from({ length: hojas }).map((_, i) => (
        <span key={i} className="relative block h-8 w-10">
          <Hoja
            color={color}
            className="tt-hoja absolute left-0 h-6 w-10"
            style={{
              top: i % 2 ? '50%' : 'auto',
              bottom: i % 2 ? 'auto' : '50%',
              transformOrigin: '0% 50%',
              animationDelay: `${delay + 0.3 + i * 0.16}s`,
              ['--giro' as string]: i % 2 ? '28deg' : '-28deg',
            } as CSSProperties}
          />
        </span>
      ))}
    </div>
  )
}

function Rotulo({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.26em]" style={{ color }}>
      {children}
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'hoja' | 'terracota' | 'papel' | 'linea'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'hoja'
      ? { backgroundColor: C.hoja, color: C.papel }
      : tone === 'terracota'
        ? { backgroundColor: C.terracota, color: '#FFFFFF' }
        : tone === 'papel'
          ? { backgroundColor: C.papel, color: C.hoja }
          : { border: `1.5px solid ${C.hoja}`, color: C.hoja }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="tt-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-semibold tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function TerraterapiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.hoja }}
    >
      <style>{`
        /* El tallo crece y las hojas se despliegan desde su base, alternando lados. */
        @keyframes tt-tallo { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .tt-tallo { transform-origin: left center; animation: tt-tallo 0.9s ease-out both }
        @keyframes tt-hoja { from { transform: rotate(var(--giro)) scale(0.2); opacity: 0 } to { transform: rotate(var(--giro)) scale(1); opacity: 1 } }
        .tt-hoja { animation: tt-hoja 0.7s cubic-bezier(0.3,1.4,0.5,1) both }

        @keyframes tt-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .tt-sube { animation: tt-sube 0.9s ease-out both }

        /* Fotos del hero: entran como macetas que se dejan en el mesón. */
        @keyframes tt-maceta { from { opacity: 0; transform: translateY(40px) rotate(var(--r)) } to { opacity: 1; transform: translateY(0) rotate(var(--r)) } }
        .tt-maceta { animation: tt-maceta 1s cubic-bezier(0.2,0.8,0.2,1) both }

        /* Respiración lenta de la foto grande, como hojas con la brisa. */
        @keyframes tt-brisa { 0%, 100% { transform: scale(1) } 50% { transform: scale(1.035) } }
        .tt-brisa { animation: tt-brisa 9s ease-in-out infinite }

        .tt-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .tt-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .tt-btn:active { transform: scale(0.97) }
        .tt-btn:focus-visible { outline: 3px solid ${C.terracota}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .tt-tallo, .tt-hoja, .tt-sube, .tt-maceta, .tt-brisa { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(244,239,229,0.95)',
          ink: C.hoja,
          line: C.line,
          btnBg: C.hoja,
          btnInk: C.papel,
        }}
      />

      {/* ── 1 · Hero: macetas sobre el mesón ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-14 items-center">
          <div>
            <div className="tt-sube" style={{ animationDelay: '0.15s' }}>
              <Rotulo color={C.terracota}>Vivero urbano · {BIZ.city}</Rotulo>
            </div>
            <h1
              className={`${display.className} tt-sube mt-5 font-semibold leading-[1] tracking-[-0.02em] text-[clamp(2.8rem,10vw,5.6rem)]`}
              style={{ animationDelay: '0.3s' }}
            >
              Plantas que
              <br />
              <em className="font-normal" style={{ color: C.terracota }}>
                llenan la casa.
              </em>
            </h1>
            <Tallo className="mt-7" delay={0.7} color={C.hoja2} />
            <p className="tt-sube mt-7 max-w-md text-lg leading-relaxed" style={{ color: C.muted, animationDelay: '1.4s' }}>
              Plantas de interior y exterior, insumos y macetas en Villa Los
              Ángeles. Y te enseñamos a cuidarlas.
            </p>
            <div className="tt-sube mt-8 flex flex-wrap gap-3" style={{ animationDelay: '1.55s' }}>
              <Btn href={WA_LINK} tone="hoja">
                Escribir por WhatsApp
              </Btn>
              <Btn href="#vivero" tone="linea" external={false}>
                Ver el vivero
              </Btn>
            </div>
          </div>
          <div className="relative h-[420px] md:h-[520px]">
            <div className="tt-maceta absolute left-0 top-0 w-[62%] h-[78%] overflow-hidden rounded-[28px]" style={{ ['--r' as string]: '-2deg', animationDelay: '0.2s', boxShadow: '0 24px 48px rgba(30,58,42,0.22)' } as CSSProperties}>
              <div className="tt-brisa absolute inset-0">
                <Image src={`${IMG}/calathea.webp`} alt="Planta de hojas rosadas y verdes en el vivero Terraterapia" fill priority sizes="(min-width: 1024px) 30vw, 62vw" className="object-cover" />
              </div>
            </div>
            <div className="tt-maceta absolute right-0 top-[12%] w-[44%] h-[50%] overflow-hidden rounded-[28px]" style={{ ['--r' as string]: '3deg', animationDelay: '0.45s', border: `6px solid ${C.papel}`, boxShadow: '0 20px 40px rgba(30,58,42,0.2)' } as CSSProperties}>
              <Image src={`${IMG}/anturios.webp`} alt="Anturios rojos y rosados" fill sizes="(min-width: 1024px) 22vw, 44vw" className="object-cover" />
            </div>
            <div className="tt-maceta absolute right-[8%] bottom-0 w-[46%] h-[42%] overflow-hidden rounded-[28px]" style={{ ['--r' as string]: '-1deg', animationDelay: '0.7s', border: `6px solid ${C.papel}`, boxShadow: '0 20px 40px rgba(30,58,42,0.2)' } as CSSProperties}>
              <Image src={`${IMG}/suculenta.webp`} alt="Suculenta en maceta de greda" fill sizes="(min-width: 1024px) 22vw, 46vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · El vivero: lo que ofrecemos ── */}
      <section id="vivero" className="scroll-mt-20" style={{ backgroundColor: C.hoja, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.rosa}>El vivero</Rotulo>
            <h2 className={`${display.className} mt-4 font-semibold leading-[1.02] text-[clamp(2.3rem,6vw,4.2rem)]`}>
              Todo para tus plantas,{' '}
              <em className="font-normal" style={{ color: C.rosa }}>
                en un solo lugar.
              </em>
            </h2>
          </Reveal>
          <dl className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {OFRECE.map((o, i) => (
              <Reveal key={o.titulo} delay={i * 90}>
                <div>
                  <Hoja color={C.rosa} className="h-5 w-8" />
                  <dt className={`${display.className} mt-3 text-3xl font-semibold`}>{o.titulo}</dt>
                  <dd className="mt-2 leading-relaxed" style={{ color: 'rgba(244,239,229,0.8)' }}>
                    {o.texto}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
        {/* tira de hojas a todo el ancho */}
        <div className="grid grid-cols-3 md:grid-cols-6" aria-hidden="true">
          {['hero', 'rosada', 'corazon', 'sansevieria', 'calathea-verde', 'rosa'].map((f, i) => (
            <div key={f} className={`relative aspect-square overflow-hidden ${i > 2 ? 'hidden md:block' : ''}`}>
              <Image src={`${IMG}/${f}.webp`} alt="" fill sizes="(min-width: 768px) 17vw, 34vw" className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 3 · Asesorías y despacho ── */}
      <section id="asesorias" className="scroll-mt-20" style={{ backgroundColor: C.rosa }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="relative mx-auto max-w-[360px] aspect-[3/4] overflow-hidden rounded-t-[999px] rounded-b-[28px]">
              <Image src={`${IMG}/sansevieria.webp`} alt="Planta de hojas largas en maceta, sostenida en el vivero" fill sizes="360px" className="object-cover" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Rotulo color={C.terracota}>Asesorías y despacho</Rotulo>
            <h2 className={`${display.className} mt-4 font-semibold leading-[1.02] text-[clamp(2.2rem,5.5vw,3.8rem)]`}>
              ¿No sabes qué planta va en tu casa?
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: 'rgba(30,58,42,0.85)' }}>
              Hacemos asesorías a domicilio y online para elegir tus plantas y
              cuidarlas después. También despachamos, y hacemos envíos a
              regiones.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={WA_ASESORIA} tone="hoja">
                Pedir una asesoría
              </Btn>
              <Btn href={WA_DESPACHO} tone="linea">
                Consultar despacho
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.terracota}>Opiniones en Google</Rotulo>
            <h2 className={`${display.className} mt-4 font-semibold leading-[1.02] text-[clamp(2.2rem,5.5vw,3.8rem)] max-w-2xl`}>
              Te vas sabiendo{' '}
              <em className="font-normal" style={{ color: C.terracota }}>
                cómo cuidarla.
              </em>
            </h2>
          </Reveal>
          <div className="mt-12 grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
            <Reveal>
              <figure className="border-l-4 pl-6" style={{ borderColor: C.terracota }}>
                <blockquote className={`${display.className} text-[clamp(1.5rem,3.6vw,2.3rem)] leading-snug`}>
                  “{OPINIONES[0].texto}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                  {OPINIONES[0].autor}
                </figcaption>
              </figure>
            </Reveal>
            <div className="flex flex-col gap-8">
              {OPINIONES.slice(1).map((o, i) => (
                <Reveal key={o.autor} delay={120 + i * 100}>
                  <figure>
                    <blockquote className="text-lg leading-relaxed">“{o.texto}”</blockquote>
                    <figcaption className="mt-2 text-sm font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      {o.autor}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
              <Reveal delay={320}>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.terracota }}>
                  Ver las {BIZ.reviews} opiniones en Google
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Dónde y horario ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Rotulo color={C.terracota}>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-4 font-semibold leading-[1.02] text-[clamp(2.2rem,5.5vw,3.8rem)]`}>
              Pasaje Quilaco 1343
            </h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
              {BIZ.barrio}, {BIZ.city}
              <br />
              {BIZ.region}
            </p>
            <div className="mt-6 rounded-2xl px-5 py-4 max-w-md" style={{ backgroundColor: C.papel }}>
              <p className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: C.terracota }}>
                Horario
              </p>
              <p className={`${display.className} mt-1 text-2xl font-semibold`}>{BIZ.horario}</p>
            </div>
            <p className="mt-5">
              <a href={`tel:${BIZ.phoneTel}`} className="text-lg font-semibold underline underline-offset-4 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="terracota">
                Cómo llegar
              </Btn>
              <Btn href={BIZ.instagram} tone="linea">
                Instagram
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden rounded-[28px] aspect-[4/3] min-h-[300px]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Cierre ── */}
      <section style={{ backgroundColor: C.hoja2, color: C.papel }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold leading-[1.02] text-[clamp(2.4rem,7vw,4.4rem)]`}>
              ¿Buscas una planta{' '}
              <em className="font-normal" style={{ color: C.rosa }}>
                en especial?
              </em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-lg leading-relaxed" style={{ color: 'rgba(244,239,229,0.85)' }}>
              Mándanos una foto o su nombre por WhatsApp y te contamos si la
              tenemos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="papel">
                Escribir por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer ── */}
      <footer style={{ backgroundColor: C.hoja, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl font-semibold`}>{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(244,239,229,0.7)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city} · Empresa liderada por una mujer
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,239,229,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,239,229,0.85)' }}>
                Instagram
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(244,239,229,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,239,229,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.rosa }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
