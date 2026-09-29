import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

// Identidad de su marca: azul corporativo Portal del Maule, celeste de acento
// y blanco; mono para precios y fichas de la cartera.
const C = {
  navy: '#042C4E',
  navy2: '#063A66',
  blue: '#00A0E3',
  blueSoft: '#E4F3FC',
  sheet: '#F4F8FB',
  card: '#FFFFFF',
  ink: '#0E2233',
  muted: '#58708A',
  mutedLight: '#9FBCD4',
  sky: '#7FDDFF',
  line: 'rgba(255,255,255,0.14)',
  lineDark: 'rgba(14,34,51,0.14)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'valle-san-agustin-propiedades',
  title: 'Valle San Agustín Propiedades — Compra, venta, arriendo y administración en Talca',
  description:
    'Valle San Agustín Propiedades, 1 Norte 931 of. 409, Talca. Compra, venta, arriendos, administración y regularización de propiedades.',
  image: `${IMG}/equipo.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cartera', href: '#cartera' },
  { label: 'El equipo', href: '#equipo' },
  { label: 'Oficina', href: '#oficina' },
]

// Servicios con sus propias piezas gráficas publicadas.
const SERVICIOS = [
  { img: `${IMG}/compra-venta.webp`, alt: 'Pieza gráfica de Valle San Agustín para compra y venta de propiedades', t: 'Compra y venta', d: 'Gestión completa de la venta o la búsqueda de tu propiedad, desde la publicación hasta la escritura.' },
  { img: `${IMG}/arriendos.webp`, alt: 'Pieza gráfica de Valle San Agustín para arriendos y administración', t: 'Arriendos y administración', d: 'Administración integral de arriendos: selección de arrendatarios, cobranza y mantención al día.' },
  { img: `${IMG}/regularizaciones.webp`, alt: 'Pieza gráfica de Valle San Agustín para regularizaciones', t: 'Regularización', d: 'Regularización de propiedades y saneamiento de títulos para vender o transferir sin problemas.' },
  { img: `${IMG}/asesoria-juridica.webp`, alt: 'Pieza gráfica de Valle San Agustín para asesoría jurídica', t: 'Asesoría jurídica', d: 'Apoyo legal en compraventas, contratos de arriendo y trámites de propiedad raíz.' },
]

// Publicaciones reales de su Instagram con precio (texto de cada publicación).
const CARTERA = [
  { tipo: 'Arriendo', p: 'Depto. Portal Norte III', precio: '$380.000 / mes', alt: 'venta $78.000.000' },
  { tipo: 'Venta', p: 'Depto. Edificio Espacio Talca', precio: 'UF 3.850', alt: '' },
  { tipo: 'Arriendo', p: 'Oficina Edificio Plaza Poniente', precio: '$300.000 / mes', alt: 'venta $65.000.000' },
  { tipo: 'Venta', p: 'Casa Brisas del Parque', precio: '$190.000.000', alt: '' },
  { tipo: 'Arriendo', p: 'Depto. Altos de Lircay', precio: '$500.000 / mes', alt: '' },
  { tipo: 'Venta', p: '3 cabañas en Pichilemu', precio: 'UF 8.900', alt: '' },
  { tipo: 'Arriendo', p: 'Casa Puertas del Sur', precio: '$400.000 / mes', alt: '' },
  { tipo: 'Venta', p: 'Depto. Condominio Altamira', precio: 'UF 3.800', alt: '' },
  { tipo: 'Arriendo', p: 'Casa Villa Doña Clara', precio: '$320.000 / mes', alt: '' },
]

const FOTOS_CARTERA = [
  { img: `${IMG}/depto-edificio.webp`, alt: 'Edificio de departamentos publicado por Valle San Agustín', cap: 'Departamentos en edificio' },
  { img: `${IMG}/casa-sur.webp`, alt: 'Casa de madera publicada por Valle San Agustín', cap: 'Casas en venta y arriendo' },
  { img: `${IMG}/talca-aerea.webp`, alt: 'Vista aérea de un barrio residencial de Talca', cap: 'Barrios de Talca' },
]

const OPINIONES = [
  { n: 'Lily Uribe', t: 'Arrendaron mi departamento en Talca sin que tuviera que preocuparme por nada, y cuando decidí venderlo, el proceso fue igualmente ágil y fluido.', s: 5 },
  { n: 'Mauricio Arcos', t: 'Corredora seria, muy buena atención, con mucha disponibilidad para atender dudas y asesorar cuando se requiere.', s: 5 },
  { n: 'Angélica Villar', t: 'Don Ricardo muy amable y preocupado, 100% confiable; él se encarga de todo junto con su equipo.', s: 5 },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 13:00 · 15:00 – 18:00' },
  { d: 'Sábado y domingo', h: 'Cerrado' },
]

export default function ValleSanAgustinPropiedades() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ background: C.sheet, color: C.ink }}>
      <BlitzNav
        name={
          // eslint-disable-next-line @next/next/no-img-element -- wordmark oficial en public/
          <img src={`${IMG}/logo-blanco.png`} alt="Valle San Agustín Propiedades" style={{ height: 26, width: 'auto' }} />
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.navy, ink: C.white, line: C.line, btnBg: '#FFFFFF', btnInk: C.navy }}
      />

      {/* PORTADA — ficha de corredora: titular + equipo real */}
      <header id="inicio" style={{ background: C.navy, padding: '110px 20px 56px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 28, alignItems: 'center' }}>
          <div>
            <Reveal>
              <p className={mono.className} style={{ color: C.sky, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 12px' }}>
                Corredora de propiedades · Talca
              </p>
              <h1 className={display.className} style={{ color: C.white, fontSize: 'clamp(34px,6.5vw,58px)', lineHeight: 1.05, margin: 0, fontWeight: 800 }}>
                Propiedades en Talca, con nombre y apellido
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: 'clamp(15px,2vw,18px)', maxWidth: 480, margin: '16px 0 0', lineHeight: 1.6 }}>
                Compra, venta, arriendos, administración y regularización desde la oficina 409 del Edificio Portal del Maule, a cargo de {BIZ.director}.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 22 }}>
                <span className={mono.className} style={{ background: 'rgba(0,160,227,0.16)', border: `1px solid ${C.blue}`, color: C.white, fontSize: 12, padding: '8px 12px', borderRadius: 999 }}>
                  {BIZ.rating} ★ · {BIZ.reviews}
                </span>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={mono.className}
                  style={{ background: 'rgba(255,255,255,0.08)', border: `1px solid ${C.line}`, color: C.white, fontSize: 12, padding: '8px 14px', borderRadius: 999, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: 44 }}
                >
                  @sanagustinpropiedades
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure style={{ margin: 0 }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 16, overflow: 'hidden', border: `1px solid ${C.line}`, boxShadow: '0 24px 48px rgba(0,0,0,0.35)' }}>
                <Image
                  src={`${IMG}/equipo.webp`}
                  alt="Equipo de Valle San Agustín Propiedades en su oficina de Talca"
                  fill
                  priority
                  sizes="(max-width:900px) 92vw, 480px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <figcaption className={mono.className} style={{ fontSize: 11, color: C.mutedLight, marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                El equipo, en la oficina de 1 Norte 931
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      {/* SERVICIOS — con sus propias piezas gráficas */}
      <section id="servicios" style={{ padding: '56px 20px', maxWidth: 1060, margin: '0 auto' }}>
        <Reveal>
          <p className={mono.className} style={{ color: C.navy2, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Servicios</p>
          <h2 className={display.className} style={{ fontSize: 'clamp(28px,5vw,46px)', lineHeight: 1.08, margin: '0 0 24px', fontWeight: 800 }}>
            Todo lo que hace una corredora, en una oficina
          </h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))', gap: 14 }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <div style={{ background: C.card, border: `1px solid ${C.lineDark}`, borderRadius: 14, overflow: 'hidden', height: '100%' }}>
                <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                  <Image src={s.img} alt={s.alt} fill sizes="(max-width:640px) 92vw, 25vw" style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ padding: '16px 16px 18px' }}>
                  <h3 className={display.className} style={{ fontSize: 18, margin: '0 0 6px', fontWeight: 700, color: C.ink }}>{s.t}</h3>
                  <p style={{ color: C.muted, fontSize: 13.5, margin: 0, lineHeight: 1.55 }}>{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CARTERA — vitrina con precios reales publicados */}
      <section id="cartera" style={{ background: C.navy2, padding: '56px 20px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.sky, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>Cartera publicada</p>
            <h2 className={display.className} style={{ color: C.white, fontSize: 'clamp(28px,5vw,46px)', lineHeight: 1.08, margin: '0 0 8px', fontWeight: 800 }}>
              Lo que tienen en vitrina
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 620, margin: '0 0 22px', lineHeight: 1.55 }}>
              Precios de publicaciones recientes de su Instagram. La cartera cambia — la actualizada siempre está en @sanagustinpropiedades.
            </p>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 20 }}>
            <Reveal>
              <div style={{ border: `1px solid ${C.line}`, borderRadius: 14, overflow: 'hidden', background: 'rgba(255,255,255,0.04)' }}>
                <div className={mono.className} style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '12px 16px', fontSize: 10.5, letterSpacing: '0.18em', color: C.mutedLight, textTransform: 'uppercase', borderBottom: `1px solid ${C.line}` }}>
                  <span>Propiedad</span><span>Precio</span>
                </div>
                <div style={{ maxHeight: 420, overflow: 'hidden' }}>
                  {CARTERA.map((c, i) => (
                    <div
                      key={c.p}
                      className={mono.className}
                      style={{
                        display: 'grid', gridTemplateColumns: '1fr auto', gap: 10, alignItems: 'baseline',
                        padding: '11px 16px',
                        background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'transparent',
                        borderBottom: i < CARTERA.length - 1 ? `1px solid ${C.line}` : 'none',
                      }}
                    >
                      <span style={{ color: C.white, fontSize: 12.5, lineHeight: 1.4 }}>
                        <span style={{ color: C.sky, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', marginRight: 8 }}>{c.tipo}</span>
                        {c.p}
                        {c.alt ? <span style={{ color: C.mutedLight, fontSize: 11, display: 'block' }}>{c.alt}</span> : null}
                      </span>
                      <span style={{ color: C.white, fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>{c.precio}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <div style={{ display: 'grid', gap: 12, gridTemplateRows: 'repeat(3,1fr)' }}>
              {FOTOS_CARTERA.map((f, i) => (
                <Reveal key={f.img} delay={i * 80}>
                  <figure style={{ margin: 0, position: 'relative', height: '100%', minHeight: 120 }}>
                    <div style={{ position: 'relative', height: '100%', minHeight: 120, borderRadius: 12, overflow: 'hidden' }}>
                      <Image src={f.img} alt={f.alt} fill sizes="(max-width:900px) 92vw, 400px" style={{ objectFit: 'cover' }} />
                      <figcaption className={mono.className} style={{ position: 'absolute', left: 10, bottom: 8, fontSize: 10.5, color: C.white, background: 'rgba(4,44,78,0.72)', padding: '4px 8px', borderRadius: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        {f.cap}
                      </figcaption>
                    </div>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EL EQUIPO — don Ricardo + opiniones */}
      <section id="equipo" style={{ padding: '56px 20px', maxWidth: 1060, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(290px,1fr))', gap: 24, alignItems: 'start' }}>
          <Reveal>
            <figure style={{ margin: 0 }}>
              <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 14, overflow: 'hidden', border: `1px solid ${C.lineDark}` }}>
                <Image src={`${IMG}/oficina.webp`} alt="Atención en la oficina de Valle San Agustín Propiedades" fill sizes="(max-width:640px) 92vw, 45vw" style={{ objectFit: 'cover' }} />
              </div>
              <figcaption className={mono.className} style={{ fontSize: 11, color: C.muted, marginTop: 8, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Atención en la oficina
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p className={mono.className} style={{ color: C.navy2, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>El equipo</p>
              <h2 className={display.className} style={{ fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.08, margin: '0 0 10px', fontWeight: 800 }}>
                Los clientes lo dicen: “Don Ricardo”
              </h2>
              <p style={{ color: C.muted, margin: '0 0 18px', lineHeight: 1.6 }}>
                Al frente está {BIZ.director}, corredor de propiedades. Las reseñas en Google repiten lo mismo: trato directo, serio y disponible.
              </p>
              <p className={mono.className} style={{ color: C.muted, fontSize: 13, margin: '0 0 18px' }}>
                <Stars value={4.2} color={C.navy2} /> {BIZ.rating} de 5 · {BIZ.reviews}
              </p>
            </Reveal>
            <div style={{ display: 'grid', gap: 10 }}>
              {OPINIONES.map((o, i) => (
                <Reveal key={o.n} delay={i * 70}>
                  <blockquote style={{ background: C.card, border: `1px solid ${C.lineDark}`, borderRadius: 12, padding: '14px 16px', margin: 0 }}>
                    <Stars value={o.s} color={C.navy2} />
                    <p style={{ color: C.ink, fontSize: 14, lineHeight: 1.55, margin: '8px 0 10px' }}>“{o.t}”</p>
                    <cite className={mono.className} style={{ color: C.muted, fontSize: 12, fontStyle: 'normal' }}>— {o.n}</cite>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OFICINA — ficha + mapa */}
      <section id="oficina" style={{ background: C.blueSoft, padding: '56px 20px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto' }}>
          <Reveal>
            <p className={mono.className} style={{ color: C.navy2, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px' }}>La oficina</p>
            <h2 className={display.className} style={{ fontSize: 'clamp(28px,5vw,44px)', lineHeight: 1.05, margin: '0 0 20px', fontWeight: 800 }}>
              Edificio Portal del Maule, oficina 409
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 16 }}>
            <Reveal>
              <div style={{ background: C.card, border: `1px solid ${C.lineDark}`, borderRadius: 12, padding: 20, height: '100%' }}>
                <dl className={mono.className} style={{ margin: 0, fontSize: 13, lineHeight: 1.9 }}>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Dirección</dt><dd style={{ margin: '0 0 8px', color: C.ink, fontWeight: 600 }}>{BIZ.address}, {BIZ.city}</dd></div>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Teléfono</dt><dd style={{ margin: '0 0 8px' }}><a href={TEL_LINK} style={{ color: C.navy2, fontWeight: 700 }}>{BIZ.phoneTel}</a></dd></div>
                  <div><dt style={{ color: C.muted, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Director</dt><dd style={{ margin: '0 0 8px', color: C.ink }}>{BIZ.director}</dd></div>
                </dl>
                <table className={mono.className} style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12, marginTop: 4 }}>
                  <tbody>
                    {HORARIO.map((h) => (
                      <tr key={h.d} style={{ borderTop: `1px dashed ${C.lineDark}` }}>
                        <td style={{ padding: '8px 0', color: C.muted }}>{h.d}</td>
                        <td style={{ padding: '8px 0', color: C.ink, fontWeight: 600, textAlign: 'right' }}>{h.h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 14 }}>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mono.className}
                    style={{ background: C.navy2, color: C.white, fontSize: 13, fontWeight: 600, padding: '12px 16px', borderRadius: 10, textDecoration: 'none', minHeight: 48, display: 'inline-flex', alignItems: 'center' }}
                  >
                    Abrir en Google Maps →
                  </a>
                  <a
                    href={BIZ.sitio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mono.className}
                    style={{ border: `1px solid ${C.lineDark}`, color: C.navy2, fontSize: 13, fontWeight: 600, padding: '12px 16px', borderRadius: 10, textDecoration: 'none', minHeight: 48, display: 'inline-flex', alignItems: 'center' }}
                  >
                    sanagustinpropiedades.cl
                  </a>
                </div>
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
      <footer style={{ background: C.navy, padding: '26px 20px 108px' }}>
        <div style={{ maxWidth: 920, margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: 14, alignItems: 'center', justifyContent: 'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- wordmark oficial en public/ */}
          <img src={`${IMG}/logo-blanco.png`} alt="Valle San Agustín Propiedades" style={{ height: 26, width: 'auto' }} />
          <p className={mono.className} style={{ color: C.mutedLight, fontSize: 11, margin: 0, letterSpacing: '0.06em' }}>
            {BIZ.name} · 1 Norte 931 of. 409, {BIZ.city} · {BIZ.phoneTel}
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.navy2} fg="#FFF" />
    </div>
  )
}
