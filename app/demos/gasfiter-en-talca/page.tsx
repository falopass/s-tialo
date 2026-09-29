import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, IMG, ALARMAS, PASOS, FICHA } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' }],
})

// Paleta desde su única foto real: el azul del piloto encendido y el
// cobre oxidado del serpentín del calefont, sobre fondo de medianoche.
const C = {
  ink: '#04090F',
  panel: '#0A141F',
  panel2: '#0E1B2A',
  flame: '#4C9BFF',
  flameSoft: '#9CC5FF',
  cobre: '#CD8148',
  bone: '#EDF3F8',
  muted: '#8CA3B4',
  line: 'rgba(140,163,180,0.18)',
}

/** Punto LED de estado — parpadea salvo con prefers-reduced-motion. */
function Led({ color = C.flame, className = '' }: { color?: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block w-2 h-2 rounded-full animate-pulse motion-reduce:animate-none ${className}`}
      style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}` }}
    />
  )
}

/** Esquema técnico de calefont — bosquejo marcado, no es foto real. */
function CalefontSketch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 260" className={className} role="img" aria-label="Bosquejo ilustrado de un calefont">
      <rect x="30" y="18" width="140" height="224" rx="10" fill="none" stroke={C.muted} strokeWidth="2" strokeDasharray="6 5" />
      <rect x="48" y="38" width="104" height="56" rx="6" fill="none" stroke={C.cobre} strokeWidth="2" />
      {[62, 84, 106, 128].map((x) => (
        <path key={x} d={`M${x} 44 v40`} stroke={C.cobre} strokeWidth="2" />
      ))}
      {[70, 100, 130].map((x) => (
        <path
          key={x}
          d={`M${x} 168 c-9 -14 -4 -26 0 -32 c4 6 9 18 0 32 z`}
          fill={C.flame}
          opacity="0.9"
        />
      ))}
      <rect x="58" y="176" width="84" height="8" rx="4" fill={C.muted} />
      <path d="M100 18 v-8 M92 6 h16" stroke={C.muted} strokeWidth="2" />
      <path d="M170 120 h14 M184 120 v60" stroke={C.muted} strokeWidth="2" strokeDasharray="4 4" />
      <text x="100" y="228" textAnchor="middle" fill={C.muted} fontSize="10" fontFamily="monospace" letterSpacing="2">
        PILOTO OK
      </text>
    </svg>
  )
}

export const metadata = demoMetadata({
  slug: 'gasfiter-en-talca',
  title: 'Gasfiter en Talca — fontanero 24 horas, Calle 24 Poniente',
  description:
    'Gasfitería a domicilio en Talca, abierto las 24 horas. Urgencias de gas, calefont y cañerías: llama o escribe al +56 9 7722 6112.',
  image: `${IMG}/calefont.webp`,
})

