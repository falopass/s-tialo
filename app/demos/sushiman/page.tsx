import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta tomada de su sello real: círculo rojo lacre sobre carbón, con el
// blanco del arroz y el verde oscuro de la fachada de la Villa Esperanza.
const C = {
  carbon: '#141214',
  carbon2: '#1C191B',
  crema: '#F6F0E8',
  rojo: '#C8102E',
  rojoClaro: '#F6485C',
  rojoOscuro: '#8F0B20',
  verde: '#1E3D2F',
  muda: 'rgba(246,240,232,0.7)',
  linea: 'rgba(246,240,232,0.13)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sushiman',
  title: 'Sushiman — El sabor convertido en adicción | Sitiazo.cl',
  description:
    'Sushi para llevar en Villa Esperanza, Sagrada Familia. Pide por WhatsApp y retira en el local. @sushiman.sf en Instagram.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Para llevar', href: '#llevar' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Marca "◈ Bosquejo" obligatoria para visuales que no son fotos reales.
function MarcaBosquejo() {
  return (
    <span
      className={`${mono.className} text-[10px] uppercase tracking-[0.18em] px-2 py-1`}
      style={{ color: C.muda, border: `1px dashed ${C.linea}`, borderRadius: 3 }}
    >
      ◈ Bosquejo
    </span>
  )
}

function CtaWa({ texto = 'Pedir por WhatsApp' }: { texto?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition-transform active:scale-95`}
      style={{ backgroundColor: C.rojo, color: '#fff', borderRadius: 999 }}
    >
      {texto}
    </a>
  )
}

function Sello({ children }: { children: ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full`}
      style={{ border: `1.5px solid ${C.rojoClaro}`, color: C.rojoClaro }}
    >
      {children}
    </span>
  )
}

