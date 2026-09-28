import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_URGENCIA, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#F4F6F4',
  card: '#FBFDFC',
  slate: '#1E4656',
  deep: '#0E2B36',
  accent: '#B8432E',
  accentInk: '#FCEFEA',
  ink: '#1C2B30',
  muted: '#55666C',
  line: 'rgba(28,43,48,0.15)',
  lineLight: 'rgba(244,246,244,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-dental-bilbao-urgencias-dentales-curico-',
  title: 'Clínica Dental Bilbao — Dentista y urgencias 24/7 en Curicó',
  description: 'Dentista en el centro de Curicó, Manuel Montt 357 oficina 718. Urgencias dentales las 24 horas, todos los días. Agenda por WhatsApp.',
  image: '/demos/clinica-dental-bilbao-urgencias-dentales-curico-/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Urgencias', href: '#urgencias' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICES = [
  {
    n: '01',
    name: 'Urgencia dental 24 horas',
    desc: 'Dolor agudo, golpes, inflamación o una pieza quebrada: la clínica atiende a cualquier hora, todos los días del año.',
    tag: '24/7',
  },
  {
    n: '02',
    name: 'Consulta y diagnóstico',
    desc: 'Evaluación completa con plan de tratamiento explicado con calma y por escrito antes de empezar.',
    tag: 'Agenda',
  },
  {
    n: '03',
    name: 'Restauraciones y estética',
    desc: 'Tapaduras del color del diente, coronas y prótesis pensadas para que el trabajo no se note.',
    tag: 'Agenda',
  },
  {
    n: '04',
    name: 'Limpieza y prevención',
    desc: 'Profilaxis periódica y control de caries y encías para no terminar llegando de urgencia.',
    tag: 'Agenda',
  },
]

const GALLERY = [
  {
    src: `${IMG}/box.webp`,
    alt: 'Box de atención de Clínica Dental Bilbao con sillón dental y luz natural',
    cap: 'El box del piso 7',
  },
  {
    src: `${IMG}/recepcion.webp`,
    alt: 'Recepción de la clínica con mesón blanco y logo sobre vidrio esmerilado',
    cap: 'Recepción, oficina 718',
  },
  {
    src: `${IMG}/pasillo.webp`,
    alt: 'Pasillo interior de la clínica hacia los box de atención',
    cap: 'Pasillo a los box',
  },
]

const REVIEWS = [
  {
    text: 'Llegué por una emergencia dental con mi hija Constanza. El Dr. Mauricio es odontólogo urgenciólogo: muy buena atención, empático y acogedor. Muy recomendado.',
    author: 'Maritza Cabeza',
    when: 'Reseña de Google',
  },
  {
    text: 'Excelente consulta. Como dentista, un 10 de 10.',
    author: 'Chrisz Schüller',
    when: 'Reseña de Google',
  },
  {
    text: 'Excelente doctor, solucionando mi urgencia. Su atención es muy humana.',
    author: 'Cristel Cáceres',
    when: 'Reseña de Google',
  },
]

