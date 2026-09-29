import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_DELIVERY, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  foam: '#EFF8FC',
  foamDeep: '#E0F1F9',
  ink: '#0E3A53',
  deep: '#08304A',
  deepInk: '#062538',
  blue: '#1284C4',
  cyan: '#35C4F0',
  yellow: '#FFD94A',
  white: '#FFFFFF',
  muted: '#44667A',
  mutedLight: 'rgba(239,248,252,0.78)',
  line: 'rgba(14,58,83,0.16)',
  lineLight: 'rgba(239,248,252,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lavanderna-de-cobertores-talca',
  title: 'Lavandería Clean is Good — Expertos en ropa de cama en Talca',
  description:
    'Lavandería en 4 y Media Ote. A-0574, Talca. Expertos en ropa de cama: cubrecama o cobertor desde $5.000. Delivery con retiro y entrega — agenda por WhatsApp.',
  image: '/demos/lavanderna-de-cobertores-talca/hero.webp',
})

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#ciclo' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horario y llegada', href: '#contacto' },
]

const CINTA = [
  'cubrecamas',
  'cobertores',
  'plumones',
  'ropa de cama',
  'delivery: retiro y entrega',
  'desde $5.000',
]

const PASOS = [
  {
    num: '01',
    name: 'Pedimos o traes',
    desc: 'Escribes por WhatsApp y coordinamos el retiro a domicilio, o acercas tu ropa de cama al local de 4 y Media Oriente.',
  },
  {
    num: '02',
    name: 'Lavamos',
    desc: 'Tu cubrecama, cobertor o plumón entra a máquina comercial. Expertos en ropa de cama: el cuidado que una lavadora de casa no da.',
  },
  {
    num: '03',
    name: 'Secamos y doblamos',
    desc: 'Secado completo y doblado prolijo: la ropa vuelve protegida, lista para guardar o para la cama.',
  },
  {
    num: '04',
    name: 'Te la llevamos',
    desc: 'Delivery con retiro y entrega, o pasas a buscarla cuando quede lista. Combatimos las manchas al tiro.',
  },
]

const RESENAS = [
  {
    name: 'Nicolas Rodriguez',
    stars: 5,
    text: 'Excelente, servicio de alta calidad. Se nota que se preocupan de dejar el producto en las mejores condiciones, y el personal es muy amable. ¡Los recomiendo 100%!',
  },
  {
    name: 'Félix Vásquez',
    stars: 5,
    text: 'Excelente calidad de servicio. 100% recomendada.',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 a 19:00' },
  { days: 'Sábado', time: '10:00 a 17:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function Burbuja({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute rounded-full pointer-events-none ${className}`}
      style={{
        background:
          'radial-gradient(circle at 32% 30%, rgba(255,255,255,0.95) 0%, rgba(53,196,240,0.28) 42%, rgba(53,196,240,0.08) 70%)',
        boxShadow: 'inset 0 -6px 14px rgba(18,132,196,0.18), 0 10px 24px rgba(18,132,196,0.12)',
        ...style,
      }}
    />
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: light ? C.cyan : C.blue }}
    >
      <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="9" cy="9" r="5.5" />
        <circle cx="17" cy="15" r="3.5" />
        <circle cx="18" cy="6.5" r="2" />
      </svg>
      {children}
    </p>
  )
}

export default function LavanderiaCobertoresTalcaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.foam, color: C.ink }}>
      <style>{'@keyframes lav-flota{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}'}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir lavado"
        theme={{
          over: 'light',
          bar: 'rgba(239,248,252,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: foto + logo real, tema espuma ── */}
      <section id="inicio" className="relative overflow-hidden pt-[92px] md:pt-[120px]" style={{ backgroundColor: C.foam }}>
        <Burbuja style={{ width: 130, height: 130, top: '12%', right: '6%', animation: 'lav-flota 7s ease-in-out infinite' }} />
        <Burbuja style={{ width: 74, height: 74, top: '52%', right: '34%', animation: 'lav-flota 9s ease-in-out infinite', animationDelay: '-3s' }} />
        <Burbuja style={{ width: 46, height: 46, top: '8%', left: '44%', animation: 'lav-flota 8s ease-in-out infinite', animationDelay: '-5s' }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="flex items-center gap-4 mb-6">
              <span className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden border shadow-md shrink-0" style={{ borderColor: C.line, backgroundColor: '#1E9BD7' }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado del letrero del local */}
                <img src={`${IMG}/logo.webp`} alt="Logo Lavandería Clean is Good" className="w-full h-full object-cover" />
              </span>
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.muted }}>
                  Lavandería · Talca
                </p>
                <p className={`${display.className} text-lg leading-tight`} style={{ color: C.ink }}>
                  {BIZ.name}
                </p>
              </div>
            </div>
            <Eyebrow>Expertos en ropa de cama</Eyebrow>
            <h1 className={`${display.className} text-[clamp(2.5rem,8.5vw,4.6rem)] leading-[1.02] font-extrabold mb-5`} style={{ color: C.deep }}>
              Tu cobertor vuelve
              <br />
              <span style={{ color: C.blue }}>como nuevo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
              Lavandería en {BIZ.address}, {BIZ.city}. Cobertores, cubrecamas y
              plumones lavados en máquinas comerciales — con delivery que los
              retira y los devuelve.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-7">
              <a
                href={WA_LINK_DELIVERY}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.blue, color: '#fff' }}
              >
                Pedir retiro a domicilio
              </a>
              <a
                href="#ciclo"
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/70 tap-44`}
                style={{ borderColor: C.blue, color: C.blue }}
              >
                Cómo funciona
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-bold tap-44"
              style={{ color: C.ink }}
            >
              <Stars value={BIZ.rating} color="#E8A91C" className="w-[15px] h-[15px]" />
              {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="relative rounded-[26px] overflow-hidden shadow-2xl rotate-[1.5deg] border-4"
                style={{ borderColor: '#fff' }}
              >
                <div className="relative aspect-[4/5] sm:aspect-[5/4] md:aspect-[4/4.6]">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Interior de la lavandería Clean is Good: lavadoras comerciales LG y ropa de cama limpia en bolsa sobre el rack"
                    fill
                    priority
                    sizes="(min-width: 768px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              {/* sticker de precio real del letrero */}
              <div
                className={`${display.className} absolute -top-4 -left-3 md:-left-6 rounded-2xl px-4 py-2.5 shadow-xl rotate-[-6deg] text-center leading-tight`}
                style={{ backgroundColor: C.yellow, color: C.deep }}
              >
                <span className="block text-[10px] uppercase tracking-[0.14em] font-bold">Cubrecama o cobertor</span>
                <span className="block text-xl md:text-2xl font-extrabold">desde $5.000</span>
              </div>
              <Burbuja style={{ width: 58, height: 58, bottom: '-12px', right: '8%', animation: 'lav-flota 6s ease-in-out infinite', animationDelay: '-2s' }} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de lo que se lava ── */}
      <div className="border-y overflow-hidden" style={{ backgroundColor: C.deep, borderColor: C.lineLight }}>
        <style>{'@keyframes lav-cinta{to{transform:translateX(-50%)}}'}</style>
        <div
          className={`${display.className} flex whitespace-nowrap py-3.5 text-sm md:text-base font-bold uppercase tracking-[0.18em] w-max`}
          style={{ color: C.cyan, animation: 'lav-cinta 26s linear infinite' }}
          aria-hidden="true"
        >
          {[0, 1].map((r) => (
            <span key={r} className="flex items-center">
              {CINTA.map((item) => (
                <span key={`${r}-${item}`} className="flex items-center">
                  <span className="px-5">{item}</span>
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke={C.cyan} strokeWidth="1.8" aria-hidden="true">
                    <circle cx="12" cy="12" r="6" />
                  </svg>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── El ciclo: 4 pasos ── */}
      <section id="ciclo" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="md:sticky md:top-24">
              <Eyebrow>Cómo funciona</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl font-extrabold leading-[1.05] mb-5`} style={{ color: C.deep }}>
                Lo dejas,<br />nosotros <span style={{ color: C.blue }}>giramos</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-7" style={{ color: C.muted }}>
                El letrero lo anuncia en la calle: retiro y entrega a domicilio.
                Si prefieres, también puedes traer la ropa al local.
              </p>
              <div className="relative rounded-2xl overflow-hidden border shadow-lg aspect-[16/10]" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/lavadoras.webp`}
                  alt="Fila de lavadoras comerciales LG y secadora Dexter en la lavandería Clean is Good"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <ol className="space-y-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.num} delay={i * 90}>
                <li
                  className="relative rounded-2xl border bg-white p-6 md:p-7 flex gap-5 items-start shadow-sm"
                  style={{ borderColor: C.line }}
                >
                  <span
                    className={`${display.className} shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-lg md:text-xl font-extrabold`}
                    style={{
                      background: 'radial-gradient(circle at 32% 28%, #fff 0%, #CDEAF7 55%, #9ADBF3 100%)',
                      color: C.deep,
                      boxShadow: 'inset 0 -4px 10px rgba(18,132,196,0.22), 0 6px 16px rgba(18,132,196,0.18)',
                    }}
                  >
                    {p.num}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-xl md:text-2xl font-bold mb-1.5`} style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── El local: fotos reales + datos del letrero ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>El local, tal cual es</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl font-extrabold leading-[1.05]`} style={{ color: C.foam }}>
                Se ve desde la calle:
                <br />
                <span style={{ color: C.cyan }}>4 y Media Oriente</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedLight }}>
                Fotos reales del local y su letrero. Lo que dice ahí es lo
                que ofrecen: ropa de cama desde $5.000 y delivery con
                retiro y entrega.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-14">
            <Reveal className="col-span-2 md:col-span-2">
              <div className="relative rounded-2xl overflow-hidden border aspect-[16/9]" style={{ borderColor: C.lineLight }}>
                <Image
                  src={`${IMG}/banner.webp`}
                  alt="Letrero de la Lavandería Clean is Good: expertos en ropa de cama, cubrecama o cobertor desde $5.000, delivery retiro y entrega"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="relative rounded-2xl overflow-hidden border aspect-square md:aspect-auto md:h-full" style={{ borderColor: C.lineLight }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de la lavandería en 4 y Media Oriente, Talca, con el letrero Clean is Good"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="relative rounded-2xl overflow-hidden border aspect-square md:aspect-auto md:h-full" style={{ borderColor: C.lineLight }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la lavandería: cobertores limpios en bolsas sobre racks junto a las lavadoras"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-3 gap-3 md:gap-4">
            {(
              [
                { k: 'Precio del letrero', v: 'Cubrecama o cobertor desde $5.000' },
                { k: 'Delivery', v: 'Retiro y entrega coordinados por WhatsApp' },
                { k: 'Instagram', v: BIZ.igUser, href: BIZ.instagram },
              ] as { k: string; v: string; href?: string }[]
            ).map((f, i) => (
              <Reveal key={f.k} delay={i * 80}>
                <div className="rounded-2xl border p-5 md:p-6 h-full" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(239,248,252,0.06)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mb-2`} style={{ color: C.cyan }}>
                    {f.k}
                  </p>
                  {f.href ? (
                    <a
                      href={f.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} text-base md:text-lg font-bold underline underline-offset-4 decoration-2 tap-44`}
                      style={{ color: C.foam, textDecorationColor: 'rgba(53,196,240,0.5)' }}
                    >
                      {f.v} →
                    </a>
                  ) : (
                    <p className={`${display.className} text-base md:text-lg font-bold leading-snug`} style={{ color: C.foam }}>
                      {f.v}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Lo que dicen en Google</Eyebrow>
              <p className={`${display.className} text-6xl md:text-7xl font-extrabold leading-none mb-2`} style={{ color: C.deep }}>
                {String(BIZ.rating).replace('.', ',')}
              </p>
              <Stars value={BIZ.rating} color="#E8A91C" className="w-5 h-5" />
              <p className="text-sm md:text-base mt-3 mb-6 max-w-xs" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en su ficha de Google Maps. Estas son
                dos, tal como quedaron escritas.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.blue, textDecorationColor: 'rgba(18,132,196,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={i * 110}>
                  <figure className="rounded-2xl border bg-white p-6 md:p-7 shadow-sm" style={{ borderColor: C.line }}>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <Stars value={r.stars} color="#E8A91C" className="w-4 h-4" />
                      <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                        Reseña de Google
                      </span>
                    </div>
                    <blockquote className={`${display.className} text-base md:text-lg font-semibold leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="text-sm font-bold" style={{ color: C.blue }}>
                      {r.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Horario, dirección y mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.foamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Horario y llegada</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl font-extrabold leading-[1.05] mb-6`} style={{ color: C.deep }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.blue }}>{BIZ.city}</span>
            </h2>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.blue, color: '#fff' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/70 tap-44`}
                style={{ borderColor: C.blue, color: C.blue }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border shadow-lg h-full min-h-[320px] bg-white" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deepInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center gap-x-10 gap-y-5">
          <div className="flex items-center gap-3 min-w-0">
            <span className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border" style={{ borderColor: C.lineLight }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado del letrero del local */}
              <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className={`${display.className} text-xl font-bold leading-tight truncate`} style={{ color: C.foam }}>
                {BIZ.name}
              </p>
              <address className="not-italic text-xs" style={{ color: C.mutedLight }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.mutedLight }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tap-44">
              {BIZ.igUser}
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(239,248,252,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-xs leading-relaxed" style={{ color: 'rgba(239,248,252,0.75)' }}>
            Descripciones de servicio de muestra; nombre, precio del letrero,
            dirección, teléfonos, Instagram y reseñas son públicos.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
