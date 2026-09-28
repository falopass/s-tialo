import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { TopNav } from './nav'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA, PRECIOS } from './content'
import LazyMap from '../lazy-map'

const serif = localFont({
  src: [
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const sans = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  campo: '#4C6B3C',
  campoDeep: '#2A3D21',
  tierra: '#8C6239',
  crema: '#FBF7EF',
  hoja: '#DCE6CF',
  ink: '#27301F',
  muted: '#62684F',
  line: 'rgba(39,48,31,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-don-jack',
  title: 'Ferretería Don Jack — ferretería en Pencahue, Maule',
  description: 'Ferretería en Alejandro Cruz Vergara K-260, Pencahue. Gasfitería, riego, herramientas y materiales para la casa y el campo. Consultas por WhatsApp.',
  image: '/demos/ferreteria-don-jack/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El negocio', href: '#negocio' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

function Leader({ label, value, serifValue = false, valueColor = C.tierra }: { label: string; value: string; serifValue?: boolean; valueColor?: string }) {
  return (
    <li className="flex items-baseline gap-2 py-2">
      <span>{label}</span>
      <span aria-hidden="true" className="flex-1 border-b-2 border-dotted translate-y-[-4px]" style={{ borderColor: C.line }} />
      <span className={serifValue ? `${serif.className} text-[20px]` : 'text-[13px] uppercase tracking-[0.12em]'} style={{ color: valueColor }}>
        {value}
      </span>
    </li>
  )
}

function Ornament() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center gap-3 my-2" style={{ color: C.tierra }}>
      <span className="h-px w-12" style={{ background: 'currentColor' }} />
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 21V9" />
        <path d="M12 13c-4 0-6-3-6-7 4 0 6 3 6 7Z" />
        <path d="M12 11c0-4 2-7 6-7 0 4-2 7-6 7Z" />
      </svg>
      <span className="h-px w-12" style={{ background: 'currentColor' }} />
    </div>
  )
}

export default function Page() {
  return (
    <main className={`${sans.className} min-h-screen`} style={{ background: C.crema, color: C.ink }}>
      <style>{`html { scroll-behavior: auto }`}</style>
      <TopNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={serif.className}
        theme={{ bar: C.crema, ink: C.ink, line: C.line, btnBg: C.campo, btnInk: C.crema }}
      />

      {/* Portada a sangre */}
      <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden" style={{ background: C.campoDeep }}>
        <Image src={`${IMG}/hero.webp`} alt="Pasillo de ferretería con fitting, herramientas, sacos de cemento y pinturas, abierto hacia una calle de pueblo" fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(42,61,33,0.78) 0%, rgba(42,61,33,0.62) 50%, rgba(42,61,33,0.9) 100%)' }} />
        <div className="relative px-6 py-28 max-w-3xl" style={{ color: C.crema }}>
          <p className="text-[12px] uppercase tracking-[0.35em]" style={{ color: C.hoja }}>
            Ferretería · {BIZ.city}, Maule
          </p>
          <h1 className={`${serif.className} mt-6 text-[52px] leading-[0.95] sm:text-[84px]`}>
            Lo que se cuida, <em style={{ color: C.hoja }}>crece.</em>
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed max-w-xl mx-auto opacity-90">
            {BIZ.name}: gasfitería, riego, herramientas y materiales para la casa y el campo, con atención directa en el mesón.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="min-h-[48px] inline-flex items-center justify-center px-7 rounded-full font-medium focus-visible:outline-2 focus-visible:outline-offset-2" style={{ background: C.crema, color: C.campoDeep }}>
              Consultar por WhatsApp
            </a>
            <a href="#carta" className="min-h-[48px] inline-flex items-center justify-center px-7 rounded-full border" style={{ borderColor: 'rgba(251,247,239,0.5)' }}>
              Ver la carta
            </a>
          </div>
          <p className="mt-10 text-[13px] opacity-80">{BIZ.reviews} reseñas en Google Maps · {BIZ.followers.toLocaleString('es-CL')} seguidores en Facebook</p>
        </div>
      </section>

      {/* La carta */}
      <section id="carta" className="px-5 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <header className="text-center">
            <p className="text-[12px] uppercase tracking-[0.35em]" style={{ color: C.tierra }}>Carta de la casa</p>
            <h2 className={`${serif.className} mt-3 text-[44px] sm:text-[64px] leading-none`}>Lo que encuentra en Don Jack</h2>
            <Ornament />
            <p className="text-[15px] max-w-lg mx-auto" style={{ color: C.muted }}>
              Surtido de ejemplo. Pregunte por WhatsApp y le confirmamos si está en el mesón.
            </p>
          </header>

          <div className="mt-16 grid md:grid-cols-2 gap-x-16 gap-y-16">
            {CARTA.map((c) => (
              <article key={c.num} className="grid grid-cols-[88px_1fr] sm:grid-cols-[112px_1fr] gap-5 items-start">
                <div className="relative aspect-[3/4] overflow-hidden rounded-sm border" style={{ borderColor: C.line }}>
                  <Image src={`${IMG}/${c.img}.webp`} alt={c.alt} fill sizes="112px" className="object-cover" />
                </div>
                <div>
                  <p className={`${serif.className} text-[20px] italic`} style={{ color: C.tierra }}>{c.num}.</p>
                  <h3 className={`${serif.className} text-[32px] leading-tight`}>{c.title}</h3>
                  <p className="text-[14px] italic" style={{ color: C.muted }}>{c.note}</p>
                  <ul className="mt-3 text-[15px]">
                    {c.items.map((it) => (
                      <Leader key={it} label={it} value="consultar" />
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-12 text-center text-[12px]" style={{ color: C.muted }}>Imágenes referenciales.</p>
        </div>
      </section>

      {/* Sobre el negocio: carta al vecino */}
      <section id="negocio" className="px-5 py-20 sm:py-28" style={{ background: C.hoja }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-start">
          <div className="p-8 sm:p-12 rounded-sm shadow-sm" style={{ background: C.crema }}>
            <p className="text-[12px] uppercase tracking-[0.35em]" style={{ color: C.tierra }}>Desde {BIZ.city}</p>
            <p className={`${serif.className} mt-6 text-[30px] italic`}>Estimado vecino:</p>
            <div className="mt-4 space-y-4 text-[16px] leading-relaxed">
              <p>
                En {BIZ.city} uno no va a la ferretería solo a comprar: va a contar qué se rompió y a salir sabiendo cómo arreglarlo. Así atendemos en Don Jack, directo en el mesón y sin apuros.
              </p>
              <p>
                Si es la llave del patio, el riego del huerto o esa pieza que nadie tiene, tráiganos la muestra o mándenos una foto por WhatsApp y la buscamos juntos.
              </p>
            </div>
            <p className={`${serif.className} mt-8 text-[26px]`} style={{ color: C.campo }}>{BIZ.name}</p>
            <p className="text-[13px]" style={{ color: C.muted }}>{BIZ.address}, {BIZ.city}</p>
            <p className="mt-6 text-[11px] uppercase tracking-[0.2em]" style={{ color: C.muted }}>Texto de muestra</p>
          </div>

          <div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image src={`${IMG}/detalle1.webp`} alt="Local de ferretería con cortina abierta en una calle de pueblo con cerros al fondo" fill sizes="(min-width: 768px) 40vw, 100vw" className="object-cover" />
            </div>
            <p className="mt-2 text-[12px]" style={{ color: C.campoDeep }}>Imagen referencial.</p>
            <h3 className={`${serif.className} mt-8 text-[30px]`}>Lo que se valora en el mesón</h3>
            <ul className="mt-3 text-[15px]">
              <Leader label="Atención directa" value="i" serifValue valueColor={C.campoDeep} />
              <Leader label="Consejo para elegir la pieza" value="ii" serifValue valueColor={C.campoDeep} />
              <Leader label="Cerca de casa, en Pencahue" value="iii" serifValue valueColor={C.campoDeep} />
            </ul>
            <p className="mt-6 text-[15px]" style={{ color: C.campoDeep }}>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.campo }}>{BIZ.reviews} reseñas en Google Maps</a>
              {' '}y{' '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.campo }}>{BIZ.followers.toLocaleString('es-CL')} seguidores en Facebook</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Precios de referencia */}
      <section id="precios" className="px-5 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <header className="text-center">
            <p className="text-[12px] uppercase tracking-[0.35em]" style={{ color: C.tierra }}>Lista de precios</p>
            <h2 className={`${serif.className} mt-3 text-[44px] sm:text-[60px] leading-none`}>Precios de referencia</h2>
            <Ornament />
            <p className="inline-block mt-2 px-3 py-1 text-[11px] uppercase tracking-[0.25em] border rounded-full" style={{ borderColor: C.tierra, color: C.tierra }}>
              Muestra · aquí van los valores reales del local
            </p>
          </header>
          <div className="mt-14 grid sm:grid-cols-2 gap-x-14 gap-y-10">
            {PRECIOS.map((p) => (
              <div key={p.group}>
                <h3 className={`${serif.className} text-[28px] italic pb-1 border-b`} style={{ borderColor: C.line, color: C.campo }}>{p.group}</h3>
                <ul className="mt-2 text-[15px]">
                  {p.rows.map((r) => (
                    <Leader key={r} label={r} value="$ X.XXX" serifValue />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="px-5 py-20 sm:py-28" style={{ background: C.campoDeep, color: C.crema }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[12px] uppercase tracking-[0.35em]" style={{ color: C.hoja }}>Contacto</p>
            <h2 className={`${serif.className} mt-3 text-[44px] sm:text-[60px] leading-none`}>
              Pregunte antes de venir.
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed opacity-90 max-w-md">
              Mande una foto de la pieza o la lista de lo que necesita y le respondemos por WhatsApp.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-8 min-h-[48px] inline-flex items-center gap-3 px-8 rounded-full text-[17px] font-semibold shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2" style={{ background: '#25D366', color: '#0B2A14' }}>
              Escribir al {BIZ.phoneDisplay}
            </a>
            <dl className="mt-10 space-y-4 text-[15px]">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em]" style={{ color: C.hoja }}>Dirección</dt>
                <dd className={`${serif.className} text-[24px]`}>{BIZ.address}</dd>
                <dd className="opacity-80">{BIZ.city}, {BIZ.region}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.25em]" style={{ color: C.hoja }}>Teléfono</dt>
                <dd><a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
            </dl>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-6 inline-block underline underline-offset-4" style={{ color: C.hoja }}>
              Cómo llegar en Google Maps
            </a>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm border" style={{ borderColor: 'rgba(251,247,239,0.2)' }}>
            <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} loading="lazy" className="w-full h-full border-0" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      {/* Franja Sitiazo */}
      <footer className="px-5 py-6 pb-24 text-center text-[13px]" style={{ background: C.tierra, color: C.crema }}>
        Sitio de ejemplo de{' '}
        <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">Sitiazo</a>{' '}
        para {BIZ.name}. Surtido, precios y textos son de muestra.{' '}
        <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">¿Lo hacemos realidad?</a>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
