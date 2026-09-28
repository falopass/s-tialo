import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PLATOS,
  REVIEWS,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  mantel: '#F7EFE0',
  mantelOsc: '#EFE3CC',
  vino: '#9E1B24',
  vinoOsc: '#7A1119',
  verde: '#3F6B3C',
  verdeOsc: '#2C4E2A',
  ink: '#2C1710',
  muted: '#71614F',
  line: 'rgba(44,23,16,0.14)',
  card: '#FCF8EE',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'mini-restaurant-talca',
  title: `${BIZ.name} — ${BIZ.rubro} en ${BIZ.city}`,
  description:
    'Demo de sitio para Mini Restaurant Talca: el sabor tradicional del histórico Mini de Rancagua, ahora en Paseo Hacienda. Reserva por WhatsApp.',
  image: `${IMG}/comedor.webp`,
})

/* Ornamento de cubertería — tenedor/cuchillo tipo filete de carta */
function Cubiertos({ className = '', color = C.vino }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 16" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
      <path d="M8 1v5M5 1v4a3 3 0 0 0 6 0V1M8 6v9" />
      <path d="M40 1c-2.5 1.5-3.5 4-3.5 6s1.5 3 3.5 3V1zm0 9v5" />
      <path d="M16 8h16" strokeDasharray="1.5 3" />
    </svg>
  )
}

