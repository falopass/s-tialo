'use client'

import { useState } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import type { PlanId } from '@/lib/config'
import { linkDemo, pagosDe, textoPago, type Pago } from '../_lib/contacto'
import { medirWhatsApp } from '../_lib/medir'
import { useNegocio } from '../_lib/negocio'
import { useOfertaVigente } from './SegunOferta'

const ETIQUETAS: Record<Pago, string> = {
  mensual: 'Mensual',
  anual: 'Anual',
  unico: 'Compra única',
}

/**
 * Cómo pagar + CTA dentro de cada tarjeta de plan. Qué comunica: el plan se adapta
 * a la forma de pago que eliges, y el texto de abajo lo confirma al momento.
 */
export function AccionPlan({
  plan,
  primario = false,
  ofertaEnBuild,
}: {
  plan: PlanId
  primario?: boolean
  /** Vigencia de la oferta de activación a la fecha del build (`ofertaActivacionVigente()`). */
  ofertaEnBuild: boolean
}) {
  const negocio = useNegocio()
  const oferta = useOfertaVigente(ofertaEnBuild)
  const [pago, setPago] = useState<Pago>('mensual')

  return (
    <div>
      <fieldset>
        <legend className="s-mono text-(--s-ceniza)">Cómo quieres pagar</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {pagosDe(plan).map((p) => (
            <button key={p} type="button" aria-pressed={pago === p} onClick={() => setPago(p)} className="s-cat-chip">
              {ETIQUETAS[p]}
            </button>
          ))}
        </div>
      </fieldset>
      <p aria-live="polite" className="mt-4 text-sm text-(--s-crema-2)">
        {textoPago(plan, pago, oferta)}
      </p>
      <a
        href={linkDemo({ negocio, plan, pago })}
        target="_blank"
        rel="noopener noreferrer"
        data-cta-principal
        onClick={() => medirWhatsApp({ origen: 'plan', plan, pago, conNegocio: negocio !== '' })}
        className={`s-btn mt-5 ${primario ? 's-btn-primario' : 's-btn-secundario'}`}
      >
        <WhatsappLogo size={20} weight="regular" aria-hidden="true" />
        Quiero este plan
      </a>
    </div>
  )
}
