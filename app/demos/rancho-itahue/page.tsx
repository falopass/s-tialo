import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { RanchoNav } from './nav'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_EVENTO,
  MAPS_URL,
  MAPS_EMBED,
  MAPS_PLACE,
  LOGO,
  LOGO_H,
  LOGO_V,
  HERO,
  CIFRAS,
  ESPACIOS_HEAD,
  ESPACIOS,
  EVENTOS,
  COMIDAS,
  ENTORNO,
  PADEL,
  UBICACION,
  HORARIO,
  CONTACTOS,
  RESENAS,
  type Title,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

/** Paleta desde el logo real (MARCA.md): gris #585856 de base, rojo #E20411 de acento. */
const C = {
  paper: '#FBFAF7',
  card: '#FFFFFF',
  ink: '#2C2C28',
  gray: '#585856',
  muted: '#4A4A44',
  soft: '#EFEEE8',
  deep: '#22221E',
  red: '#E20411',
  redText: '#C40310',
  line: 'rgba(44,44,40,0.14)',
} as const

const base = demoMetadata({
  slug: 'rancho-itahue',
  title: 'Rancho Itahue — Multiespacio en Molina',
  description:
    'Salón de eventos, terraza encarpada, quinchos, 2 piscinas, canchas de tenis, multicancha y PlayPádel. Almuerzos todo el año. Zona rural de Molina, a 5 km de la plaza.',
  image: '/demos/rancho-itahue/fotos/portada-IMG-20260928-WA0053.webp',
})
export const metadata: Metadata = {
  ...base,
  openGraph: { ...base.openGraph, siteName: 'Rancho Itahue' },
}

const NAV_LINKS = [
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Pádel', href: '#padel' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Comidas', href: '#comidas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Cuadrado rojo del logo, usado como marca de sección. */
function Mark({ light = false }: { light?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-flex items-center gap-2.5">
      <span className="w-2.5 h-2.5" style={{ backgroundColor: C.red }} />
      {light && <span className="w-2.5 h-2.5 bg-white" />}
    </span>
  )
}

function SectionHead({
  eyebrow,
  title,
  lead,
  dark = false,
}: {
  eyebrow?: string
  title: Title
  lead?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <div className="flex items-center gap-3">
          <Mark light={dark} />
          <p
            className="text-xs font-bold uppercase tracking-[0.22em]"
            style={{ color: dark ? 'rgba(255,255,255,0.75)' : C.redText }}
          >
            {eyebrow}
          </p>
        </div>
      )}
      <h2
        className={`${display.className} mt-4 text-3xl md:text-5xl leading-[1.05] tracking-tight`}
        style={{ color: dark ? '#fff' : C.ink }}
      >
        <span className="block font-light">
          {!eyebrow && (
            <span
              aria-hidden="true"
              className="inline-block w-[0.52em] h-[0.52em] mr-[0.32em]"
              style={{ backgroundColor: C.red }}
            />
          )}
          {title.light}
        </span>
        <span className="block font-extrabold">{title.bold}</span>
      </h2>
      {lead && (
        <p
          className="mt-4 text-base md:text-lg leading-relaxed"
          style={{ color: dark ? 'rgba(255,255,255,0.78)' : C.muted }}
        >
          {lead}
        </p>
      )}
    </div>
  )
}

function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className="text-xs font-semibold px-3 py-1.5 rounded-full"
      style={
        dark
          ? { color: 'rgba(255,255,255,0.88)', border: '1px solid rgba(255,255,255,0.3)' }
          : { color: C.ink, backgroundColor: C.soft, border: `1px solid ${C.line}` }
      }
    >
      {children}
    </span>
  )
}

