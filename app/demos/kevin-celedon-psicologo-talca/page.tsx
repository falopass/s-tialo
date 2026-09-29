import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «un espacio para respirar». El consultorio real de
 * Kevin tiene muros pizarra azulados y piso de madera; su marca es un
 * rostro turquesa del que brota una planta. La página replica esa calma:
 * columna serena con aire, tarjetas blandas, teal del logo como único
 * acento fuerte sobre tinta pizarra y papel crema. Nunito redondeada da
 * el tono cercano; Work Sans el cuerpo; Plex Mono las fichas de datos.
 */
const C = {
  paper: '#F5F2EA',
  card: '#FFFFFF',
  ink: '#17333B',
  deep: '#0E232A',
  teal: '#0FA394',
  tealDark: '#0A6E64',
  tealSoft: '#DDF0ED',
  wood: '#B97F55',
  muted: '#4E636A',
  line: 'rgba(23,51,59,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kevin-celedon-psicologo-talca',
  title: 'Kevin Celedón — Psicólogo en Talca',
  description:
    'Psicólogo en Talca. Terapia individual, familiar y de parejas, online y presencial en Lingo’s Cowork. 5,0★ con 48 reseñas en Google. Agenda por WhatsApp.',
  image: `${IMG}/retrato.webp`,
})

