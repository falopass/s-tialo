import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_VISITA, MAPS_URL, MAPS_EMBED, HOURS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})

const C = {
  carbon: '#0D0D10',
  panel: '#15151A',
  gold: '#C6A35C',
  // dorado oscuro: legible como texto sobre fondo claro
  goldDeep: '#7C6228',
  ivory: '#F2EDE3',
  ink: '#26262C',
  muted: 'rgba(242,237,227,0.68)',
  line: 'rgba(242,237,227,0.14)',
}

const BTN_SOLID =
  'rounded-full transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A35C]'
const BTN_GHOST =
  'rounded-full border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C6A35C]'

export const metadata: Metadata = demoMetadata({
  slug: 'luxe-gym-talca',
  title: 'Luxe Gym · Gimnasio en Las Rastras, Talca',
  description:
    'Gimnasio en Cam. Las Rastras 3080, Talca: sala de máquinas, zona funcional y entrenadores en sala. 5.0 estrellas en Google. Consulta por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El gym', href: '#el-gym' },
  { label: 'Zonas', href: '#zonas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
]

// Zonas y servicios según lo visible en las fotos reales de la ficha
const ZONAS = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Entrenador de Luxe Gym asistiendo un press de banca con barra olímpica',
    name: 'Sala de máquinas y pesas',
    desc: 'Racks, barras y máquinas de fuerza, con entrenador en sala corrigiendo la técnica cuando lo necesitas.',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Sesión de entrenamiento funcional en la zona de piso de césped de Luxe Gym',
    name: 'Zona funcional',
    desc: 'Sector con piso de césped para movilidad, core y trabajo funcional, lejos del ruido de las máquinas.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Alumna entrenando en prensa de piernas con asistencia del staff de Luxe Gym',
    name: 'Entrenamiento acompañado',
    desc: 'Los socios lo repiten en sus reseñas: el staff está atento y dispuesto a ayudar en cada sesión.',
  },
  {
    src: `${IMG}/detalle4.webp`,
    alt: 'Área de kinesiología y recuperación dentro de Luxe Gym Talca',
    name: 'Kinesiología',
    desc: 'En sus fotos se ve el área de kinesiología del gym: consulta por ese servicio directo por WhatsApp.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.gold : C.goldDeep }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: 'currentColor' }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function LuxeGymPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased pb-20`}
      style={{ backgroundColor: C.carbon, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(13,13,16,0.94)',
          ink: C.ivory,
          line: C.line,
          btnBg: C.gold,
          btnInk: '#0D0D10',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Sala principal de Luxe Gym Talca: máquinas de fuerza y piso de césped sintético"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,13,16,0.5) 0%, rgba(13,13,16,0.25) 40%, rgba(13,13,16,0.88) 78%, rgba(13,13,16,0.95) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A35C]"
              style={{ backgroundColor: 'rgba(242,237,227,0.96)', color: C.carbon }}
            >
              <Stars value={BIZ.rating} color={C.gold} className="w-[13px] h-[13px]" />
              {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Gimnasio · Las Rastras · Talca</Eyebrow>
            <h1
              className={`${display.className} font-medium leading-[1.05] tracking-[-0.01em] text-[clamp(2.1rem,8.5vw,5rem)] mb-6`}
              style={{ color: C.ivory }}
            >
              Entrenar
              <br />
              <span style={{ color: C.gold }}>en otro nivel</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(242,237,227,0.88)' }}>
              Un gimnasio amplio, limpio y con máquinas impecables en el
              sector Las Rastras — con entrenadores en sala y un ambiente
              que sus socios califican con 5 estrellas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} font-semibold text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.gold, color: C.carbon }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#zonas"
                className={`${display.className} ${BTN_GHOST} font-semibold text-sm md:text-base px-7 py-3.5`}
                style={{ borderColor: 'rgba(242,237,227,0.55)', color: C.ivory }}
              >
                Conocer el gym
              </a>
            </div>
          </Reveal>
        </div>
        <div
          className="relative border-t"
          style={{ borderColor: C.line, backgroundColor: 'rgba(13,13,16,0.5)', backdropFilter: 'blur(6px)' }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(242,237,227,0.8)' }}>
            <span>Cam. Las Rastras 3080, Talca</span>
            <span>Lun–Vie 6:00–22:00</span>
            <span>{BIZ.reviews} reseñas · 5.0 en Google</span>
            <span className="hidden md:inline" style={{ color: C.gold }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Declaración ── */}
      <section id="el-gym" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28" style={{ backgroundColor: C.carbon }}>
        <Reveal>
          <p
            className={`${display.className} font-medium text-[clamp(1.7rem,4.6vw,3.1rem)] leading-[1.2] max-w-3xl`}
            style={{ color: C.ivory }}
          >
            Un gym donde las máquinas{' '}
            <span style={{ color: C.gold }}>funcionan</span>, el espacio{' '}
            <span style={{ color: C.gold }}>alcanza</span> y el staff{' '}
            <span style={{ color: C.gold }}>está presente</span>.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-sm md:text-base leading-relaxed max-w-xl mt-7" style={{ color: C.muted }}>
            Eso es lo que destacan las 36 reseñas de su ficha de Google:
            espacio amplio, equipamiento en perfecto estado, orden, buena
            música y un equipo que ayuda con buena energía.
          </p>
        </Reveal>
      </section>

      {/* ── Zonas: tarjetas con fotos reales ── */}
      <div id="zonas" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Zonas del gym</Eyebrow>
            <h2 className={`${display.className} font-medium text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`} style={{ color: C.ivory }}>
              Todo lo que usa un socio
            </h2>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {ZONAS.map((z, i) => (
              <Reveal key={z.name} delay={i * 80}>
                <li className="rounded-2xl overflow-hidden border" style={{ backgroundColor: C.carbon, borderColor: C.line }}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={z.src}
                      alt={z.alt}
                      fill
                      sizes="(min-width: 640px) 45vw, 90vw"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`${display.className} font-semibold text-lg md:text-xl mb-2`} style={{ color: C.ivory }}>
                      {z.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {z.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-medium text-3xl md:text-5xl leading-[1.08]`} style={{ color: C.ivory }}>
                5.0 de 5 estrellas
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Nota perfecta en su ficha de Google con {BIZ.reviews}{' '}
                reseñas: máquinas, limpieza, espacio y equipo humano son lo
                que más se repite.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {[
              'Espacio amplio, máquinas que funcionan perfecto y todo siempre limpio y ordenado.',
              'El staff y los entrenadores son súper amables y siempre dispuestos a ayudar.',
              'Buena música y un ambiente cómodo para entrenar tranquilo.',
            ].map((quote, i) => (
              <Reveal key={quote} delay={i * 90}>
                <figure className="rounded-2xl border p-5 md:p-6 h-full flex flex-col" style={{ backgroundColor: C.panel, borderColor: C.line }}>
                  <Stars value={5} color={C.gold} className="w-[14px] h-[14px]" />
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1" style={{ color: 'rgba(242,237,227,0.85)' }}>
                    «{quote}»
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.16em] font-bold mt-4" style={{ color: C.muted }}>
                    Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A35C]"
              style={{ color: C.gold }}
            >
              Leer las reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Horarios y contacto ── */}
      <section id="horarios" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/ambiente.webp`}
          alt="Fachada de Luxe Gym en Camino Las Rastras, Talca"
          fill
          sizes="100vw"
          loading="lazy"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,13,16,0.72) 0%, rgba(13,13,16,0.82) 55%, rgba(13,13,16,0.92) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <div
              className="rounded-2xl p-6 md:p-8 h-full"
              style={{ backgroundColor: 'rgba(13,13,16,0.72)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', border: `1px solid ${C.line}` }}
            >
              <Eyebrow light>Horarios y ubicación</Eyebrow>
              <h2 className={`${display.className} font-medium text-3xl md:text-4xl leading-[1.1] mb-6`} style={{ color: C.ivory }}>
                En Las Rastras,
                <br />
                casi todo el día
              </h2>
              <dl className="rounded-xl border overflow-hidden mb-6" style={{ borderColor: C.line }}>
                {HOURS.map((h) => (
                  <div key={h.d} className="flex items-baseline justify-between gap-4 px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: C.line, backgroundColor: 'rgba(13,13,16,0.45)' }}>
                    <dt className="text-sm font-semibold" style={{ color: C.ivory }}>{h.d}</dt>
                    <dd className="text-sm text-right" style={{ color: 'rgba(242,237,227,0.75)' }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: 'rgba(242,237,227,0.8)' }}>
                {BIZ.address}, {BIZ.city}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A35C]" style={{ color: C.gold }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_VISITA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_SOLID} font-semibold text-sm px-6 py-3`}
                  style={{ backgroundColor: C.gold, color: C.carbon }}
                >
                  Agendar visita
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} font-semibold text-sm px-6 py-3`}
                  style={{ borderColor: 'rgba(242,237,227,0.5)', color: C.ivory }}
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div id="contacto" className="rounded-2xl overflow-hidden min-h-[320px] h-full shadow-2xl scroll-mt-20" style={{ border: `1px solid ${C.line}` }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 border-t" style={{ borderColor: C.line }}>
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
            <div>
              <p className={`${display.className} text-xl mb-1`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: 'rgba(242,237,227,0.6)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(242,237,227,0.6)' }}>
              <p className="font-semibold mb-1" style={{ color: 'rgba(242,237,227,0.9)' }}>Contacto</p>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C6A35C]" style={{ color: C.gold }}>
                WhatsApp {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className="text-[11px] mt-5 pt-4 border-t" style={{ color: 'rgba(242,237,227,0.6)', borderColor: C.line }}>
            Sitio de ejemplo preparado por Sitiazo con fotos y datos reales de la ficha de Google del gym.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
