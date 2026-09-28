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
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Identidad leída de sus fotos: logo cráneo sobre madera, fachada teal,
// afiches de rock y colores de fantasía. Afiche de concierto: negro,
// hueso y rojo.
const C = {
  negro: '#141210',
  negro2: '#1C1916',
  hueso: '#EDE7DC',
  huesoSoft: '#CFC6B6',
  rojo: '#C42F42',
  rojoTxt: '#E05A66',
  steel: '#8E867A',
  line: 'rgba(237,231,220,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'peluqueria-barbers-glam',
  title: "Barber's Glam — Peluquería unisex y barbería en Molina",
  description:
    "Peluquería y barbería en Maipú 2119, Molina: corte dama, varón y niño, barba, afeitado y colores de fantasía. Atiende su dueño, Diego. Local climatizado, agenda por WhatsApp.",
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Cartelera', href: '#cartelera' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#visita' },
]

const ICONS: Record<string, React.ReactNode> = {
  tijera: (
    <>
      <circle cx="6" cy="6" r="2.6" />
      <circle cx="6" cy="18" r="2.6" />
      <path d="M8.2 7.8 20 19 M8.2 16.2 20 5" />
    </>
  ),
  dama: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M12 12v8M8.5 17h7" />
    </>
  ),
  nino: (
    <>
      <circle cx="12" cy="9" r="4.5" />
      <path d="M8.5 8.5c1-1.8 6-1.8 7 0" />
      <path d="M5 20c1.5-3.5 4-4.5 7-4.5s5.5 1 7 4.5" />
    </>
  ),
  barba: (
    <>
      <path d="M6 8v4a6 6 0 0 0 12 0V8" />
      <path d="M4 8h16M6 8V4h12v4" />
      <path d="M10 15v3M14 15v3M12 15v4" />
    </>
  ),
  color: (
    <>
      <path d="M12 3c3 4 6 7.5 6 11a6 6 0 1 1-12 0c0-3.5 3-7 6-11Z" />
      <path d="M9.5 14.5a2.5 2.5 0 0 0 2.5 2.5" />
    </>
  ),
}

