import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900' },
  ],
})
const script = localFont({ src: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' })
const body = localFont({ src: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

// Paleta del letrero de neón de la fachada: negro tibio, verde neón
// y naranjo encendido; con la cuadrícula a cuadros de su carta.
const C = {
  negro: '#0D0C0A',
  panel: '#171511',
  panel2: '#1E1B15',
  neon: '#8FF05A',
  naranjo: '#FF9A3C',
  crema: '#FFF6E8',
  muted: '#B0A896',
  line: 'rgba(255,246,232,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'delicias-zambelli',
  title: 'Delicias Zambelli — Comida rápida en El Plumero, Rauco',
  description:
    'Churrascos, hamburguesas, chorrillanas y tablas en Delicias Zambelli, El Plumero, Rauco. Abierto hasta medianoche, con drive-through y delivery.',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La casa', href: '#casa' },
  { label: 'Dónde', href: '#donde' },
]

// Carta real (PDF publicado en su ficha de Google). Se muestran rangos
// de precio por categoría tal como figuran en la carta.
const CARTA = [
  {
    cat: 'Churrascos',
    items: 'Churrasco italiano · Churrasco vacuno · Zam-Churry',
    precio: '$3.500–5.800',
    firma: 'Zam-Churry, el de la casa',
  },
  {
    cat: 'Lomitos',
    items: 'Lomito italiano · Lomito completo · Lomito del chef',
    precio: '$3.500–5.500',
    firma: null,
  },
  {
    cat: 'Completos',
    items: 'Italiano · Completo · A lo pobre',
    precio: '$2.700–3.700',
    firma: null,
  },
  {
    cat: 'Hamburguesas',
    items: 'Zam-Burger · Tejana · Insaciable · Alemana · Campestre',
    precio: '$5.000–8.200',
    firma: 'La Insaciable va en serio',
  },
  {
    cat: 'Fajitas y pollo',
    items: 'Fajitas · Chicken burger',
    precio: '$3.200–7.000',
    firma: null,
  },
  {
    cat: 'Papas y chorrillanas',
    items: 'Papas fritas · Salchipapas · Chorrillanas',
    precio: '$2.500–16.500',
    firma: 'El “papapleto” que celebran en las reseñas',
  },
  {
    cat: 'Tablas y pizzas',
    items: 'Tabla Zam-Mix · Pizzas familiares',
    precio: '$11.500–15.500',
    firma: null,
  },
  {
    cat: 'Vegano, café y dulces',
    items: 'Opciones veganas · Café · Tés · Dulces',
    precio: '$1.200–7.500',
    firma: null,
  },
]

const HORARIO = [
  { dia: 'Mar a sáb', hora: '9:30 a 24:00' },
  { dia: 'Domingo', hora: '10:00 a 24:00' },
  { dia: 'Lunes', hora: 'cerrado' },
]

const RESENAS = [
  {
    nombre: 'Hannah',
    texto:
      'La comida y los tragos estaban increíbles; el mejor “papapleto” que he probado. Porciones grandes además. Viajaría otros 12.000 km por esto.',
  },
  {
    nombre: 'Yusef Giadach',
    texto:
      'Lugar maravilloso. Íbamos de viaje, paramos a comer y estaba delicioso. La atención, excelente: 11 de 10.',
  },
  {
    nombre: 'Felipe',
    texto:
      'Buena atención, comida deliciosa con verdadero sabor casero y precios muy convenientes para venir con toda la familia.',
  },
  {
    nombre: 'Kiara Millaray Espinoza',
    texto:
      'Lugar bonito y limpio. Acogedor, comida rica y barata — además aceptan mascotas.',
  },
]

const FOTOS = [
  { src: 'burger-mano', alt: 'Hamburguesa con papas fritas servida en la mano, en Delicias Zambelli', tall: true },
  { src: 'chorrillana', alt: 'Chorrillana con huevo frito sobre papas en papel cuadriculado', tall: false },
  { src: 'mesa-servida', alt: 'Mesa servida con hamburguesas, papas y un completo para dos personas', tall: true },
  { src: 'burger-cheddar', alt: 'Hamburguesa con queso cheddar derretido', tall: true },
  { src: 'salon', alt: 'Salón interior de Delicias Zambelli con mesas y pizarrón', tall: false },
  { src: 'terraza', alt: 'Terraza con mesas al aire libre del local de El Plumero', tall: false },
]

// Motivo propio del demo: marco de neón (como el letrero de la fachada)
// y la banda a cuadros de la portada de su carta.
function Neon({ children, color = C.neon, className = '' }: { children: React.ReactNode; color?: string; className?: string }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{
        border: `2px solid ${color}`,
        boxShadow: `0 0 12px ${color}44, 0 0 42px ${color}22, inset 0 0 10px ${color}18`,
      }}
    >
      {children}
    </div>
  )
}

function Damero({ className = '' }: { className?: string }) {
  return (
    <div
      className={`h-[16px] w-full ${className}`}
      aria-hidden="true"
      style={{
        backgroundImage: 'repeating-conic-gradient(#F4EFE6 0% 25%, transparent 0% 50%)',
        backgroundSize: '16px 16px',
        opacity: 0.9,
      }}
    />
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className={`${mono.className} inline-flex items-center gap-1.5 text-[11px] md:text-[12px] uppercase tracking-wide px-3 py-1.5 rounded-full border`} style={{ borderColor: 'rgba(143,240,90,0.5)', color: C.neon }}>
      {children}
    </span>
  )
}

function Btn({ href, tone, children, external = true }: { href: string; tone: 'neon' | 'naranjo' | 'outline' | 'negro'; children: React.ReactNode; external?: boolean }) {
  const st =
    tone === 'neon' ? { backgroundColor: C.neon, color: '#0D0C0A' }
    : tone === 'naranjo' ? { backgroundColor: C.naranjo, color: '#0D0C0A' }
    : tone === 'outline' ? { border: `1.5px solid ${C.crema}`, color: C.crema }
    : { backgroundColor: C.crema, color: '#0D0C0A' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-extrabold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.negro, color: C.crema }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'dark', bar: 'rgba(13,12,10,0.94)', ink: C.crema, line: C.line, btnBg: C.neon, btnInk: '#0D0C0A' }}
        ctaLabel="Pedir"
        logoSrc="/demos/delicias-zambelli/logo-neon.webp"
      />

      <main id="inicio">
        {/* HERO: el letrero de neón + la fachada al anochecer */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-0">
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 text-center">
            <Reveal>
              <figure className="mx-auto w-[220px] md:w-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/demos/delicias-zambelli/logo-neon.webp" alt="Letrero de neón de Delicias Zambelli" className="w-full h-auto" loading="eager" />
              </figure>
              <p className={`${mono.className} mt-5 text-[12px] md:text-sm uppercase tracking-[0.22em]`} style={{ color: C.naranjo }}>
                El Plumero · Rauco, Maule
              </p>
              <h1 className={`${display.className} uppercase leading-[0.92] text-[48px] sm:text-7xl lg:text-[88px] mt-3`}>
                La picada que <span className={script.className} style={{ color: C.neon, textTransform: 'none' }}>enciende</span> Rauco
              </h1>
              <p className="mt-5 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
                Churrascos, hamburguesas, chorrillanas y tablas desde la mañana hasta medianoche. Con drive-through, delivery y mesas donde hasta las mascotas son bienvenidas.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 justify-center">
                <Chip>★ {BIZ.rating} · {BIZ.reviews} reseñas</Chip>
                <Chip>Hasta medianoche</Chip>
                <Chip>Drive-through</Chip>
              </div>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
                <Btn href={WA_LINK} tone="neon">Pedir por WhatsApp</Btn>
                <Btn href="#carta" tone="outline" external={false}>Ver la carta</Btn>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="mt-12 md:mt-16">
                <Neon color={C.naranjo}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/demos/delicias-zambelli/fachada.webp" alt="Fachada de Delicias Zambelli al anochecer, con el letrero de neón encendido y las ventanas iluminadas" className="w-full aspect-[4/3] md:aspect-[16/8] object-cover rounded-[14px]" loading="eager" />
                </Neon>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  El local real en El Plumero, al atardecer
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Damero className="mt-12" />
        </section>

        {/* LA CARTA completa */}
        <section id="carta" className="scroll-mt-16" style={{ backgroundColor: C.panel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <p className={`${mono.className} text-[12px] uppercase tracking-[0.22em] text-center`} style={{ color: C.naranjo }}>
                Carta oficial publicada por el local
              </p>
              <h2 className={`${display.className} uppercase text-4xl sm:text-6xl leading-[0.92] text-center mt-3`}>
                Todo lo que hay <span style={{ color: C.neon }}>en la carta</span>
              </h2>
              <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
                Ocho familias de platos con sus precios tal como figuran en la carta publicada por Delicias Zambelli.
              </p>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {CARTA.map((c, i) => (
                <Reveal key={c.cat} delay={i * 60}>
                  <article className="rounded-2xl p-5 md:p-6 h-full border" style={{ backgroundColor: C.panel2, borderColor: C.line }}>
                    <div className="flex items-baseline gap-3">
                      <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-none`} style={{ color: C.crema }}>{c.cat}</h3>
                      <span className="flex-1 border-b border-dotted translate-y-[-5px]" style={{ borderColor: 'rgba(255,246,232,0.3)' }} aria-hidden="true" />
                      <span className={`${mono.className} text-sm md:text-base whitespace-nowrap`} style={{ color: C.naranjo }}>{c.precio}</span>
                    </div>
                    <p className="mt-2 text-[15px]" style={{ color: C.muted }}>{c.items}</p>
                    {c.firma && (
                      <p className={`${script.className} mt-3 text-base`} style={{ color: C.neon }}>{c.firma}</p>
                    )}
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <p className={`${mono.className} mt-6 text-center text-[12px] uppercase tracking-wide`} style={{ color: 'rgba(255,246,232,0.5)' }}>
                Carta completa publicada en su ficha de Google · confirma el plato del día por WhatsApp
              </p>
            </Reveal>
          </div>
          <Damero />
        </section>

        {/* LA CASA: fotos reales */}
        <section id="casa" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} uppercase text-4xl sm:text-6xl leading-[0.92] text-center`}>
              Así se ve <span className={script.className} style={{ color: C.naranjo, textTransform: 'none' }}>una noche</span> en Zambelli
            </h2>
            <p className="mt-4 text-center max-w-lg mx-auto text-base" style={{ color: C.muted }}>
              Fotos reales del local y de quienes han comido aquí.
            </p>
          </Reveal>
          <div className="mt-10 columns-2 md:columns-3 gap-3 md:gap-4 [&>div]:mb-3 md:[&>div]:mb-4">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 60} className="break-inside-avoid">
                <figure className="overflow-hidden rounded-xl border" style={{ borderColor: 'rgba(143,240,90,0.3)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/demos/delicias-zambelli/${f.src}.webp`} alt={f.alt} className={`w-full object-cover ${f.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`} loading="lazy" />
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* RESEÑAS */}
        <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <div className="text-center">
                <Stars value={4.8} color={C.naranjo} className="w-5 h-5" />
                <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.92] mt-3`}>
                  Palabra de <span style={{ color: C.neon }}>cliente</span>
                </h2>
                <p className={`${mono.className} mt-3 text-[12px] uppercase tracking-wide`} style={{ color: C.muted }}>
                  {BIZ.rating} de 5 · {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </Reveal>
            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 90}>
                  <figure className="rounded-2xl p-6 h-full border" style={{ backgroundColor: C.panel2, borderColor: C.line }}>
                    <blockquote className="text-[15px] leading-relaxed" style={{ color: C.crema }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-4 text-[12px] uppercase tracking-wide`} style={{ color: C.naranjo }}>
                      — {r.nombre} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* DÓNDE */}
        <section id="donde" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <p className={`${mono.className} text-[12px] uppercase tracking-[0.22em]`} style={{ color: C.naranjo }}>
                En camino a Rauco
              </p>
              <h2 className={`${display.className} uppercase text-4xl sm:text-5xl leading-[0.92] mt-3`}>
                El Plumero, <span style={{ color: C.neon }}>Rauco</span>
              </h2>
              <address className="not-italic mt-4 text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}, Región del Maule
              </address>
              <p className="mt-3 text-[15px]" style={{ color: C.muted }}>
                Comer ahí, pasar por la ventanilla del drive-through o pedir delivery. Se aceptan mascotas.
              </p>
              <ul className="mt-5 space-y-2">
                {HORARIO.map((h) => (
                  <li key={h.dia} className="flex items-center justify-between rounded-xl px-4 py-2.5 border" style={{ borderColor: C.line, backgroundColor: C.panel2 }}>
                    <span className={`${mono.className} text-[12px] uppercase tracking-wide`} style={{ color: C.muted }}>{h.dia}</span>
                    <span className="text-[15px] font-bold" style={{ color: C.crema }}>{h.hora}</span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} mt-4 text-[12px] uppercase tracking-wide`} style={{ color: C.naranjo }}>
                Instagram: @delicias_zambelli
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="neon">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="outline">WhatsApp {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="grid gap-4">
                <figure className="overflow-hidden rounded-2xl border" style={{ borderColor: 'rgba(255,154,60,0.4)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/demos/delicias-zambelli/fachada-dia.webp" alt="Fachada de día de Delicias Zambelli en El Plumero, Rauco, con el campanario de la iglesia al fondo" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                </figure>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] border" style={{ borderColor: 'rgba(143,240,90,0.3)' }}>
                  <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="relative" style={{ backgroundColor: C.neon }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 text-center">
            <Reveal>
              <h2 className={`${display.className} uppercase text-4xl sm:text-6xl leading-[0.92]`} style={{ color: '#0D0C0A' }}>
                ¿Se te antojó <span className={script.className} style={{ textTransform: 'none' }}>algo?</span>
              </h2>
              <p className="mt-4 text-lg font-medium" style={{ color: 'rgba(13,12,10,0.8)' }}>
                Escribe por WhatsApp, pide tu plato y pasa por la ventanilla o espera en mesa.
              </p>
              <div className="mt-7">
                <Btn href={WA_LINK} tone="negro">Pedir al {BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
          </div>
          <Damero />
        </section>
      </main>

      <footer style={{ backgroundColor: '#080706', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} uppercase text-2xl tracking-wide`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(255,246,232,0.65)' }}>
              {BIZ.category} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,246,232,0.75)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
