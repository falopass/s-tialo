import type { Metadata } from 'next'
import Image from 'next/image'
import { Bitter, Rubik } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import {
  BIZ,
  WA_LINK,
  waArea,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
} from './content'

const display = Bitter({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  style: ['normal', 'italic'],
})
const body = Rubik({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
})

const C = {
  pizarra: '#2F4858',
  pizarraDeep: '#1F323E',
  lapiz: '#F2B705',
  lapizSoft: '#FCEFC2',
  white: '#FFFFFF',
  paper: '#F4F5F6',
  gris: '#5E6B73',
  grisLine: 'rgba(47,72,88,0.16)',
  ink: '#16232B',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = {
  title: 'Defensa Molina Abogados — Abogado en Molina',
  description:
    'Estudio de abogados en Luis Cruz Martínez 1471, Molina. Te explicamos tu caso con palabras simples y te acompañamos en cada paso. Consulta por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Áreas', href: '#areas' },
  { label: 'El estudio', href: '#estudio' },
  { label: 'Valores', href: '#valores' },
  { label: 'Contacto', href: '#contacto' },
]

const AREAS = [
  {
    n: '01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Código abierto con marcadores junto a una balanza y apuntes a lápiz sobre el escritorio',
    title: 'Familia',
    lead: 'Pensión de alimentos, cuidado personal y relación directa y regular.',
    learn: 'Antes de ir a tribunales conviene saber qué documentos juntar y qué etapas vienen. Eso lo vemos en la primera conversación.',
    wa: 'un tema de familia',
  },
  {
    n: '02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Escritorio con computador, carpeta de documentos y taza de café frente a una ventana',
    title: 'Laboral',
    lead: 'Despidos, finiquitos, cotizaciones impagas y autodespido.',
    learn: 'Los plazos para reclamar son cortos. Te decimos cuánto tiempo tienes y qué papeles guardar desde hoy.',
    wa: 'un tema laboral',
  },
  {
    n: '03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Sala de reuniones con mesa de madera, sillas y carpetas, con vista a la ciudad',
    title: 'Defensa y civil',
    lead: 'Defensa en causas, contratos, cobranzas y posesiones efectivas.',
    learn: 'Te contamos en qué va tu causa sin tecnicismos, para que siempre sepas qué sigue y por qué.',
    wa: 'una defensa o un tema civil',
  },
]

const PASOS = [
  { t: 'Nos cuentas', d: 'Por WhatsApp o en la oficina. Sin formularios eternos.' },
  { t: 'Te explicamos', d: 'Qué dice la ley en tu caso, con palabras simples.' },
  { t: 'Decides', d: 'Con opciones claras y el costo sobre la mesa.' },
  { t: 'Te acompañamos', d: 'Te avisamos cada avance, sin que tengas que perseguirnos.' },
]

const VALORES = [
  { item: 'Primera orientación', nota: 'Revisamos tu caso y opciones', precio: '$25.000' },
  { item: 'Redacción de contrato o escrito simple', nota: 'Arriendo, compraventa, poder', precio: 'desde $60.000' },
  { item: 'Posesión efectiva', nota: 'Trámite completo', precio: 'desde $180.000' },
  { item: 'Causa de familia o laboral', nota: 'Según complejidad; opción de cuotas', precio: 'a evaluar' },
]

const GLOSARIO = [
  { t: 'Finiquito', d: 'Documento que cierra la relación laboral. Puedes firmarlo con reserva de derechos.' },
  { t: 'Posesión efectiva', d: 'Trámite para que los herederos puedan disponer de los bienes de quien falleció.' },
  { t: 'Relación directa y regular', d: 'Lo que antes se llamaba "visitas": el vínculo del hijo con el padre o madre con quien no vive.' },
]

function Pencil({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20l1.2-4.4L16.5 4.3a2 2 0 0 1 2.8 0l.4.4a2 2 0 0 1 0 2.8L8.4 18.8 4 20z" />
      <path d="M14.5 6.3l3.2 3.2" />
    </svg>
  )
}

function Mark({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="px-1 -mx-1"
      style={{
        backgroundImage: `linear-gradient(transparent 58%, ${C.lapiz} 58%, ${C.lapiz} 90%, transparent 90%)`,
      }}
    >
      {children}
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em]"
      style={{ color: light ? C.lapiz : C.gris }}
    >
      <Pencil className="w-4 h-4" />
      {children}
    </p>
  )
}

