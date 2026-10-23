import { CONTACT, LEGAL, PAGO_CUOTAS, PAGO_MENSUAL_FORMATTED, PLANS, STARTING_PRICE, whatsappLink } from '@/lib/config'

/**
 * Los hechos del servicio en texto plano, para que una persona (o un buscador) pueda
 * citarlos tal cual: precio, formas de pago, plazo, demo, cobertura y contacto.
 */
export function DatosClaros() {
  return (
    <div>
      <h2 className="s-display s-h3">En resumen</h2>
      <dl className="mt-8 grid gap-x-12 gap-y-7 sm:grid-cols-2">
        <div>
          <dt className="s-mono text-(--s-ceniza)">Precio</dt>
          <dd className="mt-1.5">Desde {STARTING_PRICE}, pago único</dd>
        </div>
        <div>
          <dt className="s-mono text-(--s-ceniza)">Formas de pago</dt>
          <dd className="mt-1.5">
            50% al comenzar y 50% al terminar, hasta {PAGO_CUOTAS} cuotas sin interés, o {PAGO_MENSUAL_FORMATTED} al mes
            en el plan Básico
          </dd>
        </div>
        <div>
          <dt className="s-mono text-(--s-ceniza)">Plazo</dt>
          <dd className="mt-1.5">
            {PLANS.basico.deliveryDays}, {PLANS.recomendado.deliveryDays} o {PLANS.catalogo.deliveryDays} días hábiles
            según el plan
          </dd>
        </div>
        <div>
          <dt className="s-mono text-(--s-ceniza)">Demo</dt>
          <dd className="mt-1.5">Gratis, por WhatsApp, antes de pagar</dd>
        </div>
        <div>
          <dt className="s-mono text-(--s-ceniza)">Dónde</dt>
          <dd className="mt-1.5">
            {LEGAL.city}, {LEGAL.region}; atendemos todo Chile en forma remota
          </dd>
        </div>
        <div>
          <dt className="s-mono text-(--s-ceniza)">Contacto</dt>
          <dd className="mt-1.5">
            Solo WhatsApp:{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="s-link">
              {CONTACT.whatsappDisplay}
            </a>
          </dd>
        </div>
      </dl>
    </div>
  )
}
