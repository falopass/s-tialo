import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Sweep } from './sweep'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// «Una noche para ser tú»: la noche del local, el magenta y el cian de
// sus neones, el violeta del escenario y el arcoíris de su muro.
const C = {
  noche: '#0B0A1A',
  nocheBajo: '#070613',
  panel: '#151230',
  magenta: '#FF2E93',
  cian: '#19E3FF',
  violeta: '#6C2BD9',
  blanco: '#FFFFFF',
  mutD: 'rgba(255,255,255,0.74)',
  mutD2: 'rgba(255,255,255,0.58)',
  lineD: 'rgba(255,255,255,0.16)',
} as const

// Las siete franjas del muro arcoíris del club (acento, nunca fondo de texto).
const FRANJAS = ['#F43F5E', '#FB923C', '#FACC15', '#4ADE80', '#19E3FF', '#6C2BD9', '#FF2E93']

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'club-angels-puerto-montt',
  title: 'Club Angels · Discoteca en Puerto Montt',
  description:
    'Discoteca en Av. Chinquihue, Puerto Montt. Pista, shows drag, noches temáticas y un ambiente respetuoso y seguro. Viernes desde las 23:00; sábados y fechas especiales por WhatsApp.',
  image: '/demos/club-angels-puerto-montt/escenario.webp',
})

const NAV_LINKS = [
  { label: 'Los shows', href: '#shows' },
  { label: 'La pista', href: '#pista' },
  { label: 'La barra', href: '#espacios' },
  { label: 'Cuándo ir', href: '#cuando' },
]

/** Curva ondulada continua: las líneas del frente de su barra. */
function onda(y: number, amp = 4, ciclos = 14, w = 1440) {
  const seg = w / ciclos
  let d = `M0 ${y}`
  for (let i = 0; i < ciclos; i++) d += ` q ${seg / 4} ${-amp} ${seg / 2} 0 t ${seg / 2} 0`
  return d
}

