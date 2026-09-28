import Link from 'next/link'
import { BIZ, WA_LINK } from './content'

export function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#111315] text-[#f4eee4]">
      <header className="sticky top-0 z-20 border-b border-[#f4eee4]/15 bg-[#111315]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="#inicio" className="font-black uppercase tracking-[.12em]">{BIZ.short}</Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex" aria-label="Principal">
            <a href="#servicios">Servicios</a>
            <a href="#horario">Horario</a>
            <a href="#ubicacion">Ubicación</a>
          </nav>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="rounded-sm bg-[#e6b84f] px-4 py-2 text-sm font-black text-[#111315]">Agendar</a>
        </div>
      </header>
      {children}
      <footer className="border-t border-[#f4eee4]/15 bg-[#0a0b0c] px-5 py-8">
        <div className="mx-auto grid max-w-6xl gap-5 text-sm md:grid-cols-2">
          <div>
            <p className="font-black uppercase tracking-[.12em]">{BIZ.name}</p>
            <p className="mt-2 text-[#f4eee4]/65">{BIZ.address}</p>
          </div>
          <div className="md:text-right">
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="font-bold text-[#e6b84f]">WhatsApp {BIZ.phoneDisplay}</a>
            <p className="mt-2 text-xs text-[#f4eee4]/50">Datos públicos revisados en Google Maps.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
