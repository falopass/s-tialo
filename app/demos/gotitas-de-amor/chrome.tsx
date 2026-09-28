import Link from 'next/link'
import { BIZ } from './content'

export function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#fff8ed] text-[#173b36]">
      <header className="sticky top-0 z-20 border-b border-[#173b36]/10 bg-[#fff8ed]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
          <Link href="#inicio" className="font-semibold tracking-tight">{BIZ.short}</Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex" aria-label="Principal">
            <a href="#espacio">El espacio</a>
            <a href="#contacto">Información</a>
          </nav>
          <a href="#contacto" className="rounded-full bg-[#f28b62] px-4 py-2 text-sm font-bold text-[#173b36]">
            Conocer
          </a>
        </div>
      </header>
      {children}
      <footer id="contacto" className="border-t border-[#173b36]/10 bg-[#173b36] px-5 py-8 text-[#fff8ed]">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f6c76c]">Sala cuna y jardín infantil</p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#fff8ed]/80">
              Un espacio de educación inicial en Talca. Los datos de contacto no aparecen publicados en las fuentes consultadas.
            </p>
          </div>
          <div className="text-sm md:text-right">
            <p className="font-semibold">{BIZ.name}</p>
            <p className="mt-2 text-[#fff8ed]/70">{BIZ.city}</p>
            <p className="mt-4 text-xs text-[#fff8ed]/55">Información verificada en septiembre de 2026.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