export default function GasfiterTalcaDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.ink, color: C.bone }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <Led />
            <span className={`${display.className} uppercase text-sm tracking-wide`}>Gasfiter·Talca</span>
          </span>
        }
        links={[
          { label: 'Urgencias', href: '#urgencias' },
          { label: 'Cómo funciona', href: '#como' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.ink,
          ink: C.bone,
          line: 'rgba(255,255,255,0.10)',
          btnBg: C.flame,
          btnInk: C.ink,
        }}
        ctaLabel="Escribir"
      />

      {/* ── Hero: el piloto encendido a toda pantalla ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/calefont.webp`}
          alt="Interior de un calefont con los quemadores encendidos en llama azul — foto de la ficha de Google de Gasfiter en Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(4,9,15,0.62) 0%, rgba(4,9,15,0.28) 42%, rgba(4,9,15,0.94) 86%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-8 md:pb-12">
          <Reveal>
            <p
              className={`${mono.className} inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.22em] border px-3 py-1.5 rounded-full`}
              style={{ borderColor: 'rgba(76,155,255,0.45)', color: C.flameSoft, backgroundColor: 'rgba(4,9,15,0.55)' }}
            >
              <Led /> En línea · abierto 24 h
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.95] mt-4`}
              style={{ fontSize: 'clamp(2.6rem, 11.5vw, 6.8rem)', color: C.bone }}
            >
              A las tres<br />de la mañana<br />
              <span style={{ color: C.flame }}>también contesta</span>
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-xl" style={{ color: 'rgba(237,243,248,0.88)' }}>
              Fontanero a domicilio en Talca. Fuga de gas, calefont apagado o
              cañería reventada: se coordina por llamada o WhatsApp.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 transition-transform active:scale-95"
                style={{ backgroundColor: C.flame, color: C.ink }}
              >
                Llamar ahora
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-semibold text-base px-6 py-3 border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(237,243,248,0.45)', color: C.bone, backgroundColor: 'rgba(4,9,15,0.45)' }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="mt-8">
            <div className="border-t pt-4 grid grid-cols-3 gap-3" style={{ borderColor: 'rgba(237,243,248,0.22)' }}>
              {[
                ['Nota Google', `${BIZ.rating} ★`],
                ['Base', 'Calle 24 Pte. 853'],
                ['Horario', '24 horas'],
              ].map(([k, v]) => (
                <div key={k}>
                  <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.flameSoft }}>
                    {k}
                  </p>
                  <p className={`${mono.className} text-xs md:text-sm mt-1`} style={{ color: C.bone }}>
                    {v}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de servicio ── */}
      <div
        aria-hidden="true"
        className={`${mono.className} overflow-hidden whitespace-nowrap border-y py-2.5 text-[11px] uppercase tracking-[0.3em]`}
        style={{ borderColor: C.line, color: C.cobre, backgroundColor: C.panel }}
      >
        {['urgente', 'calefont', 'fuga de gas', 'cañerías', 'flexibles', 'talca', '24 h', 'urgente', 'calefont', 'fuga de gas', 'cañerías', 'flexibles', 'talca', '24 h'].map((w, i) => (
          <span key={i} className="mx-4">
            {w} ·
          </span>
        ))}
      </div>

      {/* ── Cómo se coordina ── */}
      <section id="como" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.flame }}>
              Protocolo de guardia
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`} style={{ color: C.bone }}>
              Un mensaje y la visita queda en camino
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <article
                  className="h-full border p-5 md:p-6"
                  style={{ backgroundColor: C.panel, borderColor: C.line }}
                >
                  <p className={`${mono.className} text-xs`} style={{ color: C.cobre }}>
                    {p.n}
                  </p>
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl mt-3`} style={{ color: C.bone }}>
                    {p.t}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: C.muted }}>
                    {p.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Alarmas: si te pasa esto, escribe ── */}
      <section id="urgencias" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.cobre }}>
              Si te pasa esto
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`} style={{ color: C.bone }}>
              Urgencias que no esperan<br className="hidden md:block" /> a mañana
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {ALARMAS.map((a, i) => (
              <Reveal key={a.cod} delay={i * 70}>
                <article
                  className="h-full border p-5 md:p-6 flex flex-col"
                  style={{ backgroundColor: C.panel2, borderColor: C.line }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.flameSoft }}>
                      <Led color={C.cobre} /> {a.cod}
                    </p>
                    <span
                      className={`${mono.className} text-[10px] uppercase tracking-[0.16em] border px-2 py-1`}
                      style={{ borderColor: 'rgba(205,129,72,0.5)', color: C.cobre }}
                    >
                      {a.accion}
                    </span>
                  </div>
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl mt-4`} style={{ color: C.bone }}>
                    {a.t}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: C.muted }}>
                    {a.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100} className="mt-8">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold text-base px-7 py-3 transition-transform active:scale-95"
              style={{ backgroundColor: C.flame, color: C.ink }}
            >
              Reportar la urgencia →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La foto real + bosquejo ── */}
      <section style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2 md:items-center">
          <Reveal>
            <figure className="border" style={{ borderColor: C.line }}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={`${IMG}/calefont.webp`}
                  alt="Quemadores de un calefont con llama azul bajo el serpentín de cobre — foto publicada en la ficha de Google del negocio"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-[0.16em] border-t`} style={{ borderColor: C.line, color: C.muted }}>
                Piloto encendido · foto real de su ficha de Google
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.flame }}>
                El oficio, en plano
              </p>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2 leading-[0.98]`} style={{ color: C.bone }}>
                Gas, agua y fuego:<br />se revisan juntos
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-md" style={{ color: C.muted }}>
                La foto de su ficha lo dice solo: quemadores en azul parejo y
                serpentín de cobre. Esa es la revisión — piloto, ducto y
                conexiones — que devuelve el agua caliente.
              </p>
              <div
                className="mt-6 border p-4 flex items-center gap-5"
                style={{ borderColor: C.line, backgroundColor: C.panel }}
              >
                <CalefontSketch className="w-28 md:w-32 shrink-0" />
                <div>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.cobre }}>
                    ◈ Bosquejo — ilustración
                  </p>
                  <p className="mt-2 text-sm" style={{ color: C.muted }}>
                    Esquema del calefont: serpentín de cobre arriba, quemadores
                    en azul abajo. Si el piloto no queda así de parejo, toca mantención.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reputación honesta ── */}
      <section style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2.5">
                <Stars value={4.8} color={C.flame} className="w-5 h-5" />
                <p className={`${display.className} text-4xl md:text-5xl`} style={{ color: C.bone }}>
                  {BIZ.rating}
                </p>
              </div>
              <p className="text-sm max-w-md" style={{ color: C.muted }}>
                Esa es la nota de su ficha de Google. Los textos de las reseñas
                no son públicos en la vista de Maps — la nota habla sola.
              </p>
            </div>
            <a
              href={BIZ.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-6 text-xs uppercase tracking-[0.18em] underline underline-offset-4`}
              style={{ color: C.flame }}
            >
              Ver ficha en Google Maps ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.22em]`} style={{ color: C.flame }}>
                Sector poniente
              </p>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl mt-2`} style={{ color: C.bone }}>
                Calle 24 Pte. 853, Talca
              </h2>
              <p className="mt-4 text-sm md:text-base max-w-md" style={{ color: C.muted }}>
                La base es el sector poniente de Talca; las visitas son a
                domicilio. Escribe con tu dirección y el problema.
              </p>
              <dl className="mt-8 space-y-4">
                {FICHA.map((f) => (
                  <div key={f.k} className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                    <dt className={`${mono.className} text-xs uppercase tracking-[0.16em] shrink-0`} style={{ color: C.flameSoft }}>
                      {f.k}
                    </dt>
                    <dd className={`${mono.className} text-sm text-right`} style={{ color: C.bone }}>
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full min-h-[300px] border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full min-h-[300px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.flame, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-end gap-6 md:gap-12">
          <div className="flex-1">
            <p className={`${mono.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em]`} style={{ color: 'rgba(4,9,15,0.72)' }}>
              <Led color="#04090F" /> Guardia activa
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-6xl leading-[0.95] mt-2`}>
              ¿Se cortó el agua caliente?
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href={`tel:${BIZ.phoneTel}`}
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-3 transition-transform active:scale-95"
              style={{ backgroundColor: C.ink, color: C.bone }}
            >
              Llamar
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-semibold text-base px-8 py-3 border-2 transition-transform active:scale-95"
              style={{ borderColor: C.ink, color: C.ink }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: '#020608' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className={`${display.className} uppercase text-lg`} style={{ color: C.bone }}>
              Gasfiter en Talca
            </p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay}
            </p>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <p className="text-xs" style={{ color: C.muted }}>
              Fontanero · {BIZ.address}, {BIZ.city} · Abierto 24 horas
            </p>
            <a
              href={BIZ.mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs underline underline-offset-4"
              style={{ color: C.muted }}
            >
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </div>
  )
}
