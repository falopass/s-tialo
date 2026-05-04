import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'

const sitemap = {
  ESTUDIO: [
    { label: 'Cómo funciona', href: '/como-funciona' },
    { label: 'Sobre nosotros', href: '/sobre' },
    { label: 'Contacto', href: '/contacto' },
  ],
  PLANES: [
    { label: 'Plan Básico', href: '/planes' },
    { label: 'Plan Recomendado', href: '/planes' },
    { label: 'Plan Catálogo', href: '/planes' },
  ],
  CASOS: [
    { label: 'Roma Crochet', href: '/casos/roma-crochet' },
    { label: 'Próximos casos', href: '/casos' },
  ],
  NOTAS: [
    { label: 'Blog', href: '/blog' },
    { label: 'Recursos', href: '/blog' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)] pt-[var(--spacing-9)] pb-[var(--spacing-7)]">
        {/* Tagline */}
        <div className="mb-16">
          <h2 className="font-display text-display-lg font-bold text-cream leading-display tracking-display">
            Construyamos algo bueno.<Dot size="xl" variant="solid-yellow" />
          </h2>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(sitemap).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-body text-body-sm uppercase tracking-ui font-medium text-cream mb-4">
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-body-sm text-ink-faded hover:text-yellow transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Dot size="xs" variant="solid-yellow" className="shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <HairlineDivider className="!bg-cream/15 mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Logo variant="inverse" size="sm" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6">
            <span className="font-body text-body-sm text-ink-faded">
              © {new Date().getFullYear()} Sitiazo. Curicó, Maule · Chile
            </span>
          </div>
          <Link
            href="/contacto"
            className="font-body text-body-sm text-ink-faded hover:text-yellow transition-colors duration-200 flex items-center gap-2"
          >
            <Dot size="xs" variant="solid-yellow" />
            Desliza ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}
