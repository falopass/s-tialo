import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_ENVIO,
  IG_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  REPISAS,
  VIRALES,
  RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  blush: '#FBE3EE',
  blush2: '#F6CBDE',
  card: '#FFF9FB',
  pink: '#D90E79',
  pinkDeep: '#A3095C',
  lilac: '#8B5BC7',
  ink: '#38101F',
  plum: '#2B0A18',
  muted: 'rgba(56,16,31,0.72)',
  line: 'rgba(56,16,31,0.16)',
  lineDark: 'rgba(251,227,238,0.22)',
  blushSoft: 'rgba(251,227,238,0.78)',
}

const BTN_SOLID = `${display.className} rb-btn-pink font-extrabold text-sm px-7 py-3 rounded-full transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38101F] tap-44`
const BTN_GHOST = `${display.className} font-extrabold text-sm px-7 py-3 rounded-full border-2 transition active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`

export const metadata: Metadata = demoMetadata({
  slug: 'rou-beauty',
  title: 'Rou Beauty · Skincare coreano y belleza en Molina',
  description:
    'Tienda de belleza en Quechereguas 1696, Portal Molina: skincare coreano, hair care, maquillaje y perfumes. Envíos a todo Chile. Consulta por WhatsApp.',
  image: '/demos/rou-beauty/hero-fachada.webp',
})

const NAV_LINKS = [
  { label: 'La tienda', href: '#tienda' },
  { label: 'Virales', href: '#virales' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Visítanos', href: '#visita' },
]

const MARQUEE = [
  'skincare coreano',
  'hair care',
  'maquillaje',
  'perfumes',
  'accesorios',
  'envíos a todo Chile',
]

/** Corazón del logo / mural, reutilizado como motivo. */
function Heart({ className = '', color = C.pink }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 20.6C12 20.6 4.4 14.9 4.4 9.6 4.4 7 6.3 5.1 8.8 5.1c1.4 0 2.5.6 3.2 1.6.7-1 1.8-1.6 3.2-1.6 2.5 0 4.4 1.9 4.4 4.5 0 5.3-7.6 11-7.6 11Z" />
    </svg>
  )
}

function Head({
  kicker,
  title,
  note,
  dark = false,
}: {
  kicker: string
  title: React.ReactNode
  note?: string
  dark?: boolean
}) {
  return (
    <Reveal>
      <div className="mb-10 md:mb-14">
        <p
          className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2`}
          style={{ color: dark ? C.blush2 : C.pinkDeep }}
        >
          <Heart className="w-3 h-3" color={dark ? C.blush2 : C.pink} />
          {kicker}
        </p>
        <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
          <h2
            className={`${display.className} font-extrabold leading-[0.95] tracking-[-0.01em] text-4xl md:text-6xl max-w-3xl`}
            style={{ color: dark ? '#FFF9FB' : C.ink }}
          >
            {title}
          </h2>
          {note && (
            <p
              className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.24em] max-w-[240px] md:text-right`}
              style={{ color: dark ? C.blushSoft : C.muted }}
            >
              {note}
            </p>
          )}
        </div>
      </div>
    </Reveal>
  )
}

