// app/demos/gussland/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, HORARIO, IMG, MAPS_EMBED, MAPS_URL, WA_LINK, WA_LINK_MESA } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'gussland',
  title: `${BIZ.name} — Restaurante y terraza en ${BIZ.city}`,
  description:
    'La terraza de la Av. Lautaro en Licantén: rolls, burgers, papas y la sangría que nombran las reseñas. 4,5 estrellas con 308 reseñas.',
})

const display = localFont({
  src: '../../fonts/archivo-black/normal-400.woff2',
  variable: '--f-display',
})
const work = localFont({
  src: '../../fonts/work-sans/normal-100-900.woff2',
  variable: '--f-work',
})
const mono = localFont({
  src: '../../fonts/roboto-mono/normal-100-700.woff2',
  variable: '--f-mono',
})

const C = {
  papel: '#F5EDE0',
  card: '#EFE4D2',
  terra: '#B9552F',
  terraDeep: '#8F3B1F',
  choco: '#241307',
  tinta: '#2A1A10',
  mut: '#7A5C48',
  line: '#DCC9AF',
} as const

/**
 * Wordmark real del local: "GUSS LAND" en versales dentro de corchetes
 * de esquina (se ve en el vaso y la fachada).
 */
function GussMark({ color, size = 'md' }: { color: string; size?: 'sm' | 'md' | 'lg' }) {
  const s = { sm: '16px', md: 'clamp(30px,7vw,54px)', lg: 'clamp(44px,10vw,96px)' }[size]
  const w = { sm: 2.5, md: 4, lg: 6 }[size]
  const pad = { sm: '6px 10px', md: '14px 22px', lg: '20px 34px' }[size]
  const corner = { sm: 7, md: 12, lg: 18 }[size]
  const b = { position: 'absolute' as const, width: corner, height: corner, borderColor: color }
  return (
    <span className="relative inline-flex items-center" style={{ padding: pad }}>
      <span style={{ ...b, top: 0, left: 0, borderTop: `${w}px solid`, borderLeft: `${w}px solid` }} aria-hidden />
      <span style={{ ...b, top: 0, right: 0, borderTop: `${w}px solid`, borderRight: `${w}px solid` }} aria-hidden />
      <span style={{ ...b, bottom: 0, left: 0, borderBottom: `${w}px solid`, borderLeft: `${w}px solid` }} aria-hidden />
      <span style={{ ...b, bottom: 0, right: 0, borderBottom: `${w}px solid`, borderRight: `${w}px solid` }} aria-hidden />
      <span style={{ fontFamily: 'var(--f-display)', fontSize: s, lineHeight: 1, letterSpacing: '0.04em', color }}>
        GUSS&nbsp;LAND
      </span>
    </span>
  )
}

const MESA = [
  { img: `${IMG}/mesa.webp`, alt: 'Mesa de Gussland con sangría, rolls y hamburguesa', nombre: 'Todo en la misma mesa', texto: 'Rolls, hamburguesa y la copa de sangría compartiendo la misma tabla.' },
  { img: `${IMG}/burger.webp`, alt: 'Hamburguesa con papas fritas en Gussland', nombre: 'La burger', texto: 'Pan dorado, carne al punto y las fritas que acompañan todo.' },
  { img: `${IMG}/rolls.webp`, alt: 'Rolls de sushi de Gussland', nombre: 'Los rolls', texto: 'Sushi en 15 reseñas: la mitad japonesa de la casa en plena Av. Lautaro.' },
  { img: `${IMG}/papas.webp`, alt: 'Papas fritas con topping en Gussland', nombre: 'Papas de la casa', texto: 'Las fritas con topping que salen de la cocina a la terraza.' },
]

const RESENAS = [
  {
    autor: 'Rommy Gonzalez',
    cuando: 'hace 3 años',
    texto: 'Excelente lugar, el mejor de la localidad: buena comida, buenos tragos y muy buen servicio. Ambiente familiar pero elegante, ideal para celebraciones, citas o escapadas.',
  },
  {
    autor: 'Carla Esperanza',
    cuando: 'hace un año',
    texto: 'Todo muy rico, la sangría espectacular… Recomendado.',
  },
]

