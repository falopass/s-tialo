import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, whatsappLink } from '@/lib/config'
import { DEMOS } from './data'
import { Motif, headingFont } from './kit'

// Mockups personalizados para leads reales (carpeta propia en /demos).
const BLITZ = [
  {
    slug: 'triadent',
    name: 'Clínica Dental Triadent',
    rubro: 'Clínica dental',
    city: 'Talca',
    tagline: 'Clínico premium y luminoso: menta y azul profundo.',
    gradient: 'linear-gradient(135deg, #0F3B57 0%, #1D9E8E 140%)',
  },
  {
    slug: 'one-health',
    name: 'One Health',
    rubro: 'Centro veterinario',
    city: 'Maule',
    tagline: 'Amable y moderno: salvia, durazno y crema.',
    gradient: 'linear-gradient(135deg, #4E6B50 0%, #F2B48C 140%)',
  },
  {
    slug: 'homyvet',
    name: 'Clínica Veterinaria Homyvet',
    rubro: 'Clínica veterinaria',
    city: 'Talca',
    tagline: 'Hogar y cuidado: mostaza, azul marino y hueso.',
    gradient: 'linear-gradient(135deg, #1E2C4E 0%, #D9A02B 140%)',
  },
  {
    slug: 'altos-de-lircay',
    name: 'Altos de Lircay',
    rubro: 'Clínica dental',
    city: 'San Clemente',
    tagline: 'Cercano y natural: verde bosque y cobre.',
    gradient: 'linear-gradient(135deg, #16342A 0%, #B4643C 140%)',
  },
  {
    slug: 'jd-abogados',
    name: 'J&D Abogados',
    rubro: 'Estudio jurídico',
    city: 'Talca',
    tagline: 'Serio y elegante: grafito y dorado apagado.',
    gradient: 'linear-gradient(135deg, #1B1E22 0%, #A5885A 140%)',
  },
  {
    slug: 'santa-fe',
    name: 'Ingeniería y Construcciones Santa Fe',
    rubro: 'Constructora',
    city: 'Talca',
    tagline: 'Industrial sólido: acero y naranjo de seguridad.',
    gradient: 'linear-gradient(135deg, #16191D 0%, #E8631A 140%)',
  },
  {
    slug: 'rancho-itahue',
    name: 'Rancho Itahue',
    rubro: 'Agroturismo y eventos',
    city: 'Molina',
    tagline: 'Editorial de campo: verde bosque, hueso y ámbar, con fotos.',
    gradient: 'linear-gradient(135deg, #12231A 0%, #B97E33 140%)',
  },
]

export const metadata: Metadata = {
  title: 'Demos por rubro — ejemplos de sitios para pymes',
  description:
    'Ejemplos de páginas web para pymes por rubro: escuela de conductores, veterinaria, vivero, óptica, cabañas, ferretería, dental, gasfitería, agencia de publicidad, contador, grúas y vidriería.',
}

export default function DemosIndex() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <header className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-4">
        <Link
          href="/"
          className="font-mono text-xs uppercase tracking-ui text-ink-muted hover:text-ink transition-colors"
        >
          ← sitiazo.cl
        </Link>
      </header>

      <main className="max-w-6xl mx-auto px-5 md:px-8 pb-24">
        <div className="py-10 md:py-16 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-ui text-ink-muted mb-4">
            Ejemplos listos para enviar
          </p>
          <h1 className="font-display text-display-md md:text-display-lg font-bold leading-display tracking-display mb-5">
            Demos por rubro
          </h1>
          <p className="text-body text-ink-muted leading-body">
            {DEMOS.length} mini-sitios de ejemplo, cada uno pensado como un
            negocio real del Maule. Cuando una pyme pregunte «¿me mandas un
            ejemplo de mi rubro?», este es el link.
          </p>
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((d) => (
            <li key={d.slug}>
              <Link
                href={`/demos/${d.slug}`}
                className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
              >
                <div
                  className="relative h-[112px] flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, ${d.theme.accent} 0%, ${d.theme.soft} 140%)`,
                  }}
                >
                  <Motif
                    motif={d.motif}
                    className="absolute top-3 right-3 w-[40px] opacity-30"
                  />
                  <span
                    className={`${headingFont(d.theme)} text-lg leading-tight drop-shadow-sm`}
                    style={{ color: '#fff' }}
                  >
                    {d.name}
                  </span>
                </div>
                <div className="p-4">
                  <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                    {d.rubro} · {d.city}
                  </p>
                  <p className="text-body-sm text-ink-muted leading-snug mb-3">
                    {d.tagline}
                  </p>
                  <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                    Ver demo →
                  </span>
                </div>
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demos/cabanas-la-quebrada"
              className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
            >
              <div
                className="relative h-[112px] flex items-end p-4"
                style={{
                  background:
                    'linear-gradient(135deg, #0E241B 0%, #173A2B 55%, #C4704B 140%)',
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="absolute top-3 right-3 w-[40px] opacity-30"
                  fill="none"
                  stroke="#FAF7F0"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M3 19 L9 7 L13 14 L16 9 L21 19 Z" />
                  <circle cx="17.5" cy="5" r="1.8" />
                </svg>
                <span className="font-display font-bold tracking-display text-lg leading-tight text-[#FAF7F0] drop-shadow-sm">
                  Cabañas La Quebrada
                </span>
              </div>
              <div className="p-4">
                <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                  Cabañas · Talca · lead real
                </p>
                <p className="text-body-sm text-ink-muted leading-snug mb-3">
                  Mockup premium con identidad propia: refugio natural del Maule.
                </p>
                <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                  Ver demo →
                </span>
              </div>
            </Link>
          </li>
        </ul>

        <div className="mt-16">
          <h2 className="font-display text-2xl md:text-3xl font-bold leading-display tracking-display mb-2">
            Mockups para leads reales
          </h2>
          <p className="text-body-sm text-ink-muted leading-snug mb-6 max-w-xl">
            Muestras personalizadas con identidad propia, armadas solo con
            datos públicos de cada ficha de Google.
          </p>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BLITZ.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/demos/${d.slug}`}
                  className="group block border border-divider bg-white overflow-hidden h-full transition-shadow hover:shadow-md focus-visible:shadow-md"
                >
                  <div
                    className="relative h-[112px] flex items-end p-4"
                    style={{ background: d.gradient }}
                  >
                    <span className="font-display font-bold tracking-display text-lg leading-tight text-white drop-shadow-sm">
                      {d.name}
                    </span>
                  </div>
                  <div className="p-4">
                    <p className="font-mono text-[10px] uppercase tracking-ui text-ink-muted mb-1">
                      {d.rubro} · {d.city} · lead real
                    </p>
                    <p className="text-body-sm text-ink-muted leading-snug mb-3">
                      {d.tagline}
                    </p>
                    <span className="font-body text-body-sm font-medium text-ink underline decoration-yellow decoration-2 underline-offset-4">
                      Ver demo →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 pt-8 border-t border-divider flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className="text-body-sm text-ink-muted">
            ¿Quieres una así para tu negocio? Escríbenos y la conversamos.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-body text-body-sm font-semibold bg-ink text-cream px-5 py-2.5 transition-transform active:scale-95"
          >
            Hablar con {SITE.name} →
          </a>
        </div>
      </main>
    </div>
  )
}
