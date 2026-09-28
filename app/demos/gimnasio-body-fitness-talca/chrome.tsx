import { BIZ, MAPS_URL, WA_LINK } from './content'

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 text-white backdrop-blur-md" style={{ backgroundColor: 'rgba(17,25,22,0.94)' }}>
      <div className="mx-auto flex h-[64px] max-w-6xl items-center justify-between gap-3 px-5 md:px-8">
        <a href="#inicio" className="text-[11px] font-extrabold uppercase tracking-[0.1em] sm:text-sm">
          Body Fitness <span className="text-[#D2F36B]">·</span> Talca
        </a>
        <nav aria-label="Principal" className="hidden items-center gap-7 text-sm md:flex" style={{ color: 'rgba(255,255,255,0.85)' }}>
          <a href="#entrenamiento" className="hover:text-white">Entrenamiento</a>
          <a href="#contacto" className="hover:text-white">Ubicación y horario</a>
        </nav>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="flex h-11 shrink-0 items-center rounded-full bg-[#D2F36B] px-4 text-sm font-bold text-[#172016] hover:bg-[#e1ff87]">
          WhatsApp
        </a>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-[#111916] px-5 py-8 text-white md:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-5 text-xs leading-relaxed sm:text-sm">
        <div>
          <p className="font-bold">{BIZ.name}</p>
          <p className="mt-1" style={{ color: 'rgba(255,255,255,0.75)' }}>Talca, Región del Maule</p>
        </div>
        <div className="flex flex-col items-start gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}>
          <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ver ubicación</a>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Consultar por WhatsApp</a>
        </div>
      </div>
    </footer>
  )
}
