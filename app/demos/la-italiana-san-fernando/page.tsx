import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, FORMAS, OPINIONES, WA_LINK, WA_FARDOS, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const italica = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Etiqueta de boutique: papel crema, tinta, y la franja tricolor de su logo.
const C = {
  papel: '#F6F1E8',
  papel2: '#EDE5D6',
  tinta: '#1D1B19',
  verde: '#1F6E47',
  rojo: '#B8323A',
  muted: '#5E574E',
  line: 'rgba(29,27,25,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-italiana-san-fernando',
  title: 'La Italiana San Fernando · Ropa europea reciclada',
  description:
    'Importadora de ropa europea reciclada en San Fernando: al detalle, por kilo y en fardos. Lunes a sábado. Escríbenos por WhatsApp.',
  image: '/demos/la-italiana-san-fernando/fardos.webp',
})

const NAV_LINKS = [
  { label: 'Cómo comprar', href: '#comprar' },
  { label: 'Sucursal', href: '#sucursal' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/** Franja tricolor que se despliega en tres tiempos. */
function Tricolor({ className = '', delay = 0 }: { className?: string; delay?: number }) {
  const colores = [C.verde, '#FFFFFF', C.rojo]
  return (
    <div className={`flex h-[6px] ${className}`} aria-hidden="true">
      {colores.map((c, i) => (
        <span
          key={c}
          className="li-franja block flex-1"
          style={{ backgroundColor: c, animationDelay: `${delay + i * 0.18}s`, boxShadow: c === '#FFFFFF' ? 'inset 0 0 0 1px rgba(29,27,25,0.12)' : undefined }}
        />
      ))}
    </div>
  )
}

function Rotulo({ children, color = C.muted }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.34em]" style={{ color }}>
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
  tone: 'tinta' | 'verde' | 'linea' | 'papel'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'tinta'
      ? { backgroundColor: C.tinta, color: C.papel }
      : tone === 'verde'
        ? { backgroundColor: C.verde, color: '#FFFFFF' }
        : tone === 'papel'
          ? { backgroundColor: C.papel, color: C.tinta }
          : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="li-btn inline-flex items-center justify-center px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function LaItalianaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        /* La etiqueta cuelga de la percha y se balancea hasta quedar quieta. */
        @keyframes li-cuelga {
          0% { transform: rotate(-22deg); opacity: 0 }
          12% { opacity: 1 }
          30% { transform: rotate(14deg) }
          50% { transform: rotate(-8deg) }
          68% { transform: rotate(4deg) }
          84% { transform: rotate(-1.5deg) }
          100% { transform: rotate(0deg); opacity: 1 }
        }
        .li-cuelga { transform-origin: 50% 0; animation: li-cuelga 2.4s ease-out 0.9s both }

        /* Franja tricolor: cada color se despliega después del anterior. */
        @keyframes li-franja { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .li-franja { transform-origin: left center; animation: li-franja 0.45s cubic-bezier(0.3,0.7,0.2,1) both }

        @keyframes li-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .li-sube { animation: li-sube 0.9s ease-out both }

        /* La foto de los fardos se descubre como una cortina que sube. */
        @keyframes li-cortina { from { clip-path: inset(100% 0 0 0) } to { clip-path: inset(0 0 0 0) } }
        .li-cortina { animation: li-cortina 1.2s cubic-bezier(0.6,0.05,0.2,1) 0.2s both }

        .li-btn { transition: transform 0.18s ease, background-color 0.18s ease }
        .li-btn:hover { transform: translateY(-2px) }
        .li-btn:active { transform: scale(0.97) }
        .li-btn:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .li-cuelga, .li-franja, .li-sube, .li-cortina { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(246,241,232,0.95)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.tinta,
          btnInk: C.papel,
        }}
      />

      {/* ── 1 · Hero: la etiqueta que cuelga ── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          <div>
            <div className="li-sube" style={{ animationDelay: '0.15s' }}>
              <Rotulo>Importadora · Sucursal {BIZ.city}</Rotulo>
            </div>
            <h1
              className={`${display.className} li-sube mt-6 leading-[1.02] tracking-[-0.01em] text-[clamp(2.5rem,9vw,5.8rem)]`}
              style={{ animationDelay: '0.3s' }}
            >
              Ropa europea
              <br />
              con{' '}
              <span className={italica.className} style={{ fontStyle: 'italic', color: C.verde }}>
                segunda vida.
              </span>
            </h1>
            <Tricolor className="mt-7 max-w-[220px]" delay={0.7} />
            <p className="li-sube mt-7 max-w-md text-lg leading-relaxed" style={{ color: C.muted, animationDelay: '1s' }}>
              Ropa reciclada que llega de Europa, de buena calidad y a buen
              precio. Se compra al detalle, por kilo o en fardos.
            </p>
            <div className="li-sube mt-8 flex flex-wrap gap-3" style={{ animationDelay: '1.15s' }}>
              <Btn href={WA_LINK} tone="tinta">
                Escribir por WhatsApp
              </Btn>
              <Btn href="#comprar" tone="linea" external={false}>
                Cómo comprar
              </Btn>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[400px]">
            <div className="li-cortina relative overflow-hidden aspect-[3/4]" style={{ boxShadow: '0 30px 60px rgba(29,27,25,0.22)' }}>
              <Image
                src={`${IMG}/fardos.webp`}
                alt="Fardos de ropa en la bodega de La Italiana en San Fernando"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 90vw"
                className="object-cover"
              />
            </div>
            {/* percha + etiqueta colgante */}
            <div className="absolute -top-6 left-6 md:left-auto md:-left-10 flex flex-col items-center" aria-hidden="true">
              <span className="block h-9 w-px" style={{ backgroundColor: C.tinta }} />
              <div className="li-cuelga flex flex-col items-center">
                <span className="block h-3 w-3 rounded-full -mb-1.5 z-10" style={{ border: `2px solid ${C.tinta}`, backgroundColor: C.papel }} />
                <div
                  className="px-5 pt-5 pb-4 text-center"
                  style={{
                    backgroundColor: C.papel,
                    border: `1.5px solid ${C.tinta}`,
                    clipPath: 'polygon(50% 0, 100% 14%, 100% 100%, 0 100%, 0 14%)',
                    boxShadow: '0 12px 24px rgba(29,27,25,0.18)',
                  }}
                >
                  <p className={`${display.className} text-xl leading-none`}>La Italiana</p>
                  <div className="mt-2 flex h-[3px] w-full">
                    <span className="flex-1" style={{ backgroundColor: C.verde }} />
                    <span className="flex-1" style={{ backgroundColor: '#FFFFFF' }} />
                    <span className="flex-1" style={{ backgroundColor: C.rojo }} />
                  </div>
                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.24em]" style={{ color: C.muted }}>
                    Detalle · Kilo · Fardo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Cómo comprar: tres columnas tipográficas ── */}
      <section id="comprar" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Tres formas de comprar</Rotulo>
            <h2 className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.2rem,6vw,4rem)]`}>
              Una prenda,{' '}
              <span className={italica.className} style={{ fontStyle: 'italic', color: C.rojo }}>
                un kilo
              </span>{' '}
              o un fardo.
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-10 md:gap-8">
            {FORMAS.map((f, i) => (
              <Reveal key={f.n} delay={i * 120}>
                <div className="border-t-2 pt-5" style={{ borderColor: C.tinta }}>
                  <p className={`${italica.className} text-4xl`} style={{ fontStyle: 'italic', color: C.verde }}>
                    {f.n}
                  </p>
                  <h3 className={`${display.className} mt-2 text-3xl`}>{f.titulo}</h3>
                  <p className="mt-3 text-base leading-relaxed" style={{ color: C.muted }}>
                    {f.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12">
              <Btn href={WA_FARDOS} tone="verde">
                Preguntar por fardos
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · La sucursal: fachada + horario ── */}
      <section id="sucursal" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[auto_1fr] gap-12 md:gap-16 items-center">
          <Reveal>
            <figure className="mx-auto w-[270px] md:w-[320px] p-3 pb-4" style={{ backgroundColor: C.papel, transform: 'rotate(-2deg)' }}>
              <div className="relative overflow-hidden aspect-[357/175]">
                <Image src={`${IMG}/fachada.webp`} alt="Letrero de La Italiana, ropa reciclada, en la fachada de San Fernando" fill sizes="320px" className="object-cover" />
              </div>
              <figcaption className={`${italica.className} mt-3 text-center text-xl`} style={{ fontStyle: 'italic', color: C.tinta }}>
                Te esperamos
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <Rotulo color="rgba(246,241,232,0.7)">Sucursal {BIZ.city}</Rotulo>
            <h2 className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.2rem,5.5vw,3.8rem)]`}>
              Ven a elegir
              <br />
              con calma.
            </h2>
            <Tricolor className="mt-6 max-w-[180px]" />
            <dl className="mt-8 max-w-md">
              {HORARIO.map((h) => (
                <div key={h.dia} className="flex justify-between gap-6 border-b py-3.5" style={{ borderColor: 'rgba(246,241,232,0.18)' }}>
                  <dt style={{ color: 'rgba(246,241,232,0.75)' }}>{h.dia}</dt>
                  <dd className="text-right font-medium">{h.hora}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: 'rgba(246,241,232,0.8)' }}>
              Llegan temporadas nuevas seguido. Los avances se publican en
              Instagram, y por WhatsApp te contamos qué hay hoy en la sucursal.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={WA_LINK} tone="papel">
                ¿Qué llegó hoy?
              </Btn>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-2 text-sm font-semibold uppercase tracking-[0.14em] underline underline-offset-4 tap-44"
                style={{ color: C.papel }}
              >
                Ver Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20">
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Rotulo>Opiniones en Google</Rotulo>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-12 md:gap-10">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 140}>
                <figure>
                  <blockquote className={`${italica.className} text-[clamp(2rem,5vw,3rem)] leading-[1.1]`} style={{ fontStyle: 'italic' }}>
                    “{o.texto}”
                  </blockquote>
                  <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.muted }}>
                    {o.autor}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex text-sm font-semibold underline underline-offset-4 tap-44"
              style={{ color: C.verde }}
            >
              Ver la ficha en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Dónde ── */}
      <section id="donde" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Rotulo>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.2rem,5.5vw,3.8rem)]`}>
              La Italiana,
              <br />
              <span className={italica.className} style={{ fontStyle: 'italic', color: C.verde }}>
                {BIZ.city}
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed" style={{ color: C.muted }}>
              {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.tinta }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="tinta">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="linea">
                WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden aspect-[4/3] min-h-[300px]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
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
      <section style={{ backgroundColor: C.verde, color: '#FFFFFF' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} leading-[1.05] text-[clamp(2.4rem,7vw,4.4rem)]`}>
              Buena ropa,{' '}
              <span className={italica.className} style={{ fontStyle: 'italic' }}>
                buen precio.
              </span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Escríbenos y te contamos qué hay en la sucursal de {BIZ.city}.
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
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl`}>{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(246,241,232,0.7)' }}>
                {BIZ.rubro} · Sucursal {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,232,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,232,0.85)' }}>
                Instagram
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,232,0.85)' }}>
                Facebook
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(246,241,232,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,241,232,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.full}, sucursal {BIZ.city}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#9FD8B8' }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name} ${BIZ.city}`} />
    </div>
  )
}
