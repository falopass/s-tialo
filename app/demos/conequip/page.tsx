import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Navy profundo + rojo de obra, sacados del propio sitio de CONEQUIP.
const C = {
  navy: '#0A1524',
  navy2: '#10203A',
  rojo: '#E42620',
  rojoTxt: '#F5523F',
  paper: '#F2F0EA',
  ink: '#101820',
  muted: '#8FA0B4',
  mutedLight: '#5B6B7E',
  white: '#F5F7FA',
  line: 'rgba(255,255,255,0.12)',
  lineDark: 'rgba(16,24,32,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'conequip',
  title: 'CONEQUIP · Constructora en Talca desde 1988',
  description:
    'Edificación, obras civiles, movimiento de tierra, tranques y canales, arriendo de maquinaria y demoliciones. Empresa familiar de Talca, Región del Maule, desde 1988.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La empresa', href: '#empresa' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Obras', href: '#obras' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  { n: '01', name: 'Edificación', desc: 'Galpones, plantas y edificios industriales y comerciales, desde la fundación al techo.' },
  { n: '02', name: 'Obras civiles y viales', desc: 'Hormigón, pavimentos, veredas y obras viales para privados y mandantes públicos.' },
  { n: '03', name: 'Movimiento de tierra', desc: 'Excavaciones, rellenos y nivelación de terreno con maquinaria propia.' },
  { n: '04', name: 'Tranques y canales', desc: 'Obras hidráulicas y de captación para riego y agroindustria en la región.' },
  { n: '05', name: 'Arriendo de maquinaria', desc: 'Equipos con operador para obras de terceros, por día o por proyecto.' },
  { n: '06', name: 'Demoliciones', desc: 'Retiro controlado de estructuras y preparación del sitio para la obra nueva.' },
]

const OBRAS = [
  {
    src: 'obra-silos.webp',
    alt: 'Batería de silos metálicos construida por CONEQUIP, vista aérea',
    cap: 'Silos y plantas de grano',
    tag: 'Obra industrial',
    tall: true,
  },
  {
    src: 'obra-torre.webp',
    alt: 'Torre de oficinas con fachada de vidrio terminada por CONEQUIP',
    cap: 'Edificios de oficinas',
    tag: 'Edificación',
    tall: false,
  },
  {
    src: 'obra-faja.webp',
    alt: 'Corredores de fajas y estructuras metálicas de una planta industrial',
    cap: 'Montaje industrial',
    tag: 'Obra civil',
    tall: false,
  },
  {
    src: 'obra-galpon.webp',
    alt: 'Galpón industrial con camiones en el patio, construido por CONEQUIP',
    cap: 'Galpones y logística',
    tag: 'Edificación',
    tall: true,
  },
  {
    src: 'obra-terreno.webp',
    alt: 'Terreno nivelado y compactado para losa industrial, vista aérea',
    cap: 'Movimiento de tierra',
    tag: 'Terreno',
    tall: false,
  },
  {
    src: 'obra-planta.webp',
    alt: 'Planta agroindustrial con techumbre vista desde drone',
    cap: 'Planta agroindustrial',
    tag: 'Obra industrial',
    tall: true,
  },
]