export default function RanchoItahuePage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        @media (prefers-reduced-motion: no-preference) {
          .ri-hero { animation: rizoom 14s cubic-bezier(0.16,1,0.3,1) both; }
          @keyframes rizoom { from { transform: scale(1.08); } to { transform: scale(1); } }
          .ri-card img { transition: transform 0.7s cubic-bezier(0.16,1,0.3,1); }
          .ri-card:hover img { transform: scale(1.04); }
        }
        .ri-rail { scrollbar-width: none; -ms-overflow-style: none; }
        .ri-rail::-webkit-scrollbar { display: none; }
        .ri-rail:focus-visible { outline: 3px solid ${C.red}; outline-offset: 4px; }
      `}</style>
      <RanchoNav logoSrc={LOGO_H} links={NAV_LINKS} waLink={WA_LINK_EVENTO} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover ri-hero"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 38%, rgba(0,0,0,0.62) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-32">
          {/* Bloque gris translúcido: eco del bloque gris del logo y
              garantía de contraste sobre cualquier foto. */}
          <div
            className="max-w-2xl relative rounded-2xl p-6 md:p-8"
            style={{ backgroundColor: 'rgba(46,46,40,0.85)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
          >
            <span
              aria-hidden="true"
              className="absolute -top-2 -right-2 w-5 h-5"
              style={{ backgroundColor: C.red }}
            />
            <div className="flex items-center gap-3">
              <span className="w-3 h-3" style={{ backgroundColor: C.red }} aria-hidden="true" />
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.24em] text-white/90">
                {HERO.eyebrow}
              </p>
            </div>
            <h1 className={`${display.className} mt-4 uppercase leading-[0.9] text-white`}>
              <span className="block text-3xl md:text-5xl font-light tracking-[0.18em]">Rancho</span>
              <span className="block text-6xl md:text-8xl font-black tracking-tight">Itahue</span>
            </h1>
            <p className="mt-4 text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
              {HERO.lead}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_EVENTO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Cotizar un evento
              </a>
              <a
                href="#espacios"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-bold text-white transition-transform active:scale-95"
                style={{ border: '1.5px solid rgba(255,255,255,0.6)', backgroundColor: 'rgba(0,0,0,0.25)' }}
              >
                Conocer los espacios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cifras ───────────────────────────────────────── */}
      <section className="py-10 md:py-14" style={{ backgroundColor: C.gray }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-8">
            {CIFRAS.map((c, i) => (
              <Reveal key={c.label} delay={i * 120}>
                <div className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-2.5 w-2 h-2 shrink-0"
                    style={{ backgroundColor: C.red }}
                  />
                  <div>
                    <p className={`${display.className} text-4xl md:text-5xl font-extrabold text-white`}>
                      {c.value}
                    </p>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.18em] text-white">
                      {c.unit}
                    </p>
                    <p className="mt-1 text-sm text-white/85 leading-snug">{c.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm text-white">
            Síguenos:{' '}
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 font-bold underline underline-offset-4"
            >
              Instagram {BIZ.instagramHandle}
            </a>
            {' · '}
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 font-bold underline underline-offset-4"
            >
              Facebook {BIZ.facebookName}
            </a>
          </p>
        </div>
      </section>

      {/* ── Reseñas: 199 opiniones reales de su ficha de Google ── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="flex items-center gap-3">
              <Mark />
              <p
                className="text-xs font-bold uppercase tracking-[0.22em]"
                style={{ color: C.redText }}
              >
                {RESENAS.eyebrow}
              </p>
            </div>
            <p
              className={`${display.className} mt-6 font-black leading-none tracking-tight text-7xl md:text-8xl`}
              style={{ color: C.ink }}
            >
              {RESENAS.count}
            </p>
            <p className={`${display.className} mt-2 text-xl md:text-2xl font-bold`} style={{ color: C.redText }}>
              {RESENAS.source}
            </p>
            <p className="mt-4 text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
              {RESENAS.lead}
            </p>
            <p className="mt-4 text-sm font-semibold" style={{ color: C.ink }}>
              {RESENAS.fb}
            </p>
            <a
              href={MAPS_PLACE}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-6 inline-block text-sm font-bold underline underline-offset-4 decoration-2"
              style={{ color: C.ink, textDecorationColor: C.red }}
            >
              {RESENAS.linkLabel}
            </a>
          </Reveal>
          <div>
            {RESENAS.items.map((r, i) => (
              <Reveal key={r.by} delay={i * 90}>
                <figure
                  className={`py-5 md:py-6 ${i > 0 ? 'border-t' : ''}`}
                  style={{ borderColor: C.line }}
                >
                  <blockquote
                    className={`${display.className} text-lg md:text-[21px] font-medium leading-snug`}
                    style={{ color: C.ink }}
                  >
                    <span aria-hidden="true" className="font-black" style={{ color: C.red }}>
                      “
                    </span>
                    {r.q}
                  </blockquote>
                  <figcaption
                    className="mt-3 text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: C.muted }}
                  >
                    {r.by} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Espacios: recorrido en tarjetas-postal por el predio ── */}
      <section id="espacios" className="scroll-mt-20 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
              <SectionHead
                eyebrow={ESPACIOS_HEAD.eyebrow}
                title={ESPACIOS_HEAD.title}
                lead={ESPACIOS_HEAD.lead}
              />
              <p
                className="hidden md:block text-xs font-bold uppercase tracking-[0.22em] pb-2"
                style={{ color: C.muted }}
                aria-hidden="true"
              >
                Desliza para recorrer →
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div
            className="ri-rail mt-10 md:mt-14 flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory px-5 pb-4 md:mx-auto md:max-w-6xl md:px-8"
            role="region"
            aria-label="Recorrido por los espacios del predio"
            tabIndex={0}
          >
            {ESPACIOS.map((e) => (
              <article
                key={e.id}
                className="ri-card group relative shrink-0 snap-start w-[82vw] sm:w-[380px] lg:w-[400px] h-[440px] md:h-[500px] rounded-2xl overflow-hidden"
              >
                <Image
                  src={e.photos[0].src}
                  alt={e.photos[0].alt}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 380px, 82vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(20,20,17,0.05) 0%, rgba(20,20,17,0) 32%, rgba(20,20,17,0.55) 60%, rgba(20,20,17,0.9) 100%)',
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute top-4 right-4 w-5 h-5"
                  style={{ backgroundColor: C.red }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/75">
                    {e.num} <span aria-hidden="true">/ 05</span>
                  </p>
                  <h3 className={`${display.className} mt-2 text-2xl md:text-3xl font-bold tracking-tight text-white`}>
                    {e.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/85">
                    {e.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.chips.slice(0, 3).map((c) => (
                      <Chip key={c} dark>
                        {c}
                      </Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── PlayPádel ────────────────────────────────────── */}
      <section id="padel" className="scroll-mt-20 pb-4 md:pb-8">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: C.deep }}>
              <div className="grid md:grid-cols-2 items-stretch">
                <div className="p-7 md:p-12 flex flex-col justify-between gap-8">
                  <div>
                    <div className="flex items-center gap-3">
                      <Mark light />
                    </div>
                    <h2
                      className={`${display.className} mt-4 text-4xl md:text-6xl font-black tracking-tight text-white`}
                    >
                      {PADEL.title}
                    </h2>
                    <p className="mt-3 text-lg md:text-xl font-semibold text-white">{PADEL.tagline}</p>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-white/80">{PADEL.lead}</p>
                  </div>
                  <div>
                    <a
                      href={`tel:${BIZ.padelTel}`}
                      className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm font-bold transition-transform active:scale-95"
                      style={{ backgroundColor: C.red, color: '#fff' }}
                    >
                      Reservar cancha
                    </a>
                    <p className="mt-3 text-sm text-white/85">PlayPádel · {BIZ.padelDisplay}</p>
                  </div>
                </div>
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px]">
                  <Image
                    src={PADEL.photo.src}
                    alt={PADEL.photo.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Eventos (banda oscura) ───────────────────────── */}
      <section id="eventos" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              title={EVENTOS.title}
              lead={EVENTOS.lead}
              dark
            />
          </Reveal>
          <Reveal>
            <div className="mt-6 flex flex-wrap gap-2">
              {EVENTOS.types.map((t) => (
                <Chip key={t} dark>
                  {t}
                </Chip>
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
              {EVENTOS.photos.map((p, i) => {
                const wide = i === 0 || i === 7
                return (
                  <div
                    key={p.src}
                    className={`relative overflow-hidden rounded-xl ${
                      wide ? 'col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                    }`}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes={wide ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                      className="object-cover"
                    />
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Comidas ──────────────────────────────────────── */}
      <section id="comidas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <SectionHead
                title={COMIDAS.title}
                lead={COMIDAS.lead}
              />
              <div className="mt-5 flex flex-wrap gap-2">
                {COMIDAS.chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
              <a
                href={`tel:${BIZ.almuerzosTel}`}
                className="inline-flex items-center h-11 px-5 rounded-full text-sm font-bold mt-5 transition-transform active:scale-95"
                style={{ border: `1.5px solid ${C.ink}`, color: C.ink }}
              >
                Almuerzos · {BIZ.almuerzosDisplay}
              </a>
            </Reveal>
            <Reveal>
              <div className="grid grid-cols-2 gap-3">
                {COMIDAS.photos.map((p) => (
                  <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 28vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Entorno ──────────────────────────────────────── */}
      <section id="entorno" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="md:grid md:grid-cols-[110px_1fr] md:gap-10 md:items-center">
            {/* Logo vertical del cliente: formato tótem, va como lomo de marca
                de la última sección editorial. Oculto en móvil (muy angosto). */}
            <div className="hidden md:flex justify-center self-stretch py-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo del cliente en public/ */}
              <img
                src={LOGO_V}
                alt=""
                aria-hidden="true"
                className="h-[430px] xl:h-[500px] w-auto object-contain opacity-90"
              />
            </div>
            <div>
              <Reveal>
                <SectionHead
                  title={ENTORNO.title}
                  lead={ENTORNO.lead}
                />
              </Reveal>
              <Reveal>
                <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3">
                  {ENTORNO.photos.map((p, i) => (
                    <div
                      key={p.src}
                      className={`relative overflow-hidden rounded-xl ${
                        i === 0 ? 'col-span-2 aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ─────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              eyebrow={UBICACION.eyebrow}
              title={UBICACION.title}
              lead={UBICACION.lead}
            />
          </Reveal>
          <Reveal>
            <div className="mt-10 grid md:grid-cols-2 gap-5 items-stretch">
              <div
                className="rounded-2xl p-7 md:p-10 flex flex-col justify-between gap-8"
                style={{ backgroundColor: C.gray }}
              >
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
                  <img src={LOGO} alt="Logo de Rancho Itahue" className="h-16 w-16 object-contain" />
                  <h3 className={`${display.className} mt-5 text-2xl md:text-3xl font-bold text-white tracking-tight`}>
                    Conversemos tu evento
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed text-white/85">
                    Escríbenos por WhatsApp para consultar fechas, ver el predio y cotizar. También puedes llamar al{' '}
                    <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-2">
                      {BIZ.phoneDisplay}
                    </a>
                    .
                  </p>
                  <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
                    {HORARIO.title}
                  </p>
                  <dl className="mt-2 space-y-1.5 text-sm text-white/90">
                    {HORARIO.items.map((h) => (
                      <div key={h.k}>
                        <dt className="inline font-bold text-white">{h.k}: </dt>
                        <dd className="inline">{h.v}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-5 space-y-1 text-sm text-white/90">
                    {CONTACTOS.map((c) => (
                      <li key={c.k}>
                        {c.k}:{' '}
                        <a
                          href={`tel:${c.tel}`}
                          className="font-bold text-white underline underline-offset-2"
                        >
                          {c.display}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <a
                    href={WA_LINK_EVENTO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 rounded-full text-sm font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.red, color: '#fff' }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-12 rounded-full text-sm font-bold text-white transition-transform active:scale-95"
                    style={{ border: '1.5px solid rgba(255,255,255,0.5)' }}
                  >
                    Cómo llegar
                  </a>
                  <p className="text-xs text-white/85 leading-relaxed">
                    {BIZ.address}, {BIZ.city}, {BIZ.region}
                  </p>
                </div>
              </div>
              <div className="relative min-h-[320px] md:min-h-0 rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa de ubicación de Rancho Itahue, Molina"
                  className="absolute inset-0 w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────── */}
      <footer className="py-8" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={LOGO} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
            <div>
              <p className="text-sm font-bold text-white">{BIZ.name}</p>
              <p className="text-xs text-white/60">
                {BIZ.rubro} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <div className="text-xs text-white/75 leading-relaxed md:text-right">
            <p>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </p>
            <p className="mt-1">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                WhatsApp
              </a>
              {' · '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Instagram
              </a>
              {' · '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Facebook
              </a>
              {' · '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                Google Maps
              </a>
              {' · '}
              <a href={BIZ.site} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                {BIZ.siteDisplay}
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK_EVENTO} label="Cotizar evento por WhatsApp" />
    </main>
  )
}
