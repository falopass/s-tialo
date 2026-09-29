import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({ src: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800' })
const body = localFont({ src: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900' })

// Paleta sacada de su local: burdeos de los muros, magenta del
// neón, verde selva del mural y crema.
const C = {
  berry: '#38092B',
  berryPanel: '#4A1138',
  magenta: '#E8449A',
  magentaOsc: '#C22873',
  jungle: '#1C4B38',
  crema: '#FFF4EA',
  arena: '#F8E8DA',
  muted: '#8A5C73',
  line: 'rgba(56,9,43,0.14)',
}

const IMG2 = '/demos/acai-city'

export const metadata: Metadata = demoMetadata({
  slug: 'acai-city',
  title: 'Acai City - Açaí, pitaya y toppings en Av. Lircay, Talca',
  description:
    'Bowls de açaí y pitaya con barra de toppings en Av. Lircay 2455, Local 10, Talca. Lun a sáb 10:30 a 20:30, dom desde las 11:00. Pedidos por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'El local', href: '#local' },
  { label: 'El bowl', href: '#bowl' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

const LOCAL = [
  { src: 'neon.webp', alt: 'Barra de toppings de Acai City bajo el letrero de neón I Love Acai' },
  { src: 'local.webp', alt: 'Interior de Acai City con su barra, murales y lámparas de ratán' },
  { src: 'mesas.webp', alt: 'Mesas junto al mural de palma de açaí y el ventanal a Lircay' },
  { src: 'mural.webp', alt: 'Mural de racimos de açaí y tucán pintado en el local' },
]

const BOWL = [
  { t: 'Açaí', d: 'La base estrella: cremoso, frío y de fruta real.' },
  { t: 'Pitaya', d: 'La otra fruta de la casa, para variar o combinar.' },
  { t: 'Barra de toppings', d: 'La barra del local para armar el bowl a tu manera.' },
]

const RESENAS = [
  { q: 'Muy ricos los helados, la atención expedita y los topping frescos y variados, muy recomendable.', n: 'Yeison Navarrete' },
  { q: 'Excelente atención al cliente, el lugar muy limpio y agradable tanto como acogedor.', n: 'Yarixsa Araceli' },
  { q: 'Todo rico y fresco. Hay harta variedad para elegir y la atención es súper buena. Recomendado totalmente.', n: 'Mauri Aviles' },
]

/** Borde ondulado, como los paneles curvos del local. */
function Ola({ color, flip = false }: { color: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 120 14"
      preserveAspectRatio="none"
      className={`block w-full h-[16px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0 14V8c10-9 20-9 30 0s20 9 30 0 20-9 30 0 20 9 30 0v6H0Z" fill={color} />
    </svg>
  )
}

/** Racimo de açaí: textura de bayas agrupadas. */
function Bayas({ id, color, opacity = 0.25 }: { id: string; color: string; opacity?: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width="46" height="46" patternUnits="userSpaceOnUse">
          <circle cx="8" cy="8" r="2.2" fill={color} />
          <circle cx="13" cy="12" r="1.7" fill={color} />
          <circle cx="7" cy="14" r="1.4" fill={color} />
          <circle cx="34" cy="32" r="2.2" fill={color} />
          <circle cx="39" cy="36" r="1.7" fill={color} />
          <circle cx="33" cy="38" r="1.4" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} opacity={opacity} />
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'magenta' | 'crema' | 'outline' | 'outlineLight'; external?: boolean }) {
  const st =
    tone === 'magenta' ? { backgroundColor: C.magenta, color: '#FFF4EA' }
    : tone === 'crema' ? { backgroundColor: C.crema, color: C.berry }
    : tone === 'outline' ? { border: `1.5px solid ${C.berry}`, color: C.berry }
    : { border: '1.5px solid rgba(255,244,234,0.8)', color: C.crema }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.berry, color: C.crema }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold text-xl`}
        theme={{ over: 'dark', bar: 'rgba(56,9,43,0.92)', ink: C.crema, line: 'rgba(255,244,234,0.14)', btnBg: C.magenta, btnInk: C.crema }}
        ctaLabel="Pedir"
      />

      <main id="inicio">
        {/* HERO: oscuro como el bowl, el vaso como protagonista */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-8 md:pb-14">
          <Bayas id="ac-bayas-hero" color={C.magenta} opacity={0.14} />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <h1 className={`${display.className} font-extrabold leading-[0.98] text-[44px] sm:text-6xl lg:text-[76px] tracking-tight`}>
                  Açaí de verdad <span style={{ color: C.magenta }}>en plena Lircay</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed max-w-md mx-auto md:mx-0" style={{ color: 'rgba(255,244,234,0.78)' }}>
                  Bowls de açaí y pitaya con barra de toppings, en el Local 10 de Av. Lircay 2455, Talca.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Btn href={WA_LINK} tone="magenta">Pedir por WhatsApp</Btn>
                  <Btn href="#local" tone="outlineLight" external={false}>Conocer el local</Btn>
                </div>
                <p className="mt-6 inline-flex items-center gap-2 text-sm font-bold" style={{ color: C.crema }}>
                  <Stars value={BIZ.rating} color={C.magenta} />
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative max-w-sm mx-auto md:max-w-none">
                <div className="overflow-hidden rounded-[2rem] border-4" style={{ borderColor: C.berryPanel, boxShadow: '0 24px 56px rgba(0,0,0,0.4)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG2}/vaso.webp`}
                    alt="Vaso de Acai City con açaí cremoso y toppings, con el mural de fondo"
                    className="w-full h-auto aspect-[4/5] object-cover"
                    loading="eager"
                  />
                </div>
                <figcaption
                  className={`${display.className} absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full px-5 py-2 text-base font-bold shadow-lg whitespace-nowrap`}
                  style={{ backgroundColor: C.magenta, color: C.crema }}
                >
                  5,0 en Google
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* EL LOCAL: tira de fotos del interior */}
        <section id="local" className="relative scroll-mt-16" style={{ backgroundColor: C.crema }}>
          <Ola color={C.berry} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-14 md:pb-20">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-extrabold leading-[1] tracking-tight`} style={{ color: C.berry }}>
                Un local que se siente <span style={{ color: C.magentaOsc }}>brasilero</span>
              </h2>
              <p className="mt-4 max-w-lg text-base" style={{ color: C.muted }}>
                Mural de palma de açaí, tucán pintado y una barra de toppings al centro. Av. Lircay 2455, Local 10.
              </p>
            </Reveal>
            <div className="mt-8 -mx-5 md:mx-0 flex gap-4 overflow-x-auto px-5 md:px-0 pb-3 snap-x snap-mandatory">
              {LOCAL.map((f, i) => (
                <figure key={f.src} className="shrink-0 w-[78vw] sm:w-[46%] md:w-[31%] snap-center overflow-hidden rounded-3xl" style={{ boxShadow: '0 12px 30px rgba(56,9,43,0.16)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG2}/${f.src}`} alt={f.alt} className="w-full aspect-[4/5] md:aspect-[3/4] object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* EL BOWL: lo que puedes armar */}
        <section id="bowl" className="relative scroll-mt-16 overflow-hidden" style={{ backgroundColor: C.jungle }}>
          <Ola color={C.crema} />
          <Bayas id="ac-bayas-bowl" color={C.crema} opacity={0.1} />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 items-center">
              <Reveal>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-extrabold leading-[1] tracking-tight`}>
                  El bowl se arma <span style={{ color: C.magenta }}>a tu manera</span>
                </h2>
                <p className="mt-4 text-base leading-relaxed" style={{ color: 'rgba(255,244,234,0.78)' }}>
                  La fórmula es simple: eliges la fruta de base y después la barra de toppings. Los clientes repiten lo mismo en las reseñas: variedad y frescura.
                </p>
              </Reveal>
              <div className="space-y-3">
                {BOWL.map((b, i) => (
                  <Reveal key={b.t} delay={i * 100}>
                    <div className="flex items-center gap-4 rounded-2xl px-5 py-4" style={{ backgroundColor: 'rgba(255,244,234,0.08)' }}>
                      <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden="true">
                        <circle cx="15" cy="14" r="8" fill={C.magenta} />
                        <circle cx="26" cy="20" r="6.5" fill={C.magenta} opacity="0.75" />
                        <circle cx="18" cy="27" r="5" fill={C.magenta} opacity="0.55" />
                      </svg>
                      <div>
                        <h3 className={`${display.className} text-2xl font-bold`} style={{ color: C.crema }}>{b.t}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,244,234,0.75)' }}>{b.d}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* MURAL + LA RESEÑA QUE LO DICE TODO */}
        <section className="relative" style={{ backgroundColor: C.berry }}>
          <Ola color={C.jungle} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <figure className="relative overflow-hidden rounded-[2rem] border-4 rotate-[-1.5deg]" style={{ borderColor: C.berryPanel, boxShadow: '0 20px 46px rgba(0,0,0,0.4)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG2}/mural.webp`} alt="Mural de racimos de açaí pintado en la pared de Acai City" className="w-full aspect-[4/5] object-cover" loading="lazy" />
                </figure>
              </Reveal>
              <Reveal delay={100}>
                <blockquote>
                  <p className={`${display.className} text-3xl sm:text-4xl md:text-[44px] font-extrabold leading-[1.1] tracking-tight`}>
                    “Por un ratito te transportas <span style={{ color: C.magenta }}>directo a Brasil</span>”
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: 'rgba(255,244,234,0.85)' }}>
                      <Stars value={5} color={C.magenta} className="w-3.5 h-3.5" />
                      Barbara Urbina, reseña en Google
                    </span>
                  </footer>
                  <p className="mt-4 text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,244,234,0.72)' }}>
                    “Muchísima variedad de toppings y el acai realmente delicioso. No solo te llevarás un acai delicioso, sino también una experiencia demasiado buena.”
                  </p>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </section>

        {/* OPINIONES */}
        <section id="opiniones" className="scroll-mt-16" style={{ backgroundColor: C.arena }}>
          <Ola color={C.berry} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl font-extrabold leading-[1] tracking-tight`} style={{ color: C.berry }}>
                Los que ya <span style={{ color: C.magentaOsc }}>volvieron</span>
              </h2>
              <p className="mt-4 max-w-lg text-base" style={{ color: C.muted }}>
                Reseñas reales de Google. Todas de 5 estrellas.
              </p>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {RESENAS.map((r, i) => (
                <Reveal key={r.n} delay={i * 100}>
                  <blockquote className="h-full rounded-3xl p-6" style={{ backgroundColor: C.crema, boxShadow: '0 10px 28px rgba(56,9,43,0.1)' }}>
                    <Stars value={5} color={C.magentaOsc} />
                    <p className="mt-4 leading-relaxed text-[15px]" style={{ color: C.berry }}>“{r.q}”</p>
                    <footer className="mt-4 text-sm font-bold" style={{ color: C.magentaOsc }}>{r.n}</footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DÓNDE + HORARIO */}
        <section id="donde" className="scroll-mt-16" style={{ backgroundColor: C.crema }}>
          <Ola color={C.arena} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
              <Reveal>
                <h2 className={`${display.className} text-4xl sm:text-5xl font-extrabold leading-[1] tracking-tight`} style={{ color: C.berry }}>
                  Sobre Lircay, <span style={{ color: C.magentaOsc }}>cerca de todo</span>
                </h2>
                <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.berry }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <div className="mt-5 rounded-2xl px-5 py-4 text-[15px] leading-relaxed" style={{ backgroundColor: C.arena, color: C.berry }}>
                  <p className="font-bold">Horario</p>
                  <p className="mt-1">Lunes a sábado, 10:30 a 20:30</p>
                  <p>Domingo, 11:00 a 20:30</p>
                </div>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Btn href={MAPS_URL} tone="magenta">Cómo llegar</Btn>
                  <Btn href={WA_LINK} tone="outline">WhatsApp {BIZ.phoneDisplay}</Btn>
                </div>
                <figure className="mt-8 overflow-hidden rounded-3xl" style={{ boxShadow: '0 12px 30px rgba(56,9,43,0.14)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG2}/vaso-noche.webp`} alt="Vaso de Acai City para llevar, de noche" className="w-full aspect-[16/10] object-cover" loading="lazy" />
                </figure>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-full md:min-h-[540px]" style={{ boxShadow: '0 12px 30px rgba(56,9,43,0.14)', backgroundColor: C.arena }}>
                  <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.magentaOsc }}>
          <Bayas id="ac-bayas-cta" color={C.crema} opacity={0.16} />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-6xl font-extrabold leading-[1] tracking-tight`} style={{ color: C.crema }}>
                ¿Un bowl <span style={{ color: C.berry }}>para hoy?</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(255,244,234,0.92)' }}>
                Escribe por WhatsApp, arma tu pedido y pasa a buscarlo a Lircay.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="crema">Escribir a Acai City</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: '#2B0721', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl font-bold`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,244,234,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,244,234,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