function Icon({ name }: { name: keyof typeof ICONS }) {
  return (
    <span
      className="w-11 h-11 flex items-center justify-center shrink-0 border"
      style={{ borderColor: C.line, color: C.rojoTxt, backgroundColor: 'rgba(196,47,66,0.08)' }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        {ICONS[name]}
      </svg>
    </span>
  )
}

// De su AgendaPro, su Instagram y sus reseñas: corte dama y varón,
// especialidad en niños, barba/afeitado y colores de fantasía.
const SETLIST: { icon: keyof typeof ICONS; name: string; desc: string }[] = [
  { icon: 'tijera', name: 'Corte de varón', desc: 'Clásico, degradado o lo que traigas en la cabeza: barbería clásica con tijera y máquina.' },
  { icon: 'dama', name: 'Corte de dama', desc: 'Peluquería unisex de verdad: cortes y terminaciones para ellas en la misma silla.' },
  { icon: 'nino', name: 'Corte de niño', desc: 'La especialidad de la casa según sus fichas: paciencia y mano suave para los más chicos.' },
  { icon: 'barba', name: 'Barba y afeitado', desc: 'Perfilado y afeitado clásico, con el cuidado de la vieja escuela.' },
  { icon: 'color', name: 'Color y fantasía', desc: 'Azules, rojos, morados y más: los colores fuertes salen en casi toda su cartelera.' },
]

// Cartelera: fotos reales de sus trabajos publicados en Maps e Instagram.
const CARTELERA = [
  { src: `${IMG}/azul.webp`, alt: 'Cabello teñido azul hecho en Barber’s Glam', cls: 'md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-full' },
  { src: `${IMG}/naranjo.webp`, alt: 'Corte con color naranjo de fantasía', cls: 'aspect-square' },
  { src: `${IMG}/barba.webp`, alt: 'Perfilado de barba con navaja en la silla del local', cls: 'aspect-square' },
  { src: `${IMG}/morado.webp`, alt: 'Tintura morada de fantasía terminada', cls: 'md:row-span-2 aspect-[3/4] md:aspect-auto md:min-h-full' },
  { src: `${IMG}/nino.webp`, alt: 'Corte de niño terminado en Barber’s Glam', cls: 'aspect-square' },
  { src: `${IMG}/mujer.webp`, alt: 'Corte de dama en la peluquería', cls: 'aspect-square' },
]

// Reseñas reales de su ficha de Google (nota 5,0 en 57 reseñas).
const RESENAS = [
  {
    text: 'Excelente lugar. Diego, un tremendo profesional: en su lugar de trabajo se vive el buen rock and roll. Entre solos, redobles y riffs, un viaje musical y buena conversación.',
    name: 'Jaime Pavez',
  },
  {
    text: 'Primera vez que voy y me encantó. El lugar está muy bien ambientado y el corte me gustó mucho; tiene la mano muy suave y es muy amable.',
    name: 'Camila Fuentes',
  },
  {
    text: 'Excelente servicio. Muy empático con los clientes, en mi caso conmigo y mis hijos. Muy recomendable.',
    name: 'Alejandro Quinteros',
  },
]

const FICHA: { t: string; d: string; href?: string }[] = [
  { t: 'Dirección', d: `${BIZ.address}, ${BIZ.city}`, href: MAPS_URL },
  { t: 'WhatsApp', d: BIZ.phoneDisplay, href: WA_LINK },
  { t: 'Lun a Vie', d: '10:30 a 20:00' },
  { t: 'Sábado', d: '10:30 a 15:30 · Dom cerrado' },
  { t: 'Instagram', d: '@barbersglam', href: BIZ.instagram },
]

const FAQS = [
  {
    q: '¿Atienden con hora o por orden de llegada?',
    a: 'Lo seguro es agendar por WhatsApp: escribes y Diego te confirma hora. También tienen página de reservas en AgendaPro.',
  },
  {
    q: '¿Es solo barbería o también peluquería?',
    a: 'Es peluquería unisex y barbería a la vez: cortes de dama y varón, con especialidad en corte de niño, además de barba y colores de fantasía.',
  },
  {
    q: '¿Cuánto vale un corte?',
    a: 'Los valores se confirman al agendar por WhatsApp, según el servicio.',
  },
  {
    q: '¿Hacen colores de fantasía?',
    a: 'Sí: su cartelera de fotos está llena de azules, morados, rojos y naranjos. Se conversa el color y el trabajo por WhatsApp antes de la hora.',
  },
  {
    q: '¿Qué días atienden?',
    a: `De lunes a viernes de 10:30 a 20:00 y sábados hasta las 15:30. Domingo cerrado. Quedan en ${BIZ.address}, ${BIZ.city}.`,
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3 font-semibold" style={{ color: C.rojoTxt }}>
      <span className="inline-block w-7 h-[2px]" style={{ backgroundColor: C.rojoTxt }} aria-hidden="true" />
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
      className={`${display.className} inline-block text-sm tracking-[0.08em] uppercase px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44 ${ghost ? 'hover:bg-white/10' : 'hover:bg-[#A82838]'}`}
      style={
        ghost
          ? { border: '1.5px solid rgba(237,231,220,0.5)', color: C.hueso }
          : { backgroundColor: C.rojo, color: '#FFF' }
      }
    >
      {label}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.negro, color: C.hueso }}>
      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-[0.06em]`}>Barber's Glam</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: 'rgba(20,18,16,0.92)', ink: C.hueso, line: C.line, btnBg: C.rojo, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: afiche ── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.negro }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Diego cortando el pelo con tijera en la silla de Barber's Glam"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,18,16,0.55) 0%, rgba(20,18,16,0.25) 45%, rgba(20,18,16,0.95) 100%)' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <Reveal>
            <div className="flex items-center gap-4 mb-5">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio */}
              <img src={`${IMG}/logo.webp`} alt="Logo de Barber's Glam: cráneo y tijeras sobre madera" className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border" style={{ borderColor: C.line }} />
              <div className="flex items-center gap-2 text-sm" style={{ color: C.huesoSoft }}>
                <Stars value={5} color={C.rojoTxt} />
                <span><strong className="text-white">{BIZ.rating}</strong> · {BIZ.reviews} reseñas en Google</span>
              </div>
            </div>
            <h1 className={`${display.className} uppercase text-[clamp(2.6rem,8vw,5.4rem)] leading-[0.95] tracking-[0.01em] text-white max-w-4xl mb-5`}>
              Buen rock y mejores cortes en Molina
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.huesoSoft }}>
              Peluquería unisex y barbería clásica en {BIZ.address}. Atiende
              su dueño Diego: corte, barba y colores de fantasía, con el
              rock de fondo y el local climatizado.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <WaButton href={WA_LINK} label="Agendar por WhatsApp" />
              <WaButton href="#cartelera" label="Ver la cartelera" ghost />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cartelera: muro de trabajos ── */}
      <section id="cartelera" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>La cartelera</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] text-white max-w-2xl mb-3`}>
              Del fade al azul fuerte
            </h2>
            <p className="text-sm md:text-base max-w-xl mb-10 md:mb-14 leading-relaxed" style={{ color: C.huesoSoft }}>
              Fotos reales del local y de sus clientes, publicadas por el
              propio Barber's Glam.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {CARTELERA.map((f, i) => (
              <Reveal key={f.src} delay={i * 70} className={f.cls}>
                <figure className="relative overflow-hidden border w-full h-full" style={{ borderColor: C.line }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado en public/ */}
                  <img src={f.src} alt={f.alt} loading="lazy" className="w-full h-full object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El setlist ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.negro2, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <Reveal>
            <div className="md:sticky md:top-28">
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] text-white mb-4`}>
                El repertorio
              </h2>
              <p className="text-base leading-relaxed mb-8 max-w-sm" style={{ color: C.huesoSoft }}>
                Cinco servicios, una silla y la mano del dueño. El precio y
                la hora se confirman por WhatsApp.
              </p>
              <div className="overflow-hidden border hidden md:block" style={{ borderColor: C.line }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado */}
                <img src={`${IMG}/interior.webp`} alt="Interior de Barber's Glam con afiches de rock en la pared" loading="lazy" className="w-full aspect-video object-cover" />
              </div>
            </div>
          </Reveal>
          <div>
            {SETLIST.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <div className="flex items-start gap-4 py-6 first:pt-0 border-b last:border-0" style={{ borderColor: C.line }}>
                  <span className={`${display.className} text-lg w-8 pt-0.5 shrink-0`} style={{ color: C.rojoTxt }} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon name={s.icon} />
                  <div>
                    <h3 className={`${display.className} uppercase text-lg md:text-xl tracking-[0.04em] text-white mb-1`}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.huesoSoft }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={SETLIST.length * 60}>
              <div className="pt-7">
                <WaButton href={WA_LINK} label="Consultar por un servicio" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="overflow-hidden border" style={{ borderColor: C.line }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado */}
              <img src={`${IMG}/fachada.webp`} alt="Fachada teal de Barber's Glam con barber pole en Maipú, Molina" loading="lazy" className="w-full aspect-[3/4] object-cover" />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>El local</Eyebrow>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] text-white mb-5`}>
              La casa del rock de Maipú
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: C.huesoSoft }}>
              Fachada teal con barber pole, afiches de metal en las paredes
              y aire acondicionado en verano. Sus clientes lo describen
              como un lugar acogedor y con buena conversación.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="border p-5" style={{ borderColor: C.line }}>
                <p className={`${display.className} uppercase text-2xl text-white mb-1`}>Clima</p>
                <p className="text-sm" style={{ color: C.huesoSoft }}>Local climatizado todo el año, según su propio Instagram.</p>
              </div>
              <div className="border p-5" style={{ borderColor: C.line }}>
                <p className={`${display.className} uppercase text-2xl text-white mb-1`}>Familia</p>
                <p className="text-sm" style={{ color: C.huesoSoft }}>Corte de niño como especialidad; papás lo recomiendan.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.negro2, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <div className="flex items-end gap-3 mb-3">
                <p className={`${display.className} text-6xl md:text-7xl leading-none text-white`}>{BIZ.rating}</p>
                <Stars value={5} color={C.rojoTxt} className="w-4 h-4 mb-2" />
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.huesoSoft }}>
                {BIZ.reviews} reseñas en Google, todas cinco estrellas.
                Estas van tal como las escribieron sus clientes.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
                style={{ color: C.hueso, textDecorationColor: C.rojoTxt }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={120 + i * 100}>
                  <figure className="p-6 border" style={{ borderColor: C.line, backgroundColor: 'rgba(237,231,220,0.03)' }}>
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(237,231,220,0.92)' }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.steel }}>
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
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] text-white mb-4`}>
              En el centro de Molina
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: C.huesoSoft }}>
              Sobre calle Maipú, a pasos del centro: busca la fachada teal
              con la barber pole.
            </p>
            <dl className="space-y-0 border-y" style={{ borderColor: C.line }}>
              {FICHA.map((f) => (
                <div key={f.t} className="flex items-baseline justify-between gap-4 py-3.5 border-b last:border-0" style={{ borderColor: C.line }}>
                  <dt className="text-xs uppercase tracking-[0.16em] font-semibold shrink-0" style={{ color: C.steel }}>{f.t}</dt>
                  <dd className="text-sm md:text-base text-right" style={{ color: C.hueso }}>
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
              <WaButton href={MAPS_URL} label="Cómo llegar →" ghost />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.negro2 }}>
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
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 pt-0 md:pt-0">
        <Reveal>
          <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] text-white mb-10`}>
            Antes de sentarte
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.hueso, a: C.huesoSoft, line: C.line, plusBg: C.rojo, plusInk: '#FFF' }}
        />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.rojo }}>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{ backgroundImage: `url(${IMG}/hero.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,7vw,4.4rem)] leading-[0.96] text-white mb-5`}>
              Tu turno en la silla
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Un mensaje por WhatsApp y quedas agendado. Cortes, barba y
              colores: atiende el mismo Diego.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm tracking-[0.08em] uppercase px-8 py-3.5 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44`}
              style={{ backgroundColor: C.negro, color: C.hueso }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.negro, color: C.hueso }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <p className={`${display.className} uppercase text-lg mb-1.5 tracking-[0.04em]`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: C.steel }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.steel }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.rojoTxt }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, fotos, logo y reseñas son reales de sus fichas públicas; los textos de apoyo son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.rojoTxt }}>
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
