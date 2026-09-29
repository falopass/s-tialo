// app/demos/hosteria-la-huerta/page.tsx
import Image from 'next/image'
import Link from 'next/link'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import { BlitzNav, Reveal, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, IMG, MAPS_EMBED, MAPS_URL, WA_LINK, WA_LINK_MESA } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'hosteria-la-huerta',
  title: `${BIZ.name} — Hostería y restaurante en ${BIZ.city}`,
  description:
    'Hostería, hospedaje y comedor campestre sobre la Chiripilco en Hualañé: cazuelas, pastel de choclo, churrasco y un patio lleno de plantas.',
})

const gloock = localFont({
  src: '../../fonts/gloock/normal-400.woff2',
  variable: '--f-gloock',
})
const karla = localFont({
  src: '../../fonts/karla/normal-200-800.woff2',
  variable: '--f-karla',
})
const mono = localFont({
  src: '../../fonts/space-mono/normal-400.woff2',
  variable: '--f-mono',
})

const C = {
  cream: '#F4EFE3',
  paper: '#FBF7EC',
  green: '#1E3D2F',
  green2: '#163026',
  gold: '#D9A441',
  goldOsc: '#7A5A10',
  ink: '#23281F',
  mut: '#5A6254',
  line: '#DDD4BF',
} as const

const PLATOS = [
  {
    img: `${IMG}/mesa.webp`,
    alt: 'Mesa de La Huerta con cazuela, pan amasado y pebre',
    nombre: 'La mesa de campo',
    texto:
      'Ollas al centro, pan amasado y pebre: la mesa donde el almuerzo dura lo que tenga que durar.',
  },
  {
    img: `${IMG}/cazuela.webp`,
    alt: 'Cazuela de la casa servida en La Huerta',
    nombre: 'Cazuela',
    texto:
      'La estrella según las reseñas: su cazuela “cuidada, consciente, sabrosa”, parte del menú del día.',
  },
  {
    img: `${IMG}/churrasco.webp`,
    alt: 'Churrasco con papas fritas al plato en La Huerta',
    nombre: 'Churrasco y papas',
    texto:
      'El churrasco al plato con fritas que nombran los comensales, de la parrilla directo a la mesa.',
  },
  {
    img: `${IMG}/plato.webp`,
    alt: 'Plato de fondo con carne, arroz y papas fritas en La Huerta',
    nombre: 'Plato de fondo',
    texto:
      'Porciones de hacienda: carne, arroz y fritas caseras, con ensalada surtida al lado.',
  },
]

const PIZARRON = [
  'Desayunos',
  'Almuerzos',
  'Cazuela',
  'Pollo asado',
  'Papas fritas',
  'Churrascos',
  'Bife a lo pobre',
  'Extras de temporada',
]

const RESENAS = [
  {
    autor: 'Tita',
    estrellas: '★★★★★',
    cuando: 'hace un mes',
    texto:
      'Excelente… sus cazuelas cuidadas, conscientes, sabrosas. Sus postres, tortas, tartas y ensaladas. Qué más? Vayan sin dudarlo.',
  },
  {
    autor: 'Carlos Mejías',
    estrellas: '★★★★★',
    cuando: 'hace 8 meses',
    texto:
      'Buena comida y el lugar muy bueno. Trato cordial y la decoración preciosa. Puedo decir con propiedad: delicia de pastelería.',
  },
  {
    autor: 'Pascual Ibargüen',
    estrellas: '★★★★★',
    cuando: 'hace 3 años',
    texto:
      'Espacio muy rústico, acogedor y familiar. Atendido por su dueña. Prueben el churrasco al plato, cazuelas y platillos del día, más humitas y jugos naturales.',
  },
]

