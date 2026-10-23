import { PAGO_MENSUAL_FORMATTED, PLANS } from '@/lib/config'
import { BotonDemo } from './BotonDemo'
import { Enlace } from './Enlace'

const sinEntrega = (f: string) => !f.startsWith('Entrega')

/**
 * Los tres planes, con el recomendado destacado y los otros dos al lado.
 * Sección informativa: sin efectos, el ojo descansa aquí. Precios desde lib/config.
 */
export function Planes({ conEnlace = true }: { conEnlace?: boolean }) {
  const { basico, recomendado, catalogo } = PLANS
  return (
    <div>
      <div className="grid gap-5 lg:grid-cols-[1.35fr_1fr] lg:grid-rows-2">
        <article className="flex flex-col justify-between gap-10 rounded-3xl border border-(--s-linea) bg-(--s-tinta-2) p-7 md:p-10 lg:row-span-2">
          <div>
            <h3 className="text-lg font-semibold">{recomendado.name}</h3>
            <p className="s-display mt-4 text-[clamp(3rem,5vw,4.75rem)] leading-none">{recomendado.priceFormatted}</p>
            <p className="mt-3 text-(--s-crema-2)">
              {recomendado.pages}. Lista en {recomendado.deliveryLabel}.
            </p>
            <ul className="mt-7 grid gap-2.5 text-(--s-crema-2)">
              {recomendado.features.filter(sinEntrega).map((f) => (
                <li key={f} className="flex items-baseline gap-3">
                  <span aria-hidden="true" className="inline-block h-px w-3 shrink-0 translate-y-[-4px] bg-(--s-ceniza)" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <BotonDemo />
          </div>
        </article>
        {[basico, catalogo].map((p) => (
          <article key={p.id} className="rounded-3xl border border-(--s-linea) p-7">
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="s-display mt-4 text-[2.75rem] leading-none">{p.priceFormatted}</p>
            <p className="mt-3 text-(--s-crema-2)">
              {p.pages}. {p.description} Lista en {p.deliveryLabel}.
            </p>
          </article>
        ))}
      </div>
      <p className="mt-8 text-(--s-crema-2)">
        ¿Prefieres pagar mes a mes? {PAGO_MENSUAL_FORMATTED} al mes con hosting, dominio y ajustes incluidos.{' '}
        {conEnlace && (
          <Enlace href="/planes/" className="s-link">
            Ver planes
          </Enlace>
        )}
      </p>
    </div>
  )
}
