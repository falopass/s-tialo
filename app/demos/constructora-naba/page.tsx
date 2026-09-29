import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Parte de terreno: asfalto oscuro, naranjo cono, amarillo señalética,
// líneas de cinta de faena. Cada foto va con su comuna y su fuente.
const C = {
  asphalt: '#15181B',
  asphalt2: '#1E2226',
  concrete: '#EAE6DD',
  sheet: '#F5F2EB',
  ink: '#1B1E21',
  muted: '#8A949C',
  mutedLight: '#5B666E',
  line: 'rgba(255,255,255,0.10)',
  lineDark: 'rgba(27,30,33,0.14)',
  cone: '#F26522',
  coneInk: '#FFF',
  yellow: '#F5C518',
}

export const metadata: Metadata = demoMetadata({
  slug: 'constructora-naba',
  title: 'Constructora Naba — Obras sanitarias y viales en el Maule y Biobío',
  description:
    'Sociedad Constructora Naba Ltda., Talca. Agua potable, alcantarillado y obras viales por licitación pública desde 1998.',
  image: `${IMG}/obra-yumbel.webp`,
})

const NAV_LINKS = [
  { label: 'Obras', href: '#obras' },
  { label: 'Registro', href: '#registro' },
  { label: 'Qué hace', href: '#servicios' },
  { label: 'Ficha', href: '#ficha' },
  { label: 'Oficina', href: '#oficina' },
]

const OBRAS = [
  {
    img: `${IMG}/obra-yumbel.webp`,
    alt: 'Excavadora y cuadrilla en zanja de alcantarillado, obra de Goycolea Norte en Yumbel',
    comuna: 'Yumbel · Biobío',
    t: 'Alcantarillado y agua potable — Goycolea Norte',
    d: 'Red sanitaria nueva para unas 45 familias del sector. La obra lleva alcantarillado donde antes el agua servida se iba a pozos.',
    fuente: 'Registro: La Tribuna',
  },
  {
    img: `${IMG}/huepil-calle.webp`,
    alt: 'Calle de Huépil en obras de alcantarillado con trabajadores y señalización',
    comuna: 'Huépil · Tucapel',
    t: 'Redes sanitarias del programa municipal',
    d: 'Naba ejecutó tres obras del programa: alcantarillado en pasaje Santa Rosa y agua potable y aguas servidas en los pasajes Juan Antonio Ríos, Diagonal, Roberto Gómez y Walker Martínez.',
    fuente: 'Registro: Municipalidad de Tucapel',
  },
]

const REGISTRO = [
  { img: `${IMG}/huepil-equipo.webp`, alt: 'Cuadrilla trabajando sobre una cámara sanitaria nueva', cap: 'Cámara sanitaria — Huépil' },
  { img: `${IMG}/huepil-cinta.webp`, alt: 'Trabajador junto a zanja demarcada con cinta de seguridad', cap: 'Zanja demarcada — Huépil' },
  { img: `${IMG}/huepil-zanja.webp`, alt: 'Zanja abierta con tubería en el pavimento', cap: 'Tendido de tubería — Huépil' },
  { img: `${IMG}/huepil-registro.webp`, alt: 'Cámara de inspección nueva rodeada de malla de seguridad', cap: 'Cámara de inspección — Huépil' },
  { img: `${IMG}/huepil-camino.webp`, alt: 'Camino de ripio en sector rural intervenido', cap: 'Sector intervenido — Huépil' },
]

const SERVICIOS = [
  { t: 'Obras sanitarias', d: 'Alcantarillado y aguas servidas: zanjas, tuberías, cámaras y conexiones domiciliarias.' },
  { t: 'Agua potable rural', d: 'Extensiones de red y APR que llevan agua a sectores que la esperaban hace años.' },
  { t: 'Obras viales', d: 'Construcción y mejoramiento de carreteras y caminos, uno de sus giros de origen.' },
  { t: 'Licitación pública', d: 'Sus obras se ganan y se auditan por Mercado Público y los municipios que las financian.' },
]

const FICHA = [
  { k: 'Razón social', v: BIZ.legal },
  { k: 'RUT', v: BIZ.rut },
  { k: 'En terreno', v: 'Desde 1998 · cerca de 100 personas' },
  { k: 'Oficina', v: `${BIZ.address}, ${BIZ.city}` },
  { k: 'Planta', v: 'Hijuela Cruz de Piedra, km 4,5 — Laja' },
  { k: 'Teléfono', v: BIZ.phoneDisplay },
]

// Cinta de señalización: franja diagonal naranjo/negro.
function Cinta({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-2.5 ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${C.cone} 0 14px, ${C.asphalt} 14px 28px)`,
      }}
    />
  )
}

// Etiqueta técnica tipo parte de terreno.
function Tag({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[10px] md:text-[11px] font-semibold tracking-[0.16em] uppercase px-2.5 py-1.5`}
      style={{
        backgroundColor: dark ? C.yellow : 'rgba(0,0,0,0.55)',
        color: dark ? C.ink : '#FFF',
        backdropFilter: dark ? undefined : 'blur(4px)',
      }}
    >
      {children}
    </span>
  )
}

