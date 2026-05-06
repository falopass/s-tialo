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
  LEGAL: [
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
            Construyamos algo bueno.<Dot size="xl" variant="solid-yellow" />
          </h2>
        </div>

        {/* Sitemap */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
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
          <div className="flex items-center gap-4">
            <a
              href="mailto:hola@sitiazo.cl"
              className="font-body text-body-sm text-ink-faded hover:text-yellow transition-colors duration-200"
              aria-label="Email"
            >
              hola@sitiazo.cl
            </a>
            <a
              href="https://wa.me/56900000000"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faded hover:text-yellow transition-colors duration-200"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://instagram.com/sitiazo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faded hover:text-yellow transition-colors duration-200"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://tiktok.com/@sitiazo.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-faded hover:text-yellow transition-colors duration-200"
              aria-label="TikTok"
            >
              <TikTokIcon />
            </a>
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

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1zm0 0a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
    </svg>
  )
}
