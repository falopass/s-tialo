import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' }],
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
  paper: '#EFE9D8',
  paperDark: '#E3DAC2',
  ink: '#221C14',
  inkSoft: '#4A4132',
  muted: '#574D3D',
  sello: '#8C2F26',
  selloDeep: '#6E211B',
  noche: '#171310',
  lineLight: 'rgba(34,28,20,0.2)',
  lineDark: 'rgba(239,233,216,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'javier-albornoz-y-cia',
  title: 'Javier Albornoz y Cía — Estudio jurídico en Av. Dos Sur, Talca',
  description:
    'Estudio jurídico en Av. Dos Sur 772, Edificio Aranjuez, Talca. Atención y consultas agendadas por teléfono.',
  image: `${IMG}/edificio-772.webp`,
})

const NAV_LINKS = [
  { label: 'El estudio', href: '#estudio' },
  { label: 'Consultas', href: '#consultas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const CONSULTAS = [
  {
    folio: 'F-01',
    q: '¿Me quedaron debiendo plata?',
    desc: 'Cobros judiciales y extrajudiciales: cartas, demandas y ejecución de deudas.',
  },
  {
    folio: 'F-02',
    q: '¿Necesito un contrato revisado?',
    desc: 'Redacción y revisión de contratos, promesas y escrituras antes de firmar.',
  },
  {
    folio: 'F-03',
    q: '¿Un problema de familia o herencia?',
    desc: 'Posesiones efectivas, particiones y orientación en temas de familia.',
  },
  {
    folio: 'F-04',
    q: '¿Un conflicto con un arriendo o vecino?',
    desc: 'Desalojos, termino de contrato y disputas de propiedad o comunidad.',
  },
]

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Sello({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center justify-center w-[104px] h-[104px] md:w-[124px] md:h-[124px] rounded-full border-2 text-center text-[10px] md:text-[11px] font-bold uppercase leading-tight tracking-[0.14em] ${className}`}
      style={{ borderColor: C.sello, color: C.sello, transform: 'rotate(-8deg)' }}
      aria-hidden="true"
    >
      Abogado
      <br />
      Talca
    </span>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{'html { scroll-behavior: auto }'}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(239,233,216,0.94)', ink: C.ink, line: C.lineLight, btnBg: C.sello, btnInk: C.paper }}
      />

      {/* ── Hero: carátula de expediente ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 27px, ${C.ink} 28px)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[130px] pb-14 md:pb-20">
          <Reveal>
            <div className={`${mono.className} flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px] md:text-xs uppercase tracking-[0.18em] pb-4 border-b-2 mb-8 md:mb-12`} style={{ borderColor: C.ink, color: C.inkSoft }}>
              <span>Exp. N° 772</span>
              <span aria-hidden="true">·</span>
              <span>Av. Dos Sur</span>
              <span aria-hidden="true">·</span>
              <span>Talca — Maule</span>
              <span className="ml-auto hidden sm:inline" style={{ color: C.sello }}>Estudio jurídico</span>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-7">
              <Reveal delay={80}>
                <h1 className={`${display.className} text-[clamp(2.7rem,8vw,5.2rem)] leading-[1.02]`} style={{ color: C.ink }}>
                  Javier Albornoz
                  <br />
                  <span className={displayItalic.className} style={{ color: C.sello }}>y Compañía</span>
                </h1>
                <p className="mt-5 text-sm md:text-base max-w-md leading-relaxed" style={{ color: C.muted }}>
                  Estudio jurídico en el corazón comercial de Talca: atiende en
                  Av. Dos Sur 772, a pasos de los tribunales y el centro de la ciudad.
                  Agenda tu consulta por teléfono.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221C14] tap-44`}
                    style={{ backgroundColor: C.sello, color: C.paper }}
                  >
                    <PhoneIcon />
                    Llamar al {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(34,28,20,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221C14] tap-44"
                    style={{ borderColor: 'rgba(34,28,20,0.4)', color: C.ink }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={180} className="md:col-span-5">
              <div className="relative">
                <figure
                  className="relative bg-white p-2.5 pb-9 shadow-lg"
                  style={{ transform: 'rotate(1.6deg)', border: `1px solid ${C.lineLight}` }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/edificio-772.webp`}
                      alt={`Fachada del edificio de Av. Dos Sur 772 donde funciona ${BIZ.name}, Talca`}
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className={`${mono.className} absolute bottom-2 left-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    El edificio · foto real
                  </figcaption>
                </figure>
                <Sello className="absolute -top-8 -right-2 md:-right-6" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El estudio: avenida + datos ── */}
      <section id="estudio" className="border-t-2" style={{ borderColor: C.ink, backgroundColor: C.noche, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: 'rgba(239,233,216,0.55)' }}>
              El estudio
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] max-w-2xl mb-6`}>
              Una oficina en la avenida
              <br />
              <span className={displayItalic.className} style={{ color: '#C9A24B' }}>que cruza el centro</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12" style={{ color: 'rgba(239,233,216,0.75)' }}>
              El estudio funciona en el segundo piso del edificio del 772 de Av. Dos Sur,
              la avenida que conecta el centro de Talca con el poniente. Oficina de
              barrio céntrico: se llega caminando desde Plaza de Armas.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { src: 'portal-edificio.webp', alt: 'Portal de entrada del edificio en Av. Dos Sur 772, Talca' },
              { src: 'dos-sur-oriente.webp', alt: 'Av. Dos Sur hacia el oriente con edificios de oficinas, Talca' },
              { src: 'dos-sur-poniente.webp', alt: 'Av. Dos Sur hacia el poniente, Talca' },
              { src: 'vereda-772.webp', alt: 'Vereda frente al edificio del 772 de Av. Dos Sur, Talca' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 90}>
                <figure className="relative aspect-[4/3] overflow-hidden">
                  <Image src={`${IMG}/${p.src}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className={`${mono.className} mt-5 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(239,233,216,0.5)' }}>
              Fotos reales · Google Street View · Av. Dos Sur, Talca
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Consultas frecuentes: folios ── */}
      <section id="consultas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08]`}>
              Consultas que llegan
              <br />
              al escritorio
            </h2>
            <p className="text-xs md:text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Esto es una muestra: al publicar van las áreas de práctica reales
              del estudio.
            </p>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-2 gap-5 md:gap-7">
          {CONSULTAS.map((c, i) => (
            <Reveal key={c.folio} delay={i * 100}>
              <li className="h-full border-t-2 pt-5 pb-6" style={{ borderColor: C.ink, backgroundColor: 'transparent' }}>
                <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em] mb-3`} style={{ color: C.sello }}>
                  {c.folio} · consulta
                </p>
                <h3 className={`${display.className} text-[clamp(1.35rem,2.6vw,1.8rem)] leading-snug mb-2.5`} style={{ color: C.ink }}>
                  {c.q}
                </h3>
                <p className="text-sm leading-relaxed max-w-md" style={{ color: C.muted }}>
                  {c.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Opiniones: el dato real de Google ── */}
      <section id="opiniones" className="border-y-2" style={{ borderColor: C.ink, backgroundColor: C.paperDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 items-center">
          <Reveal className="md:col-span-4">
            <p className={`${display.className} text-[clamp(3.4rem,9vw,5.6rem)] leading-none`} style={{ color: C.ink }}>
              3,8
            </p>
            <Stars value={BIZ.rating} color={C.sello} className="w-5 h-5 mt-2" />
          </Reveal>
          <Reveal delay={140} className="md:col-span-8">
            <h2 className={`${display.className} text-[clamp(1.6rem,3.6vw,2.4rem)] leading-snug mb-3`} style={{ color: C.ink }}>
              Evaluado en Google Maps
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              El estudio tiene {BIZ.reviews} reseñas en su ficha de Google con un
              promedio de 3,8 estrellas — la ficha publica la nota, no el texto.
              Cada consulta bien resuelta es la que levanta ese número.
            </p>

          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.sello }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.08] mb-6`} style={{ color: C.ink }}>
              La primera consulta
              <br />
              empieza con una llamada
            </h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke={C.sello} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span><strong className="font-bold" style={{ color: C.ink }}>{BIZ.address}</strong>, {BIZ.edificio} — {BIZ.city}</span>
              </li>
              <li className="flex items-start gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <span className="mt-0.5 shrink-0" style={{ color: C.sello }}><PhoneIcon /></span>
                <span><strong className="font-bold" style={{ color: C.ink }}>{BIZ.phoneDisplay}</strong> — llamadas en horario de oficina</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221C14] tap-44`}
                style={{ backgroundColor: C.sello, color: C.paper }}
              >
                <PhoneIcon />
                Agendar consulta
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(34,28,20,0.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221C14] tap-44"
                style={{ borderColor: 'rgba(34,28,20,0.4)', color: C.ink }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full border-2" style={{ borderColor: C.ink, backgroundColor: C.paperDark }}>
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
      <footer style={{ backgroundColor: C.noche, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(239,233,216,0.6)' }}>
              {BIZ.legalName} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(239,233,216,0.6)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(239,233,216,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, nota y conteo de reseñas son
            datos públicos reales; las fotos son de la avenida (Google Street View) y
            las áreas de práctica son de muestra.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.sello} fg={C.paper} />
    </div>
  )
}
