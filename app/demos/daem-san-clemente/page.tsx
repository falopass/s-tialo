import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, SITE_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

// Identidad del tablero municipal: papel claro, azul institucional #2E3192
// y naranja #F7941E del escudo de San Clemente.
const C = {
  paper: '#F6F3EA',
  card: '#FFFFFF',
  ink: '#1B1E3B',
  muted: '#565A75',
  line: '#D9D4C4',
  navy: '#2E3192',
  navyDeep: '#1D2070',
  navyInk: '#E7E8FF',
  navyMuted: '#B3B6E8',
  orange: '#F7941E',
  orangeDeep: '#B96B00',
}

export const metadata: Metadata = demoMetadata({
  slug: 'daem-san-clemente',
  title: 'DAEM San Clemente — Educación municipal',
  description:
    'Departamento de Administración de Educación Municipal de San Clemente: 34 establecimientos, 5.247 estudiantes, becas, transporte escolar rural y trámites en edusanclemente.cl.',
  image: '/demos/daem-san-clemente/beca-ceremonia.webp',
})

const NAV_LINKS = [
  { label: 'Red', href: '#red' },
  { label: 'Trámites', href: '#tramites' },
  { label: 'Programas', href: '#programas' },
  { label: 'Contacto', href: '#contacto' },
]

const VENTANILLAS = [
  {
    n: 'V1',
    name: 'Contratación docente',
    desc: 'Postulaciones y licitaciones para el cuerpo docente y asistentes de la educación en el Sistema de Solicitud de Contratación.',
  },
  {
    n: 'V2',
    name: 'Licencias médicas',
    desc: 'Portal de licencias del personal docente y asistente: presentación, seguimiento y rechazos.',
  },
  {
    n: 'V3',
    name: 'e-Solicitud de compras',
    desc: 'Solicitudes de compra en línea para establecimientos: insumos, servicios y licitaciones internas.',
  },
  {
    n: 'V4',
    name: 'Ley Karin',
    desc: 'Canales de denuncia y protocolo frente a acoso laboral y violencia en el trabajo, según la Ley 21.643.',
  },
]

const GALERIA = [
  {
    src: 'beca-entrega.webp',
    alt: 'Estudiantes y familias en la entrega de la Beca Estudiantil Municipal de San Clemente',
    cap: 'Entrega Beca Estudiantil Municipal',
  },
  {
    src: 'tic-familia.webp',
    alt: 'Familia de San Clemente recibiendo un computador de la Beca TIC JUNAEB',
    cap: 'Beca TIC JUNAEB: computadores para estudiantes',
  },
  {
    src: 'teatro-ninos.webp',
    alt: 'Niños de San Clemente asistiendo a una función de teatro municipal',
    cap: 'Noche cultural comunal',
  },
  {
    src: 'beca-ceremonia.webp',
    alt: 'Ceremonia de becas municipales de San Clemente con autoridades y apoderados',
    cap: 'Ceremonia de becas del municipio',
  },
]

const RED = [
  { name: 'Liceo San Clemente Entre Ríos', sector: 'Urbana', note: 'Los Nogales 198' },
  { name: 'Escuela San Clemente', sector: 'Urbana', note: '' },
  { name: 'Escuela Diferencial San Clemente', sector: 'Urbana', note: '' },
  { name: 'Jardín Infantil Mariposas', sector: 'Urbana', note: '' },
  { name: 'Escuela Bramadero', sector: 'Rural', note: '' },
  { name: 'Escuela Queri', sector: 'Rural', note: '' },
  { name: 'Escuela Chequén de la Peña', sector: 'Rural', note: '' },
  { name: 'Escuela Paso Nevado', sector: 'Rural', note: '' },
  { name: 'Escuela Los Almendros', sector: 'Rural', note: '' },
]

