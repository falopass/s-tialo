import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Paleta del terminal: azul noche de andén, verde Turbus y lima de sus
// señaléticas, con mono para el panel de salidas.
const C = {
  night: '#121A2C',
  panel: '#1B2740',
  panel2: '#223150',
  sheet: '#F2F5F2',
  card: '#FFFFFF',
  ink: '#182230',
  muted: '#5A6678',
  mutedLight: '#AEB9CE',
  line: 'rgba(255,255,255,0.12)',
  lineDark: 'rgba(24,34,48,0.14)',
  green: '#499C24',
  greenDark: '#3A7A1A',
  lime: '#CCFF5F',
  limeInk: '#15210B',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'terminal-tur-bus-talca',
  title: 'Terminal Tur Bus Talca — Salidas al norte y al sur desde 3 y Media Sur',
  description:
    'Terminal Tur Bus Talca, Tres y Media Sur 1962. Buses Turbus y Línea Azul hacia Santiago, Chillán, Temuco y todo el sur. Boleterías, andenes y kiosco.',
  image: `${IMG}/hero-turbus.webp`,
})

const NAV_LINKS = [
  { label: 'Salidas', href: '#salidas' },
  { label: 'El terminal', href: '#terminal' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Destinos publicados por guías de terminales para Tur Bus y Línea Azul desde Talca.
const SALIDAS = [
  { d: 'Santiago', zona: 'Norte' },
  { d: 'Rancagua', zona: 'Norte' },
  { d: 'Valparaíso / Viña del Mar', zona: 'Costa' },
  { d: 'Linares', zona: 'Maule' },
  { d: 'Chillán', zona: 'Sur' },
  { d: 'Los Ángeles', zona: 'Sur' },
  { d: 'Temuco', zona: 'Sur' },
  { d: 'Valdivia', zona: 'Sur' },
  { d: 'Puerto Montt', zona: 'Sur' },
]

const FOTOS = [
  { img: `${IMG}/anden-turbus.webp`, alt: 'Bus Turbus verde y blanco detenido en el andén del terminal de Talca', cap: 'Bus Turbus en el andén' },
  { img: `${IMG}/andenes.webp`, alt: 'Andenes del terminal con buses y la licorería del patio', cap: 'Andenes del terminal' },
  { img: `${IMG}/bus-anden.webp`, alt: 'Bus interurbano blanco cargando pasajeros en el andén', cap: 'Embarque en andén' },
  { img: `${IMG}/noche.webp`, alt: 'Andenes del terminal iluminados de noche', cap: 'Andenes de noche' },
]

const ADENTRO = [
  { t: 'Boleterías de Turbus y Línea Azul', d: 'Las dos empresas que salen de este terminal venden pasaje presencial aquí, en Tres y Media Sur 1962.' },
  { t: 'Andenes techados', d: 'Espera cubierta frente a los andenes, con bancas y vista directa a los buses que llegan.' },
  { t: 'Kiosco y almacenes', d: 'Locales de snacks, bebidas y completos dentro del patio para el viaje.' },
  { t: 'Equipaje y encomiendas', d: 'Los buses interurbanos llevan equipaje en la bodega; consulta en boletería por encomiendas.' },
]

const OPINIONES = [
  {
    n: 'Leonel Mancilla Arenas',
    t: 'Muy lindo, pequeño pero funcional. Tiene de todo: dulces, completos, almacenes y más. A mí me encanta.',
    s: 5,
  },
  {
    n: 'Alejandro Mendoza',
    t: 'Me gustó mucho. A pesar de que hacía mucho calor afuera, dentro del terminal estaba fresco.',
    s: 5,
  },
  {
    n: 'Quigui Gamer',
    t: 'Muy buen terminal de buses. El servicio, 10 de 10.',
    s: 5,
  },
]

export default function TerminalTurBusTalca() {
  return (
    <div className={body.className} style={{ background: C.night, color: C.ink }}>
      <BlitzNav
        name={
          // eslint-disable-next-line @next/next/no-img-element -- wordmark oficial en public/
          <img src={`${IMG}/logo-turbus-blanco.svg`} alt="Turbus" style={{ height: 22, width: 'auto' }} />
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.night, ink: C.white, line: C.line, btnBg: C.lime, btnInk: C.limeInk }}
      />

      {/* HERO — bus embarcando, a pantalla completa */}
      <header id="inicio" style={{ position: 'relative', minHeight: '92svh', display: 'flex', alignItems: 'flex-end' }}>
        <Image
          src={`${IMG}/hero-turbus.webp`}
          alt="Pasajeros embarcando en un bus Turbus en el terminal de Talca"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
        <div
          style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(180deg, rgba(18,26,44,0.42) 0%, rgba(18,26,44,0.36) 45%, rgba(18,26,44,0.94) 100%)',
          }}
        />
        <div style={{ position: 'relative', width: '100%', padding: '96px 20px 36px' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.lime, fontSize: 12, letterSpacing: '0.22em', margin: '0 0 10px', textTransform: 'uppercase' }}>
              Tres y Media Sur 1962 · Talca
            </p>
            <h1 className={display.className} style={{ color: C.white, fontSize: 'clamp(44px,11vw,96px)', lineHeight: 0.95, margin: 0, textTransform: 'uppercase' }}>
              De aquí sale<br />todo Talca
            </h1>
            <p style={{ color: C.white, fontSize: 'clamp(15px,2.4vw,19px)', maxWidth: 560, margin: '14px 0 0', lineHeight: 1.5 }}>
              El terminal de Turbus y Línea Azul en el centro-sur de Talca: boleterías, andenes techados y salidas diarias al norte y al sur del país.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 22 }}>
              <span className={mono.className} style={{ background: 'rgba(204,255,95,0.14)', border: `1px solid ${C.lime}`, color: C.lime, fontSize: 12, padding: '8px 12px', borderRadius: 999 }}>
                {BIZ.rating} ★ · {BIZ.reviews}
              </span>
              <span className={mono.className} style={{ background: 'rgba(255,255,255,0.10)', border: `1px solid ${C.line}`, color: C.white, fontSize: 12, padding: '8px 12px', borderRadius: 999 }}>
                Turbus + Línea Azul
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* PANEL DE SALIDAS — letrero de terminal */}
      <section id="salidas" style={{ padding: '56px 20px', maxWidth: 920, margin: '0 auto' }}>
        <Reveal>
          <p className={mono.className} style={{ color: C.lime, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Panel de salidas</p>
          <h2 className={display.className} style={{ color: C.white, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1, margin: '0 0 22px', textTransform: 'uppercase' }}>
            Destinos desde Talca
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div style={{ border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', background: C.panel }}>
            <div className={mono.className} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, padding: '12px 18px', fontSize: 11, letterSpacing: '0.18em', color: C.mutedLight, textTransform: 'uppercase', borderBottom: `1px solid ${C.line}` }}>
              <span>Destino</span><span>Zona</span>
            </div>
            {SALIDAS.map((s, i) => (
              <div
                key={s.d}
                className={mono.className}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr auto', gap: 8, alignItems: 'center',
                  padding: '13px 18px',
                  background: i % 2 === 0 ? 'rgba(255,255,255,0.03)' : 'transparent',
                  borderBottom: i < SALIDAS.length - 1 ? `1px solid ${C.line}` : 'none',
                }}
              >
                <span style={{ color: C.white, fontSize: 'clamp(14px,2.6vw,17px)', fontWeight: 700 }}>{s.d}</span>
                <span style={{ color: C.lime, fontSize: 12, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{s.zona}</span>
              </div>
            ))}
            <p className={mono.className} style={{ margin: 0, padding: '12px 18px', fontSize: 11, color: C.mutedLight, borderTop: `1px solid ${C.line}` }}>
              Horarios y precios en boletería o en turbus.cl
            </p>
          </div>
        </Reveal>
      </section>

      {/* EL TERMINAL — franja de fotos + servicios */}
      <section id="terminal" style={{ background: C.sheet, padding: '56px 0' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 20px' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.greenDark, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>El terminal</p>
            <h2 className={display.className} style={{ color: C.ink, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1, margin: '0 0 10px', textTransform: 'uppercase' }}>
              Pequeño, funcional y con de todo
            </h2>
            <p style={{ color: C.muted, maxWidth: 620, margin: '0 0 26px', lineHeight: 1.55 }}>
              Un patio compacto a seis cuadras del centro: andenes techados, kiosco con snacks y completos, y las boleterías de las dos empresas que operan aquí.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))', gap: 12 }}>
            {FOTOS.map((f, i) => (
              <Reveal key={f.img} delay={i * 70}>
                <figure style={{ margin: 0 }}>
                  <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 12, overflow: 'hidden' }}>
                    <Image src={f.img} alt={f.alt} fill sizes="(max-width:640px) 92vw, 25vw" style={{ objectFit: 'cover' }} />
                  </div>
                  <figcaption className={mono.className} style={{ fontSize: 11, color: C.muted, marginTop: 8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{f.cap}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 12, marginTop: 30 }}>
            {ADENTRO.map((a, i) => (
              <Reveal key={a.t} delay={i * 60}>
                <div style={{ background: C.card, border: `1px solid ${C.lineDark}`, borderRadius: 12, padding: '18px 18px 20px', height: '100%' }}>
                  <h3 className={display.className} style={{ color: C.ink, fontSize: 20, margin: '0 0 8px', textTransform: 'uppercase' }}>{a.t}</h3>
                  <p style={{ color: C.muted, fontSize: 14, margin: 0, lineHeight: 1.55 }}>{a.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* KIOSCO — foto ancha + banda verde */}
      <section style={{ position: 'relative', minHeight: 380, display: 'flex', alignItems: 'flex-end' }}>
        <Image src={`${IMG}/kiosco.webp`} alt="Kiosco del terminal con snacks, bebidas y completos" fill sizes="100vw" style={{ objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,26,44,0.15) 0%, rgba(18,26,44,0.88) 100%)' }} />
        <div style={{ position: 'relative', padding: '80px 20px 30px', maxWidth: 1060, margin: '0 auto', width: '100%' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.lime, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px' }}>Antes de subir</p>
            <h2 className={display.className} style={{ color: C.white, fontSize: 'clamp(26px,5vw,42px)', lineHeight: 1, margin: 0, textTransform: 'uppercase' }}>
              Snacks, bebidas y completos en el patio
            </h2>
          </Reveal>
        </div>
      </section>

      {/* OPINIONES */}
      <section id="opiniones" style={{ padding: '56px 20px', maxWidth: 920, margin: '0 auto' }}>
        <Reveal>
          <p className={mono.className} style={{ color: C.lime, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Opiniones en Google</p>
          <h2 className={display.className} style={{ color: C.white, fontSize: 'clamp(30px,6vw,52px)', lineHeight: 1, margin: '0 0 6px', textTransform: 'uppercase' }}>
            Lo que dicen quienes pasan
          </h2>
          <p className={mono.className} style={{ color: C.mutedLight, fontSize: 13, margin: '0 0 24px' }}>
            <Stars value={3.7} color={C.lime} /> {BIZ.rating} de 5 · {BIZ.reviews}
          </p>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12 }}>
          {OPINIONES.map((o, i) => (
            <Reveal key={o.n} delay={i * 80}>
              <blockquote style={{ background: C.panel, border: `1px solid ${C.line}`, borderRadius: 12, padding: '18px', margin: 0, height: '100%' }}>
                <Stars value={o.s} color={C.lime} />
                <p style={{ color: C.white, fontSize: 14, lineHeight: 1.6, margin: '10px 0 14px' }}>“{o.t}”</p>
                <cite className={mono.className} style={{ color: C.mutedLight, fontSize: 12, fontStyle: 'normal', letterSpacing: '0.06em' }}>— {o.n}</cite>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CÓMO LLEGAR */}
      <section id="llegar" style={{ background: C.sheet, padding: '56px 20px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.greenDark, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Cómo llegar</p>
            <h2 className={display.className} style={{ color: C.ink, fontSize: 'clamp(28px,5.4vw,46px)', lineHeight: 1, margin: '0 0 20px', textTransform: 'uppercase' }}>
              Tres y Media Sur 1962, Talca
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16, alignItems: 'stretch' }}>
            <Reveal>
              <div style={{ background: C.card, border: `1px solid ${C.lineDark}`, borderRadius: 12, padding: 20, height: '100%' }}>
                <dl className={mono.className} style={{ margin: 0, fontSize: 13, lineHeight: 2 }}>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Dirección</dt><dd style={{ margin: 0, color: C.ink, fontWeight: 700 }}>{BIZ.address}, {BIZ.city}</dd></div>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Teléfono</dt><dd style={{ margin: 0 }}><a href={TEL_LINK} style={{ color: C.greenDark, fontWeight: 700 }}>{BIZ.phoneTel}</a></dd></div>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Empresas</dt><dd style={{ margin: 0, color: C.ink }}>Turbus · Línea Azul</dd></div>
                </dl>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mono.className}
                  style={{ display: 'inline-block', marginTop: 14, background: C.greenDark, color: C.white, fontSize: 13, fontWeight: 700, padding: '12px 18px', borderRadius: 10, textDecoration: 'none', minHeight: 48 }}
                >
                  Abrir en Google Maps →
                </a>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${C.lineDark}`, height: 320 }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: C.night, padding: '28px 20px 110px', borderTop: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
          <Image src={`${IMG}/logo-turbus-blanco.svg`} alt="Turbus" width={110} height={27} />
          <p className={mono.className} style={{ color: C.mutedLight, fontSize: 11, margin: 0, letterSpacing: '0.06em' }}>
            {BIZ.name} · {BIZ.address}, {BIZ.city} · {BIZ.phoneTel}
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.green} fg="#FFF" />
    </div>
  )
}
