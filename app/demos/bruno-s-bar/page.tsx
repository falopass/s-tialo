import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

const C = {
  wood: '#241A12',
  woodSoft: '#32241A',
  moss: '#2E4A2A',
  road: '#1E4433',
  cream: '#F2E8D5',
  paper: '#EFE4CC',
  amber: '#D98E2B',
  ink: '#241A12',
  muted: '#6B5B49',
  line: 'rgba(36,26,18,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'bruno-s-bar',
  title: "Bruno's Bar — Parada de la ruta a la costa, Licantén",
  description:
    "Bar restaurante en la ruta Curicó–Licantén–Iloca. Comida casera, chorrillanas y cerveza artesanal. Llama al (75) 246 0524.",
  image: `${IMG}/interior.webp`,
})

const NAV_LINKS = [
  { label: 'El mesón', href: '#meson' },
  { label: 'La cabaña', href: '#cabana' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const PLATOS = [
  {
    name: 'La chorrillana',
    desc: 'Papas fritas con carne, cebolla y huevo para el centro de la mesa. De las que más nombran las reseñas.',
  },
  {
    name: 'Chuleta con puré',
    desc: 'El clásico de campo: chuleta ahumada con puré casero. Plato del día recurrente.',
  },
  {
    name: 'Churrasco del bar',
    desc: 'Sandwich de churrasco como manda la carretera, con papas caseras al lado.',
  },
  {
    name: 'Salchipapas y papas caseras',
    desc: 'Para picar junto a la cerveza: papas doradas, salchipapas y el plato para compartir.',
  },
  {
    name: 'Cerveza artesanal',
    desc: 'Las reseñas destacan la cerveza — fría, de autor y a precio de parada, no de ciudad.',
  },
  {
    name: 'El almuerzo del día',
    desc: 'Almuerzo casero a precio honesto: la ficha marca $5.000 – $10.000 por persona.',
  },
]

const REVIEWS = [
  {
    q: 'Comida tradicional casera, buena cerveza, precios buenos y atención amable. La parada perfecta de la ruta.',
    a: 'Reseña en Google',
  },
  {
    q: 'Buena comida, almuerzo a buen precio, estacionamiento amplio y una terraza agradable para comer afuera.',
    a: 'Reseña en Google',
  },
  {
    q: 'Excelente atención, muy buena relación calidad-precio y ambiente familiar. Se nota que es de casa.',
    a: 'Reseña en Google',
  },
]

export default function BrunoSBarPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .bb-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .bb-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .bb-btn:active { transform: translateY(0) scale(0.97); }
        .bb-btn:focus-visible { outline: 3px solid ${C.amber}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(242,232,213,0.94)',
          ink: C.wood,
          line: C.line,
          btnBg: C.road,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la cabaña de adentro ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.wood }}>
        <Image
          src={`${IMG}/interior.webp`}
          alt="Interior real de Bruno's Bar: mesas y sillas de madera, paredes de troncos, vitrina de copas y luz cálida de bar de campo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(36,26,18,0.62) 0%, rgba(36,26,18,0.25) 45%, rgba(36,26,18,0.9) 100%)',
          }}
        />
        {/* señal de ruta */}
        <div className="absolute top-[76px] md:top-[88px] inset-x-0">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div
                className={`${display.className} inline-flex flex-wrap items-center gap-x-3 gap-y-1 px-4 py-2.5 rounded-lg border-[3px] font-bold uppercase tracking-[0.14em] text-[11px] md:text-xs shadow-lg`}
                style={{ backgroundColor: C.road, color: '#FFFFFF', borderColor: '#FFFFFF' }}
              >
                <span>Curicó</span>
                <svg viewBox="0 0 24 24" className="w-4 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 12h16m-5-5 5 5-5 5"/></svg>
                <span className="bg-white/20 px-2 py-0.5 rounded">Licantén · aquí</span>
                <svg viewBox="0 0 24 24" className="w-4 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M3 12h16m-5-5 5 5-5 5"/></svg>
                <span>Iloca</span>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-48">
          <Reveal delay={80}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bb-btn inline-flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full mb-6 tap-44"
              style={{ backgroundColor: C.amber, color: C.wood }}
            >
              <Stars value={4.6} color={C.wood} className="w-[14px] h-[14px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
            <h1
              className={`${display.className} font-black leading-[0.98] tracking-[-0.02em] text-[clamp(2.6rem,9vw,6.5rem)] mb-6`}
              style={{ color: C.cream }}
            >
              La parada
              <br />
              de la <span style={{ color: C.amber }}>ruta</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(242,232,213,0.9)' }}>
              Cabaña de madera al costado de la carretera a la costa: comida
              casera, chorrillanas y cerveza artesanal a precio de pueblo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={TEL_LINK}
                className={`${display.className} bb-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.amber, color: C.wood }}
              >
                Llamar al bar
              </a>
              <a
                href="#meson"
                className={`${display.className} bb-btn font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(242,232,213,0.6)', color: C.cream }}
              >
                Qué se come aquí
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(242,232,213,0.22)', backgroundColor: 'rgba(36,26,18,0.5)', backdropFilter: 'blur(6px)' }}>
          <div
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold`}
            style={{ color: 'rgba(242,232,213,0.85)' }}
          >
            <span>Licantén, Maule</span>
            <span>{BIZ.hours}</span>
            <span>{BIZ.phoneDisplay}</span>
            <span className="hidden md:inline" style={{ color: C.amber }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta: las tres B ── */}
      <div className="border-b py-3" style={{ backgroundColor: C.moss, borderColor: C.line }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 flex flex-wrap justify-center gap-y-1 text-sm md:text-base font-extrabold uppercase tracking-[0.12em]`}
          style={{ color: C.cream }}
        >
          {['Bueno', 'Bonito', 'Barato', 'Las tres B'].map((t) => (
            <span key={t} className="inline-flex items-center">
              <span className="px-3">{t}</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill={C.amber} aria-hidden="true">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── El mesón: lo que piden ── */}
      <section id="meson" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-4 border-b-2 pb-4" style={{ borderColor: C.wood }}>
            <span className={`${display.className} font-black text-[clamp(1rem,2.6vw,1.4rem)] px-3 py-1`} style={{ backgroundColor: C.amber, color: C.wood }}>
              KM 809
            </span>
            <h2 className={`${display.className} font-black tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)] leading-none`} style={{ color: C.wood }}>
              Lo que se pide en el mesón
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xl mb-10" style={{ color: C.muted }}>
            Sin carta online: la lista sale de lo que nombran sus 242 reseñas
            de Google. Platos de fondue de carretera, hechos en casa.
          </p>
        </Reveal>
        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {PLATOS.map((p, i) => (
            <Reveal key={p.name} className="col-span-12 sm:col-span-6 lg:col-span-4" delay={i * 80}>
              <li
                className="h-full border-l-4 pl-5 pr-4 py-5"
                style={{ backgroundColor: '#FBF4E3', borderColor: i % 3 === 1 ? C.moss : C.amber }}
              >
                <span
                  className={`${display.className} font-black text-xs tracking-[0.2em] uppercase block mb-2`}
                  style={{ color: i % 3 === 1 ? C.moss : '#8A5A16' }}
                >
                  Plato {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display.className} font-extrabold text-lg md:text-xl mb-2`} style={{ color: C.wood }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── La cabaña: 1 foto real + bosquejo honesto ── */}
      <section id="cabana" className="scroll-mt-20" style={{ backgroundColor: C.wood }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} font-black tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)] leading-none mb-3`} style={{ color: C.cream }}>
              Una cabaña al costado de la ruta
            </h2>
            <p className="text-sm md:text-base max-w-xl mb-10" style={{ color: 'rgba(242,232,213,0.75)' }}>
              Bruno's no tiene redes sociales ni logo publicado: en su ficha
              solo hay una foto real, esta del interior. Todo lo demás de la
              página va con texto — y lo que no hay foto, se dibuja y se marca.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <Reveal className="col-span-12 md:col-span-7">
              <figure className="border-[6px] shadow-2xl" style={{ borderColor: C.cream }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior real de Bruno's Bar: mesas de madera clara, paredes de troncos redondos, vitrina con copas y mesa de ping-pong al fondo"
                  width={1200}
                  height={900}
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="block w-full h-auto"
                />
                <figcaption className={`${display.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] px-3 py-2.5`} style={{ backgroundColor: C.cream, color: C.wood }}>
                  Foto real · el salón de troncos (Google Maps)
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-5" delay={140}>
              <figure className="border-2 border-dashed p-4" style={{ borderColor: 'rgba(242,232,213,0.5)' }}>
                <svg viewBox="0 0 400 260" className="block w-full h-auto" role="img" aria-label="Bosquejo: cabaña de madera junto a la carretera con cerros de fondo">
                  <rect x="0" y="0" width="400" height="260" fill="#32241A" />
                  <path d="M0 200 Q90 150 200 185 T400 170 V260 H0 Z" fill="#2E4A2A" opacity="0.85" />
                  <path d="M0 210 Q110 175 210 200 T400 195 V260 H0 Z" fill="#241A12" />
                  <path d="M0 236 Q140 216 400 226" stroke="#D98E2B" strokeWidth="3" strokeDasharray="18 14" fill="none" />
                  <g transform="translate(120,90)">
                    <path d="M0 40 L80 -6 L160 40" fill="#1E4433" />
                    <rect x="14" y="40" width="132" height="70" fill="#4A3320" />
                    <rect x="14" y="40" width="132" height="70" fill="none" stroke="#D98E2B" strokeWidth="2" strokeDasharray="6 5" />
                    <rect x="66" y="70" width="28" height="40" fill="#241A12" />
                    <rect x="30" y="56" width="26" height="20" fill="#F2E8D5" opacity="0.85" />
                    <rect x="104" y="56" width="26" height="20" fill="#F2E8D5" opacity="0.85" />
                  </g>
                  <text x="200" y="30" textAnchor="middle" fill="#D98E2B" fontSize="15" fontWeight="700" fontFamily="Georgia, serif">BRUNO'S BAR</text>
                </svg>
                <figcaption className="mt-3 flex items-center gap-2">
                  <span className={`${display.className} text-[10px] font-black uppercase tracking-[0.18em] px-2 py-1`} style={{ backgroundColor: C.amber, color: C.wood }}>
                    Bosquejo
                  </span>
                  <span className="text-[11px]" style={{ color: 'rgba(242,232,213,0.7)' }}>
                    Ilustración, no foto — la fachada real no está publicada
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
          {/* comodidades */}
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
            {[
              ['Terraza al aire libre', 'M12 3v3m0 12v3m9-9h-3M6 12H3m13.5-5.5-2 2m-7 7-2 2m9 0-2-2m-7-7-2-2'],
              ['Estacionamiento amplio', 'M5 17h14M7 17l1.5-6h7L17 17M9 17v2m6-2v2M12 5a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4Z'],
              ['Vista al campo', 'M3 18l5-7 4 5 3-4 6 6H3Z M15 6a2 2 0 1 1 0 .01'],
              ['Ambiente familiar', 'M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.5-5 5-5s5 2 5 5m1 0c0-3 2.5-5 5-5'],
            ].map(([t, d]) => (
              <Reveal key={t}>
                <li className="flex flex-col items-start gap-2.5 border border-white/15 px-4 py-4">
                  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke={C.amber} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={d} /></svg>
                  <span className={`${display.className} text-sm font-bold`} style={{ color: C.cream }}>{t}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="grid grid-cols-12 gap-8 items-end mb-10">
            <div className="col-span-12 md:col-span-7">
              <h2 className={`${display.className} font-black tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.4rem)] leading-[1.02] mb-4`} style={{ color: C.wood }}>
                Los que pararon, volvieron
              </h2>
              <p className="text-sm md:text-base max-w-xl" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google con nota {BIZ.rating}. El
                patrón se repite: comida casera, precio honesto y atención
                de familia, a un costado de la ruta a la costa.
              </p>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:justify-end gap-8">
              <div className="border-l-4 pl-4" style={{ borderColor: C.amber }}>
                <p className={`${display.className} font-black text-4xl leading-none`} style={{ color: C.wood }}>{BIZ.rating}</p>
                <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>de 5</p>
              </div>
              <div className="border-l-4 pl-4" style={{ borderColor: C.moss }}>
                <p className={`${display.className} font-black text-4xl leading-none`} style={{ color: C.wood }}>{BIZ.reviews}</p>
                <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>reseñas</p>
              </div>
            </div>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={i} className="col-span-12 md:col-span-4" delay={i * 120}>
              <li className="h-full border-t-4 pt-5 px-5 pb-6 shadow-sm" style={{ backgroundColor: '#FBF4E3', borderColor: i === 1 ? C.moss : C.amber }}>
                <Stars value={5} color={C.amber} className="w-4 h-4 mb-3" />
                <p className="text-sm md:text-base leading-relaxed italic mb-4" style={{ color: C.ink }}>“{r.q}”</p>
                <p className={`${display.className} text-xs font-bold uppercase tracking-[0.16em]`} style={{ color: C.muted }}>{r.a}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20 border-t" style={{ backgroundColor: C.cream, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} font-black tracking-[-0.02em] text-[clamp(1.8rem,5vw,3.2rem)] leading-none mb-10`} style={{ color: C.wood }}>
              Bajas por la ruta y está ahí
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 md:col-span-5 space-y-6">
              <Reveal>
                <ul className="space-y-4 text-sm md:text-base" style={{ color: C.ink }}>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.moss} strokeWidth="2" aria-hidden="true"><path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>
                    <span><strong>{BIZ.address}</strong><br />{BIZ.city}, {BIZ.region} · {BIZ.plusCode}</span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.moss} strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
                    <span>{BIZ.hours}</span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.moss} strokeWidth="2" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9Z"/></svg>
                    <span>
                      <a href={TEL_LINK} className="font-bold underline underline-offset-4 tap-44" style={{ color: C.road }}>{BIZ.phoneDisplay}</a>
                      <br /><span style={{ color: C.muted }}>No publican WhatsApp — el contacto es el teléfono</span>
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.moss} strokeWidth="2" aria-hidden="true"><rect x="3" y="7" width="18" height="12" rx="2"/><path d="M8 11h.01M12 11h.01M16 11h.01M8 15h8"/></svg>
                    <span>Precio por persona en su ficha:<br /><strong>{BIZ.priceRange}</strong></span>
                  </li>
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a href={TEL_LINK} className={`${display.className} bb-btn font-bold uppercase tracking-wide text-sm px-7 py-3.5 tap-44`} style={{ backgroundColor: C.road, color: '#FFFFFF' }}>
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${display.className} bb-btn font-bold uppercase tracking-wide text-sm px-7 py-3.5 border-2 tap-44`} style={{ borderColor: C.wood, color: C.wood }}>
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Reveal delay={100}>
                <div className="border-4 shadow-lg overflow-hidden" style={{ borderColor: C.wood }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa de Bruno's Bar, ruta a Licantén"
                    className="w-full h-[300px] md:h-[380px] block"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.wood }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <p className={`${display.className} font-black uppercase tracking-[0.14em] text-sm`} style={{ color: C.cream }}>
            {BIZ.name} · {BIZ.city}
          </p>
          <p className="text-xs" style={{ color: 'rgba(242,232,213,0.6)' }}>
            Página de muestra · 1 foto real de su ficha; lo demás va marcado como bosquejo
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.road} />
    </div>
  )
}
