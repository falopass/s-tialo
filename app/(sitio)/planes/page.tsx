import type { Metadata } from 'next'
import {
  EXTRAS,
  FORMAS_PAGO,
  MARCA,
  PAGO_CUOTAS,
  PAGO_MENSUAL_FORMATTED,
  PLANS,
  PLANS_ARRAY,
  SITE,
  STARTING_PRICE,
  siteUrl,
} from '@/lib/config'
import { JsonLd } from '@/lib/seo'
import { faqJsonLd, planFaqs } from '@/content/faqs'
import { Cabecera } from '../_components/Cabecera'
import { Cierre } from '../_components/Cierre'
import { CualTeConviene } from '../_components/CualTeConviene'
import { DatosClaros } from '../_components/DatosClaros'
import { Planes } from '../_components/Planes'
import { Preguntas } from '../_components/Preguntas'
import { SinRiesgo } from '../_components/SinRiesgo'

const DESCRIPCION = `Cuánto cuesta una página web para pyme en Chile: planes de diseño web desde ${STARTING_PRICE}, mensual o pago único, sin letras chicas ni sorpresas.`

export const metadata: Metadata = {
  title: 'Planes y precios de páginas web para pymes',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/planes/') },
  openGraph: {
    title: 'Planes y precios de páginas web para pymes | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/planes/'),
    images: [{ url: '/sitio/og/planes.jpg', width: 1200, height: 630, alt: 'Planes de diseño web de Sitiazo.cl' }],
  },
}

const planesFaqJsonLd = faqJsonLd(planFaqs)

const planesServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Planes de diseño web de Sitiazo.cl',
  description: `Planes de diseño web para pymes chilenas. Mensual desde ${PAGO_MENSUAL_FORMATTED} o pago único desde ${STARTING_PRICE}.`,
  url: siteUrl('/planes/'),
  itemListElement: PLANS_ARRAY.map((plan, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: `Plan ${plan.name}, Sitiazo.cl`,
      description: plan.description,
      url: siteUrl('/planes/'),
      provider: {
        '@type': 'ProfessionalService',
        name: MARCA,
        url: SITE.url,
      },
      offers: {
        '@type': 'Offer',
        price: plan.price.toString(),
        priceCurrency: 'CLP',
        availability: 'https://schema.org/InStock',
        description: `${plan.name}: ${plan.pages}, entrega en ${plan.deliveryDays} días hábiles`,
      },
    },
  })),
  numberOfItems: PLANS_ARRAY.length,
}

type Valor = string | boolean
const GRUPOS: { titulo: string; filas: { nombre: string; basico: Valor; recomendado: Valor; catalogo: Valor }[] }[] = [
  {
    titulo: 'Diseño',
    filas: [
      { nombre: 'Secciones', basico: PLANS.basico.pages, recomendado: PLANS.recomendado.pages, catalogo: PLANS.catalogo.pages },
      { nombre: 'Diseño a medida', basico: true, recomendado: true, catalogo: true },
      { nombre: 'Primero para celular', basico: true, recomendado: true, catalogo: true },
      { nombre: 'Blog integrado', basico: false, recomendado: true, catalogo: true },
    ],
  },
  {
    titulo: 'Ventas y Google',
    filas: [
      { nombre: 'Botón directo a WhatsApp', basico: true, recomendado: true, catalogo: true },
      { nombre: 'SEO local', basico: false, recomendado: true, catalogo: true },
      { nombre: 'Agenda con Cal.com', basico: false, recomendado: false, catalogo: true },
      { nombre: 'Datos estructurados (Schema.org)', basico: false, recomendado: false, catalogo: true },
    ],
  },
  {
    titulo: 'Entrega',
    filas: [
      {
        nombre: 'Días hábiles',
        basico: String(PLANS.basico.deliveryDays),
        recomendado: String(PLANS.recomendado.deliveryDays),
        catalogo: String(PLANS.catalogo.deliveryDays),
      },
    ],
  },
]

