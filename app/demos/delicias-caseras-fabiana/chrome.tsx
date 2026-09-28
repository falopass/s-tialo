import { BIZ, WA_LINK } from './content'

export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-3 px-5 md:px-8">
        <a href="#inicio" className="max-w-[205px] text-sm font-black leading-tight text-[#55291f] md:text-base">Delicias <span className="text-[#a34127]">Caseras</span></a>
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center rounded-full bg-[#76321f] px-4 text-xs font-extrabold text-white">Pedir por WhatsApp</a>
      </div>
    </header>
  )
}

export function WhatsAppFab() {
  return <a href={WA_LINK} target="_blank" rel="noopener noreferrer" aria-label={`Consultar por WhatsApp a ${BIZ.name}`} className="fixed bottom-5 right-5 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-[#176443] text-2xl font-bold text-white shadow-lg">↗</a>
}
