import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_RETRO,
  FACEBOOK_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  piedra: '#EDE8DC',
  card: '#F8F5ED',
  tinta: '#1E232A',
  oscuro: '#20262E',
  azul: '#1F5C9E',
  azulDeep: '#174678',
  muted: '#575C63',
  line: 'rgba(30,35,42,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'moyano-aridos',
  title: 'Moyano Áridos · Venta de áridos y movimiento de tierras en San Clemente',
  description:
    'Áridos en San Clemente: ripio, gravilla y arena con despacho a obra, más servicio de retroexcavadora. Cotiza por WhatsApp.',
  image: `${IMG}/cantera.webp`,
})

const NAV_LINKS = [
  { label: 'Áridos', href: '#aridos' },
  { label: 'Maquinaria', href: '#maquinaria' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const MATERIALES = [
  {
    name: 'Ripio',
    desc: 'El pétreo de siempre para radier, fundaciones y caminos interiores.',
  },
  {
    name: 'Gravilla',
    desc: 'Árido grueso para hormigones, drenajes y bases compactables.',
  },
  {
    name: 'Arena',
    desc: 'Arena para mezclas, nivelación de terreno y terminaciones.',
  },
  {
    name: 'Tierra y estabilizado',
    desc: 'Relleno y preparación de suelo para obras chicas y grandes.',
  },
]

const REVIEWS = [
  {
    name: 'Ricardo Contardo Correa',
    text: 'Excelente atención, rápida y muy cordial. Local muy surtido en su rubro, y atendido por sus dueños.',
  },
  {
    name: 'Hernan Olavarria',
    text: 'Tienen todo: materiales áridos y las entregas son siempre confiables.',
  },
  {
    name: 'Aaron Suarez',
    text: 'Buena atención y precios convenientes.',
  },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 a 18:00' },
  { d: 'Sábado', h: '9:00 a 13:00' },
  { d: 'Domingo', h: 'Cerrado' },
]

const tape = `repeating-linear-gradient(-45deg, ${C.tinta} 0 12px, ${C.piedra} 12px 24px)`

function Cinta() {
  return <div aria-hidden="true" className="h-[10px]" style={{ background: tape }} />
}

export default function Page() {
  return (
    <div className={body.className} style={{ background: C.piedra, color: C.tinta }}>
      <BlitzNav
        name={
          <span className={`${display.className} uppercase tracking-wide text-[17px] md:text-xl`}>
            Moyano <span style={{ color: C.azul }}>Áridos</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(237,232,220,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.azul,
          btnInk: '#FFFFFF',
        }}
        ctaLabel="Cotizar"
      />

      {/* Hero: cantera a todo ancho */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ background: C.oscuro }}>
        <Image
          src={`${IMG}/cantera.webp`}
          alt="Planta de áridos de Moyano Áridos en Bajos de Lircay, San Clemente"
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
              'linear-gradient(180deg, rgba(32,38,46,0.15) 0%, rgba(32,38,46,0.45) 50%, rgba(32,38,46,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 pt-36">
          <Reveal>
            <p className={`${mono.className} text-[13px] font-medium tracking-[0.18em] uppercase`} style={{ color: '#C7D6E8' }}>
              Venta de áridos · Retroexcavadora · Despacho a obra
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} uppercase text-white leading-[0.95] text-[46px] sm:text-7xl md:text-8xl max-w-[11ch] mt-3`}>
              De la cantera a tu obra, sin vueltas
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-white/90 text-base md:text-lg max-w-[52ch] mt-4">
              Áridos en Bajos de Lircay, {BIZ.city}: ripio, gravilla y arena por metro o camión, atendido por sus dueños.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} ${display.className} uppercase tracking-wide text-lg px-6 inline-flex items-center justify-center text-white`}
                style={{ background: C.azul, height: 52, borderRadius: 4 }}
              >
                Cotizar por WhatsApp
              </a>
              <span className="inline-flex items-center gap-2 text-white/95 text-sm font-medium px-4 h-11 rounded-full border border-white/25 backdrop-blur-sm">
                <Stars value={4.8} color="#FFC531" className="w-3.5 h-3.5" />
                {BIZ.googleRating} · {BIZ.googleReviews} opiniones
              </span>
            </div>
          </Reveal>
          <Reveal delay={260}>
            <dl className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-y-3 border-t border-white/20 pt-5 text-sm">
              {[
                ['Planta', 'Punta Diamante, Bajos de Lircay'],
                ['Comuna', `${BIZ.city}, Maule`],
                ['Hoy', '9:00 a 18:00'],
                ['Sábado', '9:00 a 13:00'],
              ].map(([t, v]) => (
                <div key={t}>
                  <dt className={`${mono.className} uppercase tracking-[0.16em] text-[11px] font-medium text-white/60`}>{t}</dt>
                  <dd className="text-white font-medium mt-0.5">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <Cinta />

      {/* Áridos: guía de materiales */}
      <section id="aridos" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.tinta }}>
                Materiales por metro o por camión
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 rounded-md overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/ripio.webp`}
                  alt="Ripio descargado en la planta de Moyano Áridos"
                  width={1200}
                  height={1200}
                  className="w-full object-cover aspect-[4/3]"
                />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className={`${mono.className} mt-3 text-[12px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                Foto real: acopio en planta
              </p>
            </Reveal>
          </div>
          <ul className="divide-y" style={{ borderTop: `1px solid ${C.line}`, borderColor: C.line }}>
            {MATERIALES.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={i * 50}>
                  <div className="py-5 md:py-6">
                    <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-tight`} style={{ color: C.azulDeep }}>
                      {m.name}
                    </h3>
                    <p className="text-[15px] leading-relaxed mt-1" style={{ color: C.muted }}>
                      {m.desc}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Maquinaria y despacho */}
      <section id="maquinaria" className="py-16 md:py-24" style={{ background: C.oscuro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} uppercase text-white leading-[0.95] text-4xl md:text-6xl max-w-[16ch]`}>
              Camiones, retro y el patio lleno
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-4">
            <Reveal>
              <figure className="rounded-md overflow-hidden bg-black/20">
                <Image
                  src={`${IMG}/camiones.webp`}
                  alt="Camiones de Moyano Áridos estacionados en la planta"
                  width={1200}
                  height={800}
                  className="w-full object-cover aspect-[4/3]"
                />
                <figcaption className={`${mono.className} px-4 py-3 text-[12px] tracking-[0.12em] uppercase text-white/70`}>
                  Flota propia · despacho coordinado por WhatsApp
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure className="rounded-md overflow-hidden bg-black/20">
                <Image
                  src={`${IMG}/camion-obra.webp`}
                  alt="Camión de Moyano Áridos trabajando junto a un canal"
                  width={1200}
                  height={800}
                  className="w-full object-cover aspect-[4/3]"
                />
                <figcaption className={`${mono.className} px-4 py-3 text-[12px] tracking-[0.12em] uppercase text-white/70`}>
                  Movimiento de tierras en terreno
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div
              className="mt-4 rounded-md p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5"
              style={{ background: C.azulDeep, border: '1px dashed rgba(255,255,255,0.3)' }}
            >
              <div className="flex-1">
                <h3 className={`${display.className} uppercase text-white text-2xl md:text-3xl`}>
                  ¿Te falta máquina? Servicio de retroexcavadora
                </h3>
                <p className="text-white/85 text-[15px] mt-2 max-w-[52ch]">
                  Es lo que anuncia su propia página: venta de áridos y servicio de retroexcavadora. Se coordina directo con los dueños.
                </p>
              </div>
              <a
                href={WA_LINK_RETRO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} ${display.className} shrink-0 uppercase tracking-wide text-lg px-6 inline-flex items-center justify-center text-white`}
                style={{ background: C.azul, height: 52, borderRadius: 4 }}
              >
                Consultar máquina
              </a>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-4 rounded-md overflow-hidden">
              <Image
                src={`${IMG}/acopio.webp`}
                alt="Pilas de áridos en la planta de Moyano Áridos"
                width={1200}
                height={800}
                className="w-full object-cover aspect-[21/9]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <Cinta />

      {/* Opiniones: guías de despacho */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.95] text-4xl md:text-6xl max-w-[16ch]`}>
            Palabra de obra
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <figure
                className="h-full p-5"
                style={{ background: C.card, border: `1px dashed ${C.muted}`, borderRadius: 4 }}
              >
                <Stars value={5} color={C.azul} />
                <blockquote className="mt-3 text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} mt-4 uppercase tracking-[0.12em] text-[12px] font-medium`} style={{ color: C.muted }}>
                  {r.name} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <div className="mt-5 flex flex-wrap gap-5">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRing} text-sm font-semibold underline underline-offset-4`}
              style={{ color: C.azul }}
            >
              Ver la ficha en Google Maps
            </a>
            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${focusRing} text-sm font-semibold underline underline-offset-4`}
              style={{ color: C.azul }}
            >
              Moyano Aridos en Facebook
            </a>
          </div>
        </Reveal>
      </section>

      {/* Contacto: boleta de despacho + mapa */}
      <section id="contacto" className="py-16 md:py-24" style={{ background: C.oscuro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} uppercase text-white leading-[0.95] text-4xl md:text-6xl`}>
                Coordina tu despacho
              </h2>
            </Reveal>
            <Reveal delay={70}>
              <p className="mt-4 text-white/85 text-[15px] md:text-base max-w-[48ch]">
                {BIZ.address}, {BIZ.city}. Escribe qué material y cuántos metros necesitas y te responden con precio y fecha.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-6 divide-y divide-white/15 border-t border-b border-white/15">
                {HORARIO.map((h) => (
                  <li key={h.d} className="flex items-center justify-between py-3">
                    <span className={`${mono.className} uppercase tracking-[0.14em] text-[13px] font-medium text-white/70`}>{h.d}</span>
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
                  className={`${focusRing} ${display.className} inline-flex items-center justify-center uppercase tracking-wide text-lg px-6 text-white`}
                  style={{ background: C.azul, height: 52, borderRadius: 4 }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} ${display.className} inline-flex items-center justify-center uppercase tracking-wide text-lg px-6 border border-white/30 text-white`}
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
          <h2 className={`${display.className} uppercase leading-[0.95] text-3xl md:text-5xl`}>
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
            className={`${focusRing} ${display.className} mt-6 inline-flex items-center justify-center uppercase tracking-wide text-lg px-8 text-white`}
            style={{ background: C.azul, height: 52, borderRadius: 4 }}
          >
            Quiero mi sitio
          </a>
        </Reveal>
      </section>

      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className={`${display.className} uppercase tracking-wide text-lg`} style={{ color: C.tinta }}>
            Moyano <span style={{ color: C.azul }}>Áridos</span>
          </p>
          <p className="text-[13px] leading-relaxed max-w-[58ch]" style={{ color: C.muted }}>
            Mockup preparado por {SITE.name} para {BIZ.name} con datos y fotos de su ficha y su Facebook. ¿Lo hacemos realidad?
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

      <WaFab href={WA_LINK} label="Escribir por WhatsApp a Moyano Áridos" />
    </div>
  )
}
