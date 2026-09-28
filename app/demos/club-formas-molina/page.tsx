import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ, WA_LINK, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED,
  IMG, HORARIO, SALA, RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/**
 * Dirección de arte: «pizarra de gimnasio» — la pizarra donde se
 * anotan las series. Base carbón oscuro con un solo acento turquesa
 * (el color del logo CF), números gigantes tipo contador de reps,
 * rayitas de tally para separar ítems y la órbita del logo como
 * motivo gráfico. Datos de la ficha de Maps, fotos de su perfil.
 */
const C = {
  carbon: '#0D1416',
  panel: '#131D20',
  panel2: '#1A2629',
  tinta: '#EEF5F5',
  suave: '#A5BAC0',
  tenue: '#7E949B',
  teal: '#2BA8AA',
  tealBajo: '#1E7A7C',
  linea: 'rgba(165,186,192,0.16)',
  lineaTeal: 'rgba(43,168,170,0.35)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'club-formas-molina',
  title: 'Club Formas — el gimnasio de barrio de Molina',
  description:
    'Gimnasio en Yerbas Buenas 1574, Molina. Cardio, pesas y máquinas de 9 a 23 h, con la atención de Juan. 4,7 estrellas en Google. Escríbeles por WhatsApp.',
  image: `${IMG}/sala.webp`,
})

const NAV_LINKS = [
  { label: 'La sala', href: '#sala' },
  { label: 'El entrenador', href: '#entrenador' },
  { label: 'Horario', href: '#horario' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

/** Tally de reps: grupos de rayitas como en la pizarra */
function Tally({ n, color = C.teal, className = '' }: { n: number; color?: string; className?: string }) {
  const grupos = Array.from({ length: n }, () => 4)
  return (
    <span className={`inline-flex items-end gap-3 ${className}`} aria-hidden="true">
      {grupos.map((_, g) => (
        <span key={g} className="relative inline-flex gap-[3px] pb-[1px]">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="w-[2.5px] h-[14px] rounded-[1px]" style={{ backgroundColor: color }} />
          ))}
          <span
            className="absolute left-[-4px] top-[6px] w-[calc(100%+8px)] h-[2.5px] rounded-[1px] rotate-[-8deg]"
            style={{ backgroundColor: color }}
          />
        </span>
      ))}
    </span>
  )
}

/** Rótulo de sección: contador + título */
function Rotulo({ n, titulo }: { n: string; titulo: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span className={`${display.className} text-lg md:text-xl tracking-[0.08em]`} style={{ color: C.teal }}>
        {n}
      </span>
      <p className={`${mono.className} text-xs md:text-sm tracking-[0.3em] uppercase`} style={{ color: C.tenue }}>
        {titulo}
      </p>
      <span className="flex-1 border-t border-dashed" style={{ borderColor: C.linea }} aria-hidden="true" />
    </div>
  )
}

/** Órbita del logo CF como ornamento de fondo */
function Orbita({ className = '', color = C.lineaTeal }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 640 200" className={className} aria-hidden="true" fill="none">
      <ellipse cx="320" cy="100" rx="310" ry="82" stroke={color} strokeWidth="1.5" transform="rotate(-6 320 100)" />
      <ellipse cx="320" cy="100" rx="310" ry="82" stroke={color} strokeWidth="1" opacity="0.4" transform="rotate(-11 320 100)" />
    </svg>
  )
}

function SitiazoStrip() {
  return (
    <p className={`${mono.className} text-center text-xs leading-relaxed py-5 px-6`} style={{ color: C.tenue, backgroundColor: '#0A0F11' }}>
      Página de muestra hecha por{' '}
      <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: C.teal }}>
        Sitiazo
      </a>{' '}
      — sitios para pymes desde $79.990.{' '}
      <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2" style={{ color: C.teal }}>
        Pide la tuya
      </a>
    </p>
  )
}

