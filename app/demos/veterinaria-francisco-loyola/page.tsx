import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_URGENCIA, MAPS_URL, MAPS_EMBED, IMG, HORARIO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  cream: '#FAF6EF',
  creamSoft: '#F2EBDD',
  teal: '#14514E',
  tealDeep: '#0B3230',
  coral: '#D96C4F',
  coralInk: '#9C4529',
  ink: '#22302B',
  muted: '#5C665E',
  line: 'rgba(20,81,78,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'veterinaria-francisco-loyola',
  title: 'Veterinaria Francisco Loyola — Veterinario en Molina, 4,9★ en Google',
  description:
    'Veterinario en Libertad 1515, Molina: consultas, vacunas, castraciones y urgencias. 4,9★ con 81 reseñas en Google. Agenda por WhatsApp.',
  image: `${IMG}/veterinario-mesa.webp`,
})

const NAV_LINKS = [
  { label: 'Atención', href: '#atencion' },
  { label: 'Pacientes', href: '#pacientes' },
  { label: 'Horarios', href: '#horarios' },
]

const ATENCION = [
  { nombre: 'Consulta general', nota: 'Diagnóstico y plan de cuidados explicado con calma' },
  { nombre: 'Vacunas', nota: 'Primeras vacunas de cachorros y calendario de adultos' },
  { nombre: 'Castraciones', nota: 'Cirugías con seguimiento — «muy buena mano», dicen' },
  { nombre: 'Urgencias', nota: 'Atención de urgencia según horario — avisa por WhatsApp' },
]

const PACIENTES = [
  { src: 'perro-clinica', alt: 'Perro gris atendido dentro de la veterinaria', nombre: 'En consulta' },
  { src: 'beagle', alt: 'Beagle, paciente de la veterinaria, en el patio', nombre: 'Al aire libre' },
  { src: 'perro-blanco', alt: 'Perro blanco pequeño en la mesa de atención', nombre: 'En la mesa' },
  { src: 'paciente-fuera', alt: 'Perro esperando junto a su plato de comida', nombre: 'Hora de la comida' },
]

const RESENAS = [
  {
    nombre: 'Sandra Castillo',
    texto:
      'Fuimos por las primeras vacunas de nuestra gatita y perrita. Nos recibió muy amablemente, súper explicativo y paciente. ¡Lo recomendamos!',
  },
  {
    nombre: 'Veronica Jofre',
    texto:
      'Muy buen veterinario, él y su asistente nos atendieron muy bien. Castraron a mi gato y anda súper bien. Muy buena mano.',
  },
  {
    nombre: 'Esteban Aguilera',
    texto:
      'Excelente, buen trato con las mascotas, y enseña bien los cuidados de las mascotas en su recuperación.',
  },
]

function Huella({ className = 'w-5 h-5', color = C.teal }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <circle cx="5.5" cy="9" r="2" />
      <circle cx="9.5" cy="5" r="2" />
      <circle cx="14.5" cy="5" r="2" />
      <circle cx="18.5" cy="9" r="2" />
      <path d="M12 10.5c3 0 6 2.4 6 5.2 0 1.9-1.4 3.3-3.4 3.3-1 0-1.8-.5-2.6-.5s-1.6.5-2.6.5c-2 0-3.4-1.4-3.4-3.3 0-2.8 3-5.2 6-5.2z" />
    </svg>
  )
}

function TimbreFicha({ n, titulo }: { n: string; titulo: string }) {
  return (
    <div className="flex items-center gap-3 mb-8 md:mb-10">
      <span
        className={`${mono.className} text-[10px] md:text-xs tracking-[0.18em] uppercase px-3 py-2 rounded-full border-2`}
        style={{ borderColor: C.coral, color: C.coralInk }}
      >
        Ficha {n}
      </span>
      <h2 className={`${display.className} text-[clamp(1.7rem,5.5vw,3rem)] leading-none`} style={{ color: C.tealDeep }}>
        {titulo}
      </h2>
      <span className="h-px flex-1" style={{ backgroundColor: C.line }} aria-hidden="true" />
      <Huella className="w-5 h-5 shrink-0 hidden sm:block" color={C.coral} />
    </div>
  )
}