/** Las ondas en franjas de la barra «#NightLife»: separador del demo. */
function Ondas() {
  const ys = [10, 16, 22, 28, 34, 40, 46, 52]
  return (
    <div className="overflow-hidden py-3 md:py-4" aria-hidden="true">
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="xMidYMid slice"
        className="ca-ondas block h-12 md:h-14 w-[135%] -ml-[17%] max-w-none"
      >
        {ys.map((y, i) => (
          <path
            key={y}
            d={onda(y)}
            fill="none"
            stroke={i === 2 || i === 5 ? 'rgba(255,46,147,0.45)' : 'rgba(25,227,255,0.32)'}
            strokeWidth="1.4"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>
    </div>
  )
}

/** Pastilla con borde arcoíris: la marca «amigable con LGBTQ+» de Maps. */
function BadgeLgbtq({ className = '' }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center rounded-full px-3.5 py-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] whitespace-nowrap ${className}`}
      style={{
        border: '1.5px solid transparent',
        background:
          'linear-gradient(#0B0A1A, #0B0A1A) padding-box, linear-gradient(90deg, #F43F5E, #FB923C, #FACC15, #4ADE80, #19E3FF, #B44DFF) border-box',
        color: C.blanco,
      }}
    >
      Amigable con LGBTQ+
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone = 'magenta',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  tone?: 'magenta' | 'line'
  className?: string
}) {
  const st: CSSProperties =
    tone === 'magenta'
      ? { backgroundColor: C.magenta, color: C.noche }
      : { border: '1.5px solid rgba(255,255,255,0.5)', color: C.blanco }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`ca-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tap-44 ${className}`}
      style={st}
    >
      {tone === 'magenta' && (
        <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        </svg>
      )}
      {children}
    </a>
  )
}

function Ic({ name, className = 'w-5 h-5' }: { name: 'pin' | 'reloj' | 'fono' | 'lista'; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    fono: (
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    ),
    lista: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 9h6M9 13h6M9 17h4" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Foto con marco de borde luminoso y epígrafe debajo. */
function Foto({
  src,
  alt,
  ratio,
  caption,
  sizes,
  position,
}: {
  src: string
  alt: string
  ratio: string
  caption: string
  sizes?: string
  position?: string
}) {
  return (
    <figure className="group h-full">
      <div
        className={`relative ${ratio} overflow-hidden rounded-xl`}
        style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.panel }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes ?? '(min-width: 1024px) 44vw, 92vw'}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          style={position ? { objectPosition: position } : undefined}
        />
      </div>
      <figcaption
        className="mt-2.5 text-[10.5px] md:text-[11px] font-semibold uppercase tracking-[0.18em]"
        style={{ color: C.mutD2 }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

/** Cita de Google con borde de neón a la izquierda. */
function Cita({
  texto,
  autor,
  color = C.magenta,
  className = '',
}: {
  texto: string
  autor: string
  color?: string
  className?: string
}) {
  return (
    <blockquote className={`border-l-[3px] pl-4 md:pl-5 ${className}`} style={{ borderColor: color }}>
      <p className="text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
        “{texto}”
      </p>
      <footer
        className="mt-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em]"
        style={{ color: C.mutD2 }}
      >
        {autor}, reseña en Google
      </footer>
    </blockquote>
  )
}

export default function ClubAngelsPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.noche, color: C.blanco }}
    >
      <style>{`
        /* «El neón se enciende»: ANGELS parpadea dos veces y queda fijo. */
        @keyframes ca-neon {
          0% { opacity: 0 }
          10% { opacity: 1 }
          16% { opacity: 0.12 }
          27% { opacity: 1 }
          35% { opacity: 0.28 }
          47%, 100% { opacity: 1 }
        }
        .ca-neon { opacity: 0; animation: ca-neon 1.25s ease-out 0.25s both }
        .ca-neon-club { opacity: 0; animation: ca-neon 1.25s ease-out 0.35s both }

        /* Las franjas arcoíris suben desde abajo, una tras otra. */
        @keyframes ca-franja {
          from { transform: scaleY(0) }
          to { transform: scaleY(1) }
        }
        .ca-franja {
          transform: scaleY(0);
          transform-origin: bottom;
          opacity: 0.45;
          animation: ca-franja 0.9s cubic-bezier(0.22,0.7,0.3,1) both;
          animation-delay: var(--ca-d, 0s);
        }

        /* Las ondas de la barra se mecen despacio. */
        @keyframes ca-ondas {
          from { transform: translateX(-1.2%) }
          to { transform: translateX(1.2%) }
        }
        .ca-ondas { animation: ca-ondas 16s ease-in-out infinite alternate }

        /* Barrido de luz sobre las fotos al hacer scroll. */
        .ca-sweep { position: relative; overflow: hidden; opacity: 0; transform: translateY(22px); transition: opacity 0.8s cubic-bezier(0.25,0.1,0.25,1) var(--ca-d, 0s), transform 0.8s cubic-bezier(0.25,0.1,0.25,1) var(--ca-d, 0s); border-radius: 0.75rem }
        .ca-sweep.ca-on { opacity: 1; transform: none }
        .ca-sweep::after {
          content: ''; position: absolute; top: -25%; bottom: -25%; left: 0; width: 55%;
          background: linear-gradient(100deg, transparent 30%, rgba(255,255,255,0.30) 50%, transparent 70%);
          transform: translateX(-120%) skewX(-10deg);
          pointer-events: none;
        }
        .ca-sweep.ca-on::after {
          transform: translateX(260%) skewX(-10deg);
          transition: transform 1.15s cubic-bezier(0.3,0.55,0.25,1) calc(var(--ca-d, 0s) + 0.25s);
        }

        .ca-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .ca-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .ca-btn:active { transform: scale(0.97) }
        .ca-btn:focus-visible { outline: 3px solid ${C.cian}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .ca-neon, .ca-neon-club { animation: none !important; opacity: 1 !important }
          .ca-franja { animation: none !important; transform: none !important }
          .ca-ondas { animation: none !important }
          .ca-sweep { opacity: 1 !important; transform: none !important; transition: none !important }
          .ca-sweep::after { display: none !important }
          .ca-btn:hover { transform: none }
        }
      `}</style>

      <BlitzNav
        name={
          <span>
            Club <span style={{ color: C.magenta }}>Angels</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(7,6,19,0.92)',
          ink: C.blanco,
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.magenta,
          btnInk: C.noche,
        }}
      />

      {/* ── Hero: el neón se enciende sobre el muro arcoíris ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.noche }}>
        <Image
          src={`${IMG}/barra-azul.webp`}
          alt="La barra de Club Angels iluminada en azul y rojo, con su logo iluminado al frente"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.32 }}
        />
        {/* las siete franjas del muro, subiendo desde abajo */}
        <div className="absolute inset-x-0 top-[118px] bottom-0 flex" aria-hidden="true">
          {FRANJAS.map((c, i) => (
            <span
              key={i}
              className="ca-franja flex-1"
              style={{ backgroundColor: c, '--ca-d': `${0.45 + i * 0.09}s` } as CSSProperties}
            />
          ))}
        </div>
        {/* velo de noche: oscuro arriba y abajo, respira en el centro */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,10,26,0.42) 0%, rgba(11,10,26,0.30) 30%, rgba(11,10,26,0.68) 64%, rgba(11,10,26,0.95) 100%)',
          }}
          aria-hidden="true"
        />
        {/* halo oscuro detrás del letrero */}
        <div
          className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-[560px] h-[300px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(11,10,26,0.66) 0%, transparent 68%)' }}
          aria-hidden="true"
        />

        <div className="relative flex-1 flex flex-col w-full max-w-6xl mx-auto px-5 md:px-8">
          <div className="pt-[76px] md:pt-[90px] flex items-center justify-between gap-3">
            <Reveal>
              <p
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]"
                style={{ color: C.cian }}
              >
                Puerto Montt · Av. Chinquihue
              </p>
            </Reveal>
            <Reveal delay={150}>
              <BadgeLgbtq />
            </Reveal>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center text-center py-8">
            <p
              className={`${display.className} ca-neon-club text-[11px] md:text-xs font-bold uppercase tracking-[0.55em] mb-1 md:mb-2`}
              style={{ color: C.cian, textShadow: '0 0 14px rgba(25,227,255,0.8)' }}
              aria-hidden="true"
            >
              Club
            </p>
            <p
              className={`${display.className} ca-neon font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.7rem,11.5vw,9rem)]`}
              style={{
                color: '#FFFFFF',
                textShadow:
                  '0 0 3px #fff, 0 0 16px rgba(255,46,147,0.95), 0 0 40px rgba(255,46,147,0.7), 0 0 84px rgba(255,46,147,0.45), 0 0 130px rgba(108,43,217,0.55)',
              }}
              aria-hidden="true"
            >
              Angels
            </p>
            <Reveal delay={550}>
              <h1
                className={`${display.className} font-extrabold leading-[1.04] tracking-[-0.015em] text-[clamp(1.9rem,7.5vw,4.2rem)] mt-5 md:mt-7`}
                style={{ color: C.blanco }}
              >
                <span className="sr-only">Club Angels. </span>Una noche para ser tú.
              </h1>
            </Reveal>
            <Reveal delay={700}>
              <p className="mt-4 max-w-md text-[15px] md:text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Pista, shows drag y un ambiente respetuoso y seguro.
              </p>
            </Reveal>
            <Reveal delay={850}>
              <div className="mt-7">
                <BtnWa>¿Qué hay este finde? Escríbenos</BtnWa>
              </div>
            </Reveal>
          </div>
        </div>

        {/* barra de datos reales al pie del hero */}
        <div
          className="relative border-t"
          style={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: 'rgba(11,10,26,0.6)', backdropFilter: 'blur(6px)' }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-col items-center gap-y-1 sm:flex-row sm:justify-center sm:gap-x-6 text-[10.5px] md:text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: 'rgba(255,255,255,0.82)' }}
          >
            <span>Viernes desde las 23:00</span>
            <span className="max-w-[270px] text-center sm:max-w-none">Sábados y fechas especiales por WhatsApp</span>
            <span style={{ color: C.cian }}>186 opiniones en Google</span>
          </div>
        </div>
      </section>

      <Ondas />

      {/* ── Los shows: collage con barrido de luz ── */}
      <section id="shows" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16">
        <Reveal>
          <h2
            className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(1.8rem,6vw,3.4rem)] max-w-2xl`}
          >
            En Chinquihue, la noche tiene escenario.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-3 max-w-xl text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
            Shows drag en el escenario, noches temáticas y un público que viene a celebrar.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-8 md:mt-10">
          <div className="col-span-12 md:col-span-7 space-y-4 md:space-y-6">
            <Sweep>
              <Foto
                src={`${IMG}/escenario.webp`}
                alt="Show en el escenario de Club Angels con las letras ORGULLO y público sentado frente"
                ratio="aspect-[16/10]"
                caption="Noches temáticas en el escenario"
              />
            </Sweep>
            <Sweep delay={140}>
              <Foto
                src={`${IMG}/show-publico.webp`}
                alt="El público de Club Angels mirando el show desde las mesas, con el muro arcoíris al fondo"
                ratio="aspect-[16/10]"
                caption="El público frente al show"
              />
            </Sweep>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Sweep delay={80}>
              <Foto
                src={`${IMG}/show-drag.webp`}
                alt="Show drag en el escenario de Club Angels frente a la bandera del orgullo"
                ratio="aspect-[4/5] md:aspect-[9/16]"
                caption="Shows drag en vivo"
                sizes="(min-width: 1024px) 36vw, 92vw"
              />
            </Sweep>
          </div>
        </div>

        <Reveal delay={120}>
          <Cita texto={REVIEWS.marcos} autor="Marcos C." className="mt-8 md:mt-10 max-w-xl" />
        </Reveal>
      </section>

      {/* ── La pista y la música ── */}
      <section id="pista" className="scroll-mt-20 mt-14 md:mt-24" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-5">
            <Sweep>
              <Foto
                src={`${IMG}/pista.webp`}
                alt="La pista de baile de Club Angels iluminada en verde, azul y violeta, con el letrero Angels al fondo"
                ratio="aspect-[3/4]"
                caption="La pista antes de que se llene"
                sizes="(min-width: 1024px) 36vw, 92vw"
              />
            </Sweep>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <h2
                className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(1.8rem,6vw,3.4rem)]`}
              >
                Cuando suena tu tema, la pista es tuya.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
                En la pista de Angels suenan electrónica y reggaeton, tema a tema,
                hasta que la noche diga basta.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-5 flex flex-wrap gap-2.5">
                <span
                  className="px-3.5 py-1.5 rounded-full text-[10.5px] md:text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ border: '1.5px solid rgba(25,227,255,0.55)', color: C.cian }}
                >
                  Electrónica
                </span>
                <span
                  className="px-3.5 py-1.5 rounded-full text-[10.5px] md:text-[11px] font-bold uppercase tracking-[0.2em]"
                  style={{ border: '1.5px solid rgba(255,46,147,0.6)', color: C.magenta }}
                >
                  Reggaeton
                </span>
              </div>
            </Reveal>
            <Reveal delay={220}>
              <Cita texto={REVIEWS.roberto} autor="Roberto B." color={C.cian} className="mt-7" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Espacios y barra: bento de la casa ── */}
      <section id="espacios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(1.8rem,6vw,3.4rem)] max-w-2xl`}
          >
            Mesas para conversar y una barra que brilla.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-3 max-w-xl text-[15px] md:text-base leading-relaxed" style={{ color: C.mutD }}>
            Pista para bailar, mesas para quedarse y la barra #NightLife sirviendo
            los tragos de la noche.
          </p>
        </Reveal>

        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-8 md:mt-10">
          <div className="col-span-12 md:col-span-7">
            <Sweep>
              <Foto
                src={`${IMG}/barra-neon.webp`}
                alt="La barra de Club Angels con repisas de botellas iluminadas en neón verde y rosado"
                ratio="aspect-[21/10]"
                caption="La barra #NightLife, repisas de neón"
              />
            </Sweep>
          </div>
          <div className="col-span-12 md:col-span-5">
            <Sweep delay={100}>
              <Foto
                src={`${IMG}/muro-arcoiris.webp`}
                alt="El salón de Club Angels con el muro de franjas verticales arcoíris, mesas y sillas"
                ratio="aspect-[4/3]"
                caption="El muro arcoíris del salón"
              />
            </Sweep>
          </div>
          <div className="col-span-6 md:col-span-4">
            <Sweep delay={120}>
              <Foto
                src={`${IMG}/tragos.webp`}
                alt="Dos tragos servidos sobre la barra iluminada de Club Angels"
                ratio="aspect-[3/4]"
                caption="Tragos de la noche"
                sizes="(min-width: 1024px) 30vw, 45vw"
              />
            </Sweep>
          </div>
          <div className="col-span-6 md:col-span-4">
            <Sweep delay={200}>
              <Foto
                src={`${IMG}/barra.webp`}
                alt="La barra de Club Angels con el sello #NightLife y las botellas en repisas iluminadas"
                ratio="aspect-[3/4]"
                caption="El sello #NightLife en la barra"
                sizes="(min-width: 1024px) 30vw, 45vw"
              />
            </Sweep>
          </div>
          <div className="col-span-12 md:col-span-4">
            <Reveal delay={160} className="h-full">
              <div
                className="h-full rounded-xl p-5 md:p-6 flex flex-col justify-between min-h-[200px]"
                style={{
                  border: `1.5px solid ${C.lineD}`,
                  background: `linear-gradient(155deg, ${C.violeta} 0%, #3B1580 100%)`,
                }}
              >
                <p
                  className={`${display.className} font-extrabold uppercase text-[11px] tracking-[0.28em]`}
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  Varios espacios
                </p>
                <p className="mt-4 text-[15px] md:text-base leading-relaxed font-medium" style={{ color: '#FFFFFF' }}>
                  Pista, mesas y barra en el mismo local: te mueves según cómo venga tu noche.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Un lugar seguro: la voz de quienes van ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.nocheBajo }}>
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(108,43,217,0.22) 0%, transparent 65%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div
              className="mx-auto h-[5px] w-16 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #F43F5E, #FB923C, #FACC15, #4ADE80, #19E3FF, #B44DFF)',
              }}
              aria-hidden="true"
            />
            <h2 className="sr-only">Un lugar seguro</h2>
            <blockquote className="mt-7">
              <p
                className={`${display.className} font-bold leading-[1.28] text-[clamp(1.35rem,4.6vw,2.4rem)]`}
                style={{ color: C.blanco }}
              >
                “{REVIEWS.lisette}”
              </p>
              <footer
                className="mt-6 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em]"
                style={{ color: C.mutD2 }}
              >
                Lisette C., reseña en Google
              </footer>
            </blockquote>
            <p className="mt-5 text-sm md:text-base" style={{ color: C.mutD }}>
              {BIZ.reviews} opiniones en Google.
            </p>
          </Reveal>
        </div>
      </section>

      <Ondas />

      {/* ── Cuándo y dónde ── */}
      <section id="cuando" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2
            className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(1.8rem,6vw,3.4rem)]`}
          >
            Viernes, sábados y noches especiales.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-10 items-start">
          <Reveal>
            <div
              className="rounded-xl p-5 md:p-7"
              style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
            >
              <div className="flex gap-3.5">
                <span className="shrink-0 mt-0.5" style={{ color: C.cian }}>
                  <Ic name="pin" />
                </span>
                <div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl`}>La dirección</h3>
                  <address className="not-italic mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutD }}>
                    Av. Chinquihue, {BIZ.city}
                  </address>
                </div>
              </div>
              <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineD }}>
                <span className="shrink-0 mt-0.5" style={{ color: C.cian }}>
                  <Ic name="reloj" />
                </span>
                <div className="flex-1">
                  <h3 className={`${display.className} font-bold text-lg md:text-xl`}>Las noches</h3>
                  <ul className="mt-1.5 space-y-1.5 text-[15px]">
                    <li className="flex justify-between gap-4">
                      <span style={{ color: C.mutD }}>Viernes</span>
                      <span className="font-semibold text-right">desde las 23:00</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span style={{ color: C.mutD }}>Sábados y fechas especiales</span>
                      <span className="font-semibold text-right">pregunta por WhatsApp</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineD }}>
                <span className="shrink-0 mt-0.5" style={{ color: C.cian }}>
                  <Ic name="lista" />
                </span>
                <div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl`}>La lista</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutD }}>
                    Pregunta por la lista por WhatsApp.
                  </p>
                </div>
              </div>
              <div className="flex gap-3.5 mt-6 pt-5 border-t" style={{ borderColor: C.lineD }}>
                <span className="shrink-0 mt-0.5" style={{ color: C.cian }}>
                  <Ic name="fono" />
                </span>
                <div>
                  <h3 className={`${display.className} font-bold text-lg md:text-xl`}>El contacto</h3>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1.5 inline-block text-[15px] font-semibold underline underline-offset-2 tap-44"
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <BtnWa>Pregunta por WhatsApp</BtnWa>
                <BtnWa href={MAPS_URL} tone="line">Cómo llegar</BtnWa>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="relative w-full overflow-hidden rounded-xl aspect-[4/3] min-h-[280px]"
              style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.panel }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p
              className="mt-2.5 text-[10.5px] md:text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: C.mutD2 }}
            >
              Discotheque Club Angels en Google Maps
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.nocheBajo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className={`${display.className} font-extrabold uppercase text-lg leading-tight`}>
                Club <span style={{ color: C.magenta }}>Angels</span>
              </p>
              <p className="text-xs mt-0.5" style={{ color: C.mutD2 }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: C.cian }}
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed pr-14 sm:pr-0" style={{ color: C.mutD2 }}>
              {BIZ.address} ·{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
              . Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.blanco }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.magenta }}
              >
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
