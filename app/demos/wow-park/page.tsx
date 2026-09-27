import type { Metadata } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_CUMPLE, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Baloo_2({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
})
const body = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

const C = {
  paper: '#FBFDFF',
  soft: '#EAF3FE',
  card: '#FFFFFF',
  blue: '#1E6FD9',
  blueDeep: '#12417F',
  blueInk: '#0E2F5E',
  yellow: '#FFC53D',
  yellowSoft: '#FFE9AE',
  coral: '#FF6B4A',
  // coral oscuro: texto sobre fondos claros y fondo de botones con texto blanco (≥4.5:1)
  coralDeep: '#C2410C',
  coralSoft: '#FFD9CC',
  ink: '#1B2B45',
  muted: '#5D6E88',
  line: 'rgba(27,43,69,0.14)',
}

export const metadata: Metadata = {
  title: 'Wow Park Talca — Parque infantil y cumpleaños en Talca',
  description:
    'Parque infantil en Talca con juegos, inflables y celebraciones de cumpleaños. Reserva por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Zonas de juego', href: '#juegos' },
  { label: 'Cumpleaños', href: '#cumples' },
  { label: 'Valores', href: '#valores' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const ZONAS = [
  {
    src: `${IMG}/juegos.webp`,
    tag: 'toda la tarde',
    name: 'Laberinto de juegos',
    desc: 'Tubos, toboganes, puentes colgantes y redes para trepar hasta cansarse. Zona pensada para niños y niñas de 3 a 12 años.',
  },
  {
    src: `${IMG}/inflable.webp`,
    tag: 'el favorito',
    name: 'Inflable gigante',
    desc: 'El clásico que nunca falla: salto libre en una estructura acolchada con monitores cerca.',
  },
  {
    src: `${IMG}/cafeteria.webp`,
    tag: 'para los papás',
    name: 'Cafetería con vista al juego',
    desc: 'Café, té y algo dulce mientras los niños juegan a la vista. Porque los papás también vienen al parque.',
  },
]

const CUMPLE_INCLUYE = [
  'Mesa dulce decorada y globos a tono',
  'Juego libre en todas las zonas',
  'Invitación digital para enviar por WhatsApp',
  'Apoyo de monitores durante la fiesta',
]

const VALORES = [
  { name: 'Entrada día completo', desc: 'Acceso a todas las zonas de juego', price: 'por niño' },
  { name: 'Pase mañana / tarde', desc: 'Media jornada de juego', price: 'por niño' },
  { name: 'Cumpleaños Wow', desc: 'Mesa decorada + juegos + animación', price: 'por paquete' },
]

const HORAS = [
  { days: 'Lunes a viernes', time: 'Tardes de juego' },
  { days: 'Sábado, domingo y festivos', time: 'Jornada completa' },
]

const TESTIMONIOS = [
  {
    text: 'Los niños salieron felices y raja de cansados. Lo mejor: los papás podemos tomar café mirándolos jugar.',
    author: 'Mamá de Talca',
  },
  {
    text: 'Celebramos el cumpleaños de mi hija acá y no me preocupé de nada: ellos se encargaron de la mesa y la animación.',
    author: 'Familia del Maule',
  },
]

function Balloon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2.5 C8.2 2.5 5.5 5.6 5.5 9.2 C5.5 12.8 8.3 14.8 12 14.8 C15.7 14.8 18.5 12.8 18.5 9.2 C18.5 5.6 15.8 2.5 12 2.5 Z" />
      <path d="M10.6 14.8 L12 16.6 L13.4 14.8" />
      <path d="M12 16.6 C11.2 18 12.8 18.8 12 20.2 C11.6 20.9 11.8 21.3 12 21.8" />
    </svg>
  )
}

