import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, RESENAS, SERVICIOS, WA_LINK } from './content'

const IMG = '/demos/contador-auditor-talca-jacqueline-mo'

const display = localFont({ src: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' })
const displayItalic = localFont({ src: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' })
const body = localFont({ src: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'contador-auditor-talca-jacqueline-mo',
  title: 'Jacqueline Moraga — Contador Auditor en Talca',
  description:
    'Contador auditor en Calle 1 Sur 865, Talca. Contabilidad, asesoría tributaria, laboral e inmobiliaria para pymes. 5.0 en Google. Consulta por WhatsApp.',
  image: `${IMG}/logo.webp`,
})

const C = {
  ink: '#18161B',
  inkSoft: '#221F26',
  paper: '#F7F1E6',
  card: '#FDFAF2',
  gold: '#B98B4E',
  goldDeep: '#7A5526',
  goldSoft: '#E9D9B8',
  muted: '#5B5350',
  line: 'rgba(24,22,27,0.16)',
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Oficina', href: '#oficina' },
]

function Regla({ color, className = '' }: { color: string; className?: string }) {
  return <div aria-hidden="true" className={`h-px w-full ${className}`} style={{ backgroundColor: color }} />
}

function Sello({ className = '' }: { className?: string }) {
  // Balanza estilizada: eco del emblema del letrero JMM
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false">
      <g fill="none" stroke={C.gold} strokeWidth="2" strokeLinecap="round">
        <circle cx="24" cy="24" r="22" strokeWidth="1.4" opacity="0.6" />
        <path d="M24 12 v22 M14 16 h20" />
        <path d="M14 16 l-4.5 9 a4.6 4.6 0 0 0 9 0 Z M34 16 l-4.5 9 a4.6 4.6 0 0 0 9 0 Z" />
        <path d="M18 38 h12" />
      </g>
    </svg>
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
  tone: 'gold' | 'ink' | 'ghost'
  external?: boolean
}) {
  const st =
    tone === 'gold'
      ? { backgroundColor: C.goldDeep, color: '#FFFFFF' }
      : tone === 'ink'
        ? { backgroundColor: C.ink, color: C.paper }
        : { backgroundColor: 'transparent', color: C.ink, boxShadow: `inset 0 0 0 1.5px ${C.ink}` }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${body.className} inline-flex items-center justify-center px-6 py-2.5 rounded-sm text-base font-bold tracking-wide transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function JacquelineMoragaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name="JMM · Contador Auditor"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className}`}
        theme={{ over: 'light', bar: 'rgba(247,241,230,0.95)', ink: C.ink, line: C.line, btnBg: C.goldDeep, btnInk: '#FFFFFF' }}
        ctaLabel="Consultar"
      />

      {/* HERO — crema editorial con retrato real */}
      <section id="inicio" className="relative overflow-hidden pt-24 pb-14 md:pt-32 md:pb-24">
        <div className="max-w-6xl mx-auto px-5">
          <Regla color={C.ink} />
          <div className={`${mono.className} flex justify-between py-2.5 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
            <span>Contador · Auditor</span>
            <span>{BIZ.city} · Región del Maule</span>
          </div>
          <Regla color={C.line} />

          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 mt-10 md:mt-14 items-center">
            <div>
              <Reveal>
                <h1 className={`${display.className} text-[44px] leading-[1.02] md:text-[72px] font-semibold`} style={{ color: C.ink }}>
                  Los números de tu pyme,
                  <br />
                  <span className={displayItalic.className} style={{ color: C.goldDeep }}>en buenas manos</span>
                </h1>
              </Reveal>
              <Reveal delay={140}>
                <p className="mt-6 text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
                  Soy Jacqueline Moraga, contador auditor en Talca. Llevo la contabilidad, lo
                  tributario y lo laboral de pymes que quieren dormir tranquilas con el SII.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-5 flex items-center gap-3">
                  <Stars value={5} color={C.goldDeep} className="w-5 h-5" />
                  <span className={`${mono.className} text-sm`} style={{ color: C.ink }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </span>
                </div>
              </Reveal>
              <Reveal delay={260}>
                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="gold">Conversar por WhatsApp</Btn>
                  <Btn href="#servicios" tone="ghost" external={false}>Ver servicios</Btn>
                </div>
              </Reveal>
            </div>

            <Reveal delay={160}>
              <div className="relative max-w-sm mx-auto w-full">
                <div className="absolute -inset-3 rounded-sm" style={{ border: `1.5px solid ${C.gold}` }} aria-hidden="true" />
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm" style={{ boxShadow: '0 24px 50px rgba(24,22,27,0.22)' }}>
                  <Image
                    src={`${IMG}/jacqueline.webp`}
                    alt="Jacqueline Moraga, contador auditor, sonriendo frente a un muro de ladrillo"
                    fill
                    priority
                    sizes="(min-width: 768px) 34vw, 82vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-3 md:-right-6 w-24 md:w-28 aspect-square overflow-hidden rounded-sm rotate-3" style={{ boxShadow: '0 14px 32px rgba(24,22,27,0.28)', border: `2px solid ${C.gold}` }}>
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt="Placa JMM Contador Auditor: balanza dorada sobre fondo negro"
                    fill
                    sizes="120px"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FRANJA DE CONFIANZA */}
      <section style={{ backgroundColor: C.goldSoft }}>
        <div className="max-w-6xl mx-auto px-5 py-5 grid grid-cols-3 gap-2 text-center">
          {[
            [`${BIZ.rating}★`, 'en Google'],
            ['10+ años', 'con clientes fieles'],
            ['Pymes', 'su especialidad'],
          ].map(([a, b]) => (
            <div key={a}>
              <p className={`${display.className} text-2xl md:text-3xl leading-none font-semibold`} style={{ color: C.ink }}>{a}</p>
              <p className="text-xs md:text-sm mt-1 font-medium" style={{ color: C.muted }}>{b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICIOS — libro mayor (sección tinta como la placa JMM) */}
      <section id="servicios" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Sello className="absolute -right-8 -top-8 w-56 md:w-72 opacity-20" />
        <div className="relative max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.gold }}>Lo que llevo por ti</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl font-semibold leading-[1]`} style={{ color: C.paper }}>
              Servicios del estudio
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: 'rgba(247,241,230,0.75)' }}>
              Los mismos que anuncia el letrero de la oficina en 1 Sur 865: contable, tributario,
              laboral, organización empresarial e inmobiliaria.
            </p>
          </Reveal>
          <ul className="mt-10">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 70}>
                <li className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8 py-5 md:py-6 items-baseline" style={{ borderTop: `1px solid rgba(247,241,230,0.16)` }}>
                  <span className={`${mono.className} text-sm md:text-base`} style={{ color: C.gold }}>{s.n}</span>
                  <div className="grid md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-x-8 gap-y-1 items-baseline">
                    <h3 className={`${display.className} text-2xl md:text-3xl font-medium`} style={{ color: C.paper }}>{s.t}</h3>
                    <p className="leading-relaxed" style={{ color: 'rgba(247,241,230,0.78)' }}>{s.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* RESEÑAS — 5.0 real */}
      <section id="clientes" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.goldDeep }}>Sus clientes</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl font-semibold leading-[1]`} style={{ color: C.ink }}>
              “Profesional de <span className={displayItalic.className} style={{ color: C.goldDeep }}>confianza</span>”
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <Stars value={5} color={C.goldDeep} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: C.muted }}>
                {BIZ.rating} de 5 · {BIZ.reviews} reseñas reales de Google
              </span>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <figure className="h-full rounded-sm p-6 flex flex-col" style={{ backgroundColor: C.card, boxShadow: `inset 0 0 0 1px ${C.line}`, borderTop: `3px solid ${C.gold}` }}>
                  <Stars value={5} color={C.goldDeep} className="w-4 h-4" />
                  <blockquote className="mt-3 leading-relaxed flex-1" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs uppercase tracking-widest`} style={{ color: C.goldDeep }}>
                    {r.nombre} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OFICINA — fotos reales + mapa */}
      <section id="oficina" className="py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Reveal>
              <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.goldDeep }}>La oficina</p>
              <h2 className={`${display.className} mt-2 text-4xl md:text-5xl font-semibold leading-[1]`} style={{ color: C.ink }}>
                Calle 1 Sur 865, Talca
              </h2>
              <p className="mt-4 text-lg leading-relaxed" style={{ color: C.muted }}>
                Un escritorio cercano, no una oficina fría: conversamos tu caso con calma y por
                WhatsApp quedamos siempre a un mensaje.
              </p>
              <dl className={`${mono.className} mt-6 space-y-2 text-sm`}>
                <div className="flex justify-between gap-4 py-2" style={{ borderTop: `1px solid ${C.line}` }}>
                  <dt style={{ color: C.muted }}>Dirección</dt>
                  <dd style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2" style={{ borderTop: `1px solid ${C.line}` }}>
                  <dt style={{ color: C.muted }}>Atención</dt>
                  <dd style={{ color: C.ink }}>{BIZ.horario}</dd>
                </div>
                <div className="flex justify-between gap-4 py-2" style={{ borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
                  <dt style={{ color: C.muted }}>WhatsApp</dt>
                  <dd style={{ color: C.ink }}>{BIZ.phoneDisplay}</dd>
                </div>
              </dl>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="gold">Agendar por WhatsApp</Btn>
                <Btn href={MAPS_URL} tone="ghost">Cómo llegar</Btn>
              </div>
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={80}>
                <div className="rounded-sm overflow-hidden" style={{ boxShadow: '0 18px 42px rgba(24,22,27,0.16)', border: `5px solid ${C.ink}` }}>
                  <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.fullName}`} className="w-full h-[260px] md:h-[300px] border-0" />
                </div>
              </Reveal>
              <div className="grid grid-cols-2 gap-4">
                <Reveal delay={120}>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden" style={{ boxShadow: '0 12px 28px rgba(24,22,27,0.14)' }}>
                    <Image src={`${IMG}/puerta.webp`} alt="Puerta de vidrio esmerilado con el logo JMM Contador Auditor" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <div className="relative aspect-[3/4] rounded-sm overflow-hidden" style={{ boxShadow: '0 12px 28px rgba(24,22,27,0.14)' }}>
                    <Image src={`${IMG}/oficina.webp`} alt="Oficina de Jacqueline Moraga: escritorio de madera, sillón estampado y plantas" fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.goldDeep }}>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Sello className="mx-auto w-14 mb-4" />
          <h2 className={`${display.className} text-4xl md:text-6xl font-semibold leading-[1]`} style={{ color: '#FFFFFF' }}>
            Hablemos de tus números
          </h2>
          <p className="mt-4 text-lg font-medium" style={{ color: 'rgba(255,255,255,0.92)' }}>
            Escríbeme por WhatsApp y agendamos una conversación sin compromiso.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="ink">Conversar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-9 pb-6" style={{ backgroundColor: C.ink, color: 'rgba(247,241,230,0.7)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl font-semibold`} style={{ color: C.paper }}>
              {BIZ.brand}
            </p>
            <p className="text-sm mt-1">{BIZ.fullName} · {BIZ.address}, {BIZ.city}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.brand} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
