import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, CARTA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

// Motivo del demo: su logo es una tarjeta negra de damasco con rúbrica
// "KellySpa" y el sello "Café Spa" — el spa como café de barrio. La página se
// lee como la carta de un café: secciones de la casa, la sobremesa (tinaja +
// café) y los dulces de la casa (sus servicios reales, sin precios porque la
// marca no los publica).

const C = {
  ink: '#171210',
  deep: '#0F0B08',
  cream: '#F3ECE1',
  card: '#FBF6EE',
  copper: '#C08A5A',
  copperDark: '#8A5A2E',
  muted: '#8D8073',
  line: 'rgba(192,138,90,0.35)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kelly-spa-las-rastras',
  title: 'Kelly Spa Las Rastras — estética integral con Café Spa y tinaja',
  description:
    'Kelly Spa Centro de Estética Integral Las Rastras, Cuatro y Media Norte A 3433, Talca. 4,6★ en 67 opiniones. Manicura, masajes, depilación, drenaje linfático y su Café Spa. WhatsApp +56 9 8834 0896.',
  image: `${IMG}/duena.webp`,
})

function Kicker({ children, light = true }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} uppercase tracking-[0.24em] text-[11px] md:text-xs font-bold`}
      style={{ color: light ? C.copper : C.copperDark }}
    >
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.deep, color: C.cream, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Hero noir ── */}
      <section style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <Kicker>{BIZ.rubro} · {BIZ.sector}, {BIZ.city}</Kicker>
                <h1
                  className="mt-4 font-semibold leading-[1.02] tracking-tight text-5xl md:text-7xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  El spa de <em style={{ color: C.copper }}>Kelly</em>,
                  <br className="hidden md:block" /> con café y tinaja
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(243,236,225,0.75)' }}>
                  En Cuatro y Media Norte, en pleno sector Las Rastras, Kelly atiende
                  su centro de estética integral: manicura, masajes, depilación y
                  drenaje linfático post-operatorio — y una cafetería propia para
                  que la espera también sea de la casa.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Stars value={BIZ.rating} className="h-4 w-4" color={C.copper} />
                  <span className={`${mono.className} text-[11px] md:text-xs`} style={{ color: 'rgba(243,236,225,0.65)' }}>
                    {BIZ.rating.toLocaleString('es-CL')} en Google · {BIZ.reviews} opiniones
                  </span>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={BIZ.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-semibold transition-transform active:scale-95 tap-44"
                    style={{ backgroundColor: C.copper, color: C.deep }}
                  >
                    Agendar por WhatsApp
                  </a>
                  <a
                    href={BIZ.phoneTel}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-medium border tap-44"
                    style={{ borderColor: C.line, color: C.cream }}
                  >
                    Llamar · {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={100}>
                <figure
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: C.line, backgroundColor: C.ink }}
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={`${IMG}/duena.webp`}
                      alt="Kelly, dueña del spa, trabajando en el recinto de Las Rastras"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} px-4 py-3 text-[11px] md:text-xs leading-relaxed border-t`}
                    style={{ borderColor: C.line, color: 'rgba(243,236,225,0.6)' }}
                  >
                    Kelly atiende personalmente — su ficha se identifica como
                    mujer empresaria. Foto: Google Maps.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section style={{ backgroundColor: C.cream, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker light={false}>los dulces de la casa</Kicker>
            <h2
              className="mt-3 font-semibold tracking-tight leading-tight text-3xl md:text-5xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              La carta del spa
            </h2>
            <p className="mt-3 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#5C5245' }}>
              Los servicios que la marca publica en su logo y en su agenda en
              línea. Los valores se coordinan al agendar — la casa trabaja a
              través de su reserva online y WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5 md:gap-6">
            {CARTA.map((mesa, i) => (
              <Reveal key={mesa.mesa} delay={i * 80}>
                <div
                  className="rounded-2xl border p-6 md:p-7 h-full"
                  style={{ borderColor: 'rgba(23,18,16,0.16)', backgroundColor: C.card }}
                >
                  <p className={`${mono.className} uppercase tracking-[0.2em] text-[11px] md:text-xs font-bold`} style={{ color: C.copperDark }}>
                    {mesa.mesa}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {mesa.platos.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 text-base md:text-lg leading-snug"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: C.copper }} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La sobremesa: tinaja + café ── */}
      <section style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-5">
              <Reveal>
                <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={`${IMG}/tinaja.webp`}
                      alt="Tinaja de agua caliente en la terraza del spa, con huincha roja en el borde"
                      fill
                      sizes="(max-width: 768px) 100vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} px-4 py-3 text-[11px] md:text-xs leading-relaxed border-t`}
                    style={{ borderColor: C.line, color: 'rgba(243,236,225,0.6)' }}
                  >
                    La tinaja de la terraza — foto del recinto publicada en su ficha.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <Kicker>la sobremesa</Kicker>
                <h2
                  className="mt-3 font-semibold tracking-tight leading-tight text-3xl md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Tinaja caliente afuera, <em style={{ color: C.copper }}>Café Spa</em> adentro
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(243,236,225,0.75)' }}>
                  En el patio hay una tinaja de agua caliente en el deck, y dentro
                  el spa corre su propia cafetería — el «Café Spa» que hasta el
                  logo declara. Entre el tratamiento y la salida, la sobremesa es
                  parte del programa.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="border-t" style={{ borderColor: 'rgba(192,138,90,0.25)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Kicker>lo que dicen en google</Kicker>
                <h2
                  className="mt-3 font-semibold tracking-tight leading-tight text-3xl md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  4,6 estrellas en {BIZ.reviews} opiniones
                </h2>
              </div>
              <Stars value={BIZ.rating} className="h-5 w-5" color={C.copper} />
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <blockquote
                  className="rounded-2xl border p-6 h-full flex flex-col"
                  style={{ borderColor: C.line, backgroundColor: 'rgba(251,246,238,0.04)' }}
                >
                  <Stars value={5} className="h-3.5 w-3.5" color={C.copper} />
                  <p className="mt-4 text-sm md:text-base leading-relaxed flex-1" style={{ color: 'rgba(243,236,225,0.85)' }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-4 text-[11px] md:text-xs`} style={{ color: C.muted }}>
                    — {r.autor} · {r.cuando} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Galería ── */}
      <section className="border-t" style={{ borderColor: 'rgba(192,138,90,0.25)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <Kicker>trabajos del spa</Kicker>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {[
                ['trabajo', 'Manicura en curso en una de las mesas del spa'],
                ['masaje', 'Cabina de masajes y camilla de tratamiento'],
                ['pestanas', 'Detalle de pestañas y párpados en trabajo de estética'],
                ['unas', 'Uñas terminadas con esmaltado del spa'],
                ['manicura', 'Estación de manicura con instrumentos y esmaltes'],
                ['wella', 'Mural de Wella Professionals en la peluquería del spa'],
              ].map(([f, alt]) => (
                <figure key={f} className="rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <div className="relative aspect-square">
                    <Image src={`${IMG}/${f}.webp`} alt={alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  </div>
                </figure>
              ))}
            </div>
            <p className={`${mono.className} mt-4 text-[11px] md:text-xs`} style={{ color: C.muted }}>
              Fotos publicadas por el recinto en su ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="border-t" style={{ backgroundColor: C.cream, color: C.ink, borderColor: 'rgba(23,18,16,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <Kicker light={false}>la mesa está servida</Kicker>
              <h2
                className="mt-3 font-semibold tracking-tight leading-tight text-3xl md:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Agenda tu hora en Cuatro y Media Norte
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: '#5C5245' }}>
                {BIZ.legalName}, en el sector {BIZ.sector} de {BIZ.city}. La
                reserva en línea corre por AgendaPro; lo más rápido es escribir
                directo al WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-7 space-y-4">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.sector}, ${BIZ.city}`],
                  ['WhatsApp', BIZ.phoneDisplay],
                  ['Instagram', BIZ.ig],
                  ['Sede centro', `${BIZ.sedeCentro}, ${BIZ.city}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b pb-3" style={{ borderColor: 'rgba(23,18,16,0.14)' }}>
                    <dt
                      className={`${mono.className} w-28 shrink-0 uppercase tracking-[0.14em] text-[10px] md:text-[11px] pt-1`}
                      style={{ color: C.copperDark }}
                    >
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-medium leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-5 rounded-xl border p-4" style={{ borderColor: 'rgba(23,18,16,0.14)', backgroundColor: C.card }}>
                <p className={`${mono.className} uppercase tracking-[0.18em] text-[10px] md:text-[11px] font-bold`} style={{ color: C.copperDark }}>
                  Horario
                </p>
                <ul className="mt-2 space-y-1.5">
                  {BIZ.hours.map(([d, h]) => (
                    <li key={d} className="flex justify-between gap-3 text-sm md:text-base">
                      <span style={{ color: '#5C5245' }}>{d}</span>
                      <span className="font-semibold">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={BIZ.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center h-12 px-7 rounded-full text-sm md:text-base font-semibold transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.ink, color: C.cream }}
              >
                Escribir por WhatsApp · {BIZ.phoneDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border h-[300px] md:h-[420px]" style={{ borderColor: 'rgba(23,18,16,0.16)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa — ${BIZ.legalName}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-3 inline-block text-[11px] md:text-xs underline underline-offset-4 tap-44`}
              style={{ color: C.copperDark }}
            >
              Abrir en Google Maps ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: 'rgba(192,138,90,0.25)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:justify-between">
          <p className="text-sm font-semibold" style={{ fontFamily: 'var(--font-display)', color: C.copper }}>
            {BIZ.name} · Café Spa · {BIZ.sector}
          </p>
          <p className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={BIZ.wa} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
