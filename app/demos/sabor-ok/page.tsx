// app/demos/sabor-ok/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, IMG, MAPS_EMBED, MAPS_URL, WA_LINK, WA_LINK_PEDIDO } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'sabor-ok',
  title: `${BIZ.name} — Sushi de noche en ${BIZ.city}`,
  description:
    'La casa del cerro en Hualañé: sushi, handrolls, ceviche y barra, abierto de martes a lunes de 18:00 a 22:00.',
})

const serif = localFont({
  src: '../../fonts/instrument-serif/normal-400.woff2',
  variable: '--f-serif',
})
const serifIt = localFont({
  src: '../../fonts/instrument-serif/italic-400.woff2',
  variable: '--f-serifit',
})
const heebo = localFont({
  src: '../../fonts/heebo/normal-100-900.woff2',
  variable: '--f-heebo',
})
const mono = localFont({
  src: '../../fonts/ibm-plex-mono/normal-400.woff2',
  variable: '--f-mono',
})

const C = {
  night: '#0E1318',
  night2: '#121A20',
  card: '#16202A',
  ink: '#F0EAE0',
  mut: '#9FA8AE',
  amber: '#E9A03B',
  line: 'rgba(240,234,224,.14)',
} as const

const CARTA = [
  { img: `${IMG}/hero.webp`, alt: 'Handroll empanado en panko de Sabor Ok', nombre: 'Handroll panko', texto: 'El cono crujiente por fuera que abre la casa — armado al momento.' },
  { img: `${IMG}/tabla.webp`, alt: 'Tabla de rolls variados de Sabor Ok', nombre: 'Tabla de rolls', texto: 'La tabla para compartir: la mencionan 11 veces en las reseñas.' },
  { img: `${IMG}/rolls.webp`, alt: 'Rolls tempura de Sabor Ok', nombre: 'Rolls tempura', texto: 'Temporada de noche: rolls calientes, recién pasados por la freidora.' },
  { img: `${IMG}/ceviche.webp`, alt: 'Ceviche servido en copa en Sabor Ok', nombre: 'Ceviche', texto: 'El aire peruano de la carta: copa fría, pescado fresco, ají suave.' },
  { img: `${IMG}/sandwich.webp`, alt: 'Sándwich con palta y cebolla morada de Sabor Ok', nombre: 'Sándwich de la casa', texto: 'Para el que no quiere roll: palta, crocante y pan tostado.' },
]

const RESENAS = [
  {
    autor: 'Dylan',
    cuando: 'hace 9 meses',
    texto: 'Muy buenos sus sushis, han mejorado mucho desde hace 4 años; tratan muy bien y el mejor sushi del Maule.',
  },
  {
    autor: 'Agustina',
    cuando: 'hace unos años',
    texto: 'He probado sushi en distintos lugares pero lejos lo más rico es Sabor Ok; siempre voy con mi familia a disfrutar.',
  },
  {
    autor: 'Edgar',
    cuando: 'hace 4 años',
    texto: 'Muy buenos los sushis, hemos comprado varias veces con mi familia y la atención fue excelente.',
  },
]

