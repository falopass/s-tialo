import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, EQUIPO, AREAS, REVIEWS, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/** Paleta real de la marca IUS (logo del estudio): crema, tinta y oro. */
const C = {
  cream: '#FFF4DC',
  creamDeep: '#F3E7C6',
  ink: '#0F100D',
  gold: '#DFA731',
  goldInk: '#6E5710',
  muted: '#57503E',
  line: 'rgba(15,16,13,0.18)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6E5710]'

/** La regla dorada con punto central del propio logo del estudio. */
function Regla() {
  return (
    <span className="flex items-center justify-center gap-3 pb-10" aria-hidden="true">
      <span className="h-[2px] w-14 md:w-20" style={{ backgroundColor: C.gold }} />
      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.gold }} />
      <span className="h-[2px] w-14 md:w-20" style={{ backgroundColor: C.gold }} />
    </span>
  )
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.26em] mb-5"
      style={{ color: light ? C.gold : C.goldInk }}
    >
      <span className="inline-block w-7 h-[2px]" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export const metadata: Metadata = demoMetadata({
  slug: 'ius-abogados-linares',
  title: 'IUS Abogados Linares — Estudio jurídico en Maipú 461, Linares',
  description:
    'Estudio jurídico en Maipú 461 of. 405, Linares. Familia, laboral, civil y Juzgados de Policía Local. Atención presencial y a todo Chile. Consulte por WhatsApp.',
  image: '/demos/ius-abogados-linares/hero.webp',
})