const PROGRAMAS = [
  {
    name: 'Beca Estudiantil Municipal',
    desc: 'Apoyo anual del municipio para que estudiantes de la comuna puedan pagar estudios técnicos y universitarios.',
  },
  {
    name: 'Beca TIC JUNAEB',
    desc: 'Computadores entregados a estudiantes de séptimo básico para cerrar la brecha digital en las escuelas municipales.',
  },
  {
    name: 'Transporte escolar rural',
    desc: 'Contratación TER de recorridos que conectan los sectores rurales con sus establecimientos.',
  },
  {
    name: 'Programa de Alimentación Escolar',
    desc: 'Desayuno y almuerzo diario por JUNAEB para todos los estudiantes de la red municipal.',
  },
]

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img src={`${IMG}/logo-daem.png`} alt="" className="h-7 md:h-8 w-auto" />
            <span className={`${display.className} uppercase text-sm md:text-base leading-tight tracking-wide`} style={{ color: C.navy }}>
              DAEM<br className="md:hidden" /> San Clemente
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.navy, btnInk: '#FFFFFF' }}
      />

      {/* ── Hero: el tablero comunal ── */}
      <section className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[128px] pb-12 md:pb-16">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-end">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.orangeDeep }}>
                Educación municipal · San Clemente
              </p>
              <h1 className={`${display.className} uppercase leading-[0.98] text-[clamp(2.4rem,7vw,4.4rem)] mb-5`} style={{ color: C.navy }}>
                La red de escuelas de toda la comuna
              </h1>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.muted }}>
                El Departamento de Educación Municipal administra las escuelas,
                liceos y jardines de {BIZ.city}: becas, transporte rural,
                alimentación escolar y trámites para docentes y familias.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={SITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.navy, color: '#FFFFFF' }}
                >
                  Trámites en {BIZ.site}
                </a>
                <a
                  href={CALL_LINK}
                  className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ color: C.navy, boxShadow: `inset 0 0 0 2px ${C.navy}` }}
                >
                  Llamar al DAEM
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative" style={{ boxShadow: `inset 0 0 0 1px ${C.line}`, backgroundColor: C.card }}>
                <div className="p-2.5 pb-0">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={`${IMG}/beca-ceremonia.webp`}
                      alt="Ceremonia de entrega de la Beca Estudiantil Municipal de San Clemente"
                      fill
                      sizes="(max-width: 768px) 100vw, 44vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2.5 px-4 py-3">
                  {/* eslint-disable-next-line @next/next/no-img-element -- escudo municipal real */}
                  <img src={`${IMG}/escudo-municipal.png`} alt="" className="h-7 w-auto" />
                  <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    Municipio de {BIZ.city} · Ilustre Municipalidad
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="grid grid-cols-3 gap-px mt-10 border" style={{ backgroundColor: C.line, borderColor: C.line }}>
              {[
                { n: BIZ.establecimientos, t: 'Establecimientos municipales' },
                { n: BIZ.matricula, t: 'Estudiantes en la red' },
                { n: '4', t: 'Programas de apoyo' },
              ].map((s) => (
                <div key={s.t} className="py-5 md:py-7 px-3 text-center" style={{ backgroundColor: C.card }}>
                  <p className={`${display.className} text-3xl md:text-5xl leading-none`} style={{ color: C.navy }}>{s.n}</p>
                  <p className={`${mono.className} text-[9px] md:text-[11px] uppercase tracking-[0.12em] mt-2`} style={{ color: C.muted }}>{s.t}</p>
                </div>
              ))}
            </div>
            <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.12em] mt-2 text-right`} style={{ color: C.muted }}>
              Censo de Educación Municipal 2022 · BCN
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Ventanillas de trámites ── */}
      <section id="tramites" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-9">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeDeep }}>
                {BIZ.site}
              </p>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98]`} style={{ color: C.navy }}>
                Cuatro ventanillas,<br />una sola oficina
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Los trámites más buscados del DAEM se hacen en línea desde su
              portal institucional. Esta es la guía de quién atiende qué.
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {VENTANILLAS.map((v, i) => (
            <Reveal key={v.n} delay={i * 70}>
              <article className="h-full border" style={{ backgroundColor: C.card, borderColor: C.line }}>
                <div className="flex items-center justify-between px-5 py-2.5 border-b" style={{ backgroundColor: C.navy, borderColor: C.navy }}>
                  <span className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.2em]`} style={{ color: C.orange }}>{v.n}</span>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.navyMuted }}>Atención en línea</span>
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} uppercase text-xl md:text-2xl mb-1.5`} style={{ color: C.ink }}>{v.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{v.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La comuna en fotos ── */}
      <section id="red" className="border-y" style={{ backgroundColor: C.navy, borderColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- escudo municipal real */}
              <img src={`${IMG}/escudo-municipal.png`} alt="" className="h-8 md:h-10 w-auto" />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.orange }}>
                La comuna en fotos
              </p>
            </div>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] mb-9`} style={{ color: '#FFFFFF' }}>
              Becas, teatro y tecnología<br />en {BIZ.city}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {GALERIA.map((g, i) => (
              <Reveal key={g.src} delay={i * 70}>
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px rgba(231,232,255,0.2)` }}>
                    <Image
                      src={`${IMG}/${g.src}`}
                      alt={g.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 23vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] leading-snug mt-2.5`} style={{ color: C.navyMuted }}>
                    {g.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Directorio de la red ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeDeep }}>
            Directorio
          </p>
          <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] mb-9`} style={{ color: C.navy }}>
            La red municipal, de la ciudad al campo
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="border" style={{ borderColor: C.line, backgroundColor: C.card }}>
            {RED.map((e, i) => (
              <div
                key={e.name}
                className="flex items-baseline justify-between gap-4 px-4 md:px-6 py-3.5"
                style={{
                  backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(46,49,146,0.04)',
                  borderTop: i === 0 ? 'none' : `1px solid ${C.line}`,
                }}
              >
                <span className="text-sm md:text-[15px] font-semibold" style={{ color: C.ink }}>
                  {e.name}
                  {e.note && (
                    <span className="font-normal text-xs ml-2" style={{ color: C.muted }}>· {e.note}</span>
                  )}
                </span>
                <span
                  className={`${mono.className} shrink-0 text-[10px] md:text-[11px] uppercase tracking-[0.14em] px-2 py-0.5`}
                  style={e.sector === 'Rural'
                    ? { color: C.orangeDeep, border: `1px solid ${C.orange}` }
                    : { color: C.navy, border: `1px solid ${C.navy}` }}
                >
                  {e.sector}
                </span>
              </div>
            ))}
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] px-4 md:px-6 py-3 border-t`} style={{ color: C.muted, borderColor: C.line }}>
              {BIZ.establecimientos} establecimientos en total · muestra destacada del censo municipal
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Programas de apoyo ── */}
      <section id="programas" className="border-t" style={{ backgroundColor: C.card, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeDeep }}>
              Programas de apoyo
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] mb-5`} style={{ color: C.navy }}>
              Ningún estudiante fuera del aula
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              Becas, tecnología, transporte rural y alimentación: los cuatro
              programas que el DAEM coordina junto a la municipalidad y JUNAEB
              para que la educación municipal llegue a toda la comuna.
            </p>
            <div className="relative overflow-hidden" style={{ boxShadow: `inset 0 0 0 1px ${C.line}` }}>
              <div className="relative aspect-[16/9]">
                <Image
                  src={`${IMG}/tic-entrega.webp`}
                  alt="Entrega de computadores de la Beca TIC JUNAEB a estudiantes de San Clemente"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] px-3 py-2`} style={{ color: C.muted }}>
                Entrega Beca TIC JUNAEB · municipio de {BIZ.city}
              </p>
            </div>
          </Reveal>
          <div>
            {PROGRAMAS.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <div
                  className="flex gap-5 md:gap-7 py-5 md:py-6"
                  style={{ borderTop: i === 0 ? 'none' : `1px dashed ${C.line}` }}
                >
                  <span className={`${display.className} shrink-0 text-2xl md:text-3xl leading-none w-10 md:w-12`} style={{ color: C.orange }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`${display.className} uppercase text-lg md:text-xl mb-1`} style={{ color: C.ink }}>{p.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="border-t" style={{ backgroundColor: C.paper, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.15fr] gap-10">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.orangeDeep }}>
              Oficina del DAEM
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] mb-6`} style={{ color: C.navy }}>
              Alejandro Cruz 412,<br />{BIZ.city}
            </h2>
            <dl className="space-y-4 text-sm">
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Dirección</dt>
                <dd className="font-medium" style={{ color: C.ink }}>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Teléfono</dt>
                <dd>
                  <a href={CALL_LINK} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.navy }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Portal</dt>
                <dd style={{ color: C.ink }}>
                  <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.navy }}>
                    {BIZ.site}
                  </a>{' '}
                  · contratación docente, licencias y compras
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={CALL_LINK}
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
              >
                Llamar a la oficina
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ color: C.navy, boxShadow: `inset 0 0 0 2px ${C.navy}` }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] md:min-h-[420px]">
              <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <Image
          src={`${IMG}/teatro-publico.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.12]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- escudo municipal real */}
            <img src={`${IMG}/escudo-municipal.png`} alt="" className="h-12 md:h-14 w-auto mx-auto mb-6" aria-hidden="true" />
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,6.5vw,4rem)] leading-[0.98] mb-6`} style={{ color: '#FFFFFF' }}>
              Una ventana clara para<br />
              <span style={{ color: C.orange }}>toda la comunidad</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: C.navyMuted }}>
              Consultas de matrícula, becas o trámites docentes: llama a la
              oficina del DAEM en {BIZ.city}.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} uppercase tracking-[0.04em] inline-block text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#11124A', color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.navyMuted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: C.navyMuted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Google Maps
            </a>
            <a href={SITE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              {BIZ.site}
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(231,232,255,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-4 text-[11px] leading-snug" style={{ color: C.navyMuted }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.orange }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, fotos y cifras son
            datos públicos de la municipalidad y del censo de educación.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.orange }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.orange} fg="#FFFFFF" />
    </div>
  )
}
