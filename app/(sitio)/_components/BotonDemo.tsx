import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { CTA_DEMO, linkDemo } from '../_lib/contacto'

/** CTA principal del sitio: pedir el demo por WhatsApp. Misma etiqueta en todas partes. */
export function BotonDemo({ className = '' }: { className?: string }) {
  return (
    <a href={linkDemo()} target="_blank" rel="noopener noreferrer" className={`s-btn s-btn-primario ${className}`}>
      <WhatsappLogo size={20} weight="regular" aria-hidden="true" />
      {CTA_DEMO}
    </a>
  )
}