export default function RouBeautyPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.blush, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        @keyframes rb-marq { to { transform: translateX(-50%) } }
        .rb-marquee { display: flex; width: max-content; animation: rb-marq 24s linear infinite }
        @media (prefers-reduced-motion: reduce) { .rb-marquee { animation: none } }
        @keyframes rb-float { 0%,100% { transform: translateY(0) rotate(var(--rot,0deg)) } 50% { transform: translateY(-9px) rotate(var(--rot,0deg)) } }
        .rb-float { animation: rb-float 5s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) { .rb-float { animation: none } }
        .rb-btn-pink { background-color: #D90E79; color: #fff }
        .rb-btn-pink:hover { background-color: #B40C66 }
        .rb-band { display: flex; justify-content: center; padding: 0 5rem 1.25rem 1.25rem; background-color: ${C.plum} }
        .rb-band > div { position: static; max-width: 100%; background-color: rgba(43,10,24,0.94) }
      `}</style>

      <BlitzNav
        name={
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado del letrero */}
            <img
              src={`${IMG}/logo-sign.webp`}
              alt={BIZ.name}
              className="h-9 w-auto rounded-lg object-cover"
            />
            <span className="sr-only">Rou Beauty</span>
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(251,227,238,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.pink,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la pared lo dice ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.blush }}>
        <Heart className="rb-float absolute w-6 h-6 top-24 right-[12%] opacity-60" color={C.lilac} />
        <Heart
          className="rb-float absolute w-4 h-4 bottom-[18%] left-[4%] opacity-50 hidden md:block"
          color={C.pink}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <p
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-5`}
              style={{ color: C.pinkDeep }}
            >
              Tienda de belleza · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[0.92] tracking-[-0.02em] text-[clamp(2.9rem,11.5vw,6.5rem)] mb-5`}
            >
              aquí comienza{' '}
              <span className="relative inline-block" style={{ color: C.pink }}>
                tu&nbsp;glow
                <Heart
                  className="absolute -top-2 -right-4 w-5 h-5 md:w-7 md:h-7"
                  color={C.pink}
                />
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
              Skincare coreano, hair care, maquillaje y perfumes en {BIZ.city}.
              Productos 100% originales y envíos a todo Chile.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                Consultar por WhatsApp
              </a>
              <a
                href="#tienda"
                className={BTN_GHOST}
                style={{ borderColor: C.pinkDeep, color: C.pinkDeep }}
              >
                Recorrer la tienda
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
            >
              <Stars value={5} color={C.pink} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[11px] tracking-[0.08em]`}>
                5,0 · {BIZ.reviews} opiniones en Google
              </span>
            </a>
          </Reveal>

          <Reveal delay={140}>
            <figure className="relative max-w-[420px] mx-auto lg:ml-auto">
              <div
                className="relative overflow-hidden aspect-[3/4] rounded-t-[999px] rounded-b-[2rem]"
                style={{ border: `3px solid ${C.card}`, boxShadow: `0 24px 60px -24px rgba(56,16,31,0.35)` }}
              >
                <Image
                  src={`${IMG}/hero-fachada.webp`}
                  alt="Fachada de Rou Beauty en Portal Molina: letrero magenta con el logo y vitrina de la tienda"
                  fill
                  priority
                  sizes="(min-width: 1024px) 42vw, 90vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-center mt-3`}
                style={{ color: C.muted }}
              >
                La tienda · {BIZ.address}
              </figcaption>
              <Heart className="rb-float absolute -left-5 top-10 w-8 h-8" color={C.pink} />
              <Heart className="rb-float absolute -right-4 bottom-24 w-6 h-6" color={C.lilac} />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Marquesina de repisas ── */}
      <div className="py-3.5 overflow-hidden" style={{ backgroundColor: C.pink }} aria-hidden="true">
        <div className="rb-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center shrink-0">
              {MARQUEE.concat(MARQUEE).map((item, i) => (
                <span
                  key={`${half}-${i}`}
                  className={`${display.className} font-bold uppercase tracking-[0.14em] text-sm md:text-base text-white flex items-center whitespace-nowrap`}
                >
                  {item}
                  <Heart className="w-3.5 h-3.5 mx-5 shrink-0" color="rgba(255,255,255,0.85)" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La tienda por repisas ── */}
      <section id="tienda" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Head
          kicker="El mural lo dice"
          title={
            <>
              Las repisas, <span style={{ color: C.pinkDeep }}>con su nombre pintado</span>
            </>
          }
          note="Cada rótulo está pintado en la pared de la tienda"
        />

        <Reveal>
          <figure
            className="relative overflow-hidden rounded-[2rem] mb-10 md:mb-14"
            style={{ border: `1px solid ${C.line}` }}
          >
            <div className="relative aspect-[16/10] md:aspect-[21/9]">
              <Image
                src={`${IMG}/mural-glow.webp`}
                alt="Mural interior de Rou Beauty: pared rosa con la frase Aquí comienza tu glow, corazones dibujados y repisas llenas de productos"
                fill
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption
              className={`${mono.className} flex items-center justify-between gap-4 px-4 py-2.5 text-[10px] uppercase tracking-[0.22em]`}
              style={{ borderTop: `1px solid ${C.line}`, color: C.muted, backgroundColor: C.card }}
            >
              <span>La pared de los glows</span>
              <span>{BIZ.place}</span>
            </figcaption>
          </figure>
        </Reveal>

        <ul className="space-y-4 md:space-y-5">
          {REPISAS.map((r, i) => (
            <li key={r.sign}>
              <Reveal delay={i * 70}>
                <div
                  className="flex items-center gap-4 md:gap-8 rounded-[1.6rem] p-3.5 md:p-5"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <div className="relative w-24 h-24 md:w-36 md:h-36 shrink-0 overflow-hidden rounded-[1.2rem]">
                    <Image
                      src={`${IMG}/${r.photo}`}
                      alt={r.photoAlt}
                      fill
                      sizes="(min-width: 768px) 144px, 96px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.26em] mb-1`}
                      style={{ color: C.pinkDeep }}
                    >
                      {r.nota}
                    </p>
                    <h3
                      className={`${display.className} font-extrabold uppercase leading-none tracking-[0.01em] text-2xl md:text-4xl mb-1.5`}
                    >
                      {r.sign}
                    </h3>
                    <p className="text-sm md:text-base leading-snug max-w-xl" style={{ color: C.muted }}>
                      {r.desc}
                    </p>
                  </div>
                  <Heart
                    className="w-5 h-5 md:w-7 md:h-7 shrink-0 self-start mt-1"
                    color={i % 2 ? C.lilac : C.pink}
                  />
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Virales ── */}
      <section id="virales" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Head
            dark
            kicker="Vistos en @roubeauty.cl"
            title="Lo que se llevan las clientas"
            note="Productos reales de sus posts · consulta stock por WhatsApp"
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {VIRALES.map((p, i) => (
              <li key={p.nombre}>
                <Reveal delay={i * 90} className="h-full">
                  <article
                    className="h-full flex flex-col overflow-hidden rounded-[1.6rem]"
                    style={{ backgroundColor: C.card, border: `1px solid ${C.lineDark}` }}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={`${IMG}/${p.photo}`}
                        alt={p.photoAlt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                      />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <p
                        className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mb-1.5`}
                        style={{ color: C.pinkDeep }}
                      >
                        {p.marca}
                      </p>
                      <h3
                        className={`${display.className} font-extrabold leading-tight text-xl md:text-2xl mb-2`}
                        style={{ color: C.ink }}
                      >
                        {p.nombre}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                Pregunta por el tuyo
              </a>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.blushSoft }}>
                Si es viral, está en Rou
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ruleta de los sábados + envíos ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative max-w-[380px]">
              <div
                className="relative aspect-[3/4] overflow-hidden rounded-[2rem] rotate-[-2deg]"
                style={{ border: `3px solid ${C.card}`, boxShadow: '0 20px 50px -20px rgba(56,16,31,0.35)' }}
              >
                <Image
                  src={`${IMG}/ruleta.webp`}
                  alt="Clienta de Rou Beauty girando la ruleta de premios de los sábados frente al logo de la tienda"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 -right-3 md:-right-8 rotate-[3deg] rounded-full px-5 py-3"
                style={{ backgroundColor: C.lilac }}
              >
                <p className={`${display.className} font-extrabold text-sm text-white leading-tight`}>
                  sábados con premio
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p
              className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2`}
              style={{ color: C.pinkDeep }}
            >
              <Heart className="w-3 h-3" color={C.pink} />
              Más que una tienda
            </p>
            <h2
              className={`${display.className} font-extrabold leading-[0.98] text-3xl md:text-5xl mb-5`}
            >
              Los sábados, la suerte{' '}
              <span style={{ color: C.pink }}>se juega en Rou</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-4" style={{ color: C.muted }}>
              Los fines de semana hay ruleta: tu compra puede venir con premio.
              Y si no estás en Molina, te lo mandamos — hacen envíos a todo Chile.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK_ENVIO} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                Pedir con envío
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={BTN_GHOST}
                style={{ borderColor: C.pinkDeep, color: C.pinkDeep }}
              >
                @{BIZ.igUser}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section
        id="resenas"
        className="scroll-mt-20"
        style={{ backgroundColor: C.blush2, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p
                className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2`}
                style={{ color: C.pinkDeep }}
              >
                <Heart className="w-3 h-3" color={C.pink} />
                Lo que dicen en Google
              </p>
              <p className={`${display.className} font-extrabold leading-none text-[clamp(4.5rem,14vw,8rem)] mb-3`}>
                5,0
              </p>
              <Stars value={5} color={C.pink} className="w-6 h-6" />
              <p className="text-sm mt-3 mb-6" style={{ color: C.muted }}>
                {BIZ.reviews} opiniones publicadas en Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block text-[11px] uppercase tracking-[0.2em] underline underline-offset-4 decoration-1 hover:opacity-80 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ color: C.pinkDeep }}
              >
                Ver la ficha en Maps →
              </a>
            </Reveal>
            <ul className="space-y-4">
              {RESENAS.map((r, i) => (
                <li key={r.autor}>
                  <Reveal delay={i * 90}>
                    <figure
                      className="rounded-[1.6rem] p-5 md:p-6"
                      style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                    >
                      <Stars value={5} color={C.pink} className="w-3.5 h-3.5" />
                      <blockquote className="text-base md:text-lg leading-relaxed mt-3 mb-4">
                        “{r.texto}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-3">
                        <span className={`${display.className} font-bold text-sm`}>{r.autor}</span>
                        <span
                          className={`${mono.className} text-[9px] uppercase tracking-[0.24em]`}
                          style={{ color: C.muted }}
                        >
                          Reseña de Google
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Visítanos ── */}
      <section id="visita" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Head
          kicker="Portal Molina"
          title={
            <>
              Ven a conocerla: <span style={{ color: C.pinkDeep }}>es chica, rosa y está llena</span>
            </>
          }
          note="Abierta de lunes a sábado"
        />
        <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <dl className="border-t" style={{ borderColor: C.line }}>
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.place}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { k: 'Instagram', v: `@${BIZ.igUser} · +${BIZ.igFollowers} seguidores`, href: IG_URL },
                { k: 'Envíos', v: 'A todo Chile' },
              ].map((f) => (
                <div
                  key={f.k}
                  className="grid grid-cols-[110px_1fr] gap-4 py-4 border-b"
                  style={{ borderColor: C.line }}
                >
                  <dt
                    className={`${mono.className} text-[10px] uppercase tracking-[0.24em] pt-1`}
                    style={{ color: C.muted }}
                  >
                    {f.k}
                  </dt>
                  <dd className="text-sm md:text-base font-semibold">
                    {f.href ? (
                      <a
                        href={f.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 decoration-1 hover:text-[#A3095C] transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-2"
                      >
                        {f.v}
                      </a>
                    ) : (
                      f.v
                    )}
                  </dd>
                </div>
              ))}
              <div className="grid grid-cols-[110px_1fr] gap-4 py-4 border-b" style={{ borderColor: C.line }}>
                <dt
                  className={`${mono.className} text-[10px] uppercase tracking-[0.24em] pt-1`}
                  style={{ color: C.muted }}
                >
                  Horario
                </dt>
                <dd className="text-sm md:text-base font-semibold">
                  {HORARIO.map((h) => (
                    <span key={h.days} className="block">
                      {h.days} · {h.time}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 mt-7">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={BTN_SOLID}>
                WhatsApp {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure
              className="relative rounded-[1.6rem] overflow-hidden"
              style={{ border: `1px solid ${C.line}`, backgroundColor: C.card }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full aspect-[4/3] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <figcaption
                className={`${mono.className} flex items-center justify-between gap-4 px-4 py-2.5 text-[10px] uppercase tracking-[0.22em]`}
                style={{ borderTop: `1px solid ${C.line}`, color: C.muted }}
              >
                <span>{BIZ.address}</span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-1 hover:text-[#A3095C] transition-colors shrink-0 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  Abrir en Maps →
                </a>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.plum, color: C.blush }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 border-t"
          style={{ borderColor: C.lineDark }}
        >
          <div className="flex items-center gap-3">
            <Heart className="w-6 h-6" color={C.pink} />
            <div>
              <p className={`${display.className} font-extrabold leading-none text-xl`}>
                Rou Beauty
              </p>
              <address className="not-italic text-[11px] mt-1" style={{ color: C.blushSoft }}>
                {BIZ.address}, {BIZ.place} · {BIZ.city}
              </address>
            </div>
          </div>
          <div
            className="flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.16em]"
            style={{ color: C.blushSoft }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBE3EE]"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 py-3 pb-6 text-[10px] leading-snug"
            style={{ color: C.blushSoft }}
          >
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. El nombre,
            la dirección, el horario, el WhatsApp, el Instagram, las fotos y
            las reseñas son datos reales de su ficha pública; la selección de
            productos es una muestra de lo que muestran en sus redes.
          </p>
        </div>
      </footer>

      <div className="rb-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
 