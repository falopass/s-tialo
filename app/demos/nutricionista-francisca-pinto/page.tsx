import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  INTEGRAVITA_URL,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000' }],
})

const C = {
  papel: '#FBF5EE',
  lila: '#EDE4F7',
  card: '#FFFFFF',
  tinta: '#2A1F3D',
  violeta: '#4A2E9E',
  violetaSoft: '#6B4FC0',
  muted: '#5C5370',
  line: 'rgba(42,31,61,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'nutricionista-francisca-pinto',
  title: 'Francisca Pinto · Nutricionista en Talca',
  description:
    'Consulta nutricional en Edificio Espacio, Talca: enfoque deportivo, patologías crónicas, nutrición basada en plantas y cambio de hábitos. Agenda por WhatsApp.',
  image: `${IMG}/francisca.webp`,
})

const NAV_LINKS = [
  { label: 'Acompañamiento', href: '#acompanamiento' },
  { label: 'La consulta', href: '#consulta' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
]

const ENFOQUES = [
  {
    name: 'Nutrición deportiva',
    desc: 'Pautas para rendir mejor: energía, recuperación y composición corporal sin restricciones absurdas.',
    real: true,
  },
  {
    name: 'Nutrición basada en plantas',
    desc: 'Vegetariana, vegana o simplemente más plantas: bien planificada y con certificación en el área.',
    real: true,
  },
  {
    name: 'Patologías crónicas',
    desc: 'Acompañamiento para diabetes, resistencia a la insulina, colesterol y otras condiciones de fondo.',
    real: true,
  },
  {
    name: 'Cambio de hábitos',
    desc: 'Sin dietas de choque ni culpa: se trabaja con lo que te gusta comer, a tu ritmo.',
    real: true,
  },
]

const PASOS = [
  {
    n: 'Primera consulta',
    text: 'Evaluación completa: historia, medidas y lo que quieres lograr. Sales con un plan claro.',
  },
  {
    n: 'Pauta personalizada',
    text: 'Armada según tus gustos y tu rutina. Nada genérico: la pauta se adapta a ti, no al revés.',
  },
  {
    n: 'Controles',
    text: 'Seguimiento para ajustar lo que no funcione y celebrar los avances. Atención desde los 5 años.',
  },
]

const REVIEWS = [
  {
    name: 'Mariela Quintrequeo',
    text: 'Llegué donde la Fran buscando una nutri que me entregara confianza y seguridad. Es seca y súper clara con sus pautas.',
  },
  {
    name: 'Daniela Gómez',
    text: 'Nunca me he sentido juzgada. Siempre ha sabido adaptarse a mis necesidades y a mis tiempos.',
  },
  {
    name: 'Jacqueline Paredes',
    text: 'Siempre es un agrado ir a control con la Fran. Personaliza las pautas según los gustos de cada uno.',
  },
  {
    name: 'Carla Neira',
    text: 'Muy confiable y profesional. Su consultorio es un espacio seguro.',
  },
  {
    name: 'Cecilia Lopez',
    text: 'Ha sido mi aliada en este camino de recuperación. La recomiendo de corazón.',
  },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 a 20:00' },
  { d: 'Sábado', h: '9:00 a 14:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

const ruled = `repeating-linear-gradient(180deg, transparent 0 27px, ${C.line} 27px 28px)`

function BigFigure({
  src,
  alt,
  caption,
  className = '',
}: {
  src: string
  alt: string
  caption: string
  className?: string
}) {
  return (
    <figure className={className}>
      <div className="overflow-hidden rounded-t-full" style={{ border: `1px solid ${C.line}` }}>
        <Image
          src={src}
          alt={alt}
          width={1104}
          height={1200}
          className="w-full object-cover aspect-[3/4]"
        />
      </div>
      <figcaption className="mt-3 text-[12px] uppercase tracking-[0.14em] font-semibold" style={{ color: C.muted }}>
        {caption}
      </figcaption>
    </figure>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ background: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} italic text-xl md:text-2xl`} style={{ color: C.violeta }}>
            francisca pinto
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: 'rgba(251,245,238,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.violeta,
          btnInk: '#FFFFFF',
        }}
        ctaLabel="Agendar"
      />

      {/* Hero editorial: retrato en arco */}
      <section id="inicio" className="relative overflow-hidden" style={{ background: C.lila }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-0 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div className="pb-4 md:pb-20">
            <Reveal>
              <p className="text-[13px] uppercase tracking-[0.2em] font-bold" style={{ color: C.violeta }}>
                Nutricionista · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} text-[44px] sm:text-6xl md:text-7xl leading-[1.02] mt-4`} style={{ color: C.tinta }}>
                Comer mejor se aprende <em className="italic" style={{ color: C.violeta }}>con alguien al lado</em>
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-5 text-base md:text-lg max-w-[46ch] leading-relaxed" style={{ color: C.muted }}>
                Enfoque deportivo, patologías crónicas, nutrición basada en plantas y cambio de hábitos. Atención presencial en Edificio Espacio, desde los 5 años.
              </p>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} inline-flex items-center justify-center px-7 text-white font-bold text-[15px] rounded-full`}
                  style={{ background: C.violeta, height: 52 }}
                >
                  Agendar hora por WhatsApp
                </a>
                <span className="inline-flex items-center gap-2 text-[14px] font-bold" style={{ color: C.tinta }}>
                  <Stars value={4.9} color={C.violeta} className="w-4 h-4" />
                  {BIZ.googleRating} · {BIZ.googleReviews} opiniones en Google
                </span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:pt-10">
            <BigFigure
              src={`${IMG}/francisca.webp`}
              alt="Francisca Pinto, nutricionista en Talca, en su uniforme de consulta"
              caption="Francisca Pinto · Centro Integra Vita"
            />
          </Reveal>
        </div>
      </section>

      {/* Enfoques: filas de cuaderno */}
      <section id="acompanamiento" className="relative" style={{ background: `${ruled}, ${C.papel}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-[60ch]">
            <Reveal>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.03]`}>
                Con quién y en qué <em className="italic" style={{ color: C.violeta }}>trabaja</em>
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-4 text-[15px] md:text-base" style={{ color: C.muted }}>
                Según su propio perfil en Integra Vita: certificada en nutrición deportiva y en nutrición basada en plantas.
              </p>
            </Reveal>
          </div>
          <ul className="mt-10 divide-y" style={{ borderTop: `1px solid ${C.line}`, borderColor: C.line }}>
            {ENFOQUES.map((e, i) => (
              <li key={e.name}>
                <Reveal delay={i * 60}>
                  <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-1 md:gap-8 py-6 md:py-7 items-baseline">
                    <h3 className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.violeta }}>
                      {e.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                      {e.desc}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* La consulta: pasos + foto */}
      <section id="consulta" className="py-16 md:py-24" style={{ background: C.violeta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <figure className="rounded-3xl overflow-hidden rotate-[-1.5deg]" style={{ border: '6px solid #FFFFFF' }}>
              <Image
                src={`${IMG}/consulta.webp`}
                alt="Francisca Pinto durante una consulta nutricional en su box"
                width={901}
                height={1200}
                className="w-full object-cover aspect-[3/4]"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <h2 className={`${display.className} text-white text-4xl md:text-5xl leading-[1.05]`}>
                Cómo es el proceso
              </h2>
            </Reveal>
            <ol className="mt-8 space-y-0">
              {PASOS.map((p, i) => (
                <li key={p.n} className="relative pl-8 pb-7 last:pb-0 border-l border-white/30">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-1 w-[17px] h-[17px] rounded-full"
                    style={{ background: i === 0 ? '#FFFFFF' : C.lila }}
                  />
                  <Reveal delay={i * 70}>
                    <h3 className={`${display.className} text-white text-xl md:text-2xl`}>{p.n}</h3>
                    <p className="text-white/85 text-[15px] mt-1 leading-relaxed">{p.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
            <Reveal delay={220}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} mt-8 inline-flex items-center justify-center px-7 font-bold text-[15px] rounded-full`}
                style={{ background: '#FFFFFF', color: C.violeta, height: 52 }}
              >
                Reservar primera consulta
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Opiniones: notas de pacientes */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.03] max-w-[16ch]`}>
            Lo que cuentan quienes <em className="italic" style={{ color: C.violeta }}>ya van</em>
          </h2>
        </Reveal>
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:balance]">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 60} className="break-inside-avoid mb-4">
              <figure
                className="p-5 rounded-2xl"
                style={{
                  background: C.card,
                  border: `1px solid ${C.line}`,
                  transform: `rotate(${i % 2 === 0 ? '-0.6' : '0.6'}deg)`,
                }}
              >
                <Stars value={5} color={C.violeta} />
                <blockquote className={`${display.className} mt-3 text-[17px] leading-snug`} style={{ color: C.tinta }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 text-[13px] font-bold uppercase tracking-[0.1em]" style={{ color: C.muted }}>
                  {r.name} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${focusRing} inline-block mt-2 text-sm font-bold underline underline-offset-4`}
            style={{ color: C.violeta }}
          >
            Ver todas las opiniones en Google Maps
          </a>
        </Reveal>
      </section>

      {/* Agenda: edificio + horario + mapa */}
      <section id="agenda" className="py-16 md:py-24" style={{ background: C.lila }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 items-end">
            <Reveal>
              <figure className="rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/edificio.webp`}
                  alt="Edificio Espacio en 2 Oriente 870, Talca, donde atiende Francisca Pinto"
                  width={904}
                  height={1200}
                  className="w-full object-cover aspect-[4/5]"
                />
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.03]`}>
                  Agenda tu hora
                </h2>
              </Reveal>
              <Reveal delay={70}>
                <p className="mt-4 text-[15px] md:text-base max-w-[50ch]" style={{ color: C.muted }}>
                  Consulta en {BIZ.address}, {BIZ.city}. Escribe por WhatsApp y coordinan directamente el día y la hora.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-6 divide-y rounded-2xl px-5" style={{ background: C.card, border: `1px solid ${C.line}`, borderColor: C.line }}>
                  {HORARIO.map((h) => (
                    <li key={h.d} className="flex items-center justify-between py-3.5" style={{ borderColor: C.line }}>
                      <span className="text-[14px] font-bold uppercase tracking-[0.12em]" style={{ color: C.muted }}>{h.d}</span>
                      <span className="font-bold" style={{ color: C.tinta }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${focusRing} inline-flex items-center justify-center px-7 text-white font-bold text-[15px] rounded-full`}
                    style={{ background: C.violeta, height: 52 }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${focusRing} inline-flex items-center justify-center px-7 font-bold text-[15px] rounded-full border-2`}
                    style={{ borderColor: C.violeta, color: C.violeta, height: 52 }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="mt-10 rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.line}`, aspectRatio: '16/9' }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Sitiazo */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
        <Reveal>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`}>
            Una página así puede ser <em className="italic" style={{ color: C.violeta }}>la tuya</em>
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-[15px] md:text-base max-w-[52ch] mx-auto" style={{ color: C.muted }}>
            Sitiazo diseña sitios para pymes del Maule desde $79.990. Este es un mockup hecho con la información pública de {BIZ.short}.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href={whatsappLink('demo')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${focusRing} mt-6 inline-flex items-center justify-center px-8 text-white font-bold text-[15px] rounded-full`}
            style={{ background: C.violeta, height: 52 }}
          >
            Quiero mi sitio
          </a>
        </Reveal>
      </section>

      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className={`${display.className} italic text-xl`} style={{ color: C.violeta }}>
            francisca pinto
          </p>
          <p className="text-[13px] leading-relaxed max-w-[58ch]" style={{ color: C.muted }}>
            Mockup preparado por {SITE.name} para {BIZ.name} con datos y fotos de su ficha de Google y su perfil en{' '}
            <a href={INTEGRAVITA_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
              integravita.cl
            </a>
            . ¿Lo hacemos realidad?
          </p>
          <a
            href={whatsappLink('demo')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${focusRing} text-[13px] font-bold underline underline-offset-4`}
            style={{ color: C.violeta }}
          >
            Escribir a Sitiazo
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Escribir por WhatsApp a Francisca Pinto" />
    </div>
  )
}