function Celda({ v }: { v: Valor }) {
  if (v === true) return <span>Sí</span>
  if (v === false) return <span className="text-(--s-ceniza)">No</span>
  return <span>{v}</span>
}

export default function PlanesPage() {
  return (
    <>
      <JsonLd data={planesFaqJsonLd} />
      <JsonLd data={planesServiceJsonLd} />

      <Cabecera
        titulo={
          <>
            Planes claros, <em>sin letra chica.</em>
          </>
        }
        bajada={`Pago único desde ${STARTING_PRICE}, en hasta ${PAGO_CUOTAS} cuotas sin interés, o el plan Básico mes a mes por ${PAGO_MENSUAL_FORMATTED}. El demo siempre es gratis.`}
      />

      <section className="s-wrap pb-24 md:pb-32">
        <h2 className="s-display s-h3 mb-8">Elige cómo pagar.</h2>
        <div className="grid gap-5 md:grid-cols-[1.2fr_1fr]">
          {FORMAS_PAGO.map((f) => (
            <article
              key={f.id}
              className={`rounded-3xl border p-7 md:p-9 ${
                f.destacado ? 'border-(--s-amarillo) bg-(--s-tinta-2)' : 'border-(--s-linea)'
              }`}
            >
              <h3 className="text-lg font-semibold">{f.nombre}</h3>
              <p className="s-display mt-3 text-[clamp(2.25rem,4vw,3.25rem)] leading-none">{f.precio}</p>
              <p className="mt-4 max-w-[46ch] text-(--s-crema-2)">{f.detalle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-14 max-w-[18ch]">Tres tamaños, un mismo cuidado.</h2>
          <Planes conEnlace={false} />
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <SinRiesgo />
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <CualTeConviene />
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-12">Qué incluye cada plan.</h2>
          <div className="mx-[calc(var(--s-gutter)*-1)] overflow-x-auto px-[var(--s-gutter)]">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="text-(--s-crema)">
                  <th scope="col" className="w-[40%] pb-4 font-normal">
                    <span className="sr-only">Característica</span>
                  </th>
                  {PLANS_ARRAY.map((p) => (
                    <th key={p.id} scope="col" className="pb-4 text-lg font-semibold">
                      {p.name}
                    </th>
                  ))}
                </tr>
              </thead>
              {GRUPOS.map((g) => (
                <tbody key={g.titulo} className="border-t border-(--s-linea)">
                  <tr>
                    <th colSpan={4} scope="colgroup" className="s-mono pt-6 pb-2 font-normal text-(--s-ceniza)">
                      {g.titulo}
                    </th>
                  </tr>
                  {g.filas.map((f) => (
                    <tr key={f.nombre} className="text-(--s-crema-2)">
                      <th scope="row" className="py-2 pr-4 font-normal text-(--s-crema)">
                        {f.nombre}
                      </th>
                      <td className="py-2">
                        <Celda v={f.basico} />
                      </td>
                      <td className="py-2">
                        <Celda v={f.recomendado} />
                      </td>
                      <td className="py-2">
                        <Celda v={f.catalogo} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              ))}
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid gap-12 py-24 md:grid-cols-[1fr_1.4fr] md:py-32">
          <h2 className="s-display s-h2">Extras, si los necesitas.</h2>
          <dl className="border-t border-(--s-linea)">
            {EXTRAS.map((e) => (
              <div key={e.name} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-(--s-linea) py-6">
                <dt className="text-lg font-semibold">{e.name}</dt>
                <dd className="s-display text-2xl">{e.price}</dd>
                <dd className="col-span-2 text-(--s-crema-2)">{e.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <DatosClaros />
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-10">Preguntas sobre los planes.</h2>
          <Preguntas items={planFaqs} />
        </div>
      </section>

      <Cierre titulo={<>¿No sabes cuál elegir? <em>Parte por el demo.</em></>} />
    </>
  )
}
