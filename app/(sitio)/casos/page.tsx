import type { Metadata } from 'next'
import { siteUrl } from '@/lib/config'
import { cases } from '@/content/cases'
import { BIZ } from '../../rancho-itahue/content'
import { Cabecera } from '../_components/Cabecera'
import { Captura } from '../_components/Captura'
import { Cierre } from '../_components/Cierre'
import { Enlace } from '../_components/Enlace'

const DESCRIPCION =
  'La web de Rancho Itahue y los productos propios del estudio: calculadoras, SaaS y herramientas académicas hechas en Chile.'

export const metadata: Metadata = {
  title: 'Casos y productos digitales hechos en Chile',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/casos/') },
  openGraph: {
    title: 'Casos | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/casos/'),
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Casos de Sitiazo.cl' }],
  },
}

const PROPIOS = cases.filter((c) => c.slug !== 'rancho-itahue')

export default function CasosPage() {
  return (
    <>
      <Cabecera
        titulo={
          <>
            Trabajo real, <em>publicado.</em>
          </>
        }
        bajada="La web de un cliente y los productos que construimos por nuestra cuenta. Todo está en línea y se puede visitar."
      />

      {/* El caso de cliente */}
      <section className="s-wrap pb-24 md:pb-32">
        <Enlace href="/casos/rancho-itahue/" className="group block">
          <Captura
            id="rancho-escritorio"
            eager
            className="w-full rounded-2xl border border-(--s-linea) transition-opacity group-hover:opacity-90"
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2 md:items-end">
            <h2 className="s-display s-h2">
              Rancho Itahue <em>ya tiene su web.</em>
            </h2>
            <p className="text-(--s-crema-2) md:justify-self-end md:text-right">
              Cliente. Multiespacio en {BIZ.city}, publicado en {BIZ.siteDisplay}.
            </p>
          </div>
        </Enlace>
      </section>

      {/* Productos propios del estudio */}
      <section className="border-t border-(--s-linea)">
        <div className="s-wrap py-24 md:py-32">
          <h2 className="s-display s-h2 mb-4">Productos propios.</h2>
          <p className="s-lead mb-14">No son clientes: son herramientas que diseñamos, construimos y mantenemos nosotros.</p>
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {PROPIOS.map((c, i) => (
              <Enlace key={c.slug} href={`/casos/${c.slug}/`} className={`group block ${i % 2 ? 'md:mt-24' : ''}`}>
                <Captura id={c.slug} className="aspect-[3/2] w-full rounded-2xl object-cover" />
                <h3 className="s-display mt-6 text-[clamp(2rem,3.4vw,3rem)] group-hover:italic">{c.name}</h3>
                <p className="mt-2 max-w-[44ch] text-(--s-crema-2)">{c.tagline}.</p>
              </Enlace>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-(--s-linea)">
        <div className="s-wrap flex flex-col gap-6 py-20 md:flex-row md:items-center md:justify-between">
          <p className="s-display s-h3 max-w-[22ch]">¿Buscas uno de tu rubro? Hay demos para cientos de negocios.</p>
          <a href="/demos/" className="s-btn s-btn-secundario">
            Ver demos por rubro
          </a>
        </div>
      </section>

      <Cierre />
    </>
  )
}
