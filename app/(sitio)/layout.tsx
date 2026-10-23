import { Nav } from './_components/Nav'
import { Footer } from './_components/Footer'
import { CookieConsent } from './_components/CookieConsent'
import { BarraMovil } from './_components/BarraMovil'
import { MovimientoSitio } from './_components/MovimientoSitio'
import { sFontClasses } from './_lib/fonts'
import { SCHEMA } from '@/lib/config'
import { JsonLd } from '@/lib/seo'
import './sitio.css'

/**
 * Layout del sitio principal. Todo lo visual del sitio cuelga de [data-sitio] para que nada
 * se filtre a los demos, que comparten el layout raíz (ver DISENO.md, "Límite con los demos").
 */
export default function SitioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div data-sitio className={sFontClasses}>
      {/* La entidad Sitiazo va solo en páginas del sitio: los demos describen otros negocios. */}
      <JsonLd data={SCHEMA.localBusiness} />
      <JsonLd data={SCHEMA.website} />
      <Nav />
      {children}
      <Footer />
      <CookieConsent />
      <BarraMovil />
      <MovimientoSitio />
    </div>
  )
}
