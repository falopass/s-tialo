import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, IG_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Identidad desde sus activos reales: el círculo ensō rojo del logo,
 * el interior oscuro de madera y las fotos de la carta. La página se
 * lee como la carta del local: tinta y papel washi, precios en mono.
 */
const C = {
  ink: '#191210',
  inkSoft: '#4a3f38',
  paper: '#f4eee1',
  card: '#fbf8f0',
  night: '#14100d',
  nightSoft: '#241d17',
  red: '#b83327',
  cream: '#f0e8d6',
  line: 'rgba(25,18,16,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'naru-cocina-japonesa-sushi-talca',
  title: 'NARU Cocina Japonesa & Sushi — Calle 32 Oriente, Talca',
  description:
    'Cocina japonesa y sushi en Calle 32 Oriente 1470, Local 116, Talca. Rolls, gohan y el ramen que recomiendan sus clientes. Nota 4,8 en Google. Reserva por WhatsApp.',
  image: `${IMG}/ramen.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/** Marca de sección: un trazo ensō — el círculo abierto del logo. */
function EnsoMark({ label, light = false }: { label: string; light?: boolean }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3`} style={{ color: light ? C.cream : C.red }}>
      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" aria-hidden="true">
        <path d="M13 3a10 10 0 1 1-8.6 4.9" stroke={C.red} strokeWidth="3.4" strokeLinecap="round" />
      </svg>
      {label}
    </p>
  )
}

