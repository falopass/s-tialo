import type { Metadata } from 'next'
import { siteUrl } from '@/lib/config'
import { faqJsonLd, generalFaqs, planFaqs } from '@/content/faqs'
import { Cabecera } from '../_components/Cabecera'
import { Cierre } from '../_components/Cierre'
import { Preguntas } from '../_components/Preguntas'

const DESCRIPCION =
  'Cuánto cuesta una página web, plazos de entrega, formas de pago y mantención: respuestas claras para pymes chilenas.'

export const metadata: Metadata = {
  title: 'Preguntas frecuentes sobre páginas web para pymes',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/preguntas-frecuentes/') },
  openGraph: {
    title: 'Preguntas frecuentes | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/preguntas-frecuentes/'),
    images: [{ url: '/sitio/og/preguntas-frecuentes.jpg', width: 1200, height: 630, alt: 'Preguntas frecuentes de Sitiazo.cl' }],
  },
}

const faqJsonLdData = faqJsonLd(generalFaqs)

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLdData) }} />

      <Cabecera
        titulo={
          <>
            Preguntas <em>frecuentes.</em>
          </>
        }
        bajada="Plazos, pagos, cambios y lo que necesitas mandarnos. Si tu duda no está aquí, escríbenos."
      />

      <section className="s-wrap grid gap-16 pb-24 md:grid-cols-[0.6fr_1.4fr] md:pb-32">
        <h2 className="s-display s-h3">El proceso.</h2>
        <Preguntas items={generalFaqs} />
        <h2 className="s-display s-h3">Planes y pagos.</h2>
        <Preguntas items={planFaqs} />
      </section>

      <Cierre titulo={<>¿Te quedó alguna duda? <em>Pide tu demo y la vemos.</em></>} />
    </>
  )
}
