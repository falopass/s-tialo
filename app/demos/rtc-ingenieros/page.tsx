import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

const C = {
  plano: '#F2EFE4',
  planoDark: '#E4DFCC',
  azul: '#143A5E',
  azulDeep: '#0C2740',
  cyan: '#0E7C9C',
  cyanInk: '#0A5972',
  terreno: '#A8673A',
  ink: '#1B2A38',
  muted: '#4E5F6D',
  lineLight: 'rgba(27,42,56,0.18)',
  lineDark: 'rgba(242,239,228,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'rtc-ingenieros',
  title: 'RTC Ingenieros — Ingeniería y auditoría técnica en Talca',
  description:
    'RTC Ingenieros Ltda., 5 Norte 1125, Talca. Estudios geotécnicos, hidrología y localización de embalses para el Maule.',
  image: `${IMG}/emplazamiento-embalse.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Caso Huencuecho', href: '#caso' },
  { label: 'La oficina', href: '#oficina' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    cod: 'E-01',
    name: 'Estudios geotécnicos',
    desc: 'Calicatas, ensayos de terreno y mecánica de suelos para fundar decisiones de obra.',
  },
  {
    cod: 'E-02',
    name: 'Hidrología y recursos hídricos',
    desc: 'Hidrogramas, curvas de volumen y estudios de regulación para agua de riego.',
  },
  {
    cod: 'E-03',
    name: 'Localización de embalses',
    desc: 'Emplazamiento, planta general y prefactibilidad de tranques y embalses.',
  },
  {
    cod: 'E-04',
    name: 'Auditoría y asesoría técnica',
    desc: 'Revisión de proyectos, inspección técnica y respaldo de ingeniería para mandantes.',
  },
]

const CASO_FOTOS = [
  {
    src: 'ubicacion-tranque-huencuecho.webp',
    alt: 'Mapa satelital del acceso desde Pelarco al sitio del Tranque Huencuecho, provincia de Talca',
    cap: 'Acceso desde Pelarco al sitio del tranque',
    cls: 'md:col-span-2',
    ratio: 'aspect-[16/10]',
  },
  {
    src: 'calicata-terreno.webp',
    alt: 'Calicata de terreno abierta en el emplazamiento del embalse Huencuecho',
    cap: 'Calicata en el emplazamiento',
    cls: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: 'hito-th-pr1.webp',
    alt: 'Hito de referencia TH PR1 instalado en terreno para el estudio',
    cap: 'Hito de terreno TH·PR1',
    cls: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: 'planta-general-embalse.webp',
    alt: 'Planta general del embalse: espejo de agua, eje del muro y calicatas de estudio',
    cap: 'Planta general del embalse',
    cls: 'md:col-span-2',
    ratio: 'aspect-[16/10]',
  },
  {
    src: 'hidrograma-linsley.webp',
    alt: 'Hidrograma unitario de escorrentía directa, método de Linsley, del estudio',
    cap: 'Hidrograma unitario · método Linsley',
    cls: '',
    ratio: 'aspect-[4/3]',
  },
  {
    src: 'portada-estudio-ciren-2012.webp',
    alt: 'Portada del informe del estudio CIREN 2012 firmado por RTC Ingenieros Limitada',
    cap: 'Portada del informe · junio 2012',
    cls: '',
    ratio: 'aspect-[4/3]',
  },
]

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

/** Retícula de plano: líneas de cuadrícula + cotas decorativas. */
function Grid({ color = 'rgba(242,239,228,0.08)' }: { color?: string }) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `linear-gradient(${color} 1px, transparent 1px), linear-gradient(90deg, ${color} 1px, transparent 1px)`,
        backgroundSize: '56px 56px',
      }}
      aria-hidden="true"
    />
  )
}

export default function Page() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.plano, color: C.ink }}>
      <style>{'html { scroll-behavior: auto }'}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={`${display.className} font-extrabold uppercase tracking-tight`}
        theme={{ over: 'dark', bar: 'rgba(242,239,228,0.94)', ink: C.azulDeep, line: C.lineLight, btnBg: C.azul, btnInk: C.plano }}
      />

      {/* ── Hero: emplazamiento satelital real ── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ backgroundColor: C.azulDeep }}>
        <Image
          src={`${IMG}/emplazamiento-embalse.webp`}
          alt="Vista satelital del emplazamiento del embalse Huencuecho con el espejo de agua delimitado en cyan"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ opacity: 0.55 }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(12,39,64,0.5) 0%, rgba(12,39,64,0.15) 35%, rgba(12,39,64,0.92) 100%)' }} aria-hidden="true" />
        <Grid />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-18 pt-32 w-full">
          <Reveal>
            <div className={`${mono.className} inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] md:text-xs uppercase tracking-[0.2em] px-3 py-2 border mb-6`} style={{ borderColor: 'rgba(242,239,228,0.4)', color: 'rgba(242,239,228,0.85)' }}>
              <span>Ing. civil</span>
              <span aria-hidden="true">·</span>
              <span>Talca, Maule</span>
              <span aria-hidden="true">·</span>
              <span>RUT {BIZ.rut}</span>
            </div>
            <h1 className={`${display.className} font-extrabold uppercase text-[clamp(2.4rem,7.4vw,4.9rem)] leading-[1.0] max-w-4xl`} style={{ color: C.plano }}>
              Ingeniería que se
              <br />
              mide <span style={{ color: '#5FC4DE' }}>en terreno</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-sm md:text-base max-w-lg leading-relaxed" style={{ color: 'rgba(242,239,228,0.82)' }}>
              RTC Ingenieros estudia el suelo, el agua y el lugar antes de que se
              mueva un metro cúbico: geotecnia, hidrología y localización de
              obras de riego para el Maule.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wide px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
                style={{ backgroundColor: C.cyan, color: '#fff' }}
              >
                <PhoneIcon />
                Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href="#caso"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 border transition-colors hover:bg-[rgba(242,239,228,0.1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44"
                style={{ borderColor: 'rgba(242,239,228,0.4)', color: C.plano }}
              >
                Ver un estudio real ↓
              </a>
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className={`${mono.className} mt-8 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(242,239,228,0.55)' }}>
              Imagen: emplazamiento del Embalse Huencuecho I · estudio CIREN 2012 de {BIZ.legalName}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios: fichas técnicas ── */}
      <section id="servicios" className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Grid color="rgba(27,42,56,0.05)" />
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(1.8rem,4.4vw,3rem)] leading-[1.05]`} style={{ color: C.azulDeep }}>
              Qué estudia la oficina
            </h2>
            <p className={`${mono.className} text-[10px] md:text-xs max-w-xs leading-relaxed uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              Listado de muestra — al publicar va la oferta real de servicios
            </p>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-2 gap-px border" style={{ borderColor: C.lineLight, backgroundColor: C.lineLight }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.cod} delay={i * 90}>
              <li className="h-full p-6 md:p-8" style={{ backgroundColor: C.plano }}>
                <p className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.22em] mb-3`} style={{ color: C.cyanInk }}>
                  {s.cod}
                </p>
                <h3 className={`${display.className} font-bold text-xl md:text-2xl leading-snug mb-2.5`} style={{ color: C.azulDeep }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed max-w-md" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Caso real: Embalse Huencuecho I ── */}
      <section id="caso" className="relative border-y-2 overflow-hidden" style={{ borderColor: C.azulDeep, backgroundColor: C.azulDeep, color: C.plano }}>
        <Grid />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: '#5FC4DE' }}>
              Expediente real · contrato N° 88/2011
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(1.8rem,4.4vw,3rem)] leading-[1.05] max-w-3xl mb-5`}>
              Embalse de regulación interanual Huencuecho I
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mb-4" style={{ color: 'rgba(242,239,228,0.78)' }}>
              En 2012 la empresa desarrolló para el CIREN (Centro de Información de
              Recursos Naturales, con InnovaChile CORFO) los estudios geotécnicos y de
              localización del embalse Huencuecho I, encargado por la Asociación Canal
              Maule Norte: un informe de más de 140 páginas con calicatas, planos de
              planta e hidrología de la cuenca.
            </p>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.18em] mb-12`} style={{ color: 'rgba(242,239,228,0.7)' }}>
              Todas las imágenes de abajo salen de ese estudio — papel de trabajo real
            </p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {CASO_FOTOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 80} className={p.cls}>
                <figure className={`relative overflow-hidden ${p.ratio}`} style={{ backgroundColor: C.azul }}>
                  <Image src={`${IMG}/${p.src}`} alt={p.alt} fill sizes="(max-width: 768px) 50vw, 50vw" className="object-cover" />
                  <figcaption
                    className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.14em]`}
                    style={{ backgroundColor: 'rgba(12,39,64,0.85)', color: 'rgba(242,239,228,0.85)' }}
                  >
                    {p.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La oficina: fachada real + dirección ── */}
      <section id="oficina" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <Reveal className="md:col-span-5">
            <figure className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.lineLight }}>
              <Image
                src={`${IMG}/oficina-5norte-1125.webp`}
                alt="Fachada de la oficina de RTC Ingenieros en 5 Norte 1125, Talca — el número 1125 visible en la puerta"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
              La casa del 1125 · foto real · Google Street View
            </p>
          </Reveal>
          <Reveal delay={140} className="md:col-span-7">
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.cyanInk }}>
              La oficina
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(1.8rem,4.4vw,3rem)] leading-[1.05] mb-5`} style={{ color: C.azulDeep }}>
              Una casa-oficina
              <br />
              en 5 Norte
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              La oficina funciona en 5 Norte 1125, en el borde residencial del centro
              de Talca: una casa convertida en escritorio de proyectos, como tantas
              oficinas de ingeniería de la ciudad.
            </p>
            <dl className="border-y py-5 space-y-4" style={{ borderColor: C.lineLight }}>
              {[
                ['Razón social', BIZ.legalName],
                ['RUT', BIZ.rut],
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Teléfono', BIZ.phoneDisplay],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4">
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.2em] shrink-0`} style={{ color: C.muted }}>{k}</dt>
                  <dd className="text-sm md:text-base font-semibold text-right" style={{ color: C.azulDeep }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="border-t" style={{ borderColor: C.lineLight, backgroundColor: C.planoDark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.cyanInk }}>
              Contacto
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(1.8rem,4.4vw,3rem)] leading-[1.05] mb-6`} style={{ color: C.azulDeep }}>
              Hablemos de tu terreno
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              ¿Un sitio por evaluar, un estudio por encargar o un proyecto que
              necesita respaldo técnico? La primera conversación es por teléfono.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm font-bold uppercase tracking-wide px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C2740] tap-44`}
                style={{ backgroundColor: C.azul, color: C.plano }}
              >
                <PhoneIcon />
                Llamar a la oficina
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-6 py-3 border-2 transition-colors hover:bg-[rgba(20,58,94,0.07)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0C2740] tap-44"
                style={{ borderColor: 'rgba(20,58,94,0.4)', color: C.azul }}
              >
                Abrir en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden min-h-[320px] h-full border" style={{ borderColor: C.lineLight, backgroundColor: C.plano }}>
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
      <footer style={{ backgroundColor: C.azulDeep, color: C.plano }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-extrabold uppercase tracking-tight text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(242,239,228,0.6)' }}>
              {BIZ.legalName} · RUT {BIZ.rut} · {BIZ.address}, {BIZ.city}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(242,239,228,0.6)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(242,239,228,0.72)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.plano }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Razón social, RUT, dirección y teléfono son datos públicos
            reales; las imágenes del proyecto vienen del estudio CIREN 2012 de la
            empresa y la fachada es Google Street View; el listado de servicios es de
            muestra.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.plano }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.cyan} fg="#fff" />
    </div>
  )
}
