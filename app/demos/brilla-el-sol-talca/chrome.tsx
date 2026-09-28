import { BIZ, WA_LINK } from './content'

const links = [
  { label: 'La cancha', href: '#cancha' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 border-b border-white/15 bg-[#10392e]/90 text-[#fffdf3]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 md:px-8">
        <a href="#inicio" className="max-w-[185px] text-sm font-black leading-tight tracking-wide md:max-w-none md:text-base">
          BRILLA <span className="text-[#f4c64e]">EL SOL</span>
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-6 text-sm font-semibold sm:flex">
          {links.map((link) => <a key={link.href} href={link.href} className="hover:text-[#f4c64e]">{link.label}</a>)}
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#f4c64e] px-4 py-2.5 text-xs font-extrabold text-[#17291f]">WhatsApp</a>
      </div>
    </header>
  )
}

export function WhatsAppFab() {
  return <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por WhatsApp a ${BIZ.name}`} className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#13734a] text-2xl font-bold text-white shadow-lg">↗</a>
}
