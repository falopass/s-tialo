import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Image from 'next/image'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  waLink,
  MAPS_URL,
  MAPS_EMBED,
  HOURS,
  EQUIPO,
  REVIEWS,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'atenas',
  title: 'Atenas Entrenamiento Corporal — Clases full body en Libertad 1318, Molina',
  description:
    'Gimnasio en Libertad 1318, Molina. Clases full body grupales y guiadas de lunes a viernes, 9-10 y 18-21. 5.0 estrellas en Google. Coordina por WhatsApp.',
  image: `${IMG}/afiche.webp`,
})

// ── Paleta del rondel: tinta negra + el dorado del Partenón ──
const C = {
  ink: '#0C0C0E',
  panel: '#141417',
  card: '#1B1B20',
  line: '#2A2A30',
  gold: '#E0B034',
  paper: '#F3EEE2',
  white: '#F4F1E6',
  muted: '#A8A295',
} as const

const navTheme = {
  over: 'dark' as const,
  bar: 'rgba(12,12,14,0.94)',
  ink: C.white,
  line: 'rgba(244,241,230,0.12)',
  btnBg: C.gold,
  btnInk: '#141006',
}

/** Columnas estriadas: el motivo del Partenón de su logo, en pelo. */
function Flutas({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(${flip ? '-90deg' : '90deg'}, transparent 0 7px, rgba(224,176,52,0.22) 7px 8px)`,
      }}
    />
  )
}

/** Doble regla lapidaria que enmarca un bloque. */
function Estela({ children }: { children: React.ReactNode }) {
  return (
    <div className="border p-1.5" style={{ borderColor: C.gold }}>
      <div className="border p-6 md:p-10 h-full" style={{ borderColor: 'rgba(224,176,52,0.45)' }}>
        {children}
      </div>
    </div>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.34em]`} style={{ color: C.gold }}>
      {children}
    </p>
  )
}