function WaButton({ href, children, full = false }: { href: string; children: React.ReactNode; full?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${focusRing} ${full ? 'w-full' : ''} inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-md font-semibold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0`}
      style={{ backgroundColor: C.lapiz, color: C.ink, outlineColor: C.lapiz }}
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

function Sidebar() {
  return (
    <div className="rounded-lg overflow-hidden shadow-[0_18px_40px_-24px_rgba(22,35,43,0.55)]" style={{ backgroundColor: C.white, border: `1px solid ${C.grisLine}` }}>
      <div className="px-6 pt-6 pb-5" style={{ backgroundColor: C.pizarra, color: C.white }}>
        <p className={`${display.className} text-[22px] font-bold leading-tight`}>¿Tienes una duda legal?</p>
        <p className="mt-2 text-[14px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
          Escríbenos y te respondemos qué se puede hacer. Sin compromiso.
        </p>
        <div className="mt-5">
          <WaButton href={WA_LINK} full>
            Escribir por WhatsApp
          </WaButton>
        </div>
        <a
          href={`tel:${BIZ.phoneTel}`}
          className={`${focusRing} mt-3 block text-center text-[14px] underline underline-offset-4`}
          style={{ color: C.white, outlineColor: C.lapiz }}
        >
          o llama al {BIZ.phoneDisplay}
        </a>
      </div>

      <div className="px-6 py-5" style={{ borderBottom: `1px solid ${C.grisLine}` }}>
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.gris }}>
          Horario <span className="normal-case tracking-normal font-normal">(muestra)</span>
        </p>
        <dl className="mt-3 space-y-2 text-[14px]">
          {HORARIO.map((h) => (
            <div key={h.dia} className="flex justify-between gap-4">
              <dt style={{ color: C.gris }}>{h.dia}</dt>
              <dd className="font-medium text-right" style={{ color: C.ink }}>{h.hora}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="px-6 py-5">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.gris }}>
          Dirección
        </p>
        <p className="mt-2 text-[15px] leading-snug font-medium" style={{ color: C.ink }}>
          {BIZ.address}
          <br />
          {BIZ.postal} {BIZ.city}, Maule
        </p>
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${focusRing} mt-3 inline-flex min-h-[44px] items-center text-[14px] font-semibold underline underline-offset-4`}
          style={{ color: C.pizarra, outlineColor: C.pizarra }}
        >
          Cómo llegar
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`${focusRing} mt-1 flex min-h-[44px] items-center gap-2 text-[14px]`}
          style={{ color: C.gris, outlineColor: C.pizarra }}
        >
          @{BIZ.instagram} · {BIZ.instagramFollowers} seguidores
        </a>
      </div>
    </div>
  )
}

