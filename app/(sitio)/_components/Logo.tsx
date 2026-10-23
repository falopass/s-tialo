import { Enlace } from './Enlace'

export function Logo({ className = 'h-6' }: { className?: string }) {
  return (
    <Enlace href="/" aria-label="Sitiazo.cl, ir al inicio" className="inline-flex min-h-11 shrink-0 items-center">
      <img src="/sitio/logo.webp" alt="Sitiazo.cl" width={462} height={99} className={`${className} w-auto`} />
    </Enlace>
  )
}
