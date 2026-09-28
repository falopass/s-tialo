import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_REPUESTOS,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})

const C = {
  azul: '#0F2E66',
  azulDeep: '#081F4A',
  azulSoft: '#173E85',
  naranjo: '#D63E15',
  naranjoVivo: '#F04E23',
  rojo: '#C6261B',
  papel: '#F4F4EF',
  card: '#FBFBF7',
  tinta: '#141B26',
  muted: '#5B6574',
  line: 'rgba(20,27,38,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'lubricentro-arto',
  title: 'Lubricentro Arto · Cambio de aceite y repuestos en San Clemente',
  description:
    'Lubricentro y repuestos en Av. Huamachuco, San Clemente: cambio de aceite, filtros, baterías y aditivos Liqui Moly. Atención directa por WhatsApp.',
  image: `${IMG}/local-2.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El local', href: '#local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    name: 'Cambio de aceite y filtro',
    desc: 'El servicio principal de la casa: aceite del grado que pide tu motor y filtro nuevo.',
  },
  {
    name: 'Aditivos y lubricantes Liqui Moly',
    desc: 'Línea alemana de aditivos y lubricantes, como anuncia el letrero del local.',
  },
  {
    name: 'Filtros',
    desc: 'Filtros de aire, aceite y combustible para los modelos más andados.',
  },
  {
    name: 'Baterías',
    desc: 'Baterías en tienda y consejo honesto sobre si toca cambiar o no.',
  },
  {
    name: 'Repuestos y accesorios',
    desc: 'Repuestos de mantención y accesorios de uso diario en el mismo local.',
  },
  {
    name: 'Herramientas',
    desc: 'Herramientas y consumibles de taller, tal como describen los clientes.',
  },
]

const REVIEWS = [
  {
    name: 'Carlos Roco Albornoz',
    text: 'Buen servicio y variedad de productos. Aceites, filtros, herramientas, baterías, etc.',
  },
  {
    name: 'Nicolas Rivas',
    text: 'Excelente atención, un excelente precio.',
  },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '8:30 a 13:00 y 14:00 a 18:10' },
  { d: 'Sábado', h: '9:00 a 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

const checkers =
  'repeating-conic-gradient(#141B26 0% 25%, #F4F4EF 0% 50%) 0 0 / 14px 14px repeat-x'
const stripes = `repeating-linear-gradient(-45deg, ${C.naranjoVivo} 0 10px, transparent 10px 20px)`

function Bandera() {
  return <div aria-hidden="true" className="h-[7px]" style={{ background: checkers }} />
}

export default function Page() {
  return (
    <div className={body.className} style={{ background: C.papel, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} uppercase font-bold italic tracking-tight`}>
            arto<span style={{ color: C.naranjoVivo }}>.</span>
          </span>
        }
        links={NAV_LINKS}

        waLink={WA_LINK}
        logoSrc={`${IMG}/letrero.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(8,31,74,0.92)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.naranjo,
          btnInk: '#FFFFFF',
        }}
        ctaLabel="Consultar"
      />

      {/* Hero: foto del local con velo azul racing */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ background: C.azulDeep }}>
        <Image
          src={`${IMG}/local-2.webp`}
          alt="Local de Lubricentro Arto en Av. Huamachuco, San Clemente"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(8,31,74,0.25) 0%, rgba(8,31,74,0.55) 55%, rgba(8,31,74,0.94) 100%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-0 right-0 h-full w-[38%] opacity-60 hidden md:block"
          style={{ background: stripes, maskImage: 'linear-gradient(90deg, transparent, #000)', WebkitMaskImage: 'linear-gradient(90deg, transparent, #000)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 pt-36">
          <Reveal>
            <p
              className={`${display.className} uppercase tracking-[0.22em] text-[13px] font-semibold`}
              style={{ color: '#FFB59E' }}
            >
              Lubricentro · Repuestos · Serviteca
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`${display.className} uppercase font-extrabold text-white leading-[0.95] text-[44px] sm:text-6xl md:text-7xl max-w-[13ch] mt-3`}
            >
              Cambia el aceite sin perder la mañana
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="text-white/90 text-base md:text-lg max-w-[52ch] mt-4">
              En Av. Huamachuco, {BIZ.city}: aceite, filtros, baterías y repuestos en un solo piso, con la rapidez de un lubricentro de verdad.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} ${display.className} uppercase font-bold tracking-wide text-base md:text-lg px-6 inline-flex items-center justify-center text-white`}
                style={{ background: C.naranjo, height: 52, borderRadius: 4 }}
              >
                Consultar por WhatsApp
              </a>
              <span className="inline-flex items-center gap-2 text-white/95 text-sm font-medium px-4 h-11 rounded-full border border-white/25 backdrop-blur-sm">
                <Stars value={4.3} color="#FFC531" className="w-3.5 h-3.5" />
                {BIZ.googleRating} · {BIZ.googleReviews} opiniones
              </span>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-3 border-t border-white/20 pt-5 text-sm">
              {[
                ['Dirección', `${BIZ.address}`],
                ['Comuna', `${BIZ.city}, Maule`],
                ['Hoy', '8:30-13:00 / 14:00-18:10'],
                ['Sábado', '9:00-13:00'],
              ].map(([t, v]) => (
                <div key={t}>
                  <dt className={`${display.className} uppercase tracking-[0.18em] text-[11px] font-semibold text-white/60`}>{t}</dt>
                  <dd className="text-white font-medium mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Bandera />

      {/* Servicios: pizarra de boxes */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-start">
          <div className="md:sticky md:top-24">
            <Reveal>
              <h2 className={`${display.className} uppercase font-extrabold leading-[0.95] text-4xl md:text-5xl`} style={{ color: C.azul }}>
                Todo lo que tu auto pide, en un piso
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                La reseña más repetida dice lo mismo: hay variedad. Aceites, filtros, herramientas y baterías comparten estantería con el serviteca del fondo.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <a
                href={WA_LINK_REPUESTOS}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} ${display.className} mt-6 inline-flex items-center justify-center uppercase font-bold tracking-wide text-base px-6 text-white`}
                style={{ background: C.azul, height: 52, borderRadius: 4 }}
              >
                Consultar stock
              </a>
            </Reveal>
          </div>
          <ul className="divide-y" style={{ borderTop: `1px solid ${C.line}`, borderColor: C.line }}>
            {SERVICIOS.map((s, i) => (
              <li key={s.name}>
                <Reveal delay={i * 40}>
                  <div className="flex items-baseline gap-4 py-5">
                    <span
                      aria-hidden="true"
                      className="shrink-0 w-2.5 h-2.5 mt-1"
                      style={{ background: i % 2 === 0 ? C.naranjo : C.azul }}
                    />
                    <div>
                      <h3 className={`${display.className} uppercase font-bold text-xl md:text-2xl leading-tight`} style={{ color: C.tinta }}>
                        {s.name}
                      </h3>
                      <p className="text-[15px] leading-relaxed mt-1" style={{ color: C.muted }}>
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* El local: collage asimétrico de fotos reales */}
      <section id="local" className="py-16 md:py-24" style={{ background: C.azul }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className={`${display.className} uppercase font-extrabold text-white leading-[0.95] text-4xl md:text-5xl`}>
                El local, en la misma avenida de siempre
              </h2>
              <p className="text-white/75 text-sm max-w-[36ch]">
                Av. Huamachuco 1994, San Clemente. Letrero azul, difícil de perder.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            <Reveal className="col-span-2 row-span-2">
              <Image
                src={`${IMG}/local-4.webp`}
                alt="Fachada de Lubricentro Arto con el letrero Liqui Moly"
                width={1200}
                height={900}
                className="w-full h-full object-cover rounded-md"
              />
            </Reveal>
            <Reveal delay={60}>
              <Image
                src={`${IMG}/local-1.webp`}
                alt="Entrada de Lubricentro Arto con productos a la vista"
                width={700}
                height={700}
                className="w-full h-full object-cover rounded-md aspect-square"
              />
            </Reveal>
            <Reveal delay={100}>
              <Image
                src={`${IMG}/local-3.webp`}
                alt="Lubricentro Arto visto desde Av. Huamachuco"
                width={700}
                height={700}
                className="w-full h-full object-cover rounded-md aspect-square"
              />
            </Reveal>
            <Reveal delay={140} className="col-span-2">
              <Image
                src={`${IMG}/letrero.webp`}
                alt="Letrero de arto Serviteca con línea Liqui Moly"
                width={1200}
                height={500}
                className="w-full h-full object-cover rounded-md"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <Bandera />

      {/* Opiniones */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} uppercase font-extrabold leading-[0.95] text-4xl md:text-5xl max-w-[18ch]`} style={{ color: C.azul }}>
            Lo que dicen en las {BIZ.googleReviews} opiniones
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <figure className="h-full rounded-md p-6 border" style={{ background: C.card, borderColor: C.line }}>
                <Stars value={5} color="#E8A020" />
                <blockquote className="mt-3 text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${display.className} mt-4 uppercase tracking-[0.14em] text-[13px] font-semibold`} style={{ color: C.muted }}>
                  {r.name} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${focusRing} inline-block mt-5 text-sm font-semibold underline underline-offset-4`}
            style={{ color: C.azul }}
          >
            Ver la ficha en Google Maps
          </a>
        </Reveal>
      </section>

      {/* Horario + mapa + contacto */}
      <section id="contacto" className="py-16 md:py-24" style={{ background: C.azulDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} uppercase font-extrabold text-white leading-[0.95] text-4xl md:text-5xl`}>
                Pasa por la casa
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-4 text-white/85 text-[15px] md:text-base max-w-[48ch]">
                {BIZ.address}, {BIZ.city}, {BIZ.region}. Escribe por WhatsApp si quieres asegurar el repuesto antes de ir.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-6 divide-y divide-white/15 border-t border-b border-white/15">
                {HORARIO.map((h) => (
                  <li key={h.d} className="flex items-center justify-between py-3">
                    <span className={`${display.className} uppercase tracking-[0.12em] text-sm font-semibold text-white/70`}>{h.d}</span>
                    <span className="text-white font-medium">{h.h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} ${display.className} inline-flex items-center justify-center uppercase font-bold tracking-wide px-6 text-white`}
                  style={{ background: C.naranjo, height: 52, borderRadius: 4 }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} ${display.className} inline-flex items-center justify-center uppercase font-bold tracking-wide px-6 border border-white/30 text-white`}
                  style={{ height: 52, borderRadius: 4 }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="rounded-md overflow-hidden border border-white/20" style={{ aspectRatio: '4/3' }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Sitiazo */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
        <Reveal>
          <h2 className={`${display.className} uppercase font-extrabold leading-[0.95] text-3xl md:text-5xl`} style={{ color: C.azul }}>
            Una página así puede ser la tuya
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 text-[15px] md:text-base max-w-[52ch] mx-auto" style={{ color: C.muted }}>
            Sitiazo diseña sitios para pymes del Maule desde $79.990. Este es un mockup hecho con la información pública de {BIZ.short}.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <a
            href={whatsappLink('demo')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${focusRing} ${display.className} mt-6 inline-flex items-center justify-center uppercase font-bold tracking-wide px-8 text-white`}
            style={{ background: C.naranjo, height: 52, borderRadius: 4 }}
          >
            Quiero mi sitio
          </a>
        </Reveal>
      </section>

      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className={`${display.className} uppercase font-bold text-lg`} style={{ color: C.azul }}>
            arto<span style={{ color: C.naranjo }}>.</span>
          </p>
          <p className="text-[13px] leading-relaxed max-w-[58ch]" style={{ color: C.muted }}>
            Mockup preparado por {SITE.name} para {BIZ.name} con datos y fotos de su ficha pública. ¿Lo hacemos realidad?
          </p>
          <a
            href={whatsappLink('demo')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${focusRing} text-[13px] font-semibold underline underline-offset-4`}
            style={{ color: C.azul }}
          >
            Escribir a Sitiazo
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Escribir por WhatsApp a Lubricentro Arto" />
    </div>
  )
}
