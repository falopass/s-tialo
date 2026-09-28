import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({ src: '../../fonts/space-mono/normal-400.woff2', weight: '400' })
const monoBold = localFont({ src: '../../fonts/space-mono/normal-700.woff2', weight: '700' })

/**
 * Dirección de arte: «casa nikkei de noche» — tinta sumi, papel de
 * menú y el rojo lacado del logo de Taku (la casita 家). El motivo es
 * el noren: los paneles de tela colgados de la entrada japonesa, aquí
 * convertidos en cenefa y divisor. La carta se imprime como ticket de
 * cocina: papel crema, tipo mono, borde dentado. Cormorant Garamond
 * hace de letra de restaurante fino; Space Mono ficha los datos.
 */
const C = {
  ink: '#161110',
  sumi: '#221A16',
  noche: '#0D0A09',
  paper: '#F4ECDC',
  crema: '#EAE0CB',
  aka: '#C53A2E',
  akaSoft: '#E8927F',
  kin: '#E0A33C',
  muted: '#A8988A',
  mutedDark: '#6E5F55',
  line: 'rgba(244,236,220,0.16)',
  lineDark: 'rgba(22,17,16,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'taku-nikkei',
  title: 'TAKU NIKKEI — Cocina fusión japonesa-peruana en Talca',
  description:
    'Sushi nikkei, ceviche, tiraditos y rolls en Av. 2 Norte 4715, Talca. Delivery y retiro. Reservas y pedidos por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Fusión', href: '#fusion' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El local', href: '#local' },
]

const HORARIO = [
  { dia: 'Lunes a sábado', hora: '13:00 – 23:00' },
  { dia: 'Domingo', hora: '12:00 – 22:00' },
]

/** Ticket de cocina: la carta tal como la publican. */
const TICKET = [
  { item: 'Rolls de la casa', nota: 'empanizados, acevichados y especiales', precio: '' },
  { item: 'Taku Imperial', nota: 'promo del sábado según sus publicaciones', precio: '$5.000' },
  { item: 'Ceviche nikkei', nota: 'domingo de ceviche, con copa o jugo', precio: '' },
  { item: 'Tiradito', nota: 'cortes finos, salsa de la casa', precio: '' },
  { item: 'Nigiri y sashimi', nota: 'pescado fresco del día', precio: '' },
  { item: 'Ostras', nota: 'cuando hay temporada', precio: '' },
  { item: 'Bowls calientes', nota: 'arroz, mar y proteína a la plancha', precio: '' },
]

const REVIEWS = [
  {
    nombre: 'Tamara Arriagada',
    texto:
      'MUY MUY buen local, servicio de excelencia, la atención súper amable y amigable. Fui con mi perrita y la recibieron con mucho gusto, los rolls demasiado ricos, muy bien preparados. Lo recomiendo totalmente.',
    cuando: 'Hace 4 meses',
  },
  {
    nombre: 'Bárbara Avilés',
    texto:
      'Visitamos este lugar por la buena valoración en Google, y no nos sorprendió lo bueno que estaba. La presentación de cada plato 10/10. Pescados muy frescos y bien preparados.',
    cuando: 'Hace 5 meses',
  },
  {
    nombre: 'Francisco Ramírez González',
    texto:
      'Muy buen lugar, partiendo como se debe con la atención. Los sabores y la calidad espectacular.',
    cuando: 'Hace 9 meses',
  },
]

const PLATOS = [
  { src: 'nigiri', alt: 'Nigiri flameado con salsa de la casa en TAKU NIKKEI, Talca', tag: 'Nigiri' },
  { src: 'rolls', alt: 'Fila de rolls acevichados servidos en TAKU NIKKEI', tag: 'Rolls' },
  { src: 'fritos', alt: 'Bocados de roll empanizado con topping de la casa', tag: 'Tempura' },
  { src: 'bowl', alt: 'Bowl caliente con carne, huevo y verduras', tag: 'Bowls' },
]

// ── Piezas de la casa ────────────────────────────────────────