function Confetti({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`} aria-hidden="true">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.yellow }} />
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.coral }} />
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.blue }} />
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-extrabold"
      style={{ color: light ? '#FFFFFF' : C.coralDeep }}
    >
      <Balloon className="w-[18px] h-[18px]" color={light ? C.yellow : undefined} />
      {children}
    </p>
  )
}

export default function WowParkPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* velo oscuro fijo detrás del nav: el texto blanco cae sobre la foto del hero */}
      <div
        className="fixed top-0 inset-x-0 z-40 h-[60px] md:h-[68px]"
        style={{ backgroundColor: 'rgba(14,47,94,0.72)' }}
      >
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(251,253,255,0.94)',
            ink: C.blueInk,
            line: C.line,
            btnBg: C.coralDeep,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.blueInk }}>
        <img
          src={`${IMG}/hero.webp`}
          fetchPriority="high"
          alt="Interior del parque infantil Wow Park Talca: toboganes, laberinto de juegos y zonas acolchadas de colores"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,47,94,0.6) 0%, rgba(14,47,94,0.4) 38%, rgba(14,47,94,0.92) 100%)',
          }}
        />
        {/* globos decorativos */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8 flex gap-3" aria-hidden="true">
          <span className="w-9 h-11 md:w-11 md:h-14 rounded-[50%] rotate-[-8deg] shadow-lg" style={{ backgroundColor: C.yellow }} />
          <span className="w-9 h-11 md:w-11 md:h-14 rounded-[50%] rotate-[6deg] shadow-lg" style={{ backgroundColor: C.coral }} />
          <span className="w-9 h-11 md:w-11 md:h-14 rounded-[50%] rotate-[-4deg] shadow-lg" style={{ backgroundColor: '#FFFFFF' }} />
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Parque infantil · Cumpleaños · Talca</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.8rem,10vw,6rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Aquí los niños
              <br />
              <span style={{ color: C.yellow }}>se cansan de verdad</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-semibold" style={{ color: 'rgba(255,255,255,0.95)' }}>
              Wow Park Talca: un parque infantil con juegos, inflables y
              cumpleaños en la capital del Maule. Ellos juegan, tú
              descansas.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 shadow-lg`}
                style={{ backgroundColor: C.yellow, color: C.blueInk }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#juegos"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver las zonas de juego
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: 'rgba(14,47,94,0.88)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 flex flex-wrap items-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold" style={{ color: 'rgba(255,255,255,0.92)' }}>
            <span>{BIZ.city} · {BIZ.region}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              juego seguro y supervisado
            </span>
            <span>Cumpleaños con reserva</span>
            <span className="hidden md:inline" style={{ color: C.yellowSoft }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Zonas de juego ── */}
      <section id="juegos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Zonas de juego</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.blueInk }}>
              Juegos, inflables
              <br />
              <span style={{ color: C.blue }}>y café para los papás</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra de las zonas del parque: al publicar
              van las fotos y descripciones reales de Wow Park.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ZONAS.map((z, i) => (
            <Reveal key={z.name} delay={i * 90}>
              <li
                className="group rounded-3xl overflow-hidden border h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 4px rgba(14,47,94,0.05)' }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={z.src}
                    alt={z.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm rotate-[-2deg]`}
                    style={{ backgroundColor: 'rgba(255,255,255,0.95)', color: C.coralDeep }}
                  >
                    {z.tag}
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-2`} style={{ color: C.blueInk }}>
                    {z.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {z.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-12 md:mt-16">
            {['Superficies acolchadas', 'Monitores en las zonas', 'Limpieza todos los días'].map((chip) => (
              <span key={chip} className="flex items-center gap-2.5 text-sm font-extrabold" style={{ color: C.blue }}>
                <Balloon className="w-4 h-4" color={C.coral} />
                {chip}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── Cumpleaños ── */}
      <section id="cumples" className="scroll-mt-20" style={{ backgroundColor: C.blue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="rounded-3xl overflow-hidden rotate-[1.5deg]" style={{ boxShadow: '0 24px 60px rgba(14,47,94,0.45)' }}>
              <img
                src={`${IMG}/fiesta.webp`}
                alt="Mesa de cumpleaños decorada con torta, globos y sombreros de fiesta en Wow Park Talca"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow light>Cumpleaños</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#FFFFFF' }}>
              La fiesta lista:
              <br />
              <span className="inline-block rounded-2xl px-3 rotate-[-1deg]" style={{ backgroundColor: C.blueInk, color: C.yellow }}>tú solo llegas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Reservas el horario, cuentas cuántos invitados son y el
              equipo arma la mesa, la decoración y el juego. Los datos
              de abajo son de muestra: al publicar van los paquetes
              reales.
            </p>
            <ul className="space-y-3 mb-9">
              {CUMPLE_INCLUYE.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base font-bold" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  <Balloon className="w-4 h-4 shrink-0" color={C.yellow} />
                  {item}
                  <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold px-2 py-0.5 rounded-full" style={{ backgroundColor: C.blueInk, color: '#FFFFFF' }}>
                    muestra
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_CUMPLE}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 shadow-lg`}
              style={{ backgroundColor: C.coralDeep, color: '#FFFFFF' }}
            >
              Reservar cumpleaños
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Valores de referencia ── */}
      <section id="valores" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Valores y horarios</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.blueInk }}>
              Valores de referencia
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Montos de muestra para mostrar el diseño: los precios y
              horarios reales se confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-start">
          <ul className="space-y-4">
            {VALORES.map((v, i) => (
              <Reveal key={v.name} delay={i * 90}>
                <li
                  className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border p-5 md:p-6"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <div>
                    <h3 className={`${display.className} font-bold text-lg md:text-xl`} style={{ color: C.blueInk }}>
                      {v.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {v.desc}
                    </p>
                  </div>
                  <span className="flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.14em] font-extrabold px-2.5 py-1 rounded-full" style={{ backgroundColor: C.yellowSoft, color: C.blueInk }}>
                      muestra
                    </span>
                    <span className={`${display.className} font-bold text-lg`} style={{ color: C.coralDeep }}>
                      {v.price}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={140}>
            <div className="rounded-3xl border p-6 md:p-8" style={{ backgroundColor: C.soft, borderColor: C.line }}>
              <h3 className={`${display.className} font-bold text-xl md:text-2xl mb-5`} style={{ color: C.blueInk }}>
                Horarios
              </h3>
              <ul className="space-y-3 mb-6">
                {HORAS.map((h) => (
                  <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.blue} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7 v5 l3.5 2" />
                    </svg>
                    <span>
                      <strong className="font-extrabold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-xs leading-relaxed mb-6" style={{ color: C.muted }}>
                Horarios referenciales: los cumpleaños se reservan por
                bloques y los cupos se confirman por WhatsApp.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
              >
                Consultar horarios y valores
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones (muestra) ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Lo que dicen los papás</Eyebrow>
              <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.blueInk }}>
                Familias felices
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Wow Park Talca aún no acumula reseñas en su ficha de
                Google. Estos textos son de muestra: al publicar van
                los comentarios reales de las familias.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-extrabold underline underline-offset-4 decoration-2"
                style={{ color: C.blue, textDecorationColor: 'rgba(30,111,217,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIOS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 110}>
                  <figure
                    className="rounded-3xl p-6 md:p-7 border"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-extrabold" style={{ color: C.coralDeep }}>
                        {t.author} · Texto de muestra
                      </span>
                      <Confetti />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.blueInk }}>
              En Talca,
              <br />
              <span style={{ color: C.coralDeep }}>Región del Maule</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-bold" style={{ color: C.muted }}>
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
              La ficha del parque no publica la dirección exacta todavía:
              escríbenos por WhatsApp y te contamos cómo llegar y los
              estacionamientos cercanos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.coralDeep, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors`}
                style={{ borderColor: 'rgba(27,43,69,0.3)', color: C.blueInk }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.blueInk }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Confetti className="justify-center mb-6" />
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#FFFFFF' }}>
              Agenda su visita
              <br />
              <span style={{ color: C.yellow }}>y que empiece el juego</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Escríbenos por WhatsApp para reservar un cumpleaños o
              consultar por entradas y horarios. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95 shadow-lg`}
              style={{ backgroundColor: C.yellow, color: C.blueInk }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.blueInk, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-24 md:pb-20 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-extrabold text-xl mb-1 flex items-center gap-3`}>
              <Balloon className="w-5 h-5" color={C.yellow} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
              {BIZ.rubro} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.yellowSoft }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Textos, valores y fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.yellowSoft }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