const NAV_LINKS = [
  { label: 'El estudio', href: '#estudio' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const PASOS = [
  {
    n: 'I',
    title: 'Nos escribe por WhatsApp',
    desc: 'En pocas líneas: qué pasó y desde cuándo. Le respondemos con una hora para conversar.',
  },
  {
    n: 'II',
    title: 'Primera reunión en Maipú 461',
    desc: 'Oficina 405, centro de Linares. Habla directo con el abogado que verá su caso — con Javiera o con Matías.',
  },
  {
    n: 'III',
    title: 'Propuesta por escrito',
    desc: 'Qué camino recomendamos, cuánto puede tardar y cuánto cuesta. Todo en papel antes de decidir.',
  },
  {
    n: 'IV',
    title: 'Defensa y seguimiento',
    desc: 'Presentamos, litigamos y le avisamos cada movimiento del caso, en palabras simples.',
  },
]

export default function IusAbogadosLinaresPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <div style={{ backgroundColor: C.ink }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          logoSrc={`${IMG}/marca.webp`}
          theme={{
            over: 'dark',
            bar: 'rgba(255,244,220,0.96)',
            ink: C.ink,
            line: C.line,
            btnBg: C.ink,
            btnInk: C.cream,
          }}
        />
      </div>

      {/* ── Hero: la tarjeta de presentación del estudio ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <Label>Estudio jurídico · Maipú 461, of. 405 · Linares</Label>
              {/* El lockup real del estudio: IUS con la columna + regla de oro */}
              <img
                src={`${IMG}/logo.webp`}
                alt="IUS Abogados Linares: logotipo del estudio con la I como columna clásica y la regla dorada"
                className="w-full max-w-[480px] h-auto -ml-1 mb-2"
              />
              <h1 className={`${display.className} text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.08] mb-5`}>
                Su caso lo lleva un abogado
                <br />
                con <span style={{ color: C.goldInk }}>nombre y apellido</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
                Javiera Santos y Matías Leiva atienden en la oficina 405 de
                Maipú 461, en el centro de Linares, y en línea a todo Chile.
                Familia, laboral, civil y Juzgados de Policía Local.
              </p>
              <div className="flex flex-wrap gap-3 mb-9">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-sm px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.ink, color: C.cream, boxShadow: `0 0 0 1px ${C.ink}, 5px 5px 0 ${C.gold}` }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#estudio"
                  className={`${display.className} text-sm px-7 py-3.5 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Conocer el estudio
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2.5 pr-14 text-sm font-semibold ${focusRing} tap-44`}
                style={{ color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.goldInk} className="w-4 h-4" />
                {BIZ.ratingLabel} · {BIZ.reviews} opiniones en Google
                <span aria-hidden="true" style={{ color: C.goldInk }}>→</span>
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                <div
                  className="relative aspect-[4/5] overflow-hidden"
                  style={{ boxShadow: `12px 12px 0 ${C.gold}`, border: `1px solid ${C.ink}` }}
                >
                  <Image
                    src={`${IMG}/escritorio.webp`}
                    alt="Interior real de la oficina de IUS Abogados Linares: escritorio de trabajo, lámpara verde y madera"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`${display.className} absolute -bottom-4 left-5 text-xs tracking-[0.18em] uppercase px-4 py-2.5`}
                  style={{ backgroundColor: C.ink, color: C.cream }}
                >
                  Oficina 405 · Centro de Linares
                </span>
              </div>
            </Reveal>
          </div>
        </div>
        <Regla />
      </section>

      {/* ── El estudio: dos abogados, dos nombres ── */}
      <section id="estudio" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light>El estudio</Label>
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-6 lg:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.03]`}>
                Dos abogados.
                <br />
                <span style={{ color: C.gold }}>Cero intermediarios.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,244,220,0.75)' }}>
                En IUS no hay secretarias que filtran ni call center: usted
                conversa con quien firma y lleva su causa. La placa de la
                puerta lo dice literal.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-8">
            {EQUIPO.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <article className="grid md:grid-cols-[1fr_1.1fr] overflow-hidden border" style={{ borderColor: 'rgba(255,244,220,0.22)', backgroundColor: 'rgba(255,244,220,0.04)' }}>
                  <div className="relative aspect-[3/4] md:aspect-auto md:min-h-[280px]">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                  </div>
                  <div className="p-6 md:p-7 flex flex-col justify-center">
                    <p className="text-[10px] uppercase tracking-[0.22em] font-bold mb-2" style={{ color: C.gold }}>{p.role}</p>
                    <h3 className={`${display.className} text-2xl md:text-[1.7rem] leading-tight mb-3`}>{p.name}</h3>
                    <a href={`tel:${p.phone.replace(/\s/g, '')}`} className={`text-sm font-semibold ${focusRing} tap-44`} style={{ color: 'rgba(255,244,220,0.85)' }}>
                      {p.phone}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-6 md:gap-10 items-center mt-10 md:mt-14">
              <div className="relative aspect-[3/4] max-w-[240px] overflow-hidden border" style={{ borderColor: 'rgba(255,244,220,0.25)' }}>
                <Image
                  src={`${IMG}/placa.webp`}
                  alt="Placa de la puerta de la oficina 405: IUS Abogados Linares, con los nombres y teléfonos de ambos abogados, horario 9:30 a 18:00"
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
              <p className={`${display.className} text-xl md:text-2xl leading-relaxed`} style={{ color: 'rgba(255,244,220,0.9)' }}>
                «Atención presencial en Linares y defensa en tribunales de
                todo el país: la litigación moderna exige un pie en el
                tribunal y otro en la vanguardia digital.»
                <span className="block mt-3 text-xs uppercase tracking-[0.2em] font-sans" style={{ color: C.gold }}>
                  El estudio, en su LinkedIn
                </span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Áreas ── */}
      <section id="areas" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Áreas de práctica</Label>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.03] mb-10 md:mb-14`}>
              Cuatro materias,
              <br />
              <span style={{ color: C.goldInk }}>un solo interlocutor</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {AREAS.map((a, i) => (
              <Reveal key={a.code} delay={i * 80}>
                <article className="h-full flex flex-col p-6 border-2" style={{ borderColor: C.ink, backgroundColor: '#fff' }}>
                  <p className={`${display.className} text-sm tracking-[0.14em] uppercase mb-3`} style={{ color: C.goldInk }}>
                    {a.code}
                  </p>
                  <h3 className={`${display.className} text-xl leading-tight mb-4`}>{a.name}</h3>
                  <ul className="space-y-2 text-sm flex-1" style={{ color: C.muted }}>
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5">
                        <span className="mt-[7px] w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(`Hola, quiero consultar por un tema de ${a.name.toLowerCase()}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm mt-5 underline underline-offset-4 decoration-2 ${focusRing} tap-44`}
                    style={{ color: C.ink, textDecorationColor: C.gold }}
                  >
                    Consultar →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso en numerales romanos ── */}
      <section id="proceso" className="scroll-mt-20" style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Así se trabaja un caso</Label>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-10 md:mb-14`}>
              Del primer mensaje
              <br />
              <span style={{ color: C.goldInk }}>a la última gestión</span>
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <li className="border-t-2 pt-5" style={{ borderColor: C.ink }}>
                  <span className={`${display.className} text-4xl md:text-5xl block mb-3`} style={{ color: C.goldInk }} aria-hidden="true">
                    {p.n}.
                  </span>
                  <h3 className={`${display.className} text-xl leading-tight mb-2`}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{p.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light>Opiniones</Label>
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-14 items-start">
              <div>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-5`}>
                  {BIZ.ratingLabel} de 5,
                  <br />
                  <span style={{ color: C.gold }}>en Google</span>
                </h2>
                <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,244,220,0.75)' }}>
                  Las {BIZ.reviews} opiniones de la ficha de Google Maps son
                  todas de cinco estrellas. Estas son algunas, con el nombre
                  de pila de quienes las escribieron.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block text-sm px-6 py-3 border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: C.gold, color: C.gold }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
              <div className="space-y-5">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.author} delay={i * 110}>
                    <figure className="p-6 md:p-7 border-l-[3px]" style={{ backgroundColor: 'rgba(255,244,220,0.05)', borderColor: C.gold }}>
                      <Stars value={5} color={C.gold} className="w-[14px] h-[14px] mb-4" />
                      <blockquote className={`${display.className} text-base md:text-lg leading-relaxed`}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className="text-[11px] uppercase tracking-[0.2em] font-bold mt-4" style={{ color: 'rgba(255,244,220,0.6)' }}>
                        {r.author} · reseña en Google
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Contacto</Label>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`}>
                  A dos cuadras
                  <br />
                  <span style={{ color: C.goldInk }}>de la catedral</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                  La oficina 405 de Maipú 461 queda en pleno centro de
                  Linares, a pasos de la Plaza de Armas. Escriba antes por
                  WhatsApp y coordinamos la hora.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 text-sm">
                  {[
                    ['Dirección', BIZ.address],
                    ['Horario', 'Lun–Vie 9:30–18:00'],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Correo', BIZ.email],
                    ['Instagram', `@${BIZ.instagram}`],
                    ['Comuna', `${BIZ.city}, Maule`],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t pt-3" style={{ borderColor: C.line }}>
                      <dt className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1" style={{ color: C.goldInk }}>{k}</dt>
                      <dd className="font-semibold leading-snug break-words">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.ink, color: C.cream, boxShadow: `4px 4px 0 ${C.gold}` }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm px-7 py-3.5 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    @{BIZ.instagram}
                  </a>
                </div>
              </div>
              <div className="space-y-5">
                <div className="grid grid-cols-[1fr_1.35fr] gap-5 items-stretch">
                  <div className="relative overflow-hidden border" style={{ borderColor: C.ink }}>
                    <Image
                      src={`${IMG}/llegar.webp`}
                      alt="Catedral de Linares con el letrero de la ciudad en la Plaza de Armas"
                      fill
                      sizes="(min-width: 1024px) 20vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden border min-h-[300px]" style={{ borderColor: C.ink }}>
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-full min-h-[300px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative aspect-[4/5] overflow-hidden border" style={{ borderColor: C.ink }}>
                    <Image src={`${IMG}/justicia.webp`} alt="Estatua de la Justicia en la oficina de IUS Abogados" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden border" style={{ borderColor: C.ink }}>
                    <Image src={`${IMG}/estante.webp`} alt="Estante con libros de derecho y la estatua de la Justicia en la oficina" fill sizes="(min-width: 1024px) 20vw, 45vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-center gap-4">
            <img src={`${IMG}/marca.webp`} alt="" className="h-10 w-10 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-lg leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs" style={{ color: 'rgba(255,244,220,0.7)' }}>
                {BIZ.address} · {BIZ.city}, Maule · Lun–Vie 9:30–18:00
              </address>
            </div>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(255,244,220,0.7)' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed border-t"
          style={{ color: 'rgba(255,244,220,0.7)', borderColor: 'rgba(255,244,220,0.14)' }}
        >
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.gold }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Dirección, teléfonos, horario, fotos, logo y
          reseñas son datos reales de su ficha de Google y de su Instagram.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.gold }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