export default function NaruPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className="font-bold tracking-[0.14em]">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(20,16,13,0.92)',
          ink: C.cream,
          line: 'rgba(240,232,214,0.16)',
          btnBg: C.red,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: el bowl de la casa ── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28 pb-12 md:pb-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <EnsoMark label="cocina japonesa & sushi · Talca" light />
            <h1 className={`${display.className} font-bold leading-[1.02] tracking-tight text-[clamp(2.4rem,8vw,4.6rem)] mb-5`} style={{ color: C.cream }}>
              Sushi y ramen
              <br />
              <span style={{ color: C.red }}>en el centro de Talca</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: 'rgba(240,232,214,0.75)' }}>
              En {BIZ.address}: rolls, gohan y el ramen que sus clientes más
              recomiendan. De domingo a jueves, desde las 12:30.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-8 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: '#fff' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm px-4 py-2.5 border tap-44"
                style={{ borderColor: 'rgba(240,232,214,0.3)', color: C.cream }}
              >
                <Stars value={4.8} color={C.red} className="w-4 h-4" />
                <span className="font-medium">{BIZ.rating} · {BIZ.reviews} opiniones</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <img
                src={`${IMG}/ramen.webp`}
                alt={`Bowl de ramen de ${BIZ.name} con huevo, vegetales y fideos`}
                fetchPriority="high"
                className="w-full aspect-[4/3.6] object-cover"
                style={{ border: `2px solid rgba(240,232,214,0.25)` }}
              />
              <div
                className="absolute -bottom-4 -left-4 md:-left-8 w-24 md:w-32 rotate-[-4deg]"
                aria-hidden="true"
              >
                <img
                  src={`${IMG}/logo.webp`}
                  alt=""
                  className="w-full object-contain"
                  style={{ filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.45))' }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta: precios reales + riel de fotos ── */}
      <section id="carta" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <EnsoMark label="la carta" />
            <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-5xl leading-[1.04] mb-8`} style={{ color: C.ink }}>
              Lo que se come
              <br />
              en NARU
            </h2>
            <div className="space-y-8">
              {CARTA.map((g) => (
                <div key={g.grupo}>
                  <h3 className={`${mono.className} text-[11px] uppercase tracking-[0.28em] pb-2 mb-1 border-b-2`} style={{ color: C.red, borderColor: C.red }}>
                    {g.grupo}
                  </h3>
                  <ul>
                    {g.items.map((it) => (
                      <li key={it.nombre} className="flex items-baseline gap-3 py-3 border-b" style={{ borderColor: C.line }}>
                        <span className="font-medium text-[15px] md:text-base" style={{ color: C.ink }}>{it.nombre}</span>
                        {'desc' in it && it.desc && (
                          <span className="hidden sm:inline text-[12px]" style={{ color: C.inkSoft }}>· {it.desc}</span>
                        )}
                        <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.line }} aria-hidden="true" />
                        {'precio' in it && it.precio ? (
                          <span className={`${mono.className} text-sm md:text-[15px] font-medium shrink-0`} style={{ color: C.ink }}>{it.precio}</span>
                        ) : (
                          <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em] shrink-0`} style={{ color: C.red }}>pregunta</span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="text-[13px] mt-6" style={{ color: C.inkSoft }}>
              Precios de la carta publicada por el local. La carta completa está
              en el local y en su Instagram.
            </p>
          </Reveal>
          <div className="space-y-4 md:space-y-5 lg:sticky lg:top-24">
            <Reveal delay={80}>
              <img
                src={`${IMG}/platos.webp`}
                alt="Dos platos de la carta de NARU servidos sobre pizarra"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
                style={{ border: `2px solid ${C.ink}` }}
              />
            </Reveal>
            <Reveal delay={160}>
              <img
                src={`${IMG}/volcano.webp`}
                alt="Volcano roll de NARU con topping crocante"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
                style={{ border: `2px solid ${C.ink}` }}
              />
            </Reveal>
            <Reveal delay={220}>
              <img
                src={`${IMG}/gohan.webp`}
                alt="Gohan de NARU servido en bowl con palta en espiral"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
                style={{ border: `2px solid ${C.ink}` }}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El local: interior + barra ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <EnsoMark label="el local" light />
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-5xl leading-[1.04]`} style={{ color: C.cream }}>
                Madera, luces bajas
                <br />y cocina a la vista
              </h2>
              <p className="text-sm md:text-base max-w-sm" style={{ color: 'rgba(240,232,214,0.7)' }}>
                Un local en galería del centro de Talca: mesas de madera,
                barra y tragos de autor para acompañar.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { f: 'interior', alt: `Interior del restaurante ${BIZ.short} con techo vidriado y mesas de madera` },
              { f: 'mesa-llena', alt: `Mesa servida con varios platos y tragos en ${BIZ.short}` },
              { f: 'salon', alt: `Salón del local ${BIZ.short} con su logo rojo en la pared y sombrillas colgadas` },
              { f: 'spritz', alt: `Trago de autor naranja servido en ${BIZ.short}` },
            ].map((p, i) => (
              <Reveal key={p.f} delay={i * 70}>
                <img
                  src={`${IMG}/${p.f}.webp`}
                  alt={p.alt}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                  style={{ border: '1px solid rgba(240,232,214,0.2)' }}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14 border-b-2 pb-8" style={{ borderColor: C.ink }}>
              <div>
                <EnsoMark label="opiniones" />
                <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-5xl leading-[1.04]`} style={{ color: C.ink }}>
                  253 personas ya
                  <br />
                  pasaron por la mesa
                </h2>
              </div>
              <div className="flex items-center gap-4">
                <p className={`${display.className} font-bold text-6xl md:text-7xl leading-none`} style={{ color: C.ink }}>{BIZ.rating}</p>
                <div>
                  <Stars value={4.8} color={C.red} className="w-5 h-5 mb-1.5" />
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                    en Google
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <figure className="border-l-4 pl-5 md:pl-6" style={{ borderColor: C.red }}>
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3 flex-wrap">
                    <span className={`${display.className} text-[13px] font-semibold`} style={{ color: C.red }}>{r.autor}</span>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.inkSoft }}>
                      Google · {r.detalle}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch border-t-2" style={{ borderColor: C.ink }}>
          <div className="pt-8 md:pt-10">
            <Reveal>
              <EnsoMark label="cómo llegar" />
              <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-4xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
                Calle 32 Oriente,
                <br />
                <span style={{ color: C.red }}>centro de Talca</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.inkSoft }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
              </address>
              <div className="border-y mb-8" style={{ borderColor: C.line }}>
                {HORARIO.map(([dia, hora]) => (
                  <div key={dia} className="flex items-baseline justify-between py-3.5 border-b last:border-b-0 text-sm md:text-base" style={{ borderColor: C.line }}>
                    <span className="font-medium" style={{ color: C.ink }}>{dia}</span>
                    <span className={`${mono.className} tabular-nums`} style={{ color: hora === 'Cerrado' ? C.red : C.inkSoft }}>{hora}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm md:text-base px-8 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.ink, color: C.cream }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={IG_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-medium px-6 py-3 border-2 tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  @{BIZ.instagram}
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="h-full min-h-[320px]" style={{ border: `2px solid ${C.ink}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 object-contain" aria-hidden="true" />
            <p className={`${display.className} font-bold tracking-[0.14em] text-sm`} style={{ color: C.cream }}>
              {BIZ.name}
            </p>
          </div>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(240,232,214,0.55)' }}>
            {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Reservar en ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
