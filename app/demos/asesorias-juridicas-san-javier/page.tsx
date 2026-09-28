import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SERVICIOS, PASOS, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' }],
})

/**
 * El expediente: la página se lee como una escritura — carátula, cláusulas
 * numeradas al modo chileno (PRIMERO, SEGUNDO…), timbres y firmas.
 * Papel claro, tinta pizarra y rojo carimbo.
 */
const C = {
  papel: '#F7F3E8',
  papelDeep: '#EDE5D0',
  tinta: '#23303C',
  tintaSoft: '#51606E',
  sello: '#9E3826',
  line: 'rgba(35,48,60,0.22)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9E3826]'

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5 flex items-center gap-3`} style={{ color: light ? '#E4B6A5' : C.sello }}>
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Timbre redondo de oficina, con doble círculo y texto curvo simplificado. */
function Timbre({ className = 'w-24 h-24' }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" className={className} aria-hidden="true">
      <circle cx="48" cy="48" r="44" fill="none" stroke={C.sello} strokeWidth="2" />
      <circle cx="48" cy="48" r="36" fill="none" stroke={C.sello} strokeWidth="1" strokeDasharray="3 4" />
      <path d="M48 26l5 10 11 1.5-8 7.5 2 11-10-5.5-10 5.5 2-11-8-7.5 11-1.5z" fill={C.sello} />
      <path d="M30 62h36" stroke={C.sello} strokeWidth="1.6" />
      <path d="M34 68h28" stroke={C.sello} strokeWidth="1.2" />
    </svg>
  )
}

const ICONS: Record<string, React.ReactNode> = {
  balanza: (
    <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke={C.tinta} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v18M5 21h14M12 6H5m7 0h7" />
      <path d="M5 6l-2.5 6a3.2 3.2 0 0 0 5 0L5 6zM19 6l-2.5 6a3.2 3.2 0 0 0 5 0L19 6z" />
    </svg>
  ),
  casa: (
    <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke={C.tinta} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 10.5 12 3l9 7.5M5 9.5V21h14V9.5" />
      <path d="M10 21v-6h4v6" />
    </svg>
  ),
  lapiz: (
    <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke={C.tinta} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z" />
      <path d="M14.5 6.5l3 3" />
    </svg>
  ),
}

export const metadata: Metadata = demoMetadata({
  slug: 'asesorias-juridicas-san-javier',
  title: 'Asesorías Jurídicas · Corretaje · Útiles de Oficina — Sgto. Aldea 2661, San Javier',
  description:
    'Asesorías jurídicas, corretaje de propiedades e insumos de oficina en Sgto. Aldea 2661, San Javier de Loncomilla. Consulte por WhatsApp.',
  image: `${IMG}/local.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo se atiende', href: '#atencion' },
  { label: 'Respaldo', href: '#respaldo' },
  { label: 'Cómo llegar', href: '#llegar' },
]

export default function AsesoriasJuridicasSanJavierPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={<span className={display.className}>Asesorías Jurídicas</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,243,232,0.96)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.tinta,
          btnInk: C.papel,
        }}
      />

      {/* ── Carátula del expediente ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.papel }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
          <Reveal>
            <div
              className="relative border-2 px-6 py-10 md:px-14 md:py-14 text-center"
              style={{ borderColor: C.tinta, backgroundColor: '#FCF9F0', boxShadow: `12px 12px 0 ${C.papelDeep}` }}
            >
              {/* doble filete de carátula */}
              <div className="absolute inset-2 border pointer-events-none" style={{ borderColor: C.tinta }} aria-hidden="true" />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.34em] mb-6`} style={{ color: C.sello }}>
                Expediente · San Javier de Loncomilla · Maule
              </p>
              <h1 className={`${display.className} text-[clamp(2rem,5.8vw,3.6rem)] leading-[1.08] font-semibold mb-6`}>
                Asesorías jurídicas, corretaje
                <br />
                de propiedades <em className="font-medium">e insumos de oficina</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: C.tintaSoft }}>
                Tres oficios en un mismo domicilio: {BIZ.address}, centro de
                San Javier. La gestión se coordina directo por WhatsApp.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-sm font-bold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.tinta, color: C.papel, boxShadow: `5px 5px 0 ${C.sello}` }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={`text-sm font-bold px-7 py-3.5 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Ver los tres servicios
                </a>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 text-sm font-bold ${focusRing} tap-44`}
                  style={{ color: C.tinta }}
                >
                  <Stars value={BIZ.rating} color={C.sello} className="w-4 h-4" />
                  {BIZ.ratingLabel} en Google
                  <span aria-hidden="true" style={{ color: C.sello }}>→</span>
                </a>
                <Timbre className="w-16 h-16" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PRIMERO: los tres servicios ── */}
      <section id="servicios" className="scroll-mt-20 border-t-2" style={{ borderColor: C.tinta, backgroundColor: '#FCF9F0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Cláusula primera · Servicios</Label>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-4`}>
              Tres ventanillas
              <br />
              <span style={{ color: C.sello }}>bajo un mismo techo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-12" style={{ color: C.tintaSoft }}>
              Tal como declara la propia ficha de Google: asesoría jurídica,
              corretaje de propiedades y compra-venta de insumos de oficina.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.clave} delay={i * 110}>
                <article className="h-full flex flex-col p-7 border-2 relative" style={{ borderColor: C.tinta, backgroundColor: C.papel }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.sello }}>
                    Ventanilla {s.clave}
                  </p>
                  <div className="mb-5">{ICONS[s.icon]}</div>
                  <h3 className={`${display.className} text-2xl font-semibold leading-tight mb-3`}>{s.name}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: C.tintaSoft }}>
                    {s.desc}
                  </p>
                  <a
                    href={`https://wa.me/${BIZ.whatsapp}?text=${encodeURIComponent(`Hola, quiero consultar por ${s.name.toLowerCase()} en San Javier`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold mt-6 underline underline-offset-4 decoration-2 ${focusRing} tap-44`}
                    style={{ color: C.tinta, textDecorationColor: C.sello }}
                  >
                    Consultar →
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEGUNDO: cómo se atiende ── */}
      <section id="atencion" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label light>Cláusula segunda · Atención</Label>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-12 md:mb-16`}>
              Del mensaje
              <br />
              <span style={{ color: '#E4B6A5' }}>a la firma</span>
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-3 gap-x-8 gap-y-10">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <li className="border-t-2 pt-5" style={{ borderColor: 'rgba(247,243,232,0.4)' }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.3em] block mb-3`} style={{ color: '#E4B6A5' }}>
                    {p.n}
                  </span>
                  <h3 className={`${display.className} text-2xl font-semibold leading-tight mb-2.5`}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(247,243,232,0.78)' }}>{p.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── TERCERO: respaldo ── */}
      <section id="respaldo" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <Label>Cláusula tercera · Respaldo</Label>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-6`}>
                Nota perfecta
                <br />
                <span style={{ color: C.sello }}>en su ficha</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm mb-8" style={{ color: C.tintaSoft }}>
                La ficha de Google registra {BIZ.ratingLabel} de 5 estrellas.
                Es un registro joven — la primera reseña la dejó Alexis
                Arellano con cinco estrellas.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-block text-sm font-bold px-6 py-3.5 border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <Reveal delay={120}>
              <figure className="p-7 md:p-9 border-2 relative" style={{ backgroundColor: '#FCF9F0', borderColor: C.tinta, boxShadow: `10px 10px 0 ${C.papelDeep}` }}>
                <Stars value={5} color={C.sello} className="w-5 h-5 mb-5" />
                <blockquote className={`${display.className} text-xl md:text-2xl leading-snug font-medium mb-5`}>
                  Cinco estrellas dejadas en la ficha — sin texto, tal como
                  figura en Google.
                </blockquote>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.tintaSoft }}>
                  Alexis Arellano · reseña en Google
                </figcaption>
                <div className="absolute -top-7 -right-4 md:-right-7">
                  <Timbre className="w-20 h-20 md:w-24 md:h-24" />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CUARTO: cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20 border-t-2" style={{ borderColor: C.tinta, backgroundColor: '#FCF9F0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label>Cláusula cuarta · Domicilio</Label>
            <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
              <div>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] font-semibold mb-6`}>
                  Sgto. Aldea 2661,
                  <br />
                  <span style={{ color: C.sello }}>San Javier</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.tintaSoft }}>
                  La oficina queda en pleno centro de San Javier de
                  Loncomilla — en la fachada se lee el letrero «Diamond
                  Papershop». Escriba antes por WhatsApp para coordinar.
                </p>
                <dl className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8 text-sm">
                  {[
                    ['Dirección', `${BIZ.address}, San Javier`],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Nota en Google', `${BIZ.ratingLabel} de 5`],
                    ['Comuna', 'San Javier de Loncomilla, Maule'],
                  ].map(([k, v]) => (
                    <div key={k} className="border-t pt-3" style={{ borderColor: C.line }}>
                      <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.sello }}>{k}</dt>
                      <dd className="font-bold leading-snug">{v}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block text-sm font-bold px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.sello, color: '#FCF9F0', boxShadow: `4px 4px 0 ${C.tinta}` }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
              <div className="space-y-5">
                <div className="relative aspect-[16/9] overflow-hidden border-2" style={{ borderColor: C.tinta }}>
                  <Image
                    src={`${IMG}/local.webp`}
                    alt="Fachada de Sgto. Aldea 2661 en San Javier con el letrero «Diamond Papershop» — registro real de la ficha"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span className={`${mono.className} absolute bottom-2 left-2 text-[9px] uppercase tracking-[0.16em] px-2 py-1`} style={{ backgroundColor: 'rgba(35,48,60,0.9)', color: C.papel }}>
                    foto real · ficha de Google
                  </span>
                </div>
                <div className="overflow-hidden border-2 min-h-[300px]" style={{ borderColor: C.tinta }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[300px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} text-lg leading-tight font-semibold`}>{BIZ.name}</p>
            <address className="not-italic text-xs" style={{ color: 'rgba(247,243,232,0.7)' }}>
              {BIZ.address} · {BIZ.city}, Maule · {BIZ.phoneDisplay}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-xs" style={{ color: 'rgba(247,243,232,0.7)' }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p
          className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed border-t"
          style={{ color: 'rgba(247,243,232,0.7)', borderColor: 'rgba(247,243,232,0.14)' }}
        >
          Sitio de ejemplo preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#E4B6A5' }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Dirección, teléfono, servicios y nota son datos
          reales de su ficha de Google; la foto de la fachada es el registro
          real de la ficha.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 ${focusRing} tap-44`} style={{ color: '#E4B6A5' }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