const waBtn =
  'inline-flex items-center justify-center gap-2 font-semibold text-sm px-6 py-3 rounded-full transition-all active:scale-95 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2'

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: light ? '#9FC4CF' : C.slate }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ClinicaDentalBilbaoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Pedir hora"
        theme={{
          over: 'light',
          bar: 'rgba(244,246,244,0.94)',
          ink: C.slate,
          line: C.line,
          btnBg: C.slate,
          btnInk: '#F4F6F4',
        }}
      />

      {/* ── Hero editorial: texto + composición de fotos ── */}
      <section id="inicio" className="scroll-mt-20 pt-[72px] md:pt-[80px] border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Dentista · Centro de Curicó · 24 horas</Eyebrow>
            <h1
              className={`${display.className} leading-[1.04] text-[clamp(2.5rem,6.8vw,4.6rem)] mb-6`}
              style={{ color: C.slate }}
            >
              Cuando la muela duele de noche,{' '}
              <span className="italic" style={{ color: C.accent }}>estamos abiertos</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Clínica dental en Manuel Montt 357, oficina 718, en pleno
              centro de Curicó. Urgencias las 24 horas, agenda por
              WhatsApp y trato de consulta de barrio.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_URGENCIA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} text-white hover:brightness-110`}
                style={{ backgroundColor: C.accent, outlineColor: C.accent }}
              >
                Urgencia: escribir ahora
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border hover:bg-[#1E4656] hover:text-[#F4F6F4]`}
                style={{ borderColor: 'rgba(30,70,86,0.45)', color: C.slate, outlineColor: C.slate }}
              >
                Agendar una hora
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold tap-44 focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ color: C.slate, outlineColor: C.slate }}
            >
              <Stars value={5} color={C.accent} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </a>
          </Reveal>

          {/* Composición fotográfica: box + letrero + flyer */}
          <Reveal delay={140}>
            <div className="relative">
              <div className="relative aspect-[4/5] max-w-[420px] mx-auto rounded-2xl overflow-hidden shadow-[0_30px_70px_-30px_rgba(14,43,54,0.45)]">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Box dental de Clínica Dental Bilbao con sillón azul y ventanal con vista a Curicó"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover"
                  priority
                />
              </div>
              <figure
                className="absolute -bottom-6 -left-2 md:-left-8 w-36 md:w-44 rounded-xl overflow-hidden rotate-[-3deg] shadow-[0_18px_40px_-18px_rgba(14,43,54,0.5)] border-4"
                style={{ borderColor: C.card }}
              >
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero de vidrio esmerilado con el logo de Clínica Dental Bilbao"
                  width={360}
                  height={360}
                  className="w-full aspect-square object-cover"
                />
              </figure>
              <div
                className={`${mono.className} absolute -top-3 -right-1 md:-right-6 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.18em] font-semibold shadow-lg`}
                style={{ backgroundColor: C.deep, color: '#F4F6F4' }}
              >
                Abierto ahora · 24 hrs
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de urgencia ── */}
      <section id="urgencias" className="scroll-mt-20" style={{ backgroundColor: C.accent }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-3 font-semibold`} style={{ color: C.accentInk }}>
              Urgencias dentales
            </p>
            <h2 className={`${display.className} text-3xl md:text-[2.6rem] leading-[1.08] text-white mb-5`}>
              Dolor de madrugada, domingo o feriado: escribe y te atendemos.
            </h2>
            <ol className="space-y-2.5 mb-7">
              {[
                'Escribes por WhatsApp y cuentas qué pasó',
                'Te damos indicaciones y cómo llegar al piso 7',
                'Vemos primero el dolor, después el tratamiento',
              ].map((s, i) => (
                <li key={s} className="flex items-baseline gap-3 text-sm md:text-[15px] text-white/90">
                  <span className={`${mono.className} text-xs font-semibold shrink-0`} style={{ color: C.accentInk }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
            <a
              href={WA_LINK_URGENCIA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${waBtn} bg-white hover:bg-[#FCEFEA]`}
              style={{ color: C.accent, outlineColor: '#fff' }}
            >
              Escribir por urgencia · {BIZ.phoneDisplay}
            </a>
          </Reveal>
          <Reveal delay={140}>
            <figure className="max-w-sm mx-auto lg:ml-auto rounded-2xl overflow-hidden rotate-[1.5deg] shadow-[0_24px_60px_-24px_rgba(0,0,0,0.45)]">
              <Image
                src={`${IMG}/urgencia.webp`}
                alt="Aviso real de la clínica: urgencia dental las 24 horas en Curicó"
                width={560}
                height={560}
                className="w-full aspect-square object-cover"
              />
              <figcaption className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-[0.16em] bg-white`} style={{ color: C.muted }}>
                Aviso real de la clínica
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios: foto anclada + lista numerada ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios · muestra</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.slate }}>
              De la urgencia al control
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Lista de ejemplo: al publicar van las prestaciones y
              valores reales de la clínica.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
          <Reveal delay={80}>
            <figure className="rounded-2xl overflow-hidden lg:sticky lg:top-24">
              <Image
                src={`${IMG}/atencion.webp`}
                alt="Dentista de Clínica Dental Bilbao atendiendo a una paciente niña en el box"
                width={900}
                height={900}
                className="w-full aspect-[4/5] object-cover"
              />
              <figcaption className={`${mono.className} flex items-center justify-between gap-4 px-5 py-3.5 text-[11px] uppercase tracking-[0.16em] bg-white border-t`} style={{ borderColor: C.line, color: C.muted }}>
                <span>Atención real en el box</span>
                <span style={{ color: C.accent }}>Montt 357</span>
              </figcaption>
            </figure>
          </Reveal>
          <ul>
            {SERVICES.map((s, i) => (
              <li key={s.n}>
                <Reveal delay={i * 80}>
                  <div className="grid grid-cols-[3rem_1fr] gap-x-5 py-6 md:py-7 border-t first:border-t-0" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-sm font-semibold pt-1`} style={{ color: C.accent }}>
                      {s.n}
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
                        <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.slate }}>
                          {s.name}
                        </h3>
                        <span
                          className={`${mono.className} text-[10px] uppercase tracking-[0.16em] font-semibold px-2 py-1 rounded-full border`}
                          style={s.tag === '24/7' ? { borderColor: C.accent, color: C.accent } : { borderColor: C.line, color: C.muted }}
                        >
                          {s.tag}
                        </span>
                      </div>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Galería del consultorio ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <Eyebrow>El consultorio</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.08] mb-10`} style={{ color: C.slate }}>
              Un piso sobre el centro de Curicó
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {GALLERY.map((g, i) => (
              <Reveal key={g.src} delay={i * 90}>
                <figure className="group">
                  <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                    <Image
                      src={g.src}
                      alt={g.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {g.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales de Google ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Reseñas de Google</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.slate }}>
              {BIZ.rating} estrellas, {BIZ.reviews} reseñas
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-4"
              style={{ color: C.accent, textDecorationColor: 'rgba(184,67,46,0.4)', outlineColor: C.accent }}
            >
              Ver la ficha en Google Maps →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 100}>
              <figure className="h-full flex flex-col rounded-2xl border p-6" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <Stars value={5} color={C.accent} className="w-3.5 h-3.5 mb-4" />
                <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {r.author} · {r.when}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto / ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F4F6F4' }}>
              {BIZ.building}, piso 7
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: 'rgba(244,246,244,0.72)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl className="border rounded-2xl overflow-hidden text-sm mb-8" style={{ borderColor: C.lineLight }}>
              {[
                { k: 'Horario', v: BIZ.hours },
                { k: 'WhatsApp', v: BIZ.phoneDisplay },
                { k: 'Urgencias', v: 'Atención inmediata 24/7' },
                { k: 'Instagram', v: `@${BIZ.instagram}` },
              ].map((r) => (
                <div key={r.k} className="flex items-baseline justify-between gap-4 px-5 py-3.5 border-b last:border-b-0" style={{ borderColor: C.lineLight }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold shrink-0`} style={{ color: 'rgba(244,246,244,0.55)' }}>
                    {r.k}
                  </dt>
                  <dd className="text-right font-medium" style={{ color: '#F4F6F4' }}>
                    {r.v}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} text-white hover:brightness-110`}
                style={{ backgroundColor: C.accent, outlineColor: '#fff' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${waBtn} border hover:bg-white/10`}
                style={{ borderColor: 'rgba(244,246,244,0.35)', color: '#F4F6F4', outlineColor: '#fff' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.lineLight }}>
              <LazyMap
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

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0A212B', color: '#F4F6F4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
          <div>
            <p className={`${display.className} text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,246,244,0.72)' }}>
              {BIZ.address} · {BIZ.city}
            </address>
          </div>
          <div className="flex items-center gap-5 text-sm" style={{ color: 'rgba(244,246,244,0.72)' }}>
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
              Google Maps
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,246,244,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,246,244,0.68)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F4F6F4' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: fotos y reseñas reales de su ficha de Google; servicios y precios de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#9FC4CF' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK_URGENCIA} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
