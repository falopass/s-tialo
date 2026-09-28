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
  CARTA,
  MAS_PLATOS,
  REVIEWS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  papel: '#FAF1DC',
  papelOsc: '#F3E5C3',
  rojo: '#B3202C',
  rojoOsc: '#7E1520',
  aji: '#E88A19',
  ajiDeep: '#9A5206',
  ink: '#31150C',
  muted: '#7A6252',
  line: 'rgba(49,21,12,0.14)',
  card: '#FFF9EC',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'delicias-limenas-san-clemente',
  title: `${BIZ.name} — Comida peruana en ${BIZ.city}`,
  description:
    'Demo de sitio para Delicias Limeñas: restaurante peruano frente al mercado de San Clemente. Ceviche, lomo saltado, pisco sour. Reserva por WhatsApp.',
  image: `${IMG}/mural.webp`,
})

/* Llama del logo */
function Flama({ className = '', color = C.rojo }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2c1 3 5 5.5 5 10a5 5 0 0 1-10 0c0-2 .8-3.4 1.8-4.6C9.6 8.8 9.9 10.6 11 11.5 10.6 8.6 11 5 12 2z" />
      <path d="M12 22a4.5 4.5 0 0 0 4.5-4.5c0-1.7-.6-2.9-1.4-4-.4 1.1-1 2-1.9 2.7.3-2-.6-4.4-1.7-5.7C10.6 10 7.5 12 7.5 16A4.5 4.5 0 0 0 12 22z" opacity="0.55" />
    </svg>
  )
}