export default function Page() {
  return (
    <main className={body.className} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name={<span className={display.className}>Vet. Francisco Loyola</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={display.className}
        theme={{ over: 'light', bar: C.cream, ink: C.tealDeep, line: C.line, btnBg: C.teal, btnInk: '#FFFFFF' }}
      />

      {/* Portada: la mesa de atención */}
      <section id="inicio" className="pt-28 md:pt-36 pb-12 md:pb-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <Reveal className="md:col-span-6">
              <p
                className={`${mono.className} inline-flex items-center gap-2 text-[11px] md:text-xs tracking-[0.2em] uppercase`}
                style={{ color: C.coralInk }}
              >
                <Huella className="w-4 h-4" color={C.coral} />
                Veterinario · Molina
              </p>
              <h1
                className={`${display.className} text-[clamp(2.4rem,7.5vw,4.6rem)] leading-[1.02] mt-4`}
                style={{ color: C.tealDeep }}
              >
                Las mascotas de Molina tienen su veterinario
              </h1>
              <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Consultas, vacunas, castraciones y urgencias, con la paciencia que tus animales
                necesitan. {BIZ.rating}★ en Google con {BIZ.reviews} reseñas de dueños reales.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:items-center">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-full active:scale-95 transition-transform text-white"
                  style={{ backgroundColor: C.teal }}
                >
                  Agendar una hora
                </a>
                <a
                  href={WA_URGENCIA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-full active:scale-95 transition-transform"
                  style={{ border: `2px solid ${C.coral}`, color: C.coralInk }}
                >
                  Urgencia
                </a>
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-6">
              <figure
                className="relative rounded-2xl overflow-hidden"
                style={{ border: `1px solid ${C.line}`, boxShadow: '0 24px 50px -30px rgba(11,50,48,0.45)' }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/veterinario-mesa.webp`}
                    alt="El veterinario atendiendo a un paciente en la mesa de examen, bajo la lámpara"
                    fill
                    priority
                    sizes="(max-width: 768px) 90vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} flex justify-between items-center px-4 py-2.5 text-[10px] md:text-xs uppercase tracking-[0.12em]`}
                  style={{ backgroundColor: C.tealDeep, color: 'rgba(250,246,239,0.85)' }}
                >
                  <span>Sala de atención</span>
                  <span>Libertad 1515</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ficha 01: lo que atiende */}
      <section id="atencion" className="px-5 md:px-8 py-14 md:py-20 scroll-mt-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto">
          <TimbreFicha n="01" titulo="Lo que atiende" />
          <div className="grid md:grid-cols-2 gap-x-12">
            {ATENCION.map((a, i) => (
              <Reveal key={a.nombre} delay={i * 60}>
                <div
                  className="py-5 flex items-start gap-4"
                  style={{ borderBottom: `1px solid ${C.line}` }}
                >
                  <Huella className="w-5 h-5 mt-1 shrink-0" color={C.teal} />
                  <div>
                    <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.tealDeep }}>
                      {a.nombre}
                    </h3>
                    <p className="mt-1 text-sm md:text-base" style={{ color: C.muted }}>
                      {a.nota}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <p className="mt-6 text-xs md:text-sm" style={{ color: C.muted }}>
              Los servicios listados salen de las reseñas reales de sus clientes. Para derivaciones
              o procedimientos especiales, consulta directamente por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Ficha 02: pacientes */}
      <section id="pacientes" className="px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <TimbreFicha n="02" titulo="Pacientes de la casa" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {PACIENTES.map((p, i) => (
              <Reveal key={p.src} delay={i * 70}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.line}` }}>
                    <Image
                      src={`${IMG}/${p.src}.webp`}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 45vw, 22vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} mt-2 text-[10px] md:text-xs uppercase tracking-[0.12em]`}
                    style={{ color: C.coralInk }}
                  >
                    {p.nombre}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ficha 03: reseñas */}
      <section className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-8 md:mb-10">
            <span
              className={`${mono.className} text-[10px] md:text-xs tracking-[0.18em] uppercase px-3 py-2 rounded-full border-2`}
              style={{ borderColor: C.coral, color: '#F5C9B8' }}
            >
              Ficha 03
            </span>
            <h2 className={`${display.className} text-[clamp(1.7rem,5.5vw,3rem)] leading-none`} style={{ color: C.cream }}>
              Lo que dicen los dueños
            </h2>
            <span className="h-px flex-1" style={{ backgroundColor: 'rgba(250,246,239,0.2)' }} aria-hidden="true" />
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <blockquote
                  className="rounded-xl p-6 h-full"
                  style={{ backgroundColor: 'rgba(250,246,239,0.06)', border: '1px solid rgba(250,246,239,0.14)' }}
                >
                  <Stars value={5} color={C.coral} className="w-4 h-4" />
                  <p className="mt-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(250,246,239,0.92)' }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-4 text-[10px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: 'rgba(250,246,239,0.6)' }}>
                    — {r.nombre}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={280}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-8 inline-block text-xs md:text-sm underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: '#F5C9B8' }}
            >
              {BIZ.rating}★ · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* Ficha 04: horarios + cómo encontrarnos */}
      <section id="horarios" className="px-5 md:px-8 py-14 md:py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <TimbreFicha n="04" titulo="Horarios y cómo encontrarnos" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <Reveal>
                <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                  <p
                    className={`${mono.className} text-[10px] md:text-xs tracking-[0.18em] uppercase px-5 py-3`}
                    style={{ backgroundColor: C.teal, color: '#fff' }}
                  >
                    Horario de atención
                  </p>
                  <ul className="divide-y" style={{ borderColor: C.line }}>
                    {HORARIO.map((h) => (
                      <li key={h.dias} className="flex justify-between items-baseline gap-4 px-5 py-4" style={{ borderColor: C.line }}>
                        <span className="text-sm md:text-base font-semibold" style={{ color: C.tealDeep }}>
                          {h.dias}
                        </span>
                        <span className={`${mono.className} text-xs md:text-sm`} style={{ color: h.horas === 'Cerrado' ? C.coralInk : C.teal }}>
                          {h.horas}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-6 flex gap-5 items-start">
                  <figure className="relative w-28 md:w-36 aspect-[3/4] shrink-0 overflow-hidden rounded-xl" style={{ border: `1px solid ${C.line}` }}>
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Entrada de la veterinaria con el letrero azul y las huellas en el pilar"
                      fill
                      sizes="140px"
                      className="object-cover"
                    />
                  </figure>
                  <div>
                    <h3 className={`${display.className} text-xl md:text-2xl leading-tight`} style={{ color: C.tealDeep }}>
                      La puerta de las huellitas
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      Nos encuentras en {BIZ.address}, {BIZ.city}: letrero azul y un pilar
                      lleno de huellas. Teléfono {BIZ.phoneDisplay}.
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center px-6 py-3 text-base font-bold rounded-full active:scale-95 transition-transform text-white"
                      style={{ backgroundColor: C.teal }}
                    >
                      Escribir por WhatsApp
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="rounded-xl overflow-hidden h-[300px] md:h-full md:min-h-[420px]" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Mapa: Veterinaria Francisco Loyola, Libertad 1515, Molina"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Colofón */}
      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Huella className="w-6 h-6" color={C.coral} />
            <div>
              <p className={`${display.className} text-base leading-none`} style={{ color: C.cream }}>
                {BIZ.name}
              </p>
              <p className={`${mono.className} mt-1 text-[10px] tracking-[0.12em] uppercase`} style={{ color: 'rgba(250,246,239,0.6)' }}>
                Libertad 1515 · Molina · {BIZ.rating}★
              </p>
            </div>
          </div>
          <p className="text-[11px] leading-snug" style={{ color: 'rgba(250,246,239,0.6)' }}>
            Mockup de muestra realizado por Sitiazo — sitios web para pymes desde $79.990.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
