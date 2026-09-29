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
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

// Identidad leída de sus fotos: sillas teal, pizarra negra y helados de colores.
const C = {
  ice: '#F0F8F6',
  card: '#FFFFFF',
  teal: '#0B4F4A',
  tealDeep: '#07332F',
  berry: '#C92F63',
  chalk: '#F5E9C8',
  ink: '#12322E',
  muted: '#527069',
  line: 'rgba(11,79,74,0.15)',
  lineLight: 'rgba(255,255,255,0.18)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'fabrica-de-helados-la-montana',
  title: 'La Montaña — Helados artesanales en San Clemente',
  description:
    'Fábrica de helados en Av. Huamachuco 865, San Clemente: helados artesanales, soft, barquillos, granizados y café, con terraza para quedarse. Abierto todos los días.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#visita' },
]

// Fotos de su ficha de Google Maps: la vitrina y los conos son suyos.
const VITRINA = [
  { src: `${IMG}/vitrina.webp`, alt: 'Vitrina de sabores de helado de La Montaña' },
  { src: `${IMG}/conos.webp`, alt: 'Conos de helado de dos bolas frente a la vitrina' },
  { src: `${IMG}/sabores.webp`, alt: 'Cubetas de helado artesanal de distintos sabores' },
  { src: `${IMG}/par.webp`, alt: 'Dos conos de helado, uno rosado y uno morado, frente a la vitrina' },
  { src: `${IMG}/interior.webp`, alt: 'Interior de La Montaña: las vitrinas de sabores y el mesón' },
  { src: `${IMG}/barquillo.webp`, alt: 'Cono de helado morado recién servido' },
]

// De su propia pizarra y de lo que nombran sus clientes en las reseñas.
const PIZARRA = [
  'Helados artesanales',
  'Helados soft',
  'Barquillos',
  'Granizados',
  'Café',
  'Confites',
  'Campeones',
]

// Reseñas reales de su ficha de Google (nota 4,6).
const RESENAS = [
  { text: 'Muy ricos helados, bueno, bonito y barato.', name: 'Melany Hito' },
  { text: 'Helados, café, granizados y confites hechos por unas manos mágicas. Todo artesanal y hecho en casa.', name: 'Christopher Orellana' },
  { text: 'Atención rápida, ricos los helados, buena calidad. Lugar limpio y tiene para servir.', name: 'Col! LR' },
]

const FICHA: { t: string; d: string; href?: string }[] = [
  { t: 'Dirección', d: `${BIZ.address}, ${BIZ.city}`, href: MAPS_URL },
  { t: 'WhatsApp', d: BIZ.phoneDisplay, href: WA_LINK },
  { t: 'Lun a Sáb', d: '11:30 a 21:00' },
  { t: 'Domingo', d: '11:30 a 20:30' },
]

