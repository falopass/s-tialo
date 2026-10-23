import { PAGO_CUOTAS, PAGO_MENSUAL_FORMATTED, PLANS, STARTING_PRICE } from '@/lib/config'

/**
 * Ficha con los hechos del servicio: el dato grande en la serif y la frase que lo explica abajo.
 * Va en texto real (no imagen) para que una persona, Google o un asistente de IA lo citen tal cual.
 * Todo sale de lib/config.
 */
const FILAS: { etiqueta: string; valor: string; detalle: string }[] = [
  {
    etiqueta: 'Precio',
    valor: `Desde ${STARTING_PRICE}`,
    detalle: `Pago único. El plan Básico también va por ${PAGO_MENSUAL_FORMATTED} al mes, con hosting y dominio.`,
  },
  {
    etiqueta: 'Pago',
    valor: `${PAGO_CUOTAS} cuotas sin interés`,
    detalle: 'O pago único: la mitad al comenzar y la otra mitad al terminar.',
  },
  {
    etiqueta: 'Plazo',
    valor: `${PLANS.basico.deliveryDays} días hábiles`,
    detalle: `En el plan Básico. El Recomendado en ${PLANS.recomendado.deliveryDays} y el Catálogo en ${PLANS.catalogo.deliveryDays}.`,
  },
  {
    etiqueta: 'Demo',
    valor: 'Gratis',
    detalle: 'Lo armamos con tus fotos y tus datos, y te llega por WhatsApp antes de pagar.',
  },
]

const CELDA =
  'border-t border-(--s-linea) first:border-t-0 p-6 md:p-8 sm:border-t-0 sm:[&:nth-child(n+3)]:border-t sm:[&:nth-child(even)]:border-l lg:[&:nth-child(n+3)]:border-t-0 lg:border-l lg:first:border-l-0'

export function DatosClaros() {
  return (
    <div>
      <h2 className="s-display s-h2 s-revela">
        Lo esencial, <em>en una ficha.</em>
      </h2>
      <dl className="mt-10 grid rounded-3xl border border-(--s-linea) bg-(--s-tinta-2) sm:grid-cols-2 lg:grid-cols-4">
        {FILAS.map((f) => (
          <div key={f.etiqueta} className={CELDA}>
            <dt className="s-mono text-(--s-ceniza)">{f.etiqueta}</dt>
            <dd className="s-display mt-3 text-[clamp(1.75rem,2.6vw,2.25rem)] leading-[1.05] text-(--s-crema)">
              {f.valor}
            </dd>
            <dd className="mt-3 text-[15px] text-(--s-crema-2)">{f.detalle}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
