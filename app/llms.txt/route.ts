import {
  SITE,
  LEGAL,
  PLANS_ARRAY,
  PAGO_CUOTAS,
  PAGO_MENSUAL_FORMATTED,
  HOSTING_PRICE,
  CONTACT,
  formatCLP,
} from '@/lib/config'
import { catalogo, familias } from '@/app/demos/catalogo'
import { rubrosPublicados } from '@/content/rubros'

// Con `output: 'export'`, Next exporta este GET estático como out/llms.txt.
export const dynamic = 'force-static'

const BASE = SITE.url.replace(/\/$/, '')

const PAGINAS: [string, string][] = [
  ['/', 'Inicio: qué hace Sitiazo y precio de entrada'],
  ['/planes/', 'Planes y precios de las páginas web'],
  ['/como-funciona/', 'El proceso, del demo gratis a la entrega'],
  ['/casos/', 'Casos reales de webs publicadas'],
  ['/demos/', 'Catálogo de demos hechas para negocios reales'],
  ['/paginas-web-para/', 'Páginas web por rubro, con demos reales'],
  ['/preguntas-frecuentes/', 'Dudas comunes sobre precio, hosting y plazos'],
  ['/blog/', 'Notas sobre web y ventas para pymes'],
  ['/contacto/', 'Cómo pedir tu demo por WhatsApp'],
]

export function GET() {
  const planes = PLANS_ARRAY.map(
    (p) =>
      `- **${p.name} (${p.priceFormatted}):** ${p.pages}, entrega en ${p.deliveryLabel}. Incluye: ${p.features.join(', ')}.`,
  )
  const fams = familias().map((f) => `- ${f.titulo}: ${f.total}`)

  const texto = `# Sitiazo.cl

> ${SITE.description}

## Qué hacemos

- Estudio de diseño web para pymes chilenas, desde ${LEGAL.city}, ${LEGAL.region}. Atendemos todo Chile de forma remota.
- El demo de tu web es gratis y se pide por WhatsApp antes de pagar.

## Planes

${planes.join('\n')}

## Formas de pago

- Pago único: 50% al comenzar y 50% al terminar.
- Hasta ${PAGO_CUOTAS} cuotas sin interés; la primera cuota se paga al entregar la web.
- ${PAGO_MENSUAL_FORMATTED} al mes, solo en el plan Básico; incluye hosting y dominio. El primer mes se paga al entregar la web.
- Hosting con pago único o cuotas: ${formatCLP(HOSTING_PRICE)} al mes.

## Demos

${catalogo().length} demos de negocios reales: ${BASE}/demos/

${fams.join('\n')}

## Webs por rubro

${rubrosPublicados(catalogo())
  .map((r) => `- [${r.titulo}](${BASE}/paginas-web-para/${r.slug}/)`)
  .join('\n')}

## Páginas

${PAGINAS.map(([path, desc]) => `- [${desc}](${BASE}${path})`).join('\n')}

## Contacto

- Solo WhatsApp: https://wa.me/${CONTACT.whatsappNumber}
`

  return new Response(texto, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