const NAV_LINKS = [
  { label: 'Acompañamiento', href: '#acompanamiento' },
  { label: 'El espacio', href: '#espacio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
]

const PROCESO = [
  {
    num: '01',
    title: 'Primero conversamos',
    text: 'La primera sesión es para conocerte: qué te trae, qué necesitas y a qué ritmo podemos trabajar.',
  },
  {
    num: '02',
    title: 'Definimos el enfoque',
    text: 'Junto contigo elijo la línea que mejor calza tu proceso: psicoterapia breve, terapia narrativa o sexología clínica.',
  },
  {
    num: '03',
    title: 'Avanzamos a tu ritmo',
    text: 'Sesiones online o presenciales en Talca, individuales, familiares o de parejas. Tú marcas el paso.',
  },
]

const AREAS = [
  {
    name: 'Psicoterapia breve',
    text: 'Un trabajo focalizado en lo que hoy te pesa, con objetivos claros y avances medibles en pocas sesiones.',
    icon: 'leaf',
  },
  {
    name: 'Terapia narrativa',
    text: 'Reescribimos la historia que te cuentas sobre ti: separar el problema de la persona para recuperar tu propia voz.',
    icon: 'book',
  },
  {
    name: 'Sexología clínica',
    text: 'Un espacio sin juicio para hablar de sexualidad, vínculos e identidad con acompañamiento profesional.',
    icon: 'heart',
  },
]

const MODALIDADES = [
  { name: 'Terapia individual', tag: 'Presencial u online' },
  { name: 'Terapia de parejas', tag: 'Presencial u online' },
  { name: 'Terapia familiar', tag: 'Presencial u online' },
  { name: 'Acompañamientos y valoraciones', tag: 'Según proceso' },
]

const RESENAS = [
  {
    nombre: 'Marce Verdugo',
    texto:
      'Un verdadero profesional, no solo por su conocimiento sino por su carácter. Empático, amable y atento en cada sesión; crea un espacio de confianza que se valora. Tiene la capacidad de llegar al corazón del asunto con observaciones precisas.',
  },
  {
    nombre: 'Carolina Roco',
    texto:
      'Kevin es un profesional empático y con una calidad humana excepcional. Desde el primer momento me hizo sentir segura, en confianza y sin juicios, algo fundamental para mi proceso. Lo recomiendo a quien busque un acompañamiento serio y cercano.',
  },
  {
    nombre: 'Chenllee Lee',
    texto:
      'Mi experiencia con Kevin ha sido muy positiva: empático e inspira mucha confianza desde la primera sesión. Lo recomiendo a cualquiera que busque un espacio seguro y profesional para su proceso terapéutico.',
  },
]

function AreaIcon({ kind }: { kind: string }) {
  const stroke = { stroke: C.tealDark, strokeWidth: 1.8, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
      {kind === 'leaf' && (
        <g {...stroke}>
          <path d="M5 19C5 11 11 5 20 4c-1 9-7 15-15 15Z" />
          <path d="M5 19c2-5 6-9 11-11" />
        </g>
      )}
      {kind === 'book' && (
        <g {...stroke}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5Z" />
          <path d="M4 20.5V5.5" />
          <path d="M9 8h6M9 11.5h4" />
        </g>
      )}
      {kind === 'heart' && (
        <g {...stroke}>
          <path d="M12 20s-7-4.4-9.2-8.6C1.4 8.7 3.4 5 7 5c2.2 0 3.8 1.2 5 3 1.2-1.8 2.8-3 5-3 3.6 0 5.6 3.7 4.2 6.4C19 15.6 12 20 12 20Z" />
        </g>
      )}
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,242,234,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.tealDark,
          btnInk: '#FFFFFF',
        }}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Agendar hora"
      />

      {/* ── Hero: retrato + titular a dos columnas ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 55% at 78% 12%, rgba(15,163,148,0.14) 0%, rgba(15,163,148,0) 70%), radial-gradient(45% 45% at 8% 90%, rgba(185,127,85,0.12) 0%, rgba(185,127,85,0) 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[128px] pb-14 md:pb-20 grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.tealDark }}>
                Psicólogo · Talca
              </p>
              <h1
                className={`${display.className} mt-4 text-[2.6rem] leading-[1.02] md:text-6xl font-black tracking-tight`}
                style={{ color: C.ink }}
              >
                Un espacio seguro para poner en orden{' '}
                <span style={{ color: C.tealDark }}>lo que sientes</span>
              </h1>
              <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Terapia individual, familiar y de parejas — online o presencial en el centro de Talca.
                Diplomado en psicoterapia breve, terapia narrativa y sexología clínica.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-extrabold text-white shadow-lg transition-transform hover:scale-[1.02]`}
                  style={{ backgroundColor: C.tealDark }}
                >
                  Agenda tu hora
                </a>
                <a
                  href="#acompanamiento"
                  className={`${display.className} tap-44 inline-flex items-center rounded-full px-6 py-3 text-base font-extrabold`}
                  style={{ color: C.ink, border: `1.5px solid ${C.line}` }}
                >
                  Cómo trabajo
                </a>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
                style={{ backgroundColor: C.tealSoft, color: C.ink }}
              >
                <Stars value={5} color={C.tealDark} />
                <span>
                  <strong>{BIZ.rating}</strong> · {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[340px] md:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -top-4 -right-3 md:-top-6 md:-right-6 h-full w-full rounded-[2rem]"
                style={{ backgroundColor: C.tealSoft }}
              />
              <Image
                src={`${IMG}/retrato.webp`}
                alt={`${BIZ.name}, psicólogo, en su consulta de Talca`}
                width={800}
                height={1200}
                priority
                className="relative rounded-[2rem] object-cover aspect-[3/4] w-full shadow-xl"
              />
              <div
                className={`${display.className} absolute -bottom-5 left-4 right-4 md:left-6 md:right-6 rounded-2xl px-4 py-3 text-sm font-bold text-white shadow-lg`}
                style={{ backgroundColor: C.deep }}
              >
                Terapia individual · familiar · de parejas
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja modalidades ── */}
      <section aria-label="Modalidades de atención" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid gap-3 md:grid-cols-4">
          {MODALIDADES.map((m, i) => (
            <Reveal key={m.name} delay={i * 90}>
              <div
                className="rounded-2xl px-4 py-4 h-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
              >
                <p className={`${display.className} text-base font-extrabold text-white`}>{m.name}</p>
                <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.18em]`} style={{ color: '#8FD8CF' }}>
                  {m.tag}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Acompañamiento: proceso + áreas ── */}
      <section id="acompanamiento" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.tealDark }}>
            El proceso
          </p>
          <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-black tracking-tight`}>
            Cómo se ve trabajar juntos
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {PROCESO.map((p, i) => (
            <Reveal key={p.num} delay={i * 110}>
              <div
                className="rounded-3xl p-6 h-full"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.wood }}>
                  {p.num}
                </span>
                <h3 className={`${display.className} mt-3 text-xl font-extrabold`}>{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
                  {p.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {AREAS.map((a, i) => (
            <Reveal key={a.name} delay={i * 110}>
              <div
                className="rounded-3xl p-6 h-full"
                style={{ backgroundColor: C.tealSoft, border: `1px solid rgba(15,163,148,0.22)` }}
              >
                <AreaIcon kind={a.icon} />
                <h3 className={`${display.className} mt-4 text-xl font-extrabold`}>{a.name}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
                  {a.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
            Diplomado en psicoterapia breve, terapia narrativa y sexología clínica
          </p>
        </Reveal>
      </section>

      {/* ── El espacio ── */}
      <section id="espacio" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <Reveal>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: '#8FD8CF' }}>
                  El espacio
                </p>
                <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-black tracking-tight text-white`}>
                  Una consulta pensada para hablar tranquilo
                </h2>
                <p className="mt-5 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                  Atiendo en Lingo’s Cowork, en pleno centro de Talca: un espacio privado, luminoso y con
                  estacionamiento cerca. También trabajamos online si te queda más cómodo desde tu casa.
                </p>
                <p className={`${mono.className} mt-6 text-sm leading-relaxed`} style={{ color: '#8FD8CF' }}>
                  1 Poniente 1610, esquina 5 Norte
                  <br />
                  Segundo piso · Talca
                </p>
              </Reveal>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Reveal className="col-span-2">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Consulta de Kevin Celedón: escritorio, sillones y luz natural sobre piso de madera"
                  width={1200}
                  height={900}
                  className="rounded-3xl object-cover aspect-[16/9] w-full"
                />
              </Reveal>
              <Reveal delay={100}>
                <Image
                  src={`${IMG}/consulta.webp`}
                  alt="Detalle de la consulta: silla naranja y plantas junto a la mesa"
                  width={900}
                  height={1200}
                  className="rounded-3xl object-cover aspect-[3/4] w-full"
                />
              </Reveal>
              <Reveal delay={160}>
                <Image
                  src={`${IMG}/escalera.webp`}
                  alt="Escalera de madera que sube a la consulta en el segundo piso del cowork"
                  width={900}
                  height={1200}
                  className="rounded-3xl object-cover aspect-[3/4] w-full"
                />
              </Reveal>
              <Reveal delay={220}>
                <Image
                  src={`${IMG}/sala.webp`}
                  alt="Sala de la consulta: sofá, mesa de trabajo y piso de madera con luz de ventana"
                  width={900}
                  height={1200}
                  className="rounded-3xl object-cover aspect-[3/4] w-full"
                />
              </Reveal>
              <Reveal delay={280}>
                <Image
                  src={`${IMG}/edificio.webp`}
                  alt="Edificio esquinero de Lingo's Cowork en 1 Poniente, de noche"
                  width={1200}
                  height={900}
                  className="rounded-3xl object-cover object-[62%_50%] aspect-[3/4] w-full"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.tealDark }}>
              Opiniones
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-black tracking-tight`}>
              Lo que dicen quienes ya pasaron por acá
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
              style={{ backgroundColor: C.card, border: `1px solid ${C.line}`, color: C.ink }}
            >
              <Stars value={5} color={C.tealDark} />
              {BIZ.rating} · {BIZ.reviews} reseñas · Google
            </a>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 110}>
              <figure
                className="rounded-3xl p-6 h-full flex flex-col"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <Stars value={5} color={C.tealDark} />
                <blockquote className="mt-4 text-sm leading-relaxed flex-1" style={{ color: C.muted }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-4 text-xs uppercase tracking-[0.14em]`} style={{ color: C.ink }}>
                  {r.nombre} <span style={{ color: C.muted }}>· Google</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Agenda ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.tealSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.tealDark }}>
              Agenda
            </p>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl font-black tracking-tight`}>
              Escríbeme y coordinamos tu primera sesión
            </h2>
            <dl className="mt-7 space-y-4 text-sm md:text-base">
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                  Dirección
                </dt>
                <dd className="font-semibold">{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                  WhatsApp
                </dt>
                <dd>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                  Correo
                </dt>
                <dd>
                  <a href={`mailto:${BIZ.email}`} className="font-semibold underline underline-offset-4 tap-44">
                    {BIZ.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} w-24 shrink-0 text-xs uppercase tracking-[0.18em] pt-1`} style={{ color: C.muted }}>
                  Horario
                </dt>
                <dd className="font-semibold">A convenir por WhatsApp — online y presencial</dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} tap-44 mt-8 inline-flex items-center rounded-full px-7 py-3 text-base font-extrabold text-white shadow-lg`}
              style={{ backgroundColor: C.deep }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden shadow-xl" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de la consulta de ${BIZ.name} en Talca`}
                className="w-full aspect-[4/3]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl font-black tracking-tight text-white`}>
              El primer paso también es <span style={{ color: '#6FD9CE' }}>una conversación</span>
            </h2>
            <p className="mt-4 mx-auto max-w-xl text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              No necesitas tenerlo todo claro para empezar. Escríbeme por WhatsApp y vemos juntos cómo te puedo ayudar.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} tap-44 mt-8 inline-flex items-center rounded-full px-8 py-3 text-base font-extrabold`}
              style={{ backgroundColor: C.tealDark, color: '#FFFFFF' }}
            >
              Hablar con Kevin
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8 pb-6" style={{ backgroundColor: C.deep, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col items-center gap-3 text-center">
          <p className={`${display.className} text-sm font-extrabold text-white`}>{BIZ.name} — {BIZ.rubro}</p>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <div className="[&>div]:static [&>div]:mx-auto [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Agendar hora por WhatsApp" />
    </main>
  )
}
