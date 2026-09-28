import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/epilogue/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  hueso: '#F4EFE4',
  huesoSoft: '#EAE2D2',
  mostaza: '#D9A441',
  mostazaDeep: '#B8862B',
  verde: '#2E4A3C',
  verdeDeep: '#1D3128',
  madera: '#8A5A36',
  maderaSoft: '#C79B6D',
  tinta: '#1C2620',
  muted: '#56615A',
  line: 'rgba(28,38,32,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A441]'

// huincha de medir: la línea de tiempo que cruza la pantalla
const tape = {
  backgroundColor: C.mostaza,
  backgroundImage:
    'repeating-linear-gradient(90deg, rgba(29,49,40,0.55) 0 1px, transparent 1px 10px), repeating-linear-gradient(90deg, rgba(29,49,40,0.8) 0 2px, transparent 2px 50px)',
  backgroundSize: '100% 5px, 100% 9px',
  backgroundRepeat: 'repeat-x',
  backgroundPosition: 'top left, top left',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ius-abogados-linares',
  title: 'IUS Abogados Linares — Abogados en Maipú 461, Linares',
  description: 'Estudio de abogados en Maipú 461, Ofi 405, Linares. Atención directa, su caso explicado paso a paso. Consulte por WhatsApp.',
  image: '/demos/ius-abogados-linares/hero.webp',
})

const NAV_LINKS = [
  { label: 'Proceso', href: '#proceso' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Valores', href: '#valores' },
  { label: 'Contacto', href: '#contacto' },
]

const HITOS = [
  {
    src: `${IMG}/hero.webp`,
    alt: 'Oficina del estudio jurídico',
    title: 'Nos escribe',
    desc: 'Por WhatsApp, en pocas líneas: qué pasó y desde cuándo. Le respondemos con una hora para conversar.',
    lleva: 'Un resumen corto del problema',
  },
  {
    src: `${IMG}/ambiente.webp`,
    alt: 'Calle arbolada del centro de Linares con locales comerciales',
    title: 'Viene a Maipú 461',
    desc: 'Primera reunión en la oficina 405, en el centro de Linares. Conversa directo con el abogado que verá su caso.',
    lleva: 'Cédula de identidad',
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Detalle de trabajo en el estudio jurídico',
    title: 'Revisamos papeles',
    desc: 'Contratos, finiquitos, notificaciones, escrituras. Lo que tenga, lo leemos y le decimos qué sirve y qué falta.',
    lleva: 'Todos los documentos del caso',
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Abogado revisando y firmando documentos en su escritorio',
    title: 'Propuesta por escrito',
    desc: 'Qué camino recomendamos, cuánto puede tardar y cuánto cuesta. Todo en papel antes de firmar nada.',
    lleva: 'Sus preguntas anotadas',
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Detalle de atención en el estudio jurídico',
    title: 'Seguimiento',
    desc: 'Le avisamos cada movimiento del caso por WhatsApp, en palabras simples. Usted no tiene que andar persiguiendo a nadie.',
    lleva: 'Nada: le escribimos nosotros',
  },
]

const AREAS = [
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Detalle de atención en el estudio jurídico',
    code: 'FAM',
    name: 'Familia',
    items: ['Pensión de alimentos', 'Divorcio', 'Cuidado personal y visitas'],
  },
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Detalle de trabajo en el estudio jurídico',
    code: 'LAB',
    name: 'Laboral',
    items: ['Despidos y finiquitos', 'Cotizaciones impagas', 'Autodespido'],
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Carpeta con documentos legales sobre un escritorio de madera',
    code: 'CIV',
    name: 'Civil',
    items: ['Contratos y arriendos', 'Cobranzas', 'Posesión efectiva'],
  },
]

