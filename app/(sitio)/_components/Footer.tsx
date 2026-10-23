import Link from 'next/link'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { CONTACT, LEGAL, SITE, whatsappLink } from '@/lib/config'
import { Logo } from './Logo'

const COLUMNAS = [
  {
    titulo: 'Estudio',
    links: [
      { label: 'Cómo funciona', href: '/como-funciona/' },
      { label: 'Planes', href: '/planes/' },
      { label: 'Sobre el estudio', href: '/sobre/' },
      { label: 'Preguntas frecuentes', href: '/preguntas-frecuentes/' },
    ],
  },
  {
    titulo: 'Trabajo',
    links: [
      { label: 'Casos', href: '/casos/' },
      { label: 'Caso Roma Crochet', href: '/casos/roma-crochet/' },
      { label: 'Demos por rubro', href: '/demos/', documento: true },
      { label: 'Notas', href: '/blog/' },
    ],
  },
  {
    titulo: 'Legal',
    links: [
      { label: 'Términos', href: '/terminos/' },
      { label: 'Privacidad', href: '/privacidad/' },
      { label: 'Contacto', href: '/contacto/' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-(--s-linea) bg-(--s-tinta)">
      <div className="s-wrap grid gap-12 py-16 md:grid-cols-[1.3fr_2fr] md:py-20">
        <div className="flex flex-col gap-6">
          <Logo className="h-6" />
          <p className="max-w-[34ch] text-(--s-crema-2)">
            Estudio de diseño web para pymes chilenas. Trabajamos desde {LEGAL.city}, {LEGAL.region}, para todo Chile.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-3 self-start text-(--s-crema) transition-colors hover:text-(--s-amarillo)"
          >
            <WhatsappLogo size={22} weight="regular" aria-hidden="true" />
            <span>{CONTACT.whatsappDisplay}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
          {COLUMNAS.map((col) => (
            <div key={col.titulo}>
              <h2 className="s-mono mb-4 text-(--s-ceniza)">{col.titulo}</h2>
              <ul className="flex flex-col">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {'documento' in l ? (
                      <a href={l.href} className="inline-flex min-h-11 items-center text-[15px] text-(--s-crema-2) transition-colors hover:text-(--s-crema)">
                        {l.label}
                      </a>
                    ) : (
                      <Link href={l.href} className="inline-flex min-h-11 items-center text-[15px] text-(--s-crema-2) transition-colors hover:text-(--s-crema)">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="s-wrap border-t border-(--s-linea) py-6">
        <p className="s-mono text-(--s-ceniza)">
          © {new Date().getFullYear()} {SITE.name}.{SITE.domain.split('.')[1]}
        </p>
      </div>
    </footer>
  )
}
