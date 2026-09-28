import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

// Identidad tomada de la tarjeta de marca real del estudio (ficha de Maps):
// azul profundo #08263E + dorado #A47B45, chevrones dorados como motivo.
const C = {
  navy: '#08263E',
  navyDeep: '#051A2C',
  navySoft: '#0E3353',
  gold: '#A47B45',
  goldLight: '#D9B478',
  goldInk: '#6E5227',
  paper: '#F6F3EC',
  paperDeep: '#EBE5D6',
  ink: '#14232E',
  muted: '#55616B',
  line: 'rgba(20,35,46,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'jd-abogados',
  title: 'J&D Abogados Talca — Estudio jurídico en Plaza Poniente',
  description:
    'Estudio de abogados en Calle 1 Poniente 1258, Oficina 1112, Talca. Nota 5,0 en Google con 34 reseñas. Consulte por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La oficina', href: '#oficina' },
  { label: 'Causas', href: '#causas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const FOTOS_OFICINA = [
  {
    src: `${IMG}/escritorio.webp`,
    alt: 'Escritorio del estudio con la biblioteca de textos legales y los diplomas enmarcados',
    cap: 'la biblioteca y el escritorio',
  },
  {
    src: `${IMG}/recepcion.webp`,
    alt: 'Segunda oficina del estudio con escritorio de recepción y salida al balcón',
    cap: 'la recepción, con salida al balcón',
  },
  {
    src: `${IMG}/vista.webp`,
    alt: 'Vista aérea del centro de Talca desde el piso 11 del Edificio Plaza Poniente',
    cap: 'la vista hacia el poniente, desde el piso 11',
  },
]

// Categorías reales publicadas en la ficha de Google Maps del estudio.
const CAUSAS = [
  {
    code: 'EXP·01',
    name: 'Familia y divorcio',
    items: 'Divorcio, reparto de bienes, pensión de alimentos, cuidado personal',
  },
  {
    code: 'EXP·02',
    name: 'Civil',
    items: 'Contratos, arriendos, daños personales e indemnizaciones',
  },
  {
    code: 'EXP·03',
    name: 'Laboral',
    items: 'Despidos, finiquitos, tutela laboral y asesoría a trabajadores',
  },
  {
    code: 'EXP·04',
    name: 'Penal',
    items: 'Defensa penal y querellas, con acompañamiento en cada etapa',
  },
  {
    code: 'EXP·05',
    name: 'Inmobiliario',
    items: 'Compraventas, arriendos y regularización de propiedades',
  },
  {
    code: 'EXP·06',
    name: 'Administrativo y comercial',
    items: 'Gestiones ante el Estado, sociedades y contratos de empresa',
  },
]

// Reseñas reales de la ficha de Google Maps (34 reseñas, nota 5,0).
const RESENAS = [
  {
    text: 'J&D Abogados Talca me ayudó con mi caso de divorcio y reparto de bienes. Su atención fue profesional y eficiente. Recomiendo sus servicios a cualquiera que necesite un abogado confiable en Maule.',
    name: 'Jose Barrientos',
    detail: 'caso de divorcio',
  },
  {
    text: 'Su equipo de expertos en derecho familiar no solo me proporcionó la ayuda que necesitaba, sino que también me brindaron un soporte excepcional a lo largo de todo el proceso.',
    name: 'Andersson Anaya',
    detail: 'derecho de familia',
  },
  {
    text: 'El equipo de J&D Abogados Talca es excepcional. Me brindaron asesoría legal clara y precisa. Gracias a ellos, mi proceso fue mucho más sencillo y menos estresante.',
    name: 'Maria Del Pilar',
    detail: 'asesoría legal',
  },
]

