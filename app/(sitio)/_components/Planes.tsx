import { cuotas, PAGO_CUOTAS, PAGO_MENSUAL_FORMATTED, PLAN_MENSUAL, PLANS } from '@/lib/config'
import { AccionPlan } from './AccionPlan'
import { Enlace } from './Enlace'

const sinEntrega = (f: string) => !f.startsWith('Entrega')

/**
 * Los tres planes en columnas iguales; el Recomendado destaca por el borde y va primero
 * en el celular. Sección informativa: sin efectos, el ojo descansa aquí. Precios desde lib/config.
 */
export function Planes({ conEnlace = true }: { conEnlace?: boolean }) {
  const { basico, recomendado, catalogo } = PLANS
  const planes = [basico, recomendado, catalogo]
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-3 lg:items-stretch">
        {planes.map((p) => (
          <article
            key={p.id}
            className={`flex flex-col rounded-3xl border p-7 md:p-8 ${
              p.id === recomendado.id
                ? 'order-first border-(--s-amarillo) bg-(--s-tinta-2) lg:order-none'
                : 'border-(--s-linea)'
            }`}
          >
            <div className="flex items-baseline gap-3">
              <h3 className="text-lg font-semibold">{p.name}</h3>
              {p.id === recomendado.id && <span className="s-mono text-(--s-ceniza)">Más pedido</span>}
            </div>
            <p className="s-display mt-4 text-[clamp(2.75rem,4vw,3.75rem)] leading-none">{p.priceFormatted}</p>
            <p className="mt-2 text-sm text-(--s-crema-2)">
              o {PAGO_CUOTAS} cuotas de {cuotas(p.price).montoFormatted} sin interés
            </p>
            {p.id === PLAN_MENSUAL && (
              <p className="mt-1 text-sm text-(--s-crema-2)">o {PAGO_MENSUAL_FORMATTED} al mes</p>
            )}
            <p className="mt-3 text-(--s-crema-2)">
              {p.pages}. Lista en {p.deliveryLabel}.
            </p>
            <ul className="mt-6 grid gap-2.5 text-(--s-crema-2)">
              {p.features.filter(sinEntrega).map((f) => (
                <li key={f} className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="inline-block h-px w-3 shrink-0 translate-y-[-4px] bg-(--s-ceniza)" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-8">
              <AccionPlan plan={p.id} primario={p.id === recomendado.id} />
            </div>
          </article>
        ))}
      </div>
      {conEnlace && (
        <p className="mt-8">
          <Enlace href="/planes/" className="s-link">
            Compara todo lo que incluye cada plan
          </Enlace>
        </p>
      )}
    </div>
  )
}