function WaBtn({ href, label, inverse }: { href: string; label: string; inverse?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="inline-flex items-center justify-center gap-2 rounded-full px-6 text-[13px] font-semibold tracking-wide uppercase"
      style={{
        height: 52,
        background: inverse ? C.paper : C.green,
        color: inverse ? C.green : C.cream,
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.9 1.5 2 2.4 1.4 1.2 2.5 1.6 2.9 1.8.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4.1.2.1.7-.1 1Z" />
      </svg>
      {label}
    </a>
  )
}

export default function Page() {
  const nav = {
    name: 'La Huerta',
    waLink: WA_LINK,
    ctaLabel: 'WhatsApp',
    fontClass: gloock.className,
    theme: { over: 'dark' as const, bar: 'rgba(22,48,38,.88)', ink: C.cream, line: 'rgba(244,239,227,.18)', btnBg: C.gold, btnInk: C.green2 },
    links: [
      { href: '#cocina', label: 'Cocina' },
      { href: '#patio', label: 'Patio' },
      { href: '#hospedaje', label: 'Hospedaje' },
      { href: '#ubicacion', label: 'Ubicación' },
    ],
  }

  return (
    <main className={`${gloock.variable} ${karla.variable} ${mono.variable} antialiased`} style={{ background: C.cream, color: C.ink, fontFamily: 'var(--f-karla)' }}>
      <BlitzNav {...nav} />

      {/* HERO — fachada + letrero a mano */}
      <header className="relative overflow-hidden" style={{ background: C.green2 }}>
        <div className="relative h-[78svh] min-h-[560px]">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Fachada de Hostería La Huerta sobre la Av. Chiripilco en Hualañé"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(22,48,38,.35) 0%, rgba(22,48,38,.15) 40%, rgba(22,48,38,.92) 100%)' }} />
          <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-10 sm:px-10 sm:pb-14">
            <div className="mx-auto w-full max-w-5xl">
              <Reveal>
                <p className="text-[11px] tracking-[0.32em] uppercase" style={{ color: C.gold, fontFamily: 'var(--f-mono)' }}>
                  Hostería · Hospedaje · Comedor — Hualañé
                </p>
                <h1
                  className="mt-3 leading-[0.95]"
                  style={{ fontFamily: 'var(--f-gloock)', fontSize: 'clamp(52px, 11vw, 116px)', color: C.cream }}
                >
                  La Huerta
                </h1>
                <p className="mt-4 max-w-xl text-[16px] leading-relaxed sm:text-lg" style={{ color: 'rgba(244,239,227,.9)' }}>
                  Sobre la Chiripilco, a la entrada de Hualañé: la olla al fuego, el patio lleno
                  de plantas y camas para seguir viaje al otro día.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <WaBtn href={WA_LINK_MESA} label="Consultar mesa u hospedaje" inverse />
                  <a
                    href={`${MAPS_URL}`}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center text-[13px] font-semibold uppercase tracking-widest underline underline-offset-8"
                    style={{ color: C.gold }}
                  >
                    Ver en Google Maps
                  </a>
                </div>
                <p className="mt-6 flex items-center gap-2 text-[13px]" style={{ color: 'rgba(244,239,227,.85)' }}>
                  <span style={{ color: C.gold }} aria-hidden>★★★★★</span>
                  <span className="font-semibold" style={{ fontFamily: 'var(--f-mono)' }}>{BIZ.rating}</span>
                  <span>· {BIZ.reviews} reseñas en Google</span>
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </header>

      {/* PIZARRÓN — lo que dice el letrero del local */}
      <section id="cocina" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.cream }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.1fr_1fr] md:items-center">
          <Reveal>
            <p className="text-[11px] tracking-[0.3em] uppercase" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
              El letrero de la casa
            </p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-gloock)' }}>
              Lo que escribe la pizarra es lo que hay
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.mut }}>
              A la entrada cuelga su menú pintado a mano: desayunos de jornada, almuerzos con
              cazuela y pollo asado, papas fritas, churrascos y bife a lo pobre. Sin folleto,
              sin letra chica — la pizarra es la carta.
            </p>
            <ul className="mt-7 grid grid-cols-2 gap-x-6 gap-y-3">
              {PIZARRON.map((p) => (
                <li key={p} className="flex items-baseline gap-2 text-[15px] font-semibold">
                  <span className="inline-block h-[7px] w-[7px] rounded-[2px]" style={{ background: C.gold }} aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[13px]" style={{ color: C.mut }}>
              A eso se suman las humitas y los jugos naturales que recomiendan quienes comen aquí.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/letrero.webp`}
                alt="Letrero pintado a mano de Hostería La Huerta con su menú: desayunos, almuerzos, cazuela, pollo asado, papas fritas, churrascos y bife a lo pobre"
                width={900}
                height={1200}
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* PLATOS — galería asimétrica */}
      <section className="px-5 pb-16 sm:px-10 sm:pb-24" style={{ background: C.cream }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="flex items-end justify-between gap-4">
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--f-gloock)' }}>
                La olla y la parrilla
              </h2>
              <span className="hidden text-[11px] uppercase tracking-[0.25em] sm:block" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
                Fotos del local
              </span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {PLATOS.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 90}>
                <article
                  className="overflow-hidden rounded-2xl"
                  style={{ background: C.paper, border: `1px solid ${C.line}` }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image src={p.img} alt={p.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                  </div>
                  <div className="px-5 py-4">
                    <h3 className="text-xl" style={{ fontFamily: 'var(--f-gloock)' }}>{p.nombre}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.mut }}>{p.texto}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PATIO — quiebre a todo ancho */}
      <section id="patio" className="relative" style={{ background: C.green }}>
        <div className="relative h-[62svh] min-h-[420px]">
          <Image
            src={`${IMG}/patio.webp`}
            alt="Patio de La Huerta cubierto de maceteros y plantas colgantes"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(30,61,47,.15), rgba(30,61,47,.85))' }} />
          <div className="relative z-10 flex h-full items-end">
            <div className="mx-auto w-full max-w-5xl px-5 pb-12 sm:px-10">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.gold, fontFamily: 'var(--f-mono)' }}>
                  El patio de las plantas
                </p>
                <h2 className="mt-3 max-w-2xl text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-gloock)', color: C.cream }}>
                  Se come entre maceteros, bajo el techo de la galería
                </h2>
                <p className="mt-3 max-w-xl text-[15px]" style={{ color: 'rgba(244,239,227,.88)' }}>
                  El corazón de la hostería: un patio apretado de verde donde las mesas comparten
                  sombra con las plantas. Rústico, familiar, con la olla pasando de la cocina al patio.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* HOSPEDAJE */}
      <section id="hospedaje" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.cream }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <figure className="overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/comedor.webp`}
                alt="Comedor de La Huerta con manteles blancos y madera"
                width={900}
                height={1100}
                className="h-auto w-full object-cover"
              />
            </figure>
            <figure className="mt-4 overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/evento.webp`}
                alt="Mesa preparada para un almuerzo largo en La Huerta"
                width={900}
                height={620}
                className="h-auto w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
              Hostería de verdad
            </p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-gloock)' }}>
              Aquí también se duerme
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.mut }}>
              Lo dice el letrero: <strong style={{ color: C.ink }}>hostería y hospedaje</strong>.
              Después del almuerzo hay camas para quedarse — quienes pasan por la Chiripilco lo
              usan de refugio y despiertan al desayuno de jornada.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.mut }}>
              Habitaciones y disponibilidad se confirman directo por WhatsApp: los atiende la
              misma gente que está en la cocina.
            </p>
            <div className="mt-7">
              <WaBtn href={WA_LINK_MESA} label="Preguntar por habitación" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* RESEÑAS */}
      <section className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.paper }}>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
              Lo que escriben en Google
            </p>
            <div className="mt-3 flex flex-wrap items-baseline gap-4">
              <h2 className="text-4xl sm:text-5xl" style={{ fontFamily: 'var(--f-gloock)' }}>
                {BIZ.rating} de 5
              </h2>
              <span style={{ color: C.goldOsc }} aria-hidden>★★★★★</span>
              <span className="text-[14px]" style={{ color: C.mut }}>{BIZ.reviews} reseñas publicadas</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <blockquote
                  className="flex h-full flex-col rounded-2xl p-5"
                  style={{ background: C.cream, border: `1px solid ${C.line}` }}
                >
                  <span style={{ color: C.goldOsc, fontSize: 14 }} aria-hidden>{r.estrellas}</span>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed">“{r.texto}”</p>
                  <footer className="mt-4 text-[12px] uppercase tracking-wider" style={{ color: C.mut, fontFamily: 'var(--f-mono)' }}>
                    {r.autor} · {r.cuando} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="px-5 py-16 sm:px-10 sm:py-24" style={{ background: C.green2, color: C.cream }}>
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em]" style={{ color: C.gold, fontFamily: 'var(--f-mono)' }}>
              Cómo llegar
            </p>
            <h2 className="mt-3 text-4xl leading-tight sm:text-5xl" style={{ fontFamily: 'var(--f-gloock)' }}>
              En la Av. Chiripilco, a la entrada de Hualañé
            </h2>
            <dl className="mt-6 space-y-3 text-[15px]">
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: 'rgba(244,239,227,.6)', fontFamily: 'var(--f-mono)' }}>Dirección</dt>
                <dd>{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: 'rgba(244,239,227,.6)', fontFamily: 'var(--f-mono)' }}>Teléfono</dt>
                <dd><a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
              <div className="flex gap-3">
                <dt className="w-20 shrink-0 text-[11px] uppercase tracking-widest pt-1" style={{ color: 'rgba(244,239,227,.6)', fontFamily: 'var(--f-mono)' }}>Horario</dt>
                <dd style={{ color: 'rgba(244,239,227,.8)' }}>Confirma el horario del día por WhatsApp.</dd>
              </div>
            </dl>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <WaBtn href={WA_LINK} label="Escribir por WhatsApp" inverse />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center text-[13px] font-semibold uppercase tracking-widest underline underline-offset-8"
                style={{ color: C.gold }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl" style={{ border: '1px solid rgba(244,239,227,.2)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="h-[340px] w-full sm:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-5 py-10" style={{ background: C.green2, borderTop: '1px solid rgba(244,239,227,.15)' }}>
        <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-2xl" style={{ fontFamily: 'var(--f-gloock)', color: C.cream }}>{BIZ.name}</p>
            <p className="mt-1 text-[13px]" style={{ color: 'rgba(244,239,227,.7)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
            </p>
          </div>
          <div className="flex items-center gap-5 text-[13px]" style={{ color: 'rgba(244,239,227,.8)' }}>
            <a href={MAPS_URL} target="_blank" rel="noopener" className="underline underline-offset-4">Google Maps</a>
            <a href={WA_LINK} target="_blank" rel="noopener" className="underline underline-offset-4">WhatsApp</a>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-5xl text-[12px] leading-relaxed" style={{ color: 'rgba(244,239,227,.55)' }}>
          Sitio de ejemplo preparado por <Link href="/" className="underline underline-offset-4">Sitiazo</Link> para {BIZ.name} — con sus fotos, sus reseñas y su letrero de la Av. Chiripilco.
        </p>
      </footer>

      <WaFab href={WA_LINK} label="Escribir a La Huerta por WhatsApp" />
    </main>
  )
}