const FAQS = [
  {
    q: '¿Cómo agendo una reunión?',
    a: 'Escríbanos por WhatsApp contando brevemente su caso. El estudio trabaja con cita recomendada y también ofrece citas online, según indica su ficha de Google.',
  },
  {
    q: '¿Dónde queda la oficina?',
    a: `En ${BIZ.address}, ${BIZ.building}, pleno centro de ${BIZ.city}, frente a la plaza. La oficina está en el piso 11.`,
  },
  {
    q: '¿Atienden los sábados?',
    a: `Sí. El horario publicado es ${BIZ.horario.toLowerCase()}; los domingos está cerrado.`,
  },
  {
    q: '¿Qué llevo a la primera reunión?',
    a: 'Su cédula de identidad y los documentos del caso: contratos, cartas, notificaciones o sentencias. Si no tiene todo, igual venga: el estudio revisa qué sirve y qué falta.',
  },
]

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] mb-5`}
      style={{ color: light ? C.goldLight : C.goldInk }}
    >
      <span aria-hidden="true" className="tracking-[-0.28em]">»»</span>
      {children}
    </p>
  )
}

export default function JdAbogadosPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <div style={{ backgroundColor: C.navyDeep }}>
        <BlitzNav
          name={
            // eslint-disable-next-line @next/next/no-img-element -- logo real del estudio, ya optimizado en public/
            <img src={`${IMG}/logo.webp`} alt={BIZ.name} className="h-8 md:h-9 w-auto rounded-[2px]" />
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={body.className}
          theme={{
            over: 'dark',
            bar: 'rgba(8,38,62,0.94)',
            ink: '#F6F3EC',
            line: 'rgba(246,243,236,0.18)',
            btnBg: C.gold,
            btnInk: '#08263E',
          }}
        />
      </div>

      {/* ── Hero: panel azul + foto real de la oficina ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.05fr_1fr]">
          <div className="px-5 md:px-8 pt-28 md:pt-36 pb-10 lg:pb-16 flex flex-col justify-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-6`} style={{ color: C.goldLight }}>
                Estudio jurídico · {BIZ.building}, {BIZ.city}
              </p>
              <h1
                className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,8.5vw,5.4rem)] mb-6`}
                style={{ color: C.paper }}
              >
                {BIZ.claim.replace(' en Talca', '')}
                <br />
                <span style={{ color: C.goldLight }}>en Talca</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(246,243,236,0.82)' }}>
                Atención directa con el abogado en la oficina 1112, once pisos
                sobre la plaza. {BIZ.ratingLabel} de nota en Google con{' '}
                {BIZ.reviews} reseñas — todas cinco estrellas.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm px-6 py-3 transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.gold, color: C.navyDeep }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#causas"
                  className="font-semibold text-sm px-6 py-3 border transition-colors hover:bg-white/10 tap-44"
                  style={{ borderColor: 'rgba(246,243,236,0.5)', color: C.paper }}
                >
                  Ver las causas que atienden
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative min-h-[300px] lg:min-h-0">
            <Image
              src={`${IMG}/hero.webp`}
              alt="Oficina principal de J&D Abogados Talca: escritorio, sillas de cuero y diplomas enmarcados junto a la ventana"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <p
              className={`${mono.className} absolute bottom-0 left-0 text-[10px] uppercase tracking-[0.2em] px-4 py-2.5`}
              style={{ backgroundColor: C.navyDeep, color: C.goldLight }}
            >
              Oficina 1112 · piso 11
            </p>
          </div>
        </div>
        {/* ficha rápida */}
        <div className="border-t" style={{ borderColor: 'rgba(246,243,236,0.14)', backgroundColor: C.navyDeep }}>
          <dl className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4">
            {[
              ['Dirección', `${BIZ.address}`],
              ['Horario', 'Lun–Sáb 9:00–18:00'],
              ['Google Maps', `${BIZ.ratingLabel} · ${BIZ.reviews} reseñas`],
              ['Agenda', 'Citas presenciales y online'],
            ].map(([k, v], i) => (
              <div
                key={k}
                className={`py-4 ${i > 0 ? 'md:border-l md:pl-5' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''} ${i % 2 ? 'pl-4 md:pl-5' : ''}`}
                style={{ borderColor: 'rgba(246,243,236,0.14)' }}
              >
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.goldLight }}>
                  {k}
                </dt>
                <dd className="text-sm font-medium" style={{ color: C.paper }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── La oficina: tira de fotos reales ── */}
      <section id="oficina" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-6">
          <Reveal>
            <Label>La oficina</Label>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end">
              <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em]`}>
                Once pisos sobre
                <br />
                <span style={{ color: C.goldInk }}>la plaza de Talca</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Así se ve la oficina donde lo van a atender, con su biblioteca
                de leyes, los diplomas en la pared y el centro de Talca abajo.
                Fotos reales de la ficha del estudio.
              </p>
            </div>
          </Reveal>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {FOTOS_OFICINA.map((f, i) => (
              <Reveal key={f.src} delay={i * 120}>
                <figure>
                  <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '3px' }}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 640px) 32vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3 flex items-baseline gap-2`}
                    style={{ color: C.goldInk }}
                  >
                    <span aria-hidden="true">»</span>
                    <span style={{ color: C.muted }}>{f.cap}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Índice de causas: índice de expediente ── */}
      <section id="causas" className="scroll-mt-20" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Índice de causas</Label>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-10 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em]`}>
                Lo que se consulta
                <br />
                <span style={{ color: C.goldInk }}>en el piso 11</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Las materias publicadas por el estudio en su ficha de Google.
                Si su caso no está en la lista, pregunte igual.
              </p>
            </div>
          </Reveal>
          <ol>
            {CAUSAS.map((a, i) => (
              <Reveal key={a.code} delay={i * 50}>
                <li
                  className="grid grid-cols-[auto_1fr] md:grid-cols-[110px_1fr_1.4fr_auto] items-baseline gap-x-4 md:gap-x-8 py-5 md:py-6 border-t"
                  style={{ borderColor: C.line }}
                >
                  <span className={`${mono.className} text-xs md:text-sm tracking-[0.1em]`} style={{ color: C.goldInk }}>
                    {a.code}
                  </span>
                  <h3 className={`${display.className} font-semibold text-2xl md:text-3xl`}>{a.name}</h3>
                  <p className="col-span-2 md:col-span-1 mt-1.5 md:mt-0 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {a.items}
                  </p>
                  <a
                    href={`https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(
                      `Hola, vi la página de J&D Abogados Talca y quiero consultar por un caso de ${a.name.toLowerCase()}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} hidden md:inline-block text-xs uppercase tracking-[0.14em] font-medium underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.goldInk, textDecorationColor: 'rgba(164,123,69,0.5)' }}
                  >
                    Consultar »
                  </a>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas reales: muro azul ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.navy, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.8fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Label light>En Google Maps</Label>
              <p className={`${display.className} font-semibold text-[clamp(5rem,14vw,8.5rem)] leading-[0.9] mb-3`} style={{ color: C.goldLight }}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.goldLight} className="w-5 h-5" />
              <p className="text-sm mt-3" style={{ color: 'rgba(246,243,236,0.75)' }}>
                {BIZ.reviews} reseñas publicadas — todas cinco estrellas.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block mt-6 text-xs uppercase tracking-[0.16em] font-medium underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.goldLight, textDecorationColor: 'rgba(217,180,120,0.5)' }}
              >
                Ver la ficha en Google »
              </a>
            </Reveal>
            <div>
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={i * 100}>
                  <figure
                    className={`py-6 md:py-7 ${i > 0 ? 'border-t' : ''}`}
                    style={{ borderColor: 'rgba(246,243,236,0.14)' }}
                  >
                    <blockquote className={`${display.className} text-xl md:text-2xl leading-snug mb-4`} style={{ color: C.paper }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.goldLight }}>
                      {r.name} <span style={{ color: 'rgba(246,243,236,0.6)' }}>· {r.detail} · reseña de Google</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar: fachada real + mapa ── */}
      <section id="llegar" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Cómo llegar</Label>
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.02] tracking-[-0.01em] mb-10 md:mb-14`}>
              El edificio gris
              <br />
              <span style={{ color: C.goldInk }}>frente a la plaza</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '3px' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Entrada del Edificio Plaza Poniente en Calle 1 Poniente 1258, Talca"
                  fill
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="object-cover"
                />
              </div>
              <address className="not-italic mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <strong className={`${display.className} block text-xl font-semibold mb-1`} style={{ color: C.ink }}>
                  {BIZ.building}
                </strong>
                {BIZ.address} · piso 11
                <br />
                {BIZ.city}, {BIZ.region}
                <br />
                <span className={`${mono.className} text-xs uppercase tracking-[0.14em]`}>{BIZ.horario}</span>
              </address>
              <div className="flex flex-wrap gap-3 mt-6">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm px-6 py-3 transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.navy, color: C.paper }}
                >
                  Abrir en Google Maps »
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="font-semibold text-sm px-6 py-3 border transition-colors tap-44"
                  style={{ borderColor: C.navy, color: C.navy }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, borderRadius: '3px', backgroundColor: C.paperDeep }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Label>Antes de escribir</Label>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-8`}>
              Lo que preguntan antes de subir al piso 11
            </h2>
          </Reveal>
          <FaqList
            items={FAQS}
            colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.navy, plusInk: C.goldLight }}
          />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-5`} style={{ color: C.goldLight }}>
              {BIZ.ratingLabel} en Google · {BIZ.reviews} reseñas · {BIZ.city}
            </p>
            <h2 className={`${display.className} font-semibold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.04] mb-8`} style={{ color: C.paper }}>
              Cuéntenos su caso,<br />lo vemos esta semana
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-3.5 transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.gold, color: C.navyDeep }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-3.5 border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(246,243,236,0.5)', color: C.paper }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.navy, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del estudio */}
            <img src={`${IMG}/logo.webp`} alt={BIZ.name} className="h-8 w-auto rounded-[2px] mb-3" />
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,243,236,0.65)' }}>
              {BIZ.address}, {BIZ.building} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(246,243,236,0.6)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed border-t"
          style={{ color: 'rgba(246,243,236,0.7)', borderColor: 'rgba(246,243,236,0.12)' }}
        >
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.goldLight }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}, así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.goldLight }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
