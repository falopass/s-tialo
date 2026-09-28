import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_URGENCIA,
  MAPS_URL,
  MAPS_EMBED,
  FACEBOOK_URL,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F4F2E8',
  card: '#FFFFFF',
  ink: '#12271F',
  muted: '#56685F',
  pine: '#145843',
  pineDeep: '#0B3128',
  mint: '#9FE3B4',
  amber: '#E8A33D',
  line: 'rgba(18,39,31,0.15)',
  lineLight: 'rgba(244,242,232,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'integravet',
  title: 'Clínica Veterinaria Integravet — Atención 24 horas en Talca',
  description:
    'Veterinaria en 32 Sur 787, Villa Pucará, Talca. Consultas, cirugías, esterilización y urgencias las 24 horas, todos los días. Agenda por WhatsApp.',
  image: '/demos/integravet/hero.webp',
})

const NAV_LINKS = [
  { label: 'Urgencias 24 h', href: '#urgencias' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/gato.webp`,
    alt: 'Gato paciente de Integravet descansando durante su revisión',
    tag: 'diagnóstico',
    name: 'Consulta general',
    desc: 'Evaluación completa de perros y gatos: revisión, diagnóstico y plan de tratamiento explicado sin tecnicismos.',
  },
  {
    src: `${IMG}/letrero.webp`,
    alt: 'Letrero de la puerta de Integravet con el aviso de urgencias y atención nocturna',
    tag: '24 horas',
    name: 'Urgencias y atención nocturna',
    desc: 'La clínica no cierra: urgencias de noche, fines de semana y festivos. Ese es el letrero real de su puerta.',
  },
  {
    src: `${IMG}/paciente.webp`,
    alt: 'Perrita recuperándose en casa con la pata vendada tras su atención',
    tag: 'pabellón',
    name: 'Cirugías y esterilización',
    desc: 'Esterilización de caninos y felinos y cirugías programadas, con indicaciones claras para la recuperación en casa.',
  },
  {
    src: `${IMG}/cachorro.webp`,
    alt: 'Cachorro golden retriever tranquilo en su asiento del auto',
    tag: 'tienda',
    name: 'Artículos para mascotas',
    desc: 'Alimento y accesorios en el mismo local: sales de la consulta con todo lo que tu mascota necesita.',
  },
]

const PASOS = [
  {
    title: 'Escríbenos o llega directo',
    desc: 'Por WhatsApp o a la puerta: en una urgencia no hace falta hora, la clínica está abierta siempre.',
  },
  {
    title: 'Evaluación inmediata',
    desc: 'Revisamos a tu mascota y te contamos qué pasa en simple, con opciones y costos antes de proceder.',
  },
  {
    title: 'Tratamiento y cirugía',
    desc: 'Consulta, procedimiento o cirugía en el día, con pabellón y hospitalización si hace falta.',
  },
  {
    title: 'Alta con indicaciones',
    desc: 'Te vas con las instrucciones de cuidado por escrito y el canal de WhatsApp abierto para dudas.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Excelente atención a mi perrita para su esterilización. La llevé preocupado ya que ella es muy tímida y asustadiza, pero tuvieron muy buen trato con ella y la operación salió muy bien.',
    author: 'Andrés Remolcoy',
    when: 'Hace 4 meses',
  },
  {
    text: 'Muy buena la atención. Valió la pena, ya que nos explicaron todo; hasta hay una máquina para hacer café cuando hay que esperar mucho.',
    author: 'Constanza Zúñiga Ormeño',
    when: 'Hace 2 meses',
  },
]

const HORAS = [
  { days: 'Lunes a domingo', time: 'Abierto las 24 horas' },
  { days: 'Urgencias', time: 'Todos los días, toda la noche' },
]

/** Cruz veterinaria con huella: el motivo gráfico del demo */
function VetCross({ className = 'w-4 h-4', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9.2 3h5.6v6.2H21v5.6h-6.2V21H9.2v-6.2H3V9.2h6.2Z" />
      <circle cx="12" cy="12" r="0.4" fill={stroke} stroke="none" />
    </svg>
  )
}

/** Huella de mascota, acompaña la cruz */
function Paw({ className = 'w-4 h-4', fill = 'currentColor' }: { className?: string; fill?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={fill} aria-hidden="true">
      <ellipse cx="12" cy="15.8" rx="4.4" ry="3.5" />
      <circle cx="6.3" cy="9.7" r="1.75" />
      <circle cx="12" cy="7.6" r="1.75" />
      <circle cx="17.7" cy="9.7" r="1.75" />
    </svg>
  )
}

function Label({ children, light = false, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-extrabold flex items-center gap-2.5 ${className}`}
      style={{ color: light ? C.mint : C.pine }}
    >
      <VetCross className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

function BtnWA({ href, children, ghost = false, center = false }: { href: string; children: React.ReactNode; ghost?: boolean; center?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-block font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44 ${center ? 'text-center' : ''}`}
      style={
        ghost
          ? { border: `2px solid rgba(244,242,232,0.55)`, color: C.paper }
          : { backgroundColor: C.mint, color: C.pineDeep }
      }
    >
      {children}
    </a>
  )
}

export default function IntegravetPage() {
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
        theme={{
          over: 'dark',
          bar: 'rgba(11,49,40,0.94)',
          ink: '#F4F2E8',
          line: 'rgba(244,242,232,0.16)',
          btnBg: C.mint,
          btnInk: C.pineDeep,
        }}
      />

      {/* ── Hero a sangre: la fachada real de la clínica ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.pineDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Fachada de Clínica Veterinaria Integravet en 32 Sur, Talca, con su letrero verde"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,49,40,0.68) 0%, rgba(11,49,40,0.42) 40%, rgba(11,49,40,0.94) 100%)',
          }}
        />
        {/* sello: abierto 24 h */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <span
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: 'rgba(244,242,232,0.96)', color: C.pineDeep }}
            >
              <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#1FA35C' }} aria-hidden="true" />
              Abierto ahora · 24 horas
            </span>
          </Reveal>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Label light className="mb-5">Clínica veterinaria · Villa Pucará, Talca</Label>
            <h1
              className={`${display.className} font-extrabold leading-[1.04] tracking-[-0.01em] text-[clamp(2.5rem,8.5vw,5.2rem)] mb-6`}
              style={{ color: C.paper }}
            >
              Cuando tu mascota
              <br />
              te necesita, <span style={{ color: C.mint }}>estamos abiertos.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,242,232,0.88)' }}>
              Clínica veterinaria en 32 Sur 787, Talca: consultas, cirugías,
              esterilización y urgencias las 24 horas, todos los días del año.
            </p>
            <div className="flex flex-wrap gap-3 mb-10 md:mb-12">
              <BtnWA href={WA_LINK_URGENCIA}>Tengo una urgencia</BtnWA>
              <BtnWA href={WA_LINK} ghost>Agendar consulta</BtnWA>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t pt-5" style={{ borderColor: C.lineLight }}>
              {[
                { k: 'Horario', v: '24 h · todos los días' },
                { k: 'Reputación', v: `${BIZ.ratingLabel} ★ · ${BIZ.reviewsLabel} reseñas` },
                { k: 'Dirección', v: '32 Sur 787, Talca' },
                { k: 'Contacto', v: BIZ.phoneDisplay },
              ].map((s) => (
                <div key={s.k}>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: 'rgba(244,242,232,0.66)' }}>{s.k}</p>
                  <p className="text-sm font-bold" style={{ color: C.paper }}>{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Urgencias 24 h ── */}
      <section id="urgencias" className="scroll-mt-20" style={{ backgroundColor: C.pineDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <Label light className="mb-5">La que nunca cierra</Label>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1.02] mb-6`} style={{ color: C.paper }}>
              De noche, domingo
              <br />
              o feriado: <span style={{ color: C.mint }}>24 / 7</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(244,242,232,0.85)' }}>
              Según su ficha de Google, Integravet atiende las 24 horas todos
              los días — la clínica con más reseñas de Talca. Si tu mascota
              empeora a las 3 de la mañana, hay alguien del otro lado.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Urgencias sin hora previa, también de madrugada',
                'Fines de semana y festivos con atención normal',
                'Hospitalización y observación cuando el caso lo pide',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.paper }}>
                  <Paw className="w-4 h-4 shrink-0" fill={C.mint} />
                  {item}
                </li>
              ))}
            </ul>
            <BtnWA href={WA_LINK_URGENCIA}>Escribir por una urgencia</BtnWA>
          </Reveal>
          <Reveal delay={140}>
            <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.lineLight }}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero real de Integravet: urgencias, atención nocturna y teléfono"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-3.5 text-[11px] uppercase tracking-[0.16em] font-bold" style={{ backgroundColor: 'rgba(244,242,232,0.06)', color: 'rgba(244,242,232,0.75)' }}>
                El aviso real en la puerta de la clínica
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Label className="mb-4">Servicios</Label>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Todo lo que tu mascota
              <br />
              <span style={{ color: C.pine }}>puede necesitar</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Servicios según su página oficial de Facebook: consultas,
              cirugías, urgencias y artículos de mascotas, en el mismo local.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICIOS.map((s) => (
            <Reveal key={s.name}>
              <li
                className="group rounded-2xl overflow-hidden border h-full"
                style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 6px rgba(18,39,31,0.06)' }}
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img
                    src={s.src}
                    alt={s.alt}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full shadow-sm`}
                    style={{ backgroundColor: 'rgba(11,49,40,0.92)', color: C.mint }}
                  >
                    {s.tag}
                  </span>
                </div>
                <div className="p-5 md:p-7">
                  <h3 className={`${display.className} font-extrabold text-xl md:text-2xl mb-2`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Cómo te atienden ── */}
      <section style={{ backgroundColor: C.pine }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light className="mb-4">Cómo te atienden</Label>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.paper }}>
                De la puerta al alta,
                <br />
                <span style={{ color: C.mint }}>sin letra chica</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(244,242,232,0.85)' }}>
                Así funciona una atención en Integravet, de la consulta
                programada a la urgencia de madrugada.
              </p>
            </div>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li
                  className="rounded-2xl border p-6 h-full"
                  style={{ borderColor: 'rgba(244,242,232,0.2)', backgroundColor: 'rgba(11,49,40,0.45)' }}
                >
                  <span className={`${display.className} block font-extrabold text-4xl mb-4`} style={{ color: i === 0 ? C.mint : 'rgba(244,242,232,0.6)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-extrabold text-lg mb-2`} style={{ color: C.paper }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(244,242,232,0.85)' }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Label className="mb-4">Reseñas</Label>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              La veterinaria más comentada de Talca
            </h2>
            <div className="flex items-center gap-3 mb-4">
              <Stars value={BIZ.rating} color={C.amber} />
              <span className={`${display.className} font-bold text-lg`} style={{ color: C.ink }}>{BIZ.ratingLabel}</span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} acumula {BIZ.reviewsLabel} reseñas en su ficha de
              Google. Estos son textos reales publicados por clientes.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.pine, textDecorationColor: 'rgba(20,88,67,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={120 + i * 110}>
                <figure className="rounded-2xl p-6 md:p-7 border" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span>
                      <span className="block text-sm font-bold" style={{ color: C.ink }}>{t.author}</span>
                      <span className="block text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: C.muted }}>
                        {t.when} · Reseña de Google
                      </span>
                    </span>
                    <Paw className="w-5 h-5 shrink-0" fill={C.pine} />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#E9E5D4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Label className="mb-4">Ubicación y horario</Label>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              32 Sur 787,
              <br />
              <span style={{ color: C.pine }}>Villa Pucará</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(18,39,31,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.pine} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.pine, color: C.paper }}
              >
                Cómo llegar →
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(18,39,31,0.35)', color: C.ink }}
              >
                Facebook
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pineDeep }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Paw className="w-8 h-8 mx-auto mb-6" fill={C.mint} />
            <h2 className={`${display.className} font-extrabold text-[clamp(2rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: C.paper }}>
              A cualquier hora,
              <br />
              <span style={{ color: C.mint }}>tu mascota primero</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(244,242,232,0.88)' }}>
              Consulta, control o urgencia: escríbenos por WhatsApp o
              llega directo a 32 Sur 787. Siempre hay alguien.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <BtnWA href={WA_LINK_URGENCIA}>Urgencia ahora</BtnWA>
              <BtnWA href={WA_LINK} ghost>Agendar consulta</BtnWA>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.pineDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5 border-t" style={{ borderColor: C.lineLight }}>
          <div>
            <p className={`${display.className} font-extrabold text-xl mb-1.5 flex items-center gap-3`}>
              <VetCross className="w-5 h-5" stroke={C.mint} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,242,232,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,242,232,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,242,232,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2 md:py-3 text-xs leading-relaxed" style={{ color: 'rgba(244,242,232,0.72)' }}>
            Datos, horario 24 h y reseñas según la ficha pública de Google
            Maps y su Facebook oficial; confirmar detalles al publicar.
          </p>
        </div>
        <div className="px-5 pt-1 pb-3 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
