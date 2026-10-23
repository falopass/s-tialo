import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cuotas, PAGO_CUOTAS, PAGO_MENSUAL_FORMATTED, PLAN_MENSUAL, PLANS, siteUrl } from '@/lib/config'
import { breadcrumbJsonLd, JsonLd } from '@/lib/seo'
import { catalogo } from '../../../demos/catalogo'
import { calzaRubro, RUBROS, rubrosPublicados } from '@/content/rubros'
import { faqJsonLd } from '@/content/faqs'
import { IMAGENES } from '../../_lib/imagenes'
import { AccionPlan } from '../../_components/AccionPlan'
import { Cabecera } from '../../_components/Cabecera'
import { Cierre } from '../../_components/Cierre'
import { Enlace } from '../../_components/Enlace'
import { Fila } from '../../_components/CatalogoDemos'
import { Preguntas } from '../../_components/Preguntas'
import { SinRiesgo } from '../../_components/SinRiesgo'
import { TarjetaDemo } from '../../_components/TarjetaDemo'

/**
 * Página por rubro (/paginas-web-para/<slug>/): responde búsquedas como
 * "página web para peluquería" con los demos reales del catálogo que calzan.
 * Solo existen rutas con al menos MIN_DEMOS demos (ver content/rubros.ts).
 */
export const dynamicParams = false

export function generateStaticParams() {
  return rubrosPublicados(catalogo()).map((r) => ({ rubro: r.slug }))
}

type Props = { params: Promise<{ rubro: string }> }

function rubroDe(params: Props['params']) {
  return params.then(({ rubro }) => RUBROS.find((r) => r.slug === rubro))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const r = await rubroDe(params)
  if (!r) return {}
  return {
    title: r.titulo,
    description: r.descripcion,
    alternates: { canonical: siteUrl(`/paginas-web-para/${r.slug}/`) },
    openGraph: {
      title: r.titulo,
      description: r.descripcion,
      url: siteUrl(`/paginas-web-para/${r.slug}/`),
      images: [{ url: '/sitio/og/demos.jpg', width: 1200, height: 630, alt: r.titulo }],
    },
  }
}

export default async function RubroPage({ params }: Props) {
  const r = await rubroDe(params)
  if (!r) notFound()

  const todos = catalogo()
  const propios = todos
    .filter((d) => calzaRubro(r, d.rubro))
    .sort((a, b) => b.creado.localeCompare(a.creado))
  const conFoto = IMAGENES.filter((i) => i.demo && propios.some((d) => d.slug === i.demo)).slice(0, 3)
  const plan = PLANS[r.plan]
  const faqs = r.preguntas.map((p, i) => ({ id: `${r.slug}-${i}`, question: p.pregunta, answer: p.respuesta }))

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Inicio', url: siteUrl('/') },
          { name: 'Webs por rubro', url: siteUrl('/paginas-web-para/') },
          { name: r.titulo, url: siteUrl(`/paginas-web-para/${r.slug}/`) },
        ])}
      />
      <JsonLd data={faqJsonLd(faqs)} />

      <Cabecera titulo={r.titulo} bajada={r.intro} />

      <section className="s-wrap py-24 md:py-32">
        <h2 className="s-display s-h2 mb-14 max-w-[20ch]">
          {propios.length} demos de {r.nombre} que ya armamos.
        </h2>
        {conFoto.length > 0 && (
          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conFoto.map((i) => (
              <TarjetaDemo key={i.id} id={i.id} />
            ))}
          </div>
        )}
        <ul className="border-b border-(--s-linea)">
          {propios.slice(0, 24).map((d) => (
            <Fila key={d.slug} d={d} />
          ))}
        </ul>
        <p className="mt-10">
          <a href="/demos/" className="s-link">
            Ver los {todos.length} demos del catálogo
          </a>
        </p>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-14 max-w-[22ch]">Lo que necesita la web de {r.nombre}.</h2>
          <dl className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {r.necesita.map((n) => (
              <div key={n.titulo}>
                <dt className="text-lg font-semibold text-(--s-crema)">{n.titulo}</dt>
                <dd className="mt-2 text-(--s-crema-2)">{n.texto}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap grid gap-12 py-24 md:py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="s-display s-h2">El plan que te recomendamos.</h2>
            <p className="s-lead mt-5">{r.porQue}</p>
            <p className="mt-8">
              <Enlace href="/planes/" className="s-link">
                Comparar los tres planes
              </Enlace>
            </p>
          </div>
          <article className="rounded-3xl border border-(--s-amarillo) bg-(--s-tinta-2) p-7 md:p-10">
            <h3 className="text-lg font-semibold">Plan {plan.name}</h3>
            <p className="s-display mt-4 text-[clamp(3rem,5vw,4.5rem)] leading-none">{plan.priceFormatted}</p>
            <p className="mt-2 text-sm text-(--s-crema-2)">
              o {PAGO_CUOTAS} cuotas de {cuotas(plan.price).montoFormatted} sin interés
            </p>
            {r.plan === PLAN_MENSUAL && (
              <p className="mt-1 text-sm text-(--s-crema-2)">o {PAGO_MENSUAL_FORMATTED} al mes</p>
            )}
            <div className="mt-8">
              <AccionPlan plan={r.plan} primario />
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <SinRiesgo />
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-12">Preguntas de {r.nombre}.</h2>
          <Preguntas items={faqs} />
        </div>
      </section>

      <Cierre
        titulo={
          <>
            Pide el demo de <em>{r.miNegocio.replace(/^mi/, 'tu')}</em>.
          </>
        }
        origen={`rubro-${r.slug}`}
        negocioPorDefecto={r.miNegocio}
      />
    </>
  )
}
