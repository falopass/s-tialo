import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, HORARIO, SERVICIOS, LETRERO, COMBO, RESENAS, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }, { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' }],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «la jornada del domingo». La ficha de Google publica un
 * solo horario — domingo 13:00 a 16:00 — y la página se construye como esa
 * jornada: pebre, cocina de la señora, música y sobremesa. Paleta tomada de
 * su logo (toldo rojo + guitarra blanca) y de su salón (mantel morado,
 * vigas de madera, guirnaldas tricolores).
 */
const C = {
  crema: '#F6EEDC',
  papel: '#FBF7EC',
  tinta: '#241711',
  morado: '#56346E',
  moradoDeep: '#331C46',
  toldo: '#B0231A',
  azul: '#1F4E79',
  oro: '#D9A43B',
  muted: 'rgba(36,23,17,0.74)',
  mutedCream: 'rgba(246,238,220,0.78)',
  line: 'rgba(36,23,17,0.18)',
  lineCream: 'rgba(246,238,220,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-el-encuentro',
  title: 'Restaurant El Encuentro — la mesa que junta a Pencahue',
  description: 'Restaurant El Encuentro (ex La Tortolita) en Pencahue, Maule. Comidas típicas, cazuela de vacuno y música en vivo. Domingos 13:00–16:00.',
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'La jornada', href: '#jornada' },
  { label: 'El letrero', href: '#letrero' },
  { label: 'La visita', href: '#visita' },
]

/** Guirnalda tricolor como las que cuelgan del techo del salón. */
function Guirnalda({ flip = false }: { flip?: boolean }) {
  const flags = [C.toldo, C.crema, C.azul]
  return (
    <div aria-hidden="true" className="overflow-hidden" style={{ transform: flip ? 'scaleY(-1)' : undefined }}>
      <svg viewBox="0 0 390 26" preserveAspectRatio="none" className="block w-full h-[22px]">
        {Array.from({ length: 13 }, (_, i) => (
          <polygon
            key={i}
            points={`${i * 30},0 ${i * 30 + 30},0 ${i * 30 + 15},22`}
            fill={flags[i % 3]}
            opacity={i % 3 === 1 ? 0.95 : 1}
          />
        ))}
      </svg>
    </div>
  )
}

function Raya({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? C.mutedCream : C.toldo }}
    >
      <span aria-hidden="true" className="inline-block w-8 h-[2px]" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

const JORNADA = [
  {
    hora: '13:30',
    titulo: 'El pebre abre la mesa',
    texto: 'Primero llegan los pocillos de pebre y el pan. Nadie almuerza apurado aquí: el pebre es la ceremonia de entrada.',
    img: 'pebre.webp',
    alt: 'Pocillos de pebre recién preparado sobre la mesa del restaurant',
  },
  {
    hora: '14:00',
    titulo: 'Sale la cocina de la señora',
    texto: 'La dueña cocina todo lo que se sirve: cazuela de vacuno, empanadas de horno, humitas y pan amasado, como en las fotos de su ficha.',
    img: 'cazuela.webp',
    alt: 'Cazuela de vacuno con choclo, papa y zanahoria servida en greda, con empanadas de horno',
  },
  {
    hora: '15:00',
    titulo: 'Entran la guitarra y el bombo',
    texto: 'Cuando hay celebración, los músicos tocan al lado de las mesas. En su ficha de Google, “música” es de lo más nombrado.',
    img: 'musicos.webp',
    alt: 'Músicos tocando guitarra, cuatro y bombo en el salón del restaurant',
  },
  {
    hora: '16:00',
    titulo: 'La sobremesa no se apura',
    texto: 'Cierra la cocina, no la conversación. Así pasan las tardes las mesas que celebran cumpleaños y reuniones de familia.',
    img: 'clientes.webp',
    alt: 'Comensales compartiendo y celebrando alrededor de una mesa de mantel morado',
  },
] as const