/** Noren: tres paneles de tela colgados, cenefa de entrada japonesa. */
function Noren({ className = '' }: { className?: string }) {
  return (
    <div className={`flex justify-center ${className}`} aria-hidden="true">
      {[
        { bg: C.aka, mark: '家' },
        { bg: C.paper, mark: '', ink: C.ink },
        { bg: C.sumi, mark: '宅' },
      ].map((p, i) => (
        <div
          key={i}
          className="w-16 md:w-24 mx-px"
          style={{
            backgroundColor: p.bg,
            height: i === 1 ? 64 : 88,
            borderRadius: '0 0 6px 6px',
            borderTop: `3px solid ${C.kin}`,
          }}
        >
          {p.mark && (
            <span
              className={`${display.className} block text-center pt-3 text-2xl md:text-3xl`}
              style={{ color: p.ink || C.paper }}
            >
              {p.mark}
            </span>
          )}
        </div>
      ))}
    </div>
  )
}

/** Eyebrow de casa: letra mono pequeña con filete rojo. */
function Ficha({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${monoBold.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.kin : C.aka }}
    >
      <span className="inline-block w-9 border-t-2 border-dashed" aria-hidden="true" />
      {children}
    </p>
  )
}

/** Borde dentado de ticket (zigzag con gradiente cónico). */
function TicketEdge({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        background: `repeating-linear-gradient(${flip ? '-45deg' : '45deg'}, ${color} 0 6px, transparent 6px 12px)`,
        backgroundSize: '12px 12px',
      }}
    />
  )
}

