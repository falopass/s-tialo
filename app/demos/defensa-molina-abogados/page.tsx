import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
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
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

const C = {
  paper: '#F5F6F8',
  navy: '#1E3D73',
  navyDeep: '#12294D',
  gold: '#C9A227',
  goldSoft: '#F4ECD4',
  ink: '#14202E',
  gris: '#5A6472',
  line: 'rgba(30,61,115,0.16)',
  white: '#FFFFFF',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'defensa-molina-abogados',
  title: 'Defensa Molina Abogados · Estudio jurídico en Molina',
  description:
    'Estudio de abogados en Luis Cruz Martínez 1471, Molina. Juicios de arriendo, fraude bancario, familia y trámites en Licantén y la Corte de Talca. Consulta por WhatsApp.',
  image: '/demos/defensa-molina-abogados/oficina.webp',
})

const NAV_LINKS = [
  { label: 'Causas', href: '#causas' },
  { label: 'Terreno', href: '#terreno' },
  { label: 'Horario', href: '#horario' },
  { label: 'Contacto', href: '#contacto' },
]

const CAUSAS = [
  {
    src: `${IMG}/servicio-arriendo.webp`,
    alt: 'Publicación de Defensa Molina sobre juicios de arriendo: cómo recuperar las rentas impagas',
    titulo: 'Juicios de arriendo',
    bajada: 'Cobro de rentas adeudadas, término de contrato y lanzamiento.',
    wa: 'un juicio de arriendo',
  },
  {
    src: `${IMG}/servicio-fraude.webp`,
    alt: 'Publicación de Defensa Molina sobre qué hacer ante un fraude bancario',
    titulo: 'Fraude bancario',
    bajada: 'Cargos no reconocidos, estafas y defensa del afectado.',
    wa: 'un fraude bancario',
  },
  {
    titulo: 'Derecho de familia',
    bajada: 'Pensión de alimentos, cuidado personal y relación directa y regular.',
    wa: 'un tema de familia',
  },
  {
    titulo: 'Trámites y gestiones',
    bajada: 'Escritos y gestiones ante el Juzgado de Letras de Licantén, el Conservador de Bienes Raíces y notarías.',
    wa: 'un trámite',
  },
]

const TERRENO = [
  {
    src: `${IMG}/juzgado.webp`,
    alt: 'Placa del Juzgado de Letras de Licantén, Poder Judicial',
    lugar: 'Juzgado de Letras de Licantén',
  },
  {
    src: `${IMG}/conservador.webp`,
    alt: 'Placa del Conservador de Bienes Raíces de Molina',
    lugar: 'Conservador de Molina',
  },
  {
    src: `${IMG}/tribunal.webp`,
    alt: 'Pasillo de columnas del tribunal donde alega el estudio',
    lugar: 'Corte de Apelaciones de Talca',
  },
  {
    src: `${IMG}/documento.webp`,
    alt: 'Comprobante de solicitud ingresada por el estudio',
    lugar: 'Gestiones del estudio',
  },
]