export default function AtenasPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.ink, color: C.white }}>
      <BlitzNav
        name={<span className="font-semibold tracking-wide">{BIZ.short}</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'Horarios', href: '#horarios' },
          { label: 'La clase', href: '#clase' },
          { label: 'Reseñas', href: '#resenas' },
        ]}
        waLink={WA_LINK}
        theme={navTheme}
        fontClass={mono.className}
        ctaLabel="Primera clase"
      />

      {/* ── HERO: el templo — columnas estriadas enmarcan el mensaje ── */}
      <section className="relative overflow-hidden">
        <Flutas className="absolute inset-y-0 left-0 w-10 md:w-16" />
        <Flutas className="absolute inset-y-0 right-0 w-10 md:w-16" flip />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1100px 520px at 78% 8%, rgba(224,176,52,0.10), transparent 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-16 md:pt-40 md:pb-24 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center min-h-[100dvh]">
          <div>
            <Reveal>
              <Eyebrow>Gimnasio · Libertad 1318 · Molina</Eyebrow>
              <h1
                className={`${display.className} mt-4 text-[2.05rem] leading-[1.05] md:text-7xl`}
              >
                Disciplina hoy,
                <br />
                <span style={{ color: C.gold }}>resultados mañana</span>
              </h1>
              <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: C.muted }}>
                Clases full body guiadas en grupo, de lunes a viernes en el
                gimnasio de Libertad 1318.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={waLink('Hola, quiero coordinar mi primera clase full body en Atenas, Libertad 1318')}
                  target="_blank"
                  rel="noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[13px] uppercase tracking-[0.14em] rounded-sm`}
                  style={{ backgroundColor: C.gold, color: '#141006' }}
                >
                  Coordinar primera clase
                </a>
                <a
                  href="#horarios"
                  className={`${mono.className} text-[12px] uppercase tracking-[0.2em] py-3 border-b`}
                  style={{ color: C.gold, borderColor: C.gold }}
                >
                  Ver horarios
                </a>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Stars value={5} color={C.gold} />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  5.0 · 10 reseñas en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative">
              <div
                className="border-[3px] rounded-sm overflow-hidden shadow-2xl"
                style={{ borderColor: C.gold }}
              >
                <Image
                  src={`${IMG}/afiche.webp`}
                  alt="Afiche oficial de Atenas Entrenamiento Corporal: clase full body con barras y balones en la sala de Libertad"
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <p
                className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em] text-center`}
                style={{ color: C.muted }}
              >
                Su afiche oficial, tal como ellos lo publican
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FRANJA: el lema en dorado ── */}
      <div className="overflow-hidden border-y" style={{ backgroundColor: C.gold, borderColor: C.gold }}>
        <div className="tira flex whitespace-nowrap py-2.5">
          {[0, 1].map((k) => (
            <span
              key={k}
              aria-hidden={k === 1}
              className={`${mono.className} text-[12px] uppercase tracking-[0.24em] px-4`}
              style={{ color: '#141006' }}
            >
              {'Atenas · Entrenamiento Corporal · Clases full body · Lunes a viernes · Disciplina hoy, resultados mañana · '.repeat(2)}
            </span>
          ))}
        </div>
      </div>

      {/* ── HORARIOS: la estela de la semana ── */}
      <section id="horarios" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Estela>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.34em] text-center`} style={{ color: C.gold }}>
                La semana en Atenas
              </p>
              <div className="mt-6 divide-y" style={{ borderColor: C.line }}>
                {HOURS.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-baseline justify-between gap-4 py-4 border-b"
                    style={{ borderColor: 'rgba(244,241,230,0.14)' }}
                  >
                    <span className={`${display.className} text-lg md:text-xl`}>{h.d}</span>
                    <span
                      className={`${mono.className} text-[13px] md:text-sm tracking-[0.08em]`}
                      style={{ color: h.h === 'Cerrado' ? C.muted : C.gold }}
                    >
                      {h.h}
                    </span>
                  </div>
                ))}
              </div>
              <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em] text-center`} style={{ color: C.muted }}>
                Dos ventanas al día, mismo trabajo completo
              </p>
            </Estela>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>Sin excusa de horario</Eyebrow>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
                Antes del trabajo o al salir de la pega
              </h2>
              <p className="mt-4 text-base md:text-lg" style={{ color: C.muted }}>
                A las 9 de la mañana arranca la primera clase y a las 6 de la
                tarde la segunda tanda. Fin de semana cerrado: la semana se
                entrena de lunes a viernes.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 rounded-sm overflow-hidden border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/sala-clase.webp`}
                  alt="Clase en la sala de Atenas: alumnos entrenando con mancuernas, colchonetas y pliométricos bajo el techo de vigas de madera"
                  width={900}
                  height={1200}
                  className="w-full h-auto"
                />
              </div>
              <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                La sala de Libertad 1318 en plena clase
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LA CLASE ── */}
      <section id="clase" className="border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal className="max-w-2xl">
            <Eyebrow>Adentro de la sala</Eyebrow>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
              No es solo fierros: es clase guiada, en grupo y a medida
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: C.muted }}>
              Cada sesión es full body: todos los grandes grupos musculares en
              una hora, con el profe corrigiendo técnica y ajustando la carga a
              cada alumno.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            <Reveal>
              <Image
                src={`${IMG}/profe-alumna.webp`}
                alt="Alumna levantando barra mientras el instructor guía desde un cajón pliométrico"
                width={700}
                height={1200}
                className="w-full h-full object-cover rounded-sm border"
                style={{ borderColor: C.line }}
              />
            </Reveal>
            <Reveal delay={90}>
              <Image
                src={`${IMG}/sentadilla.webp`}
                alt="Alumna haciendo sentadilla frontal con barra en la sala de Atenas"
                width={900}
                height={1200}
                className="w-full h-full object-cover rounded-sm border"
                style={{ borderColor: C.line }}
              />
            </Reveal>
            <Reveal delay={160} className="col-span-2 md:col-span-1">
              <Image
                src={`${IMG}/remo.webp`}
                alt="Dos alumnas entrenando: una levanta balón medicinal y otra sostiene sentadilla con barra"
                width={900}
                height={1200}
                className="w-full h-full object-cover rounded-sm border"
                style={{ borderColor: C.line }}
              />
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {EQUIPO.map((e) => (
                <span
                  key={e}
                  className={`${mono.className} text-[11px] uppercase tracking-[0.14em] px-3.5 py-2 border rounded-sm`}
                  style={{ borderColor: 'rgba(224,176,52,0.4)', color: C.paper }}
                >
                  {e}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── EL PROFE + EL GRUPO ── */}
      <section className="relative overflow-hidden border-t" style={{ borderColor: C.line }}>
        <Flutas className="absolute inset-y-0 left-0 w-10 md:w-14 opacity-70" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/grupo.webp`}
                alt="Selfie grupal del profe Jorge con su clase completa al final de la sesión en Atenas"
                width={1160}
                height={880}
                className="w-full h-auto"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
              La clase completa, foto de su propio Instagram
            </p>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>El nombre que repiten las reseñas</Eyebrow>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
                Profe Jorge, exige a medida y te deja full motivado
              </h2>
              <p className="mt-4 text-base md:text-lg" style={{ color: C.muted }}>
                De las diez reseñas en Google, la mitad lo nombra: cercano,
                profesional y dinámico. La clase se hace en grupo y nadie
                entrena solo.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <blockquote className="mt-7 border-l-2 pl-5" style={{ borderColor: C.gold }}>
                <p className="text-lg md:text-xl leading-snug" style={{ color: C.paper }}>
                  “Profe cercano y muy profesional.”
                </p>
                <cite className={`${mono.className} not-italic block mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Claudia Navarro · reseña en Google
                </cite>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" className="border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Eyebrow>Lo que dicen en Google</Eyebrow>
              <div className="mt-4 flex items-end gap-4">
                <span className={`${display.className} text-7xl md:text-8xl leading-none`} style={{ color: C.gold }}>
                  5.0
                </span>
                <div className="pb-2">
                  <Stars value={5} color={C.gold} className="w-5 h-5" />
                  <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas · todas de 5
                  </p>
                </div>
              </div>
            </Reveal>
            <div className="grid gap-4">
              {REVIEWS.slice(0, 3).map((r, i) => (
                <Reveal key={r.a} delay={i * 80}>
                  <figure className="border rounded-sm p-5" style={{ borderColor: C.line, backgroundColor: C.card }}>
                    <blockquote className="text-[15px] leading-snug" style={{ color: C.paper }}>
                      “{r.q}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                      {r.a}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ÚNETE ── */}
      <section id="unete" className="relative overflow-hidden border-t" style={{ borderColor: C.line }}>
        <Flutas className="absolute inset-y-0 right-0 w-10 md:w-14 opacity-70" flip />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Reveal>
              <Eyebrow>Primera clase</Eyebrow>
              <h2 className={`${display.className} mt-3 text-3xl md:text-5xl leading-tight`}>
                Escribe por WhatsApp y coordina tu primera clase
              </h2>
              <p className="mt-4 text-base md:text-lg" style={{ color: C.muted }}>
                Cupos y horarios se reservan directo con el gimnasio. Queda en
                Libertad 1318, en el centro de Molina.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className={`${mono.className} inline-flex items-center justify-center h-[46px] px-6 text-[13px] uppercase tracking-[0.14em] rounded-sm`}
                  style={{ backgroundColor: C.gold, color: '#141006' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={`tel:${BIZ.phoneDisplay.replace(/\s/g, '')}`}
                  className={`${mono.className} text-[12px] tracking-[0.12em] py-3 border-b`}
                  style={{ color: C.gold, borderColor: C.gold }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
              <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="rounded-sm overflow-hidden border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                className="w-full h-[300px] border-0"
                title={`Mapa de ${BIZ.name} en ${BIZ.addressFull}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className={`${mono.className} mt-3 inline-block text-[11px] uppercase tracking-[0.2em] border-b py-1`}
              style={{ color: C.gold, borderColor: C.gold }}
            >
              Cómo llegar a Libertad 1318
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: '#08080A' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-4">
          <Flutas className="h-4 w-full" />
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className={`${display.className} text-base`}>{BIZ.name}</p>
            <a
              href={`tel:${BIZ.phoneDisplay.replace(/\s/g, '')}`}
              className={`${mono.className} text-[12px] tracking-[0.12em]`}
              style={{ color: C.gold }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} · {BIZ.region}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />

      <style>{`
        .tira { animation: tira 26s linear infinite; }
        @keyframes tira { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .tira { animation: none; } }
      `}</style>
    </main>
  )
}
