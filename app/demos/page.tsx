import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE, whatsappLink } from '@/lib/config'
import { DEMOS } from './data'
import { Motif, headingFont } from './kit'

export const metadata: Metadata = {
  title: 'Demos por rubro — ejemplos de sitios para pymes',
  description:
    'Ejemplos de páginas web para pymes por rubro: escuela de conductores, veterinaria, vivero, óptica, cabañas, ferretería, dental y gasfitería.',
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
            Ocho mini-sitios de ejemplo, cada uno pensado como un negocio real
            del Maule. Cuando una pyme pregunte «¿me mandas un ejemplo de mi
            rubro?», este es el link.
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
                  className="relative h-28 flex items-end p-4"
                  style={{
                    background: `linear-gradient(135deg, ${d.theme.accent} 0%, ${d.theme.soft} 140%)`,
                  }}
                >
                  <Motif
                    motif={d.motif}
                    className="absolute top-3 right-3 w-10 opacity-30"
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
        </ul>

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
