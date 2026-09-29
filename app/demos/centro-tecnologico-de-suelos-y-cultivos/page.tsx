import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Paleta sacada del logo del CTSyC: los estratos de suelo de su isotipo.
const C = {
  paper: '#F5EFE0',
  ink: '#2C2314',
  muted: '#6F6046',
  line: 'rgba(44,35,20,0.14)',
  terracota: '#9C5410',
  ambar: '#DC8F2B',
  crema: '#EDD8B5',
  verde: '#557A2B',
  verdeDeep: '#2E4217',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-tecnologico-de-suelos-y-cultivos',
  title: 'CTSyC · Laboratorio de suelos de la U. de Talca',
  description:
    'Análisis químicos de suelos, agua, sustratos y tejido vegetal en el campus Lircay de la Universidad de Talca. Resultados en línea y parámetros acreditados SAG.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El laboratorio', href: '#laboratorio' },
  { label: 'Análisis', href: '#analisis' },
  { label: 'Muestras', href: '#muestras' },
  { label: 'Contacto', href: '#contacto' },
]

const ESTRATOS = [
  {
    n: '01',
    name: 'Suelos',
    desc: 'El análisis químico de rutina del suelo: nutrientes, pH, materia orgánica y sales, para saber qué tiene tu terreno antes de sembrar o fertilizar.',
    dato: 'Fertilidad y correcciones',
    bg: '#E4D3AE',
    fg: '#2C2314',
    mutedFg: 'rgba(44,35,20,0.72)',
  },
  {
    n: '02',
    name: 'Tejido vegetal',
    desc: 'Hojas, pecíolos y frutos: el análisis foliar muestra cómo está comiendo la planta en plena temporada, no solo cómo está el suelo.',
    dato: 'Nutrición del cultivo en curso',
    bg: '#D8B77E',
    fg: '#2C2314',
    mutedFg: 'rgba(44,35,20,0.78)',
  },
  {
    n: '03',
    name: 'Agua',
    desc: 'Agua de riego de canal, pozo o noria: sales, sodio y calidad para saber qué le estás echando al suelo con cada riego.',
    dato: 'Calidad de riego',
    bg: '#C9974E',
    fg: '#2C2314',
    mutedFg: 'rgba(44,35,20,0.85)',
  },
  {
    n: '04',
    name: 'Sustratos',
    desc: 'Mezclas para almácigo, macetero o cultivo sin suelo: compost, turba y sustratos comerciales analizados antes de plantar.',
    dato: 'Almácigos y maceteros',
    bg: '#8A6231',
    fg: '#F9F3E4',
    mutedFg: '#F4EDDB',
  },
  {
    n: '05',
    name: 'Físico de suelos',
    desc: 'Textura, densidad, retención de agua y compactación: la estructura del suelo, que define raíces, riego y rendimiento.',
    dato: 'Estructura y riego',
    bg: '#3E551E',
    fg: '#F4F0DD',
    mutedFg: 'rgba(244,240,221,0.80)',
  },
]

const PASOS = [
  {
    n: '1',
    title: 'Tomas la muestra',
    desc: 'Del cuartel, del sector o del macetero que quieres analizar. Ellos te orientan por teléfono o WhatsApp sobre cómo tomarla bien.',
  },
  {
    n: '2',
    title: 'La dejas en el laboratorio',
    desc: 'En el campus Lircay de la Universidad de Talca, Ruta 118 N° 9765, en horario de atención de lunes a viernes.',
  },
  {
    n: '3',
    title: 'Revisas el resultado en línea',
    desc: 'Por el sistema CTSyC-ROL el informe queda disponible en la web: no hay que volver al campus a buscar el papel.',
  },
]