export default function Sushiman() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.carbon, color: C.crema, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} uppercase tracking-[0.06em]`}>
            Sushi<span style={{ color: C.rojoClaro }}>man</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.carbon, ink: C.crema, line: C.linea, btnBg: C.rojo, btnInk: '#fff' }}
        fontClass={display.className}
      />

      {/* ── HERO: el sello rojo ──────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden">
        {/* Sol rojo: el disco de su logo a escala de fondo */}
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-32 md:-right-10 w-[480px] h-[480px] rounded-full"
          style={{ backgroundColor: C.rojo, opacity: 0.16 }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 relative">
          <div className="grid md:grid-cols-[1fr_0.8fr] gap-10 items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <Sello>Para llevar</Sello>
                  <Sello>Villa Esperanza</Sello>
                </div>
                <h1 className={`${display.className} uppercase leading-[0.92] text-[14vw] md:text-8xl`}>
                  El sabor
                  <br />
                  convertido
                  <br />
                  en <span style={{ color: C.rojo }}>adicción</span>
                </h1>
                <p className="mt-6 max-w-md text-base md:text-lg" style={{ color: C.muda }}>
                  El lema está en su logo, no lo inventamos. Sushiman prepara sushi
                  y alimentos para llevar en la Villa Esperanza de Sagrada Familia:
                  pides por WhatsApp y lo pasas a buscar.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <CtaWa />
                  <a
                    href="#local"
                    className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                    style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 999 }}
                  >
                    Ver el local
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative mx-auto w-fit">
                <div
                  aria-hidden="true"
                  className="absolute -inset-6 rounded-full"
                  style={{ border: `2px dashed ${C.rojo}`, opacity: 0.6 }}
                />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo redondo de Sushiman: palillos tomando un maki sobre círculo rojo"
                  className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover"
                  style={{ boxShadow: '0 20px 60px rgba(200,16,46,0.35)' }}
                />
                <figcaption
                  className={`${mono.className} absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] uppercase tracking-[0.16em] px-3 py-1.5`}
                  style={{ backgroundColor: C.rojo, color: '#fff', borderRadius: 999 }}
                >
                  El sello real del local
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PARA LLEVAR: el trato ────────────────────────────── */}
      <section id="llevar" className="py-14 md:py-20" style={{ backgroundColor: C.carbon2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoClaro }}>
              Así funciona
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
              Pides, preparan, retiras
            </h2>
            <p className="mt-4 max-w-xl text-base" style={{ color: C.muda }}>
              Su Facebook lo dice claro: elaboración y preparación de sushi y otros
              alimentos preparados para llevar. Sin mesa de espera — tu pedido sale
              de la cocina directo a tu mesa.
            </p>
          </Reveal>
          <div className="mt-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { n: '01', t: 'Escríbeles', d: `${BIZ.phoneDisplay} por WhatsApp: di qué se te antoja y para qué hora.` },
              { n: '02', t: 'Lo preparan', d: 'Sushi y alimentos preparados en el local de la villa, al momento de tu pedido.' },
              { n: '03', t: 'Lo retiras', d: 'Pasas por Av. Esperanza ST21 y te llevas la bolsa caliente.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 80}>
                <div
                  className="h-full p-6 flex flex-col"
                  style={{ border: `1px solid ${C.linea}`, borderRadius: 2, backgroundColor: C.carbon }}
                >
                  <span className={`${display.className} text-4xl`} style={{ color: C.rojo }}>{s.n}</span>
                  <h3 className={`${display.className} mt-3 text-xl uppercase`}>{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muda }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Platos: bosquejo honesto mientras no haya fotos públicas de carta */}
          <Reveal delay={120}>
            <div
              className="mt-8 rounded-2xl p-6 md:p-8 relative"
              style={{ backgroundColor: C.carbon, border: `1px solid ${C.linea}` }}
            >
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h3 className={`${display.className} uppercase text-lg`}>De la cocina</h3>
                <MarcaBosquejo />
              </div>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Maki', 'California', 'Handroll', 'Nigiri'].map((p) => (
                  <div key={p} className="flex flex-col items-center text-center">
                    {/* Roll dibujado a línea: bosquejo, no foto real */}
                    <div
                      aria-hidden="true"
                      className="w-20 h-20 rounded-full relative"
                      style={{ border: `2px solid ${C.rojo}`, backgroundColor: C.carbon2 }}
                    >
                      <div
                        className="absolute inset-[22%] rounded-full"
                        style={{ border: `2px solid ${C.crema}`, backgroundColor: C.carbon }}
                      />
                      <div
                        className="absolute inset-[40%] rounded-full"
                        style={{ backgroundColor: C.verde }}
                      />
                    </div>
                    <p className={`${display.className} mt-3 text-sm uppercase tracking-wide`}>{p}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm" style={{ color: C.muda }}>
                La carta completa la manejan por WhatsApp y en sus redes — pregúntales
                directo qué hay hoy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EL LOCAL: fachada real ───────────────────────────── */}
      <section id="local" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/fachada.webp`}
                alt="Fachada real de Sushiman en Villa Esperanza: letrero circular rojo y negro con el logo"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover"
                style={{ borderRadius: 4, border: `4px solid ${C.carbon2}`, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
              />
              <figcaption className={`${mono.className} mt-3 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muda }}>
                El local, tal como se ve al pasar — foto de su ficha de Google
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoClaro }}>
              Villa Esperanza, Sagrada Familia
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
              El sushi de la villa
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: C.muda }}>
              En la esquina de Av. Esperanza está el local del letrero circular rojo.
              Un negocio de barrio que armó su propia comunidad: más de mil personas
              lo siguen en Instagram y Facebook.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { n: BIZ.seguidoresIg, l: `seguidores @${BIZ.instagram}` },
                { n: BIZ.publicacionesIg, l: 'publicaciones en IG' },
                { n: BIZ.seguidoresFb, l: 'seguidores en Facebook' },
              ].map((s) => (
                <div key={s.l} className="p-3 text-center" style={{ border: `1px solid ${C.linea}`, borderRadius: 2 }}>
                  <p className={`${display.className} text-2xl`} style={{ color: C.rojo }}>{s.n}</p>
                  <p className="mt-1 text-[11px] leading-tight" style={{ color: C.muda }}>{s.l}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-4 py-2.5 text-xs uppercase tracking-[0.14em]`}
                style={{ border: `1px solid ${C.rojo}`, color: C.crema, borderRadius: 999 }}
              >
                IG @{BIZ.instagram} ↗
              </a>
              <a
                href={BIZ.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center px-4 py-2.5 text-xs uppercase tracking-[0.14em]`}
                style={{ border: `1px solid ${C.linea}`, color: C.crema, borderRadius: 999 }}
              >
                Facebook ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────────── */}
      <section id="llegar" className="py-14 md:py-20" style={{ backgroundColor: C.carbon2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <Reveal>
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoClaro }}>
                Punto de retiro
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl uppercase`}>
                {BIZ.city}
              </h2>
              <ul className="mt-6 space-y-3 text-sm" style={{ color: C.muda }}>
                <li>{BIZ.address}, MZI Dpto #7 — {BIZ.region}. Plus code: XJX6+XX.</li>
                <li>Pedidos: {BIZ.phoneDisplay} (WhatsApp).</li>
                <li className="flex items-center gap-2">
                  <Stars value={4.5} color={C.rojo} />
                  <span>{BIZ.rating} en Google · {BIZ.reviews} reseñas</span>
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaWa />
                <a
                  href={BIZ.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                  style={{ color: C.crema, border: `1px solid ${C.linea}`, borderRadius: 999 }}
                >
                  Cómo llegar ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden" style={{ border: `1px solid ${C.linea}`, borderRadius: 4 }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full aspect-[4/3] border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 border-t" style={{ borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-full object-cover" aria-hidden="true" />
            <div className="min-w-0">
              <p className={`${display.className} text-sm uppercase truncate`}>{BIZ.name}</p>
              <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
            Demo de catálogo — <a href="/demos/" className="underline underline-offset-2">Sitiazo.cl</a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
