import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  crema: '#FFF6E9',
  chocolate: '#3B2416',
  chocolateDeep: '#2A170C',
  frambuesa: '#D6336C',
  // versión profunda para texto y botones sobre crema (≥4.5:1)
  frambuesaFuerte: '#B01E52',
  pistachoDeep: '#4F7244',
  vainilla: '#F2B441',
  vainillaDeep: '#8A5B0B',
  tintFrambuesa: '#FADBE7',
  tintPistacho: '#E4EDDC',
  tintVainilla: '#FBE7C0',
  tintChocolate: '#EFDFCC',
  card: '#FFFCF4',
  muted: '#6B5442',
  line: 'rgba(59,36,22,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'san-clemente-heladeria',
  title: 'Heladería San Clemente · Helado artesanal en el Maule',
  description: 'Heladería artesanal en San Clemente, Región del Maule. Sabores de temporada, copas y helado para llevar, sábados y domingos. Pide por WhatsApp.',
  image: '/demos/san-clemente-heladeria/hero.webp',
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Hecho en casa', href: '#hecho-en-casa' },
  { label: 'Celebraciones', href: '#celebraciones' },
  { label: 'Visita', href: '#visita' },
]

// * = sabores vistos en las historias reales del Instagram de la heladería
const FAMILIAS = [
  {
    name: 'Cremas',
    nota: 'las de siempre, bien hechas',
    tint: C.tintVainilla,
    deep: C.vainillaDeep,
    flavors: [
      { name: 'Mantecado de la casa', color: '#EFD9A8', desc: 'la base cremosa que ordena la vitrina' },
      { name: 'Lúcuma', color: '#D9973F', desc: 'fruta chilena, dulzor profundo' },
      { name: 'Manjar', color: '#B06A24', desc: 'con vetas de manjar de verdad' },
      { name: 'Chocolate', color: '#4A2C17', desc: 'amargo justo, como tiene que ser' },
      { name: 'Vainilla', color: '#F3E2B8', desc: 'con la semilla a la vista' },
      { name: 'Pistacho', color: '#8AB17D', desc: 'tostado suave, verde natural' },
    ],
  },
  {
    name: 'Frutas',
    nota: 'de temporada y refrescantes',
    tint: C.tintFrambuesa,
    deep: C.frambuesaFuerte,
    flavors: [
      { name: 'Yogur melón', color: '#EFC25E', desc: 'melón con crema y yogur', real: true },
      { name: 'Frutilla', color: '#E2477E', desc: 'dulce y rosada, pura fruta' },
      { name: 'Mora', color: '#5B2A4A', desc: 'intenso, casi vino' },
      { name: 'Frambuesa', color: '#D6336C', desc: 'ácido y fresco' },
      { name: 'Piña', color: '#EFCE52', desc: 'tropical y liviano' },
      { name: 'Limón', color: '#D8DC6E', desc: 'el que despeja el calor' },
    ],
  },
  {
    name: 'Tortas',
    nota: 'como el postre de la abuela',
    tint: C.tintChocolate,
    deep: C.chocolate,
    flavors: [
      { name: 'Torta manjar nuez', color: '#9C6228', desc: 'la favorita de la casa', real: true },
      { name: 'Torta de limón', color: '#D9CE5C', desc: 'merengue y limón en helado', real: true },
      { name: 'Tres leches', color: '#EBDCBC', desc: 'suave y de cuchara' },
      { name: 'Oreo', color: '#3A3230', desc: 'con trozos de galleta' },
      { name: 'Selva negra', color: '#4E222C', desc: 'chocolate y guinda' },
    ],
  },
]

const MARQUEE = [
  'yogur melón',
  'torta manjar nuez',
  'torta de limón',
  'pistacho',
  'mantecado',
  'frutilla',
  'lúcuma',
  'mora',
  'chocolate',
  'manjar',
  'maracuyá',
  'tres leches',
]

const PASOS = [
  {
    title: 'Fruta en su punto',
    desc: 'Se trabaja con fruta de temporada: melón, mora, frutilla y limón cuando están mejores.',
  },
  {
    title: 'Base cocida lento',
    desc: 'La mezcla se cocina a fuego suave y se deja reposar antes de batir, para que tome cuerpo.',
  },
  {
    title: 'Mantecado en frío',
    desc: 'Cada sabor se bate en tandas chicas y sale cremoso, sin apuro ni prisa.',
  },
  {
    title: 'Directo a la vitrina',
    desc: 'Lo que se prepara en la semana se sirve el fin de semana, recién hecho.',
  },
]