export default function Page() {
  return (
    <div
      className={body.className}
      style={{ backgroundColor: C.mantel, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-xl tracking-tight`}>
            <span style={{ color: C.vino }}>Mini</span>{' '}
            <span style={{ color: C.verde }}>Restaurant</span>
          </span>
        }
        links={[
          { label: 'La casa', href: '#la-casa' },
          { label: 'Platos', href: '#platos' },
          { label: 'Opiniones', href: '#opiniones' },
          { label: 'Reservas', href: '#reservas' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Reservar mesa"
        theme={{
          over: 'light',
          bar: C.mantel,
          ink: C.ink,
          line: C.line,
          btnBg: C.vino,
          btnInk: '#FFF7EA',
        }}
      />

      {/* ── HERO: la carta abierta ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(900px 460px at 50% -12%, rgba(158,27,36,0.10) 0%, rgba(247,239,224,0) 62%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32">
          <Reveal className="text-center">
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="mx-auto w-[190px] md:w-[240px] h-auto"
            />
            <Cubiertos className="w-20 h-7 mx-auto mt-6 mb-4" />
            <h1
              className={`${display.className} text-[clamp(2.3rem,7.5vw,4.6rem)] leading-[1.04] max-w-3xl mx-auto`}
            >
              El sabor de lo tradicional,
              <br />
              <em className="italic" style={{ color: C.vino }}>con mesa puesta en Talca</em>
            </h1>
            <p className="mt-5 text-sm md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
              Restaurante familiar en Paseo Hacienda: la misma cocina contundente
              que hizo famoso al Mini de Rancagua, ahora al sur del Maule.
            </p>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.vino, color: '#FFF7EA' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#la-casa"
                className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.line, color: C.ink }}
              >
                Conocer la casa
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2.5">
              <Stars value={5} color={C.vino} className="w-4 h-4" />
              <p className={`${mono.className} text-xs`} style={{ color: C.muted }}>
                {BIZ.rating} en Google · {BIZ.reviewCount} opiniones
              </p>
            </div>
          </Reveal>

          {/* comedor en arco */}
          <Reveal delay={140}>
            <div className="mt-12 md:mt-16 mx-auto max-w-4xl">
              <div
                className="relative overflow-hidden border-[6px]"
                style={{
                  borderColor: C.card,
                  borderRadius: '999px 999px 22px 22px',
                  boxShadow: '0 24px 60px -24px rgba(44,23,16,0.35)',
                }}
              >
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt={`Comedor interior de ${BIZ.name} en Paseo Hacienda`}
                  width={1200}
                  height={800}
                  className="w-full h-[320px] md:h-[460px] object-cover"
                  priority
                />
              </div>
              <p className={`${mono.className} text-center text-[11px] uppercase tracking-[0.24em] mt-4`} style={{ color: C.muted }}>
                Salón principal · Paseo Hacienda, Talca
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── LA CASA: linaje Rancagua → Talca ── */}
      <section id="la-casa" style={{ backgroundColor: C.vinoOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <Reveal className="md:col-span-7">
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: '#F0C98F' }}>
                La casa
              </p>
              <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.05] text-[#FFF3E0]`}>
                Más de 50 años de cocina chilena, heredados a Talca
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: 'rgba(255,243,224,0.82)' }}>
                Mini Restaurant nace del histórico Mini Sheraton de Gultro, Rancagua:
                la misma receta de asados contundentes, entradas generosas y
                trato de familia. En Talca la cocina la lidera el chef ejecutivo
                Nicolás Carrasco Arellano.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-3 max-w-md">
                {[
                  ['50+', 'años de tradición'],
                  ['4,8', 'en Google'],
                  ['115', 'opiniones'],
                ].map(([n, l]) => (
                  <div key={l} className="rounded-xl px-3 py-4 text-center" style={{ backgroundColor: 'rgba(255,243,224,0.10)' }}>
                    <p className={`${display.className} text-2xl md:text-3xl text-[#FFF3E0]`}>{n}</p>
                    <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-1`} style={{ color: 'rgba(255,243,224,0.7)' }}>{l}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-5">
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl overflow-hidden h-[210px] md:h-[260px]">
                  <Image
                    src={`${IMG}/salon-lamparas.webp`}
                    alt="Lámparas cálidas del salón del restaurante"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden h-[210px] md:h-[260px] mt-8">
                  <Image
                    src={`${IMG}/mesa-interior.webp`}
                    alt="Mesa servida en el interior del restaurante"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PLATOS ── */}
      <section id="platos" style={{ backgroundColor: C.mantel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Cubiertos className="w-20 h-7 mb-4" />
            <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.05] max-w-2xl`}>
              Platos que hacen volver la mesa
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Cocina chilena contundente: asado de tira, entradas para compartir
              y postres de la casa — los que los clientes repiten en Google.
            </p>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLATOS.map((p, i) => (
              <Reveal key={p.foto} delay={i * 70}>
                <article
                  className="group h-full rounded-2xl overflow-hidden border"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <div className="relative h-[220px] md:h-[250px] overflow-hidden">
                    <Image
                      src={`${IMG}/${p.foto}.webp`}
                      alt={p.alt}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className={`${display.className} text-xl md:text-2xl`}>{p.nombre}</h3>
                    <p className="mt-2 text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                      {p.detalle}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPINIONES: sobre mantel oscuro ── */}
      <section id="opiniones" style={{ backgroundColor: C.verdeOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: '#B9D6A8' }}>
                  Lo que dice la mesa
                </p>
                <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.2rem)] leading-tight text-[#F5F1DF]`}>
                  Contundente, rápido y de familia
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Stars value={5} color="#F0C98F" className="w-4 h-4" />
                <span className={`${mono.className} text-sm font-semibold text-[#F5F1DF]`}>{BIZ.rating}/5</span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 60}>
                <figure
                  className="h-full rounded-2xl p-6 flex flex-col border"
                  style={{ backgroundColor: 'rgba(245,241,223,0.06)', borderColor: 'rgba(245,241,223,0.16)' }}
                >
                  <Stars value={5} color="#F0C98F" className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1 text-[#F5F1DF]">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-xs uppercase tracking-[0.14em]`} style={{ color: 'rgba(245,241,223,0.82)' }}>
                    {r.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVAS: datos + mapa ── */}
      <section id="reservas" style={{ backgroundColor: C.mantelOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.verdeOsc }}>
                Reservas y horarios
              </p>
              <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.2rem)] leading-tight`}>
                Mesa lista en Paseo Hacienda
              </h2>
              <div className="mt-7 space-y-3">
                {[
                  ['Dirección', BIZ.address],
                  ['WhatsApp', BIZ.phoneDisplay],
                  ['Almuerzo', 'Lun, Mar y Dom · 12:00–17:00'],
                  ['Todo el día', 'Mié a Sáb · 12:00–23:00'],
                  ['Instagram', `@${BIZ.instagram}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-t pt-3 first:border-t-0 first:pt-0" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] w-24 shrink-0 pt-0.5`} style={{ color: C.vino }}>
                      {k}
                    </span>
                    <span className="text-sm md:text-base">{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center text-base px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.vino, color: '#FFF7EA' }}
                >
                  Reservar mesa
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Cómo llegar
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Instagram
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, borderRadius: '22px' }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                  className="w-full h-[300px] md:h-[400px] block"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.vinoOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Cubiertos className="w-20 h-7 mx-auto mb-6" color="#F0C98F" />
            <h2 className={`${display.className} text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.03] text-[#FFF3E0]`}>
              Hoy toca comer
              <br />
              <em className="italic" style={{ color: '#F0C98F' }}>como en casa grande</em>
            </h2>
            <p className="mt-5 text-sm md:text-base max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(255,243,224,0.8)' }}>
              Reserva por WhatsApp y llega con hambre: las porciones son de
              las que se recuerdan.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center text-base px-8 py-3.5 rounded-full mt-8 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: '#FFF3E0', color: C.vinoOsc }}
            >
              Reservar por WhatsApp
            </a>
            <p className={`${mono.className} text-xs mt-5`} style={{ color: 'rgba(255,243,224,0.7)' }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.ink, color: C.mantel }}>
        <div className="border-t" style={{ borderColor: 'rgba(247,239,224,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
            <p className={`${display.className} text-xl mb-1`}>
              <span style={{ color: '#E8A0A6' }}>Mini</span>{' '}
              <span style={{ color: '#A9C79B' }}>Restaurant Talca</span>
            </p>
            <p className="text-sm mb-2" style={{ color: 'rgba(247,239,224,0.75)' }}>
              {BIZ.address} · {BIZ.phoneDisplay}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,239,224,0.6)' }}>
              Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono, horarios,
              historia, opiniones, fotos y logo son reales; textos de
              presentación son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <div className="sc-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