export default function DemoConequip() {
  return (
    <main
      id="inicio"
      className={`${body.className} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.navy, color: C.white }}
    >
      <BlitzNav
        name={
          <Image
            src={`${IMG}/logo.webp`}
            alt="CONEQUIP"
            width={110}
            height={30}
            className="h-[26px] w-auto"
          />
        }
        links={NAV_LINKS}
        waLink={BIZ.phoneTel}
        ctaLabel="Llamar"
        theme={{
          over: 'dark',
          bar: 'rgba(10,21,36,0.94)',
          ink: C.white,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: la obra vista desde el aire ── */}
      <section className="relative min-h-[92svh] flex items-end">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Planta industrial construida por CONEQUIP vista desde drone"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,21,36,0.62) 0%, rgba(10,21,36,0.25) 45%, rgba(10,21,36,0.95) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-32">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4 flex items-center gap-2`} style={{ color: 'rgba(255,255,255,0.88)' }}>
              <span aria-hidden="true" className="inline-block w-6 h-[2px]" style={{ backgroundColor: C.rojoTxt }} />
              {BIZ.nameFull} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} uppercase text-[40px] md:text-[68px] leading-[0.96] text-white max-w-[15ch] mb-5`}
            >
              Obras que se ven desde el aire
            </h1>
            <p className="text-[15px] md:text-lg leading-relaxed max-w-[54ch] mb-7" style={{ color: 'rgba(245,247,250,0.85)' }}>
              Constructora familiar de Talca. Desde 1988 levantando plantas
              industriales, silos, torres y obras civiles en la región del
              Maule.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BIZ.phoneTel}
                className="inline-flex items-center px-5 py-3 rounded-[4px] text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.rojo, color: '#fff' }}
              >
                Cotizar una obra
              </a>
              <a
                href="#obras"
                className="inline-flex items-center px-5 py-3 rounded-[4px] text-sm font-semibold border text-white transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.45)' }}
              >
                Ver el registro en dron
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Índice de empresa ── */}
      <section id="empresa" className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6">
          {[
            { k: 'Desde 1988', v: 'empresa familiar' },
            { k: '6 líneas', v: 'de servicio en obra' },
            { k: 'Talca, Maule', v: 'casa matriz y terreno' },
            { k: 'SpA', v: `RUT ${BIZ.rut}` },
          ].map((it) => (
            <div key={it.k} className="min-w-0">
              <p className={`${display.className} uppercase text-[20px] md:text-[24px] leading-none`}>{it.k}</p>
              <p className={`${mono.className} mt-1.5 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {it.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Servicios como índice de obra ── */}
      <section id="servicios" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-10">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.rojoTxt }}>
                  Índice de servicios
                </p>
                <h2 className={`${display.className} uppercase text-[30px] md:text-[44px] leading-[0.98]`}>
                  Todo lo que entra en una obra
                </h2>
              </div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                Seis líneas · mandantes privados y públicos
              </p>
            </div>
          </Reveal>
          <div className="border-t" style={{ borderColor: C.line }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 50}>
                <div
                  className="grid grid-cols-[52px_1fr] md:grid-cols-[90px_320px_1fr] items-start md:items-baseline gap-x-4 py-5 md:py-6 border-b"
                  style={{ borderColor: C.line }}
                >
                  <span className={`${mono.className} text-[12px] pt-1`} style={{ color: C.rojoTxt }}>
                    N°{s.n}
                  </span>
                  <h3 className={`${display.className} uppercase text-[20px] md:text-[26px] leading-[1.02]`}>
                    {s.name}
                  </h3>
                  <p className="col-span-2 md:col-span-1 mt-1.5 md:mt-0 text-[14px] leading-relaxed max-w-[58ch]" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Obras en dron: el portafolio ── */}
      <section id="obras" style={{ backgroundColor: C.navy2 }} className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.rojoTxt }}>
              Registro propio, desde dron
            </p>
            <h2 className={`${display.className} uppercase text-[30px] md:text-[44px] leading-[0.98] mb-9`}>
              El portafolio se ve mejor desde arriba
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {OBRAS.map((o, i) => (
              <Reveal key={o.src} delay={i * 60} className={o.tall ? 'row-span-2' : ''}>
                <figure className="group relative h-full">
                  <div className={`relative overflow-hidden rounded-[6px] border h-full ${o.tall ? 'min-h-[300px] md:min-h-[420px]' : 'min-h-[180px] md:min-h-[210px]'}`} style={{ borderColor: C.line }}>
                    <Image
                      src={`${IMG}/${o.src}`}
                      alt={o.alt}
                      fill
                      sizes="(max-width:768px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <span
                      className={`${mono.className} absolute top-2.5 left-2.5 text-[9px] uppercase tracking-[0.12em] px-2 py-1 rounded-[3px]`}
                      style={{ backgroundColor: 'rgba(10,21,36,0.85)', color: '#F5F7FA' }}
                    >
                      {o.tag}
                    </span>
                  </div>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {o.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cierre: cotización ── */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4`} style={{ color: C.rojoTxt }}>
              Cotizaciones
            </p>
            <h2 className={`${display.className} uppercase text-[30px] md:text-[46px] leading-[0.98] max-w-[18ch] mx-auto mb-5`}>
              La próxima obra puede ser la tuya
            </h2>
            <p className="text-[15px] leading-relaxed max-w-[52ch] mx-auto mb-7" style={{ color: C.muted }}>
              Llamas, cuentas qué necesitas construir y el equipo técnico te
              responde. La oficina atiende de lunes a viernes en 4 Norte, Talca.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={BIZ.phoneTel}
                className="inline-flex items-center px-6 py-3 rounded-[4px] text-sm font-bold transition-transform active:scale-95"
                style={{ backgroundColor: C.rojo, color: '#fff' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={`mailto:${BIZ.mail}`}
                className="inline-flex items-center px-6 py-3 rounded-[4px] text-sm font-semibold border text-white transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.45)' }}
              >
                {BIZ.mail}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto + mapa (sobre papel claro para cortar) ── */}
      <section id="contacto" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div
            className="rounded-[14px] overflow-hidden grid lg:grid-cols-5"
            style={{ backgroundColor: C.paper, color: C.ink }}
          >
            <div className="lg:col-span-3 p-6 md:p-9">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-4`} style={{ color: '#C81D18' }}>
                  Oficina
                </p>
                <h2 className={`${display.className} uppercase text-[26px] md:text-[34px] leading-[0.98] mb-6`}>
                  4 Norte 1425, Talca
                </h2>
                <dl className="space-y-4 text-[14px] md:text-[15px]">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.mutedLight }}>
                        Horario
                      </dt>
                      <dd>{BIZ.hours}</dd>
                    </div>
                    <div>
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.mutedLight }}>
                        Razón social
                      </dt>
                      <dd>{BIZ.razonSocial}</dd>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.mutedLight }}>
                        Teléfono
                      </dt>
                      <dd>
                        <a href={BIZ.phoneTel} className="font-semibold underline underline-offset-4 decoration-1">
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.mutedLight }}>
                        Celular / WhatsApp
                      </dt>
                      <dd>
                        <a href={BIZ.waLink} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-1">
                          {BIZ.cellDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mb-1`} style={{ color: C.mutedLight }}>
                      Correo
                    </dt>
                    <dd>
                      <a href={`mailto:${BIZ.mail}`} className="font-semibold underline underline-offset-4 decoration-1">
                        {BIZ.mail}
                      </a>
                      <span className={`${mono.className} ml-3 text-[11px]`} style={{ color: C.mutedLight }}>
                        {BIZ.site}
                      </span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 flex items-center gap-3 flex-wrap">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 rounded-[4px] text-sm font-bold transition-transform active:scale-95"
                    style={{ backgroundColor: C.rojo, color: '#fff' }}
                  >
                    Cómo llegar
                  </a>
                  <span className="inline-flex items-center gap-2 text-[12px]" style={{ color: C.mutedLight }}>
                    <Stars value={BIZ.rating} color={C.rojo} className="w-3.5 h-3.5" />
                    {BIZ.rating} · {BIZ.reviews} reseñas en Maps
                  </span>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-2 relative min-h-[280px]">
              <LazyMap
                src={MAPS_EMBED}
                title="Ubicación de CONEQUIP en 4 Norte, Talca"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: '#060D18' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
          <Image
            src={`${IMG}/logo.webp`}
            alt="CONEQUIP, constructora de Talca"
            width={130}
            height={36}
            className="h-[30px] w-auto"
          />
          <div className="flex-1 min-w-0">
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.razonSocial} · RUT {BIZ.rut}
            </p>
          </div>
          <p className={`${mono.className} text-[11px] leading-relaxed md:text-right`} style={{ color: C.muted }}>
            {BIZ.address}, {BIZ.city}, {BIZ.region}
            <br />
            Demo de ejemplo · Sitiazo
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.rojo} fg="#fff" />
    </main>
  )
}