const VALORES = [
  { code: 'A-01', name: 'Primera consulta', unit: 'por reunión' },
  { code: 'A-02', name: 'Revisión de documentos', unit: 'por caso' },
  { code: 'F-10', name: 'Divorcio de común acuerdo', unit: 'honorario total' },
  { code: 'F-11', name: 'Demanda de alimentos', unit: 'honorario total' },
  { code: 'L-20', name: 'Demanda por despido', unit: 'según caso' },
  { code: 'C-30', name: 'Posesión efectiva', unit: 'honorario total' },
]

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em] mb-5`}
      style={{ color: light ? C.mostaza : C.madera }}
    >
      <span className="inline-block w-6 h-[3px]" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function IusAbogadosLinaresPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.hueso, color: C.tinta }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* el nav fijo es transparente arriba: este wrapper declara el fondo oscuro real detrás (hero) */}
      <div style={{ backgroundColor: C.verdeDeep }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(244,239,228,0.95)',
            ink: C.tinta,
            line: C.line,
            btnBg: C.verde,
            btnInk: C.hueso,
          }}
        />
      </div>

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.verdeDeep }}>
        <Image src={`${IMG}/hero.webp`} alt="Oficina de IUS Abogados Linares" fill priority sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(29,49,40,0.75) 0%, rgba(29,49,40,0.55) 30%, rgba(29,49,40,0.9) 60%, rgba(29,49,40,0.96) 100%)',
          }}
        />
        <div className="relative w-full max-w-7xl mx-auto px-5 md:px-8 pr-20 md:pr-28 pt-32 md:pt-40 pb-10 md:pb-14">
          <Reveal>
            <Label light>Abogados · Linares · Maipú 461, Ofi 405</Label>
            <h1
              className={`${display.className} font-black uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.6rem,9.5vw,6.4rem)] max-w-5xl mb-7`}
              style={{ color: C.hueso }}
            >
              Su caso, paso
              <br />a paso y <span style={{ color: C.mostaza }}>por escrito.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(244,239,228,0.88)' }}>
              Sin palabras difíciles ni vueltas. Le decimos qué hacer, cuánto
              demora y cuánto cuesta, y lo acompañamos hasta el final. En el
              centro de Linares.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-6 py-3 md:px-7 md:py-4 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.mostaza, color: C.verdeDeep, borderRadius: '3px', boxShadow: `4px 4px 0 ${C.madera}` }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#proceso"
                className={`${display.className} font-bold text-sm md:text-base px-6 py-3 md:px-7 md:py-4 border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(244,239,228,0.6)', color: C.hueso, borderRadius: '3px' }}
              >
                Ver cómo trabajamos
              </a>
            </div>
          </Reveal>
        </div>
        {/* ficha rápida */}
        <div className="relative border-t" style={{ borderColor: 'rgba(244,239,228,0.18)', backgroundColor: 'rgba(29,49,40,0.85)' }}>
          <dl className="max-w-7xl mx-auto pl-5 pr-20 md:pl-8 md:pr-28 grid grid-cols-2 md:grid-cols-4 text-sm">
            {[
              ['Dirección', `${BIZ.address}`],
              ['Comuna', `${BIZ.city}, Maule`],
              ['Google Maps', `${BIZ.reviews} reseñas`],
              ['Instagram', `${BIZ.instagramFollowers} seguidores`],
            ].map(([k, v], i) => (
              <div key={k} className={`py-4 md:py-5 ${i % 2 ? 'pl-4 md:pl-6' : ''} ${i > 0 ? 'md:pl-6 md:border-l' : ''} ${i > 1 ? 'border-t md:border-t-0' : ''}`} style={{ borderColor: 'rgba(244,239,228,0.18)' }}>
                <dt className="text-[10px] uppercase tracking-[0.2em] font-semibold mb-1" style={{ color: C.maderaSoft }}>{k}</dt>
                <dd className={`${display.className} font-bold`} style={{ color: C.hueso }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── Línea de tiempo horizontal ── */}
      <section id="proceso" className="scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.hueso }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24">
          <Reveal>
            <Label>El proceso</Label>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-14 items-end mb-12 md:mb-16">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1] tracking-[-0.02em]`}>
                Cinco pasos.
                <br />
                <span style={{ color: C.verde }}>Ninguna sorpresa.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Así avanza un caso desde el primer mensaje hasta el cierre. En
                cada etapa sabe qué traer y qué va a recibir.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative pb-16 md:pb-24">
          {/* la huincha cruza toda la pantalla */}
          <div className="absolute left-0 right-0 top-[19px] h-[14px]" style={tape} aria-hidden="true" />
          <ol
            className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8 px-5 md:px-8 max-w-7xl mx-auto pb-4"
            aria-label="Etapas de un caso"
          >
            {HITOS.map((h, i) => (
              <li key={h.title} className="min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-6">
                  <span
                    className={`${display.className} relative grid place-items-center w-[52px] h-[52px] text-lg font-black shrink-0`}
                    style={{ backgroundColor: C.verdeDeep, color: C.mostaza, borderRadius: '50%', boxShadow: `0 0 0 5px ${C.hueso}` }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.18em] font-bold px-2 py-1"
                    style={{ backgroundColor: C.hueso, color: C.madera }}
                  >
                    Hito {i + 1} de {HITOS.length}
                  </span>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden mb-5 border" style={{ borderColor: C.line, borderRadius: '3px' }}>
                  <Image src={h.src} alt={h.alt} fill sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 45vw" className="object-cover" />
                </div>
                <h3 className={`${display.className} font-extrabold text-xl md:text-2xl mb-2`}>{h.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>{h.desc}</p>
                <p
                  className="text-xs leading-snug px-3 py-2.5 border-l-[3px]"
                  style={{ backgroundColor: C.huesoSoft, borderColor: C.mostaza, color: C.tinta }}
                >
                  <strong className="font-bold uppercase tracking-[0.12em] text-[10px] block mb-0.5" style={{ color: C.madera }}>
                    {i === HITOS.length - 1 ? 'Qué necesita' : 'Qué traer'}
                  </strong>
                  {h.lleva}
                </p>
              </li>
            ))}
          </ol>
          <p className="max-w-7xl mx-auto px-5 md:px-8 mt-6 text-xs" style={{ color: C.muted }}>
            Proceso de muestra: al publicar se ajusta a la forma real de trabajar del estudio.
          </p>
        </div>
      </section>

      {/* ── Áreas ── */}
      <section id="areas" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep, color: C.hueso }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light>Áreas de trabajo</Label>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1] tracking-[-0.02em]`}>
                Lo que más
                <br />
                <span style={{ color: C.mostaza }}>se consulta</span>
              </h2>
              <p className="text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(244,239,228,0.72)' }}>
                Áreas de muestra: al publicar van las materias que el estudio
                realmente atiende.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {AREAS.map((a) => (
              <article key={a.name} className="h-full flex flex-col" style={{ backgroundColor: C.hueso, color: C.tinta, borderRadius: '3px' }}>
                <div className="relative aspect-[16/10] overflow-hidden" style={{ borderRadius: '3px 3px 0 0' }}>
                  <Image src={a.src} alt={a.alt} fill sizes="(min-width: 768px) 32vw, 100vw" className="object-cover" />
                  <span
                    className={`${display.className} absolute top-0 left-0 text-xs font-black tracking-[0.15em] px-3 py-2`}
                    style={{ backgroundColor: C.mostaza, color: C.verdeDeep }}
                  >
                    {a.code}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <h3 className={`${display.className} font-extrabold text-2xl mb-4`}>{a.name}</h3>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-sm md:text-[15px]">
                        <span className="mt-1.5 w-2.5 h-2.5 shrink-0" style={{ backgroundColor: C.madera }} aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(`Hola, quiero consultar por un tema de ${a.name.toLowerCase()}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm font-bold underline underline-offset-4 decoration-2 ${focusRing} tap-44`}
                    style={{ color: C.verde, textDecorationColor: C.mostaza }}
                  >
                    Consultar {a.name.toLowerCase()} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre el estudio ── */}
      <section id="estudio" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '3px', boxShadow: `10px 10px 0 ${C.madera}` }}>
              <Image src={`${IMG}/ambiente.webp`} alt="Calle arbolada del centro de Linares" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
            <span
              className={`${display.className} absolute -bottom-4 left-5 text-xs font-bold uppercase tracking-[0.16em] px-4 py-2.5`}
              style={{ backgroundColor: C.mostaza, color: C.verdeDeep }}
            >
              Centro de Linares
            </span>
          </div>
          <Reveal delay={120}>
            <Label>El estudio</Label>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.02] tracking-[-0.02em] mb-6`}>
              Abogados de Linares,
              <br />
              <span style={{ color: C.verde }}>para gente de Linares</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg" style={{ color: C.muted }}>
              {BIZ.name} atiende en {BIZ.address}, a pasos del centro. Usted
              habla directo con quien lleva su caso: sin secretarias que
              filtran ni call center. Y si tiene una duda, la resuelve por
              WhatsApp.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3 mb-7">
              {[
                ['Atención directa', 'Con el abogado, no con un intermediario.'],
                ['Todo por escrito', 'Propuesta y honorarios antes de partir.'],
                ['Lenguaje simple', 'Le explicamos el caso sin jerga.'],
                ['Aviso de cada paso', 'Seguimiento por WhatsApp.'],
              ].map(([t, d]) => (
                <li key={t} className="p-4 border" style={{ borderColor: C.line, backgroundColor: C.huesoSoft, borderRadius: '3px' }}>
                  <p className={`${display.className} font-bold mb-1`}>{t}</p>
                  <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{d}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed mb-7 max-w-lg" style={{ color: C.muted }}>
              El estudio suma <strong style={{ color: C.tinta }}>{BIZ.reviews} reseñas en Google Maps</strong> y{' '}
              <strong style={{ color: C.tinta }}>{BIZ.instagramFollowers} seguidores</strong> en Instagram. Los
              puntos de arriba son texto de muestra.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 ${focusRing} tap-44`}
                style={{ backgroundColor: C.verde, color: C.hueso, borderRadius: '3px' }}
              >
                Ver reseñas en Google →
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.verde, color: C.verde, borderRadius: '3px' }}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Valores de referencia: etiquetas de estante ── */}
      <section id="valores" className="scroll-mt-20" style={{ backgroundColor: C.huesoSoft }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Valores de referencia</Label>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1] tracking-[-0.02em]`}>
                El precio,
                <br />
                <span style={{ color: C.madera }}>a la vista</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Lista <strong style={{ color: C.tinta }}>de muestra</strong>: así se verían los
                honorarios publicados. Los valores reales los define el estudio;
                mientras tanto, se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {VALORES.map((v, i) => (
              <Reveal key={v.code} delay={i * 70}>
                <div
                  className="relative h-full flex items-stretch border-2"
                  style={{ borderColor: C.verde, backgroundColor: C.hueso, borderRadius: '3px' }}
                >
                  <span
                    className={`${display.className} grid place-items-center px-3 text-[11px] font-black tracking-[0.1em] [writing-mode:vertical-rl] rotate-180`}
                    style={{ backgroundColor: C.verdeDeep, color: C.mostaza }}
                  >
                    {v.code}
                  </span>
                  <div className="flex-1 p-5">
                    <p className={`${display.className} font-bold text-lg leading-tight mb-1`}>{v.name}</p>
                    <p className="text-xs uppercase tracking-[0.14em] mb-4" style={{ color: C.muted }}>{v.unit}</p>
                    <p className="flex items-baseline justify-between gap-3 pt-3 border-t border-dashed" style={{ borderColor: C.line }}>
                      <span className={`${display.className} text-2xl font-black`} style={{ color: C.madera }}>$ —</span>
                      <span className="text-[10px] uppercase tracking-[0.14em] font-bold px-2 py-1" style={{ backgroundColor: C.mostaza, color: C.verdeDeep }}>
                        muestra
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep, color: C.hueso }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <Reveal>
            <Label light>Hito 01 · Contacto</Label>
            <h2 className={`${display.className} font-black uppercase text-[clamp(2.3rem,6.5vw,4.4rem)] leading-[0.95] tracking-[-0.02em] mb-6`}>
              Todo parte
              <br />
              con un <span style={{ color: C.mostaza }}>mensaje</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(244,239,228,0.78)' }}>
              Cuéntenos su caso por WhatsApp y coordinamos la primera reunión
              en la oficina.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} flex items-center justify-between gap-4 w-full max-w-md px-5 py-2 md:py-4 mb-8 transition-transform hover:-translate-y-0.5 active:scale-[0.98] ${focusRing} tap-44`}
              style={{ backgroundColor: C.mostaza, color: C.verdeDeep, borderRadius: '3px', boxShadow: `6px 6px 0 ${C.madera}` }}
            >
              <span>
                <span className="block text-[11px] leading-tight font-bold uppercase tracking-[0.18em]">Escribir por WhatsApp</span>
                <span className="block text-xl md:text-2xl leading-none font-black">{BIZ.phoneDisplay}</span>
              </span>
              <span className="text-2xl font-black" aria-hidden="true">→</span>
            </a>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(244,239,228,0.85)' }}>
              <strong className={`${display.className} block text-lg`} style={{ color: C.hueso }}>{BIZ.address}</strong>
              {BIZ.postal} {BIZ.city}, {BIZ.region}, Chile
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm font-bold underline underline-offset-4 decoration-2 ${focusRing} tap-44`}
              style={{ color: C.mostaza }}
            >
              Cómo llegar →
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden h-full min-h-[340px] border-2" style={{ borderColor: C.mostaza, borderRadius: '3px' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.verdeDeep, color: C.hueso }}>
        <div className="h-[14px]" style={tape} aria-hidden="true" />
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-black text-xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-xs" style={{ color: 'rgba(244,239,228,0.75)' }}>
              {BIZ.address} · {BIZ.postal} {BIZ.city}, Maule
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(244,239,228,0.75)' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        {/* pb-16 + el respiro del layout dejan libre la burbuja de WhatsApp */}
        <p
          className="max-w-7xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed border-t"
          style={{ color: 'rgba(244,239,228,0.75)', borderColor: 'rgba(244,239,228,0.14)' }}
        >
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.mostaza }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Textos y fotos son de muestra; dirección, WhatsApp,
          Instagram y reseñas son datos reales.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: C.mostaza }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