const MARQUEE = 'CEVICHE DE REINETA · LOMO SALTADO · PIQUEO MARINO · AJÍ DE GALLINA · LECHE DE TIGRE · PISCO SOUR · SUSPIRO LIMEÑO · '

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-tight`}>
            Delicias <span style={{ color: C.rojo }}>Limeñas</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'La carta', href: '#carta' },
          { label: 'El local', href: '#local' },
          { label: 'Opiniones', href: '#opiniones' },
          { label: 'Reservas', href: '#reservas' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: C.papel,
          ink: C.ink,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFF3DE',
        }}
      />

      {/* ── HERO: el mural manda ── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10 md:pb-14">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <Reveal className="md:col-span-7">
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-5 flex items-center gap-2`} style={{ color: C.rojo }}>
                <Flama className="w-4 h-4" />
                Cocina peruana · {BIZ.city}, Maule
              </p>
              <h1 className={`${display.className} text-[clamp(2.5rem,8vw,4.8rem)] leading-[1.0] tracking-tight`}>
                Un sabor que te traslada
                <br />
                <span style={{ color: C.rojo }}>derecho a Perú</span>
              </h1>
              <p className="mt-5 text-sm md:text-lg leading-relaxed max-w-lg" style={{ color: C.muted }}>
                Frente al mercado de San Clemente: ceviches, lomo saltado,
                piqueos marinos y pisco sour con la sazón limeña de la casa.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.rojo, color: '#FFF3DE' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#carta"
                  className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Ver la carta
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2.5">
                <Stars value={4.5} color={C.ajiDeep} className="w-4 h-4" />
                <p className={`${mono.className} text-xs`} style={{ color: C.muted }}>
                  {BIZ.rating} en Google · {BIZ.reviewCount} opiniones
                </p>
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-5">
              <div
                className="relative rounded-[28px] overflow-hidden border-4"
                style={{ borderColor: C.card, boxShadow: '0 26px 60px -22px rgba(49,21,12,0.4)' }}
              >
                <Image
                  src={`${IMG}/mural.webp`}
                  alt={`Mural "sabor que te traslada a Perú" dentro de ${BIZ.name}`}
                  width={720}
                  height={900}
                  className="w-full h-[340px] md:h-[440px] object-cover"
                  priority
                />
                <span
                  className={`${mono.className} absolute top-4 left-4 text-[10px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(250,241,220,0.92)', color: C.rojo }}
                >
                  El mural de la casa
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── MARQUEE: la carta corriendo ── */}
      <style>{`
        @keyframes dl-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .dl-marquee { animation: dl-marquee 30s linear infinite }
        @media (prefers-reduced-motion: reduce) { .dl-marquee { animation: none } }
      `}</style>
      <div className="overflow-hidden py-3.5" style={{ backgroundColor: C.rojoOsc }} aria-hidden="true">
        <div className="dl-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((k) => (
            <span
              key={k}
              className={`${display.className} text-sm md:text-base tracking-[0.18em] px-2`}
              style={{ color: '#F7CE6B' }}
            >
              {MARQUEE}
            </span>
          ))}
        </div>
      </div>

      {/* ── LA CARTA ── */}
      <section id="carta" style={{ backgroundColor: C.papelOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.ajiDeep }}>
              Directo de la carta
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.05] max-w-2xl`}>
              Los clásicos peruanos, hechos en San Clemente
            </h2>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CARTA.map((p, i) => (
              <Reveal key={p.foto} delay={i * 60}>
                <article
                  className="group h-full rounded-2xl overflow-hidden border"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <div className="relative h-[190px] overflow-hidden">
                    <Image
                      src={`${IMG}/${p.foto}.webp`}
                      alt={p.alt}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className={`${display.className} text-lg md:text-xl`}>{p.nombre}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* resto de la carta: lista con puntos suspensivos */}
          <Reveal delay={100}>
            <div
              className="mt-8 rounded-2xl border p-6 md:p-8"
              style={{ backgroundColor: C.card, borderColor: C.line }}
            >
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-5`} style={{ color: C.ajiDeep }}>
                Y para seguir picando
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-10">
                {MAS_PLATOS.map((n) => (
                  <li key={n} className="flex items-baseline gap-3 py-2.5 border-b last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0" style={{ borderColor: C.line }}>
                    <span className={`${display.className} text-base md:text-lg`}>{n}</span>
                    <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: C.ajiDeep }} aria-hidden="true" />
                    <Flama className="w-3.5 h-3.5 shrink-0" color={C.aji} />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EL LOCAL: galería ── */}
      <section id="local" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.rojo }}>
              El local
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.2rem)] leading-tight max-w-2xl`}>
              Frente al mercado, con terraza y mural
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-xl leading-relaxed" style={{ color: C.muted }}>
              Un lugar para comer en familia, con mesa afuera y el mural que
              ya es postal de la casa.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'familia-mural', alt: 'Familia almorzando frente al mural del restaurante' },
              { src: 'terraza', alt: 'Terraza techada del restaurante' },
              { src: 'pisco-sour', alt: 'Dos pisco sour recién preparados' },
              { src: 'mesa-clientes', alt: 'Clientes compartiendo en una mesa del local' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 60}>
                <div className="relative rounded-2xl overflow-hidden h-[210px] md:h-[260px]">
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    width={600}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPINIONES ── */}
      <section id="opiniones" style={{ backgroundColor: C.rojoOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: '#F7CE6B' }}>
                  La mesa opina
                </p>
                <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.2rem)] leading-tight text-[#FBF3E0]`}>
                  Rico, contundente y familiar
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Stars value={4.5} color="#F7CE6B" className="w-4 h-4" />
                <span className={`${mono.className} text-sm font-semibold text-[#FBF3E0]`}>{BIZ.rating}/5</span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 60}>
                <figure
                  className="h-full rounded-2xl p-6 flex flex-col border"
                  style={{ backgroundColor: 'rgba(251,243,224,0.07)', borderColor: 'rgba(251,243,224,0.18)' }}
                >
                  <Stars value={4.5} color="#F7CE6B" className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1 text-[#FBF3E0]">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-xs uppercase tracking-[0.14em]`} style={{ color: 'rgba(251,243,224,0.8)' }}>
                    {r.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESERVAS ── */}
      <section id="reservas" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.ajiDeep }}>
                Reservas y horarios
              </p>
              <h2 className={`${display.className} text-[clamp(1.9rem,5vw,3.2rem)] leading-tight`}>
                Mesa peruana frente al mercado
              </h2>
              <div className="mt-7 space-y-3">
                {[
                  ['Dirección', BIZ.address],
                  ['WhatsApp', `${BIZ.phoneDisplay} · ${BIZ.phoneAlt}`],
                  ['Lun a Sáb', '12:30–23:00'],
                  ['Domingo', '12:30–18:00'],
                  ['Redes', `@${BIZ.instagram} · @${BIZ.tiktok}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-t pt-3 first:border-t-0 first:pt-0" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] w-24 shrink-0 pt-0.5`} style={{ color: C.rojo }}>
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
                  style={{ backgroundColor: C.rojo, color: '#FFF3DE' }}
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
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/ceviche-vino.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.14]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Flama className="w-10 h-10 mx-auto mb-6" color={C.aji} />
            <h2 className={`${display.className} text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.03] text-[#FBF3E0]`}>
              Hoy el almuerzo
              <br />
              <span style={{ color: '#F7CE6B' }}>sabe a Lima</span>
            </h2>
            <p className="mt-5 text-sm md:text-base max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(251,243,224,0.8)' }}>
              Reserva por WhatsApp y prueba la carta peruana de la casa,
              frente al mercado de San Clemente.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center text-base px-8 py-3.5 rounded-full mt-8 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: '#F7CE6B', color: C.ink }}
            >
              Reservar por WhatsApp
            </a>
            <p className={`${mono.className} text-xs mt-5`} style={{ color: 'rgba(251,243,224,0.7)' }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.rojoOsc, color: '#FBF3E0' }}>
        <div className="border-t" style={{ borderColor: 'rgba(251,243,224,0.16)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
            <p className={`${display.className} text-xl mb-1 flex items-center gap-2.5`}>
              <Flama className="w-5 h-5" color="#F7CE6B" />
              {BIZ.name}
            </p>
            <p className="text-sm mb-2" style={{ color: 'rgba(251,243,224,0.78)' }}>
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(251,243,224,0.75)' }}>
              Sitio de ejemplo de Sitiazo: nombre, dirección, teléfonos,
              horarios, platos de la carta, opiniones, fotos y logo son
              reales; textos de presentación son de muestra.
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