const OCASIONES = [
  {
    icon: 'copa',
    title: 'Copas en el local',
    desc: 'Bolas a elección con manjar, salsa de fruta y nuez, servidas en copa de vidrio.',
  },
  {
    icon: 'torta',
    title: 'Cumpleaños y onces',
    desc: 'Encargos para celebrar en casa o en el local, coordinados con anticipación.',
  },
  {
    icon: 'feria',
    title: 'Ferias de la zona',
    desc: 'El stand sale a ferias y emprendimientos; el calendario se avisa por Instagram.',
  },
  {
    icon: 'copa2',
    title: 'Concursos',
    desc: 'La heladería también participa en concursos de la zona. De eso se habla en las historias.',
  },
]

// ── Decoración ──────────────────────────────────────────────

function Cone({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7.2 10.8 a4.8 4.8 0 0 1 9.6 0" />
      <path d="M7 11.5 L12 21.5 L17 11.5" />
      <path d="M9.4 14.8 L14.6 14.8" />
    </svg>
  )
}

// Borde de goteo: el color de la sección anterior gotea sobre la siguiente,
// como el helado que se derrite por el borde de la vitrina.
function Drips({ fill }: { fill: string }) {
  return (
    <svg
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      className="block w-full h-[30px] md:h-[44px] -mt-px"
      aria-hidden="true"
    >
      <path
        d="M0 0 L1440 0 L1440 18
           a40 34 0 0 1 -80 0 a40 20 0 0 1 -80 0 a40 28 0 0 1 -80 0
           a40 34 0 0 1 -80 0 a40 20 0 0 1 -80 0 a40 28 0 0 1 -80 0
           a40 34 0 0 1 -80 0 a40 20 0 0 1 -80 0 a40 28 0 0 1 -80 0
           a40 34 0 0 1 -80 0 a40 20 0 0 1 -80 0 a40 28 0 0 1 -80 0
           a40 34 0 0 1 -80 0 a40 20 0 0 1 -80 0 a40 28 0 0 1 -80 0
           a40 34 0 0 1 -80 0 a40 20 0 0 1 -80 0 a40 28 0 0 1 -80 0 Z"
        fill={fill}
      />
    </svg>
  )
}

function OccasionIcon({ kind, color }: { kind: string; color: string }) {
  const paths: Record<string, React.ReactNode> = {
    copa: (
      <>
        <path d="M5 4 h14 c0 5 -3 8 -7 9" />
        <path d="M5 4 c0 5 3 8 7 9" />
        <path d="M12 13 v5" />
        <path d="M8.5 20.5 h7" />
      </>
    ),
    torta: (
      <>
        <path d="M4.5 12.5 h15 v7.5 h-15 Z" />
        <path d="M4.5 12.5 c1.5 1.6 3 1.6 4.5 0 c1.5 1.6 3 1.6 4.5 0 c1.5 1.6 3 1.6 4.5 0 c.8.9 1.5 1.2 1.5 0" />
        <path d="M8.5 12.5 V9.8 M12 12.5 V9.8 M15.5 12.5 V9.8" />
      </>
    ),
    feria: (
      <>
        <path d="M4 20 L4 9 M20 20 L20 9" />
        <path d="M3 9 a3 3 0 0 1 6 0 a3 3 0 0 1 6 0 a3 3 0 0 1 6 0" />
        <path d="M3 9 L5 4.5 h14 L21 9" />
        <path d="M8 20 v-5 h8 v5" />
      </>
    ),
    copa2: (
      <>
        <path d="M8 4 h8 v4.5 a4 4 0 0 1 -8 0 Z" />
        <path d="M8 5 H5.5 a2.6 2.6 0 0 0 2.8 3.4" />
        <path d="M16 5 h2.5 a2.6 2.6 0 0 1 -2.8 3.4" />
        <path d="M12 12.5 v3.5 M9 19.5 h6" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color }}
    >
      <Cone className="w-[17px] h-[17px]" />
      {children}
    </p>
  )
}