export default function DemoCtsyc() {
  return (
    <main
      id="inicio"
      className={`${body.className} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <>
            <span style={{ fontFamily: 'inherit' }}>CTSyC</span>
            <span
              className={`${mono.className} hidden sm:inline text-[10px] uppercase tracking-[0.14em] opacity-70`}
            >
              · suelos y cultivos
            </span>
          </>
        }
        links={NAV_LINKS}
        waLink={BIZ.waLink}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(245,239,224,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.verde,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: el laboratorio en el campus ── */}
      <section className="relative pt-[88px] md:pt-[110px] pb-10 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-6">
            <Reveal>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4 flex items-center gap-2`}
                style={{ color: C.terracota }}
              >
                <span aria-hidden="true" className="inline-block w-6 h-[2px]" style={{ backgroundColor: C.terracota }} />
                Universidad de Talca · campus Lircay
              </p>
              <h1
                className={`${display.className} text-[34px] md:text-[52px] leading-[1.05] font-semibold mb-5`}
                style={{ letterSpacing: '-0.01em' }}
              >
                Tu suelo habla.
                <br />
                Nosotros lo analizamos.
              </h1>
              <p className="text-[15px] md:text-base leading-relaxed mb-7 max-w-[52ch]" style={{ color: C.muted }}>
                Química de suelos, agua, sustratos y tejido vegetal en un solo
                laboratorio, con parámetros acreditados por el SAG y resultados
                que revisas en línea desde el campo.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={BIZ.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-transform active:scale-95"
                  style={{ backgroundColor: C.verde, color: '#fff' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={BIZ.phoneTel}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border transition-transform active:scale-95"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Stars value={BIZ.rating} color={C.ambar} />
                <span className="text-[13px]" style={{ color: C.muted }}>
                  {BIZ.rating} en Google Maps · {BIZ.reviews} reseñas
                </span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-6">
            <Reveal delay={120}>
              <figure
                className="relative rounded-[22px] overflow-hidden border"
                style={{ borderColor: C.line, boxShadow: '0 18px 40px -18px rgba(44,35,20,0.35)' }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Técnicos del CTSyC trabajando en el laboratorio de suelos del campus Lircay"
                  width={1200}
                  height={786}
                  className="w-full h-auto"
                  priority
                />
                <figcaption
                  className={`${mono.className} absolute left-3 bottom-3 text-[10px] uppercase tracking-[0.14em] px-2.5 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(44,35,20,0.82)', color: '#F5EFE0' }}
                >
                  El laboratorio por dentro
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Banda de confianza ── */}
      <section id="laboratorio" className="border-y" style={{ borderColor: C.line, backgroundColor: '#EFE7D2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4">
          {[
            { k: 'Universidad de Talca', v: 'laboratorio universitario' },
            { k: 'CTSyC-ROL', v: 'resultados en línea' },
            { k: 'SAG', v: 'parámetros acreditados' },
            { k: BIZ.ig, v: 'su Instagram oficial' },
          ].map((it) => (
            <div key={it.k} className="min-w-0">
              <p className={`${display.className} text-[15px] md:text-base font-semibold truncate`}>{it.k}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {it.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── El perfil del suelo: cinco estratos de análisis ── */}
      <section id="analisis" className="pt-12 md:pt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 mb-8 md:mb-10">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.terracota }}>
              Lo que analizan
            </p>
            <h2 className={`${display.className} text-[28px] md:text-[40px] leading-[1.08] font-semibold max-w-[20ch]`}>
              Un suelo tiene capas. El laboratorio las analiza todas.
            </h2>
          </Reveal>
        </div>

        <div>
          {ESTRATOS.map((e, i) => (
            <Reveal key={e.n} delay={i * 60}>
              <article
                className="border-t"
                style={{ backgroundColor: e.bg, borderColor: 'rgba(0,0,0,0.12)' }}
              >
                <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 grid md:grid-cols-12 gap-3 md:gap-6 items-start">
                  <div className="md:col-span-1">
                    <span
                      className={`${mono.className} text-[12px] tracking-[0.1em]`}
                      style={{ color: e.mutedFg }}
                    >
                      {e.n}
                    </span>
                  </div>
                  <div className="md:col-span-3">
                    <h3
                      className={`${display.className} text-[22px] md:text-[26px] leading-tight font-semibold`}
                      style={{ color: e.fg }}
                    >
                      {e.name}
                    </h3>
                    <p
                      className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1.5`}
                      style={{ color: e.mutedFg }}
                    >
                      {e.dato}
                    </p>
                  </div>
                  <p
                    className="md:col-span-8 text-[14px] md:text-[15px] leading-relaxed max-w-[62ch]"
                    style={{ color: e.mutedFg }}
                  >
                    {e.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
          {/* Última capa: el resultado */}
          <Reveal delay={200}>
            <div style={{ backgroundColor: C.verdeDeep, color: '#F4F0DD' }}>
              <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
                <p className={`${display.className} text-[22px] md:text-[26px] font-semibold md:max-w-[18ch] leading-tight`}>
                  Y al fondo del perfil: tu informe.
                </p>
                <p className="text-[14px] md:text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(244,240,221,0.78)' }}>
                  Cada análisis termina en un informe que revisas en línea por
                  CTSyC-ROL, con los parámetros acreditados que pide el SAG para
                  riego, certificaciones y programas de fertirriego.
                </p>
                <a
                  href={BIZ.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold transition-transform active:scale-95"
                  style={{ backgroundColor: C.ambar, color: '#2C2314' }}
                >
                  Pedir hora de entrega
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Fotos reales del laboratorio ── */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} text-[24px] md:text-[34px] font-semibold mb-8`}>
              El laboratorio, el invernadero y el campus
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              {
                src: 'semilla.webp',
                alt: 'Bandejas de almácigo en el invernadero del CTSyC',
                cap: 'Almácigos en invernadero',
              },
              {
                src: 'lab.webp',
                alt: 'Interior del laboratorio de suelos del CTSyC con equipamiento de análisis',
                cap: 'Sala de análisis',
              },
              {
                src: 'edificio.webp',
                alt: 'Edificio del campus Lircay de la Universidad de Talca donde funciona el CTSyC',
                cap: 'Campus Lircay · foto Google Street View',
              },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90} className={i === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <figure className="group">
                  <div
                    className="rounded-[16px] overflow-hidden border"
                    style={{ borderColor: C.line }}
                  >
                    <Image
                      src={`${IMG}/${f.src}`}
                      alt={f.alt}
                      width={1200}
                      height={786}
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.14em]`}
                    style={{ color: C.muted }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona: de la muestra al informe ── */}
      <section id="muestras" className="pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.terracota }}>
              De la muestra al informe
            </p>
            <h2 className={`${display.className} text-[26px] md:text-[36px] leading-[1.1] font-semibold mb-8 max-w-[22ch]`}>
              Tres pasos y el suelo deja de ser una apuesta
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div
                  className="rounded-[16px] border p-5 md:p-6 h-full"
                  style={{ borderColor: C.line, backgroundColor: '#FBF7EA' }}
                >
                  <span
                    className={`${display.className} inline-flex w-9 h-9 rounded-full items-center justify-center text-[15px] font-semibold mb-4`}
                    style={{ backgroundColor: C.terracota, color: '#fff' }}
                  >
                    {p.n}
                  </span>
                  <h3 className={`${display.className} text-[18px] font-semibold mb-2`}>{p.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div
            className="rounded-[22px] overflow-hidden border grid lg:grid-cols-2"
            style={{ borderColor: C.line, backgroundColor: '#FBF7EA' }}
          >
            <div className="p-6 md:p-9">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4`} style={{ color: C.terracota }}>
                  Dónde y cuándo
                </p>
                <h2 className={`${display.className} text-[24px] md:text-[30px] leading-[1.12] font-semibold mb-6`}>
                  El laboratorio está en el campus Lircay
                </h2>
                <dl className="space-y-4 text-[14px] md:text-[15px]">
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.muted }}>
                      Dirección
                    </dt>
                    <dd>{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.muted }}>
                      Horario
                    </dt>
                    <dd>{BIZ.hours}</dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.muted }}>
                      Teléfono y WhatsApp
                    </dt>
                    <dd className="flex flex-wrap gap-x-5 gap-y-1">
                      <a href={BIZ.phoneTel} className="font-semibold underline underline-offset-4 decoration-1">
                        {BIZ.phoneDisplay}
                      </a>
                      <a href={BIZ.waLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-1">
                        {BIZ.waNumber}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.muted }}>
                      Correo
                    </dt>
                    <dd>
                      <a href={`mailto:${BIZ.mail}`} className="font-semibold underline underline-offset-4 decoration-1">
                        {BIZ.mail}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold border transition-transform active:scale-95"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Cómo llegar
                  </a>
                  <a
                    href={BIZ.waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: C.verde, color: '#fff' }}
                  >
                    Escribir por WhatsApp
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="relative min-h-[300px] lg:min-h-0">
              <LazyMap
                src={MAPS_EMBED}
                title="Ubicación del Centro Tecnológico de Suelos y Cultivos en Talca"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.verdeDeep, color: '#EDE7D2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <Image
            src={`${IMG}/logo.webp`}
            alt="Logo del Centro Tecnológico de Suelos y Cultivos, Universidad de Talca"
            width={56}
            height={56}
            className="w-14 h-14 rounded-full"
          />
          <div className="flex-1 min-w-0">
            <p className={`${display.className} text-[16px] font-semibold leading-snug`}>{BIZ.name}</p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-1`} style={{ color: 'rgba(237,231,210,0.75)' }}>
              {BIZ.rubro} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <p className={`${mono.className} text-[11px] leading-relaxed md:text-right`} style={{ color: 'rgba(237,231,210,0.75)' }}>
            {BIZ.address}
            <br />
            Demo de ejemplo · Sitiazo
          </p>
        </div>
      </footer>

      <WaFab href={BIZ.waLink} label={`WhatsApp de ${BIZ.short}`} />
    </main>
  )
}