export default function ClubFormas() {
  return (
    <main id="inicio" className={body.className} style={{ backgroundColor: C.carbon, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className} style={{ letterSpacing: '0.03em', fontSize: '1.15rem' }}>CLUB FORMAS</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(13,20,22,0.92)', ink: C.tinta, line: C.linea, btnBg: C.teal, btnInk: '#0D1416' }}
      />

      {/* ═══ HERO — la sala a fondo ═══ */}
      <section className="relative min-h-[94svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/sala.webp`}
          alt="Sala de máquinas, bicicletas y pesas libres de Club Formas en Molina"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'linear-gradient(180deg, rgba(13,20,22,0.55) 0%, rgba(13,20,22,0.35) 42%, rgba(13,20,22,0.95) 100%)' }}
          aria-hidden="true"
        />
        {/* contador gigante decorativo */}
        <p
          className={`${display.className} absolute top-20 right-4 md:right-12 text-[6rem] md:text-[11rem] leading-none select-none`}
          style={{ color: 'rgba(43,168,170,0.14)' }}
          aria-hidden="true"
        >
          53
        </p>
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-14 md:pb-20 pt-44">
          <Reveal>
            <div className="flex items-center gap-3">
              <Tally n={1} />
              <p className={`${mono.className} text-xs md:text-sm tracking-[0.3em] uppercase`} style={{ color: C.teal }}>
                Gimnasio · Yerbas Buenas, Molina
              </p>
            </div>
            <h1
              className={`${display.className} mt-4 text-white leading-[0.95] tracking-[0.005em] text-[3rem] md:text-[5.6rem] max-w-4xl uppercase`}
            >
              El gimnasio de Molina donde te conocen <span style={{ color: C.teal }}>por tu nombre.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(238,245,245,0.88)' }}>
              Cardio, pesas y máquinas en Yerbas Buenas 1574. Abierto de
              9 a 23 h entre semana, con la atención de Juan — entrenador
              y competidor de fisicoculturismo.
            </p>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center text-sm md:text-base tracking-[0.04em] px-7 h-[52px] rounded-sm uppercase transition-transform active:scale-95`}
                style={{ backgroundColor: C.teal, color: '#0D1416' }}
              >
                Consultar membresía
              </a>
              <a
                href={WA_LINK_CLASE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-sm border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF', backgroundColor: 'rgba(13,20,22,0.45)' }}
              >
                Quiero conocerlo
              </a>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: C.suave }}
            >
              <Stars value={BIZ.rating} color={C.teal} />
              <span>
                {BIZ.ratingLabel} · {BIZ.reviews} opiniones en Google
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══ TALLY STRIP ═══ */}
      <section className="border-y" style={{ backgroundColor: C.panel, borderColor: C.linea }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {['CARDIO', 'PESAS LIBRES', 'MÁQUINAS', 'ATENCIÓN PERSONALIZADA'].map((t, i) => (
              <span key={t} className="flex items-center gap-8">
                <span className={`${display.className} text-base md:text-xl tracking-[0.12em]`} style={{ color: C.tinta }}>
                  {t}
                </span>
                {i < 3 && <Tally n={1} className="hidden sm:inline-flex" />}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ LA SALA ═══ */}
      <section id="sala" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="S-01" titulo="La sala" />
            <h2 className={`${display.className} mt-4 uppercase leading-[0.98] tracking-[0.005em] text-4xl md:text-6xl max-w-3xl`} style={{ color: C.tinta }}>
              Hierro de verdad, sin lujos que pagar.
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.suave }}>
              Una sala completa para entrenar fuerte: máquinas para cada
              grupo muscular, zona de pesas libres sobre pasto sintético
              y bicicletas para el cardio.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { src: 'rack', pie: 'ZONA DE PESAS', alt: 'Rack de pesas libres y banca sobre pasto sintético en Club Formas', ratio: 'aspect-[3/4]' },
              { src: 'sala', pie: 'SALA PRINCIPAL', alt: 'Sala principal de Club Formas con bicicletas y máquinas', ratio: 'aspect-[3/4]' },
              { src: 'fachada', pie: 'YERBAS BUENAS 1574', alt: 'Entrada de Club Formas en Yerbas Buenas, Molina', ratio: 'aspect-[3/4]' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className="relative overflow-hidden rounded-sm border" style={{ borderColor: C.linea }}>
                  <div className={`relative ${f.ratio}`}>
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:640px) 30vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption
                    className={`${mono.className} absolute bottom-3 left-3 text-[0.65rem] tracking-[0.25em] px-2 py-1`}
                    style={{ backgroundColor: 'rgba(13,20,22,0.85)', color: C.teal }}
                  >
                    {f.pie}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {SALA.map((s) => (
              <Reveal key={s.titulo}>
                <article className="h-full rounded-sm border-l-2 p-5" style={{ borderColor: C.teal, backgroundColor: C.panel }}>
                  <h3 className={`${display.className} text-lg tracking-[0.06em] uppercase`} style={{ color: C.tinta }}>
                    {s.titulo}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.suave }}>
                    {s.detalle}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ EL ENTRENADOR ═══ */}
      <section id="entrenador" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.panel }}>
        <Orbita className="absolute -top-10 -right-24 w-[560px] opacity-60" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div className="order-2 md:order-1">
              <Reveal>
                <Rotulo n="S-02" titulo="El entrenador" />
                <h2 className={`${display.className} mt-4 uppercase leading-[0.98] tracking-[0.005em] text-4xl md:text-6xl`} style={{ color: C.tinta }}>
                  Entrenas con alguien que compite.
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.suave }}>
                  Juan, dueño y entrenador, sube al escenario en torneos de
                  fisicoculturismo — y esa misma exigencia la pone en cada
                  alumno. Sus socios lo dicen en Google: atención
                  personalizada, te sientes como en casa.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} mt-8 inline-flex items-center justify-center text-sm md:text-base tracking-[0.04em] px-7 h-[52px] rounded-sm uppercase transition-transform active:scale-95`}
                  style={{ backgroundColor: C.teal, color: '#0D1416' }}
                >
                  Escribirle a Juan
                </a>
              </Reveal>
            </div>
            <Reveal delay={120} className="order-1 md:order-2">
              <div className="relative max-w-md mx-auto">
                <figure className="relative rotate-1 rounded-sm overflow-hidden border" style={{ borderColor: C.linea, boxShadow: '0 22px 55px rgba(0,0,0,0.45)' }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/campeonato.webp`}
                      alt="Juan de Club Formas premiado en un campeonato de fisicoculturismo"
                      fill
                      sizes="(min-width:768px) 40vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} px-4 py-2.5 text-[0.65rem] tracking-[0.2em] uppercase`} style={{ backgroundColor: C.carbon, color: C.teal }}>
                    Premiación · fisicoculturismo
                  </figcaption>
                </figure>
                <figure className="absolute -bottom-10 -left-6 md:-left-10 w-40 md:w-48 -rotate-3 rounded-sm overflow-hidden border-2" style={{ borderColor: C.panel2, boxShadow: '0 18px 45px rgba(0,0,0,0.5)' }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/entrenador.webp`}
                      alt="Juan orientando a una socia durante un ejercicio en Club Formas"
                      fill
                      sizes="200px"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ HORARIO — la pizarra ═══ */}
      <section id="horario" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="S-03" titulo="Horario de la sala" />
            <div className="mt-6 flex flex-wrap items-end gap-x-8 gap-y-4">
              <h2 className={`${display.className} uppercase leading-[0.95] tracking-[0.005em] text-[3.2rem] md:text-[5.5rem]`} style={{ color: C.tinta }}>
                9–23
              </h2>
              <p className="pb-3 text-base md:text-lg leading-relaxed max-w-sm" style={{ color: C.suave }}>
                horas de lunes a viernes. Entrenas antes de la pega,
                a la hora de almuerzo o cuando salgas.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 max-w-2xl">
            {HORARIO.map((h, i) => (
              <Reveal key={h.dia} delay={i * 70}>
                <div
                  className="flex items-center justify-between border-b border-dashed py-4"
                  style={{ borderColor: C.linea }}
                >
                  <p className={`${mono.className} text-xs md:text-sm tracking-[0.2em] uppercase`} style={{ color: C.tenue }}>
                    {h.dia}
                  </p>
                  <p className={`${display.className} text-xl md:text-2xl tracking-[0.05em]`} style={{ color: h.hora === 'Cerrado' ? C.tenue : C.teal }}>
                    {h.hora}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ RESEÑAS ═══ */}
      <section className="scroll-mt-20" id="resenas" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="S-04" titulo="Lo que dicen los socios" />
            <div className="mt-6 flex flex-wrap items-end gap-5">
              <p className={`${display.className} text-6xl md:text-8xl leading-none tracking-[0.02em]`} style={{ color: C.teal }}>
                {BIZ.ratingLabel}
              </p>
              <div className="pb-2">
                <Stars value={BIZ.rating} color={C.teal} className="w-5 h-5" />
                <p className={`${mono.className} mt-2 text-xs tracking-[0.2em] uppercase`} style={{ color: C.tenue }}>
                  {BIZ.reviews} opiniones en Google
                </p>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <figure className="h-full rounded-sm p-6 border-t-2" style={{ backgroundColor: C.carbon, borderTopColor: C.teal }}>
                  <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-xs tracking-[0.15em] uppercase`} style={{ color: C.teal }}>
                    {r.autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ UBICACIÓN ═══ */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="S-05" titulo="Dónde queda" />
            <h2 className={`${display.className} mt-4 uppercase leading-[0.98] tracking-[0.005em] text-4xl md:text-6xl`} style={{ color: C.tinta }}>
              {BIZ.address}, {BIZ.city}.
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center justify-center text-sm md:text-base tracking-[0.04em] px-7 h-[52px] rounded-sm uppercase transition-transform active:scale-95`}
                style={{ backgroundColor: C.teal, color: '#0D1416' }}
              >
                Cómo llegar
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm md:text-base font-semibold px-6 h-[52px] rounded-sm border transition-transform active:scale-95"
                style={{ borderColor: C.linea, color: C.tinta }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 rounded-sm overflow-hidden border" style={{ borderColor: C.linea }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Club Formas, Yerbas Buenas 1574, Molina"
                className="w-full h-[300px] md:h-[380px] block"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ CTA FINAL ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.tealBajo }}>
        <Orbita className="absolute -bottom-24 -left-32 w-[640px] opacity-40" color="rgba(238,245,245,0.4)" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-xs tracking-[0.3em] uppercase`} style={{ color: 'rgba(238,245,245,0.8)' }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h2 className={`${display.className} mt-4 uppercase leading-[0.98] tracking-[0.01em] text-4xl md:text-6xl text-white max-w-3xl mx-auto`}>
              La primera vez se entra por la puerta. Después, por costumbre.
            </h2>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-9 inline-flex items-center justify-center text-sm md:text-base tracking-[0.04em] px-8 h-[52px] rounded-sm uppercase transition-transform active:scale-95`}
              style={{ backgroundColor: C.carbon, color: '#FFFFFF' }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer style={{ backgroundColor: '#0A0F11' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil, ya optimizado */}
              <img src={`${IMG}/logo.webp`} alt="Logo de Club Formas" className="h-9 w-auto rounded-sm bg-white px-1.5 py-0.5" />
              <div>
                <p className={`${display.className} tracking-[0.05em] leading-tight`} style={{ color: C.tinta }}>
                  {BIZ.name}
                </p>
                <p className="text-sm" style={{ color: C.tenue }}>
                  {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.suave }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">WhatsApp</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">Google Maps</a>
            </div>
          </div>
          <p className={`${mono.className} mt-5 text-xs tracking-[0.15em]`} style={{ color: C.tenue }}>
            {BIZ.ratingLabel} ★ · {BIZ.reviews} OPINIONES EN GOOGLE · {BIZ.phoneDisplay}
          </p>
        </div>
        <SitiazoStrip />
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </main>
  )
}