export default function DefensaMolinaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(31,50,62,0.95)',
          ink: C.white,
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.lapiz,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero a sangre ── */}
      <header className="relative min-h-[88svh] flex items-end overflow-hidden" style={{ backgroundColor: C.pizarraDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Escritorio de madera con libros de derecho, lámpara encendida y ventana con vista a la ciudad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, rgba(31,50,62,0.5) 0%, rgba(31,50,62,0.7) 45%, ${C.pizarraDeep} 100%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-32">
          <Reveal>
            <Eyebrow light>Abogados en {BIZ.city}, {BIZ.region}</Eyebrow>
            <h1 className={`${display.className} mt-4 max-w-3xl text-[40px] leading-[1.05] md:text-[68px] font-extrabold`} style={{ color: C.white }}>
              Entender tu caso es el{' '}
              <span className="italic" style={{ color: C.lapiz }}>primer paso</span>{' '}
              para defenderlo.
            </h1>
            <p className="mt-5 max-w-xl text-[17px] md:text-[19px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.86)' }}>
              En {BIZ.short} te explicamos qué dice la ley, qué opciones tienes y qué viene
              después. Con palabras simples, aquí mismo en {BIZ.city}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton href={WA_LINK}>Cuéntanos tu caso</WaButton>
              <a
                href="#areas"
                className={`${focusRing} inline-flex min-h-[48px] items-center px-2 text-[15px] font-medium underline underline-offset-4`}
                style={{ color: C.white, outlineColor: C.lapiz }}
              >
                Ver en qué te ayudamos
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Doble columna: contenido + sidebar pegajoso ── */}
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid gap-12 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-14">
        <main className="min-w-0 space-y-20 md:space-y-24">
          {/* Áreas */}
          <section id="areas" className="scroll-mt-24">
            <Eyebrow>Áreas de trabajo · muestra</Eyebrow>
            <h2 className={`${display.className} mt-3 text-[32px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.pizarra }}>
              Tres temas que <Mark>explicamos a diario</Mark>
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed" style={{ color: C.gris }}>
              Cada ficha trae una nota breve para que llegues a la consulta sabiendo lo básico.
              Al publicar, van las áreas reales del estudio.
            </p>

            <div className="mt-10 space-y-8">
              {AREAS.map((a, i) => (
                <Reveal key={a.n} delay={i * 80}>
                  <article className="grid md:grid-cols-[240px_minmax(0,1fr)] rounded-lg overflow-hidden" style={{ backgroundColor: C.white, border: `1px solid ${C.grisLine}` }}>
                    <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[240px]">
                      <Image src={a.src} alt={a.alt} fill sizes="(min-width: 768px) 240px, 100vw" className="object-cover" />
                      <span
                        className={`${display.className} absolute top-3 left-3 px-2.5 py-1 rounded text-[14px] font-bold`}
                        style={{ backgroundColor: C.lapiz, color: C.ink }}
                      >
                        {a.n}
                      </span>
                    </div>
                    <div className="p-6 md:p-7 flex flex-col">
                      <h3 className={`${display.className} text-[26px] font-bold`} style={{ color: C.pizarra }}>{a.title}</h3>
                      <p className="mt-2 text-[16px] leading-relaxed" style={{ color: C.ink }}>{a.lead}</p>
                      <div className="mt-4 pl-4 text-[14px] leading-relaxed" style={{ borderLeft: `3px solid ${C.lapiz}`, color: C.gris }}>
                        <span className="font-semibold" style={{ color: C.pizarra }}>Para saber: </span>
                        {a.learn}
                      </div>
                      <a
                        href={waArea(a.wa)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${focusRing} mt-5 self-start inline-flex min-h-[44px] items-center gap-2 text-[15px] font-semibold underline underline-offset-4`}
                        style={{ color: C.pizarra, outlineColor: C.pizarra }}
                      >
                        Consultar por {a.title.toLowerCase()} →
                      </a>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Sobre el estudio */}
          <section id="estudio" className="scroll-mt-24">
            <Eyebrow>El estudio</Eyebrow>
            <h2 className={`${display.className} mt-3 text-[32px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.pizarra }}>
              Un abogado que <Mark>te enseña</Mark> lo que está pasando
            </h2>
            <div className="mt-8 relative aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={`${IMG}/ambiente.webp`}
                alt="Calle arbolada de casas de fachada continua con la cordillera al fondo"
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className="object-cover"
              />
              <p className="absolute bottom-3 left-3 px-3 py-1.5 rounded text-[13px] font-medium" style={{ backgroundColor: 'rgba(31,50,62,0.88)', color: C.white }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="mt-8 grid md:grid-cols-2 gap-6 text-[16px] leading-relaxed">
              <p>
                Estamos en {BIZ.city}, a pasos de tu casa o tu trabajo. Atendemos directo: hablas
                con quien lleva tu causa, no con un intermediario.
              </p>
              <p style={{ color: C.gris }}>
                Creemos que un cliente informado decide mejor. Por eso cada reunión termina con
                lo que sigue anotado, y en Instagram compartimos cápsulas para que conozcas tus
                derechos.
              </p>
            </div>

            <h3 className={`${display.className} mt-12 text-[22px] font-bold`} style={{ color: C.pizarra }}>
              Cómo trabajamos contigo
            </h3>
            <ol className="mt-5 grid sm:grid-cols-2 gap-4">
              {PASOS.map((p, i) => (
                <li key={p.t} className="rounded-lg p-5" style={{ backgroundColor: C.white, border: `1px solid ${C.grisLine}` }}>
                  <span className={`${display.className} text-[30px] font-extrabold leading-none`} style={{ color: C.lapiz }}>
                    {i + 1}
                  </span>
                  <p className="mt-2 font-semibold text-[16px]" style={{ color: C.pizarra }}>{p.t}</p>
                  <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.gris }}>{p.d}</p>
                </li>
              ))}
            </ol>

            <div className="mt-12 rounded-lg p-6 md:p-8" style={{ backgroundColor: C.lapizSoft }}>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.pizarra }}>
                Mini glosario · lo que más nos preguntan
              </p>
              <dl className="mt-5 space-y-5">
                {GLOSARIO.map((g) => (
                  <div key={g.t}>
                    <dt className={`${display.className} text-[18px] font-bold`} style={{ color: C.pizarra }}>{g.t}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed" style={{ color: C.ink }}>{g.d}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-5 text-[13px]" style={{ color: C.gris }}>
                Información general; cada caso se revisa en particular.
              </p>
            </div>

            <p className="mt-10 text-[15px] leading-relaxed" style={{ color: C.gris }}>
              <span className="font-semibold" style={{ color: C.pizarra }}>Lo que valoran quienes nos consultan: </span>
              que les expliquemos claro y les respondamos rápido. Nuestra ficha de Google aún no
              tiene reseñas; al publicar el sitio, aquí van las opiniones reales de los clientes.
            </p>
          </section>

          {/* Valores de referencia */}
          <section id="valores" className="scroll-mt-24">
            <Eyebrow>Valores de referencia</Eyebrow>
            <h2 className={`${display.className} mt-3 text-[32px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.pizarra }}>
              Sabes el costo <Mark>antes de partir</Mark>
            </h2>
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed" style={{ color: C.gris }}>
              Los montos de esta tabla son <strong style={{ color: C.ink }}>de muestra</strong>: al
              publicar se reemplazan por los valores reales del estudio.
            </p>
            <div className="mt-8 rounded-lg overflow-hidden" style={{ backgroundColor: C.white, border: `1px solid ${C.grisLine}` }}>
              <div className="flex items-center justify-between px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ backgroundColor: C.pizarra, color: C.white }}>
                <span>Servicio</span>
                <span className="px-2 py-0.5 rounded" style={{ backgroundColor: C.lapiz, color: C.ink }}>Valores de muestra</span>
              </div>
              <ul>
                {VALORES.map((v, i) => (
                  <li
                    key={v.item}
                    className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 px-5 py-4"
                    style={{ borderTop: i ? `1px solid ${C.grisLine}` : undefined }}
                  >
                    <div>
                      <p className="font-medium text-[16px]" style={{ color: C.ink }}>{v.item}</p>
                      <p className="text-[13px]" style={{ color: C.gris }}>{v.nota}</p>
                    </div>
                    <p className={`${display.className} text-[20px] font-bold`} style={{ color: C.pizarra }}>{v.precio}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contacto */}
          <section id="contacto" className="scroll-mt-24">
            <div className="rounded-lg p-7 md:p-10" style={{ backgroundColor: C.pizarra, color: C.white }}>
              <Eyebrow light>Contacto</Eyebrow>
              <h2 className={`${display.className} mt-3 text-[30px] md:text-[42px] leading-[1.1] font-bold`}>
                Escríbenos hoy y <span className="italic" style={{ color: C.lapiz }}>sal de la duda</span>.
              </h2>
              <p className="mt-4 max-w-xl text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                Cuéntanos en pocas líneas qué pasó. Te respondemos por WhatsApp con los pasos a seguir.
              </p>
              <div className="mt-7">
                <WaButton href={WA_LINK}>WhatsApp {BIZ.phoneDisplay}</WaButton>
              </div>
            </div>
            <div className="mt-6 grid md:grid-cols-[minmax(0,1fr)_240px] gap-6 items-start">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden" style={{ border: `1px solid ${C.grisLine}` }}>
                <iframe
                  title={`Mapa de ${BIZ.name}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="text-[15px] leading-relaxed">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.gris }}>Oficina</p>
                <p className="mt-2 font-medium" style={{ color: C.ink }}>
                  {BIZ.address}
                  <br />
                  {BIZ.postal} {BIZ.city}, Maule
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} mt-2 inline-flex min-h-[44px] items-center font-semibold underline underline-offset-4`}
                  style={{ color: C.pizarra, outlineColor: C.pizarra }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </section>
        </main>

        <aside className="lg:sticky lg:top-24 lg:self-start order-first lg:order-none" aria-label="Horario, dirección y contacto">
          <Sidebar />
        </aside>
      </div>

      {/* ── Franja Sitiazo ── */}
      <footer style={{ backgroundColor: C.pizarraDeep, color: 'rgba(255,255,255,0.78)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[14px]">
          <p>
            <span className={`${display.className} font-bold text-[16px]`} style={{ color: C.white }}>{BIZ.name}</span>
            {' · '}
            {BIZ.address}, {BIZ.city}
          </p>
          <p className="max-w-md">
            <span className="font-semibold" style={{ color: C.lapiz }}>Sitio de ejemplo de Sitiazo.</span>{' '}
            Áreas, valores, horarios y textos son de muestra; nombre, dirección, WhatsApp e
            Instagram son del negocio.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-24 [&>div]:static [&>div]:max-w-full [&>div]:w-fit">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
