import type { Metadata } from 'next'
import { PLANS, siteUrl } from '@/lib/config'
import { processSteps } from '@/content/process'
import { Cabecera } from '../_components/Cabecera'
import { CapturaRevela } from '../_components/Captura'
import { Cierre } from '../_components/Cierre'
import { Enlace } from '../_components/Enlace'

const DESCRIPCION =
  'Cómo se hace la página web de tu negocio: primero ves un demo gratis en 48 horas y, si te gusta, la publicamos en 7 días hábiles.'

export const metadata: Metadata = {
  title: 'Cómo funciona: tu página web lista en 7 días',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/como-funciona/') },
  openGraph: {
    title: 'Cómo funciona: tu página web en 7 días | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/como-funciona/'),
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Cómo funciona Sitiazo.cl' }],
  },
}

export default function ComoFuncionaPage() {
  return (
    <>
      <Cabecera
        titulo={
          <>
            Primero ves tu web. <em>Después decides.</em>
          </>
        }
        bajada={`El demo es gratis y llega en 48 horas. Si te gusta, la publicamos en ${PLANS.basico.deliveryLabel} con el plan Básico.`}
      />

      {/* Antes de pagar: el demo */}
      <section className="s-wrap grid items-center gap-12 pb-24 md:grid-cols-[1.2fr_0.8fr] md:pb-32">
        <div className="s-revela">
          <h2 className="s-display s-h2 max-w-[14ch]">Antes de pagar, un demo con tus datos.</h2>
          <div className="s-prosa mt-6">
            <p>
              Nos mandas por WhatsApp tu Instagram o tu ficha de Google. Con eso vemos tu rubro, tus fotos y cómo te
              encuentran hoy.
            </p>
            <p>
              En 48 horas te llega el link de tu demo: una web armada con tus fotos y tus datos reales, para que la
              abras desde el celular y la muestres a quien quieras. Verla no cuesta nada.
            </p>
          </div>
          <p className="mt-8">
            <a href="/demos/" className="s-link">
              Ver demos que ya armamos
            </a>
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <CapturaRevela
            id="los-leones"
            sizes="(min-width: 768px) 20vw, 50vw"
            className="aspect-[780/1688] overflow-hidden rounded-[22px] border border-(--s-linea)"
            imgClassName="object-cover"
          />
          <CapturaRevela
            id="entre-raices"
            sizes="(min-width: 768px) 20vw, 50vw"
            className="mt-12 aspect-[780/1688] overflow-hidden rounded-[22px] border border-(--s-linea)"
            imgClassName="object-cover"
          />
        </div>
      </section>

      {/* Después del sí: los pasos reales hasta publicar */}
      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-14 max-w-[18ch]">Si dices que sí, esto pasa en una semana.</h2>
          <ol className="grid gap-10 md:grid-cols-4 md:gap-8">
            {processSteps.map((p) => (
              <li key={p.title} className="s-revela border-t border-(--s-linea) pt-5">
                <p className="s-mono text-(--s-amarillo)">{p.time}</p>
                <h3 className="s-display mt-3 text-[2rem] leading-tight">{p.title}</h3>
                <p className="mt-2 text-(--s-crema-2)">{p.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-[60ch] text-(--s-crema-2)">
            El plan Recomendado toma {PLANS.recomendado.deliveryLabel} y el Catálogo, {PLANS.catalogo.deliveryLabel}.{' '}
            <Enlace href="/planes/" className="s-link">
              Ver planes
            </Enlace>
          </p>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap flex flex-col gap-6 py-20 md:flex-row md:items-center md:justify-between">
          <p className="s-display s-h3 max-w-[24ch]">¿Te quedan dudas sobre pagos, plazos o cambios?</p>
          <Enlace href="/preguntas-frecuentes/" className="s-btn s-btn-secundario">
            Ver preguntas frecuentes
          </Enlace>
        </div>
      </section>

      <Cierre />
    </>
  )
}