const FAQS = [
  {
    q: '¿Los helados son de fábrica propia?',
    a: 'Sí: el local es una fábrica de helados y sus clientes destacan en las reseñas que todo es artesanal y hecho en casa.',
  },
  {
    q: '¿Hay dónde sentarse?',
    a: 'Sí: además del interior tienen una terraza con sombrilla y mesas, frente a Av. Huamachuco.',
  },
  {
    q: '¿Qué más venden además de helado?',
    a: 'Según su pizarra y sus reseñas: granizados, barquillos, café, confites, campeones y helados soft.',
  },
  {
    q: '¿Hacen pedidos o tortas por encargo?',
    a: 'Texto de muestra: los encargos se conversan directo por WhatsApp con el local.',
  },
  {
    q: '¿Qué días y horarios abren?',
    a: 'De lunes a sábado de 11:30 a 21:00 y domingos de 11:30 a 20:30, según su ficha de Google.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold" style={{ color: light ? C.chalk : C.berry }}>
      <span className="inline-block w-7 h-[2px]" style={{ backgroundColor: light ? C.chalk : C.berry }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaButton({ href, label, tone = 'solid' }: { href: string; label: string; tone?: 'solid' | 'ghost' | 'chalk' }) {
  const style =
    tone === 'solid'
      ? { backgroundColor: C.berry, color: '#FFF' }
      : tone === 'chalk'
        ? { backgroundColor: C.chalk, color: C.tealDeep }
        : { border: '1.5px solid rgba(255,255,255,0.6)', color: '#FFF' }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-block font-bold text-sm px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44 ${tone === 'ghost' ? 'hover:bg-white/10' : 'hover:brightness-105'}`}
      style={style}
    >
      {label}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.ice, color: C.ink }}>
      <BlitzNav
        name={<span className={display.className}>La Montaña</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(240,248,246,0.94)', ink: C.ink, line: C.line, btnBg: C.berry, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: la terraza real ── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.tealDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Terraza de La Montaña con sombrilla, sillas teal y su pizarra en Av. Huamachuco"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,51,47,0.42) 0%, rgba(7,51,47,0.15) 45%, rgba(7,51,47,0.88) 100%)' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 w-full">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] mb-4 font-bold" style={{ color: C.chalk }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} font-bold text-[clamp(2.4rem,7vw,4.6rem)] leading-[0.98] text-white max-w-3xl mb-5`}>
              Helados de fábrica propia, al pie de la Ruta 115
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
              En {BIZ.address}: helados artesanales, terraza con sombrilla
              y una vitrina que cambia de colores todos los días.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <WaButton href={WA_LINK} label="Pedir por WhatsApp" />
              <a
                href="#vitrina"
                className={`${display.className} inline-block font-bold text-sm px-7 py-3 rounded-full border-[1.5px] transition-all hover:-translate-y-0.5 hover:bg-white/10 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44 text-white`}
                style={{ borderColor: 'rgba(255,255,255,0.6)' }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
        <div className="absolute top-20 md:top-24 right-5 md:right-8 rotate-3 rounded-2xl px-4 py-3 text-center" style={{ backgroundColor: C.card, boxShadow: '0 16px 40px -16px rgba(0,0,0,0.5)' }}>
          <p className={`${display.className} text-2xl font-bold leading-none`} style={{ color: C.teal }}>{BIZ.rating}</p>
          <Stars value={4.6} color={C.berry} className="w-3 h-3" />
          <p className="text-[10px] mt-1 font-semibold" style={{ color: C.muted }}>{BIZ.reviews} reseñas</p>
        </div>
      </section>

      {/* ── La vitrina: scroll-snap de fotos reales ── */}
      <section id="vitrina" className="scroll-mt-20 py-16 md:py-24 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 md:mb-10">
          <Reveal>
            <Eyebrow>La vitrina</Eyebrow>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.02] max-w-2xl`} style={{ color: C.teal }}>
              Los sabores, como se ven en el local
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div
            className="flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-4"
            style={{ scrollbarWidth: 'thin', scrollbarColor: `${C.teal} transparent` }}
          >
            {VITRINA.map((f) => (
              <figure key={f.src} className="snap-start shrink-0 w-56 md:w-72">
                <div className="rounded-2xl overflow-hidden aspect-[3/4]" style={{ backgroundColor: C.card }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado en public/ */}
                  <img src={f.src} alt={f.alt} loading="lazy" className="w-full h-full object-cover" />
                </div>
              </figure>
            ))}
            <div className="shrink-0 w-2" aria-hidden="true" />
          </div>
        </Reveal>
      </section>

      {/* ── La pizarra + terraza ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-2xl p-7 md:p-9" style={{ backgroundColor: '#1B2E2A', border: '6px solid #6B4A2F', boxShadow: '0 24px 50px -20px rgba(0,0,0,0.6)' }}>
              <p className={`${display.className} text-sm uppercase tracking-[0.2em] mb-1`} style={{ color: C.chalk }}>La pizarra del local</p>
              <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight mb-6`} style={{ color: '#FFF' }}>
                Lo que hay para llevar
              </h2>
              <ul className="space-y-3">
                {PIZARRA.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-base md:text-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.chalk} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <path d="M4 12h4l2-7 4 14 2-7h4" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <p className="text-xs mt-6 leading-relaxed" style={{ color: 'rgba(245,233,200,0.7)' }}>
                Según la pizarra del local y lo que nombran sus clientes en las reseñas.
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.02] mb-4`} style={{ color: '#FFF' }}>
              La terraza para quedarse un rato
            </h2>
            <p className="text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Sombrilla, mesas y sillas teal frente al paso de la avenida:
              el punto de helado de San Clemente para la tarde.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              {/* eslint-disable-next-line @next/next/no-img-element -- ya optimizado */}
              <img src={`${IMG}/terraza.webp`} alt="Dos conos de helado sobre la mesa de la terraza de La Montaña" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Eyebrow>Los que ya pasaron</Eyebrow>
            <div className="flex items-end gap-3 mb-3">
              <p className={`${display.className} font-bold text-6xl md:text-7xl leading-none`} style={{ color: C.teal }}>{BIZ.rating}</p>
              <Stars value={4.6} color={C.berry} className="w-4 h-4 mb-2" />
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en su ficha de Google. Estas van tal
              como las escribieron sus clientes.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
              style={{ color: C.teal, textDecorationColor: C.berry }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={120 + i * 100}>
                <figure className="rounded-2xl p-6 bg-white" style={{ border: `1px solid ${C.line}` }}>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                    {r.name} · Reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visita: ficha + mapa ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.02] mb-4`} style={{ color: C.teal }}>
              Sobre Av. Huamachuco
            </h2>
            <p className="text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              Al salir de San Clemente hacia la montaña: se reconoce por la
              sombrilla y la pizarra en la vereda.
            </p>
            <dl className="space-y-0 border-y" style={{ borderColor: C.line }}>
              {FICHA.map((f) => (
                <div key={f.t} className="flex items-baseline justify-between gap-4 py-3.5 border-b last:border-0" style={{ borderColor: C.line }}>
                  <dt className="text-xs uppercase tracking-[0.16em] font-bold shrink-0" style={{ color: C.muted }}>{f.t}</dt>
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
              <WaButton href={WA_LINK} label="Pedir por WhatsApp" />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm px-7 py-3 rounded-full border-[1.5px] transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current tap-44`}
                style={{ borderColor: C.teal, color: C.teal }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.ice }}>
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
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.02] mb-10`} style={{ color: C.teal }}>
            Antes de pasar
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.teal, a: C.muted, line: C.line, plusBg: C.berry, plusInk: '#FFF' }}
        />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.teal }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{ backgroundImage: `url(${IMG}/par.webp)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2rem,6vw,3.6rem)] leading-[1.0] mb-5 text-white`}>
              El helado de la tarde,
              <br />
              <span style={{ color: C.chalk }}>a un mensaje</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Pregunta por los sabores del día o encarga para llevar:
              se responde por WhatsApp.
            </p>
            <WaButton href={WA_LINK} label="Escribir por WhatsApp" tone="chalk" />
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tealDeep, color: '#FFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <p className={`${display.className} font-bold text-lg mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.lineLight }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.chalk }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, fotos y reseñas son reales de su ficha pública; los textos de apoyo son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.chalk }}>
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
