import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'

const IMG = '/demos/futbolito-las-rastras'

const display = localFont({ src: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700' })
const body = localFont({ src: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

export const metadata: Metadata = demoMetadata({
  slug: 'futbolito-las-rastras',
  title: 'Futbolito Las Rastras — Canchas de futbolito en Talca',
  description:
    'Canchas de futbolito de pasto sintético en la Ruta K-55, Talca. Arriendo, clases y cafetería. Consulta horarios y reserva por WhatsApp.',
  image: `${IMG}/cancha.webp`,
})

const C = {
  navy: '#0A2350',
  blue: '#1557D6',
  blueBright: '#1E6FF0',
  grass: '#58B23B',
  grassDeep: '#2E7A1E',
  paper: '#F5F8FD',
  card: '#FFFFFF',
  muted: '#44506B',
  line: 'rgba(10,35,80,0.12)',
}

const NAV_LINKS = [
  { label: 'El recinto', href: '#recinto' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Dónde', href: '#ubicacion' },
]

const ACTIVIDADES = [
  {
    src: 'padel.webp',
    t: 'Pádel techado',
    d: 'Cancha de pádel bajo techo, con los banners del recinto al fondo.',
    alt: 'Cancha de pádel techada de piso azul con banners de Pádel Las Rastras en la pared',
  },
  {
    src: 'quincho.webp',
    t: 'Quincho con parrilla',
    d: 'Asado mirando el partido: el tercer tiempo también se juega aquí.',
    alt: 'Carne asándose en la parrilla del quincho con la cancha de futbolito iluminada al fondo',
  },
  {
    src: 'taekwondo.webp',
    t: 'Clases de taekwondo',
    d: 'El recinto también alberga academias: clases de taekwondo para niños y jóvenes.',
    alt: 'Clase de taekwondo infantil sobre colchonetas en el gimnasio de Las Rastras',
  },
  {
    src: 'interior.webp',
    t: 'Gimnasio techado',
    d: 'Colchonetas y espacio cubierto donde entrenan academias y talleres.',
    alt: 'Niñas entrenando sobre colchonetas azules en el gimnasio techado del recinto',
  },
  {
    src: 'noche.webp',
    t: 'Futbolito bajo los focos',
    d: 'Iluminación para jugar de noche: entre semana la cancha corre hasta las 22:00.',
    alt: 'Partido de futbolito nocturno bajo los focos de la cancha sintética',
  },
  {
    src: 'edificio.webp',
    t: 'El recinto de día',
    d: 'Casino, terraza y estacionamiento junto a las canchas en la K-55.',
    alt: 'Edificio del recinto Las Rastras visto desde el estacionamiento en un día soleado',
  },
]

const RESENAS = [
  {
    nombre: 'David Useche',
    nota: 5,
    fecha: 'Hace 6 meses',
    texto: 'Fuimos a un partido amistoso de mi hijo. Amplio estacionamiento y 3 canchas de fútbol con grama sintética.',
  },
  {
    nombre: 'Elieser Valdebenito',
    nota: 5,
    fecha: 'Hace 3 años',
    texto: 'Muy buen lugar para ir a entretenerse y entrenar un rato, canchas en buen estado y estacionamiento seguro.',
  },
  {
    nombre: 'Carlos Ismael Delgado Valenzuela',
    nota: 5,
    fecha: 'Hace 4 años',
    texto: 'Grandes instalaciones para practica de futbolito, canchas en perfecto estado, bien mantenidas y lo mas importante sin parches que pongan en riesgo a los deportistas.',
  },
  {
    nombre: 'yhon santaella',
    nota: 4,
    fecha: 'Hace 2 años',
    texto: 'Bien sitio para hacer deporte, falta algo mejor para que esté la familia o niños que esperan, pero recomendable.',
  },
]

const HORARIO = [
  ['Lunes a viernes', '9:00–22:00'],
  ['Sábado', '9:00–19:00'],
  ['Domingo', 'Cerrado'],
]

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'blue' | 'navy' | 'ghost'
  external?: boolean
}) {
  const st =
    tone === 'blue'
      ? { backgroundColor: C.blueBright, color: '#FFFFFF' }
      : tone === 'navy'
        ? { backgroundColor: C.navy, color: '#FFFFFF' }
        : { backgroundColor: 'rgba(255,255,255,0.14)', color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.85)' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-md text-lg tracking-wider uppercase font-medium transition-transform active:scale-[0.97] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function FutbolitoLasRastrasPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.paper, color: C.navy }}>
      <BlitzNav
        name="Las Rastras"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-widest`}
        theme={{ over: 'dark', bar: 'rgba(10,35,80,0.94)', ink: '#FFFFFF', line: 'rgba(255,255,255,0.16)', btnBg: C.blueBright, btnInk: '#FFFFFF' }}
        ctaLabel="Reservar"
      />

      {/* HERO — foto real del recinto a sangre completa */}
      <section id="inicio" className="relative overflow-hidden min-h-[92svh] flex items-end" style={{ backgroundColor: C.navy }}>
        <Image
          src={`${IMG}/cancha.webp`}
          alt="Cancha de futbolito de pasto sintético de Las Rastras al atardecer, con el mural del recinto y la terraza de la cafetería"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(10,35,80,0.30) 0%, rgba(10,35,80,0.15) 40%, rgba(10,35,80,0.88) 100%)' }} aria-hidden="true" />
        <div className="relative w-full max-w-6xl mx-auto px-5 pb-10 pt-40">
          <Reveal>
            <p className={`${mono.className} inline-flex items-center gap-2 px-3 py-1 rounded-sm text-xs uppercase tracking-widest`} style={{ backgroundColor: C.grass, color: C.navy }}>
              Futbolito · Cafetería · K-55 Talca
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className={`${display.className} mt-5 text-[54px] leading-[0.9] md:text-[96px] uppercase font-bold`} style={{ color: '#FFFFFF' }}>
              Futbolito
              <br />
              <span style={{ color: '#9CCBFF' }}>Las Rastras</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 text-lg leading-relaxed max-w-md" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Canchas de pasto sintético en la Ruta K-55, Talca. Trae tu equipo, arrienda
              por WhatsApp y quédate en la cafetería después del partido.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-5 flex items-center gap-3">
              <Stars value={4.5} color={C.grass} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: '#FFFFFF' }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="blue">Arrendar cancha</Btn>
              <Btn href="#recinto" tone="ghost" external={false}>Conocer el recinto</Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIRA MARCADOR */}
      <section className="py-6" style={{ backgroundColor: C.grassDeep }}>
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-3 gap-4 text-center">
          {[
            ['Pasto', 'sintético'],
            [`${BIZ.reviews}`, 'reseñas en Google'],
            ['Lun–Sáb', 'cancha abierta'],
          ].map(([big, small]) => (
            <div key={small}>
              <p className={`${display.className} uppercase text-2xl md:text-4xl font-bold leading-none`} style={{ color: '#FFFFFF' }}>{big}</p>
              <p className={`${mono.className} mt-1 text-[11px] md:text-xs uppercase tracking-widest`} style={{ color: 'rgba(255,255,255,0.85)' }}>{small}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ACTIVIDADES — tarjetas con fotos reales */}
      <section id="recinto" className="py-16 md:py-24" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.blue }}>El recinto</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-bold leading-[0.95]`} style={{ color: C.navy }}>
              Aquí pasa más <span style={{ color: C.blue }}>que futbolito</span>
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {ACTIVIDADES.map((a, i) => (
              <Reveal key={a.src} delay={i * 70}>
                <li className="group relative overflow-hidden rounded-xl aspect-[4/5] md:aspect-[4/4.6]" style={{ boxShadow: '0 14px 34px rgba(10,35,80,0.16)' }}>
                  <Image
                    src={`${IMG}/${a.src}`}
                    alt={a.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-4" style={{ background: 'linear-gradient(180deg, rgba(10,35,80,0) 0%, rgba(10,35,80,0.9) 100%)' }}>
                    <p className={`${display.className} uppercase text-xl md:text-2xl font-semibold leading-none`} style={{ color: '#FFFFFF' }}>{a.t}</p>
                    <p className="mt-1.5 text-xs md:text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.88)' }}>{a.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <p className="mt-4 text-sm" style={{ color: C.muted }}>
              Fotos reales publicadas en la ficha de Google Maps del recinto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* OPINIONES — reseñas reales de Google */}
      <section id="opiniones" className="py-16 md:py-24" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: '#9CCBFF' }}>Opiniones</p>
                <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-bold leading-[0.95]`} style={{ color: '#FFFFFF' }}>
                  Los que juegan <span style={{ color: C.grass }}>lo dicen</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={4.5} color={C.grass} className="w-5 h-5" />
                <span className={`${mono.className} text-sm`} style={{ color: '#FFFFFF' }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <li className="h-full rounded-xl p-5 flex flex-col" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}>
                  <Stars value={r.nota} color={C.grass} className="w-4 h-4" />
                  <p className="mt-3 text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    “{r.texto}”
                  </p>
                  <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-widest`} style={{ color: '#9CCBFF' }}>
                    {r.nombre} · {r.fecha}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120}>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Reseñas textuales de su ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* HORARIOS — banda azul tipo pizarra */}
      <section id="horarios" className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.blue }}>
        <div className="relative max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: '#BFE3FF' }}>Horario de atención</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-bold leading-[0.95]`} style={{ color: '#FFFFFF' }}>
              Abierto de <span style={{ color: '#9CCBFF' }}>lunes a sábado</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.9)' }}>
              Llega a entrenar después del colegio o del trabajo: las canchas abren hasta
              las 22:00 entre semana. Domingos cerrado.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="navy">Reservar hora</Btn>
              <a
                href={`tel:+${BIZ.phone}`}
                className={`${display.className} inline-flex items-center justify-center px-6 py-2.5 rounded-md text-lg tracking-wider uppercase font-medium tap-44`}
                style={{ color: '#FFFFFF', boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.7)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ backgroundColor: C.navy, boxShadow: '0 20px 44px rgba(10,35,80,0.35)' }}>
              <p className={`${mono.className} px-5 pt-4 pb-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                Horario publicado en su ficha de Google
              </p>
              <ul>
                {HORARIO.map(([d, h], i) => (
                  <li key={d} className="flex items-baseline justify-between gap-4 px-5 py-3.5" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.12)' }}>
                    <span className={`${display.className} uppercase text-xl tracking-wide font-medium`} style={{ color: '#FFFFFF' }}>{d}</span>
                    <span className={`${mono.className} text-base`} style={{ color: h === 'Cerrado' ? '#FFB4A8' : '#9CCBFF' }}>{h}</span>
                  </li>
                ))}
              </ul>
              <p className="px-5 py-3.5 text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.75)', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                {BIZ.address}, {BIZ.city}. Reserva y consultas por WhatsApp o teléfono.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* UBICACION */}
      <section id="ubicacion" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-widest`} style={{ color: C.blue }}>Dónde</p>
            <h2 className={`${display.className} mt-2 text-4xl md:text-6xl uppercase font-bold leading-[0.95]`} style={{ color: C.navy }}>
              Ruta K-55 <span style={{ color: C.blue }}>hacia Las Rastras</span>
            </h2>
            <p className="mt-4 text-lg" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, Región del Maule. A pasos del cruce con Av. Circunvalación,
              con estacionamiento junto al recinto.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Btn href={MAPS_URL} tone="navy">Cómo llegar</Btn>
            </div>
            <div className="relative mt-8 aspect-[4/3] rounded-xl overflow-hidden max-w-sm" style={{ boxShadow: '0 14px 32px rgba(10,35,80,0.18)' }}>
              <Image
                src={`${IMG}/taekwondo-clase.webp`}
                alt="Alumnos de taekwondo entrenando en el gimnasio de Las Rastras junto a los banners del recinto"
                fill
                sizes="(min-width: 768px) 25vw, 80vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(10,35,80,0.18)', border: `6px solid ${C.navy}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="w-full h-[300px] md:h-[380px] border-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20" style={{ backgroundColor: C.navy }}>
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <h2 className={`${display.className} text-4xl md:text-6xl uppercase font-bold leading-[0.95]`} style={{ color: '#FFFFFF' }}>
            ¿Cuándo jugamos?
          </h2>
          <p className="mt-4 text-lg" style={{ color: 'rgba(255,255,255,0.88)' }}>
            Escribe por WhatsApp y asegura tu hora en la cancha.
          </p>
          <div className="mt-7">
            <Btn href={WA_LINK} tone="blue">Reservar por WhatsApp</Btn>
          </div>
        </div>
      </section>

      <footer className="pt-10 pb-6" style={{ backgroundColor: '#071A3D', color: 'rgba(255,255,255,0.72)' }}>
        <div className="max-w-6xl mx-auto px-5 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl uppercase tracking-widest font-semibold`} style={{ color: '#FFFFFF' }}>
              {BIZ.name}
            </p>
            <p className="text-sm mt-1">{BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.horarioSemana}</p>
          </div>
          <nav className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:underline tap-44">{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 mt-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
