import type { Metadata } from 'next'
import { siteUrl } from '@/lib/config'
import { catalogo } from '../../demos/catalogo'
import { calzaRubro, rubrosPublicados } from '@/content/rubros'
import { Cabecera } from '../_components/Cabecera'
import { Cierre } from '../_components/Cierre'
import { Enlace } from '../_components/Enlace'

const DESCRIPCION =
  'Páginas web para restaurantes, cafeterías, peluquerías, talleres, veterinarias, cabañas y más rubros, con demos reales de negocios de Chile.'

export const metadata: Metadata = {
  title: 'Páginas web por rubro',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/paginas-web-para/') },
  openGraph: {
    title: 'Páginas web por rubro | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/paginas-web-para/'),
    images: [{ url: '/sitio/og/demos.jpg', width: 1200, height: 630, alt: 'Páginas web por rubro de Sitiazo.cl' }],
  },
}

/** Índice de las páginas por rubro: solo las que tienen MIN_DEMOS demos reales o más. */
export default function PaginasPorRubro() {
  const demos = catalogo()
  const rubros = rubrosPublicados(demos)
  return (
    <>
      <Cabecera
        titulo={
          <>
            Webs por rubro. <em>Busca el tuyo.</em>
          </>
        }
        bajada="Lo que necesita la página web de cada tipo de negocio, con demos reales que ya armamos."
      />
      <section className="s-wrap py-24 md:py-32">
        <ul className="border-b border-(--s-linea)">
          {rubros.map((r) => (
            <li key={r.slug} className="border-t border-(--s-linea)">
              <Enlace
                href={`/paginas-web-para/${r.slug}/`}
                className="group flex items-baseline justify-between gap-6 py-6"
              >
                <span className="text-xl font-medium text-(--s-crema) transition-colors group-hover:text-(--s-amarillo) md:text-2xl">
                  {r.nombre[0].toLocaleUpperCase('es') + r.nombre.slice(1)}
                </span>
                <span className="s-mono shrink-0 text-(--s-ceniza)">
                  {demos.filter((d) => calzaRubro(r, d.rubro)).length} demos
                </span>
              </Enlace>
            </li>
          ))}
        </ul>
      </section>
      <Cierre />
    </>
  )
}
