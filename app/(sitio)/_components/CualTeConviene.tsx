'use client'

import { useState } from 'react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import { PLANS } from '@/lib/config'
import { linkDemo, textoPago, type Pago } from '../_lib/contacto'
import { medirWhatsApp } from '../_lib/medir'
import { useNegocio } from '../_lib/negocio'
import { recomendarPlan, type Respuestas } from '../_lib/recomendar'

type Mostrar = NonNullable<Respuestas['mostrar']>

const MOSTRAR: { valor: Mostrar; etiqueta: string }[] = [
  { valor: 'pagina', etiqueta: 'Mi negocio en una página' },
  { valor: 'secciones', etiqueta: 'Varias secciones: servicios, carta, equipo' },
  { valor: 'productos', etiqueta: 'Productos con foto y precio, o agenda en línea' },
]

const GOOGLE: { valor: boolean; etiqueta: string }[] = [
  { valor: true, etiqueta: 'Sí' },
  { valor: false, etiqueta: 'Da lo mismo' },
]

const PAGO: { valor: Pago; etiqueta: string }[] = [
  { valor: 'unico', etiqueta: 'De una vez' },
  { valor: 'cuotas', etiqueta: 'En cuotas' },
  { valor: 'mensual', etiqueta: 'Mes a mes' },
]

/**
 * Selector de plan en tres preguntas, todas a la vista. Qué comunica: elegir plan
 * no necesita hablar con un vendedor; la respuesta aparece al contestar la primera.
 */
export function CualTeConviene() {
  const negocio = useNegocio()
  const [r, setR] = useState<Respuestas>({})
  const resultado = recomendarPlan(r)
  const plan = resultado ? PLANS[resultado.plan] : null

  return (
    <div>
      <h2 className="s-display s-h2 max-w-[16ch]">¿Cuál te conviene?</h2>
      <p className="s-lead mt-5">Tres preguntas y te decimos qué plan elegir. Sin hablar con un vendedor.</p>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid content-start gap-9">
          <fieldset>
            <legend className="s-mono text-(--s-ceniza)">¿Qué necesitas mostrar?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {MOSTRAR.map((o) => (
                <button
                  key={o.valor}
                  type="button"
                  aria-pressed={r.mostrar === o.valor}
                  onClick={() => setR((v) => ({ ...v, mostrar: o.valor }))}
                  className="s-cat-chip"
                >
                  {o.etiqueta}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="s-mono text-(--s-ceniza)">¿Quieres aparecer en Google cuando busquen tu rubro en tu comuna?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {GOOGLE.map((o) => (
                <button
                  key={o.etiqueta}
                  type="button"
                  aria-pressed={r.google === o.valor}
                  onClick={() => setR((v) => ({ ...v, google: o.valor }))}
                  className="s-cat-chip"
                >
                  {o.etiqueta}
                </button>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="s-mono text-(--s-ceniza)">¿Cómo prefieres pagar?</legend>
            <div className="mt-4 flex flex-wrap gap-2">
              {PAGO.map((o) => (
                <button
                  key={o.valor}
                  type="button"
                  aria-pressed={r.pago === o.valor}
                  onClick={() => setR((v) => ({ ...v, pago: o.valor }))}
                  className="s-cat-chip"
                >
                  {o.etiqueta}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div aria-live="polite">
          {resultado && plan && (
            <div className="rounded-3xl border border-(--s-amarillo) bg-(--s-tinta-2) p-7 md:p-9">
              <p className="s-display text-[clamp(2.2rem,4vw,3.25rem)] leading-none">
                Te conviene el plan <em>{plan.name}.</em>
              </p>
              <p className="s-display mt-6 text-[clamp(2.25rem,4vw,3.25rem)] leading-none">{plan.priceFormatted}</p>
              <p className="mt-3 text-(--s-crema-2)">{textoPago(resultado.plan, resultado.pago)}</p>
              <ul className="mt-6 grid gap-2.5 text-(--s-crema-2)">
                {resultado.razones.map((t) => (
                  <li key={t} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className="inline-block h-px w-3 shrink-0 translate-y-[-4px] bg-(--s-ceniza)" />
                    {t}
                  </li>
                ))}
              </ul>
              {resultado.nota && <p className="mt-5 text-sm text-(--s-ceniza)">{resultado.nota}</p>}
              <a
                href={linkDemo({ negocio, plan: resultado.plan, pago: resultado.pago })}
                target="_blank"
                rel="noopener noreferrer"
                data-cta-principal
                onClick={() =>
                  medirWhatsApp({ origen: 'selector', plan: resultado.plan, pago: resultado.pago, conNegocio: negocio !== '' })
                }
                className="s-btn s-btn-primario mt-7"
              >
                <WhatsappLogo size={20} weight="regular" aria-hidden="true" />
                Quiero este plan
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
