import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, CARTA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

// Motivo del demo: la carta de tratamientos — la página se lee como la lista de
// precios impresa que la misma pyme publica en su ficha, con línea punteada y
// precio al final. Malva y pizarra salen de sus propios flyers.

const C = {
  paper: '#F6F1EC',
  card: '#FCFAF6',
  ink: '#26232B',
  muted: '#5C5560',
  mauve: '#7E4F76',
  mauveSoft: '#E9DCE6',
  slate: '#41596A',
  line: 'rgba(38,35,43,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-de-estetica-korpus',
  title: 'Centro de estética Korpus — depilación láser y corporal en Las Rastras',
  description:
    'Centro de estética en el Centro Las Rastras, 30 Oriente 1546, Talca. Depilación láser diodo-alexandrita en packs, modelamiento corporal, flacidez y postparto. Fono 71 298 1291.',
  image: `${IMG}/flyer-depilacion.webp`,
})

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} uppercase tracking-[0.22em] text-[11px] md:text-xs font-bold`}
      style={{ color: light ? 'rgba(255,255,255,0.85)' : C.mauve }}
    >
      {children}
    </p>
  )
}

function FilaPrecio({ nombre, precio }: { nombre: string; precio: string }) {
  return (
    <li className="flex items-baseline gap-3 py-2.5">
      <span className="text-sm md:text-base font-medium" style={{ color: C.ink }}>
        {nombre}
      </span>
      <span
        className="flex-1 border-b border-dotted translate-y-[-4px]"
        style={{ borderColor: 'rgba(38,35,43,0.35)' }}
        aria-hidden="true"
      />
      <span
        className={`${mono.className} text-sm md:text-base font-bold whitespace-nowrap`}
        style={{ color: C.mauve }}
      >
        {precio}
      </span>
    </li>
  )
}

export default function Page() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Cabecera ── */}
      <header className="border-b" style={{ borderColor: C.line, fontFamily: 'var(--font-mono)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-11 flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.14em] md:tracking-[0.2em]">
          <span className="truncate" style={{ color: C.muted }}>
            {BIZ.rubro} · {BIZ.city}
          </span>
          <span className="shrink-0" style={{ color: C.mauve }}>
            {BIZ.hashtag}
          </span>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-16">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Kicker>30 Oriente 1546 · Centro Las Rastras, Talca</Kicker>
              <h1
                className="mt-4 leading-[1.05] tracking-tight text-4xl md:text-6xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                En Las Rastras, la belleza se pide{' '}
                <span style={{ color: C.mauve }}>a la carta</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
                {BIZ.name} atiende dentro del centro médico-comercial de 30 Oriente:
                depilación láser diodo-alexandrita por packs, modelamiento corporal,
                flacidez y postparto — con precios publicados y agenda de lunes a viernes.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.mauve} />
                <span className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.muted }}>
                  {BIZ.rating} en Google · {BIZ.reviews} opiniones
                </span>
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={BIZ.phoneTel}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.mauve }}
                >
                  Llamar a Korpus · {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-semibold border tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={100}>
              <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`${IMG}/edificio.webp`}
                    alt="Fachada del Centro Las Rastras en calle 30 Oriente, donde atiende Korpus"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption
                  className={`${mono.className} px-4 py-3 text-[11px] md:text-xs leading-relaxed border-t`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  El Centro Las Rastras en 30 Oriente 1546 — Korpus atiende dentro de este edificio.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.slate }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker light>precios publicados por el centro</Kicker>
            <h2
              className="mt-3 leading-tight tracking-tight text-3xl md:text-5xl max-w-3xl"
              style={{ fontFamily: 'var(--font-display)', color: '#FBF7F0' }}
            >
              La carta de Korpus, con precio al final de cada línea
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: 'rgba(251,247,240,0.75)' }}>
              Valores tal como los publica el centro en su propia ficha y material
              promocional — los packs llevan precio de oferta; al agendar se confirma el vigente.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
            {CARTA.map((g, i) => (
              <Reveal key={g.grupo} delay={i * 100}>
                <article
                  className="rounded-2xl p-6 md:p-7 h-full"
                  style={{ backgroundColor: C.card, color: C.ink }}
                >
                  <p
                    className={`${mono.className} uppercase tracking-[0.18em] text-[10px] md:text-[11px]`}
                    style={{ color: C.mauve }}
                  >
                    {g.nota}
                  </p>
                  <h3
                    className="mt-2 text-xl md:text-2xl leading-snug tracking-tight"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {g.grupo}
                  </h3>
                  <ul className="mt-4 divide-y" style={{ borderColor: C.line }}>
                    {g.items.map(([n, p]) => (
                      <FilaPrecio key={n} nombre={n} precio={p} />
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Flyers reales ── */}
      <section className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker>así se anuncia korpus</Kicker>
            <h2
              className="mt-3 leading-tight tracking-tight text-3xl md:text-5xl max-w-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Los flyers que ellos mismos publican
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: 'flyer-depilacion', alt: 'Flyer de Korpus: pack de 6 sesiones de depilación láser con precios por zona', cap: 'Depilación láser · pack 6 sesiones' },
              { src: 'flyer-modelamiento', alt: 'Flyer de Korpus: modelamiento corporal y flacidez postparto en pack de 10 sesiones', cap: 'Modelamiento corporal y postparto' },
              { src: 'flyer-bolsa-ojos', alt: 'Flyer de Korpus: tratamiento de bolsa de ojos con péptidos biomiméticos', cap: 'Bolsa de ojos · péptidos' },
              { src: 'flyer-mesolipopapada', alt: 'Flyer de Korpus: mesolipopapada para reducir la papada', cap: 'Mesolipopapada' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.card }}>
                  <div className="relative aspect-square">
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <figcaption
                    className={`${mono.className} px-3.5 py-2.5 text-[10px] md:text-[11px] leading-snug border-t`}
                    style={{ borderColor: C.line, color: C.muted }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-6 text-[11px] md:text-xs`} style={{ color: C.muted }}>
              Material promocional publicado por el centro en su ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseña ── */}
      <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.mauveSoft }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Stars value={5} color={C.mauve} className="w-5 h-5" />
            <blockquote
              className="mt-5 text-2xl md:text-4xl leading-snug tracking-tight"
              style={{ fontFamily: 'var(--font-display)', color: C.ink }}
            >
              “Me hice una limpieza facial y me encantó: lugar lindo, limpio y la
              gente muy amable”
            </blockquote>
            <p className={`${mono.className} mt-5 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.mauve }}>
              Paulina Troncoso · reseña de Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="contacto" className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <Kicker>dónde atiende</Kicker>
              <h2
                className="mt-3 leading-tight tracking-tight text-3xl md:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                En el corazón comercial de Las Rastras
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                El Centro Las Rastras concentra clínicas y oficinas del sector nororiente
                de Talca. Korpus atiende con horario de semana.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-7 space-y-4">
                {[
                  ['Dirección', `${BIZ.address} (${BIZ.addressNote}), ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Horario', 'Lunes a viernes 10:00 – 20:00 · sábado y domingo cerrado'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                    <dt
                      className={`${mono.className} w-24 shrink-0 uppercase tracking-[0.14em] text-[10px] md:text-[11px] pt-1`}
                      style={{ color: C.mauve }}
                    >
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-medium leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={BIZ.phoneTel}
                className="mt-7 inline-flex items-center justify-center h-12 px-7 rounded-full text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.mauve }}
              >
                Agendar por teléfono · {BIZ.phoneDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border h-[300px] md:h-[420px]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa — Centro de estética Korpus, 30 Oriente 1546, Talca"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-3 inline-block text-[11px] md:text-xs underline underline-offset-4 tap-44`}
              style={{ color: C.mauve }}
            >
              Abrir en Google Maps ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:justify-between">
          <p className="text-sm" style={{ fontFamily: 'var(--font-display)' }}>
            {BIZ.name}
          </p>
          <p className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.mauve} />
    </main>
  )
}
