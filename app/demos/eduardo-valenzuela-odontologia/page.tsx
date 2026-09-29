import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

const C = {
  pine: '#0B2E26',
  teal: '#123B33',
  tealSoft: '#1C4A40',
  cream: '#F5F1E4',
  creamDark: '#EAE3CF',
  sage: '#8FAF9C',
  gold: '#D8B35C',
  ink: '#21312B',
  muted: '#50645B',
  lineLight: 'rgba(33,49,43,0.16)',
  lineDark: 'rgba(245,241,228,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'eduardo-valenzuela-odontologia',
  title: 'Odontología Dr. Eduardo Valenzuela — Dentista en 1 Oriente, Talca',
  description:
    'Consulta odontológica en 1 Oriente 1335, Talca. Odontología general con agenda por teléfono: evaluación, limpieza y urgencias dentales.',
  image: `${IMG}/calle-1oriente.webp`,
})

const NAV_LINKS = [
  { label: 'La calle', href: '#la-calle' },
  { label: 'Prestaciones', href: '#prestaciones' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const PRESTACIONES = [
  {
    num: '01',
    name: 'Evaluación y diagnóstico',
    desc: 'Revisión completa de tu dentadura con un plan claro antes de empezar cualquier tratamiento.',
  },
  {
    num: '02',
    name: 'Limpieza y prevención',
    desc: 'Destartraje, pulido y controles periódicos para mantener la salud dental al día.',
  },
  {
    num: '03',
    name: 'Urgencias y restauraciones',
    desc: 'Dolor agudo, piezas fracturadas y tapaduras: atención para salir del problema.',
  },
]

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/** Escena de bosquejo: sillón dental en alzado, marcado porque la
 *  consulta aún no publica fotos propias del interior. */
function BosquejoSillon() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: C.creamDark }}>
      <div className="absolute inset-4 border border-dashed" style={{ borderColor: 'rgba(33,49,43,0.28)' }} aria-hidden="true" />
      <svg viewBox="0 0 120 80" className="absolute inset-0 m-auto w-[62%]" fill="none" stroke={C.teal} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M18 62 L18 50 Q18 40 30 40 L52 40 Q60 40 62 32 L66 18 Q68 12 74 14 L78 16" />
        <path d="M30 62 L30 52 M62 62 L62 44" />
        <path d="M14 62 L84 62" />
        <path d="M78 16 Q88 18 88 28 L88 36" />
        <circle cx="92" cy="14" r="5" />
        <path d="M92 19 L92 34 M92 34 L84 40" />
        <path d="M96 10 L104 6 M97 15 L106 13" />
      </svg>
      <span
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.22em] font-semibold whitespace-nowrap"
        style={{ color: C.muted }}
      >
        bosquejo · foto real pendiente
      </span>
    </div>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <style>{'html { scroll-behavior: auto }'}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(245,241,228,0.94)', ink: C.teal, line: C.lineLight, btnBg: C.teal, btnInk: C.cream }}
      />

      {/* ── Hero: la calle arbolada de verdad ── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.pine }}>
        <Image
          src={`${IMG}/calle-1oriente.webp`}
          alt="1 Oriente, la calle arbolada donde está la consulta, a la altura del 1335 en Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.66 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,46,38,0.34) 0%, rgba(11,46,38,0.1) 40%, rgba(11,46,38,0.86) 100%)' }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-32 w-full">
          <Reveal>
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.gold }}>
              Odontología · 1 Oriente, Talca
            </p>
            <h1 className={`${display.className} text-[clamp(2.6rem,8vw,5.4rem)] leading-[1.02] max-w-4xl`} style={{ color: C.cream }}>
              Tu dentista bajo los árboles
              <br />
              <span className={displayItalic.className} style={{ color: C.sage }}>de 1 Oriente</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-sm md:text-base max-w-md leading-relaxed" style={{ color: 'rgba(245,241,228,0.85)' }}>
              La consulta del Dr. Eduardo Valenzuela atiende en pleno centro-poniente de
              Talca, a pasos de la Alameda. Agenda tu hora por teléfono.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
                style={{ backgroundColor: C.gold, color: C.pine }}
              >
                <PhoneIcon />
                Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full border transition-colors hover:bg-[rgba(245,241,228,0.12)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44"
                style={{ borderColor: 'rgba(245,241,228,0.45)', color: C.cream }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 inline-flex items-center gap-3 px-4 py-2.5 rounded-full" style={{ backgroundColor: 'rgba(11,46,38,0.55)', border: `1px solid ${C.lineDark}` }}>
              <Stars value={BIZ.rating} color={C.gold} className="w-4 h-4" />
              <span className="text-xs md:text-sm font-semibold" style={{ color: C.cream }}>
                5,0 en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Intro editorial ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <Reveal className="md:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.tealSoft }}>
              La consulta
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] mb-5`} style={{ color: C.pine }}>
              Odontología de barrio,
              <br />
              con nombre y apellido
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: C.muted }}>
              No es una clínica de cadena: es la consulta del Dr. Eduardo Valenzuela
              Medina, odontólogo que atiende en 1 Oriente 1335, una de las calles más
              arboladas de Talca. Atención directa con el mismo profesional, de la
              primera evaluación al último control.
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-5">
            <dl className="border-y py-6 space-y-5" style={{ borderColor: C.lineLight }}>
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Teléfono', BIZ.phoneDisplay],
                ['Horario', 'Por confirmar — agenda por teléfono'],
                ['Rubro', 'Odontología general'],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className="text-[11px] font-bold uppercase tracking-[0.22em] shrink-0" style={{ color: C.muted }}>{k}</dt>
                  <dd className="text-sm md:text-base font-semibold text-right" style={{ color: C.pine }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── La calle: fotos reales de 1 Oriente ── */}
      <section id="la-calle" className="py-16 md:py-24" style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] max-w-xl`} style={{ color: C.cream }}>
                Así se ve la cuadra donde atiende
              </h2>
              <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: 'rgba(245,241,228,0.66)' }}>
                Fotos reales de 1 Oriente a la altura del 1335 (Google Street View):
                la misma calle que vas a recorrer para llegar a la consulta.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: 'cuadra-1335.webp', alt: 'Casas con jardín en 1 Oriente cerca del 1335, Talca', cls: 'md:col-span-2 md:row-span-2', ratio: 'aspect-[4/3] md:aspect-auto md:h-full' },
              { src: '1oriente-norte.webp', alt: '1 Oriente hacia el norte, calzada y bandejón arbolado, Talca', cls: '', ratio: 'aspect-[4/3]' },
              { src: '1oriente-sur.webp', alt: '1 Oriente hacia el sur bajo el dosel de árboles, Talca', cls: '', ratio: 'aspect-[4/3]' },
              { src: 'cuadra-1335-b.webp', alt: 'Vereda y fachadas residenciales de la cuadra del 1300 de 1 Oriente, Talca', cls: '', ratio: 'aspect-[4/3]' },
              { src: '1oriente-vereda.webp', alt: 'Vereda de 1 Oriente con árboles y casas, Talca', cls: '', ratio: 'aspect-[4/3]' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 90} className={p.cls}>
                <figure className={`relative overflow-hidden rounded-xl ${p.ratio}`}>
                  <Image src={`${IMG}/${p.src}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prestaciones: bosquejos marcados ── */}
      <section id="prestaciones" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08]`} style={{ color: C.pine }}>
              Lo que atiende la consulta
            </h2>
            <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Esto es una muestra del listado: al publicar van las prestaciones
              y las fotos reales de la consulta.
            </p>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-3 gap-5 md:gap-7">
          {PRESTACIONES.map((s, i) => (
            <Reveal key={s.num} delay={i * 110}>
              <li className="h-full flex flex-col rounded-2xl overflow-hidden" style={{ backgroundColor: C.creamDark }}>
                <div className="relative">
                  <BosquejoSillon />
                  <span
                    className={`${display.className} absolute top-4 right-5 text-3xl`}
                    style={{ color: 'rgba(18,59,51,0.62)' }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex-1">
                  <h3 className={`${display.className} text-xl md:text-2xl leading-snug mb-2.5`} style={{ color: C.pine }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Opiniones: el dato real de Google ── */}
      <section id="opiniones" className="border-y" style={{ borderColor: C.lineLight, backgroundColor: C.creamDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <Reveal className="md:col-span-4">
            <p className={`${display.className} text-[clamp(3.4rem,9vw,5.6rem)] leading-none`} style={{ color: C.pine }}>
              5,0
            </p>
            <Stars value={BIZ.rating} color={C.teal} className="w-5 h-5 mt-2" />
          </Reveal>
          <Reveal delay={140} className="md:col-span-8">
            <h2 className={`${display.className} text-[clamp(1.6rem,3.6vw,2.4rem)] leading-snug mb-3`} style={{ color: C.pine }}>
              Nota perfecta en Google
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Quienes evaluaron la consulta en Google Maps le pusieron 5 estrellas.
              Son {BIZ.reviews} reseñas hasta ahora — la ficha no publica texto, solo
              la nota — y cada paciente nuevo puede sumar la suya después de su visita.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto: datos + mapa ── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.tealSoft }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] mb-6`} style={{ color: C.pine }}>
              Agenda tu hora
              <br />
              con una llamada
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke={C.teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span><strong className="font-bold" style={{ color: C.pine }}>{BIZ.address}</strong>, {BIZ.city} — una cuadra al poniente de la Alameda</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <span className="mt-0.5 shrink-0" style={{ color: C.teal }}><PhoneIcon /></span>
                <span><strong className="font-bold" style={{ color: C.pine }}>{BIZ.phoneDisplay}</strong> — llamadas en horario de atención</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2E26] tap-44`}
                style={{ backgroundColor: C.teal, color: C.cream }}
              >
                <PhoneIcon />
                Agendar por teléfono
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 rounded-full border transition-colors hover:bg-[rgba(18,59,51,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B2E26] tap-44"
                style={{ borderColor: 'rgba(18,59,51,0.35)', color: C.teal }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden rounded-2xl min-h-[320px] h-full" style={{ backgroundColor: C.creamDark }}>
              <LazyMap
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
      <footer style={{ backgroundColor: C.pine, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(245,241,228,0.62)' }}>
              {BIZ.legalName} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(245,241,228,0.62)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(245,241,228,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, nota y conteo de reseñas son
            datos públicos reales; las fotos son de la calle (Google Street View) y los
            interiores van marcados como bosquejo.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.gold} fg={C.pine} />
    </div>
  )
}