export default function Page() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`} style={{ backgroundColor: C.crema, color: C.tinta, fontFamily: 'var(--f-body), sans-serif' }}>
      <BlitzNav
        name={<span style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>El Encuentro</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: C.crema, ink: C.tinta, line: C.line, btnBg: C.toldo, btnInk: '#FFF4E4' }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col">
        <div className="absolute inset-0">
          <Image src={`${IMG}/salon.webp`} alt="Salón de Restaurant El Encuentro con mantel morado y guirnaldas tricolores" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(20,10,8,0.42) 0%, rgba(20,10,8,0.18) 40%, rgba(20,10,8,0.78) 100%)' }} />
        </div>
        <div className="relative flex-1 flex flex-col justify-end px-5 md:px-10 pb-8 pt-28 max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img src={`${IMG}/logo.webp`} alt="Logo de Restaurant El Encuentro: guitarra blanca sobre fondo rojo" className="h-12 w-12 rounded-full object-cover border-2" style={{ borderColor: C.crema }} />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.crema }}>
                {BIZ.city} · {BIZ.region} · {BIZ.exName}
              </p>
            </div>
            <h1
              className="text-[13.5vw] sm:text-6xl md:text-7xl leading-[0.95] max-w-[12ch]"
              style={{ fontFamily: 'var(--f-display), serif', fontWeight: 900, color: '#FDF8EC' }}
            >
              La mesa que junta a <em style={{ color: C.oro, fontStyle: 'italic' }}>Pencahue</em>
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'rgba(253,248,236,0.92)' }}>
              Comidas típicas, cazuela de vacuno y música en vivo. La señora cocina todo lo que se sirve.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: '#FDF8EC' }}>
                <Stars value={BIZ.rating} color={C.oro} className="w-4 h-4" />
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas
              </span>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border`} style={{ color: 'rgba(253,248,236,0.9)', borderColor: 'rgba(253,248,236,0.4)' }}>
                {BIZ.precio}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold"
                style={{ backgroundColor: C.toldo, color: '#FFF4E4' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#jornada"
                className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2"
                style={{ borderColor: 'rgba(253,248,236,0.55)', color: '#FDF8EC' }}
              >
                Cómo es un domingo
              </a>
            </div>
          </Reveal>
        </div>
        <Guirnalda />
      </section>

      {/* ── LA JORNADA ───────────────────────────────────── */}
      <section id="jornada" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya>Domingo en El Encuentro</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.02] max-w-[16ch]" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>
              Su ficha publica un solo horario: este lo cuenta completo
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              {HORARIO.publicado}. Tres horas que en este salón duran una tarde entera.
            </p>
            <p className={`${mono.className} mt-6 text-[12px] tracking-[0.22em] uppercase`} style={{ color: C.toldo }}>
              13:00 · El salón abre con las mesas listas
            </p>
          </Reveal>

          <div className="mt-8 relative">
            <span aria-hidden="true" className="absolute left-[7px] top-2 bottom-2 w-[2px] md:hidden" style={{ backgroundColor: C.line }} />
            {JORNADA.map((hito, i) => (
              <Reveal key={hito.hora} delay={i * 60} className="relative">
                <div className={`grid md:grid-cols-2 gap-5 md:gap-12 items-center py-6 md:py-10 ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg" style={{ boxShadow: '0 18px 44px -20px rgba(36,23,17,0.45)' }}>
                    <Image src={`${IMG}/${hito.img}`} alt={hito.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    <span
                      className={`${mono.className} absolute left-3 top-3 px-2.5 py-1 rounded-md text-[13px] font-bold tracking-[0.12em]`}
                      style={{ backgroundColor: C.toldo, color: '#FFF4E4' }}
                    >
                      {hito.hora}
                    </span>
                  </div>
                  <div className="pl-7 md:pl-0 relative">
                    <span aria-hidden="true" className="md:hidden absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-[3px]" style={{ backgroundColor: C.crema, borderColor: C.toldo }} />
                    <p className={`${mono.className} text-[12px] tracking-[0.22em]`} style={{ color: C.toldo }}>{hito.hora} HRS</p>
                    <h3 className="mt-2 text-2xl md:text-3xl leading-tight" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>{hito.titulo}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>{hito.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA MESA SERVIDA ──────────────────────────────── */}
      <section className="relative">
        <div className="relative h-[62vw] max-h-[420px] min-h-[240px]">
          <Image src={`${IMG}/mesa.webp`} alt="Mesa servida en El Encuentro: empanadas, humitas, pan amasado y jugo natural" fill sizes="100vw" className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(51,28,70,0) 55%, rgba(51,28,70,0.92) 100%)' }} />
          <div className="absolute inset-x-5 md:inset-x-10 bottom-5 max-w-6xl mx-auto">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: 'rgba(246,238,220,0.85)' }}>
              Así llega la mesa
            </p>
            <p className="mt-1 text-2xl md:text-3xl" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800, color: '#FDF8EC' }}>
              Empanadas, humitas, pan amasado y jarra de jugo
            </p>
          </div>
        </div>
      </section>

      {/* ── EL LETRERO ───────────────────────────────────── */}
      <section id="letrero" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.moradoDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya light>El letrero de afuera</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.02] max-w-[18ch]" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>
              Comidas y colaciones, tal como lo pinta la fachada
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: C.lineCream }}>
                {LETRERO.map((item) => (
                  <li
                    key={item}
                    className="px-4 py-5 text-center text-[15px] font-bold"
                    style={{ backgroundColor: C.moradoDeep, fontFamily: 'var(--f-display), serif' }}
                  >
                    {item}
                  </li>
                ))}
                <li className="px-4 py-5 text-center text-[13px] italic flex items-center justify-center" style={{ backgroundColor: C.moradoDeep, color: C.mutedCream }}>
                  …y la cazuela de vacuno destacada por los clientes
                </li>
              </ul>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-2xl p-6 h-full flex flex-col justify-between" style={{ backgroundColor: C.crema, color: C.tinta }}>
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.toldo }}>Para llevar rápido</p>
                  <p className="mt-2 text-2xl leading-tight" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>{COMBO.name}</p>
                  <p className="mt-1 text-[15px]" style={{ color: C.muted }}>{COMBO.desc}</p>
                </div>
                <p className="mt-5 text-4xl" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 900, color: C.toldo }}>{COMBO.price}</p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {SERVICIOS.map((s) => (
                <span key={s} className={`${mono.className} text-[11px] uppercase tracking-[0.16em] px-3 py-2 rounded-full border`} style={{ borderColor: C.lineCream, color: C.mutedCream }}>
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ──────────────────────────────────────── */}
      <section className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya>Palabra de comensal</Raya>
            <div className="mt-3 flex flex-wrap items-end justify-between gap-3">
              <h2 className="text-4xl md:text-5xl leading-[1.02] max-w-[16ch]" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>
                “La señora cocina todo lo que se sirve”
              </h2>
              <p className="flex items-center gap-2 text-sm font-bold" style={{ color: C.tinta }}>
                <Stars value={BIZ.rating} color={C.toldo} className="w-4 h-4" />
                {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <blockquote className="mt-8 rounded-2xl p-6 md:p-8" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}>
              <p className="text-xl md:text-2xl leading-snug" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 600 }}>
                “{RESENAS[0].text}”
              </p>
              <footer className={`${mono.className} mt-4 text-[12px] uppercase tracking-[0.18em]`} style={{ color: C.toldo }}>
                {RESENAS[0].author} · reseña en {RESENAS[0].via}
              </footer>
            </blockquote>
          </Reveal>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {RESENAS.slice(1).map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <blockquote className="h-full rounded-2xl p-5" style={{ backgroundColor: C.papel, border: `1px solid ${C.line}` }}>
                  <p className="text-[15px] leading-relaxed" style={{ color: C.tinta }}>“{r.text}”</p>
                  <footer className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {r.author} · {r.via}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Guirnalda flip />

      {/* ── LA VISITA ────────────────────────────────────── */}
      <section id="visita" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.moradoDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          <Reveal>
            <Raya light>La visita</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.02]" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>
              Domingos al mediodía, celebraciones a pedido
            </h2>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.mutedCream }}>Horario publicado</dt>
                <dd className="mt-1 text-2xl" style={{ fontFamily: 'var(--f-display), serif', fontWeight: 800 }}>{HORARIO.publicado}</dd>
                <dd className="mt-2 text-[15px] leading-relaxed max-w-sm" style={{ color: C.mutedCream }}>{HORARIO.nota}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.mutedCream }}>Para celebraciones</dt>
                <dd className="mt-1 text-[15px] leading-relaxed max-w-sm" style={{ color: C.mutedCream }}>
                  Cumpleaños, aniversarios y almuerzos de grupo: el salón se arregla para la ocasión. Se coordina directo por WhatsApp.
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_LINK_RESERVA} className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold" style={{ backgroundColor: C.oro, color: C.moradoDeep }}>
                Consultar por evento
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2" style={{ borderColor: C.lineCream, color: C.crema }}>
                Facebook
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden h-full min-h-[300px] flex flex-col" style={{ backgroundColor: C.crema }}>
              <div className="flex-1 min-h-[280px]">
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="block w-full h-full min-h-[280px]" />
              </div>
              <div className="px-5 py-4" style={{ color: C.tinta }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.toldo }}>Cómo llegar</p>
                <p className="mt-1 text-[15px] font-bold">{BIZ.address}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} mt-1 inline-block text-[12px] underline underline-offset-4`} style={{ color: C.muted }}>
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="px-5 md:px-10 pt-8 pb-24 md:pb-10" style={{ backgroundColor: C.moradoDeep, borderTop: `1px solid ${C.lineCream}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="h-9 w-9 rounded-full object-cover" />
            <div>
              <p className="text-[15px] font-bold" style={{ color: C.crema, fontFamily: 'var(--f-display), serif' }}>{BIZ.name}</p>
              <p className={`${mono.className} text-[11px]`} style={{ color: C.mutedCream }}>{BIZ.address} · {BIZ.exName}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-[13px]`} style={{ color: C.crema }}>{BIZ.phoneDisplay}</a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[13px] underline underline-offset-4`} style={{ color: C.mutedCream }}>Facebook</a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Reservar por WhatsApp" />
    </main>
  )
}
