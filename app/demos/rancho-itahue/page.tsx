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
  LOGO,
  LOGO_H,
  LOGO_V,
  HERO,
  ESPACIOS,
  EVENTOS,
  COMIDAS,
  ENTORNO,
  PADEL,
  HORARIO,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
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

export const metadata: Metadata = demoMetadata({
  slug: 'rancho-itahue',
  title: 'Rancho Itahue — Multiespacio para eventos en Molina',
  description:
    'Salón de eventos con techo de madera, terraza encarpada, quinchos, dos piscinas, canchas de tenis y PlayPádel en el sector Itahue, Molina. Cotiza tu evento por WhatsApp.',
  image: '/demos/rancho-itahue/fotos/portada-IMG-20260928-WA0053.webp',
})

const NAV_LINKS = [
  { label: 'Espacios', href: '#espacios' },
  { label: 'Pádel', href: '#padel' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Comidas', href: '#comidas' },
  { label: 'Entorno', href: '#entorno' },
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
  eyebrow: string
  title: string
  lead?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <Mark light={dark} />
        <p
          className="text-xs font-bold uppercase tracking-[0.22em]"
          style={{ color: dark ? 'rgba(255,255,255,0.75)' : C.redText }}
        >
          {eyebrow}
        </p>
      </div>
      <h2
        className={`${display.className} mt-4 text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight`}
        style={{ color: dark ? '#fff' : C.ink }}
      >
        {title}
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
      <RanchoNav logoSrc={LOGO_H} links={NAV_LINKS} waLink={WA_LINK_EVENTO} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden">
        <Image
          src={HERO.src}
          alt={HERO.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
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
            <h1
              className={`${display.className} mt-4 text-4xl md:text-6xl font-bold leading-[1.02] tracking-tight text-white`}
            >
              {HERO.title}
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed text-white/85 max-w-xl">
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
            <p className="mt-6 text-sm font-medium text-white/85">
              {BIZ.address}, {BIZ.city} · Abierto todo el año · {BIZ.reviews} reseñas en Google
            </p>
          </div>
        </div>
      </section>

      {/* ── Espacios ─────────────────────────────────────── */}
      <section id="espacios" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionHead
              eyebrow="El lugar"
              title="Cinco espacios, un solo predio"
              lead="Todo lo que se ve aquí está dentro del rancho: el salón y su terraza, el quincho, la piscina y las canchas conviven bajo los mismos árboles."
            />
          </Reveal>
          <div className="mt-14 md:mt-20 space-y-20 md:space-y-28">
            {ESPACIOS.map((e, i) => (
              <article key={e.id} className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -top-2.5 -right-2.5 w-5 h-5 z-10"
                      style={{ backgroundColor: C.red }}
                    />
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={e.photos[0].src}
                        alt={e.photos[0].alt}
                        fill
                        sizes="(min-width: 768px) 46vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className={`mt-3 grid gap-3 ${e.photos.length - 1 >= 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
                    {e.photos.slice(1).map((p) => (
                      <div key={p.src} className="relative aspect-[4/3] overflow-hidden rounded-xl">
                        <Image
                          src={p.src}
                          alt={p.alt}
                          fill
                          sizes="(min-width: 768px) 15vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className={`${display.className} text-sm font-bold tracking-[0.3em]`} style={{ color: C.redText }}>
                    {e.num}
                  </p>
                  <h3 className={`${display.className} mt-3 text-2xl md:text-4xl font-bold tracking-tight`}>
                    {e.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                    {e.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {e.chips.map((c) => (
                      <Chip key={c}>{c}</Chip>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
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
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75">
                        Dentro del rancho
                      </p>
                    </div>
                    <h2
                      className={`${display.className} mt-4 text-3xl md:text-5xl font-bold leading-[1.05] tracking-tight text-white`}
                    >
                      {PADEL.title}
                    </h2>
                    <p className="mt-4 text-base md:text-lg leading-relaxed text-white/78">{PADEL.lead}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {PADEL.chips.slice(0, 2).map((c) => (
                        <Chip key={c} dark>
                          {c}
                        </Chip>
                      ))}
                    </div>
                  </div>
                  <a
                    href={`tel:${BIZ.padelTel}`}
                    className="inline-flex items-center justify-center self-start h-12 px-6 rounded-full text-sm font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.red, color: '#fff' }}
                  >
                    Reservar cancha · {BIZ.padelDisplay}
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-px min-h-[280px]" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                  <div className="relative col-span-2 aspect-[16/9]">
                    <Image
                      src={PADEL.photos[0].src}
                      alt={PADEL.photos[0].alt}
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {PADEL.photos.slice(1).map((p) => (
                    <div key={p.src} className="relative aspect-[4/3]">
                      <Image
                        src={p.src}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 23vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
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
            <SectionHead eyebrow="Eventos" title={EVENTOS.title} lead={EVENTOS.lead} dark />
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
              {EVENTOS.photos.map((p, i) => (
                <div
                  key={p.src}
                  className={`relative overflow-hidden rounded-xl ${
                    i === 0 || i === 3 ? 'md:col-span-2 aspect-[4/3] md:aspect-[8/5]' : 'aspect-[3/4] md:aspect-[4/5]'
                  }`}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Comidas ──────────────────────────────────────── */}
      <section id="comidas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <SectionHead eyebrow="La mesa" title={COMIDAS.title} lead={COMIDAS.lead} />
              <p
                className="mt-5 inline-block text-sm font-bold px-4 py-2 rounded-full"
                style={{ backgroundColor: C.soft, color: C.ink, border: `1px solid ${C.line}` }}
              >
                {COMIDAS.note}
              </p>
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
                <SectionHead eyebrow="Alrededor" title={ENTORNO.title} lead={ENTORNO.lead} />
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
              eyebrow="Ubicación"
              title="En el sector Cerrillo Bascuñán, Molina"
              lead="Zona rural de Molina, a 5 km de la plaza y a 2 km de la Ruta 5 Sur (Km 210, Ruta K-165), entre Curicó y Molina."
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
                  <p className="mt-4 text-sm leading-relaxed text-white/80">{HORARIO.text}</p>
                  <p className="mt-4 text-xs leading-relaxed text-white/75">
                    Almuerzos:{' '}
                    <a href={`tel:+56933064953`} className="font-bold underline underline-offset-2">
                      {BIZ.almuerzosDisplay}
                    </a>
                    {' · '}Pádel PlayPádel:{' '}
                    <a href={`tel:${BIZ.padelTel}`} className="font-bold underline underline-offset-2">
                      {BIZ.padelDisplay}
                    </a>
                  </p>
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
                  <p className="text-xs text-white/70 leading-relaxed">
                    {BIZ.address}, {BIZ.city}, {BIZ.region} · {BIZ.reviews} reseñas en Google
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
          <div className="text-xs text-white/60 leading-relaxed md:text-right">
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
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK_EVENTO} label="Cotizar evento por WhatsApp" />
    </main>
  )
}