function WaBtn({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 text-[13px] font-semibold tracking-wide uppercase"
      style={{ height: 52, background: C.amber, color: C.night }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.1 1Z" />
      </svg>
      {label}
    </a>
  )
}

export default function Page() {
  const nav = {
    name: 'sabor ok',
    waLink: WA_LINK,
    ctaLabel: 'Reservar',
    fontClass: serif.className,
    theme: { over: 'dark' as const, bar: 'rgba(14,19,24,.9)', ink: C.ink, line: C.line, btnBg: C.amber, btnInk: C.night },
    links: [
      { href: '#carta', label: 'Carta' },
      { href: '#barra', label: 'Barra' },
      { href: '#resenas', label: 'Reseñas' },
      { href: '#llegar', label: 'Cómo llegar' },
    ],
  }

  return (
    <main className={`${serif.variable} ${serifIt.variable} ${heebo.variable} ${mono.variable} antialiased`} style={{ background: C.night, color: C.ink, fontFamily: 'var(--f-heebo)' }}>
      <BlitzNav {...nav} />

      {/* HERO — la terraza de noche */}
      <header className="relative overflow-hidden" style={{ background: C.night }}>
        <div className="relative h-[80svh] min-h-[560px]">
          <Image
            src={`${IMG}/terraza.webp`}
            alt="Terraza de madera y vigas de Sabor Ok en Hualañé"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(14,19,24,.55) 0%, rgba(14,19,24,.25) 35%, rgba(14,19,24,.96) 100%)' }} />
          <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-12 sm:px-10">
            <div className="mx-auto w-full max-w-5xl">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: C.amber, fontFamily: 'var(--f-mono)' }}>
                  J-60 · Hualañé · solo de noche
                </p>
                <h1 className="mt-3 leading-[0.92]" style={{ fontFamily: 'var(--f-serif)', fontSize: 'clamp(60px, 14vw, 140px)', color: C.ink }}>
                  sabor<em style={{ fontFamily: 'var(--f-serifit)', color: C.amber }}> ok</em>
                </h1>
                <p className="mt-5 max-w-lg text-[16px] leading-relaxed" style={{ color: 'rgba(240,234,224,.85)' }}>
                  Una casa al cerro que enciende la cocina a las seis de la tarde: sushi, handrolls,
                  ceviche y una barra que el Maule ya conoce.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <WaBtn href={WA_LINK_PEDIDO} label="Reservar o pedir" />
                  <a href={MAPS_URL} target="_blank" rel="noopener" className="inline-flex items-center text-[13px] font-semibold uppercase tracking-widest underline underline-offset-8" style={{ color: C.amber }}>
                    Ver en Google Maps
                  </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-[13px]" style={{ color: 'rgba(240,234,224,.8)' }}>
                  <span style={{ color: C.amber }} aria-hidden>★★★★★</span>
                  <span className="font-semibold" style={{ fontFamily: 'var(--f-mono)' }}>{BIZ.rating}</span>
                  <span>· {BIZ.reviews} reseñas en Google</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* LA CASA */}
      <section className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.night }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.1fr] md:items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>La casa</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-serif)' }}>
              Setenta metros arriba de la carretera, se cena distinto
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.mut }}>
              Lo advierte una reseña real: desde la ruta son unos 70 metros de tierra hacia el
              cerro, y arriba espera una casa de madera con comedor y terraza. Adentro, sushi
              y cocina de noche; afuera, el aire de Hualañé.
            </p>
            <dl className="mt-7 space-y-3 text-[14px]">
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Atención</dt>
                <dd>{BIZ.horario}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Descanso</dt>
                <dd style={{ color: C.mut }}>{BIZ.horarioCerrado}</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Dirección</dt>
                <dd>{BIZ.address}, {BIZ.city}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/comedor.webp`}
                alt="Comedor interior de madera de Sabor Ok"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* CARTA — galería oscura */}
      <section id="carta" className="px-5 pb-16 sm:px-10 sm:pb-24" style={{ background: C.night }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--f-serif)' }}>
                De la cocina a la tabla
              </h2>
              <span className="hidden text-[11px] uppercase tracking-[0.25em] sm:block" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Fotos del local</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <Reveal className="sm:col-span-2">
              <article className="grid overflow-hidden rounded-2xl sm:grid-cols-2" style={{ background: C.card, border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/3] sm:aspect-auto">
                  <Image src={CARTA[0].img} alt={CARTA[0].alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <h3 className="text-2xl" style={{ fontFamily: 'var(--f-serif)' }}>{CARTA[0].nombre}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: C.mut }}>{CARTA[0].texto}</p>
                </div>
              </article>
            </Reveal>
            {CARTA.slice(1).map((p, i) => (
              <Reveal key={p.nombre} delay={i * 90}>
                <article className="overflow-hidden rounded-2xl" style={{ background: C.card, border: `1px solid ${C.line}` }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={p.img} alt={p.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-xl" style={{ fontFamily: 'var(--f-serif)' }}>{p.nombre}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.mut }}>{p.texto}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 text-[13px]" style={{ color: C.mut }}>
              La carta completa cambia según temporada y la publican en sus redes; el pedido y la reserva van por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BARRA — quiebre horizontal */}
      <section id="barra" className="relative" style={{ background: C.night2 }}>
        <div className="relative h-[58svh] min-h-[400px]">
          <Image src={`${IMG}/barra.webp`} alt="Barra de cócteles de Sabor Ok" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(14,19,24,.2), rgba(14,19,24,.88))' }} />
          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto w-full max-w-5xl px-5 pb-12 sm:px-10">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.amber, fontFamily: 'var(--f-mono)' }}>La barra</p>
                <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-serif)' }}>
                  Cócteles para hacer durar la noche
                </h2>
                <p className="mt-3 max-w-xl text-[15px]" style={{ color: 'rgba(240,234,224,.85)' }}>
                  La barra acompaña: tragos preparados en la casa que cierran la mesa después del sushi.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.night }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Lo que escriben en Google</p>
            <div className="mt-3 flex flex-wrap items-baseline gap-4">
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--f-serif)' }}>{BIZ.rating} de 5</h2>
              <span style={{ color: C.amber }} aria-hidden>★★★★★</span>
              <span className="text-[14px]" style={{ color: C.mut }}>{BIZ.reviews} reseñas publicadas</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <blockquote className="flex h-full flex-col rounded-2xl p-5" style={{ background: C.card, border: `1px solid ${C.line}` }}>
                  <span style={{ color: C.amber, fontSize: 14 }} aria-hidden>★★★★★</span>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed">“{r.texto}”</p>
                  <footer className="mt-4 text-[12px] uppercase tracking-wider" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
                    {r.autor} · {r.cuando} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="llegar" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.night2 }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.amber, fontFamily: 'var(--f-mono)' }}>Cómo llegar</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-serif)' }}>
              En la J-60, camino arriba de la carretera
            </h2>
            <dl className="mt-6 space-y-3 text-[15px]">
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Dirección</dt>
                <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Teléfono</dt>
                <dd><a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Horario</dt>
                <dd>{BIZ.horario} · {BIZ.horarioCerrado}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Dato</dt>
                <dd style={{ color: C.mut }}>Desde la carretera son unos 70 m de subida de tierra hasta la casa.</dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <WaBtn href={WA_LINK} label="Escribir por WhatsApp" />
              <a href={MAPS_URL} target="_blank" rel="noopener" className="inline-flex items-center text-[13px] font-semibold uppercase tracking-widest underline underline-offset-8" style={{ color: C.amber }}>
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="h-[340px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-10" style={{ background: C.night2, borderTop: `1px solid ${C.line}` }}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl" style={{ fontFamily: 'var(--f-serif)' }}>{BIZ.name}</p>
            <p className="mt-1 text-[13px]" style={{ color: C.mut }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <div className="flex items-center gap-5 text-[13px]" style={{ color: 'rgba(240,234,224,.85)' }}>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="underline underline-offset-4">Google Maps</a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="underline underline-offset-4">WhatsApp</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-5xl text-[12px] leading-relaxed" style={{ color: 'rgba(240,234,224,.5)' }}>
          Sitio de ejemplo preparado por <Link href="/" className="underline underline-offset-4">Sitiazo</Link> para {BIZ.name} — con sus fotos, sus reseñas y su horario de la J-60.
        </p>
      </footer>

      <WaFab href={WA_LINK} label="Escribir a Sabor Ok por WhatsApp" />
    </main>
  )
}
