import { BIZ, MAPS_URL, WA_LINK } from './content'

const LINKS = [
  { label: 'Servicio', href: '#servicio' },
  { label: 'Ubicación', href: '#contacto' },
]

export function SanMartinNav() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#d9d5cb] bg-[#f5f2ea]/95 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#inicio" className="font-display text-base font-extrabold tracking-tight text-[#191d1f] sm:text-lg">
          {BIZ.shortName}<span className="ml-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#596164]">Lubricentro</span>
        </a>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-[#343b3e] underline-offset-4 hover:underline">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-10 items-center rounded-sm bg-[#f2ae38] px-3 text-xs font-extrabold text-[#191d1f] sm:px-4 sm:text-sm"
        >
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export function SanMartinFooter() {
  return (
    <footer className="bg-[#191d1f] px-5 py-8 text-[#f5f2ea] sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-xl font-extrabold">{BIZ.name}</p>
          <p className="mt-1 text-sm text-[#d3d0c8]">{BIZ.address}, {BIZ.city}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
          <a className="underline underline-offset-4" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Cómo llegar</a>
          <a className="underline underline-offset-4" href={WA_LINK} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
