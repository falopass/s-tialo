import type { Metadata } from 'next'
import { siteUrl } from '@/lib/config'
import SitioLayout from '../(sitio)/layout'
import { Cabecera } from '../(sitio)/_components/Cabecera'
import { CatalogoDemos } from '../(sitio)/_components/CatalogoDemos'
import { Cierre } from '../(sitio)/_components/Cierre'
import { TiraRubros } from '../(sitio)/_components/TiraRubros'
import { catalogo, familias } from './catalogo'

/**
 * Índice del catálogo de demos. Es una página del sitio principal (usa su layout y sus estilos),
 * aunque vive en /demos/: los demos en sí no se tocan y cada enlace a un demo es un <a> con carga
 * completa, para que ningún estilo del sitio llegue al demo. Los datos están en ./catalogo.ts.
 */

/** Los demos de referencia con captura real (ver app/(sitio)/_lib/imagenes.json). */
const DESTACADOS = [
  'fran-wartemberg',
  'los-leones',
  'servimac',
  'la-granja',
  'entre-raices',
  'my-fusion',
  'nailsyus',
  'san-clemente',
  'infinity',
  'mym',
  'ius',
  'vista-hermosa',
  'prosaluddental',
  'fabiana',
]

const DESCRIPCION =
  'Ejemplos de páginas web para pymes por rubro: peluquerías, restobares, talleres, veterinarias, viveros, gimnasios, abogados, cabañas y más. Busca el tuyo.'

export const metadata: Metadata = {
  title: 'Demos por rubro: ejemplos de webs para pymes',
  description: DESCRIPCION,
  alternates: { canonical: siteUrl('/demos/') },
  openGraph: {
    title: 'Demos por rubro | Sitiazo.cl',
    description: DESCRIPCION,
    url: siteUrl('/demos/'),
    images: [{ url: '/sitio/og/demos.jpg', width: 1200, height: 630, alt: 'Demos por rubro de Sitiazo.cl' }],
  },
}

export default function DemosIndex() {
  const demos = catalogo()
  return (
    <SitioLayout>
      <Cabecera
        titulo={
          <>
            {demos.length} demos. <em>Busca el tuyo.</em>
          </>
        }
        bajada="Webs de muestra que armamos para negocios de Chile, con sus fotos y sus datos. Si tu rubro está aquí, ya sabes cómo se vería la tuya."
      />
      <TiraRubros ids={DESTACADOS} etiqueta="Demos destacados" />
      <CatalogoDemos demos={demos} familias={familias()} />
      <Cierre
        titulo={
          <>
            ¿No está tu rubro? <em>Lo armamos igual.</em>
          </>
        }
      />
    </SitioLayout>
  )
}
