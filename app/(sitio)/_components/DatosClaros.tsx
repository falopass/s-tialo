import {
  CONTACT,
  LEGAL,
  PAGO_CUOTAS,
  PAGO_MENSUAL_FORMATTED,
  PLANS,
  STARTING_PRICE,
  whatsappLink,
} from '@/lib/config'
import { BotonDemo } from './BotonDemo'

/**
 * Ficha con los hechos del servicio: el dato grande en la serif y la frase que lo explica al lado.
 * Va en texto real (no imagen) para que una persona, Google o un asistente de IA lo citen tal cual.
 * Todo sale de lib/config.
 */
const FILAS: { etiqueta: string; valor: string; detalle: React.ReactNode }[] = [
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
  {
    etiqueta: 'Dónde',
    valor: LEGAL.city,
    detalle: `${LEGAL.region}. Atendemos todo Chile en forma remota.`,
  },
  {
    etiqueta: 'Contacto',
    valor: 'WhatsApp',
    detalle: (
      <>
        <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="s-link">
          {CONTACT.whatsappDisplay}
        </a>
        . Respondemos en horas hábiles.
      </>
    ),
  },
]

export function DatosClaros() {
  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
      <div className="lg:sticky lg:top-[calc(var(--s-nav-h)+48px)] lg:self-start">
        <h2 className="s-display s-h2 s-revela max-w-[12ch]">
          Lo esencial, <em>en una ficha.</em>
        </h2>
        <p className="s-lead s-revela mt-5 max-w-[34ch]">
          Lo que todos nos preguntan antes de escribir, respondido de una vez.
        </p>
        <div data-cta-principal className="mt-8">
          <BotonDemo origen="ficha" />
        </div>
      </div>

      <dl className="rounded-3xl border border-(--s-linea) bg-(--s-tinta-2) px-6 md:px-10">
        {FILAS.map((f) => (
          <div
            key={f.etiqueta}
            className="s-revela grid gap-x-8 gap-y-1.5 border-t border-(--s-linea) py-7 first:border-t-0 md:grid-cols-[96px_1fr_1.15fr] md:items-baseline md:py-8"
          >
            <dt className="s-mono text-(--s-ceniza)">{f.etiqueta}</dt>
            <dd className="s-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.05] text-(--s-crema)">{f.valor}</dd>
            <dd className="text-(--s-crema-2) md:pt-1">{f.detalle}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