function WaButton({ href, children, dark = false }: { href: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${FOCUS} inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-md font-semibold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 tap-44`}
      style={
        dark
          ? { backgroundColor: C.gold, color: C.navyDeep, outlineColor: C.gold }
          : { backgroundColor: C.navy, color: C.white, outlineColor: C.navy }
      }
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]"
      style={{ color: light ? C.gold : C.navy }}
    >
      <span className="inline-block w-7 h-[2.5px]" style={{ backgroundColor: light ? C.gold : C.navy }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function DefensaMolinaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,246,248,0.96)',
          ink: C.navyDeep,
          line: C.line,
          btnBg: C.navy,
          btnInk: C.white,
        }}
      />

      {/* ── Hero: sello del estudio + fotos reales ── */}
      <header
        id="inicio"
        className="relative overflow-hidden"
        style={{
          background: `linear-gradient(150deg, ${C.white} 0%, ${C.paper} 60%, ${C.goldSoft} 140%)`,
        }}
      >
        <div
          className="absolute top-0 inset-x-0 h-1.5"
          style={{ background: `linear-gradient(90deg, ${C.navy} 0%, ${C.navy} 62%, ${C.gold} 62%, ${C.gold} 100%)` }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-12 lg:gap-16 items-center">
          <Reveal>
            <Eyebrow>Estudio de abogados · {BIZ.city}, Maule</Eyebrow>
            <h1 className={`${display.className} mt-4 text-[36px] leading-[1.08] md:text-[56px] font-extrabold`} style={{ color: C.navyDeep }}>
              Defensa y asesoría legal en Molina y Licantén
            </h1>
            <p className="mt-5 max-w-md text-[16px] md:text-[18px] leading-relaxed" style={{ color: C.gris }}>
              Arriendos, fraude bancario, familia y trámites ante tribunales y
              conservadores de la zona. Atención directa en {BIZ.address}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WaButton href={WA_LINK}>Agendar una consulta</WaButton>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex min-h-[44px] items-center gap-2 rounded-md px-4 py-2 text-[14px] font-semibold tap-44`}
                style={{ backgroundColor: C.white, color: C.navy, border: `1px solid ${C.line}`, outlineColor: C.navy }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                {BIZ.address}, {BIZ.city}
              </a>
            </div>
          </Reveal>

          <Reveal delay={140} className="relative">
            <div className="relative mx-auto max-w-[420px] pb-10">
              <div
                className="relative aspect-square overflow-hidden rounded-md"
                style={{ boxShadow: `0 28px 55px -28px rgba(18,41,77,0.55), 0 0 0 1px ${C.line}` }}
              >
                <Image
                  src={`${IMG}/oficina.webp`}
                  alt="Recepción de la oficina de Defensa Molina Abogados en Luis Cruz Martínez 1471"
                  fill
                  priority
                  sizes="(min-width: 1024px) 420px, 90vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-0 -right-2 md:-right-8 w-[52%] aspect-[4/3] overflow-hidden rounded-md"
                style={{ boxShadow: `0 18px 36px -18px rgba(18,41,77,0.5)`, border: `5px solid ${C.white}` }}
              >
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Letrero azul de Defensa Molina Abogados en la entrada de la oficina"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -top-6 -left-3 md:-left-8 w-[84px] h-[84px] rounded-full overflow-hidden"
                style={{ boxShadow: '0 12px 26px -12px rgba(18,41,77,0.55)', border: `4px solid ${C.white}` }}
              >
                <Image
                  src={`${IMG}/logo.webp`}
                  alt={`Logo de ${BIZ.name}`}
                  fill
                  sizes="84px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Cinta de datos del estudio ── */}
      <div style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-[12px] uppercase tracking-[0.18em] font-semibold" style={{ color: 'rgba(255,255,255,0.85)' }}>
          <span>{BIZ.address}, {BIZ.city}</span>
          <span style={{ color: C.gold }}>Lun a vie 9:00 a 14:00 · 15:00 a 18:00</span>
          <span>Consulta directa por WhatsApp</span>
        </div>
      </div>

      {/* ── Causas: temas reales de sus publicaciones ── */}
      <section id="causas" className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>En qué te ayudamos</Eyebrow>
          <h2 className={`${display.className} mt-3 max-w-2xl text-[30px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.navyDeep }}>
            Las causas que el estudio atiende a diario
          </h2>
          <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.gris }}>
            Temas publicados por el propio estudio en sus redes. Cuéntanos tu
            caso por WhatsApp y te decimos qué se puede hacer.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-5 md:grid-cols-2">
          {CAUSAS.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 80}>
              <article
                className="h-full rounded-md overflow-hidden flex flex-col sm:flex-row"
                style={{ backgroundColor: C.white, border: `1px solid ${C.line}`, boxShadow: '0 16px 36px -28px rgba(18,41,77,0.4)' }}
              >
                {'src' in c && c.src ? (
                  <div className="relative sm:w-[42%] aspect-[4/3] sm:aspect-auto sm:min-h-[210px] shrink-0">
                    <Image src={c.src} alt={c.alt ?? ''} fill sizes="(min-width: 640px) 220px, 100vw" className="object-cover object-top" />
                  </div>
                ) : (
                  <div
                    className="relative sm:w-[42%] min-h-[120px] sm:min-h-[210px] shrink-0 flex items-center justify-center p-6"
                    style={{ backgroundColor: C.navy }}
                    aria-hidden="true"
                  >
                    <p className={`${display.className} text-center text-[30px] font-extrabold leading-tight`} style={{ color: C.gold }}>
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}
                    </p>
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className={`${display.className} text-[21px] font-bold`} style={{ color: C.navyDeep }}>{c.titulo}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed flex-1" style={{ color: C.gris }}>{c.bajada}</p>
                  <a
                    href={waArea(c.wa)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${FOCUS} mt-4 self-start inline-flex min-h-[44px] items-center text-[14px] font-semibold underline underline-offset-4 tap-44`}
                    style={{ color: C.navy, outlineColor: C.navy }}
                  >
                    Consultar por {c.wa} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Terreno: dónde trabaja el estudio ── */}
      <section id="terreno" className="scroll-mt-24" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Terreno conocido</Eyebrow>
            <h2 className={`${display.className} mt-3 max-w-2xl text-[30px] md:text-[44px] leading-[1.1] font-bold`} style={{ color: C.white }}>
              Del Juzgado de Licantén a la{' '}
              <span className="italic pb-1 inline-block leading-[1.1]" style={{ color: C.gold }}>Corte de Talca</span>
            </h2>
            <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              El estudio tramita presencial en los juzgados y oficinas de la
              zona: tu causa la lleva quien la atiende.
            </p>
          </Reveal>
          <ul className="mt-10 md:mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {TERRENO.map((t, i) => (
              <Reveal key={t.lugar} delay={i * 80}>
                <li className="group">
                  <div className="relative aspect-square overflow-hidden rounded-md" style={{ border: '1px solid rgba(255,255,255,0.18)' }}>
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mt-3 text-[12px] md:text-[13px] font-semibold uppercase tracking-[0.12em]" style={{ color: C.gold }}>
                    {t.lugar}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Horario real + oficina ── */}
      <section id="horario" className="scroll-mt-24 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,360px)] gap-8 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow>Horario de atención</Eyebrow>
            <h2 className={`${display.className} mt-3 text-[30px] md:text-[42px] leading-[1.1] font-bold`} style={{ color: C.navyDeep }}>
              Lun a vie de 9:00 a 18:00, con colación
            </h2>
            <dl className="mt-8 space-y-3 max-w-md">
              {HORARIO.map((h) => (
                <div
                  key={h.dia}
                  className="flex flex-wrap justify-between gap-x-6 gap-y-1 rounded-md px-5 py-4"
                  style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}
                >
                  <dt className="text-[15px] font-semibold" style={{ color: C.navyDeep }}>{h.dia}</dt>
                  <dd className="text-[15px] font-medium text-right" style={{ color: C.ink }}>{h.hora}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-[14px] leading-relaxed max-w-md" style={{ color: C.gris }}>
              Horario publicado por el estudio en su Instagram{' '}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} font-semibold underline underline-offset-4 tap-44`}
                style={{ color: C.navy, outlineColor: C.navy }}
              >
                @{BIZ.instagram}
              </a>
              . Fuera de horario, deja tu consulta por WhatsApp y te responden
              al día hábil siguiente.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="rounded-md overflow-hidden" style={{ border: `1px solid ${C.line}`, boxShadow: '0 16px 36px -28px rgba(18,41,77,0.45)' }}>
              <div className="relative aspect-[4/5]">
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior de la oficina de Defensa Molina con puerta de vidrio y sala de espera"
                  fill
                  sizes="(min-width: 1024px) 360px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-5 py-3.5 text-[13px] font-medium" style={{ backgroundColor: C.white, color: C.gris }}>
                La oficina en {BIZ.address}, {BIZ.city}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-24" style={{ backgroundColor: C.goldSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div
            className="rounded-md p-7 md:p-10 grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-8 lg:gap-12 items-start"
            style={{ backgroundColor: C.navyDeep }}
          >
            <Reveal>
              <Eyebrow light>Contacto</Eyebrow>
              <h2 className={`${display.className} mt-3 text-[28px] md:text-[38px] leading-[1.12] font-bold`} style={{ color: C.white }}>
                Cuéntanos qué pasó y te orientamos
              </h2>
              <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
                Escríbenos por WhatsApp en pocas líneas. Te respondemos con los
                pasos a seguir, sin compromiso.
              </p>
              <div className="mt-7">
                <WaButton href={WA_LINK} dark>
                  WhatsApp {BIZ.phoneDisplay}
                </WaButton>
              </div>
              <p className="mt-6 text-[14px]" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {BIZ.address}, {BIZ.city}, Maule
                {' · '}
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} font-semibold underline underline-offset-4 tap-44`}
                  style={{ color: C.gold, outlineColor: C.gold }}
                >
                  @{BIZ.instagram}
                </a>
                {' · '}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} font-semibold underline underline-offset-4 tap-44`}
                  style={{ color: C.gold, outlineColor: C.gold }}
                >
                  Cómo llegar
                </a>
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-md overflow-hidden aspect-[16/11]" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                <LazyMap
                  title={`Mapa de ${BIZ.name}`}
                  src={MAPS_EMBED}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: 'rgba(255,255,255,0.72)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[13px]">
          <p className="flex items-center gap-3">
            <span className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 inline-block">
              <Image src={`${IMG}/logo.webp`} alt="" fill sizes="36px" className="object-cover" aria-hidden="true" />
            </span>
            <span>
              <span className={`${display.className} font-bold text-[15px]`} style={{ color: C.white }}>{BIZ.name}</span>
              <br />
              {BIZ.address}, {BIZ.city}
            </span>
          </p>
          <p className="max-w-md leading-relaxed">
            <span className="font-bold" style={{ color: C.gold }}>Sitio de ejemplo de Sitiazo.</span>{' '}
            Datos, fotos, horario y temas del estudio reales; textos descriptivos de muestra.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-24 [&>div]:static [&>div]:max-w-full [&>div]:w-fit">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Consultar a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