export default function NabaDemo() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.asphalt, color: '#FFF' }}>
      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide`}>
            NABA<span style={{ color: C.cone }}>▮</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.asphalt, ink: '#FFF', line: C.line, btnBg: C.cone, btnInk: '#FFF' }}
      />

      {/* PARTE 01 — PORTADA */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-40 pb-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <Tag dark>{BIZ.legal} · {BIZ.city}</Tag>
              </Reveal>
              <Reveal delay={90}>
                <h1 className={`${display.className} mt-6 text-[38px] leading-[1.02] md:text-[62px] uppercase`}>
                  Agua potable y alcantarillado{' '}
                  <span style={{ color: C.cone }}>donde hacía falta</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Constructora de obras sanitarias y viales. Gana por licitación
                  pública y ejecuta en terreno: Huépil, Yumbel y comunas del
                  Maule y el Biobío desde 1998.
                </p>
              </Reveal>
              <Reveal delay={230}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={TEL_LINK}
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold active:scale-95 transition-transform"
                    style={{ backgroundColor: C.cone, color: C.coneInk }}
                  >
                    Llamar a la oficina
                  </a>
                  <a
                    href="#obras"
                    className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold border active:scale-95 transition-transform"
                    style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#FFF' }}
                  >
                    Ver obras
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={180}>
              <figure className="relative">
                <div className="absolute -top-2.5 -left-2.5 w-10 h-10 border-t-[3px] border-l-[3px]" style={{ borderColor: C.cone }} aria-hidden="true" />
                <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-[3px] border-r-[3px]" style={{ borderColor: C.cone }} aria-hidden="true" />
                <Image
                  src={`${IMG}/obra-yumbel.webp`}
                  alt="Cuadrilla y excavadora en la obra de alcantarillado y agua potable de Goycolea Norte, Yumbel"
                  width={1024}
                  height={576}
                  className="w-full h-auto"
                  priority
                />
                <figcaption className="mt-3 flex items-center justify-between gap-3">
                  <Tag>Goycolea Norte · Yumbel</Tag>
                  <span className={`${mono.className} text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                    Foto: La Tribuna
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <Cinta />
      </section>

      {/* PARTE 02 — DATOS DE FAENA */}
      <section className="border-b" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { n: '1998', d: 'año en que se constituye la sociedad' },
            { n: '~100', d: 'personas en terreno según registro público' },
            { n: '2', d: 'regiones con obras: Maule y Biobío' },
            { n: '100%', d: 'de sus contratos por licitación pública' },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 70}>
              <div>
                <p className={`${display.className} text-[34px] md:text-[48px] leading-none`} style={{ color: C.yellow }}>
                  {s.n}
                </p>
                <p className={`${mono.className} mt-2 text-[10px] md:text-[11px] tracking-[0.12em] uppercase leading-relaxed`} style={{ color: C.muted }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTE 03 — OBRAS CON NOMBRE Y COMUNA */}
      <section id="obras" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] font-semibold tracking-[0.18em] uppercase`} style={{ color: C.cone }}>
            Parte de terreno — 01
          </p>
          <h2 className={`${display.className} mt-3 text-[30px] md:text-[48px] uppercase leading-[1.03]`}>
            Obras con nombre <span style={{ color: C.cone }}>y comuna</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8">
          {OBRAS.map((o, i) => (
            <Reveal key={o.t} delay={i * 120}>
              <article className="h-full border" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
                <div className="relative">
                  <Image src={o.img} alt={o.alt} width={1024} height={576} className="w-full h-auto" />
                  <span className="absolute top-3 left-3">
                    <Tag>{o.comuna}</Tag>
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <h3 className={`${display.className} text-lg md:text-xl uppercase tracking-wide leading-snug`}>{o.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {o.d}
                  </p>
                  <p className={`${mono.className} mt-4 text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                    {o.fuente}
                  </p>
                </div>
                <Cinta />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTE 04 — REGISTRO FOTOGRÁFICO */}
      <section id="registro" className="border-y" style={{ borderColor: C.lineDark, backgroundColor: C.concrete }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24" style={{ color: C.ink }}>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <Reveal>
              <p className={`${mono.className} text-[11px] font-semibold tracking-[0.18em] uppercase`} style={{ color: C.cone }}>
                Parte de terreno — 02
              </p>
              <h2 className={`${display.className} mt-3 text-[30px] md:text-[48px] uppercase leading-[1.03]`}>
                Registro <span style={{ color: C.cone }}>de terreno</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className={`${mono.className} max-w-xs text-[11px] tracking-[0.1em] uppercase leading-relaxed`} style={{ color: C.mutedLight }}>
                Fotos reales de las obras sanitarias de Huépil. Fuente: cobertura municipal de Tucapel.
              </p>
            </Reveal>
          </div>
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {REGISTRO.map((r, i) => (
              <Reveal key={r.cap} delay={(i % 3) * 90} className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
                <figure className="h-full border p-2" style={{ borderColor: C.lineDark, backgroundColor: C.sheet }}>
                  <Image src={r.img} alt={r.alt} width={850} height={566} className="w-full h-auto" />
                  <figcaption className={`${mono.className} mt-2 text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.mutedLight }}>
                    {r.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={180}>
              <figure className="h-full border p-2 flex flex-col" style={{ borderColor: C.lineDark, backgroundColor: C.asphalt }}>
                <div className="flex-1 flex flex-col justify-between p-3 min-h-[150px]" style={{ color: '#FFF' }}>
                  <p className={`${display.className} text-lg md:text-2xl uppercase leading-tight`}>
                    La obra se prueba{' '}
                    <span style={{ color: C.yellow }}>con la calle abierta</span>
                  </p>
                  <p className={`${mono.className} mt-4 text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
                    Tuberías, cámaras y conexiones que quedan bajo el pavimento.
                  </p>
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PARTE 05 — QUÉ HACE */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] font-semibold tracking-[0.18em] uppercase`} style={{ color: C.cone }}>
            Parte de terreno — 03
          </p>
          <h2 className={`${display.className} mt-3 text-[30px] md:text-[48px] uppercase leading-[1.03]`}>
            Cuadrillas para <span style={{ color: C.cone }}>obra pesada</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l" style={{ borderColor: C.line }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.t} delay={(i % 4) * 80}>
              <div className="h-full p-5 md:p-6 border-r border-b min-h-[170px]" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
                <p className={`${mono.className} text-[10px] font-semibold tracking-[0.14em]`} style={{ color: C.yellow }}>
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3 className={`${display.className} mt-4 text-[16px] md:text-lg uppercase tracking-wide leading-snug`}>{s.t}</h3>
                <p className="mt-3 text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PARTE 06 — FICHA TÉCNICA */}
      <section id="ficha" className="border-t" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] font-semibold tracking-[0.18em] uppercase`} style={{ color: C.cone }}>
                Parte de terreno — 04
              </p>
              <h2 className={`${display.className} mt-3 text-[28px] md:text-[42px] uppercase leading-[1.03]`}>
                Una sociedad con <span style={{ color: C.cone }}>domicilio real</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Oficina en {BIZ.address}, {BIZ.city}, y planta en Cruz de
                Piedra, camino a Laja. Sus giros registrados cubren construcción
                de carreteras, obras de ingeniería civil, aguas y urbanización
                residencial.
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="border" style={{ borderColor: C.line, backgroundColor: C.asphalt }}>
              <div className="px-5 py-3 border-b flex items-center justify-between" style={{ borderColor: C.line }}>
                <span className={`${mono.className} text-[11px] font-semibold tracking-[0.18em] uppercase`} style={{ color: C.yellow }}>
                  Ficha de sociedad
                </span>
                <span className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.cone }} />
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.yellow }} />
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#4C9A2A' }} />
                </span>
              </div>
              <dl className={`${mono.className} px-5 py-2 text-[12px] md:text-[13px]`}>
                {FICHA.map((f) => (
                  <div key={f.k} className="flex justify-between gap-5 py-3 border-b last:border-0" style={{ borderColor: C.line }}>
                    <dt className="uppercase tracking-[0.1em] shrink-0" style={{ color: C.muted }}>
                      {f.k}
                    </dt>
                    <dd className="text-right" style={{ color: '#FFF' }}>
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* PARTE 07 — OFICINA */}
      <section id="oficina" className="border-t" style={{ borderColor: C.lineDark, backgroundColor: C.concrete }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-start" style={{ color: C.ink }}>
          <div>
            <Reveal>
              <h2 className={`${display.className} text-[28px] md:text-[42px] uppercase leading-[1.03]`}>
                La oficina está <span style={{ color: C.cone }}>en Talca</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutedLight }}>
                {BIZ.address}, {BIZ.city}, {BIZ.region}. La planta y el taller
                están en Hijuela Cruz de Piedra, kilómetro 4,5, comuna de Laja.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={TEL_LINK}
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold active:scale-95 transition-transform"
                  style={{ backgroundColor: C.cone, color: C.coneInk }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-[48px] px-6 text-[15px] font-bold border active:scale-95 transition-transform"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="border-[3px] h-[300px] md:h-[380px]" style={{ borderColor: C.ink }}>
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
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: C.asphalt }}>
        <Cinta />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className={`${display.className} tracking-wide`} style={{ color: '#FFF' }}>
              NABA<span style={{ color: C.cone }}>▮</span>
            </p>
            <p className={`${mono.className} mt-1 text-[10px] tracking-[0.12em] uppercase`} style={{ color: C.muted }}>
              {BIZ.legal} · {BIZ.city}
            </p>
          </div>
          <a
            href={TEL_LINK}
            className="inline-flex items-center h-[44px] px-5 text-sm font-bold"
            style={{ backgroundColor: C.cone, color: C.coneInk }}
          >
            Llamar ahora
          </a>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.cone} fg="#FFF" />
    </div>
  )
}