/** Aviso de Sitiazo en el flujo (no fijo). */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function TakuNikkeiPage() {
  return (
    <div className={`${body.className} tkn min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.ink, color: C.paper }}>
      <style>{`
        html { scroll-behavior: auto }
        .tkn a:focus-visible { outline: 2px solid ${C.kin}; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(22,17,16,0.96)',
          ink: C.paper,
          line: C.line,
          btnBg: C.aka,
          btnInk: C.paper,
        }}
      />

      {/* ── Hero: la casa de las lámparas ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.noche }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Salón de TAKU NIKKEI con lámparas cálidas y el logo de la casa en el vidrio, Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(13,10,9,0.55) 0%, rgba(13,10,9,0.25) 45%, rgba(13,10,9,0.88) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28">
          <Reveal>
            <Ficha light>Cocina nikkei · Av. 2 Norte, Talca</Ficha>
            <h1 className={`${display.className} font-semibold leading-[0.92] text-[clamp(3.6rem,14vw,8.5rem)]`} style={{ color: C.paper, textShadow: '0 4px 30px rgba(13,10,9,0.6)' }}>
              Taku <span className="italic font-light" style={{ color: C.akaSoft }}>nikkei</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mt-5" style={{ color: 'rgba(244,236,220,0.9)' }}>
              Fusión japonesa-peruana: rolls, ceviche, tiraditos y bowls,
              servidos bajo las lámparas de Av. 2 Norte. Delivery y retiro.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.14em] px-7 py-3.5 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.aka, color: C.paper }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.14em] px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(244,236,220,0.55)', color: C.paper }}
              >
                Ver la carta
              </a>
              <span className={`${mono.className} inline-flex items-center gap-2 text-xs md:text-sm px-4 py-3 rounded-full`} style={{ backgroundColor: 'rgba(13,10,9,0.6)', color: C.paper, border: `1px solid ${C.line}` }}>
                <Stars value={4.7} color={C.kin} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
        </div>
        {/* el noren de la entrada */}
        <div className="relative mt-10">
          <Noren />
          <div style={{ backgroundColor: C.paper }}>
            <ul
              className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 md:pr-8 flex flex-wrap justify-center gap-x-7 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] text-center`}
              style={{ color: C.ink }}
            >
              {['Lu–Sa 13:00–23:00', 'Do 12:00–22:00', 'Delivery & retiro', 'Av. 2 Norte 4715'].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── La carta: ticket de cocina ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Ficha>La carta</Ficha>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.paper }}>
              Lo que sale
              <br />
              <span className="italic font-light" style={{ color: C.akaSoft }}>de esta cocina</span>
            </h2>
            <div style={{ filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.45))' }}>
              <TicketEdge color={C.paper} />
              <div className="px-6 md:px-8 py-6" style={{ backgroundColor: C.paper, color: C.ink }}>
                <p className={`${monoBold.className} text-center text-xs uppercase tracking-[0.3em] mb-1`}>Taku Nikkei</p>
                <p className={`${mono.className} text-center text-[10px] uppercase tracking-[0.2em] mb-5`} style={{ color: C.mutedDark }}>
                  Ticket de cocina · Talca
                </p>
                <ul>
                  {TICKET.map((t) => (
                    <li key={t.item} className="flex items-baseline gap-2 py-2.5 border-b border-dashed" style={{ borderColor: C.lineDark }}>
                      <span className="min-w-0">
                        <span className={`${monoBold.className} block text-[13px] md:text-sm uppercase tracking-wide`}>{t.item}</span>
                        <span className={`${mono.className} block text-[11px] mt-0.5`} style={{ color: C.mutedDark }}>{t.nota}</span>
                      </span>
                      <span className="flex-1 border-b border-dotted -translate-y-1 mx-1" style={{ borderColor: C.lineDark }} aria-hidden="true" />
                      <span className={`${monoBold.className} text-[13px] whitespace-nowrap`} style={{ color: C.aka }}>
                        {t.precio || 'al día'}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] text-center mt-5`} style={{ color: C.mutedDark }}>
                  Carta completa y precios del día por WhatsApp
                </p>
              </div>
              <TicketEdge color={C.paper} flip />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-4 md:gap-5 lg:pt-14">
            <Reveal delay={80}>
              <figure className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <Image src={`${IMG}/bolsa.webp`} alt="Rolls sobre la bolsa de papel con el logo de la casa TAKU" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <figure className="relative overflow-hidden rounded-2xl aspect-[3/4] mt-8">
                <Image src={`${IMG}/nigiri.webp`} alt="Nigiri flameado con sésamo y salsa en TAKU NIKKEI" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Fusión: Perú × Japón ── */}
      <section id="fusion" className="scroll-mt-20" style={{ backgroundColor: C.sumi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Ficha>La fusión</Ficha>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-px overflow-hidden rounded-3xl" style={{ backgroundColor: C.line }}>
            <Reveal className="h-full">
              <div className="h-full px-7 md:px-10 py-10 md:py-14" style={{ backgroundColor: C.paper, color: C.ink }}>
                <p className={`${monoBold.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.aka }}>Japón</p>
                <p className={`${display.className} text-3xl md:text-4xl font-semibold leading-tight`}>
                  La técnica: cortes finos, arroz en su punto, nigiri flameado.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="h-full">
              <div className="h-full px-7 md:px-10 py-10 md:py-14" style={{ backgroundColor: C.aka, color: C.paper }}>
                <p className={`${monoBold.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.crema }}>Perú</p>
                <p className={`${display.className} text-3xl md:text-4xl font-semibold leading-tight`}>
                  El sabor: ceviche, ají, limón y leche de tigre.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mt-8" style={{ color: C.muted }}>
              Eso es la cocina nikkei y así la sirven en Taku: precisión
              japonesa sobre sabor peruano. Se nota en los rolls, en el
              tiradito y en el ceviche de los domingos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Galería: la mesa puesta ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.paper }}>
              La mesa,
              <br />
              <span className="italic font-light" style={{ color: C.akaSoft }}>servida</span>
            </h2>
            <p className={`${mono.className} text-xs max-w-xs`} style={{ color: C.muted }}>
              Fotos reales de su cocina y su salón.
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PLATOS.map((p, i) => (
            <li key={p.src} className={i % 2 === 1 ? 'lg:mt-10' : ''}>
              <Reveal delay={i * 90} className="h-full">
                <figure className="group">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                    <Image src={`${IMG}/${p.src}.webp`} alt={p.alt} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]" />
                  </div>
                  <figcaption className={`${monoBold.className} text-[10px] uppercase tracking-[0.24em] mt-2.5`} style={{ color: C.kin }}>
                    {p.tag}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Reseñas: el 4,7 de Google ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Ficha>Lo que dicen</Ficha>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
                Cuatro siete
                <br />
                <span className="italic font-light" style={{ color: C.aka }}>sobre cinco</span>
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <Stars value={4.7} color={C.aka} className="w-5 h-5" />
                <span className={`${monoBold.className} text-sm`}>{BIZ.rating} · {BIZ.reviews} reseñas en Google</span>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block text-xs uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.ink, textDecorationColor: C.aka }}
              >
                Leerlas en Google Maps →
              </a>
            </Reveal>
            <div className="grid gap-5">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 110}>
                  <figure
                    className="rounded-2xl p-5 md:p-6"
                    style={{ backgroundColor: '#FBF6EA', border: `1px solid ${C.lineDark}`, rotate: i === 1 ? '0.4deg' : '-0.4deg' }}
                  >
                    <Stars value={5} color={C.aka} className="w-3.5 h-3.5 mb-3" />
                    <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.sumi }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className={`${monoBold.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.aka }}>
                      {r.nombre} · Google · {r.cuando}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── El local: la casa de Av. 2 Norte ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.sumi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <figure className="relative">
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3]" style={{ boxShadow: '0 20px 55px rgba(0,0,0,0.45)' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de TAKU NIKKEI con terraza en Av. 2 Norte 4715, Talca"
                  fill
                  sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              <div
                className={`${monoBold.className} absolute -bottom-4 left-5 text-[10px] uppercase tracking-[0.2em] px-4 py-2.5 rounded-full`}
                style={{ backgroundColor: C.aka, color: C.paper }}
              >
                Terraza + salón
              </div>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <Ficha>El local</Ficha>
            <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.paper }}>
              La casa
              <br />
              <span className="italic font-light" style={{ color: C.akaSoft }}>de Av. 2 Norte</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6 max-w-xl" style={{ color: 'rgba(244,236,220,0.85)' }}>
              {BIZ.address}, {BIZ.city}. Local 1, con terraza y un salón de
              lámparas cálidas. Delivery y retiro en local todos los días.
            </p>
            <div className="rounded-2xl p-5 max-w-md mb-6" style={{ backgroundColor: C.noche, border: `1px solid ${C.line}` }}>
              <p className={`${monoBold.className} text-[10px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.kin }}>
                Horario
              </p>
              <ul>
                {HORARIO.map((h) => (
                  <li key={h.dia} className="flex items-baseline gap-2 py-1.5">
                    <span className="text-[13px] font-bold" style={{ color: C.paper }}>{h.dia}</span>
                    <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: C.line }} aria-hidden="true" />
                    <span className={`${mono.className} text-[13px] whitespace-nowrap`} style={{ color: C.crema }}>{h.hora}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className={`${mono.className} text-xs mb-8`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay} · {BIZ.igHandle}
            </p>
            <div className="rounded-2xl overflow-hidden aspect-[16/10]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.aka }}>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${monoBold.className} text-[11px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.crema }}>
              Pedidos & reservas
            </p>
            <h2 className={`${display.className} text-4xl sm:text-5xl font-semibold leading-[1.02] tracking-tight`} style={{ color: C.paper }}>
              Esta noche,
              <br />
              <span className="italic font-light">mesa en Taku</span>
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: 'rgba(244,236,220,0.85)' }}>
              Reserva, pide para delivery o retira en local: un WhatsApp y listo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.14em] px-8 py-3.5 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.noche, color: C.paper }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${monoBold.className} text-xs md:text-sm uppercase tracking-[0.14em] px-8 py-3.5 rounded-full border tap-44`}
                style={{ borderColor: 'rgba(244,236,220,0.6)', color: C.paper }}
              >
                {BIZ.igHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.noche, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl font-semibold`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(244,236,220,0.7)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,236,220,0.85)' }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