function WaBtn({ href, label, inverse }: { href: string; label: string; inverse?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 text-[13px] font-bold tracking-wide uppercase"
      style={{ height: 52, background: inverse ? C.papel : C.terra, color: inverse ? C.terraDeep : C.papel }}
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
    name: <GussMark color="inherit" size="sm" />,
    waLink: WA_LINK,
    ctaLabel: 'Reservar',
    theme: { over: 'dark' as const, bar: 'rgba(36,19,7,.92)', ink: C.papel, line: 'rgba(245,237,224,.18)', btnBg: C.terra, btnInk: C.papel },
    links: [
      { href: '#mesa', label: 'La mesa' },
      { href: '#sangria', label: 'Sangría' },
      { href: '#horario', label: 'Horario' },
      { href: '#ubicacion', label: 'Ubicación' },
    ],
  }

  return (
    <main className={`${display.variable} ${work.variable} ${mono.variable} antialiased`} style={{ background: C.papel, color: C.tinta, fontFamily: 'var(--f-work)' }}>
      <BlitzNav {...nav} />

      {/* HERO — fachada terracota + wordmark de corchetes */}
      <header className="relative overflow-hidden" style={{ background: C.choco }}>
        <div className="relative h-[80svh] min-h-[560px]">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Fachada terracota de Gussland con su terraza sobre la Av. Lautaro en Licantén"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(36,19,7,.5) 0%, rgba(36,19,7,.2) 40%, rgba(36,19,7,.94) 100%)' }} />
          <div className="relative z-10 flex h-full flex-col items-start justify-end px-5 pb-12 sm:px-10">
            <div className="mx-auto w-full max-w-5xl">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.34em]" style={{ color: '#F2C14E', fontFamily: 'var(--f-mono)' }}>
                  Restaurante y terraza · Licantén
                </p>
                <div className="mt-5"><GussMark color={C.papel} size="lg" /></div>
                <p className="mt-5 max-w-xl text-[16px] leading-relaxed" style={{ color: 'rgba(245,237,224,.88)' }}>
                  En la Av. Lautaro: la terraza terracota donde caben los rolls, la burger y la
                  sangría en la misma mesa — “el mejor de la localidad”, según sus clientes.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <WaBtn href={WA_LINK_MESA} label="Reservar mesa" />
                  <a href={MAPS_URL} target="_blank" rel="noopener" className="inline-flex items-center text-[13px] font-semibold uppercase tracking-widest underline underline-offset-8" style={{ color: '#F2C14E' }}>
                    Ver en Google Maps
                  </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-[13px]" style={{ color: 'rgba(245,237,224,.85)' }}>
                  <span style={{ color: '#F2C14E' }} aria-hidden>★★★★★</span>
                  <span className="font-semibold" style={{ fontFamily: 'var(--f-mono)' }}>{BIZ.rating}</span>
                  <span>· {BIZ.reviews} reseñas en Google</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* SELLO — datos duros */}
      <section className="px-5 py-8" style={{ background: C.terra, color: C.papel }}>
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-8 gap-y-3">
          {[
            [`${BIZ.rating} ★`, `${BIZ.reviews} reseñas reales`],
            ['222', 'reseñas de 5 estrellas'],
            ['Terraza', 'nombrada en 6 opiniones'],
            ['Av. Lautaro 414', 'pleno centro de Licantén'],
          ].map(([big, small]) => (
            <Reveal key={small}>
              <div className="flex flex-col">
                <span className="text-2xl sm:text-3xl" style={{ fontFamily: 'var(--f-display)' }}>{big}</span>
                <span className="text-[12px] uppercase tracking-widest" style={{ color: 'rgba(245,237,224,.85)', fontFamily: 'var(--f-mono)' }}>{small}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LA MESA — grilla de platos */}
      <section id="mesa" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.papel }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>La mesa</p>
            <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-display)' }}>
              Sushi y burger, mismas ganas
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed" style={{ color: C.mut }}>
              La carta de Gussland no elige bando: la misma mesa junta rolls, hamburguesa,
              papas de la casa y la copa de sangría que cierra la noche.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {MESA.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 90}>
                <article className="overflow-hidden rounded-2xl" style={{ background: C.card, border: `1px solid ${C.line}` }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={p.img} alt={p.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-lg uppercase tracking-wide" style={{ fontFamily: 'var(--f-display)' }}>{p.nombre}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.mut }}>{p.texto}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SANGRÍA — el sello de la casa */}
      <section id="sangria" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.choco, color: C.papel }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl">
              <Image src={`${IMG}/sangria.webp`} alt="Copa de sangría de la casa en Gussland" width={900} height={1100} className="h-auto w-full object-cover" />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: '#F2C14E', fontFamily: 'var(--f-mono)' }}>El sello de la casa</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-display)' }}>
              La sangría que nombran por nombre
            </h2>
            <blockquote className="mt-6 border-l-4 pl-5" style={{ borderColor: C.terra }}>
              <p className="text-lg leading-relaxed italic" style={{ color: 'rgba(245,237,224,.92)' }}>
                “Todo muy rico, la sangría espectacular… Recomendado.”
              </p>
              <footer className="mt-3 text-[12px] uppercase tracking-widest" style={{ color: 'rgba(245,237,224,.6)', fontFamily: 'var(--f-mono)' }}>
                Carla Esperanza · reseña de Google
              </footer>
            </blockquote>
            <p className="mt-5 text-[15px] leading-relaxed" style={{ color: 'rgba(245,237,224,.75)' }}>
              Hasta el vaso lleva la marca: los corchetes del “GUSS LAND” que se ven en la fachada.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HORARIO REAL */}
      <section id="horario" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.papel }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Cuándo</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-display)' }}>
              Dos turnos, dos colaciones
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.mut }}>
              De martes a viernes abre a media mañana para el almuerzo y vuelve a abrir para la
              noche; el sábado es solo tarde. Domingo y lunes, la terraza descansa.
            </p>
            <div className="mt-7">
              <WaBtn href={WA_LINK} label="Confirmar por WhatsApp" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}`, background: C.card }}>
              <table className="w-full text-[15px]">
                <tbody>
                  {HORARIO.map((h) => (
                    <tr key={h.dia} style={{ borderBottom: `1px solid ${C.line}` }}>
                      <td className="px-5 py-3 font-semibold">{h.dia}</td>
                      <td className="px-5 py-3 text-right" style={{ color: h.horas === 'Cerrado' ? C.mut : C.tinta, fontFamily: 'var(--f-mono)', fontSize: 13 }}>{h.horas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.card }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>Lo que escriben en Google</p>
            <div className="mt-3 flex flex-wrap items-baseline gap-4">
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--f-display)' }}>{BIZ.rating} de 5</h2>
              <span style={{ color: C.terra }} aria-hidden>★★★★★</span>
              <span className="text-[14px]" style={{ color: C.mut }}>{BIZ.reviews} reseñas publicadas</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <blockquote className="flex h-full flex-col rounded-2xl p-6" style={{ background: C.papel, border: `1px solid ${C.line}` }}>
                  <span style={{ color: C.terra, fontSize: 14 }} aria-hidden>★★★★★</span>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed">“{r.texto}”</p>
                  <footer className="mt-4 text-[12px] uppercase tracking-wider" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
                    {r.autor} · {r.cuando} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <figure className="overflow-hidden rounded-2xl md:col-span-2">
                <Image src={`${IMG}/vaso.webp`} alt="Vaso de vidrio con el logo GUSS LAND de Gussland" width={900} height={620} className="h-auto w-full object-cover" />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.terraDeep, color: C.papel }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: '#F2C14E', fontFamily: 'var(--f-mono)' }}>Cómo llegar</p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-display)' }}>
              Av. Lautaro 414, frente al paso por Licantén
            </h2>
            <dl className="mt-6 space-y-3 text-[15px]">
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: 'rgba(245,237,224,.65)', fontFamily: 'var(--f-mono)' }}>Dirección</dt>
                <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-24 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: 'rgba(245,237,224,.65)', fontFamily: 'var(--f-mono)' }}>Teléfono</dt>
                <dd><a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <WaBtn href={WA_LINK} label="Escribir por WhatsApp" inverse />
              <a href={MAPS_URL} target="_blank" rel="noopener" className="inline-flex items-center text-[13px] font-semibold uppercase tracking-widest underline underline-offset-8" style={{ color: '#F2C14E' }}>
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(245,237,224,.25)' }}>
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
      <footer className="px-5 py-10" style={{ background: C.choco, borderTop: '1px solid rgba(245,237,224,.15)' }}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <GussMark color={C.papel} size="sm" />
            <p className="mt-3 text-[13px]" style={{ color: 'rgba(245,237,224,.7)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <div className="flex items-center gap-5 text-[13px]" style={{ color: 'rgba(245,237,224,.8)' }}>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="underline underline-offset-4">Google Maps</a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="underline underline-offset-4">WhatsApp</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-5xl text-[12px] leading-relaxed" style={{ color: 'rgba(245,237,224,.55)' }}>
          Sitio de ejemplo preparado por <Link href="/" className="underline underline-offset-4">Sitiazo</Link> para {BIZ.name} — con sus fotos, sus reseñas y su marca de corchetes.
        </p>
      </footer>

      <WaFab href={WA_LINK} label="Escribir a Gussland por WhatsApp" />
    </main>
  )
}
