import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})

const C = {
  papel: '#F6F1E3',
  papelSoft: '#EDE5CF',
  tinta: '#22303E',
  tintaSoft: '#4A5568',
  muted: '#6B6353',
  verde: '#1D5B42',
  verdeDeep: '#14402F',
  line: 'rgba(34,48,62,0.18)',
  lineDark: 'rgba(246,241,227,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'planificador-tributario',
  title: 'Planificador Tributario — Contabilidad y asesoría tributaria en Talca',
  description:
    'Firma contable en Calle 1 Norte 841, centro de Talca. Planificación tributaria, auditorías externas, evaluación de proyectos y asesoría para pymes.',
  image: `${IMG}/condominio-841.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La oficina', href: '#oficina' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    cuenta: 'CT-01',
    nombre: 'Planificación tributaria',
    glosa: 'Ordenar las obligaciones de la empresa antes de que venzan: declaraciones, estructura y calendario.',
  },
  {
    cuenta: 'CT-02',
    nombre: 'Auditoría externa',
    glosa: 'Revisión de estados financieros y procesos para que los números resistan cualquier fiscalización.',
  },
  {
    cuenta: 'CT-03',
    nombre: 'Evaluación de proyectos',
    glosa: 'Antes de invertir: análisis de viabilidad y proyecciones con pies en el suelo.',
  },
  {
    cuenta: 'CT-04',
    nombre: 'Asesoría tributaria',
    glosa: 'Respuestas directas a las dudas de cada temporada: IVA, renta, boletas y todo lo que marea.',
  },
]

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{'html { scroll-behavior: auto }'}</style>
      <BlitzNav
        name={<span className={`${display.className} font-semibold`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(246,241,227,0.94)', ink: C.tinta, line: C.line, btnBg: C.verde, btnInk: C.papel }}
      />

      {/* ── Hero: carátula de ficha tributaria ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 31px, ${C.verdeDeep} 32px)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20">
          <Reveal>
            <div className={`${mono.className} flex flex-wrap items-center gap-x-5 gap-y-1 text-[10px] md:text-xs uppercase tracking-[0.2em] pb-4 border-b-2 mb-10 md:mb-14`} style={{ borderColor: C.tinta, color: C.tintaSoft }}>
              <span>{BIZ.legalName}</span>
              <span aria-hidden="true">·</span>
              <span>RUT {BIZ.rut}</span>
              <span aria-hidden="true">·</span>
              <span>{BIZ.city} — Maule</span>
              <span className="ml-auto hidden sm:inline" style={{ color: C.verde }}>Contador auditor</span>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <h1 className={`${display.className} text-[clamp(2.7rem,7.6vw,5rem)] leading-[1.04]`}>
                  Cuentas en regla,
                  <br />
                  <span className={displayItalic.className} style={{ color: C.verde }}>
                    en pleno centro de Talca
                  </span>
                </h1>
                <p className="mt-5 text-sm md:text-base max-w-md leading-relaxed" style={{ color: C.muted }}>
                  Firma contable con oficina en Calle 1 Norte 841, a pasos de la
                  Plaza de Armas: planificación tributaria, auditorías y evaluación
                  de proyectos para pymes y empresas del Maule.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22303E] tap-44`}
                    style={{ backgroundColor: C.verde, color: C.papel }}
                  >
                    <PhoneIcon />
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(34,48,62,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22303E] tap-44"
                    style={{ borderColor: 'rgba(34,48,62,0.4)', color: C.tinta }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={180} className="md:col-span-5">
              <figure
                className="relative bg-white p-2.5 pb-10 shadow-lg"
                style={{ transform: 'rotate(1.4deg)', border: `1px solid ${C.line}` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/condominio-841.webp`}
                    alt={`Condominio de oficinas de Calle 1 Norte 841 donde funciona ${BIZ.name}, Talca`}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} absolute bottom-2 left-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  El edificio del 841 · foto real
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios: líneas de libro mayor ── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-8 md:mb-12">
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08]`}>
              Los servicios
              <br />
              de la casa
            </h2>
            <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Así se vería su oferta en línea: cada línea se ajusta con la firma
              antes de publicar.
            </p>
          </div>
        </Reveal>
        <div className={`${mono.className} grid grid-cols-[64px_1fr] md:grid-cols-[90px_1fr_auto] gap-x-5 pb-3 text-[10px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: C.muted, borderBottom: `2px solid ${C.tinta}` }}>
          <span>Cuenta</span>
          <span>Servicio</span>
          <span className="hidden md:inline">Categoría</span>
        </div>
        <ul>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.cuenta} delay={i * 80}>
              <li
                className="grid grid-cols-[64px_1fr] md:grid-cols-[90px_1fr_auto] gap-x-5 py-6 items-start"
                style={{ borderBottom: `1px dashed ${C.line}` }}
              >
                <p className={`${mono.className} text-[11px] md:text-xs font-bold tracking-[0.16em] pt-1.5`} style={{ color: C.verde }}>
                  {s.cuenta}
                </p>
                <div>
                  <h3 className={`${display.className} text-[clamp(1.4rem,3vw,2rem)] leading-tight`}>
                    {s.nombre}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed max-w-lg" style={{ color: C.muted }}>
                    {s.glosa}
                  </p>
                </div>
                <p className={`${mono.className} hidden md:block text-[10px] uppercase tracking-[0.18em] pt-2`} style={{ color: C.tintaSoft }}>
                  tributario
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── La oficina: el centro en fotos ── */}
      <section id="oficina" className="border-y-2" style={{ borderColor: C.tinta, backgroundColor: C.verdeDeep, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color: 'rgba(246,241,227,0.55)' }}>
              La oficina
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] max-w-2xl mb-5`}>
              Un condominio de oficinas
              <br />
              <span className={displayItalic.className} style={{ color: '#A8C9A0' }}>a dos cuadras de la Plaza</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12" style={{ color: 'rgba(246,241,227,0.75)' }}>
              La oficina funciona en el interior del condominio del 841 de 1 Norte,
              con jardín y acceso peatonal: el barrio cívico del centro de Talca.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: 'entrada-841.webp', alt: `Entrada del condominio de Calle 1 Norte donde está la oficina de ${BIZ.name}`, cap: 'Entrada del 841' },
              { src: 'calle-1oriente.webp', alt: 'Calle arbolada del centro de Talca cerca de la oficina', cap: 'El barrio cívico' },
              { src: 'plaza-talca.webp', alt: 'Plaza de Armas de Talca vista aérea, a dos cuadras de la oficina', cap: 'La Plaza, a dos cuadras' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 100}>
                <figure className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.lineDark }}>
                  <Image src={`${IMG}/${p.src}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 33vw" className="object-cover" />
                  <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ backgroundColor: 'rgba(20,64,47,0.85)', color: C.papel }}>
                    {p.cap} · foto real
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-5 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(246,241,227,0.5)' }}>
              Fotos reales · Street View y su ficha de Google · centro de Talca
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Punto de partida: honestidad que vende ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="border-2 p-7 md:p-10" style={{ borderColor: C.tinta, backgroundColor: C.papelSoft }}>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.verde }}>
              El punto de partida
            </p>
            <h2 className={`${display.className} text-[clamp(1.6rem,3.8vw,2.5rem)] leading-[1.1] mb-4`}>
              La firma ordena números;
              <br />
              <span className={displayItalic.className} style={{ color: C.verde }}>su presencia, todavía no</span>
            </h2>
            <div className={`${mono.className} grid sm:grid-cols-2 gap-4 max-w-2xl text-xs md:text-sm`}>
              <p className="border-l-2 pl-4 leading-relaxed" style={{ borderColor: C.verde, color: C.tintaSoft }}>
                Ficha de Google: sin reseñas publicadas todavía.
              </p>
              <p className="border-l-2 pl-4 leading-relaxed" style={{ borderColor: C.verde, color: C.tintaSoft }}>
                Su sitio anterior ya no está en línea: esta página muestra cómo podría verse el nuevo.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.verde }}>
              Contacto
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] mb-6`}>
              La primera reunión
              <br />
              empieza por teléfono
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke={C.verde} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span><strong className="font-bold" style={{ color: C.tinta }}>{BIZ.address}</strong> — {BIZ.unidad}, {BIZ.city}</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <span className="mt-0.5 shrink-0" style={{ color: C.verde }}><PhoneIcon /></span>
                <span><strong className="font-bold" style={{ color: C.tinta }}>{BIZ.phoneDisplay}</strong> — agendando por llamada</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22303E] tap-44`}
                style={{ backgroundColor: C.verde, color: C.papel }}
              >
                <PhoneIcon />
                Agendar una conversación
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(34,48,62,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#22303E] tap-44"
                style={{ borderColor: 'rgba(34,48,62,0.4)', color: C.tinta }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full border-2" style={{ borderColor: C.tinta, backgroundColor: C.papelSoft }}>
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
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(246,241,227,0.6)' }}>
              {BIZ.legalName} · RUT {BIZ.rut} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(246,241,227,0.6)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(246,241,227,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, razón social, RUT, dirección, teléfono y
            servicios son datos públicos reales; las fotos son de la cuadra
            (Google Street View) y de su ficha de Google.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.verde} fg={C.papel} />
    </div>
  )
}
