'use client'

import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { CTA_DEMO, linkDemo } from '../_lib/contacto'
import { medirWhatsApp } from '../_lib/medir'
import { useNegocio } from '../_lib/negocio'
import { Magnetico } from './Magnetico'

/**
 * CTA principal del sitio: pedir el demo por WhatsApp. Misma etiqueta en todas partes.
 * Si el visitante escribió el nombre de su negocio en el hero, el mensaje ya lo trae.
 */
export function BotonDemo({
  className = '',
  origen = 'boton-demo',
  negocioPorDefecto,
}: {
  className?: string
  origen?: string
  /** Nombre del negocio para el mensaje cuando el visitante no escribió el suyo (páginas por rubro). */
  negocioPorDefecto?: string
}) {
  const negocio = useNegocio()
  return (
    <Magnetico>
      <a
        href={linkDemo({ negocio: negocio || negocioPorDefecto })}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => medirWhatsApp({ origen, conNegocio: negocio !== '' })}
        className={`s-btn s-btn-primario ${className}`}
      >
        <WhatsappLogo size={20} weight="regular" aria-hidden="true" />
        {CTA_DEMO}
      </a>
    </Magnetico>
  )
}

/** "Quiero uno así": WhatsApp con el demo de referencia y, si lo hay, el nombre del negocio. */
export function QuieroUnoAsi({ nombre, rubro, className = '' }: { nombre: string; rubro: string; className?: string }) {
  const negocio = useNegocio()
  return (
    <a
      href={linkDemo({ negocio, demo: { nombre, rubro } })}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => medirWhatsApp({ origen: 'quiero-uno-asi', conNegocio: negocio !== '' })}
      aria-label={`Quiero uno así, como el demo de ${nombre}`}
      className={`s-quiero ${className}`}
    >
      <WhatsappLogo size={18} weight="regular" aria-hidden="true" />
      Quiero uno así
    </a>
  )
}