export default function SanClementeHeladeriaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.chocolate }}
    >
      <style>{`
        @keyframes sc-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .sc-marquee { animation: sc-marquee 32s linear infinite }
        @media (prefers-reduced-motion: reduce) { .sc-marquee { animation: none } }
        .sc-band > div { background-color: rgba(42,23,12,0.94) }
      `}</style>

      <div style={{ backgroundColor: C.chocolateDeep }}>
        <BlitzNav
          name={BIZ.short}
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(255,246,233,0.94)',
            ink: C.chocolate,
            line: C.line,
            btnBg: C.frambuesaFuerte,
            btnInk: C.crema,
          }}
        />
      </div>

      {/* ── Hero a sangre: la vitrina misma ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.chocolateDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Bandeja de helado veteado de manjar en el jardín de la Heladería San Clemente"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(42,23,12,0.55) 0%, rgba(42,23,12,0.38) 40%, rgba(42,23,12,0.9) 100%)',
          }}
        />
        {/* sello Instagram */}
        <div className="absolute top-20 md:top-24 right-5 md:right-8">
          <Reveal>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${focusRing} tap-44`}
              style={{ backgroundColor: 'rgba(255,246,233,0.95)', color: C.frambuesaFuerte }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20 pt-28">
          <Reveal>
            <Eyebrow color={C.vainilla}>Heladería artesanal · San Clemente</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,8vw,6rem)] mb-6`}
              style={{ color: C.crema, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
            >
              Helado artesanal,
              <br />
              <em className="italic font-semibold" style={{ color: C.vainilla }}>
                hecho en casa
              </em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,246,233,0.9)' }}>
              Cada sábado y domingo la vitrina se llena de sabores de
              temporada, copas para la once y helado para llevar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.vainilla, color: C.chocolate }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,246,233,0.55)', color: C.crema }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de sabores ── */}
      <div className="overflow-hidden py-3.5" style={{ backgroundColor: C.chocolateDeep }} aria-hidden="true">
        <div className="sc-marquee flex w-max items-center gap-8">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              {MARQUEE.map((s) => (
                <span
                  key={`${dup}-${s}`}
                  className={`${display.className} italic text-base md:text-lg whitespace-nowrap flex items-center gap-3`}
                  style={{ color: 'rgba(255,246,233,0.92)' }}
                >
                  <span style={{ color: C.frambuesa }} className="text-sm not-italic">✶</span>
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <Drips fill={C.chocolateDeep} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-24">
          <Reveal>
            <h2
              className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.02] mb-4`}
              style={{ color: C.chocolate, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
            >
              La vitrina
              <em className="italic" style={{ color: C.frambuesaFuerte }}> de la semana</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10 md:mb-14" style={{ color: C.muted }}>
              Carta de muestra para este sitio: la vitrina real rota cada
              semana. Los sabores marcados fueron vistos en las historias
              de su Instagram.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
            {FAMILIAS.map((fam, i) => (
              <Reveal key={fam.name} delay={i * 110} className={i === 1 ? 'lg:-translate-y-4' : i === 2 ? 'lg:translate-y-4' : ''}>
                <article
                  className="h-full rounded-[28px] border p-6 md:p-7"
                  style={{ backgroundColor: fam.tint, borderColor: `${fam.deep}33` }}
                >
                  <header className="flex items-center gap-3.5 mb-5">
                    <span className="flex -space-x-3" aria-hidden="true">
                      {fam.flavors.slice(0, 3).map((f) => (
                        <span
                          key={f.name}
                          className="w-9 h-9 rounded-full border-2"
                          style={{ backgroundColor: f.color, borderColor: fam.tint }}
                        />
                      ))}
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-2xl leading-none`} style={{ color: C.chocolate }}>
                        {fam.name}
                      </h3>
                      <p className="text-[13px] mt-1" style={{ color: C.muted }}>
                        {fam.nota}
                      </p>
                    </div>
                  </header>
                  <ul>
                    {fam.flavors.map((f) => (
                      <li
                        key={f.name}
                        className="flex items-start gap-3 py-2.5 border-t first:border-t-0"
                        style={{ borderColor: `${fam.deep}1F` }}
                      >
                        <span
                          className="w-4 h-4 rounded-full mt-1 shrink-0 border"
                          style={{ backgroundColor: f.color, borderColor: 'rgba(59,36,22,0.18)' }}
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <p className={`${display.className} font-semibold text-[15px] md:text-base leading-snug`} style={{ color: C.chocolate }}>
                            {f.name}
                            {'real' in f && f.real && (
                              <span
                                className="ml-2 inline-block align-middle text-[10px] font-bold uppercase tracking-wide rounded-full px-2 py-0.5"
                                style={{ backgroundColor: fam.deep, color: '#fff' }}
                              >
                                de su Instagram
                              </span>
                            )}
                          </p>
                          <p className="text-[13px] leading-snug mt-0.5" style={{ color: C.muted }}>
                            {f.desc}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className="text-sm leading-relaxed mt-8 max-w-xl" style={{ color: C.muted }}>
              Se sirve en cono, copa o pocillo, y hay pote para llevar.
              Los sabores y precios de la semana se confirman por{' '}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: C.frambuesaFuerte, textDecorationColor: 'rgba(176,30,82,0.35)' }}
              >
                WhatsApp
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Hecho en casa ── */}
      <section id="hecho-en-casa" className="scroll-mt-20" style={{ backgroundColor: C.tintPistacho }}>
        <Drips fill={C.crema} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <div className="relative">
                <div
                  className="relative overflow-hidden border aspect-[4/3] rounded-[28px]"
                  style={{
                    borderColor: 'rgba(79,114,68,0.3)',
                    boxShadow: '0 18px 40px rgba(59,36,22,0.13)',
                  }}
                >
                  <Image
                    src={`${IMG}/detalle3.webp`}
                    alt="Helado recién batido cayendo de la máquina a la bandeja, producción propia"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <Cone className="absolute -top-4 right-6 w-[54px] h-[54px] rotate-[14deg] opacity-60" color={C.pistachoDeep} />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2
                className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.04] mb-8`}
                style={{ color: C.chocolate, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
              >
                Hecho en casa,
                <br />
                <em className="italic" style={{ color: C.pistachoDeep }}>en tandas chicas</em>
              </h2>
              <ol>
                {PASOS.map((p, i) => (
                  <li
                    key={p.title}
                    className="flex items-start gap-5 py-4 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(59,36,22,0.12)' }}
                  >
                    <span
                      className={`${display.className} italic font-bold text-2xl leading-none w-[44px] shrink-0 pt-0.5`}
                      style={{ color: C.frambuesaFuerte }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-lg md:text-xl mb-1`} style={{ color: C.chocolate }}>
                        {p.title}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="text-xs leading-relaxed mt-6" style={{ color: C.muted }}>
                Proceso de muestra para este mockup: al publicar se cuenta
                el proceso real de la heladería.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Copas y celebraciones ── */}
      <section id="celebraciones" className="scroll-mt-20" style={{ backgroundColor: C.chocolateDeep }}>
        <Drips fill={C.tintPistacho} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-16 items-center">
            <Reveal className="order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-[28px] border aspect-[4/3]" style={{ borderColor: 'rgba(255,246,233,0.18)' }}>
                <Image
                  src={`${IMG}/detalle1.webp`}
                  alt="Bolas de helado frambuesa y crema con salsa de chocolate sobre plátano, servidas en el local"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="order-1 lg:order-2">
              <Eyebrow color={C.vainilla}>Para compartir</Eyebrow>
              <h2
                className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.08] mb-6`}
                style={{ color: C.crema, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
              >
                Copas, cumpleaños
                <br />
                <em className="italic inline-block pb-1" style={{ color: C.vainilla }}>y ferias</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,246,233,0.82)' }}>
                La heladería arma copas en el local y sale a ferias y
                concursos de la zona. Si hay algo que celebrar, hay helado.
              </p>
              <ul className="mb-9">
                {OCASIONES.map((o) => (
                  <li
                    key={o.title}
                    className="flex items-start gap-4 py-4 border-b last:border-b-0"
                    style={{ borderColor: 'rgba(255,246,233,0.12)' }}
                  >
                    <span
                      className="w-[42px] h-[42px] rounded-full flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(242,180,65,0.14)' }}
                    >
                      <OccasionIcon kind={o.icon} color={C.vainilla} />
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-base md:text-lg`} style={{ color: C.crema }}>
                        {o.title}
                      </h3>
                      <p className="text-sm leading-relaxed mt-0.5" style={{ color: 'rgba(255,246,233,0.75)' }}>
                        {o.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.vainilla, color: C.chocolate }}
              >
                Pedir por WhatsApp
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Visita: mapa + ficha ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <Drips fill={C.chocolateDeep} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-8">
          <Reveal>
            <h2
              className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.08] mb-3`}
              style={{ color: C.chocolate, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
            >
              Pásate <em className="italic inline-block pb-1" style={{ color: C.frambuesaFuerte }}>a probar</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              El local abre los fines de semana y el resto se coordina por
              WhatsApp.
            </p>
            <div className="relative overflow-hidden rounded-[28px] border aspect-[16/9] md:aspect-[21/8]" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Interior real de Heladería San Clemente: mesas, taca-taca y ventanal hacia el jardín"
                fill
                sizes="(min-width: 768px) 75vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className="text-[11px] leading-relaxed mt-2.5" style={{ color: C.muted }}>
              Foto real del local, tomada de su Instagram @heladeriasanclemente.
            </p>
          </Reveal>
        </div>
        <div className="relative">
          <div className="h-[300px] md:h-[460px]">
            <LazyMap
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="px-5 md:px-8">
            <div className="relative mt-6 md:mt-0 md:absolute md:top-1/2 md:left-8 md:-translate-y-1/2 md:w-[380px] z-10">
              <Reveal>
                <div
                  className="rounded-[28px] border p-6 md:p-7 max-w-[380px] mx-auto md:mx-0 md:max-w-none shadow-xl"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                <p className={`${display.className} font-bold text-lg mb-3`} style={{ color: C.chocolate }}>
                  {BIZ.name}
                </p>
                <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                  <br />
                  <span className="text-xs">La dirección exacta se confirma por WhatsApp.</span>
                </address>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-start gap-2.5 text-sm" style={{ color: C.muted }}>
                    <Cone className="w-4 h-4 shrink-0 mt-0.5" color={C.frambuesaFuerte} />
                    <span>
                      <strong className="font-bold" style={{ color: C.chocolate }}>Sábados y domingos:</strong> de 15:00 a 19:30
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm" style={{ color: C.muted }}>
                    <Cone className="w-4 h-4 shrink-0 mt-0.5" color={C.frambuesaFuerte} />
                    <span>
                      <strong className="font-bold" style={{ color: C.chocolate }}>Entre semana:</strong> encargos por WhatsApp
                    </span>
                  </li>
                </ul>
                <p className="text-[11px] leading-relaxed mb-5" style={{ color: C.muted }}>
                  Horario referencial, tomado de su Instagram.
                </p>
                <div className="flex flex-wrap gap-2.5">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.frambuesaFuerte, color: C.crema }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-bold text-sm px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                    style={{ borderColor: 'rgba(59,36,22,0.3)', color: C.chocolate }}
                  >
                    Cómo llegar →
                  </a>
                </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        {/* espacio bajo la tarjeta en móvil */}
        <div className="h-10 md:h-0" />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.chocolateDeep }}>
        <Drips fill={C.crema} />
        <Image
          src={`${IMG}/detalle2.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Cone className="w-[34px] h-[34px] mx-auto mb-5" color={C.vainilla} />
            <h2
              className={`${display.className} font-bold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`}
              style={{ color: C.crema, fontVariationSettings: '"opsz" 144, "SOFT" 30, "WONK" 1' }}
            >
              Este fin de semana,
              <br />
              <em className="italic" style={{ color: C.vainilla }}>helado de verdad</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,246,233,0.8)' }}>
              Escríbenos por WhatsApp para los sabores de la semana,
              encargos y copas para celebrar.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.vainilla, color: C.chocolate }}
            >
              Pedir por WhatsApp
            </a>
            <p className="text-xs mt-5" style={{ color: 'rgba(255,246,233,0.8)' }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.chocolateDeep, color: C.crema }}>
        <div className="border-t" style={{ borderColor: 'rgba(255,246,233,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
            <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-3`}>
              <Cone className="w-5 h-5" color={C.vainilla} />
              {BIZ.name}
            </p>
            <p className="text-sm mb-2" style={{ color: 'rgba(255,246,233,0.8)' }}>
              {BIZ.city}, {BIZ.region} · sábados y domingos de 15:00 a 19:30
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,246,233,0.8)' }}>
              Sitio de ejemplo de Sitiazo: nombre, comuna, WhatsApp, Instagram,
              horario, sabores marcados, fotos y logo son reales; carta completa
              y textos son de muestra.
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
