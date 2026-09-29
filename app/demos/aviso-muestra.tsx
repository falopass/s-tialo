'use client'

import { usePathname } from 'next/navigation'
import { whatsappLink } from '@/lib/config'

/**
 * Franja fina arriba de cada demo: le dice al dueño de la pyme que la página es
 * una muestra moldeable a su gusto y que las fotos salieron de sus redes (con
 * mejores fotos, la página queda mejor). Barra oscura translúcida y texto claro:
 * neutro frente a cualquier paleta de demo. Se omite en /demos (el catálogo no
 * es un demo) y en /demos/rancho-itahue, que es la página final de un cliente.
 */
const SIN_AVISO = new Set(['/demos', '/demos/rancho-itahue'])

export function AvisoMuestra() {
  const pathname = usePathname()
  if (SIN_AVISO.has(pathname.replace(/\/$/, ''))) return null

  return (
    <aside data-aviso-muestra style={{ backgroundColor: 'rgba(10,10,10,0.94)' }}>
      <p
        className="font-mono mx-auto max-w-3xl px-3 py-2 text-center text-micro leading-[1.6]"
        style={{ color: 'rgba(250,250,247,0.85)' }}
      >
        Página de muestra moldeable a tu gusto. Fotos de tus redes — con mejores,
        aún mejor:{' '}
        <a
          href={whatsappLink('demo')}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2"
          style={{ color: '#FFD60A' }}
        >
          mándanoslas →
        </a>
      </p>
    </aside>
  )
}
