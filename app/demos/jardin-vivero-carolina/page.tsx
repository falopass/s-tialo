import type { Metadata } from 'next'
import Image from 'next/image'
import { Prata, Mulish } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_STOCK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Prata({ subsets: ['latin'], weight: '400' })
const body = Mulish({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'] })

const C = {
  night: '#1B2A41',
  nightSoft: '#26395A',
  sand: '#E8DCC8',
  sandSoft: '#F4EEE3',
  terra: '#C1663F',
  terraDeep: '#A4522F',
  terraText: '#8E4527',
  terraLight: '#E0875F',
  white: '#FFFFFF',
  ink: '#1B2A41',
  muted: '#4E5869',
  line: 'rgba(27,42,65,0.14)',
}

export const metadata: Metadata = {
  title: 'Jardin Vivero Carolina — Vivero en Curicó',
  description:
    'Vivero en Fundo La Obra, Curicó. Flores de temporada, plantas de interior, frutales y maceteros, con consulta directa por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Directorio', href: '#directorio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Preguntas', href: '#preguntas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

type IconName = 'flower' | 'indoor' | 'tree' | 'pot' | 'can' | 'soil'

const DIRECTORIO: {
  icon: IconName
  src: string
  code: string
  name: string
  desc: string
  tags: string[]
  wa: string
}[] = [
  {
    icon: 'flower',
    src: `${IMG}/detalle1.webp`,
    code: '01',
    name: 'Flores y plantas de exterior',
    desc: 'Lavandas, margaritas, cardenales y lo que esté floreciendo en la temporada, para jardín, antejardín o maceta en la terraza.',
    tags: ['Pleno sol', 'Media sombra', 'De temporada'],
    wa: 'flores de exterior',
  },
  {
    icon: 'indoor',
    src: `${IMG}/detalle2.webp`,
    code: '02',
    name: 'Plantas de interior y colgantes',
    desc: 'Potos, helechos, calateas y plantas para colgar, criadas bajo invernadero y listas para vivir dentro de la casa.',
    tags: ['Poca luz', 'Colgantes', 'Para regalar'],
    wa: 'plantas de interior',
  },
  {
    icon: 'tree',
    src: `${IMG}/detalle3.webp`,
    code: '03',
    name: 'Frutales, aromáticas y huerto',
    desc: 'Cítricos y frutales para el patio, más romero, tomillo y almácigos para armar la huerta de la casa.',
    tags: ['Frutales', 'Aromáticas', 'Almácigos'],
    wa: 'frutales y huerto',
  },
  {
    icon: 'pot',
    src: `${IMG}/ambiente.webp`,
    code: '04',
    name: 'Maceteros de terracota',
    desc: 'Macetas de barro en varios tamaños, desde la chica para la ventana hasta la grande para un olivo en el patio.',
    tags: ['Barro', 'Varios tamaños', 'Con planta o solas'],
    wa: 'maceteros',
  },
]

const PRECIOS: { icon: IconName; name: string; detail: string }[] = [
  { icon: 'flower', name: 'Flores de temporada', detail: 'maceta chica' },
  { icon: 'indoor', name: 'Planta de interior', detail: 'tamaño mediano' },
  { icon: 'tree', name: 'Frutal', detail: 'en bolsa, listo para plantar' },
  { icon: 'can', name: 'Aromáticas y almácigos', detail: 'por unidad' },
  { icon: 'pot', name: 'Macetero de terracota', detail: 'según diámetro' },
  { icon: 'soil', name: 'Tierra de hoja y sustrato', detail: 'por saco' },
]

const VALORAN = [
  {
    title: 'Te atiende quien cuida las plantas',
    desc: 'Preguntas y te responde alguien que las riega todos los días, no un vendedor de mostrador.',
  },
  {
    title: 'Consejo según tu casa',
    desc: 'Luz, riego y espacio: la idea es que te lleves la planta que te va a durar, no la más cara.',
  },
  {
    title: 'Se recorre con calma',
    desc: 'Un vivero en el campo de Curicó para caminar entre las mesas y elegir sin apuro.',
  },
]

const FAQS = [
  {
    q: '¿Cómo sé si tienen la planta que busco?',
    a: 'Escribe por WhatsApp con el nombre o una foto de la planta y te confirmamos si está disponible.',
  },
  {
    q: '¿Me pueden recomendar qué planta llevar?',
    a: 'Sí. Cuéntanos si es para interior o exterior, cuánta luz le llega y cuánto tiempo tienes para regar.',
  },
  {
    q: '¿Dónde queda el vivero?',
    a: `En ${BIZ.address}, ${BIZ.city}. Abajo está el mapa y el botón para abrir la ruta en Google Maps.`,
  },
  {
    q: '¿Tienen maceteros sin planta?',
    a: 'Sí, se pueden llevar solos o con la planta ya trasplantada. Pregunta por tamaños disponibles.',
  },
  {
    q: '¿Puedo ir a ver antes de comprar?',
    a: 'Claro. Te recomendamos avisar por WhatsApp antes de venir para confirmar el horario de atención.',
  },
  {
    q: '¿Venden para regalar?',
    a: 'Sí. Las plantas de interior y las flores en maceta son una buena opción; te ayudamos a elegir.',
  },
]

function Icon({ name, className = 'w-5 h-5' }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    flower: (
      <>
        <circle cx="12" cy="8" r="1.8" />
        <circle cx="12" cy="4.6" r="1.6" />
        <circle cx="15.4" cy="8" r="1.6" />
        <circle cx="12" cy="11.4" r="1.6" />
        <circle cx="8.6" cy="8" r="1.6" />
        <path d="M12 13 V21 M12 17.5 C10 16 8 16 7 17 C8.5 18.5 10.5 18.5 12 17.5" />
      </>
    ),
    indoor: (
      <>
        <path d="M7 14 H17 L15.8 21 H8.2 Z" />
        <path d="M12 14 V9 M12 11 C9.5 11 7.5 9.5 7.5 6.5 C10 6.5 12 8 12 11 M12 9.5 C12 6.5 14 4 17 4 C17 7.5 14.5 9.5 12 9.5" />
      </>
    ),
    tree: (
      <>
        <path d="M12 21 V13" />
        <path d="M12 13 C7.5 13 5 10.5 5 7.5 C5 4.5 8 3 12 3 C16 3 19 4.5 19 7.5 C19 10.5 16.5 13 12 13 Z" />
        <circle cx="9.5" cy="8" r="1.1" />
        <circle cx="14.5" cy="9" r="1.1" />
      </>
    ),
    pot: (
      <>
        <path d="M4.5 8 H19.5 V10.5 H4.5 Z" />
        <path d="M6 10.5 L7.5 20 H16.5 L18 10.5" />
      </>
    ),
    can: (
      <>
        <path d="M6 10 H15 V19 H6 Z" />
        <path d="M15 12 L20 8.5 M19 7 L21 10" />
        <path d="M8 10 C8 7 13 7 13 10" />
      </>
    ),
    soil: (
      <>
        <path d="M6 6 H18 L19 20 H5 Z" />
        <path d="M6 6 C8 4 16 4 18 6" />
        <path d="M9 13 C10.5 11.5 13.5 11.5 15 13" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function WaIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function WaButton({
  href = WA_LINK,
  children = 'Escribir por WhatsApp',
  tone = 'terra',
  className = '',
}: {
  href?: string
  children?: React.ReactNode
  tone?: 'terra' | 'white' | 'night'
  className?: string
}) {
  const s = {
    terra: { backgroundColor: C.terraDeep, color: C.white },
    white: { backgroundColor: C.white, color: C.night },
    night: { backgroundColor: C.night, color: C.white },
  }[tone]
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 rounded-full font-bold text-[15px] transition-transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`}
      style={s}
    >
      <WaIcon />
      {children}
    </a>
  )
}

function SectionHead({ index, title, note, light = false }: { index: string; title: string; note?: string; light?: boolean }) {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 pb-6 mb-2 border-b" style={{ borderColor: light ? 'rgba(255,255,255,0.18)' : C.line }}>
      <div>
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: light ? C.terraLight : C.terraText }}>
          {index}
        </p>
        <h2 className={`${display.className} text-3xl md:text-[2.6rem] leading-tight`} style={{ color: light ? C.white : C.ink }}>
          {title}
        </h2>
      </div>
      {note && (
        <p className="text-sm max-w-sm md:text-right" style={{ color: light ? 'rgba(255,255,255,0.7)' : C.muted }}>
          {note}
        </p>
      )}
    </div>
  )
}

function SampleChip({ light = false }: { light?: boolean }) {
  return (
    <span
      className="inline-block text-[10px] font-bold tracking-[0.14em] uppercase px-2 py-[3px] rounded"
      style={light ? { backgroundColor: 'rgba(255,255,255,0.12)', color: C.sand } : { backgroundColor: C.sand, color: C.terraText }}
    >
      Muestra
    </span>
  )
}

export default function JardinViveroCarolinaPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.white, color: C.ink }}>
      <div className="[&>header]:absolute!" style={{ backgroundColor: C.night }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{ over: 'dark', bar: 'rgba(27,42,65,0.96)', ink: C.white, line: 'rgba(255,255,255,0.12)', btnBg: C.terraDeep, btnInk: C.white }}
        />
      </div>

      {/* ── Hero a sangre ─────────────────────────────── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden" style={{ backgroundColor: C.night }}>
        <Image src={`${IMG}/hero.webp`} alt="Hileras de plantas en maceta en un vivero al atardecer, con cerros de fondo" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(27,42,65,0.72) 0%, rgba(27,42,65,0.6) 35%, rgba(27,42,65,0.94) 100%)' }} />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-24 md:pb-24">
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: C.sand }}>
            <span className="w-6 h-px" style={{ backgroundColor: C.terra }} />
            Vivero · Fundo La Obra, Curicó
          </p>
          <h1 className={`${display.className} text-[2.5rem] leading-[1.08] md:text-7xl md:leading-[1.05] max-w-4xl`} style={{ color: C.white }}>
            Plantas que crecen en Curicó, y alguien que te ayuda a elegirlas.
          </h1>
          <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
            Flores, plantas de interior, frutales y maceteros de barro en {BIZ.name}. Pregunta lo que necesites por WhatsApp antes de venir.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <WaButton>Consultar por WhatsApp</WaButton>
            <a
              href="#directorio"
              className="self-start sm:self-auto inline-flex items-center justify-center min-h-[48px] px-6 rounded-full font-bold text-[15px] border transition-colors hover:bg-white/10"
              style={{ borderColor: 'rgba(255,255,255,0.45)', color: C.white }}
            >
              Ver lo que hay en el vivero
            </a>
          </div>
        </div>
      </section>

      {/* ── Índice ─────────────────────────────────────── */}
      <nav aria-label="Índice de la página" style={{ backgroundColor: C.night }}>
        <ol className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4">
          {NAV_LINKS.map((l, i) => (
            <li key={l.href} className="border-white/10 border-b md:border-b-0 md:border-r last:border-r-0 odd:border-r md:odd:border-r">
              <a href={l.href} className="flex items-center gap-3 py-3 md:py-5 px-1 md:px-5 text-sm font-semibold transition-colors hover:text-white" style={{ color: C.sand }}>
                <span className="text-xs tabular-nums" style={{ color: C.terraLight }}>0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* ── Directorio ─────────────────────────────────── */}
      <section id="directorio" className="py-20 md:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHead index="01 · Directorio" title="Lo que encuentras en el vivero" note="El stock cambia con la temporada. Escribe antes de venir y te confirmamos qué hay." />
          <ul>
            {DIRECTORIO.map((d, i) => (
              <li key={d.code}>
                <Reveal delay={i * 60}>
                  <article className="grid grid-cols-1 md:grid-cols-[220px_1fr_200px] gap-5 md:gap-8 py-8 border-b" style={{ borderColor: C.line }}>
                    <div className="relative aspect-[4/3] md:aspect-[4/3.2] rounded-xl overflow-hidden">
                      <Image src={d.src} alt={d.name} fill loading="eager" sizes="(min-width: 768px) 220px, 100vw" className="object-cover" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: C.sandSoft, color: C.terra }}>
                          <Icon name={d.icon} />
                        </span>
                        <span className="text-xs font-bold tabular-nums" style={{ color: C.muted }}>{d.code}</span>
                      </div>
                      <h3 className={`${display.className} text-2xl md:text-[1.7rem] leading-snug`}>{d.name}</h3>
                      <p className="mt-2 leading-relaxed max-w-xl" style={{ color: C.muted }}>{d.desc}</p>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {d.tags.map((t) => (
                          <li key={t} className="text-xs font-semibold px-3 py-1.5 rounded-full border" style={{ borderColor: C.line, color: C.night }}>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex md:flex-col md:items-end md:text-right justify-between items-center gap-3 md:pt-1">
                      <div>
                        <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-1" style={{ color: C.muted }}>Precio</p>
                        <p className={`${display.className} text-xl`} style={{ color: C.night }}>desde $0.000</p>
                        <div className="mt-1.5"><SampleChip /></div>
                      </div>
                      <a
                        href={`https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(`Hola, vi la página de ${BIZ.name} y quiero consultar por ${d.wa}`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 min-h-[44px] px-4 rounded-full text-sm font-bold border transition-colors hover:bg-[#1B2A41] hover:text-white"
                        style={{ borderColor: C.night, color: C.night }}
                      >
                        <WaIcon className="w-4 h-4" />
                        Consultar
                      </a>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── WhatsApp (repetido) ───────────────────────── */}
      <section style={{ backgroundColor: C.terraDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
          <p className={`${display.className} text-2xl md:text-3xl leading-snug max-w-2xl`} style={{ color: C.white }}>
            ¿Buscas algo puntual? Mándanos una foto y te decimos si lo tenemos.
          </p>
          <WaButton href={WA_LINK_STOCK} tone="white" className="shrink-0">Preguntar disponibilidad</WaButton>
        </div>
      </section>

      {/* ── Sobre el vivero ───────────────────────────── */}
      <section id="nosotros" className="py-20 md:py-28" style={{ backgroundColor: C.sandSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.1fr] gap-12 md:gap-16">
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3" style={{ color: C.terraText }}>El vivero</p>
            <h2 className={`${display.className} text-3xl md:text-[2.6rem] leading-tight`}>
              Un vivero de campo en Curicó, atendido directo.
            </h2>
            <p className="mt-5 leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name} está en el Fundo La Obra, en el sector rural de Curicó. Aquí no hay intermediarios: consultas, te responden y te llevas la planta desde donde se cuida.
            </p>
            <dl className="mt-8 grid grid-cols-2 gap-px rounded-xl overflow-hidden" style={{ backgroundColor: C.line }}>
              <div className="p-5" style={{ backgroundColor: C.white }}>
                <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: C.muted }}>Google Maps</dt>
                <dd className={`${display.className} text-3xl mt-1`}>{BIZ.reviews} reseñas</dd>
              </div>
              <div className="p-5" style={{ backgroundColor: C.white }}>
                <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: C.muted }}>Instagram</dt>
                <dd className={`${display.className} text-3xl mt-1`}>{BIZ.instagramFollowers}</dd>
                <dd className="text-xs mt-0.5" style={{ color: C.muted }}>seguidores</dd>
              </div>
            </dl>
          </Reveal>
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-5" style={{ color: C.muted }}>Lo que valoran quienes vienen</p>
            <ul className="space-y-4">
              {VALORAN.map((v, i) => (
                <li key={v.title}>
                  <Reveal delay={i * 80}>
                    <div className="flex gap-4 p-6 rounded-xl" style={{ backgroundColor: C.white }}>
                      <span className={`${display.className} text-2xl leading-none shrink-0`} style={{ color: C.terraText }}>{i + 1}</span>
                      <div>
                        <h3 className="font-bold text-lg">{v.title}</h3>
                        <p className="mt-1 leading-relaxed" style={{ color: C.muted }}>{v.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4"
              style={{ color: C.night }}
            >
              Ver fotos del vivero en Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ─────────────────────── */}
      <section id="precios" className="py-20 md:py-28 scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHead index="02 · Precios" title="Precios de referencia" note="Valores de muestra para este ejemplo: el vivero pone aquí sus precios reales." />
          <ul className="grid md:grid-cols-2 md:gap-x-12">
            {PRECIOS.map((p) => (
              <li key={p.name} className="flex items-center gap-4 py-5 border-b" style={{ borderColor: C.line }}>
                <span className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: C.night, color: C.sand }}>
                  <Icon name={p.icon} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-bold">{p.name}</p>
                  <p className="text-sm" style={{ color: C.muted }}>{p.detail}</p>
                </div>
                <div className="text-right shrink-0">
                  <p className={`${display.className} text-lg`}>$0.000</p>
                  <SampleChip />
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start sm:flex-row sm:items-center gap-4">
            <WaButton tone="night">Pedir precios actualizados</WaButton>
            <p className="text-sm" style={{ color: C.muted }}>Te respondemos con valores y stock del día.</p>
          </div>
        </div>
      </section>

      {/* ── Preguntas frecuentes ──────────────────────── */}
      <section id="preguntas" className="py-20 md:py-28 scroll-mt-16" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHead index="03 · Preguntas" title="Antes de venir al vivero" note="Respuestas de muestra; se ajustan con la información real del negocio." />
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={(i % 3) * 70}>
                <div className="h-full p-6 rounded-xl" style={{ backgroundColor: C.white }}>
                  <p className="text-xs font-bold mb-3" style={{ color: C.terraText }}>P.</p>
                  <h3 className="font-bold text-lg leading-snug">{f.q}</h3>
                  <p className="mt-2 leading-relaxed text-[15px]" style={{ color: C.muted }}>{f.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-start sm:flex-row sm:items-center gap-4">
            <WaButton>Hacer otra pregunta</WaButton>
          </div>
        </div>
      </section>

      {/* ── Contacto y ubicación ──────────────────────── */}
      <section id="contacto" className="py-20 md:py-28 scroll-mt-16" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <SectionHead index="04 · Cómo llegar" title="Escríbenos y te esperamos en el vivero" light />
          <div className="mt-10 grid md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14">
            <div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 min-h-[48px] py-2 pl-2 pr-6 rounded-full transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: C.terraDeep, color: C.white }}
              >
                <span className="w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,255,255,0.16)' }}>
                  <WaIcon className="w-5 h-5" />
                </span>
                <span className="text-sm font-semibold">WhatsApp</span>
                <span className={`${display.className} text-lg md:text-xl`}>{BIZ.phoneDisplay}</span>
              </a>
              <dl className="mt-8 space-y-6" style={{ color: C.sand }}>
                <div>
                  <dt className="text-xs font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: C.terraLight }}>Dirección</dt>
                  <dd className="text-lg leading-snug" style={{ color: C.white }}>
                    {BIZ.address}
                    <br />
                    {BIZ.city}, {BIZ.region}
                  </dd>
                  <dd className="mt-3">
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-sm font-bold underline underline-offset-4" style={{ color: C.sand }}>
                      Abrir ruta en Google Maps
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: C.terraLight }}>Teléfono</dt>
                  <dd>
                    <a href={`tel:${BIZ.phoneTel}`} className="text-lg underline-offset-4 hover:underline" style={{ color: C.white }}>{BIZ.phoneDisplay}</a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold tracking-[0.18em] uppercase mb-1.5" style={{ color: C.terraLight }}>Instagram</dt>
                  <dd>
                    <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="text-lg underline-offset-4 hover:underline" style={{ color: C.white }}>@jardinvivero.carolina</a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="relative min-h-[320px] rounded-2xl overflow-hidden" style={{ backgroundColor: C.nightSoft }}>
              <iframe
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Franja Sitiazo + pie ──────────────────────── */}
      <footer style={{ backgroundColor: C.white }}>
        <div className="text-center text-xs font-bold tracking-[0.18em] uppercase py-3" style={{ backgroundColor: C.sand, color: C.night }}>
          Sitio de ejemplo de Sitiazo
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm" style={{ color: C.muted }}>
          <p>
            <span className={`${display.className} text-base`} style={{ color: C.night }}>{BIZ.name}</span> · {BIZ.rubro} en {BIZ.city}. Fotos y precios de muestra.
          </p>
          <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex! [&>div]:bg-ink!">
            <DemoBand name={BIZ.name} />
          </div>
          <div className="[&>a]:static! self-start md:self-auto">
            <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
          </div>
        </div>
      </footer>
    </div>
  )
}
