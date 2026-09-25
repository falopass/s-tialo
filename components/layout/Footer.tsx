import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { Dot } from '@/components/ui/Dot'
import { HairlineDivider } from '@/components/ui/HairlineDivider'
import { whatsappLink, LEGAL, SITE } from '@/lib/config'

const sitemap = {
  ESTUDIO: [
    { label: 'Cómo funciona', href: '/como-funciona' },
    { label: 'Sobre nosotros', href: '/sobre' },
    { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes' },
    { label: 'Contacto', href: '/contacto' },
  ],
  PLANES: [
    { label: 'Plan Básico', href: '/planes' },
    { label: 'Plan Recomendado', href: '/planes' },
    { label: 'Plan Catálogo', href: '/planes' },
  ],
  CASOS: [
    { label: 'Roma Crochet', href: '/casos/roma-crochet' },
    { label: 'CalculaChile', href: '/casos/calculachile' },
    { label: 'CVListo', href: '/casos/cvlisto' },
    { label: 'Todos los casos', href: '/casos' },
    { label: 'Demos por rubro', href: '/demos' },
  ],
  NOTAS: [
    { label: 'Blog', href: '/blog' },
    { label: 'Recursos', href: '/blog' },
  ],
  LEGAL_SECTION: [
    { label: 'Términos', href: '/terminos' },
    { label: 'Privacidad', href: '/privacidad' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--spacing-5)] md:px-[var(--spacing-9)] pt-[var(--spacing-9)] pb-[var(--spacing-7)]">
        {/* Tagline */}
        <div className="mb-16">
          <h2 className="font-display text-display-lg font-bold text-cream leading-display tracking-display">
            Construyamos algo bueno.
            <Dot size="xl" variant="solid-yellow" />
          </h2>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
          {Object.entries(sitemap).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-body text-body-sm uppercase tracking-ui font-medium text-cream mb-4">
                {heading.replace('LEGAL_SECTION', 'LEGAL')}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-body-sm text-ink-faded hover:text-yellow transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <Dot
                        size="xs"
                        variant="solid-yellow"
                        className="shrink-0"
                      />
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
        <div className="flex flex-col items-center text-center gap-5 md:flex-row md:items-center md:justify-between md:text-left md:gap-4">
          <Logo variant="inverse" size="sm" className="mx-auto md:mx-0" />
          <div className="flex flex-col items-center md:flex-row md:items-center gap-2 md:gap-6">
            <span className="font-body text-body-sm text-ink-faded">
              © {new Date().getFullYear()} {SITE.name}. {LEGAL.city},{' '}
              {LEGAL.address.addressRegion} · {LEGAL.country}
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:justify-start">
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faded hover:text-yellow transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
          </div>
          <Link
            href="/contacto"
            className="font-body text-body-sm text-ink-faded hover:text-yellow transition-colors duration-200 flex items-center justify-center md:justify-start gap-2"
          >
            <Dot size="xs" variant="solid-yellow" />
            Desliza ↑
          </Link>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}
